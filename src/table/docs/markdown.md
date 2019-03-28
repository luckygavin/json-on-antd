展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 组件&配置

### # table

| 参数           | 说明                     | 类型             | 默认值   |
|---------------|--------------------------|-----------------|---------|
| title  | 表格标题栏配置，可配置题目及表格控件，具体见下面配置[`title`](#/Custom/Table/-title-)     | string &#124; object   | - |
| rowSelection  | 列表项是否可选择，具体见下面配置[`rowSelection`](#/Custom/Table/-rowselection-) | object  | null  |
| pagination    | 分页器，具体见下方配置[`pagination`](#/Custom/Table/-pagination-) ，设为 false 时不展示和进行分页 | object &#124; `false` |   |
| size          | 正常或紧凑型表格，依次间距变小：`default`、`middle`、`small`、`mini`、`crowd`  | string | default |
| data    | 数据数组，见下面示例 `data` | any[] |            |
| columns   | 表格列的配置描述，具体项见下表[`columns`](#/Custom/Table/-column-) | ColumnProps[] | - |
| rowKey        | 表格行 key 的取值，每一行需唯一。可以是字符串或一个函数 | string &#124; row=>row.id | 'id' |
| rowClassName  | 表格行的类名      | Function(record, index):string | - |
| indentSize    | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number   | 15 |
| bordered  | 是否展示外边框和列边框 | boolean | false      |
| showHeader  | 是否显示表头 | boolean          | true      |
| expanded  | 配置额外的展开行，具体见下面配置[`expanded`](#/Custom/Table/-expand-) | object          | true      |
| footer | 表格尾部         | Function(currentPageData) &#124; `config`  | |
| scroll | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：`{{ x: true, y: 300 }}` | object   | -  |
| source        | 获取数据接口，如果传入此字段，则表格数据通过url获取。此字段用法和全组件通用的`source`一致，具体可见 [通用参数](#/Params/-source-) 中的 # source系列  | string &#124; object | - |
| source.autoLoad | 特别提醒下source下面的`autoLoad`参数，是否组件渲染完成后自动加载数据 | boolean | true | 
| source.autoReload | 特别提醒下source下面的`autoReload`参数，是否组件刷新时自动重新加载数据 | boolean | true | 
| params | `source.params`的别名，通过source向后端请求时传的参数（一般用于外部搜索)，由于调用频繁，所以放在source平级方便设置 | Object |  | 
| doubleClickEdit | 双击行时进行编辑，需配合`crud.edit` | | |
| crud | 表格的扩展功能，增加简单的配置即可拥有常用的增删改查等功能。详见：[`Table Crud 表格扩展`](#/Custom/TableCrud) | Object |  | 
| rowTooltips   | 表格行的额外提示信息，展示位置固定。返回空时不展示提示图标  | Function(record, index):string | - |
| rowTooltipsIcon | 表格行的额外提示信息图标  | string | - |
| emptyFieldPlaceholder  | 字段不存在或为空时展示的展示位符，比如`-` | string |   |
| onChange      | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter) |  |
| onRowClick    | 点击行时触发 | Function(record, index, event)   | - |
| onRowDoubleClick| 双击行时触发 | Function(record, index, event)   | - |
| onRowMouseEnter | 鼠标移入行时触发 | Function(record, index, event)   | - |
| onRowMouseLeave | 鼠标移出行时触发 | Function(record, index, event)   | - |

#### *expanded*

| 参数       | 说明                       | 类型    |  默认值  |
|-----------|----------------------------|--------|---------|
| expandedRowRender  | 额外的展开行 | Function | - |
| defaultExpandedRowKeys | 默认展开的行 | string[] | - |
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |
| onExpand      | 点击展开图标时触发 | Function(expanded, record) | |
| onExpandedRowsChange | 展开的行变化时触发 | Function(expandedRows) | |

#### *column*

列描述数据对象，是 `columns` 中的一项。

| 参数       | 说明                       | 类型            |  默认值  |
|-----------|----------------------------|-----------------|---------|
| title      | 列头显示文字               | string &#124; `config` | - |
| display    | 默认是否展示列当前列             | boolean | true |
| authority  | 关联权限点，可根据权限点控制是否展示列，详见[`全局配置.authority`](#/Develop/Config/-authority)   | string |  |
| dataIndex  | 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法。其中`_operation`为一特殊值，可见[`column._operation`](#/Custom/Table/-column-_operation-) | string | - |
| enum      | 字段内容翻译，详见下方[`columns.enum`](#/Custom/Table/-column-enum-) | array&#124;`source` | -  |
| width      | 列宽度 | string&#124;number | -  |
| minWidth   | 列最小宽度 | string&#124;number | -  |
| style      | 自定义样式。当为函数时，函数参数同render，函数返回一个样式对象 | object&#124;function | -  |
| className  | 列的 className | string          |  -      |
| fixed      | 列是否固定，可选 `true`(等效于 left) `'left'` `'right'` | boolean&#124;string | false |
| render     | 生成复杂数据的渲染函数，参数分别为当前字段的值，当前行数据，@return里面可以设置表格 行/列合并, 返回值必须是一个UF组建配置Object格式 | function(text, record, index) {} | - |
| exportRender | 针对导出数据时的处理函数，要求处理结果必须为字符串 | function(text, record) {return '';} | - |
| filter     | 表头的筛选设置，详见下方[`columns.filter`](#/Custom/Table/-column-filter-)      | Object           | - |
| sorter     | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | Function&#124;boolean | - |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `false` | boolean&#124;string | - |
| colSpan    | 表头列合并,设置为 0 时，不渲染 | number      |         |
| cellColSpan | 单元格列合并，需要单元格上下配合，避免单元格冗余或缺失。函数返回结果即为合并列数 | function(text, record, index)      |      
| cellRowSpan | 单元格行合并，需要单元格左右配合，避免单元格冗余或缺失。函数返回结果即为合并行数 | function(text, record, index)      |      
| onCellClick | 单元格点击回调 | Function(record, event) | - |
| textType | 字段表现形式。可选 `html` `json` `duration` `thousandSeparator` `default`。其中：`html`-一段html，直接展示在页面上；`json`-会经过一些样式上的处理之后展示到页面上；`duration`-传入的是日期时间串(2016-12-28 10:00:00),返回据现在(1天14小时)；`thousandSeparator`-进行千位分隔（每3位进行逗号分隔） | String | `default` |
| ellipsis | 文字过长截断，鼠标移上去时，展示一个气泡, 如示例中的爱好字段 | Boolean | false |
| editable | 此单元格是否可编辑,详见下方[`columns.editable`](#/Custom/Table/-column-editable-) | Object&#124;function | - |

#### *column.enum*

将字段根据枚举的列表、或者通过接口获取的列表、或者实时查询，将字段翻译成另一个字段。

**`enum`有3种用法:**  
* **直接列举出全部值**：格式为`enum: [{key: '', value: ''}]`, key为原数据的值，value为要展示的值  
* **枚举的值为通过接口一次取得**，enum为一个对象，格式为：`enum: {url: '',handler(){}}`, 参数和`source`一致  
* **分页数据加载时实时通过接口查询**，enum同2一致，额外设置属性`realtime`为`true`。适用于数据量较大无法通过接口一次获得的情况

enum为对象时，除[`source`](#/Params/-source-)系列参数外，还需要注意一下参数：

| 参数       | 说明                       | 类型    |  默认值  |
|-----------|----------------------------|--------|---------|
| cache  | 默认会开启缓存，即枚举数据仅会加载一次。如果需要动态获取，则可把cache置为 false | boolean | true  |
| allowEmpty  | 可控制当数据不在枚举类型中时，是否要展示原值。当配置为false时，展示源数据 | boolean | true  |
| realtime | 声明翻译功能为实时翻译，即每次翻页实时去接口查询（默认是一次请求全量，当数据量较大时可以切换为实时翻译） | boolean&#124;object | false |
| realtime.key | realtime为对象时，key用于声明传递给后端的参数名称 | string | 'ids' |
| realtime.comma | realtime为对象时，用于设置是否逗号分隔多个id值。当置于false时，参数值为一个数组 | boolean | true |


**`enum`更多应用场景**  
> 1、新增、编辑的输入框的表单元素里，如果存在表格里配置了枚举类型的字段，当元素为select、radio等具有options属性且没有配置options，组件会自动把枚举的列表添加到该元素上。  
> 2、批量新增、批量编辑的keys列表里，如果存在表格里配置了枚举类型的字段，则对应字段也会自动做转换：批量编辑时自动填入的数据是转换之后的值；新增和编辑后提交到后端会自动再转换回id；  
> 3、每个字段的翻译结果都会追加到每行的原数据中，查看详情、模糊搜索时可以直接从行数据中获取到，字段命名规则为`${dataIndex}.fyi`

具体使用可见 [Table Crud](#/Custom/TableCrud) 中Demo的名称字段（idcId）的展示/新增/编辑/批量编辑，以及提交数据时的对应的字段内容

`enum`属性配置为异步返回时，接口返回格式为以下三种均可：
```javascript
// 格式一：
[
    {id: 1, name: 'GPU', ...},
]
// 格式二：
[
    {key: 1, value: 'GPU'},
]
// 格式三:
{
    1: 'GPU',
}
```

#### *column.filter*

| 参数       | 说明                       | 类型            |  默认值  |
|-----------|----------------------------|-----------------|---------|
| type      | 筛选形式，共三种`checkbox`, `radio`, `input`               | string | - |
| options      | 当筛选形式为`checkbox`或`radio`时，该字段用于指定通过哪些值作为筛选条件               | string[] | 默认为所有可能出现的值 |

#### *column.editable*

主要为Form组件的item配置项, 图标配置主要为Icon组件配置项, 下面只是列出常用配置项, 其余的可参照相应组件的配置。

| 参数       | 说明                       | 类型            |  默认值  | 是否必须 |
|-----------|----------------------------|-----------------|---------|--------|
| type | 即为输入类型组件的type。除type外，可以使用一切输入型组件的参数 | string | - | 必须 |
| name | 表单域名称，key，提交时以此名称为键 | string | - | 必须 |
| rules | 验证规则,详见Form组件的item.rules配置项 | string | - |  |
| icon | 编辑单元格相应图标, 固定为三个属性 `icon: { editIcon: { mode: 'edit'}, submitIcon: null, closeIcon: {mode: 'close-circle'}}`. 如需去除则将相应属性赋值为null, 当不设置某一属性时则为默认. 当submitIcon为null时自动添加点击其它地方关闭编辑框功能. 当直接把icon设置为null时，则editIcon为默认值，其余两个设置为null | Object &#124; null | 默认图标样式 |  |
| api | 待定 | string | - | 必须 |

> `editable`也可以为一个函数，函数的参数和render的参数一致，返回结果为以上的配置对象。以此可以动态设置 editable 的配置

#### *column._operation*

当 `dataIndex` 为 _operation 时，指定此列为操作列，其render函数返回值为操作按钮配置数组，且操作按钮配置中可以使用`action`属性和crud配置做关联，以实现表格中对单行的编辑、删除等功能。crud配置详见：[`Table Crud 表格扩展`](#/Custom/TableCrud) 

例如：

```javascript
columns: [
    ...
    {
        title: '操作',
        dataIndex: '_operation',
        width: 100,
        render: ()=>([
            {type: 'a', content: '日志', action: 'showLog'},
            {type: 'a', content: '编辑', action: 'edit'},
            {type: 'a', content: '删除', action: 'delete'}
        ])
    }
]
```


#### *rowSelection*

选择功能的配置。

| 参数              | 说明                     | 类型             |  默认值   |
|------------------|--------------------------|-----------------|---------------------|
| type | 多选/单选，`checkbox` or `radio` | string | `checkbox`  |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string[] | []  |
| disabledRow | 选择框的不可选的条件，返回值应该为一个Boolean类型的值        | Function(record) |  -   |
| selections | 自定义选择项，见下面配置 `selection`, 设为 `true` 时使用默认选择项 | object[]&#124;boolean | true |
| hideDefaultSelections | 去掉『全选』『反选』两个默认选项 | boolean | false |
| onChange | 选中项发生变化的时的回调 | Function(selectedRowKeys, selectedRows) | -   |
| onSelect | 用户手动选择/取消选择某列的回调         | Function(record, selected, selectedRows) |   -   |
| onSelectAll | 用户手动选择/取消选择当前页所有列的回调    | Function(selected, selectedRows, changeRows) |   -   |
| onSelectInvert | 用户手动选择反选当前页的回调 | Function(selectedRows) | - |

#### *rowSelection.selection*

| 参数              | 说明                     | 类型             |  默认值   |
|------------------|--------------------------|-----------------|---------------------|
| key | React 需要的 key，建议设置 | string | -  |
| text | 选择项显示的文字 | string &#124; `UF.init({...})` | -  |
| onSelect | 选择项点击回调 | Function(changeableRowKeys) | -   |

#### *pagination*

| 参数             | 说明                               | 类型          | 默认值                   |
|------------------|------------------------------------|---------------|--------------------------|
| current          | 当前页数                           | number        | -                   |
| pageType         | 分页类型：前端分页时值为`client`, 后端分页值为`server`,为后端分页时每切换一页会去后端取数据，当采用后端分页时除了传递指定的params外，还会传递`page` `size` `pageType`三个字段，`page`为要获取的第几页 `size`为获取数据条数 `pageType`为分页方式   | string | client |
| pageSize         | 每页条数   | number | 10 |
| onChange         | 页码改变的回调，参数是改变后的页码及每页条数 | Function(page, pageSize)      |    |
| showSizeChanger  | 是否可以改变 pageSize              | boolean        | false                    |
| pageSizeOptions  | 指定每页可以显示多少条             | string[] | ['10', '20', '30', '40'] |
| onShowSizeChange | pageSize 变化的回调                | Function(current, size)      |                      |
| showQuickJumper  | 是否可以快速跳转至某页             | boolean         | false                    |
| size             | 当为「small」时，是小尺寸分页      | string        |                       |
| simple           | 当添加该属性时，显示为简单分页     | boolean        |                      |
| total            | 数据总数      | number        |                       |
| showTotal        | 用于显示数据总量和当前数据顺序     | Function(total, range) |            |
| layout           | 设置分页布局，可以设置在左侧展示还是在右侧。可选值：`left`、`right`    | string        | 'right'  |
| paramIndex       | 更改请求中的分页参数名称，推荐使用`source.paramIndex`参数进行修改  | object        | {page: 'page', size: 'size'} |


#### *title*

参数              | 说明                     | 类型             |  默认值
-----------------|--------------------------|-----------------|--------
text | 表格标题 | string&#124;`config` | -  |
basicWidget | 基础控件，直接展示在表格表头上方。例：`basic: ['filter', 'export']`，所有可选控件见下表；也可以是`自定义控件`。参数为一个数组，数组中每一项可以是字符串，也可以是对象，对象的可选属性见`控件属性` | array |
menuWidget | 非常用控件，为了节省空间，把这些控件统一放在一个菜单里，可选控件见下表 | array | 
showText | 是否显示控件图标后面的说明文字 | Boolean | true 
extra | 额外自定义 控件/组件 列表，本身为一个数组，数组中每一项为一个组件配置，例如一个按钮 | array | 

> extra或者widget中的自定义控件，都有一个额外的`action`属性，可以关联配置的`crud`，用法类似上面介绍的[`column._operation`](#/Custom/Table/-column-_operation-)

##### *所有可选基础控件说明*

控件 | 说明 | 位置
---- | ---- | -----
filter |  模糊搜索功能。`前端分页`、`后端分页`都支持。当表格为后端分页时模糊搜索不再为实时获取，而是输入完成后点击回车或者🔍，组件会重新调用source接口，并额外传递一个`search`参数，参数值为输入内容。控件会随Table的分页形式自行切换 | 只能用于basic中
export |  导出数据。会随Table的分页形式自行切换交互形式 |
switchTags |  选择要展示的列 |
refresh |  刷新表格按钮 |
fullScreen |  全屏展示 |
showAllTags |  展示全部列功能 |
setPageSize |  设置分页条数 |

使用基础控件，可以直接使用字符串形式（控件名），如果想更改控件的默认展示效果，可改用对象的方式，参数和自定义控件类似。`name`即为组件名称，`icon`和`text`可自定义。

##### *控件属性*

为一个对象，包含以下几部分：  

| 参数 | 说明 | 类型 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| name | 控件名称。可以为上表中的基础控件名称，如果不在上表中，则认为是自定义控件 | String | 是 |
| icon | 按钮图标，如：'like-o'，详见 [这里](#/General/Icon) | String |  |
| text | 按钮文字 | String |  |
| type | 组件类型。一旦设置了组件类型，则控件不再以默认的展示方式展示，及设置什么类型就展示成什么类型，例如select | String |  |
| action | 同`column._operation`的action | String |  |
| onClick | 点击按钮时的回调函数，回调函数会返回一个参数，参数为 table 组件的引用 | function(table){} | `自定义组件`必填 |
| blacklist | `filter`控件默认检索全部字段，可以设置一个白名单来声明只检索哪些字段。参数为待检索的字段名列表 | array | 仅`filter`控件有效 |
| whitelist | `filter`控件可以设置一个黑名单，作用和上面刚好相反 | array | 仅`filter`控件有效 |
| paramIndex | 后端分页时，`filter`控件会向后端发送请求，可以通过此参数修改请求携带的参数名称，默认值为`'search'` | string | 仅`filter`控件有效 |
| label | `filter`控件前面的label文字提示 | string | 仅`filter`控件有效 |
| cache | 是否开启缓存。会永久保存用户自己选择的要展示的字段（默认开启） | boolean | 仅`switchTags`控件有效 | 


### 函数调用
> 组件自身带有的函数，调用方法如：`UF('my-table').refresh()`。

参数 | 说明 | 参数
---- | ---- | ---- 
refresh | 刷新表格数据，会展示loading等 | refresh()
reload | 手动触发表格获取数据 | reload()
showCrud | 展示crud属性中配置的增删改查等弹框。第一个参数为要调用的是crud中配置的哪个弹框，即配置的key；之后的参数为相应弹框需要的额外参数，例如编辑弹框需要把需要编辑的数据传入等  | showAdd(action, otherParams)
export | 手动触发导出数据功能，可以用于置于任何位置的按钮点击后调用表格的导出功能 | export()
getSelected | 手动获取已选中的数据 | getSelected()
getSelectedKeys | 获取当前全部选中行的key | getSelectedKeys()
selectAll | 手动触发全选 | selectAll()
clearSelect | 手动触发全选 | clearSelect()
getValues | 获取Table当前的全部数据（源数据） | getValues()
getDisplayValues | 获取Table当前的全部数据（包含展示数据） | getDisplayValues()

### 其余一些 Tips

#### data 数据格式
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
}]
```
**注意：**  

在 Table 中，`data` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `data` 默认将每列数据的 `key` 属性作为唯一的标识。

如果你的数据没有这个属性，务必使用 `rowKey` 来指定数据列的主键。若没有指定，控制台会出现以下的提示，表格组件也会出现各类奇怪的错误。

#### 关于后端分页数据缓存问题

如`Table`组件中使用后端分页，如果数据不是实时更新的，可以开启数据缓存功能，切换分页后，再查看原来分页的数据即可无需再次请求。

**但是需要注意**：可能会影响编辑、查询等刷新表格的功能，所以需要谨慎使用。

具体方法有两种：
* 一种是配置`source.cache`参数，把`cache`设置为true，可见 [通用参数](#/Params/-source-) `source`的用法
* 另一种是`UF.config`中配置，具体使用方法可查看 [全局配置](#/Develop/Config/-global-cacheapis-) `global.cacheApis`

#### 