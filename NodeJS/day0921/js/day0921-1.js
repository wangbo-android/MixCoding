/**
 * Created by Administrator on 2017/9/21.
 */

var mysql = require('mysql');

var connectionPool = mysql.createPool({

    "host" : "localhost",
    "user" : "root",
    "port" : "3306",
    "password" : "123",
    "database" : "news"
});

connectionPool.getConnection(function (err,connection) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log('数据库连接成功');
    connection.query('SELECT * FROM item',function (err,rows) {

        if(err){

            console.log(err.message);
            return;
        }

        console.log(rows);
        connectionPool.end();
    });
});
