/**
 * Created by Administrator on 2017/8/14.
 */

var sa = require('superagent');

function search(query,fn) {

    sa.get('http://search.twitter.com/search.json').send({q : query}).end(function (res) {

        if(res.body && Array.isArray(res.body.results)){

            return fn(null,res.body.results);
        }else{

            return fn(new Error('Bad twitter response'));
        }
    });
};

module.exports = search;
