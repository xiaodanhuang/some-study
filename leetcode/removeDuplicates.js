//26 删除排序数组中的重复项
function removeDuplicates(nums){
    let repeatNums=null;

    for(let i=0;i<nums.length;i++){
        if(repeatNums==nums[i]){
            nums.splice(i,1)
            i--;
        }else{
            repeatNums=nums[i];
        }
    }
    return nums

}


console.log(removeDuplicates( [0,1,1,2,2,567]))