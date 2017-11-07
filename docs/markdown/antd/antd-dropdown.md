
向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 组件&配置

### # dropdown

属性如下

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| trigger     | 触发下拉的行为   | Array['click'或'hover'] | ['hover']        |
| overlay     | 菜单         | `Menu` 见 [Menu](#/Navigation/Menu) | -     |
| visible     | 菜单是否显示 | boolean   | -           |
| disabled    | 菜单是否禁用 | boolean   | -           |
| onVisibleChange  | 菜单显示状态改变时调用，参数为 visible | Function(visible) | - |
| placement | 菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |

菜单可由 `menu` 取得，可设置 `onSelect` 回调。

> dropdown 下的 menu 默认不可选中。如果需要菜单可选中，可以指定 `menu`的`selectable`属性为`true`.

### # dropdown-button

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| type        | 按钮类型，和 Button 一致 | string | 'default' |
| size        | 按钮大小，和 Button 一致 | string | 'default' |
| onClick     | 点击左侧按钮的回调，和 [Button]、 一致 | Function   | - |
| trigger     | 触发下拉的行为   | Array['click'或'hover'] | ['hover']        |
| overlay     | 菜单         | Menu | -     |
| visible     | 菜单是否显示 | boolean   | -           |
| disabled    | 菜单是否禁用 | boolean   | -           |
| onVisibleChange  | 菜单显示状态改变时调用，参数为 visible | Function | - |
| placement | 菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |
