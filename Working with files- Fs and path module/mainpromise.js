import fs from "fs/promises"

let a = await fs.readFile("Aryan.txt")
let b = await fs.appendFile("Aryan.txt","\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)