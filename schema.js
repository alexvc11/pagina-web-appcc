const { Schema } = require("mongoose");
const { stringify } = require("node:querystring");
const mongoose = require("mongoose")

const DB = mongoose.Schema({
    N: Number,
    tit_preg: String,
    Opc_A: String,
    Opc_B: String,
    Opc_C: String,
    Opc_D: String,
    Resp: String,
    Resp_TXTA: String
});
module.exports = mongoose.model("Preguntas", DB)