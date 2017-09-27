***注意：这是旧版的表格组件，新版的表格组件在开发中，见`Table`。后面新版支持旧版全部功能后会考虑把旧版下掉***

## 功能介绍

* 可配置表头已定义的控件的展示，可添加自定义控件
* 分为前端分页和后端分页，可通过content参数传入自定义数据，例如：通过接口获取后前端又做过特殊处理的数据
* 可控制各列的默认隐藏/展示，可在表格渲染完成后，让用户自行选择展示隐藏哪些列
* 可传入params参数，作为通过url向后端请求数据时的参数。可据此实现搜索功能

## 组件&配置

### # table2

| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| title | 表头展示信息 | String | | |
| name | 表格名，区分多个表格 | String | | |
| url | 获取数据接口，如果传入此字段，则表格数据通过url获取 | String | | |
| method | 获取数据的方式。可选 `get` `post` | String | `get` | |
| dataIndex | 指定数据中主键字段名（组件需要根据主键来区分每一行） | String | `id` | |
| tags | 各列列名及各列数据的渲染方式,  *`详见：tags`* | Object | | 必须 |
| rows | 自定义行样式,  `详见：rows` | Object | |  |
| pager | 分页配置。可选值：`false` `Object`。当pager值为false时，表格不再进行分页；当pager为对象时，`详见：pager` | false/Object | false | |
| cfg | 表格整体的常规设置。 `详见：cfg` | Object | | |
| display | 功能控件展示设置。 `详见：display` | Object | | |
| data | 外部传入数据。也就是说Table为静态数据，content中有多少数据，Table中数据的总条数就是多少。（一般config中设置了url，也就是数据从后端获取，则不需设置content ）| Array |  | |
| params | 通过url向后端请求时传的参数（一般用于外部搜索） | Object |  | |
| refresh | 自定义刷新Table数据函数，自行获取数据且需传入content字段 | function(){} | | 使用content字段时必须 |
| onCheckRow | 当行被勾选时触发 | function(selectedArr){} | | |
| onTrClick | 在行上单击时触发 | function(row, index, event){} | | |
| onTrDoubleClick | 在行上双击时触发 |function(row, index, event){} | | |
| onTrHover | 鼠标移入事件 | function(row, index, event){} | | |
| onTrLeave | 鼠标移出事件 | function(row, index, event){}| | |
| onPageChange | 切换分页事件 | function(currentPage){} | | . |

#### *tags*
> 最简单的用法：
> `key => value`    key代表数据中的字段名，value为表头的列名

以上为最简单用法。`value` 也可以为一个对象，参数如下：

| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| title | 表头列名 | String |  | 必须 |
| display | 默认隐藏此字段。可在表头工具中配置字段设置按钮来勾选展示哪些字段 | Boolean | true | |
| type | 字段表现形式。可选 `html` `JSON` `edit` `duration` `default`。其中：`html`-一段html，直接展示在页面上；`JSON`-会经过一些样式上的处理之后展示到页面上；`duration`-传入的是日期时间串(2016-12-28 10:00:00),返回据现在(1天14小时) | String | `default` |  |
| className | td上添加的className：可以是`string`或`function`，如果是函数，函数有两个参数，即当前值和当前行的所有数据，可以根据此参数添加不同的class | Object | null |  |
| style | td上添加的style：可以是`object`或`function`，如果是函数，用法同上 | Object | null |  |
| ellipsis | 文字过长截断，鼠标移上去时，展示一个气泡, 如示例中的爱好字段 | Boolean | false |  |
| sort | 支持对当前列进行排序。可以为 `function` 自定义排序规则，类似于`Array.sort`的用法 | Boolean/function | false |  |
| render | 自定义当前列的渲染方式。参数`v`为当前列数据，`row`为整行数据 | function(v, row) | false | . |

#### *rows*
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| className | tr上添加的className：可以是`string`或`function`，如果是函数，函数有一个参数，即整条数据，可以根据此参数对不同的行添加不同的class | string/function(row){} |  | |
| style | tr上添加的style：可以是`object`或`function`，如果是函数，用法同上 | object/function(row){} |  | .|

#### *pager*
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| pageSize | 每页条数。注意，为了方便用户使用，分页值有可能会进行缓存 | Number | 15 | |
| pageType | 分页类型：前端分页/后端分页。可选值：`client` `server` | String | `client` | |
| showQuickJumper | 是否可以快速跳转至某页 | Boolean | false | |
| size | 分页尺寸。当为 `small` 时，是小尺寸分页 | String | | |
| simple | 当添加该属性时，显示为简单分页。只需增加属性，无需传值 | attribute | | . |

更多配置可查看 [Pagination](#/Navigation/Pagination)

#### *cfg*
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| header | 是否展示表格上面的标题栏，包括工具栏 | Boolean | true | |
| checkBox | 每行数据是否可勾选 | Boolean | false | |
| retain | 切换分页时是否保留已勾选内容，默认不保留 | Boolean | false | |
| expand | 额外信息字段名称。含有额外信息，位于第一列勾选框之后的小箭头>，点击可展示额外信息 | String |  | |
| tips | 提示信息字段名称。鼠标指在最左侧勾选框那一列时，展示的提示信息气泡 | String |  | . |

#### *display*
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| basic | 基础控件，直接展示在表格表头上方。例：`basic: [filter,export]`，`所有可选值见下面表格` | Array |  | |
| menus | 非常用控件，为了节省空间，把这些控件统一放在一个菜单里 | Array |  |  |
| retract | 表格是否默认收起[`true/false`]；如果不传入此字段，则没有收起功能 | Boolean |  | . |
| filter | 过滤控件过滤字段的黑名单或白名单，默认遍历所有字段。可选值：`blacklist` `whitelist`，blacklist 和 whitelist 的值为数组。例如：`blacklist: ['id','type'] `| Object | | |
| showText | 是否显示控件图标后面的说明文字 | Boolean | true |  |
| custom | 自定义控件，分为 baisc 和 menus 类型，不管是那种类型，都是一个自定义按钮的数组，按钮的属详见：`display.custom` | Object | |

##### 所有可选控件说明：

| 控件 | 说明 | 位置 | 是否必填 |
| ---- | ---- | ----- | ----- |
| filter |  过滤功能 | 只能用于basic中 | |
| export |  导出数据 |  | |
| switchTags |  选择要展示的列 |  | |
| setPageSize |  设置分页大小 |  | |
| refresh |  刷新表格按钮 |  | |
| fullScreen |  全屏展示 |  | |
| showAllTags |  展示全部列功能 | 只能用于basic中 | . |

#### *display.custom*
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| name | 按钮名称 | String | |
| icon | 按钮图标，如'fa fa-book'，(详见)[http://fontawesome.io/icons/] | String | |
| text | 按钮文字 | String | |
| onClick | 点击按钮时的回调函数，回调函数会返回一个参数，参数为table组件的引用 | function(table){} | |

#### *data*
表格的数据数组格式如下：
```javascript
[{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园2号'
}, {
    key: '3',
    name: '胡彦祖',
    age: 52,
    address: '西湖区湖底公园3号'
}]
```
> `disable`：字段，数据行中，如果此字段设置为了true，则当前行不可选

### 函数调用
> 组件自身带有的函数，调用方法如：`UF('my-table').refresh()`

| 函数名称 | 说明 | 参数 | 类型 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| refresh | 刷新表格。当传入了`config.url`时，会重新请求数据；否则会调用自定义的refresh回调函数 | | | |
| clearSelect | 清除已勾选内容 | | | |
| checkAll | 触发全选 | `checkAll(true)` | | |
| clearFilter | 清空过滤控件 | | | |
| expandAllExtra | 展开显示全部额外信息（最左侧尖角展示的信息） | | | |
| getSelectedData | 获取勾选的数据 | `return [Array]` | | |
| initTable | 传入新的配置，重新渲染表格 | `initTable({config: {...}})` | | |
| showAllTags | 展示全部列 | | | . |


---

### Tips

### 关于模糊搜索的用法

' ' 空格表示且的关系

:   英文分号可以指定只搜某个字段

|   竖线表示或的关系

> 优先级：' ' > : > |


