## 功能介绍
 * 主要提供表单的扩展功能，复制新增表单
 * 可配置新增方式
 * 可为组件传入数组形式的formData，从而产生多个Form表单
 * 可配置底部按钮


## 组件&配置

### # forms

参数名称 | 说明 | 类型 | 默认值 | 是否必须
--------|-----|------|--------|----
className | 增加 forms 整体的 class 名称 | string |  | 
key | 此组件唯一的标识字符串信息 | string | |
addType | 新增的方式，有两种值：`copy-add` 为复制新增，即会将已填写的值先复制再新增表单；`add`为简单新增。 | string | |
buttons | 表单的按钮配置，见`# buttons` | object[] | |
formData | 传递给表单的数据，当为对象时则根据配置的`form`渲染出一个表单，当为数组时渲染出多个表单 | object或Array | |
form | 需渲染的表单内容，详细配置可参考`Form`组件的配置，注意，`buttons`只需在`Forms`组件配置一次就行，不需要在`form`中再次配置 | object或Array | |
onSubmit | 点击提交时，数据校验成功时的回调函数（会被`type='submit'`的按钮的 onClick 参数覆盖） | function(data){} | |

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
resetValues | 重置全部表单的值。支持传入一个对象，把表单重置为对象里面对应的值 | resetValues() |


