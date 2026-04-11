
# Telegram Bot

A minimal Telegram bot built with Node.js using the `node-telegram-bot-api` package.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set your Telegram bot token as an environment variable:
   ```sh
   set TELEGRAM_BOT_TOKEN=your-telegram-bot-token
   ```
   Or replace `YOUR_TELEGRAM_BOT_TOKEN` in `index.js` with your token (not recommended for production).
3. Start the bot:
   ```sh
   npm start
   ```

## Features
- Replies to any message with a greeting.

## Requirements
- Node.js 16 or newer
- A Telegram bot token from @BotFather
