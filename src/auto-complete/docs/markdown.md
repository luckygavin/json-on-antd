输入框自动补全功能。组件分本地模式和远程模式两种：
* 当配置了`source`时，组件数据来源于后端，即先通过后端查询，再提示出来；
* 否则，组件为自动添加后缀，后缀内容在属性`suffix`中配置

## 组件&参数

### # auto-complete

| 参数           | 说明                             | 类型        | 默认值 |
|---------------|----------------------------------|------------|---------|
| value    | 指定当前选中的条目 | string  |  无  |
| defaultValue | 指定默认选中的条目 | string&#124;string[] |  -  |
| mode | 设置多选`multiple`、或单选`combobox`、或仅可选择（不可任意输入）`select-only` | 'multiple' &#124; 'combobox' | 'combobox' &#124; 'select-only' |
| allowClear   | 支持清除, 单选模式有效 | boolean | false |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | 无 |
| onSelect | 被选中时调用，参数为选中项的 value 值	| function(value, option)	| 无 |
| disabled | 是否禁用 | boolean | false |
| placeholder | 输入框提示 | string | - |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽 | boolean | true |
| size    | 选择框大小，可选 `large` `small`  | string      |      default      |
| tokenSeparators | 在`multiple`模式下自动分词的分隔符。便于直接粘贴多条内容时，比如粘贴多个用户名，会自动按分词符分成多个。见第3个demo | string[] |  |
| disabled | 是否禁用 | boolean | false |
| source | 同通用source参数 | object |  |
| startSign | 触发补全标志，当符合设置标志时再开始补全功能，见如下说明 | number&#124;string&#124;function | 1 |

> 底层使用了[`Select`](#/DataEntry/Select)组件，所以可以参考select组件属性，不过由于自动补全组件的一些特性，部分参数被限制

**`startSign`补全标志属性用法**

> * 当为数字时，表示当输入字符串长度满足设置长度时会发起请求，进行查询补全功能
> * 当为字符串时，表示当字符串中出现设置的字符串时，进行查询补全功能
> * 当为函数时，表示每次输入后，会把输入的字符串传递给函数进行判断，当函数返回true时，进行查询补全功能


### # local-complete
| 参数           | 说明                             | 类型        | 默认值 |
|---------------|----------------------------------|------------|---------|
| value    | 指定当前选中的条目 | string  |  无  |
| defaultValue | 指定默认选中的条目 | string&#124;string[] |  -  |
| suffix | 本地模式下，自动补全的数据源	 | string[] | [] |

> 其他属性可参考`auto-complete`