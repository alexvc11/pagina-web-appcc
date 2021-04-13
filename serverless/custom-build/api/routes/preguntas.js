const express = require("express");
const { CONNREFUSED } = require("node:dns");
const router = express.Router();
const path = require("path");
const cont_correc = process.env.PASSWORD;

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
    res.redirect("/contraseña");
})
router.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, "/main.js"))
})
router.get("/css", (req, res) => {
    res.sendFile(path.join(__dirname, "/main2.css"))
})
router.get("/contraseña", (req, res) => {
    res.sendFile(path.join(__dirname, "password.html"))
})
router.get("/contraseña/comprobar", (req,res) => {
    const contraseña = req.body;
    if(contraseña == cont_correc) {
        res.redirect("/");
    }
    else{
        alert("Contraseña incorrecta")
    }

})

module.exports = router;