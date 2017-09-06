## 功能介绍
 * 灵活可配置的表单
 * 支持多种表单类型：单选框、复选框、输入框、数字输入框、下拉选择框、级联下拉框、上传按钮等常用元素。
 * 支持多种排列方式
 * 灵活的校验规则
 * 可配置底部按钮

> **声明：** 本组件底层使用的是 `Antd.Form`，所以疑惑的地方可以结合 [Antd文档](http://antd.uf.baidu.com/components/form-cn/) 使用



## 配置参数

### 基本参数
参数名称 | 说明 | 类型 | 默认值 | 是否必须
--------|-----|------|--------|----
title | form 名字，多个Form时做区分 | string |  | 必须
layout | 表单布局，支持三种常见布局，见`# config.layout` | object | |
items | 表单项的详细配置参数，首先是一个数组，数组里面每一项可以是对象，也可以是数组。如果是数组的话，则启动了『分组』功能，数组作为一个整体放在一行；如果为一个对象，见`# config.items` | object[]/array[] |  | 必须
buttons | 表单的按钮配置，见`# config.buttons` | object[] | |
params | form 表单的默认值对象，和config.item里面配置的值对应的数据会设置成form的默认值，其他值会在点击提交时随表单数据一起返回，常用于“编辑”功能 | object | |
beforeSubmit | 点击提交按钮时，校验完成后传出数据前对数据进行处理，一般用于对表单数据进行格式化 | function(data){} | |
beforeSetValues | 传入数据后，在给表单设置默认数据前，对数据进行格式化，一般用于“编辑功能”，传入的数据不符合表单要求格式时（比如checkbox要的是数组，但是传入的是字符串，就可以用这个函数先处理数据然后在传给Form） | function(data){} | |
onSubmit | 点击提交时，数据校验成功时的回调函数（会被`type='submit'`的按钮的 onClick 参数覆盖） | function(data){} | |
wrappedComponentRef | 获取Form表单的引用和其他组件不太相同，不能直接在refs上获取到，所以需要通过回调函数获得，`this.formRef`即为form组件的引用，用法如下 | wrappedComponentRef={inst=>this.formRef = inst} | |


#### # layout

参数名称 | 说明 | 类型 | 默认值
----- | --- | ---------| ---
type | 表单布局，有三种： 水平:`horizontal` 垂直:`vertical` 内联:`inline` | string | `horizontal` 
column | 分成多列布局（不是特别好用，推荐使用分组功能，见`config.items`） | number | 1
labelCol | 仅 type 为`horizontal`时有效。使用24栅格系统布局，表单项中label所占栅格的值 | number | 6
wrapperCol | 仅 type 为`horizontal`时有效。表单项中表单域所占栅格的值 | number |14


#### # items

参数名称 | 说明 | 类型 | 默认值 | 是否必须
----- | --- | ---------| --- | ---
type | 输入框:`input` 数字输入框:`number` 多行输入框:`textarea` 下拉菜单:`select` 上传按钮:`upload` 级联选择菜单:`cascader` 单选按钮组:`radio:group` 复选框组:`checkbox-group` 自定义组件:`[组件名称]`(组件所需的配置放在 cfg 中，注意事项见下方`注意`) | string | | 必须
label | 表单域左侧的label | string | | 必须
name | 表单域名称，key，提交时以此名称为键 | string | | 必须
default | 默认值，注意表单域需要的值是字符串还是数组（例如checkbox-group需要array）| | |
help | 额外提示信息，会在label后面增加一个问号，鼠标移上去时提示 | string | |
extra | 额外提示信息，会显示在表单域之后或下方 | string | |
rules | 验证规则，表单在提交时会根据验证规则对数据进行校验，只有全部通过才会调用提交的回调函数。此处虽然是个对象数组，但是一般数组里只配一个对象即可。具体配置见 `config.items.rules` | object[] | |
cfg | 表单域中组件的配置，这里列出一些比较通用的配置，见`# config.items.cfg`，其他还有一些不同表单域自己的配置，详见`左侧导航列表`对应组件的说明文档 | object | |
regionCfg | 表单域本身的配置，『极少用』。一般只有自定义组件且特殊情况下需要配置此值，具体参数见`# config.items.regionCfg` | object | |


> **注意：** 使用自定义组件时
> * 提供受控属性 value 或其它与 valuePropName 的值同名的属性。
> * 提供 onChange 事件或 trigger 的值同名的事件。
> * 不能是函数式组件


#### # buttons

参数名称 | 说明 | 类型 | 默认值 | 是否必须
----- | --- | ---------| --- | ---
action | 可选值：`submit`、`reset`、`other`，其中 submit 和 reset 为特殊值，有内置的处理函数。submit会首先对数据进行校验，校验通过了才会触发回调函数；reset会先把表单重置，然后调用函数 | string | other | 必须
value | 按钮上显示的内容 | string | | 必须
type | 按钮类型：`primary` `ghost` `default` | string | default |
size | 按钮大小：`large` `small` `default` | string | default |
icon | 按钮图标，如 `delete`、`search` 等，详见`Icon`组件 | string | |
onClick | 点击按钮时的回调函数，除`type=reset`，其他情况下函数都有一个参数，返回表单所有的数据。（注意，`type='submit'`时，onClick函数会覆盖`基本配置`里的onSubmit函数） | function(data) {} | |

> 还有一些其他的配置，更多的配置见`Button`组件，此处调用的是Button组件，所以button组件的所有配置都可以在这里使用


#### # items.cfg
表单域中组件的配置

函数名称 | 说明 | 类型 | 默认值
-----|-----------|---------|------
options| 如下拉菜单等类型的表单域是需要一个可选值列表的，统一用options字段传入，options为一个数组，其中数组的每一项格式为：`{label:'',value:''}`，cascader因为是级联选择，格式为`{label:'',value:'',children:{...}}` | object[] | 类型为 `select` `cascader` `radio-group` `checkbox-group` 时必选
placeholder | 输入框为空时输入框中的提示信息 | string |

> 还有很多其他配置，如select类型的下拉框，可以配置`showSearch:true`即可开始下拉列表的搜索功能，详见各种对应组件的文档，理论上组件的属性都可以在这里使用


#### # items.rules
校验规则

参数  | 说明  | 类型 | 默认值 
-----|------|------|------
message | 校验文案 | string |
type | 内建校验类型，[可选项](https://github.com/yiminghe/async-validator#type) | string | 'string'
required | 是否必选 | boolean | `false` 
whitespace | 必选时，空格是否会被视为错误 | boolean | `false`  
len | 字段长度 | number | 
min | 最小长度 | number |
max | 最大长度 | number |
enum | 枚举类型 | string |
pattern | 正则表达式校验 | RegExp |
transform | 校验前转换字段值 | function(value) => transformedValue:any |
validator | 自定义校验（注意，[callback 必须被调用](https://github.com/ant-design/ant-design/issues/5155)） | function(rule, value, callback) |

### items.regionCfg
表单域本身配置

参数      | 说明                                     | 类型 | 默认值
-----------|-----------------------------------------|-----|-------
valuePropName | 子节点的受控属性，如 `Switch` 的是 'checked' | string | 'value'
trigger | 收集子节点的值的时机 | string | 'onChange'
getValueFromEvent | 可以把 onChange 的参数转化为控件的值 | function(..args) | [reference](https://github.com/react-component/form#optiongetvaluefromevent)
validateTrigger | 校验子节点值的时机 | string\string[] | 'onChange'
exclusive | 是否和其他控件互斥，特别用于 Radio 单选控件 | boolean | false



## 接口调用
> 可以通过refs在父组件调用一些table内部的函数，例如：`this.formRef.getValues()`。
> 注意，获取form引用的方法和其他组件不太一样，需使用组件的时候传入回调函数wrappedComponentRef，见`基础参数`部分

函数名称 | 说明 | 参数 |  默认值
---- | ---- | ----- | ----- 
getValues | 获取全部表单的值，默认先校验再返回。该函数支持传入一个参数，如果想跳过校验，则传入参数`false` | getValues([boolean]) |
resetValues | 重置全部表单的值。支持传入一个对象，把表单重置为对象里面对应的值 | resetValues([object]) |


## 更多用法
可以把各种组件的更高级用法的例子截图贴在这里
[!图片](/path/to/img.jpg "Title")
