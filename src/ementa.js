const csv = require('csv-parser')
const fs = require('fs')
const Utils = require('./utils.js')

const utils = new Utils();

const results = [];
let flag = 0;
const today = new Date();

function Ementa() {
    this.getEmenta = (message) => {
        fs.createReadStream('./assets/ESTGV.csv')
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                results.forEach(result => {
                    if (result[0].includes(utils.transformDay(today.getDate()) + '/' + utils.transformMonth(today.getMonth()))) {
                        if (flag == 0) {
                            message.channel.send("Ementa de " + utils.getDate() + '\n');
                            message.channel.send("**Almoço:**\n" + result[2])
                            flag = flag + 1;
                        }
                        else {
                            message.channel.send("**Jantar:**\n" + result[2])
                            flag = 0;
                        }
                    }
                })
            });
    }
}

module.exports = Ementa;

