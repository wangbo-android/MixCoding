/**
 * Created by Administrator on 2017/8/8.
 */

var stdin = process.stdin;

var stdout = process.stdout;

var dirPath = './';

var fs = require('fs');

fs.readdir(dirPath,function (err,files) {

    if(err){

        console.log(err);
    }else if(!files.length){

        return console.log('     \033[31m No Files to Show!\033[39m\n');
    }

    console.log('Which files do you want to select\n');
    
    function file(i) {

        var filename = files[i];

        fs.stat(dirPath + '/' + filename,function (err2, stats) {

            if(stats.isDirectory()){

                console.log('is drirectory');
            }else{

                console.log(dirPath + '/' + filename);
            }

            i++;

            if(i == files.length){

               read();

            }else{

                file(i);
            }
        });

        file(0);
    }

    function  read() {

        console.log(' ');

        stdout.write('Enter you choice');

        stdin.resume();

        stdin.setEncoding('utf-8');

        stdin.on('data',option);
    }

    function option(data) {

        if(!files[Number(data)]){

            stdout.write('Enter you choice');

        }else{

            stdin.pause();
        }
    }
});

