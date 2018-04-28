其他一些使用上的细节说明。

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

