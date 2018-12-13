/**
 * Created by Administrator on 2017/8/2.
 */

var readline = require('readline');

var rl = readline.createInterface({

    input : process.stdin,
    output : process.stdout
});

rl.question("What's your name",function (answer) {

    console.log("name is" + answer);

    rl.close();
});

rl.on("close",function () {

    process.exit(0);
});
