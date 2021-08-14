const Employee = require("./Employee.js")

/**
 * Intern Class
 * @extends Employee
 */
class Intern extends Employee {
    #_school
    /**
     *
     * @param {String} name
     * @param {Number} id
     * @param {String} email
     * @param {String} school
     */
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
