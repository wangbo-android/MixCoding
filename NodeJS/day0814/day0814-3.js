/**
 * Created by Administrator on 2017/8/14.
 */

var connect = require('connect');

var server = connect.createServer();

server.use('/images',connect.static('./images'),{maxAge : 100000000000000000});

server.use(connect.query);

server.use(function (req,res) {

    req.query.page == '5';
});


