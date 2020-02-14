function Stack(){
    this.dataStore=[];
}
Stack.prototype.push=function(item){
    this.dataStore.push(item);

}
Stack.prototype.pop=function(item){
    return this.dataStore.pop();

}
Stack.prototype.size=function(item){
   return this.dataStore.length;

}
Stack.prototype.clear=function(item){
     this.dataStore=[];

}
Stack.prototype.peek=function(){
    return this.dataStore[this.dataStore.length-1]
}
Stack.prototype.isEmpty=function(){
    return this.dataStore.length===0
}
Stack.prototype.toString=function(){
    return this.dataStore.join(" ")
}
 var stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.size())
console.log(stack.peek())

console.log(stack.toString())