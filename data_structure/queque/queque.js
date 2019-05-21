function LinkNode(data,next){
    this.data=data;
    this.next=next;
}
function Queque(){
    this.linkNode=new LinkNode(0,null)
    this.size=0;
}
Queque.prototype.push=function(data){
    var frontLinkNode=this.linkNode;
    while(frontLinkNode.next){
        frontLinkNode=frontLinkNode.next;
    }
    var currentLinkNode=new LinkNode(data,null)
    frontLinkNode.next=currentLinkNode;
    this.size++
}
Queque.prototype.shift=function(){
    var currentNode=this.linkNode.next;
    this.linkNode.next=this.linkNode.next.next;
    this.size--;
    return currentNode.data


}
Queque.prototype.length=function(item){
    return this.size;

}

Queque.prototype.clear=function(item){
    this.size=0;
    this.linkNode.next=null;
}
var queque=new Queque()
queque.push(1)
queque.push(2)
queque.push(3)
queque.push(4)
console.log(queque.shift())
queque.clear()
