//原型链
function Supertype(){
    this.name='danhuang';
}
Supertype.prototype.getSuperValue=function(){
    return this.name;
}
function Subtype(){
     this.age=18;

}
Subtype.prototype.getSubValue=function(){
    return this.age;
}
Subtype.prototype= new Supertype();
var person=new Subtype();
//借用构造函数继承
function A(){
    this.color=['pink'];
}
function B(){
    A.call(this);
}
var newB= new B();
//组合继承
function C(name){
    this.name=name;
    this.sayName=function(){console.log(this.name)};

}

function D(name,age) {
    C.call(this, name);
    this.age=age;
}
    D.prototype=new C();
    D.prototype={
     constructor:D,
     sayAge:function(){
         console.log(this.age);
    }
}
var newD=new D('danhuang',18);

//原型继承
function E(o){
    function F(){};
    F.prototype=o;
    return new F();
}
var person={
    name:'danhuang',
    age:15,
    friend:['apple']
}
var another =E(person);
