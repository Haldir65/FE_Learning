var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.set('port',(process.env.PORT || 3000));

var people = ['john', 'george','same']

var morePeople = [
    {
     firstname: 'John',
     lastname: 'Doe'
    },
    {
        firstname:'sarah',
        lastname: 'lee'
    }
]


app.get('/', function(req,res){
    res.render('home', {
        content: 'This is some content',
        published: true,
        people: people,
        morePeople: morePeople
    });
});

app.listen(app.get('port'),function () {
    console.log('server started on port '+app.get('port'));
    
});