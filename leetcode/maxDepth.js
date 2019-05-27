//104 二叉树的最大深度
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var maxDepth = function(root) {
    if(!root)return 0;
    let left=arguments.callee(root.left)+1;
    let right=arguments.callee(root.right)+1
    return Math.max(left,right)
};
let root=new TreeNode(1)
root.left=new TreeNode(2)
root.left.left=new TreeNode(3)
root.left.right=new TreeNode(4)
console.log(maxDepth(root))