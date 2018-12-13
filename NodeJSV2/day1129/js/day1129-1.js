/*

process.stdin.resume();

process.stdin.on('data',function (chunk) {

    process.stdout.write(chunk.toString());
});
*/

process.argv.forEach(function (val,index,array) {

    console.log(index + ':' + val);
});