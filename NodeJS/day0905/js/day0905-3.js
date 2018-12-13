/**
 * Created by Administrator on 2017/9/5.
 */

var zlib = require('zlib');

var gzip = zlib.createGzip();

var fs = require('fs');

var inp = fs.createReadStream('../file/app.txt');

var out = fs.createWriteStream('../file/app.txt.zip');

inp.pipe(gzip).pipe(out);