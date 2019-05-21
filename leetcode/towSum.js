//1 两数之和
function twoSum(nums, target) {
     for(let i=0;i<nums.length;i++){
         if(nums.indexOf(target-nums[i])>-1) {
             let leftKey = nums.indexOf(target-nums[i])
             if (leftKey != i) {
                 return[i<leftKey?i:leftKey,i>leftKey?i:leftKey]
             }
         }
     }
}
