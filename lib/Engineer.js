const Employee = require('./Employee');

const engPrompts = [
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

class Engineer extends Employee {
   
    constructor(name, id, email, github) {
        super(name, id, email);
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {

        return 'Engineer';
    }
}

module.exports = { Engineer, engPrompts}