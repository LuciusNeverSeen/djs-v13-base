const { Client, Intents, Collection } = require('discord.js'); // import
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]}); // tạo client discord

module.exports = client;

require('dotenv').config();
client.login(process.env.TOKEN, err => console.log(err));

client.commands = new Collection();
client.slashCmds = new Collection();

require('./handlers/baseHandler');

const prefix = "!";
client.prefix = prefix;
