const TLG_CONF = require('../../configs/tlgconf');
const TelegramBot = require("node-telegram-bot-api");

// const token = '1160843771:AAFBZSD0DE5wpfpDC69GMDFt-55tez-sAvc';

const bot = new TelegramBot(TLG_CONF.token, { polling: true });


// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием, то есть "Hello World!")
// bot.onText(/\/hi (.+)/, function (msg, match) {
//     var fromId = msg.from.id; // Получаем ID отправителя
//     var resp = match[1]; // Получаем текст после /echo
//     userid.push(fromId);

//     console.log("Match 0 " + match[0]);
//     console.log("Match 1 " + match[1]);
//     console.log(fromId);
//     bot.sendMessage("@slvchan","message");
//     bot.sendMessage(fromId, "You have registered successfull");
// });

// bot.on('message',(msg)=>{
//     //@slvchan
//     console.log(msg.chat.id);
//     bot.sendMessage(-1001260022268,"Blabla\nBlabla:*100*\nBlablabla\nBlabla",{parse_mode:'Markdown'});
//     //https://t.me/joinchat/AAAAAE_968PQEWNxlfDWug

// })

//https://api.telegram.org/bot1160843771:AAFBZSD0DE5wpfpDC69GMDFt-55tez-sAvc/sendMessage?chat_id=@slvchan&text=asdasdas

async function sendMessageToTelegramChannel(finalMessage) {
    try {

        //-1001157367727
        let result = await bot.sendMessage(TLG_CONF.channelUserName, finalMessage, { parse_mode: 'HTML' });
        // console.log(result);
    } catch (e) {
        console.error(e);
    }

}

module.exports.sendMessageToTelegramChannel = sendMessageToTelegramChannel;