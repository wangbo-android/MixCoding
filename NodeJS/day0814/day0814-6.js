/**
 * Created by Administrator on 2017/8/14.
 */

var fs = require('fs');

var connect = require('connect');

var server = connect.createServer();

server.use(connect.bodyParser());

server.use('/static',connect.static('./html'));

server.use(function (req,res,next) {

    console.log(req.body);

    if(req.method == 'POST' && req.url == '/' && req.body){

        //console.log(req.body.files);
        /*
        for(var i=0;i<req.body.files.length;i++){

            fs.readFile(req.body.files[i].path,'utf8',function (err,data) {

                if(err){

                    res.writeHead(500);
                    res.end('Error');
                    return;
                }

                res.writeHead(200,{'Content-Type' : 'text/html'});

                res.write([

                    '<h3>File:' + req.body.files[i].name + '</h3>',
                    '<h4>Type:' + req.body.files[i].type + '</h4>',
                    '<h4>Contents:</h4><pre>' + data + '</pre>'
                ].join(''));
            });
        }
        */

        res.writeHead(200);
        res.end(JSON.stringify(req.body));
    }else{

        console.log('wrong');
        next();
    }
});

server.listen(8080);
