const Employee = require("../lib/Employee.js")

describe("Employee", () => {
    describe("Initiailisation", () => {
        it("Create an object with name, id and email with the 'new' keyword", () => {
            const obj = new Employee("Howard", 1, "howard@company.com")

            expect(obj.name).toBe("Howard")
            expect(obj.id).toBe(1)
            expect(obj.email).toBe("howard@company.com")
            expect(obj.getRole()).toBe("Employee")
        })

        it("Should throw and Error if no params are provided", () => {
            const cb = () => new Employee()

            expect(cb).toThrow()
        })

        it("Should throw an error if name, id or email is not valid are not provided", () => {
            const justName = () => new Employee("Howard")
            const nameId = () => new Employee("Howard", 1)
            const nameWrong = () => new Employee(10, 1, "howard@company.com")
            const idString = () =>
                new Employee("howard", "1", "howard@company.com")
            const emailWrong = () =>
                new Employee("howard", 1, "howardcompany.com")

            expect(justName).toThrow()
            expect(nameId).toThrow()
            expect(nameWrong).toThrow()
            expect(idString).toThrow()
            expect(emailWrong).toThrow()
        })

        it("Name should be in Title Case", () => {
            const obj1 = new Employee("howard", 1, "howard@company.com")
            const obj2 = new Employee("jesse", 1, "howard@company.com")
            const obj3 = new Employee("moe", 1, "howard@company.com")

            expect(obj1.name).toBe("Howard")
            expect(obj2.name).toBe("Jesse")
            expect(obj3.name).toBe("Moe")
        })
    })
})
