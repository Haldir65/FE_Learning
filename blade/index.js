
const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
const path = require('path');
const studentRouter = require('./routers/studentRouter');
var fileUtils = require('./common/fileUtils');


// mongoose configuration
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

const port = process.env.port || 9889;


const app = express();


// app.get('/', (req, res) => res.send('Hello World!'));
// http://weizhifeng.net/node-js-exports-vs-module-exports.html

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// the order of middleware matters

// Serving static imgs for front end
app.use('/img', express.static(path.join(__dirname,"public/imgs")));

// jquery stuff
// app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// // serving bootstrap as static assets
// app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));

// 使用shift + alt +a 可以块注释

app.use('/api/student/',studentRouter);

app.get('/', function (req, res) {
    res.send({name: 'John', age: 10});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));