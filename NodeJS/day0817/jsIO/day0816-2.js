/**
 * Created by Administrator on 2017/8/16.
 */

var fs = require('fs');

var stringDecoder = require('string_decoder').StringDecoder;

var decoder = new stringDecoder();

fs.open('./text/txt.txt','r',0777,function (erro,fd) {

    if(erro){

        console.log(erro);

        return;
    }

    var buff = new Buffer(255);

    fs.read(fd,buff,0,10,2,function (err, bytesRead, buffer) {

        console.log(decoder.write(buffer.slice(0,bytesRead)));

        console.log(bytesRead + ';' + buffer.length);
    });

    //fs.fsync(fd);

    fs.close(fd);
});