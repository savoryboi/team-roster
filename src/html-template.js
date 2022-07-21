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
                    <a href="${arrayData.getEmail()}">${arrayData.getEmail()}</a>
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
                    <a href="${arrayData.getEmail()}">${arrayData.getEmail()}</a>
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
                    <a href="${arrayData.getEmail()}">${arrayData.getEmail()}</a>
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