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
filterExtraFieldExcept | 当设置了`formData`时，默认提交数据时会将formData中的字段全部提交（可能会包含未在items中指定的字段）。当`filterExtraFieldExcept`不为空时，提交数据时会过滤出`items`定义的字段以及`filterExtraFieldExcept`指定的字段，其余字段会被过虑掉不提交。 | 逗号分隔的字符串 |  |
formDataHandler | formData格式化函数。数据会先经过此函数处理，再传给form使用 | function(data){return data;} | |
beforeSubmit | 点击提交按钮时，校验完成后传出数据前对数据进行处理，一般用于对表单数据进行格式化 | function(data){} | |
beforeSetValues | 传入数据后，在给表单设置默认数据前，对数据进行格式化，一般用于“编辑功能”，传入的数据不符合表单要求格式时（比如checkbox要的是数组，但是传入的是字符串，就可以用这个函数先处理数据然后在传给Form） | function(data){} | |
onChange | 数据变化时，触发onChange，不过只会返回变化的数据项... | function(data){} | |
onSubmit | 点击提交时，数据校验成功时的回调函数（会被`type='submit'`的按钮的 onClick 参数覆盖） | function(data){} | |
wrappedComponentRef | 获取Form表单的引用和其他组件不太相同，不能直接在refs上获取到，所以需要通过回调函数获得，`this.formRef`即为form组件的引用，用法如下 | wrappedComponentRef={inst=>this.formRef = inst} | |


#### *layout*

参数名称 | 说明 | 类型 | 默认值
----- | --- | ---------| ---
type | 表单布局，有三种： 水平:`horizontal` 垂直:`vertical` 内联:`inline` | string | `horizontal` 
column | 分成多列布局 | number | 1
labelCol | 仅 type 为`horizontal`时有效。使用24栅格系统布局，表单项中label所占栅格的值 | number | 6
wrapperCol | 仅 type 为`horizontal`时有效。表单项中表单域所占栅格的值 | number |14

**注意：在使用column布局时**  
默认会对`items`中的全部项进行计算并按设置的列进行布局。但是当表单项不被`column`整除时，展示并不友好。  
例如：items中有4项，而column为3，这样最后一行只有一项，后面都以此为例子说明。此处有两种处理方式：  
> * 使用`{type: 'empty'}`做“凑数”组件，以保证多余的表单项能和其余表单项保持在所在行中占比一致，即最后一项只占最后一行的三分之一；
> * 使用`null`作为“凑数”组件，计算列时会把`null`计算到布局列中，实际展示时会剔除掉，即最后一项占据最后一行的整行（一般会搭配表单项的layout属性使用）

```javascript
// 方法1：
layout: {
    column: 3
},
items: [
    {type: 'input', name: 'a'},
    {type: 'input', name: 'b'},
    {type: 'input', name: 'c'},
    {type: 'input', name: 'd'},
    {type: 'empty'},
    {type: 'empty'}
]

// 方法2：
layout: {
    column: 3,
    labelCol: 9,
    wrapperCol: 12
},
items: [
    {type: 'input', name: 'a'},
    {type: 'input', name: 'b'},
    {type: 'input', name: 'c'},
    {type: 'input', name: 'd', layout: {labelCol: 3, wrapperCol: 20}},
    null,
    null
]
```
> d表单项layout中的3和20的计算公式为：  
> labelCol = 9 / 3  
> wrapperCol = 24 - labelCol - (24 - (9 + 12)) / 3  
> 以上数字：固定值 (24)，总layout.labelCol (9)，总layout.wrapperCol (12)，总layout.column (3)

#### *item*

参数名称 | 说明 | 类型 | 默认值 | 是否必须
----- | --- | ---------| --- | ---
type | 即为输入类型组件的`type`。**除`type`外，可以使用一切输入型组件的参数** | string | | 必须
name | 表单域名称，key，提交时以此名称为键。**当name不填时，组件不在当表单项处理，而是作为一个纯展示类组件进行解析展示（可在内部再嵌套输入组件）** | string | |
label | 表单域左侧的label | string | | 必须
default | 默认值，注意表单域需要的值是字符串还是数组（例如checkbox-group需要array）| | |
display | 控制表单项是否展示（隐藏时不再获取此表单项的值），可用于做联动等，用法可见下面示例 | boolean | |
join | 实现同一个form间的各表单项联动。join的值为一个多层级的对象，第一层的key为需要与之联动的其他表单项的name，value为的目标表单项需要更新的内容，具体用法可见底部[示例](#/Custom/Form/-join-) | object | | 
help | 额外提示信息，会在label后面增加一个问号，鼠标移上去时提示 | string | |
extra | 额外提示信息，会显示在表单域之后或下方 | string&#124;`config` | |
required | 是否必选 | boolean | `false` | 
rules | 除是否必选外，其他验证规则，表单在提交时会根据验证规则对数据进行校验，只有全部通过才会调用提交的回调函数。此处可以是个对象或者对象数组（多条验证规则）。具体配置见 `item.rules` | object&#124;array | |
formatter | 对表单项的`value`进行格式化处理 | function(value, item) {} |  |
valueType | 根据指定的基础数据类型对当前表单项的`value`进行格式化，仅未定义`formatter`时有效。可选值：`boolean`/`number`/`string` | string |  |
regionConfig | 表单域本身的配置，『极少用』。一般只有自定义组件且特殊情况下需要配置此值，具体参数见`# item.regionConfig` | object | |
notFormItem | 有些用于做布局的展示型组件，也要使用name（用于获取&操作组件）时，可以加此属性显示声明不作为表单项 | boolean | false | 

**注意：** 不配置name属性
> 当组件不配置name时，组件会作为一个纯展示类组件进行解析展示，不会再对其获取数据和设置数据，也无法操作。同时，其内部可以再次嵌套具有name属性的输入型组件。见下面例子：

```javascript
{
    items: [{
        type: 'div',
        style: {background: 'green'},
        content: {
            type: 'input',
            name: 'name',
            label: '名称'
        }
    }]
}
```
更高级的用法，比如可使用表格布局表单；再比如使用Row/Col组件自定义布局。


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

更多高级用法可研究 [async-validator](https://github.com/yiminghe/async-validator)。

#### *item.regionConfig*
表单域本身配置

参数      | 说明                                     | 类型 | 默认值
-----------|-----------------------------------------|-----|-------
valuePropName | 子节点的受控属性，如 `Switch` 的是 'checked' | string | 'value'
trigger | 收集子节点的值的时机 | string | 'onChange'
getValueFromEvent | 可以把 onChange 的参数转化为控件的值 | function(..args) | [reference](https://github.com/react-component/form#optiongetvaluefromevent)
validateTrigger | 校验子节点值的时机 | string\string[] | 'onBlur'
validateFirst | 当某一规则校验不通过时，是否停止剩下的规则的校验	 | boolean | false
exclusive | 是否和其他控件互斥，特别用于 Radio 单选控件 | boolean | false
normalize | 转换默认的 value 给控件. [一个选择全部的例子](https://codepen.io/afc163/pen/JJVXzG?editors=001) | function(value, prevValue, allValues): any | 

**注意：** 使用自定义组件时
> * 提供受控属性 value 或其它与 valuePropName 的值同名的属性。
> * 提供 onChange 事件或 trigger 的值同名的事件。
> * 不能是函数式组件

下面介绍一个常用使用场景：

首先是一个下拉列表，用于选择ID，选中后展示的也是ID；另外放置一个用于纯展示的组件（span），用于展示名称（组件虽为纯展示组件，但是组件展示内容和其他表单域组件一样随着受控属性content变化，即当Form中的item.name对应的字段值变化时，展示的内容随着变化）。

```javascript
items: [
    {
        type: 'select',
        name: 'chassisId',
        label: '位置ID',
        optionLabelProp: 'value',
        join: {
            chassisName: {
                content: ':label'
            }
        }
    },
    {
        type: 'span',
        name: 'chassisName',
        label: '位置名称'
    }
]
```


### 函数调用
> 组件自身带有的函数，调用方法如：`UF('my-form').getValues()`。

函数名称 | 说明 | 参数 |  默认值
---- | ---- | ----- | ----- 
getValues | 获取全部表单的值，默认先校验再返回。该函数支持传入一个参数，如果想跳过校验，则传入参数`false` | getValues([boolean]) |
getDisplayValues | 获取全部表单项展示给用户的值。比如下拉选择框，展示给用户的值和最终提交的内容不同。效果可见demo的自定义按钮 | getDisplayValues() |
resetValues | 重置全部表单的值。支持传入一个对象，把表单重置为对象里面对应的值 | resetValues([object]) |
clearValues | 清除表单。有别于重置 | clearValues() |
resetItem | 重新设置某个表单项的配置 | resetItem(targetName, conf) |


## 更多用法

[!图片](/path/to/img.jpg "Title")

### 组件联动 - join 属性的用法

join实现同一个form间的各表单项联动。

join的值为一个多层级的对象，第一层的key为需要与之联动的其他表单项的name，value（`联动内容`）为的目标表单项需要更新的内容，下面主要介绍联动内容value的用法。

联动内容为目标组件要更新的新配置列表，各个属性取值：可以是固定值；也可以是一个函数；同时为了方便，也可以是两个特殊值，如下：

* **固定值**：例如 true、false 等，用于当组件变化时固定联动另一个组件的某个属性为一个固定值
* **函数**：函数处理结果为联动组件待更新值，函数的参数依次为：当前组件值，目标组件原值，其他（包括目标组件引用、当前组件引用、Form的引用等），可见下面demo
* **特殊值**：
    * `:value` - 可以把当前组件的value值赋值给联动的目标组件的属性；
    * `:label` - 例如Select等组件(每个选项既有value，又有用于展示的label)，将label值赋值给目标组件的属性
    * `:old` - 目标属性的原值，常用语表达式中
    * `表达式` - 也可以是使用上面两个变量的表达式，例如：'1 - :value > 0'、':value || :old'

> 目标组件的配置项也可以直接书写层级关系，例如：'source.params.type': 1，见【示例二】

```javascript
items: [
    // 【示例1：】
    {
        type: 'select',
        label: '接入方式',
        name: 'access_type',
        default: '0',
        join: {
            // 当 select 变化时，会联动name为bandwith的表单项
            bandwith: {
                // 更新表单项的display属性（控制是否展示）
                // 属性的值可以直接为固定值，但更多情况下，值是根据当前选择的值动态变化的
                // 所以也可以是一个函数，函数的返回值为目标组件待更新的新值
                display: function (val, oValue, others) {
                    // others.form.getValues() 可取得当前form全部属性值
                    // others.self.getDisplayValue() 可取得当前下拉框选中项的展示内容
                    return !!Number(val) ? true : false;
                }

                // 可将选中选项的值赋值给目标输入框bandwith的填入内容
                // value: ':value',
                // 如果新值不存在，使用原值
                // value: ':value || :old',
                // 可将选中选项的供用户看的中文赋值给目标输入框bandwith的填入内容
                // value: ':label',
                // 也可以是表达式
                // display: '!:value',
                // display: '1 - :value > 0',
            },

            // 可以同时联动多个
            // line_type: {display: v=>!!+v},
            // port_type: {display: v=>!!+v},
            // is_converge: {display: v=>!!+v}
        },
        options: [
            {value: '0', label: 'VPN'},
            {value: '1', label: '专线'}
        ]
    },
    {
        type: 'input',
        label: '专线带宽',
        name: 'bandwith',
        rules: [{required: true, message: '专线带宽不能为空'}],
        display: false,
        placeholder: 10,
        addonAfter: 'M'
    },

    // 【示例2：】
    // 另一个级联选择的例子，选择区域后，根据选择的区域动态的查询该区域的机房列表
    {
        type: 'select',
        label: '区域',
        name: 'area',
        options: [
            {value: 1, label: '华北'},
            {value: 2, label: '华南'}
        ],
        join: {
            idc_id: {
                // 选择区域后，更新idc_id组件的source参数，组件会自动重新拉取数据
                // * 使用多层级属性；
                // * 使用特殊值:value进行取值；
                'source.params.area_id': ':value'
            }
        }
    },
    {
        type: 'select',
        label: '机房',
        name: 'idc_id',
        source: {
            autoLoad: false,
            url: 'docs/php/data.php',
            handler: data=>data.map(v=>{
                return {value: v.name, label: v.name};
            })
        }
    }
]
```