const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "papka"), {}, err => {
//     if(err) throw err
//     console.log("file yaratildi")
// })

// fs.writeFile(path.join(__dirname, "papka", "namuna.txt"), "Node js darslarini o'rganayabman", err => {
//     if(err) throw err
//     console.log("file yaratilddii")
// })


fs.appendFile(path.join(__dirname, "papka", "namuna.txt"), "Hello World", err => {
    if(err) throw err
    console.log("file update bo'ldi")
})

fs.readFile(path.join(__dirname, "papka", "namuna.txt"), "utf-8", (err, data) => {
    if(err) throw err
    console.log("bu filedagi data: " + data)
})


fs.rename(path.join(__dirname, "papka", "namuna.txt"), path.join(__dirname, "papka", "yangi.txt"), (err) => {
    if(err) throw err
    console.log("yangi file yaratildimi")
})