/**
 * Created by Administrator on 2017/8/14.
 */

var connect = require('connect');

var server = connect(
    
    connect.logger('dev'),
    
    connect.basicAuth(function (user,pass,fn) {

        process.stdin.resume();

        process.stdin.setEncoding('utf-8');

        process.stdout.write(user + 'with pass' + pass + '? [y/n]:');

        process.stdin.once('data',function (data) {

            if(data[0] == 'y'){

                fn(null,{username : user});
            }else{

                fn(new Error('Unauthorized'));
            }
        });
    })
    ,
    function (req,res,next) {
        
        res.writeHead(200);
        res.end('Welcome to' + req.remoteUser.username);
    }
);

server.listen(8080);
