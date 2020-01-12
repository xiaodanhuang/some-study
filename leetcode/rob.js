//198 打家劫舍
// dp[i] = max(dp[i-2]+nums[i], dp[i-1])
var rob = function(nums) {
    if(nums.length==0) return 0;
    if(nums.length==1)return nums[0];
    if(nums.length==2)return Math.max(nums[0],nums[1])
    return Math.max(arguments.callee(nums.slice(0,nums.length-2)+nums[nums.length-1],arguments.callee(nums.slice(0,nums.length-1))))

};
console.log(rob([1,2,3,1]))