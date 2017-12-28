
##### 不开外挂的打怪，都是刷流氓。本次带的外挂就是javascript高级程序设计，爱称js高程。开发工具是webstorm。反正喜欢用啥开发工具就用啥，无所谓滴。
首先介绍一下js，js是专门为网页交互而设计的脚本语言，重点！js是脚本语言哟。js又由ECMAScript(js标准）+DOM(文档对象模型）+BOM（浏览器对象模型）
1.[高校在线学习](JavaScript高级程序设计教程读书笔记.md)
此处省略语法部分吼吼吼🙈
##### 知识点1:变量，作用域以及内存问题
js中的基本类型：undified,null,boolean,number,string
js中的引用类型：见知识点2
 <table>
 <tr><td>属性</td><td>基本类型</td><td>引用类型</td></tr>
 <tr><td>动态属性</td><td>false</td><td>true</td></tr>
 <tr><td>复制变量值</td><td>两变量独立</td><td>两变量不独立</td></tr>
 <tr><td>参数传递</td><td>值复制</td><td>值的地址复制</td></tr>
 </table>
###### 不用代码验证都是流氓👻
```
//动态属性验证
var a=1,b={};
a.name="小蛋黄",b.name="小蛋黄";
console.log(a,b)// 1 {name: "小蛋黄"}
//复制变量值
var c=a,d=b;
c=3,d.name="haha";
console.log(a,c);//1 3
console.log(b,d)//{name: "haha"} {name: "haha"}
//参数传递
function textNum(num){num=10}
function textObj(obj)(obj.name='plorais')
textNum(a);
textObj(b);
console.log(a,b)//1 {name: "plorais"}
```
既然提到作用域了就提一下执行环境，执行环境是干嘛用的呢？答曰：定义变量或者函数访问的其他数据决定他们的行为的。浏览器中，全局执行环境是window对象哈哈。在后面会详细说一下滴。作用域就是变量与函数的可访问范围。有点迷糊是吧？上个图就明白了吼吼吼。下面的图的最外层的矩形就是一个全局执行环境。内部环境呢可以通过作用域链去访问所有的外部环境。只可以向上搜索不可以向下搜索哟。

<img width='150px'height='200px' src="http://osz5qtl3g.bkt.clouddn.com/%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83.png"/>

ps:js只有函数作用域和全局作用域没有块级作用域，但是可以用其他方式模仿块级作用域，上代码。
```
if(1){
var a=2;
}
console.log(a);//2
``` 
16g的iphone经常要清理内存，我们js是有自动垃圾回收机制的呢😉，垃圾回收机制的两种方式：
1.标记清除（垃圾回收器给存储在内存中的所有变量加上标记，去掉用的，然后清除不需要的变量）
2.引用计数（不常用，且有bug）清除引用次数为1的变量。
##### 知识点2:引用类型
因为引用类型的东西比较多所以就单独拿出来。
Object:
定义方式
```
//定义方式
var obj=new Object();//使用new
var obj={};//字面量方式
```
Array:
```
//定义方式
var arr=new Array();//使用new
var arr=['hah','hah'];//字面量方式
Array.isArray(arr);//true 检测是否是数组的方法
//转换方式
arr.toString();//"hah,hah"
arr.toLocaleString()//"hah,hah"
arr.valueOf()// ["hah", "hah"]
//栈,队列方法方法
arr.push('xixi');//["hah", "hah", "xixi"]
arr.pop()// ["hah", "hah"]
arr.unshift("xixi")//["xixi", "hah", "hah"]
arr.shift();//["hah", "hah"]
//重排序方法
var arr=[1,5,4,7,2,3]
arr.reverse()//[3, 2, 7, 4, 5, 1]
arr.sort()//[1, 2, 3, 4, 5, 7]
//操作方法
var arr=['hah','hah'];
arr.concat(arr)// ["hah", "hah", "hah", "hah"]
var arr=[1,5,4,7,2,3];
arr.slice(1,4)// [5, 4, 7]
arr.splice(1,0,"hah","xixi")//[1, "hah", "xixi", 5, 4, 7, 2, 3]
//位置方法
var numbers = [1,2,3,4,5,4,3,2,1];
numbers.indexOf(2);//1
numbers.lastIndexOf(4)//5
//迭代方法
every
some
map
forEach
filter
//归并方法
rdeuce
reduceRight
```
Date：
```
//创建方法
var now=new Date();//Thu Dec 28 2017 10:23:05 GMT+0800 (CST)
//
now.toLocaleString()//"2017/12/28 上午10:23:05"
now.toString()//Thu Dec 28 2017 10:23:05 GMT+0800 (CST)
now.valueOf()//1514427785569
now.toDateString()//"Thu Dec 28 2017"
now.toTimeString()//"10:23:05 GMT+0800 (CST)"
now.toLocaleDateString()//"2017/12/28"
now.toLocaleTimeString()//"上午10:23:05"
省略日期时间组件🤯
```
RegExp：支持正则表达式


