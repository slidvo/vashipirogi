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
    //query 
    callback(cakes); //result of query
}
Cake.prototype.getCakeNameById = function(i, callback) {
    try {
        cakes.forEach(function(elt) {
            if (elt.id == i) {
                if (elt["name"])
                    return callback(elt["name"]);
            }
        });
    } catch (e) {
        console.error(e);
    }
}

let cakes = [
    //Sweet
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
    //Vegetables
    new Cake(11, 1, "Пирог с капустой", "капуста", "images/cakes/cabbage.jpg"),
    new Cake(12, 1, "Пирог с капустой и яйцом", "капуста, яйцо", "images/cakes/cabbage_egg.jpg"),
    new Cake(13, 1, "Пирог с капустой и грибами", "капуста, грибы", "images/cakes/cabbage_mushrooms.jpg"),
    new Cake(14, 1, "Пирог с картофелем", "картофель, лук, зелень", "images/cakes/potato.jpg"),

    //hearty
    new Cake(15, 2, "Пирог с сыром", "сыр, зелень", "images/cakes/chees.jpg"),
    new Cake(16, 2, "Пирог с сыром и грибами", "сыр, грибы, зелень", "images/cakes/chees_mushrooms.jpg"),
    new Cake(17, 2, "Пирог с курицей", "курица, картофель, лук, зелень", "images/cakes/chiken.jpg"),
    // new Cake(18, 2, "Пирог с свининой", "свинина, картофель, лук, зелень", "images/cakes/pig.jpg"),
    new Cake(18, 2, "Пирог с говядиной", "говядина, картофель, лук, зелень", "images/cakes/beef.jpg"),
    new Cake(19, 2, "Пирог \"Жульен\"", "курица, сыр, грибы, лук, зелень", "images/cakes/julien.jpg"),
    new Cake(20, 2, "Пирог c cёмгой", "сёмга, картофель, лук, зелень", "images/cakes/salmon.jpg"),
    new Cake(21, 2, "Пирог с индейкой и картофелем", "сёмга, картофель, лук, зелень", "images/cakes/turkey_potato.jpg"),
    new Cake(22, 2, "Пирог с индейкой и капустой с грибами", "филе индейки, капуста, грибы, лук, зелень", "images/cakes/turkey_cabbage_mushrooms.jpg"),
    new Cake(23, 2, "Пирог с горбушей и картофелем", "горбуша, картофель, лук, зелень", "images/cakes/pink_salmon_potato.jpg"),
    new Cake(24, 2, "Пирог с судаком и картофелем", "судак, картофель, лук, зелень", "images/cakes/zander_potato.jpg"),
    new Cake(25, 2, "Пирог с индейкой и рисом с грибами", "филе индейки, рис, грибы, лук, зелень", "images/cakes/turkey_rice_mushrooms.jpg"),
    new Cake(26, 2, "Пирог с горбушей и рисом", "горбуша, картофель/рис, лук, зелень", "images/cakes/pink_salmon_rice.jpg"),
    new Cake(27, 2, "Пирог с судаком и рисом", "судак, рис, лук, зелень", "images/cakes/zander_rice.jpg"),



];





//module.exports = CakesType;
module.exports = Cake;