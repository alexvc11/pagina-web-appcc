const express = require("express");
const api = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
api.use(bodyParser.json());
api.use(cors());


mongoose.connect("mongodb+srv://alexvc12:Mgulahdn0mIvDxpe@torneoportugal.qgzdj.mongodb.net/Apuestas?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true}).then(() => console.log("coneixión con mongo completada"));
const data = require("./routes/data");

api.use("/data", data);


module.exports = api;

