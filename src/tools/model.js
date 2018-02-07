/**
 * @file 数据/页面绑定 处理模块
 * @author liuzechun
 */
import {Utils} from 'src/utils';
import {ModelCache, ComponentsCache} from 'src/cache';

// 使用model表达式格式 ${xxx}
const Expre = /\${(\S+?)}/g;
// const Expre = /\${(\S+?)}/;

export default {

    // 给用户使用
    set(model, data) {
        // 更新data的数据
        ModelCache.setData(model, data);
        // 更新完数据后刷新相关联的组件
        let connections = ModelCache.getConnections(model);
        for (let i in connections) {
            // 获取缓存中的组件
            let comp = ComponentsCache.get(i);
            if (!!comp) {
                let item = connections[i];
                let options = {};
                for (let j in item) {
                    // 从ModelCache中取出当前对应值把模板内容替换掉
                    options[j] = this.replaceModel(item[j]);
                }
                // 调用组件的set函数刷新组件全部受影响的属性
                comp.set(options);
            }
        }
        // console.log(ModelCache);
    },
    get(model) {
        return ModelCache.getData(model);
    },

    /* 程序内部调用 *************************************************************/

    // 替换模板中的内容
    replaceModel(item) {
        return item.replace(Expre, (p1, model)=>{
            return ModelCache.getData(model);
        })
    },

    // 设置组件及属性和数据的关联关系
    setCache(cacheName, options) {
        // let currComp = ComponentsCache.get(cacheName);
        let models = ModelCache.getModel();
        for (let i in options) {
            let item = options[i];
            if (this.is(item)) {
                // match会返回全部匹配到的数组
                item.match(Expre).map(v=>{
                    let model = v.slice(2, -1);
                    if (!models[model]) {
                        models[model] = {};
                    }
                    if (!models[model][cacheName]) {
                        models[model][cacheName] = {};
                    }
                    if (!models[model][cacheName][i]) {
                        models[model][cacheName][i] = item;
                    }
                });
                // 顺便把模板替换掉（初始化）
                options[i] = this.replaceModel(item);
            }
        }
        return options;
    },

    // 把数据插入到模板中，返回新的字符串
    insert(tml, data) {
        return tml.replace();
    },

    // 判断是否关联model数据
    if(item) {
        for (let i in item) {
            // 只要有一条数据是使用了model，则为true
            if (this.is(item[i])) {
                return true;
            }
        }
        return false;
    },

    // 判断一个值是否使用model
    is(value) {
        return Utils.typeof(value, 'string') && value.search(Expre) >= 0;
    }

};
