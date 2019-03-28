
### 规则
- 尽量使用 Select 来帮助用户完成输入，避免用户通过键盘直接输入。
- 多选的情况见：[Picker](#/Mobile/DataEntry/Picker)

## 组件&配置

属性 | 说明 | 类型 | 默认值
----|-----|------|------
options    | 数据列表  | `Array<{value, label, children: Array}>` |   - 
value   | 值, 对应数据源的相应级层value    | String  | -
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
