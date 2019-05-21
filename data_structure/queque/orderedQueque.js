function Queque(){
    this.dataStore=[]
}
Queque.prototype.push=function(item){
    this.dataStore.push(item);

}
Queque.prototype.shift=function(){
    this.dataStore.shift();

}
Queque.prototype.length=function(){
    return this.dataStore.length;

}
Queque.prototype.clear=function(){
    this.dataStore=[];

}
var queque=new Queque()
queque.push(1)
queque.push(2)
queque.push(3)
queque.push(4)
queque.shift();
console.log(queque.length())
queque.clear()
console.log(queque.dataStore)