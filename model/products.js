function CakesType(i, n, t) {
    this.id = i;
    this.name = n;
    this.tagline = t;
}

let cakesType = [
    new CakesType(0, "Сладкие пироги", "Сладкая мечта на блюде"),
    new CakesType(1, "Овощные пироги", "Съешь всё до последней крошки"),
    new CakesType(2, "Сытные пироги", "С пылу, с жару")
];

function Cake(id, ct, n, f, path) {
    this.id = id;
    this.cakeType = ct;
    this.name = n;
    this.filling = f;
    this.img = path;
}
Cake.prototype.getCakes = function(callback) {
    callback(cakes);
}

let cakes = [
    new Cake(0, 0, "Пирог с яблоком", "яблоко", "images/cakes/apple.jpg"),
    new Cake(1, 0, "Пирог с яблоком и брусникой", "яблоко, брусника", "images/cakes/apple_with_lingonberry.jpg"),
    new Cake(2, 0, "Пирог с вишней", "вишня, взбитые сливки", "images/cakes/cherry.jpg"),
    new Cake(3, 0, "Пирог с клубникой", "клубника, взбитые сливки", "images/cakes/strawberry.jpg"),
    new Cake(4, 0, "Пирог с брусникой", "брусника, взбитые сливки", "images/cakes/lingonberry.jpg"),
    new Cake(5, 0, "Пирог  \"Венский\" ", "яблоко, чернослив, грецкие орехи", "images/cakes/venskiy.jpg"),
    new Cake(6, 0, "Пирог  \"День и ночь\"", "мак, творог", "images/cakes/day_and_night.jpg"),
    new Cake(7, 0, "Пирог  \"Нежность\"", "творог, ванилин", "images/cakes/fondness.jpg"),
    new Cake(8, 0, "Пирог  \"Маковый\"", "мак, брусника", "images/cakes/poppy.jpg"),
    new Cake(9, 0, "Пирог с черной смородиной", "черная смородина, взбитые сливки/сметана", "images/cakes/blackberry.jpg"),
    new Cake(10, 0, "Пирог c черникой", "черника, взбитые сливки/сметана", "images/cakes/blueberry.jpg"),
    // new Cacke(9, 1, "Пирог с капустой", ""),
    // new Cacke(10, 1, "Пирог с капустой и яйцом", ""),
    // new Cacke(11, 1, "Пирог с кпустой и грибами", ""),
    // new Cacke(11, 1, "Пирог с картофелем", ""),
];



function Price(id, pid, p) {
    this.id = id;
    this.pId = pid;
    this.price = p;

}

Price.prototype.getPrices = function(callback) {
    callback(productPrice);
}

let productPrice = [
    new Price(0, 0, { "1": "470", "1.5": "705", "2": "940", "2.5": "1175", "3": "1410" }),

    new Price(1, 1, { "1": "530", "1.5": "795", "2": "1060", "2.5": "1325", "3": "1590" }),

    new Price(2, 2, { "1": "570", "1.5": "855", "2": "1140", "2.5": "1425", "3": "1710" }),

    new Price(3, 3, { "1": "570", "1.5": "855", "2": "1140", "2.5": "1425", "3": "1710" }),

    new Price(4, 4, { "1": "600", "1.5": "900", "2": "1200", "2.5": "1500", "3": "1800" }),

    new Price(5, 5, { "1": "580", "1.5": "870", "2": "1160", "2.5": "1450", "3": "1740" }),

    new Price(6, 6, { "1": "530", "1.5": "795", "2": "1060", "2.5": "1325", "3": "1590" }),

    new Price(7, 7, { "1": "470", "1.5": "705", "2": "940", "2.5": "1175", "3": "1410" }),

    new Price(8, 8, { "1": "700", "1.5": "1050", "2": "1400", "2.5": "1750", "3": "2100" }),

    new Price(9, 9, { "1": "600", "1.5": "900", "2": "1200", "2.5": "1500", "3": "1800" }),

    new Price(10, 10, { "1": "600", "1.5": "900", "2": "1200", "2.5": "1500", "3": "1800" }),

    //new Price(2, 2, { "1": "", "1.5": "", "2": "", "2.5": "", "3": "" }),

    // new Price(1, 0, 1.5, 705),
    // new Price(2, 0, 2, 940),
    // new Price(3, 0, 2.5, 1175),
    // new Price(4, 0, 3, 1410),

    // new Price(5, 1, 1, 530),
    // new Price(6, 1, 1.5, 795),
    // new Price(7, 1, 2, 1060),
    // new Price(8, 1, 2.5, 1325),
    // new Price(9, 1, 3, 1590),

    // new Price(10, 2, 1, 570),
    // new Price(11, 2, 1.5, 855),
    // new Price(12, 2, 2, 1140),
    // new Price(13, 2, 2.5, 1425),
    // new Price(14, 2, 3, 1710),

    // new Price(15, 3, 1, 570),
    // new Price(16, 3, 1.5, 855),
    // new Price(17, 3, 2, 1140),
    // new Price(18, 3, 2.5, 1425),
    // new Price(18, 3, 3, 1710),

    // new Price(19, 4, 1, 600),
    // new Price(20, 4, 1.5, 900),
    // new Price(21, 4, 2, 1200),
    // new Price(22, 4, 2.5, 1500),
    // new Price(23, 4, 3, 1800),

    // new Price(24, 5, 1, 580),
    // new Price(25, 5, 1.5, 870),
    // new Price(26, 5, 2, 1160),
    // new Price(27, 5, 2.5, 1450),
    // new Price(28, 5, 3, 1740),

    // new Price(29, 6, 1, 530),
    // new Price(30, 6, 1.5, 795),
    // new Price(31, 6, 2, 1060),
    // new Price(32, 6, 2.5, 1325),
    // new Price(33, 6, 3, 1590),

    // new Price(34, 6, 1, 530),
    // new Price(35, 6, 1.5, 795),
    // new Price(31, 6, 2, 1060),
    // new Price(32, 6, 2.5, 1325),
    // new Price(33, 6, 3, 1590)
    //new Price(, , , ),
    /**
     *  new Cake(5, 0, "Пирог  \"Венский\" ", "яблоко, чернослив, грецкие орехи", "images/cakes/venskiy.jpg"),
    new Cake(6, 0, "Пирог  \"День и ночь\"", "мак, творог", "images/cakes/day_and_night.jpg"),
    new Cake(7, 0, "Пирог  \"Нежность\"", "творог, ванилин", "images/cakes/fondness.jpg"),
    new Cake(8, 0, "Пирог  \"Маковый\"", "мак, брусника", "images/cakes/poppy.jpg"),
    new Cake(9, 0, "Пирог с черной смородиной", "черная смородина, взбитые сливки/сметана", "images/cakes/blackberry.jpg"),
    new Cake(10, 0, "Пирог c черникой", "черника, взб
     */

];

//module.exports = CakesType;
module.exports.cake = Cake;
module.exports.price = Price;