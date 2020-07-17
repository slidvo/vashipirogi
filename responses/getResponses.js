const Cake = require("../model/products").cake;
const Price = require("../model/products").price;

module.exports.index = function(req, res) {
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