const express = require('express');
const app = express();

var fs = require('fs');
var path = require('path');

var fileUtils = require('./common/fileUtils');


// app.get('/', (req, res) => res.send('Hello World!'));
// http://weizhifeng.net/node-js-exports-vs-module-exports.html

app.get('/', function (req, res) {
    console.log('request made');
    fileUtils.scanFile( path.resolve('./imgs'), function onOpen(name, content) {
        console.log(`get file name ${name}`);
    }, function onError (error){
        console.log(error);
    })
    res.send({name: 'John', age: 10});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));