// const Logger = require("./logger")

// const newLogger = new Logger()

// newLogger.on("message", (data) => {
//     console.log("Logging: ", data)
// })

// newLogger.log("GET", "/asliddin/lessons")
// newLogger.log("PUT", "/asliddin/lessons")
// newLogger.log("PATCH", "/asliddin/lessons")

const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        fs.readFile(path.join(__dirname, "public", 'index.html'), (err, content) => {
            if(err) throw err
            res.writeHead(200, {'Content-type' : 'text/html'})
            res.end(content)
        })
    } else if(req.url === "/about") {
        fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {
            if(err) throw err
            res.writeHead(200, {'Content-type' : 'text/html'})
            res.end(content)
        })
    }
})

server.listen(3000)