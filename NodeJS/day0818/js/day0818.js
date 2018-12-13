/**
 * Created by Administrator on 2017/8/18.
 */

var fs = require('fs');

var file = fs.createReadStream('../file/file.json',{encoding : 'utf-8'});

file.on('open',function (fd) {

    console.log('开始读取文件');
});

file.pause()

file.on('data',function (data) {

    console.log(JSON.parse(data).info.address);
});

setTimeout(function () {

    file.resume();

},1000);

file.on('end',function () {

    console.log('文件已经读取完毕');
});

file.on('error',function (err) {

    console.log(err);
});
