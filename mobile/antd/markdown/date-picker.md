
用于选择日期或者时间。

## 组件&配置

### # date-picker

属性 | 说明 | 类型 | 默认值
----|-----|------|------
mode  | 日期选择的类型, 可选值：`date`,`time`,`datetime`,`year`,`month` | String | `date`
value | 当前选中时间 | Date |  
minDate   | 最小可选日期 | Date  | 
maxDate   | 最大可选日期 | Date  | 
use12Hours | 12小时制 | Boolean | false 
minuteStep |  分钟数递增步长设置   | Number | 1
disabled   | 是否不可用      | Boolean |    false
onChange   | 时间发生变化的回调函数  | (date: Object): void | 
onValueChange | 每列 picker 改变时的回调 | (vals: any, index: number) => void | 
format  | 格式化选中的值 | (value: Date) => date string | 
title  | 弹框的标题 | string&#124;`config` | 
extra   | 显示文案 | String  |  请选择  
prefixCls |  class前缀 | string | 'am-picker' 
className |  样式类名 | string | 
onOk  | 点击选中时执行的回调 | (val): void  | 
onDismiss  | 点击取消时执行的回调 | (): void  | 

注意：日期字符串在不同浏览器有不同的实现，例如 `new Date('2017-1-1')` 在 Safari 上是 Invalid Date，而在 Chrome 上是能正常解析的。

> 注意：`DatePicker` children 建议是 `List.Item`, 如果不是，需要是自定义组件(组件内需处理 `onClick` / `extra` / `children` 属性


### # date-picker-view

DatePickerView 的功能类似于 DatePicker ，但它是直接渲染在区域中，而不是弹出窗口。

参数和`date-picker`保持一致