
垂直展示的时间流信息。

## 何时使用

- 当有一系列信息需要从上至下按时间排列时；
- 需要有一条时间轴进行视觉上的串联时；

## 组件&配置

### # timeline

时间轴。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|----------------------------------------|------------|-------|
| pending  | 指定最后一个幽灵节点是否存在或内容 | boolean 或 string 或 `config` | false  |

### # timeline-item

时间轴的每一个节点。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|------------------------------------------|------------|-------|
| color   | 指定圆圈颜色 `blue, red, green`，或自定义的色值 | string | blue  |
| dot   | 自定义时间轴点（会使用默认颜色） | string 或 `config` | -  |