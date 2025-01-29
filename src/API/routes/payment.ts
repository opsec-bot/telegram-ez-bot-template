import axios, { AxiosError } from 'axios';
import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { config } from '../../configs/config';
import { bot, getMessage, tokenMap } from 'src';
import { newUnix } from 'src/utils/apiutil';
import { createLicense } from 'src/database/database';
import { sendMessageToUser } from '../../utils/botutil';

interface InquiryResponse {
  status: string;
  trackId: string;
  amount: number;
  currency: string;
  txID: string;
}

const router = express.Router();

/**
 * Generates an invoice with the specified amount.
 * @param amount - The amount for the invoice.
 * @returns A JSON string containing the payment link, expiration date, track ID, and token, or null if an error occurs.
 */
export const generateInvoice = async (amount: number): Promise<string | null> => {
  try {
    const token = uuidv4();
    const callbackUrl = `https://${config.hostname}/callback/${token}`;

    const data = {
      amount,
      callbackUrl,
      merchant: config.oxapayMerchantKey,
      feePaidByPayer: 1,
      underPaidCover: 2.5,
      lifeTime: 60, // time in minutes
    };

    const response = await axios.post('https://api.oxapay.com/merchants/request/', data);
    const { payLink, expiredAt, trackId } = response.data;

    return JSON.stringify({ payLink, expiredAt, trackId, token });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error initiating payment:', error.message);
    } else {
      console.error('Unexpected error initiating payment:', error);
    }
    return null;
  }
};

/**
 * Looks up transaction details using the provided transaction ID (txid).
 * @param txid - The transaction ID to look up.
 * @returns The inquiry response data.
 * @throws Will throw an error if the txid is not provided or if the request fails.
 */
export const txidLookup = async (txid: string): Promise<InquiryResponse> => {
  if (!txid) {
    throw new Error('Transaction ID (txid) is required');
  }

  const data = {
    merchant: config.oxapayMerchantKey,
    trackId: txid,
  };

  try {
    const response = await axios.post<InquiryResponse>(
      'https://api.oxapay.com/merchants/inquiry',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error during txidLookup:', error.message);
    } else {
      console.error('Unexpected error during txidLookup:', error);
    }
    throw error;
  }
};

router.post('/callback/:token', async (req: Request, res: Response) => {
  const { token } = req.params;
  const data = req.body;

  const tokenData = tokenMap.get(token);
  if (tokenData) {
    const { chatId, settings } = tokenData;
    const expirationDate = newUnix(settings[0], settings[1]);
    const license = await createLicense(expirationDate, '1');

    let message: string;

    switch (data.status) {
      case 'Paid':
        message = getMessage(chatId, 'invoice.statusPaid', {
          status: data.status,
          trackId: data.trackId,
          license,
        });
        if (config.oxaTelegramLogsId) {
          sendMessageToUser(
            config.oxaTelegramLogsId,
            `Invoice #${data.trackId}\n\nStatus: Completed\nAmount: +$${data.amount} ${data.currency}\nTXID: \`${data.txID}\` 💸💸`,
            1
          );
        }
        break;

      case 'Expired':
        message = getMessage(chatId, 'invoice.statusExpired', {
          trackId: data.trackId,
        });
        break;

      default:
        message = getMessage(chatId, 'invoice.statusDefault', {
          status: data.status,
          trackId: data.trackId || '',
          amount: data.amount || '',
          currency: data.currency || '',
        });
        break;
    }

    bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
  }

  res.sendStatus(200);
});

export default router;
