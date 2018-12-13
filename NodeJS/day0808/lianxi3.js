/**
 * Created by Administrator on 2017/8/8.
 */

var buffer = new Buffer('==ii1j2i3h1i23h','base64');

console.log(buffer);

require('fs').writeFile('./image/logo.png',buffer);

var readline = require('readline');

var rl = readline.createInterface({

    input : process.stdin,
    output : process.stdout
});

rl.setPrompt("Test>");

rl.prompt();

rl.on('line',function (line) {

    switch (line.trim()) {

        case 'hello':
            console.log('hello');
            break;
        case 'close':
            rl.close();
            break;
        default:
            break;
    }
});

rl.on('close',function () {

    process.exit(1);
})


