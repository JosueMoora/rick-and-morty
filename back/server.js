// const http = require("http")
// const getCharById = require('./src/controllers/getCharbyId')
// const getCharDetail = require('./src/controllers/getCharDetail')
// const PORT = 3001
// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     let id = req.url.split('/').at(-1)
//     if (req.url.includes('onsearch')){
//          getCharById(res, id) 
//     }
//     if (req.url.includes('detail')){
//         getCharDetail(res, id)
//     }

// }).listen(PORT, 'localhost')

const express = require('express')
const server = express()
const router = require('./src/routes/index')
const cors = require('cors')

server.use(cors())
server.use(express.json())
server.use("/rickandmorty", router)
server.use("/favs", router)
server.listen(3001, ()=> {
    console.log('Server raised in port ' + 3001);
})