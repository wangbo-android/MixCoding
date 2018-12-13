var cluster = require('cluster');

var http = require('http');

if(cluster.isMaster){

    cluster.fork();
    console.log('这段代码运行在主进程');
}else{

    http.createServer(function (req,res) {

        if(req.url == '/'){

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('你好');
            console.log('这段代码运行在子进程');
        }

    }).listen(8080,'localhost');
}

cluster.on('fork',function (worker) {

    console.log('子进程' + worker.id + '被开启');
});

cluster.on('online',function (worker) {

    console.log('已经接收到子进程' + worker.id + '发送的反馈信息');
});

cluster.on('listening',function (worker,address) {

    console.log('子进程中' + worker.id + '服务器开始监听' + address.address + ':' + address.port);
});