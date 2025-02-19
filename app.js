const express = require("express");
const dotnev = require("dotenv");

dotnev.config({ path: "./config.env" });

const app = express();

const morgan = require("morgan");

const cors = require("cors");

const Router = require("./Routes/Routes");

app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

app.use("/saylani", Router);

module.exports = app;
