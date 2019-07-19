
如[开始使用](#/Usage/Install)中以及后面demo一直使用的`UF.init()`为一些在UF中事先定义好的函数，这里我们做详细的罗列解释

## # UF

UF 为整个框架的入口，全部组件使用都依赖于这个`UF`。UF 函数具有两种完全不同的用法.

#### `1、产生 $uf 实例`：

首先说最基础用法，即可以使用UF函数产生一个$uf实例，后面的全部操作都使用这个$uf实例完成。当一个页面上同时出现两块互不相干的模块时，可以通过使用不同的实例做到两个模块完全独立，包括`$uf.config()`对uf做到初始化获取组件等操作。

```javascript
var $uf = window.UF({
    name: "myUf",
    global: {},
    components: {}
})
```

#### `2、本身也是一个实例`：

为了方便使用，整个UF本身也是一个名为`_$default`的实例，所以可以在UF上使用实例具有的全部方法，平时使用也无需再对UF进行实例化。

** *后面所说的UF的含义，实际上也全部为此默认实例上的方法。* **

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


## # UF.unrender()

`UF.unrender(target/targetSelector)`

用于主动销毁通过`UF.render`或`UF.init`渲染到页面上的组件，直接移除页面上的dom元素不会触发页面上的组件销毁


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

## # UF.getRouter()

随时随地获取当前页面的路由信息。

函数返回值为一个对象，包含两个参数：`params`、`detials`。

> `params`为路由上传入的参数，如上如果多个参数，则params内包含多项；  
> `detials`为包括params在内的更多路由信息，比如当前路由路径的

具体用法可见，[示例](#/Others/-2-)

## # UF.ajax(params)

Ajax 获取数据。`params` 为一个对象，属性列表如下：

参数 | 说明 | 类型 | 默认值 
---- | ---- | ----- | -----
url | ajax接口地址。（支持包含动态参数，如：`/update/:id`，详见下面介绍） | string |  
method | 默认数据请求方式 | string | `GET` 
cache | 开启缓存（刷新页面失效），重复请求再次获取时会直接从缓存读取 | boolean | false 
localStorage | 开启永久缓存（localStorage），当再次访问接口时，优先查找缓存内容。详见下面介绍 | boolean &#124; string | false 
requestMerge | 开启请求合并，多个重复请求先后同时触发时，会合并成一个请求。可见下面[例子](#/Api/requestmerge-) | boolean | true 
params | 发送的参数体，可以是一个 JOSN对象 或一个 query串 | object &#124; string | 
paramsHandler | 请求数据前，对全部参数进行处理。应用场景如：组件自带的 page/size 等参数不符合接口规则，需要格式化 | function(params) {} |
interrupt | 中断请求的钩子函数。具体用法见下面介绍 | function(conf) {} |
type | 声明返回的数据格式。可以是：`html`, `xml`, `json`, `jsonp` | string | `json` 
useAxios | 改为使用`axios`库进行ajax请求 | boolean | false 
success | 成功时的处理逻辑 | function(data, res){} |  
error | 失败时的处理逻辑 | function(res){} | 默认处理逻辑，见如下说明 
complete | 不管请求成功还是失败，都会调用。可以应用于按照REST规范开发的情况 | function | 
onchange | 请求开始/结束时执行。可以用于绑定 loading 状态 | function | 

更多参数可见 [全局配置](#/Develop/Config/-global-ajax-) 的`global.ajax`部分中的属性参数

**注意：**

* **`url`**: url字符串中，可以类似路由声明一样定义一些动态参数，例如：`/update/:id`，`:id`为动态内容，动态内容的值来自于同级的`params`参数中。同时，在`params`取值后，params中的相应字段会被删除。

* **`success`**: 不是指请求成功执行的函数，而是请求的数据符合预期，可以正常使用的处理函数(即 'HTTP Status Code' === 200 && data.status === 0)

* **`error`**: 除了请求出错，还有请求不符合预期都会触发error (即 'HTTP Status Code' !== 200 || data.status !== 0)。error有默认的处理逻辑，默认会在右上角展示错误提示信息。如果传入函数，则按照传入的函数执行错误处理。  
> 如果error执行完返回true，则会继续执行默认的error处理函数。更多说明可见：[更多用法
](#/Others/-ajax-error-)

* **`onchange`**: 请求开始/结束时执行。可以用于绑定 loading 状态：  
> * 开始执行请求时执行 onchange 参数为 (true, 'sending')
> * 请求完成时执行 onchange 参数为 (false, 'success'/'error')

* **`interrupt`**: 中断请求的钩子函数。可以当符合某些条件时中断请求，执行自定义处理：
> * 可以通过返回数据，中断请求，从而使用钩子返回的数据；
> * 如果钩子未返回任何内容，或返回true，则请求继续；
> * 如果钩子返回false，则仅中断请求，不做任何处理；

* **`localStorage`**: 开启永久缓存（localStorage）：
> * 当再次访问接口时，优先查找缓存内容，并执行一次success，同时发起ajax请求；当ajax请求的数据获取回来后，会再次执行success逻辑，并更新缓存。  
> * 当参数为一个字符串时，会对缓存的key进行加盐处理，使当传入不同字符串时缓存失效


**接口返回值格式为：**
```json
success: {status: 0, data: [{}]}
error:   {status: 1, msg: 'error'}
```

##### requestMerge使用效果展示：
```javascript
let count = 0;
let getData = ()=>{
    let cur = ++count;
    UF.ajax({
	    url: 'http://uf.baidu.com/docs/php/data.php',
	    params: {page: 1, size: 1},
	    success(data) {
	        console.log(`第${cur}次调接口取得数据：`, data);
	    }
	});
}
getData();
getData();
getData();
setTimeout(()=>{
    getData();
}, 1000);
```
以上demo中，先后调用了四次ajax获取数据函数。先是连续调用了3次，第2次、第3次调用时，由于前一个相同的ajax还没完成，所以后两次调用合并到了第一次的请求逻辑中（network中只有一条GET记）。当ajax执行完成后，三次调用各自的成功逻辑依次被执行了。  
延迟1s后执行第4次调用，此时前面的请求已经执行完成，所以这次会重新发起请求。network上展示了第二条GET记录

#### 快捷用法：

#### **UF.ajax.get(url, params, success, error, onchange)**

以 GET 的方式发送数据。参数不再是一个对象，而是一个列表，除了url，其他参数可不填。

#### **UF.ajax.post(url, params, success, error, onchange)**

以 POST 方式发送数据。


## # UF.config()

全局配置。具体用法见 [全局配置](#/Develop/Config)


## # UF.load()

载入自定义组件。如果已有组件不能满足日常开发，也支持使用 React 开发的自定义组件，在使用前把自定义组件加载到组件库中，即可和其他组件一样使用。

```javascript
UF.load({mycomponent: window.myComponet})
UF.init({
    type: 'mycomponent'
}, '#test');
```

> 另一种加载自定义组件的方法见：[`plugins`](#/Develop/Config/-plugins)


## # UF.message()

用于全局展示操作反馈信息。详见 [Message 全局提示](#/Feedback/Message)

## # UF.notification()

用于全局展示通知提醒信息。详见 [Notification 通知提醒框](#/Feedback/Notification)


## # UF.moment()

时间处理工具，可以用于做时间格式的各种转化、时间的加减法操作、验证等。具体可见：[Moment](http://momentjs.cn/docs/#/parsing/)、 [操作](http://momentjs.cn/docs/#/manipulating/)

例如：`UF.moment(1508294887034).format('YYYY-MM-DD hh:mm:ss')`、`UF.moment(1508294887034).add(7, 'days')`


## # UF.utils

工具函数。包含`typeof`、`uniqueId`、`hash`、`copy`、`clone`、`merge`、`filter`等。详见[`工具函数`](#/Utils)


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

如果有key，则返回key的值；如果没有key，则返回全部参数。

> key 可以有层级，例如：`component.get('source.params')`可以获取组件的 source.params 配置

例如 [Progress 进度条](#/Feedback/Progress) 第5个demo：

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

重新设置组件的参数。

#### 用法1:

`component.set(object)` 

适用于更新多个参数的情况，只传一个options，options为一个对象，为待更新的组件属性

#### 用法2:

`component.set(target, value)` 

适用于更新一个参数的情况，target为一个字符串，指明组件的一个属性(可以是一个深层属性，用法类似`UF.set`)，value为属性的值


## # component.hide()

`component.hide()`可以隐藏组件。


## # component.show()

`component.hide()`可以重新展示组件。

## # component.remove()

`component.remove()`彻底移除组件，同样可以通过`show`重新展示回来。


## # component.reload()

`component.reload()`可以控制组件重新获取数据（和`source`属性配合）。

## # component.refresh()

`component.refresh()`刷新组件。

## # component.loading()

`component.loading([boolean|config])`可以控制组件是否展示loading效果。

参数有如下几种情况：

* 不传参时，认为传入的是`true`，即展示loading；  
* 传入`false`时，则取消loading状态；
* 传入一个对象时，认为是展示loading状态，并把对象作为loading的配置传给`Loading`组件



**此外，组件本身具有的api可到组件文档页查询**
