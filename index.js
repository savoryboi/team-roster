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

const menu = {
        type: 'list', 
        name: 'next', 
        message: 'what would you like to do next?',
        choices: ['add an engineer', 'add an intern', 'finish building my team']
    };

const engPrompt = [
    {
        type: 'input',
        name: 'eng_name',
        message: 'enter engineer\'s name:'
    },
    {
        type: 'input',
        name: 'eng_id',
        message: 'engineer\'s id:'
    },
    {
        type: 'input',
        name: 'eng_email',
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
        name: 'int_name',
        message: 'enter intern\'s name:'
    },
    {
        type: 'input',
        name: 'int_id',
        message: 'intern\'s id:'
    },
    {
        type: 'input',
        name: 'int_email',
        message: 'email address:'
    },
    {
        type: 'input',
        name: 'school',
        message: 'school:'
    } 
];

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        
    }
    getId() {

    }
    getEmail() {

    }
    getRole() {

        return Employee;
    }
}

//manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.officeNumber = officeNumber;
    }
    getRole() {

        return Manager;
    }
}

//engineer class 
class Engineer extends Employee {
   
    constructor(name, id, email, github) {
        super(name, id, email);
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.github = github;
    }
    getGitHub() {

    }
    getRole() {

        return Engineer;
    }
}
//intern class

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.school = school;
    }
    getSchool() {

    }
    getRole(){
        
        return Intern;
    }
}







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
