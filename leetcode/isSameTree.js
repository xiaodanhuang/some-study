//100 相同的树
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var isSameTree = function(p, q) {
    if(p==null&&q==null)return true
    if(p==null||q==null)return false
    let left=false;
    let right=false;
    if(p.val==q.val){
        left=arguments.callee(p.left,q.left)
        right=arguments.callee(p.right,q.right)
    }
    return left&&right
};