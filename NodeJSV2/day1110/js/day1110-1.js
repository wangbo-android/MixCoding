var fs = require('fs');

var stringdecoder = require('string_decoder').StringDecoder;

var decoder = new stringdecoder('utf8');

fs.readFile('../file/test.txt',{flag : 'rs',encoding : 'utf8'},function (error,data) {

    if(error){

        console.log('读取文件时候发生错误');
        return;
    }

    //console.log(data.toString());
    console.log(decoder.write(data));
});

var result = fs.readFileSync('../file/test.txt',{flag : 'rs',encoding : 'utf8'});

console.log(decoder.write(result));

var options = {flag : 'a',

    encoding : 'utf8',
    mode : 0666
    };

fs.writeFile('../file/test.txt','这是第三行\r\n',options,function (err) {

    if(err){

        console.log('写入文件发生错误');
        return;
    }
});

fs.writeFileSync('../file/test.txt','这是第四行\r\n',options);

fs.appendFile('../file/test.txt','这是第五航\r\n',options,function (err) {

    if(err){

        console.log('追加文件内容出错了');
        return;
    }
});

fs.open('../file/test.txt','r+',function (err,fd) {

    if(err){

        return;
    }

    var buf = new Buffer(255);

    fs.read(fd,buf,0,9,3,function (err2,bytesRead,buffer) {

        console.log(bytesRead);
        console.log(decoder.write(buffer.slice(0,bytesRead)) + buffer.length);
    });

    buf.write('我哎编程',10);

    fs.write(fd,buf,0,20,null,function (error,written,buffer) {

        if(error){

            console.log(error.message);
            return;
        }

        console.log(written);
        console.log(buffer.length);
    });

    fs.fsync(fd);

    fs.close(fd,function (err) {

        if(err){

            console.log(err.message);
            return;
        }

        console.log('文件操作关闭');
    });
});

