协助进行页面级整体布局。

## 设计规则

### 尺寸

一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。

- 顶部导航（大部分系统）：一级导航高度 `64px`，二级导航 `48px`。
- 顶部导航（展示类页面）：一级导航高度 `80px`，二级导航 `56px`。
- 顶部导航高度的范围计算公式为：`48+8n`。
- 侧边导航宽度的范围计算公式：`200+8n`。

### 交互

- 一级导航和末级的导航需要在可视化的层面被强调出来；
- 当前项应该在呈现上优先级最高；
- 当导航收起的时候，当前项的样式自动赋予给它的上一个层级；
- 左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。

### 视觉

导航样式上需要根据信息层级合理的选择样式：

- **大色块强调**

  建议用于底色为深色系时，当前页面父级的导航项。

- **高亮火柴棍**

  当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。

- **字体高亮变色**

  从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。

- **字体放大**

  `12px`、`14px` 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。

## 组件概述

- `Layout`：布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
- `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

> 注意：采用 flex 布局实现，请注意[浏览器兼容性](http://caniuse.com/#search=flex)问题。

## 组件&配置

### # layout

布局容器。

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| style | 指定样式 | object | - |
| className | 容器 className | string | - |

> `Header` `Footer` `Content` API 与 `Layout` 相同

### # sider

侧边栏。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|-----------------------------------------|------------|-------|
| collapsible | 是否可收起 | boolean | false  |
| defaultCollapsed | 是否默认收起 | boolean | false  |
| reverseArrow | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用 | boolean | false  |
| collapsed | 当前收起状态 | boolean |  |
| onCollapse | 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发 | (collapsed, type) => {} | - |
| trigger | 自定义 trigger。设置为 null 时隐藏 trigger（隐藏trigger后可以在其他任何地方使用`sider-trigger`组件关联当前的sider） | string&#124;`config` |  |
| triggerPosition | 自定义 trigger 的位置，可选值`top`、`bottom` | string | `bottom` |
| width | 宽度 | number&#124;string | 200 |
| collapsedWidth | 收缩宽度，设置为 0 会出现特殊 trigger | number | 64 |
| breakpoint | 触发响应式布局的断点 | Enum { 'xs', 'sm', 'md', 'lg', 'xl' } | - |
| style | 指定样式 | object | - |
| className | 容器 className | string | - |

#### 函数调用

> 组件自身带有的函数，调用方法如：`UF('my-sider').toggleCollapsed()`

函数名称   | 说明             | 参数   
----------|--------------------|----------
toggleCollapsed | 切换收起/展开状态 | 无 

### # sider-trigger

从`sider`中独立出来的`trigger`，可以放在任何地方，通过`target`属性和`sider`组件关联

参数      | 说明                                     | 类型       | 默认值
----------|-----------------------------------------|------------|-------
target | 关联`sider`组件的名称 | boolean | false
reverse | 反转方向 | boolean | false


### # header、content、footer

这三个组件没有特殊功能，参数见 `# layout`
