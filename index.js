const inquirer = require('inquirer');
const fs = require('fs');

// import classes from lib folder
const { Manager, managerPrompts} = require('./lib/Manager');
const { Engineer, engPrompts } = require('./lib/Engineer');
const { Intern, internPrompts } = require('./lib/Intern');

const teamArray = [];


const start = () => { managerQs() };

const managerQs = () => {
    inquirer.prompt(managerPrompts)
    .then(answers => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamArray.push(manager);
        return newEmployee();
    })
}


const engineerQs = () => {
    inquirer.prompt(engPrompts)
    .then(answers => {
        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamArray.push(engineer);
        return newEmployee();
    })
}

const internQs = () => {
    inquirer.prompt(internPrompts)
    .then(answers => {
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamArray.push(intern)
        return newEmployee();
    })
}

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
    .then( answer => {
        if (answer.teamMember === 'newEngineer') {
            engineerQs()
        } else if (answer.teamMember === 'newIntern') {
            internQs()
        }

    })
}


start();