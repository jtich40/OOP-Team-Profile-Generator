// packages needed to run the app
const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const teamMembers = []



const addManager = () => {
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
    .then(answers => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNum
        )
        teamMembers.push(manager) 
        teamBuilder()
    })
}

const teamBuilder = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'teamOption',
            message: "Which team member would you like to add next?",
            choices: [
                'Engineer',
                'Intern',
                "The team is complete, no additional members are needed."
            ]
        }
    ])
}

const addEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the name of the team engineer?"
        },
    
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the employee ID of the team engineer?"
        },
    
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the email address of the team engineer?"
        },
    
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the GitHub username of the team engineer?"
        },
    ])
    .then(answers => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub
        )
        teamMembers.push(engineer) 
        teamBuilder()
    })
}

const addIntern = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the name of the team intern?"
        },
    
        {
            type: 'input',
            name: 'internId',
            message: "What is the employee ID of the team intern?"
        },
    
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the email address of the team intern?"
        },
    
        {
            type: 'input',
            name: 'internSchool',
            message: "What school did the team intern attend?"
        },
    ])
    .then(answers => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
        )
        teamMembers.push(intern) 
        teamBuilder()
    })
}

