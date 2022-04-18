const express= require('express');
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');
const port = process.env.PORT;
const api = process.env.API;
const profileRoute = require('./src/routes/userProfile')
const databaseConfig = require('./config')

//middleware
app.use(express.json())


//routes
app.use(`${api}user`,profileRoute);

//database connection
databaseConfig();


app.listen(port,()=>{
    console.log(`Server is running on https://localhost:${port}`)
})
