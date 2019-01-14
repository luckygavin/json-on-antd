
从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。内置固定的展示样式、不支持特别灵活的修改。

## 何时使用

- 提供清晰的退出按钮。
- 可高亮破坏性操作，e.g. 将『删除』处理成红色文本。
- 不要放置过多内容，避免面板纵向滚动。


## 组件&配置

#### ActionSheet.showActionSheetWithOptions(options, callback)

显示 action sheet，`options`为对象必须包含以下的一个或者多个。`callback`函数支持返回 Promise。

属性 | 说明 | 类型 | 默认值 | 是否必填
----|-----|------|------ | -----
options | 选项按钮列表 | string[] | | 是
badges |  徽标数列表，为一个数组，数组每一项包含两个属性：index、text | [{index, text}...] | | 
cancelButtonIndex |  按钮列表中取消按钮的索引位置 | Number  | | 
destructiveButtonIndex |  按钮列表中破坏性按钮（一般为删除）的索引位置 | Number | | 
title |  顶部标题 | string | | 
message |  顶部标题下的简要消息 | string&#124;`config` | | 
maskClosable |  点击蒙层是否允许关闭，默认允许 | boolean | true | 


#### ActionSheet.showShareActionSheetWithOptions(options, callback)

显示分享 action sheet，`options`为对象必须包含以下的一个或者多个。`callback`函数支持返回 Promise。

属性 | 说明 | 类型 | 默认值 | 是否必填
----|-----|------|------ | -----
options | 分享按钮列表，具体见下方说明 | [{icon: `config`, title: string}...] | | 是
title | 顶部标题 | string |  | 
cancelButtonText | 取消按钮文案 | string | 取消 | 
message | 顶部标题下的简要消息 | string&#124;`config` |  | 
maskClosable |  点击蒙层是否允许关闭，默认允许 | boolean | true | 

- options (array of \`{icon: `config`, title: string}\`)
    - 可以是二维数组，能显示多行按钮，例如`[[{icon,title},...],...]`表示两行两列。当为二维数组时`callback`有两个参数，第一个为`列`序列、第二个为`行`序列。

#### ActionSheet.close()

关闭弹窗。
