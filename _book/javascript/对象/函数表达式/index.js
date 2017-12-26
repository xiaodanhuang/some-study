//匿名函数
var  sayName=function(){
    console.log('danhuang');
}
//递归
function factorial(num){
    if (num <= 1){
        return 1;
    } else {
        return num * arguments.callee(num-1);
    }
}
//闭包
function fool(x){
    var temp=3;
     return function (y){
        console.log(x+y+(++temp));
    }
}
