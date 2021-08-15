/** @type {inquirer.QuestionCollection} */
const empTypePrompts = {
    type: "list",
    name: "empType",
    message: "Add another employee to the team?",
    choices: ["Engineer", "Intern", "Finsh"],
}

module.exports = empTypePrompts
