
var conFn = function () {

    console.time('mark');

    console.log('%s','hello',{foo : "Foo"});

    console.log('%d','124532');

    var users = {'name':'wangbo'};

    console.dir(users);

    console.timeEnd('mark');

//console.trace('trace');

//console.assert(1 == 22,'error occur');

    console.log(global);
};

exports.con = conFn;