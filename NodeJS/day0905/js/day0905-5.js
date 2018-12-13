/**
 * Created by Administrator on 2017/9/5.
 */

var fs = require('fs');

var zlib = require('zlib');

var http = require('http');

http.createServer(function (req,res) {

    var raw = fs.createReadStream('../file/app.txt');

    var acceptEncoding = req.headers['accept-encoding'];

    if(!acceptEncoding){

        acceptEncoding = ' ';

    }else if(acceptEncoding.match(/\bdeflate\b/)){

        res.writeHead(200,{'content-encoding':'deflate'});

        raw.pipe(zlib.createDeflate()).pipe(res);

    }else if(acceptEncoding.match(/\bgzip\b/)){

        res.writeHead(200,{'content-encoding':'gzip'});

        raw.pipe(zlib.createGzip()).pipe(res);

    }else{

        res.writeHead(200,{'content-type':'html/text'});

        raw.pipe(res);
    }
}).listen(8080,function () {

    console.log('服务器开始监听....');
});
