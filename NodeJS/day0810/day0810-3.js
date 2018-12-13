/**
 * Created by Administrator on 2017/8/10.
 */

var http = require('http');

var fs = require('fs');

http.createServer(function (req,res) {

    if(req.method == 'GET' && req.url.substr(0,7) == '/images' && req.url.substr(-4) == '.png'){

        fs.stat(__dirname + req.url,function (err, stats) {

            if(err || !stats.isFile()){

                res.writeHead(404);

                res.end('<h1>Not Found</h1>');

                return;
            }

            serve(__dirname + req.url,'image/png');
        });
    }else if(req.method == 'GET' && req.url == '/'){

            serve(__dirname + '/index.ejs','text/html');
    }else{

        res.writeHead(404);

        res.end('<h1>Not Found</h1>');
    }
    
    function  serve(path,type) {

        res.writeHead(200,{'Content-Type':type});
        fs.createReadStream(path).pipe(res);
    }
}).listen(8080);
