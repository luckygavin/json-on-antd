### 功能说明  
* 配置`expand`实现节点展开控制
* 配置`checkBox`实现复选框功能
* 配置`search`实现搜索功能
* 配置`select`实现点击选择功能
* 配置`loadData`实现异步加载功能
* 配置`widthResize`实现右边缘拖动加宽功能
* 配置`showLine`实现带连接线的树
* 配置`showIcon`实现不同节点自定义图标
* 若没有进行任何配置，则为树形图展示1中的样式

## 配置参数

### 基本参数
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| config | 表格的整体配置 ， `具体配置见下面config` | Object |  | 必须 |
| data | 外部传入数据，需要按照一定的格式书写 | Object |  | . |

### # config
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| style | 树形图的样式配置，必须为符合`react`语法的`css`样式 | Object | - |  |
| expand | 节点展开功能，包含多个可配置参数，见详细说明 | Object | - |  |
| checkBox | 复选框功能，包含多个可配置参数，见详细说明 | Object | - |  |
| search | 搜索功能 | Boolean | false |  |
| select | 点选功能，包含多个可配置参数，见详细说明 | Object | - |  |
| loadData | 异步加载功能，包含多个可配置参数，见详细说明 | Object | - |  |
| widthResize | 右边缘拖动变宽功能，包含多个可配置参数，见详细说明 | Object | - |  |
| showLine | 是否展示连接线 | Boolean | false |  |
| showIcon | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式，下方有CSS添加图标的样式书写，注意将id换为你的树形图id | Boolean | false | . |

### # config.expand
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| defaultExpandAll | 默认展开所有树节点 | Boolean | false |  |
| defaultExpandedKeys | 默认展开指定的树节点，数组不为空时屏蔽`defaultExpandAll` | Array | [] |  |
| expandToLeaval | 对哪一类型节点进行展开，由data数据中的type字段决定，此配置会屏蔽`defaultExpandAll`，`defaultExpandedKeys`，如果要该层以上的层都展开，请配置`autoExpandParent`为`true` | String | - |  |
| expandedKeys | (受控）展开指定的树节点，设定之后屏蔽`defaultExpandAll`，`defaultExpandedKeys`, `expandToLeaval` | Array | [] |  |
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


### 源代码 - React用法
```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import Tree from 'uf/tree';
    const config = {
        // 见下方树形图展示2配置
    };
    const Data = [
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
            expandedKeys: ['0-0-1', '0-1'],
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
        search: true,
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
    showLine: true,
    showIcon: true
    }
```
### 示例2自定义图标
```css

    #uf-tree-demo-customized-icon .ant-tree-iconEle {
        position: absolute;
        left: 0;
        background: #fff;
    }
    #uf-tree-demo-customized-icon .ant-tree-iconEle::after {
        font-size: 12px;
        zoom: 1;
        display: inline-block;
        font-family: 'anticon';
        text-rendering: optimizeLegibility;
        color: #999;
        transition: transform .3s ease;
        margin-top: 2px;
        background: #fff;
    }
    #uf-tree-demo-customized-icon .ant-tree-iconEle.ant-tree-icon__docu::after {
        content: "\E664";
    }
    #uf-tree-demo-customized-icon .ant-tree-iconEle.ant-tree-icon__open::after {
        content: "\E699";
    }
    #uf-tree-demo-customized-icon .ant-tree-iconEle.ant-tree-icon__close::after {
        content: "\E662";
    }
    #uf-tree-demo-customized-icon .ant-tree-switcher {
        position: relative;
        z-index: 1;
        background: transparent;
    }
    #uf-tree-demo-customized-icon .ant-tree-switcher::after {
        opacity: 0;
    }
```

### 数据格式说明
```json
    {
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
    }
```


