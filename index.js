// packages needed to run the app
const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

function addManager() {
inquirer
.prompt([
    {
            type: 'input',
            name: 'managerName',
            message: "What is the name of the team manager?"
    },

    {
        type: 'input',
        name: 'managerId',
        message: "What is the employee ID of the team manager?"
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the email address of the team manager?"
    },

    {
        type: 'input',
        name: 'managerOfficeNum',
        message: "What is the office number of the team manager?"
    },
])
}