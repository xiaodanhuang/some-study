var person={
  _year:5
};
Object.defineProperty(person,"name",{
    writable:false,
    value:'danhuang',

});
Object.defineProperty(person,"year",{
   get:function(){
       return this._year;
   },
   set:function(v){
       this._year=v;
   }
});
//工厂模式
function A(name,age){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.sayName=function (){console.log(this.name)};
    return o;
}
//构造器模式
function B(name,age){
    this.name=name;
    this.age=age;
    this.sayName=function (){console.log(this.name)};
}
//原型模式
function C(){
    C.prototype.name=['lal','kakak'],
    C.prototype.age='25'
    C.prototype.sayname=function (){console.log(this.name)};
}
//寄生构造模式
function D(name,age){
    this.name=name;
    this.age=age;
   if(typeof this.sayName!='function'){
       D.prototype.sayName=function (){console.log(this.name)};
   }
}
var newD=new D('damhuang',18);
//动态原型模式
function E(name,age){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.sayName=function (){console.log(this.name)};
    return o;
}
var newE=new E('danhuang',18);
//稳妥模式
function F(name,age){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.sayName=function (){console.log(name)};
    return o;
}
var newF=F('danhuang',17);
//组合使用构造模式和原型模式
function G(name,age){
    this.name=name;
    this.age=age;
}
G.prototype={
    constructor:G,
    sayName:function(){
        console.log(this.name);
    }

}
var newG=new G('danhuang',17);

var a='hello'
a=a.concat('word');
b=a.slice(0);
