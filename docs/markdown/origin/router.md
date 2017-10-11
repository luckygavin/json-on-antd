*以上 [demo页面](docs/demo/router.php#/card) 的路由部分配置见底部。更多完整示例见 [页面示例](#/Usage/Demo)*

## 何时使用

* 单页应用的入口，用于负责控制整个应用页面跳转。


## 组件&配置

### # router
参数     | 说明           | 类型             | 默认值   |是否必须
--------|----------------|------------------|--------|-----
routes  | 路由的及组件的映射关系对象列表，可以为数组，也可以为单个route对象。详见`route` | `route`&#124;`route`[] | 无    | 必须

#### *route*

描述路由的及组件的映射关系，是 `routes` 中的一项。

参数       | 说明           | 类型             | 默认值   |是否必须
------------|----------------|------------------|--------|-----
path    | URL 中的路径。它会组合父 route 的路径，除非它是从 / 开始的， 将它变成一个绝对路径。 | string  |  无   | 必须
component  | 当前路由对应的组件。它会作为父 route 组件中包含`childrenHolder: true`的组件的子组件渲染。可以直接是一个配置对象；也可以是一个模块名（*懒加载*） | `config` &#124; string  | 无  | 必须
indexRoute    | 当用户在父 route 的 URL 时，indexRoute 允许你为父 route 提供一个默认的 "child" | `route` |   |
childRoutes   | route 可以被嵌套，childRoutes 为子路由配置。 | `route` &#124; `route`[] |   |
getComponent  | 与 component 一样，但是是异步的。用于动态路由 | function(location, cb) { cb(null, Compnent) }  |     |
onEnter    | 当 route 即将进入时调用。 | function(nextState, replaceState, callback?){}  |   |
onLeave    | 当 route 即将退出时调用。 |  |   |

---

*demo中路由部分的配置如下：*

```json
{
    type: 'router',
    routes: [
        {
            path: '/',
            component: App,
            breadcrumbName: '首页',
            indexRoute: {component: Card},
            childRoutes: [
                {path: 'card', breadcrumbName: '卡片', component: Card},
                {path: 'card2', breadcrumbName: '卡片2', component: Card2,
                    childRoutes: [
                        {path: 'card3', breadcrumbName: '卡片3', component: Card3}
                    ]
                }
            ]
        }
    ]
};
```