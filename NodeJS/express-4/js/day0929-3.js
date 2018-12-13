/**
 * Created by Administrator on 2017/9/29.
 */

var express = require('express');

var app = express();

var router = express.Router();

router.use(function (req,res,next) {

    console.log('middleware');
    next();
});

router.param('id',function (req,res,next,id) {

    console.log(id);
    next();
});

router.route('/api/:id').get(function (req,res,next) {

    res.send('get');
    next();

}).put(function (req,res,next) {

    res.send('put');
    next();

}).post(function (req,res,next) {

    res.send('post');
    next();
});

/*
router.get('/api/:id',function (req,res) {

    res.send('router');
});
*/
app.use(router);
app.use('/file',express.static('../html'));

app.listen(8080,'127.0.0.1');
