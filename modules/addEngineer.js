//External Packages
const inquirer = require("inquirer")
const chalk = require("chalk")

//Class and Globals
const Engineer = require("../lib/Engineer")
const empTypePrompts = require("../globals/empTypePrompts")
const employees = require("../globals/empArr")

//Prompt pathing functions
const addIntern = require("./addIntern")
const finish = require("../utils/genhtml")

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Engineer's Name",
            },
            {
                type: "input",
                name: "email",
                message: "Engineer's email",
            },
            {
                type: "input",
                name: "github",
                message: "Engineer's Github Username",
            },
        ])
        .then((answers) => {
            const newEmp = new Engineer(
                answers.name,
                employees.length + 1,
                answers.email,
                answers.github
            )
            employees.push(newEmp.exportHtml())
            console.info(
                `✔️ ${chalk.green("Engineer added")} Currently ${
                    employees.length
                } employees Added`
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

module.exports = addEngineer
