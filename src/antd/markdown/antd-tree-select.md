
树型选择控件。

## 何时使用

- 类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

## 组件&配置

### # tree-select

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| value    | 指定当前选中的条目 | string/string[] |  -  |
| defaultValue | 指定默认选中的条目 | string/string[]   |  -  |
| multiple   | 支持多选（当设置 treeCheckable 时自动变为true） | boolean | false |
| treeCheckable | 显示 checkbox | boolean | false |
| onSelect | 被选中时调用 | function(value, node, extra) | -   |
| onChange | 选中树节点时调用此函数 | function(value, label, extra) | - |
| allowClear | 显示清除按钮 | boolean | false |
| onSearch | 文本框值变化时回调 | function(value: string) | - |
| placeholder | 选择框默认文字 | string | - |
| searchPlaceholder | 搜索框默认文字 | string | - |
| dropdownStyle | 下拉菜单的样式 | object | - |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽 | boolean | true |
| size    | 选择框大小，可选 `large` `small`  | string      | 'default' |
| showSearch | 在下拉中显示搜索框(仅在单选模式下生效) | boolean | false |
| disabled | 是否禁用 | boolean | false |
| showCheckedStrategy | `SHOW_CHILD`: 默认只显示子节点; `SHOW_ALL`: 显示所有选中节点(包括父节点); `SHOW_PARENT`: 只显示父节点(当父节点下所有子节点都选中时). | string | 'SHOW_CHILD' |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 value 类型从 `string` 变为 `{key: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] }` 的格式 | boolean | false |
| treeDefaultExpandAll | 默认展开所有树节点 | boolean | false |
| treeDefaultExpandedKeys | 默认展开的树节点 | string[] | - |
| treeCheckStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联）| boolean | false |
| filterTreeNode | 是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值 | boolean&#124;Function(inputValue: string, treeNode: TreeNode) (函数需要返回bool值) | Function |
| treeNodeFilterProp | 输入项过滤对应的 treeNode 属性 | string | 'value' |
| treeNodeLabelProp | 作为显示的 prop 设置 | string | 'title' |
| source | 异步加载数据 | object | - |
| treeData | 树形列表数据 | array<{value, label, children, [disabled, selectable]}> （value 在整个树范围内唯一） | [] |
| treeDataSimpleMode | 使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 数据拉平，不再有children，变为这样的数据结构: [{id:1, pId:0, value:'1', label:"test1",...},...], `pId` 是父节点的 id) | false&#124;Array<{ id: string, pId: string, rootPId: null }> | false |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode) | () => document.body |


### 函数调用
参数       | 说明           | 参数    
-----------|----------------|-----------
getValue  | 获取当前选中的值 |  getValue() 


### # 节点的数据格式
```json
    [
        {
            label: 'Node 1',            // 必须
            value: '1-1',               // 必须
            isLeaf: false,              // 非必须
            disabled: false,            // 非必须，用于指定此节点时候可点
            children: [                 // 子节点格式相同
                ...
            ]
        },
        ...
    ]
```
