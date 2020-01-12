function Find(target, array)
{
    let arr=array.toString().split(",");
    let index=arr.findIndex(item=>item==target);
    if(index>-1){
        return true
    }else{
        return false
    }


}
let a=[[1,2,3],[4,5,6]]
console.log(Find(1,a))