const Employee = require('./Employee');

const internPrompts = [
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

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole(){
        
        return 'Intern';
    }
}