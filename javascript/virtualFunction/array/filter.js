Array.prototype.myFilter=function(func,thisArg){
    if(this===null||this===undefined){
        throw  new TypeError(`Cannot read property 'filter' of ${this}`)
    }
    if(Object.prototype.toString.call(func)==='[object Function]'){
        throw  new TypeError(`${func} undefined is not a function`)
    }
    let obj=Object(this)
    let len=obj.length>>>0
    if(len===0){
        return []
    }
    let arr=[]
    let arr_index=0;
    for(let k=0;k<len;k++){
       if(obj[k] in obj){
           let value=func.call(thisArg,obj[k],k,obj)
           if(value===true){
               arr[arr_index++]=obj[k]
           }
       }
    }
    return arr
}

var a=[1,2,3,4]
let  b=a.myFilter((item)=>{
    return item>3
})
console.log(b)