//88 合并两个有序数组
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length-m)
    outer:for(let i=0;i<nums2.length;i++){
       if(nums1.indexOf(nums2[i])>-1){
          nums1.splice(nums1.indexOf(nums2[i]),0,nums2[i])
       }else{
           for(let j=0;j<nums1.length;j++){
               if(nums2[i]<nums1[j]){
                   nums1.splice(j,0,nums2[i])
                   continue outer
               }
           }
           nums1.push(nums2[i])

       }
   }
   return nums1
};
console.log(merge([4,5,6,0,0,0],3,[1,2,3],3))