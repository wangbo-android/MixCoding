/**
 * Created by Administrator on 2017/9/27.
 */

var express = require('express');

var bodyParser = require('body-parser');

var multer = require('multer');

var storage = multer.diskStorage({

    destination : function (req,file,callback) {

        callback(null,'../temp');
    },

    filename : function (req,file,callback) {

        callback(null,file.originalname);
    }
});

var upload = multer({storage : storage});

var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/',function (req,res) {

    fs.createReadStream('../html/index.ejs').pipe(res);
});

app.post('/upload',upload.single('file'),function (req,res) {

    var file = req.file;
    console.log(file);
    fs.readFile('../temp/2222.txt' ,function (err,data) {

        if(err){

            console.log(err.message);
            return;
        }

        fs.writeFile('../file/2222.txt',data,function (err) {

            if(err){

                console.log(err.message);
                return;
            }

            res.send('文件上传成功');
        },{encoding : 'utf8'});
    },{encoding : 'utf8'});
    console.log(file);
});

app.listen(8080,'127.0.0.1');
