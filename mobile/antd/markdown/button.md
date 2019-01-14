点击后会触发一个操作。

## 组件&配置

### # button

属性 | 说明 | 类型 | 默认值
----|-----|------|------
mode    | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设  |   string   |
size    | 按钮大小，可选值为`large`、`small` | string | `large`
activeStyle  | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {}
activeClassName  | 点击反馈的自定义类名 | string |
disabled   | 设置禁用  | boolean |    false
onClick    | 点击按钮的点击回调函数 | (e: Object): void |   
style    | 自定义样式 |   Object  | 
inline     | 是否设置为行内按钮  | boolean |   false
loading	   | 设置按钮载入状态	  | boolean	 | false
icon  | 可以是 [Icon](#/Mobile/Global/Icon) 组件里内置的某个 icon 的 mode 值，也可以是任意组件的配置 | `string`&#124;`config` | -
prefixCls |  class前缀 | string | `am-button`
className |  样式类名 | string | 