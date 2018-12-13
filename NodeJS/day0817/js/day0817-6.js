/**
 * Created by Administrator on 2017/8/16.
 */

var stringEncoder = require('string_decoder').StringDecoder;

var decoder = new stringEncoder();

var str1 = new Buffer([0xe6,0x88,0x91,0xe5,0x96]);

var str2 = new Buffer([0x9c,0xe7,0x88,0xb1]);

console.log(decoder.write(str1));

console.log(decoder.write(str2));

console.log(JSON.stringify(str1));

console.log(Buffer.byteLength('我爱编程'));

var copy = new Buffer(JSON.parse(JSON.stringify(str1)));

console.log(decoder.write(copy));
