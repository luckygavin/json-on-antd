
用于让用户在不同的视图中进行切换。

### 规则
- 标签数量，一般 2-4 个；其中，标签中的文案需要精简，一般 2-4 个字。
- 在 iOS 端的次级页面中，不建议使用左右滑动来切换 Tab，这个和 iOS 的左滑返回存在冲突，eg：详情页中 Tabs。

## 组件&配置

### # tabs

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
prefixCls  | 样式前缀  | string |  rmc-tabs | false
tabs | tab数据 | Models.TabData[] |  | true
tabBarPosition  | TabBar位置 | 'top'&#124;'bottom'&#124;'left'&#124;'right' |  top | false
initialPage  | 初始化Tab, index or key | number&#124;string |  | false
page  | 当前Tab, index or key | number&#124;string |  | false
swipeable  | 是否可以滑动内容切换 | boolean |  true | false
useOnPan  | 使用跟手滚动 | boolean |  true | false
prerenderingSiblingsNumber  | 预加载两侧Tab数量 | number |  1 | false
animated  | 是否开启切换动画 | boolean |  true | false
destroyInactiveTab | 销毁超出范围Tab | boolean |  false | false
distanceToChangeTab | 滑动切换阈值(宽度比例) | number |  0.3 | false
usePaged | 是否启用分页模式 | boolean |  true | false
tabDirection | Tab方向 | 'horizontal'&#124;'vertical' |  horizontal | false
tabBarUnderlineStyle  | tabBar下划线样式 | object |  | false
tabBarBackgroundColor  | tabBar背景色 | string |  | false
tabBarActiveTextColor  | tabBar激活Tab文字颜色 | string |  | false
tabBarInactiveTextColor  | tabBar非激活Tab文字颜色 | string |  | false
tabBarTextStyle  | tabBar文字样式 | object |  | false
renderTab | 替换TabBar的Tab | (tab: Models.TabData) => `config` | | false
renderTabBar  | 替换TabBar | ((props: TabBarPropsType) => `config`)&#124;false |  | false
onChange  | tab变化时触发 | (tab: Models.TabData, index: number) => void |  | false
onTabClick  | tab 被点击的回调 | (tab: Models.TabData, index: number) => void |  | false
