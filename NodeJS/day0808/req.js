/**
 * Created by Administrator on 2017/8/8.
 */

var qs = require('querystring');

var http = require('http');

function  send(theName,address) {

    http.request({

        host : '127.0.0.1',
        port : 8080,
        url : '/ul',
        method : 'POST'
    },function (res) {

        var body;

        res.setEncoding('utf-8');

        res.on('data',function (chunk) {

            body += chunk;

            console.log(body);
        });

        res.on('end',function () {

            process.stdout.write('your name');
        });
    }).end(qs.stringify({name : theName,address : address}));
}

process.stdout.write('write down your name\n');

process.stdin.resume();

process.stdin.setEncoding('utf-8');

process.stdin.on('data',function (name) {

    send(name.replace('\n',''),'shijiazhuang');
});


