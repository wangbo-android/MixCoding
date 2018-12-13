/**
 * Created by Administrator on 2017/8/22.
 */

var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.on('listening',function () {

    server.setTTL(128);
    server.setMulticastLoopback(true);
    server.addMembership('230.185.192.108');
});

setInterval(function (args) {

    var buf = new Buffer(new Date().toString());

    server.send(buf,0,buf.length,8088,'230.185.192.108');
},10000);
