function myNew (pro,...items){
    var obj={}
    obj.__proto__=pro.prototype
    let res=pro.call(obj,...items)
    return res  instanceof Object?re:obj

}
function create(){
    let obj={}//创建一个空对象
    let constructor=[].shift.call(arguments)//获得构造函数
    obj.__proto__=constructor //修改隐式原型对象
    let res=constructor.apply(obj,arguments)
    return res instanceof Object?res:obj

}
function Person(name,sex) {
    this.name = name
    this.sex = sex

}
var obj=myNew(Person,'aa','c')
console.log(obj)