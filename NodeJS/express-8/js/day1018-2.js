var express = require('express');

var app = express();

var items = [{title : "文章1"},{title : "文章2"}];

app.set('view engine','ejs');
app.set('views','../views');
app.use(express.static('../css'));

app.get('/',function (req,res) {

    res.render('index',{title : "文章列表",items : items});
});

app.listen(8080,'localhost');