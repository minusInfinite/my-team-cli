const Manager = require("../lib/Manager.js")

describe("Manager", () => {
    describe("Initiailisation", () => {
        it("Create an object with name, id, email and office number with the 'new' keyword", () => {
            const obj = new Manager(
                "Howard",
                1,
                "howard@company.com",
                "08 8383 2626"
            )

            expect(obj.name).toBe("Howard")
            expect(obj.id).toBe(1)
            expect(obj.email).toBe("howard@company.com")
            expect(obj.role).toBe("Manager")
            expect(obj.officenumber).toBe("08 8383 2626")
        })
    })
    describe("Errors", () => {
        it("Should throw and Error if no params are provided", () => {
            const cb = () => new Manager()

            expect(cb).toThrow()
        })

        it("Should throw an error if office is not valid are not provided", () => {
            const noOfficeNumber = () =>
                new Manager("Howard", 1, "howard@company.com")

            expect(noOfficeNumber).toThrow()
        })
    })
})
