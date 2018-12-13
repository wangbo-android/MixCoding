/**
 * Created by Administrator on 2017/8/2.
 */

exports.index = function (res) {

    res.writeHead(200,{'Content-Type':"text/html"});

    res.write('<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />' + '窗前明月光');

    res.end();
}
