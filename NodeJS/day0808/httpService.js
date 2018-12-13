/**
 * Created by Administrator on 2017/8/8.
 */

var http = require('http');

http.createServer(function (req,res) {

    res.writeHead(200,{'Content-Type': 'image/png'});

    //var stream = require('fs').createReadStream('./image/1.png');

    require('fs').createReadStream('./image/1.png').pipe(res);

    /*
    stream.on('data',function (data) {

        res.write(data);
    });

    stream.on('end',function () {

        res.end();
    })
    */
}).listen(8080,function () {

    console.log('web服务器开始监听....');
});
