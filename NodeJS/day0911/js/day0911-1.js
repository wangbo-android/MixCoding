/**
 * Created by Administrator on 2017/9/11.
 */

var mClient = require('mongodb').MongoClient;

var db_connect_str = 'mongodb://localhost:27017/runoob';

var insertData = function (db,callback) {

    var collection = db.collection('site');

    var data = [];

    for(var i=10;i<23;i++){

        data[i] = {
                "name":"菜鸟教程"+i,

                "url":"www.baidu.com"+i
        };
    }

    //var data = [{"name":"菜鸟教程","url":"www.baidu.com"},{"name":"菜鸟工具","url":"www.souhu.com"}];

    collection.insert(data,function (err,result) {

        if(err){

            console.log(err.message);
            return;
        }

        callback(result);
    });
};

mClient.connect(db_connect_str,function (err,db) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log('连接成功');

    insertData(db,function (result) {

       console.log(result);

       db.close();
    });

    db.on('close',function (err) {

        if(err){

            console.log(err.message);
            return;
        }

        console.log('数据库关闭');
    });
});
