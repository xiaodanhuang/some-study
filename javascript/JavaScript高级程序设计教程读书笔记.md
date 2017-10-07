---
title: JavaScript高级程序设计教程读书笔记
---
### 第一章
JavaScript是专为网页交互设计的脚本语言，由ECMAScript和Dom,Bom组成
### 第二章：在HTML中使用JavaScript
###### <script></script>属性：
1. async当页面继续进行解析的时候，脚本将被执行，不保证脚本按照先后顺序执行。
2. defer 脚本将在页面完成解析时执行

###### 文档模式：
1.混杂模式：无声明，默此模式，且在不同的浏览器下行为差异大
2.标准模式

###第三章：基本概念
###### 标识符（变量，函数，属性的名称）
以字母，下划线（_），美元符号（$)开头，由字母，数字，下划线，美元符号组成。【根据ECMAScript采用驼峰大小写格式】
关键字：已经使用，保留字，尚未使用
###### 注释
//或者/\*注释\*\*/ 
###### 严格模式
"use strict"
###### 语句
使用代码块使编码意图更清晰,以；结尾没有则解析器确定语句的结尾

###### 关键字，保留字
###### 变量
var message [message 保存为undefined，且定义为该变量作用域中的局部变量，函数退出后就销毁]
###### 数据类型：
1. undefined（未初始化）
2. Null（从逻辑角度上看，null表示空对象指针）所以typeof 结果为 object。[null==undefined//true]
3. Boolean
4. Number
   双精度 0.1+0.2==0.3 //falseis
   NaN[与任何值都不相等 isNaN]
   Infinity
   Number(),praseInt(),praseFloat().toFixed()
5. String
   toString()[undefined,null 无此方法]
   SString()
6. Object
   constructor 构造函数
   hasownproperty 检查是否含有某一属性，ps：不是实例的原型
   isPrototypeOf()检查传入的对象是否是对象的原型
   propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用
   in 语句
   toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。
   toString()：返回对象的字符串表示。
   valueOf()：返回对象的字符串、数值或布尔值表示。

typeof操作符
 undefined[声明未初始化]
 boolean[空指针对象]
 string
 number
 object
 function
 typeof null//object
###### 操作符
1. 一元操作符 ++，- -,+,-
2. 位操作符  not反码[~] and与[&] or或[|] xor异或[^] << >> <<< >>>
3. 布尔操作符 ！ && ||
4. 乘性操作符 * ／ % 
5. 加性操作符 + -
6. 关系操作符 < <= > >=
7. 相等操作符  == ！= ===
<img src='http://osz5qtl3g.bkt.clouddn.com/%E7%9B%B8%E7%AD%89.png'/>
8. 条件操作符 ？=：
9. 赋值操作符 += -= *= %=  <<= >>=
10. 逗号操作符

###### 语句
if，while，do-while，while for for in[枚举对象]，label，break，continue，with，switch
###### 函数
函数无重载：ECMAScript 中的参数在内部是用一个数组来表示的。函数接收
到的始终都是这个数组，而不关心数组中包含哪些参数（如果有参数的话）。
### 第四章：变量，作用域和内存的问题
###### 变量：
基本类型，引用类型【值传递】
<img src='http://osz5qtl3g.bkt.clouddn.com/%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%20copy.png'/>
###### 检测类型：
instanceof／typeof
执行环境和作用域
延长作用域链 catch ，with，将指定的对象添加到作用域中。
js没有块级作用域
垃圾回收（自动垃圾回收）：
1. 标记清除
2. 引用计数

“标记清除”是目前主流的垃圾收集算法，这种算法的思想是给当前不使用的值加上标记，然后再回收其内存。

###### 性能问题：
确定垃圾收集器的时间间隔的重要性
###### 管理内存：
优化内存占用
### 第五章：引用类型
###### object
###### array：
ECMAScript 数组的每一项可以保存任何类型的数据，ECMAScript 数组的大小是可以动态调整
数组检测：Array.isArray()
转换方法：数组继承的toLocaleString()、toString()和valueOf()方法，在默认情况下都会以逗号分隔的字符串的形式返回数组项。而如果使用join()方法，则可以使用不同的分隔符来构建这个字符串。
栈方法：后进先出push(),pop()
队列方法：先进先出shift(),push()
重排序方法：reserve（），sort（）
操作方法:concat(),slice(),splice()
位置方法：indexOf(),lastIndexof()
迭代方法：every（），filter（），forEach（），map（），some()
###### Date
###### RegExp
match()
###### Function 
用途：
1.作为值
2.作为构造函数
3.作为方法

###### 基本包装类型：
Number，Boolean,String
字符串操作方法
1.concat
2.slice
3.substrtion 
用途：
1.作为值
2.作为构造函数
3.作为方法

###### 基本包装类型：
Number，Boolean,String
字符串操作方法
1.concat
2.slice
3.substr
4.substring
```
var a='hello'
a=a.concat('word');//helloword
a.slice(3,7)//"lowo"
a.substring(3,7)//"lowo"
a.substr(3.5)//"loword"
a.charAt(2);//"l"
a.charCodeAt(2)//108
a.indexOf('l')//2
```
字符串位置方法
1.charAt()
2.indexOf()
3.lastIndexOf()
大小转换方法
4.substring
```
var a='hello'
a=a.concat('word');//helloword
a.slice(3,7)//"lowo"
a.substring(3,7)//"lowo"
a.substr(3.5)//"loword"
a.charAt(2);//"l"
a.charCodeAt(2)//108
a.indexOf('l')//2
```
字符串位置方法
1.charAt()
2.indexOf()
3.lastIndexOf()
大小转换方法
1.toLowerCase()
2.toLocaleLowerCase(）
3.toUpperCase()
4.toLocaleUpperCase()
5.localCompare()

单体内置对象
1.Gloabal
2.Window
3.Math

Math.round()
Math.random()
Math.min()
Math.max()
### 第六章面向对象的程序设计
###### 对象属性
1.数据属性
<img src='http://osz5qtl3g.bkt.clouddn.com/%E6%95%B0%E6%8D%AE%E5%B1%9E%E6%80%A7.png'/>
2.访问器属性
<img src='http://osz5qtl3g.bkt.clouddn.com/%E8%AE%BF%E9%97%AE%E5%99%A8%E5%B1%9E%E6%80%A7.png'/>
defineProperties_defineGetter_(),_definesetter_()
###### 创建对象
1.工厂模式
2.构造函数模式
3.原型模式[使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法]
  理解原型函数
  <img src='http://osz5qtl3g.bkt.clouddn.com/%E5%8E%9F%E5%9E%8B%E5%87%BD%E6%95%B0.png'/>
4.组合使用构造函数模式和原型模式
5.动态原型模式
6.寄生构造模式
7.稳妥构造方式
 
######  继承
1.借用构造模式
2.组合继承s
3.原型继承
4.寄生继承
5.寄生组合继承

### 函数表达式
函数声明[函数声明提升]
递归函数是在一个函数通过名字调用自身的情况下构成的
闭包是指有权访问另一个函数作用域中的变量的函数。
this：
模仿块级作用域：使用匿名函数【立即执行】
### BOM
###### window：
全局变量会成为window对象，但是不可删除，直接在window对象的定义属性可以。
```
var a=9;
window.a;//9
delete window.a//false
```
window.open()
setTimeout();setInterval();clearInterval();
alert(),confirm(),prompt()
######  location:
它提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。事实上，location 对象是很特别的一个对象，因为它既是window 对象的属性，也是document 对象的属性.
查询字符串参数：
<img src='http://osz5qtl3g.bkt.clouddn.com/location.png'/>
位置操作：
location.assign();//改变浏览器位置
location.reload();
navigator：客户端浏览器识别
screen:表明浏览器能力
history:历史记录
###客户端检
###### 测能力检测
怪癖检测
用户代理检测


