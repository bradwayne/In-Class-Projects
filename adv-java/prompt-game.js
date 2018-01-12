
var inquirer = require("inquirer");


function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    this.printStats = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position +
            "\noffense: " + this.offense + "\ndefense: " + this.defense);
    };
}


// var count = 0;

var playerArray = [];
var createPlayer = function() {
    inquirer.prompt(
            [{
                    name: "name",
                    message: "Player's name?"
                }, {
                    name: "position",
                    message: "What is your position?"
                },
                {
                    name: "offense",
                    message: "What is your offensive strength?"
                },
                {
                    name: "defense",
                    message: "What is your defensive strength?"
                }

            ])
        .then(function(answers) {
            var newGamer = new Player(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense
            );

            playerArray.push(newGamer);
            if (playerArray.length < 3) {
                createPlayer();
            } else {
                for (var x = 0; x < playerArray.length; x++) {
                    playerArray[x].printStats();
                }
            };

        });
};

createPlayer();

var offense = Math.floor(Math.random() * 20) + 1;
var defense = Math.floor(Math.random() * 20) + 1;

