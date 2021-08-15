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
        })
    })
    describe("Errors", () => {
        it("Should throw and Error if no params are provided", () => {
            const cb = () => new Engineer()

            expect(cb).toThrow()
        })

        it("Should throw an error if Github is not valid are not provided", () => {
            const noGithub = () =>
                new Engineer("Howard", 1, "howard@company.com")

            expect(noGithub).toThrow()
        })
    })
})
