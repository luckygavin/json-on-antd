/**
 * @file UF 核心代码包
 * Antd 单独打包，代码里会对 Antd 全部组件进行二次封装
 * @author liuzechun@baidu.com
 */

// 动态加载全部主题
// 应该是和webpack打包时的解析机制有关，当require里面包含变量时候，webpack会把整个目录下能查找到的全部内容打进去
// 这里webpack会打包解析能找到的全部内容，所以需要在webpack.build.js里额外配置忽略theme文件夹的逻辑
// 注意：需使用变量才能引入全部
const dir = 'default';
require(`theme/${dir}/index.less`);

// UF 组件库构建入口
window['UF'] = require('uf').default;
