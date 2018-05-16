
如[开始使用](#/Usage/Install)中以及后面demo一直使用的`UF.init()`为一些在UF中事先定义好的函数，这里我们做详细的罗列解释

## # UF

UF 为整个框架的入口，全部组件使用都依赖于这个`UF`。可以类比为jQuery的`$`符号

UF本身为一个函数，可以通过UF函数查到到指定name的组件。例如 [Button 按钮](#/General/Button) 的demo里面，点击展示按钮loading的例子中：

```javascript
{
    type: "button",
    name: "my-button1",
    mode: "primary",
    content: "Click me!",
    onClick: function onClick(v) {
        return UF('my-button1').set({
            loading: true
        });
    }
}
```
其中 `UF('my-button1')` 即为查找 name 为 my-button1 的组件，即为本身。


** *同时 UF 上还提供了一些函数，用法如下：* **


## # UF.init()

`UF.init(config/string, target/targetSelector)`

包含两个参数：
- 第一个参数为组件配置，如果为一个配置对象，则直接解析；如果为字符串，则认为是一个未加载的模块，[加载模块](#/Develop/Modules)并进行渲染
- 第二个参数为页面上目标元素或目标元素选择器

函数用来把配置初始化为组件，并渲染到页面上。用法如下：
```javascript
var config = {
    type: "button",
    mode: "primary",
    content: "Primary"
};
UF.init(config, '#demo');
```
还有一种用法是不传递第二个参数，则组件生成后不会渲染到页面上，而是返回生成的组件。例如 [DataPicker 日期选择框](#/DataEntry/DatePicker) 的第三个demo的用法，renderExtraFooter 参数要求为一个函数，函数返回一个组件：
```javascript
var config = {
    type: "date-picker",
    renderExtraFooter: function() {
        return UF.init({
            type: 'button',
            content: '额外的页脚'
        });
    }
};
UF.init(config, '#demo');
```

注意：
> 如果`UF.config`中配置了如`precondition`会阻塞页面加载的属性，`UF.init`函数会在其执行完成后再执行。
> 会先清空目标元素，然后把新组件渲染上去


## # UF.render()

`UF.render(config, target/targetSelector)`

作用和`UF.init`函数类似，也是渲染某个配置到页面上，不过不受config中配置的一些延迟因素影响，会直接渲染组件。


## # UF.append()

`UF.append(config, target/targetSelector)`

也是用来渲染组件，与上面两个函数的不同点在于，是在目标元素上追加一个组件，不会清空原目标元素。

函数会返回一个对象，包含两个属性，`element`、`destroy`，element 为为了承载新增的组件而创建的标签，destroy 为一个函数，用来销毁新增的标签。详细用法可见 [Modal示例](#/Custom/Modal)


## # UF.set()

`UF.set(string, data)`

存储数据。可以使用UF上的set函数来存储任何数据，并可以在任何地方通过`UF.get`获取。

## # UF.get()

`UF.get(string)`

获取数据。可以使用UF上的`set`函数来存储任何数据，并可以在任何地方通过`UF.get`获取。

例如：

```javascript
let list = [0, 1, 2, 3];
UF.set('test.list', list);
console.log(UF.get('test.list'));
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

更多参数可见 [全局配置](#/Develop/Config) 的 *`ajax`* 部分


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
*快捷用法：*

#### UF.ajax.get(url, params, success, error, onchange)
以 GET 的方式发送数据。参数不再是一个对象，而是一个列表，除了url，其他参数可不填。

#### UF.ajax.post(url, params, success, error, onchange)
以 POST 方式发送数据。


## # UF.config()

全局配置。具体用法见 [全局配置](#/Develop/Config)


## # UF.load()

载入自定义组件。如果已有组件不能满足日常开发，也支持使用 React 开发的自定义组件，在使用前把自定义组件加载到组件库中，即可和其他组件一样使用。

> 注意：配置中使用的type为`-`连接命名，实际配置的组件为`Pascal`命名，框架内部会做转换。(例如：加入一个自定义组件`UF.load({MyComponent: window.myComponet})`，配置中使用的type为`my-component`)。也可以通过这种方式覆盖原生的组件。


## # UF.message()

用于全局展示操作反馈信息。详见 [Message 全局提示](#/Feedback/Message)

## # UF.notification()

用于全局展示通知提醒信息。详见 [Notification 通知提醒框](#/Feedback/Notification)


## # UF.moment()

时间处理工具，可以用于做时间格式的各种转化、时间的加减法操作、验证等。具体可见：[Moment](http://momentjs.cn/docs/#/parsing/)、 [操作](http://momentjs.cn/docs/#/manipulating/)

例如：`UF.moment(1508294887034).format('YYYY-MM-DD hh:mm:ss')`、`UF.moment(1508294887034).add(7, 'days')`


## # UF.utils

工具函数。包含`typeof`、`uniqueId`、`hash`、`copy`、`clone`、`merge`、`filter`等。


---
** *component 为通过`UF()`获取的组件实例。以下为实例的一些API：* **

---

## # component._root

每个组件都有`_root`属性，可以通过此属性来获取当前模块的参数信息，访问到从模块之外传递给模块的参数，例如：路由信息，路由参数等等。

多使用其中的`_root.props`参数，例如获取当前页面的路由信息：

```javascript
component._root.props.routes
component._root.props.location
component._root.props.params
...
```

## # component.get()

`component.get(key)`获取组件的参数。

如果有key，则返回key的值；如果没有key，则返回全部参数。例如 [Progress 进度条](#/Feedback/Progress) 第5个demo：

```javascript
var config = [
    {
        type: "progress",
        mode: "circle",
        name: "my-progress",
        percent: 10
    },
    {
        type: "button-group",
        content: [
            {
                type: "button",
                icon: "minus",
                onClick: function(v) {
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
UF.init(config, '#demo');
```
点击减号时，`progress.get('percent')`即为获取 my-progress 的percent值，并重新给组件设置新的值。


## # component.set()

`component.set(object)`重新设置组件的参数。object 为组件的参数列表。用法如上面的demo中用法。

> tips： 需要注意的一点是，部分属性是一次性的，例如声明周期函数`afterCreate`、`source`系列属性等，一旦组件渲染完成，再次调用`set`函数设置新值不会生效。


## # component.hide()

`component.hide()`可以隐藏组件。


## # component.show()

`component.hide()`可以重新展示组件。

**此外，组件本身具有的api可到组件文档页查询**