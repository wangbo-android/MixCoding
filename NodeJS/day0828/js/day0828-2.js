/**
 * Created by Administrator on 2017/8/28.
 */

process.on('exit',function () {

    console.log('进程即将退出');
});


process.on('uncaughtException',function (err) {

    console.log('捕获到一个未知错误' + err.code);

    process.exit(0);
});

noexistFunction();
