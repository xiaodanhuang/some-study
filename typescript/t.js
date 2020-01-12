/*
    范型
 */
//范型函数
function getData(value) {
    return value;
}
console.log(getData(5));
//范型类
var MinClass = /** @class */ (function () {
    function MinClass(list) {
        this.list = list;
    }
    MinClass.prototype.add = function (item) {
        this.list.push(item);
    };
    MinClass.prototype.getMin = function () {
        var min = this.list[0];
        this.list.map(function (item) {
            if (item < min) {
                min = item;
            }
        });
        return min;
    };
    return MinClass;
}());
var m = new MinClass(["8", "0"]);
console.log(m.getMin());
function getFood(value) {
    return value;
}
var getMyFoods = getFood;
//# sourceMappingURL=t.js.map