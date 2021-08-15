//node modules
const chalk = require("chalk")

//Add Manager modules
const addManager = require("./modules/addManager")

//utilities
const makeDist = require("./utils/dist")

function init() {
    makeDist()
    console.info(
        `💻 ${chalk.bold.underline(
            "This tool will assist in creating a Team page. Enter the Manager first."
        )}`
    )
    addManager()
}

init()
