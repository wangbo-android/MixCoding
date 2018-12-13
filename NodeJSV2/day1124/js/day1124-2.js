var http = require('http');

var opts = {

    hostname : 'awww.cbaiduS    .com',
    port : 80,
    path : '/',
    method : 'GET'
};

var request = http.request(opts);

request.on('response',function (res) {

    console.log('响应码' + res.statusCode);
    console.log('响应头' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data',function (data) {

        console.log('响应内容' + data);
    });
});

request.on('error',function (err) {


    if(err.code == 'ECONNRESET'){

        console.log('发生错误');
        request.abort();
    }
})

request.on('socket',function (socket) {

    socket.setTimeout(1000);

    socket.on('timeout',function () {

        request.abort();
    });
});

request.end();