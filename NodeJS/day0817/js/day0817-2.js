/**
 * Created by Administrator on 2017/8/16.
 */

var eventEmmit = require('events').EventEmitter;

var emmitter = new eventEmmit();

var stduent = require('./day0817-4');

emmitter.once('data',function () {

    console.log('data once');
});

emmitter.on('data',function (msg) {

    console.log(msg);
});

emmitter.emit('data','hello world');

stduent.sayName();