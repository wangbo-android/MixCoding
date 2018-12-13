/**
 * Created by Administrator on 2017/9/15.
 */
var QUERYSQLSTR = "INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)";

var mysql = require('mysql');

var connection = mysql.createConnection({

    "host" : "localhost",
    "port" : "3306",
    "user" : "root",
    "password" : "123",
    "database" : "news"
});

connection.connect(function (err) {

    if(err){
        console.log(err.message);
        return;
    }

    console.log('数据库连接成功');
});

connection.query(QUERYSQLSTR,['菜鸟工具', 'https://c.runoob.com','23453', 'CN'],function (err,result) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log("-----------------------Insert-------------------\r\n");
    console.log('INSERT ID:' + result.affectedRows);
    console.log("-----------------------------------------------\r\n");
    
});

connection.end(function (err) {

    if(err){
        console.log(err.message);
        return;
    }

    console.log('数据库关闭');
});
