/**
 * Created by Administrator on 2017/8/18.
 */

var fs = require('fs');

var readFile = fs.createReadStream('../file/1.mp3');

var writeFile = fs.createWriteStream('../file/2.mp3',{encoding : 'utf-8'});

readFile.pipe(writeFile,{end : false});

setTimeout(function () {

    readFile.unpipe(writeFile);

    writeFile.end();
},10)
/*
readFile.on('end',function () {

    writeFile.end('再见');
});
*/
