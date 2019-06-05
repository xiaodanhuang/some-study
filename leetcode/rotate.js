var rotate = function(nums, k) {
    if(nums.length<2) return nums
    k=k%nums.length;
    let arr=nums.slice(nums.length-k,nums.length)
    nums.splice(0,0,...arr);
    nums.splice(nums.length-k,nums.length)
    return nums



};
console.log(rotate( [1,2] ,3))