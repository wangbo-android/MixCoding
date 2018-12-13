/**
 * Created by Administrator on 2017/9/27.
 */

var fs = require('fs');

var express = require('express');

//var multer = require('multer');

/*
var storage = multer.diskStorage({

    destination : function (req,file,cb) {

        cb(null,'../file')
    },

    filename : function (req,file,cb) {

        cb(null,file.fieldname + '-' + Date.now() + '.txt');
    },

});
*/
//var uploadPath = multer();

var app = express();

app.use(express.bodyParser());

app.get('/',function (req,res) {

    fs.createReadStream('../html/upload.html').pipe(res);
});

app.post('/upload',function (req,res) {

    var file = req.file;
    //file.encoding = 'utf8';
    fs.readFile(file.path,function (err,data) {

        if(err){

            console.log(err.message);
            return;
        }

        fs.writeFile(file.name,data,function (err) {

            if(err){

                console.log(err.message);
                return;
            }

            res.send('上传成功');
        });

    });

});

app.listen(8080,'127.0.0.1');
