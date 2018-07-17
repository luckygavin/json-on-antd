import Config from './config.js';
import ComponentsCache from './components.js';
import ModelCache from './model.js';
import AjaxCache from './ajax.js';
import {setConfig, setComponentCache, setModelCache, setAjaxCache, getModelCache} from 'src/tools/instance.js';

// module.exports = {Config, ComponentsCache, ModelCache};

module.exports = {
    init(insName) {
        const obj = {};

        obj.Config = Config.init(insName);
        setConfig(insName, obj.Config);

        obj.ComponentsCache = ComponentsCache.init(insName);
        setComponentCache(insName, obj.ComponentsCache);

        obj.ModelCache = ModelCache.init(insName);
        setModelCache(insName, obj.ModelCache);

        obj.AjaxCache = AjaxCache.init(insName);
        setAjaxCache(insName, obj.AjaxCache);

        return obj;
    }
};