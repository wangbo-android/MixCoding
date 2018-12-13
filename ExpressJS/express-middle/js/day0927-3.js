/**
 * Created by Administrator on 2017/9/27.
 */

var express = require('express');

//var bodyParser = require('body-parser');

//var util = require('util');

var fs = require('fs');

var app = express();

app.use(express.bodyParser());

app.get('/',function (req,res) {

    fs.createReadStream('../html/upload.html').pipe(res);
});

app.post('/upload',function (req,res) {

    //console.log(req.body);
    var file = req.files.file;
    //console.log(req.files.file);
    fs.readFile(file.path,function (err,data) {

        if(err){

            console.log('读取文件失败');
            return;
        }

        fs.writeFile(file.name,function (err) {

            if(err){

                res.send('写文件失败');
            }else{

                res.send('上传文件成功');
            }
        });
    });
});

app.listen(8080,'127.0.0.1');
