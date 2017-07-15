---
title: 蛋黄刷牛客网之前端
---
1.overflow属性值问题
```
scroll:必出现
auto:子元素内容大于父元素出现滚动条
visible,溢出内容出现在父元素之外
hidden,溢出隐藏

```
2.任何元素，一旦float之后，都会变成块级元素
3.BFC就是“块级格式化上下文”的意思，创建了 BFC的元素就是一个独立的盒子，不过只有Block-level box可以参与创建BFC， 它规定了内部的Block-level Box如何布局，并且与这个独立盒子里的布局不受外部影响
4.input type支持的类型
```
button
checkbox
file
hidden
image
password
radio
reset
submit
text
```
5.如果在文档开始处没有发现文档类型声明，则所有浏览器都会默认混杂模式
6.a超链接固定顺序l-v-h-a
7.blur()方法是当元素失去焦点时，发生blur事件而focus()方法是当元素获得焦点时发生focus事件；onblur：元素失去焦点onfocus:元素得到焦点
8.Flash提供了ExternalInterface接口与JavaScript通信.两个方法：call和addCallback作用：call让Flash调用js里的方法，addCallback是用来注册flash函数让js调用。
9.isNaN方法：该方法用于检测参数是否为数值型，如果不是数值型，则返回true