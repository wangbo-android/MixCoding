/**
 * Created by Administrator on 2017/9/15.
 */

var mClient = require('mongodb').MongoClient;

var CONNECT_STR = 'mongodb://localhost:27017/persons';

var insertData = function (db,callback) {

    var collection = db.collection('persons');

    collection.insert([{"name":"wangbo","age":28},{"name":"lisi","age":30}],function (err,result) {

        if(err){

            console.log(err.message);
            return;
        }

        callback(result);
    });
};

mClient.connect(CONNECT_STR,function (err,db) {

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
