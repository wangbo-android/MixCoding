/**
 * Created by Administrator on 2017/8/14.
 */

var connect = require('connect');

connect.logger.token('met',function (req,res) {

    return req.headers['user-agent'];
});

connect.createServer(

    connect.logger('met'),

    function (req,res) {

        if(req.url == '/'){

            res.writeHead(200);
            res.end('Hi World');
        }
    }
).listen(8080);
