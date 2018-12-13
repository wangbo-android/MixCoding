/**
 * Created by Administrator on 2017/8/2.
 */

var EventEmmits = require('events').EventEmitter;

var emmit = new EventEmmits();

emmit.addListener('hello',function (name,age) {

    console.log(name + 'is' + age);
})

emmit.on('remove',function (name) {

    emmit.removeAllListeners(name);
})

emmit.emit('hello','wangbo','29');

emmit.emit('remove','hello');

emmit.emit('hello','wangbo','29');
