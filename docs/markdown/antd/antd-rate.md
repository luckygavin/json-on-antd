
评分组件。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 组件&配置

### # rate

| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| count    | star 总数 | number | 5 |
| value | 当前数，受控值 | number | - |
| onChange | 选择时的回调 | Function(value: number) | - |
| allowHalf | 是否允许半选   | boolean | false |
| disabled | 只读，无法进行交互 | boolean | false |
| character | 自定义字符 | ReactNode | `<Icon type="star" />` |
| className | 自定义样式类名 | string | - |
| style | 自定义样式对象 | object | - |
