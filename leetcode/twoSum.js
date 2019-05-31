//167 两数之和 II - 输入有序数组
var twoSum = function(numbers, target) {
    let arr=numbers.filter(item=>item<=target-numbers[0])
    for(let i=0;i<arr.length;i++){
        let leftArr=arr.slice(i+1)
        if(leftArr.indexOf(target-arr[i])>-1){
            return [i+1,i+leftArr.indexOf(target-arr[i])+2]
        }
    }
    return []
};
console.log(twoSum([-1,0],-1))