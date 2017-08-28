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

## 项目安装
```
npm install  
npm install --dev  
```
安装完成后会报 node-sass 没装上：  
```
npm WARN sass-loader@4.1.1 requires a peer of node-sass@^3.4.2 || ^4.0.0 but none was installed.
```
重新手动装一下node-sass：
```
npm install node-sass@3.13.1
```

