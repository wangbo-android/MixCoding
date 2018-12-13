/**
 * Created by Administrator on 2017/8/16.
 */

var fs = require('fs');

var option = {

    flag : 'a',

    mode : 0777,

    encoding : 'utf-8'
};

fs.writeFile('./text/txt.txt','这是第一行内容\r\n这是第二行内容\r\n','utf8',function (err) {

    if(err){

        console.log(err);

        console.log('写入文件失败');
    }else{

        console.log('写入文件成功');
    }
});

fs.writeFile('./text/txt.txt',new Buffer('我爱编程'),option,function (err) {

    if(err){

        console.log(err);
    }else{

        console.log('写入文件成功');
    }
});

fs.readFile('./text/txt.txt','utf8',function (err,data) {

    if(err){

        console.log('读取文件失败');
    }else{

        console.log(data);
    }
});
