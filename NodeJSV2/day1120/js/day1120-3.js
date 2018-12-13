var dgram = require('dgram');

var udp = dgram.createSocket('udp4',function (msg,rinfo) {

    console.log(rinfo.address + rinfo.port + rinfo.family);
    console.log(msg);

    var buf = new Buffer('确认信息：' + msg);

    udp.send(buf,0,buf.length,rinfo.port,rinfo.address,function (error, bytes) {

        if(error){

            console.log(error.message);
            return;
        }

        console.log('发送的字节数' + bytes);
    });
});

udp.bind(8080,'localhost',function () {

    console.log('udp服务器开始监听');
});