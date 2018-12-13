/**
 * Created by Administrator on 2017/9/5.
 */

var fs = require('fs');

var zlib = require('zlib');

var unzip = zlib.createGunzip();

var inp = fs.createReadStream('../file/app.txt.zip');

var outp = fs.createWriteStream('../file/app1.txt');

inp.pipe(unzip).pipe(outp);
