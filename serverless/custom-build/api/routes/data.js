const express = require("express");
const router = express.Router();
const data2 = require("../database/schema")

router.get("/", (req, res) => {
    data2.find().exec().then(x => res.status(200).send(x))
})
router.post("/", (req, res) => { 
    data2.create(req.body).then(x => res.status(201).send(x));
    //console.log(req.body)
    //const data3 = new data2(req.body);
    //data3.save();
})
router.get("/count", (req, res) => {
    res.send("1")
})

module.exports = router;