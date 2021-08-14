const Manager = require("../lib/Manager.js")

describe("Manager", () => {
    describe("Initiailisation", () => {
        it("Create an object with name, id and email with the 'new' keyword", () => {
            const obj = new Manager(
                "Howard",
                1,
                "howard@company.com",
                "08 8383 2626"
            )

            expect(obj.name).toBe("Howard")
            expect(obj.id).toBe(1)
            expect(obj.email).toBe("howard@company.com")
            expect(obj.officeNumber).toBe("08 8383 2626")
        })

        // it("Should throw and Error if no params are provided", () => {
        //     const cb = () => new Employee()

        //     expect(cb).toThrow()
        // })

        // it("Should throw an error if name, id or email is not valid are not provided", () => {
        //     const justName = () => new Employee("Howard")

        //     expect(justName).toThrow()
        // })
    })
})
