/**
 * Created by Administrator on 2017/8/30.
 */

var cp = require('child_process');

var cmodule = cp.fork(__dirname + '/day0830-4.mongo',{silent : true});

cmodule.on('message',function (m) {

    console.log('接收到子线程发来的信息为：'+ m);

    process.exit();
});

cmodule.send('你好子线程');