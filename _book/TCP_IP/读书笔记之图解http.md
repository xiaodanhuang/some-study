---
title:  读书笔记之图解http

---
## 第一章了解web及网络基础

### TCP/IP协议族
与互联网相关的协议集合
<img src="http://osz5qtl3g.bkt.clouddn.com/TCP-IP.jpg" />

##### 负责传输的IP协议:
IP协议的作用是把各种数据包发送给对方,保证发送到对方那里的两个重要条件是IP地址可变换,但MAC地址基本不会改变
使用ARP协议凭借MAC地址进行通信 [用以解析地址的协议],根据IP地址可以反查对应的MAC地址
确保可靠性的TCP协议:
提供可靠的字节流服务[将大块数据分割成以报文段为单位的数据包进行管理].
TCP三次握手

<img src="http://osz5qtl3g.bkt.clouddn.com/tcp-shakehand.png"/>

浏览页面发生了什么?
<img src="http://osz5qtl3g.bkt.clouddn.com/tcp-ip-liulan.png" />

##### 什么是URI？
Web上每种可用的资源，如 HTML文档、图像、视频片段、程序等都由一个通用资源标志符(Universal Resource Identifier， URI)进行定位。
URL是URI的一个子集。它是Uniform Resource Locator的缩写，译为“统一资源定位 符”。
通俗地说，URL是Internet上描述信息资源的字符串，主要用在各种WWW客户程序和服务器程序上。
采用URL可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。

