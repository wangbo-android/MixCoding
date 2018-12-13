var dgarm = require('dgram');

var server = dgarm.createSocket('udp4');

server.on('message',function (msg,rinfo) {

    console.log(rinfo);

    var buf = new Buffer(msg);

    server.setBroadcast(true);

    server.send(buf,0,msg.length,41235,'192.168.1.255',function (error, bytes) {

        if(error){

            console.log(error.message);
            return;
        }

        console.log(bytes);
    });
});

server.bind(41235,'localhost',function () {

    console.log('服务器开始监听');
});
