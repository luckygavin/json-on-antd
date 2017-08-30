
通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## API

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| title    | 卡片标题 | string&#124;ReactNode   |  -  |
| extra    | 卡片右上角的操作区域 | string&#124;ReactNode   | - |
| bordered | 是否有边框 | boolean   |  true  |
| bodyStyle | 内容区域自定义样式 | object   |  -  |
| noHovering | 取消鼠标移过浮起 | boolean | false |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean   |  false  |
