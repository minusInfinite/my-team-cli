const Intern = require("../lib/Intern.js")

describe("Intern", () => {
    describe("Initiailisation", () => {
        it("Create an object with name, id and email with the 'new' keyword", () => {
            const obj = new Intern(
                "Howard",
                1,
                "howard@company.com",
                "Adelaide Uni"
            )

            expect(obj.name).toBe("Howard")
            expect(obj.id).toBe(1)
            expect(obj.email).toBe("howard@company.com")
            expect(obj.role).toBe("Intern")
            expect(obj.school).toBe("Adelaide Uni")
        })
    })
    describe("Errors", () => {
        it("Should throw and Error if no params are provided", () => {
            const cb = () => new Intern()

            expect(cb).toThrow()
        })

        it("Should throw an error if School is not valid are not provided", () => {
            const noSchool = () => new Intern("Howard", 1, "howard@company.com")

            expect(noSchool).toThrow()
        })
    })
})
