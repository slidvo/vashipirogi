const NM_CONF = require('../../configs/nmconf');
const NODE_MAILER = require('nodemailer');


function generateTransporter() {
    return NODE_MAILER.createTransport({
        host: NM_CONF.defaultHost,
        port: NM_CONF.defaultPort,
        secure: NM_CONF.secure,
        auth: {
            user: NM_CONF.email.from,
            pass: NM_CONF.email.password
        }
    });
}

async function sendMessageToEmail(htmlBody, id) {
    let transporter = generateTransporter();
    let info = await transporter.sendMail({
        from: NM_CONF.email.from,
        to: NM_CONF.email.to,
        subject: `Новый заказ №${id}`,
        text: 'Вам поступил заказ',
        html: htmlBody
    });
    return info;
}

module.exports.sendMessageToEmail = sendMessageToEmail;