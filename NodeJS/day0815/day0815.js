/**
 * Created by Administrator on 2017/8/14.
 */

var express = require('express');

var app = express.createServer();

var search = require('./search');

app.set('view engine','ejs');

app.set('views',__dirname + '/views');

app.set('view options',{layout : false});

//console.log(app.set('views'));
/*
app.configure('production',function () {

    app.enable('view cache');
});

app.set('view cache',true);
*/
app.get('/',function (req,res) {

    res.render('index');
});

app.get('/search',function (req,res,next) {

    search(req.query.q,function (error,tweets) {

        if(error){

            return next(error);
        }

        res.render('search',{results : tweets,search : req.query.q});
    });
});

app.error(function (error,req,res,next) {

    if(error.message == 'Bad error'){

        res.render('error');

    }else{

        next();
    }
});

app.error(function (error,req,res) {

    res.render('bigError',{status : 500});
});

app.listen(8080);
