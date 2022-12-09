const managersCard = function(manager) {
    return `
    <div>
        <div class="card">
            <div class="cardheader">
                <h3 class="name">${manager.name}</h3>
                <h4 class="role">Manager</h4>
            </div>
            <div class="cardbody">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`
};

const engineersCard = function(engineer) {
    return `
    <div>
        <div class="card">
            <div class="cardheader">
                <h3 class="name">${engineer.name}</h3>
                <h4 class="role">Engineer</h4>
            </div>
            <div class="cardbody">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>`
};

const internsCard = function(intern) {
    return `
    <div>
        <div class="card">
            <div class="cardheader">
                <h3 class="name">${intern.name}</h3>
                <h4 class="role">Intern</h4>
            </div>
            <div class="cardbody">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>`
};

const generateHTML = function(data) {
    pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = managersCard(employee);
            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = engineersCard(employee);
            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = internsCard(employee);
            pageArray.push(internCard);
        }

    }
    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
};
const generateTeamPage = function(employeeCards) {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <h1 class="title">Team Profiles</h1>
      <main>
          <div class="container">
              <div id="team-cards">
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  </html>`
};

module.exports = generateHTML;