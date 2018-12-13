var fs = require('fs');

var watcher = fs.watch('../file/test2.txt',function (event,filename) {

  switch (event){

      case 'rename':
          console.log('移动文件');
          console.log(filename);
          break;
      case 'change':
          console.log('修改文件内容');
          console.log(filename);
          break;
      default:
          break;
  }
});

fs.rename('../file/test2.txt','../js/testttt.txt',function (err) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log('文件移动成功');
});

fs.link('../file/message.txt','../test4.txt',function (err) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log('创建文件迎两节成功');
});