const NM_CONF = require('../../configs/nmconf');
const NODE_MAILER = require('nodemailer');


function generateTransporter() {
    return NODE_MAILER.createTransport({
        host: NM_CONF.defaultHost,
        port: NM_CONF.defaultPort,
        secure: NM_CONF.secure,
        auth: {
            user: NM_CONF.email.address,
            pass: NM_CONF.email.password
        }
    });
}

async function sendMessageToEmail(htmlBody) {
    let transporter = generateTransporter();
    let info = await transporter.sendMail({
        from: NM_CONF.email.address,
        to: NM_CONF.email.address,
        subject: 'Информация о заказе',
        text: 'Вам поступил заказ',
        html: htmlBody
    });
    return info;
}

module.exports.sendMessageToEmail = sendMessageToEmail;