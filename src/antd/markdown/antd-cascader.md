
级联选择框。

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 组件&配置

### # cascader

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| options | 可选项数据源 [*默认异步属性*] | object | - |
| defaultValue | 默认的选中项 | [CascaderOptionType](https://git.io/vMMoK)[]  |[] |
| value | 指定选中项 | [CascaderOptionType](https://git.io/vMMoK)[] | - |
| onChange | 选择完成后的回调 | `(value, selectedOptions) => void` | - |
| displayRender | 选择后展示的渲染函数 | `(label, selectedOptions) => UF.init({...})` | `label => label.join(' / ')` |
| style | 自定义样式 | string | - |
| className | 自定义类名 | string | - |
| changeOnSelect | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示	 | boolean | false |
| popupClassName | 自定义浮层类名 | string | - |
| popupPlacement | 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` | Enum | `bottomLeft` |
| placeholder | 输入框占位文本 | string | '请选择' |
| size | 输入框大小，可选 `large` `default` `small` | string | `default` |
| level | 指定级联框固定最多能级联出几列 | number | 5 |
| disabled | 禁用 | boolean | false |
| allowClear | 是否支持清除 | boolean | true |
| expandTrigger | 次级菜单的展开方式，可选 'click' 和 'hover' | string | 'click' |
| changeOnSelect | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | boolean | false |
| showSearch | 在选择框中显示搜索框 | boolean | false |
| notFoundContent | 当下拉列表为空时显示的内容 | string | 'Not Found' |
| loadData  | 用于动态加载选项，无法与 `showSearch` 一起使用 | `(selectedOptions) => void`  | - |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](http://codepen.io/anon/pen/xVBOVQ?editors=001) | Function(triggerNode) | () => document.body |

`showSearch` 为对象时，其中的字段：

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| filter | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false。 | `function(inputValue, path): boolean` | |
| ignoreCase | 搜索时忽略大小写（内部通过重写`filter`函数实现，如果自定义了filter函数，则此属性无效。注：设为true会降低性能） | `boolean` | false |
| render | 用于渲染 filter 后的选项 | `function(inputValue, path): {...}` | |
| sort | 用于排序 filter 后的选项 | `function(a, b, inputValue)` | |
| matchInputWidth | 搜索结果列表是否与输入框同宽 | boolean | - |

> 注意，如果需要获得中国省市区数据，可以参考 [china-division](https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17)。
