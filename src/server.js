require('dotenv').config({path:'variable.env'})
const express = require('express')
const cors = require('cors');
const routerAnimes = require('./routes')
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const server = express()
server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}));
server.use('/api/v1/', routerAnimes)

const options = {
   
  };

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

server.listen(3000, ()=>{
    console.log("SERVIDOR RUNNING https://localhost:3000")
})

