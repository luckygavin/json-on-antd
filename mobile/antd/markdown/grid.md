
在水平和垂直方向，将布局切分成若干等大的区块。

## 何时使用

- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。

## 组件&配置

### # grid

属性 | 说明 | 类型 | 默认值
----|-----|------|------
items    |    传入的菜单数据，本身为一个数组，属相见下面表格`item`    | `Array<{icon, text}>`  | []
itemStyle | 每个格子自定义样式| object|{}
onClick    |   点击每个菜单的回调函数   | (el: Object, index: number): void  | -
columnNum    |   列数     | number  |  `4`
hasLine    |   是否有边框     | boolean  |  `true`
isCarousel    |   是否跑马灯,     | boolean  | `false`
carouselMaxRow    |   如果是跑马灯, 一页跑马灯需要展示的行数   | number  | `2`
renderItem    |   自定义每个 grid 条目的创建函数   | (el, index) => `config`  | -
square     |   每个格子是否固定为正方形   | boolean | true
activeStyle  | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {}
activeClassName  | 点击反馈的自定义类名 | string |

> `isCarousel = true` 模式时，还可以传递 `carousel` 相关的 API。

#### *item*

属性 | 说明 | 类型 | 默认值
----|-----|------|------
icon |  图标地址，为一个图片的url  | string | 
text |  展示文字内容  | string | 