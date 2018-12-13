var http = require('http');

var url = require('url');

var server = http.createServer(function (sreq,sres) {

    var path = url.parse(sreq.url);

    var options = {

        hostname : 'www.baidu.com',
        port : 80,
        path : '/',
        method : 'GET'
    };

    var creq = http.request(options,function (cres) {

        sres.writeHead(200,{'Content-Type':'text/html'});

        cres.on('data',function (data) {

            console.log(data.toString());
            cres.pipe(sres);

        });
    });

    creq.end();
    //sreq.pipe(creq);
});

server.listen(8080,'localhost');