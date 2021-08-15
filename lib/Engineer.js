const Employee = require("./Employee.js")

/**
 * Engineer Class
 * @extends Employee
 */
class Engineer extends Employee {
    /**
     *
     * @param {String} name
     * @param {Number} id
     * @param {String} email
     * @param {String} github
     */
    constructor(name, id, email, github) {
        super(name, id, email)
        if (typeof github !== "string" || !name.trim().length) {
            throw new Error("Github cannot be empty")
        }
        this.github = github
        this.role = "Engineer"
    }

    //Overwriting the default template for the Employee Card
    exportHtml() {
        return `
        <div class="card">
                <div class="card-header">
                    <h2 class="employee-name">${this.name}</h2>
                    <i class="icon fas fa-laptop-code"></i><span> ${this.role}</span>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${this.id}</li>
                        <li>
                            Email: <a href="mailto://${this.email}">${this.email}</a>
                        </li>
                        <li>
                            Github: <a href="https://github.com/${this.github}">@${this.github}</a>
                        </li>
                    </ul>
                </div>
            </div>
        `
    }
}

module.exports = Engineer
