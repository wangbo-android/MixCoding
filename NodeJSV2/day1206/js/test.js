process.on('message',function (message) {

    console.log(message.toString());
    process.send('你好王博');
});