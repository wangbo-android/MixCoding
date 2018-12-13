/**
 * Created by Administrator on 2017/8/14.
 */

var conn = require('connect');

var server = conn.createServer(

    //conn.logger('dev')

    conn.logger('type is :res[content-type] ,length is' + ':res[content-length] and it took time is :response-time ms.')

    ,function (req,res) {

        res.writeHead(200);
        res.end('Hello World');
    }
).listen(8080);

/*
var server = conn.createServer();

//server.use(conn.logger(':method :remote-addr'));

server.use(conn.logger('type is :res[content-type] ,length is' + ':res[content-length] and it took time is :response-time ms.'));

server.use(function (req,res,next) {

    if(req.url == '/'){

        res.writeHead(200,{'Content-Type' : 'text/html'});

        res.end('hello world');
    }
});

server.listen(8080);
*/
