//node modules
const inquirer = require("inquirer")
const chalk = require("chalk")
const fs = require("fs/promises")

//class modules
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

//utilities
const makeDist = require("./utils/dist")
const finish = require("./utils/genhtml")

/** @type {inquirer.QuestionCollection} */
const empTypePrompts = {
    type: "list",
    name: "empType",
    message: "Add another employee to the team?",
    choices: ["Engineer", "Intern", "Finsh"],
}

/** @type {inquirer.QuestionCollection} */

const employees = []

function init() {
    makeDist()
    console.info(
        `💻 ${chalk.bold.underline(
            "This tool will assist in creating a Team page. Enter the Manager first."
        )}`
    )
    addManager()
}

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
                    finsih("./dist/team.html", employees)
                }
            })
        })
        .catch((err) => console.error(err))
}

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
                    finsih("./dist/team.html", employees)
                }
            })
        })
        .catch((err) => console.error(err))
}

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
                1,
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
                    finsih("./dist/team.html", employees)
                }
            })
        })
        .catch((err) => console.error(err))
}

init()
