按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 组件&配置

### # button

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`mode` -> `shape` -> `size` -> `loading` -> `disabled`

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
mode | 设置按钮类型，可选值为 `primary` `dashed` `danger` 或者不设 | string | -
htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button`
icon | 设置按钮的图标类型 | string | -
shape | 设置按钮形状，可选值为 `circle` 或者不设 | string | -
size | 设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default`
loading | 设置按钮载入状态 | boolean &#124; { delay: number } | `false`
onClick | `click` 事件的 handler | function | -
ghost | 幽灵属性，使按钮背景透明 | boolean | false
link | 如果配置了link属性，则按钮点击后会跳转到link指定的页面 | string | 


### # button-group

可以将多个 `button` 放入 `button-group` 的容器中，使按钮作为一组展示。

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
size | 设置按钮大小，可选值为 `small` `large` `mini` 或者不设 | string | `default`