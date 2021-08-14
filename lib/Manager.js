const Employee = require("./Employee.js")

class Manager extends Employee {
    #_officenumber

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
