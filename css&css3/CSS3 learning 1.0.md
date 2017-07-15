---
title: CSS3 learning 1.0
---
### 边框
```
border-radius
box-shadow
box-image [ie不兼容]
```
### 背景
```
background-size
background-origin
background-clip
```
background-origin,background-clip单独使用
<img src="http://osz5qtl3g.bkt.clouddn.com/border-clip&origin.png"/>
background-origin,background-clip混合使用
<img src="http://osz5qtl3g.bkt.clouddn.com/border-origin-clip.png" />
background-origin：指定从哪儿开始绘制背景；
background-clip：不管你怎么绘制的背景，我是控制背景怎么显示，你就算绘制了我也能让你不显示
### 文本效果
```
text-shadow
word-wrap
```
### 字体
自定义字体
`@font-face`
### 2D转换
```
matrix(n,n,n,n,n,n)	定义 2D 转换，使用六个值的矩阵。
translate(x,y)	定义 2D 转换，沿着 X 和 Y 轴移动元素。
translateX(n)	定义 2D 转换，沿着 X 轴移动元素。
translateY(n)	定义 2D 转换，沿着 Y 轴移动元素。
scale(x,y)	定义 2D 缩放转换，改变元素的宽度和高度。
scaleX(n)	定义 2D 缩放转换，改变元素的宽度。
scaleY(n)	定义 2D 缩放转换，改变元素的高度。
rotate(angle)	定义 2D 旋转，在参数中规定角度。
skew(x-angle,y-angle)	定义 2D 倾斜转换，沿着 X 和 Y 轴。
skewX(angle)	定义 2D 倾斜转换，沿着 X 轴。
skewY(angle)	定义 2D 倾斜转换，沿着 Y 轴。
```
### 3D转换
```
matrix3d(n,n,n,n,n,n,
n,n,n,n,n,n,n,n,n,n)	定义 3D 转换，使用 16 个值的 4x4 矩阵。
translate3d(x,y,z)	定义 3D 转化。
translateX(x)	定义 3D 转化，仅使用用于 X 轴的值。
translateY(y)	定义 3D 转化，仅使用用于 Y 轴的值。
translateZ(z)	定义 3D 转化，仅使用用于 Z 轴的值。
scale3d(x,y,z)	定义 3D 缩放转换。
scaleX(x)	定义 3D 缩放转换，通过给定一个 X 轴的值。
scaleY(y)	定义 3D 缩放转换，通过给定一个 Y 轴的值。
scaleZ(z)	定义 3D 缩放转换，通过给定一个 Z 轴的值。
rotate3d(x,y,z,angle)	定义 3D 旋转。
rotateX(angle)	定义沿 X 轴的 3D 旋转。
rotateY(angle)	定义沿 Y 轴的 3D 旋转。
rotateZ(angle)	定义沿 Z 轴的 3D 旋转。
perspective(n)	定义 3D 转换元素的透视视图。
```
### 过渡
transition
```
transition	简写属性，用于在一个属性中设置四个过渡属性.
transition-property	规定应用过渡的 CSS 属性的名称。
transition-duration	定义过渡效果花费的时间。默认是 0。
transition-timing-function	规定过渡效果的时间曲线。默认是 "ease"。
transition-delay	规定过渡效果何时开始。默认是 0。

```
### 动画
 @keyframe&animation
 ```
属性	描述	CSS
@keyframes	规定动画。
animation	所有动画属性的简写属性，除了 animation-play-state 属性。
animation-name	规定 @keyframes 动画的名称。
animation-duration	规定动画完成一个周期所花费的秒或毫秒。默认是 0。
animation-timing-function	规定动画的速度曲线。默认是 "ease"。
animation-delay	规定动画何时开始。默认是 0。
animation-iteration-count	规定动画被播放的次数。默认是 1。
animation-direction	规定动画是否在下一周期逆向地播放。默认是 "normal"。
animation-play-state	规定动画是否正在运行或暂停。默认是 "running"。
animation-fill-mode	规定对象动画时间之外的状态。
```
###  多列
```

属性	描述	CSS
column-count	规定元素应该被分隔的列数。
column-fill	规定如何填充列。
column-gap	规定列之间的间隔。
column-rule	设置所有 column-rule-* 属性的简写属性。
column-rule-color	规定列之间规则的颜色。
column-rule-style	规定列之间规则的样式。
column-rule-width	规定列之间规则的宽度。
column-span	规定元素应该横跨的列数。
column-width	规定列的宽度。
columns	规定设置 column-width 和 column-count 的简写属性。
```