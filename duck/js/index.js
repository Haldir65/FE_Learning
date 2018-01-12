var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var studentSchema = require('../schemas/student');

const uri = 'mongodb://localhost/mydb';

mongoose.connect(uri, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', function() {
    console.log('error happend');
});
db.once('open', function() {
  // we're connected!
  console.log('we are connected!');
});


var app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// setup port number 
app.set('port',(process.env.PORT || 8989));

// setup mongoose schema

var Student = mongoose.model('Student', studentSchema);



app.get('/students/', function(req,res){
    var result = {};
    result = Student.find({}, function (err,students) {
        if(err) {
           console.log(err) ;
        } else {
            res.send(students);
        }
    });
});


// add a specific student to db
app.post('/students/add',function(req,res){
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

app.listen(app.get('port'),function () {
    console.log('server started on port '+app.get('port'));
});
