展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 组件&配置

### # table

| 参数           | 说明                     | 类型             | 默认值   |
|---------------|--------------------------|-----------------|---------|
| rowSelection  | 列表项是否可选择，具体见下面配置`rowSelection` | object  | null  |
| pagination    | 分页器，具体见下方配置`pagination`，设为 false 时不展示和进行分页 | object |  |
| size          | 正常或迷你类型，`default` or `small`  | string | default |
| dataSource    | 数据数组，见下面示例 `dataSource` | any[] |            |
| columns       | 表格列的配置描述，具体项见下表`columns` | ColumnProps[] | - |
| rowKey        | 表格行 key 的取值，可以是字符串或一个函数 | string&#124;Function(record):string | 'key' |
| rowClassName  | 表格行的类名      | Function(record, index):string | - |
| expandedRowRender  | 额外的展开行 | Function | - |
| defaultExpandedRowKeys | 默认展开的行 | string[] | - |
| expandedRowKeys | 展开的行，控制属性 | string[] | - |
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |
| loading       | 页面是否加载中 | boolean&#124;[object](#/Feedback/Loading) | false |
| locale        | 默认文案设置，目前包括排序、过滤、空数据文案 | object | `{filterTitle: '筛选', filterConfirm: '确定', filterReset: '重置', emptyText: '暂无数据'}` |
| indentSize    | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number   | 15 |
| bordered  | 是否展示外边框和列边框 | boolean | false      |
| showHeader  | 是否显示表头 | boolean          | true      |
| footer | 表格尾部         | Function(currentPageData)   | |
| titleConfig  | 表格标题栏配置,可配置题目及表格控件，见下方`titleConfig`        | object   | - |
| scroll | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：`{{ x: true, y: 300 }}` | object   | -  |
| onChange      | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter) |  |
| source        | 获取数据接口，如果传入此字段，则表格数据通过url获取  | string  | - |
| method | 获取数据的方式。可选 `get` `post` | String | `get` | 
| params | 通过source向后端请求时传的参数（一般用于外部搜索) | Object |  | 
| onExpand      | 点击展开图标时触发 | Function(expanded, record) | |
| onExpandedRowsChange | 展开的行变化时触发 | Function(expandedRows) | |
| onRowClick    | 点击行时触发 | Function(record, index, event)   | - |
| onRowDoubleClick| 双击行时触发 | Function(record, index, event)   | - |
| onRowMouseEnter | 鼠标移入行时触发 | Function(record, index, event)   | - |
| onRowMouseLeave | 鼠标移出行时触发 | Function(record, index, event)   | - |

#### *column*

列描述数据对象，是 `columns` 中的一项。

| 参数       | 说明                       | 类型            |  默认值  |
|-----------|----------------------------|-----------------|---------|
| title      | 列头显示文字               | string &#124; `config` | - |
| key        | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string          | - |
| dataIndex  | 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法 | string | - |
| width      | 列宽度 | string&#124;number | -  |
| className  | 列的 className             | string          |  -      |
| fixed      | 列是否固定，可选 `true`(等效于 left) `'left'` `'right'` | boolean&#124;string | false |
| render     | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格 行/列合并, 返回值必须是一个UF组建配置Object格式 | Function(text, record, index) {} | - |
| filterConfig    | 表头的筛选设置，详见下方`columns.filterConfig`           | Object           | - |
| sorter     | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | Function&#124;boolean | - |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `false` | boolean&#124;string | - |
| colSpan    | 表头列合并,设置为 0 时，不渲染 | number      |         |
| onFilter   | 本地模式下，确定筛选的运行函数 | Function    | - |
| onCellClick | 单元格点击回调 | Function(record, event) | - |
| textType | 字段表现形式。可选 `html` `JSON` `duration` `default`。其中：`html`-一段html，直接展示在页面上；`JSON`-会经过一些样式上的处理之后展示到页面上；`duration`-传入的是日期时间串(2016-12-28 10:00:00),返回据现在(1天14小时) | String | `default` |
| ellipsis | 文字过长截断，鼠标移上去时，展示一个气泡, 如示例中的爱好字段 | Boolean | false |

#### *column.filterConfig*
| 参数       | 说明                       | 类型            |  默认值  |
|-----------|----------------------------|-----------------|---------|
| filterType      | 筛选形式，共三种`checkbox`, `radio`, `input`               | string | - |
| filters      | 当筛选形式为`checkbox`或`radio`时，该字段用于指定通过哪些值作为筛选条件               | string[] | 默认为所有可能出现的值 |


#### *rowSelection*

选择功能的配置。

| 参数              | 说明                     | 类型             |  默认值   |
|------------------|--------------------------|-----------------|---------------------|
| type | 多选/单选，`checkbox` or `radio` | string | `checkbox`  |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string[] | []  |
| disabledRow | 选择框的不可选的条件，返回值应该为一个Boolean类型的值        | Function(record) |  -   |
| selections | 自定义选择项，见下面配置 `selection`, 设为 `true` 时使用默认选择项 | object[]&#124;boolean | true |
| onChange | 选中项发生变化的时的回调 | Function(selectedRowKeys, selectedRows) | -   |
| onSelect | 用户手动选择/取消选择某列的回调         | Function(record, selected, selectedRows) |   -   |
| onSelectAll | 用户手动选择/取消选择当前页所有列的回调    | Function(selected, selectedRows, changeRows) |   -   |
| onSelectInvert | 用户手动选择反选当前页的回调 | Function(selectedRows) | - |

#### *selection*

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
| onChange         | 页码改变的回调，参数是改变后的页码及每页条数 | Function(page, pageSize)      | noop                     |
| showSizeChanger  | 是否可以改变 pageSize              | boolean        | false                    |
| pageSizeOptions  | 指定每页可以显示多少条             | string[] | ['10', '20', '30', '40'] |
| onShowSizeChange | pageSize 变化的回调                | Function(current, size)      | noop                     |
| showQuickJumper  | 是否可以快速跳转至某页             | boolean         | false                    |
| size             | 当为「small」时，是小尺寸分页      | string        | ""                       |
| simple           | 当添加该属性时，显示为简单分页     | boolean        | -                       |
| showTotal        | 用于显示数据总量和当前数据顺序     | Function(total, range) | -              |


#### *titleConfig*

| 参数              | 说明                     | 类型             |  默认值   |
|------------------|--------------------------|-----------------|---------------------|
| title | 表格标题 | string | -  |
| basicControls | 基础控件，直接展示在表格表头上方。例：`basic: ['filter', 'export']`，所有可选控件见下表；也可以是`自定义控件`。参数为一个数组，数组中每一项可以是字符串，也可以是对象，对象的可选属性见`控件属性` | array | -  |
| menuControls | 非常用控件，为了节省空间，把这些控件统一放在一个菜单里，可选控件见下表 | array | -   |
| showText | 是否显示控件图标后面的说明文字 | Boolean | true  |

##### *所有可选基础控件说明*

| 控件 | 说明 | 位置 | 是否必填 |
| ---- | ---- | ----- | ----- |
| filter |  过滤功能 | 只能用于basic中 | |
| export |  导出数据 |  | |
| switchTags |  选择要展示的列 |  | |
| refresh |  刷新表格按钮 |  | |
| fullScreen |  全屏展示 |  | |
| showAllTags |  展示全部列功能 | 只能用于basic中 | . |

使用基础控件，可以直接使用字符串形式（控件名），如果想更改控件的默认展示效果，可改用对象的方式，参数和自定义控件类似。`name`即为组件名称，`icon`和`text`可自定义。

##### *控件属性*

为一个对象，包含以下几部分：  

| 参数 | 说明 | 类型 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| name | 控件名称。可以为上表中的基础控件名称，如果不在上表中，则认为是自定义控件 | String | 是 |
| icon | 按钮图标，如：'like-o'，详见 [这里](#/General/Icon) | String |  |
| text | 按钮文字 | String |  |
| onClick | 点击按钮时的回调函数，回调函数会返回一个参数，参数为 table 组件的引用 | function(table){} | `自定义组件`必填 |
| blacklist | `filter`控件默认检索全部字段，可以设置一个白名单来声明只检索哪些字段。参数为待检索的字段名列表 | array | 仅`filter`控件有效 |
| whitelist | `filter`控件可以设置一个黑名单，作用和上面刚好相反 | array | 仅`filter`控件有效 |



#### *dataSource*
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
**注意：**  

在 Table 中，`dataSource` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `dataSource` 默认将每列数据的 `key` 属性作为唯一的标识。

如果你的数据没有这个属性，务必使用 `rowKey` 来指定数据列的主键。若没有指定，控制台会出现以下的提示，表格组件也会出现各类奇怪的错误。

