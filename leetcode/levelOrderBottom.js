//107 二叉树的层次遍历 II
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var levelOrderBottom = function(root) {
    if (root == null) {
        return [];
    }
    var result = [];
    var queue = [];
    queue.push(root);
    while (queue.length != 0) {
        var node = [];
        var nodeValue = [];
        for (var i in queue) {
            if (queue[i].left != null) {
                node.push(queue[i].left);
            }
            if (queue[i].right != null) {
                node.push(queue[i].right);
            }
            nodeValue.push(queue[i].val);
        }
        result.push(nodeValue);
        queue = node;
    }
    return result.reverse();
}

let root=new TreeNode(1)
root.left=new TreeNode(2)
root.left.left=new TreeNode(4)
root.right=new TreeNode(3)
root.right.right=new TreeNode(5)
console.log(levelOrderBottom(root))
