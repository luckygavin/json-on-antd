来自外部平台的图标。图标文件访问 [iconfont.cn](http://www.iconfont.cn) 进行定制下载。

## 组件&配置

### # icon-plus

由于图标字体本质上还是文字，可以使用 `style` 和 `className` 设置图标的大小和颜色。

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| mode | 图标类型 | string | - |
| style | 设置图标的样式，例如 fontSize 和 color | object | - |


#### 图标引入

* 1、首先访问平台选择想要的图标进行下载：[iconfont.cn](http://www.iconfont.cn)
* 2、然后将图标目录下的`iconfont.xxx`几个文件全部拷到项目中
* 3、将`iconfont.css`引入到页面入口即可使用

#### 其他说明

下载的包中包含有`demo_fontclass.html`文件，直接双击打开可以看到下载的全部图标效果以及名称，组件的`mode`参数的值即为页面上各个图标下面展示的名称
