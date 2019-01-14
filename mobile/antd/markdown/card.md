
用于组织信息和操作，通常也作为详细信息的入口。

## 组件&配置

### # card

属性 | 说明 | 类型 | 默认值
----|-----|------|------
full  |  是否通栏  | boolean | `false`
header | 卡片头部，详见下方`header` | object | 
content | 卡片中间部分，可以是任意组件配置 | `config` | 
footer | 卡片尾部，详见下方`footer` | object | 

#### *`header`*

属性 | 说明 | 类型 | 默认值
----|-----|------|------
title| 卡片标题 | string&#124;`config` |
thumb| 卡片标题图片 | string&#124;`config` | 
thumbStyle| 标题图片样式 | Object | {}
extra| 卡片标题辅助内容 | string&#124;`config` | 

#### *`footer`*

属性 | 说明 | 类型 | 默认值
----|-----|------|------
content|尾部内容 | string&#124;`config` | 
extra| 尾部辅助内容 | string&#124;`config` | 
