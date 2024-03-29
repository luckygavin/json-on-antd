
可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。

## 组件&配置

### # collapse

| 参数             | 说明                                         | 类型     | 默认值                          |
|------------------|----------------------------------------------|----------|---------------------------------|
| accordion        | 手风琴，每次只打开一个tab。默认打开第一个。 | boolean   | 无 |
| activeKey        | 当前激活 tab 面板的 key| string[]&#124;string   | 默认无，accordion模式下默认第一个元素|
| fixed            | 固定面板，无法再点击面板头进行折叠展开交互 |  boolean  | false |
| bordered        | 是否显示边框，提供一套没有边框的简洁样式。 |  boolean  | true |
| onChange         | 切换面板的回调                               | Function | 无  |

### 函数调用
> 组件自身带有的函数，调用方法如：`UF('collapse').open(key)`。

参数       | 说明           | 参数    
-----------|----------------|-----------
open  | 打开某个Panel，传参为Panel的key值 |  open(key)  
close  | 关闭某个Panel，传参为Panel的key值 |  close(key)  

### # panel

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| key  | 对应 activeKey   | string                  | 无 (如果key不存在则取name值)   |
| header | 面板头内容 | string&#124;`config` | 无     |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | boolean | false |
| style | 样式对象，可用于控制每个面板的样式，如背景色、圆角和边距等 | object | false |
