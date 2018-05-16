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

开发时难免会有一些数据是需要异步获取再展示的，框架提供了一套自动获取数据并处理的机制。

* **`source`** - 异步获取数据的接口
* **`sourceHandler`** - 接口数据返回后的处理函数（如果数据无需格式化可以不设置此属性）  
函数的参数`sourceHandler(data, res)`，其中`data`参数为接口返回数据，`res`参数为接口返回的全部内容（按照ajax的[固定规则](#/Api)）。函数最终返回格式化后的数据。
* **`sourceTarget`** - 定义数据处理好后赋值的属性（一般有默认的初始值，除非需要自己定制，否则不需要设置此属性）  
一些数据录入型组件做了定制(见文档)，例如`select`的target为`options`、`input`等的target为`value`，其他组件默认为`children`/`content`（可以先看是否符合预期在确定是否需定制）
* **`sourceMethod`** - `post`、`get`方式
* **`sourceParams`** - 请求数据时附带的的参数对象


下面为一个使用场景较复杂的`下拉框`实现。

首先`下拉框`的数据为异步获取，其次接口需要的参数不是固定值（从路由处获取到的id），返回数据不符合标准需要额外处理，可以配置如下：

```javascript
{
    type: 'select',
    source: '/uf/docs/php/data.php',
    sourceParams: {},
    // sourceTarget: 'options', // 默认值
    sourceHandler(data, res, self) {
        return data.map(v=>{
            return {value: v.name, label: v.name};
        });
    },
    beforeCreate(props, self) {
        props.sourceParams = {id: self._root.props.params.id};
        return props;
    }
}
```

组件渲染之前会先执行`beforeCreate`函数（见下面【组件生命周期】），从路由参数中获取 id 赋给 sourceParams 属性，配置中的 sourceParams 由`{}`变为`{id: 1}`；然后组件渲染完成后，开始异步获取数据；获取数据完成后会先调用`sourceHandle`对返回的数据进行处理，最后数据会填充到`sourceTarget`属性定义的组件的`options`上去，就完成了下列框数据异步加载的功能。


#### # action 系列参数


#### # api 系列参数

`string` | `object`

日常项目中，难免遇到各种和后端交互的情况：简单到点击某个按钮，会向后端发送一个请求；复杂点的情况，弹框表单用于录入数据，录入完成后把数据提交到后端。

目前，全部组件都具备提交数据的能力。只需配置 api 参数即可，无需显示的写ajax逻辑，框架自动再某些条件满足时触发ajax请求（需配合上面的 action 系列参数使用）。

api 参数可以是字符串，直接声明提交数据的地址，其余参数全部为默认值。  
也可以为一个对象，对象中的各个参数如下：

参数       | 说明           | 类型             | 默认值      
-----------|----------------|------------------|------
url    | 提交数据的接口 | string | 
method    | ajax方式 | string | 'post'
params | 提交数据时发送的默认参数（注意：这只是初始化参数。例如和form弹框配合时，会被form的录入的数据覆盖。） | object
handler | 提交数据前对数据进行处理，函数返回的结果作为ajax的参数发送 | function(params) {}
onSuccess | 提交数据后，成功的回调函数。用法和`ajax`的回调函数一致 | function(data, res) {}
onError | 提交数据后，失败的回调函数 | function(data, res) {}
