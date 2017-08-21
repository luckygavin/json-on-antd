
为了各个项目引用方便，先把一些常用的组件/库汇总到了一起。

### jQuery
`3.2.1`
```
http://uf.baidu.com/third_party/jquery/jquery-3.2.1.js
http://uf.baidu.com/third_party/jquery/jquery-3.2.1.min.js
```


### Echarts
`3.6.2`

```
http://uf.baidu.com/third_party/echarts/echarts.js
http://uf.baidu.com/third_party/echarts/echarts.min.js
http://uf.baidu.com/third_party/echarts/echarts.simple.min.js
http://uf.baidu.com/third_party/echarts/echarts.common.min.js
```

> * echarts.js：包含所有图表组件，且是未压缩代码，建议不要在线上环境使用（2.44M）
> * echarts.min.js：包含所有图表组件，压缩（644k）
> * echarts.simple.min.js： 只包含基础图表 - 折 柱 饼（254K）
> * echarts.common.min.js：包含常用的图表组件 - 折 柱 饼 散点 图例、工具栏 标注/线/域、数据区域缩放（387K）


### Echarts2
`2.2.7`

```
http://uf.baidu.com/third_party/echarts2/echarts.js
http://uf.baidu.com/third_party/echarts2/echarts-all.js
```


### Amaze-UI 

`2.7.2`

```
http://uf.baidu.com/third_party/amazeui/css/amazeui.css
http://uf.baidu.com/third_party/amazeui/css/amazeui.min.css
http://uf.baidu.com/third_party/amazeui/css/amazeui.flat.css
http://uf.baidu.com/third_party/amazeui/css/amazeui.flat.min.css
http://uf.baidu.com/third_party/amazeui/js/amazeui.js
http://uf.baidu.com/third_party/amazeui/js/amazeui.min.js
http://uf.baidu.com/third_party/amazeui/js/amazeui.ie8polyfill.js
http://uf.baidu.com/third_party/amazeui/js/amazeui.ie8polyfill.min.js
http://uf.baidu.com/third_party/amazeui/js/amazeui.widgets.helper.js
http://uf.baidu.com/third_party/amazeui/js/amazeui.widgets.helper.min.js
```

> * amazeui.css / amazeui.js：包含 Amaze UI 所有的 CSS、JS。
> * amazeui.flat.css：圆角版 Amaze UI CSS
> * amazeui.ie8polyfill.js：IE8 polyfill
> * amazeui.widgets.helper.js： 供使用 Handlebars 的用户使用，其他用户请忽略，内含 Web 组件必须的 Handlebars helper 及 Web 组件模板 partials。

以上每个文件都有对应的 minified 文件。

### UEditor
`1.4.3-utf8-php`

```
http://uf.baidu.com/third_party/ueditor/js.php
```

> 本来需要引入一堆js，通过 `js.php` 集成到了一起


### UMEditor
`1.2.3-utf8-php`

类似 UEditor，但是比UEditor轻

```
http://uf.baidu.com/third_party/umeditor/style.min.css
http://uf.baidu.com/third_party/umeditor/js.php
```

> 本来需要引入一堆js，通过 `js.php` 集成到了一起


