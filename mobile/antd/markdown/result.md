
在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

### 规则

- 用作非常重要的操作反馈，如支付成功，无网络状态。
- 个性化且优美的插画，可以提升品牌形象。
- 对于错误类型的结果页，页面中需要提供明确的行动点，eg：重新加载。

## 组件&配置

### # result

属性 | 说明 | 类型 | 默认值
----|-----|------|------
imgUrl | 插图 url | string  | -
img | 插图配置，为一个`img`组件或者`icon`组件, 会覆盖 imgUrl 设置  | `config` | -
title | title 文案 | string&#124;`config` | -
message | message 文案 | string&#124;`config` | -
buttonText | 按钮文案 | string | -
buttonType | 请参考 button 的配置 | string | -
onButtonClick | 按钮回调函数 | (e: Object): void | -
