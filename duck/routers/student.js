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
            res.render('students/studentlist', {
                title: "All students in the list",
                students: students
            })
        }
    });
});


// add a specific student to db
app.post('/add/',function(req,res){
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
            console.log('Author updated successfully');
            res.redirect('/students/');
        }
    });
});


// /student/all 
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
            res.render('students/studentlist', {
                title: "All students in the list",
                students: students
            })
        }
    });
});



// find a specific student ById 
// app.get('/students/', function(req,res){
//     var result = {};
//     result = Student.find({
//         age: 26
//     }, function (err,students) {
//         if(err) {
//            console.log(err) ;
//         } else {
//             res.send(students);
//         }
//     });
// });
module.exports.router = app;