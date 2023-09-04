require('dotenv').config({path:'variable.env'})
const express = require('express')
const cors = require('cors');
const routerAnimes = require('./routes')
const bodyParser = require('body-parser');

const server = express()
server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}));
server.use('/api/v1/', routerAnimes)



server.listen(3000, ()=>{
    console.log("SERVIDOR RUNNING https://localhost:3000")
})

