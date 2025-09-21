const EventEmitter = require("events")

class NewEvent extends EventEmitter {};

const newEmitter = new NewEvent();

newEmitter.on("hello", () => {
    console.log('Hello World')
})

newEmitter.emit("hello")

