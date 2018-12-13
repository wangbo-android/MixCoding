var fs = require('fs');

var sio = require('socket.io');

var http = require('http');

var server = http.createServer(function (req,res) {

    res.writeHead(200,{'ContentType':'text/html'});
    res.end(fs.readFileSync('../html/index.html'));

});

server.listen(8080);

var socket = sio.listen(server);

socket.on('connection',function (socket) {

    socket.emit('news',{hello : '你好'},function (msg) {

        console.log(msg);
    });
    socket.on('other',function (msg,fn) {

        console.log(msg.response);
        fn('客户端，服务器端收到你的消息了');
    });
});

socket.on('disconnect',function () {

    console.log('客户端关闭');
});