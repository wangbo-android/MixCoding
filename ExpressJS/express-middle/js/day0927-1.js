/**
 * Created by Administrator on 2017/9/27.
 */

var middleware = require('./middleware');

var express = require('express');

var app = express();

app.use('/static',middleware.setHeader());

app.get('/*',function (req,res) {

    res.writeHead(res.statusCode,res.header);
    res.write(res.head);
    res.end('你好');
});

app.listen(8080,'127.0.0.1');
