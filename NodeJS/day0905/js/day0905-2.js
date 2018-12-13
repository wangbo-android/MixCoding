/**
 * Created by Administrator on 2017/9/5.
 */

var fs = require('fs');

var crypto = require('crypto');

var keyPem = fs.readFileSync('../file/key.pem');

var key = keyPem.toString();

var hmac = crypto.createHmac('sha1',key);

var file = fs.createReadStream('../file/app.txt');

file.on('data',function (chunk) {

    hmac.update(chunk);
});

file.on('end',function () {

   var h =  hmac.digest('hex');

   console.log(h);
});
