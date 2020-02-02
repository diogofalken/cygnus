const Discord = require('discord.js');
const { prefix, nswfChannel } = require('./config.json');
const Nsfw = require('./nsfw.js');
const Utils = require('./utils.js');
const Ementa = require('./ementa.js');

const http = require('http');
const port = 3000;

// This is a simple server
http.createServer().listen(port);

const bot = new Discord.Client();
const nsfw = new Nsfw();
const utils = new Utils();
const ementa = new Ementa();

bot.once('ready', () => {
  console.log(`${utils.getTimestamp()} - Cygnus ready to go`);
});

bot.on('message', message => {
  const args = message.content.slice(prefix.length).split(' ')[1];

  if(message.content.startsWith(`${prefix}ementa`)) {
    console.log(`${utils.getTimestamp()} - Cygnus !ementa`);
    ementa.getEmenta(message);
  }

  if (message.channel.name != nswfChannel) {
    console.log(`${utils.getTimestamp()} - Wrong chat don't listen`);
    return;
  }

  if (message.content.startsWith(`${prefix}real`)) {
    console.log(`${utils.getTimestamp()} - Cygnus !real`);
    nsfw.real(args, message);
  } else if (message.content.startsWith(`${prefix}hentai`)) {
    console.log(`${utils.getTimestamp()} - Cygnus !hentai`);
    nsfw.hentai(args, message);
  } else if (message.content.startsWith(`${prefix}help`)) {
    console.log(`${utils.getTimestamp()} - Cygnus !help`);
    message.reply(
      '**:shinto_shrine: Cygnus - Cheat Sheet**    ** :peach: NSFW commands:**    ```!real {ass,panties,thighs,random}``` ```!hentai {ass,feet,thighs,feet}```'
    );
  }
});

bot.on('error', err => {
  console.log(err);
});

bot.login(process.env.token);