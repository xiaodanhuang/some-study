//工厂模式 对象识别问题没有解决
function createPerson(name,age){
    var o =new Object;
    o.name=name;
    o.age=age;
    return o
}
let a=createPerson("1",18)
console.log(a)

//构造函数模式 每个方法都要在实例上创建一遍 移到外面也可 但是封装性就木有啦
function Person (name,age){
    this.name=name;
    this.age=age;
    this.sayName=function(){
        console.log(this.name)
    }
}
let b=new Person(2,19)
b.sayName()
console.log(b)
//原型模式
function ProtoPerson () {
    ProtoPerson.prototype.name=3;
    ProtoPerson.prototype.age=20;
    ProtoPerson.prototype.sayName=function(){
        console.log(this.name)
    }
}
let c=new ProtoPerson(),d=new ProtoPerson()
c.name=1;
c.sayName();//来自实例
d.sayName();//来自原型

//组合构造函数和原型模式
function MixPerson(name,age){
    this.name=name;
    this.age=age;
}
MixPerson.prototype={
    sayName:function(){
        console.log(this.name)
    }
}
let f=new MixPerson(4,21)
f.sayName()

//动态原型模式
function DynamicPerson(name,age){
    this.name=name;
    this.age=age;
    if( typeof this.sayName!="function" ){
        DynamicPerson.prototype.sayName=function (){
            console.log(this.name)
        }
    }
}
let g=new DynamicPerson(5,22)
g.sayName()

//寄生构造函数模式
function LayPerson(name,age){
    var o=new Object;
    o.name=name;
    o.age=age;
    return o;
}
let h= new LayPerson(6,23)
console.log(h)

//稳妥构造函数模式
function basePerson(name,age){
    var o=new Object;
    o.sayName=function (){
        console.log(name)
    }
    return o;
}
let i= basePerson(7,24)
i.sayName()
