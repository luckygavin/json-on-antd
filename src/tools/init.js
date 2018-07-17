import Ajax from 'src/utils/ajax.js';
import requirejs from './requirejs.js';
import {setAjax, setRequirejs} from 'src/tools/instance.js';

module.exports = {
    init(insName) {
        const obj = {};

        // ajax 实例
        obj.Ajax = Ajax.init(insName);
        setAjax(insName, obj.Ajax);

        // requirejs 实例
        obj.Requirejs = requirejs.init(insName);
        setRequirejs(insName, obj.Requirejs);

        return obj;
    }
};