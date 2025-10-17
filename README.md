
### Git Bash alternative

cat > README.md << 'EOF'
# RXShopping 🛒⚡ – Telegram Shop (React + Telegraf)
[![Netlify Status](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify&logoColor=white)](https://YOUR_NETLIFY_URL/)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)
![Telegraf](https://img.shields.io/badge/Telegraf-Bot-26A5E4?logo=telegram&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-purple)

> A lightweight **Telegram mini-shop**: React WebApp UI inside Telegram + Node/Telegraf bot that opens the shop and handles checkout hooks.

## ✨ Features
- **WebApp inside Telegram** (opens via bot button)
- **Product cards + cart** (add/remove, live totals)
- **Clean component structure** (Button, Card, Cart)
- **Ready for payments**
- **Netlify deploy**

## 🚀 Quick Start
### Frontend
\`\`\`bash
cd frontend
npm install
npm start
\`\`\`
### Bot
\`\`\`bash
cd frontend/Bot
npm install telegraf
node bot.js
\`\`\`

\`\`\`js
// bot.js snippet
const { Telegraf } = require("telegraf");
const TOKEN = process.env.BOT_TOKEN || "REPLACE_WITH_YOUR_TOKEN";
const bot = new Telegraf(TOKEN);
const web_link = "https://YOUR_NETLIFY_URL/";
bot.start((ctx)=>ctx.reply("Welcome to RXShopping 🛒",{reply_markup:{keyboard:[[{text:"🛍 Open Shop", web_app:{url:web_link}}]],resize_keyboard:true}}));
bot.launch();
\`\`\`

## 🌐 Deploy (Netlify)
\`\`\`bash
cd frontend
npm run build
\`\`\`
Drag & drop **/build** into Netlify. Put the site URL in \`bot.js\`.

## 🛠 Tech
React • Telegraf • Node.js • Netlify

## 📸 Screenshots
| Home | Cart |
|---|---|
![Home](public/result.jpg) 

## 🗺 Roadmap
- [ ] localStorage cart
- [ ] payments
- [ ] admin CRUD
- [ ] order notifications

## 📝 License
MIT © YOUR_NAME
EOF
