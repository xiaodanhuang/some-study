var exec = require("child_process").exec;
//模拟阻塞
function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}
function start(){
    console.log("request handle start");
    //sleep(10000);
    var content="empty";
    exec("ls -lah", function (error, stdout, stderr) {
        content = stdout;
        console.log("ok")
    });

    return content;
}
function upload(){
    console.log("request handle upload");
    return "hello upload"
}
exports.start=start;
exports.upload=upload;