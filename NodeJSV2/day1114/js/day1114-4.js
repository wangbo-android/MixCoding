var fs = require('fs');

var readStream = fs.createReadStream('../file/1.mp3');

var writeStream = fs.createWriteStream('../js/2.mp3');

readStream.setMaxListeners(20);

readStream.on('open',function (fd) {

    console.log('打开文件准备读取' + fd);
});

readStream.on('data',function (data) {

    writeStream.write(data);
    writeStream.end();
});

readStream.on('end',function () {

    console.log('文件读取完毕');
});

readStream.on('close',function (err) {

    if(err){

        console.log(err.message);
        return;
    }
});

readStream.on('error',function (err) {

    console.log(err.message);
});

writeStream.on('open',function (fd) {

    console.log(fd);
});

writeStream.on('error',function (err) {

    console.log(err.message);
});