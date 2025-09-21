const Logger = require("./logger")

const newLogger = new Logger()

newLogger.on("message", (data) => {
    console.log("Logging: ", data)
})

newLogger.log("GET", "/asliddin/lessons")
newLogger.log("PUT", "/asliddin/lessons")
newLogger.log("PATCH", "/asliddin/lessons")