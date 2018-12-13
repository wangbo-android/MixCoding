/**
 * Created by Administrator on 2017/8/8.
 */

var http = require('http');

var server = http.createServer(function (req,res) {

    res.writeHead(200,{'Content-Type':'text/html'});

    res.end('<h1>Hello World</h1>');
});

server.listen(30000,function () {

    console.log('服务器正在监听.....');
});