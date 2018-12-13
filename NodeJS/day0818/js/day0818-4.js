/**
 * Created by Administrator on 2017/8/18.
 */

var fs = require('fs');

var readMp3 = fs.createReadStream('../file/1.mp3');

var writeMp3 = fs.createWriteStream('../file/2.mp3');

readMp3.on('data',function (data) {

    var flag = writeMp3.write(data);

    console.log(flag);
});

writeMp3.on('drain',function () {

    console.log('操作系统缓冲区数据全部写出');
});

readMp3.on('end',function () {

    writeMp3.end(function () {

        console.log('数据写出完毕');
    });
});

writeMp3.on('error',function (err) {

    console.log('发生错误' + err);
});
