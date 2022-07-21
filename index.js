const inquirer = require('inquirer');
const template = requrie('./src/html-template')

// import classes from lib folder
const { Manager, managerPrompts} = require('./lib/Manager');
const { Engineer, engPrompts } = require('./lib/Engineer');
const { Intern, internPrompts } = require('./lib/Intern');

// create empty array to push team members to
const teamArray = [];

// declare start function so that it begins with the manager
const start = () => { managerQs() };

// prompts questions from manager.js and creates a new Manager using constructing function and pushes that new object to the teamArray
// then sends user to choose a new employee type to add
const managerQs = () => {
    inquirer.prompt(managerPrompts)
    .then(answers => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        teamArray.push(manager);
        return newEmployee();
    })
}

// engineer questions prompted, creates a new engineer object and pushes that to the team array
// brings user back to menu to either add employee or finish building their team 
const engineerQs = () => {
    inquirer.prompt(engPrompts)
    .then(answers => {
        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamArray.push(engineer);
        return newEmployee();
    })
}

// same this as previous manager and engineer functions above
const internQs = () => {
    inquirer.prompt(internPrompts)
    .then(answers => {
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamArray.push(intern)
        return newEmployee();
    })
}

// creates a menu of sorts to allow the user to select a new type of employee to add or finish building their team 
const newEmployee = () => {
    inquirer.prompt([{
        type: 'list', 
        name: 'teamMember', 
        message: 'what would you like to add next?',
        choices: [
            {name: 'engineer', value: 'newEngineer'},
            {name: 'intern', value: 'newIntern'}, 
            {name: 'complete', value: 'complete'}
        ]
    }])
    // depending on the answer to the prompt named teamMember, launches corresponding function to prompt user for employee info 
    .then( answer => {
        if (answer.teamMember === 'newEngineer') {
            engineerQs()
        } else if (answer.teamMember === 'newIntern') {
            internQs()
        } else if (answer.teamMember === 'complete') [
            // write HTML file
            console.log(teamArray)
        ]

    })
}


start();