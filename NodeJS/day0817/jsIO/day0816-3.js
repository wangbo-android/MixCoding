/**
 * Created by Administrator on 2017/8/16.
 */

var fs = require('fs');

fs.stat('./text/txt.txt',function (err, stats) {

    if(err){

        return;
    }

    console.log(stats.isFile());
});
