//External Packages
const inquirer = require("inquirer")
const chalk = require("chalk")

//Class and Globals
const Intern = require("../lib/Intern")
const empTypePrompts = require("../globals/empTypePrompts")
const employees = require("../globals/empArr")

//Prompt pathing functions
const addEngineer = require("./addEngineer")
const finish = require("../utils/genhtml")

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Intern's Name",
            },
            {
                type: "input",
                name: "email",
                message: "Intern's email",
            },
            {
                type: "input",
                name: "school",
                message: "Intern's School",
            },
        ])
        .then((answers) => {
            const newEmp = new Intern(
                answers.name,
                employees.length + 1,
                answers.email,
                answers.school
            )
            employees.push(newEmp.exportHtml())
            console.info(
                `✔️ ${chalk.green("Intern added")} Currently ${
                    employees.length
                } Added`
            )
        })
        .then(() => {
            inquirer.prompt(empTypePrompts).then((nextAns) => {
                if (nextAns.empType === "Engineer") {
                    addEngineer()
                }
                if (nextAns.empType === "Intern") {
                    addIntern()
                }
                if (nextAns.empType === "Finsh") {
                    finish("./dist/team.html", employees)
                }
            })
        })
        .catch((err) => console.error(err))
}

module.exports = addIntern
