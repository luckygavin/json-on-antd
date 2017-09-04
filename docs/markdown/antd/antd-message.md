
全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## API

组件提供了一些静态方法，使用方式和参数如下：

- `Uf.message.success(content, duration, onClose)`
- `Uf.message.error(content, duration, onClose)`
- `Uf.message.info(content, duration, onClose)`
- `Uf.message.warning(content, duration, onClose)`
- `Uf.message.warn(content, duration, onClose)` // alias of warning
- `Uf.message.loading(content, duration, onClose)`

| 参数       | 说明           | 类型                       | 默认值       |
|------------|----------------|--------------------------|--------------|
| content    | 提示内容       | string&#124;ReactNode | -           |
| duration   | 自动关闭的延时，单位秒。如果设置为0，则一直显示，直到调用 `destroy` 方法 | number               | 3          |
| onClose   | 关闭时触发的回调函数 | Function          | -         |

还提供了全局配置和全局销毁方法：

- `Uf.message.config(options)`
- `Uf.message.destroy()`

### message.config

```js
Uf.message.config({
    top: 100,
    duration: 2,
});
```

| 参数       | 说明                | 类型                       | 默认值       |
|------------|--------------------|--------------------------|-------------|
| top        | 消息距离顶部的位置 | number                      | 24px        |
| duration   | 默认自动关闭延时，单位秒 | number                 | 3         |
