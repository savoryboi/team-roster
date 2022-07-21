const inquirer = require('inquirer');
const fs = require('fs');

// create arrays of questions for each type of team member
const managerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'enter team manager\'s name:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'employee id:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address:'
    },
    {
        type: 'input',
        name: 'office',
        message: 'office number:'
    }
];

const menu = [
    {
        type: 'list', 
        name: 'next', 
        message: 'what would you like to do next?',
        choices: ['add an engineer', 'add an intern', 'finish building my team']
    }
];

const engPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'enter engineer\'s name:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'engineer\'s id:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'github username:'
    }
];

const internPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'enter intern\'s name:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'intern\'s id:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address:'
    },
    {
        type: 'input',
        name: 'school',
        message: 'school:'
    } 
];


//manager class
class Manager {
    constructor(name, id, email, office){
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }
    
}

//engineer class 
class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
}
//intern class
class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
}


// function writeToHTML(answers) {
//     const { name, id, email, office } = managerPrompt;
//     const { eng_name, eng_id, eng_email, github} = engPrompt;
//     const { int_name, int_id, int_email, school} = internPrompt;
// }

function greeting() {
    inquirer.prompt('Hello, and welcome to the team roster builder!')
}

init();