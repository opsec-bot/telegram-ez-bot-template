import {
  connectDB,
  deleteLicense,
  getAllUsers,
  lookupLicense,
  lookupTelegramID,
  updateLicense,
} from './database/database';
import { createExpressApp } from './API/app';
import TelegramBot from 'node-telegram-bot-api';
import { adminCheck, checkUnix, combineUnix } from './utils/apiutil';
import { config } from './configs/config';
import { generateInvoice } from './API/routes/payment';
import { messages } from './configs/messages.config';
import { sendMessageToUser } from './utils/botutil';

connectDB();
createExpressApp();

export const bot = new TelegramBot(config.telegramToken, {
  polling: true,
});

const banner = `
███████ ███████       ██████   ██████  ████████ 
██         ███        ██   ██ ██    ██    ██    
█████     ███   █████ ██████  ██    ██    ██    
██       ███          ██   ██ ██    ██    ██    
███████ ███████       ██████   ██████     ██
                            by t.me/credit200                                                        
`;
console.log(`\x1b[34m${banner}\x1b[0m`);

export const tokenMap = new Map();
const botData = new Map();

export const userLanguage = new Map<number, string>();

type MessagesType = {
  [key: string]: {
    [key: string]: any;
  };
};

export const getMessage = (
  chatId: number,
  path: string,
  replacements: Record<string, string> = {}
) => {
  const lang = userLanguage.get(chatId) || 'en';
  const keys = path.split('.');
  let message = keys.reduce(
    (obj, key) => {
      if (obj && obj[key] !== undefined) {
        return obj[key];
      } else {
        console.error(`Message path not found: ${path}`);
        return null;
      }
    },
    messages[lang] as MessagesType[keyof MessagesType]
  ) as unknown as string;

  if (!message) {
    return `Message not found for path: ${path}`;
  }

  Object.keys(replacements).forEach((key) => {
    message = message.replace(`{{${key}}}`, replacements[key]);
  });

  return message;
};

async function sendStartMessage(chatId: TelegramBot.ChatId) {
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
  { command: 'id', description: 'Retrive the current channel id' },
]);

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  if (!userLanguage.has(chatId)) {
    userLanguage.set(chatId, 'en');
  }

  const userLang = userLanguage.get(chatId) || 'en';
  const langMessages = messages[userLang];

  const formattedFeatures = config.brandsConfig.features.join('\n         └ ');

  const welcomeMessage = langMessages.start.welcome
    .replace('{{appName}}', config.brandsConfig.appName)
    .replace('{{description}}', config.brandsConfig.description)
    .replace('{{features}}', `        └ ${formattedFeatures}`);

  await bot.sendMessage(chatId, welcomeMessage, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [
          { text: getMessage(chatId, 'start.menu'), callback_data: 'menu' },
          { text: getMessage(chatId, 'start.languageSelect'), callback_data: 'select_language' },
        ],
        [
          { text: getMessage(chatId, 'start.accountInfo'), callback_data: 'account_info' },
          { text: getMessage(chatId, 'start.redeem'), callback_data: 'redeem' },
          { text: getMessage(chatId, 'start.purchase'), callback_data: 'purchase' },
        ],
      ],
    },
  });
});

bot.onText(/\/id/, async (msg) => {
  bot.sendMessage(msg.chat.id, `Channel ID: \`${msg.chat.id}\``, { parse_mode: 'Markdown' });
});

bot.on('polling_error', (error: Error) => {
  console.error(error);
});

bot.on('callback_query', async (callbackQuery) => {
  const chatId = callbackQuery.from.id;
  const callback = callbackQuery.data;

  function formatDate(unix: number): string {
    const date = new Date(unix * 1000);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  async function safeDeleteMessage(chatId: number, messageId: number) {
    try {
      await bot.deleteMessage(chatId, messageId);
    } catch (e) {}
  }

  if ((callback && callback === 'select_language') || (callback && callback.startsWith('page_'))) {
    const languages = [
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
      { text: '🇮🇳 Marathi', callback_data: 'lang_mr' },
      { text: '🇮🇳 Gujarati', callback_data: 'lang_gu' },
      { text: '🇮🇳 Kannada', callback_data: 'lang_kn' },
      { text: '🇮🇳 Malayalam', callback_data: 'lang_ml' },
      { text: '🇵🇰 Urdu', callback_data: 'lang_ur' },
      { text: '🇻🇳 Vietnamese', callback_data: 'lang_vi' },
      { text: '🇵🇭 Filipino/Tagalog', callback_data: 'lang_tl' },
      { text: '🇹🇭 Thai', callback_data: 'lang_th' },
      { text: '🇲🇲 Burmese', callback_data: 'lang_my' },
      { text: '🇱🇰 Sinhala', callback_data: 'lang_si' },
      { text: '🇳🇵 Nepali', callback_data: 'lang_ne' },
      { text: '🇰🇭 Khmer', callback_data: 'lang_km' },
      { text: '🇱🇦 Lao', callback_data: 'lang_lo' },
      { text: '🇲🇳 Mongolian', callback_data: 'lang_mn' },
      { text: '🇨🇳 Wu Chinese (Shanghainese)', callback_data: 'lang_wu' },
      { text: '🇮🇩 Javanese', callback_data: 'lang_jv' },

      // African Languages
      { text: '🇳🇬 Hausa', callback_data: 'lang_ha' },
      { text: '🇳🇬 Yoruba', callback_data: 'lang_yo' },
      { text: '🇿🇦 Swahili', callback_data: 'lang_sw' },
      { text: '🇪🇹 Amharic', callback_data: 'lang_am' },
      { text: '🇪🇬 Egyptian Arabic', callback_data: 'lang_eg_ar' },

      // European Languages
      { text: '🇩🇪 German', callback_data: 'lang_de' },
      { text: '🇮🇹 Italian', callback_data: 'lang_it' },
      { text: '🇳🇱 Dutch', callback_data: 'lang_nl' },
      { text: '🇵🇱 Polish', callback_data: 'lang_pl' },
      { text: '🇸🇪 Swedish', callback_data: 'lang_sv' },
      { text: '🇺🇦 Ukrainian', callback_data: 'lang_uk' },
      { text: '🇬🇷 Greek', callback_data: 'lang_el' },
      { text: '🇷🇴 Romanian', callback_data: 'lang_ro' },
      { text: '🇭🇺 Hungarian', callback_data: 'lang_hu' },
      { text: '🇨🇿 Czech', callback_data: 'lang_cs' },
      { text: '🇸🇰 Slovak', callback_data: 'lang_sk' },
      { text: '🇧🇬 Bulgarian', callback_data: 'lang_bg' },
      { text: '🇭🇷 Croatian', callback_data: 'lang_hr' },
      { text: '🇸🇮 Slovenian', callback_data: 'lang_sl' },
      { text: '🇱🇹 Lithuanian', callback_data: 'lang_lt' },
      { text: '🇱🇻 Latvian', callback_data: 'lang_lv' },
      { text: '🇪🇪 Estonian', callback_data: 'lang_et' },
      { text: '🇦🇱 Albanian', callback_data: 'lang_sq' },
      { text: '🇹🇷 Turkish', callback_data: 'lang_tr' },

      // Additional Languages
      { text: '🇮🇷 Persian (Farsi)', callback_data: 'lang_fa' },
      { text: '🇮🇱 Hebrew', callback_data: 'lang_he' },
      { text: '🇦🇿 Azerbaijani', callback_data: 'lang_az' },
      { text: '🇦🇲 Armenian', callback_data: 'lang_hy' },
      { text: '🇬🇪 Georgian', callback_data: 'lang_ka' },
      { text: '🇺🇿 Uzbek', callback_data: 'lang_uz' },
      { text: '🇰🇿 Kazakh', callback_data: 'lang_kk' },
      { text: '🇰🇬 Kyrgyz', callback_data: 'lang_ky' },
      { text: '🇹🇲 Turkmen', callback_data: 'lang_tk' },
      { text: '🇹🇯 Tajik', callback_data: 'lang_tg' },
      { text: '🇹🇱 Tibetan', callback_data: 'lang_bo' },
    ];

    const itemsPerPage = 9;
    const currentPage = callback.startsWith('page_') ? parseInt(callback.split('_')[1], 10) : 0;
    const totalPages = Math.ceil(languages.length / itemsPerPage);

    const pageLanguages = languages.slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    );

    const inlineKeyboard = [];
    for (let i = 0; i < pageLanguages.length; i += 3) {
      inlineKeyboard.push(
        pageLanguages.slice(i, i + 3).map((lang) => ({
          text: lang.text,
          callback_data: lang.callback_data,
        }))
      );
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

    if (callback === 'select_language') {
      const message = await bot.sendMessage(chatId, 'Please select a language:', {
        reply_markup: {
          inline_keyboard: inlineKeyboard,
        },
      });

      botData.set(chatId, { messageId: message.message_id });
    } else {
      const messageId = botData.get(chatId)?.messageId;
      if (messageId) {
        await bot.editMessageText('Please select a language:', {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: {
            inline_keyboard: inlineKeyboard,
          },
        });
      }
    }
  }

  if (callback && callback.startsWith('lang_')) {
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

    return;
  }

  if (callback === 'menu') {
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

  if (callback === 'account_info') {
    const data = await lookupTelegramID(`${chatId}`);
    if (!data) {
      await bot.sendMessage(chatId, getMessage(chatId, 'errors.licenseNotFound'), {
        parse_mode: 'Markdown',
      });
      return;
    }

    const accountInfoMessage = `
${getMessage(chatId, 'accountInfo.title')}

${getMessage(chatId, 'accountInfo.fields.creationDate')}: *${formatDate(data.creationDate)}*
${getMessage(chatId, 'accountInfo.fields.expirationDate')}: *${formatDate(data.expirationDate)}*
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

  if (callback === 'start') {
    const startMessageData = botData.get(chatId);

    if (startMessageData && startMessageData.mainMenuMessageId) {
      await safeDeleteMessage(chatId, startMessageData.mainMenuMessageId);
    }

    if (!userLanguage.has(chatId)) {
      userLanguage.set(chatId, 'en');
    }

    const userLang = userLanguage.get(chatId) || 'en';
    const langMessages = messages[userLang];

    const formattedFeatures = config.brandsConfig.features.join('\n         └ ');

    const welcomeMessage = langMessages.start.welcome
      .replace('{{appName}}', config.brandsConfig.appName)
      .replace('{{description}}', config.brandsConfig.description)
      .replace('{{features}}', `        └ ${formattedFeatures}`);

    const startMessage = await bot.sendMessage(chatId, welcomeMessage, {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [
            { text: getMessage(chatId, 'start.menu'), callback_data: 'menu' },
            { text: getMessage(chatId, 'start.languageSelect'), callback_data: 'select_language' },
          ],
          [
            { text: getMessage(chatId, 'start.accountInfo'), callback_data: 'account_info' },
            { text: getMessage(chatId, 'start.redeem'), callback_data: 'redeem' },
            { text: getMessage(chatId, 'start.purchase'), callback_data: 'purchase' },
          ],
        ],
      },
    });

    botData.set(chatId, { startMessageId: startMessage.message_id });
  }

  if (callback === 'redeem') {
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

  if (callback === 'purchase') {
    const startMessageData = botData.get(chatId);
    if (startMessageData && startMessageData.startMessageId) {
      await safeDeleteMessage(chatId, startMessageData.startMessageId);
    }

    const localizedPurchaseOptions = {
      week: getMessage(chatId, 'purchase.week', { priceWEEK: config.prices.WEEK.toString() }),
      month: getMessage(chatId, 'purchase.month', { priceMONTH: config.prices.MONTH.toString() }),
      lifetime: getMessage(chatId, 'purchase.lifetime', {
        priceLIFETIME: config.prices.LIFETIME.toString(),
      }),
    };

    const purchaseMessage = await bot.sendMessage(
      chatId,
      getMessage(chatId, 'purchase.chooseOption'),
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: localizedPurchaseOptions.week, callback_data: 'WEEK' }],
            [{ text: localizedPurchaseOptions.month, callback_data: 'MONTH' }],
            [{ text: localizedPurchaseOptions.lifetime, callback_data: 'LIFETIME' }],
            [{ text: getMessage(chatId, 'purchase.backToStart'), callback_data: 'start2' }],
          ],
        },
      }
    );

    const purchaseListener = async (innerCallbackQuery: any) => {
      if (innerCallbackQuery.from.id !== chatId) return;

      const innerCallbackData: 'WEEK' | 'MONTH' | 'LIFETIME' | 'start2' = innerCallbackQuery.data;

      if (innerCallbackData === 'start2') {
        await safeDeleteMessage(chatId, purchaseMessage.message_id);
        sendStartMessage(chatId);
        return;
      }

      if (['WEEK', 'MONTH', 'LIFETIME'].includes(innerCallbackData)) {
        const amount = config.prices[innerCallbackData];
        let key, value;

        if (innerCallbackData === 'WEEK') {
          key = 'weeks';
          value = 1;
        } else if (innerCallbackData === 'MONTH') {
          key = 'months';
          value = 1;
        } else if (innerCallbackData === 'LIFETIME') {
          key = 'months';
          value = 99;
        }

        const invoice = await generateInvoice(amount);

        if (invoice) {
          const invoiceData = JSON.parse(invoice);

          tokenMap.set(invoiceData.token, {
            chatId: chatId,
            settings: [key, value],
          });

          const messageText = getMessage(chatId, 'purchase.selectedPlan', {
            plan: innerCallbackData,
            payLink: invoiceData.payLink,
            expiryDate: new Date(invoiceData.expiredAt * 1000).toLocaleString(),
          });

          await bot.sendMessage(chatId, messageText, { parse_mode: 'Markdown' });
        } else {
          await bot.sendMessage(chatId, getMessage(chatId, 'errors.purchaseFailed'));
        }

        bot.removeListener('callback_query', purchaseListener);
        await safeDeleteMessage(chatId, purchaseMessage.message_id);
      }
    };

    bot.on('callback_query', purchaseListener);
  }
});

setInterval(async () => {
  try {
    const now = Date.now();
    const allUsers = await getAllUsers();

    if (allUsers) {
      for (const user of allUsers) {
        const expirationDateInSeconds = parseInt(user.expirationDate, 10);
        const expirationDateInMilliseconds = expirationDateInSeconds * 1000;

        if (!isNaN(expirationDateInMilliseconds) && expirationDateInMilliseconds <= now) {
          await deleteLicense(user.license, 1);
          if (user.telegramID) {
            await sendMessageToUser(
              user.telegramID.toString(),
              getMessage(Number(user.telegramID), 'errors.licenseExpired')
            );
          }
        }
      }
    } else {
      console.error('Error: getAllUsers returned null or undefined.');
    }
  } catch (error) {
    console.error('Error checking for expired licenses:', error);
  }
}, 60 * 1000);
export { sendMessageToUser };
