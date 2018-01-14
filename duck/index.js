var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var exphbs= require('express-handlebars');


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

app.set('views',path.join(__dirname,'views'));
app.engine('hbs',exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine','hbs');

// jquery stuff
// app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// serving bootstrap as static assets
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));


// setup port number 
app.set('port',(process.env.PORT || 8989));

// setup mongoose schema


// portal 
app.get('/',(req, res) => res.sendFile(path.resolve(__dirname,"index.html")));

// router for students
app.use('/student', require('./routers/student').router);

app.listen(app.get('port'),function () {
    console.log('server started on port '+app.get('port'));
});
