/**
 * Created by Administrator on 2017/9/25.
 */

var fs = require('fs');

var mysql = require('mysql');

var express = require('express');

var app = express();

var pool = mysql.createPool({

    "host" : "localhost",
    "user" : "root",
    "password" : "123",
    "port" : "3306",
    "database" : "news"
});

app.get('/',function (req,res) {

    fs.createReadStream('../html/index.ejs').pipe(res);
});

app.put('/put',function (req,res) {

    req.on('data',function (data) {

        var obj = JSON.parse(data.toString());

        pool.getConnection(function (err,connection) {

            if(err){

                console.log(err.message);
                return;
            }

            connection.query('INSERT INTO websites SET ?',{"name":obj.firstname,"url":obj.secondname,"alexa":310,"country":"CN"},function (err,result) {

                if(err){

                    console,log(err.message);
                    return;
                }

                res.send('数据插入成功');

                connection.release();
            });
        });
    });
});

app.listen(8080,'127.0.0.1');
