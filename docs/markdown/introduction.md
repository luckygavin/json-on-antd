## 写在最前面

UF 框架是一个面向RD（不仅是FE）的自助配置框架，RD 直接通过简单的 JSON 配置即能生成页面。

他致力于解放业务中各类简单枯燥的前端交互开发工作。直接书写页面上需要的组件的配置并调用 API 初始化他们，即可生成整个页面；并能通过指定 API 完成更加定制化的业务需求。

Demo 演示请点击左侧各组件示例

> 如有需求可以联系`liuzechun@baidu.com`、[`Hi`](baidu://message/?id=861260447) 咨询。

## 特性

##### 1、界面配置化

用配置的 JSON 声明你需要一个什么样的页面，包含什么交互，框架帮你具体实现。

> 框架中包含有 40 余种组件，从元素级到页面级的组件都有，可以满足约 90% 的日常使用场景。


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
* 开发版：0.2
* 稳定版：null


## 浏览器引入
> 以下库文件分为两个版本：  
> beta 版：多用于开发，开发中的一些 warning 以及 error 会在浏览器控制台中打印出来，方便排查问题。因此 beta 版文件较大。  
> stable 版：屏蔽了 warning 及部分 error 问题，使代码尽量可以执行。同时，代码进行了压缩，文件较小，报错及问题定位较困难。

#### 公共基础库

UF 底层使用 React / Antd 开发完成的，所以在使用 UF 框架之前，要先引入通用公共基础库，如下：

beta:  
* http://uf.baidu.com/css/theme.css
* http://uf.baidu.com/dist/dll.js
* http://uf.baidu.com/dist/antd.js

stable:  
* http://uf.baidu.com/css/theme.min.css
* http://uf.baidu.com/dist/dll.min.js
* http://uf.baidu.com/dist/antd.min.js

#### UF组件库

beta:  
* http://uf.baidu.com/dist/uf_v0.2.js
* http://uf.baidu.com/dist/uf_v0.2.css

stable:   
* http://uf.baidu.com/dist/uf_v0.2.min.js
* http://uf.baidu.com/dist/uf_v0.2.min.css


## 加入我们

欢迎各位大神贡献自己的组件，组件开发请联系`liuzechun@baidu.com`、[`Hi`](baidu://message/?id=861260447)
