// menuHandlers.ts
import TelegramBot from 'node-telegram-bot-api';
import { config } from '../configs/config';
import { messages } from '../configs/messages.config';
import {
  lookupTelegramID,
  lookupLicense,
  deleteLicense,
  updateLicense,
  createLicense,
} from '../database/database';
import { adminCheck, checkUnix, combineUnix } from '../utils/apiutil';
import { formatDate, sendMessageToUser } from '../utils/botutil';
import { generateInvoice } from '../API/routes/payment';
import { bot } from '..'; // Make sure your bot is exported from index.ts

// --- Global State (Persistent Data) ---
export const tokenMap = new Map<string, any>();
// This will store per-chat persistent menu state
export const botData = new Map<number, { currentMenuMessageId: number }>();
export const userLanguage = new Map<number, string>();

// -----------------------------------------------------------------------------
// HELPER FUNCTION: Safe Message Deletion
// -----------------------------------------------------------------------------
export async function safeDeleteMessage(chatId: number, messageId: number): Promise<void> {
  try {
    await bot.deleteMessage(chatId, messageId);
  } catch (err: any) {
    if (err.response && typeof err.response.body === 'object' && err.response.body.description) {
      const desc = err.response.body.description;
      if (desc.includes('message to delete not found')) {
        return;
      }
    }
    console.error('Error deleting message:', err);
  }
}

// -----------------------------------------------------------------------------
// HELPER FUNCTION: Persistent Menu Message Updater
// -----------------------------------------------------------------------------
export async function updateMenuMessage(
  chatId: number,
  text: string,
  keyboard: any
): Promise<void> {
  const current = botData.get(chatId);
  try {
    if (current && current.currentMenuMessageId) {
      // Try editing the persistent message.
      await bot.editMessageText(text, {
        chat_id: chatId,
        message_id: current.currentMenuMessageId,
        parse_mode: 'Markdown',
        reply_markup: { inline_keyboard: keyboard },
      });
    } else {
      // If no persistent message exists, send one and store its ID.
      const sentMessage = await bot.sendMessage(chatId, text, {
        parse_mode: 'Markdown',
        reply_markup: { inline_keyboard: keyboard },
      });
      botData.set(chatId, { currentMenuMessageId: sentMessage.message_id });
    }
  } catch (err) {
    // If editing fails, send a new message.
    const sentMessage = await bot.sendMessage(chatId, text, {
      parse_mode: 'Markdown',
      reply_markup: { inline_keyboard: keyboard },
    });
    botData.set(chatId, { currentMenuMessageId: sentMessage.message_id });
  }
}

// -----------------------------------------------------------------------------
// UTILITY FUNCTION: Get Message by Path with Replacements
// -----------------------------------------------------------------------------
export function getMessage(
  chatId: number,
  pathStr: string,
  replacements: Record<string, string> = {}
): string {
  const lang = userLanguage.get(chatId) || 'en';
  const keys = pathStr.split('.');
  const result = keys.reduce((obj, key) => (obj as any)?.[key], messages[lang]);

  if (typeof result !== 'string') {
    console.error(`Message path not found or not a string: ${pathStr}`);
    return `Message not found for path: ${pathStr}`;
  }

  return Object.keys(replacements).reduce(
    (msg, key) => msg.replace(`{{${key}}}`, replacements[key]),
    result
  );
}

// -----------------------------------------------------------------------------
// MENU HANDLERS
// -----------------------------------------------------------------------------

// Start Menu
export async function sendStartMessage(chatId: TelegramBot.ChatId): Promise<void> {
  const chatIdNum = Number(chatId);
  // Set default language if not already set.
  userLanguage.set(chatIdNum, userLanguage.get(chatIdNum) || 'en');
  const langMessages = messages[userLanguage.get(chatIdNum) || 'en'];

  const welcomeText = `▶️ ${langMessages.start.welcome
    .replace('{{appName}}', config.brandsConfig.appName)
    .replace('{{description}}', config.brandsConfig.description)
    .replace('{{features}}', config.brandsConfig.features.join('\n└ '))}`;

  const keyboard = [
    [
      { text: langMessages.start.menu, callback_data: 'menu' },
      { text: langMessages.start.languageSelect, callback_data: 'select_language' },
    ],
    [
      { text: langMessages.start.accountInfo, callback_data: 'account_info' },
      { text: langMessages.start.redeem, callback_data: 'redeem' },
      { text: langMessages.start.purchase, callback_data: 'purchase' },
    ],
  ];

  // Update persistent menu if one exists; otherwise, send and store a new one.
  if (botData.has(chatIdNum) && botData.get(chatIdNum)?.currentMenuMessageId) {
    await updateMenuMessage(chatIdNum, welcomeText, keyboard);
  } else {
    const sentMessage = await bot.sendMessage(chatId, welcomeText, {
      parse_mode: 'Markdown',
      reply_markup: { inline_keyboard: keyboard },
    });
    botData.set(chatIdNum, { currentMenuMessageId: sentMessage.message_id });
  }
}

// Language selection handler
export async function handleLanguageSelection(chatId: number, callback: string): Promise<void> {
  const languages = [
    { text: '🇺🇸 English', callback_data: 'lang_en' },
    { text: '🇪🇸 Spanish', callback_data: 'lang_es' },
    { text: '🇷🇺 Russian', callback_data: 'lang_ru' },
  ];
  // For three languages, no pagination is needed.
  await updateMenuMessage(chatId, 'Please select a language:', [languages]);
}

// Language setting handler
export async function handleLanguageSetting(chatId: number, callback: string): Promise<void> {
  const selectedLang = callback.split('_')[1];
  userLanguage.set(chatId, selectedLang);
  const langMessages = messages[selectedLang] || messages['en'];
  await updateMenuMessage(chatId, `${langMessages.menu.languageSet}`, [
    [{ text: getMessage(chatId, 'purchase.backToStart'), callback_data: 'start' }],
  ]);
}

// Main menu handler
export async function handleMenu(chatId: number): Promise<void> {
  const userData = await lookupTelegramID(`${chatId}`);
  let text: string;
  let keyboard: any;
  if (!userData) {
    text = getMessage(chatId, 'purchase.please');
    keyboard = [[{ text: getMessage(chatId, 'start.purchase'), callback_data: 'purchase' }]];
  } else {
    keyboard = [[{ text: 'UNDER_DEVELOPMENT', callback_data: 'DEV' }]];
    if (await adminCheck(chatId)) {
      keyboard.push(
        [{ text: getMessage(chatId, 'menu.create'), callback_data: 'NEW' }],
        [{ text: getMessage(chatId, 'menu.delete'), callback_data: 'DEL' }],
        [{ text: getMessage(chatId, 'menu.lookupLicense'), callback_data: 'LOOKUPLICENSE' }],
        [{ text: getMessage(chatId, 'menu.lookupTelegramID'), callback_data: 'LOOKUPTID' }]
      );
    }
    keyboard.push([{ text: getMessage(chatId, 'purchase.backToStart'), callback_data: 'start' }]);
    text = getMessage(chatId, 'menu.title');
  }
  await updateMenuMessage(chatId, text, keyboard);
}

// Account information handler
export async function handleAccountInfo(chatId: number): Promise<void> {
  const data = await lookupTelegramID(`${chatId}`);
  if (!data) {
    await updateMenuMessage(chatId, getMessage(chatId, 'errors.licenseNotFound'), []);
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
  await updateMenuMessage(chatId, accountInfoMessage, [
    [{ text: getMessage(chatId, 'accountInfo.returnToStart'), callback_data: 'start' }],
  ]);
}

// Redeem handler
export async function handleRedeem(chatId: number): Promise<void> {
  const redeemPrompt = getMessage(chatId, 'redeem.enterCode');
  const cancelMSG = getMessage(chatId, 'redeem.cancel');
  await updateMenuMessage(chatId, redeemPrompt, [
    [{ text: cancelMSG, callback_data: 'cancel_redeem' }],
  ]);

  // Listener for user's input (license code)
  const redeemListener = async (msg: any) => {
    if (msg.chat.id !== chatId || !msg.text) return;
    const license = msg.text.trim();

    if (!license.match(/^[a-zA-Z0-9]+$/)) {
      await bot.sendMessage(chatId, getMessage(chatId, 'errors.invalidLicense'));
      return;
    }

    const data = await lookupLicense(license);
    if (!data) {
      await bot.sendMessage(chatId, getMessage(chatId, 'errors.licenseNotFound'));
      return;
    }

    if (data.telegramID !== '') {
      await updateMenuMessage(chatId, 'License already redeemed.', [
        [{ text: 'Return', callback_data: 'start' }],
      ]);
      bot.removeListener('message', redeemListener);
      return;
    }

    const lookup = await lookupTelegramID(`${chatId}`);
    if (lookup) {
      const newTime = combineUnix(data.expirationDate, lookup.expirationDate);
      const time = checkUnix(newTime);
      const newData = { telegramID: `${chatId}`, expirationDate: newTime.toString() };
      const result = await updateLicense(lookup.license, newData);
      if (result.status === 'failed') {
        console.error(result.error);
      }
      await deleteLicense(license, 1);
      await updateMenuMessage(chatId, `Your license was accepted. You now have ${time}`, [
        [{ text: 'Return', callback_data: 'start' }],
      ]);
    } else {
      const newData = { telegramID: `${chatId}` };
      const result = await updateLicense(license, newData);
      if (result.status === 'failed') {
        console.error(result.error);
      }
      const time = checkUnix(data.expirationDate);
      await updateMenuMessage(chatId, `Redeemed ${time}`, [
        [{ text: 'Return', callback_data: 'start' }],
      ]);
    }
    bot.removeListener('message', redeemListener);
  };

  bot.on('message', redeemListener);

  bot.once('callback_query', async (cancelCallbackQuery) => {
    if (cancelCallbackQuery.data === 'cancel_redeem' && cancelCallbackQuery.from.id === chatId) {
      bot.removeListener('message', redeemListener);
      await updateMenuMessage(chatId, 'Redeem cancelled. Returning to menu...', [
        [{ text: 'Return', callback_data: 'start' }],
      ]);
    }
  });
}

// Purchase handler
export async function handlePurchase(chatId: number): Promise<void> {
  try {
    const localizedPurchaseOptions = {
      WEEK: getMessage(chatId, 'purchase.week', { priceWEEK: config.prices.WEEK.toString() }),
      MONTH: getMessage(chatId, 'purchase.month', { priceMONTH: config.prices.MONTH.toString() }),
      LIFETIME: getMessage(chatId, 'purchase.lifetime', {
        priceLIFETIME: config.prices.LIFETIME.toString(),
      }),
    };

    const keyboard = [
      [{ text: localizedPurchaseOptions.WEEK, callback_data: 'WEEK' }],
      [{ text: localizedPurchaseOptions.MONTH, callback_data: 'MONTH' }],
      [{ text: localizedPurchaseOptions.LIFETIME, callback_data: 'LIFETIME' }],
      [{ text: getMessage(chatId, 'purchase.backToStart'), callback_data: 'start' }],
    ];
    await updateMenuMessage(chatId, getMessage(chatId, 'purchase.chooseOption'), keyboard);

    const purchaseListener = async (callbackQuery: TelegramBot.CallbackQuery) => {
      try {
        if (callbackQuery.from.id !== chatId) return;
        const selectedPlan = callbackQuery.data;
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
            await updateMenuMessage(chatId, messageText, [
              [{ text: 'Return', callback_data: 'start' }],
            ]);
          } else {
            await updateMenuMessage(chatId, getMessage(chatId, 'errors.purchaseFailed'), [
              [{ text: 'Return', callback_data: 'start' }],
            ]);
          }
        }
      } catch (error) {
        console.error('Error handling purchase callback:', error);
      } finally {
        bot.removeListener('callback_query', purchaseListener);
      }
    };

    bot.on('callback_query', purchaseListener);
  } catch (error) {
    console.error('Error handling purchase:', error);
  }
}
