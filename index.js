const inquirer = require('inquirer');
const fs = require('fs');

// var generateEmployee = require('./lib/employee.js');
// var generateEngineer = require('./lib/engineer.js');
// var generateIntern = require('./lib/intern.js');
// var generateManager = require('./lib/manager.js');
var generateEmployee = require('./lib/generateHTML');
// const { create } = require('domain');

const getPosition = [
    {
        type: 'list',
        name: 'position',
        message: "Welcome to the team profile generator. To start, pick the first team member's position: ",
        choices: ['Employee', 'Engineer', 'Intern', 'Manager']

    }
]

const getEmployee = [
    {
        type: 'input',
        name: 'employeeName',
        message: "Enter employee name: ",
        validate: employeeName => {
            if (employeeName) {
                return true;
            } else {
                console.log("Please enter a team member's name.");
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'employeeid',
        message: "Enter their employee ID #: "
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "Enter their email address: "
    }
]

const getEngineer = [
    {
        type: 'list',
        name: 'additionalMembers',
        message: "Add more profiles?",
        choices: ['Yes, add more', 'No, I am finished']
    }
]
const getIntern = [

]
const getManager = [

]

const addMore = [
    {
        type: 'list',
        name: 'additionalMembers',
        message: "Add more profiles?",
        choices: ['Yes, add more', 'No, generate the profiles']
    }
]

function addProfile() {
    inquirer
    .prompt(addMore)
    .then(function(additionalMembers) {
        //needs to be debugged
        if (additionalMembers === 'No, generate the profile') {
            console.log('Generating site...')
            // fs.writeFile();
        } else if (additionalMembers === 'Yes, add more') {
            console.log('Creating another profile...')
            createProfile();
        }}
    )
}

// function writeFile(fileName, data) {
//     fs.writeHTML(fileName, data, error => {
//         if (error) {
//             throw error;
//         } else console.log('HTML has been created.')
//     })
// }
function createEmployeeProfile() {
    inquirer
    .prompt(getEmployee)
    .then(function(employeeData){
        let employeeResult = generateEmployee(employeeData)
        console.log(employeeResult);
        addProfile();
    })
}
function createEngineerProfile() {
    inquirer
    .prompt(getEngineer)
    .then(function(engineerData) {
        console.log(engineerData)
    })
}
function createProfile() {
    inquirer
    .prompt(getPosition)
    .then(function(position){
        if (position = "Employee") {
            createEmployeeProfile();
        } else if (position = "Engineer") {
            createEngineerProfile();
        } else if (position = "Intern") {
            createInternProfile();
        } else if (position = "Manager") {
            createManagerPofile();
        }
    })
}
createProfile();


// function init() {
//     inquirer
//     .prompt(teamMembers)
//     .then(function(data){
//         console.log(data);

//         var result = generateHTML(data);
//         console.log(result);

//         fs.writeFile('./dist/index.html', result, (err) =>
//         err ? console.log(err) : console.log("HTML file has been created. Navigate to dist folder to find your index.html file.")
//         )
//     })
//     .then(result => {
//         return writeFile(result);
//     })
//     .catch(function(error){
//         console.log(error);
//     })
// }