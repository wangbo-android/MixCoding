/**
 * Created by Administrator on 2017/8/8.
 */

var readline = require('readline');

var rl = readline.createInterface({

    input : process.stdin,
    output : process.stdout
});

rl.setPrompt('Test>');

rl.prompt();

var net = require('net');

var client = net.Socket();

client.connect(30000,'127.0.0.1',function () {

    console.log('连接到服务器');

    rl.setPrompt('Test>');

    rl.prompt();
});

rl.on('line',function (line) {

    switch (line.trim()){

        case 'close':
            rl.close();
            break;
        default:
            break;
    }

    client.write(line);

    rl.prompt();

}).on('close',function () {

    client.end();
});

client.on('data',function (data) {

    client.setEncoding('utf-8');

    console.log(data.toString());

    rl.prompt();
}).on('close',function () {

    console.log('客户端关闭');
});


