import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from '../configs/config';

import userRoutes from './routes/users';
import payment from './routes/payment';

export function createExpressApp(): Express {
  const app = express();

  app.use(bodyParser.json());

  app.use(cors());

  app.use('/api', userRoutes);
  app.use('/', payment);

  app.listen(config.expressPort, () => {
    console.log('\x1b[32mAPI is running on http://localhost:' + config.expressPort + '\x1b[0m');
  });

  return app;
}
