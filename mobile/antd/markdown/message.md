
一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

## 何时使用
- 一次只显示一个 message
- 有 Icon 的 Message，字数为 4-6 个；没有 Icon 的 Message，字数不宜超过 14 个。

## 组件&配置

- `UF.message.success(content, duration, onClose, mask)`
- `UF.message.fail(content, duration, onClose, mask)`
- `UF.message.info(content, duration, onClose, mask)`
- `UF.message.loading(content, duration, onClose, mask)`
- `UF.message.offline(content, duration, onClose, mask)`

组件提供了五个静态方法，参数如下：

| 属性 | 说明 | 类型 | 默认值 |
| ----|-----|------|------ |
| content    | 提示内容       | string&#124;`config`    | 无           |
| duration   | 自动关闭的延时，单位秒 | number                 | 3          |
| onClose    | 关闭后回调 |  Function                 | 无          |
| mask    | 是否显示透明蒙层，防止触摸穿透 |  Boolean  | true          |

> **注：**  duration = 0 时，onClose 无效，message 不会消失；隐藏 message 需要手动调用 hide

还提供了全局配置和全局销毁方法：

- `UF.message.hide()`
