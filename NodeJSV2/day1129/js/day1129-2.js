var spawn = require('child_process').spawn;

var sp = spawn('node',['day1128-3.js'],{stdio : 'pipe'});

sp.stdin.write('你好你好你好你好');

sp.exit();