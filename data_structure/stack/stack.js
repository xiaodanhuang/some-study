function LinkNode(data,next){
    this.data=data;
    this.next=next;

}
function Stack(){
    this.linkNode=new LinkNode(0,null)
    this.size=0;
}
Stack.prototype.push=function(data){
    var frontLinkNode=this.linkNode;
    while(frontLinkNode.next){
        frontLinkNode=frontLinkNode.next;
    }
    var currentLinkNode=new LinkNode(data,null)
    frontLinkNode.next=currentLinkNode;
    this.size++
}
Stack.prototype.pop=function(){
    var frontLinkNode=this.linkNode;
    while(frontLinkNode.next&&frontLinkNode.next.next!=null){
        frontLinkNode=frontLinkNode.next;
    }
    frontLinkNode.next=null;
    this.size--
}
Stack.prototype.length=function(item){
    return this.size;

}

Stack.prototype.clear=function(item){
    this.size=0;
    this.linkNode.next=null;
}
Stack.prototype.top=function(){
    var frontLinkNode=this.linkNode;
    while(frontLinkNode.next){
        frontLinkNode=frontLinkNode.next;
    }
    return frontLinkNode.data

}

var stack=new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop()
console.log(stack.top())
console.log(stack.length())
stack.clear()
console.log(stack)