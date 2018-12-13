var fs = require('fs');

var out = fs.openSync('../file/message.txt','w');

var child = require('child_process').spawn('node',['write.js'],{

    detached : true,
    stdio : ['ignore',out,'ignore']
});

child.unref();

