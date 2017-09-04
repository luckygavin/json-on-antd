
点击元素，弹出气泡式的确认框。

## 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 `confirm` 弹出的全屏居中模态对话框相比，交互形式更轻量。

## 组件&配置

### # popconfirm

| 参数      | 说明                                     | 类型          | 默认值 |
|-----------|------------------------------------------|---------------|--------|
| title     | 确认框的描述                             | string&#124;ReactNode | 无     |
| onConfirm | 点击确认的回调                           | function(e)      | 无     |
| onCancel  | 点击取消的回调                           | function(e)      | 无     |
| okText    | 确认按钮文字                              | string        | 确定   |
| cancelText| 取消按钮文字                              | string        | 取消   |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string     | top    |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上。`2.5.2` 之前请使用 `getTooltipContainer` | Function(triggerNode) | () => document.body |
| arrowPointAtCenter | 箭头是否指向目标元素中心，`antd@1.11+` 支持 | boolean | `false` |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置             | boolean | `true` |
| visible   | 用于手动控制浮层显隐                     | boolean       | false  |
| onVisibleChange | 显示隐藏的回调                      | (visible) => void | 无     |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0 |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |
| trigger   | 触发行为，可选 `hover/focus/click`       | string        | hover  |
| overlayClassName | 卡片类名                            | string | 无     |
| overlayStyle | 卡片样式                            | object | 无     |

