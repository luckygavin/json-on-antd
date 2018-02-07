
单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 组件&配置

### # radio

Radio要为一组数据。

| 参数           | 说明                             | 类型              | 可选值 | 默认值 |
|----------------|----------------------------------|-------------------|--------|--------|
| onChange       | 选项变化时的回调函数             | Function(e:Event) | 无     | 无     |
| value          | 用于设置当前选中的值             | any            | 无     | 无     |
| defaultValue   | 默认选中的值                     | any            | 无     | 无     |
| showAsButton   | 以一组按钮展示单选组合           | boolean            |  | 无 |
| size           | 大小，只对按钮样式生效           | string            | `large` `default` `small` | `default` |
| options        | 以配置形式设置子元素 [*默认异步属性*]   | string[] &#124; Array<{ label: string value: string disabled?: boolean style?: {}}>            | 无     | 无     |

