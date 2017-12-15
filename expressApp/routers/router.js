const express = require('express');
const router = express.Router();


router.get("/employee",function (req,res) {
    res.send({
        "name":"John",
        "age":10
    });
});



router.post("/employee",function (req,res) {
    console.log(req.body);
    res.send({
        "name":"John",
        "age":10
    });
});


module.exports = router;