/*
    js函数的定义
*/

//函数声明法
function run(){
    console.log("run")
}

//匿名函数
var run2=function(){
    console.log("run2")
}

/*
    ts函数的定义
*/

//函数声明法
function run3():void{
    console.log('run3')
}

//匿名函数
var run4=function():string{
    return "run4"
}

//ts定义方法传参
function getInfo(name:string,age=20):string{
    return `我的名字是${name}我的年龄${age}`
}

console.log(getInfo("蛋黄",18))

//剩余参数
function sum(...result:number[]):number{
    let num:number=0;
    result.map(item=>num+=item)

    return num

}
console.log(sum(1,2,34))

//方法重载
function getMyInfo(name:string):string;
function getMyInfo(age:number):number;
function getMyInfo(str:any):any{
    if(typeof str=="string")
    {
        return `my name is ${str}`
    }else{
        return str
    }
}
console.log(getMyInfo("danhuang"))
console.log(getMyInfo(18))