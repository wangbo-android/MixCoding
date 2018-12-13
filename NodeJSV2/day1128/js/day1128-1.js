var http = require('http');

var options = {

    hostname : 'localhost',
    port : 8080,
    path : '/',
    method : 'POST'
};

var request = http.request(options);

request.write('你好');
request.end('再见');

request.on('error',function (err) {

    console.log(err.message);
});