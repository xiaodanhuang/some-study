const PENDING = 'pending', RESOLVED = 'resolved', REJECTED = 'rejected';
function MyPromise(constructor) {
    let self = this;

    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    function resolve(value) {
        if (self.status === PENDING) {
            self.value = value;
            self.status = RESOLVED
        }
    }
    function rejected(value) {
        if (self.status === PENDING) {
            self.value = value;
            self.status = REJECTED
        }
    }
    try{
        constructor(resolve,rejected)
    }catch(e){
        rejected(e)
    }

}

MyPromise.prototype.then=function(onfillfuled,onRejected){
    let self=this;
    if(self.status===RESOLVED){
        onfillfuled(self.value)
    }else{
        onRejected(self.reason)
    }


}
var promise=new MyPromise((resolve,rejected)=>{
    console.log(1)
    setTimeout(function(){
        console.log(2)
        resolve(2)
    })
})
promise.then(()=>{
    console.log('yes')

},()=>{
    console.log('no')
})


