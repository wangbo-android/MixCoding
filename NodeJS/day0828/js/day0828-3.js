/**
 * Created by Administrator on 2017/8/28.
 */

var childProcess= require('child_process');

var cp1 = childProcess.spawn('node',['test1.mongo','one','two','three'],{stdio : 'pipe',cwd : './test'});
