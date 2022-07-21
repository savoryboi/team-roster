const inquirer = require('inquirer');
const fs = require('fs');

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

function writeToHTML(answers) {
    const { name, id, email, office } = managerPrompt;
    const { eng_name, eng_id, eng_email, github} = engPrompt;
    const { int_name, int_id, int_email, school} = internPrompt;
}

function init() {

}

init();