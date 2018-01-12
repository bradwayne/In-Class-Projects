
// new constructor function
function Character(name, profession, gender, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;


    this.printStats = function () {
        console.log('\n--------------------------\n')
        console.log('Name: ' + this.name + '\nProfession: ' + this.profession +
            '\nGender: ' + this.gender + '\nAge: ' + this.age + '\nStrength: ' +
            this.strength + '\nHit Points: ' + this.hitPoints);
        console.log('\n--------------------------\n')

    }


    this.isAlive = function () {
        if (this.hitPoints > 0) {
            console.log(this.name + ' is still alive!!');
            return true;
        }
        console.log(this.name + ' has dead!');
        return false;
    };

    this.attack = function (target) {
        target.hitPoints -= this.strength;
    };

    this.levelUp = function () {
        this.age += 1;
        this.strength += 5;
        this.hitPoints += 25;
    };
}

var brad = new Character('brad', 'designer', 'M', 21, 15, 85);
var jenn = new Character('jenn', 'office manager', 'F', 23, 25, 50);

// created a sub-class from the original constructor
var mage = new Character('wilma', 'mage', 'F', 50, 15, 30);
mage.intelligence = 100;
mage.attack = function (target) {
    target.hitPoints -= this.intelligence;
}

brad.printStats();
jenn.printStats();

// jenn.attack(brad);
// brad.printStats();
// brad.isAlive();

// jenn.levelUp();
// jenn.printStats();

while (brad.isAlive() === true && jenn.isAlive() === true) {

    brad.attack(jenn);
    jenn.attack(brad);

    brad.levelUp();
    jenn.levelUp();

    brad.printStats();
    jenn.printStats();

}