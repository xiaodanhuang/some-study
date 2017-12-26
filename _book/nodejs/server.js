var http = require("http");//请求Mode.js http模块
var url=require("url");


function serverStart(route,handle){
    http.createServer(function(request, response) {
        var pathname=url.parse(request.url).pathname;
        var content=route(handle,pathname,response);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content);
        response.end();
    }).listen(8888);//匿名函数并监听8888端口
    console.log("Server has started.");
}


exports.serverStart=serverStart;//导出serverStart函数
