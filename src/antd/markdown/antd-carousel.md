
旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 组件&配置

### # carousel

| 参数             | 说明                                         | 类型     | 默认值                          |
|------------------|----------------------------------------------|----------|---------------------------------|
| effect           | 动画效果函数，可取 scrollx, fade | string | scrollx |
| dots | 是否显示面板指示点 | boolean   | true |
| vertical | 垂直显示 | boolean   | false |
| autoplay | 是否自动切换 | boolean   | false |
| easing | 动画效果 | string   | linear |
| beforeChange      | 切换面板的回调                              | function(from, to) | 无
| afterChange       | 切换面板的回调                              | function(current)  | 无

### 函数调用

函数名称 | 说明 | 参数 |  默认
---- | ---- | ----- | ----- 
next | 切换到下一面板 | next() |
prev | 切换到上一面板 | prev() |
goto | 切换到指定index的面板 | goto(index) |