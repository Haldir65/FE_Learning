var express = require('express');
var mongoose = require('mongoose');
var studentSchema = require('../schemas/student');
// import {generateUrl} from'../service/imgservice'
var app = express.Router();

var Student = mongoose.model('Student', studentSchema);


/* 
GET 
/api/user */
app.get("/user",function (req,res) {
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


// /* POST 
// /api/user
// */
// router.post("/user",function (req,res) {
//     console.log(req.body);
//     res.send({
//         "name":"John",
//         "age":10
//     });
// });

// /* GET 
// /api/img/?imgId=6666
// */
// router.get("/img",function (req,res) {
//     console.log(req.query.imgId);
//     res.send({
//         "name":"John",
//         "age":10
//     });
// });



// ## /api/student/all/
app.get('/all/', function(req,res){
    var result = {};
    result = Student.find({}, function (err,students) {
        if(err) {
           console.log(err) ;
        } else {
            res.send(students);
            // res.render('students/list/all', {
            //     title: "All students in the list",
            //     students: students
            // });
        }
    });
});

///  /api/student/queryById?id=5a584a9d1b0f202248cf61ea
app.get('/queryById', function(req,res){
    var result = {};
    var id = req.query.id;
    result = Student.findById(id, function (err,students) {
         console.log(id);
        console.log(students);
        if(err) {
           console.log(err) ;
        } else {
            res.send(students);
            // res.render('students/list/all', {
            //     title: "All students in the list",
            //     students: students
            // });
        }
    });
});


///  /api/student/add
app.post('/add', function(req, res) {
    var studentInfo = req.body;
    var student = new Student({name :studentInfo.name, age: studentInfo.age});
    student.save(function (err,student){
        if(err) {
           return console.error(err);
        }
    });
    res.send(studentInfo);
});

// update info
app.post('/update/', function(req, res) {
    var studentInfo = req.body;
    console.log(studentInfo.id);
    Student.findByIdAndUpdate( studentInfo.id ,{ name: studentInfo.name, age: studentInfo.age }, function(err,student){
        if(err){
            return console.error(err);
        }
        console.log(student);
        res.send(student);
    });
});

app.post('/delete/', function (req,res){
    var studentInfo = req.body;
    Student.findByIdAndRemove( studentInfo.id ,function(err){
        if(err){
            return console.error(err);
        }
        res.send("success");
    });  
});






module.exports = app;