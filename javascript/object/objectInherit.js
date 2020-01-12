/*
    原型链继承  父对象的实例作为子类的原型
    优点:父对象的属性和方法子类都能访问到 简单易实现
    缺点:为子对象添加属性必须放在修改prototype后 无法实现多继承 原型对象的所有属性被共享 创建子对象实例无法向父对象传参

 */
function Animal(name,age){
    this.name=name||'animal'
    this.age=age||"18"
    this.sayAge=function(){
        console.log(this.age)
    }

}
Animal.prototype.sayName=function(){
    console.log(this.name)
}
function Cat(catName){
    this.catName=catName
}
Cat.prototype=new Animal()
Cat.prototype.sayCatName=function(){
    console.log(this.catName)
}

let cat= new Cat("mango")
cat.sayName()
cat.sayCatName()

/*
    借用构造函数继承 使用父对象构造函数中的属性增强子对象
    优点:传递参数 可多继承 解决实例共享属性的问题
    缺点:父对象原型里面的属性和方法不可用 子对象的实例不是父对象的实例 无法实现函数复用

 */
function Dog(dogName,age){
    Animal.call(this,dogName,age);
}
let dog=new Dog("dahuang",18)
dog.sayAge()
console.log(dog instanceof Animal)//false

/*
    组合继承 通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
    优点: 可以继承实例属性/方法，也可以继承原型属性/方法 既是子类的实例，也是父类的实例 不存在引用属性共享问题 可传参 函数可复用
    缺点:调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）
 */
function Loin(name,age){
    Animal.call(this,name,age)

}
Loin.prototype=new Animal()
Loin.prototype.constructor=Loin;

let lion= new Loin("xinba",19)
lion.sayName()
console.log(lion instanceof Loin)

/*
    原型式继承 这种继承借助原型并基于已有的对象创建新对象， 同时还不必因此创建自定义类型
 */
function Panda(o){
 function Realpanda() {}
 Realpanda.prototype=o;
 return new Realpanda()

}
let panda =Panda(lion)
panda.sayName()

/*
    寄生式继承 该函数内部以某种方式来增强对象
 */
function  AnotherPanda(o){
    let panda=Panda(o)
    panda.sayPandaName=function(){
        console.log(this.name)
    }
    return panda
}
let anotherPanda= new AnotherPanda(lion)
anotherPanda.sayPandaName()

/*
    寄生组合式继承
 */

function inheritObject(child,father){
    let prototype= Panda(father.prototype)
    prototype.constructor=child;
    child.prototype=prototype
}
function Fox(name,age){
     Animal.call(this,name,age);
}
inheritObject(Fox,Animal)

let fox=new Fox("hah",13)
fox.sayName()