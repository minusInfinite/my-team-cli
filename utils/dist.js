const fs = require("fs/promises")

/**Make the folder for team page then copy the CSS file to it. */
function makeDist() {
    fs.mkdir("./dist/assets/css", { recursive: true })
        .then(() => {
            fs.copyFile(
                "./src/assets/css/style.css",
                "./dist/assets/css/style.css"
            )
        })
        .catch((err) => {
            throw err
        })
}

module.exports = makeDist
