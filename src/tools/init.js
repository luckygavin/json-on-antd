import Ajax from 'src/utils/ajax.js';
import requirejs from './requirejs.js';
import Precondition from './precondition.js';
import {setAjax, setRequirejs, setPrecondition} from './instance.js';

module.exports = {
    init(insName) {
        const obj = {};

        // ajax 实例
        obj.Ajax = Ajax.init(insName);
        setAjax(insName, obj.Ajax);

        // requirejs 实例
        obj.Requirejs = requirejs.init(insName);
        setRequirejs(insName, obj.Requirejs);

        // precondition 实例
        obj.Precondition = Precondition.init(insName);
        setPrecondition(insName, obj.Precondition);

        return obj;
    }
};