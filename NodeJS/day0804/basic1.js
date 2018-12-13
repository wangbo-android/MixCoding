/**
 * Created by Administrator on 2017/8/4.
 */

var http = require('http');

var url = require('url');

http.createServer(function (req,res) {

    if(req.url == '/'){

        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

        var objURL = url.parse(req.url,true);

        console.log(objURL.toString());

        res.end(objURL.toString());
    }else{

        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

        res.end('请求地址不是/');
    }
}).listen(3000,function () {

    console.log('服务器开始监听');
});
