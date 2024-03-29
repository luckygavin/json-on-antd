
按照日历形式展示数据的容器。

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。


## 组件&配置

### # calendar

**注意：**calendar 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。


| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| value        | 展示日期       | [moment](http://momentjs.com/)     | 当前日期     |
| defaultValue | 默认展示的日期  | [moment](http://momentjs.com/)     | 默认日期     |
| mode         | 初始模式，`month/year` | string | month  |
| fullscreen   | 是否全屏显示   | boolean     | true         |
| dateCellRender      | 自定义渲染日期单元格，返回内容会被追加到单元格| (date: moment) => UF.init({...})   | 无 |
| monthCellRender     | 自定义渲染月单元格，返回内容会被追加到单元格  | (date: moment) => UF.init({...})   | 无 |
| dateFullCellRender  | 自定义渲染日期单元格，返回内容覆盖单元格| (date: moment) => UF.init({...})   | 无 |
| monthFullCellRender | 自定义渲染月单元格，返回内容覆盖单元格  | (date: moment) => UF.init({...})   | 无 |
| locale       | 国际化配置     | object   | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)  |
| onPanelChange| 日期面板变化回调 | function(date: moment, mode: string) | 无 |
| onSelect     | 点击选择日期回调 | function(date: moment）              | 无 |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无 |