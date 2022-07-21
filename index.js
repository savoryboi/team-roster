const inquirer = require('inquirer');
const fs = require('fs');

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