其他一些使用上的细节说明。

## 几个属性的说明

### # type 属性

每个组件都有一个type属性，声明是什么类型的组件，type的格式为中横线连接的小写字母，每个组件文档中的属性列表之前都以组件type命名

例如：[Input 输入框](#/DataEntry/Input)中，共包含四个可用组件，type分别为：input、textarea、input-search、input-group

> 有些组件是和其他组件嵌套组合使用的，例如`input-group`，要以多个`input`组件作为子组件使用，本身只有一个可用属性

### # name 属性

每个组件都可以有一个`name`属性，用于作为组件的“唯一标识”，可以通过`UF()`来获取并操作此组件。

> 注意，name不能重复，如重复了后生成的组件会覆盖先生成的组件，导致不能再获取到

### # style 属性

因为底层使用的是React，所以此处建议遵照React的用法：style为一个对象，对象的属性名称使用驼峰命名法
```javascrpit
style: {
    marginTop: '16px',
    fontSize: '12px'
}
```

当然，为了方便使用，style也可以按照html里的内联样式写法来写，此时style为一个字符
```javascript
style: 'margin-top: 16px; font-size: 12px;'
```

### # className/class 属性

和上面的`style`属性类似，className为React中对于元素的类名的推荐用法，这里推荐使用`className`定义元素的类名
```javascript
{
    type: 'div',
    className: 'my-div'
}
```
为了方便使用，也可以按照写html时的使用习惯使用class来定义元素类名
```javascript
{
    type: 'div',
    class: 'my-div'
}
```

## html 组件

`type`为`html`的组件，只有`content`属性，content为一段html代码。为了方便大块自定义内容

## 引入自定义组件

`UF.load()`

如果已有组件及配置实在无法支持当前的业务逻辑，也可以某一部分使用React进行开发，然后作为一个新自定义组件引入到项目中使用。具体用法请联系 [liuzechun](baidu://message/?id=861260447)

