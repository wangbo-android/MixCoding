/**
 * Created by Administrator on 2017/9/5.
 */

/*
var crypto = require('crypto');

console.log(crypto.getCiphers());

console.log(crypto.getHashes());
*/

var crypto = require('crypto');

var fs = require('fs');

var hashObj = crypto.createHash('sha1');

var file = fs.createReadStream('../file/app.txt');

file.on('data',function (chunk) {

    hashObj.update(chunk);
});

file.on('end',function () {

    var d = hashObj.digest('hex');

    console.log(d);
});
