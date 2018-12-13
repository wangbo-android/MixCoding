/**
 * Created by Administrator on 2017/8/8.
 */

console.log(process.env);

process.on('SIGKILL',function () {

    console.log('sign kill')
});

var fs = require('fs');

fs.readFile('./mytext.txt','utf-8',function (err,contents) {

   console.log(contents);
});

fs.readFile('./myht.html',function (err,data) {

    console.log(data.toString());
})

var stream = fs.createReadStream('mytext.txt');

stream.on('data',function (chunk) {

    console.log(chunk);
});

stream.on('end',function (chunk) {

    console.log(chunk);
})

console.log(process.cwd());
