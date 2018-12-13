/**
 * Created by Administrator on 2017/8/22.
 */

var dgram = require('dgram');

var message = new Buffer('你好');

var client = dgram.createSocket('udp4',function (msg, rinfo) {

    console.log('已结束服务器端发送的数据：' + msg);

    console.log('服务器发送地址为：' + rinfo.address);

    console.log('服务器端口号：' + rinfo.port);
});

client.send(message,0,message.length,41234,'localhost',function (error, bytes) {

    client.setTTL(128);

    if(error){

        console.log('发送数据失败');

        return;
    }

    console.log('已经发送的字节数：'+ bytes);

    client.close();
});

client.on('close',function () {

    console.log('客户端socket关闭');
});

client.on('error',function (err) {

    console.log(err.message);
});