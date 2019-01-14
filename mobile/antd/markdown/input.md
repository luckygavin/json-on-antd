
用于接受单行文本。

## 何时使用
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在水平方向进行移动。
- 对特定格式的文本进行处理，eg：隐藏密码。

## 组件&配置

**`Input` 必须用 [`List`]() 组件包裹才能正常使用**

| 属性 | 说明 | 类型 | 默认值| 
| ----|-----|------|------| 
| name    | input 的 name  | String |  无  |
| mode    | 可以是银行卡`bankCard`；手机号`phone`(此时最大长度固定为11)；密码`password`；数字`number`；`digit`(表示原生的 number 类型)；`money`(带小数点的模拟的数字键盘)  | String |  `text`  |
| value    | value 值  | String |  无  |
| defaultValue  | 设置初始默认值        | String |  -  |
| placeholder   | placeholder        | String | ''  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  false  |
| clear      |  是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效) | bool | false  |
| maxLength  |  最大长度      | number |  |
| error       | 报错样式        | bool |  false  |
| extra       | 右边注释   | string or node |  ''  |
| labelNumber  | 标签的文字个数，可用`2-7`之间的数字 | number | `5` |
| updatePlaceholder  | 当清除内容时，是否将清除前的内容替换到 placeholder 中 | bool |  false  |
| prefixListCls     |   列表 className 前缀      | String |  `am-list`  |
| moneyKeyboardAlign    | 文字排版起始方向, 只有 `mode='money'` 支持， 可选为 `'left'`, `'right'`       | String |  'right'  |
| moneyKeyboardWrapProps    | 自定义金额虚拟键盘属性  | Object | {} |
| moneyKeyboardHeader    | 自定义金额虚拟键盘头部  | `config` | null |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| onBlur     | blur 事件触发的回调函数 | (val: string): void |   -  |
| onFocus    | focus 事件触发的回调函数 | (val: string): void |  -  |
| onErrorClick   | 点击报错 icon 触发的回调函数  | (e: Object): void |  无  |
| onExtraClick      | extra 点击事件触发的回调函数 | (e: Object): void |  无  |
| onVirtualKeyboardConfirm | 虚拟键盘点击确认时的回调函数 | (val: string): void |  无  |

> 注意: `Input` 当 `mode=number` 时不支持输入负号, 你可以利用 `mode=text` 来自己实现。
> 注意: 使用 `moneyKeyboardHeader` 时，页面中只能有一个 `mode=money` 的 `Input`。

### 组件接口

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| focus | 使 input 聚焦  | (): void |  -  |
