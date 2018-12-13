/**
 * Created by Administrator on 2017/8/18.
 */

var socket = require('net');

var fs = require('fs');

//var outSocket = fs.writeFile('../file/socket.txt',{encoding : 'utf-8'});

var server = socket.createServer(function (socket) {

    socket.setTimeout(5 * 60 * 1000);

    server.getConnections(function (error, count) {

        console.log('当前服务器存在' + count + '个客户端');

        server.maxConnections = 10;

        console.log('服务器最大连接数为' + server.maxConnections);
    });

    var socketAddress = socket.address();

    console.log('客户端IP地址：' + socketAddress.address + ';' + '端口号：' + socketAddress.port);

    socket.on('data',function (data) {

        socket.setEncoding('utf8');

        console.log(data);

        fs.writeFile('../file/socket.txt',data,{encoding : 'utf-8'});
    });

    socket.on('end',function (data) {

        console.log('客户端连接被关闭' + data);

        //outSocket.end('再见');

        //socket.unpipe(outSocket);
    });

    socket.on('timeout',function () {

        console.log('客户端连接超时');
    });

    socket.on('error',function (error) {

        console.log(error.code);

        socket.destroy();
    })
});

server.on('error',function (error) {

    if(error.code == 'EADDRINUSE'){

        console.log('端口或者IP地址已经被占用');
    }

});

server.on('close',function () {

    console.log('客户端连接全部断开，服务器连接将自动关闭');

    server.unref();
});

server.listen(30000,function () {

    var address = server.address();

    console.log('服务器开始监听....' + '\r\n' + address.port + ';' + address.address + ';' + address.family);
});