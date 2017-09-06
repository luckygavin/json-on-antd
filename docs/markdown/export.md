### 功能说明  
* 通过一定格式的配置以及数据格式，可以将数据导出为.xls以及.csv文件
* 配置`headers`用于文件中表头的展示以及数据的一一对应
* 配置`source`，`params`，`total`可通过后端异步导出数据
* 配置`fileName`，`fileFormat`分别实现导出的文件名称及文件格式类型

## 配置参数

| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| ---- | ---- | ----- | ----- | ----- |
| data | 要导出的全部数据列表，需要按照一定的格式书写 | Array |  | 若传入此属性，则按同步导出处理，直接把data中的数据导出到文件中 |
| headers | 导出文件中要显示的字段，以及字段对应的表头，值为数组，数组的每个元素为一个对象，见下方详细说明 | Array |  | 必须 |
| source | 导出数据接口（一般可直接使用分页接口，接口格式见下面）(如果总数已知且确定的话total可选) | String |  | 如果传入此属性，则认为是异步导出 |
| params | 需要传递给后台的参数，如一些搜索及高级查询的过滤条件等（同`Table`组件的params参数） | Object |  |  |
| total | 当前表格所有数据的总条数 (因为在导出前就会使用，所以最好传入，否则在开始前将不会计算所需请求次数，异步请求接口数据必须传递total或count值) | Number |  |  |
| message | 如上面示例的'提示导出'组件，可自定义下面的提示信息：包含两个属性 `page1`、`page2`，属性值都是数组，详见`提示导出CSV文件`demo | Object |  |  |
| fileName | 自定义导出的文件名 | String | 导出时间+'导出文件' |  |
| fileFormat | 选择导出的文件名，目前只支持.xls文件和.csv文件，故值为'.xls'或'.csv' | String | '.xls' | . |

#### config.headers
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
