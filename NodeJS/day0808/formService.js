/**
 * Created by Administrator on 2017/8/8.
 */

var http = require('http');

var form = ['<form method="POST" action="/url"',
    '<h1>My Form</h1>',
    '<fieldset>',
    '<label>Personal Information</label>',
    '<p>what is your name</p>',
    '<input type="text" name="name"/>',
    '<p>what is your address</p>',
    '<input type="text" name="address"/>',
    '<p><button>Submit</button></p>',
    '</form>'];

http.createServer(function (req,res) {

    console.log(req.url);

    if(req.url == '/'){

        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(form.join(""));

    }else if(req.url == '/ul' && req.method == 'POST'){

        var body = "";

        req.on('data',function (chunk) {

            body += chunk;

        }).on('end',function () {

            res.writeHead(200,{'Content-Type':'text/html'});

            var address = require('querystring').parse(body)['address'];

            console.log(require('querystring').stringify({address : address}));

            res.end('<p>Content-Type:' + req.headers['content-type'] + '</p>'
                + '<p>Data:</p><pre>' + require('querystring').parse(body).address + '</pre>');

        });
    }else{

        res.writeHead(404);
        res.end('Not Found');
    }
}).listen(8080);
