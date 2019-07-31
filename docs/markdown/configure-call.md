
## 引言

所谓组件交互，抽象来讲，就是一个组件操作/调用另一个组件。要想达到这个目的，首先要能获取到要操作的组件，其次，要操作的组件要暴露出可供调用的方法。

## 一个例子

可以先从一个例子开始了解组件的操作过程。如下配置，可以产生一个进度条和加减按钮，点击加减按钮，进度条会随之一起增减。

```javascript
[
    {
        type: "progress",
        name: "my-progress2",
        percent: 10
    },
    {
        type: "button-group",
        style: {
            marginTop: 10
        },
        content: [
            {
                type: "button",
                icon: "minus",
                onClick: function onClick(v) {
	                var progress = UF('my-progress2');
	                progress.set({
	                    percent: progress.get('percent') - 10
	                });
	            }
            },
            {
                type: "button",
                icon: "plus",
                onClick: function onClick(v) {
	                var progress = UF('my-progress2');
	                progress.set({
	                    percent: progress.get('percent') + 10
	                });
	            }
            }
        ]
    }
]
```

读`onClick`函数体可知，函数中应用了`UF`函数来获取一个name名为 my-progress2 的组件，并调用了组件的`get`函数来获取进度条组件的当前的进度值，再调用组件的`set`函数给组件设置新值。

* 使用`UF`函数根据组件名称获取组件，可以类比为jQuery的`$`符号
* 组件具有 `get`/`set` 函数来获取/设置组件属性

其他更复杂的交互场景，其中心思想和上面的demo一致。

除了以上用到的函数外，框架还提供了丰富的交互Api来满足日常使用，更多内容可见：[交互API](#/Api)

