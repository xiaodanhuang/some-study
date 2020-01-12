function box(){
    let result=[]
    for(var i=0;i<10;i++){
      result[i]= function (){
            return i
        }
    }
    return result
}

let mybox=box()
console.log(mybox[0]())

function box1(){
    let result=[]
    for(let i=0;i<10;i++){
        result[i]= function (){
            return i
        }
    }
    return result
}
function box2(){
    let arr=[];
    for(var i=0;i<10;i++){
        arr[i]=function(num){
            return function(){
                return num
            }
        }(i)
    }
    return arr
}
let mybox2=box2()
console.log(mybox2[6]())
