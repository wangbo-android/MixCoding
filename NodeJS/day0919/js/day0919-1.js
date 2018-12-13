/**
 * Created by Administrator on 2017/9/19.
 */

var queryStr = 'SELECT * FROM ??';

var table = 'upload_vedio';

var fieldArray = [];

var fs = require('fs');

var mysql = require('mysql');

var outStream = fs.createWriteStream('../file/data.txt');

var connection = mysql.createConnection({

    "host" : "localhost",
    "user" : "root",
    "password" : "123",
    "port" : 3306,
    "database" : "news"
});

connection.connect(function (err) {

    if(err){
        console.log(err.message);
        return;
    }

    console.log('数据库连接成功');
});

connection.query(queryStr,[table]).on('error',function (err) {

    console.log('数据读取失败，错误信息为：'+ err.message);
    process.exit(0);

}).on('fields',function (fields) {

    var str  = '';
    for(var i=0;i<fields.length;i++) {

        if(str != ''){

            str += String.fromCharCode(9);
        }

        str += fields[i].name;
        fieldArray[i] = fields[i].name;
    }

    outStream.write(str + '\r\n');

}).on('result',function (row) {

    connection.pause();
    var str = '';
    fieldArray.forEach(function(fa){

        if(str != ''){

            str += String.fromCharCode(9);
        }

        str += row[fa];
    });

    /*
     row.ID + String.fromCharCode(9) +
     row.ITEM_NUMBER +
     String.fromCharCode(9) +
     row.TITLE +
     String.fromCharCode(9) +
     row.ITEM_CONTENT +
     String.fromCharCode(9) +
     row.CREATE_TIME +
     String.fromCharCode(9) +
     row.WHO +
     String.fromCharCode(9) +
     row.FREQUENCY +
     String.fromCharCode(9) +
     row.REPOST +
     String.fromCharCode(9) +
     row.PIC_PATH +
     String.fromCharCode(9) +
     row.TYP
     */

    outStream.write(str + '\r\n',function (err) {

            connection.resume();
    });
}).on('end',function () {

    console.log('数据全部导入完毕');
    connection.end();
});
