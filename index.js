require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { buttons, tasksResolvers } = require('./tasks');
const mainFuncs = require('./mainFuncs');

const { options } = require('./consts');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, options);

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '## Choose your option (￣▽￣) ', {
    reply_markup: JSON.stringify({
      inline_keyboard: buttons,
      parse_mode: 'markdown'
    })
  });
});


bot.on('callback_query', (cb) => {
  const action = cb.data;
  const msg = cb.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };

  mainFuncs[tasksResolvers[action]]()
    .then((res) => bot.sendMessage(opts.chat_id, res, { parse_mode: 'markdown'}));
});