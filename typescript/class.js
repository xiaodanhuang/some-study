/*
    ts类
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//类定义
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person("danhuang");
p.setName('蛋黄');
p.getName();
//类继承 extends super
var Chiness = /** @class */ (function (_super) {
    __extends(Chiness, _super);
    function Chiness(name, country) {
        var _this = _super.call(this, name) || this;
        _this.country = country;
        return _this;
    }
    Chiness.prototype.getInfo = function () {
        console.log(this.name);
    };
    Chiness.prototype.getName = function () {
        console.log("\u6211\u7684\u540D\u5B57\u662F" + this.name);
    };
    Chiness.printName = function () {
        console.log("chiness");
    };
    return Chiness;
}(Person));
var i = new Chiness("蛋黄", '中国人');
console.log(i.getName());
Chiness.printName();
//抽象类以及抽象方法
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.eat = function () {
        console.log(this.name);
    };
    return Cat;
}(Animal));
var manggo = new Cat("manggo");
manggo.eat();
var dongbeiPerson = /** @class */ (function () {
    function dongbeiPerson(name) {
        this.name = name;
    }
    dongbeiPerson.prototype.sleep = function () {
        console.log(name + "\u5728\u7761\u89C9");
    };
    dongbeiPerson.prototype.eat = function () {
        console.log(name + "\u5728\u5403\u996D");
    };
    return dongbeiPerson;
}());
//# sourceMappingURL=class.js.map