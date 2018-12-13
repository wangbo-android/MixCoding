/**
 * Created by Administrator on 2017/9/27.
 */

var setHeader = function () {
    
    return function (req,res,next) {

        res.statusCode = 200;
        res.header = {'ContentType':'text/html'};
        res.head = '<head><meta charset="utf-8"/></head>'
        next();
        };
};

exports.setHeader = setHeader;
