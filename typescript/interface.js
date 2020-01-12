/*
    接口 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
*/
function person(obj) {
    console.log(obj.name, obj.age);
}
person({ name: "蛋黄" });
//属性类型接口传入参数对象的约束
function animal(obj) {
    console.log(obj.name);
}
animal({ name: "dan" });
var myCat = function (name, age) {
    return "\u6211\u7684\u540D\u5B57\u662F" + name;
};
console.log(myCat("danhuang", 19));
var myarr = [true];
var obj = {
    name: "danhuang",
    age: '1'
};
var shark = /** @class */ (function () {
    function shark(name) {
        this.name = name;
    }
    shark.prototype.eat = function (foods) {
        console.log("fish eat " + foods);
    };
    return shark;
}());
//# sourceMappingURL=interface.js.map