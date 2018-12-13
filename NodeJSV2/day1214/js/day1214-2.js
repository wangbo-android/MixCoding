var cluster = require('cluster');

cluster.setupMaster(

    {exec : 'child.js'}
);

cluster.fork();

console.log('主进程');

console.log(cluster.settings);