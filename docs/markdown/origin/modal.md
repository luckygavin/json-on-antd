对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `UF.Modal.confirm()` 等方法。

## 组件&配置

### # modal
| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| visible    | 对话框是否可见 | boolean          | 无           |
| confirmLoading | 确定按钮 loading | boolean    | 无           |
| title      | 标题           | string&#124;`config` | 无           |
| closable   | 是否显示右上角的关闭按钮 | boolean    | true        |
| onOk       | 点击确定回调       | function(e)     | 无           |
| onCancel   | 点击遮罩层或右上角叉或取消按钮的回调  | function(e)  | 无         |
| width      | 宽度           | string&#124;number | 520           |
| footer     | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | string&#124;`config` | 确定取消按钮 |
| okText     | 确认按钮文字    | string           | 确定       |
| okType     | 确认按钮类型    | string           | primary       |
| cancelText | 取消按钮文字    | string           | 取消       |
| cancelType | 取消按钮类型    | string           | default       |
| maskClosable | 点击蒙层是否允许关闭 | boolean   | true       |
| style | 可用于设置浮层的样式，调整浮层位置等 | object   | - |
| wrapClassName | 对话框外层容器的类名 | string   | - |
| afterClose | Modal 完全关闭后的回调 | function | 无 |
| getContainer | 指定 Modal 挂载的 HTML 节点 | (instance): HTMLElement | () => document.body |
| zIndex | 设置弹出层的 `z-index` 值，即层叠高度 | number | 1000 |


### 函数调用
> 组件自身带有的函数，调用方法如：`UF('my-modal').show()`。

| 参数       | 说明           | 参数             | 默认值       |
|------------|----------------|------------------|--------------|
| show    | 展示弹框 |           | show()           |
| close    | 关闭弹框 |           | close()           |


### UF.Modal.method()

包括：

- `UF.Modal.info`
- `UF.Modal.success`
- `UF.Modal.error`
- `UF.Modal.warning`
- `UF.Modal.confirm`

以上均为一个函数，参数为 object，具体属性如下：

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| title      | 标题           | string&#124;`config` | 无           |
| content    | 内容           | string&#124;`config` | 无           |
| onOk       | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭      | function         | 无           |
| onCancel   | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭       | function         | 无           |
| width      | 宽度           | string&#124;number | 416           |
| iconType   | 图标 Icon 类型    | string | question-circle |
| okText     | 确认按钮文字    | string           | 确定       |
| cancelText | 取消按钮文字    | string           | 取消       |
| maskClosable | 点击蒙层是否允许关闭 | Boolean   | `false`    |

以上函数调用后，会返回一个引用，可以通过该引用关闭弹窗。

```javascript
var ref = UF.Modal.info({...});
ref.destroy();
```

