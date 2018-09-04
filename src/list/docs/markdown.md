对一条数据进行纵向展示。

## 组件&配置

### # list

参数      | 说明                     | 类型 | 默认值 
-------|--------------------------|-------|------
columns| 待展示的字段的说明，类似于`Table`组件的columns，见下面`column` | Object[] |
data   | 待展示数据对象   |  Object |
layout | 布局样式，见下面`layout`    |  Object  |
bordered   | 展示边框   |  boolean | true
interleave | 隔行变色   |  boolean | true

#### *column*

列描述数据对象，是 `columns` 中的一项。

参数       | 说明                       | 类型            |  默认值  
----------|----------------------------|-----------------|---------
title      | 字段显示文字               | string &#124; `config` |  
dataIndex  | 字段名称                     | string |  
width      | 列宽度 | string&#124;number |   
render     | 生成复杂数据的渲染函数，参数分别为当前字段的值，全部数据，返回值是一个组件配置 | Function(text, record) {} |  


#### *layout*

采用栅格系统进行布局。

参数   | 说明                | 类型 | 默认值 
-------|---------------------|-------|------
labelCol  | 字段中文名所占栅格数  | number |  6
valueCol  | 字段内容所占栅格数    | number |  18
labelStyle  | 字段中文名额外样式，例如可以设置最小宽度等 | object | 
valueStyle  | 字段内容额外样式      | object | 