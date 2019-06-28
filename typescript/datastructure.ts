/*
    数据类型 类型校验
*/

//布尔类型boolean
var flag:boolean=true;
flag=false
console.log(flag)

//数字类型number
var num:number=1;

//字符串类型
var str:string="1"
console.log(str)

//数组类型array
var arr:number[]=[1,2,3,1]
var arr1:Array<number>=[1,2,3]


//元组类型tuple 数组的一种 无所谓元素的类型
let tuple: [string, number]=["1",2]

//枚举enum
enum pay_status{
    success=1,
    false=0
}
console.log(pay_status.success)

//任意类型any 无object类型
var anyType:any=1;
anyType=false;
console.log(anyType)

//null 对象空值 undefined 未初始化

//void 方法没有返回值
function  noBack():void{
    console.log("no back")
}
console.log(noBack())

//never
var a:never;
a=(()=>{throw new Error()})()

