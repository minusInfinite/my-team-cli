const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const employee = new Employee("james", 1, "james@lopper.com")
const manager = new Manager("james", 1, "james@lopper.com", "08 9898 7878")
const engineer = new Engineer("james", 1, "james@lopper.com", "macaw")
const intern = new Intern("james", 1, "james@lopper.com", "Adelaide Uni")

console.log(`
Object      | Values
employee    | ${employee.name}    | ${employee.id}    | ${employee.email}     |
manager     | ${manager.name}     | ${manager.id}     | ${manager.email}      | ${manager.officeNumber}
engineer    | ${engineer.name}    | ${engineer.id}    | ${engineer.email}     | ${engineer.github}
intern      | ${intern.name}      | ${intern.id}      | ${intern.email}       | ${intern.school}
`)
