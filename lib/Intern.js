const Employee = require("./Employee.js")

class Intern extends Employee {
    #_school
    constructor(name, id, email, school) {
        super(name, id, email)
        this.#_school = school
        this.role = "Intern"
    }

    get school() {
        return this.#_school
    }

    set school(value) {
        this.#_school = value
    }

    getSchool() {
        return this._school
    }

    // getRole() {
    //     return "Intern"
    // }
}

module.exports = Intern
