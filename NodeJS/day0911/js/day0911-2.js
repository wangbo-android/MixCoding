/**
 * Created by Administrator on 2017/9/11.
 */

var mClient = require('mongodb').MongoClient;

var MONGO_CONNECT_STR = 'mongodb://localhost:27017/runoob';

var selectData = function (selectJSON,db,callback) {

    var collec = db.collection('site');

    collec.find(selectJSON).toArray(function (err,result) {

        if(err){

            console.log(err.message);
            return;
        }

        callback(result);
    });
};

mClient.connect(MONGO_CONNECT_STR,function (err,db) {

    if(err){

        console.log(err.message);
        return;
    }

    selectData({"name":"菜鸟教程"},db,function (result) {

        console.log(result);

        db.close();
    });

    db.on('close',function (err) {

        if(err){

            console.log(err.message);
            return;
        }

        console.log('数据库关闭');
    })
});
