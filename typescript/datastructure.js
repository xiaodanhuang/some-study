/*
    数据类型 类型校验
*/
//布尔类型boolean
var flag = true;
flag = false;
console.log(flag);
//数字类型number
var num = 1;
//字符串类型
var str = "1";
console.log(str);
//数组类型array
var arr = [1, 2, 3, 1];
var arr1 = [1, 2, 3];
//元组类型tuple 数组的一种 无所谓元素的类型
var tuple = ["1", 2];
//枚举enum
var pay_status;
(function (pay_status) {
    pay_status[pay_status["success"] = 1] = "success";
    pay_status[pay_status["false"] = 0] = "false";
})(pay_status || (pay_status = {}));
console.log(pay_status.success);
//任意类型any 无object类型
var anyType = 1;
anyType = false;
console.log(anyType);
//null 对象空值 undefined 未初始化
//void 方法没有返回值
function noBack() {
    console.log("no back");
}
console.log(noBack());
//never
var a;
a = (function () { throw new Error(); })();
//# sourceMappingURL=datastructure.js.map