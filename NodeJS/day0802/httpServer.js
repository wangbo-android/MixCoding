/**
 * Created by Administrator on 2017/8/2.
 */

var http = require('http');

var server = http.createServer(function (req,res) {

    if(req.url == '/'){

        console.log("req....");

        res.writeHead(200,{'Content-Type':'text/html'});

        res.write('<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>' + '网页正常显示');

        res.end();
    }else{

        res.writeHead(404,{'Content-Type':'text/html'});

        res.write('<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />' + '错误404，网页没找到');

        res.end();
    }
});

server.listen(3000,function () {

    console.log("正在监听。。。");
});
