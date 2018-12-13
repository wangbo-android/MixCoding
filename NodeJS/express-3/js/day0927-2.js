/**
 * Created by Administrator on 2017/9/27.
 */

var express = require('express');

var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/',function (req,res) {

    for(key in req.cookies){

        console.log(key + '=' + req.cookies[key]);
    }

    res.send(req.cookies);
});

app.listen(8080,'127.0.0.1');
