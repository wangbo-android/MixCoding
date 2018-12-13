/**
 * Created by Administrator on 2017/8/10.
 */

var http = require('http');

var fs = require('fs');

var mime = require('mime');

var filePath = './info.json';

http.createServer(function (req,res) {

    fs.readFile(filePath,function (err,data) {

        if(err){

            console.log('There is a error');

        }else {

            res.writeHead(200, {'Content-Type': mime.lookup(filePath)});

            res.end(data);
        }
    });
}).listen(8080);
