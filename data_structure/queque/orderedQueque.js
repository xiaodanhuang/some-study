function Queque(){
    this.dataStore=[]
}
Queque.prototype.enqueque=function(item){
    this.dataStore.push(item);

}
Queque.prototype.dequeque=function(){
    return this.dataStore.shift();

}
Queque.prototype.front=function(){
    return this.dataStore[0];

}
Queque.prototype.isEmpty=function(){
    return this.dataStore.length===0;

}
Queque.prototype.size=function(){
    return this.dataStore.length;

}
Queque.prototype.clear=function(){
    this.dataStore=[];

}
Queque.prototype.toString=function(){
    return this.dataStore.join(" ")
}
var queque=new Queque()
queque.enqueque('abc')
queque.enqueque('bbc')
queque.enqueque('cbc')
console.log(queque)
console.log(queque.toString())
console.log(queque.dequeque())
console.log(queque)
function passGame(nameList,num){
    var queque=new Queque()
    nameList.forEach(item=>{
        queque.enqueque(item)
    })
    let i=0;
    while(queque.size()!==1){
        i++;
        let item= queque.dequeque()
        if(i%num!==0){
            queque.enqueque(item)
        }
    }
    return queque.front()
}
let nameList=['lily','lucy','tom','lilei','why']
console.log(passGame(nameList,3))