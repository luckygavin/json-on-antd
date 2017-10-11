模块化开发使得各个模块间可以自由组合、复用，易于维护。

## 通用规则

* 全部模块配置必须写在`define()`函数里，`define()`函数之外不能有其他内容  
* 如果`define()`函数的参数为一个函数，则函数必须有返回值，返回值为当前模块的配置


## 具体用法

### 用法1： define(params: object) 
参数为一个对象，即模块的配置。

当模块比较简单不依赖其他模块时，可以直接把模块配置传给`define()`。

例如 快速上手 中的`page2.js`模块，如下：
```javascript
define({
    type: 'card',
    title: 'Card title 3',
    loading: true
});
```


### 用法2： define(params: function(){}) 

再来回顾一些快速上手中的`routes.js`模块，如下：

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
可见，define函数的参数也可以是一个函数，函数里面可以写一些逻辑，最后return返回一个对象作为当前模块的配置。  

当模块依赖其他模块时，就需要用到`require()`函数引入依赖模块。如上面的demo所示，使用`require`引入了 App.js 模块和 Page1.js 模块，框架会先加载此依赖的模块再执行后面的逻辑。`require`函数的返回值为定义模块时`return {...}`返回来的模块配置。


### 用法3： define(params1: [], params2: function(){})

也可以有两个参数，第一个参数为当前模块的依赖模块数组，第二个函数为定义当前模块的函数，函数的参数和第一个参数列举的模块意义对应。

作用和`用法2`相同，如下：

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

