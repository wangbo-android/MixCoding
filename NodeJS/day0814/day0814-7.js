/**
 * Created by Administrator on 2017/8/14.
 */

var connect = require('connect');

var server = connect.createServer();

server.use(connect.cookieParser());

server.use(function (req,res,next) {

    for(var i in req.cookies){

        console.log(i + '=' + req.cookies[i]);
    }

    next();
});

server.listen(8080);
