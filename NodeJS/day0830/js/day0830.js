/**
 * Created by Administrator on 2017/8/30.
 */

var childProcess = require('child_process');

var child = childProcess.spawn('node',['./test.mongo'],{stdio : 'inherit'});

child.on('close',function (code,signal) {

    console.log(code + signal + process.cwd());

    process.exit();
});

child.on('error',function (err) {

    console.log(err.code);

    process.exit();
});
