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

###### 注释
//或者/\*注释\*\*/ 
###### 严格模式
"use strict"
###### 语句
使用代码块使编码意图更清晰

###### 关键字，保留字
###### 变量
var message [message 保存为undefined，且定义为该变量作用域中的局部变量，函数退出后就销毁]
###### 数据类型：
1. undefined（未初始化）
2. Null（从逻辑角度上看，null表示空对象指针）所以typeof 结果为 object。
3. Boolean
4. Number
5. String
属性：hasownproperty(),isproperty(),propertyIsEnumerable(),tolocaleString(),toString(),valueof()
6. object
7. array

###### 数值转换
1. Number()
2. parseInt()
3. parseFloat()

###### 操作符
1. 一元操作符
2. 位操作符  not and or xor << >> <<< >>>
3. 布尔操作符 ！ && ||
4. 乘性操作符 * ／ % 
5. 加性操作符 + -
6. 关系操作符 < <= > >=
7. 相等操作符  == ！=
8. 条件操作符 ？=：
9. 赋值操作符 += -= *= %=  <<= >>=
10. 逗号操作符

###### 语句
if，while，do-while，while for for in，label，break，continue，with，switch
### 第四章：变量，作用域和内存的问题
变量：基本类型，引用类型【值传递，引用传递】
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






 