/**
 * Created by Administrator on 2017/9/29.
 */

var express = require('express');

var fs = require('fs');

var app = express();

app.use(function (req,res,next) {

    console.log('foo');
    next();
});

app.use(function (req,res,next) {

    console.log('you foo');
    next();
});

app.get('/',function (req,res) {

    fs.createReadStream('../html/day0929-1.html').pipe(res);
});

app.get('/:id(\\d+)/:name',function (req,res) {

    for(key in req.params){

        console.log(req.params[key]);
    }

    res.send('Get the Params');
});

app.listen(8080,'localhost');
