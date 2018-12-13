/**
 * Created by Administrator on 2017/8/18.
 */

var fs = require('fs');

var writeFile = fs.createWriteStream('../file/message.txt',{encoding : 'utf-8'});

for(var i=0;i<=10000;i++){

   var flag = writeFile.write(i.toString() + '\r\n');

   console.log(flag);
}

writeFile.on('drain',function () {

    console.log('操作系统缓冲区数据全部输出');
});

