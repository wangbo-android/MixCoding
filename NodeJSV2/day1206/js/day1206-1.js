var child = require('child_process').spawn('node',['child.js'],{stdio : 'pipe'});

child.stdout.on('data',function (data) {

    console.log(data.toString());
});

child.on('close',function () {

    console.log('标准输入输出终止，子进程关闭');
});

child.on('exit',function () {

    console.log('子进程关闭');
    process.exit();
});

child.on('error',function (err) {

    console.log(err.message);
    child.kill();
});