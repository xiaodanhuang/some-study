// 101 对称二叉树
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var isSymmetric = function(root) {
    if(!root){
        return true
    }
    return isMirror(root.left,root.right)
};
var isMirror=function (left,right){
    if(left==null&&right==null) return true
    if(left==null||right==null) return false
    let lResult=false;
    let rResult=false;

    if(left.val==right.val){
        lResult=isMirror(left.left,right.right)
        rResult=isMirror(left.right,right.left)
    }
    return lResult&&rResult
}

let root=new TreeNode(1)
root.left=new TreeNode(2)
root.left.left=new TreeNode(3)
root.left.right=new TreeNode(4)
root.right=new TreeNode(2)
root.right.left=new TreeNode(4)
root.right.right=new TreeNode(3)
console.log(isSymmetric(root))