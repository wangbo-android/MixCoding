/**
 * Created by Administrator on 2017/9/27.
 */

var express = require('express');

var app = express();

app.use(express.basicAuth(function (user,pass) {

    return user == 'testUser' && pass == 'testPass';
}));

app.get('/',function (req,res) {

    res.send('你好');
});

app.listen(8080,'127.0.0.1');
