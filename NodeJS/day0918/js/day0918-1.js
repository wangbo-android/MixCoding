/**
 * Created by Administrator on 2017/9/18.
 */

var mysql = require('mysql');

var updateSTR = 'UPDATE websites SET ? WHERE id = 1';

var connection = mysql.createConnection({

    "host" : "localhost",
    "port" : "3306",
    "user" : "root",
    "password" : "123",
    "database" : "news"
});

var querySTR = 'SELECT * FROM ?? WHERE name=' + connection.escape('淘宝');

var insertSTR = 'INSERT INTO websites SET ?';

connection.connect(function (err) {

    if(err){
        console.log(err.message);
        return;
    }

    console.log('数据库连接成功');
});

connection.query(querySTR,['websites'],function (err, result) {

    if(err){
        console.log(err.message);
        return;
    }

    console.log(result);
});

connection.end(function (err) {

    if(err){
        console.log(err.message);
        return;
    }

    console.log('数据库关闭');
});
