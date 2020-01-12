Array.prototype.myMap=function(func,thisArgs){
    if(this===null||this===undefined){
        throw  new TypeError(`Cannot read property 'map' of ${this}`)
    }
    if(Object.prototype.toString.call(func)==='[object Function]'){
        throw  new TypeError(`${func} undefined is not a function`)
    }
    let obj=Object(this)
    let t=thisArgs
    let len=obj.length>>>0;
    let arr=[]
    for(let key=0;key<len;key++){
        if(key in obj){
            let value=obj[key]
            let returnValue=func.call(t,value,key,obj)
            arr.push(returnValue)
        }
    }
    return arr
}
var a=[1,2,3,4]
a.myMap(item=>{
    return item
})
console.log(a)