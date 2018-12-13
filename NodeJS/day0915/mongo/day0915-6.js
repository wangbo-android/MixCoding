/**
 * Created by Administrator on 2017/9/15.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({

    "host" : "localhost",
    "user" : "root",
    "password" : "123",
    "database" : "news"
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution',function (err,result,fields) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log('The solution is' + result[0].solution);
});