连续模块垂直排列。

## 何时使用
- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。
- 单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。
- 当你需要一个 infinite scroll 列表时，请使用 ListView

## 组件&配置

### # list

属性 | 说明 | 类型 | 默认值
----|-----|------|------
header  | 渲染List头部额外信息  | `config` |
footer  | 渲染List底部额外信息  | `config` |

### # list-item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
thumb   | 缩略图(当为 string 类型时作为 img src)  | string&#124;`config` | 
extra   | 右边内容        | string&#124;`config` | 
arrow   | 箭头方向(右,上,下), 可选`horizontal`,`up`,`down`,`empty`，如果是`empty`则存在对应的dom,但是不显示   | String | 
align    |  子元素垂直对齐，可选`top`,`middle`,`bottom`  | String   | `middle`
onClick    | 点击事件的回调函数 | (): void | 
error    | 报错样式,右侧文字颜色变成橙色 | Boolean  | `false`
multipleLine    | 多行 | Boolean  | `false`
wrap    | 是否换行，默认情况下，文字超长会被隐藏， | Boolean  | `false`
activeStyle    | 自定义active的样式 | Object  | 
platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `cross`， 即组件会自动检测设备 UA 应用不同平台的样式    | String | `'cross'`

### list-item-brief

辅助说明
