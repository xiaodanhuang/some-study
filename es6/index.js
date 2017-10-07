 let t= do {
    let t = f();
    t * t + 1;
};
console.log(t); 　
var c=1;
for(let b=1;b<3;b++){
    c='abc';//错误，c未定义，暂时性死区
    let c ;
}
console.log(a);
var a=1;
console.log(b);//错误，未定义，无法提升变量
let b=2;
let b=3;//错误，重复定义
//内存变量覆盖外层变量
var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

f(); // undefined