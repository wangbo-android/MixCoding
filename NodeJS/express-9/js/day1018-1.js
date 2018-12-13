var sio = require('socket.io');

var http = require('http');

var fs = require('fs');

var server = http.createServer(function (req,res) {

    res.writeHead(200,{"ContentType":"text/html"});
    res.end(fs.readFileSync('../html/index.html'));
});

server.listen(8080,'localhost');

var socket = sio.listen(server);

socket.on('connection',function (socket) {

    socket.send('你好');

    socket.on('message',function (msg) {

        console.log(msg);
    });
});

socket.on('disconnect',function () {

    console.log('客户端断开连接');
});