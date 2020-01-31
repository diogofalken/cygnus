const DabiImages = require('dabi-images');

const DabiClient = new DabiImages.Client();

function nsfw() {
    this.real = (arg, message) => {
        if (arg == "ass") {
            DabiClient.nsfw.real.ass().then(json => {
                message.channel.send(json.url)
            })
        }
        else if (arg == "thighs") {
            DabiClient.nsfw.real.thighs().then(json => {
                message.channel.send(json.url)
            })
        }
        else if (arg == "panties") {
            DabiClient.nsfw.real.panties().then(json => {
                message.channel.send(json.url)
            })
        }
        else if(arg == "random") {
            DabiClient.nsfw.real.random().then(json => {
                message.channel.send(json.url)
            })
        }
        else {
            message.channel.send(`You are out of luck ${arg} category doesn't exist :joy:`);
        }
    }

    this.hentai = (arg, message) => {
        if (arg == "ass") {
            DabiClient.nsfw.hentai.ass().then(json => {
                message.channel.send(json.url)
            })
        }
        else if (arg == "thighs") {
            DabiClient.nsfw.hentai.thighs().then(json => {
                message.channel.send(json.url)
            })
        }
        else if (arg == "panties") {
            DabiClient.nsfw.hentai.panties().then(json => {
                message.channel.send(json.url)
            })
        }
        else if(arg == "feet") {
            DabiClient.nsfw.hentai.feet().then(json => {
                message.channel.send(json.url)
            })
        }
        else {
            message.channel.send(`You are out of luck ${arg} category doesn't exist :joy:`);
        }
    }
}

module.exports = nsfw;
