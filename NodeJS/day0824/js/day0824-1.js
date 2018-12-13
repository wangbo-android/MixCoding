/**
 * Created by Administrator on 2017/8/24.
 */

console.log(process.version);

console.log(process.execPath);

console.log(process.platform);

console.log(process.config);

console.log(process.pid);

process.stdin.resume();

process.stdin.on('data',function (chunk) {

    process.stdout.write(chunk);
});
