/**
 * Created by Administrator on 2017/8/16.
 */

//console.log(global);

//console.log(module.parent);

var buf = new Buffer(128);

console.log(buf.length);

buf.fill(1,10,20);

console.log(buf);

var str = new Buffer('hello world','utf8');

console.log(str);

var chi = new Buffer('我爱编程','utf8');

console.log(chi);

console.log(chi[3]);


