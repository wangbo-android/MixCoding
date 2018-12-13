/**
 * Created by Administrator on 2017/9/11.
 */

var mClient = require('mongodb').MongoClient;

var CONNECT_STR = 'mongodb://localhost:27017/things';

var insertData = function (db,callback) {

    var collection = db.collection('things');

    var store = [];

    var foods = [];

    var books = [];

    for(var i=0;i<2;i++){

        for(var j=0;j<4;j++){

            foods[j] = {"type":"food"+j,"price":j+10};
            books[j] = {"type":"book"+j,"price":j+15};
        };

        if(i == 0){

            store[i] = {"name":"store1","goods":foods};
        }else{

            store[i] = {"name":"store2","goods":books};
        }
    };

    collection.insert(store,function (err,result) {

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
    })
});
