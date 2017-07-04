#CSS learning 1.0
###   选择器
```
id选择器:#id
类选择器:.class
派生选择器:后代,子元素,相邻兄弟
属性选择器,eg:[title=haha]{}
伪类: 伪类用于向某些选择器添加特殊的效果
伪元素
```

### 样式
###### 背景
```background
background-attachment :scroll|fixed
background-color:颜色
backgrouond-image:图片
background-position:位置默认0% 0%
background-repeat:repeat|repeat-x|repeat-y|no-repeat|inherit
background-clip: border-box|padding-box|content-box;
background-origin: padding-box|border-box|content-box;
background-size: length|percentage|cover|contain;
```
###### 文本
```
color:文本颜色
line-height:行高
text-indent:缩进
direction:方向
text-align:对齐方式
text-decoration:文本修饰
text-shadow:文本阴影
white-space :留白处理
```
######  文字
```
font-weight:字体粗细
font-size;字体大小
font-family:字体
font-style:normal}italic|oblique|inherit
```
######  链接
```
a:link - 普通的、未被访问的链接
a:visited - 用户已访问的链接
a:hover - 鼠标指针位于链接的上方
a:active - 链接被点击的时刻

```
###### 列表
```
list-style:简写属性
list-style-image:将图象设置为列表项标志
list-style-position:设置列表中列表项标志的位置
list-style-type:设置列表项标志的类型
marker-offset
```
###### table
```
border-collapse:设置是否把表格边框合并为单一的边框
border-spacing:设置分隔单元格边框的距离。
caption-side:设置表格标题的位置。
empty-cells:设置是否显示表格中的空单元格。
table-layout:设置显示单元、行和列的算法。
```
###### 轮廓
```
outline-color:规定边框的颜色
outline-style:规定边框的样式
outline-width:规定边框的宽度
inherit:规定应该从父元素继承 outline 属性的设置
```
### 盒模型
元素内容,内边距,外边距,边框
```
width,height:指的是元素内容的宽高
设置box-sizing:border-box,这样width=内容+padding+border
纵向margin会重叠,大的会把小的吃掉
margin:百分比看的是宽度
```
### 定位:
```
postion:static|fixed |relative| absolute
float:left|right
display:none|inline-block|block

```
