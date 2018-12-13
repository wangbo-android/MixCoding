/**
 * Created by Administrator on 2017/8/30.
 */

var fs = require('fs');

var net = require('net');

var cp = require('child_process');

var http = require('http');

var child = cp.fork('./child.mongo');

var server = net.createServer();

server.listen(1337,'localhost',function () {

    child.send('server',server);

    var httpServer = http.createServer();

    httpServer.on('request',function (req,res) {

        if(req.url !== '/favicon.ico'){

            var sum = 0;

            for(var i=0;i<1000000;i++){

                sum +=i;
            }

            res.writeHead(200,{'Content-Type':'text/html'});
            //res.setEncoding('utf-8');
            res.write('Client Side Request Running In Father Process');
            res.end('sum=' + sum);
        }
    });

    httpServer.listen(server);
});
