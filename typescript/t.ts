/*
    范型
 */

//范型函数
function getData<T>(value:T):T{
        return value
}

console.log(getData(5))

//范型类
class MinClass<T>{
    public list:T[]
    constructor(list:T[]){
        this.list=list
    }
    add(item:T):void{
        this.list.push(item)
    }
    getMin():T{
        let min=this.list[0];
        this.list.map(item=>{
            if(item<min){
                min=item
            }
        })
        return min
    }
}
var m=new MinClass(["8","0"]);
console.log(m.getMin())

//范型接口
interface Foods<T>{
    (value:T):T
}
function getFood <T>(value:T):T{
    return value
}

var getMyFoods:Foods<string>=getFood;