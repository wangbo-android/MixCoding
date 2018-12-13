/**
 * Created by Administrator on 2017/9/27.
 */

var express = require('express');

var app = express();

app.use(express.bodyParser());

app.listen(8080,'127.0.0.1');
