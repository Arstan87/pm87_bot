require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = process.env.TELEGRAM_BOT_TOKEN;
const port = process.env.PORT || 3000;

// Инициализация бота
const bot = new TelegramBot(token, {polling: true});

// Обработчик сообщений
bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, "Бот работает на Railway!");
});

// Веб-сервер для проверки работы
const app = express();
app.get('/', (req, res) => {
  res.send('PM87 Bot is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
console.log('Bot started at', new Date());
