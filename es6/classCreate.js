//类的声明

//let foo= new Foo("danhuang");// Foo is not defined
console.log(Foo)
class Foo{
    constructor(name){
        this.name=name
    }
}
let foo= new Foo("danhuang");
console.log(foo)