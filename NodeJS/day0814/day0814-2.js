/**
 * Created by Administrator on 2017/8/14.
 */

var connect = require('connect');

var requireTime = require('./require-time');

var server = connect.createServer();

server.use(connect.logger('dev'));

server.use(requireTime({time : 100}));

server.use(function (req,res,next) {

    if(req.url == '/a'){

        res.writeHead(200);

        res.end('Fast');
    }else{

        next();
    }
});

server.use(function (req,res,next) {

    if(req.url == '/b'){

        setTimeout(function () {

            res.writeHead(200);

            res.end('Slow');
        },1000);

    }else{

        next();
    }
});

server.listen(8080,function () {

    console.log('服务器开始监听....');
})
