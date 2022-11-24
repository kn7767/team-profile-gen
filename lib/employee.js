// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

function makeProfile(position) {
    if (position === 'employee') {
        var employeeProfile = document.createElement('div');
        employeeProfile.className('profile');
        var employeeHeader = document.createElement('section');
        employeeHeader.className('profileHeader');
        employeeProfile.append(employeeHeader);
    } else {
        return
    }
}

function getName(personName) {
    var personName = document.createElement('h3');
    employeeHeader.append(personName);
}
function getRole(employee) {
    var employee = document.createElement('h4');        
    employeeHeader.append(employee);
}
function getId(id) {
    var id = document.createElement('p');
    employeeProfile.append(id);
}
function getEmail(email) {
    var email = document.createElement('p');
    //may need toggling
    email.setAttribute('a', `${email}`);
    email.setAttribute('href', `mailto:${email}`);
    employeeProfile.append(email);
}

function generateEmployee(data) {
    return `
    ${getName(data.personName)}
    ${getRole(data.position)}
    Email: ${getEmail(data.email)}
    Employee ID: ${getId(data.id)}
    `
}