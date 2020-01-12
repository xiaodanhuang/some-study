//4.如何让 (a == 1 && a == 2 && a == 3) 的值为true？

//数据劫持

/*let i=1;
Object.defineProperty(window,'a',{
    get:function(){
        return i++
    }
})
console.log(a == 1 && a == 2 && a == 3)
*/

//with
let j=1;
with({
    get b(){
        return j++;
    }
}){console.log(b == 1 && b == 2 && b == 3)}

//数组toString默认接口为join 重写方法
let a = [1, 2, 3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3); //true
