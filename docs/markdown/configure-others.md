其他一些使用上的细节说明。

## 几个 "通用参数" 的说明

#### # type 
`string`

每个组件都有一个type属性，声明是什么类型的组件，type的格式为中横线连接的小写字母，每个组件文档中的属性列表之前都以组件type命名

例如：[Input 输入框](#/DataEntry/Input)中，共包含四个可用组件，type分别为：input、textarea、input-search、input-group

> 有些组件是和其他组件嵌套组合使用的，例如`input-group`，要以多个`input`组件作为子组件使用，本身只有一个可用属性

#### # content 
`config`

子组件配置。

会嵌套在当前组件的相应位置（需要组件本身支持嵌套子组件，大部分组件支持）

#### # name 
`string`

每个组件都可以有一个`name`属性，用于作为组件的“唯一标识”，可以通过`UF()`来获取并操作此组件。

> 注意，name不能重复，如重复了后生成的组件会覆盖先生成的组件，导致不能再获取到

#### # configTpl 

配置模板。用于指定复用在`UF.config`函数中定义的`components`属性中定义的通用模板配置。


#### # style 
`object` | `string`

因为底层使用的是React，所以此处建议遵照React的用法：style为一个对象，对象的属性名称使用驼峰命名法
```javascrpit
style: {
    marginTop: '16px',
    fontSize: '12px'
}
```

当然，为了方便使用，style也可以按照html里的内联样式写法来写，此时style为一个字符
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
为了方便使用，也可以按照写html时的使用习惯使用class来定义元素类名
```javascript
{
    type: 'div',
    class: 'my-div'
}
```

#### # childrenHolder 

配合路由使用，声明模块所在路由中 子路由对应的组件 会渲染到当前模块的 childrenHolder 所处位置。具体用法可见 [项目开发](#/Develop/Install) 中`app.js`模块的用法


#### # source 系列参数

开发时难免会有一些数据是需要异步获取再展示的，框架提供了一套自动获取数据并处理的机制。

* **`source`** - 异步获取数据的接口
* **`sourceHandler`** - 接口数据返回后的处理函数（如果数据无需格式化可以不设置此属性）  
函数的参数`sourceHandler(data, res)`，其中`data`参数为接口返回数据，`res`参数为接口返回的全部内容（按照ajax的[固定规则](#/Usage/Api)）。函数最终返回格式化后的数据。
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


## html 组件

`type`为`html`的组件，`content`属性为一段html代码。为了方便大块自定义内容。

html代码会被一个`<section>`标签包裹，为了方便定义样式，html 组件还支持`style``className`属性，自定义外层样式。



## 引入自定义组件

`UF.load()`

如果已有组件及配置实在无法支持当前的业务逻辑，也可以某一部分使用React进行开发，然后作为一个新自定义组件引入到项目中使用。具体用法请联系 [liuzechun](baidu://message/?id=861260447)


## 组件生命周期

配置中的每个组件从创建到销毁都具有一个生命周期，如果想要把某些逻辑和组件的生命周期相关联，则可以配置如下函数：

* `beforeCreate`: 组件生成到页面之前执行
* `afterCreate`: 组件生成到页面之后执行
* `beforeRender`: 组件每次刷新之前执行（包括首次生成）
* `afterRender`: 组件每次刷新之后执行（包括首次生成）
* `beforeDestroy`: 组件销毁前执行

例如，可以在下拉列表加载后，向后端获取下拉列表中展示的数据：
```javascript
{
    type: 'select',
    afterCreate: function(select) {
        UF.ajax({
            url: '/uf/docs/php/data.php',
            success: function(data) {
                var options = data.map(function(v) {
                    return {value: v.name, label: v.name};
                });
                select.set({options});
            }
        });
    }
}
```

**两个`before`函数是在组件渲染/刷新之前执行，所以可以用于对参数进行修改**

* beforeCreate(params)
* beforeRender(params)

`params`为组件现有参数（包含配置的和默认的参数）。可以根据需要变更参数然后把新的`return`。

例如，可以在组件渲染前，把组件的 title 改为路由传入的值。

```javascript
{
    type: 'card',
    name: 'my-card',
    title: '标题可以跟着路由变化：/card2/card3/标题',
    loading: true,
    beforeCreate(params, self) {
        params.title = self._root.props.params.title || params.title;
        return params;
    }
}
```

> 注意：`beforeRender`触发次数较多，注意不要造成性能问题


**关于生命周期函数的参数**

为了方便使用，生命周期函数的参数中，全部在最后追加了一个参数，为组件自身，可以在函数中用来调用组件自身的`set`、`get`函数等，无需再写获取当前组件的逻辑。

例如上面`beforeCreate`的示例代码，`self`和`UF('my-card')`等价。

> tips： 有些组件的参数较多，可以先使用`console.log`打印出来确认，再使用

## 关于组件中获取 路由信息 等数据

每个组件都有`_root`属性，可以通过此属性获取当前模块的参数信息，包含有路由，路由上的参数等。见：[组件交互](#/Usage/Api)。



