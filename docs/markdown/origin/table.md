展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 组件&配置

### # table

| 参数           | 说明                     | 类型             | 默认值   |
|---------------|--------------------------|-----------------|---------|
| rowSelection  | 列表项是否可选择，具体见下面配置`rowSelection` | object  | null  |
| pagination    | 分页器，配置项参考 [Pagination](#/Navigation/Pagination)，设为 false 时不展示和进行分页 | object |  |
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
| title  | 表格标题         | Function(currentPageData)   | |
| scroll | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：`{{ x: true, y: 300 }}` | object   | -  |
| onChange      | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter) |  |
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
| render     | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格 行/列合并 | Function(text, record, index) {} | - |
| filters    | 表头的筛选菜单项           | object[]           | - |
| filterMultiple | 是否多选 | boolean    | true    |
| filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string[] | - |
| sorter     | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | Function&#124;boolean | - |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `false` | boolean&#124;string | - |
| colSpan    | 表头列合并,设置为 0 时，不渲染 | number      |         |
| onFilter   | 本地模式下，确定筛选的运行函数 | Function    | - |
| onCellClick | 单元格点击回调 | Function(record, event) | - |

#### *rowSelection*

选择功能的配置。

| 参数              | 说明                     | 类型             |  默认值   |
|------------------|--------------------------|-----------------|---------------------|
| type | 多选/单选，`checkbox` or `radio` | string | `checkbox`  |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string[] | []  |
| getCheckboxProps | 选择框的默认属性配置        | Function(record) |  -   |
| selections | 自定义选择项，见下面配置 `selection`, 设为 `true` 时使用默认选择项 | object[]&#124;boolean | true |
| onChange | 选中项发生变化的时的回调 | Function(selectedRowKeys, selectedRows) | -   |
| onSelect | 用户手动选择/取消选择某列的回调         | Function(record, selected, selectedRows) |   -   |
| onSelectAll | 用户手动选择/取消选择所有列的回调    | Function(selected, selectedRows, changeRows) |   -   |
| onSelectInvert | 用户手动选择反选的回调 | Function(selectedRows) | - |

#### *selection*

| 参数              | 说明                     | 类型             |  默认值   |
|------------------|--------------------------|-----------------|---------------------|
| key | React 需要的 key，建议设置 | string | -  |
| text | 选择项显示的文字 | string &#124; `UF.init({...})` | -  |
| onSelect | 选择项点击回调 | Function(changeableRowKeys) | -   |

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

