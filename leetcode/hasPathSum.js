//112 路径总和
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var hasPathSum = function(root, sum) {
    if(!root) return false
    let left=false;
    let right=false;
    if(!root.left&&!root.right&&sum==root.val){
        return true
    }
    if(root.left){
        left=arguments.callee(root.left,sum-root.val)
    }
    if(root.right){
        right=arguments.callee(root.right,sum-root.val)
    }
    return left||right
};
let root=new TreeNode(5)
root.left=new TreeNode(4)
root.right=new TreeNode(4)
console.log(hasPathSum(root,22))

