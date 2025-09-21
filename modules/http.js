const http = require("http")

const server = http.createServer((req, res) => res.end("Hello World, Salom Dunyo")).listen(3000)