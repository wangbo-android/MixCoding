/**
 * Created by Administrator on 2017/8/30.
 */

var http = require('http');

process.on('message',function (msg,server) {

    if(msg == 'server'){

        console.log('子进程中的服务器已创建');

        var httpServer = http.createServer();

        httpServer.on('request',function (req,res) {

            if(req.url !== '/favicon.ico'){

                var sum = 0;

                for(var i=0;i<1000000;i++){

                    sum += i;
                }

                res.writeHead(200,{'Content-Type':'text/html'});
                //res.setEncoding('utf-8');
                res.write('Client Side Request Running In Child Process');
                res.end('sum=' + sum);
            }
        });

        httpServer.listen(server);
    }
});
