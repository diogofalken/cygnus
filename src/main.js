const Discord = require('discord.js');

const { prefix, token } = require('./config.json');
const nsfw = require('./nsfw.js')

const client = new Discord.Client();
const NSFW = new nsfw();

client.once('ready', () => {
    console.log("LOG: Cygnus ready to go")
})

client.on('message', message => {
    const args = message.content.slice(prefix.length).split(' ');

    if (message.content.startsWith(`${prefix}real`)) {
        NSFW.real(args[1], message);
    }
    else if (message.content.startsWith(`${prefix}hentai`)) {
        NSFW.hentai(args[1], message)
    }
})

client.login(token);