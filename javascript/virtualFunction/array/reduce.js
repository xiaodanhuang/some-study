Array.prototype.myReduce=function(func,initialValue){
    if(this===null||this===undefined){
        throw  new TypeError(`Cannot read property 'reduce' of ${this}`)
    }
    if(Object.prototype.toString.call(func)!=='[object Function]'){
        throw  new TypeError(`${func} undefined is not a function`)
    }
    let obj=Object(this)
    let len=obj.length>>>0;
    let accumulator=initialValue
    let k=0;
    if(accumulator===undefined){
        for(;k<len;k++){
            if(k in obj){
                accumulator = obj[k];
                k++;
                break;
            }
        }
        // 表示数组全为空
    }
    if(k === len && accumulator === undefined)
        throw new Error('Each element of the array is empty');
    for(;k < len; k++) {
        if (k in obj) {
            // 注意，核心！
            accumulator = func.call(undefined, accumulator, obj[k], k, obj);
        }
    }
    return accumulator;

}
var a=[1,2,3,4]
let b=a.myReduce((pre,current,index,obj)=>{
    return pre=pre+current
})
console.log(b)