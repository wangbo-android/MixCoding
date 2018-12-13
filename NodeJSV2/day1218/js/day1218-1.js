var http = require('http');

var domain = require('domain');

http.createServer(function (req,res) {

    var d = domain.create();

    d.on('error',function (err) {


        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(err.message);
        res.end();
    });

    d.run(function () {

        if(req.url == '/'){

            noexist();
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('你好');
            res.end();
        }
    });
}).listen(8080,'localhost',function () {

    console.log('服务器开始就监听');
});