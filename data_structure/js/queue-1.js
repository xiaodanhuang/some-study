function Queue(){
    this.dataStore=[];
    this.front=front;
    this.back=back;
    this.push=push;
    this.shift=shift;
    this.empty=empty;
}
function push(item){
    this.dataStore.push(item);
}
function shift(){
    this.dataStore.shift();
}
function front(){
    return this.dataStore[0];
}
function back(){
    return this.dataStore[this.dataStore.length-1];
}
function empty(){
    this.dataStore=[];

}


