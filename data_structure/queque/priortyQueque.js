function PriorityQueque(){
    this.dataStore=[]

}
function QuequeElement(name,priority){
    this.element=name;
    this.priority=priority
}
PriorityQueque.prototype.enqueque=function(name,priority){
    var ele= new QuequeElement(name,priority);
    let index=this.dataStore.findIndex(item=>item.priority>ele.priority)
    index+=1
    this.items.splice(index,0,ele)
}
PriorityQueque.prototype.enqueque=function(item){
    this.dataStore.push(item);

}
PriorityQueque.prototype.dequeque=function(){
    return this.dataStore.shift();

}
PriorityQueque.prototype.front=function(){
    return this.dataStore[0];

}
PriorityQueque.prototype.isEmpty=function(){
    return this.dataStore.length===0;

}
PriorityQueque.prototype.size=function(){
    return this.dataStore.length;

}
PriorityQueque.prototype.clear=function(){
    this.dataStore=[];

}
PriorityQueque.prototype.toString=function(){
    return this.dataStore.join(" ")
}


let priorityqueque=new  PriorityQueque()
priorityqueque.enqueque('danhuang',100)
priorityqueque.enqueque('manggo',88)
priorityqueque.enqueque('grace',99)
priorityqueque.enqueque('grace',101)

console.log(priorityqueque)

