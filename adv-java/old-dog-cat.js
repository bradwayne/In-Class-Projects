
var dogs = {

    raining: true,

    noise: "Woof!",

    makingNoise: function () {

        if (this.raining === true) {
            console.log(this.noise);
        }
    }
};

var cats = {

    raining: false,

    noise: "Moew!",

    makingNoise: function () {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
};

dogs.makingNoise();
cats.raining = true;
cats.makingNoise();

var massHysteria = function (dogs, cats) {
    if (dogs.raining === true && cats.raining === true) {
        console.log('Dogs and Cats Living Together!!! Mass Hysteria!!!');
    }
};

massHysteria(dogs, cats);