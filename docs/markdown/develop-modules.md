如前面的[路由&模块](#/Develop/Install)中已经多少接触了一些模块化开发的思路。这里细说一下具体用法。

## 概述

模块化开发使得各个模块间可以自由组合、复用，易于维护。

这里先介绍一种上手简单的开发方式，如果有使用构建工具经验的可以看 [另一种模式](#/Develop/Build)。

之所以说上手简单，是因为同样无需搭建前端开发环境，只需准备JS文件，并且按照一定的规则（内部集成了[requirejs](http://requirejs.org)）书写和引入依赖文件，即可实现各模块文件的按需加载、动态引入。


## 通用规则

* 首先可以在`UF.config`中的`modules`属性进行配置，例如模块查找的根路径、模块路径映射别名等
* 全部模块必须通过`define()`函数定义，即写在`define()`函数里，`define()`函数之外不能有其他内容  
* 如果`define()`函数的参数为一个函数，则函数必须有返回值，返回值为当前模块的配置
* 模块依赖关系可通过`require`函数或者`define`引入，下面会详细讲


## 模块定义

### 用法1： define(object) 
直接定义模块配置。

当模块比较简单不依赖其他模块时，可以直接把模块配置置于`define()`中。

例如 路由&模块 示例中的`page2.js`模块：
```javascript
define({
    type: 'card',
    title: 'Card title 3',
    loading: true
});
```


### 用法2： define(function(){}) 

通过函数返回结果定义模块配置。

`define`函数也可以定义一个函数，函数里面可以写一些逻辑，最后return返回一个对象作为当前模块。

再来回顾一下 路由&模块 示例中的`routes.js`模块：

```javascript
define(function(require) {
    var App = require('App');
    var Page1 = require('Page1');
    return {
        type: 'router',
        routes: [
            ...
        ]
    };
});
```
如示例，`return`返回的结果才是当前模块的配置，当其他模块引入当前模块时，得到的也是 return 返回的结果（例如变量 App 和 Page1）。换一句话说，这里 return 之前的逻辑只会在模块刚加载到浏览器上去时执行一次，之后模块就只剩下 return 返回的结果作为模块而存在。

> 再进一步说，requirejs 加载到的模块如果是函数，会先执行函数，函数的返回结果才当做加载到的模块的内容。当执行函数是遇到 require，会阻塞当前逻辑，再次加载当前模块依赖的模块。

当模块依赖其他模块时，就需要用到`require()`函数引入依赖模块。如上面的示例，使用`require`引入了 App.js 模块和 Page1.js 模块，框架会先加载此依赖的模块再执行后面的逻辑。


### 用法3： define([], function(){})

预先声明依赖的模块，并通过函数返回结果定义模块配置。

`define`定义时，也可以有两个参数，第一个参数为当前模块的依赖模块数组，第二个函数为定义当前模块的函数，函数的参数和第一个参数列举的模块必需一一对应。

以此可以规避`require`函数的使用，实际作用和`用法2`相同，如下：

```javascript
define(['App', 'Page1'], function(App, Page1) {
    return {
        type: 'router',
        routes: [
            ...
        ]
    };
});
```
这种用法相比于`用法2`看起来更简洁一点。

> 更多用法可见：[这里](http://requirejs.org/docs/api.html#define)

## 模块间数据通信

因为上面定义的模块时一个纯配置对象，所以不具备数据通信能力（或者说实现比较复杂）。接下来介绍一种定义动态模块的方法 -- 即返回的不是纯配置，而是一个 return 出一个配置的函数。例如`page2.js`模块。  

先把模块改为`define(function(){})`的形式：  

```javascript
define(function() {
    return {
        type: 'card',
        title: 'Card Title 2',
        loading: true
    };
});
```

然后把配置替换为一个函数，函数可以有多个参数：

```javascript
define(function() {
    return function(title) {
        return {
            type: 'card',
            title: title,
            loading: true
        };
    }
});
```

如上，模块的 title 属性即为一个动态的属性，根据外面传入的不同参数变化。使用的时候也会对应有一些变化，如下：

```javascript
define(function() {
    var Page2 = require('Page2');
    ...
    // component: Page2
    component: Page2('Card Title 22')
    ...
});
```

