var http = require('http');

var fs = require('fs');

var querystring = require('querystring');

var url = require('url');

var server = http.createServer(function (req,res) {

    console.log(req.headers);

    if(req.url == '/'){

        res.writeHead(200,{'ContentType':'html/text'});

        if(!fs.exists('../file/request.log')){

            fs.mkdir('../file',function (err) {

                if(err){

                    console.log(err.message);
                    return;
                }
            })
        }

        var out = fs.createWriteStream('../file/request.log');
        out.write(req.method + '\r\n');
        out.write(req.url + '\r\n');
        out.write(JSON.stringify(req.headers) + '\r\n');
        out.end(req.httpVersion);

        res.end('Successed');

    }else if(req.url == '/cus'){

        console.log('html');
        res.writeHead(200,{'ContentType':'text/html'});
        fs.createReadStream('../file/day1122-1.html').pipe(res);
        //res.end();

    }else if(req.url == '/post'){

        req.on('data',function (data) {

            res.writeHead(200);

           var result = querystring.parse(decodeURIComponent(data));

           console.log(result);

           res.end(JSON.stringify(result));
        });
        
        req.on('end',function () {

            console.log('客户端数据接收完毕');
        })

    }
});

//server.timeout = 2 * 6000;

server.listen(8080,'localhost',function () {

    console.log('服务器启动，开始监听请求');
});

server.on('connection',function (socket) {

    console.log(socket.address());
});

/*
server.on('timeout',function (socket) {

    console.log('连接超时' + socket.address());
    //socket.end();
});
*/
server.on('error',function (e) {

    if(e.code == 'EADDRINUSE'){

        console.log('服务端口被占用');
    }
});