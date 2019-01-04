### 功能说明  
* 通过一定格式的配置以及数据格式，可以将数据导出为.xls以及.csv文件
* 配置`headers`用于文件中表头的展示以及数据的一一对应
* 配置`source`，`params`，`total`可通过后端异步导出数据
* 配置`fileName`，`fileFormat`分别实现导出的文件名称及文件格式类型

## 组件&参数

### # export

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | -----
data | 要导出的全部数据列表，需要按照一定的格式书写 | Array |  | 若传入此属性，则直接把data中的数据导出到文件中
headers | 导出文件中要显示的字段，以及字段对应的表头，值为数组，数组的每个元素为一个对象，见下方详细说明 | Array |  | 必须
source | 获取导出数据接口（一般可直接使用分页接口，接口格式见下面）。此字段用法和全组件通用的`source`一致。为对象时，其中常用的参数还有`url`,`method`,`handler`,`params`等，可见 [通用参数](#/Params) 中的 # source系列  | string&#124;object | | 如果设置`source`或者`source.url`，则认为是异步导出
total | 当前表格所有数据的总条数 (因为在导出前就会使用，所以最好传入，否则在开始前将不会计算所需请求次数，异步请求接口数据必须传递total或count值) | Number |  |
message | 如上面示例的'提示导出'组件，可自定义下面的提示信息：包含两个属性 `page1`、`page2`，属性值都是数组，详见`提示导出CSV文件`demo | Object |  |
fileName | 自定义导出的文件名 | String | 格式：20180524-导出文件 |
fileFormat | 选择导出的文件扩展名，目前支持`.xls`格式和`.csv`格式 | String | `.xls` | 

#### *header*

`headers`为一个数组，数组的每个元素都为一个对象，每个对象具有以下属性：

参数 | 说明 | 类型 | 默认值 | 是否必填
---- | ---- | ----- | ----- | -----
key | 数据中的字段名 | string |  | 必填
title | 表头的列名 | string |  | 必填
render | 数据处理函数，用法同表格的render | function (text, record) {return '';} |  | 


### 函数调用

> 组件自身带有的函数，调用方法如：`UF('export').export()`。

参数 | 说明 | 参数
---- | ---- | ---- 
export | 开始导出。可以传入数据，直接将传入的数据导出来 | export(?data)


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

#### 异步导出接口数据格式
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
