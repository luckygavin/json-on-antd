
Flex 是 CSS flex 布局的一个封装。

## 组件&配置

### # flex

属性 | 说明 | 类型 | 默认值
----|-----|------|------
direction | 项目定位方向，值可以为 `row`,`row-reverse`,`column`,`column-reverse`  | String  | `row`
wrap | 子元素的换行方式，可选`nowrap`,`wrap`,`wrap-reverse`  | String  | `nowrap`
justify  | 子元素在主轴上的对齐方式，可选`start`,`end`,`center`,`between`,`around`    | String   | `start`
align    | 子元素在交叉轴上的对齐方式，可选`start`,`center`,`end`,`baseline`,`stretch`  | String   | `center`
alignContent | 有多根轴线时的对齐方式，可选`start`,`end`,`center`,`between`,`around`,`stretch`    | String  | `stretch`

### flex-item

`flex-item` 组件默认加上了样式`{flex: 1}`,保证所有 item 平均分宽度, Flex 容器的 content 不一定是 `flex-item`
