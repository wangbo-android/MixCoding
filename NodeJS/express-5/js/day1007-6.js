var express = require('express');

var app = express();

var errorMessage;

app.use(app.router);
app.use(function (err,req,res,next) {

    console.error(err.stack);
    errorMessage = err.message;
    res.redirect('/error');
});

app.get('/',function (req,res) {

    noneexists();
    res.send('你好');
});

app.get('/error',function (req,res) {

    res.send(errorMessage);
});

app.listen(8080,'localhost');