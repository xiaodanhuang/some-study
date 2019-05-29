//108 将有序数组转换为二叉搜索树
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var sortedArrayToBST = function(nums) {
    if(!nums.length) return null
    let center=nums[Math.floor(nums.length/2)]
    let root=new TreeNode(center);
    let left=nums.slice(0,Math.floor(nums.length/2));
    let right=nums.slice(Math.floor(nums.length/2+1),nums.length)
    if(left.length) root.left=arguments.callee(left)
    if(right.length) root.right=arguments.callee(right)
    return root
};
console.log(sortedArrayToBST([-10,-3,1,0,5,9,8]))