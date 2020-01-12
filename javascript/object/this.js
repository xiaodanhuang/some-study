//this 指向
/*
    new
 */
function Animal(name){
    this.name=name
    this.sayName=function(){
        console.log(this.name)
    }
}
let lion= new Animal('lion')
lion.sayName()
function Bird(name){
    let o=new Object();
    o.name=name;
    return o
}
/*
    bind call apply 显式绑定
 */
let bird= new Bird("bird")
console.log(bird)
function  sayName(){
    console.log(this.name)
}
sayName.call(bird)
/*
    隐式绑定
 */

function sayWhatsYourName(){
    console.log(this.name)
}
let person={
    name:'danhuang',
    sayWhatsYourName
}
person.sayWhatsYourName()
/*
    箭头函数
 */
var match = {
    matchid: 1001,
    matchPool: function(){
        return ()=>this.matchid
    }
}
var newMatch = {
    matchid: 1201
}
console.log(match.matchPool().bind(newMatch)())