### 功能说明  
* 通过一定格式的配置以及数据格式，可以将数据导出为.xls以及.csv文件
* 配置`headers`用于文件中表头的展示以及数据的一一对应
* 配置`source`，`params`，`total`可通过后端异步导出数据
* 配置`fileName`，`fileFormat`分别实现导出的文件名称及文件格式类型

## 配置参数

### 基本参数
| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| config | Export 导出的整体配置 ， 具体配置见下面`config` | Object |  | 必须 |
| data | 要导出的全部数据列表，需要按照一定的格式书写 | Array |  | 若传入此属性，则按同步导出处理，直接把data中的数据导出到文件中 |

### # config

| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| headers | 导出文件中要显示的字段，以及字段对应的表头，值为数组，数组的每个元素为一个对象，见下方详细说明 | Array |  | 必须 |
| source | 导出数据接口（一般可直接使用分页接口，接口格式见下面）(如果总数已知且确定的话total可选) | String |  | 如果传入此属性，则认为是异步导出 |
| params | 需要传递给后台的参数，如一些搜索及高级查询的过滤条件等（同`Table`组件的params参数） | Object |  |  |
| total | 当前表格所有数据的总条数 (因为在导出前就会使用，所以最好传入，否则在开始前将不会计算所需请求次数，异步请求接口数据必须传递total或count值) | Number |  |  |
| message | 如上面示例的'提示导出'组件，可自定义下面的提示信息：包含两个属性 `page1`、`page2`，属性值都是数组，详见`提示导出CSV文件`demo | Object |  |  |
| fileName | 自定义导出的文件名 | String | 导出时间+'导出文件' |  |
| fileFormat | 选择导出的文件名，目前只支持.xls文件和.csv文件，故值为'.xls'或'.csv' | String | '.xls' | . |

### # config.headers
> 数组的每个元素都为一个对象，每个对象具有两个属性`key`，`title`，`key`属性的属性值为数据中的字段名，`title`属性的属性值为表头的列名

```javascript
headers: [
    {
        key: 'name',
        title: '姓名'
    },
    {
        key: 'age',
        title: '年龄'
    },
    {...}
]
```

### # 异步导出接口数据格式
```json
success:
{
    status:0,
    data:[{…},…],
    total/count: 720
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
import Export from 'uf/export';
import {Button} from 'antd';

export default class ExportApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // 以下均为模拟数据，在实际应用中可根据情况获取
    const config1 = {
        // 见下方配置及数据中的config1
    };
    const config2 = {
        // 见下方配置及数据中的config2
    };
    const config3 = {
        // 见下方配置及数据中的config3
    };
    const data3 = [
        // 见下方配置及数据中的data3
    ];

    render() {
        return (
            <div>
                <Export config={config1}>
                    <Button key='1' type = "primary">默认导出</Button>
                </Export>
                <Export config={config2}>
                    <Button key='2' type = "primary">提示导出CSV文件</Button>
                </Export>
                <Export config={config3} data={data3}>
                    <Button key='3' type = "primary">同步导出</Button>
                </Export>
            </div>
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
### 示例配置与数据
```javascript
const commenHeaders = [
    {
        key: 'id',
        title: 'ID'
    },
    {
        key: 'hostname',
        title: '主机名'
    },
    {
        key: 'sn',
        title: 'SN'
    },
    {
        key: 'status',
        title: '状态'
    },
    {
        key: 'model_id',
        title: '型号'
    },
    {
        key: 'rack',
        title: '机架位'
    }
];
let config1 = {
    // 导出数据接口的url（一般可直接使用分页接口）
    source: 'docs/php/download.php',
    // 表格中要显示的字段，以及字段对应的表头
    headers: commenHeaders,
    params: {
        isExport: true,
        container_id: 484,
        zone: 'china',
        type:'server'
    }
};
// 异步方式
let config2 = {
    source: 'docs/php/download.php',
    headers: commenHeaders,
    params: {
        isExport: true,
        container_id: 484,
        zone: 'china',
        type:'server'
    },
    total: 720,
    fileName: '异步导出CSV文件demo',
    fileFormat: '.csv',
    message: {
        page1: ['请注意，程序会自动根据分页大小依次向服务端请求数据，全部请求完毕后生成CSV下载。不要将分页大小设置的过大，以免服务器端查询数据超时。'],
        page2: ['如果下载的文件用Excel或者其他文本编辑器打开提示文件格式与扩展名不一致，请选择“是”，直接用打开即可。', '为防止常规单元格式下excel的自动转化，所有字段均转化为文本！']
    }
};
// 同步方式
let config3 = {
    headers: commenHeaders
};
let data3 = [{'id': '1924', 'hostname': 'tc-click-log1-off.tc', 'sn': '686N32X',
    'status': '14', 'model_id': '15', 'rack': 'TC706-03-11-4机架位',
    'container_id': '488', 'rms_product_id': '174'}
];

```
