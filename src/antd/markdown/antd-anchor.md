
用于跳转到页面指定位置。

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## 组件&配置

### # anchor

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| mode | 锚点模式。可选值：`link`-经典模式，会根据`item.href`属性跳转链接（一般为修改页面路由的hash值）；`scroll`-滚动模式，当 | string | link |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发   | number |         |
| offsetBottom | 距离窗口底部达到指定偏移量后触发   | number |         |
| bounds | 锚点区域边界 | number | 5(px) |
| affix | 固定模式 | boolean | false |
| showInkInFixed | 固定模式是否显示小圆点 | boolean | false |
| scrollOffset  | scroll模式下，滚动距顶部的偏移量  | number |  0  |
| items | 选项列表，原`anchor-link`组件，具体属性见下表 | array |  |

#### *item*

**`link`模式**
，原**`anchor-link`**组件

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| href    | 锚点链接。   | string |       |
| title | 文字内容   | string&#124;`config` |         |


**`scroll`模式**

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| targetId    | 锚点的定位组件ID，会根据targetId查找页面对应id的组件，并将页面滚动到此处  | string |     |
| title | 文字内容   | string&#124;`config` |         |