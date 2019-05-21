function Stack(){
    this.dataStore=[];
}
Stack.prototype.push=function(item){
    this.dataStore.push(item);

}
Stack.prototype.pop=function(item){
    this.dataStore.pop();

}
Stack.prototype.length=function(item){
   return this.dataStore.length;

}
Stack.prototype.clear=function(item){
     this.dataStore=[];

}
Stack.prototype.top=function(){
    return this.dataStore[this.dataStore.length-1]
}
 var stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop();
console.log(stack.length())
console.log(stack.top())
stack.clear()
console.log(stack.dataStore)