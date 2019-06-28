/*
    ts类
 */

//类定义
class Person{
    protected name:string;
    constructor(name:string){
        this.name=name
    }
    getName():void{
        console.log(this.name)
    }
    setName(name:string):void{
        this.name=name;
    }
}
var p=new Person("danhuang")
p.setName('蛋黄')
p.getName()

//类继承 extends super
class Chiness extends Person{
    country:string;
    constructor(name:string,country:string){
        super(name)
        this.country=country
    }
    getInfo():void{
        console.log(this.name)
    }
    getName():void{
        console.log(`我的名字是${this.name}`)
    }
    static printName(){
        console.log("chiness")
    }

}

var i=new Chiness("蛋黄",'中国人')
console.log(i.getName())
Chiness.printName()

//抽象类以及抽象方法
 abstract class Animal{
    abstract eat():any;
}
class Cat extends Animal{
    name:string;
    constructor(name:string){
        super()
        this.name=name
    }

    eat():void{
        console.log(this.name)
    }
}

let manggo= new Cat("manggo")
manggo.eat()

//类的扩展 接口的继承
interface life{
    eat():void;

}
interface ChinessPerson extends life{
    sleep():void;
}

class dongbeiPerson implements  ChinessPerson{
    name:string;
    constructor(name){
        this.name=name
    }
    sleep():void{
        console.log(`${name}在睡觉`)
    }
    eat():void{
        console.log(`${name}在吃饭`)
    }
}