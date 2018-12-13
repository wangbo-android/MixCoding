/**
 * Created by Administrator on 2017/9/29.
 */

var express = require('express');

var fs = require('fs');

var app = express();

app.use(express.cookieParser());
app.use(express.session({secret:"test"}));
//app.use(express.static('../html'));

app.get('/',function (req,res) {

    fs.createReadStream('../html/session.html').pipe(res);
    req.session.username = 'wangbo';
    req.session.regenerate(function (err) {

        if(err){
            console.log(err.message);
            return;
        }

        console.log('Session管理器重新生成');
    });

    req.session.destory(function (err) {

        if(err){

            console.log('session销毁失败');
            return;
        }

        console.log('session销毁成功');
    });
});

app.post('/session',function (req,res) {

    res.send(req.session.username);
});

app.listen(8080,'127.0.0.1');
