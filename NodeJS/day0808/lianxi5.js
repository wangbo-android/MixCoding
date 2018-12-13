/**
 * Created by Administrator on 2017/8/8.
 */

var fs = require('fs');

var files = fs.readdirSync(process.cwd());

files.forEach(function (file) {

   if(/\.css/.test(file)){

       fs.watchFile(process.cwd() + '/' + file,function () {

           console.log('-' + file + 'change');
       });
   }
});


