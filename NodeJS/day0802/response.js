/**
 * Created by Administrator on 2017/8/2.
 */

var mime = require('mime');

var response = function (res,filePath,data) {

    res.writeHead(200,{'Content-Type':mime.lookup(filePath)});

    res.end(data);
}

exports.response = response;