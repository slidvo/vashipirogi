const Cake = require("../model/products").cake;
const Price = require("../model/price").price;
const EMAIL_SENDER = require('../mailing/email/email_msg');

//GET RESPONSES
let get = Object.create(null);
get.index = function(req, res) {
    let cakes = new Cake();
    let prices = new Price();
    cakes.getCakes((cakes) => {
        prices.getPrices((prices) => {
            res.render('pages/index', {
                products: cakes,
                prices: prices
            })
        })
    })
}
module.exports.get = get;

//POST RESPONSES
let post = Object.create(null);
let create = Object.create(null);
create.order = function(req, res) {
    console.log(res.body);
    EMAIL_SENDER
        .sendMessageToEmail('<b>Тестовое сообщение отправа на почту</b>')
        .then((info) => {
            console.log("Сообщение успешно отправлено напочту :" + info.messageId)
        }).catch(console.error).then(() => {
            res.redirect('/');
        });
}
post = { create }
module.exports.post = post;