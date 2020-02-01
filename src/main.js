const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const nsfw = require('./nsfw.js')

const client = new Discord.Client();
const NSFW = new nsfw();

client.once('ready', () => {
    console.log("LOG: Cygnus ready to go")
})

client.on('message', message => {
    const args = message.content.slice(prefix.length).split(' ')[1];

    if (message.content.startsWith(`${prefix}real`)) {
        console.log("LOG: Cygnus !real")
        NSFW.real(args, message);
    }
    else if (message.content.startsWith(`${prefix}hentai`)) {
        console.log("LOG: Cygnus !hentai")
        NSFW.hentai(args, message)
    }
    else if(message.content.startsWith(`${prefix}help`)) {
        message.reply('**:shinto_shrine: Cygnus - Cheat Sheet**    ** :peach: NSFW commands:**    ```!real {ass,feet,thighs,random}``` ```!hentai {ass,feet,thighs,feet}```')
    }
})

client.login(token);