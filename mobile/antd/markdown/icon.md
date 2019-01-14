
## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 组件&配置

### # icon

属性        | 说明           | 类型            | 默认值       
-----------|----------------|----------------|--------------
mode    |   内置 icon 名称   | String   
size    |   图标大小    | 'xxs'/'xs'/'sm'/'md'/'lg'  | `md` 
color   | 图标颜色   | string  | '#000' 

### 提示

现在，我们只支持内置的 'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up', 'down', 'left', 'right', 'ellipsis', 'loading' 这些 icon 类型。

更多图标请查看：[IconPlus](#/Mobile/Global/IconPlus)