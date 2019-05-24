//53 最大子序和
function maxSubArray(nums){
    let result=nums[0];
    let current=nums[0];
    for(let i=1;i<nums.length;i++){
        if(result<=0){
            result=nums[i]
            current=nums[i]>current?nums[i]:current
        }else if(result+nums[i]>nums[i]){
            let max=result+nums[i]>result?result+nums[i]:result
            current=current>max?current:max;
            result+=nums[i]
        }else{
             current=current>result?current:result
             result=0;
        }

    }
    return current>result?current:result;

}


console.log(maxSubArray([-1,0,-2]))