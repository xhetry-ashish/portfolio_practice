import express from "express";
import dotenv from "dotenv";
import databaseConfig from "./config.js";
import profileRoute from "./src/routes/userProfile.js";
dotenv.config();
const port = process.env.PORT;
const api = process.env.API;
const app = express();


// const mongoose = require('mongoose');

// const port = process.env.PORT;
// const api = process.env.API;
//import profileRoute from './src/routes/userProfile';
//const profileRoute = require('./src/routes/userProfile')
//const databaseConfig = require('./config')

//middleware
app.use(express.json());

//routes
app.use(`${api}user`, profileRoute);

//database connection
databaseConfig();

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
