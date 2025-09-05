const TelegramBot = require('node-telegram-bot-api');
// Senin verdiğin BotFather tokeni
const token = '8460038161:AAHE5w9V8h5rJ3_AzIVfFl_owzGASl-cNFo';
const bot = new TelegramBot(token, { polling: true });

// /start komutu
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Merhaba! Botunuz aktif.');
});