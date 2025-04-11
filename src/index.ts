// index.ts
import path from 'path';
import fs from 'fs';
import TelegramBot from 'node-telegram-bot-api';

// Database and API
import {
  connectDB,
  deleteLicense,
  exportDB,
  getAllUsers,
  getUserCount,
} from './database/database';
import { createExpressApp } from './API/app';

// Utils
import { sendMessageToUser } from './utils/botutil';

// Configurations and Messages
import { config } from './configs/config';

// Import state
import { sendStartMessage, handleLanguageSelection, handleLanguageSetting, handleMenu, handleAccountInfo, handleRedeem, handlePurchase } from './handlers/menuHandlers';

// -----------------------------------------------------------------------------
// INITIALIZATION
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
// BOT COMMANDS AND EVENT REGISTRATION
// -----------------------------------------------------------------------------

bot.setMyCommands([
  { command: 'start', description: 'Start the bot' },
  { command: 'id', description: 'Retrieve the current channel ID' },
  { command: 'export', description: 'Export the database to CSV (Admin)' },
]);

// Text commands
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  await sendStartMessage(chatId);
});

bot.onText(/\/id/, (msg) => {
  bot.sendMessage(msg.chat.id, `Channel ID: \`${msg.chat.id}\``, { parse_mode: 'Markdown' });
});

// You can leave your /export command here or move it to its own module if desired.
bot.onText(/\/export/, async (msg) => {
  const chatId = msg.chat.id;
  // (Assuming you have an adminCheck implemented elsewhere)
  // if (!(await adminCheck(chatId) ?? false)) return;

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

// Global callback query handler
bot.on('callback_query', async (callbackQuery) => {
  const chatId = callbackQuery.from.id;
  const callback = callbackQuery.data;
  if (!callback) return;

  if (callback === 'select_language' || callback.startsWith('page_')) {
    await handleLanguageSelection(chatId, callback);
  } else if (callback.startsWith('lang_')) {
    await handleLanguageSetting(chatId, callback);
  } else if (callback === 'menu') {
    await handleMenu(chatId);
  } else if (callback === 'account_info') {
    await handleAccountInfo(chatId);
  } else if (callback === 'start') {
    await sendStartMessage(chatId);
  } else if (callback === 'redeem') {
    await handleRedeem(chatId);
  } else if (callback === 'purchase') {
    await handlePurchase(chatId);
  }
});

// Polling error handler
bot.on('polling_error', (error: Error) => {
  console.error('Polling error:', error);
});

// -----------------------------------------------------------------------------
// LICENSE EXPIRATION CHECK (Periodic Task)
// -----------------------------------------------------------------------------

const INTERVAL_CHECK_EXPIRATION = 60 * 1000; // 1 minute
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
            // You could call getMessage() for a localized message if desired.
            'Your license has expired.'
          );
        }
      }
    }
  } catch (error) {
    console.error('Error checking for expired licenses:', error);
  }
}, INTERVAL_CHECK_EXPIRATION);
