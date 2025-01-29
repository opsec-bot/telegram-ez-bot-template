import { bot } from '..';

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
    console.error('Error sending message to user:', telegramId);
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
