var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

port = 3000;
server.listen(port);
console.log(`server running on port ${port}`);

app.get('/',function(req,res){
    res.sendfile(__dirname+'/index.html');
});

io.sockets.on('connection',function(socket){
    connections.push(socket);
    console.log('connected : %s sockets connected',connections.length);

    socket.on('disconnect',function(data){
        updateUsernames();
        users.splice(users.indexOf(socket.username),1);

        connections.splice(connections.indexOf(socket),1);
        console.log('Disconnected : %s sockets connected',connections.length);

    });

    socket.on('send message',function(data){
        // console.log(data);
        io.sockets.emit('new message',{msg:data,user:socket.username});
    });

    // new user
    socket.on('new user',function(data,callback){
        callback(true);
        console.log('============new user added==========='+data);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    })

    function updateUsernames(){
        io.sockets.emit('get users',users);
        console.log('get users '+users)
    }

    
});

