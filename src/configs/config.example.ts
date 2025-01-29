export const config = {
  telegramToken: 'YOUR_TELEGRAM_BOT_TOKEN', // Replace with your Telegram bot token
  adminIds: ['YOUR_ADMIN_ID'], // Replace with the admin Telegram user IDs
  expressPort: '80', // Port for the Express server
  hostname: 'localhost', // Use ngrok URL for local testing, or your production domain (DONT INCLUDE HTTP/HTTPS)
  oxapayMerchantKey: 'sandbox', // Replace with your OxaPay merchant key (use 'sandbox' for testing)
  oxaTelegramLogsId: 'YOUR_LOG_CHANNEL_OR_USER_ID', // Optional: Telegram ID for logs (e.g., channel or user)
  prices: {
    WEEK: 10, // Price in USD for a week
    MONTH: 20, // Price in USD for a month
    LIFETIME: 50, // Price in USD for a lifetime
  },
  brandsConfig: {
    appName: 'A very cool app name.',
    description: 'An intresting description.',
    features: ['Feature one...', 'Feature two...'],
  },
};
