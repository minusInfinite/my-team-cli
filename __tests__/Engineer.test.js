const Engineer = require("../lib/Engineer.js")

describe("Engineer", () => {
    describe("Initiailisation", () => {
        it("Create an object with name, id and email with the 'new' keyword", () => {
            const obj = new Engineer(
                "Howard",
                1,
                "howard@company.com",
                "howard"
            )

            expect(obj.name).toBe("Howard")
            expect(obj.id).toBe(1)
            expect(obj.email).toBe("howard@company.com")
            expect(obj.github).toBe("howard")
            expect(obj.getRole()).toBe("Engineer")
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
