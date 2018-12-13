/**
 * Created by Administrator on 2017/8/8.
 */

console.log(1);

process.nextTick(function () {

    console.log(2);
});

console.log(3);

var fs = require('fs');

fs.readFile('./some/file',function (error,data) {

    if(!error){

        console.log(data);
    }
});

