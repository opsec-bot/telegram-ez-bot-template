import { botData, userLanguage } from 'src/handlers/menuHandlers';
import { bot } from '..';
import { messages } from '../configs/messages.config';

export async function sendMessageToUser(
  telegramId: string,
  messageText: string,
  type?: number
): Promise<void> {
  try {
    if (type === 1) {
      await bot.sendMessage(telegramId, messageText, { parse_mode: 'Markdown' });
    } else {
      await bot.sendMessage(telegramId, messageText);
    }
  } catch (error) {
    console.error('Error sending message to user:', telegramId, error);
  }
}

export async function sendFileToUser(telegramId: string, filePath: string): Promise<void> {
  try {
    await bot.sendDocument(telegramId, filePath);
  } catch (error) {
    console.error('Error sending file to user:', error);
    throw new Error('Failed to send file to user');
  }
}

export async function formatDate(unix: number): Promise<string> {
  const date = new Date(unix * 1000);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

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

export async function updateMenuMessage(
  chatId: number,
  text: string,
  keyboard: any
): Promise<void> {
  const current = botData.get(chatId);
  try {
    if (current && current.currentMenuMessageId) {
      await bot.editMessageText(text, {
        chat_id: chatId,
        message_id: current.currentMenuMessageId,
        parse_mode: 'Markdown',
        reply_markup: { inline_keyboard: keyboard },
      });
    } else {
      const sentMessage = await bot.sendMessage(chatId, text, {
        parse_mode: 'Markdown',
        reply_markup: { inline_keyboard: keyboard },
      });
      botData.set(chatId, { currentMenuMessageId: sentMessage.message_id });
    }
  } catch (err) {
    const sentMessage = await bot.sendMessage(chatId, text, {
      parse_mode: 'Markdown',
      reply_markup: { inline_keyboard: keyboard },
    });
    botData.set(chatId, { currentMenuMessageId: sentMessage.message_id });
  }
}

export function getMessage(
  chatId: number,
  pathStr: string,
  replacements: Record<string, string> = {}
): string {
  try {
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
  } catch (error) {
    console.error(`Error in getMessage (chatId: ${chatId}, path: ${pathStr}):`, error);
    return `Message retrieval failed for path: ${pathStr}`;
  }
}
