var http = require('http');

var stringdecoder = require('string_decoder').StringDecoder;

var decoder = new stringdecoder('utf8');

var server = http.createServer(function (req,res) {

    if(req.url == '/'){

        req.on('data',function (data) {

            console.log(decoder.write(data));
            //res.end();
        });

        req.on('end',function () {

            res.end();
        });
    }

});

server.on('connection',function (socket) {

    console.log(socket.address());
    console.log('客户端与服务器建立连接');
});

server.listen(8080,'localhost',function () {

    console.log('服务器开始监听');
});