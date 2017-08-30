### 功能说明  
* 配置`expand`实现节点展开控制
* 配置`checkBox`实现复选框功能
* 配置`search`实现搜索功能
* 配置`select`实现点击选择功能
* 配置`loadData`实现异步加载功能
* 配置`widthResize`实现右边缘拖动加宽功能
* 配置`showLine`实现带连接线的树
* 若没有进行任何配置，则为树形图展示1中的样式

## 配置参数

### 基本参数
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| config | 树形控件的整体配置 ， `具体配置见下面config` | Object |  | 必须 |
| data | 外部传入数据，需要按照一定的格式书写 | Array |  | . |

### # config
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| style | 树形图的样式配置，必须为符合`react`语法的`css`样式 | Object | - |  |
| expand | 节点展开功能，包含多个可配置参数，见详细说明 | Object | - |  |
| checkBox | 复选框功能，包含多个可配置参数，见详细说明 | Object | - |  |
| search | 搜索功能 | Object | - |  |
| select | 点选功能，包含多个可配置参数，见详细说明 | Object | - |  |
| loadData | 异步加载功能，包含多个可配置参数，见详细说明 | Object | - |  |
| widthResize | 右边缘拖动变宽功能，包含多个可配置参数，见详细说明 | Object | - |  |
| showLine | 是否展示连接线 | Boolean | false | . |

### # config.expand
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| defaultExpandAll | 默认展开所有树节点 | Boolean | false |  |
| defaultExpandedKeys | 默认展开指定的树节点，数组不为空时屏蔽`defaultExpandAll` | Array | [] |  |
| expandLeavals | 哪些类型节点进行展开，由data数据中的type字段决定，此配置会屏蔽`defaultExpandAll`，`defaultExpandedKeys` | Array | - |  |
| expandedKeys | (受控）展开指定的树节点，设定之后屏蔽`defaultExpandAll`，`defaultExpandedKeys`, `expandLeavals` | Array | [] |  |
| autoExpandParent | 是否自动展开父节点，ture->如果某节点是展开的则其父节点自动展开，false->某节点展开的，但是其父节点是收缩的，只有将父节点展开才能看到某节点的展开情况 | Boolean | true |  |
| onExpand | 展开/收起节点时触发, `expandedKeys`, `e`为两个默认参数 | function(expandedKeys, e:{expanded: bool, node}) | - | . |

### # config.checkBox
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| checkable | 节点前添加 `Checkbox` 复选框 | Boolean | false |  |
| checkedKeys | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点`key`，则子节点自动选中；相应当子节点`key`都传入，父节点也自动选中。当设置`checkable = true`和`checkStrictly = true`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | Array | [] |  |
| checkStrictly | 父子之间的选中是否受关联: `true`->不关联，此时必须要设定`checkedKeys`，否则会报错, `false`->关联 | Boolean | false |  |
| defaultCheckedKeys | 默认选中选框，只有在不设定`checedKeys`时起作用 | Array | [] |  |
| onCheck | 点击复选框触发, `checkedKeys`, `e`为两个默认参数 | function(checkedKeys, e:{checked: bool, checkedNodes, node, event}) | - | . |

### # config.search
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| enable | 是否启用搜索功能 | Boolean | false |  |
| onlyShowSearchResult | 是否只展示搜索的结果，为`true`时只展示包含搜索内容的节点，`false`时展示全部数据，但是只对包含搜索结果的父节点进行展开 | Boolean | true | . |

### # config.select
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| defaultSelectedKeys | 默认选中节点 | Array | [] |  |
| selectedKeys | （受控）设置选中的树节点，此配置项将屏蔽`defaultSelectedKeys`配置 | Array | [] |  |
| multiple | 支持点选多个节点（节点本身) | Bealoon | false |  |
| onSelect | 点击树节点触发，`selectedKeys`, `e`为两个默认参数 | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) | - | . |

### # config.loadData
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| enable | 开启异步请求功能，只有为`true`时以下几项配置才有效 | Bealoon | false |  |
| source | 异步请求地址 | String | - |  |
| params | 异步请求所需要的各种参数，这些参数要在数据中包含 | Object | - | . |
> 请求回来的数据格式必须是：`{ status: 0/1, data: [], msg: ''}`
> `status`为0时，请求数据成功，1失败(注意是number类型);
> `data`为请求回来的数据;
> `msg`为请求结果文字表述。

### # config.widthResize
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| resizeAble | 开启右边缘扩宽功能 | Bealoon | false |  |
| minWidth | 树形图允许扩宽的最小宽度 | String | - |  |
| maxWidth | 树形图允许扩宽的最大宽度 | String | - | . |

### # 每一个节点的数据格式
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
### # url参数对应接口的格式
```json
success:
{
    status:0,
    data:[{…},…]
}
error:
{
    status: 1,
    msg: 'error'
}
```

### 源代码 - React用法
```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import Tree from 'uf/tree';
    const config = {
        // 见下方树形图展示2配置
    };
    const data = [
        // 见下方数据格式说明
    ];
    export default class TreeDemo extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            };
        }
        render() {
            return (
                <Tree config={config} data={data} />
            );
        }
    }
```
## 源代码 - 原生JS用法
html:
```html
    
```
js:
```javascript
    

```
### 示例1配置
```javascript
    {
        style: {
            width: '300px',
            paddingTop: '10px',
            backgroundColor: '#f2f2f2'
        },
        expand: {
            expandLeavals: ['leval1', 'leval2'],
            autoExpandParent: true,
            onExpand: (expandedKeys, e) => {
                console.log('onExpand:', e);
            }
        },
        checkBox: {
            checkable: true,
            checkStrictly: false,
            defaultCheckedKeys: ['0-0-1-1'],
            onCheck: (checkedKeys, e) => {
                console.log('onCheck:', checkedKeys);
            }
        },
        select: {
            defaultSelectedKeys: ['0-1'],
            multiple: true,
            onSelect: (selectedKeys, e) => {
                console.log('onSelect', e);
            }
        },
        search: {
            enable: true,
            onlyShowSearchResult: true
        },
        loadData: {
            enable: true,
            source: '',
            params: ['key', 'type']
        },
        widthResize: {
            resizeAble: true,
            minWidth: '200px',
            maxWidth: '500px'
        }
    }
```

### 示例2配置
```javascript
    {
        style: {
            width: '300px',
            padding: '10px',
            border: '1px dashed #eaeaea'
        },
        expand: {
            expandedKeys: ['0-0-1', '0-1'],
            autoExpandParent: true,
            onExpand: (expandedKeys, e) => {
                console.log('onExpand:', expandedKeys);
            }
        },
        select: {
            defaultSelectedKeys: ['0-1'],
            onSelect: (selectedKeys, e) => {
                console.log('onSelect', e);
            }
        },
        showLine: true
    }
    
```

### 数据格式说明
```json
    [{
        name: '0-0',
        key: '0-0',
        isLeaf: false,
        disableCheckbox: false,
        disabled: false,
        type: 'leval1', // 用途：指定展开到哪一层
        children: [
            {
                name: '0-0-0',
                key: '0-0-0',
                isLeaf: true,
                // disableCheckbox: false, //此项可去，默认为false
                disabled: true, // 不响应,  //此项也可去，默认为true
                type: 'leval2'
            },
            {
                name: '0-0-1',
                key: '0-0-1',
                isLeaf: false,
                disableCheckbox: false,
                disabled: false,
                type: 'leval2',
                children: [
                    {
                        name: '0-0-1-0',
                        key: '0-0-1-0',
                        disableCheckbox: true, // 复选框不可选，只针对checkBox配置中checkable: true有效
                        disabled: false,
                        type: 'leval3',
                        isLeaf: true
                    },
                    {
                        name: '0-0-1-1',
                        key: '0-0-1-1',
                        disableCheckbox: false,
                        disabled: false,
                        type: 'leval3',
                        isLeaf: true
                    }
                ]
            }
        ]
    },
    {
        name: '0-1',
        key: '0-1',
        isLeaf: false,
        disableCheckbox: false,
        disabled: false,
        type: 'leval1',
        children: [
            {
                // 此节点会触发异步请求，因为满足isLeaf: false,children: []，效果可与树形图展示1中0-1-0节点展开进行对比
                name: '0-1-0',
                key: '0-1-0',
                isLeaf: false,
                type: 'leval2',
                disableCheckbox: false,
                disabled: false,
                children: []
            }
        ]
    }]
```


