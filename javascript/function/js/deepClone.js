//深度克隆 基本数据类型/引用数据类型
function deepClone(obj){
    if(obj=null) return ;
    if(typeof obj=='number') return

}


function cloneUtil(target){
    let result;
    if(getType(target)==='object'){
        result={}
    }else if(getType(target)==='array'){
        result=[]
    }else {
        return target
    }
    return result


}

function getType(target){
    return Object.prototype.toString.call(target).slice(8,-1)
}