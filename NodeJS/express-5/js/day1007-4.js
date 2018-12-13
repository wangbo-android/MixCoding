var express = require('express');

var app = express();

app.use(app.router);
app.use(function (err,req,res,next) {

    console.error(err.stack);
    next(err);
});

app.use(function (err,req,res,next) {

    res.send(500,err.message);
});

app.get('/',function (req,res) {

    noneexists();
    res.send('你好');
});

app.listen(8080,'localhost');