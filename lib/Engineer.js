const Employee = require("./Employee.js")

/**
 * Engineer Class
 * @extends Employee
 */
class Engineer extends Employee {
    #_github
    /**
     *
     * @param {String} name
     * @param {Number} id
     * @param {String} email
     * @param {String} github
     */
    constructor(name, id, email, github) {
        super(name, id, email)
        this.#_github = github
        this.role = "Engineer"
    }

    get github() {
        return this.#_github
    }

    set github(value) {
        this.#_github = value
    }

    getGithub() {
        return this._github
    }

    // getRole() {
    //     return "Engineer"
    // }
}

module.exports = Engineer
