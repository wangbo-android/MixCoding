/**
 * Created by Administrator on 2017/8/2.
 */

var http = require('http');

var fs = require('fs');

var index = require('./index.js');

var errorHtml = './html/error.html';

var cx = './html/cx.html';

var css = './css/index.css';

var mime = require('mime');

var render = require('./render');

var ts = './html/tsh.html';

var data = './data/data.json';

var Response = function (res,filePath) {

    fs.readFile(filePath,function (err,data) {

        if(err){

            if(filePath != errorHtml){

                Response(res,errorHtml);
            }
        }else{

            //var i = filePath.lastIndexOf('.');

            //var suffix = filePath.substr(i+1,filePath.length);

            res.writeHead(200,{'Content-Type':mime.lookup(filePath)});

            res.end(data);
        }
    });
}

var error404 = function (res) {

    Response(res,errorHtml);
}

var httpServer = http.createServer(function (req,res) {

    console.log(req.url);

    if(req.url == '/index' || req.url == '/'){

        index.index(res);

    }else if(req.url == '/cx'){

        Response(res,cx);
    }else if(req.url == '/index.css'){

        Response(res,css);

    }else if(req.url.substr(0,4) == '/tsh' && req.url.indexOf('.') <= 0){

        var name = req.url.substr(5);

        fs.readFile(data,function (err,da) {

            if(err){

                console.log(err);
            }else{

                var dataString = da.toString();

                var dataJson = JSON.parse(dataString);

                if(!dataJson[name]){

                    error404(res);
                    return;
                }

                render.render(res,ts,dataJson,name);
            }
        });
    }else{

        req.url = req.url.replace("/tsh","");
        Response(res,'./' + req.url);
    }
});

httpServer.listen(8080,function () {

    console.log('服务器启动');
})


