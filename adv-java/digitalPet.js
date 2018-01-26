
function DigitalPet() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function () {
        if (this.hungry === true) {
            console.log('That was Yummy!');
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log('No thanks! I\'m full.');
        }
    };

    this.sleep = function () {
        if (this.sleepy === true) {
            console.log('Zzzzzzzzz');
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log('No way! I\'m not tired!');
        }
    };

    this.play = function () {
        if (this.bored === true) {
            console.log('Yay! Let\'s play!');
            this.bored = false;
            this.hungry = true;
        }
        else {
            console.log('Not right now. Maybe later!');
        }
    };

    this.increaseAge = function () {
        this.age++;
        console.log('Happy Birthday to me! I am ' + this.age + ' years old!');
    };

};

    var dog = new DigitalPet();

    dog.outside = false;

    dog.bark = function () {
        console.log('Woof! Woof!');
    }

    dog.goOutside = function () {
        if (this.goOutside = false) {
            console.log('Yay! I love the outdoors!');
            this.outside = true;
            this.bark();
        } else {
            console.log('We\'re already outside though...!');
        }
    };

    dog.goInside = function () {
        if (this.outside = true) {
            console.log('Do we have to? Fine...');
            this.outside = false;
        } else {
            console.log('I\'m already inside...');
        }
    };

    var cat = new DigitalPet();

    cat.houseConditions = 100;

    cat.meow = function () {
        console.log('Meow! Meow!');
    }

    cat.destroyFurniture = function () {
        if (this.houseConditions - 10 > 0) {
            this.houseConditions -= 10;
            this.bored = false;
            this.sleepy = true;
            console.log('MUAHAHAHAHAHAHA! TAKE THAT FURNITURE!');
        } else {
            console.log('I\'ve already destroyed it all!');
        }
    };

    cat.buyNewFurniture = function () {
        this.houseConditions += 50;
        console.log('Are you sure about that?');
    };

    dog.bark();
    cat.destroyFurniture();
    cat.buyNewFurniture();
    dog.sleepy = true;
    dog.sleep();
    cat.hungry = true;
    cat.feed();
    cat.sleep();
