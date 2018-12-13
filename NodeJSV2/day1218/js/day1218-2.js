var fs = require('fs');

var domain = require('domain');

var d = domain.create();

fs.readFile('./test.txt',d.bind(function (err,data) {

    if(err){

        throw err;
    }else{

        console.log(data.toString());
    }
}));

fs.readFile('./test1.txt',d.intercept(function (err,data) {

    console.log(data);
}));

d.on('error',function (err) {

    console.log(err.message);
});