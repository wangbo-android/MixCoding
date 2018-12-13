/**
 * Created by Administrator on 2017/8/28.
 */
/*
process.stdin.resume();

process.stdin.on('data',function (chunk) {

    process.stdout.write(chunk.toString());
});
*/

console.log(process.argv);

process.argv.forEach(function (val, index, array) {

    console.log(index + ':' + val + '\r\n' + array.length);
});

console.log(process.memoryUsage());

console.log(process.exit(0));

console.log(process.cwd());
