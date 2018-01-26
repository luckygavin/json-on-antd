
为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

更多布局和导航的使用可以参考：[Layout 布局](#/General/Layout)。

## 组件&配置

### # menu

| 参数     | 说明           | 类型     | 默认值       |
|----------|---------------|----------|--------------|
| theme    | 主题颜色 | string: `light` `dark` | `light` |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | string: `vertical` `horizontal` `inline` | `vertical` |
| selectedKeys | 当前选中的菜单项 key 数组 | string[] |      |
| items | 菜单项列表，定义菜单都包含哪些值，为一个对象数组，见`items` | items[] |  |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | string[] |      |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | string[] |  |
| defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组 |  |      |
| onOpenChange | SubMenu 展开/关闭的回调 | function(openKeys: string[]) | noop |
| onSelect | 被选中时调 | function({ item, key, selectedKeys }) | 无   |
| onDeselect | 取消选中时调用，仅在 multiple 生效 | function({ item, key, selectedKeys }) | - |
| onClick | 点击 MenuItem 调用此函数  | function({ item, key, keyPath }) | - |
| style | 根节点样式 | object | |
| inlineIndent | inline 模式的菜单缩进宽度 | number | 24 |
| multiple | 是否允许多选 | boolean | false |
| inlineCollapsed | inline 时菜单是否收起状态 | boolean | - |
| selectable | 是否允许选中 | boolean | true |
| followRoute | 是否跟随路由自动高亮对应项。需和`items`中的`key`值配合使用 | boolean | true |


#### *items*

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled  | 是否禁用 | boolean   |  false  |
| title  | 菜单项在页面显示的内容 | string&#124;`config` |    |
| icon | 图标，显示在`title`内容之前。当需要使用折叠侧边栏功能时，建议设置图标。图标类型可选值见[Icon](#/General/Icon)的`mode`属性 |  string |  |
| key | 唯一标志。和`link`属性配合时可以不填。如果设置`followRoute: true`，建议不设置 key 或者 key 值和对应的路由保持一致 |  string | 必须 |
| link | 点击菜单项时跳转的链接（路由）。默认作为一个路由处理，如果想使用真正的链接，可在链接前加上 http/https。如果是 subMenu 或 group 类型，则建议留空 | string | |
| childItems | 子菜单项列表。一旦设置 childItems，则认为当前菜单项为一个 subMenu 类型或者是 group 类型 | items[] | |
| mode | 菜单项类型。当为非普通菜单项时，可以定义两种菜单项类型：`subMenu`、`group` | string | `subMenu` |
| onTitleClick | 点击子菜单标题 | function({ key, domEvent }) | - |

***以上参数自由组合可以产生三种类型的菜单项：item、subMenu、group。***

**item**

普通菜单项，其下没有子内容，用于点击菜单项切换页面。

常用参数为： `disabled` / `title` / `link`

**subMenu**

当有 `childItems` 属性时，菜单项默认为 subMenu 类型，具有折叠收起/展开的功能。此类型的组件一般不使其具有切换路由的能力，多用于分类，此时需设置key值。

常用参数为： `disabled` / `title` / `key` / `icon` / `childItems`

**group**

subMenu 的另一种形式，取消了折叠收起/展开功能。具有对菜单项进行分类的同时，又减少了菜单项的层级。

常用参数为： `title` / `childItems`
