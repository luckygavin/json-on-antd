## 功能介绍
 * 主要提供表单的扩展功能，复制新增表单
 * 可配置新增方式，并支持配置关闭
 * 可为组件传入数组形式的formData，从而产生多个Form表单
 * 可以Table的形式展示表单


## 组件&配置

### # forms

参数名称 | 说明 | 类型 | 默认值 | 是否必须
--------|-----|------|--------|----
mode | 展示模式，默认以form方式展示，适用于在form中嵌套；设置为`'table'`时，以表格的方式展示，如第一个demo | string | |
addType | 新增的两种方式：`add`为简单新增；`copy`为复制新增，即会将已填写的值先复制再新增表单。当设置为`false`时，关闭新增/删除功能 | string&#124;false | copy | add/copy仅在mode为默认情况下有效
operation | 自行控制`每行`的操作按钮（新增/删除等），属性为一个函数，函数返回结果为操作按钮的配置。各项中`action`为按钮的默认操作。当函数返回`false`时，表示禁用当前行的操作；当返回`true`时，表示复用默认的操作按钮 | function (row, index) {return `config[]`;} | | `addType`不为`false`时有效
buttons | 表单的按钮配置，见`# buttons` | object[] | |
formData | 传递给表单的数据，当为对象时则根据配置的`form`渲染出一个表单，当为数组时渲染出多个表单 | object[] | |
showSerialNumber | 每行第一列展示展示当前行的序号 | boolean | false |
serialNumberStart | 序号从几开始计数 | number | 1 |
form | 需渲染的表单内容，详细配置可参考`Form`组件的配置，注意，`buttons`只需在`Forms`组件配置一次就行，不需要在`form`中再次配置 | object | |
onSubmit | 点击提交时，数据校验成功时的回调函数（会被`type='submit'`的按钮的 onClick 参数覆盖） | function(data){} | |
form.items.width | 仅当`mode`为`table`时，控制每一列的宽度 | number | |

> **声明：** 本组件提交时的返回结果为一个数组，数组的每个元素都为一个对象，每个对象对应一个表单的值，如[{'name': 'ZhangSan', 'city': 'Beijing', 'birthDay': '1992-11-02'},{'name': 'LiSi', 'city': 'Shanghai', 'birthDay': '1988-09-02'}]

#### *buttons*

参数名称 | 说明 | 类型 | 默认值 | 是否必须
----- | --- | ---------| --- | ---
layout | 按钮的布局。可选值：`center`、`start`、`end` | string | center |
items | 按钮项。值为一个按钮配置数组，单个按钮配置见`buttons.item` | config[] | |

##### *buttons.item*

参数名称 | 说明 | 类型 | 默认值 | 是否必须
----- | --- | ---------| --- | ---
action | 可选值：`submit`、`reset`、`other`，其中 submit 和 reset 为特殊值，有内置的处理函数。submit会首先对数据进行校验，校验通过了才会触发回调函数；reset会先把表单重置，然后调用函数 | string | other | 必须
value | 按钮上显示的内容 | string | | 必须
type | 按钮类型：`primary` `ghost` `default` | string | default |
size | 按钮大小：`large` `small` `default` | string | default |
icon | 按钮图标，如 `delete`、`search` 等，详见`Icon`组件 | string | |
onClick | 点击按钮时的回调函数，除`type=reset`，其他情况下函数都有一个参数，返回表单所有的数据。（注意，`type='submit'`时，onClick函数会覆盖`基本配置`里的onSubmit函数） | function(data) {} | |

> 还有一些其他的配置，更多的配置见`Button`组件，此处调用的是Button组件，所以button组件的所有配置都可以在这里使用


### 函数调用
> 组件自身带有的函数，调用方法如：`UF('my-form').getValues()`。

函数名称 | 说明 | 参数 |  默认值
---- | ---- | ----- | -----
getValues | 获取全部表单的值，默认先校验再返回。该函数支持传入一个参数，如果想跳过校验，则传入参数`false` | getValues() |
getDisplayValues | 获取全部表单项展示给用户的值。比如下拉选择框，展示给用户的值和最终提交的内容不同。效果可见demo的自定义按钮 | getDisplayValues() |
resetValues | 重置全部表单的值。支持传入一个对象，把表单重置为对象里面对应的值 | resetValues() |
clearValues | 清除表单。有别于重置 | clearValues() |
resetItem | 重新设置某个表单项的配置 | resetItem(targetName, conf) |


