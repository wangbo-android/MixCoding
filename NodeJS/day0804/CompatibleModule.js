/**
 * Created by Administrator on 2017/8/4.
 */

(function (name,definition) {

    var hasDefine = typeof definition == 'function';

    var hasExports = typeof module !== 'undefined' && module.exports;

    if(hasDefine){

        define(definition);

    }else if(hasExports){

        module.exports = definition();
    }else{

        this[name] = definition;
    }
})('hello',function () {

    var hello = function () {

        console.log("hello");
    };

    return hello;
});
