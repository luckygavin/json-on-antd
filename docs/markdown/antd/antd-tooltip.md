
简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

## 组件&配置

### # tooltip

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|--------|
| title     | 提示文字                                 | string &#124; `config` | 无     |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string     | top    |
| arrowPointAtCenter | 箭头是否指向目标元素中心 | boolean | `false` |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置             | boolean | `true` |
| visible   | 用于手动控制浮层显隐                     | boolean       | false  |
| onVisibleChange | 显示隐藏的回调                      | (visible) => void | 无     |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0 |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |
| trigger   | 触发行为，可选 `hover/focus/click`       | string        | hover  |
| overlayClassName | 卡片类名                            | string | 无     |
| overlayStyle | 卡片样式                            | object | 无     |

