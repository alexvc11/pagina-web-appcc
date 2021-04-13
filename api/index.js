const express = require("express");
const api = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const data = require("./routes/data-route.js");


api.use("/api/data", data);



module.exports = api;

