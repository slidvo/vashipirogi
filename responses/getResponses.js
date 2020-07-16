const Cake = require("../model/products");

module.exports.index = function(req, res) {
    let cakes = new Cake();
    cakes.getCakes((cakes) => {
        res.render('pages/index', {
            products: cakes
        })
    })
}