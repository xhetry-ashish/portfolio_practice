const mongoose = require("mongoose");
require("dotenv/config");

//database connection

const databaseConfig = () => {
  mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => {
      console.log("Database Connection Ready...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = databaseConfig;
