
var express = require('express');

var app = express();

app.use(express.static(__dirname));
app.use(express.static('html'));

app.listen(8080,'localhost');

console.log(__dirname);