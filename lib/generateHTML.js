// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

// function showProfile(position) {
//     if (position === 'Employee') {
//         var employeeProfile = document.createElement('div');
//         employeeProfile.className('profile');
//         var employeeHeader = document.createElement('section');
//         employeeHeader.className('profileHeader');
//         employeeProfile.append(employeeHeader);
//     } 
// }
// function getName(employeeName) {
//     var employeeName = document.createElement('h3');
//     employeeHeader.append(employeeName);
// }

// important for connecting back different strings!! 
function getRole(position) {
    if (position = "Employee") {
        return `${position}`
    }
    // var employee = document.createElement('h4');        
    // employeeHeader.append(employee);
}
// function getId(employeeid) {
//     var employeeid = document.createElement('p');
//     employeeProfile.append(employeeid);
// }
// function getEmail(employeeEmail) {
//     var employeeEmail = document.createElement('p');
//     //may need toggling
//     employeeEmail.setAttribute('a', `${employeeEmail}`)
//     employeeEmail.setAttribute('href', `mailto:${employeeEmail}`)
//     employeeProfile.append(employeeEmail);
// }
// function nextProfile(additionalMembers) {
//     if('Yes, add more' === true) {
//         //go back to create profile
//     } else {
//         //finish and inititalize HTML file 
//     }
// }


function generateEmployee(data) {
    return `
    Name: ${data.employeeName}
    Role: ${getRole(data.position)}
    Email: ${data.employeeEmail}
    Employee ID: ${data.employeeid}`
    // ${getName(data.employeeName)}
    // ${getRole(data.position)}
    // Email: ${getEmail(data.employeeEmail)}
    // Employee ID: ${getId(data.employeeid)}
    
}
module.exports = generateEmployee;
