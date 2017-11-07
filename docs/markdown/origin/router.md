*以上 [demo页面](docs/demo/router.php#/card) 的路由部分配置见底部。更多完整示例见 [页面示例](#/Usage/Demo)*

## 何时使用

* 单页应用的入口，用于负责控制整个应用页面跳转。


## 组件&配置

### # router
参数     | 说明           | 类型             | 默认值   |是否必须
--------|----------------|------------------|--------|-----
routes  | 路由的及组件的映射关系对象列表，可以为数组，也可以为单个route对象。详见`route` | `route`&#124;`route`[] | 无    | 必须
history  | 定义浏览器上的路由展现形式，分为两种：`hashHistory` - 默认形式，路由为`#`后面的值，使用起来较方便； `browserHistory` - 高级用法，会去掉`#`，展现形式像是真正的url，需要服务端配合使用，可参考 [这里](http://react-china.org/t/react-router-hashhistory-browserhistory/6799) | string | `'hashHistory'` |


#### *route*

描述路由的及组件的映射关系，是 `routes` 中的一项。

参数       | 说明           | 类型             | 默认值   |是否必须
------------|----------------|------------------|--------|-----
path    | URL 中的路径。它会组合父 route 的路径，除非它是从 / 开始的， 将它变成一个绝对路径。 | string  |  无   | 必须
to    | 从当前路径（path）重定向到另一个路径。**此属性不可和`component`同时使用**（因为一个是解析路由，一个是重定向路由）。例如：访问`/mine`路由时重定向到`/aboutme` |  string  |  无   | 
component  | 当前路由对应的组件。它会作为父 route 组件中包含`childrenHolder: true`的组件的子组件渲染。可以直接是一个配置对象；也可以是一个模块名（*懒加载*）。**此属性不可和`to`同时使用** | `config` &#124; string  | 无  | 必须
indexRoute    | 当用户在父 route 的 URL 时，indexRoute 允许你为父 route 提供一个默认的 "child" | `route` |   |
indexRedirect    | 自动从当前路由重定向到其子路由的 path。例如：访问首页`/`时，自动重定向到`/Home`，即可在配置`/`路由那一层增加 indexRedirect 字段 | string |   |
childRoutes   | route 可以被嵌套，childRoutes 为子路由配置。 | `route` &#124; `route`[] |   |
getComponent  | 与 component 一样，但是是异步的。用于动态路由 | function(location, cb) { cb(null, Compnent) }  |     |
onEnter    | 当 route 即将进入时调用。 | function(nextState, replaceState, callback?){}  |   |
onLeave    | 当 route 即将退出时调用。 |  |   |
breadcrumbName    | 供面包屑组件使用，见 [Breadcrumb](#/Navigation/Breadcrumb) | string |   |
breadcrumbIcon    | 供面包屑组件使用，见 [Breadcrumb](#/Navigation/Breadcrumb) | string |   |

> 更详细配置可参考原 [react-router](https://react-guide.github.io/react-router-cn/)

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