/**
 * Created by Administrator on 2017/9/5.
 */

var zlib = require('zlib');

var fs = require('fs');

var out = fs.createWriteStream('../file/app1.txt');

var input = 'glkajgljarlkgjklraejgjlaerjkglae';

zlib.gzip(input,function (error,buffer) {

    if(!error){

        zlib.unzip(buffer,function (err,buf) {

            if(!err){

                console.log(buf.toString());

                out.write(buf.toString());
            }
        });
    }
});
