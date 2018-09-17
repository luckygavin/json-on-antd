Table可以快速配置增删改查等功能。

**注意：这还是`Table`组件，由于其`crud`属性内容比较多，这里拎出来单独描述。以下全部内容皆在`Table.crud`属性之下**

功能大体分为如下几种，与下面参数列表中的`mode`参数可选值一致：

> * show: 纯展示型弹框或和数据相关的展示型弹框，只有关闭按钮，本身没有其他交互 (当action不与任何类型匹配时，默认是show)  
> * add: 新增单条数据弹框
> * edit: 编辑单条数据弹框
> * delete: 删除单条数据弹框
> * details: 查看单条数据详细信息弹框
> * search: 高级查询
> * batchAdd: 批量导入数据弹框。用于批量新增数据
> * batchEdit: 批量编辑表格中选中的数据
> * batchDelete: 批量删除表格中选中的数据
> * batchShow: 批量展示Table中选中的数据


其中：如`show`,`edit`,`delete`可用于表格`column._operation`配置中。batch***可用于批量操作表格数据。

crud属性值为一对象，其中键为当前配置的`"引用名称"`，用于`_operation`中的`action`属性所指向的功能引用；或者`showCrud`函数调用crud功能时第一个参数指向的功能的引用。值为功能的具体配置，参数如下：

**注意：以上几种类型名称为关键字，每一种都有对应的默认处理逻辑，如果想要自定操作，则避免使用上述关键字命名操作名称**

## 配置属性列表

参数           | 说明                     | 类型             | 默认值 | 是否必填
--------------|--------------------------|-----------------|-------|-------
title      | 弹框头部显示内容               | string &#124; `config` | - |
mode  | 功能的具体分类。不同分类具有不同默认功能，如不填，则认为mode和引用名称相同。可选值有：'show'、'add'、'edit'、'delete'、'batchAdd'、'batchEdit'、'batchDelete'，可见上面的功能分类 | string  | |
position  | 显示位置，可以选择：`modal`以弹框显示、`beforeHeader`展示在表格头部以上、`afterHeader`展示在表格头部以下   | string | 'modal' |
api    | 提交数据的接口。可以为接口字符串或者对象，当为对象时具有(url,method,params,handler等参数)，具体可见[通用参数](#/Params)#api 系列 | string|object | 
form   | 弹框中的表单配置。会做一些联动处理（如点击确认按钮时自动提交数据），常用于弹出层快速提交表单。注意：form 的配置中无需再写form的 type 和 name 属性 | `config` | |
params | form会填充params中的值为默认值。会覆盖api中的params | object | |
render | 弹框中的动态内容。content为静态内容，render为一个函数，会传入params参数，函数返回一个组件配置。常用于确认框，提示内容为和数据相关的动态信息。 | |function(params) {return `config`;} | 
forbidden | 多个弹框复用form配置时，可以用此属性声明复用过来的哪些字段置为不可操作状态。比如编辑弹框复用新增的form配置时，id置为不可操作 | string（逗号分隔的字段名称字符串） | |
remove | 多个弹框复用form配置时，可以用此属性声明复用过来的哪些字段移除 | string（逗号分隔的字段名称字符串） | |
autoReload | 点击提交时自动刷新表格 | boolean | true |


常用参数如上，其他参数可参考：[Modal 弹框](#/Custom/Modal)

以上介绍仅针对弹框的展示形式，但是有时对于一些高频操作弹框并不是特别易用，所以可以使扩展内容展示在表格上方，配置属性如下。**和前面部分名称相同的属性用法也保持一致，不再做过多说明**：


## 另一种用法

当`position`不为modal时，crud的内容不再以弹框的形式进行展示，而是直接置于页面上（不过属性基本和弹框一致，同样自动控制显示/隐藏）。

根据position的值决定：`beforeHeader`展示在表头之上（例如Demo中一直展示在页面上的高级查询功能）；或者`afterHeader`展示在表头及表格之间（例如点击"批量查询"按钮展示出的批量查询功能）
