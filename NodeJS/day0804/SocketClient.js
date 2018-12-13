/**
 * Created by Administrator on 2017/8/4.
 */

var net = require('net');

var readline = require('readline');

var rl = readline.createInterface({

    input : process.stdin,
    output : process.stdout
});

var HOST = '127.0.0.1';

var PORT = '30000';

var client = new net.Socket();

client.connect(PORT,HOST,function () {

    console.log('CONNECT TO'  + HOST + ":" + PORT);

    rl.setPrompt('Test>');

    rl.prompt();
});

client.on('data',function (data) {

    console.log(data.toString());
    rl.prompt();
});

rl.on('line',function (line) {

    switch(line.trim()){

        case 'close':
            rl.close();
            return;
    };

    client.write(line.trim());
    rl.prompt();
}).on('close',function () {

    console.log("GoodBye");

    client.end();
});
