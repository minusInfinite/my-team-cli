class Employee {
    /**
     * @param {String} name
     * @param {Number} id
     * @param {String} email
     */
    constructor(name, id, email) {
        if (arguments.length === 0) {
            throw new Error("An Empty Object is not allowed")
        }
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Name cannot be empty")
        }
        if (typeof id !== "number" || isNaN(id) || id <= 0) {
            throw new Error("ID needs to be a number greater then 0")
        }
        if (
            typeof email !== "string" ||
            !email.includes("@") ||
            !email.trim().length
        ) {
            throw new Error("Please provided a valid email")
        }

        this.name = name
            .toLowerCase()
            .split(" ")
            .map((word) => {
                return word.replace(word[0], word[0].toUpperCase())
            })
            .join(" ")
        this.id = id
        this.email = email.toLowerCase()
        this.role = "Employee"
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }
}

module.exports = Employee
