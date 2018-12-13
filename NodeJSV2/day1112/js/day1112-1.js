var fs = require('fs');

fs.stat('../file/test.txt',function (err,stats) {

   console.log(stats.isFile());
   console.log(stats.isFIFO());
   console.log(stats.atime);
   console.log(stats.ctime);
   console.log(stats.isSymbolicLink());
});

fs.exists('../file/test.txt',function (exists) {

   if(exists){

       console.log('存在');
   }
});

var est = fs.existsSync('../file/test.txt');

console.log(est.toString());

var cache = {'file/' : 'file/'};

fs.realpath('../file/test.txt',cache,function (err,reslovePath) {

    if(err){

        return;
    }

    console.log(reslovePath);
});

fs.open('../file/test.txt','r+',function (err,fd) {

    if(err){

        console.log('打开文件出错');
        return;
    }

    fs.futimes(fd,new Date(),new Date(),function (err2) {

        if(err2){

            console.log('修改文件出错');
            return;
        }

        fs.fstat(fd,function (err3, stats) {

            if(err3){

                console.log('产看文件信息出错');
                return;
            }

            console.log(stats.atime);
            console.log(stats.mtime);
        })

        console.log('修改成功');
    });
});