//169 求众数
var majorityElement = function(nums) {
    let times = Math.ceil(nums.length/2)
    for(let i=0;i<nums.length;i++){
        let time=0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]==nums[j]){
                time++
            }
            if(nums[i]==42&&j==nums.length-1){
                console.log(1)
            }

            if(time>=times) return nums[i]

        }

    }

};
console.log(majorityElement([55,84,47,52,62,95,78,2,60,57,89,26,20,86,50,69,14,39,62,91,55,22,44,4,21,60,59,39,43,56,43,97,3,26,75,19,24,92,13,98,85,37,0,37,58,71,63,100,46,31,7,47,14,61,100,64,13,89,67,40,6,44,13,18,37,16,85,8,86,60,26,24,6,69,7,51,82,41,43,61,51,58,18,9,19,58,89,67,91,1,41,91,3,69,82,87,100,80,14,3,9,8,57,50,85,45,25,30,1,40,54,87,67,91,2,42,6,8,92,39,89,29,83,43,33,98,4,73,91,29,98,94,72,36,62,63,78,52,76,94,20,80,67,90,31,59,55,48,16,49,69,14,66,53,32,47,41,39,40,71,70,89,50,77,18,61,21,6,85,42,67,70,7,66,87,34,81,85,62,58,1,83,62,66,7,57,65,15,46,28,52,35,59,75,93,18,40,76,19,29,51,23,43,43,55,32,60,48,54,78,64,84,68,30,6,34,74,44,48,68,42,98,58,93,42,83,65,12,3,45,67,20,7,49,63,73,25,28,93,56,44,32,43,17,12,41,13,23,4,68,55,68,24,12,79,51,32,19,100,50,36,73,54,93,85,30,51,56,15,49,71,11,82,75,64,56,85,68,44,43,100,28,7,65,42,23,100,66,38,49,94,29,9,83,41,85,42,21,45,99,38,10,3,25,67,76,90,36,53,60,88,44,51,3,66,0,87,46,39,9,88,76,15,76,67,39,79,71,35,7,51,91,7,11,22,70,92,78,49,36,4,24,58,10,56,91,48,23,80,73,27,43,70,92,80,37,41,97,80,58,5,99,44,15,99,63,79,10,41,31,72,24,38,74,30,19,39,53,45,95,28,0,95,95,58,56,72,20,25,48,59,90,23,63,99,12,66,99,94,25,66,7,81,76,60,64,95,24,6,97,62,54,52,19,20,71,75,16,73,24,98,83,1,30,6,33,36,90,21,31,54,62,35,38,50,84,37,29,63,81,70,46,66,68,10,63,80,39,25,34,28,14,64,32,39,95,6,35,54,76,4,15,14,34,14,22,78,28,72,10,85,77,100,51,72,41,84,98,46,1,100,13,33,49,10,19,85,74,86,77,82,68,34,90,69,8,94,74,36,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42]))