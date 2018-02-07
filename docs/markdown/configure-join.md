很多组件可以嵌套子组件，那么在配置中如何实现组件嵌套呢？

## content 属性

所有组件都有`content`属性，此属性可以是一个子组件的配置，也可以是多个子组件配置组成的一个数组。例如：
```javascript
{
    "type": "button",
    "mode": "primary",
    "content": [
        {
            "type": "icon",
            "mode": "left"
        },
        "Backward"
    ]
}
```
> Tips: 如上，任何时候，需要一个组件配置的位置均可以使用一个简单的字符串代替


## 组件的特殊属性

有些组件的某些属性也可以为一个子组件的配置，例如`Card`组件的`title`属性，文档中的类型为`string|config`，则`title`属性即可以为字符串，又可以为一个子组件配置。其他组件亦如此。