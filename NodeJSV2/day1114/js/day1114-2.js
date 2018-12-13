var fs = require('fs');

fs.watchFile('../file/test.txt',{persistent : false},function (curr,prev) {

    if(Date.parse(curr.ctime) == 0){

        console.log('curr.ctime');
    }else if(Date.parse(prev.ctime) == 0){

        console.log('prev.ctime');
    }else{

        console.log('else');
    }
});