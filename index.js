const inquirer = require('inquirer');
const fs = require('fs');

var generateEmployee = require('./lib/employee');
var generateEngineer = require('./lib/engineer.js');
var generateIntern = require('./lib/intern.js');
var generateManager = require('./lib/manager.js');
// const { create } = require('domain');

const getPosition = [
    {
        type: 'list',
        name: 'position',
        message: "Pick a position: ",
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
        message: "Enter employee ID #: "
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "Enter employee email address: "
    }
]

const getEngineer = [
    {
        type: 'input',
        name: 'engineerName',
        message: "Enter engineer name: "
    },
    {
        type: 'input',
        name: 'engineerid',
        message: "Enter engineer id: "
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Enter engineer email: "
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter engineer GitHub username: "
    },
]
const getIntern = [
    {
        type: 'input',
        name: 'internName',
        message: "Enter intern name: "
    },
    {
        type: 'input',
        name: 'intern',
        message: "Hello"
    }
]
const getManager = [

]

const addMore = [
    {
        type: 'list',
        name: 'additionalMembers',
        message: "Add more profiles?",
        choices: ['Yes, add more', 'No, generate the site']
    }
]

function createEmployeeProfile() {
    inquirer
    .prompt(getEmployee)
    .then(function(employeeData){
        let employeeResult = generateEmployee(employeeData);
        console.log(employeeResult);
        addProfile();
    })
}
function createEngineerProfile() {
    inquirer
    .prompt(getEngineer)
    .then(function(engineerData) {
        let engineerResult = generateEngineer(engineerData);
        console.log(engineerResult);
        addProfile();
    })
}
function createInternProfile() {
    inquirer
    .prompt(getIntern)
    .then(function(internData) {
        let internResult = generateIntern(internData);
        console.log(internResult);
        addProfile();
    })
}

function createManagerPofile() {

}

//building all position profiles
function createProfiles() {
    inquirer
    .prompt(getPosition)
    .then(function(position){
        if (position = "Employee") {
            createEmployeeProfile();
        } 
        else if (position = "Engineer") {
            createEngineerProfile();
        } 
        else if (position = "Intern") {
            createInternProfile();
        } 
        else if (position = "Manager") {
            createManagerPofile();
        }
        for(let i = 0; i < position.length; i++);
    })
}
function writeFile(fileName, data) {
    fs.writeHTML(fileName, data, error => {
        if (error) {
            throw error;
        } else console.log('HTML has been created.')
    })
}

function addProfile() {
    inquirer
    .prompt(addMore)
    .then(function() {
        if ('Yes, add more') {
            console.log('Create another profile:')
            // createProfiles();
        } else {
            console.log('====Generating site====')
            // fs.writeFile();
            return;
        } 
    }
    )
}

createProfiles();


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