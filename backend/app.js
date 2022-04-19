import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import databaseConfig from "./config.js";
import profileRoute from "./src/routes/userProfile.js";
dotenv.config();
const port = process.env.PORT;
const api = process.env.API;
const app = express();

//middleware
app.use(express.json());
app.use(morgan("tiny")); //keeping log

//enabling cors
app.use(cors());
app.options("*", cors());

//routes
app.use(`${api}/user`, profileRoute);

//database connection
databaseConfig();

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
