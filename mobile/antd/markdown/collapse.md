
可以折叠/展开的内容区域。

## 何时使用
- 对复杂区域进行分组和隐藏。
- 通常，一次只允许单个内容区域展开；特殊情况，多个内容区域可以同时展开。


## 组件&配置

### # collapse

属性 | 说明 | 类型 | 默认值
----|-----|------|------
activeKey  | 当前激活 tab 面板的 key| Array or String   | 默认无，accordion模式下默认第一个元素
defaultActiveKey | 初始化选中面板的 key | String   | 
onChange      |   切换面板的回调   | (key: string): void |  noop  
accordion    | `手风琴`模式 | Boolean | false  
openAnimation  |  设置自定义切换动画，禁止动画可设为`{}` | Object | 
content  | 每个面板内容   | Panel[]   | 

### # panel

属性 | 说明 | 类型 | 默认值
----|-----|------|------
key  | 对应 activeKey   | String   | 
header | 面板头内容 | string&#124;`config` | 
content | 面板内容 | string&#124;`config` | 
