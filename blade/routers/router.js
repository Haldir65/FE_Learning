const express = require('express');
const router = express.Router();

/* 
GET 
/api/user */
router.get("/user",function (req,res) {
    res.set({
        'Content-Type': 'application/json',
        'Content-Length': '123',
        'ETag': '12345',
        'Cache-Control': 'max-age=5',
        "Access-Control-Allow-Origin": 'http://127.0.0.1:8080'
    });
    res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
    console.log('response send');
    res.json({
        "name":"John",
        "age":10
    });
});


/* POST 
/api/user
*/
router.post("/user",function (req,res) {
    console.log(req.body);
    res.send({
        "name":"John",
        "age":10
    });
});

/* GET 
/api/img/?imgId=6666
*/
router.get("/img",function (req,res) {
    console.log(req.query.imgId);
    res.send({
        "name":"John",
        "age":10
    });
});



module.exports = router;