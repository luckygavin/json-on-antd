
## 概述

要开发一个页面，都离不开页面的布局。框架提供了5种类型的布局组件，几种组件按照一定的规则自由组合，即可得到一些常见的页面布局效果。

## 布局组件类型

- `Layout`：布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
- `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

## 例子

如下配置，即可得到一个包含导航条、侧边栏等的上中下布局：

```javascript
{
    type: 'layout',
    style: {marginTop: 30},
    content: [
        {
            type: 'header',
            style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
            content: 'Header'
        },
        {
            type: 'content',
            content: {
                type: 'layout',
                content: [
                    {
                        type: 'sider',
                        style: {background: '#3ba0e9', color: '#fff', textAlign: 'center', lineHeight: '120px'},
                        content: 'Sider'
                    },
                    {
                        type: 'content',
                        style: {background: '#108ee9', color: '#fff', textAlign: 'center', minHeight: '120px', lineHeight: '120px'},
                        content: 'Content'
                    }
                ]
            }
        },
        {
            type: 'footer',
            style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
            content: 'Footer'
        }
    ]
}
```

日常应用中，把`content`的字符串内容用组件配置填充，即可得到使用当前布局的界面。

更详细的用法，可见[页面布局](#/General/Layout)