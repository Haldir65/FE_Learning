
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routers/router');
const app = express();

const port = process.env.port||9889;

var fs = require('fs');

var fileUtils = require('./common/fileUtils');


// app.get('/', (req, res) => res.send('Hello World!'));
// http://weizhifeng.net/node-js-exports-vs-module-exports.html

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// the order of middleware matters

// Set Static Path
app.use(express.static(path.join(__dirname,'public')));

// 使用shift + alt +a 可以块注释

app.use('/api',router);

app.get('/', function (req, res) {
    fileUtils.scanFile( path.resolve('./imgs'), function onOpen(name, content) {
        console.log(`get file name ${name}`);
    }, function onError (error){
        console.log(error);
    })
    res.send({name: 'John', age: 10});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));