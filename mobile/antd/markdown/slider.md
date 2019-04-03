
允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度。

### 规则
- 默认状态下，左边为最小值，右边为最大值。
- 一般水平放置。

## 组件&配置

### # slider

属性 | 说明 | 类型 | 默认值
----|-----|------|------
min    | 最小值 |  Number     | 0    
max    | 最大值 |  Number     | 100   
step    | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分。 |  Number or null     | 1   
value     | 设置当前取值。  |  Number  |   
defaultValue   | 设置初始取值。  |  Number   | 0    
disabled    | 值为 `true` 时，滑块为禁用状态  |  Boolean     | false   
onChange    | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。  |  Function     |    
onAfterChange   | 与 `ontouchend` 触发时机一致，把当前值作为参数传入。   |  Function     |    
marks   | 刻度标记，key 的类型必须为 `Number` 且取值在闭区间 [min, max] 内  |  Object{Number:String}     | 
dots    | 是否只能拖拽到刻度上 |  Boolean     | false 
included   | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 |  Boolean     | true   
handleStyle  | 滑块的样式   |  Object    |   
trackStyle | 选中部分滑动条的样式  | Object     |    
railStyle  | 未选中部分 |  Object     |  


### # slider-range

多个滑块，可以用于选择范围。大部分属性和`slider`组件一致，以下为组件自己的额外属性：

属性 | 说明 | 类型 | 默认值
----|-----|------|------
count  | 确定要呈现多少个范围，并将呈现多个滑块(number + 1).  | number | `1`
allowCross  | 可以设置为true，以允许交叉  | boolean | `true`
pushable | 可以设置为`true`，以允许在移动某一滑块时推动周围的滑块。当设置为数字时，该数字将是确保各个滑块之间的最小距离。 | boolean&#124;number | `true` 
