/**
 * Created by Administrator on 2017/9/21.
 */

var express = require('express');

var app = express();
/*
app.get('/:id(\\d+)/:name',function (req,res) {

    var str = '';
    for(key in req.params){

        if(str != ''){

            str += '<br/>';
        }

        str += '参数名：' + key;
        str += String.fromCharCode(9) + "参数名：" + req.params[key];
    }

    res.send(str);
});

app.get('/tg/:id?/:name?',function (req,res) {

    var str = '';

    if(req.params.id){

        str += '参数值：' + req.params.id;
    }else if(str != ''){

        str += '<br/>';
    }else if(req.params.name){

        str += '参数值：' + req.params.name;
    }else{

        str += '请求地址无参数';
    }

    res.send(str);
});

app.get(/\/(\d+)/,function (req,res) {

    res.send('Yes');
});
 */

app.get('/:id(\\d+)',function (req,res,next) {

    if(req.params.id > 10){

        next();
    }else{

        res.send('id数值必须大于10');
    }
});

app.get('/:id',function (req,res) {

    res.send('Hello World');
});

app.listen(8080,'127.0.0.1');
