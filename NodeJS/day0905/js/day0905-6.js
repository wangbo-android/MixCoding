/**
 * Created by Administrator on 2017/9/5.
 */

var http = require('http');

var zlib = require('zlib');

var fs = require('fs');

var request = http.get({

    host : 'localhost',
    port : 8080,
    path : '/',
    headers : {'accept-encoding':'gzip,deflate'}});

request.on('response',function (response) {

    var out = fs.createWriteStream('../file/app2.txt');

    switch (response.headers['content-encoding']){

        case 'gzip':

            console.log('gzip');
            response.pipe(zlib.createGunzip()).pipe(out);
            break;
        case 'deflate':

            console.log('deflate');
            response.pipe(zlib.createInflate()).pipe(out);
            break;

        default:

            response.pipe(out);
            break;
    }
});
