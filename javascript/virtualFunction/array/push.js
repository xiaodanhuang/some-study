Array.prototype.myPush=function(...items){
    if(this===null||this===undefined){
        throw  new TypeError(`Cannot read property 'push' of ${this}`)
    }
    let obj=Object(this)
    let len=obj.length>>>0;
    let items_len=items.length>>>0
    if(len+items_len>2**53-1){
        throw new TypeError("The number of array is over the max value restricted!")
    }
    for(let i=0;i<items_len;i++){
        obj[i+items_len]=items[i]
    }
    obj.length=len+items_len
    return obj.length



}
var a=[1,2,3,4]
console.log(a.myPush(1))