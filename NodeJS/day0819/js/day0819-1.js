/**
 * Created by Administrator on 2017/8/22.
 */

var http = require('http');

var fs = require('fs');

var queryString = require('querystring');

var url = require('url');

var server = http.createServer(function (req,res) {

    //server.

    if(req.url == '/'){

        var out = fs.createWriteStream('../file/file1.txt',{encoding : 'utf-8'});

        out.write('就改口拉近了看国家据了解\r\n');

        out.write('见过了卡里克咖喱估计快了让开宫颈癌而二级\r\n');

        out.end();

        res.writeHead(200,{'Content-Type':'text/html'});

        res.end('Hello World');

        req.on('data',function (data) {

            console.log('接收到的数据：' + decodeURIComponent(data));
        });

        req.on('end',function () {

            console.log('客户端请求完毕');
        })
    }
});

server.on('connection',function (socket) {

    server.setTimeout(60 * 1000);

    console.log('已与客户端建立连接' + socket.remoteAddress);
});

server.on('listening',function () {

    console.log('服务器开始监听');
});

server.on('close',function () {

    console.log('Http服务器关闭');
});

server.on('error',function (err) {

    if(err.code == 'EADDRINUSE'){

        console.log(err.message);

        console.log('服务器地址及端口号被占用');

        return;
    }
});

server.on('timeout',function (socket) {

    console.log('服务器超时');

    console.log(socket);
});

server.listen(8080);
