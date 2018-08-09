/**
 * @file 为了解决UF加载问题所建文件，可在使用UF之前先加载此文件，然后加载用户自身文件，最后再加载UF的系列文件
*/
(function () {
    let _catch = [];
    // 将用户预先可能用到的方法放至arr中
    let arr = ['init', 'render', 'append', 'load', 'config'];
    let UF = {};
    for (let v in arr) {
        let ufFunc = arr[v];
        // 将用户所用的UF函数名称及参数进行存储，方便真正的UF加载完毕之后再执行
        UF[ufFunc] = (...params) => {
            _catch.push({
                func: ufFunc,
                params: params
            });
        }
    }
    window.UF = UF;
    window._catch = _catch;
})();