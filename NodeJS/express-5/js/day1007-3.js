
var express = require('express');

var app = express();

app.use(express.static(__dirname));
app.use(express.directory(__dirname,{filter : function(file,pos,list) {

    return (file.indexOf('.') === -1 || file.indexOf('.js') >= -1);
}}));

app.listen(8080,'localhost');