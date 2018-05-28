每个组件都具有的参数，以及具有特殊功能的参数，没有在各个组件中详细说明，统一在此列出。

## 几个 "通用参数" 的说明

#### # type 
`string`

每个组件都有一个type属性，声明是什么类型的组件，type的格式为中横线连接的小写字母，每个组件文档中的属性列表之前都以组件type命名

例如：[Input 输入框](#/DataEntry/Input)中，共包含四个可用组件，type分别为：input、textarea、input-search、input-group

> 有些组件是和其他组件嵌套组合使用的，例如`input-group`，要以多个`input`组件作为子组件使用，本身只有一个可用属性

#### # content 
`string` | `config`

子组件配置。

会嵌套在当前组件的相应位置（需要组件本身支持嵌套子组件，大部分组件支持）

#### # name 
`string`

每个组件都可以有一个`name`属性，用于作为组件的“唯一标识”，可以通过`UF()`来获取并操作此组件。

> 注意，name不能重复，如重复了后生成的组件会覆盖先生成的组件，导致不能再获取到

#### # configTpl 

配置模板。用于指定复用在`UF.config`函数中定义的`components`属性中定义的通用模板配置。

> 优先级：默认值 < configTpl < 组件本身配置


#### # style 
`object` | `string`

因为底层使用的是React，所以此处建议遵照React的用法：style为一个对象，对象的属性名称使用驼峰命名法
```javascrpit
style: {
    marginTop: '16px',
    fontSize: '12px'
}
```

当然，为了兼容使用习惯，style也可以按照html里的内联样式写法来写，此时style为一个字符
```javascript
style: 'margin-top: 16px; font-size: 12px;'
```

#### # className/class 
`string`

和上面的`style`属性类似，className为React中对于元素的类名的推荐用法，这里推荐使用`className`定义元素的类名
```javascript
{
    type: 'div',
    className: 'my-div'
}
```
为了兼容使用习惯，也可以按照写html时的使用习惯使用class来定义元素类名
```javascript
{
    type: 'div',
    class: 'my-div'
}
```

#### # childrenHolder 
`[boolean] true`

配合路由使用，声明模块所在路由中 子路由对应的组件 会渲染到当前模块的 childrenHolder 所处位置。具体用法可见 [项目开发](#/Develop/Install) 中`app.js`模块的用法


#### # source 系列参数

`string` | `object`

开发时经常会有一些是需要**`异步获取数据`**再展示的，框架提供了一套自动获取数据、处理数据、赋值给某个属性的整套机制。

目前，全部组件都具备获取数据的能力。只需配置 source 参数即可，无需显示的写ajax逻辑，框架自动组件渲染时触发ajax请求。

source 参数可以是字符串，直接声明获取数据的地址，其余参数全部为默认值。  
也可以为一个对象，对象中的各个参数如下：

参数       | 说明           | 类型             | 默认值      
-----------|----------------|------------------|------
url    | 异步获取数据的接口 | string | 
cache    | 开启缓存，重复请求再次获取时会直接从缓存读取 | boolean | false
requestMerge | 开启请求合并（默认），多个重复请求先后同时触发时，会合并成一个请求。具体效果同[UF.ajax](#/Api/requestmerge-)中的示例 | boolean | true
method    | ajax方式：`post`、`get`等 | string | 'get'
params | 请求数据时携带的参数 | object | 
paramsHandler | 请求数据前，对全部参数进行处理。应用场景如：组件自带的 page/size 等参数不符合接口规则，需要格式化 | function(params) {} | 
autoLoad | 组件首次渲染时自动获取数据。默认为true，如果设置成false，则变更params时才会触发获取逻辑 | boolean | true
target | 定义数据处理好后赋值的属性（一般有默认的初始值，除非需要自己定制，否则不需要设置此属性） | string |
handler | 接口数据返回后的处理函数（如果数据无需格式化可以不设置此属性），函数最终返回格式化后的数据。 | function(data, res) {} |
onSuccess | 请求数据成功后的回调函数（与handler的区别是，handler用于处理返回数据，处理完后即执行绑定的默认处理逻辑，onSuccess为默认处理逻辑处理完后执行的额外操作） | function(data, res) {} |
onError | 请求数据失败的回调函数 | function(res) {} |

> * `hanlder`函数的参数：`data`参数为接口返回数据，`res`参数为接口返回的全部内容（按照ajax的[固定规则](#/Api)）。  
> * `target`属性：一些数据录入型组件做了定制(见文档)，例如`select`的target为`options`、`input`等的target为`value`，其他组件默认为`children`/`content`（可以先看是否符合预期在确定是否需定制）


下面为一个使用场景较复杂的`下拉框`实现。

首先`下拉框`的数据为异步获取，其次接口需要的参数不是固定值（从路由处获取到的id），返回数据不符合标准需要额外处理，可以配置如下：

```javascript
// 示例1：
{
    type: 'select',
    source: '/uf/docs/php/data.php',
}
// 示例2：
{
    type: 'select',
    source: {
        url: '/uf/docs/php/data.php',
        params: {},
        hanlder: function (data, res) {
            return data.map(function (v) {
                return {value: v.name, label: v.name};
            }
        },
        onError: null
    },
    beforeCreate: function (props, self) {
        props.source.params = {id: self._root.props.params.id};
        return props;
    }
}
```

组件渲染之前会先执行`beforeCreate`函数（见下面【组件生命周期】），从路由参数中获取 id 赋给 params 属性，配置中的 params 由`{}`变为`{id: 1}`；然后组件渲染完成后，开始异步获取数据；获取数据完成后会先调用`hanlder`对返回的数据进行处理，最后数据会填充到`target`属性定义的组件的`options`上去，就完成了下列框数据异步加载的功能。


#### # api 系列参数

`string` | `object`

日常项目中，难免遇到各种和后端交互的情况：简单到点击某个按钮，会向后端发送一个请求；复杂点的情况，弹框表单用于录入数据，录入完成后把数据提交到后端。

目前，全部组件都具备**`提交数据`**的能力。只需配置 api 参数即可，无需显示的写ajax逻辑，框架自动再某些条件满足时触发ajax请求。

api 参数可以是字符串，直接声明提交数据的地址，其余参数全部为默认值。  
也可以为一个对象，对象中的各个参数如下：

参数       | 说明           | 类型             | 默认值      
-----------|----------------|------------------|------
url    | 提交数据的接口 | string | 
method    | ajax方式 | string | 'post'
params | 提交数据时发送的默认参数（注意：这只是初始化参数。例如和form弹框配合时，会被form的录入的数据覆盖。） | object |
handler | 提交数据前对数据进行处理，函数返回的结果作为ajax的参数发送 | function(params) {} |
trigger | 触发条件。即什么事件触发时，进行api逻辑的执行。例如：`onClick`、`onSubmit` | string | 各个组件默认不同
onSuccess | 提交数据后，成功的回调函数。用法和`ajax`的回调函数一致 | function(data, res) {} |
onError | 提交数据后，失败的回调函数 | function(data, res) {} |

以下为一个具备提交数据功能的简单表单，点击提交时，组件会把表单里的内容全部发送到api指定的接口：
```javascript
// 示例1：
{
    type: 'form',
    layout: {type: 'inline'},
    items: [
        {type: 'input', name: 'name', label: '姓名：'},
        {type: 'button', mode: 'primary', name: 'submit', action: 'submit', content: '提交'}
    ],
    api: 'http://uf.baidu.com/docs/php/submit.php'
}
// 示例2：
{
    type: 'form',
    layout: {type: 'inline'},
    items: [
        {type: 'input', name: 'name', label: '姓名：'},
        {type: 'button', mode: 'primary', name: 'submit', action: 'submit', content: '提交'}
    ],
    api: {
        url: 'http://uf.baidu.com/docs/php/submit.php',
        handler: function (params) {
            return {newName: params.name, age: 18};
        },
        onSuccess: function () {
            UF.message.success('保存成功');
            return false;
        }
    }
}
```
更多使用例子可见 [Modal组件](#/Custom/Modal) 带提交功能的弹框表单


#### # `control` 系列参数

`string` | `object`

日常应用中，经常会用到一个组件事件触发时，调用另一个组件的函数或者改变另一个组件的值的情况。例如带有高级查询功能的一个表格展示页面，当点击高级查询的查询按钮时，把表单里的数据传递给表格并使其刷新。

全部组件都具备**`控制其他组件`**的能力。通过配置 `control` 参数，声明交互方式、操作目标等，无需再显示的写获取组件、操作组件等逻辑，在某些指定的条件下会自动触发指定的操作。

control 参数可以是字符串，直接声明要操作的目标，其余参数全部为默认值。  
也可以为一个对象，对象中的各个参数如下：

参数       | 说明           | 类型             | 默认值      
-----------|----------------|------------------|------
type    | 声明交互方式。可选值为：`call`:函数调用、`assign`:赋值 | string | 默认根据`target`属性为函数还是属性动态变化
trigger    | 触发条件（事件名称）。例如：onClick、onSubmit（Form） | string | 普通组件:`onClick`; 输入型组件:`onChange`; Input为`onPressEnter`; Form、Modal为`onSubmit`
target    | 操作目标。可以为组件暴露的API，或者组件的配置属性 | string | 
params    | 函数调用时传递的参数。*（仅`函数调用`类型可用）* | array | 
handler    | 绑定到事件上的处理逻辑，函数返回的内容作为赋值结果赋值到`target`指定的组件配置上。*（仅`赋值`类型可用）*  | function(...params, target) {} | 普通组件:无返回值; 输入型组件:`组件的当前值`


以上面提到的使用场景为例——带有高级查询功能的一个表格场景：

```javascript
[
    {
        type: 'form',
        layout: {type: 'inline'},
        items: [
            {type: 'input', name: 'name', label: '机房名称：'},
            {type: 'button', mode: 'primary', name: 'submit', action: 'submit', content: '查询'}
        ],
        control: 'newtable.params'
    },
    {
        type: 'table',
        name: 'newtable',
        columns: [
            {title: 'ID', dataIndex: 'id'},
            {title: '机房', dataIndex: 'name'},
            {title: '地区', dataIndex: 'region'},
            {title: '描述', dataIndex: 'description'}
        ],
        source: 'http://uf.baidu.com/docs/php/data.php',
        params: {}
    }
]
```
示例中，首先配置了两个独立的组件：form、table，然后给form组件额外配置了一个`control`属性，属性值指向了 name 为'newtable'的组件的'params'属性。组件判断目标是一个组件配置属性，所以默认type为`assign`，即进行赋值操作。table的params更新后，会自动触发自己的刷新功能，重新拉取数据，并携带上刚刚设置好的params参数。
