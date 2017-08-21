* 可配置表头已定义的控件的展示，可添加自定义控件
* 分为前端分页和后端分页，可通过content参数传入自定义数据，例如：通过接口获取后前端又做过特殊处理的数据
* 可控制各列的默认隐藏/展示，可在表格渲染完成后，让用户自行选择展示隐藏哪些列
* 可传入params参数，作为通过url向后端请求数据时的参数。可据此实现搜索功能

## 配置参数

### 基本参数
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| config | 表格的整体配置 ， `具体配置见下面config` | Object |  | 必须 |
| content | 外部传入数据。也就是说Table为静态数据，content中有多少数据，Table中数据的总条数就是多少。（一般config中设置了url，也就是数据从后端获取，则不需设置content ）| Array |  | |
| params | 通过url向后端请求时传的参数（一般用于外部搜索） | Object |  | . |

### # config
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| title | 表格名，表头展示信息 | String | | |
| name | 表格键名，区分多个表格，用于做一些设置的缓存的key | String | | |
| url | 获取数据接口，如果传入此字段，则表格数据通过url获取 | String | | |
| method | 获取数据的方式。可选 `get` `post` | String | `get` | |
| key | 指定数据中主键字段名（组件需要根据主键来区分每一行） | String | `id` | |
| tags | 各列列名及各列数据的渲染方式,  详见：**config.tags** | Object | | 必须 |
| rows | 自定义行样式,  详见：**config.rows** | Object | |  |
| pager | 分页配置。可选值：`false` `Object`。当pager值为false时，表格不再进行分页；当pager为对象时，`详见：config.pager` | false/Object | false | |
| cfg | 表格整体的常规设置。 `详见：config.cfg` | Object | | |
| display | 功能控件展示设置。 `详见：config.display` | Object | | . |

### # config.tags
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

### # config.rows
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| className | tr上添加的className：可以是`string`或`function`，如果是函数，函数有一个参数，即整条数据，可以根据此参数对不同的行添加不同的class | string/function(row){} |  | |
| style | tr上添加的style：可以是`object`或`function`，如果是函数，用法同上 | object/function(row){} |  | .|

### # config.pager
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| pageSize | 每页条数。注意，为了方便用户使用，分页值有可能会进行缓存 | Number | 15 | |
| pageType | 分页类型：前端分页/后端分页。可选值：`client` `server` | String | `client` | |
| showQuickJumper | 是否可以快速跳转至某页 | Boolean | false | |
| size | 分页尺寸。当为 `small` 时，是小尺寸分页 | String | | |
| simple | 当添加该属性时，显示为简单分页。只需增加属性，无需传值 | attribute | | . |
更多配置可查看antd配置：[Go](http://antd.uf.baidu.com/components/pagination-cn/)

### # config.cfg
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| header | 是否展示表格上面的标题栏，包括工具栏 | Boolean | true | |
| checkBox | 每行数据是否可勾选 | Boolean | false | |
| retain | 切换分页时是否保留已勾选内容，默认不保留 | Boolean | false | |
| expand | 额外信息字段名称。含有额外信息，位于第一列勾选框之后的小箭头>，点击可展示额外信息 | String |  | |
| tips | 提示信息字段名称。鼠标指在最左侧勾选框那一列时，展示的提示信息气泡 | String |  | . |

### # config.display
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| basic | 基础控件，直接展示在表格表头上方。例：`basic: [filter,export]`，`所有可选值见下面表格` | Array |  | |
| menus | 非常用控件，为了节省空间，把这些控件统一放在一个菜单里 | Array |  |  |
| retract | 表格是否默认收起[`true/false`]；如果不传入此字段，则没有收起功能 | Boolean |  | . |
| filter | 过滤控件过滤字段的黑名单或白名单，默认遍历所有字段。可选值：`blacklist` `whitelist`，blacklist 和 whitelist 的值为数组。例如：`blacklist: ['id','type'] `| Object | | |
| showText | 是否显示控件图标后面的说明文字 | Boolean | true |  |
| custom | 自定义控件，分为 baisc 和 menus 类型，不管是那种类型，都是一个自定义按钮的数组，按钮的属性见 `config.display.custom` | Object | |

##### 所有可选控件说明：

| 控件 | 说明 | 位置 | 是否必填 |
| ---- | ---- | ----- | ----- |
| filter |  过滤功能 | 只能用于basic中 | |
| export |  导出数据 |  | |
| switchTags |  选择要展示的列 |  | |
| setPageSize |  设置分页大小 |  | |
| refresh |  刷新表格按钮 |  | |
| editTable |  编辑表格 |  | |
| fullScreen |  全屏展示 |  | |
| showAllTags |  展示全部列功能 | 只能用于basic中 | . |

### # config.display.custom
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| name | 按钮名称 | String | |
| icon | 按钮图标，如'fa fa-book'，(详见)[http://fontawesome.io/icons/] | String | |
| text | 按钮文字 | String | |
| onClick | 点击按钮时的回调函数，回调函数会返回一个参数，参数为table组件的引用 | function(table){} | |


### 回调函数
| 函数名称 | 说明 | 参数 | 类型 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| refresh | 自定义刷新Table数据函数，自行获取数据且需传入content字段 | | | 使用content字段时必须 |
| onCheckRow | 当行被勾选时触发 | | | |
| onTrClick | 在行上单击时触发 | | | |
| onTrDoubleClick | 在行上双击时触发 | | | |
| onTrHover | 鼠标移入事件 | | | |
| onTrLeave | 鼠标移出事件 | | | . |
| onPageChange | 切换分页事件 | | | . |

## 接口调用
> 可以通过refs在父组件调用一些table内部的函数，例如：`this.refs.table.refresh()`

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

## 传入数据的一些特殊功能字段说明
> `disable`：字段，数据行中，如果此字段设置为了true，则当前行不可选

## 源代码 - React用法
```javascript
import {Component} from 'react';
import Table from 'uf';
/* confit和data见下面`配置和数据` */
const config = {};
const data = [];

export default class TableApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Table ref="table" tableCfg={config} content={data} />
    }
}

```

## 源代码 - 原生JS用法
html:
```html
<div id="content-table"></div>
```
js:
```javascript
Uf.load({Table: Uf.Table});
/* confit和data见下面`配置和数据` */
var config = {};
var data = [];

var table = Uf.create('Table', {
    config: config,
    content: data
});
table.render('#content-table');

```
上面使用了自定义控件按钮，所以模板

### 配置和数据见这里
```javascript

/* confit和data在这里 */
var config = {
    title: 'Table前端分页表格测试',
    name: 'testtable',
    tags: {
        id: 'ID',
        username: {
            title: '用户名',
            sort: true,
            editCfg: {
                edit: true,
                elemType: 'text'
            }
        },
        passwd: {
            title: '密码',
            sort(row1, row2) {
                if (row1['passwd'] < row2['passwd']) {
                    return 1;
                } else if (row1['passwd'] > row2['passwd']) {
                    return -1;
                } else {
                    return 0;
                }
            },
            render: function render(v, row) {
                let style = {
                    color: 'red'
                };
                return React.createElement(
                    'span',
                    {style: style},
                    v
                );
            }
        },
        sex: {
            title: '性别',
            editCfg: {
                edit: true,
                elemType: 'radioGroup',
                options: [
                    {label: '女', value: 'femal'},
                    {label: '男', value: 'male'}
                ]
            }
        },
        like: {
            title: '爱好',
            ellipsis: true,
            style: {width: '100px', color: 'green'},
            className: 'test-class',
            editCfg: {
                edit: true,
                elemType: 'checkbox',
                options: [
                    {label: '苹果', value: 'apple'},
                    {label: '香蕉', value: 'banana'},
                    {label: '梨子', value: 'pear'}
                ]
            }
        },
        department: {
            title: '部门',
            editCfg: {
                edit: true,
                elemType: 'select',
                options: {
                    all: '请选择',
                    sys: '系统部',
                    ps: '大搜',
                    cloud: '公有云'
                }
            }
        },
        marry: {
            title: '是否结婚',
            display: false,
            editCfg: {
                edit: true,
                elemType: 'radio'
            }
        },
        html: {
            title: '展示html',
            type: 'html'
        },
        desc: {
            title: '描述',
            display: false,
            type: 'edit'
        },
        json: {
            type: 'JSON',
            title: 'JSON字段',
            display: true
        },
        _operation: {
            title: '自定义操作',
            render: ()=>{
                return <div className="operation">
                    <a>编辑</a>
                    <a>删除</a>
                </div>;
            }
        }
    },
    pager: {
        pageSize: 2,
        showQuickJumper: true,
        // size: '',
        // simple: true
        showCount: true
    },
    cfg: {
        checkBox: true,
        expand: 'expand',
        tips: 'tips'
    },
    display: {
        basic: ['filter', 'refresh', 'export', 'editTable', 'fullScreen', 'showAllTags'],
        menus: ['refresh', 'export', 'fullScreen', 'switchTags', 'setPageSize'],
        retract: false, // retract 表格是否默认收起
        custom: {
            basic: [{
                name: 'customButton',
                icon: 'fa fa-book',
                text: '自定义:全选',
                onClick: table=>table.checkAll()
            }],
            menus: [{
                name: 'customButton',
                icon: 'fa fa-book',
                text: '获取选中',
                onClick: table=>console.log(table.getSelectedData())
            }]
        }
    }
};
var data = [{
        id: 0,
        html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',
        sex: 'femal',
        like: 'apple,banana,pear',
        marry: '否',
        username: 'luyongfang',
        department: 'sys',
        passwd: 'xiaolu',
        expand: '<strong>任意的html片段</strong>',
        desc: 'ABC',
        tips: '不能选择!',
        json: {a: 1, b: 2}
    }, {
        id: 1,
        html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',
        sex: 'male',
        like: 'apple,pear',
        marry: '是',
        department: 'sys',
        username: 'zhuyu02',
        passwd: 'zhuyu02',
        expand: '<strong>任意的html片段</strong>',
        desc: '幽默大师',
        tips: '说个笑话!',
        json: {a: 1, b: 2}
    }, {
        id: 2,
        html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',
        sex: 'male',
        marry: '是',
        like: 'pear',
        department: 'sys',
        username: 'zhuyu02',
        passwd: 'zhuyu02',
        expand: '<strong>任意的html片段</strong>',
        desc: '幽默大师',
        tips: '说个笑话!',
        json: {a: 1, b: 2}
    }, {
        id: 3,
        html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',
        sex: 'male',
        marry: '是',
        department: 'sys',
        like: 'banana,pear',
        username: 'wangyang21',
        passwd: 'wangyang21',
        expand: '<strong>任意的html片段</strong>',
        desc: '自称咸鱼',
        tips: '爱豪说为啥不是死鱼!',
        json: {a: 1, b: 2},
        disabled: true
}];
```

---

## Tips

### 关于模糊搜索的用法

' ': 空格表示且的关系

:  : 英文分号可以指定只搜某个字段

|  : 竖线表示或的关系

> 优先级：' ' > : > |


