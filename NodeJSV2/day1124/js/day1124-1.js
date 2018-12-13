var http = require('http');

var fs = require('fs');

var server = http.createServer(function (req,res) {

    if(req.url == '/'){

        res.writeHead(200,{'Content-Type':'text/html'});

        fs.createReadStream('../file/index.html').pipe(res);

    }else if(req.url == '/ajax'){

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('你好');
        res.end();

        if(res.headersSent){

            console.log(res.getHeader('Content-Type'));
            console.log('响应头已经发送');
        }
    }

    res.on('close',function () {

        console.log('与客户端连接中断');
    })
});

server.listen(8080,'localhost',function () {

    console.log('服务器开始监听');
});

server.on('connection',function (socket) {

    console.log('服务器连接' + socket.address());
});

server.on('error',function (err) {

    console.log(err.message);
});

