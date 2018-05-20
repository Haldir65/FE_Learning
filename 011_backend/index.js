const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
const path = require('path');



const app = express();

const port = process.env.port || 9679;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/img', express.static(path.join(__dirname,"public/imgs")));


var birds = require('./users/bird');
app.use('/birds',birds);

var community = require('./users/community');
app.use('/community',community);

app.get('/',function(req,res){
    res.send({name:"John",lastName:"Smith",age:32});
});

app.listen(port, () => console.log(`APP listen on port ${port}`));