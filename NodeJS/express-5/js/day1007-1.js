
var express = require('express');

var app = express();

app.use(express.cookieParser());
app.use(express.session({secret : "test",cookie : {maxAge : 3600000}}));
app.use(express.static('../html'));

app.post('/session',function (req,res) {

   res.send(req.session.cookie);

});

app.listen(8080,'localhost');