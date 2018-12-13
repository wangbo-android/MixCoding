/**
 * Created by Administrator on 2017/8/2.
 */

var readline = require('readline');

var rl = readline.createInterface({

    input:process.stdin,
    output:process.stdout
});

rl.on("line",function (line) {

    switch (line.trim()){

        case "copy":
            console.log("copy" + "复制");
            break;
        case "hello":
            rl.write(line.trim());
            console.log(line.trim());
            break;
        case "close":
            rl.close();
            break;
        default:
            console.log("没有找到命令");
            break;
    }
});

rl.on("close",function () {

    process.exit(0);
})
