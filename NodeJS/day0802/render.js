/**
 * Created by Administrator on 2017/8/2.
 */

var fs = require('fs');

var mime = require('mime');

var response = require('./response');

var render = function (res,filePath,dataSource,target) {

    fs.readFile(filePath,function (err,data) {

        if(err){

            console.log(err);

        }else{

            var targetData = dataSource[target];

            var dataString = data.toString();

            dataString = dataString.replace("%title%",targetData["title"]);

            dataString = dataString.replace("%1%",targetData["1"]);

            dataString = dataString.replace("%2%",targetData["2"]);

            dataString = dataString.replace("%3%",targetData["3"]);

            dataString = dataString.replace("%4%",targetData["4"]);

            response.response(res,filePath,dataString);
        }
    });
};

exports.render = render;