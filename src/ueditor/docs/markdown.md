Ueditor 用法。

### 功能说明

* 使用和其他组件用法相似的方式使用 ueditor
* 通过`UF()`可以获取到ueditor实例，并调用ueditor原生API


## 组件&参数

### # ueditor

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | -----
name | 当前Ueditor名称，用于使用`UF()`获取组件 | string | |
style | Ueditor样式 | object | |
data | 输入框内的默认内容 | string |  |
simple | 使用简洁版本，省略大量默认按钮 | boolen | false |
onChange | 内容变动时的回调函数 | function(value) {} |  |
serverUrl | 服务器统一请求接口路径 | string | URL + "php/controller.php" |
toolbars | 工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义 | {2d Array} |  |
zIndex | 编辑器在页面上的z-index层级的基数 | number | 900 |
autoHeightEnabled | 是否自动长高 | boolean | true |

其他参数见：[Ueditor 官方配置](http://fex.baidu.com/ueditor/#start-config)


#### 组件 API

函数名 | 说明 | 参数
---- | ---- | -----
setContent | 设置/追加编辑器内容 | ue.setContent('text'[, true])
getContent | 获取编辑器内容 | ue.getContent()
getContentTxt | 获取纯文本 | ue.getContentTxt()
focus | 让编辑器获得焦点 | ue.focus()
setDisabled | 设置编辑区域不可编辑 | ue.setDisabled()
setEnabled | 设置编辑区域可编辑 | ue.setEnabled()
selection.getText | 获得当前选中的文本 | ue.selection.getText()

其他参见：[Ueditor 官方API](http://fex.baidu.com/ueditor/#api-common)

### 注意

与其他组件不同的是，使用`UF('name')`获取到的是ueditor的实例，所以可以使用ueditor官网给出的API，但是不能使用类似于其它组件用的`set`、`hide`函数等