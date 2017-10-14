其他一些使用上的细节说明。

## 几个 "通用属性" 的说明

#### # type 属性
`string`

每个组件都有一个type属性，声明是什么类型的组件，type的格式为中横线连接的小写字母，每个组件文档中的属性列表之前都以组件type命名

例如：[Input 输入框](#/DataEntry/Input)中，共包含四个可用组件，type分别为：input、textarea、input-search、input-group

> 有些组件是和其他组件嵌套组合使用的，例如`input-group`，要以多个`input`组件作为子组件使用，本身只有一个可用属性

#### # content 属性
`config`

子组件配置。

会嵌套在当前组件的相应位置（需要组件本身支持嵌套子组件，大部分组件支持）

#### # asyncContent 属性
`string`: url

子组件为异步模块。

子模块的配置会在使用的时候再异步的去请求，然后解析。

> 如果有 asyncContent 属性，则 content 无效，最终展示结果按请求返回的配置展示。

#### # name 属性
`string`

每个组件都可以有一个`name`属性，用于作为组件的“唯一标识”，可以通过`UF()`来获取并操作此组件。

> 注意，name不能重复，如重复了后生成的组件会覆盖先生成的组件，导致不能再获取到

#### # style 属性
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

#### # className/class 属性
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


#### # childrenHolder 属性

配合路由使用，声明模块所在路由中 子路由对应的组件 会渲染到当前模块的 childrenHolder 所处位置。具体用法可见 [项目开发](#/Develop/Install) 中`app.js`模块的用法


## html 组件

`type`为`html`的组件，只有`content`属性，content为一段html代码。为了方便大块自定义内容


## 引入自定义组件

`UF.load()`

如果已有组件及配置实在无法支持当前的业务逻辑，也可以某一部分使用React进行开发，然后作为一个新自定义组件引入到项目中使用。具体用法请联系 [liuzechun](baidu://message/?id=861260447)


## 组件生命周期

配置中的每个组件从创建到销毁都具有一个生命周期，如果想要把某些逻辑和组件的生命周期相关联，则可以配置如下函数：

* `beforeRender`: 组件渲染之前执行
* `afterRender`: 组件渲染后
* `afterUpdate`: 组件刷新后执行
* `beforeDestroy`: 组件销毁前执行

例如，可以在下拉列表加载后，向后端获取下拉列表中展示的数据：
```javascript
{
    type: 'select',
    afterRender: function(select) {
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

