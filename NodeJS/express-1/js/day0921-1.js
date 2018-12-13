/**
 * Created by Administrator on 2017/9/21.
 */

var express = require('express');

var app = express();

app.get('/',function (req,res) {

    /*
    res.writeHead(200,{'ContentType' : 'text/html'});
    res.write('Hello world');
    res.end('Hi');
    */

    res.send('Hello');
});

app.listen(8080,'127.0.0.1');
