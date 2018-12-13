var stringdecoder = require('string_decoder').StringDecoder;

var decoder = new stringdecoder('utf8');

var buf = new Buffer(10);

buf.fill(10,0,9);

console.log(buf);

buf.fill('hello',0,10);

console.log(buf);

//var buf2 = new Buffer('hello');

//console.log(buf2.toString());

var de = decoder.write(buf);

console.log(de);

console.log(Buffer.byteLength('你好','utf8'));