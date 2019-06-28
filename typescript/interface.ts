/*
    接口 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
*/

//传入参数的约束
interface value {
    name:string,
    age?:number
}
function person(obj:value):void{
    console.log(obj.name,obj.age)
}
person({name:"蛋黄"})

//属性类型接口传入参数对象的约束

function animal(obj:{name:string}):void{
    console.log(obj.name)
}
animal({name:"dan"})

//函数类型接口对方法传入的参数以及返回值的约束
interface  cat{
    (name:string,age:number):string;
}
var myCat:cat=function(name:string,age:number):string{
    return `我的名字是${name}`

}
console.log(myCat("danhuang",19))

//可索引接口 数组和对象类的约束
interface myArray {
    [index:number]:boolean
}
let myarr:myArray=[true]

interface userObj{
    [index:string]:string
}
let obj:userObj={
    name:"danhuang",
    age:'1'
}

interface Fish{
    name:string;
    eat(food:string):void;
}
class shark implements Fish{
    name:string;
    constructor(name){
        this.name=name
    }
    eat(foods:string):void{
        console.log(`fish eat ${foods}`)
    }
}