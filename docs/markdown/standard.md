## 开发标准
> 技术标准: ES6编码标准，React+npm+Webpack技术  

在实际项目开发中，你会需要对ES2015|ES2016|JSX代码进行构建，调试，代理，打包部署等一系列工程化的需求,这里提供npm+webpack的工具链来辅助开发

> 样式标准: antd.css + sass

本框架是基于Antd开发的，大量引用了antd的样式，详见：http://antd.uf.baidu.com

## 项目结构
```
uf
|-- dist                // 构建好的组件代码，供线上使用
|-- docs                // 文档代码
|   |-- app             // 组件 Demo。全部继承`BaseDoc.js`
|   |-- markdown        // 组件 markdown 文档。其中`index.js`把全部md文件整合到一起
|   |-- php             // 某些组件依赖后端接口，这里用来模拟后端接口返回模拟数据
|   `-- entry.js        // 文档入口
|-- lib                 // 编译后的代码，根据src代码生成，暂时用不到
|-- public              // 打包生成的文档代码
|-- src                 // 组件源代码
|   |-- component       // 公共组件，例如：BaseComponent
|   |-- utils           // 公共工具，例如：Ajax、Cache、Utils 等
|   `-- 其他组件         // 其他组件
|-- index.php           // 页面入口
|-- package.json
`-- webpack.config.js   // 构建公共库文件

```

## 文件组织：
src 中，每个组件一个文件夹，里面包含：
> js代码  
> scss代码 - style.scss  
> 引入文件 - index.js  


## 组件开发

### UF组件引入：
`import Export from 'uf/export';`
> uf对应的是src文件夹，export即export组件的文件夹，因为存在index.js，所以无需指定组件名  

### 组件继承：
`import {BaseComponent} from 'uf/component';`  
`export default class Table extends BaseComponent {}`
> 为了方便后面对组件通用功能进行拓展，自己开发的组件全部继承`BaseComponent`

### 组件初始化：
`this.__init();`
> 组件的`constructor`构造函数里，执行完`super(props);`之后，紧接着需调用`this.__init();`函数对组件进行初始化，此函数再BaseComponent里实现，用于做通用处理

### 组件命名：
* 组件名和文件名一致，均采用帕斯卡命名法（即全部首字母大写）
* 组件名要尽量简短易懂，尽量用一个单词

### 通用字段命名
```
config      静态配置
data        数据
params      参数对象
source      异步请求获取数据接口
api         异步提交数据接口
```

### 特殊字段
以下关键字解析时会有额外操作   
content     子内容


### 组件开发规范
1. 除antd外，尽量不要引入其他第三方组件
2. 接口及配置项命名需语义化，统一采用驼峰命名
3. 语义化不是把中文转换成英文，命名时，在能表达清楚意思的前提下，名称要尽量短
4. 组件顶层的配置项尽量少，分为三类：
> config: 不变的配置，比如组件如何展示，需要调用那些控件等  
> data:   组件所需的数据列表  
> params: 组件调用接口时传递的参数（经常变化的参数，如果是静态的，也可以放到config中）  
> 组件暴露出的事件（回调函数）直接放到组件的props上
5. 代码注释
> 开发时，养成随手写注释的习惯  
> 至少每个函数需要注释说明是函数的作用，注释多多益善  
> console.log 使用完要删除，不要到处留下 console.log

---
## BaseComponent 开发及使用
这里的规范不仅限于BaseComponent，其他基础抽象类也使用以下规范

### 开发规范
开发时难免会遇到需要覆盖父类函数的情况，比如要在父类定义过的`__init`函数上追加处理逻辑，则需要即执行父类的原函数（super），又要执行新写入的逻辑，用法如下：  
```javascript
__init() {
    super.__init.call(this);
    this._setProps();
}
```

如需要在React的生命周期的5个函数中增加处理逻辑，可以使用`_componentWillReceiveProps`这种名称之前加下划线的形式，组件调用__init函数时会自动把这几个函数的内容插入到对应的函数最前面执行：  
```javascript
_componentWillReceiveProps = (nextProps, ...params) => {
    super._componentWillReceiveProps && super._componentWillReceiveProps();
    this._initPorps();
}
```
> 需要注意的是：为了防止覆盖父类的函数，需在函数里面加入 `super._xxx`来优先调用一下父类的函数  
> 其次需要注意的有两点： 
> * 主要保证把全部参数传递给原函数  
> * 调用顺序为 父类函数 > 当前函数 > 子类函数

### 命名规范  
直接给用户调用的通用属性或函数，使用正常的驼峰命名，符合用户习惯  
**`property`、`function`**  
> 各个组件通用的函数，可在基础类中实现，例如各种表单组件的获取数据函数：getValue()

为了防止基础类里面的函数及变量被子组件覆盖，不对用户可见的变量和函数全部用特殊的命名方式，如下：  
**`_property`、`_function`**  
> 私有属性和方法，均使用单下划线开头  

**`__property`、`__function`**  
> 供子组件调用的函数，使用双下划线开头，且命名要尽量简短易懂。例如：`this.__init()`

### 功能列表

##### **`__init()`**  
初始化BaseComponent里的功能，例如共享组件、注册自动解除共享等功能  
> 注意本函数的调用时机，应该是在设置父类属性之后（如：`this.__controlled`属性），执行组件本身逻辑之前

##### **`__setCache(key, data)`**  
为了方便使用缓存，直接把调用缓存的接口封装到了Base中，可以通过此接口存储缓存

##### **`__getCache(key)`**  
调用缓存数据

##### **`__mergeProps(...objs)`**  
合并默认配置和用户传入的配置，使后续代码中无需再判断属性值是否存在。支持传多个参数  
以第一个对象为目标，依次把后面的对象merge到上去，支持深层的merge，类似于一个深层的 Object.assign()  
> tips: 如果把 defaultProps 放在第一位，merge完成后defaultProps的值会变成merge后的数据，如果defaultProps需多次使用，会出问题，针对此问题，可以第一个参数放一个空对象，类似于Object.assign的用法   

##### **`__filterProps(props, arr)`**  
过滤props中的某些属性，返回一个新的props对象。用于过滤例如原始标签上不支持的属性，防止会报很多warning。  
> arr即可以为一个数组，也可以直接为一个字符串，如果只需要过滤掉一个属性，则可直接传入一个字符串

##### **`__getData(url, params, success, error, onchange)`**
使用 `get` 的方式向后端发送请求，除url外，其他参数可以不传  
`success`: 不是指请求成功执行的函数，而是请求的数据符合预期，可以正常使用的处理函数(即 'HTTP Status Code' === 200 && data.status === 0)  
`error`:   除了请求出错，还有请求不符合预期都会触发error (即 'HTTP Status Code' !== 200 || data.status !== 0)
>  tips: 如果error执行完返回true，则会继续执行默认的error处理函数       

`onchange`: 请求开始/结束时执行。可以用于绑定 loading 状态     
>  开始执行请求时执行 onchange 参数为 (true, 'sending')  
>  请求完成时执行 onchange 参数为 (false, 'success'/'error')  

##### **`__postData(url, params, success, error, onchange)`**
使用 `post` 的方式向后端发送请求，参数同上。


---
## 文档编写规范
1. 每个文档至少包含 4/5 部分
> 组件示例：尽量把所有的功能在示例里展现出来  
> 配置参数：解释每个参数的意义，注明是否必填和默认值。可写多个配置参数模块  
> 回调函数：绑定到组件上的事件的回调函数，如：绑在`Input`组件上的`onChange`  
> 调用接口：可供用户调用的接口，如暴露给用户的更改某些状态的函数  
> 示例代码：实现`组件示例`所需代码，用户只需拷贝示例代码就可以在本地实现示例中的效果。(把配置抽离出来)
2. 其他扩展部分：
> 组件功能及特点介绍  
> 组件高级用法、截图等

