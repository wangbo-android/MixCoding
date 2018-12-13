/**
 * Created by Administrator on 2017/9/29.
 */

var express = require('express');

var fs = require('fs');

var outLog = fs.createWriteStream('../upload/myLog.log');

var app = express();

app.use(express.static('../html'));
app.use(express.cookieParser());
app.use(express.logger('short'));
app.use(express.logger({ immediate : true,format: 'dev'}));
app.use(express.logger(':method :url - :referrer'));
app.use(express.logger(':req[content-type] -> :res[content-type]'));
app.use(express.logger({

    format : "default",
    stream : outLog
}));

app.post('/cookie',function (req,res) {

    for(key in req.cookies){

        res.write('cookie名：' + key + String.fromCharCode(9));
        res.write('cookie值：' + req.cookies[key] + String.fromCharCode(9));
    }

    res.send();
});

app.listen(8080,'127.0.0.1');
