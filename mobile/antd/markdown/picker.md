
在一组预设数据中进行选择，e.g. 省市区选择。

### 规则
- 多个选项一同选择
- DatePicker 是 Picker 的特定模式。
- 单选的情况见：[Select](#/Mobile/DataEntry/Select)

## 组件&配置

属性 | 说明 | 类型 | 默认值
----|-----|------|------
options    | 数据列表  | `Array<{value, label, children: Array}>` |   - 
value   | 值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层value    | Array  | -
cols    | 列数    | Number |  `3`  
cascade  | 是否联动 | Boolean | true 
format  | 格式化选中目标的函数  | function(labels): any | if label is string: `(labels) => { return labels.join(',');}` else: `(labels) => { return labels;} ` 
onChange | 选中后的回调，可使用 | (val): void | - 
onPickerChange | 每列数据选择变化后的回调函数   | (val): void | - 
onVisibleChange  | 当显隐状态变化时回调函数    | (visible: bool): void |  -   
itemStyle | 每列样式  |   Object   | -  
indicatorStyle  | indicator 样式 | Object | - 
okText  | 选中的文案 | String |  `确定`  
dismissText  | 取消选中的文案 | String |  `取消`  
onOk  | 点击选中时执行的回调 | (val): void  |  无 
onDismiss  | 点击取消时执行的回调 | (): void  |  无  
title  | 大标题 | String | - 
extra  |  | String |  `请选择`  
content | 组件的`content`建议是`item`组件, 如果不是，需要是自定义组件(组件内需处理`onClick`/`extra`属性) | Object | 
disabled  | 是否不可用 | Boolean | false 
