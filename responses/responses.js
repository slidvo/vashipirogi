const Cake = require("../model/products");
const Price = require("../model/price");
const sendOrderInfo = require("../mailing/send_order_info");

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
get.thnx = function(req, res) {
    if (req.cookies["orderId"]) {
        let id = req.cookies["orderId"];
        res.clearCookie("orderId", { httpOnly: true })
        res.render('pages/thnx.ejs', {
            id: id
        })
    } else {
        res.redirect(303, "/")
    }
}
module.exports.get = get;

//POST RESPONSES
let post = Object.create(null);
let create = Object.create(null);

create.order = function(req, res) {
    let orderId = Date.now();
    sendOrderInfo(req.body, orderId);

    res.cookie('orderId', orderId, { httpOnly: true })
    res.redirect(303, "/thnx")
}


post = { create }
module.exports.post = post;