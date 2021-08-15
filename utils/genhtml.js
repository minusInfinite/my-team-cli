function genHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script
                src="https://kit.fontawesome.com/88694b2e1d.js"
                crossorigin="anonymous"
            ></script>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css"
            />
            <link rel="stylesheet" href="./assets/css/style.css" />
            <title>Our Project Team</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
            ${data.map((data) => `${data}`)}
            </main>
            </body>
        </html>
    `
}

function finsih(fileName, data) {
    fs.writeFile(fileName, genHTML(data))
        .then(() => console.info(`✔️ ${chalk.green("Html created:")}`))
        .catch((err) => console.error(err))
}

module.exports = finsih
