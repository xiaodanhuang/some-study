//路由模块
function route(handle,pathname,response) {
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname]==='function'){
       return handle[pathname](response);
    }
    else{
        console.log("no request handler for" +pathname);
        return "404 not found"
    }


}

exports.route = route;