const Employee = require("./Employee.js")
/**
 * Manager Class
 * @extends Employee
 */
class Manager extends Employee {
    /**
     *
     * @param {String} name
     * @param {Number} id
     * @param {String} email
     * @param {String} officeNumber
     */
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        if (typeof officeNumber !== "string" || !name.trim().length) {
            throw new Error("Office Number cannot be empty")
        }
        this.officenumber = officeNumber
        this.role = "Manager"
    }

    // getRole() {
    //     return "Manager"
    // }

    exportHtml() {
        return `
        <div class="card">
                <div class="card-header">
                    <h2 class="employee-name">${this.name}</h2>
                    <i class="icon fas fa-coffee"></i><span> ${this.role}</span>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${this.id}</li>
                        <li>
                            Email:<a href="mailto://${this.email}">${this.email}</a>
                        </li>
                    <li>
                        Office No.: ${this.officenumber}</a>
                    </li>
                    </ul>
                </div>
            </div>
        `
    }
}

module.exports = Manager
