/**
 * Created by Administrator on 2017/8/22.
 */

var dgram = require('dgram');

var server = dgram.createSocket('udp4',function (msg, rinfo) {

    console.log('已接收客户端发送的数据：' + msg.toString());

    console.log('客户端地址信息：' + rinfo.address);

    var buf = new Buffer('确认信息：' + msg.toString());

    server.send(buf,0,buf.length,rinfo.port,rinfo.address,function (error, bytes) {

        server.setTTL(128);

        if(error){

            console.log(error.message);
            return;
        }

        console.log('已经发送的字节数为：' + bytes);

        setTimeout(function (args) {

            server.unref();
        },10000);
    });
});

server.bind(41234,'localhost',function () {

    var address = server.address();

    console.log('服务器开始监听，地址信息为：' + address.address);
});

server.on('error',function (err) {

    console.log(err.message);
});
