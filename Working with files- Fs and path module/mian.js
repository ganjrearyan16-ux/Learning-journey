const { error } = require("console")
const fs = require ("fs")

// console.log(fs)
console.log("starting")
// fs.writeFileSync("Aryan.txt","Aryan is a good boy")
fs.writeFile("Aryan2.txt","Aryan is a good boy",()=>{
    console.log("done")
    fs.readFile("Aryan2.txt",(error, data)=>{
        console.log(error, data.toString())
    })
})
fs.appendFile("Aryan.txt","AryanVG", (e, d)=>{
    console.log(d)
})
console.log("ending")