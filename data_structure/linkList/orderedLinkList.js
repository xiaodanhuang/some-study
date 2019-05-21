//线性表的顺序表示
function OrderedLinkList(){
    this.dataStore=[];
}
//append
OrderedLinkList.prototype.append=function (item){
    this.dataStore.push(item)
}
//remove 移除所有值为item的元素
OrderedLinkList.prototype.remove=function (item){
    this.dataStore=this.dataStore.join("").replace(item,"").split("");
}
//find 查找 返回的是元素在线性表首次出现的位置
OrderedLinkList.prototype.find=function (item){
    return this.dataStore.indexOf(item)//返回值-1表示不在线性表里面
}
//length
OrderedLinkList.prototype.length=function (){
    return this.dataStore.length
}
//insert  position表示元素的位置
OrderedLinkList.prototype.insert=function (item,position){
     this.dataStore.splice(position,0,item)
}

var orderedLinkList=new OrderedLinkList()
orderedLinkList.append(1)
orderedLinkList.append(3)
orderedLinkList.append(4)
orderedLinkList.insert(9,2)
console.log(orderedLinkList.dataStore)
console.log(orderedLinkList.length())