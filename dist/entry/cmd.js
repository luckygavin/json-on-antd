/**
 * @file 兼容CMD、AMD、原生JS
 * @author liuzechun
 * Created Date: 2018-06-20 05:36:34
 */

module.exports = function (mod, func) {
    func();
    (function(){
        if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
            module.exports = mod;
        } else if (typeof define === 'function' && define.amd) {
            define(function() {
                return mod;
            });
        } else {
            // func();
        }
    }).call(function() {
        return this || (typeof window !== 'undefined' ? window : global);
    });
};