// const http = require('http')
// const fs = require('fs')


//  const server = http.createServer((req,res )=>{
    
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)     
// } )

// server.listen(3000),
// console.log(`server abrido ujwu ${3000}`)

const express = require('express')

const app = express()
app.get('/', (req,res ) => {
    res.send('./static/index.html',{
        root:__dirname
    })
})

app.listen(3000)
console.log(`uwu port ${3000}`);