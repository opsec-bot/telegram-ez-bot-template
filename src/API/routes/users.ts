import express, { Request, Response } from 'express';
import { sendMessageToUser } from '../../utils/botutil';
import {
  createLicense,
  deleteLicense,
  updateLicense,
  lookupTelegramID,
} from 'src/database/database';
import { newUnix } from 'src/utils/apiutil';

const router = express.Router();

/**
 * @route POST /users/create
 * @desc Create a new license
 * @param {string} key - License key
 * @param {number} value - License duration
 * @param {string} creatorId - ID of the creator
 * @returns {Object} Response with created license
 */
router.post('/users/create', async (req: Request, res: Response) => {
  try {
    const { key, value, creatorId } = req.body;

    if (!key || isNaN(value) || value <= 0 || !creatorId) {
      return res.status(400).json({ code: 'error', message: 'Invalid request body' });
    }

    const expirationDate = newUnix(key, value);

    const license = await createLicense(expirationDate, creatorId);

    return res.status(200).json({ code: 'success', license: license });
  } catch (error) {
    console.error('Error creating license:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * @route POST /users/delete
 * @desc Delete a license by license key or Telegram ID
 * @param {string} license - License key
 * @param {string} telegramID - Telegram ID of the user
 * @returns {Object} Response with deletion status
 */
router.post('/users/delete', async (req: Request, res: Response) => {
  try {
    const { license, telegramID } = req.body;

    if (!(license || telegramID)) {
      return res.status(400).json({
        code: 'error',
        message: 'Invalid request body. Either "license" or "telegramID" must be provided.',
      });
    }

    let result;

    if (license) {
      result = await deleteLicense(license, 1);
    }

    if (telegramID) {
      result = await deleteLicense(telegramID, 2);
    }

    if (!result) return;

    if (result.status === 'success') {
      return res.status(200).json({ code: 'success', message: 'Successfully deleted license' });
    } else {
      return res
        .status(400)
        .json({ code: 'error', message: `Failed to delete license: ${result.error || ''}` });
    }
  } catch (error) {
    console.error('Error deleting license:', error);
    return res.status(500).json({ code: 'error', message: 'Internal server error' });
  }
});

/**
 * @route POST /users/update
 * @desc Update license information
 * @param {string} license - License key
 * @param {Object} newData - New license data
 * @returns {Object} Response with update status
 */
router.post('/users/update', async (req: Request, res: Response) => {
  try {
    const { license, newData } = req.body;

    if (!license || !newData) {
      return res.status(400).json({ code: 'error', message: 'Invalid request body' });
    }

    const result = await updateLicense(license, newData);

    if (result.status === 'success') {
      return res.status(200).json({ code: 'success', message: 'Successfully updated license' });
    } else {
      return res
        .status(400)
        .json({ code: 'error', message: `Failed to update license: ${result.error || ''}` });
    }
  } catch (error) {
    console.error('Error updating license:', error);
    return res.status(500).json({ code: 'error', message: 'Internal server error' });
  }
});

/**
 * @route POST /message/:telegramId
 * @desc Send a message to a user via Telegram
 * @param {string} telegramId - Telegram ID of the recipient
 * @param {string} message - Message content to send
 * @returns {Object} Response with message status
 */
router.post('/message/:telegramId', async (req: Request, res: Response) => {
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

    await sendMessageToUser(telegramId, message);

    return res.status(200).json({ message: 'Message sent to user via Telegram' });
  } catch (error) {
    console.error('Error sending message to user via Telegram:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
