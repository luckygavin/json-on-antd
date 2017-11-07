/**
 * @file 组件实例缓存
 * @author liuzechun
 * Created Date: 2017-10-24 01:40:57
 */

import {Utils} from 'uf/utils';
import BaseCache from './BaseCache.js';

const _key = '_uf-models';
let _cache = {

    // 数据存储
    data: {
        // a: 1
    },

    // model关联的属性，以model为单位。(数据驱动页面)
    model: {
        // 'a': {
        //     'input': {
        //         'value': '${a}',
        //     },
        //     'span': {
        //         'children': '${a}'
        //     }
        // }
    }

    // 属性关联的model，以组件为单位。(页面驱动数据，使用 $model/$join 属性)
    // attr: {
    //     'my-table': {
    //         'title': 'a',
    //     }
    // }

};

class Models extends BaseCache {
    constructor() {
        super(_key, _cache);
    }
    // 获取摸个model点关联的数据
    getData(model) {
        let result = this._cache.data;
        if (!!model) {
            for (let v of model.split('.')) {
                if (Utils.typeof(result, 'object')) {
                    result = result[v];
                } else {
                    // console.error(`Uncaught TypeError: model '${model}' is invalid.`);
                    // 获取不到的数据全部返回空字符串
                    result = '';
                    break;
                }
            }
        }
        return (result || '');
    }
    // 获取摸个model点关联的组件
    getModel(model) {
        return !!name ? this._cache.model[name] : this._cache.model;
    }
    // 获取某个model点影响的所有组件及属性
    getConnections(model) {
        let models = this.getModel();
        let connectionsMode = model + '.';
        let result = Utils.copy(models[model]);
        for (let i in models) {
            if (i.indexOf(connectionsMode) !== -1) {
                let item = models[i];
                for (let j in item) {
                    if (result[j]) {
                        let itemComp = item[j];
                        let resultComp = result[j];
                        for (let k in itemComp) {
                            resultComp[k] = resultComp[k] || itemComp[k];
                        }
                    } else {
                        result[j] = item[j];
                    }
                }
            }
        }
        return result;
    }

    // 给某个一model点设置数据
    setData(model, data) {
        // 如果没有设置model点，则直接更改整个data。用于一开始用户使用 UF.config 配置通用数据
        if (!model) {
            this._cache.data = data;
            return;
        }
        let origin = this.getData();
        let arr = model.split('.');
        let target = origin;
        let parent, v;
        for (v of arr) {
            if (!Utils.typeof(target[v], 'object')) {
                target[v] = {};
            }
            parent = target;
            target = parent[v];
        }
        parent[v] = data;
    }
    setModel(model, data) {

    }

}

export default (new Models());