//26 删除排序数组中的重复项
function removeDuplicates(nums){
    let repeatNums=null;
    let length=nums.length;
    for(let i=0;i<length;i++){
        if(repeatNums==nums[i]&&repeatNums!=undefined){
            nums.splice(i,1)
            i--;
        }else{
            repeatNums=nums[i];
        }
    }
    return nums

}


console.log(removeDuplicates( [0,1,1]))