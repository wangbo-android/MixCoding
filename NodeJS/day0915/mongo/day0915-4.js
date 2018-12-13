/**
 * Created by Administrator on 2017/9/15.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/goods',function (err) {

    if(err){

        console.log(err.message);
        return;
    }
});

var goodSchema = new Schema({

    "type" : String,
    "price" : Number
});

var storeSchema = new Schema({

    "name" : String,
    "goods" : [goodSchema]
});

var store1 = {"name":"stor1",goods : [{"type":"food","price":11}]};
var store2 = {"name":"stor2",goods : [{"type":"food","price":10}]};
var store3 = {"name":"stor3",goods : [{"type":"food","price":9}]};
var store4 = {"name":"stor4",goods : [{"type":"food","price":8}]};
var store5 = {"name":"stor5",goods : [{"type":"food","price":9}]};

var doc = [store1,store2,store3,store4,store5];
var Stores = mongoose.model('stores',storeSchema);
Stores.create(doc,function (err,docs) {

    if(err){
        console.log(err.message);
        return;
    }

    console.log(docs);
    mongoose.disconnect();
});



