import path from 'path';
import fs from 'fs';
import TelegramBot from 'node-telegram-bot-api';
import {
  connectDB,
  deleteLicense,
  exportDB,
  getAllUsers,
  getUserCount,
  lookupLicense,
  lookupTelegramID,
  updateLicense,
} from './database/database';
import { createExpressApp } from './API/app';
import { adminCheck, checkUnix, combineUnix } from './utils/apiutil';
import { config } from './configs/config';
import { generateInvoice } from './API/routes/payment';
import { messages } from './configs/messages.config';
import { formatDate, sendMessageToUser } from './utils/botutil';

connectDB();
createExpressApp();

process.env.NTBA_FIX_350 = 'true';

export const bot = new TelegramBot(config.telegramToken, { polling: true });

const BANNER = `
███████ ███████       ██████   ██████  ████████ 
██         ███        ██   ██ ██    ██    ██    
█████     ███   █████ ██████  ██    ██    ██    
██       ███          ██   ██ ██    ██    ██    
███████ ███████       ██████   ██████     ██
                            by t.me/credit200                                                        
`;
console.log(`\x1b[34m${BANNER}\x1b[0m`);

export const tokenMap = new Map();
const botData = new Map();
export const userLanguage = new Map<number, string>();

export const getMessage = (
  chatId: number,
  path: string,
  replacements: Record<string, string> = {}
): string => {
  const lang = userLanguage.get(chatId) || 'en';
  const keys = path.split('.');
  let message = keys.reduce((obj, key) => (obj as any)?.[key], messages[lang]) as unknown as string;

  if (!message) {
    console.error(`Message path not found: ${path}`);
    return `Message not found for path: ${path}`;
  }

  return Object.keys(replacements).reduce(
    (msg, key) => msg.replace(`{{${key}}}`, replacements[key]),
    message
  );
};

async function sendStartMessage(chatId: TelegramBot.ChatId): Promise<void> {
  if (typeof chatId !== 'number' && typeof chatId !== 'string') {
    throw new Error('Invalid chatId provided.');
  }

  const chatIdString = Number(chatId);
  const userLang = userLanguage.get(chatIdString) || 'en';
  const langMessages = messages[userLang];

  const startMessage = await bot.sendMessage(
    chatId,
    `▶️ ${langMessages.start.welcome
      .replace('{{appName}}', config.brandsConfig.appName)
      .replace('{{description}}', config.brandsConfig.description)
      .replace('{{features}}', config.brandsConfig.features.join('\n└ '))}`,
    {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [
            { text: langMessages.start.menu, callback_data: 'menu' },
            { text: langMessages.start.languageSelect, callback_data: 'select_language' },
          ],
          [
            { text: langMessages.start.accountInfo, callback_data: 'account_info' },
            { text: langMessages.start.redeem, callback_data: 'redeem' },
            { text: langMessages.start.purchase, callback_data: 'purchase' },
          ],
        ],
      },
    }
  );
  botData.set(chatId, { startMessageId: startMessage.message_id });
}

bot.setMyCommands([
  { command: 'start', description: 'Start the bot' },
  { command: 'id', description: 'Retrieve the current channel ID' },
  { command: 'export', description: 'Export the database to CSV (Admin)' },
]);

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  userLanguage.set(chatId, userLanguage.get(chatId) || 'en');
  await sendStartMessage(chatId);
});

bot.onText(/\/id/, async (msg) => {
  bot.sendMessage(msg.chat.id, `Channel ID: \`${msg.chat.id}\``, { parse_mode: 'Markdown' });
});

bot.onText(/\/export/, async (msg) => {
  const chatId = msg.chat.id;
  if (!(await adminCheck(chatId))) return;

  try {
    const startTime = process.hrtime();
    const exportResult = await exportDB();

    if (exportResult.status === 'success') {
      const timestamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
      const csvFileName = `export_${timestamp}.csv`;
      const csvFilePath = path.resolve(__dirname, csvFileName);
      const userCount = await getUserCount();
      const fileOptions = { filename: csvFileName, contentType: 'text/csv' };
      const [seconds, nanoseconds] = process.hrtime(startTime);
      const duration = (seconds * 1000 + nanoseconds / 1e6).toFixed(2);

      await bot.sendDocument(
        chatId,
        csvFilePath,
        {
          caption: `Total Users: ${userCount}\nTime taken to export: ${duration} ms`,
          parse_mode: 'Markdown',
        },
        fileOptions
      );
      fs.unlink(csvFilePath, (err) => err && console.error('Error deleting CSV:', err));
    } else {
      await bot.sendMessage(chatId, `Failed to export CSV: ${exportResult.error}`);
    }
  } catch (error) {
    console.error('Error during export:', error);
    await bot.sendMessage(chatId, 'An error occurred while exporting the CSV.');
  }
});

bot.on('polling_error', (error: Error) => {
  console.error('Polling error:', error);
});

const ITEMS_PER_PAGE = 9;
const INTERVAL_CHECK_EXPIRATION = 60 * 1000; // 1 minute

bot.on('callback_query', async (callbackQuery) => {
  const chatId: number = callbackQuery.from.id;
  const callback: string | undefined = callbackQuery.data;

  if (!callback) return;

  if (callback === 'select_language' || callback.startsWith('page_')) {
    handleLanguageSelection(chatId, callback);
  } else if (callback.startsWith('lang_')) {
    handleLanguageSetting(chatId, callback);
  } else if (callback === 'menu') {
    handleMenu(chatId);
  } else if (callback === 'account_info') {
    handleAccountInfo(chatId);
  } else if (callback === 'start') {
    sendStartMessage(chatId);
  } else if (callback === 'redeem') {
    handleRedeem(chatId);
  } else if (callback === 'purchase') {
    handlePurchase(chatId);
  }
});

function getLanguagesList(): { text: string; callback_data: string }[] {
  return [
    // Global Languages
    { text: '🇺🇸 English', callback_data: 'lang_en' },
    { text: '🇨🇳 Mandarin Chinese', callback_data: 'lang_zh' },
    { text: '🇪🇸 Spanish', callback_data: 'lang_es' },
    { text: '🇮🇳 Hindi', callback_data: 'lang_hi' },
    { text: '🇸🇦 Arabic', callback_data: 'lang_ar' },
    { text: '🇫🇷 French', callback_data: 'lang_fr' },
    { text: '🇵🇹 Portuguese', callback_data: 'lang_pt' },
    { text: '🇷🇺 Russian', callback_data: 'lang_ru' },

    // Asian Languages
    { text: '🇮🇳 Bengali', callback_data: 'lang_bn' },
    { text: '🇮🇩 Indonesian', callback_data: 'lang_id' },
    { text: '🇯🇵 Japanese', callback_data: 'lang_ja' },
    { text: '🇰🇷 Korean', callback_data: 'lang_ko' },
    { text: '🇮🇳 Punjabi', callback_data: 'lang_pa' },
    { text: '🇮🇳 Tamil', callback_data: 'lang_ta' },
    { text: '🇮🇳 Telugu', callback_data: 'lang_te' },
    { text: '🇵🇰 Urdu', callback_data: 'lang_ur' },
    { text: '🇻🇳 Vietnamese', callback_data: 'lang_vi' },

    // European Languages
    { text: '🇩🇪 German', callback_data: 'lang_de' },
    { text: '🇮🇹 Italian', callback_data: 'lang_it' },
    { text: '🇳🇱 Dutch', callback_data: 'lang_nl' },
    { text: '🇵🇱 Polish', callback_data: 'lang_pl' },
    { text: '🇸🇪 Swedish', callback_data: 'lang_sv' },
    { text: '🇺🇦 Ukrainian', callback_data: 'lang_uk' },

    // Additional Languages
    { text: '🇮🇷 Persian (Farsi)', callback_data: 'lang_fa' },
    { text: '🇮🇱 Hebrew', callback_data: 'lang_he' },
    { text: '🇹🇷 Turkish', callback_data: 'lang_tr' },
  ];
}

function formatLanguageKeyboard(
  languages: { text: string; callback_data: string }[],
  currentPage: number,
  totalPages: number
) {
  const pageLanguages = languages.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );
  const inlineKeyboard = [];

  for (let i = 0; i < pageLanguages.length; i += 3) {
    inlineKeyboard.push(pageLanguages.slice(i, i + 3));
  }

  const navigationButtons = [];
  if (currentPage > 0) {
    navigationButtons.push({ text: '<', callback_data: `page_${currentPage - 1}` });
  }
  navigationButtons.push({ text: `${currentPage + 1} / ${totalPages}`, callback_data: 'noop' });
  if (currentPage < totalPages - 1) {
    navigationButtons.push({ text: '>', callback_data: `page_${currentPage + 1}` });
  }
  inlineKeyboard.push(navigationButtons);

  return inlineKeyboard;
}

async function handleLanguageSelection(chatId: number, callback: string) {
  const languages = getLanguagesList();
  const currentPage = callback.startsWith('page_') ? parseInt(callback.split('_')[1], 10) : 0;
  const totalPages = Math.ceil(languages.length / ITEMS_PER_PAGE);
  const inlineKeyboard = formatLanguageKeyboard(languages, currentPage, totalPages);

  if (callback === 'select_language') {
    const message = await bot.sendMessage(chatId, 'Please select a language:', {
      reply_markup: { inline_keyboard: inlineKeyboard },
    });
    botData.set(chatId, { messageId: message.message_id });
  } else {
    const messageId = botData.get(chatId)?.messageId;
    if (messageId) {
      await bot.editMessageText('Please select a language:', {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: { inline_keyboard: inlineKeyboard },
      });
    }
  }
}

async function handleLanguageSetting(chatId: number, callback: string) {
  const selectedLang = callback.split('_')[1];
  userLanguage.set(chatId, selectedLang);
  const langMessages = messages[selectedLang] || messages['en'];
  const messageId = botData.get(chatId)?.messageId;

  if (messageId) {
    await bot.editMessageText(`${langMessages.menu.languageSet}`, {
      chat_id: chatId,
      message_id: messageId,
    });
  }
}

async function safeDeleteMessage(chatId: number, messageId: number) {
  try {
    await bot.deleteMessage(chatId, messageId);
  } catch (e) {}
}

async function handleMenu(chatId: number) {
  const startMessageData = botData.get(chatId);
  if (startMessageData && startMessageData.startMessageId) {
    await safeDeleteMessage(chatId, startMessageData.startMessageId);
  }

  const data = await lookupTelegramID(`${chatId}`);

  if (!data) {
    bot.sendMessage(chatId, getMessage(chatId, 'purchase.please'), {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: getMessage(chatId, 'start.purchase'), callback_data: 'purchase' }],
        ],
      },
    });
    return;
  }

  const baseKeyboard = {
    inline_keyboard: [[{ text: 'UNDER_DEVELOPMENT', callback_data: 'DEV' }]], // add your own callbacks for commands here (e.g., [{ text: 'My Command', callback_data: 'MY_COMMAND' }])
  };

  if (await adminCheck(chatId)) {
    baseKeyboard.inline_keyboard.push(
      [{ text: getMessage(chatId, 'menu.create'), callback_data: 'NEW' }],
      [{ text: getMessage(chatId, 'menu.delete'), callback_data: 'DEL' }],
      [{ text: getMessage(chatId, 'menu.lookupLicense'), callback_data: 'LOOKUPLICENSE' }],
      [{ text: getMessage(chatId, 'menu.lookupTelegramID'), callback_data: 'LOOKUPTID' }]
    );
  }

  baseKeyboard.inline_keyboard.push([
    { text: getMessage(chatId, 'purchase.backToStart'), callback_data: 'start' },
  ]);

  const sentMessage = await bot.sendMessage(chatId, getMessage(chatId, 'menu.title'), {
    parse_mode: 'Markdown',
    reply_markup: baseKeyboard,
  });

  botData.set(chatId, { mainMenuMessageId: sentMessage.message_id });

  bot.once('callback_query', async function handleQuery(callbackQuery) {
    if (callbackQuery.from.id !== chatId) return;

    const callback = callbackQuery.data;

    if (callback === 'cancel') {
      await safeDeleteMessage(chatId, sentMessage.message_id);
      return;
    }
  });
}

async function handleAccountInfo(chatId: number) {
  const data = await lookupTelegramID(`${chatId}`);
  if (!data) {
    await bot.sendMessage(chatId, getMessage(chatId, 'errors.licenseNotFound'), {
      parse_mode: 'Markdown',
    });
    return;
  }

  const accountInfoMessage = `
${getMessage(chatId, 'accountInfo.title')}

${getMessage(chatId, 'accountInfo.fields.creationDate')}: *${await formatDate(data.creationDate)}*
${getMessage(chatId, 'accountInfo.fields.expirationDate')}: *${await formatDate(
    data.expirationDate
  )}*
${getMessage(chatId, 'accountInfo.fields.creatorID')}: \`${data.creatorID}\`
${getMessage(chatId, 'accountInfo.fields.license')}: \`${data.license}\`
${getMessage(chatId, 'accountInfo.fields.telegramID')}: \`${data.telegramID}\`
${getMessage(chatId, 'accountInfo.fields.total')}: *${data.total}*`;

  await bot.sendMessage(chatId, accountInfoMessage, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [{ text: getMessage(chatId, 'accountInfo.returnToStart'), callback_data: 'start' }],
      ],
    },
  });
}

async function handleRedeem(chatId: number) {
  const startMessageData = botData.get(chatId);
  if (startMessageData && startMessageData.startMessageId) {
    await safeDeleteMessage(chatId, startMessageData.startMessageId);
  }

  const cancelMSG = getMessage(chatId, 'redeem.cancel');

  const redeemMessage = await bot.sendMessage(chatId, getMessage(chatId, 'redeem.enterCode'), {
    reply_markup: {
      inline_keyboard: [[{ text: cancelMSG, callback_data: 'cancel_redeem' }]],
    },
  });

  const redeemListener = async (msg: any) => {
    if (msg.chat.id !== chatId || !msg.text) return;

    const license = msg.text.trim();
    if (!license.match(/^[a-zA-Z0-9]+$/)) {
      bot.sendMessage(chatId, getMessage(chatId, 'errors.invalidLicense'));
      return;
    }

    const data = await lookupLicense(license);

    if (!data) {
      bot.sendMessage(chatId, getMessage(chatId, 'errors.licenseNotFound'));
      return;
    }

    if (data.telegramID !== '') {
      bot.once('callback_query', async (callbackQuery) => {
        const action = callbackQuery.data;
        const message_id = callbackQuery.message?.message_id;
        const from_chat_id = callbackQuery.message?.chat.id;

        if (action === 'return_to_menu' && message_id && from_chat_id) {
          await bot.deleteMessage(from_chat_id, message_id);
          await sendStartMessage(from_chat_id);
        }
      });

      return;
    }

    const lookup = await lookupTelegramID(`${chatId}`);
    if (lookup) {
      const newTime = combineUnix(data.expirationDate, lookup.expirationDate);
      const time = checkUnix(newTime);

      const newData = {
        telegramID: `${chatId}`,
        expirationDate: newTime.toString(),
      };

      const result = await updateLicense(lookup.license, newData);
      if (result.status === 'failed') {
        console.log(result.error);
      }

      await deleteLicense(license, 1);

      bot.sendMessage(chatId, `Your license was accepted. You now have ${time}`);
    } else {
      const newData = {
        telegramID: `${chatId}`,
      };
      const result = await updateLicense(license, newData);
      if (result.status === 'failed') {
        console.log(result.error);
      }
      const time = checkUnix(data.expirationDate);
      bot.sendMessage(chatId, `Redeemed ${time}`);
    }

    bot.removeListener('message', redeemListener);
    await safeDeleteMessage(chatId, redeemMessage.message_id);
    sendStartMessage(chatId);
  };

  bot.on('message', redeemListener);

  bot.once('callback_query', async (cancelCallbackQuery) => {
    if (cancelCallbackQuery.data === 'cancel_redeem' && cancelCallbackQuery.from.id === chatId) {
      bot.removeListener('message', redeemListener);
      await safeDeleteMessage(chatId, redeemMessage.message_id);
      sendStartMessage(chatId);
    }
  });
}

async function handlePurchase(chatId: number) {
  try {
    const startMessageData = botData.get(chatId);
    if (startMessageData?.startMessageId) {
      await safeDeleteMessage(chatId, startMessageData.startMessageId);
    }

    const localizedPurchaseOptions = {
      WEEK: getMessage(chatId, 'purchase.week', { priceWEEK: config.prices.WEEK.toString() }),
      MONTH: getMessage(chatId, 'purchase.month', { priceMONTH: config.prices.MONTH.toString() }),
      LIFETIME: getMessage(chatId, 'purchase.lifetime', {
        priceLIFETIME: config.prices.LIFETIME.toString(),
      }),
    };

    const purchaseMessage = await bot.sendMessage(
      chatId,
      getMessage(chatId, 'purchase.chooseOption'),
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: localizedPurchaseOptions.WEEK, callback_data: 'WEEK' }],
            [{ text: localizedPurchaseOptions.MONTH, callback_data: 'MONTH' }],
            [{ text: localizedPurchaseOptions.LIFETIME, callback_data: 'LIFETIME' }],
            [{ text: getMessage(chatId, 'purchase.backToStart'), callback_data: 'start2' }],
          ],
        },
      }
    );

    /**
     * Handles callback query responses for purchase options.
     *
     * @param {object} callbackQuery - The callback query object.
     */
    const purchaseListener = async (callbackQuery: TelegramBot.CallbackQuery) => {
      try {
        if (callbackQuery.from.id !== chatId) return;

        const { data: selectedPlan } = callbackQuery;

        if (selectedPlan === 'start2') {
          await safeDeleteMessage(chatId, purchaseMessage.message_id);
          sendStartMessage(chatId);
          return;
        }

        if (selectedPlan && ['WEEK', 'MONTH', 'LIFETIME'].includes(selectedPlan)) {
          const amount = config.prices[selectedPlan as keyof typeof config.prices];
          const planSettings = {
            WEEK: { key: 'weeks', value: 1 },
            MONTH: { key: 'months', value: 1 },
            LIFETIME: { key: 'months', value: 99 },
          }[selectedPlan];

          const invoice = await generateInvoice(amount);

          if (invoice) {
            const invoiceData = JSON.parse(invoice);
            tokenMap.set(invoiceData.token, {
              chatId,
              settings: planSettings ? [planSettings.key, planSettings.value] : [],
            });

            const messageText = getMessage(chatId, 'purchase.selectedPlan', {
              plan: selectedPlan,
              payLink: invoiceData.payLink,
              expiryDate: new Date(invoiceData.expiredAt * 1000).toLocaleString(),
            });

            await bot.sendMessage(chatId, messageText, { parse_mode: 'Markdown' });
          } else {
            await bot.sendMessage(chatId, getMessage(chatId, 'errors.purchaseFailed'));
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Error handling purchase callback: ${error.message}`, error);
        } else {
          console.error('Error handling purchase callback:', error);
        }
      } finally {
        bot.removeListener('callback_query', purchaseListener);
        await safeDeleteMessage(chatId, purchaseMessage.message_id);
      }
    };

    bot.on('callback_query', purchaseListener);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error handling purchase: ${error.message}`, error);
    } else {
      console.error('Error handling purchase:', error);
    }
  }
}

function isLicenseExpired(expirationDate: string): boolean {
  return Date.now() >= parseInt(expirationDate, 10) * 1000;
}

setInterval(async () => {
  try {
    const allUsers = await getAllUsers();
    if (!allUsers) {
      console.error('Error: getAllUsers returned null or undefined.');
      return;
    }
    for (const user of allUsers) {
      if (isLicenseExpired(user.expirationDate)) {
        await deleteLicense(user.license, 1);
        if (user.telegramID) {
          await sendMessageToUser(
            user.telegramID.toString(),
            getMessage(Number(user.telegramID), 'errors.licenseExpired')
          );
        }
      }
    }
  } catch (error) {
    console.error('Error checking for expired licenses:', error);
  }
}, INTERVAL_CHECK_EXPIRATION);

export { sendMessageToUser };
