/**
 * Created by Administrator on 2017/8/18.
 */

var fs = require('fs');

var readFile = fs.createReadStream('../file/file.json',{encoding : 'utf-8'});

var writeFile = fs.createWriteStream('../file/message.txt',{encoding : 'utf-8'});

readFile.on('open',function (fd) {

    console.log('开始读取文件，文件句柄为' + fd);
});

readFile.on('data',function (data) {

    var resultFlag = writeFile.write(data,function () {

        console.log('开始写入数据到文件')
    });

    console.log(resultFlag);
});

readFile.on('end',function () {

    writeFile.end('再见',function () {

        console.log('数据写入文件完毕,总共写入数据字节数为' + writeFile.bytesWritten);
    });
});

readFile.on('error',function (err) {

    console.log('读取文件错误' + err);

    writeFile.end();
})
