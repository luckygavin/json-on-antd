
点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 组件&配置

### # popover

| 参数      | 说明                                     | 类型          | 默认值 |
|-----------|------------------------------------------|---------------|--------|
| title     | 卡片标题                                 | string&#124;`config` | 无     |
| body   | 卡片内容                            | string&#124;`config` | 无     |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string     | top    |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | Function(triggerNode) | () => document.body |
| arrowPointAtCenter | 箭头是否指向目标元素中心 | boolean | `false` |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置             | boolean | `true` |
| visible   | 用于手动控制浮层显隐                     | boolean       | false  |
| onVisibleChange | 显示隐藏的回调                      | (visible) => void | 无     |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0 |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |
| trigger   | 触发行为，可选 `hover/focus/click`       | string        | hover  |
| overlayClassName | 卡片类名                            | string | 无     |
| overlayStyle | 卡片样式                            | object | 无     |
