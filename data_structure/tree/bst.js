function Node(data,left,right){
    this.data=data;
    this.left=left;
    this.right=right;

}
function BST(){
    this.root=null;
}
BST.prototype.insert=function(data){
    var node=new Node(data,null,null)
    if(this.root==null) {
        this.root = node
        return
    }
    var current=this.root;
    while(true){
        var parent=current;
        if(data<current.data){
            current=current.left;
            if(current==null){
                parent.left=node
                return
            }
        }else{
            current=current.right;
            if(current==null){
                parent.right=node
                return
            }
        }
    }
}

//inOrder
BST.prototype.inOrder=function(node){
    if(!node){
        return
    }
    arguments.callee(node.left)
    console.log(node.data)
    inOrderList.push(node.data)
    arguments.callee(node.right)
}

//preOrder
BST.prototype.preOrder=function(node){
    if(!node){
        return
    }
    console.log(node.data)
    preOrderList.push(node.data)
    arguments.callee(node.left)
    arguments.callee(node.right)
}
//afterOrder
BST.prototype.afterOrder=function(node){
    if(!node){
        return
    }
    arguments.callee(node.left)
    arguments.callee(node.right)
    console.log(node.data)
    afterOrderList.push(node.data)
}

var bst= new BST();

bst.insert(23)
bst.insert(45)
bst.insert(16)
bst.insert(37)
bst.insert(3)
bst.insert(99)
bst.insert(22)
var inOrderList =[]
var preOrderList=[]
var afterOrderList=[]
bst.inOrder(bst.root)
bst.preOrder(bst.root)
bst.afterOrder(bst.root)
console.log(inOrderList,preOrderList,afterOrderList)