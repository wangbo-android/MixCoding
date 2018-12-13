var net = require('net');

var server = net.createServer(function (socket) {

    socket.setEncoding('utf8');

    server.getConnections(function (error,count) {

        console.log('当前连接数' + count);

        server.maxConnections = 2;

        console.log('服务器最大连接数' + server.maxConnections);
    });
    console.log(socket.address());

    socket.on('data',function (data) {

        console.log(data);
        socket.write('你好客户端');
    });

    socket.on('end',function () {

        console.log('客户端连接关闭');
    });

    socket.setTimeout(6 * 1000,function () {

        socket.end('再见客户端','utf8');

    });

    socket.on('error',function (err) {

        console.log(err.message);
        socket.destroy();
    });

    socket.on('close',function (handle_error) {

        if(handle_error){

            console.log('由于一个错误socket关闭');
            server.unref();
            return;
        }

        console.log('客户端socket正常关闭');
    });
});

/*
server.on('connection',function (socket) {


});
*/

server.listen(8080,'localhost',function () {

    var address = server.address();
    console.log('服务器开始监听' + address.address + address.port + address.family);
});

server.on('error',function (err) {

   if(err){

       console.log(err.message);
       return;
   }
});

server.on('close',function () {

    console.log('TCP服务器被关闭');
    server.unref();
});