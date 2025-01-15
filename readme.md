# telegram-ez-bot-template

telegram-ez-bot-template is a Telegram bot application designed for merchants who value their privacy. The bot interacts with users through Telegram, providing functionalities such as:

- Viewing account information
- Redeeming licenses
- Purchasing new licenses in cryptocurrency
- Changing the bot's language

The application supports **66 languages**, and we welcome contributions for editing or adding new languages.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm** (comes with Node.js)
- **SQLite**

---

## Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/opsec-bot/telegram-ez-bot-template.git
```

### 2. Install Dependencies
```
cd telegram-ez-bot-template
```
```
npm install
```


### 3. Configure Environment Variables

Create the configuration file from the example config file and edit it:

```
cp config.example.ts config.ts
```


Edit the following in config.ts:

- **Telegram Bot Token (telegramToken)**: Your Telegram bot API token.
- **Admin IDs (adminIds)**: List of Telegram user IDs with admin privileges.
- **Hostname (hostname)**: Your domain or localhost for development.
- **OxaPay Merchant Key (oxapayMerchantKey)**: Use the sandbox for testing or your production key.
- **Prices**: Update pricing details as needed.

### 4. Database Initialization

Ensure SQLite is set up. The bot will automatically create database.db and the necessary tables if they don’t exist when you run the bot.

---

## Usage

### Starting the Bot

To start the bot, run:

```
npm start
```


### Interacting with the Bot

- **Start Command**: /start - Initializes the bot and displays the main menu.
- **Account Info**: Select "Account Info" from the menu to view your account details.
- **Redeem License**: Select "Redeem" to enter a license code.
- **Purchase License**: Select "Purchase" to buy a new license.
- **Select Language**: Choose "Select Language" to change the bot's language.

---

## Contributing

telegram-ez-bot-template supports **66 languages**, and contributions are welcome! To contribute:

1. Edit or add new language files.
2. Submit a pull request with your changes.

---

## License

This project is licensed under the **MIT License**.
