var fs = require('fs');

/*
fs.rename('../test.txt','../file/test2.txt',function (err) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log('文件移动成功');
});

fs.link('../file/test2.txt','../js/test3.txt',function (err) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log('硬链接创建成功');
});

fs.unlink('../js/test3.txt',function (err) {

    if(err){

        console.log(err.message);
        return;
    }

});

fs.unlinkSync('../file/test2.txt');

fs.rmdir('../file',function (err) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log('删除空目录成功');
});

*/
fs.mkdir('../file',function (err) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log('目录创建成功');
});