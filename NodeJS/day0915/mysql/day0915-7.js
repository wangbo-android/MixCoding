/**
 * Created by Administrator on 2017/9/15.
 */

var QUERYSQLSTR = "SELECT * FROM websites";

var mysql = require('mysql');

var connection = mysql.createConnection({

    "host" : "localhost",
    "user" : "root",
    "password" : "123",
    "database" : "news"
});

connection.connect();

connection.query(QUERYSQLSTR,function (err,result) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log("-----------------------Query-------------------\r\n");
    console.log(result);
    console.log("-----------------------------------------------\r\n");

    //connection.disconnect();
});
