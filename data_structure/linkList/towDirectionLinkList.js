//节点元素
function LinkNode(data,front,next){
    this.data=data;
    this.front=front;
    this.next=next;
}
function LinkList(){
    this.linkNode=new LinkNode(0,null,null)//这个节点为头节点哟
    this.length=0;//这个是链表长度哟

}
//append
LinkList.prototype.append=function (item){
    this.length++;
    var frontLinkNode=this.linkNode
    while(frontLinkNode.next){
        frontLinkNode=frontLinkNode.next
    }
    var currentLinkNode=new LinkNode(item,frontLinkNode)
    frontLinkNode.next=currentLinkNode

}
//remove 移除所有值为item的元素
LinkList.prototype.remove=function (item){
    var frontLinkNode=this.linkNode
    while(frontLinkNode.next){
        if(frontLinkNode.next.data==item){
            frontLinkNode.next=frontLinkNode.next.next
            frontLinkNode.next.front=frontLinkNode
            this.length--

        }else{
            frontLinkNode=frontLinkNode.next
        }
    }
}
//find 查找 返回的是元素在线性表首次出现的位置
LinkList.prototype.find=function (item){
    var position=0;
    var frontLinkNode=this.linkNode
    while(frontLinkNode.next){
        if(frontLinkNode.next.data==item){
            return position

        }else{
            frontLinkNode=frontLinkNode.next
            position++
        }
    }
    return -1

}
//length
LinkList.prototype.length=function (){
    return this.length
}

//insert  position表示元素的位置
LinkList.prototype.insert=function (item,position){
    //当位置大于链表当前长度时候不进行处理
    if(position+1>this.length){
        return
    }
    var currentPosition=0;
    var frontLinkNode=this.linkNode
    while(frontLinkNode.next){
        if(currentPosition==position){
            var currentLinkNode=new LinkNode(item,frontLinkNode)
            currentLinkNode.next=frontLinkNode.next
            frontLinkNode.next.front=currentLinkNode;
            frontLinkNode.next=currentLinkNode
            this.length++
            return
        }else{
            frontLinkNode=frontLinkNode.next
            currentPosition++
        }
    }
}


var list=new LinkList();
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.remove(3)
list.insert(3,2)
console.log(list.find(4))

