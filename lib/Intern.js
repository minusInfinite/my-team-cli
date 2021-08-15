const Employee = require("./Employee.js")

/**
 * Intern Class
 * @extends Employee
 */
class Intern extends Employee {
    /**
     *
     * @param {String} name
     * @param {Number} id
     * @param {String} email
     * @param {String} school
     */
    constructor(name, id, email, school) {
        super(name, id, email)
        if (typeof school !== "string" || !name.trim().length) {
            throw new Error("School cannot be empty")
        }
        this.school = school
        this.role = "Intern"
    }

    //Overwriting the default template for the Employee Card
    exportHtml() {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="employee-name">${this.name}</h2>
                <i class="icon fas fa-user-graduate"></i><span> ${this.role}</span>
            </div>
            <div class="card-body">
                <ul>
                    <li>ID: ${this.id}</li>
                    <li>
                        Email: <a href="mailto://${this.email}">${this.email}</a>
                    </li>
                    <li>
                        School: ${this.school}
                    </li>
                </ul>
            </div>
        </div>
        `
    }
}

module.exports = Intern
