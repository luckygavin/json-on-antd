
滑动操作组件。结合手势操作，从屏幕一侧唤出操作。

## 何时使用
- 一次只可滑动一行列表
- 点击任意按钮之外处或往回滑动该列表可隐藏操作。

## 组件&配置

### # swipe-action

属性 | 说明 | 类型 | 默认值
----|-----|------|------
style      | `swipeout` 样式      | Object |    
left       | 左侧按钮组      | Array | `null` 
right       | 右侧按钮组      | Array | `null` 
autoClose   | 点击按钮后自动隐藏按钮   | Boolean | 
disabled    |   禁用 `swipeout`    | Boolean | `false` 
onOpen      |    打开时回调函数   | (): void | 
onClose  |  关闭时回调函数    | (): void | 
