//110 平衡二叉树
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function nodeHeight(node){
    if(!node) return 0;
    let left=arguments.callee(node.left)
    let right=arguments.callee(node.right)
    return left>right?left+1:right+1
}


var isBalanced = function(root) {
    if(!root) return true
    let left=nodeHeight(root.left)
    let right=nodeHeight(root.right)
    if(Math.abs(left-right)>1){
        return false
    }
    if(isBalanced(root.left) && isBalanced(root.right)){
        return true;
    }
    return false;

};
let root=new TreeNode(1)
root.right=new TreeNode(2)
root.right.right=new TreeNode(3)
console.log(isBalanced(root))