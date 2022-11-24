// name

// id

// email

// getName()

// getId()

// getEmail()

// github

// getGithub()

// getRole()  
function getRole(position) {
    if (position = "Engingeer") {
        return `${position}`
    }
}

function generateEngineer(data){
    return `
    Name: ${data.engineerName}
    Role: ${getRole(data.position)}
    Email: ${data.engineerEmail}
    Engineer ID: ${data.engineerid}
    GitHub: ${data.github}
    `
}
module.exports = generateEngineer;