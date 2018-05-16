对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `UF.Modal.confirm()` 等方法。

## 组件&配置

### # modal
参数       | 说明           | 类型             | 默认值      
-----------|----------------|------------------|-------------
visible    | 对话框是否可见 | boolean          | 无          
content | 弹框中间的内容 | string&#124;`config`  | 无          
confirmLoading | 确定按钮 loading | boolean    | 无          
title      | 标题           | string&#124;`config` | 无          
closable   | 是否显示右上角的关闭按钮 | boolean    | true       
onSubmit       | 点击确定回调       | function(e)     | 无          
onCancel   | 点击遮罩层或右上角叉或取消按钮的回调  | function(e)  | 无        
width      | 宽度           | string&#124;number | 520          
footer     | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | `config`&#124;`config[]` | 确定取消按钮
okText     | 确认按钮文字    | string           | 确定      
okType     | 确认按钮类型    | string           | primary      
cancelText | 取消按钮文字    | string           | 取消      
cancelType | 取消按钮类型    | string           | default      
maskClosable | 点击蒙层是否允许关闭 | boolean   | true      
style | 可用于设置浮层的样式，调整浮层位置等 | object   | -
wrapClassName | 对话框外层容器的类名 | string   | -
afterClose | Modal 完全关闭后的回调 | function | 无
getContainer | 指定 Modal 挂载的 HTML 节点 | (instance): HTMLElement | () => document.body
zIndex | 设置弹出层的 `z-index` 值，即层叠高度 | number | 1000

> tips: `footer`属性一般为一个配置或配置数组，其中没项可以有一个额外的`action`属性，指定按钮的特定功能，可选值有'submit'、'cancel'，分别对应提交功能（onSubmit）和取消功能（onCancel）

#### modal 高级功能 (额外参数)

参数       | 说明           | 类型             | 默认值      
-----------|----------------|------------------|------
form    | 弹框中的表单配置。会做一些联动处理（如点击确认按钮时自动提交数据），常用于弹出层快速提交表单。注意：form 的配置中无需再写form的 type 和 name 属性 | `config` | 
api    | 提交数据的接口。可以为接口字符串或者对象，当为对象时具有(url,method,params,paramsHanlder等参数)，具体可见[通用参数](#/Params)#api 系列 | string|object | 
params | form 会填充params中的值为默认值。会覆盖api中的params | object | 
message | 弹框中的动态内容。content为静态内容，message为一个函数，会传入params参数，函数返回一个组件配置。常用于确认框，提示内容为和数据相关的动态信息。 | function(params) {return `config`;} | 

> 最终弹框中展示的内容最多包含三部分，即：content、form、message三个属性对应的内容。从上到下展示顺序依次为：message > content > form

以上有两种常用场景。  
1、“新增/编辑”表单弹框（见示例：弹框表单）  
2、“删除”确认弹框（见示例：确认信息弹框）

### 函数调用
> 组件自身带有的函数，调用方法如：`UF('my-modal').show()`。

参数       | 说明           | 参数    
-----------|----------------|-----------
show      | 展示弹框。可以同时传入新的params，以刷新弹框中的 form、message 中的内容。用于form弹框场景和message确认框场景 |  show([params])  
close    | 关闭弹框           |   close()  


### UF.Modal.method()

包括：

- `UF.Modal.info`
- `UF.Modal.success`
- `UF.Modal.error`
- `UF.Modal.warning`
- `UF.Modal.confirm`

以上均为一个函数，参数为 object，具体属性如下：

参数       | 说明           | 类型             | 默认值       
-----------|----------------|------------------|--------------
title      | 标题           | string&#124;`config` | 无           
content    | 内容           | string&#124;`config` | 无           
onOk       | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭      | function         | 无           
onCancel   | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭       | function         | 无           
width      | 宽度           | string&#124;number | 416           
iconType   | 图标 Icon 类型    | string | question-circle 
okText     | 确认按钮文字    | string           | 确定       
cancelText | 取消按钮文字    | string           | 取消       
maskClosable | 点击蒙层是否允许关闭 | Boolean   | `false`    

以上函数调用后，会返回一个引用，可以通过该引用关闭弹窗。

```javascript
var ref = UF.Modal.info({...});
ref.destroy();
```

