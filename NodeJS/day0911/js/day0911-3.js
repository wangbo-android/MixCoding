/**
 * Created by Administrator on 2017/9/11.
 */

var mClient = require('mongodb').MongoClient;

var CONNECT_STR = 'mongodb://localhost:27017/runoob';

var updateDate = function (whichJSON,updateJSON,db,callback) {

    var coll = db.collection('site');

    coll.update(whichJSON,updateJSON,function (err,result) {

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

    updateDate({"name":"菜鸟教程"},{$set: {"url":"www.haode.com"}},db,function (result) {

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
