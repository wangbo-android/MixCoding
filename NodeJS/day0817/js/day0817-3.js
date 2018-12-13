/**
 * Created by Administrator on 2017/8/16.
 */

var http = require('http');

var server = http.createServer();

server.on('newListener',function (e,f) {

    console.log('对事件' + e + '添加事件处理函数');

    console.log(f);
});

server.on('removeListener',function (e,f) {

    console.log('对事件' + e + '删除事件处理函数');

    console.log(f);
})

server.on('request',function (req,res) {

    if(req.url == '/'){

        res.writeHead(200,{'Content-Type':'text/html'});

        res.end('Hello World');
    }
});

server.removeListener('request',function () {

    console.log('取消');
});

server.listen(8080);


