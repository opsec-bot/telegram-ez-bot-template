import { Router } from 'express';
import { Request, Response } from 'express';
import { sendMessageToUser } from 'src';
import { getAllUsers, lookupTelegramID } from 'src/database/database';

const router = Router();

router.post('/msg/:telegramId', async (req: Request, res: Response) => {
  try {
    const telegramId = req.params.telegramId;
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message content is missing' });
    }

    const user = await lookupTelegramID(telegramId);
    if (!user) {
      return res.status(404).json({ error: 'Telegram ID not found' });
    }

    await sendMessageToUser(telegramId, message, 1);

    return res.status(200).json({ message: 'Message sent to user via Telegram' });
  } catch (error) {
    console.error('Error sending message to user via Telegram:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/massmessage', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message content is missing' });
    }

    const users = ((await getAllUsers()) as { telegramID: string }[]) || [];
    const usersWithTelegramID = users.filter((user: { telegramID: string }) => user.telegramID);

    const telegramIDs = usersWithTelegramID.map((user: { telegramID: string }) => user.telegramID);

    let successCount = 0;
    let failureCount = 0;
    let errors: any[] = [];

    for (const telegramId of telegramIDs) {
      try {
        await sendMessageToUser(telegramId, message);
        successCount++;
      } catch (error) {
        console.error(`Error sending message to ${telegramId}:`, error);
        failureCount++;
        errors.push({ telegramId, error });
      }
    }

    return res.status(200).json({
      message: 'Message sent to all users',
      successCount,
      failureCount,
      errors,
    });
  } catch (error) {
    console.error('Error sending message to all users:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
