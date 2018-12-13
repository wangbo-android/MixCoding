/**
 * Created by Administrator on 2017/8/4.
 */

var net = require('net');

var HOST = '127.0.0.1';

var PORT = 30000;

net.createServer(function (socket) {

    console.log('CONNECT' + socket.remoteAddress + ":" + socket.remotePort);

    socket.addListener('data',function (data) {

        console.log('DATA' + socket.remoteAddress + ":"+  data.toString());

        socket.write(data);
    });
    
    socket.addListener('close',function (data) {

        console.log('CLOSED: ' + socket.remoteAddress + ' ' + socket.remotePort + data);
    });
}).listen(PORT,HOST);

console.log('Server is listening on' + HOST + ":" + PORT);