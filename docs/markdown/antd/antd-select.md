
下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/components/radio/) 是更好的选择。

## 组件&配置

### # select

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| value    | 指定当前选中的条目 | string&#124;string[] |  -  |
| defaultValue | 指定默认选中的条目 | string&#124;string[] |  -  |
| mode | 设置 Select 的模式 | 'multiple' &#124; 'tags' &#124; 'combobox' | - |
| allowClear   | 支持清除 | boolean | false |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | boolean or function(inputValue, option) | true     |
| onSelect | 被选中时调用，参数为选中项的 value (或 key) 值 | function(value, option) | -   |
| onDeselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效 |  function(value) | -   |
| onChange | 选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数 | function(value) | - |
| onSearch | 文本框值变化时回调 | function(value: string) |  |
| onBlur | 失去焦点的时回调 | function | - |
| onFocus | 获得焦点时回调 | function | - |
| placeholder | 选择框默认文字 | string | - |
| notFoundContent | 当下拉列表为空时显示的内容 | string | 'Not Found' |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽 | boolean | true |
| options | 选项数据列表，可以是一个字符串数据，或者对象数组 | string[] &#124; Array<{ label: string value: string disabled?: boolean style?: {}}> |  |
| optionFilterProp | 搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索 | string | value |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`。 | string | `children` （combobox 模式下为 `value`） |
| size    | 选择框大小，可选 `large` `small`  | string      |      default      |
| showSearch | 使单选模式可搜索 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| defaultActiveFirstOption | 是否默认高亮第一个选项。 | boolean | true
| dropdownStyle | 下拉菜单的 style 属性 | object | - |
| dropdownClassName | 下拉菜单的 className 属性 | string | - |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](http://codepen.io/anon/pen/xVBOVQ?editors=001) | Function(triggerNode) | () => document.body |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 `{key: string, label: ReactNode}` 的格式 | boolean | false |
| tokenSeparators | 在 tags 和 multiple 模式下自动分词的分隔符 | string[] |  |

> 注意，如果发现下拉菜单跟随页面滚动，或者需要在其他弹层中触发 Select，请尝试使用 `getPopupContainer={triggerNode => triggerNode.parentNode}` 将下拉弹层渲染节点固定在触发器的父元素中。
