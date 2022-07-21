const Employee = require('./Employee');


const managerPrompts = [
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

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.officeNumber = officeNumber;
    }
    getRole() {

        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = { Manager, managerPrompts};