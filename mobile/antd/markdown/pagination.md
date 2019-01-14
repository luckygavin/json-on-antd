
分隔长列表，每次只加载一个页面。

### 规则
- 当加载/渲染所有数据将花费很多时间或者流量时使用

## 组件&配置

### # pagination

属性 | 说明 | 类型 | 默认值
----|-----|------|------
mode  | 形态，可选`button`,`number`,`pointer` | string | `button` 
current  | 当前页号 | number  |  1 
total  | 数据总数 | number  |  0 
simple  | 是否隐藏数值 | boolean | false 
disabled  | 禁用状态 | boolean | false 
onChange | change 事件触发的回调函数 | (e: Object): void | 无
