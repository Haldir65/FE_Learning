var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

var port = 9889;

/* var logger = function(req,res,next){
    console.log('logging...');
    next();
}
shift + alt+a 用于块注释
app.use(logger); */

// View Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// Set Static Path
app.use(express.static(path.join(__dirname,'public')))


/* var person = {
    name: 'Jeff',
    age: 20
}

var people = [
    {
        name: 'Jeff',
        age: 20
    },
    {
        name: 'Sara',
        age: 22
    },
    {
        name: 'Sam',
        age: 23
    }
]

app.get('/',function (req,res) {
    res.json(people);
}) */

var users = [
    {
        first_name: 'josh',
        last_name: 'dan',
        email: 'some@12.com'
    },
    {
        first_name: 'bob',
        last_name: 'ruan',
        email: 'sje@122.com'
    },
    {
        first_name: 'joe',
        last_name: 'zim',
        email: 'rock@12.com'
    }

]

app.get('/',function(req,res) {
    res.render('index',{
        title: 'Customers',
        users: users
    });
});

app.listen(port,function () {
    console.log('Server started on port '+port);
})