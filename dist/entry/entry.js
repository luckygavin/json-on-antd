/**
 * @file 入口文件，把需要引入的库汇总起来
 * @author liuzechun@baidu.com
 */

const json = require('../../package.json');
// 用版本号作为生成文件的后缀：版本+次版本号，过滤掉修订版本
const version = json.version.split('.').slice(0, 2).join('.');

let ufStyle = document.createElement('link');
ufStyle.rel = 'stylesheet';
ufStyle.href = `http://uf.baidu.com/css/uf_v${version}.css`;
document.head.append(ufStyle);

let dllScript = document.createElement('script');
dllScript.src = `http://uf.baidu.com/dist/dll.js`;
document.head.append(dllScript);

let antdScript = document.createElement('script');
antdScript.src = `http://uf.baidu.com/dist/antd.js`;
document.head.append(antdScript);

let ufScript = document.createElement('script');
ufScript.src = `http://uf.baidu.com/dist/uf_v${version}.js`;
document.head.append(ufScript);
