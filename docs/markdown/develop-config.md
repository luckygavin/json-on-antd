
全局配置主要用于页面初始化之前，对页面整体进行一些设置、渲染页面之前的请求或处理等等，全部就绪后才会进行页面初始化。

此处主要讲解**`UF.config()`**函数的作用以及其参数的详细用法。

## 使用场景

* 项目开发时，用于给各个模块命名，类似于给模块路径一个别名，其他一些 [requirejs](http://requirejs.org/docs/api.html#config) 的高级用法不做赘述
* 给组件配置一些全局的、通用的默认参数，减少开发时多次书写重复的配置
* 配置ajax处理逻辑，可以把后端返回数据统一格式化成一样的格式
* 配置声明对接口数据进行缓存，防止重复请求
* 执行异步逻辑（例如通过ajax获取页面初始化时需要用到的数据，如用户名等），阻塞页面初始化
* 进行页面权限控制相关配置


## 具体用法

一般在页面初始化之前调用`UF({})`产生一个uf实例时，或者调用`UF.config({})`初始化uf实例时，做一些全局的配置。其参数为一个对象，参数如下：

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | ----
name | 实例名称，根据不同的名称产生不同的实例 | String | default | 
[modules](#/Develop/Config/-modules) | 模块相关的各种配置，具体见下表：`modules`表 | Object |  | 
[components](#/Develop/Config/-components) | 用于给组件声明一些全局的、通用的默认参数，减少开发时多次书写重复的配置。 | Object |  | 
[plugins](#/Develop/Config/-plugins) | 额外加载插件。见：`plugins` | Object[]&#124;String[] |  | 
[global](#/Develop/Config/-global) | 其他一些全局配置。见：`global`表 | Object |  | 
[data](#/Develop/Config/-data) | 用于存放一些全局的公用数据，可以直接在组件中使用，或**作为url的动态参数使用** | Object |  | 
dataFiles | 当`data`预设内容较多时，可用于通过文件的方式引入 | String[] |  | 
[authority](#/Develop/Config/-authority) | 权限控制。见：`authority`表 | Object |  | 
[precondition](#/Develop/Config/-precondition) | 预加载函数列表，会阻塞页面初始化（init之前执行的函数，多为调用api获取基础数据），列表中的函数全部执行完成后才会执行页面初始化。见：`precondition` | Function[] |  | 


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
urlHandler | 发送获取模块的url请求之前，支持自己再次修改url的形式 | function(urlPath) {return urlPath;} |  | 
showLoading | 使用懒加载的方式加载模块时是否展示Loading。一般加载模块速度很快，无需展示Loading。如有特殊情况，可以设置为`true`全部模块都有loading；或者设置为一个模块名数组，当加载到数组中的模块时才会展示loading（推荐） | boolean &#124; Array | false | 


其他更多配置可见：[这里](http://requirejs.org/docs/api.html#config)

> 只有`modules`有内容或者为`true`时，才会加载requirejs（即使用define等函数定义模块）。 当需要引入第三方库时（可能会出问题）： 
> * 如果项目中使用了requirejs的加载方式，则需同样是用requirejs的方式来加载三方模块，不能直接script标签引入。  
> * 如果项目中没有使用requirejs的加载方式，则可以把`modules`属性置为`false`或者不填，禁用掉requirejs


### # components

用于提前给组件声明一些全局的、通用的默认参数，减少开发时多次书写重复的配置。例如：

```javascript
UF.config({
    components: {
        'loading': {
            delay: 200,
            size: 'small'
        },
        'date-picker': {
            format: 'YYYY/MM/DD'
        }
    }
});
```

示例中配置了全部`Loading组件`默认全部使用小号的图标，且全部延迟200ms展示loading状态；全部`日期选择组件`默认格式化成 2017/10/11 的格式。  
`loading`、`'date-picker'`即为相应组件的`type`  
此外，比如也可以给`Table组件`设置一组配置（比如具有过滤/导出/全屏功能，分页大小为8条/页，不展示复选框），再使用Table时就无需再配置这些属性。  
全部组件的全部属性都可以这样预设置，从而达到通用配置的高度复用。  

> 这里的配置会深度合并，无需担心被覆盖。比如`Table组件`的参数`rowSelection`是对象，对象里还有一堆值，此时只想要设置其中一两项，也可以正常使用: `table: {rowSelection: {type: 'radio'}}`

##### 另一种用法：

除了上面给通用组件声明全局配置，还可以定义配置作为自定义组件，以在开发时按照真正的组件使用。用法如下：

```javascript
UF.config({
    components: {
        'my-datepicker': {
            format: 'YYYY 年 MM 月 DD 日',
            size: 'small',
            allowClear: true
        }
    }
});
UF.init({
    name: 'test-picker',
    type: 'my-datepicker', 
    allowClear: false
}, '#demo');
```

如上面示例，首先在config中定义了一个名为'my-datepicker'的自定义组件配置。当在下面使用type为'my-datepicker'的组件时，最终会找到config.components中定义的自定义组件，并将其配置加以复用，并可在组件中覆盖自定义组件中定义的默认属性。


### # plugins
`插件系统`

一些使用频率较低的组件，为了防止UF过于膨胀，从UF库中剥离了出来，想要使用的时候需要在config中指定加载。同时用户也可以在此处载入自己开发的React模块，只要模块为用AMD的方式打包的匿名模块即可。

`plugins`参数为一个数组，其每一项的参数有两种形式，对应以上两种用法：

* 第一种为一个字符串，直接引用UF官方提供的插件名称即可；  
* 第二种为一个对象，引入用户自己开发的插件，对象包含如下属性：

参数 | 说明 | 类型 | 是否必填
---- | ---- | ----- | ----
name | 载入之后的模块名称，和使用组件时的`type`一致。当不配置name时，认为通过path加载到的为多个组件，各个组件名称和包内定义的值保持一致 | string | 
path | 模块完整路径 | string | 必填

```javascript
UF.config({
    plugins: [
        'example',
        {
            name: 'mycomponent',
            path: 'http://..to/path/mycomponent.js'
        }
    ]
});
```


### # global

其他一些全局配置。

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | ----
domain | 设置文档域 document.domain，默认为当前页面域名 | string |  | 
[ajax](#/Develop/Config/-global-ajax-) | 覆盖`UF.ajax`默认的配置。当项目中API规范和当前框架定义的API规范不相符时，需要更改 success 或 error 等的处理逻辑；亦或需使用 jsonp 的方式请求数据，皆可在此配置 | object |  | 
[cacheApis](#/Develop/Config/-global-cacheapis-) | 配置声明对接口数据进行缓存，重复调用（url及参数无变化时）直接从缓存中取得。加快获取速度，减小服务器压力。 | string[] |  | 
[mock](#/Develop/Config/-global-mock-) | Mock数据功能配置 | Object[] |  | 
[mockFiles](#/Develop/Config/-global-mockfiles-) | 使用文件进行 Mock数据功能 | String[] |  | 

#### # *global.ajax*

定义 Ajax 全局通用属性/行为。

可更改ajax的默认处理逻辑，例如在发送请求前对参数进行通过处理，返回数据后对数据进行统一格式化。当后端返回数据格式不一时，可以在这里做兼容处理，已适应组件内部使用的统一格式。

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | ----
baseUrl | 如果请求没有加域名端口等前缀，会自动给请求的 url 之前追加 baseUrl | string |  | 
headers | 设置http请求的headers | object | {} | 
data | 请求数据时携带的**`额外参数`**，这里指的是一些和内部逻辑无关的参数，全部请求都会携带。例如`token` | object | 
type | 声明返回的数据格式。可以是：`html`, `xml`, `json`, `jsonp` | string | `json` | 
contentType | 设置请求的`Content-Type`属性，例如 `contentType: 'application/json'` | string |  |
crossOrigin | 设置`cross-origin`请求 | boolean | | 
beforeSend | 发送数据之前，对请求参数进行通用处理。为一个函数，函数返回处理后的ajax参数。函数参数`conf`为当前请求的全部配置参数，例如包含请求的类型等。 | function(conf){return conf;} | | 
handler | 全局数据预处理函数（同通用属性[`source.handler`](#/Params/-source-)的用法），全部请求的返回数据都会先经过此函数处理 | function(data, res, conf){return data;} | | 
success | 请求成功时的回调函数。这里的成功失败不是代码逻辑中的成功还是失败，而是**状态码是否为200**。参数中的`successHandler`和`errorHandler`为代码逻辑中的成功和失败的处理函数，用户可在此根据后端返回数据自定义调用成功还是失败处理逻辑 | function(res, successHandler, errorHandler, config){} | 默认处理逻辑，见 [交互API](#/Api/-uf-ajax-params-) 的 `UF.ajax` 部分 | 
error | 请求失败时的回调函数。同上，为状态码非 200 时的回调函数。见下面示例 | function(res, errorHandler, config){} | | 
complete | 不管请求成功还是失败，都会调用。可以应用于按照REST规范开发的情况 | function | | 
jsonpCallback | 为 JSONP 请求指定回调函数名。这个值将被使用，而不是由reqwest自动生成的随机(但推荐的)名称。 | function | | 

*默认`successHandler`和`errorHandler`调用条件：*

- `successHandler`: 不是指请求成功执行的函数，而是请求的数据符合预期，可以正常使用的处理函数(即 'HTTP Status Code' === 200 && data.status === 0)

- `errorHandler`: 除了请求出错，还有请求不符合预期都会触发error (即 'HTTP Status Code' !== 200 || data.status !== 0)。error有默认的处理逻辑，默认会在右上角展示错误提示信息。如果传入函数，则按照传入的函数执行错误处理


覆盖默认 ajax 处理逻辑的示例：

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

#### # *global.cacheApis*

配置声明对接口数据进行缓存，防止重复请求。重复调用接口（*url及参数无变化时*）时直接从缓存中取得数据。加快获取速度，减小服务器压力。

此功能对用户来说是无感的。用户只需在config中声明进行数据缓存的api列表，在业务中正常调用接口即可。`UF.ajax`和`source`系列属性获取数据均适用。

```javascript
UF.config({
    global: {
        cacheApis: [
            'http://uf.baidu.com/docs/php/data.php'
        ]
    }
});
UF.ajax.get('http://uf.baidu.com/docs/php/data.php', null, data=>{
    console.log('第一次调接口取得数据：', data);
    UF.ajax.get('http://uf.baidu.com/docs/php/data.php', null, data=>{
        console.log('第二次调接口取得数据：', data);
    });
});
```
如示例中，虽然先后调用了两次ajax，但是network中查看只会看到一次请求记录。

> Tips: 如`Table`组件中使用后端分页，如果数据不是实时更新的，也可以开启此功能，查看原来分页的数据即可无需再次请求

#### # *global.mock*

Mock数据功能。

参数为一个数组，数组的每一项代表一个接口，参数如下：

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | ----
url | 接口地址 | string |  | 必填
handler | 接口对应的处理逻辑。handler中调用success并传入数据，则接口处理成功并返回了数据；调用error，则接口返回处理失败 | function (conf, success, error) {} |  | 必填

```javascript
UF.config({
    global: {
        mock: [
            // 示例1：可延迟调用success，模拟数据加载中效果
            {
                url: '/mock/test',
                handler: function (config, success, error) {
                    setTimeout(()=>{
                        success({
                            status: 0,
                            data: 'Mock数据测试'
                        });
                    }, 1000);
                }
            },
            // 示例2：高端用法，可以使用mock功能简化交互。
            // 比如多级级联，后端接口一次性返回全部数据，前端缓存起来。按以往思路，级联需不断获取数据并set给下一级，逻辑不够顺畅。此时即可以使用mock+source，定义几个mock接口，每个级联框绑定一个，各个mock接口分别取数据并返回
            {
                url: '/mock/test2',
                handler: function (config, success, error) {
                    success({
                        status: 0,
                        data: UF.get('cacheData');
                    });
                }
            }
        ]
    }
});
```

#### # *global.mockFiles*

使用mock文件提供Mock数据功能，好处是方便对mock数据进行统一管理，并且方便对mock数据的切换（直接注释不需要的mock文件即可）

参数参考上面的`mock`属性。用法如下：
```javascript
// ./entry.js
UF.config({
    global: {
        mockFiles: [
            'mock/common.js'
        ]
    }
});

// ./mock/common.js
define([
    {
        url: '/mock/test',
        handler: function (config, success, error) {
            setTimeout(()=>{
                success({
                    status: 0,
                    data: 'Mock数据测试'
                });
            }, 1000);
        }
    }
]);
```


#### # data

用于存放一些全局的公用数据，可以直接在组件中使用，或**作为url的动态参数使用** 

和`UF.set('xxx', data.xxx)`效果相同，data里面的数据可以通过`UF.get('xxx')`获取到。

同时，data中的数据还有一个常见用法，即在url中作为动态参数使用。从而可以在全局初始化一个变量作为某些ajax的前缀（或参数），在设置url时可以便捷的使用此变量，例如：

```javascript
// 在入口配置变量
var $uf = window.UF({
    ...
    data: {
        // 使用 ms-common 的接口所需配置
        'ms-common': window.location.origin + '/api/ms-common/'
    }
    ...
});

// 在组件中使用
{
    type: 'select',
    name: 'room-list',
    // 注意 :ms-common，会转化成入口处设置的变量的值
    source: ':ms-common/idc/list/map'
}
```



### # authority

权限点列表。在这里配置了权限点之后，即可在组件配置中使用`authority`属性关联此权限点来控制组件是否渲染。例如只有管理员才会展示的按钮等。

目前因为还没有和PMS对接，所以动态的权限需要后端接口提供。所以，最常用的用法为：在`precondition`中配置一个ajax来获取用户的权限点，然后再次调用`UF.config`更新`authority`属性，如下示例：

```javascript
UF.config({
    authority: {
        admin: false
    },
    precondition: [
        (resolve, reject)=>{
            UF.ajax.get('?api=xxx', null, data=>{
                // data的值为: {admin: true}
                UF.config({
                    authority: data
                });
                resolve();
            });
        }
    ]
});
UF.init({
    type: 'button',
    authority: 'admin',
    content: '审批通过'
}, '#demo');
```

如上示例，admin默认是false，当调用后端接口返回了当前用户的权限点后，重新调用`UF.config`函数更新配置中的权限点。因为是在`precondition`中定义的ajax逻辑，所以获取并更新权限点之前，页面不会进行初始化。

页面初始化时，按钮的`authority`属性关联了全局配置中的名为'admin'的权限点，只有当 admin 为 true 时，审批通过的按钮才会显示出来。

不仅仅初始化时，项目中的任何地方都可以使用权限点做关联，页面渲染之前会进行权限判断，没有权限的节点不会再进行解析和渲染。此功能同样适用与路由组件


### # precondition

`precondition`为预加载函数列表，函数的执行会阻塞页面初始化（`UF.init`函数执行之前执行的异步逻辑），等列表中的函数全部执行完成（调用resolve函数）后才会执行页面初始化。多为调用api获取页面所需的基础数据。

```javascript
precondition: [
    (resolve, reject)=>{
        UF.ajax.get('?api=xxx', null, data=>{
            UF.set('optionSource', data);
            resolve();
        }, error=>{
            reject();
            return true;
        });
    }
]
```