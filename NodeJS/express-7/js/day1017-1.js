var express = require('express');

var app = express();

console.log(app.enabled('trust proxy'));

app.enable('trust proxy');

console.log(app.enabled('trust proxy'));