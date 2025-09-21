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
        const books = [
            {
                "id": 1,
                "title": "The Hitchhiker's Guide to the Galaxy",
                "author": "Douglas Adams",
                "genre": "Science Fiction",
                "published_year": 1979,
                "isbn": "978-0345391803",
                "available": true
            },
            {
                "id": 2,
                "title": "To Kill a Mockingbird",
                "author": "Harper Lee",
                "genre": "Classic Fiction",
                "published_year": 1960,
                "isbn": "978-0061120084",
                "available": false
            },
            {
                "id": 3,
                "title": "1984",
                "author": "George Orwell",
                "genre": "Dystopian Fiction",
                "published_year": 1949,
                "isbn": "978-0451524935",
                "available": true
            }
        ]
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(books)) 
    } else if(req.url === "/about") {
        fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {
            if(err) throw err
            res.writeHead(200, {'Content-type' : 'text/html'})
            res.end(content)
        })
    }
})

server.listen(3000)