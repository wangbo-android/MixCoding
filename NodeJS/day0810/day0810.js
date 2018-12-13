/**
 * Created by Administrator on 2017/8/10.
 */

var http = require('http'),

    query = require('querystring');

var search = process.argv.join("").trim();

if(!search.length){

    console.log('\n Usage:node tweets <search term>\n');
}

http.request({

    host : 'search.twitter.com',
    path : '/search.json?' + query.stringify({q : search}),

},function (res) {

    var body = '';
    res.setEncoding('utf8');
    res.on('data',function (chunk) {

        body += chunk;
    });

    res.on('end',function () {

        var obj = JSON.parse(body);

        obj.results.forEach(function (tweet) {

            console.log(tweet.text);
            console.log(tweet.from_user);
            console.log('---');
        });
    });

}).end();


