// template to create a manager card 

const manager = (arrayData) => {
    return `
    <section class="center" id="employees">
    <div class="row">
        <div class="col s4">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${arrayData.getName()}</span>
                    <p>${arrayData.getRole()}</p>
                    <a href="mailto: ${arrayData.getEmail()}">${arrayData.getEmail()}</a>
                </div>
                <div class="card-action">
                    <a href="#">Office #: ${arrayData.getOfficeNumber()}</a>
                    <a href="#">ID: ${arrayData.getId()}</a>
                </div>
            </div>
        </div>
    </div>
</section>
`
}

const engineer = (arrayData) => {
    return `
    <section class="center" id="employees">
    <div class="row">
        <div class="col s4">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${arrayData.getName()}</span>
                    <p>${arrayData.getRole()}</p>
                    <a href="mailto: ${arrayData.getEmail()}">${arrayData.getEmail()}</a>
                </div>
                <div class="card-action">
                    <a href="https://github.com/${arrayData.getGitHub()}">GitHub</a>
                    <a href="#">ID: ${arrayData.getId()}</a>
                </div>
            </div>
        </div>
    </div>
</section>
`
}

const intern = (arrayData) => {
    return `
    <section class="center" id="employees">
    <div class="row">
        <div class="col s4">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${arrayData.getName()}</span>
                    <p>${arrayData.getRole()}</p>
                    <a href="mailto: ${arrayData.getEmail()}">${arrayData.getEmail()}</a>
                </div>
                <div class="card-action">
                    <a href="#">Attends ${arrayData.getSchool()}</a>
                    <a href="#">ID: ${arrayData.getId()}</a>
                </div>
            </div>
        </div>
    </div>
</section>
`
}

const employeeContainer = teamArray => {
    // begin with empty string to be buit out using the for loop below
    let teamHtml = '';

    // iiterate through built out teamArray and add the templates above to the teamHtml string
    for(let i = 0; i < teamArray.length; i++) {
        if(teamArray[i].getRole() === 'Manager'){
            teamHtml += manager(teamArray[i])
        }
        if(teamArray[i].getRole() === 'Engigeer') {
            teamHtml += engineer(teamArray[i])
        }
        if(teamArray[i].getRole() === 'Intern') {
            teamHtml += intern(teamArray[i])
        }
    } 
    return teamHtml;
}

const template = teamData => {
    return `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>team roster</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
        <h1 class="center">♡ my team ♡</h1>
        <section class="center" id="employees">
        ${employeeContainer(teamData)}
        </section>
    </body>
    </html>
`
}

module.exports = template;