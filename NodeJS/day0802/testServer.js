/**
 * Created by Administrator on 2017/8/2.
 */

var fs = require('fs');

var http = require('http');

var htm = './html/tsh.html';

var httpServer = http.createServer(function (req,res) {

    if(req.url == '/') {

        fs.readFile(htm, function (error, data) {

            if (error) {

                console.log(error);
            } else {

                console.log(data.toString());
                res.end(data.toString());
            }
        });
    }
});

httpServer.listen(3000,function () {

    console.log("服务器开始启动....");
})