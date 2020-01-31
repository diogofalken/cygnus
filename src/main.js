const Discord = require('discord.js');

const { prefix, token } = require('./config.json');
const nsfw = require('./nsfw.js')

const client = new Discord.Client();
const NSFW = new nsfw();

client.once('ready', () => {
    console.log("LOG: Cygnus ready to go")
})

client.on('message', message => {
    const arg = message.content.slice(prefix.length).split(' ')[1];

    if (message.content.startsWith(`${prefix}real`)) {
        console.log("LOG: Cygnus !real")
        NSFW.real(arg, message);
    }
    else if (message.content.startsWith(`${prefix}hentai`)) {
        console.log("LOG: Cygnus !hentai")
        NSFW.hentai(arg, message)
    }
})

client.login(token);