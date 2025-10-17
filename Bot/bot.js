const { Telegraf } = require("telegraf");
const TOKEN = "8464212701:AAF0D2MnsyOlncT4e-mww-mwmKtlgJAKmD8";
const bot = new Telegraf(TOKEN);

const web_link = "https://jovial-phoenix-cb749d.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome P", {
    reply_markup: {
      keyboard: [[{ text: "web-app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
