var fs = require('fs');

var readStream = fs.createReadStream('../file/test.txt');

readStream.on('data',function (data) {

    process.stdout.write(data);
});

readStream.on('end',function () {

    console.log('数据读取完毕');
})