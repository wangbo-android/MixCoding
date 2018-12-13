var cp = require('child_process');

var fork = cp.fork('test.js');

fork.on('message',function (message) {

    console.log(message.toString());
});

fork.send('王博');