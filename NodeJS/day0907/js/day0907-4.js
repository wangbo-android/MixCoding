/**
 * Created by Administrator on 2017/9/7.
 */

var readline = require('readline');

var rl = readline.createInterface({

    input : process.stdin,
    output : process.stdout
});

rl.on('line',function (line) {

    if(line == 'pause'){

        rl.pause();

        setTimeout(function () {

            rl.resume();
        },10000);

    }else if(line == 'close'){

        rl.close();

    }else {

        console.log(line);
    }
});

rl.on('resume',function () {

    console.log('数据恢复读取');
});

rl.on('close',function () {

    process.exit(1);
});
