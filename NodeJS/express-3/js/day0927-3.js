/**
 * Created by Administrator on 2017/9/27.
 */

var express = require('express');

var log4js = require('log4js');
/*
log4js.configure({

    appenders : [

        {type : 'console'},
        {
            filename;'logs/access.log',
            maxLogSize : 1024,
            backups : 3,
            category : 'normal'
        },
     ]
    });


});
*/
var app = express();

var logger = require('morgan');

app.use(logger('dev'));

app.listen(8080,'localhost');
