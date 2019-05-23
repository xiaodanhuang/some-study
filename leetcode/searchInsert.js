//35 搜索插入位置
var searchInsert = function(nums, target) {
    if(nums.indexOf(target)>-1){
        return nums.indexOf(target)
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]>target){
            if(i>0){
                nums.splice(i-1,0,target)
            }else{
                nums.unshift(target)
            }
            return i;
        }
    }
    nums.push(target)
    return nums.length-1;



};
let nums=[1]
console.log(searchInsert(nums,1),nums)