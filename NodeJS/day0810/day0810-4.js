/**
 * Created by Administrator on 2017/8/10.
 */

var connect = require('connect');

var server = connect.createServer();

server.use(connect.static(__dirname));

server.listen(8080);
