const DabiImages = require('dabi-images');

const DabiClient = new DabiImages.Client();

function Nsfw() {
  this.real = (arg, message) => {
    switch (arg) {
      case 'ass':
        DabiClient.nsfw.real.ass().then(json => {
          message.channel.send(json.url);
        });
        break;
      case 'thighs':
        DabiClient.nsfw.real.thighs().then(json => {
          message.channel.send(json.url);
        });
        break;
      case 'panties':
        DabiClient.nsfw.real.panties().then(json => {
          message.channel.send(json.url);
        });
        break;
      case 'random':
        DabiClient.nsfw.real.random().then(json => {
          message.channel.send(json.url);
        });
        break;
      default:
        message.reply(
          `You are out of luck ${arg.toUpperCase()} category doesn't exist :joy:`
        );
    }
  };

  this.hentai = (arg, message) => {
    switch (arg) {
      case 'ass':
        DabiClient.nsfw.hentai.ass().then(json => {
          message.channel.send(json.url);
        });
        break;
      case 'thighs':
        DabiClient.nsfw.hentai.thighs().then(json => {
          message.channel.send(json.url);
        });
        break;
      case 'panties':
        DabiClient.nsfw.hentai.panties().then(json => {
          message.channel.send(json.url);
        });
        break;
      case 'feet':
        DabiClient.nsfw.hentai.feet().then(json => {
          message.channel.send(json.url);
        });
        break;
      default:
        message.reply(
          `You are out of luck ${arg.toUpperCase()} category doesn't exist :joy:`
        );
    }
  };
}

module.exports = Nsfw;
