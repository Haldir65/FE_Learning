
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = require('./routers/router');


var app = express();

var port = process.env.port||9889;

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
// the order of middleware matters



// Set Static Path
app.use(express.static(path.join(__dirname,'public')))


// use the middle ware
app.use('/api',router);


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


var sample = {
    code : 0,
    time : 1469981217,
    data : {
      items : [{
        date : "2016-08-02",
        state : 'sunny'
      },
      {
        date : "2016-08-03",
        state : 'Cloudy'
      }
      ],
    }
  }

app.get('/',function(req,res) {
    res.render('index',{
        title: 'Customers',
        users: users
    });
});


app.get('/users',function (req,res) {
    var usr = {
        name: 'John',
        id : 1
    }

    var users = [
        {
            name: 'John',
            id : 1
        },
        {
            name: 'Doe',
            id : 2
        },
        {
            name: 'Dimon',
            id : 3
        },
        {
            name: 'Sandy',
            id : 4
        }
    ]

 
      console.log(req.fresh+' '+req.stale);

    res.set({
        'Content-Type': 'application/json',
        'Content-Length': '123',
        'ETag': '12345',
        'Cache-Control': 'max-age=5'
    });
    res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
    console.log('response send');
    res.json(sample);
})


app.post('/api/personal', function (req, res) { //针对/api/personal 的 post请求返回
    // console.log(`request params = ${req.params}`);
    console.log(JSON.stringify(req.params))

    var output = '';
    for (var property in req.params) {
        console.log(property);
      output += property + ': ' + req.params[property]+'; ';
    }
    console.log(output);
    // console.log(req.body);
    // console.log(req.body);
    // console.log(` request body = ${req.body}`);
    // console.log(`request query = ${req.query}`);
    // console.log(JSON.stringify(req.query))
    console.log(req.params)
	res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
	res.end(JSON.stringify({
    code : 0,
    time : 1469981217,
    data:{
        name: 'Stuff',
        honor: sample
    }
  }));
});

app.listen(port,function () {
    console.log('Server started on port '+port);
})