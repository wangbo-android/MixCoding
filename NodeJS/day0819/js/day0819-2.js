/**
 * Created by Administrator on 2017/8/22.
 */

var http = require('http');

var fs = require('fs');

var opts = {

    hostname : 'www.baidu.com',
    port : 80,
    path : '/',
    method : 'GET'
};

var request = http.request(opts);

request.on('response',function (res) {

    console.log('状态码：' + res.statusCode);
    console.log('响应头：' + JSON.stringify(res.headers));

    res.setEncoding('utf8');

    res.on('data',function (chunk) {

        console.log('相应内容：' + chunk);

        var writeStream = fs.createWriteStream('../file/file1.txt', {encoding: 'utf-8'});

        res.pipe(writeStream);

    });

});

request.on('socket',function (socket) {

    socket.setTimeout(1000);

    socket.on('timeout',function () {

        request.abort();
    });
});

request.on('error',function (err) {

    console.log('请求过程中发生了错误' + err.message);
});

request.end();