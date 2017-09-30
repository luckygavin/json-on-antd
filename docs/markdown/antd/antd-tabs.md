
选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
- [RadioButton](#/DataEntry/Radio) 可作为更次级的页签来使用。

## 组件&配置

### # tabs

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| activeKey        | 当前激活 tab 面板的 key                      | string   | 无            |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string   | 第一个面板    |
| onChange         | 切换面板的回调                               | Function | 无            |
| onTabClick       | tab 被点击的回调                             | Function | 无            |
| tabBarExtraContent | tab bar 上额外的元素                       | `config` | 无          |
| tabBarStyle      | tar bar 的样式对象                           | object   | -             |
| mode | 页签的基本样式，可选 `line`、`card`       类型   | string   | 'line'      |
| size | 大小，提供 `default` 和 `small` 两种大小，仅当 `mode="line"` 时生效。  | string   | 'default'      |
| tabPosition | 页签位置，可选值有 `top` `right` `bottom` `left`  | string   | 'top'      |
| animated | 是否使用动画切换 Tabs，在 `tabPosition=top\bottom` 时有效 | boolean &#124; {inkBar:boolean, tabPane:boolean} | true, 当 mode="card" 时为 false |

### # tab-pane

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| key  | 对应 activeKey   | string                  | 无 (如果 key 不存在，则取 name 值)    |
| tab  | 选项卡头显示文字 | string&#124;`config` | 无     |
