/**
 * Created by Administrator on 2017/9/29.
 */

var express = require('express');

var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());
//app.use(express.session());

app.listen(8080,'127.0.0.1');
