
全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## API

- `UF.notification.success(config)`
- `UF.notification.error(config)`
- `UF.notification.info(config)`
- `UF.notification.warning(config)`
- `UF.notification.warn(config)`
- `UF.notification.close(key: String)`
- `UF.notification.destroy()` // 销毁当前全部提示信息

config 参数如下：

| 参数          | 说明                                       | 类型                | 默认值      |
| ----------- | ---------------------------------------- | ----------------- | -------- |
| message     | 通知提醒标题，必选                                | string&#124;`config` | -        |
| description | 通知提醒内容，必选                                | string&#124;`config` | -        |
| className   | 自定义 CSS class                            | string            | -        |
| style       | 自定义内联样式                                  | Object            | -        |
| btn         | 自定义关闭按钮                                  | `config`         | -        |
| icon        | 自定义图标                                    | `config`         | -        |
| key         | 当前通知唯一标志                                 | string            | -        |
| onClose     | 点击默认关闭按钮时触发的回调函数                         | Function          | -        |
| duration    | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭            | number            | 4.5      |
| placement   | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string            | topRight |


- `UF.notification.config(options)`

还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

| 参数           | 说明                                       | 类型             | 默认值                 |
| ------------ | ---------------------------------------- | -------------- | ------------------- |
| placement    | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string         | topRight            |
| top          | 消息从顶部弹出时，距离顶部的位置，单位像素。                   | number         | 24                  |
| bottom       | 消息从底部弹出时，距离底部的位置，单位像素。                   | number         | 24                  |
| duration     | 默认自动关闭延时，单位秒                             | number         | 4.5                 |
| autoMerge    | 自动合并相同内容的提示信息 | boolean                 | true        |


```js
UF.notification.config({
    placement: 'bottomRight',
    bottom: 50,
    duration: 3,
});
```