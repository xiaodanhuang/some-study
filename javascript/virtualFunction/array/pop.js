Array.prototype.myPop=function(){
    if(this===undefined||this===null){
        throw  new TypeError(`Cannot read property 'pop' of ${this}`)
    }
    let obj=Object(this)
    let len=obj.length>>>0
    if(len===0){
        obj.length=0
        return undefined
    }
    let value=obj[--len]
    obj.length=len
    return value

}
var a=[1,2,3,4]
console.log(a.myPop())
console.log(a,a.length)