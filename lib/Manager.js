const Employee = require("./Employee.js")
/**
 * Manager Class
 * @extends Employee
 */
class Manager extends Employee {
    #_officenumber
    /**
     *
     * @param {String} name
     * @param {Number} id
     * @param {String} email
     * @param {String} officeNumber
     */
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.#_officenumber = officeNumber
        this.role = "Manager"
    }

    get officeNumber() {
        return this.#_officenumber
    }

    set officeNumber(value) {
        this.#_officenumber = value
    }

    // getRole() {
    //     return "Manager"
    // }
}

module.exports = Manager
