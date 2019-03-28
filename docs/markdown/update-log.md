
### 发布周期

* 修订版本号：带有新特性的不向下兼容的版本
* 次版本号：含有破坏性更新和新特性，不在发布周期内。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

* 🌟 新增
* 🐞 修复
* 🎨 调整
* 📖 发布
* 🙅 移除

- - -

### 0.4.0

`2019-03-05`

* 🐞 修复`Form`组件中级联组件联动时设置默认值（formData中的值）不成功问题
* 🌟 `Form`组件新增`filterExtraFieldExcept`属性，支持自动过滤冗余字段

`2019-02-28`

* 🌟 `Card`组件新增`size`属性，增加展示样式

`2019-02-25`

* 🐞 修复`Table`组件带翻译字段导出文件时，导出文件中需翻译字段未做翻译问题

`2019-02-15`

* 🐞 修复`Form`组件自定义rules提示信息无法展示bug，支持同时指定多个rules


`2019-01-30`

* 🌟 `Cascader`组件新增属性`level`，指定级联框固定最多能级联出几列
* 🌟 `Button`组件`mode`属性增强，新增 `finish` `waiting` `active` `failure` 四种类型


`2019-01-25`

* 🌟 增加新组件`Markdown`，用于解析markdown内容并进行展示


`2019-01-22`

* 🌟 增加通用参数`api.singleUse`，支持设置组件的api发送请求功能只会触发一次
* 🐞 修复`Echarts`组件重绘时栈溢出问题

`2019-01-19`

* 🌟 `Button`组件上通过`api`参数数据请求时，自动进行loading效果切换
* 🎨 改造`Table`组件，将title提出来，使其不受loading效果的影响
* 🎨 改造`Modal`组件，将弹框的默认按钮交换位置


`2019-01-14`

* 🌟 `Table`组件`展示字段`控件增加全选功能，可一键勾选全部列


`2019-01-10`

* 🐞 修复`Form`组件中表单项使用`authority`属性时报错问题


`2019-01-04`

* 🌟 UF上增加函数`UF.unrender`，用于主动销毁通过`UF.render`或`UF.init`渲染到页面上的组件，详见[交互API](#/Api)


#### # 重要变化

* `@ 2019-01-01`新年新气象，`UF 0.4.0` 版本上线啦~
* 发布了新组件库 `uf-mobile`，用于手机端的开发，详见 [文档](#/Mobile)


---


### 0.3.0

`2018-12-31`

* ##### 新增组件
    * 🌟 新增`Drawer`组件，Modal组件的变种，侧拉弹出，[传送门](#/Custom/Modal)
    * 🌟 新增`IconPlus`组件，可用于引入并使用大量外部图标，[传送门](#/General/IconPlus)
    * 🌟 新增`UeditorParse`组件，对通过Ueditor编辑的内容进行展示
    * 🌟 新增`TreeSelect`组件，树形选择框
    * 🌟 新增`Dashboard`组件【内测中，暂无文档】
    * 🌟 新增`Html`组件，替换原解析`type: html`的逻辑，以支持set等功能呢
    * 🌟 新增`AutoComplete`组件，支持异步获取信息并自动补全，[传送门](#/DataEntry/AutoComplete)
    * 🌟 可以通过在组件type前面增加`o-`来强制使用原生标签，例如：`o-table`
    * 🌟 新增`List`组件，对单条数据进展展示，[传送门](#/Custom/List)
    * 🌟 新增`Upload`组件，并支持在Form组件中使用，[传送门](#/DataEntry/Upload)
* ##### `Table`组件相关
    * 🌟 增加`column.authority`属性，支持根据权限点控制是否展示列
    * 🌟 增加`column.exportRender`属性，用于处理导出数据时的数据处理
    * 🌟 新增支持表头合并功能
    * 🌟 新增`column.cellRowSpan`、`column.cellColSpan`属性，支持单元格合并
    * 🌟 新增`keysHandler`参数，支持对批量操作弹框中的数据进行格式化处理，详见demo，[传送门](#/Custom/TableCrud)
    * 🌟 字段翻译增加实时翻译功能，每次切换分页时动态获取翻译的值，[传送门](#/Custom/Table/-column-enum-)
    * 🌟 新增`colunm.style`属性，可以自定义每列的样式，并可以使用函数动态生成
    * 🌟 增加API`getValues`，用于获取表格当前的全部数据（原数据）
    * 🌟 增加API`getDisplayValues`，用于获取表格当前的全部数据（包含翻译数据）
    * 🌟 对`crud`进行扩展，增加支持非弹框形式的表单内容（可定义展示在表格头的前面或后面），[传送门](#/Custom/TableCrud)
    * 🌟 新增`rowTooltips`、`rowTooltipsIcon`属性，用于展示额外提示信息
    * 🌟 新增表头单字段过滤功能可用于后端分页的情况
    * 🌟 新增`rowTooltips`属性，支持给每一行配置一个信息提示按钮
    * 🌟 新增属性`pagination.layout`，用于控制分页展示位置
    * 🌟 新增属性`pagination.paramIndex`，用于更改传给后端的分页参数名称
    * 🌟 增加`column.enum.allowEmpty`字段，可控制当数据不在枚举类型中时，展示源数据
    * 🌟 翻译字段翻译的结果转存到原每行数据对象中（命名规则：`${dataIndex}_fyi`），可供模糊搜索或展示详情使用
    * 🌟 增加`crud.details`，可通过简单配置实现展示详情效果（自动对翻译字段进行处理）
    * 🌟 增加展开全部扩展项按钮。当配置了`expandedRowRender`时，自动在表头添加展开全部按钮
    * 🌟 `crud`属性里的form表单，可以不用配置label属性，自动复用表格的columns.title属性
    * 🌟 新增`title.switchTags.cache`属性，支持配置取消永久保存用户自己选择的展示字段（默认保存）
    * 🌟 新增`colums.enum`属性，支持配置某些字段为枚举类型，字段展示的内容根据列表里的内容进行转换；同时，枚举的数据列表支持通过接口获取，[传送门](#/Custom/Table/-column-)
    * 🌟 `colums.enum`属性功能增强，相应字段自动更新到新增/编辑的表单中的对应组件中；批量新增/批量编辑会自动对数据进行转换。
    * 🌟 新增`doubleClickEdit`属性，配置双击行时进行编辑，需配合`crud.edit`
    * 🎨 实时翻译功能，增加对翻译字段值进行去重处理
    * 🎨 针对实时翻译字段，移除批量编辑后提交时将内容重新转换为ID的功能
    * 🎨 调整params参数和source.params的合并逻辑
    * 🎨 修改`rowKey`相关逻辑，当属性为函数时，依然可使用全选等功能
    * 🎨 移除提交编辑表格时额外传给后端的翻译字段
    * 🎨 增强属性`footer`，除函数外，也可以直接使用配置对象
    * 🎨 对扩展内容相关属性进行归类，统一置于`expanded`属性下（兼容原用法）
    * 🐞 修复`Table`组件中的`column.sorter`属性不可用问题
    * 🐞 修复批量编辑弹框报错时，弹框直接关闭无法继续编辑问题
    * 🐞 修复模糊搜索对某些复杂的数据结构的字段不支持的问题
    * 🐞 修复修改展示列后刷新表格，展示列还原问题，[uf-233](http://newicafe.baidu.com:80/issue/uf-233/show?from=page)
    * 🐞 修复设置完分页后再次进行搜索，分页pageSize会自动重置的问题，[uf-232](http://newicafe.baidu.com:80/issue/uf-232/show?from=page)
    * 🐞 修复更新`params`参数时，仅删除字段表格不会自动刷新问题，[uf-157](http://newicafe.baidu.com:80/issue/uf-157/show?from=page)
    * 🐞 修复组件的`crud`功能按钮点击无效问题
    * 🐞 修复`Table`表格内编辑按钮弹框的数据不更新问题，[uf-144](http://newicafe.baidu.com:80/issue/uf-144/show?from=page)
    * ⚙ 改造内部代码，更改获取source的时机，复用BaseComponent的逻辑
* ##### `Form`和`Forms`相关
    * 🌟 新增`operation`属性，支持自定义控制新增/删除的操作按钮，并可以绑定事件
    * 🌟 增加API：`getDisplayValues()`，可用于获取整个表单中各项的展示值
    * 🌟 增强`layout.column`布局用法，items中可以夹杂null作为占位符，[传送门](#/Custom/Form/-layout-)
    * 🌟 `Form`组件联动功能增强，增加特殊值：`:value`/`:label`/`:old`，并可支持使用表达式，[传送门](#/Custom/Form/-join-)
    * 🌟 新增支持使用非输入型组件做布局/展示等功能
    * 🌟 新增`mode`属性，可以以表格的方式展示复制新增表单，[传送门](#/Custom/Forms)
    * 🌟 增强`addType`属性，可以设置为`false`以关闭新增/删除功能
    * 🌟 增加API: `resetItem()`，用于重新设置某个表单项的配置
    * 🌟 表单项的值根据default或者rules.type自动格式化，例如select传入boolean型的值的情况
    * 🎨 `Form`组件修改join参数为函数时的参数列表
    * 🎨 优化布局逻辑，当使用`layout.column`进行布局时，当最后一行的列数不够时，自动补齐空的列
    * 🎨 优化`resetItem`API，通过函数更新表单项时，会触发join效果
    * 🐞 修复`Form`组件中按钮的onClick事件触发两次的问题
    * 🐞 修复组件中的`range-picker`表单项defaut置为current未转换问题
    * 🐞 修复同时设置`default`属性和`formData`时，formData的值不生效问题，[uf-180](http://newicafe.baidu.com:80/issue/uf-180/show?from=page)
    * 🐞 修复更新`items`中的内容（传入新的参数）时，在表单中不生效问题，[uf-156](http://newicafe.baidu.com:80/issue/uf-156/show?from=page)
    * 🐞 修复多级联动无效问题，[uf-147](http://newicafe.baidu.com:80/issue/uf-147/show?from=page)
    * 🐞 修复resetValues给组件时，原display为false的字段无法设置入新值的bug，[uf-140](http://newicafe.baidu.com:80/issue/uf-140/show?from=page)
    * 🐞 中使用级联框时，选择后失去焦点后输入框清空bugfix，[uf-135](http://newicafe.baidu.com:80/issue/uf-135/show?from=page)
    * ⚙ 调整`Forms`组件内部逻辑，内部继承Form组件
* ##### `Export`组件相关
    * 🌟 增加`renders`属性，用于处理导出数据时的数据处理
    * 🎨 优化剩余时间展示效果
    * 🐞 修复不支持set data 的问题
    * 🐞 修复同步导出不可用问题
* ##### `Button`组件相关
    * 🌟 新增属性：`activedChildren`、`unActivedChildren`，用于控制按钮的两种状态
    * 🌟 新增属性`active`、`actived`，可给按钮增加状态控制，并可以通过点击来切换状态
* ##### `Select`组件
    * 🌟 增加API:`getSelectedOption`，用于获取当前选中选项上的全部属性
    * 🌟 `Select`组件的`defaultFirst`属性支持在`combobox`和`multiple`模式下使用
    * 🌟 增加属性:`extOptions`，增加options之外额外增加的选项（置于选择列表最前面），例如'ALL'选项
    * 🌟 增加API:`selectAll`，多选模式下，可调用函数进行全选
    * 🌟 `Select`/`CheckboxGroup`组件增加参数`defaultSelectAll`，异步获取options时，可以设置获取回数据后默认全选
    * 🎨 优化组件，当通过`set`方式更新options属性时，也会进行是否需要清除当前选中数据的判断
* ##### 通用属性或配置
    * 🌟 新增`source`功能支持：当`target`为空时，同时设置多个属性
    * 🌟 新增属性`source.paramIndex`，用于更改发送请求前更改传给后端的参数名称，例如修改默认传递的分页参数的键名
    * 🌟 受控组件增加`controlled`属性，用户可通过设置属性为true阻止默认控制逻辑，使组件完全受用户控制
    * 🌟 增加`ajax.interrupt`属性，用于中断请求自定义请求返回的数据的钩子函数，可以用户数据校验等功能
    * 🌟 `Ajax`支持使用`axios`库发送数据，详见`useAxios`参数[传送门](#/Api/-uf-ajax-params-)
    * 🌟 新增`source.removeEmptyParams`参数，可配置自动移除为空的参数，默认开启，[传送门](#/Params/-source-)
    * 🌟 新增通用属性`hidden`，所有组件可以配置`hidden`属性设置组件为隐藏，并可以是用`show()`函数展示出组件（或是用`set()`）
    * 🌟 组件函数如`set`、`show`、`loading`等没返回值的函数支持链式调用，如：`uf('comp').show().loading()`
    * 🌟 全部`输入型组件`增加API：`getDisplayValue()`，当实际值和展示值不一致时，可用于获取展示值（比如获取下拉框展示在页面上的值）
    * 🌟 新增全局配置项`plugins`，指定加载额外插件，[传送门](#/Develop/Config/-plugins)
    * 🌟 全局配置项`components`功能增强，支持异步加载组件配置
    * 🌟 新增全局配置项`global.mock`，提供Mock数据功能，[传送门](#/Develop/Config/-global-mock-)
    * 🌟 新增全局配置项`global.mockFiles`，提供文件Mock数据功能，[传送门](#/Develop/Config/-global-mockFiles-)
    * 🎨 `global.mock`模拟数据功能升级，支持带动态参数的url
    * 🎨 增强`source.autoReload`内部逻辑，增加对属性值`'never'`和`'set'`的支持
    * 🎨 增强`uf.config.data`的应用场景，data中设置的全局变量，可以在url中作为动态参数使用，[传送门](#/Develop/Config/-data)
    * ⚙ 调整API`show()`、`hide()`内部实现逻辑，使用`hidden`属性
* ##### 其余更新
    * 🌟 `Sider`组件、`Header`组件新增属性`theme`增加，可和`Menu`组件的theme配合使用
    * 🌟 `AutoComplete`组件增加属性`startSign`，用于控制补全触发时机
    * 🌟 `AutoComplete`组件属性`mode`增加可选值`select-only`，指定补全组件仅可选择（不可任意输入）
    * 🌟 `UF.ajax`增加参数`localStorage`，可配置对某个请求的结果进行永久保存（localStorage），下次调用时，优先取缓存数据，[传送门](#/Api/-uf-ajax-params-)
    * 🌟 `message`、`notification`组件新增属性`autoMerge`，默认自动合并内容相同的提示信息
    * 🌟 `Collapse`组件增加API：`open`、`close`，可以用于便捷的控制某个面板的开关
    * 🌟 `Modal`组件新增`posRank`属性，可自定义弹框中展示内容的排列顺序。[传送门](#/Custom/Modal/modal-)
    * 🌟 `Tree`组件升级，支持通用source用法；且当异步获取子树返回为空时，当前节点自动置为叶子节点
    * 🌟 `SiderTrigger`组件增加`reverse`属性
    * 🌟 `Router`组件支持惰性加载，只需把`component`参数写成模块路径即可
    * 🎨 `Ueditor`默认字号改为12px
    * 🎨 修改`Menu`及`Sider`主题样式
    * 🎨 `Iframe`修改loading效果，改为右上角小菊花转动
    * 🎨 `Echarts`组件，改为自动惰性加载依赖库(支持 3.x 和 4.x 版本)，无需使用前手动script引入库文件
    * 🎨 `Ueditor`组件，改为自动惰性加载依赖库，无需使用前手动script引入库文件
    * 🐞 修复使用`beforeCreate`,`beforeRender`处理并返回参数时，事件函数会被覆盖的问题
    * 🐞 修复`ajax.url`中只能使用一个变量的问题
    * 🐞 修复`Modal`组件通过`create()`等函数直接创建的弹框中的配置，使用`source`等属性是，url不会复用config中定义的baseUrl
    * 🐞 修复`message`、`notification`组件不会复用config中定义的baseUrl
    * 🐞 修复`DatePicker`组件直接点确定按钮不会自动选中当前日期的问题，[uf-183](http://newicafe.baidu.com:80/issue/uf-183/show?from=page)
    * 🐞 修复`Radio`等输入组件当value为以0为代表对应布尔值为false的值无效问题（会被置为undefined导致在form中设置的default无效），[uf-148](http://newicafe.baidu.com:80/issue/uf-148/show?from=page)
    * ⚙ 内部逻辑优化：外部刷新时，也只过滤出变化的数据进行__setProps（修复了select通过source获取options，外部刷新时组件选项会被清空的问题）
    * ⚙ 内部调整，调整生成主题文件逻辑
    * ⚙ 内部逻辑调整：将用户配置的全部函数的执行环境固定bind到配置本身承载函数的对象上，以支持函数可以使用`this`获取和自己同级的其他参数
    * ⚙ 内部逻辑优化：移除部分无效`call(this)`函数
    * ⚙ 调整检查是否更新的策略，解决仅更新函数时不生效问题
    * ⚙ 调整内部实现，支持事件函数更新
* ##### 发布
   * 📖 在 **`资产监控平台`** 项目中投入使用


#### # 重要变化

* 用法上升级，支持使用UF产生uf实例，即一个页面上可以产生多个uf实例，并互不影响。同时，UF本身也是一个默认实例。[传送门](#/Api/-uf)

---



### 0.2.5

`2018-07-10`

* ###### `Tabs` 标签页
    * 🌟 新增`forceRefresh`属性，支持配置每次点击Tab页时都强制刷新内容
    * 🎨 调整组件用法，增加了`items`属性，替代`tab-pane`子组件，目前兼容原用法，详见组件[文档](#/DataDisplay/Tabs)
* ##### 其余更新
    * 🌟 新增通用API: `refresh`，可以强制刷新组件
    * 🌟 新增用API: `reload`，可以使组件重新拉取数据
    * 🌟 增加通用参数`source.autoReload`，组件刷新时自动重新获取数据，[传送门](#/Params/-source-)
    * 🌟 增加通用参数`source.showLoading`，组件配置通过source属性获取数据时，可以自动展示loading效果，[传送门](#/Params/-source-)
    * 🌟 新增公共API: `UF.getRouter`，用于随时随地或去当前页面的路由信息，[传送门](#/Api/-uf-getrouter-)
    * 🌟 `Form`组件功能增强，`items`中支持配置非录入数据功能的组件（纯展示），[传送门](#/Api/-uf-ajax-params-)
    * 🌟 Ajax的`url`参数可以使用动态参数，参数值从`params`中获取，[传送门](#/Api/-uf-ajax-params-)
    * 🌟 面包屑`Breadcrumb`支持使用路由中的动态参数，[传送门](#/Navigation/Breadcrumb/-breadcrumbname-)
    * 🐞 修复 `Modal` 组件的弹框表单中，表单域的`default`属性无效问题，[uf-126](http://newicafe.baidu.com:80/issue/uf-126/show?from=page)
    * 🐞 修复`Input`组件设置为 number 类型时无法输入小数点的问题，[uf-123](http://newicafe.baidu.com:80/issue/uf-123/show?from=page)
    * 🐞 修复 `Menu` 组件侧边栏收起时展开的子菜单不收起BUG
    * 🐞 修复使用 `show`/`hide` api时控制台报warning的问题
    * ⚙ 更新内部解析顺序，组件默认配置在生成组件前就已经获取到并进行merge了；且自定义组件也是在生成组件前进行处理，并转换成基础组件。
    * ⚙ 对二次解析的属性进行存储、重命名并传入组件，方便后续重新解析刷新等操作
    * ⚙ 改造内部代码，cwr中对组件是否需要刷新进行了调整（增加区分是否为内部调用的字段），source.autoReload参数可以影响组件刷新
    * 🙅 移除通用属性`configTpl`，并支持在 $uf.config({components:{}}) 中配置自定义组件，并在项目中和其他组件相同方式使用。传送门




### 0.2.4

`2018-06-29`

* ##### 更新内容
    * 🌟 `Select`组件增加默认搜索时忽略大小写
    * 🌟 增加`Form`针对传入的`formData`进行处理的函数：`formDataHandler`
    * 🌟 全部组件增加函数函数：`loading()`，用于控制是否展示loading效果，[传送门](#/Api/-component-loading-)
    * 🎨 调整`Select`组件，增加对多选情况的处理，[uf-115](http://newicafe.baidu.com:80/issue/uf-115/show?from=page)
    * 🐞 修复 number 类型的输入框无法输入小数点的问题，[uf-123](http://newicafe.baidu.com:80/issue/uf-123/show?from=page)
    * 🐞 修复`Form`数字类型的表单域，当输入字母时，会出现NaN卡死的情况
    * 🐞 修复高级`Modal`中`form`配置了`beforeSubmit`后，提交的数据中依然有原来的数据的bug
    * 🐞 修复`Echarts`快速/同时绘制多个时，后面的图表无法绘出问题
    * 🐞 修复`Form`中的 input 组件设置 rules.type 为`'number'`时报错问题，[uf-111](http://newicafe.baidu.com:80/issue/uf-101/show?from=page)

    * 📖 在 **`DCID 通报管理`** 项目中投入使用



### 0.2.3

`2018-06-12`

* ##### 新增组件
    * 🌟 增加`Forms`组件，自身具备复制新增功能
* ##### `Table`组件相关
    * 🌟 增加支持后端分页时的`模糊搜索`功能
    * 🌟 增加函数函数：`export()`，支持手动调用导出功能
    * 🌟 增加`title.extra`属性，支持在表格表头增加额外内容/组件
    * 🎨 整合`source`系列参数，参数和通用的source系列参数保持一致
    * 🎨 属性名称调整（以下为调整前后的对照关系）
        * `column.filterConfig` => `column.filter`
        * `column.filterConfig.filterType` => `column.filter.type`
        * `column.filterConfig.filters` => `column.filter.options`
        * `title.basicControls` => `title.basicWidget`*（当前版本兼容两种，在下一版本中移除）*
        * `title.menuControls` => `title.menuWidget`*（当前版本兼容两种，在下一版本中移除）*
    * 🙅 移除`method`、`sourceHanlder`、`autoLoadSource`参数
* ##### `Export`组件相关
    * 🎨 整合`source`系列参数，参数和通用的source系列参数保持一致
    * 🙅 移除`method`、`params`参数
* ##### `Tree`组件相关
    * 🎨 整合`source`系列参数，参数和通用的source系列参数保持一致。异步加载数据功能通过设置`source`实现
    * 🙅 移除`loadData`参数，相应功能用`source`替换
* ##### 其他更新
    * 🌟 新增`Echars`同其他组件一样，支持`source`系列参数，并支持使用`set`等api
    * 🌟 增加输入型组件使用`source`系列参数时，可以展示loading效果，[传送门](#/Params/-source-)
    * 🌟 升级组件API`get`功能，支持取多层级下的配置参数 [传送门](#/Api/-component-get-)
    * 🌟 增加`api.showLoading`参数，使用api系列参数提交数据时，展示loading效果
    * 🌟 `CheckboxGroup`增加函数API：`checkAll()`，全选或取消全选
    * 🌟 增加`global.ajax.data`参数，配置全部请求都携带的参数，例如：`token`
    * 🌟 增加`source.cache`参数，可以开启**`数据缓存`**功能，[传送门](#/Params/-source-)
    * 🌟 增加`source.requestMerge`参数，可以关闭**`请求合并`**功能，[传送门](#/Params/-source-)
    * 🌟 `DatePicker`系列组件`value`参数增加特殊值`'current'`，当值为current时，会自动转换为当前日期/时间 （注意：`Form`中使用时，是在`default`属性上配置'current'）
    * 🌟 `Export`组件增加函数API：`export()`，支持手动调用导出功能
    * 🌟 增加通用 `control` 系列参数。全部组件都具备控制其他组件的能力，[传送门](#/Params/-control-)
    * 🌟 增加 `uf.p.js` 文件，可使UF加载时不阻塞页面其他逻辑执行（尤其用于和其他框架/库混用时）
    * 🎨 微调Ajax内部处理逻辑，如果用户配置了`global.ajax.error`，则全使用用户自定义的处理逻辑，error不再有默认报错的行为，如果需要，需用户自行在error函数里添加
    * 🎨 通用`source`系列参数整理，聚合到一起（全部参数在`source`参数之下），[传送门](#/Params/-source-)
    * 🎨 修改 Ajax 默认错误处理逻辑，只有当自定义错误处理函数显示的返回 false 时，才会阻止默认处理逻辑执行
    * 🎨 改造路由，优化通过路由传递参数并在组件配置中获取参数的交互方式，见：[更多用法](#/Others)
    * 🎨 `Modal`组件属性名称调整：`message` => `render`*（当前版本兼容两种，后面版本中移除）*
    * 🐞 修复`Select`组件使用`source`参数时，数据返回后会提示内容不能为空的问题
    * 🐞 修复`Form`组件中使用日期范围选择组件不能选择时间问题
    * 🐞 修复自定义组件（如：Form）使用`source`系列参数时，后端返回的数据无法回填的问题
    * 🐞 修复`Form`重新设置`formData`时（例如使用`source`异步获取Form内容），数据不更新问题，[uf-101](http://newicafe.baidu.com:80/issue/uf-101/show?from=page)
    * 🐞 修复`Table`组件`expandedRowRender`属性功能，点击加号不能展示扩展内容BUG
    * 🐞 修复`Table`组件`pagination`置为`false`时，报错的问题
    * ⚙ 改造`Forms`内部逻辑，以支持嵌套到Form组件中使用
    * ⚙ 改造内部代码，增加对销毁组件的处理：异步操作中对已销毁的组件的操作全部会被中断
    * ⚙ 改造内部代码，默认参数全部走配置形式
    * ⚙ 样式文件sass改为less，并增加主题配置，定制多份主题
    * 🐞 修复因`Router`刷新两次造成的报错`called forceUpdate() on an unmounted component`的问题

* ##### 发布
    * 📖 在 **`IDP 世界杯`** 项目中投入使用



### 0.2.2

`2018-06-22` `upgrade`

* 🌟 `Select`组件增加默认搜索时忽略大小写


`2018-06-06`

* 🐞 修复`Table`组件单行编辑，内容为0时数据不更新问题
* 🌟 新增`api`系列参数，并聚合到一起（全部参数在`api`参数之下）
* `Table`
    * 🌟 增加单字段编辑功能
    * 🙅 删除ajax传参中的分页参数 `index`、`offset`
* 📖 在 **`RMS 网络零件库存预警`** 项目中投入使用




### 0.2.1

`2018-03-19`

* 重写入门文档；文档排版调整，文档/组件分离
* 增加`Ecahrts`组件的支持
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
