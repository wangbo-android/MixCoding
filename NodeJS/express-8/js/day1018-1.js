var express = require('express');

var app = express();

app.use(express.static('../css'));
app.set('view engine','jade');
app.set('views','../views');

app.get('/',function (req,res) {

    res.render('custom',{pageTitle : '模板',arr : ['1','2','3'],layout : true},function (err,html) {

        if(err){

            res.send(err.message);
            return;
        }

        res.send(html);
    });
});

app.listen(8080,'localhost');