
警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 组件&配置

### # alert

| 参数        | 说明                                                      | 类型        | 默认值 |
|----------- |---------------------------------------------------------  | ---------- |-------|
| mode       | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error`   | string     | `info`，`banner` 模式下默认值为 `warning`    |
| closable   | 默认不显示关闭按钮                                  | boolean   | 无    |
| closeText  | 自定义关闭按钮                                     | string&#124;   | 无    |
| message    | 警告提示内容                                       | string&#124;`config`   | 无    |
| description | 警告提示的辅助性文字介绍                            | string&#124;`config`   | 无    |
| onClose     | 关闭时触发的回调函数                                | Function   | 无    |
| showIcon   | 是否显示辅助图标                                 | boolean   | false，`banner` 模式下默认值为 true    |
| banner   | 是否用作顶部公告                                 | boolean   | false    |
