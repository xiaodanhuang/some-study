//111 二叉树的最小深度
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var minDepth = function(root) {
    if(!root) return 0
    let arr=[root]
    let times=0;
    while(arr.length){
        times++
        let node=[];
        for(let i=0;i<arr.length;i++){
            if(!arr[i].left&&!arr[i].right){
                return times
            }
            if (arr[i].left) node.push(arr[i].left)
            if (arr[i].right) node.push(arr[i].right)

        }
        arr=node;
    }
    return times
};

let root =new TreeNode(3)
root.left=new TreeNode(9)

console.log(minDepth(root))