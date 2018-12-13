/**
 * Created by Administrator on 2017/9/7.
 */

var readline = require('readline');

var fs = require('fs');

var fileIn = fs.createReadStream('../file/test1.txt');

var fileOut = fs.createWriteStream('../file/test2.txt');

var rl = readline.createInterface({

    input : fileIn,
    output : fileOut,
    termimal : true
});

rl.on('line',function (line) {

    console.log(line);

    fileOut.write(line);
});



