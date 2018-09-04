
多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 组件&配置

### # checkbox

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| checked | 指定当前是否选中 | boolean  | false |
| onChange | 变化时回调函数 | Function(e:Event) | - |
| indeterminate | 设置半选中状态，只负责样式控制 | boolean | false |

### # checkbox-group

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| value | 指定选中的选项| string[] | [] |
| options  | 指定可选项 [*默认异步属性*] | object[] | [] |
| onChange | 变化时回调函数 | Function(checkedValue) | - |

### 函数调用
> 组件自身带有的函数，调用方法如：`UF('checkbox').checkAll(true)`。

参数       | 说明           | 参数    
-----------|----------------|-----------
checkAll  | 适用于`checkbox-group`，进行全选或取消全选 |  checkAll(boolean)  
getValue  | 获取当前选中的值 |  getValue()  
getDisplayValue  | 获取当前选中的展示内容（label值） |  getDisplayValue()  