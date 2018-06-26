
输入或选择日期的控件。

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 组件&配置

日期类组件包括以下三种形式。

* DatePicker
* MonthPicker
* RangePicker

### 共同的参数

以下参数为 DatePicker、MonthPicker、RangePicker 共享的参数。

| 参数          | 说明            | 类型     | 默认值        |
|--------------|----------------|----------|--------------|
| default   | `Form`中配置时，使用`default`设置默认值 |   |     |
| allowClear   | 是否显示清除按钮 | boolean     | true         |
| disabled     | 禁用           | boolean     | false        |
| className    | 选择器 className | string | '' |
| style        | 自定义输入框样式     | object     | {}   |
| popupStyle   | 格外的弹出日历样式   | object     | {}   |
| size         | 输入框大小，`large` 高度为 32px，`small` 为 22px，默认是 28px | string   | 无  |
| locale       | 国际化配置 | object   | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)  |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无           |
| getCalendarContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | 无 |
| open | 控制弹层是否展开 | boolean | - |
| onOpenChange   | 弹出日历和关闭日历的回调 | function(status) | 无 |
| placeholder  | 输入框提示文字 | string&#124;RangePicker[] | - |

### # date-picker

| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| value        | 日期。特殊值：`'current'`，自动转换为当前日期 （`Form`中使用时，请在`default`属性上配置'current'） | '2018-05-28' | 无   |
| format       | 展示的日期格式，Y表示年，M表示月，D表示天，H表示小时，m表示分钟，s表示秒钟 | string   | "YYYY-MM-DD" |
| onChange     | 时间发生变化的回调 | function(date: moment, dateString: string) | 无           |
| showTime     | 增加时间选择功能  | Object&#124;boolean | 根据`format`的值确定是否展示 |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](http://antd.uf.baidu.com/components/date-picker/#components-date-picker-demo-disabled-date) |string | moment() |
| showToday    | 是否展示“今天”按钮 | boolean | true |
| disabledTime | 不可选择的时间 | function(date) | 无 |
| onOk | 点击确定按钮的回调 | function() | - |
| renderExtraFooter | 在面板中添加额外的页脚 | () => UF.init({...}) | - |

### # month-picker

| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| value        | 日期。特殊值：`'current'`，自动转换为当前日期 | string  | 无           |
| onChange     | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment, dateString: string) | -    |

### # range-picker

| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| value        | 日期。 特殊值：`'current'`，自动转换为当前日期 | string[] | 无           |
| format       | 展示的日期格式  | string    | "YYYY-MM-DD HH:mm:ss" |
| onChange     | 时间发生变化的回调，发生在用户选择时间时 | function(dates: [moment, moment], dateStrings: [string, string]) | 无           |
| showTime     | 增加时间选择功能  | Object&#124;boolean | `TimePicker` |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](http://antd.uf.baidu.com/components/date-picker/#components-date-picker-demo-disabled-date) |string[] | [moment(), moment()] |
| disabledTime | 不可选择的时间 | function(dates: [moment, moment], partial: `'start'/'end'`) | 无 |
| ranges       | 预设时间范围快捷选择 | { [range: string]:string[] } | 无 |
| renderExtraFooter | 在面板中添加额外的页脚 | () => UF.init({...}) | - |
| onOk | 点击确定按钮的回调 | function() | - |

### # time-picker

| 参数                 | 说明 | 类型 | 默认值 |
|---------------------|-----|-----|-------|
| value               | 当前时间。特殊值：`'current'`，自动转换为当前时间 | string | 无 |
| defaultOpenValue    | 无选中值时，面板打开时高亮的值 |string | moment() |
| open                | 面板是否打开 | boolean | false |
| onOpenChange        | 面板打开/关闭时的回调 | (open: boolean): void | 无 |
| placeholder         | 没有值的时候显示的内容 | string | "请选择时间" |
| onChange            | 时间发生变化的回调     | function(time: moment, timeString: string): void | 无 |
| format              | 展示的时间格式 | string | "HH:mm:ss" |
| disabled            | 禁用全部操作 | boolean | false |
| disabledHours       | 禁止选择部分小时选项 | function() | 无 |
| disabledMinutes     | 禁止选择部分分钟选项 | function(selectedHour) | 无 |
| disabledSeconds     | 禁止选择部分秒选项 | function(selectedHour, selectedMinute) | 无 |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | false |
| getPopupContainer   | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | 无 |
| addon | 选择框底部显示自定义的内容 | function | 无 |
| use12Hours | 使用 12 小时制，为 true 时 `format` 默认为 `hh:mm:ss` | boolean | false |
| className | 选择器类名 | string | '' |
| popupClassName | 弹出层类名 | string | '' |
