
## html 组件

`type`为`html`的组件，`content`属性为一段html代码。为了方便大块自定义内容。

html代码会被一个`<section>`标签包裹，为了方便定义样式，html 组件还支持`style``className`属性，自定义外层样式。



## 引入自定义组件

方法1：`UF.load()`

如果已有组件及配置实在无法支持当前的业务逻辑，也可以某一部分使用React进行开发，然后作为一个新自定义组件引入到项目中使用。具体用法请联系 [liuzechun](baidu://message/?id=861260447)

方法2：`UF.config({plugins: []});`

使用插件的加载方式。
