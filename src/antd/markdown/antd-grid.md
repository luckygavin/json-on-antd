
## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

* 通过`row`在水平方向建立一组`column`（简写col）
* 你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素
* 栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用`.col-8`来创建
* 如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列

## Flex 布局

我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但排版则不拘泥于栅格。

## 组件&配置

### # row

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| mode      | 布局模式，可选 `flex`，[现代浏览器](http://caniuse.com/#search=flex) 下有效 | string |         |
| gutter    | 栅格间隔，单位`px`   | number | 0        |
| align     | flex 布局下的垂直对齐方式：`top` `middle` `bottom`  | string | `top`      |
| justify   | flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between`   | string | `start`        |

### # col

| 成员      | 说明             | 类型               | 默认值       |
|----------|-----------------|--------------------|-------------|
| span     | 栅格占位格数，为 0 时相当于 `display: none`   | number | -        |
| order    | 栅格顺序，`flex` 布局模式下有效   | number | 0        |
| offset   | 栅格左侧的间隔格数，间隔内不可以有栅格  | number | 0        |
| push     | 栅格向右移动格数   | number | 0        |
| pull     | 栅格向左移动格数   | number | 0        |
| xs       | `<768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number&#124;object | - |
| sm       | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number&#124;object | - |
| md       | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number&#124;object | - |
| lg       | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number&#124;object | - |
| xl       | `≥1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number&#124;object | - |

响应式栅格的断点遵循了 [BootStrap 3 的规则](https://getbootstrap.com/docs/3.3/css/#responsive-utilities-classes)（不包含链接里 `occasionally` 的部分)。
