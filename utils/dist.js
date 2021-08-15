const fs = require("fs/promises")

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
