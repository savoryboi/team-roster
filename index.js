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
    createManager() {

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
    createEng() {

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
    createInt() {

    }
}

function mainMenu() {
    inquirer.prompt(menu)
    .then(answer => {
        if(answer.next === 'add an engineer') {
            newEngineer();
        }
        else if(answer.next === 'add an intern') {
            newIntern();
        } else {
            return;
        }
    })
}

function newEngineer() {
    inquirer.prompt(engPrompt)
        .then(({name, id, email, github}) => {
            var newEngineer = new Engineer(name, id, email, github)
        })
        .then(mainMenu)
}

function newIntern() {
    inquirer.prompt(internPrompt)
        .then(({name, id, email, school}) => {
            var newIntern = new Intern(name, id, email, school)
        })
        .then(mainMenu)
}

inquirer.prompt(managerPrompt)
    .then(({name, id, email, office}) => {
        var newManager = new Manager(name, id, email, office)
        console.log(newManager);
    })
    .then(mainMenu)
