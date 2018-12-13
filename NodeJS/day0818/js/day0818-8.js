/**
 * Created by Administrator on 2017/8/18.
 */

var net = require('net');

var client = new net.Socket();

client.connect(30000,'localhost',function () {

    client.write('你好');
    client.end('再见','utf8');
});

client.on('data',function (data) {

    client.setEncoding('utf8');

    console.log('接收到服务器发送的数据为:' + data);
});

client.on('error',function (error) {

    console.log(error.code);

    client.destroy();
});




