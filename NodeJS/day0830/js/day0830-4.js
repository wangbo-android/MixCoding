/**
 * Created by Administrator on 2017/8/30.
 */

process.on('message',function (m) {

    console.log('接收到父进程发来的消息为：'+ m);

    process.send('你好父进程');
});
