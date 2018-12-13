var http = require('http');

http.createServer(function (req,res) {

    if(req.url == '/'){

        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('你好');
        console.log('这段代码运行在子进程');
    }

}).listen(8080,'localhost');