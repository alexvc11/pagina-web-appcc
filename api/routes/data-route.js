const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Prueba");
})
router.post("/", (req, res) => {
    res.sendStatus(201);
})

module.exports = router;