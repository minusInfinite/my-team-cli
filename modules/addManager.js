//External Packages
const inquirer = require("inquirer")
const chalk = require("chalk")

//Class and Globals
const Manager = require("../lib/Manager")
const empTypePrompts = require("../globals/empTypePrompts")
const employees = require("../globals/empArr")

//Prompt pathing functions
const addEngineer = require("./addEngineer")
const addIntern = require("./addIntern")
const finish = require("../utils/genhtml")

/** Trigger prompts to add a Manager to team page */
function addManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Manager's Name",
            },
            {
                type: "input",
                name: "email",
                message: "Manager's Email",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Manager's Office Number",
            },
        ])
        .then((answers) => {
            const newEmp = new Manager(
                answers.name,
                1,
                answers.email,
                answers.officeNumber
            )
            employees.push(newEmp.exportHtml())
            console.info(`✔️ ${chalk.green("Manager added")}`)
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

module.exports = addManager
