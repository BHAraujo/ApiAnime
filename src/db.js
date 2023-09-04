require('dotenv').config({path:'../variable.env'})


const mysql = require('mysql2')


const connection = mysql.createConnection({
    port: process.env.DBCLIENT_PORT,
    user: process.env.DBCLIENT_USERNAME,
    password: process.env.DBCLIENT_PASSWORD,
    host: process.env.DBCLIENT_HOSTNAME,
    database: process.env.DBCLIENT_DATABASE
})


connection.connect((error)=>{
    if(error) throw error 
    console.log("DataBase " + process.env.DBCLIENT_DATABASE + " Connect...")

})


module.exports = connection
