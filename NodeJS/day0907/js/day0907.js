/**
 * Created by Administrator on 2017/9/7.
 */

var dns = require('dns');

var os = require('os');

dns.resolve('www.baidu.com','A',function (err,addresses) {

    if(err){

        console.log(err.message);

        return;
    }

    console.log(addresses);
});

dns.resolve4('www.tmall.com',function (err,addresses) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log(addresses);
});

dns.resolveMx('163.com',function (err, addresses) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log(addresses);
});

dns.lookup('www.baidu.com',4,function (err,addresses) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log(addresses);
});

dns.reverse('61.135.169.125',function (err, domain) {

    if(err){

        console.log(err.message);
        return;
    }

    console.log(domain);
});

console.log(os.platform());

console.log(os.type());

console.log(os.release());

console.log(os.totalmem());

console.log(os.cpus());
