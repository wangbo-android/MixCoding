/**
 * Created by Administrator on 2017/8/18.
 */

var path = require('path');

var pathJoin = path.join(__dirname,'a','b','c');

console.log(pathJoin);

var absoultePath = path.resolve('a','b','c');

absoultePath = path.resolve('../a');

//absoultePath = path.resolve('./b');

absoultePath = path.resolve('/c');

absoultePath = path.resolve();

console.log(absoultePath);

console.log(path.dirname(path.resolve()));

console.log(path.basename(path.resolve() + '/day0818.mongo','.mongo'));

console.log(path.extname(path.resolve() + '/day0818.mongo'));

console.log(path.sep);

console.log(path.delimiter);


