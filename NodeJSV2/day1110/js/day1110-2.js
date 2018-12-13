var fs = require('fs');

fs.mkdir('../txt',0777,function (err) {

    if(err){

        console.log(err.message);
        return;
    }
});

fs.readdir('../file',function (err,files) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log(files);
});