/**
 * Created by Administrator on 2017/8/14.
 */

var connect = require('connect');

var users = require('./json/users.json');

var fs = require('fs');

var server = connect(

    connect.logger('dev'),
    connect.bodyParser(),
    connect.cookieParser(),
    connect.session({secret : 'my app secret'}),
    function (req,res,next) {

        if(req.url == '/' && req.session.logged_in){

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('Welcome back, <br>' + req.session.name + '</br>.'
             + '<a href="/logout">logout</a>');
        }else{

            next();
        }
    },
    
    function (req,res,next) {

        if(req.url == '/' && req.method == 'GET'){

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end([

                '<form action="/login" method="post">',
                '<fieldset>',
                '<legend>Please log in</legend>',
                '<p>User:<input type="text" name="user" /></p>',
                '<p>Password:<input type="text" name="password"/></p>',
                '<button>Submit</button>',
                '</fieldset>',
                '</form>'
            ].join(''));
        }else{

            next();
        }
    },
    
    function (req,res,next) {

        if(req.url == '/login' && req.method == 'POST'){

            res.writeHead(200,{'Content-Type':'text/html'});

            if(!users[req.body.user] || req.body.password != users[req.body.user].password){

                res.end('Bad Username/Password');
            }else{

                req.session.logged_in = true;
                req.session.name = users[req.body.user].name;
                res.end('Authenticated');
            }
        }else{

            next();
        }
    }
    ,
    function (req,res,next) {

        if(req.url == '/logout'){

            req.session.logged_in = false;

            res.writeHead(200);

            res.end('Logged Out');
        }else{

            next();
        }
    },

    function(req,res,next){

        if(req.url == '/file' && req.method == 'GET'){

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end([

                '<form action="/uplode" method="post" enctype="multipart/form-data">',
                '<fieldset>',
                '<legend>Please upload file</legend>',
                '<p>User:<input type="file" name="file" /></p>',
                '<button>Submit</button>',
                '</fieldset>',
                '</form>'
            ].join(''));
        }else{

            next();
        }
    },

    function (req,res,next) {

        if(req.url == '/uplode' && req.method == 'POST' && req.body.file){

            fs.readFile(req.body.file,'utf8',function (error,data) {

                if(error){

                    res.writeHead(500);
                    res.end('Error');
                    return;
                }

                res.writeHead(200,{'Content-Type' : 'text/html'});

                res.write([

                    '<h3>File:' + req.body.file.name + '</h3>',
                    '<h4>Type:' + req.body.file.type + '</h4>',
                    '<h4>Contents:</h4><pre>' + data + '</pre>'
                ].join(''));
            });
        }else{

            next();
        }
    }
);

server.listen(8080);




