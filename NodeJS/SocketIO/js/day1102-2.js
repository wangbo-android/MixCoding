var sio = require('socket.io');

var express = require('express');

var http = require('http');

var app = express();

var server = http.createServer(app);

app.get('/',function (req,res) {


});

server.listen(8080,'localhost');

var socket = sio.listen(server);