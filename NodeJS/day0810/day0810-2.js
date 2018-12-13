/**
 * Created by Administrator on 2017/8/10.
 */

var superagent = require('superagent');

superagent.get('http://127.0.0.1:8080').end(
    
    function (res) {

        console.log(res.text);
        console.log(res.body);
    }
);
