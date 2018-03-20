Echarts 用法。

### 功能说明

* 使用和其他组件用法相似的方式使用 Echarts
* 通过`UF()`可以获取到 Echarts 实例，并调用 Echarts 原生API


## 组件&参数

### # echarts

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | -----
name | 当前Echarts组件名称，用于使用`UF()`获取组件 | string | |
style | Echarts所占用元素的样式。一般用来设置宽高等 | object | |

其他参数见：[Echarts 官方配置](http://echarts.baidu.com/option.html)


#### 组件 API

函数名 | 说明 | 参数
---- | ---- | -----
setOptions | 设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过setOption完成 | 
getOption | 获取当前实例中维护的option对象，返回的option对象中包含了用户多次setOption合并得到的配置项和数据，也记录了用户交互的状态，例如图例的开关，数据区域缩放选择的范围等等 | 
clear | 清空当前实例，会移除实例中所有的组件和图表。 | 
showLoading | 显示加载动画效果 | 
hideLoading | 隐藏加载动画效果 | 


其他参见：[Echarts 官方API](http://echarts.baidu.com/api.html#echartsInstance)

### 注意

与其他组件不同的是，使用`UF('name')`获取到的是echarts的实例，所以可以使用echarts官网给出的API，但是不能使用类似于其它组件用的`set`、`hide`函数等