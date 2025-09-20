const url = require("url")

const newUrl = new URL("https://github.com/search?q=repo%3Aasliddinrashidovich%2Fnode-js-darslari-bexruz%20index.js&type=code")

console.log(newUrl.href)
console.log(newUrl.host)
console.log(newUrl.hostName)
console.log(newUrl.pathname)
console.log(newUrl.search)
console.log(newUrl.searchParams)
newUrl.searchParams.append("value", "hozir")
console.log(newUrl.searchParams)