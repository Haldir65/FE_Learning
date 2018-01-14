var express = require('express');
var studentSchema = require('../schemas/student');
var mongoose = require('mongoose');
var app = express.Router();

// people.use(function(req, res, next) {
// });

var Student = mongoose.model('Student', studentSchema);


app.get('/home', function(req, res){
    res.render('home', {
        title: "This Title",
        body: "such body"
    })
    
});


// /student/all 
app.get('/all/', function(req,res){
    var result = {};
    result = Student.find({}, function (err,students) {
        if(err) {
           console.log(err) ;
        } else {
            // res.send(students);
            res.render('students/list/all', {
                title: "All students in the list",
                students: students
            })
        }
    });
});



// /student/12 
app.get('/getById/:age', function(req,res){
    var result = {};
    var _age = req.params.age;
    result = Student.find({
        age : _age
    }, function (err,students) {
        if(err) {
           console.log(err) ;
        } else {
            // res.send(students);
            res.header("Content-Type", "text/html");
            res.render('students/list/all', {
                title: `students whose age is === ${_age}`,
                students: students
            })
        }
    });
});



// /student/all 
app.get('/add/', function(req,res){
    res.render('students/add/add', {
        title: "Click that buttom to add student"
    });
});

// add a specific student to db
var addStudent = app.post('/add/',function(req,res){
    var studentName = req.body.name;
    var studentAge = req.body.age;
    var student = new Student( {
        _id: new mongoose.Types.ObjectId(),
        name: studentName,
        age: studentAge
    });

    student.save(function(err) {
        if (err) throw err;
        else {
            // console.log('Author updated successfully');
            res.redirect('/student/all');
        }
    });
});







module.exports.router = app;
module.exports.addStudent = addStudent;
