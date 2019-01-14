
用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

### 规则
- 尽可能少用。Modal 会打断用户操作，只用在重要的时候。
- 标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
- 操作按钮最多到 3 个（竖排），一般为 1-2 个（横排）；3 个以上建议使用组件 ActionSheet 来完成。
- 一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。

## 组件&配置

### # modal

属性 | 说明 | 类型 | 默认值
----|-----|------|------
afterClose | Modal 完全关闭后的回调 | function | 无 
visible | 对话框是否可见 | Boolean | false 
closable | 是否显示关闭按钮 | Boolean | false 
maskClosable | 点击蒙层是否允许关闭 | Boolean | true 
onClose | 点击 x 或 mask 回调 | (): void | 无 
transparent | 是否背景透明 | Boolean | false 
popup | 是否弹窗模式 | Boolean | false 
animationType | 可选: 'slide-down / up' / 'fade' / 'slide' | String | fade 
title | 标题 | string&#124;`config` | 无 
footer | 底部内容 | Array [{text, onPress}] | [] 
platform  | 设定组件的平台特有样式, 可选值为 `android`, `ios` | String | `ios'`
transitionName  | Modal 主内容动画 className | String | 
maskTransitionName  | mask 动画 className | String | 
className  | 手动设置 Modal 的 className | String | 
wrapClassName  | 手动设置 Modal wrap 的 className | String | 

#### Modal.alert(config)

属性 | 说明 | 类型 | 默认值 | 是否必填
----|-----|------|------ | -----
title | 标题  | string&#124;`config` | | 是
message  | 提示信息  | string&#124;`config`  | | 是
actions | 按钮组, [{text, onPress, style}] | Array | |
platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`  | String | `'ios'`|

`Modal.alert(config).close()` 可以在外部关闭 Alert

#### Modal.prompt(config)

属性 | 说明 | 类型 | 默认值| 是否必填
----|-----|------|------| -----
title | 标题  | string&#124;`config` | 无 | 是 
message  | 提示信息  | string&#124;`config`  | 无 | 是
callbackOrActions  | 按钮组 [{text, onPress}] 或回调函数  | Array or Function | 无 |
mode | prompt 的样式 | String (`default`, `secure-text`, `login-password`)|  `default` |
defaultValue | 默认值(input 为 password 类型不支持) | String |  |
placeholders | ['', '']  | String[] |  |
platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`  | String | `'ios'`|

> `Modal.prompt(config).close()` 可以在外部关闭 prompt`

### Modal.operation(config)

属性 | 说明 | 类型 | 默认值| 是否必填
----|-----|------|------|-----
actions | 按钮组, [{text, onPress, style}] | Array | 无 |
platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`  | String | `'ios'`|

> `Modal.operation(config).close()` 可以在外部关闭 operation`
