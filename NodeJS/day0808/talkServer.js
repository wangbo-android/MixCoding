/**
 * Created by Administrator on 2017/8/8.
 */

var net = require('net');

var count = 0;

var users = {};

net.createServer(function (socket) {

    socket.write('\n > Welcome to \033[92mnode-chat\033[39m'
        + '\n >' + count + 'other people are connected on this time'
        + '\n > Please write your name and enter:');

    socket.setEncoding('utf-8');

    var nickname;

    count++;

    function broadcast(msg,exceptMyself) {

        for(var i in users){

            if(!exceptMyself || i != nickname){

                users[i].write(msg);
            }
        }
    }

    socket.on('data',function (data) {

        data = data.replace('\r\n','');

        if(!nickname){

            if(users[nickname]){

                socket.write('nickname already in use');

                return;
            }else{

                nickname = data;

                users[nickname] = socket;

                for(var i in users){

                    users[i].write(nickname + 'joined the room');

                    broadcast(nickname + 'joined the room');
                }
            }
        }else{

            for(var i in users){

                if(i != nickname) {

                    users[i].write(nickname + data + '\n');

                    broadcast(nickname + data + '\n',true);
                }
            }
        }
       // console.log(data.toString());
    });

    socket.on('close',function () {

        broadcast(nickname + 'leave the chat room' + '\n');

        count--;

        delete users[nickname];
    });
}).listen(30000,'127.0.0.1',function () {

    console.log('server is listening on 30000 port');
});


