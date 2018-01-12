// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");


inquirer.prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'username',
            },

            {
                type: 'password',
                message: 'Please set your alias',
                name: 'alias',
            },

            {
                type: 'list',
                message: 'Who is your favorite Superhero?',
                choices: ['Deadpool', 'Wolverine', 'Green Hornet', 'other'],
                name: 'superhero',
            },

            {
                type: 'checkbox',
                message: 'Time To Choose Your Super Power!',
                name: 'superPowers',
                choices: [
                    'Run Faster Than A Bullet',
                    'Take Flight and Soar Into The Clounds',
                    'Invisability',
                    'Throw fire bolts'
                    ]
                },

                {
                    type: 'checkbox',
                    message: 'Time To Choose Your Secondary Power!',
                    name: 'secondaryPowers',
                    choices: [
                        'X Ray Vision',
                        'Breathe Under Water',
                        'Mind Reader'
                        ]
                    },

                    {
                        type: 'confirm',
                        message: 'Are you happy with your powers?',
                        name: 'confirm',
                        default: true
                    },


                ]).then(function(user) {


                if (user.confirm) {

                    console.log("Welcome " + user.name);
                    console.log("Your " + user.superPowers.join(" and ") + " is armed and ready for battle!\n");
                } else {
                    console.log("Too bad " + user.join(" and ") + ", because you are about to get your ass kicked!\n");
                }
            });

            // need to stringify