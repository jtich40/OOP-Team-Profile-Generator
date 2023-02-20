// packages needed to run the app
const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const teamMembers = []
const renderHtml = require('./src/template')



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
    .then(res => {
        const manager = new Manager(
            res.managerName,
            res.managerId,
            res.managerEmail,
            res.managerOfficeNum
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
    .then(choice => {
        if(choice.teamOption === 'Engineer') {
            addEngineer()
        }

        if(choice.teamOption === 'Intern') {
            addIntern()
        }

        if(choice.teamOption === "The team is complete, no additional members are needed.") {
            console.log("Let's build your team choice")
            fs.writeFileSync('./dist/index.html', renderHtml(teamMembers))
        }

    })
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
    .then(res => {
        const engineer = new Engineer(
            res.engineerName,
            res.engineerId,
            res.engineerEmail,
            res.engineerGithub
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
    .then(res => {
        const intern = new Intern(
            res.internName,
            res.internId,
            res.internEmail,
            res.internSchool
        )
        teamMembers.push(intern) 
        teamBuilder()
    })
}

