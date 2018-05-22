## 功能介绍
 * 灵活可配置的表单
 * 支持多种表单类型：单选框、复选框、输入框、数字输入框、下拉选择框、级联下拉框、上传按钮等常用元素。
 * 支持多种排列方式
 * 灵活的校验规则
 * 可配置底部按钮

> **声明：** 本组件底层使用的是 `Antd.Form`，所以疑惑的地方可以结合 [Antd文档](http://antd.uf.baidu.com/components/form-cn/) 使用

## 组件&配置

### # form

参数名称 | 说明 | 类型 | 默认值 | 是否必须
--------|-----|------|--------|----
header | form 标题 | string &#124; `config` |  | 
className | 增加 form 整体的 class 名称 | string |  | 
layout | 表单布局，支持三种常见布局，见`# layout` | object | |
size | 控件大小。可选 `large` `default` `small` | string | `large` |
items | 表单项的详细配置参数，首先是一个数组，数组里面每一项可以是对象，也可以是数组。如果是数组的话，则启动了『分组』功能，数组作为一个整体放在一行；如果为一个对象，见`# item` | object[]/array[] |  | 必须
buttons | 表单的按钮配置，见`# buttons` | object[] | |
formData | form 表单的默认值对象，和`items`里面配置的值对应的数据会设置成form的默认值，其他值会在点击提交时随表单数据一起返回，常用于“编辑”功能。如果需要为表单传入一个数组渲染出多个表单，请参考组件Forms的配置 | object | |
beforeSubmit | 点击提交按钮时，校验完成后传出数据前对数据进行处理，一般用于对表单数据进行格式化 | function(data){} | |
beforeSetValues | 传入数据后，在给表单设置默认数据前，对数据进行格式化，一般用于“编辑功能”，传入的数据不符合表单要求格式时（比如checkbox要的是数组，但是传入的是字符串，就可以用这个函数先处理数据然后在传给Form） | function(data){} | |
onSubmit | 点击提交时，数据校验成功时的回调函数（会被`type='submit'`的按钮的 onClick 参数覆盖） | function(data){} | |
wrappedComponentRef | 获取Form表单的引用和其他组件不太相同，不能直接在refs上获取到，所以需要通过回调函数获得，`this.formRef`即为form组件的引用，用法如下 | wrappedComponentRef={inst=>this.formRef = inst} | |


#### *layout*

参数名称 | 说明 | 类型 | 默认值
----- | --- | ---------| ---
type | 表单布局，有三种： 水平:`horizontal` 垂直:`vertical` 内联:`inline` | string | `horizontal` 
column | 分成多列布局（不是特别好用，推荐使用分组功能，见`item`） | number | 1
labelCol | 仅 type 为`horizontal`时有效。使用24栅格系统布局，表单项中label所占栅格的值 | number | 6
wrapperCol | 仅 type 为`horizontal`时有效。表单项中表单域所占栅格的值 | number |14


#### *item*

参数名称 | 说明 | 类型 | 默认值 | 是否必须
----- | --- | ---------| --- | ---
type | 即为输入类型组件的`type`。**除`type`外，可以使用一切输入型组件的参数** | string | | 必须
name | 表单域名称，key，提交时以此名称为键 | string | | 必须
label | 表单域左侧的label | string | | 必须
default | 默认值，注意表单域需要的值是字符串还是数组（例如checkbox-group需要array）| | |
help | 额外提示信息，会在label后面增加一个问号，鼠标移上去时提示 | string | |
extra | 额外提示信息，会显示在表单域之后或下方 | string | |
required | 是否必选 | boolean | `false` 
rules | 除是否必选外，其他验证规则，表单在提交时会根据验证规则对数据进行校验，只有全部通过才会调用提交的回调函数。此处虽然是个对象数组或者对象数组。具体配置见 `item.rules` | object &#124; object[] | |
regionConfig | 表单域本身的配置，『极少用』。一般只有自定义组件且特殊情况下需要配置此值，具体参数见`# item.regionConfig` | object | |


> **注意：** 使用自定义组件时
> * 提供受控属性 value 或其它与 valuePropName 的值同名的属性。
> * 提供 onChange 事件或 trigger 的值同名的事件。
> * 不能是函数式组件


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

#### *item.rules*

表单域中组件的校验规则

参数  | 说明  | 类型 | 默认值 
-----|------|------|------
message | 校验文案 | string |
type | 内建校验类型，[可选项](https://github.com/yiminghe/async-validator#type) | string | 'string'
required | 是否必选，如果在rules外设置了required，则以外面的required值为准 | boolean | `false` 
whitespace | 必选时，空格是否会被视为错误 | boolean | `false`  
len | 字段长度 | number | 
min | 最小长度 | number |
max | 最大长度 | number |
enum | 枚举类型 | string |
pattern | 正则表达式校验 | RegExp |
transform | 校验前转换字段值 | function(value) => transformedValue:any |
validator | 自定义校验（注意，[callback 必须被调用](https://github.com/ant-design/ant-design/issues/5155)） | function(rule, value, callback) |

#### *item.regionConfig*
表单域本身配置

参数      | 说明                                     | 类型 | 默认值
-----------|-----------------------------------------|-----|-------
valuePropName | 子节点的受控属性，如 `Switch` 的是 'checked' | string | 'value'
trigger | 收集子节点的值的时机 | string | 'onChange'
getValueFromEvent | 可以把 onChange 的参数转化为控件的值 | function(..args) | [reference](https://github.com/react-component/form#optiongetvaluefromevent)
validateTrigger | 校验子节点值的时机 | string\string[] | 'onChange'
validateFirst | 当某一规则校验不通过时，是否停止剩下的规则的校验	 | boolean | false
exclusive | 是否和其他控件互斥，特别用于 Radio 单选控件 | boolean | false
normalize | 转换默认的 value 给控件. [一个选择全部的例子](https://codepen.io/afc163/pen/JJVXzG?editors=001) | function(value, prevValue, allValues): any | 


### 函数调用
> 组件自身带有的函数，调用方法如：`UF('my-form').getValues()`。

函数名称 | 说明 | 参数 |  默认值
---- | ---- | ----- | ----- 
getValues | 获取全部表单的值，默认先校验再返回。该函数支持传入一个参数，如果想跳过校验，则传入参数`false` | getValues([boolean]) |
resetValues | 重置全部表单的值。支持传入一个对象，把表单重置为对象里面对应的值 | resetValues([object]) |


## 更多用法
可以把各种组件的更高级用法的例子截图贴在这里
[!图片](/path/to/img.jpg "Title")
