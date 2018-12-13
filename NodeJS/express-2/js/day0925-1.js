/**
 * Created by Administrator on 2017/9/25.
 */

var express = require('express');

var app = express();

app.get('/',function (req,res) {

    res.sendFile(__dirname + '/index.ejs');
});

app.listen(8080,'127.0.0.1');
