function CakesType(i, n, t) {
    this.id = i;
    this.name = n;
    this.tagline = t;
}

function Cake(id, ct, n, path) {
    this.id = id;
    this.cakeType = ct;
    this.name = n;
    this.img = path;
    //this.filling=f;
}

let cakesType = [
    new CakesType(0, "Сладкие пироги", "Сладкая мечта на блюде"),
    new CakesType(1, "Овощные пироги", "Съешь всё до последней крошки"),
    new CakesType(2, "Сытные пироги", "С пылу, с жару")
];

let cakes = [
    new Cake(0, 0, "Пирог с яблоком", "images/cakes/apple.jpg"),
    new Cake(0, 0, "Пирог с яблоком и брусникой", "images/cakes/apple_with_lingonberry.jpg"),
    new Cake(0, 0, "Пирог с вишней", "images/cakes/cherry.jpg"),
    new Cake(0, 0, "Пирог с клубникой", "images/cakes/strawberry.jpg"),
    new Cake(0, 0, "Пирог с брусникой", "images/cakes/lingonberry.jpg"),
    new Cake(0, 0, "Пирог  \"Венский\" ", "images/cakes/venskiy.jpg"),
    new Cake(0, 0, "Пирог  \"День и ночь\"", "images/cakes/day_and_night.jpg"),
    new Cake(0, 0, "Пирог  \"Нежность\"", "images/cakes/fondness.jpg"),
    new Cake(0, 0, "Пирог  \"Маковый\"", "images/cakes/poppy.jpg"),
];
Cake.prototype.getCakes = function(callback) {
        callback(cakes);
    }
    //console.log(cakesType);
    //console.log(cakes);

//module.exports = CakesType;
module.exports = Cake;