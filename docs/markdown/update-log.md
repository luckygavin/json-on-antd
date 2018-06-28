
### 发布周期

* 修订版本号：带有新特性的不向下兼容的版本
* 次版本号：含有破坏性更新和新特性，不在发布周期内。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

* 🌟 新增
* 🐞 修复
* 💄 调整
* 📖 发布
* 🙅 移除

- - -

### 0.2.5


`2018-06-28`

* 🌟 新增 `UF.getRouter` api，用于随时随地或去当前页面的路由信息，[传送门](#/Api/-uf-getrouter-)
* 🐞 修复 `Menu` 组件侧边栏收起时展开的子菜单不收起BUG
* 🌟 增加属性 `source.autoReload` 参数，组件刷新时自动重新获取数据，[传送门](#/Params/-source-)
* ⚙ 改造内部代码，cwr中对组件是否需要刷新进行了调整（增加区分是否为内部调用的字段），source.autoReload参数可以影响组件刷新
* 🐞 修复使用 `show`/`hide` api时控制台报warning的问题


`2018-06-26`

* 🌟 增加属性`source.showLoading`参数，组件配置通过source属性获取数据时，可以自动展示loading效果，[传送门](#/Params/-source-)



### 0.2.4

`2018-06-26`

* 💄 调整`Select`组件，增加对多选情况的处理，[uf-115](http://newicafe.baidu.com:80/issue/uf-115/show?from=page)
* 📖 在 **`DCID 通报管理`** 项目中投入使用

`2018-06-22`

* 🐞 修复`Form`数字类型的表单域，当输入字母时，会出现NaN卡死的情况
* 🌟 `Select`组件增加默认搜索时忽略大小写

`2018-06-14`

* 🌟 增加`Form`针对传入的`formData`进行处理的函数：`formDataHandler`
* 🐞 修复高级`Modal`中`form`配置了`beforeSubmit`后，提交的数据中依然有原来的数据的bug
* 🐞 修复`Echarts`快速/同时绘制多个时，后面的图表无法绘出问题

`2018-06-13`

* 🐞 修复`Form`中的 input 组件设置 rules.type 为`'number'`时报错问题，[uf-111](http://newicafe.baidu.com:80/issue/uf-101/show?from=page)
* 🌟 全部组件增加函数函数：`loading()`，用于控制是否展示loading效果，[传送门](#/Api/-component-loading-)


### 0.2.3

`2018-06-12`

* 🌟 新增`Echars`同其他组件一样，支持`source`系列参数，并支持使用`set`等api
* 🐞 修复`Select`组件使用`source`参数时，数据返回后会提示内容不能为空的问题
* 🐞 修复`Form`组件中使用日期范围选择组件不能选择时间问题
* 📖 在 **`IDP 世界杯`** 项目中投入使用

`2018-06-07`

* 🐞 修复自定义组件（如：Form）使用`source`系列参数时，后端返回的数据无法回填的问题
* 🌟 增加输入型组件使用`source`系列参数时，可以展示loading效果，[传送门](#/Params/-source-)
* 🌟 升级组件API`get`功能，支持取多层级下的配置参数 [传送门](#/Api/-component-get-)
* `Form`
    * 🐞 修复重新设置`formData`时（例如使用`source`异步获取Form内容），数据不更新问题，[uf-101](http://newicafe.baidu.com:80/issue/uf-101/show?from=page)
* `Table`
    * 🐞 修复`expandedRowRender`属性功能，点击加号不能展示扩展内容BUG
* `Forms`
    * ⚙ 改造内部逻辑，以支持嵌套到Form组件中使用


`2018-05-30`

* 🌟 增加`api.showLoading`参数，使用api系列参数提交数据时，展示loading效果
* `Table`
    * 🐞 修复`pagination`置为`false`时，报错的问题
* `Modal`
    * 💄 属性名称调整：`message` => `render`*（当前版本兼容两种，后面版本中移除）*
* `CheckboxGroup`复选框组
    * 🌟 增加函数API：`checkAll()`，全选或取消全选


`2018-05-27`

* 🐞 修复因`Router`刷新两次造成的报错`called forceUpdate() on an unmounted component`的问题
* ⚙ 改造内部代码，增加对销毁组件的处理：异步操作中对已销毁的组件的操作全部会被中断
* 💄 微调Ajax内部处理逻辑，如果用户配置了`global.ajax.error`，则全使用用户自定义的处理逻辑，error不再有默认报错的行为，如果需要，需用户自行在error函数里添加
* 🌟 增加`global.ajax.data`参数，配置全部请求都携带的参数，例如：`token`
* 🌟 增加`source.cache`参数，可以开启**`数据缓存`**功能，[传送门](#/Params/-source-)
* 🌟 增加`source.requestMerge	`参数，可以关闭**`请求合并`**功能，[传送门](#/Params/-source-)
* `DatePicker`系列组件
    * 🌟 `value`参数增加特殊值`'current'`，当值为current时，会自动转换为当前日期/时间 （注意：`Form`中使用时，是在`default`属性上配置'current'）


`2018-05-26`

* `Table`
    * 🌟 增加支持后端分页时的`模糊搜索`功能
    * 🌟 增加函数函数：`export()`，支持手动调用导出功能
    * 🌟 增加`title.extra`属性，支持在表格表头增加额外内容/组件
    * 💄 属性名称调整（以下为调整前后的对照关系）
        * `column.filterConfig` => `column.filter`
        * `column.filterConfig.filterType` => `column.filter.type`
        * `column.filterConfig.filters` => `column.filter.options`
        * `title.basicControls` => `title.basicWidget`*（当前版本兼容两种，在下一版本中移除）*
        * `title.menuControls` => `title.menuWidget`*（当前版本兼容两种，在下一版本中移除）*
* `Export`
    * 🌟 增加函数API：`export()`，支持手动调用导出功能

`2018-05-25`

* 🌟 增加通用 `control` 系列参数。全部组件都具备控制其他组件的能力，[传送门](#/Params/-control-)
* ⚙ 改造内部代码，默认参数全部走配置形式

`2018-05-24`

* 💄 通用`source`系列参数整理，聚合到一起（全部参数在`source`参数之下），[传送门](#/Params/-source-)  
* `Table`  
    * 💄 整合`source`系列参数，参数和通用的source系列参数保持一致  
    * 🙅 移除`method`、`sourceHanlder`、`autoLoadSource`参数
* `Export`  
    * 💄 整合`source`系列参数，参数和通用的source系列参数保持一致  
    * 🙅 移除`method`、`params`参数
* `Tree` 
    * 💄 整合`source`系列参数，参数和通用的source系列参数保持一致。异步加载数据功能通过设置`source`实现
    * 🙅 移除`loadData`参数，相应功能用`source`替换
* 💄 修改 Ajax 默认错误处理逻辑，只有当自定义错误处理函数显示的返回 false 时，才会阻止默认处理逻辑执行。


`2018-05-22`

* 💄 样式文件sass改为less，并增加主题配置，定制多份主题
* 🌟 增加 `uf.p.js` 文件，可使UF加载时不阻塞页面其他逻辑执行（尤其用于和其他框架/库混用时）
* 🌟 增`Forms`组件，自身具备复制新增功能
* 💄 改造路由，优化通过路由传递参数并在组件配置中获取参数的交互方式，见：[更多用法](#/Others)



### 0.2.2

`2018-06-22` `upgrade`

* 🌟 `Select`组件增加默认搜索时忽略大小写

`2018-06-06` `bugfix`

* 🐞 修复`Table`组件单行编辑，内容为0时数据不更新问题

`2018-05-15`

* 🌟 新增`api`系列参数，并聚合到一起（全部参数在`api`参数之下）
* `Table` 
    * 🌟 增加单字段编辑功能
    * 🙅 删除ajax传参中的分页参数 `index`、`offset`
* 📖 在 **`RMS 网络零件库存预警`** 项目中投入使用



### 0.2.1

`2018-03-19`

* 重写入门文档；文档排版调整，文档/组件分离
* 增加`Ecahrts`组件的支持


`2018-02-06`

* 上线 0.2.1 版本，对框架进行整体优化
* 📖 在 **`虚拟资源管理中心`** 项目中投入使用



### 0.2

`2017-10-13`

* 上线 0.2 版本
* 支持整个项目配置化
* 📖 在 **`RMS GPU部件管理`** 项目中投入使用

### 0.1.1

`2017-09-22`

* antd `2.12.2` 升级为 `2.13.7`
* 增加 `Table`、`Form`、`Modal` 组件说明文档及Demo
* 增加用于临时使用的 `Table2` 组件，后面 `Table` 组件功能完善后，会再次把 `Table2` 去掉

### 0.1

`2017-09-18`

* 配置化页面一期上线
