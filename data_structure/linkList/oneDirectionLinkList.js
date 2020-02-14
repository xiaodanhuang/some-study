//节点元素
function LinkNode(data,next){
    this.data=data;
    this.next=next;
}
function LinkList(){
    this.linkNode=new LinkNode(0,null)//这个节点为头节点哟
    this.length=0;//这个是链表长度哟

}
//append
LinkList.prototype.append=function (item){
    var currentLinkNode=new LinkNode(item,null)
    if(this.length++===0){
        return this.linkNode=currentLinkNode
    }
    var frontLinkNode=this.linkNode
    while(frontLinkNode.next){
        frontLinkNode=frontLinkNode.next
    }
    frontLinkNode.next=currentLinkNode
}
//remove 移除所有值为item的元素
LinkList.prototype.remove=function (item){
    var frontLinkNode=this.linkNode
    while(frontLinkNode.next){
        if(frontLinkNode.next.data==item){
            frontLinkNode.next=frontLinkNode.next.next
            this.length--

        }else{
            frontLinkNode=frontLinkNode.next
        }
    }
}
LinkList.prototype.removeAt=function (position){
    var fatherNode=this.linkNode
    var childNode=this.linkNode.next
    if(position<0||position>=this.length)return null
    if(position===0) this.linkNode=this.linkNode.next
    while((position--)!==1){
        fatherNode=fatherNode.next;
        childNode=childNode.next
    }
    fatherNode.next=childNode.next
}
//find 查找 返回的是元素在线性表首次出现的位置
LinkList.prototype.indexOf=function (item){
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
LinkList.prototype.insert=function (position,item){
    //当位置大于链表当前长度时候不进行处理
    if(position>this.length){
        return
    }
    var currentPosition=0;
    var frontLinkNode=this.linkNode
    var currentLinkNode=new LinkNode(item,null)
    while(frontLinkNode){
        if(currentPosition==position){
            currentLinkNode.next=frontLinkNode.next
            frontLinkNode.next=currentLinkNode
            this.length++
            return
        }else{
            frontLinkNode=frontLinkNode.next
            currentPosition++
        }
    }
}

LinkList.prototype.toString=function(){
    let current=this.linkNode;
    let arr=[]
    while(current){
        arr.push(current.data)
        current=current.next
    }
    return arr.join(" ")
}
LinkList.prototype.get=function(position){
    if(position>=this.length||position<0) return null
    let current=this.linkNode;
    while(position--){
        current=current.next
    }
    return current.data
}
LinkList.prototype.update=function (position,element){
    if(position>=this.length||position<0) return null
    let current=this.linkNode;
    while(position--){
        current=current.next
    }
    current.data=element

}

var list=new LinkList();
list.append(1)
list.append(2)
list.append(3)
list.append(4)
console.log(list.toString())
list.removeAt(2)
list.insert(1,9)
console.log(list.toString())
console.log(list.update(2,5))
console.log(list.toString())


