UF 致力于提供给 RD 愉悦的页面开发体验

使用此组件，您无需提前安装任何环境。

## 1.组件引入

直接按需复制如下内容到页面的`<head>`标签里即可：

```html
<link rel="stylesheet" href="http://uf.baidu.com/dist/css/antd.min.css" />
<link rel="stylesheet" href="http://uf.baidu.com/dist/css/uf_v0.1.css" />
<script src="http://uf.baidu.com/dist/dll.min.js"></script>
<script src="http://uf.baidu.com/dist/antd.min.js"></script>
<script src="http://uf.baidu.com/dist/uf_v0.1.js"></script>

<!-- 如果需要兼容比较老的浏览器，可以引入如下文件实现兼容 -->
<script src="http://uf.baidu.com/dist/browser-polyfill.min.js"></script>
```

## 2.组件使用

第一个例子：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="http://uf.baidu.com/dist/css/antd.min.css" />
        <link rel="stylesheet" href="http://uf.baidu.com/dist/css/uf_v0.1.css" />
        <script src="http://uf.baidu.com/dist/dll.min.js"></script>
        <script src="http://uf.baidu.com/dist/antd.min.js"></script>
        <script src="http://uf.baidu.com/dist/uf_v0.1.js"></script>
        <title>代码测试</title>
    </head>
    <body>
        <!-- 页面组件承载元素，使用id作为参数  -->
        <div id="demo"></div>
        <!-- 此处为直接从左侧任意一组件demo中拷贝过来的demo，可见 `Layout 布局` 尝试配置整个页面  -->
        <script>
            var config = {
                "type": "card",
                "title": "Card title",
                "loading": true,
                "content": "包含标题、内容、操作区域的卡片内容区域"
            };
            UF.init(config, 'demo');
        </script>
    </body>
</html>

```

以上，首先在 `<head>`标签中引入全部需要的库文件

然后在 script 中书写页面的配置代码 config，最后使用 API：`UF.init(config, 'demo')`在`id="demo"`的元素上按照config初始化组件。

config 此处为一个组件的配置，也可以是整个页面的配置，具体可见`Layout 布局`中的示例。


