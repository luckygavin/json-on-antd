
单选框

## 组件&配置

### # radio

属性 | 说明 | 类型 | 默认值
----|-----|------|------
defaultChecked |   初始是否选中   | Boolean  | 无 
checked    |   指定当前是否选中  | Boolean  | 无 
disabled      |  禁用  | Boolean |  false 
onChange    | change 事件触发的回调函数 | (e: Object): void |   无 


### # radio-item

基于`List.Item`对`Radio`进行封装,`List.Item`的`extra`属性固定传入`Radio`,其他属性和`List.Item`一致。
其他 API 和 Radio 相同。


### # radio-buttons

按钮形式的radio

属性 | 说明 | 类型 | 默认值
----|-----|------|------
options  | 选项数组,值是字符串        | array |  []  
value  |  当前选中的值  | string |   
prefixCls  | 样式前缀        | String |  `am-segment`  
tintColor  | 组件主色调      | String |  `#2DB7F5`  
disabled  | 是否启用         | Boolean |  false  
onChange    | 回调函数, 其中`e.nativeEvent.selectedSegmentIndex`是选中项索引,`e.nativeEvent.value`是选中的值. | (e): void | 
onValueChange    |    回调函数   | (val): void | 
