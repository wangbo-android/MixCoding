/**
 * Created by Administrator on 2017/9/13.
 */

var mClient = require('mongodb').MongoClient;

var CONNECT_STR = 'mongodb://localhost:27017/things';

var findData = function (db,callback) {

    var collection = db.collection('things');

    //collection.find({},{sort:{"type":1,"price":-1}}).toArray();

    //collection.find({},{limit : 1}).toArray();

    collection.find({},{raw : true}).toArray(function (err,result) {

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

    findData(db,function (result) {

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
