Table可以快速配置增删改查等功能。

**注意：这还是`Table`组件，由于其`crud`属性内容比较多，这里拎出来单独描述。以下全部内容皆在`Table.crud`属性之下**

功能大体分为如下几种：

> * show: 纯展示型弹框或和数据相关的展示型弹框   
> * add: 新增单条数据弹框
> * edit: 编辑单条数据弹框
> * delete: 删除单条数据弹框
> * batchAdd: 批量导入数据弹框。用于批量新增数据
> * batchEdit: 批量编辑表格中选中的数据
> * batchDelete: 批量删除表格中选中的数据

其中：如`show`,`edit`,`delete`可用于表格`column._operation`配置中。batch***可用于批量操作表格数据。

crud属性值为一对象，其中键为当前配置的`"引用名称"`，用于`_operation`中的`action`属性所指向的功能引用；或者`showCrud`函数调用crud功能时第一个参数指向的功能的引用。值为功能的具体配置，参数如下：

## 配置属性列表

参数           | 说明                     | 类型             | 默认值 | 是否必填
--------------|--------------------------|-----------------|-------|-------
| title      | 列头显示文字               | string &#124; `config` | - |
action  | 功能的具体分类。不同分类具有不同默认功能，如不填，则认为action和引用名称相同。可选值有：'show'、'add'、'edit'、'delete'、'batchAdd'、'batchEdit'、'batchDelete'。 | string  | |
api    | 提交数据的接口 | string | |
form    | 弹框中的表单配置。会做一些联动处理（如点击确认按钮时自动提交数据），常用于弹出层快速提交表单。注意：form 的配置中无需再写form的 type 和 name 属性 | `config` | |
method | api请求类型 | string | 'get'|
params | api请求初始参数。1、提交数据时，会获取params中的值；2、form会填充params中的值为默认值 | object | |
paramsHandler | api请求发送前处理参数的函数。直接从form等获取到的参数可能不符合接口格式，可以用此函数处理参数 | function(params) {return params;} | |
message | 弹框中的动态内容。content为静态内容，message为一个函数，会传入params参数，函数返回一个组件配置。常用于确认框，提示内容为和数据相关的动态信息。 | |function(params) {return `config`;} | 

常用参数如上，其他参数可参考：[Modal 弹框](#/Custom/Modal)
