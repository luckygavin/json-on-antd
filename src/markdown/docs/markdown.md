markdown 的增强版。

## 组件&参数

### # markdown

参数 | 说明 | 类型 | 默认值 
---- | ---- | ----- | -----
docs | markdown的文本内容 | String |
gfm | 允许 Git Hub标准的[markdown](https://help.github.com/categories/writing-on-github/) | Boolean | true
tables | 允许支持表格语法 | Boolean | true
smartLists | 使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉. | Boolean | true
sanitize | 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签） | Boolean | true
pedantic | 尽可能地兼容 markdown.pl 的晦涩部分。不纠正原始模型任何的不良行为和错误。 | Boolean | 
smartypants | 使用更为时髦的标点，比如在引用语法中加入破折号 | Boolean | 
breaks | 允许回车换行。该选项要求`gfm`为true | Boolean | 
highlight | 【功能暂不可用】对于代码块进行语法高亮 | Boolean | 
baseUrl | 所有连接追加前缀 | String |

更多属性可见：[marked.js](https://marked.js.org/#/USING_ADVANCED.md)