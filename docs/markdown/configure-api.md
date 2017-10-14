
如[快速上手](#/Install)中使用的`UF.init()`为一些在UF中事先定义好的函数，这里我们做详细的罗列解释

## # UF

UF 为整个框架的入口，全部组件使用都依赖于这个`UF`。可以类比为jQuery的`$`符号  

UF本身为一个函数，可以通过UF函数查到到指定name的组件。例如 [Button 按钮](#/General/Button) 的demo里面，点击展示按钮loading的例子中：

```javascript
{
    "type": "button",
    "name": "my-button1",
    "mode": "primary",
    "content": "Click me!",
    "onClick": function onClick(v) {
        return UF('my-button1').set({
            loading: true
        });
    }
}
```
其中 `UF('my-button1')` 即为查找 name 为 my-button1 的组件，即为本身。


** *同时 UF 上还提供了一些函数，用法如下：* **  


## # UF.init()

`UF.init(config, targetId)`

包含两个参数：第一个参数为组件配置，第二个参数为页面上目标元素的id

函数用来把配置初始化为组件，并渲染到页面上。用法如下：
```javascript
var config = {
    "type": "button",
    "mode": "primary",
    "content": "Primary"
};
UF.init(config, 'demo');
```
还有一种用法是不传递第二个参数，则组件生成后不会渲染到页面上，而是返回生成的组件。例如 [DataPicker 日期选择框](#/DataEntry/DatePicker) 的第三个demo的用法，renderExtraFooter 参数要求为一个函数，函数返回一个组件：
```javascript
var config = {
    "type": "date-picker",
    "renderExtraFooter": function() {
        return UF.init({
            type: 'button',
            content: '额外的页脚'
        });
    }
};
UF.init(config, 'demo');
```

## # UF.ajax(params)

Ajax 获取数据。params 参数如下：

```json
{
    url: url,
    method: 'get',
    data: params,
    type: 'json',
    success: function(){},
    error: function(){},
    onchange: function(){}
}
```
`data`: 需要发送的参数对象
`success`: 不是指请求成功执行的函数，而是请求的数据符合预期，可以正常使用的处理函数(即 'HTTP Status Code' === 200 && data.status === 0)  
`error`: 除了请求出错，还有请求不符合预期都会触发error (即 'HTTP Status Code' !== 200 || data.status !== 0)。error有默认的处理逻辑，默认会在右上角展示错误提示信息。如果传入函数，则按照传入的函数执行错误处理
>  tips: 如果error执行完返回true，则会继续执行默认的error处理函数       

`onchange`: 请求开始/结束时执行。可以用于绑定 loading 状态     
>  开始执行请求时执行 onchange 参数为 (true, 'sending')  
>  请求完成时执行 onchange 参数为 (false, 'success'/'error')  

*接口返回值为：*
```json
success:
{
    status:0,
    data:{}
}
error:
{
    status: 1,
    msg: 'error'
}
```

## # UF.config()

全局配置。具体用法见 [全局配置](#/Develop/Config)


## # UF.load()

载入自定义组件。如果已有组件不能满足日常开发，也支持使用 React 开发的自定义组件，在使用前把自定义组件加载到组件库中，即可和其他组件一样使用。

> 注意：配置中使用的type为`-`连接命名，实际配置的组件为`Pascal`命名，框架内部会做转换。(例如：加入一个自定义组件`UF.load({MyComponent: window.myComponet})`，配置中使用的type为`my-component`)。也可以通过这种方式覆盖原生的组件。


## # UF.message()

用于全局展示操作反馈信息。详见 [Message 全局提示](#/Feedback/Message)

## # UF.notification()

用于全局展示通知提醒信息。详见 [Notification 通知提醒框](#/Feedback/Notification)


---  
** *component 为通过`UF()`获取的组件实例。以下为实例的一些API：* **  

---

## # component.get()  

`component.get(key)`获取组件的参数。  

如果有key，则返回key的值；如果没有key，则返回全部参数。例如 [Progress 进度条](#/Feedback/Progress) 第5个demo：  

```javascript
var config = [
    {
        "type": "progress",
        "mode": "circle",
        "name": "my-progress",
        "percent": 10
    },
    {
        "type": "button-group",
        "content": [
            {
                "type": "button",
                "icon": "minus",
                "onClick": function(v) {
	                var progress = UF('my-progress');
	                var current = progress.get('percent');
	                progress.set({
	                    percent: current - 10
	                });
	            }
            }
        ]
    }
];
UF.init(config, 'demo');
```
点击减号时，`progress.get('percent')`即为获取 my-progress 的percent值，并重新给组件设置新的值。


## # component.set()  

`component.set(object)`重新设置组件的参数。object 为组件的参数列表。用法如上面的demo中用法。

