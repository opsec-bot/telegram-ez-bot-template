import { Router } from 'express';
import { Request, Response } from 'express';
import { getAllUsers } from 'src/database/database';
import { sendMessageToUser } from 'src/utils/botutil';

const router = Router();

/**
 * @route POST /msg/:telegramId
 * @desc Send a message to a specific user via Telegram
 * @param {string} telegramId - Telegram ID of the recipient
 * @param {string} message - Message content to send
 * @returns {Object} Response with success or error message
 */
router.post('/:telegramId', async (req: Request, res: Response) => {
  try {
    const { telegramId } = req.params;
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message content is missing' });
    }

    await sendMessageToUser(telegramId, message);
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * @route POST /massmessage
 * @desc Send a message to all users with a registered Telegram ID
 * @param {string} message - Message content to send
 * @returns {Object} Response with success and failure counts
 */
router.post('/massmessage', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message content is missing' });
    }

    const users = await getAllUsers();
    if (!users) {
      return res.status(500).json({ error: 'Failed to retrieve users' });
    }
    const telegramIDs = users.filter((user) => user.telegramID).map((user) => user.telegramID);

    let successCount = 0;
    let failureCount = 0;
    const errors: Array<{ telegramId: string; error: any }> = [];

    await Promise.all(
      telegramIDs.map(async (telegramId) => {
        try {
          await sendMessageToUser(telegramId, message);
          successCount++;
        } catch (error) {
          console.error(`Error sending message to ${telegramId}:`, error);
          failureCount++;
          errors.push({ telegramId, error });
        }
      })
    );

    return res.status(200).json({
      message: 'Mass message process completed',
      successCount,
      failureCount,
      errors,
    });
  } catch (error) {
    console.error('Error processing mass message:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
