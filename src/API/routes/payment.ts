import axios from 'axios';
import { config } from '../../configs/config';
import express from 'express';
import { bot, getMessage, tokenMap, userLanguage } from 'src';
import { newUnix } from 'src/utils/apiutil';
import { createLicense } from 'src/database/database';
import { v4 as uuidv4 } from 'uuid';
import { sendMessageToUser } from '../../utils/botutil';

const router = express.Router();

export const generateInvoice = async (amount: number): Promise<string | null> => {
  try {
    const token = uuidv4();
    const callbackUrl = `https://${config.hostname}/callback/${token}`;

    const data = {
      amount: amount,
      callbackUrl: callbackUrl,
      merchant: config.oxapayMerchantKey,
      feePaidByPayer: 1,
      underPaidCover: 2.5,
      lifeTime: 60, // time in minutes
      // returnUrl: "",
    };

    const response = await axios.post('https://api.oxapay.com/merchants/request/', data);

    const payLink = response.data.payLink;
    const expiredAt = response.data.expiredAt;
    const trackId = response.data.trackId;

    return JSON.stringify({
      payLink: payLink,
      expiredAt: expiredAt,
      trackId: trackId,
      token: token,
    });
  } catch (error) {
    console.error('Error initiating payment');
    return null;
  }
};

router.post('/callback/:token', async (req: express.Request, res: express.Response) => {
  const token = req.params.token;
  const data = req.body;

  if (tokenMap.has(token)) {
    const chatId = tokenMap.get(token).chatId;
    const settings = tokenMap.get(token).settings;
    const expirationDate = newUnix(settings[0], settings[1]);
    const license = await createLicense(expirationDate, '1');
    const oxalogsId = Number(config.oxaTelegramLogsId);

    let message;

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
            getMessage(oxalogsId, 'invoice.logMessage', {
              trackId: data.trackId,
              amount: data.amount,
              currency: data.currency,
              txID: data.txID,
            }),
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
