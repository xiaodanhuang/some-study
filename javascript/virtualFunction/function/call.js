Function.prototype.myCall=function(context,...args){
    context.func=this;
    let value=  context.func(...args)
    delete context.func
    return value
}


function sayName(name,sex){
    console.log(this.name,name,sex)
}


var obj={
    name:'sex'
}
sayName.myCall(obj,144,12)
