function Utils() {
    this.getDate = () => {
        const today = new Date();

        const date =
            today.getDate() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getFullYear();

        return date;
    }

    this.getTimestamp = () => {
        const today = new Date();
        const date = this.getDate();
        const time =
            today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        return date + ' ' + time;
    };

    this.transformDay = (day) => {
        if (day < 10) {
            day = '0' + day;
        }
        return day;
    }

    this.transformMonth = (month) => {
        let monthName = "";

        switch (month) {
            case '1':
                monthName = "janeiro";
                break;
            case '2':
                monthName = "fevereiro";
                break;
            case '3':
                monthName = "março";
                break;
            case '4':
                monthName = "abril";
                break;
            case '5':
                monthName = "maio";
                break;
            case '6':
                monthName = "junho";
                break;
            case '7':
                monthName = "julho";
                break;
            case '8':
                monthName = "agosto";
                break;
            case '9':
                monthName = "setembro";
                break;
            case '10':
                monthName = "outubro";
                break;
            case '11':
                monthName = "novembro";
                break;
            case '12':
                monthName = "dezembro";
                break;
        }
        return monthName;
    }
}

module.exports = Utils;
