
通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

## 组件&配置

### # input-number

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| min     | 最小值   | number | -Infinity        |
| max     | 最大值       | number      | Infinity           |
| value     | 当前值       | number      |            |
| step     | 每次改变步数，可以为小数  | number&#124;string      |  1      |
| precision | 数值精度 | number | - |
| defaultValue     | 初始值       | number      |            |
| onChange     | 变化回调       | Function(value: number &#124; string) |            |
| disabled     | 禁用       | boolean      |      false      |
| size    | 输入框大小  | string      |      无      |
| formatter | 指定输入框展示值的格式 | function(value: number &#124; string): string | - |
| parser | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | function( string): number | - |
