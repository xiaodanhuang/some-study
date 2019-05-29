//136 只出现一次的数字
var singleNumber = function(nums) {
    for(let i=0;i<nums.length;i++){
        let arr=nums.concat([])
        arr.splice(i,1)
        if(arr.indexOf(nums[i])==-1){
            return nums[i]
        }
    }
};
console.log(singleNumber([2,2,1]))