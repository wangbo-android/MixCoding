/**
 * Created by Administrator on 2017/8/16.
 */

console.log(global);

if(module == require.main){

    console.log('yes');

    console.log(module.filename);
}

console.log(require.resolve('./day0817.mongo'));

console.log(require.cache);

console.log(require.cache[require.resolve('./day0817.mongo')]);

console.log(__filename);

console.log(__dirname);

var emitter = require('events').EventEmitter;

var emmit = new emitter();

emmit.on('data',function (error,data) {

    console.log(data);
});

emmit.emit('data');

console.log(emmit.listeners('data'));