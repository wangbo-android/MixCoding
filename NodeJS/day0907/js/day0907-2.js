/**
 * Created by Administrator on 2017/9/7.
 */

var readline = require('readline');

var rl = readline.createInterface({

    input : process.stdin,
    output : process.stdout
});

rl.on('line',function (line) {

   if(line == 'exit'){

       rl.close();
   }else{

       console.log(line.toString());
   }
});

rl.on('close',function () {

    process.exit(1);
})
