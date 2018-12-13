var dgarm = require('dgram');

var client = dgarm.createSocket('udp4');

var buf = new Buffer('你好服务器端');

client.on('message',function (msg,rinfo) {

    console.log(rinfo + msg);
});

client.send(buf,0,buf.length,41235,'192.168.1.110');

client.bind(41235,'192.168.1.110',function () {

    console.log('客户端开始监听');
});