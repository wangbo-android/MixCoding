/**
 * Created by Administrator on 2017/9/29.
 */

var express = require('express');

var mysql = require('mysql');

var pool = mysql.createPool({

    "host" : "localhost",
    "port" : 3306,
    "user" : "root",
    "password" : "123",
    "database" : "news"
});

var app = express();

app.use(express.basicAuth(function (user,pass,cb) {

    pool.getConnection(function (err,connection) {

        if(err){

            connection.release();
            cb(null,false);
            console.log(err.message);
            return;
        }

        connection.query('SELECT count(1) count FROM websites WHERE name=?',[user],function (err,result) {

            if(err){

                connection.release();
                cb(null,false);
                console.log(err.message);
                return;

            }else if(result[0].count > 0){

                cb(null,true);
            }else{

                cb(null,false);
            }
        });
    });
}));

app.get('/',function (req,res) {

    res.send('你好');
});

app.listen(8080,'127.0.0.1');
