var express = require('express');

var app = express();

app.set('view engine','jade');
app.set('views','../views');
app.use(express.static('../css'));

app.get('/',function (req,res) {

    res.render('son',{pageTitle : 'Jade使用示例',arr : ['1','2','3'],layout : true},function (err,html) {

        if(err){

           res.send(err.message);
           console.log(err.message);
           return;
        }

        res.send(html);
    });
});

app.listen(8080,'localhost');