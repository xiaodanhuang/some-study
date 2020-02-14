function Set(){
    this.items={

    }
}
Set.prototype.add=function(value){
    if(this.items.hasOwnProperty(value)) return false
    this.items[value]=value
    return true
}
Set.prototype.remove=function(value){
    if(!this.items.hasOwnProperty(value)) return false
    delete this.items[value]
    return true
}
Set.prototype.clear=function(){
    this.items=[]
}
Set.prototype.size=function(){
    return Object.keys(this.items).length
}
Set.prototype.values=function(){
    return Object.values(this.items)
}

Set.prototype.union=function(otherSet){
    var set=new Set();
    let value1 =this.values()
    for(let item of value1){
        set.add(item)
    }
    let value2=otherSet.values()
    for(let item of value2){
        set.add(item)
    }
    return set
}
Set.prototype.intersection=function(otherSet){
    var set=new Set();
    let value1 =this.values()
    let value2=otherSet.values()
    for(let item of value1) {
        if (value2.indexOf(item)>-1) {
            set.add(item)
        }
    }

    return set
}
Set.prototype.difference=function(otherSet){
    let value1 =this.values()
    let value2=otherSet.values()
    for(let item of value1) {
        if (value2.indexOf(item)===-1) {
            set.add(item)
        }
    }

    return set
}

Set.prototype.subSet=function(otherSet) {
    let value1 = this.values();
    let value2 = otherSet.values();
    for (let item of value1) {
        if (value2.indexOf(item) === -1) return false
    }
    return true
}
let set =new Set()
console.log(set.add(10))
console.log(set.add(9))
let set2=new Set()
set2.add(7)
set2.add(9)
console.log(set.subSet(set2))