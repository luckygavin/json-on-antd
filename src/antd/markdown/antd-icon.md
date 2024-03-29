语义化的矢量图形。

## 组件&配置

### # icon

由于图标字体本质上还是文字，可以使用 `style` 和 `className` 设置图标的大小和颜色。

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| mode | 图标类型 | string | - |
| spin | 是否有旋转动画 | boolean | false |
| style | 设置图标的样式，例如 fontSize 和 color | object | - |

##### 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`（实心） 和 `question-circle-o`（描线）；
- 命名顺序：`[图标名]-[形状?]-[描线?]-[方向?]`。
