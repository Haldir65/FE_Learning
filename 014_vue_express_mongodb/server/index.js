const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express()

//middle ware

app.use(bodyParser.json());
app.use(cors());

const port = process.env.port || 5000;

const posts = require('./routes/api/posts');


//handle production 
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname +"/public"));

    // handle spa
    app.get(/.*/,(req,res) => res.sendFile(__dirname+ '/public/index.html'));
}

app.use('/api/posts',posts);

app.listen(port,() => console.log(`server started on port ${port}`));