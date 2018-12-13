var express = require('express');

var domain = require('domain');

var app = express();

//app.use(express.static(__dirname));
app.use(app.router);
app.use(function (err,req,res,next) {

    console.error(err.stack);
    next(err);
});

app.use(function (err,req,res,next) {

    res.send(500,err.message);
});

app.get('/',function (req,res) {

    var reqd = domain.create();
    reqd.add(req);

    reqd.on('error',function (err) {

        next(err);
    });

    req.on('data',function (data) {

        noneexists();

        res.send('你好');
    });
});

app.listen(8080,'localhost');