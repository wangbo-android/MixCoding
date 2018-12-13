/**
 * Created by Administrator on 2017/8/30.
 */

var fs = require('fs');

var chProcess = require('child_process');

var out = fs.openSync('../txt/message.txt','w');

var cp = chProcess.spawn('node',['./write.mongo'],{detached : true,stdio : ['ignore',out,'ignore']});

cp.unref();

