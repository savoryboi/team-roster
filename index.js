const inquirer = require('inquirer');
const fs = require('fs');
const { listenerCount } = require('process');


const menu = {
        type: 'list', 
        name: 'next', 
        message: 'what would you like to do next?',
        choices: ['add an engineer', 'add an intern', 'finish building my team']
    };



// function mainMenu() {
//     inquirer.prompt(menu)
//     .then(answer => {
//         if(answer.next === 'add an engineer') {
//             newEngineer();
//         }
//         else if(answer.next === 'add an intern') {
//             newIntern();
//         } else {
//             console.log('your team is complete! :)')
//             writetoHTML();
//         }
//     })
// }

// function newEngineer() {
//     inquirer.prompt(engPrompt)
//         .then(({name, id, email, github}) => {
//             var newEngineer = new Engineer(name, id, email, github)
//             console.log(newEngineer)
//         })
//         .then(mainMenu)
// }

// function newIntern() {
//     inquirer.prompt(internPrompt)
//         .then(({name, id, email, school}) => {
//             var newIntern = new Intern(name, id, email, school)
//             console.log(newIntern)
//         })
//         .then(mainMenu)
// }

// function writetoHTML() {

// }

// inquirer.prompt(managerPrompt)
//     .then()
//     .then(mainMenu)
