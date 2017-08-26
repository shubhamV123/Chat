var express = require('express');
var socket = require('socket.io')
var app = express();

app.use(express.static('public'));

var server = app.listen(4000,() =>{
  console.log('server running on 4000');
})

// socket setup
var io = socket(server);

io.on('connection',function(socket){
  console.log('made socket connection');
})
