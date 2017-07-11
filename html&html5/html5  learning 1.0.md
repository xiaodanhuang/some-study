#HTML5 learning 1.0
#####现代标记
###### 文档类型
` <!DOCTYPE html>`没有文档声明视为混杂模式,布局会出现瑕疵,添加后使用标准模式,即可正常显示.
###### 字符编码
UTF-8可以包含支持想要的语音
###### h5放松的规则
1.可选使用`<html>,<head>,<body>`,
2.标签小写,但支持大小写,
3.为属性加引号但是只要不包含受限字符可不加
4.可省略空元素关闭符号/
###### 语义元素
通过标记传达额外的结构化信息,搜索引擎的优化
`<header>文档头部`
`<article> 潜在来源:博客帖子,文章,故事,评论`
`<aside>侧边栏`
`<nav>导航链接`
`<figure>添加插图`
`<figcaption>添加插图`
`<footer>定义section/document页脚`
`<section>一个区块`
`<time>标注时间`
`<output>ja返回值`
`<mark>突显文本`
##### 表单
input type属性
```
color
date
datetime
datetime-local
email
month
number
range
search
tel
ttime
url
week
```
input placeholder
input autofocus
表单新元素
```
datelist 显示输入建议
<keygen>提供一种验证用户的可靠方法
```
##### 音频与视频

audio属性:
`controls,preload,autoplay,loop`
video
`controls,preload,autoplay,loop,height,width,poster`
`<source>`
##### canvas
canvas属性
`id width height`
```
moveTo()-描点方法
lineTo()-划线方法
lineWidth-线条宽度
strokeStyle 设置颜色
lineCap 线条两端形状 butt round square 加长方头
stroke()-直线显示方法
beginpath()一个新线段的绘制
fillStyle填充颜色
fill()填充
fillRect()绘制矩形
arc()绘制圆形
quadraticCurveTo()绘制曲线
translate 平移函数
rotate     旋转
matrix     矩阵
scale      缩放
```
