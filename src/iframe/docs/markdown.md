iframe 的增强版。

### 功能说明  
* iframe加载子页面时自动展示loading状态
* 文档加载完成后iframe的高度自动重新设定，支持三种模式


## 组件&参数

### # iframe

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | -----
src | 子页面的url。可以是全路径，也可以是相对路径 | string |  | 必填
mode | 文档加载完成后iframe的高度自动重新设定，支持三种模式： `auto` - 自动调整，监听内部文档高度变化，不断调整iframe的高度（默认）；`max` - 总是展示最大高度，iframe会逐渐被撑大；`fixed` - 高度固定，需自行设定iframe的height（同iframe默认效果，容易出现滚动条）。当设置为`false`时，会取消高度调整的尝试（以屏蔽跨域的warning） | string | 'auto' | 
delay | 子页面高度变化时，延迟重新设定iframe高度，可防止高度闪烁 | number | 0 |

其他属性同原生的 iframe，例如：`height`、`width`等

#### 注意：
使用`mode`属性时需要注意以下问题：

* 跨域问题  
要使用`mode`属性，默认会因跨域问题导致此属性无效。解决办法有两种：
> * 需在当前页面和其子页面的 js 里同时增加一行代码设置为同一个域：`document.domain = 'baidu.com';`
> * 使用 `UF.config({global: {domain: 'baidu.com'}})`，见 [全局配置](#/Develop/Config)

* 子页面高度问题  
此外如果子页面的`body/html`标签 CSS 设置了`height: 100%`，则`mode: 'auto'`失效，展现出的效果同`mode: 'max'`
> theme.css 里定义了`body`标签为`height: 100%`，所以如果嵌套通用用UF开发的子页面，可以在子页面入口的html中加入`<style>html, body {height: auto !important;}</style>`，覆盖掉默认样式

---

*关于样式：*

demo里的浏览器样式是文档里额外加的，默认的`Iframe`组件没有额外样式，没有边框及阴影。如果想要使用demo里的样式，可以参考如下css代码：
```css
.uf-iframe {
    border-top: 2em solid rgba(230, 230, 230, 0.7);
    box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
    position: relative;
    border-radius: 3px 3px 0 0;
}
.uf-iframe:before {
    content: '';
    display: block;
    position: absolute;
    top: -1.25em;
    left: 1em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #f44;
    box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
}
.uf-iframe:after {
    content: attr(data-src);
    display: block;
    position: absolute;
    color: #ddd;
    font-weight: 100;
    padding-left: 5px;
    width: calc(100% - 6em);
    height: 1.2em;
    line-height: 1.2em;
    top: -1.6em;
    left: 5.5em;
    border-radius: 2px;
    background-color: white;
}
```