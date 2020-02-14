//哈希函数
function hashFunc(str,size){
    var hashcode=0;
    for(let i=0;i<str.length;i++){
        hashcode=37*hashcode+str.charCodeAt(i)
    }
    return hashcode%size
}
//哈希
function HashMap(){
    this.storage=[];
    this.count=0;
    this.limit=7

}
HashMap.prototype.put=function(key,value){
    let index=hashFunc(key,this.limit)
    let bucket=this.storage[index]
    if(!bucket){
        bucket=[]
        this.storage[index]=bucket
    }
    for(let item of bucket){
        if(item[0]===key){
            item[1]=value
            return
        }
    }
    bucket.push([key,value])
    this.count++
    if(this.count>this.limit*0.75){
        this.resize(this.limit*2)
    }
}
HashMap.prototype.get=function(key){
    let index=hashFunc(key,this.limit)
    let bucket=this.storage[index];
    if(!bucket) return null
    for(let item of bucket){
        if(item[0]===key){
            return item[1]
        }
    }
    return null

}
HashMap.prototype.remove=function(key){
    let index=hashFunc(key,this.limit)
    let bucket=this.storage[index];
    if(!bucket) return null;
    for(let i=0;i<bucket.length;i++){
        let tuple=bucket[i]
        if(tuple[0]===key){
            bucket.splice(i,1)
            this.count--
            if(this.count>this.limit*0.75){
                this.resize(Math.floor(this.limit/2))
            }

            return tuple[1]
        }
    }
    return null

}
HashMap.prototype.resize=function(newLimit){

}

HashMap.prototype.isEmpty=function(){
    return this.count===0;
}
HashMap.prototype.size=function(){
    return this.count;
}
let hashMap=new HashMap()

console.log(hashMap.put('abc',9))
console.log(hashMap.put('cba',10))
console.log(hashMap.put('abc',11))
console.log(hashMap.put('mba',12))
console.log(hashMap.get('abc'))