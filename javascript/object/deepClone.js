function deepClone(obj){
    if(obj instanceof RegExp) return new RegExp(obj)
    if(obj instanceof Date) return new Date(obj)
    if(obj ===null||typeof obj !="object") return obj
    // if(typeof obj =="function"){
    //     return eval(obj.toString())
    // }

    let objClone=Array.isArray(obj)?[]:{};
    for(key in obj){
        if(obj.hasOwnProperty(key)){
            objClone[key]=deepClone(obj[key])
        }
    }

    return objClone

}

let obj={
    name:'danhuang',
    age:13,
    sayName:function(){
        console.log(this.name)
    },
    parents:{
        mother:"",
        father:""
    },
    pets:["川崎",'芒果']

}
let objclone=deepClone(obj)
obj.pets.push("hah")
objclone.sayName=function(){
    console.log("hah")
}

console.log(objclone.sayName===obj.sayName)