/**
 * Created by Administrator on 2017/9/29.
 */

var express = require('express');

var fs = require('fs');

var app = express();

app.use(express.bodyParser());
app.use(express.static('../html'));

app.post('/upload',function (req,res) {

    var file = req.files.file;
    fs.readFile(file.path,function (err,data) {

        if(err){

            res.send('读取文件操作失败');
            return;
        }

        fs.writeFile('../upload/' + file.name,data,function (err) {

            if(err){

                res.send('写文件操作失败');
                return;
            }

            res.send('文件上传成功');
        });
    });
    console.log(file);
});

app.listen(8080,'127.0.0.1');
