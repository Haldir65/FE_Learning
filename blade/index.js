const express = require('express');
const app = express();

var fs = require('fs');
var path = require('path');

function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        onError(err);
        return;
      }
      filenames.forEach(function(filename) {
        fs.readFile(path.resolve(dirname, filename), 'utf-8', function(err, content) {
          if (err) {
            onError(err);
            return;
          }
          onFileContent(filename, content);
        });
      });
    });
  };

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/', function (req, res) {
    console.log('request made');
    readFiles(path.resolve('./imgs'), function onOpen(name, content) {
        console.log(`get file name ${name}`);
    }, function onError (error){
        console.log(error);
    })
    res.send({name: 'John', age: 10});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));