class Employee {
    #_name
    #_id
    #_email
    /**
     * @param {String} name
     * @param {Number} id
     * @param {String} email
     */
    constructor(name, id, email) {
        this.#_name = name
        this.#_id = id
        this.#_email = email
        this.role = "Employee"
    }

    get name() {
        return this.#_name
    }

    get id() {
        return this.#_id
    }

    get email() {
        return this.#_email
    }

    set name(value) {
        if (!value || !value.trim().length || value.split(" ").length === 1) {
            throw new Error("Expected the name of an Employee")
        }
        this._name = value
            .toLowerCase()
            .split(" ")
            .map((word) => {
                return word.replace(word[0], word[0].toUpperCase())
            })
            .join(" ")
    }

    set id(value) {
        if (typeof value !== "number" || value <= 0 || isNaN(id)) {
            throw new Error("ID is expected to be a number greater than 1")
        }
        this._id = value
    }

    set email(value) {
        if (
            typeof value !== "string" ||
            !value.trim().length ||
            !value.includes("@")
        ) {
            throw new Error("Please enter a valid email address")
        }
        this._email = value.toLowerCase()
    }

    getRole() {
        return this.role
    }
}

module.exports = Employee
