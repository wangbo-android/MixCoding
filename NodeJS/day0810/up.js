/**
 * Created by Administrator on 2017/8/10.
 */

module.exports = require('http').createServer(function (request, response) {

    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Hello World <br/>');
});
