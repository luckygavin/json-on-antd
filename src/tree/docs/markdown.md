### 功能说明  
* 配置`expand`实现节点展开控制
* 配置`checkbox`实现复选框功能
* 配置`search`实现搜索功能
* 配置`select`实现点击选择功能
* 配置`source`实现异步加载功能
* 配置`widthResize`实现右边缘拖动加宽功能
* 配置`showLine`实现带连接线的树
* 若没有进行任何配置，则为树形图展示1中的样式

## 配置参数

### 基本参数

| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| style | 树形图的样式配置，必须为符合`react`语法的`css`样式 | Object | - |  |
| expand | 节点展开功能，包含多个可配置参数，见下面详细说明 | Object | - |  |
| checkbox | 复选框功能，包含多个可配置参数，见下面详细说明 | Object | - |  |
| search | 搜索功能 | Object | - |  |
| select | 点选功能，包含多个可配置参数，见下面详细说明 | Object | - |  |
| source | 异步加载功能。参数和通用source参数一致，实际用法略有不同 | Object | - |  |
| widthResize | 右边缘拖动变宽功能，包含多个可配置参数，见下面详细说明 | Object | - |  |
| showLine | 是否展示连接线 | Boolean | false | . |
| data | 外部传入数据，需要按照一定的格式书写，见底部示例 | Array |  | . |

> 当配置了`source`参数时，树组件即具备了异步获取子树的功能，当点击到没有`children`数据又非叶子节点的时候，就会自动去用`source`系列参数获取数据。可见第一个demo的用法

#### expand
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| defaultExpandAll | 默认展开所有树节点 | Boolean | false |  |
| defaultExpandedKeys | 默认展开指定的树节点，数组不为空时屏蔽`defaultExpandAll` | Array | [] |  |
| expandLeavals | 哪些类型节点进行展开，由data数据中的type字段决定，此配置会屏蔽`defaultExpandAll`，`defaultExpandedKeys` | Array | - |  |
| expandedKeys | (受控）展开指定的树节点，设定之后屏蔽`defaultExpandAll`，`defaultExpandedKeys`, `expandLeavals` | Array | [] |  |
| autoExpandParent | 是否自动展开父节点，ture->如果某节点是展开的则其父节点自动展开，false->某节点展开的，但是其父节点是收缩的，只有将父节点展开才能看到某节点的展开情况 | Boolean | true |  |
| onExpand | 展开/收起节点时触发, `expandedKeys`, `e`为两个默认参数 | function(expandedKeys, e:{expanded: bool, node}, nodeData, self) | - | . |

#### checkbox
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| checkable | 节点前添加 `Checkbox` 复选框 | Boolean | false |  |
| checkedKeys | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点`key`，则子节点自动选中；相应当子节点`key`都传入，父节点也自动选中。当设置`checkable = true`和`checkStrictly = true`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | Array | [] |  |
| checkStrictly | 父子之间的选中是否受关联: `true`->不关联，此时必须要设定`checkedKeys`，否则会报错, `false`->关联 | Boolean | false |  |
| defaultCheckedKeys | 默认选中选框，只有在不设定`checedKeys`时起作用 | Array | [] |  |
| onCheck | 点击复选框触发, `checkedKeys`, `e`为两个默认参数 | function(checkedKeys, e:{checked: bool, checkedNodes, node, event}, nodeData, self) | - | . |

#### search
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| enable | 是否启用搜索功能 | Boolean | false |  |
| onlyShowSearchResult | 是否只展示搜索的结果，为`true`时只展示包含搜索内容的节点，`false`时展示全部数据，但是只对包含搜索结果的父节点进行展开 | Boolean | true | . |

#### select
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| defaultSelectedKeys | 默认选中节点 | Array | [] |  |
| selectedKeys | （受控）设置选中的树节点，此配置项将屏蔽`defaultSelectedKeys`配置 | Array | [] |  |
| multiple | 支持点选多个节点（节点本身) | Bealoon | false |  |
| onSelect | 点击树节点触发，`selectedKeys`, `e`为两个默认参数 | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}, nodeData, this) | - | . |

#### widthResize
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| resizeAble | 开启右边缘扩宽功能 | Bealoon | false |  |
| minWidth | 树形图允许扩宽的最小宽度 | String | - |  |
| maxWidth | 树形图允许扩宽的最大宽度 | String | - | . |

<a name="node-parameter"></a>

### # 节点的数据格式
```json
    [{
        name: '0-0',            // 必须
        key: '0-0',             // 必须
        isLeaf: false,          // 非必须，但是当没有isLeaf且没有children属性时，被置为true
        disableCheckbox: false, // 非必须，用于指定复选框是否可选
        disabled: false,        // 非必须，用于指定此节点时候可点
        type: 'leval1',         // 非必须，但是当指定展开哪些层时必须
        children: [             // 子节点格式相同
            ...
        ]
    },
    ...]
```
