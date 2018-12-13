var dgram = require('dgram');

var buf = new Buffer('你好');

var udpclient = dgram.createSocket('udp4');

udpclient.send(buf,0,buf.length,41234,'localhost',function (error, bytes) {

    if(error){

        console.log(error.message);
        return;
    }

    console.log(bytes);
});

udpclient.on('message',function (msg,rinfo) {

    console.log(msg + rinfo);
});

