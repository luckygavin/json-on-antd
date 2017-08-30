输入框自动补全功能。

## 何时使用

需要自动补全时。

## API

| 参数           | 说明                             | 类型        | 默认值 |
|---------------|----------------------------------|------------|---------|
| value    | 指定当前选中的条目 | string  |  无  |
| defaultValue | 指定默认选中的条目 | string   |  无  |
| allowClear   | 支持清除, 单选模式有效 | boolean | false |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | 无 |
| onSelect | 被选中时调用，参数为选中项的 value 值	| function(value, option)	| 无 |
| onSearch | 搜索补全项的时候调用 | function(value) | 无 |
| options | 自动补全的数据源	 | string[] | [] |
| disabled | 是否禁用 | boolean | false |
| placeholder | 输入框提示 | string | - |