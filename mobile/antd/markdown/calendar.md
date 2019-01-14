
用于选择日期区间。

## 组件&配置

### # calendar

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode | 选择类型 one: 单日 range: 日期区间 | 'one'&#124;'range'| range | false
enterDirection | 入场方向 vertical: 垂直 horizontal: 水平 | 'horizontal'&#124;'vertical'| vertical | false
locale | 本地化 | Models.Locale | | false
onCancel | 关闭时回调 | () => void | | false
onConfirm | 确认时回调 | (startDateTime?: Date, endDateTime?: Date) => void | | false
pickTime|是否选择时间 | boolean | false | false
prefixCls| 样式前缀 | string | rmc-calendar | false
renderShortcut | 替换快捷选择栏，返回结果为组件配置。需要设置showShortcut: true | (select: (startDate?: Date, endDate?: Date) => void) => `config` | | false
renderHeader | 替换标题栏，返回结果为组件配置。 | () => `config` | | false
showShortcut | 快捷日期选择 | boolean | false | false
title | header title | string | {locale.title}|false
visible | 是否显示 | boolean | false | false
defaultDate | 显示开始日期 | Date | today | false
getDateExtra | 日期扩展数据 | (date: Date) => Models.ExtraData | | false
infiniteOpt | 无限滚动优化（大范围选择）| boolean | false | false
initalMonths | 初始化月个数 | number | 6 | false
maxDate | 最大日期 | Date | | false
minDate | 最小日期 | Date | | false
onSelect | 选择区间回调 | (date: Date, state?: \[Date | undefined, Date | undefined\]) => \[Date, Date\]&#124;\[Date\]&#124;void | | false
onSelectHasDisableDate | 选择区间包含不可用日期 | (date: Date[]) => void | | false
rowSize | 行大小 | 'normal'&#124;'xl' | | false
defaultValue | 默认日历选择范围 | \[Date, Date\]&#124;\[Date\] | | false
defaultTimeValue | 默认时间选择值 | Date | | false
