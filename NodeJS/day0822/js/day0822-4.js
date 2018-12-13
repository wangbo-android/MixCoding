/**
 * Created by Administrator on 2017/8/22.
 */

var PORT = '8088';

var HOST = '192.168.0.109'

var dgram = require('dgram');

var client = dgram.createSocket('udp4');

client.on('message',function (msg,rinfo) {

    console.log(msg,toString());
})

client.on('listening',function () {

    client.addMembership('230.185.192.108');
});

client.bind(PORT,HOST);
