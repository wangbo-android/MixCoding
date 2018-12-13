/**
 * Created by Administrator on 2017/8/14.
 */

var connect = require('connect');

var server = connect.createServer();

//server.use(connect.static(__dirname ));

server.use(function (req,res,next) {

    console.error(' %s %s ',req.method,req.url);

    next();
});

server.use(function (req,res,next) {

    if(req.url.substr(0,7) == '/images' && req.method == 'GET'){


    }else{

        next();
    }
});

server.use(function (req,res,next) {

    if(req.url == '/' && req.method == 'GET'){


    }else{

        next();
    }
});

server.use(function (req,res,next) {

    res.writeHead(404);

    res.end('Not Found');
});

server.listen(8080,function () {

    console.log('服务器开始监听请求...');
});



