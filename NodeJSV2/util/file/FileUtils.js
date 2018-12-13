/**
 * @author wangbo
 * @description 该模块主要是对文件、文件流操作的工具模块
 */

var fs = require('fs');

var stringDecoder = require('string_decoder').StringDecoder;

var decoder = new stringDecoder('utf8');

var options = {flag : 'r+',encoding : 'utf8'};

var fileUtils = function (path,opt,fn){

    if(typeof path == 'string'){

        switch (opt){

            case 'r':

                readFile(path,function (data,err) {

                    if(err){

                        fn(null,new Error(err.message));
                        return;
                    }

                    fn(data,null);
                });
                break;
            case 'w':

                break;
            case 'rstrem':

                break;
            case 'wstream':

                break;
        }
    }else{

        fn(null,new Error('方法参数类型只能是字符串'));
    }
};

var readFile = function(filePath,fn) {

    fs.readFile(filePath,options,function (err,data) {

        if(err){

            console.log(err.message);
            fn(null,new Error('文件读取时发生错误'));
            return;
        }

        fn(decoder.write(data),null);
    });
}

var writeFile = function(filePath) {


}

var readFileAsStream = function(filaPath) {

}

var writeFileAsStream = function(filaPath) {

}

exports.fileUtils = fileUtils;














/*
console.log(path.normalize('../file\\'));

console.log(path.resolve('./c'));

console.log(path.resolve('/c'));

console.log(path.resolve());

console.log(path.dirname(path.resolve()));

console.log(path.basename(path.resolve() + __filename));

console.log(path.extname(path.resolve() + __filename));

console.log(path.sep);

console.log(path.delimiter);

*/