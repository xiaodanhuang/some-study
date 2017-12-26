var server=require("./server.js");//请求server模块"
var router=require("./router.js");
var requestHandlers=require("./requestHandlers.js");
var handle={};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;








server.serverStart(router.route,handle);
