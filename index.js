//creates HTML file
const generateHTML = require('./src/generateHTML')

//requirements
const inquirer = require('inquirer');
const fs = require('fs');

//connects files 
var Engineer = require('./lib/engineer.js');
var Intern = require('./lib/intern.js');
var Manager = require('./lib/manager.js');

var teamArray = [];
const managerPrompt = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: "What is this manager's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is this manager's ID?",
            name: 'id'
        },        
        {
            type: 'input',
            message: "What is this manager's email?",
            name: 'email'
        },        
        {
            type: 'input',
            message: "What is this manager's office number?",
            name: 'officeNumber'
        }]
    ).then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager)
    })
}
const addEmployee = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            message: "What is this employee's role?",
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            message: "What is this employees's name?",
            name: 'name'
        },        
        {
            type: 'input',
            message: "What is this employees's email?",
            name: 'email'
        },        
        {
            type: 'input',
            message: "What is this employees's ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is this employee's GitHub?",
            name: 'github',
            when: (input) => input.role === 'Engineer'
        },
        {
            type: 'input',
            message: "What is this employee's school?",
            name: 'school',
            when: (input) => input.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: "Would you like to add more employees?",
            default: false
        }
    ])
    .then(employeeData => {
        let {  name, id, email, role, github, school, addMore } = employeeData;
        let employee; //empty value 
        if (role === 'Engineer') {
            employee = new Engineer(name, email, id, github);
        } else if (role === 'Intern') {
            employee = new Intern(name, email, id, school);
            console.log(teamArray);
        }
        teamArray.push(employee);
        if (addMore) {
            return addEmployee(teamArray);
        } else {
            console.log(teamArray);
            return teamArray;
        }
    });
}

const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        console.log(data),
        err ? console.log(err) : console.log("HTML team profile has been created. Check dist folder to view the file.")
    })
}
 managerPrompt()
 .then(addEmployee)
 .then(teamArray => {
    return generateHTML(teamArray);
 })
.then(pageData => {
    return writeFile(pageData);
})
.catch(err => {
    console.log(err);
});