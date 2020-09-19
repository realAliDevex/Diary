const { Client, MessageEmbed } = require("discord.js");
const bot = new Client();
require('dotenv').config();

const prefix = process.env.PREFIX;

bot.login();