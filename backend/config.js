// const mongoose = require("mongoose");
// require("dotenv/config");
import mongoose from "mongoose";
import { config } from "dotenv";


//database connection

const databaseConfig = () => {
  mongoose
    .connect(process.env.CONNECTION_STRING_ATLAS)
    .then(() => {
      console.log("Database Connection Ready...");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default databaseConfig;
