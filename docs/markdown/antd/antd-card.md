
通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## API

```html
<Card title="卡片标题">卡片内容</Card>
```

### Card

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| title    | 卡片标题 | string&#124;ReactNode   |  -  |
| extra    | 卡片右上角的操作区域 | string&#124;ReactNode   | - |
| bordered | 是否有边框 | boolean   |  true  |
| bodyStyle | 内容区域自定义样式 | object   |  -  |
| noHovering | 取消鼠标移过浮起 | boolean | false |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean   |  false  |

### Card.Grid

Property | Description | Type | Default
---------|-------------|------|---------
className | 网格容器类名 | string | -
style | 定义网格容器类名的样式 | object | -
