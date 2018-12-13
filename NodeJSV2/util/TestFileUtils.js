var fileUtils = require('./file/FileUtils');

var path = require('path');

fileUtils.fileUtils(path.resolve('test1.txt'),'r',function (data,err) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log(data);
});
