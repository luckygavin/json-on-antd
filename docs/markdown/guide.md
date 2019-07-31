## 什么是 UF？

UF 框架是一个面向RD（不仅是FE）的自助配置框架，RD 直接通过简单的 JSON 配置即能生成页面。

UF 致力于解放业务中各类简单枯燥的前端交互开发工作。直接书写页面上需要的组件的配置并调用 API 初始化他们，即可生成整个页面；并能通过指定 API 完成更加定制化的业务需求。

Demo 演示请点击左侧各组件示例

## 特性

##### 1、界面配置化

用配置的 JSON 声明你需要一个什么样的页面，包含什么交互，框架帮你具体实现。

> 框架中包含有 50 余种组件，从元素级到页面级的组件都有，可轻松满足多数日常使用场景。


##### 2、学习成本低
框架整合了各种交互场景，抽象成了一个简单的定理。何为组件交互？一个组件改变另一个组件，即为交互。

基于此，框架了统一的API来完成各种组件的不同的操作。

##### 3、开发成本低
* 无需搭建前端环境
* 无需关注UI风格，后续还会提供多种主题样式，可自由切换
* 更少的业务逻辑实现



## 浏览器支持
现代浏览器和 IE9 及以上。


## 版本
* 开发版：dev - [查看最新功能](http://antd.uf.baidu.com:8000/uf/#/UpdateLog)
* Beta版：%{version}%
* 稳定版：%{stableVersion}%


## 浏览器引入
> 以下库文件分为三个版本：
> * dev 版：为当前研发版本，可对遇到的问题进行及时响应并修复，前期推荐使用dev版。
> * beta 版：新上线的版本，不会频繁迭代，稳定性有待检测。
> * stable 版：屏蔽了 warning 及部分 error 问题，使代码尽量可以执行。同时，代码进行了压缩，文件较小，报错及问题定位较困难。

#### UF组件库

dev:
* %{devUrl}%/theme.css
* %{devUrl}%/dll.js
* %{devUrl}%/antd.js
* %{devUrl}%/uf.js

beta:
* %{betaUrl}%/%{version}%/theme.css
* %{betaUrl}%/%{version}%/dll.js
* %{betaUrl}%/%{version}%/antd.js
* %{betaUrl}%/%{version}%/uf.js

stable:
* %{stableUrl}%/%{version}%/theme.min.css
* %{stableUrl}%/%{version}%/dll.min.js
* %{stableUrl}%/%{version}%/antd.min.js
* %{stableUrl}%/%{version}%/uf.min.js


## 加入我们

欢迎各位大神贡献自己的代码，框架/组件开发请联系[`liuzechun`](mailto:liuzechun2015@163.com)
