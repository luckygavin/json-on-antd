
显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 组件&配置

### # breadcrumb

 参数      | 说明                              | 类型              |  可选值 | 默认值 
-----------|-----------------------------------|-----------------|---------|--------
separator | 分隔符自定义                      | string &#124; `config` |         | '/'    
itemRender | 自定义链接函数，和 `items属性`/`Router` 配合使用 | (route, params, items, paths) => `{...config}` | |
items | 自定义内容。值为一个数组，数组的每一项包含两个值，如：`[{path: 'index', breadcrumbName: 'Home'}]` | array |  |


***可配合[`Router`](#/General/Router)使用***

需在`Router`的各项配置中增加`breadcrumbName`作为面包屑展示的名称，可以配置`breadcrumbIcon`作为面包屑名称前面的图标。

当某一层级的路由没有配置 `breadcrumbName` 和 `breadcrumbIcon`，则会在面包屑中把这一层过滤掉

和 `Router` 配合使用能满足大部分应用场景，所以一般不使用`items`属性。

所以使用面包屑时的配置很简单，如下：

```javascript
{
    type: 'breadcrumb'
}
```