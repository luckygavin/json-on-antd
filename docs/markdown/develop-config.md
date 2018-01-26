此处主要讲解**`UF.config()`**的作用以及其参数的详细用法。

## 使用场景

* 项目开发时，用于给各个模块命名，类似于给模块路径一个别名
* 给组件配置一些全局的、通用的默认参数，减少开发时多次书写重复的配置
* 其他一些 [requirejs](http://requirejs.org/docs/api.html#config) 的高级用法，这里不做赘述


## 具体用法

一般在页面初始化之前调用`UF.config({})`做一些全局的配置。其参数为一个对象，参数如下：

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | ----
modules | 模块相关的各种配置，具体见下表：`modules`表 | Object |  | 
components | 用于给组件声明一些全局的、通用的默认参数，减少开发时多次书写重复的配置。 | Object |  | 
global | 其他一些全局配置。见：`global`表 | Object |  | 
authority | 权限控制。见：`authority`表 | Object |  | 
precondition | 预加载函数列表，会阻塞页面初始化（init之前执行的函数，多为调用api获取基础数据），列表中的函数全部执行完成后才会执行页面初始化，见：`precondition` | Array |  | 


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
urlArgs | 模块加载时的后缀。可以通过增加时间戳来防止模块文件缓存：`urlArgs: 'suffix=' + Date.now()` | string &#124; function |  | 
showLoading | 使用懒加载的方式加载模块时是否展示Loading。一般加载模块速度很快，无需展示Loading。如有特殊情况，可以设置为`true`全部模块都有loading；或者设置为一个模块名数组，当加载到数组中的模块时才会展示loading（推荐） | boolean &#124; Array | false | 


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

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | ----
domain | 设置文档域 document.domain，默认为当前页面域名 | string |  | 
ajax | 覆盖`UF.ajax`默认的配置。当项目中API规范和当前框架定义的API规范不相符时，需要更改 success 或 error 等的处理逻辑；亦或需使用 jsonp 的方式请求数据，皆可在此配置。具体参数见下表：`ajax` | object |  | 
data | 用于存放一些公用数据或静态数据（供select等组件直接调用）。 | Object |  | 
cacheApis | 声明某些api的数据无需重复获取，重复调用（url及参数无变化时）直接从缓存中取得。加快获取速度，减小服务器压力。 | string[] |  | 


#### *ajax*

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | ----
method | 默认数据请求方式 | string | `GET` | 
headers | 设置http请求的headers | object | {} | 
data | 发送的参数体，可以是一个 JOSN对象 或一个 query串 | object &#124; string | | 
beforeSend | 发送数据之前，对数据整体进行处理。为一个函数，函数返回处理好的数据。函数第一个参数`data`为数据体，函数第二个参数`conf`为当前请求的全部配置，例如请求的类型等。 | function(data, conf){} | | 
type | 声明返回的数据格式。可以是：`html`, `xml`, `json`, `jsonp` | string | `json` | 
contentType | 设置请求的`Content-Type`属性，例如 `contentType: 'application/json'` | string |  |
crossOrigin | 设置`cross-origin`请求 | boolean | | 
success | 请求成功时的回调函数。这里的成功失败不是代码逻辑中的成功还是失败，而是状态码是否为200。**默认的处理方式**见 [交互API](#/Usage/Api) 中`UF.ajax()`部分。参数中的`successHandler`和`errorHandler`为代码逻辑中传入的成功和失败的处理函数。可见如下示例 | function(res, successHandler, errorHandler){} | 默认处理逻辑，见 [组件交互](#/Usage/Api) 的 `UF.ajax` 部分 | 
error | 请求失败时的回调函数。同上，为状态码非 200 时的回调函数。见下面示例 | function(){res, errorHandler} | | 
complete | 不管请求成功还是失败，都会调用。可以应用于按照REST规范开发的情况 | function | | 
jsonpCallback | 为 JSONP 请求指定回调函数名。这个值将被使用，而不是由reqwest自动生成的随机(但推荐的)名称。 | function | | 

*覆盖默认 ajax 处理逻辑的示例：*

```javascript
UF.config({
    global: {
        ajax: {
            success(res, successHandler, errorHandler) {
                // 接口定义：code === '0000' 为请求处理成功，数据放在 data 字段中
                // 非 0000 的全部为失败，其中失败原因在 msg 字段中
                if (res.code === '0000') {
                    successHandler(data, res);
                } else if (res.code === '8001') {
                    // 错误提示逻辑
                    UF.notification.error({
                        message: '请求失败：',
                        description: res.msg
                    });
                    // 业务逻辑中使用 UF.ajax 系列函数时传入的错误处理逻辑
                    errorHandler(res);
                }
                
            },
            error(res, errorHandler) {
                errorHandler(res);
            }
        }
    }
});
```


### # data

用于存放一些公用数据或静态数据（供select等组件直接调用）。


### # authority

权限点列表。在这里配置了权限点之后，即可在组件配置中使用`authority`属性关联此权限点来控制组件是否渲染。例如只有管理员才会展示的按钮等。


### # precondition

`precondition`为预加载函数列表，函数的执行会阻塞页面初始化（`UF.init`函数执行之前执行的异步逻辑），等列表中的函数全部执行完成（调用resolve函数）后才会执行页面初始化。多为调用api获取页面所需的基础数据。

```javascript
precondition: [
    (resolve, reject)=>{
        UF.ajax.get('?r=peripheral/infoManageApi/getPeripheralBaseInfo', null, data=>{
            UF.set('optionSource', data);
            resolve();
        }, error=>{
            reject();
            return true;
        });
    }
]
```