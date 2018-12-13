var net = require('net');

var client = new net.Socket();

client.setEncoding('utf8');

client.connect(8080,'localhost',function () {

    //client.setEncoding('utf8');
    client.write('你好');
});

client.on('data',function (data) {

    console.log(data);
});

client.on('end',function () {

    console.log('服务器端关闭连接');
});

client.on('error',function (err) {

    console.log(err.message + err.code);
    client.end('客户端发生错误连接即将关闭','utf8');
    client.destroy();
});