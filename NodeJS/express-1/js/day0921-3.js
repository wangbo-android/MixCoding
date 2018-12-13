/**
 * Created by Administrator on 2017/9/21.
 */

var express = require('express');

var fs = require('fs');

var queryString = require('querystring');

var mysql = require('mysql');

var mysqlPool = mysql.createPool({

    "host" : "localhost",
    "port" : 3306,
    "user" : "root",
    "password" : "123",
    "database" : "news"
});

var app = express();

app.get('/index.ejs',function (req,res) {

    res.writeHead(200,{'ContentType':'text/html'});
    fs.createReadStream('../html/index.ejs').pipe(res);
});

app.post('/postData',function (req,res) {

    req.on('data',function (data) {

        var obj = queryString.parse(data.toString());
        mysqlPool.getConnection(function (err,connection) {

            if(err) {

                console.log(err.message);
                res.send('与Mysql数据库连接失败');
            }else{

                var str = '';
                connection.query('INSERT INTO websites SET ?',{"name":obj.firstname,"url":obj.secondname,"alexa":310,"country":"CN"},function (err,result) {

                    if(err){

                        str = '插入数据失败';
                    }else{

                       str = '插入数据成功';
                       console.log(result.affectedRows);
                    }

                    connection.release();
                    res.send(str);
                    mysqlPool.end();
                });
            }
        });
    });
});

app.listen(8080,'127.0.0.1');
