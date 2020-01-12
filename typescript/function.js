/*
    js函数的定义
*/
//函数声明法
function run() {
    console.log("run");
}
//匿名函数
var run2 = function () {
    console.log("run2");
};
/*
    ts函数的定义
*/
//函数声明法
function run3() {
    console.log('run3');
}
//匿名函数
var run4 = function () {
    return "run4";
};
//ts定义方法传参
function getInfo(name, age) {
    if (age === void 0) { age = 20; }
    return "\u6211\u7684\u540D\u5B57\u662F" + name + "\u6211\u7684\u5E74\u9F84" + age;
}
console.log(getInfo("蛋黄", 18));
//剩余参数
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var num = 0;
    result.map(function (item) { return num += item; });
    return num;
}
console.log(sum(1, 2, 34));
function getMyInfo(str) {
    if (typeof str == "string") {
        return "my name is " + str;
    }
    else {
        return str;
    }
}
console.log(getMyInfo("danhuang"));
console.log(getMyInfo(18));
//# sourceMappingURL=function.js.map