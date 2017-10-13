此处主要讲解**`UF.config()`**的作用以及其参数的详细用法。

## 使用场景

* 项目开发时，用于给各个模块命名，类似于给模块路径一个别名
* 给组件配置一些全局的、通用的默认参数，减少开发时多次书写重复的配置
* 其他一些 [requirejs](http://requirejs.org/docs/api.html#config) 的高级用法，这里不做赘述


## 具体用法

一般在页面初始化之前调用`UF.config({modules, components, global})`做一些全局的配置。其参数为一个对象，其中常用的参数有`modules`、`components`、`global`


### # modules

一般用于配置模块路径映射。例如 快速上手 中的如下配置：

```javascript
UF.config({
    modules: {
        baseUrl: './',
        paths: {
            Router: 'router',
            App: 'app',
            Page1: 'page1',
            Page2: 'page2'
        }
    }
});
```
全部参数说明如下：

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | ----
baseUrl | 用于所有模块查找的根路径 | string |  | 
paths | 模块名称的路径映射。路径设置被假定为相对于baseUrl，除非路径设置从“/”开始，或者在其中有一个URL协议(“如http:”)。 | Object |  | 
waitSeconds | 单个模块加载超时时间（单位：s）。将其设置为 0 将禁用超时。默认值是 7 秒。 | string | 7 | 
urlArgs | 模块加载时的后缀 | string &#124; function |  | 

其他更多配置可见：[这里](http://requirejs.org/docs/api.html#config)


### # components

用于提前给组件声明一些全局的、通用的默认参数，减少开发时多次书写重复的配置。例如：

```javascript
UF.config({
    components: {
        'loading': {
            delay: 200,
            size: 'small'
        },
        'data-picker': {
            format: 'YYYY/MM/DD'
        }
    }
});
```

配置全部`Loading组件`默认全部使用小号的图标，且全部延迟200ms展示loading状态；全部`日期选择组件`默认格式化成 2017/10/11 的格式。  
`loading`、`'data-picker'`即为组件的`type`  
此外，比如也可以给`Table组件`设置一组配置（比如具有过滤/导出/全屏功能，分页大小为8条/页，不展示复选框），再使用Table时就无需再配置这些属性。  
全部组件的全部属性都可以这样预设置，从而达到通用配置的高度复用。  

> 这里的配置会深度合并，无需担心被覆盖。比如`Table组件`的参数`rowSelection`是对象，对象里还有一堆值，此时只想要设置其中一两项，也可以正常使用: `table: {rowSelection: {type: 'radio'}}`


### # global

其他一些全局配置。





