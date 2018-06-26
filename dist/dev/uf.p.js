/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * @file 为了解决UF加载问题所建文件，可在使用UF之前先加载此文件，然后加载用户自身文件，最后再加载UF的系列文件
	*/
	(function () {
	    var _catch = [];
	    // 将用户预先可能用到的方法放至arr中
	    var arr = ['init', 'render', 'append', 'load', 'config'];
	    var UF = {};

	    var _loop = function _loop(v) {
	        var ufFunc = arr[v];
	        // 将用户所用的UF函数名称及参数进行存储，方便真正的UF加载完毕之后再执行
	        UF[ufFunc] = function () {
	            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                params[_key] = arguments[_key];
	            }

	            _catch.push({
	                func: ufFunc,
	                params: params
	            });
	        };
	    };

	    for (var v in arr) {
	        _loop(v);
	    }
	    window.UF = UF;
	    window._catch = _catch;
	})();

/***/ })
/******/ ]);