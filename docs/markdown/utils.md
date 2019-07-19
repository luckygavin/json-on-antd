## UF.utils

以下为`UF.utils`的全部工具函数。其中`underscore`的所有函数也可以直接在utils上使用。

用法如：`UF.utils.moment()`

### # moment()
如果数据合法，返回moment数据；否则返回null

### # isIntersection(*arrays)
数组是否有交集

### # assign(destination, *sources)
ES6 对象合并

### # stringify(data, level = 5)
JSON.stringify 的改造版，跳过复杂属性、不忽略正则等变量等，用于把一个对象转换成一个字符串

### # distinct(arr)
数组去重

### # windowScroll(targetY)
页面滚动动画，targetY为页面位置

### # toFixed(num, n = 1)
整数不会在小数点后补充0（区别于Number.toFixed）

### # padNum(num, n = 0)
数字前面补充0

### # cutNum(num, n)
小数点后取几位，缺位自动补0

### # incrementId()
不断自增的ID，也是唯一的（非随机）

### # uniqueId()
生成随机唯一ID，32位

### # hash(text, len [, level])
字符串哈希。当传入第3个属性时，说明对象不是简单对象，走自定义处理逻辑，过滤掉非p

### # format(value, type)
尝试进行数据格式转换。如果无法处理，则不进行处理

### # empty(obj)
判断数组或对象是否为空

### # copy(obj)
浅拷贝，指针指向，只拷贝一层

### # clone(data, level = 10)
深拷贝对象/数组。  
level 为深拷贝的层级，默认10层，防止循环引用

### # merge(ghost, target, ...objs)
以第一个对象为目标，依次把后面的对象merge到上去，支持深层的merge，类似于一个深层的 Object.assign()  
* ghost 为一特殊参数，分三种情况  
* level 参数为拷贝层数，不传则默认遍历10层，防止循环引用  
* filter 为数组，声明某些属性无需合并直接覆盖  
只适用于JSON等对象字面量的对象，比较复杂的对象直接覆盖，不做深层遍历  

### # filter(obj, arr)
从obj中过滤掉某些属性

### # pass(...params)
从obj中获取某些属性

### # equals(value1, value2, disposeFunc = true)
对比两个值是否相等

### # isChange(newVal, oldVal)
检查是否有改变内容。与equals的区别是，仅检测newVal中的值相对于oldVal相应的值是否发生了变化   
注意：newVal是oldVal的子集且值没有变化时，返回的是false

### # getChange(newVal, oldVal)
获取变化的内容

### # isLast(sub, str)
子串是否处于字符串最末尾

### # each(obj, callback)
* each 遍历对象属性，类似于jQuery的each函数，方便react的render函数中遍历对象
* callback 为回调函数，支持三个参数：依次是 item, index, obj  

> 注意：返回结果随着传入的参数变化，如果传入的是数组，则返回数组；如果传入的是对象，则返回对象

### # map(obj, callback)
map 遍历对象属性，类似于上面的each  

> 不同点在于：永远返回数组，对象也会遍历成数组

### # drawLevel(arr)
把多数组嵌套层级拉平

### # traverse(arr, func)
遍历深层数组。多层数组嵌套，保证原来数组层级的情况下遍历数组，值到值不为数组，并对每一项执行函数func

### # getPathFromPattern(pattern, data)
根据路由模式生成真实的链接  
* pattern  路由模式，如：#/visual/room/:room/realMode/:rack_col/:sn  
* data 真实数据，模式中的:room即在data中取room字段的值

### # goto(path, forceUpdate = false)
跳转链接，router的调整组件会刷新两次，不过也不建议使用此函数，可以使用a标签代替

### # toString(value)
转换为字符串，原生的toString方法不适用于undefined，null等

### # getType(value)
获取数据的类型，返回的类型名称为全小写  
包括：object、array、function、null、undefined、regexp、number、string、boolean、date ...  
> 推荐使用 utils.typeof 函数

### # typeof(value, type)
判断 value 是否为指定类型

### # toPascal(str)
把中横线命名的字符串转换成帕斯卡命名形式

### # toHump(str)
下划线转换驼峰

### # toLine(str)
驼峰转换下划线

### # isExtendsOf(item, superClass)
判断组件是否继承自某个类，支持验证自己。  
根据组件的引用（通过import获得）判断，支持深层查找

### # directInstanceof(obj, cls)
某个对象是否直接来自某个类的实例

### # toOptions(data, level)
把数组、对象转换成select等需要的options标准格式。  
level 为向下遍历的层级，默认最多遍历5层

### # getFirstOption(data)
获取options数据中的第一个值

### # transFromOptions(value, options)
从 options 中获取到 value 对应的 label 值

### # prettyJson(data, origin)
把数据格式化成json展示

### # generateObject(strc, value)
根据一个字符串，生成一个深层的对象  
例如：根据 a.b.c 生成 {a:{b:{c: 1}}}

### # fromObject(strc, obj)
根据一个字符串，从一个深层的对象中取数据  
例如：根据 a.b.c 从对象 {a:{b:{c: 1}}} 中取出 1

### # toObject(origin, strc, value)
根据一个字符串，把数据塞入一个深层的对象中

### # delFromObject(strc, obj)
根据一个字符串，把数据从一个深层的对象中删除

### # urlAnalysis(url, params, delParams = true)
url中如果有类似于`:id`这种形式的动态参数，则替换成对应的参数值

### # inject(parent, target, newFunc, oldAhead = false, utilsObj = null)
想某个对象上的某个函数注入额外逻辑  
参数依次为 父级、目标函数、新函数、是否把原来逻辑提前、bind的对象

### # getCache(key)
获取localStorage，结果自动 JSON.decode 为对象或数组

### # setCache(key, value)
设置localStorage，value可为一个未序列化的对象

### # getSession(key)
获取sessionStorage，结果自动 JSON.decode 为对象或数组

### # setSession(key, value)
设置sessionStorage，value可为一个未序列化的对象

### # detachToMap(arr, keyName, valueName = null)
遍历一个数组，从数组里取出某两个字段，组合成键值对数据  
如更不传valueName，则相当于把keyName的值提出来当key，整条数据为value

### # retry(func, interval = 200, time = 5)
重试功能

间隔 interval 的时间，重试 time 次，直到 func 执行成功  
如果func返回false，则继续重试。否则终止重试

### # batchBind(obj, target)
批量绑定对象中函数的执行环境

### # timeFormatter(seconds = 0)
时间格式化，将秒转换成时/分/秒

### # thousandSeparator(s = '')
千位分隔
