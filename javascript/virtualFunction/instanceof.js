function Person(name,sex){
    this.name=name;
    this.sex=sex;
}
function create(){
    let obj={}//创建一个空对象
    let constructor=[].shift.call(arguments)//获得构造函数
    obj.__proto__=constructor //修改隐式原型对象
    let res=constructor.apply(obj,arguments)
    return res instanceof Object?res:obj

}
let person=create(Person,'danhuang','sex')
console.log(person)

function myInstanceof(son,father){
    var pro=son.__proto__;
    let prototype=father.prototype
    while(true){
        if(pro===null){
            return  false
        }
        if(pro==prototype){
            return true
        }
        pro=pro.__proto__

    }
    return false

}
console.log(myInstanceof(person,Object))