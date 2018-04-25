//普通栈，后进先出
function Stack(){
    this.dataStore=[];
    this.top=0;
    this.push=push;
    this.pop=pop;
    this.peek=peek;
    this.empty=empty;
}
function push(item){
    this.dataStore.push(item);
    this.top++;
}
function pop(){;
    this.dataStore.pop();
    this.top--;
}
function peek(){
    return this.dataStore[this.top-1];
}
function empty(){
    this.dataStore=[];
    this.top=0;
}
var g=new  Stack();
g.push('apple');
g.push('banana');
g.push('cherry');
console.log(g.peek());
g.pop();
