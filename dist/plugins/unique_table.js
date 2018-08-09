define(function() { return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(2);

	var _html2canvas = __webpack_require__(3);

	var _html2canvas2 = _interopRequireDefault(_html2canvas);

	var _axios = __webpack_require__(4);

	var _axios2 = _interopRequireDefault(_axios);

	var _SuperHeaders = __webpack_require__(31);

	var _SuperHeaders2 = _interopRequireDefault(_SuperHeaders);

	var _Td = __webpack_require__(32);

	var _Td2 = _interopRequireDefault(_Td);

	__webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 表格组件，满足在任意位置合并，减少不必要的合并需要在数据的dontMerge字段做配置
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @auhor huzaibin@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var UniqueTable = function (_PureComponent) {
	    _inherits(UniqueTable, _PureComponent);

	    function UniqueTable(props) {
	        _classCallCheck(this, UniqueTable);

	        var _this = _possibleConstructorReturn(this, (UniqueTable.__proto__ || Object.getPrototypeOf(UniqueTable)).call(this, props));

	        _this.state = {
	            data: null,
	            dataToRender: null,
	            superHeadersData: undefined,
	            superHeadersExist: false,
	            showColumns: true,
	            fontColor: '#666',
	            tableName: '',
	            editable: false,
	            loading: false
	        };
	        _this.formatData = _this.formatData.bind(_this);
	        return _this;
	    }

	    _createClass(UniqueTable, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.getData();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.getData(nextProps);
	        }
	    }, {
	        key: 'getData',
	        value: function getData() {
	            var _this2 = this;

	            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

	            this.setState({
	                loading: true
	            });
	            // 根据传递进组件的API获取数据
	            _axios2.default.get(props.api, props.reqData).then(function (res) {
	                var data = res.data;
	                if (data.status === 0) {
	                    var pathData = data.data;
	                    _this2.setState({
	                        tableName: data.tableName,
	                        data: _this2.formatData(pathData),
	                        showColumns: pathData.columns_show === undefined ? true : pathData.columns_show,
	                        fontColor: pathData.fontColor === undefined ? _this2.state.fontColor : pathData.fontColor
	                    });

	                    var tableArr = _this2.formatColsAndRows(pathData.columns, pathData.rows);

	                    if (pathData.superHeaders.length !== 0) {
	                        _this2.setState({
	                            superHeadersData: _this2.state.data.superHeaders,
	                            superHeadersExist: true
	                        });
	                    }
	                } else {
	                    _this2.setState({
	                        'loading': false
	                    });
	                    _antd.notification['info']({
	                        message: '整点报表提示',
	                        description: '查询整点报表数据失败'
	                    });
	                }
	            }).catch(function (err) {
	                _this2.setState({
	                    'loading': false
	                });
	                console.warn('There has been a problem with your API: ' + err.message);
	                _antd.notification['error']({
	                    message: '整点报表提示',
	                    description: '查询整点报表数据失败'
	                });
	            });
	        }

	        /**
	         * [formatData 初始化Table数据格式]
	         * @param  {[Object]} data1 根据API取得的数据
	         * @return {[Object]}  newState 格式化之后的数据
	         */

	    }, {
	        key: 'formatData',
	        value: function formatData(data1) {
	            var newState = {
	                columns: [],
	                superHeaders: [],
	                rows: [],
	                total: 0,
	                invalid: false,
	                errorMsg: '数据格式有误！'
	            };
	            var columns = data1.columns;
	            var superHeaders = data1.superHeaders || [];
	            var rows = data1.rows;
	            var showColumns = data1.columns_show === undefined ? true : data1.columns_show;

	            if (!columns || !(columns instanceof Array) || !rows || !(rows instanceof Array)) {
	                newState.invalid = true;
	            } else {
	                newState.columns = columns;
	                newState.superHeaders = superHeaders;
	                newState.rows = rows;
	                newState.showColumns = showColumns;
	            }
	            return newState;
	        }

	        /**
	         * [formatColsAndRows 处理行列数据，生成最终render需要的数据]
	         * @param {Array} cols 为取到的表格columns数据
	         * @param {Array} rows 为取得的表格rows数据
	         */

	    }, {
	        key: 'formatColsAndRows',
	        value: function formatColsAndRows(cols, rows) {
	            var newState = {
	                rows: [],
	                columns: []
	            };
	            var colsArr = cols.map(function (item, index) {
	                return item.dataIndex;
	            });
	            var rowsArr = rows.map(function (item, index) {
	                var tempTr = [];
	                for (var key in item.data) {
	                    // 存key——对应到col的索引值
	                    var colsIndex = colsArr.indexOf(key);
	                    tempTr[colsIndex] = item.data[key];
	                }
	                newState.rows.push(tempTr);
	            });

	            // 行倒叙遍历，方便向上递归删除重复的单元格
	            for (var i = newState.rows.length - 1; i >= 0; i--) {
	                for (var j = 0; j < newState.rows[i].length; j++) {
	                    if (i === 0) {
	                        continue;
	                    } else {
	                        // console.log(JSON.stringify(newState.rows[i][j]))
	                        if (newState.rows[i][j] !== undefined && newState.rows[i - 1][j] !== undefined && newState.rows[i][j].value === newState.rows[i - 1][j].value && newState.rows[i][j].dontMerge !== true) {
	                            newState.rows[i - 1][j].rowspan = (newState.rows[i][j].rowspan || 1) + (newState.rows[i - 1][j].rowspan || 1);
	                            newState.rows[i][j].rowspan = 0;
	                            newState.rows[i][j].colspan = 0;
	                            newState.rows[i][j].delete = true;
	                            // 如果和上一行一致则设置delete属性，方便合并
	                        } else if (newState.rows[i][j] !== undefined && (newState.rows[i][j].rowspan === 0 || newState.rows[i][j].colspan === 0)) {
	                            newState.rows[i][j].delete = true;
	                        }
	                    }
	                }
	            }

	            var tempData = this.state.data;
	            tempData.rows = newState.rows;
	            // console.log(tempData.rows);
	            this.setState({
	                dataToRender: tempData,
	                loading: false
	            });
	        }
	    }, {
	        key: 'getPixelRatio',
	        value: function getPixelRatio(context) {
	            var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
	            return (window.devicePixelRatio || 1) / backingStore;
	        }
	    }, {
	        key: '_fixType',
	        value: function _fixType(type) {
	            type = type.toLowerCase().replace(/jpg/i, 'jpeg');
	            var r = type.match(/png|jpeg|bmp|gif/)[0];
	            return 'image/' + r;
	        }

	        // 将表格下载为图片

	    }, {
	        key: 'handleDownloadPic',
	        value: function handleDownloadPic(e) {
	            var _this3 = this;

	            e.preventDefault();
	            // console.log('download as picture');
	            var w = document.getElementById(this.state.tableName).offsetWidth;
	            var h = document.getElementById(this.state.tableName).offsetHeight;
	            var canvas = document.createElement('canvas');
	            canvas.width = w * 2;
	            canvas.height = h * 2;
	            canvas.style.width = w + 'px';
	            canvas.style.height = h + 'px';
	            var context = canvas.getContext('2d');
	            // 改善Retina屏幕显示的清晰度
	            // context.scale(1.6, 1.6);
	            var scaleBy = this.getPixelRatio(context);
	            context.scale(scaleBy, scaleBy);
	            _antd.notification['success']({
	                message: '整点报表提示',
	                description: '数据太多会导致图片生成较慢'
	            });
	            // console.log(canvas);
	            (0, _html2canvas2.default)(document.getElementById(this.state.tableName), {
	                canvas: canvas,
	                taintTest: false,
	                onrendered: function onrendered(canvas) {
	                    canvas.id = 'mycanvas';
	                    var dataUrl = canvas.toDataURL('png');
	                    var imgData = dataUrl.replace(_this3._fixType('png'), 'image/octet-stream');
	                    var newImg = document.createElement('img');
	                    newImg.src = dataUrl;
	                    // document.body.appendChild(newImg);
	                    // 创建下载链接
	                    var a = document.createElement('a');
	                    a.href = dataUrl;
	                    var prefix = _this3.getPrefix();
	                    // 设置文件名
	                    a.download = prefix + '-' + _this3.state.tableName + '.png';
	                    document.body.appendChild(a);
	                    a.click();
	                    document.body.removeChild(a);
	                }
	            });
	        }
	        // 将表格导出为Excel

	    }, {
	        key: 'handleDownloadExcel',
	        value: function handleDownloadExcel(e) {
	            // console.log('export as excel');
	            e.preventDefault();
	            var htmlEle = '<html><head><meta charset="utf-8" /></head><body>' + document.getElementById(this.state.tableName).outerHTML + '</body></html>';
	            var blob = new Blob([htmlEle], { 'type': 'text\/xls' });
	            var a = document.createElement('a');
	            a.href = URL.createObjectURL(blob);
	            // 设置文件名
	            a.download = this.getPrefix() + '-' + this.state.tableName + '.xls';
	            document.body.appendChild(a);
	            a.click();
	            document.body.removeChild(a);
	        }

	        // 导出文件名前缀

	    }, {
	        key: 'getPrefix',
	        value: function getPrefix() {
	            var date = new Date();
	            var prefix = '';
	            prefix += date.getFullYear();
	            prefix += date.getMonth() + 1;
	            prefix += date.getDate();
	            prefix += date.getHours();
	            prefix += date.getMinutes();
	            return prefix;
	        }
	    }, {
	        key: 'handleEdit',
	        value: function handleEdit() {
	            console.log('edit');
	            this.setState({
	                editable: true
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            var data = this.state.dataToRender;
	            var _state = this.state,
	                superHeadersExist = _state.superHeadersExist,
	                superHeadersData = _state.superHeadersData,
	                showColumns = _state.showColumns,
	                fontColor = _state.fontColor,
	                editable = _state.editable;

	            return _react2.default.createElement(
	                _antd.Spin,
	                { tip: '\u62A5\u8868\u6570\u636E\u6B63\u5728\u52AA\u529BLoading...\u8BF7\u8010\u5FC3\u7B49\u5F85\uFF01', spinning: this.state.loading },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'unique-table' },
	                    _react2.default.createElement(
	                        _antd.Button,
	                        { className: 'report-btn', type: 'primary',
	                            onClick: this.handleDownloadPic.bind(this)
	                        },
	                        '\u4E0B\u8F7D\u4E3A\u56FE\u7247'
	                    ),
	                    '\xA0\xA0',
	                    _react2.default.createElement(
	                        _antd.Button,
	                        { className: 'report-btn', type: 'primary',
	                            onClick: this.handleDownloadExcel.bind(this) },
	                        '\u5BFC\u51FA\u4E3AExcel'
	                    ),
	                    _react2.default.createElement('br', null),
	                    _react2.default.createElement('br', null),
	                    _react2.default.createElement(
	                        'table',
	                        { className: 'table table-bordered table-hover',
	                            id: this.state.tableName,
	                            ref: 'tableExport',
	                            style: { color: this.state.fontColor, tableLayout: 'fixed',
	                                'wordBreak': 'break-all', width: '100%' } },
	                        _react2.default.createElement(
	                            'thead',
	                            null,
	                            superHeadersExist && superHeadersData !== undefined && superHeadersData.map(function (trItem, trIndex) {
	                                return _react2.default.createElement(
	                                    'tr',
	                                    { key: 'tr' + trIndex, className: 'superHeaders' },
	                                    trItem.map(function (item, index) {
	                                        return _react2.default.createElement(
	                                            'td',
	                                            { key: 'td' + index,
	                                                ref: 'td' + index,
	                                                colSpan: item.colspan,
	                                                rowSpan: item.rowspan === undefined ? 1 : item.rowspan,
	                                                style: {
	                                                    textAlign: 'center',
	                                                    verticalAlign: 'center',
	                                                    backgroundColor: item.backgroundColor ? item.backgroundColor : item.background ? item.background : 'rgb(247,247,247)'
	                                                } },
	                                            item.flagIshtml ? _this4.transformToHtml.bind(_this4, item.name, 'td' + index) : item.name
	                                        );
	                                    })
	                                );
	                            }),
	                            showColumns && data !== null && data.columns !== null && _react2.default.createElement(
	                                'tr',
	                                null,
	                                data.columns.map(function (item, index) {
	                                    return _react2.default.createElement(
	                                        'th',
	                                        { key: index },
	                                        item.title
	                                    );
	                                })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'tbody',
	                            { style: { textAlign: 'center' } },
	                            data !== null && data.rows !== null && data.rows.map(function (trItem, index1) {
	                                var items = [];
	                                for (var row in trItem) {
	                                    var item = trItem[row];
	                                    if (item.delete === true) {} else {
	                                        items.push(_react2.default.createElement(_Td2.default, { key: row,
	                                            editable: editable,
	                                            tdItem: item,
	                                            tdIndex: row,
	                                            rowKey: index1 + 4 }));
	                                    }
	                                }
	                                return _react2.default.createElement(
	                                    'tr',
	                                    { key: 'tr_' + index1 },
	                                    items
	                                );
	                            })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return UniqueTable;
	}(_react.PureComponent);

	exports.default = UniqueTable;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @file Description
	 * @author liuzechun
	 * Created Date: 2018-07-30 01:58:21
	 */

	module.exports = window.DLL.React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @file Description
	 * @author liuzechun
	 * Created Date: 2018-07-30 01:58:21
	 */

	module.exports = window.DLL.Antd;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global) {/*
	  html2canvas 0.5.0-beta4 <http://html2canvas.hertzen.com>
	  Copyright (c) 2016 Niklas von Hertzen

	  Released under  License
	*/

	(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.html2canvas = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
	(function (global){
	/*! https://mths.be/punycode v1.4.0 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw new RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * https://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			typeof define == 'function' &&
			typeof define.amd == 'object' &&
			define.amd
		) {
			define('punycode', function() {
				return punycode;
			});
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) {
				// in Node.js, io.js, or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{}],2:[function(_dereq_,module,exports){
	var log = _dereq_('./log');

	function restoreOwnerScroll(ownerDocument, x, y) {
	    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
	        ownerDocument.defaultView.scrollTo(x, y);
	    }
	}

	function cloneCanvasContents(canvas, clonedCanvas) {
	    try {
	        if (clonedCanvas) {
	            clonedCanvas.width = canvas.width;
	            clonedCanvas.height = canvas.height;
	            clonedCanvas.getContext("2d").putImageData(canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height), 0, 0);
	        }
	    } catch(e) {
	        log("Unable to copy canvas content from", canvas, e);
	    }
	}

	function cloneNode(node, javascriptEnabled) {
	    var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);

	    var child = node.firstChild;
	    while(child) {
	        if (javascriptEnabled === true || child.nodeType !== 1 || child.nodeName !== 'SCRIPT') {
	            clone.appendChild(cloneNode(child, javascriptEnabled));
	        }
	        child = child.nextSibling;
	    }

	    if (node.nodeType === 1) {
	        clone._scrollTop = node.scrollTop;
	        clone._scrollLeft = node.scrollLeft;
	        if (node.nodeName === "CANVAS") {
	            cloneCanvasContents(node, clone);
	        } else if (node.nodeName === "TEXTAREA" || node.nodeName === "SELECT") {
	            clone.value = node.value;
	        }
	    }

	    return clone;
	}

	function initNode(node) {
	    if (node.nodeType === 1) {
	        node.scrollTop = node._scrollTop;
	        node.scrollLeft = node._scrollLeft;

	        var child = node.firstChild;
	        while(child) {
	            initNode(child);
	            child = child.nextSibling;
	        }
	    }
	}

	module.exports = function(ownerDocument, containerDocument, width, height, options, x ,y) {
	    var documentElement = cloneNode(ownerDocument.documentElement, options.javascriptEnabled);
	    var container = containerDocument.createElement("iframe");

	    container.className = "html2canvas-container";
	    container.style.visibility = "hidden";
	    container.style.position = "fixed";
	    container.style.left = "-10000px";
	    container.style.top = "0px";
	    container.style.border = "0";
	    container.width = width;
	    container.height = height;
	    container.scrolling = "no"; // ios won't scroll without it
	    containerDocument.body.appendChild(container);

	    return new Promise(function(resolve) {
	        var documentClone = container.contentWindow.document;

	        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
	         if window url is about:blank, we can assign the url to current by writing onto the document
	         */
	        container.contentWindow.onload = container.onload = function() {
	            var interval = setInterval(function() {
	                if (documentClone.body.childNodes.length > 0) {
	                    initNode(documentClone.documentElement);
	                    clearInterval(interval);
	                    if (options.type === "view") {
	                        container.contentWindow.scrollTo(x, y);
	                        if ((/(iPad|iPhone|iPod)/g).test(navigator.userAgent) && (container.contentWindow.scrollY !== y || container.contentWindow.scrollX !== x)) {
	                            documentClone.documentElement.style.top = (-y) + "px";
	                            documentClone.documentElement.style.left = (-x) + "px";
	                            documentClone.documentElement.style.position = 'absolute';
	                        }
	                    }
	                    resolve(container);
	                }
	            }, 50);
	        };

	        documentClone.open();
	        documentClone.write("<!DOCTYPE html><html></html>");
	        // Chrome scrolls the parent document for some reason after the write to the cloned window???
	        restoreOwnerScroll(ownerDocument, x, y);
	        documentClone.replaceChild(documentClone.adoptNode(documentElement), documentClone.documentElement);
	        documentClone.close();
	    });
	};

	},{"./log":13}],3:[function(_dereq_,module,exports){
	// http://dev.w3.org/csswg/css-color/

	function Color(value) {
	    this.r = 0;
	    this.g = 0;
	    this.b = 0;
	    this.a = null;
	    var result = this.fromArray(value) ||
	        this.namedColor(value) ||
	        this.rgb(value) ||
	        this.rgba(value) ||
	        this.hex6(value) ||
	        this.hex3(value);
	}

	Color.prototype.darken = function(amount) {
	    var a = 1 - amount;
	    return  new Color([
	        Math.round(this.r * a),
	        Math.round(this.g * a),
	        Math.round(this.b * a),
	        this.a
	    ]);
	};

	Color.prototype.isTransparent = function() {
	    return this.a === 0;
	};

	Color.prototype.isBlack = function() {
	    return this.r === 0 && this.g === 0 && this.b === 0;
	};

	Color.prototype.fromArray = function(array) {
	    if (Array.isArray(array)) {
	        this.r = Math.min(array[0], 255);
	        this.g = Math.min(array[1], 255);
	        this.b = Math.min(array[2], 255);
	        if (array.length > 3) {
	            this.a = array[3];
	        }
	    }

	    return (Array.isArray(array));
	};

	var _hex3 = /^#([a-f0-9]{3})$/i;

	Color.prototype.hex3 = function(value) {
	    var match = null;
	    if ((match = value.match(_hex3)) !== null) {
	        this.r = parseInt(match[1][0] + match[1][0], 16);
	        this.g = parseInt(match[1][1] + match[1][1], 16);
	        this.b = parseInt(match[1][2] + match[1][2], 16);
	    }
	    return match !== null;
	};

	var _hex6 = /^#([a-f0-9]{6})$/i;

	Color.prototype.hex6 = function(value) {
	    var match = null;
	    if ((match = value.match(_hex6)) !== null) {
	        this.r = parseInt(match[1].substring(0, 2), 16);
	        this.g = parseInt(match[1].substring(2, 4), 16);
	        this.b = parseInt(match[1].substring(4, 6), 16);
	    }
	    return match !== null;
	};


	var _rgb = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;

	Color.prototype.rgb = function(value) {
	    var match = null;
	    if ((match = value.match(_rgb)) !== null) {
	        this.r = Number(match[1]);
	        this.g = Number(match[2]);
	        this.b = Number(match[3]);
	    }
	    return match !== null;
	};

	var _rgba = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;

	Color.prototype.rgba = function(value) {
	    var match = null;
	    if ((match = value.match(_rgba)) !== null) {
	        this.r = Number(match[1]);
	        this.g = Number(match[2]);
	        this.b = Number(match[3]);
	        this.a = Number(match[4]);
	    }
	    return match !== null;
	};

	Color.prototype.toString = function() {
	    return this.a !== null && this.a !== 1 ?
	    "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" :
	    "rgb(" + [this.r, this.g, this.b].join(",") + ")";
	};

	Color.prototype.namedColor = function(value) {
	    value = value.toLowerCase();
	    var color = colors[value];
	    if (color) {
	        this.r = color[0];
	        this.g = color[1];
	        this.b = color[2];
	    } else if (value === "transparent") {
	        this.r = this.g = this.b = this.a = 0;
	        return true;
	    }

	    return !!color;
	};

	Color.prototype.isColor = true;

	// JSON.stringify([].slice.call($$('.named-color-table tr'), 1).map(function(row) { return [row.childNodes[3].textContent, row.childNodes[5].textContent.trim().split(",").map(Number)] }).reduce(function(data, row) {data[row[0]] = row[1]; return data}, {}))
	var colors = {
	    "aliceblue": [240, 248, 255],
	    "antiquewhite": [250, 235, 215],
	    "aqua": [0, 255, 255],
	    "aquamarine": [127, 255, 212],
	    "azure": [240, 255, 255],
	    "beige": [245, 245, 220],
	    "bisque": [255, 228, 196],
	    "black": [0, 0, 0],
	    "blanchedalmond": [255, 235, 205],
	    "blue": [0, 0, 255],
	    "blueviolet": [138, 43, 226],
	    "brown": [165, 42, 42],
	    "burlywood": [222, 184, 135],
	    "cadetblue": [95, 158, 160],
	    "chartreuse": [127, 255, 0],
	    "chocolate": [210, 105, 30],
	    "coral": [255, 127, 80],
	    "cornflowerblue": [100, 149, 237],
	    "cornsilk": [255, 248, 220],
	    "crimson": [220, 20, 60],
	    "cyan": [0, 255, 255],
	    "darkblue": [0, 0, 139],
	    "darkcyan": [0, 139, 139],
	    "darkgoldenrod": [184, 134, 11],
	    "darkgray": [169, 169, 169],
	    "darkgreen": [0, 100, 0],
	    "darkgrey": [169, 169, 169],
	    "darkkhaki": [189, 183, 107],
	    "darkmagenta": [139, 0, 139],
	    "darkolivegreen": [85, 107, 47],
	    "darkorange": [255, 140, 0],
	    "darkorchid": [153, 50, 204],
	    "darkred": [139, 0, 0],
	    "darksalmon": [233, 150, 122],
	    "darkseagreen": [143, 188, 143],
	    "darkslateblue": [72, 61, 139],
	    "darkslategray": [47, 79, 79],
	    "darkslategrey": [47, 79, 79],
	    "darkturquoise": [0, 206, 209],
	    "darkviolet": [148, 0, 211],
	    "deeppink": [255, 20, 147],
	    "deepskyblue": [0, 191, 255],
	    "dimgray": [105, 105, 105],
	    "dimgrey": [105, 105, 105],
	    "dodgerblue": [30, 144, 255],
	    "firebrick": [178, 34, 34],
	    "floralwhite": [255, 250, 240],
	    "forestgreen": [34, 139, 34],
	    "fuchsia": [255, 0, 255],
	    "gainsboro": [220, 220, 220],
	    "ghostwhite": [248, 248, 255],
	    "gold": [255, 215, 0],
	    "goldenrod": [218, 165, 32],
	    "gray": [128, 128, 128],
	    "green": [0, 128, 0],
	    "greenyellow": [173, 255, 47],
	    "grey": [128, 128, 128],
	    "honeydew": [240, 255, 240],
	    "hotpink": [255, 105, 180],
	    "indianred": [205, 92, 92],
	    "indigo": [75, 0, 130],
	    "ivory": [255, 255, 240],
	    "khaki": [240, 230, 140],
	    "lavender": [230, 230, 250],
	    "lavenderblush": [255, 240, 245],
	    "lawngreen": [124, 252, 0],
	    "lemonchiffon": [255, 250, 205],
	    "lightblue": [173, 216, 230],
	    "lightcoral": [240, 128, 128],
	    "lightcyan": [224, 255, 255],
	    "lightgoldenrodyellow": [250, 250, 210],
	    "lightgray": [211, 211, 211],
	    "lightgreen": [144, 238, 144],
	    "lightgrey": [211, 211, 211],
	    "lightpink": [255, 182, 193],
	    "lightsalmon": [255, 160, 122],
	    "lightseagreen": [32, 178, 170],
	    "lightskyblue": [135, 206, 250],
	    "lightslategray": [119, 136, 153],
	    "lightslategrey": [119, 136, 153],
	    "lightsteelblue": [176, 196, 222],
	    "lightyellow": [255, 255, 224],
	    "lime": [0, 255, 0],
	    "limegreen": [50, 205, 50],
	    "linen": [250, 240, 230],
	    "magenta": [255, 0, 255],
	    "maroon": [128, 0, 0],
	    "mediumaquamarine": [102, 205, 170],
	    "mediumblue": [0, 0, 205],
	    "mediumorchid": [186, 85, 211],
	    "mediumpurple": [147, 112, 219],
	    "mediumseagreen": [60, 179, 113],
	    "mediumslateblue": [123, 104, 238],
	    "mediumspringgreen": [0, 250, 154],
	    "mediumturquoise": [72, 209, 204],
	    "mediumvioletred": [199, 21, 133],
	    "midnightblue": [25, 25, 112],
	    "mintcream": [245, 255, 250],
	    "mistyrose": [255, 228, 225],
	    "moccasin": [255, 228, 181],
	    "navajowhite": [255, 222, 173],
	    "navy": [0, 0, 128],
	    "oldlace": [253, 245, 230],
	    "olive": [128, 128, 0],
	    "olivedrab": [107, 142, 35],
	    "orange": [255, 165, 0],
	    "orangered": [255, 69, 0],
	    "orchid": [218, 112, 214],
	    "palegoldenrod": [238, 232, 170],
	    "palegreen": [152, 251, 152],
	    "paleturquoise": [175, 238, 238],
	    "palevioletred": [219, 112, 147],
	    "papayawhip": [255, 239, 213],
	    "peachpuff": [255, 218, 185],
	    "peru": [205, 133, 63],
	    "pink": [255, 192, 203],
	    "plum": [221, 160, 221],
	    "powderblue": [176, 224, 230],
	    "purple": [128, 0, 128],
	    "rebeccapurple": [102, 51, 153],
	    "red": [255, 0, 0],
	    "rosybrown": [188, 143, 143],
	    "royalblue": [65, 105, 225],
	    "saddlebrown": [139, 69, 19],
	    "salmon": [250, 128, 114],
	    "sandybrown": [244, 164, 96],
	    "seagreen": [46, 139, 87],
	    "seashell": [255, 245, 238],
	    "sienna": [160, 82, 45],
	    "silver": [192, 192, 192],
	    "skyblue": [135, 206, 235],
	    "slateblue": [106, 90, 205],
	    "slategray": [112, 128, 144],
	    "slategrey": [112, 128, 144],
	    "snow": [255, 250, 250],
	    "springgreen": [0, 255, 127],
	    "steelblue": [70, 130, 180],
	    "tan": [210, 180, 140],
	    "teal": [0, 128, 128],
	    "thistle": [216, 191, 216],
	    "tomato": [255, 99, 71],
	    "turquoise": [64, 224, 208],
	    "violet": [238, 130, 238],
	    "wheat": [245, 222, 179],
	    "white": [255, 255, 255],
	    "whitesmoke": [245, 245, 245],
	    "yellow": [255, 255, 0],
	    "yellowgreen": [154, 205, 50]
	};

	module.exports = Color;

	},{}],4:[function(_dereq_,module,exports){
	var Support = _dereq_('./support');
	var CanvasRenderer = _dereq_('./renderers/canvas');
	var ImageLoader = _dereq_('./imageloader');
	var NodeParser = _dereq_('./nodeparser');
	var NodeContainer = _dereq_('./nodecontainer');
	var log = _dereq_('./log');
	var utils = _dereq_('./utils');
	var createWindowClone = _dereq_('./clone');
	var loadUrlDocument = _dereq_('./proxy').loadUrlDocument;
	var getBounds = utils.getBounds;

	var html2canvasNodeAttribute = "data-html2canvas-node";
	var html2canvasCloneIndex = 0;

	function html2canvas(nodeList, options) {
	    var index = html2canvasCloneIndex++;
	    options = options || {};
	    if (options.logging) {
	        log.options.logging = true;
	        log.options.start = Date.now();
	    }

	    options.async = typeof(options.async) === "undefined" ? true : options.async;
	    options.allowTaint = typeof(options.allowTaint) === "undefined" ? false : options.allowTaint;
	    options.removeContainer = typeof(options.removeContainer) === "undefined" ? true : options.removeContainer;
	    options.javascriptEnabled = typeof(options.javascriptEnabled) === "undefined" ? false : options.javascriptEnabled;
	    options.imageTimeout = typeof(options.imageTimeout) === "undefined" ? 10000 : options.imageTimeout;
	    options.renderer = typeof(options.renderer) === "function" ? options.renderer : CanvasRenderer;
	    options.strict = !!options.strict;

	    if (typeof(nodeList) === "string") {
	        if (typeof(options.proxy) !== "string") {
	            return Promise.reject("Proxy must be used when rendering url");
	        }
	        var width = options.width != null ? options.width : window.innerWidth;
	        var height = options.height != null ? options.height : window.innerHeight;
	        return loadUrlDocument(absoluteUrl(nodeList), options.proxy, document, width, height, options).then(function(container) {
	            return renderWindow(container.contentWindow.document.documentElement, container, options, width, height);
	        });
	    }

	    var node = ((nodeList === undefined) ? [document.documentElement] : ((nodeList.length) ? nodeList : [nodeList]))[0];
	    node.setAttribute(html2canvasNodeAttribute + index, index);
	    return renderDocument(node.ownerDocument, options, node.ownerDocument.defaultView.innerWidth, node.ownerDocument.defaultView.innerHeight, index).then(function(canvas) {
	        if (typeof(options.onrendered) === "function") {
	            log("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas");
	            options.onrendered(canvas);
	        }
	        return canvas;
	    });
	}

	html2canvas.CanvasRenderer = CanvasRenderer;
	html2canvas.NodeContainer = NodeContainer;
	html2canvas.log = log;
	html2canvas.utils = utils;

	var html2canvasExport = (typeof(document) === "undefined" || typeof(Object.create) !== "function" || typeof(document.createElement("canvas").getContext) !== "function") ? function() {
	    return Promise.reject("No canvas support");
	} : html2canvas;

	module.exports = html2canvasExport;

	if (typeof(define) === 'function' && define.amd) {
	    define('html2canvas', [], function() {
	        return html2canvasExport;
	    });
	}

	function renderDocument(document, options, windowWidth, windowHeight, html2canvasIndex) {
	    return createWindowClone(document, document, windowWidth, windowHeight, options, document.defaultView.pageXOffset, document.defaultView.pageYOffset).then(function(container) {
	        log("Document cloned");
	        var attributeName = html2canvasNodeAttribute + html2canvasIndex;
	        var selector = "[" + attributeName + "='" + html2canvasIndex + "']";
	        document.querySelector(selector).removeAttribute(attributeName);
	        var clonedWindow = container.contentWindow;
	        var node = clonedWindow.document.querySelector(selector);
	        var oncloneHandler = (typeof(options.onclone) === "function") ? Promise.resolve(options.onclone(clonedWindow.document)) : Promise.resolve(true);
	        return oncloneHandler.then(function() {
	            return renderWindow(node, container, options, windowWidth, windowHeight);
	        });
	    });
	}

	function renderWindow(node, container, options, windowWidth, windowHeight) {
	    var clonedWindow = container.contentWindow;
	    var support = new Support(clonedWindow.document);
	    var imageLoader = new ImageLoader(options, support);
	    var bounds = getBounds(node);
	    var width = options.type === "view" ? windowWidth : documentWidth(clonedWindow.document);
	    var height = options.type === "view" ? windowHeight : documentHeight(clonedWindow.document);
	    var renderer = new options.renderer(width, height, imageLoader, options, document);
	    var parser = new NodeParser(node, renderer, support, imageLoader, options);
	    return parser.ready.then(function() {
	        log("Finished rendering");
	        var canvas;

	        if (options.type === "view") {
	            canvas = crop(renderer.canvas, {width: renderer.canvas.width, height: renderer.canvas.height, top: 0, left: 0, x: 0, y: 0});
	        } else if (node === clonedWindow.document.body || node === clonedWindow.document.documentElement || options.canvas != null) {
	            canvas = renderer.canvas;
	        } else {
	            canvas = crop(renderer.canvas, {width:  options.width != null ? options.width : bounds.width, height: options.height != null ? options.height : bounds.height, top: bounds.top, left: bounds.left, x: 0, y: 0});
	        }

	        cleanupContainer(container, options);
	        return canvas;
	    });
	}

	function cleanupContainer(container, options) {
	    if (options.removeContainer) {
	        container.parentNode.removeChild(container);
	        log("Cleaned up container");
	    }
	}

	function crop(canvas, bounds) {
	    var croppedCanvas = document.createElement("canvas");
	    var x1 = Math.min(canvas.width - 1, Math.max(0, bounds.left));
	    var x2 = Math.min(canvas.width, Math.max(1, bounds.left + bounds.width));
	    var y1 = Math.min(canvas.height - 1, Math.max(0, bounds.top));
	    var y2 = Math.min(canvas.height, Math.max(1, bounds.top + bounds.height));
	    croppedCanvas.width = bounds.width;
	    croppedCanvas.height =  bounds.height;
	    var width = x2-x1;
	    var height = y2-y1;
	    log("Cropping canvas at:", "left:", bounds.left, "top:", bounds.top, "width:", width, "height:", height);
	    log("Resulting crop with width", bounds.width, "and height", bounds.height, "with x", x1, "and y", y1);
	    croppedCanvas.getContext("2d").drawImage(canvas, x1, y1, width, height, bounds.x, bounds.y, width, height);
	    return croppedCanvas;
	}

	function documentWidth (doc) {
	    return Math.max(
	        Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
	        Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
	        Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
	    );
	}

	function documentHeight (doc) {
	    return Math.max(
	        Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
	        Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
	        Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
	    );
	}

	function absoluteUrl(url) {
	    var link = document.createElement("a");
	    link.href = url;
	    link.href = link.href;
	    return link;
	}

	},{"./clone":2,"./imageloader":11,"./log":13,"./nodecontainer":14,"./nodeparser":15,"./proxy":16,"./renderers/canvas":20,"./support":22,"./utils":26}],5:[function(_dereq_,module,exports){
	var log = _dereq_('./log');
	var smallImage = _dereq_('./utils').smallImage;

	function DummyImageContainer(src) {
	    this.src = src;
	    log("DummyImageContainer for", src);
	    if (!this.promise || !this.image) {
	        log("Initiating DummyImageContainer");
	        DummyImageContainer.prototype.image = new Image();
	        var image = this.image;
	        DummyImageContainer.prototype.promise = new Promise(function(resolve, reject) {
	            image.onload = resolve;
	            image.onerror = reject;
	            image.src = smallImage();
	            if (image.complete === true) {
	                resolve(image);
	            }
	        });
	    }
	}

	module.exports = DummyImageContainer;

	},{"./log":13,"./utils":26}],6:[function(_dereq_,module,exports){
	var smallImage = _dereq_('./utils').smallImage;

	function Font(family, size) {
	    var container = document.createElement('div'),
	        img = document.createElement('img'),
	        span = document.createElement('span'),
	        sampleText = 'Hidden Text',
	        baseline,
	        middle;

	    container.style.visibility = "hidden";
	    container.style.fontFamily = family;
	    container.style.fontSize = size;
	    container.style.margin = 0;
	    container.style.padding = 0;

	    document.body.appendChild(container);

	    img.src = smallImage();
	    img.width = 1;
	    img.height = 1;

	    img.style.margin = 0;
	    img.style.padding = 0;
	    img.style.verticalAlign = "baseline";

	    span.style.fontFamily = family;
	    span.style.fontSize = size;
	    span.style.margin = 0;
	    span.style.padding = 0;

	    span.appendChild(document.createTextNode(sampleText));
	    container.appendChild(span);
	    container.appendChild(img);
	    baseline = (img.offsetTop - span.offsetTop) + 1;

	    container.removeChild(span);
	    container.appendChild(document.createTextNode(sampleText));

	    container.style.lineHeight = "normal";
	    img.style.verticalAlign = "super";

	    middle = (img.offsetTop-container.offsetTop) + 1;

	    document.body.removeChild(container);

	    this.baseline = baseline;
	    this.lineWidth = 1;
	    this.middle = middle;
	}

	module.exports = Font;

	},{"./utils":26}],7:[function(_dereq_,module,exports){
	var Font = _dereq_('./font');

	function FontMetrics() {
	    this.data = {};
	}

	FontMetrics.prototype.getMetrics = function(family, size) {
	    if (this.data[family + "-" + size] === undefined) {
	        this.data[family + "-" + size] = new Font(family, size);
	    }
	    return this.data[family + "-" + size];
	};

	module.exports = FontMetrics;

	},{"./font":6}],8:[function(_dereq_,module,exports){
	var utils = _dereq_('./utils');
	var getBounds = utils.getBounds;
	var loadUrlDocument = _dereq_('./proxy').loadUrlDocument;

	function FrameContainer(container, sameOrigin, options) {
	    this.image = null;
	    this.src = container;
	    var self = this;
	    var bounds = getBounds(container);
	    this.promise = (!sameOrigin ? this.proxyLoad(options.proxy, bounds, options) : new Promise(function(resolve) {
	        if (container.contentWindow.document.URL === "about:blank" || container.contentWindow.document.documentElement == null) {
	            container.contentWindow.onload = container.onload = function() {
	                resolve(container);
	            };
	        } else {
	            resolve(container);
	        }
	    })).then(function(container) {
	        var html2canvas = _dereq_('./core');
	        return html2canvas(container.contentWindow.document.documentElement, {type: 'view', width: container.width, height: container.height, proxy: options.proxy, javascriptEnabled: options.javascriptEnabled, removeContainer: options.removeContainer, allowTaint: options.allowTaint, imageTimeout: options.imageTimeout / 2});
	    }).then(function(canvas) {
	        return self.image = canvas;
	    });
	}

	FrameContainer.prototype.proxyLoad = function(proxy, bounds, options) {
	    var container = this.src;
	    return loadUrlDocument(container.src, proxy, container.ownerDocument, bounds.width, bounds.height, options);
	};

	module.exports = FrameContainer;

	},{"./core":4,"./proxy":16,"./utils":26}],9:[function(_dereq_,module,exports){
	function GradientContainer(imageData) {
	    this.src = imageData.value;
	    this.colorStops = [];
	    this.type = null;
	    this.x0 = 0.5;
	    this.y0 = 0.5;
	    this.x1 = 0.5;
	    this.y1 = 0.5;
	    this.promise = Promise.resolve(true);
	}

	GradientContainer.TYPES = {
	    LINEAR: 1,
	    RADIAL: 2
	};

	// TODO: support hsl[a], negative %/length values
	// TODO: support <angle> (e.g. -?\d{1,3}(?:\.\d+)deg, etc. : https://developer.mozilla.org/docs/Web/CSS/angle )
	GradientContainer.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i;

	module.exports = GradientContainer;

	},{}],10:[function(_dereq_,module,exports){
	function ImageContainer(src, cors) {
	    this.src = src;
	    this.image = new Image();
	    var self = this;
	    this.tainted = null;
	    this.promise = new Promise(function(resolve, reject) {
	        self.image.onload = resolve;
	        self.image.onerror = reject;
	        if (cors) {
	            self.image.crossOrigin = "anonymous";
	        }
	        self.image.src = src;
	        if (self.image.complete === true) {
	            resolve(self.image);
	        }
	    });
	}

	module.exports = ImageContainer;

	},{}],11:[function(_dereq_,module,exports){
	var log = _dereq_('./log');
	var ImageContainer = _dereq_('./imagecontainer');
	var DummyImageContainer = _dereq_('./dummyimagecontainer');
	var ProxyImageContainer = _dereq_('./proxyimagecontainer');
	var FrameContainer = _dereq_('./framecontainer');
	var SVGContainer = _dereq_('./svgcontainer');
	var SVGNodeContainer = _dereq_('./svgnodecontainer');
	var LinearGradientContainer = _dereq_('./lineargradientcontainer');
	var WebkitGradientContainer = _dereq_('./webkitgradientcontainer');
	var bind = _dereq_('./utils').bind;

	function ImageLoader(options, support) {
	    this.link = null;
	    this.options = options;
	    this.support = support;
	    this.origin = this.getOrigin(window.location.href);
	}

	ImageLoader.prototype.findImages = function(nodes) {
	    var images = [];
	    nodes.reduce(function(imageNodes, container) {
	        switch(container.node.nodeName) {
	        case "IMG":
	            return imageNodes.concat([{
	                args: [container.node.src],
	                method: "url"
	            }]);
	        case "svg":
	        case "IFRAME":
	            return imageNodes.concat([{
	                args: [container.node],
	                method: container.node.nodeName
	            }]);
	        }
	        return imageNodes;
	    }, []).forEach(this.addImage(images, this.loadImage), this);
	    return images;
	};

	ImageLoader.prototype.findBackgroundImage = function(images, container) {
	    container.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(images, this.loadImage), this);
	    return images;
	};

	ImageLoader.prototype.addImage = function(images, callback) {
	    return function(newImage) {
	        newImage.args.forEach(function(image) {
	            if (!this.imageExists(images, image)) {
	                images.splice(0, 0, callback.call(this, newImage));
	                log('Added image #' + (images.length), typeof(image) === "string" ? image.substring(0, 100) : image);
	            }
	        }, this);
	    };
	};

	ImageLoader.prototype.hasImageBackground = function(imageData) {
	    return imageData.method !== "none";
	};

	ImageLoader.prototype.loadImage = function(imageData) {
	    if (imageData.method === "url") {
	        var src = imageData.args[0];
	        if (this.isSVG(src) && !this.support.svg && !this.options.allowTaint) {
	            return new SVGContainer(src);
	        } else if (src.match(/data:image\/.*;base64,/i)) {
	            return new ImageContainer(src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, ''), false);
	        } else if (this.isSameOrigin(src) || this.options.allowTaint === true || this.isSVG(src)) {
	            return new ImageContainer(src, false);
	        } else if (this.support.cors && !this.options.allowTaint && this.options.useCORS) {
	            return new ImageContainer(src, true);
	        } else if (this.options.proxy) {
	            return new ProxyImageContainer(src, this.options.proxy);
	        } else {
	            return new DummyImageContainer(src);
	        }
	    } else if (imageData.method === "linear-gradient") {
	        return new LinearGradientContainer(imageData);
	    } else if (imageData.method === "gradient") {
	        return new WebkitGradientContainer(imageData);
	    } else if (imageData.method === "svg") {
	        return new SVGNodeContainer(imageData.args[0], this.support.svg);
	    } else if (imageData.method === "IFRAME") {
	        return new FrameContainer(imageData.args[0], this.isSameOrigin(imageData.args[0].src), this.options);
	    } else {
	        return new DummyImageContainer(imageData);
	    }
	};

	ImageLoader.prototype.isSVG = function(src) {
	    return src.substring(src.length - 3).toLowerCase() === "svg" || SVGContainer.prototype.isInline(src);
	};

	ImageLoader.prototype.imageExists = function(images, src) {
	    return images.some(function(image) {
	        return image.src === src;
	    });
	};

	ImageLoader.prototype.isSameOrigin = function(url) {
	    return (this.getOrigin(url) === this.origin);
	};

	ImageLoader.prototype.getOrigin = function(url) {
	    var link = this.link || (this.link = document.createElement("a"));
	    link.href = url;
	    link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
	    return link.protocol + link.hostname + link.port;
	};

	ImageLoader.prototype.getPromise = function(container) {
	    return this.timeout(container, this.options.imageTimeout)['catch'](function() {
	        var dummy = new DummyImageContainer(container.src);
	        return dummy.promise.then(function(image) {
	            container.image = image;
	        });
	    });
	};

	ImageLoader.prototype.get = function(src) {
	    var found = null;
	    return this.images.some(function(img) {
	        return (found = img).src === src;
	    }) ? found : null;
	};

	ImageLoader.prototype.fetch = function(nodes) {
	    this.images = nodes.reduce(bind(this.findBackgroundImage, this), this.findImages(nodes));
	    this.images.forEach(function(image, index) {
	        image.promise.then(function() {
	            log("Succesfully loaded image #"+ (index+1), image);
	        }, function(e) {
	            log("Failed loading image #"+ (index+1), image, e);
	        });
	    });
	    this.ready = Promise.all(this.images.map(this.getPromise, this));
	    log("Finished searching images");
	    return this;
	};

	ImageLoader.prototype.timeout = function(container, timeout) {
	    var timer;
	    var promise = Promise.race([container.promise, new Promise(function(res, reject) {
	        timer = setTimeout(function() {
	            log("Timed out loading image", container);
	            reject(container);
	        }, timeout);
	    })]).then(function(container) {
	        clearTimeout(timer);
	        return container;
	    });
	    promise['catch'](function() {
	        clearTimeout(timer);
	    });
	    return promise;
	};

	module.exports = ImageLoader;

	},{"./dummyimagecontainer":5,"./framecontainer":8,"./imagecontainer":10,"./lineargradientcontainer":12,"./log":13,"./proxyimagecontainer":17,"./svgcontainer":23,"./svgnodecontainer":24,"./utils":26,"./webkitgradientcontainer":27}],12:[function(_dereq_,module,exports){
	var GradientContainer = _dereq_('./gradientcontainer');
	var Color = _dereq_('./color');

	function LinearGradientContainer(imageData) {
	    GradientContainer.apply(this, arguments);
	    this.type = GradientContainer.TYPES.LINEAR;

	    var hasDirection = LinearGradientContainer.REGEXP_DIRECTION.test( imageData.args[0] ) ||
	        !GradientContainer.REGEXP_COLORSTOP.test( imageData.args[0] );

	    if (hasDirection) {
	        imageData.args[0].split(/\s+/).reverse().forEach(function(position, index) {
	            switch(position) {
	            case "left":
	                this.x0 = 0;
	                this.x1 = 1;
	                break;
	            case "top":
	                this.y0 = 0;
	                this.y1 = 1;
	                break;
	            case "right":
	                this.x0 = 1;
	                this.x1 = 0;
	                break;
	            case "bottom":
	                this.y0 = 1;
	                this.y1 = 0;
	                break;
	            case "to":
	                var y0 = this.y0;
	                var x0 = this.x0;
	                this.y0 = this.y1;
	                this.x0 = this.x1;
	                this.x1 = x0;
	                this.y1 = y0;
	                break;
	            case "center":
	                break; // centered by default
	            // Firefox internally converts position keywords to percentages:
	            // http://www.w3.org/TR/2010/WD-CSS2-20101207/colors.html#propdef-background-position
	            default: // percentage or absolute length
	                // TODO: support absolute start point positions (e.g., use bounds to convert px to a ratio)
	                var ratio = parseFloat(position, 10) * 1e-2;
	                if (isNaN(ratio)) { // invalid or unhandled value
	                    break;
	                }
	                if (index === 0) {
	                    this.y0 = ratio;
	                    this.y1 = 1 - this.y0;
	                } else {
	                    this.x0 = ratio;
	                    this.x1 = 1 - this.x0;
	                }
	                break;
	            }
	        }, this);
	    } else {
	        this.y0 = 0;
	        this.y1 = 1;
	    }

	    this.colorStops = imageData.args.slice(hasDirection ? 1 : 0).map(function(colorStop) {
	        var colorStopMatch = colorStop.match(GradientContainer.REGEXP_COLORSTOP);
	        var value = +colorStopMatch[2];
	        var unit = value === 0 ? "%" : colorStopMatch[3]; // treat "0" as "0%"
	        return {
	            color: new Color(colorStopMatch[1]),
	            // TODO: support absolute stop positions (e.g., compute gradient line length & convert px to ratio)
	            stop: unit === "%" ? value / 100 : null
	        };
	    });

	    if (this.colorStops[0].stop === null) {
	        this.colorStops[0].stop = 0;
	    }

	    if (this.colorStops[this.colorStops.length - 1].stop === null) {
	        this.colorStops[this.colorStops.length - 1].stop = 1;
	    }

	    // calculates and fills-in explicit stop positions when omitted from rule
	    this.colorStops.forEach(function(colorStop, index) {
	        if (colorStop.stop === null) {
	            this.colorStops.slice(index).some(function(find, count) {
	                if (find.stop !== null) {
	                    colorStop.stop = ((find.stop - this.colorStops[index - 1].stop) / (count + 1)) + this.colorStops[index - 1].stop;
	                    return true;
	                } else {
	                    return false;
	                }
	            }, this);
	        }
	    }, this);
	}

	LinearGradientContainer.prototype = Object.create(GradientContainer.prototype);

	// TODO: support <angle> (e.g. -?\d{1,3}(?:\.\d+)deg, etc. : https://developer.mozilla.org/docs/Web/CSS/angle )
	LinearGradientContainer.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i;

	module.exports = LinearGradientContainer;

	},{"./color":3,"./gradientcontainer":9}],13:[function(_dereq_,module,exports){
	var logger = function() {
	    if (logger.options.logging && window.console && window.console.log) {
	        Function.prototype.bind.call(window.console.log, (window.console)).apply(window.console, [(Date.now() - logger.options.start) + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
	    }
	};

	logger.options = {logging: false};
	module.exports = logger;

	},{}],14:[function(_dereq_,module,exports){
	var Color = _dereq_('./color');
	var utils = _dereq_('./utils');
	var getBounds = utils.getBounds;
	var parseBackgrounds = utils.parseBackgrounds;
	var offsetBounds = utils.offsetBounds;

	function NodeContainer(node, parent) {
	    this.node = node;
	    this.parent = parent;
	    this.stack = null;
	    this.bounds = null;
	    this.borders = null;
	    this.clip = [];
	    this.backgroundClip = [];
	    this.offsetBounds = null;
	    this.visible = null;
	    this.computedStyles = null;
	    this.colors = {};
	    this.styles = {};
	    this.backgroundImages = null;
	    this.transformData = null;
	    this.transformMatrix = null;
	    this.isPseudoElement = false;
	    this.opacity = null;
	}

	NodeContainer.prototype.cloneTo = function(stack) {
	    stack.visible = this.visible;
	    stack.borders = this.borders;
	    stack.bounds = this.bounds;
	    stack.clip = this.clip;
	    stack.backgroundClip = this.backgroundClip;
	    stack.computedStyles = this.computedStyles;
	    stack.styles = this.styles;
	    stack.backgroundImages = this.backgroundImages;
	    stack.opacity = this.opacity;
	};

	NodeContainer.prototype.getOpacity = function() {
	    return this.opacity === null ? (this.opacity = this.cssFloat('opacity')) : this.opacity;
	};

	NodeContainer.prototype.assignStack = function(stack) {
	    this.stack = stack;
	    stack.children.push(this);
	};

	NodeContainer.prototype.isElementVisible = function() {
	    return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : (
	        this.css('display') !== "none" &&
	        this.css('visibility') !== "hidden" &&
	        !this.node.hasAttribute("data-html2canvas-ignore") &&
	        (this.node.nodeName !== "INPUT" || this.node.getAttribute("type") !== "hidden")
	    );
	};

	NodeContainer.prototype.css = function(attribute) {
	    if (!this.computedStyles) {
	        this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null);
	    }

	    return this.styles[attribute] || (this.styles[attribute] = this.computedStyles[attribute]);
	};

	NodeContainer.prototype.prefixedCss = function(attribute) {
	    var prefixes = ["webkit", "moz", "ms", "o"];
	    var value = this.css(attribute);
	    if (value === undefined) {
	        prefixes.some(function(prefix) {
	            value = this.css(prefix + attribute.substr(0, 1).toUpperCase() + attribute.substr(1));
	            return value !== undefined;
	        }, this);
	    }
	    return value === undefined ? null : value;
	};

	NodeContainer.prototype.computedStyle = function(type) {
	    return this.node.ownerDocument.defaultView.getComputedStyle(this.node, type);
	};

	NodeContainer.prototype.cssInt = function(attribute) {
	    var value = parseInt(this.css(attribute), 10);
	    return (isNaN(value)) ? 0 : value; // borders in old IE are throwing 'medium' for demo.html
	};

	NodeContainer.prototype.color = function(attribute) {
	    return this.colors[attribute] || (this.colors[attribute] = new Color(this.css(attribute)));
	};

	NodeContainer.prototype.cssFloat = function(attribute) {
	    var value = parseFloat(this.css(attribute));
	    return (isNaN(value)) ? 0 : value;
	};

	NodeContainer.prototype.fontWeight = function() {
	    var weight = this.css("fontWeight");
	    switch(parseInt(weight, 10)){
	    case 401:
	        weight = "bold";
	        break;
	    case 400:
	        weight = "normal";
	        break;
	    }
	    return weight;
	};

	NodeContainer.prototype.parseClip = function() {
	    var matches = this.css('clip').match(this.CLIP);
	    if (matches) {
	        return {
	            top: parseInt(matches[1], 10),
	            right: parseInt(matches[2], 10),
	            bottom: parseInt(matches[3], 10),
	            left: parseInt(matches[4], 10)
	        };
	    }
	    return null;
	};

	NodeContainer.prototype.parseBackgroundImages = function() {
	    return this.backgroundImages || (this.backgroundImages = parseBackgrounds(this.css("backgroundImage")));
	};

	NodeContainer.prototype.cssList = function(property, index) {
	    var value = (this.css(property) || '').split(',');
	    value = value[index || 0] || value[0] || 'auto';
	    value = value.trim().split(' ');
	    if (value.length === 1) {
	        value = [value[0], isPercentage(value[0]) ? 'auto' : value[0]];
	    }
	    return value;
	};

	NodeContainer.prototype.parseBackgroundSize = function(bounds, image, index) {
	    var size = this.cssList("backgroundSize", index);
	    var width, height;

	    if (isPercentage(size[0])) {
	        width = bounds.width * parseFloat(size[0]) / 100;
	    } else if (/contain|cover/.test(size[0])) {
	        var targetRatio = bounds.width / bounds.height, currentRatio = image.width / image.height;
	        return (targetRatio < currentRatio ^ size[0] === 'contain') ?  {width: bounds.height * currentRatio, height: bounds.height} : {width: bounds.width, height: bounds.width / currentRatio};
	    } else {
	        width = parseInt(size[0], 10);
	    }

	    if (size[0] === 'auto' && size[1] === 'auto') {
	        height = image.height;
	    } else if (size[1] === 'auto') {
	        height = width / image.width * image.height;
	    } else if (isPercentage(size[1])) {
	        height =  bounds.height * parseFloat(size[1]) / 100;
	    } else {
	        height = parseInt(size[1], 10);
	    }

	    if (size[0] === 'auto') {
	        width = height / image.height * image.width;
	    }

	    return {width: width, height: height};
	};

	NodeContainer.prototype.parseBackgroundPosition = function(bounds, image, index, backgroundSize) {
	    var position = this.cssList('backgroundPosition', index);
	    var left, top;

	    if (isPercentage(position[0])){
	        left = (bounds.width - (backgroundSize || image).width) * (parseFloat(position[0]) / 100);
	    } else {
	        left = parseInt(position[0], 10);
	    }

	    if (position[1] === 'auto') {
	        top = left / image.width * image.height;
	    } else if (isPercentage(position[1])){
	        top =  (bounds.height - (backgroundSize || image).height) * parseFloat(position[1]) / 100;
	    } else {
	        top = parseInt(position[1], 10);
	    }

	    if (position[0] === 'auto') {
	        left = top / image.height * image.width;
	    }

	    return {left: left, top: top};
	};

	NodeContainer.prototype.parseBackgroundRepeat = function(index) {
	    return this.cssList("backgroundRepeat", index)[0];
	};

	NodeContainer.prototype.parseTextShadows = function() {
	    var textShadow = this.css("textShadow");
	    var results = [];

	    if (textShadow && textShadow !== 'none') {
	        var shadows = textShadow.match(this.TEXT_SHADOW_PROPERTY);
	        for (var i = 0; shadows && (i < shadows.length); i++) {
	            var s = shadows[i].match(this.TEXT_SHADOW_VALUES);
	            results.push({
	                color: new Color(s[0]),
	                offsetX: s[1] ? parseFloat(s[1].replace('px', '')) : 0,
	                offsetY: s[2] ? parseFloat(s[2].replace('px', '')) : 0,
	                blur: s[3] ? s[3].replace('px', '') : 0
	            });
	        }
	    }
	    return results;
	};

	NodeContainer.prototype.parseTransform = function() {
	    if (!this.transformData) {
	        if (this.hasTransform()) {
	            var offset = this.parseBounds();
	            var origin = this.prefixedCss("transformOrigin").split(" ").map(removePx).map(asFloat);
	            origin[0] += offset.left;
	            origin[1] += offset.top;
	            this.transformData = {
	                origin: origin,
	                matrix: this.parseTransformMatrix()
	            };
	        } else {
	            this.transformData = {
	                origin: [0, 0],
	                matrix: [1, 0, 0, 1, 0, 0]
	            };
	        }
	    }
	    return this.transformData;
	};

	NodeContainer.prototype.parseTransformMatrix = function() {
	    if (!this.transformMatrix) {
	        var transform = this.prefixedCss("transform");
	        var matrix = transform ? parseMatrix(transform.match(this.MATRIX_PROPERTY)) : null;
	        this.transformMatrix = matrix ? matrix : [1, 0, 0, 1, 0, 0];
	    }
	    return this.transformMatrix;
	};

	NodeContainer.prototype.parseBounds = function() {
	    return this.bounds || (this.bounds = this.hasTransform() ? offsetBounds(this.node) : getBounds(this.node));
	};

	NodeContainer.prototype.hasTransform = function() {
	    return this.parseTransformMatrix().join(",") !== "1,0,0,1,0,0" || (this.parent && this.parent.hasTransform());
	};

	NodeContainer.prototype.getValue = function() {
	    var value = this.node.value || "";
	    if (this.node.tagName === "SELECT") {
	        value = selectionValue(this.node);
	    } else if (this.node.type === "password") {
	        value = Array(value.length + 1).join('\u2022'); // jshint ignore:line
	    }
	    return value.length === 0 ? (this.node.placeholder || "") : value;
	};

	NodeContainer.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/;
	NodeContainer.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
	NodeContainer.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
	NodeContainer.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/;

	function selectionValue(node) {
	    var option = node.options[node.selectedIndex || 0];
	    return option ? (option.text || "") : "";
	}

	function parseMatrix(match) {
	    if (match && match[1] === "matrix") {
	        return match[2].split(",").map(function(s) {
	            return parseFloat(s.trim());
	        });
	    } else if (match && match[1] === "matrix3d") {
	        var matrix3d = match[2].split(",").map(function(s) {
	          return parseFloat(s.trim());
	        });
	        return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
	    }
	}

	function isPercentage(value) {
	    return value.toString().indexOf("%") !== -1;
	}

	function removePx(str) {
	    return str.replace("px", "");
	}

	function asFloat(str) {
	    return parseFloat(str);
	}

	module.exports = NodeContainer;

	},{"./color":3,"./utils":26}],15:[function(_dereq_,module,exports){
	var log = _dereq_('./log');
	var punycode = _dereq_('punycode');
	var NodeContainer = _dereq_('./nodecontainer');
	var TextContainer = _dereq_('./textcontainer');
	var PseudoElementContainer = _dereq_('./pseudoelementcontainer');
	var FontMetrics = _dereq_('./fontmetrics');
	var Color = _dereq_('./color');
	var StackingContext = _dereq_('./stackingcontext');
	var utils = _dereq_('./utils');
	var bind = utils.bind;
	var getBounds = utils.getBounds;
	var parseBackgrounds = utils.parseBackgrounds;
	var offsetBounds = utils.offsetBounds;

	function NodeParser(element, renderer, support, imageLoader, options) {
	    log("Starting NodeParser");
	    this.renderer = renderer;
	    this.options = options;
	    this.range = null;
	    this.support = support;
	    this.renderQueue = [];
	    this.stack = new StackingContext(true, 1, element.ownerDocument, null);
	    var parent = new NodeContainer(element, null);
	    if (options.background) {
	        renderer.rectangle(0, 0, renderer.width, renderer.height, new Color(options.background));
	    }
	    if (element === element.ownerDocument.documentElement) {
	        // http://www.w3.org/TR/css3-background/#special-backgrounds
	        var canvasBackground = new NodeContainer(parent.color('backgroundColor').isTransparent() ? element.ownerDocument.body : element.ownerDocument.documentElement, null);
	        renderer.rectangle(0, 0, renderer.width, renderer.height, canvasBackground.color('backgroundColor'));
	    }
	    parent.visibile = parent.isElementVisible();
	    this.createPseudoHideStyles(element.ownerDocument);
	    this.disableAnimations(element.ownerDocument);
	    this.nodes = flatten([parent].concat(this.getChildren(parent)).filter(function(container) {
	        return container.visible = container.isElementVisible();
	    }).map(this.getPseudoElements, this));
	    this.fontMetrics = new FontMetrics();
	    log("Fetched nodes, total:", this.nodes.length);
	    log("Calculate overflow clips");
	    this.calculateOverflowClips();
	    log("Start fetching images");
	    this.images = imageLoader.fetch(this.nodes.filter(isElement));
	    this.ready = this.images.ready.then(bind(function() {
	        log("Images loaded, starting parsing");
	        log("Creating stacking contexts");
	        this.createStackingContexts();
	        log("Sorting stacking contexts");
	        this.sortStackingContexts(this.stack);
	        this.parse(this.stack);
	        log("Render queue created with " + this.renderQueue.length + " items");
	        return new Promise(bind(function(resolve) {
	            if (!options.async) {
	                this.renderQueue.forEach(this.paint, this);
	                resolve();
	            } else if (typeof(options.async) === "function") {
	                options.async.call(this, this.renderQueue, resolve);
	            } else if (this.renderQueue.length > 0){
	                this.renderIndex = 0;
	                this.asyncRenderer(this.renderQueue, resolve);
	            } else {
	                resolve();
	            }
	        }, this));
	    }, this));
	}

	NodeParser.prototype.calculateOverflowClips = function() {
	    this.nodes.forEach(function(container) {
	        if (isElement(container)) {
	            if (isPseudoElement(container)) {
	                container.appendToDOM();
	            }
	            container.borders = this.parseBorders(container);
	            var clip = (container.css('overflow') === "hidden") ? [container.borders.clip] : [];
	            var cssClip = container.parseClip();
	            if (cssClip && ["absolute", "fixed"].indexOf(container.css('position')) !== -1) {
	                clip.push([["rect",
	                        container.bounds.left + cssClip.left,
	                        container.bounds.top + cssClip.top,
	                        cssClip.right - cssClip.left,
	                        cssClip.bottom - cssClip.top
	                ]]);
	            }
	            container.clip = hasParentClip(container) ? container.parent.clip.concat(clip) : clip;
	            container.backgroundClip = (container.css('overflow') !== "hidden") ? container.clip.concat([container.borders.clip]) : container.clip;
	            if (isPseudoElement(container)) {
	                container.cleanDOM();
	            }
	        } else if (isTextNode(container)) {
	            container.clip = hasParentClip(container) ? container.parent.clip : [];
	        }
	        if (!isPseudoElement(container)) {
	            container.bounds = null;
	        }
	    }, this);
	};

	function hasParentClip(container) {
	    return container.parent && container.parent.clip.length;
	}

	NodeParser.prototype.asyncRenderer = function(queue, resolve, asyncTimer) {
	    asyncTimer = asyncTimer || Date.now();
	    this.paint(queue[this.renderIndex++]);
	    if (queue.length === this.renderIndex) {
	        resolve();
	    } else if (asyncTimer + 20 > Date.now()) {
	        this.asyncRenderer(queue, resolve, asyncTimer);
	    } else {
	        setTimeout(bind(function() {
	            this.asyncRenderer(queue, resolve);
	        }, this), 0);
	    }
	};

	NodeParser.prototype.createPseudoHideStyles = function(document) {
	    this.createStyles(document, '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }' +
	        '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }');
	};

	NodeParser.prototype.disableAnimations = function(document) {
	    this.createStyles(document, '* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; ' +
	        '-webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}');
	};

	NodeParser.prototype.createStyles = function(document, styles) {
	    var hidePseudoElements = document.createElement('style');
	    hidePseudoElements.innerHTML = styles;
	    document.body.appendChild(hidePseudoElements);
	};

	NodeParser.prototype.getPseudoElements = function(container) {
	    var nodes = [[container]];
	    if (container.node.nodeType === Node.ELEMENT_NODE) {
	        var before = this.getPseudoElement(container, ":before");
	        var after = this.getPseudoElement(container, ":after");

	        if (before) {
	            nodes.push(before);
	        }

	        if (after) {
	            nodes.push(after);
	        }
	    }
	    return flatten(nodes);
	};

	function toCamelCase(str) {
	    return str.replace(/(\-[a-z])/g, function(match){
	        return match.toUpperCase().replace('-','');
	    });
	}

	NodeParser.prototype.getPseudoElement = function(container, type) {
	    var style = container.computedStyle(type);
	    if(!style || !style.content || style.content === "none" || style.content === "-moz-alt-content" || style.display === "none") {
	        return null;
	    }

	    var content = stripQuotes(style.content);
	    var isImage = content.substr(0, 3) === 'url';
	    var pseudoNode = document.createElement(isImage ? 'img' : 'html2canvaspseudoelement');
	    var pseudoContainer = new PseudoElementContainer(pseudoNode, container, type);

	    for (var i = style.length-1; i >= 0; i--) {
	        var property = toCamelCase(style.item(i));
	        pseudoNode.style[property] = style[property];
	    }

	    pseudoNode.className = PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER;

	    if (isImage) {
	        pseudoNode.src = parseBackgrounds(content)[0].args[0];
	        return [pseudoContainer];
	    } else {
	        var text = document.createTextNode(content);
	        pseudoNode.appendChild(text);
	        return [pseudoContainer, new TextContainer(text, pseudoContainer)];
	    }
	};


	NodeParser.prototype.getChildren = function(parentContainer) {
	    return flatten([].filter.call(parentContainer.node.childNodes, renderableNode).map(function(node) {
	        var container = [node.nodeType === Node.TEXT_NODE ? new TextContainer(node, parentContainer) : new NodeContainer(node, parentContainer)].filter(nonIgnoredElement);
	        return node.nodeType === Node.ELEMENT_NODE && container.length && node.tagName !== "TEXTAREA" ? (container[0].isElementVisible() ? container.concat(this.getChildren(container[0])) : []) : container;
	    }, this));
	};

	NodeParser.prototype.newStackingContext = function(container, hasOwnStacking) {
	    var stack = new StackingContext(hasOwnStacking, container.getOpacity(), container.node, container.parent);
	    container.cloneTo(stack);
	    var parentStack = hasOwnStacking ? stack.getParentStack(this) : stack.parent.stack;
	    parentStack.contexts.push(stack);
	    container.stack = stack;
	};

	NodeParser.prototype.createStackingContexts = function() {
	    this.nodes.forEach(function(container) {
	        if (isElement(container) && (this.isRootElement(container) || hasOpacity(container) || isPositionedForStacking(container) || this.isBodyWithTransparentRoot(container) || container.hasTransform())) {
	            this.newStackingContext(container, true);
	        } else if (isElement(container) && ((isPositioned(container) && zIndex0(container)) || isInlineBlock(container) || isFloating(container))) {
	            this.newStackingContext(container, false);
	        } else {
	            container.assignStack(container.parent.stack);
	        }
	    }, this);
	};

	NodeParser.prototype.isBodyWithTransparentRoot = function(container) {
	    return container.node.nodeName === "BODY" && container.parent.color('backgroundColor').isTransparent();
	};

	NodeParser.prototype.isRootElement = function(container) {
	    return container.parent === null;
	};

	NodeParser.prototype.sortStackingContexts = function(stack) {
	    stack.contexts.sort(zIndexSort(stack.contexts.slice(0)));
	    stack.contexts.forEach(this.sortStackingContexts, this);
	};

	NodeParser.prototype.parseTextBounds = function(container) {
	    return function(text, index, textList) {
	        if (container.parent.css("textDecoration").substr(0, 4) !== "none" || text.trim().length !== 0) {
	            if (this.support.rangeBounds && !container.parent.hasTransform()) {
	                var offset = textList.slice(0, index).join("").length;
	                return this.getRangeBounds(container.node, offset, text.length);
	            } else if (container.node && typeof(container.node.data) === "string") {
	                var replacementNode = container.node.splitText(text.length);
	                var bounds = this.getWrapperBounds(container.node, container.parent.hasTransform());
	                container.node = replacementNode;
	                return bounds;
	            }
	        } else if(!this.support.rangeBounds || container.parent.hasTransform()){
	            container.node = container.node.splitText(text.length);
	        }
	        return {};
	    };
	};

	NodeParser.prototype.getWrapperBounds = function(node, transform) {
	    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
	    var parent = node.parentNode,
	        backupText = node.cloneNode(true);

	    wrapper.appendChild(node.cloneNode(true));
	    parent.replaceChild(wrapper, node);
	    var bounds = transform ? offsetBounds(wrapper) : getBounds(wrapper);
	    parent.replaceChild(backupText, wrapper);
	    return bounds;
	};

	NodeParser.prototype.getRangeBounds = function(node, offset, length) {
	    var range = this.range || (this.range = node.ownerDocument.createRange());
	    range.setStart(node, offset);
	    range.setEnd(node, offset + length);
	    return range.getBoundingClientRect();
	};

	function ClearTransform() {}

	NodeParser.prototype.parse = function(stack) {
	    // http://www.w3.org/TR/CSS21/visuren.html#z-index
	    var negativeZindex = stack.contexts.filter(negativeZIndex); // 2. the child stacking contexts with negative stack levels (most negative first).
	    var descendantElements = stack.children.filter(isElement);
	    var descendantNonFloats = descendantElements.filter(not(isFloating));
	    var nonInlineNonPositionedDescendants = descendantNonFloats.filter(not(isPositioned)).filter(not(inlineLevel)); // 3 the in-flow, non-inline-level, non-positioned descendants.
	    var nonPositionedFloats = descendantElements.filter(not(isPositioned)).filter(isFloating); // 4. the non-positioned floats.
	    var inFlow = descendantNonFloats.filter(not(isPositioned)).filter(inlineLevel); // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
	    var stackLevel0 = stack.contexts.concat(descendantNonFloats.filter(isPositioned)).filter(zIndex0); // 6. the child stacking contexts with stack level 0 and the positioned descendants with stack level 0.
	    var text = stack.children.filter(isTextNode).filter(hasText);
	    var positiveZindex = stack.contexts.filter(positiveZIndex); // 7. the child stacking contexts with positive stack levels (least positive first).
	    negativeZindex.concat(nonInlineNonPositionedDescendants).concat(nonPositionedFloats)
	        .concat(inFlow).concat(stackLevel0).concat(text).concat(positiveZindex).forEach(function(container) {
	            this.renderQueue.push(container);
	            if (isStackingContext(container)) {
	                this.parse(container);
	                this.renderQueue.push(new ClearTransform());
	            }
	        }, this);
	};

	NodeParser.prototype.paint = function(container) {
	    try {
	        if (container instanceof ClearTransform) {
	            this.renderer.ctx.restore();
	        } else if (isTextNode(container)) {
	            if (isPseudoElement(container.parent)) {
	                container.parent.appendToDOM();
	            }
	            this.paintText(container);
	            if (isPseudoElement(container.parent)) {
	                container.parent.cleanDOM();
	            }
	        } else {
	            this.paintNode(container);
	        }
	    } catch(e) {
	        log(e);
	        if (this.options.strict) {
	            throw e;
	        }
	    }
	};

	NodeParser.prototype.paintNode = function(container) {
	    if (isStackingContext(container)) {
	        this.renderer.setOpacity(container.opacity);
	        this.renderer.ctx.save();
	        if (container.hasTransform()) {
	            this.renderer.setTransform(container.parseTransform());
	        }
	    }

	    if (container.node.nodeName === "INPUT" && container.node.type === "checkbox") {
	        this.paintCheckbox(container);
	    } else if (container.node.nodeName === "INPUT" && container.node.type === "radio") {
	        this.paintRadio(container);
	    } else {
	        this.paintElement(container);
	    }
	};

	NodeParser.prototype.paintElement = function(container) {
	    var bounds = container.parseBounds();
	    this.renderer.clip(container.backgroundClip, function() {
	        this.renderer.renderBackground(container, bounds, container.borders.borders.map(getWidth));
	    }, this);

	    this.renderer.clip(container.clip, function() {
	        this.renderer.renderBorders(container.borders.borders);
	    }, this);

	    this.renderer.clip(container.backgroundClip, function() {
	        switch (container.node.nodeName) {
	        case "svg":
	        case "IFRAME":
	            var imgContainer = this.images.get(container.node);
	            if (imgContainer) {
	                this.renderer.renderImage(container, bounds, container.borders, imgContainer);
	            } else {
	                log("Error loading <" + container.node.nodeName + ">", container.node);
	            }
	            break;
	        case "IMG":
	            var imageContainer = this.images.get(container.node.src);
	            if (imageContainer) {
	                this.renderer.renderImage(container, bounds, container.borders, imageContainer);
	            } else {
	                log("Error loading <img>", container.node.src);
	            }
	            break;
	        case "CANVAS":
	            this.renderer.renderImage(container, bounds, container.borders, {image: container.node});
	            break;
	        case "SELECT":
	        case "INPUT":
	        case "TEXTAREA":
	            this.paintFormValue(container);
	            break;
	        }
	    }, this);
	};

	NodeParser.prototype.paintCheckbox = function(container) {
	    var b = container.parseBounds();

	    var size = Math.min(b.width, b.height);
	    var bounds = {width: size - 1, height: size - 1, top: b.top, left: b.left};
	    var r = [3, 3];
	    var radius = [r, r, r, r];
	    var borders = [1,1,1,1].map(function(w) {
	        return {color: new Color('#A5A5A5'), width: w};
	    });

	    var borderPoints = calculateCurvePoints(bounds, radius, borders);

	    this.renderer.clip(container.backgroundClip, function() {
	        this.renderer.rectangle(bounds.left + 1, bounds.top + 1, bounds.width - 2, bounds.height - 2, new Color("#DEDEDE"));
	        this.renderer.renderBorders(calculateBorders(borders, bounds, borderPoints, radius));
	        if (container.node.checked) {
	            this.renderer.font(new Color('#424242'), 'normal', 'normal', 'bold', (size - 3) + "px", 'arial');
	            this.renderer.text("\u2714", bounds.left + size / 6, bounds.top + size - 1);
	        }
	    }, this);
	};

	NodeParser.prototype.paintRadio = function(container) {
	    var bounds = container.parseBounds();

	    var size = Math.min(bounds.width, bounds.height) - 2;

	    this.renderer.clip(container.backgroundClip, function() {
	        this.renderer.circleStroke(bounds.left + 1, bounds.top + 1, size, new Color('#DEDEDE'), 1, new Color('#A5A5A5'));
	        if (container.node.checked) {
	            this.renderer.circle(Math.ceil(bounds.left + size / 4) + 1, Math.ceil(bounds.top + size / 4) + 1, Math.floor(size / 2), new Color('#424242'));
	        }
	    }, this);
	};

	NodeParser.prototype.paintFormValue = function(container) {
	    var value = container.getValue();
	    if (value.length > 0) {
	        var document = container.node.ownerDocument;
	        var wrapper = document.createElement('html2canvaswrapper');
	        var properties = ['lineHeight', 'textAlign', 'fontFamily', 'fontWeight', 'fontSize', 'color',
	            'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom',
	            'width', 'height', 'borderLeftStyle', 'borderTopStyle', 'borderLeftWidth', 'borderTopWidth',
	            'boxSizing', 'whiteSpace', 'wordWrap'];

	        properties.forEach(function(property) {
	            try {
	                wrapper.style[property] = container.css(property);
	            } catch(e) {
	                // Older IE has issues with "border"
	                log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
	            }
	        });
	        var bounds = container.parseBounds();
	        wrapper.style.position = "fixed";
	        wrapper.style.left = bounds.left + "px";
	        wrapper.style.top = bounds.top + "px";
	        wrapper.textContent = value;
	        document.body.appendChild(wrapper);
	        this.paintText(new TextContainer(wrapper.firstChild, container));
	        document.body.removeChild(wrapper);
	    }
	};

	NodeParser.prototype.paintText = function(container) {
	    container.applyTextTransform();
	    var characters = punycode.ucs2.decode(container.node.data);
	    var textList = (!this.options.letterRendering || noLetterSpacing(container)) && !hasUnicode(container.node.data) ? getWords(characters) : characters.map(function(character) {
	        return punycode.ucs2.encode([character]);
	    });

	    var weight = container.parent.fontWeight();
	    var size = container.parent.css('fontSize');
	    var family = container.parent.css('fontFamily');
	    var shadows = container.parent.parseTextShadows();

	    this.renderer.font(container.parent.color('color'), container.parent.css('fontStyle'), container.parent.css('fontVariant'), weight, size, family);
	    if (shadows.length) {
	        // TODO: support multiple text shadows
	        this.renderer.fontShadow(shadows[0].color, shadows[0].offsetX, shadows[0].offsetY, shadows[0].blur);
	    } else {
	        this.renderer.clearShadow();
	    }

	    this.renderer.clip(container.parent.clip, function() {
	        textList.map(this.parseTextBounds(container), this).forEach(function(bounds, index) {
	            if (bounds) {
	                this.renderer.text(textList[index], bounds.left, bounds.bottom);
	                this.renderTextDecoration(container.parent, bounds, this.fontMetrics.getMetrics(family, size));
	            }
	        }, this);
	    }, this);
	};

	NodeParser.prototype.renderTextDecoration = function(container, bounds, metrics) {
	    switch(container.css("textDecoration").split(" ")[0]) {
	    case "underline":
	        // Draws a line at the baseline of the font
	        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
	        this.renderer.rectangle(bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, container.color("color"));
	        break;
	    case "overline":
	        this.renderer.rectangle(bounds.left, Math.round(bounds.top), bounds.width, 1, container.color("color"));
	        break;
	    case "line-through":
	        // TODO try and find exact position for line-through
	        this.renderer.rectangle(bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, container.color("color"));
	        break;
	    }
	};

	var borderColorTransforms = {
	    inset: [
	        ["darken", 0.60],
	        ["darken", 0.10],
	        ["darken", 0.10],
	        ["darken", 0.60]
	    ]
	};

	NodeParser.prototype.parseBorders = function(container) {
	    var nodeBounds = container.parseBounds();
	    var radius = getBorderRadiusData(container);
	    var borders = ["Top", "Right", "Bottom", "Left"].map(function(side, index) {
	        var style = container.css('border' + side + 'Style');
	        var color = container.color('border' + side + 'Color');
	        if (style === "inset" && color.isBlack()) {
	            color = new Color([255, 255, 255, color.a]); // this is wrong, but
	        }
	        var colorTransform = borderColorTransforms[style] ? borderColorTransforms[style][index] : null;
	        return {
	            width: container.cssInt('border' + side + 'Width'),
	            color: colorTransform ? color[colorTransform[0]](colorTransform[1]) : color,
	            args: null
	        };
	    });
	    var borderPoints = calculateCurvePoints(nodeBounds, radius, borders);

	    return {
	        clip: this.parseBackgroundClip(container, borderPoints, borders, radius, nodeBounds),
	        borders: calculateBorders(borders, nodeBounds, borderPoints, radius)
	    };
	};

	function calculateBorders(borders, nodeBounds, borderPoints, radius) {
	    return borders.map(function(border, borderSide) {
	        if (border.width > 0) {
	            var bx = nodeBounds.left;
	            var by = nodeBounds.top;
	            var bw = nodeBounds.width;
	            var bh = nodeBounds.height - (borders[2].width);

	            switch(borderSide) {
	            case 0:
	                // top border
	                bh = borders[0].width;
	                border.args = drawSide({
	                        c1: [bx, by],
	                        c2: [bx + bw, by],
	                        c3: [bx + bw - borders[1].width, by + bh],
	                        c4: [bx + borders[3].width, by + bh]
	                    }, radius[0], radius[1],
	                    borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
	                break;
	            case 1:
	                // right border
	                bx = nodeBounds.left + nodeBounds.width - (borders[1].width);
	                bw = borders[1].width;

	                border.args = drawSide({
	                        c1: [bx + bw, by],
	                        c2: [bx + bw, by + bh + borders[2].width],
	                        c3: [bx, by + bh],
	                        c4: [bx, by + borders[0].width]
	                    }, radius[1], radius[2],
	                    borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
	                break;
	            case 2:
	                // bottom border
	                by = (by + nodeBounds.height) - (borders[2].width);
	                bh = borders[2].width;
	                border.args = drawSide({
	                        c1: [bx + bw, by + bh],
	                        c2: [bx, by + bh],
	                        c3: [bx + borders[3].width, by],
	                        c4: [bx + bw - borders[3].width, by]
	                    }, radius[2], radius[3],
	                    borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
	                break;
	            case 3:
	                // left border
	                bw = borders[3].width;
	                border.args = drawSide({
	                        c1: [bx, by + bh + borders[2].width],
	                        c2: [bx, by],
	                        c3: [bx + bw, by + borders[0].width],
	                        c4: [bx + bw, by + bh]
	                    }, radius[3], radius[0],
	                    borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
	                break;
	            }
	        }
	        return border;
	    });
	}

	NodeParser.prototype.parseBackgroundClip = function(container, borderPoints, borders, radius, bounds) {
	    var backgroundClip = container.css('backgroundClip'),
	        borderArgs = [];

	    switch(backgroundClip) {
	    case "content-box":
	    case "padding-box":
	        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
	        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
	        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
	        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
	        break;

	    default:
	        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
	        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
	        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
	        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
	        break;
	    }

	    return borderArgs;
	};

	function getCurvePoints(x, y, r1, r2) {
	    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
	    var ox = (r1) * kappa, // control point offset horizontal
	        oy = (r2) * kappa, // control point offset vertical
	        xm = x + r1, // x-middle
	        ym = y + r2; // y-middle
	    return {
	        topLeft: bezierCurve({x: x, y: ym}, {x: x, y: ym - oy}, {x: xm - ox, y: y}, {x: xm, y: y}),
	        topRight: bezierCurve({x: x, y: y}, {x: x + ox,y: y}, {x: xm, y: ym - oy}, {x: xm, y: ym}),
	        bottomRight: bezierCurve({x: xm, y: y}, {x: xm, y: y + oy}, {x: x + ox, y: ym}, {x: x, y: ym}),
	        bottomLeft: bezierCurve({x: xm, y: ym}, {x: xm - ox, y: ym}, {x: x, y: y + oy}, {x: x, y:y})
	    };
	}

	function calculateCurvePoints(bounds, borderRadius, borders) {
	    var x = bounds.left,
	        y = bounds.top,
	        width = bounds.width,
	        height = bounds.height,

	        tlh = borderRadius[0][0] < width / 2 ? borderRadius[0][0] : width / 2,
	        tlv = borderRadius[0][1] < height / 2 ? borderRadius[0][1] : height / 2,
	        trh = borderRadius[1][0] < width / 2 ? borderRadius[1][0] : width / 2,
	        trv = borderRadius[1][1] < height / 2 ? borderRadius[1][1] : height / 2,
	        brh = borderRadius[2][0] < width / 2 ? borderRadius[2][0] : width / 2,
	        brv = borderRadius[2][1] < height / 2 ? borderRadius[2][1] : height / 2,
	        blh = borderRadius[3][0] < width / 2 ? borderRadius[3][0] : width / 2,
	        blv = borderRadius[3][1] < height / 2 ? borderRadius[3][1] : height / 2;

	    var topWidth = width - trh,
	        rightHeight = height - brv,
	        bottomWidth = width - brh,
	        leftHeight = height - blv;

	    return {
	        topLeftOuter: getCurvePoints(x, y, tlh, tlv).topLeft.subdivide(0.5),
	        topLeftInner: getCurvePoints(x + borders[3].width, y + borders[0].width, Math.max(0, tlh - borders[3].width), Math.max(0, tlv - borders[0].width)).topLeft.subdivide(0.5),
	        topRightOuter: getCurvePoints(x + topWidth, y, trh, trv).topRight.subdivide(0.5),
	        topRightInner: getCurvePoints(x + Math.min(topWidth, width + borders[3].width), y + borders[0].width, (topWidth > width + borders[3].width) ? 0 :trh - borders[3].width, trv - borders[0].width).topRight.subdivide(0.5),
	        bottomRightOuter: getCurvePoints(x + bottomWidth, y + rightHeight, brh, brv).bottomRight.subdivide(0.5),
	        bottomRightInner: getCurvePoints(x + Math.min(bottomWidth, width - borders[3].width), y + Math.min(rightHeight, height + borders[0].width), Math.max(0, brh - borders[1].width),  brv - borders[2].width).bottomRight.subdivide(0.5),
	        bottomLeftOuter: getCurvePoints(x, y + leftHeight, blh, blv).bottomLeft.subdivide(0.5),
	        bottomLeftInner: getCurvePoints(x + borders[3].width, y + leftHeight, Math.max(0, blh - borders[3].width), blv - borders[2].width).bottomLeft.subdivide(0.5)
	    };
	}

	function bezierCurve(start, startControl, endControl, end) {
	    var lerp = function (a, b, t) {
	        return {
	            x: a.x + (b.x - a.x) * t,
	            y: a.y + (b.y - a.y) * t
	        };
	    };

	    return {
	        start: start,
	        startControl: startControl,
	        endControl: endControl,
	        end: end,
	        subdivide: function(t) {
	            var ab = lerp(start, startControl, t),
	                bc = lerp(startControl, endControl, t),
	                cd = lerp(endControl, end, t),
	                abbc = lerp(ab, bc, t),
	                bccd = lerp(bc, cd, t),
	                dest = lerp(abbc, bccd, t);
	            return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
	        },
	        curveTo: function(borderArgs) {
	            borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
	        },
	        curveToReversed: function(borderArgs) {
	            borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
	        }
	    };
	}

	function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
	    var borderArgs = [];

	    if (radius1[0] > 0 || radius1[1] > 0) {
	        borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
	        outer1[1].curveTo(borderArgs);
	    } else {
	        borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
	    }

	    if (radius2[0] > 0 || radius2[1] > 0) {
	        borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
	        outer2[0].curveTo(borderArgs);
	        borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
	        inner2[0].curveToReversed(borderArgs);
	    } else {
	        borderArgs.push(["line", borderData.c2[0], borderData.c2[1]]);
	        borderArgs.push(["line", borderData.c3[0], borderData.c3[1]]);
	    }

	    if (radius1[0] > 0 || radius1[1] > 0) {
	        borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
	        inner1[1].curveToReversed(borderArgs);
	    } else {
	        borderArgs.push(["line", borderData.c4[0], borderData.c4[1]]);
	    }

	    return borderArgs;
	}

	function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
	    if (radius1[0] > 0 || radius1[1] > 0) {
	        borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
	        corner1[0].curveTo(borderArgs);
	        corner1[1].curveTo(borderArgs);
	    } else {
	        borderArgs.push(["line", x, y]);
	    }

	    if (radius2[0] > 0 || radius2[1] > 0) {
	        borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
	    }
	}

	function negativeZIndex(container) {
	    return container.cssInt("zIndex") < 0;
	}

	function positiveZIndex(container) {
	    return container.cssInt("zIndex") > 0;
	}

	function zIndex0(container) {
	    return container.cssInt("zIndex") === 0;
	}

	function inlineLevel(container) {
	    return ["inline", "inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
	}

	function isStackingContext(container) {
	    return (container instanceof StackingContext);
	}

	function hasText(container) {
	    return container.node.data.trim().length > 0;
	}

	function noLetterSpacing(container) {
	    return (/^(normal|none|0px)$/.test(container.parent.css("letterSpacing")));
	}

	function getBorderRadiusData(container) {
	    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
	        var value = container.css('border' + side + 'Radius');
	        var arr = value.split(" ");
	        if (arr.length <= 1) {
	            arr[1] = arr[0];
	        }
	        return arr.map(asInt);
	    });
	}

	function renderableNode(node) {
	    return (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE);
	}

	function isPositionedForStacking(container) {
	    var position = container.css("position");
	    var zIndex = (["absolute", "relative", "fixed"].indexOf(position) !== -1) ? container.css("zIndex") : "auto";
	    return zIndex !== "auto";
	}

	function isPositioned(container) {
	    return container.css("position") !== "static";
	}

	function isFloating(container) {
	    return container.css("float") !== "none";
	}

	function isInlineBlock(container) {
	    return ["inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
	}

	function not(callback) {
	    var context = this;
	    return function() {
	        return !callback.apply(context, arguments);
	    };
	}

	function isElement(container) {
	    return container.node.nodeType === Node.ELEMENT_NODE;
	}

	function isPseudoElement(container) {
	    return container.isPseudoElement === true;
	}

	function isTextNode(container) {
	    return container.node.nodeType === Node.TEXT_NODE;
	}

	function zIndexSort(contexts) {
	    return function(a, b) {
	        return (a.cssInt("zIndex") + (contexts.indexOf(a) / contexts.length)) - (b.cssInt("zIndex") + (contexts.indexOf(b) / contexts.length));
	    };
	}

	function hasOpacity(container) {
	    return container.getOpacity() < 1;
	}

	function asInt(value) {
	    return parseInt(value, 10);
	}

	function getWidth(border) {
	    return border.width;
	}

	function nonIgnoredElement(nodeContainer) {
	    return (nodeContainer.node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(nodeContainer.node.nodeName) === -1);
	}

	function flatten(arrays) {
	    return [].concat.apply([], arrays);
	}

	function stripQuotes(content) {
	    var first = content.substr(0, 1);
	    return (first === content.substr(content.length - 1) && first.match(/'|"/)) ? content.substr(1, content.length - 2) : content;
	}

	function getWords(characters) {
	    var words = [], i = 0, onWordBoundary = false, word;
	    while(characters.length) {
	        if (isWordBoundary(characters[i]) === onWordBoundary) {
	            word = characters.splice(0, i);
	            if (word.length) {
	                words.push(punycode.ucs2.encode(word));
	            }
	            onWordBoundary =! onWordBoundary;
	            i = 0;
	        } else {
	            i++;
	        }

	        if (i >= characters.length) {
	            word = characters.splice(0, i);
	            if (word.length) {
	                words.push(punycode.ucs2.encode(word));
	            }
	        }
	    }
	    return words;
	}

	function isWordBoundary(characterCode) {
	    return [
	        32, // <space>
	        13, // \r
	        10, // \n
	        9, // \t
	        45 // -
	    ].indexOf(characterCode) !== -1;
	}

	function hasUnicode(string) {
	    return (/[^\u0000-\u00ff]/).test(string);
	}

	module.exports = NodeParser;

	},{"./color":3,"./fontmetrics":7,"./log":13,"./nodecontainer":14,"./pseudoelementcontainer":18,"./stackingcontext":21,"./textcontainer":25,"./utils":26,"punycode":1}],16:[function(_dereq_,module,exports){
	var XHR = _dereq_('./xhr');
	var utils = _dereq_('./utils');
	var log = _dereq_('./log');
	var createWindowClone = _dereq_('./clone');
	var decode64 = utils.decode64;

	function Proxy(src, proxyUrl, document) {
	    var supportsCORS = ('withCredentials' in new XMLHttpRequest());
	    if (!proxyUrl) {
	        return Promise.reject("No proxy configured");
	    }
	    var callback = createCallback(supportsCORS);
	    var url = createProxyUrl(proxyUrl, src, callback);

	    return supportsCORS ? XHR(url) : (jsonp(document, url, callback).then(function(response) {
	        return decode64(response.content);
	    }));
	}
	var proxyCount = 0;

	function ProxyURL(src, proxyUrl, document) {
	    var supportsCORSImage = ('crossOrigin' in new Image());
	    var callback = createCallback(supportsCORSImage);
	    var url = createProxyUrl(proxyUrl, src, callback);
	    return (supportsCORSImage ? Promise.resolve(url) : jsonp(document, url, callback).then(function(response) {
	        return "data:" + response.type + ";base64," + response.content;
	    }));
	}

	function jsonp(document, url, callback) {
	    return new Promise(function(resolve, reject) {
	        var s = document.createElement("script");
	        var cleanup = function() {
	            delete window.html2canvas.proxy[callback];
	            document.body.removeChild(s);
	        };
	        window.html2canvas.proxy[callback] = function(response) {
	            cleanup();
	            resolve(response);
	        };
	        s.src = url;
	        s.onerror = function(e) {
	            cleanup();
	            reject(e);
	        };
	        document.body.appendChild(s);
	    });
	}

	function createCallback(useCORS) {
	    return !useCORS ? "html2canvas_" + Date.now() + "_" + (++proxyCount) + "_" + Math.round(Math.random() * 100000) : "";
	}

	function createProxyUrl(proxyUrl, src, callback) {
	    return proxyUrl + "?url=" + encodeURIComponent(src) + (callback.length ? "&callback=html2canvas.proxy." + callback : "");
	}

	function documentFromHTML(src) {
	    return function(html) {
	        var parser = new DOMParser(), doc;
	        try {
	            doc = parser.parseFromString(html, "text/html");
	        } catch(e) {
	            log("DOMParser not supported, falling back to createHTMLDocument");
	            doc = document.implementation.createHTMLDocument("");
	            try {
	                doc.open();
	                doc.write(html);
	                doc.close();
	            } catch(ee) {
	                log("createHTMLDocument write not supported, falling back to document.body.innerHTML");
	                doc.body.innerHTML = html; // ie9 doesnt support writing to documentElement
	            }
	        }

	        var b = doc.querySelector("base");
	        if (!b || !b.href.host) {
	            var base = doc.createElement("base");
	            base.href = src;
	            doc.head.insertBefore(base, doc.head.firstChild);
	        }

	        return doc;
	    };
	}

	function loadUrlDocument(src, proxy, document, width, height, options) {
	    return new Proxy(src, proxy, window.document).then(documentFromHTML(src)).then(function(doc) {
	        return createWindowClone(doc, document, width, height, options, 0, 0);
	    });
	}

	exports.Proxy = Proxy;
	exports.ProxyURL = ProxyURL;
	exports.loadUrlDocument = loadUrlDocument;

	},{"./clone":2,"./log":13,"./utils":26,"./xhr":28}],17:[function(_dereq_,module,exports){
	var ProxyURL = _dereq_('./proxy').ProxyURL;

	function ProxyImageContainer(src, proxy) {
	    var link = document.createElement("a");
	    link.href = src;
	    src = link.href;
	    this.src = src;
	    this.image = new Image();
	    var self = this;
	    this.promise = new Promise(function(resolve, reject) {
	        self.image.crossOrigin = "Anonymous";
	        self.image.onload = resolve;
	        self.image.onerror = reject;

	        new ProxyURL(src, proxy, document).then(function(url) {
	            self.image.src = url;
	        })['catch'](reject);
	    });
	}

	module.exports = ProxyImageContainer;

	},{"./proxy":16}],18:[function(_dereq_,module,exports){
	var NodeContainer = _dereq_('./nodecontainer');

	function PseudoElementContainer(node, parent, type) {
	    NodeContainer.call(this, node, parent);
	    this.isPseudoElement = true;
	    this.before = type === ":before";
	}

	PseudoElementContainer.prototype.cloneTo = function(stack) {
	    PseudoElementContainer.prototype.cloneTo.call(this, stack);
	    stack.isPseudoElement = true;
	    stack.before = this.before;
	};

	PseudoElementContainer.prototype = Object.create(NodeContainer.prototype);

	PseudoElementContainer.prototype.appendToDOM = function() {
	    if (this.before) {
	        this.parent.node.insertBefore(this.node, this.parent.node.firstChild);
	    } else {
	        this.parent.node.appendChild(this.node);
	    }
	    this.parent.node.className += " " + this.getHideClass();
	};

	PseudoElementContainer.prototype.cleanDOM = function() {
	    this.node.parentNode.removeChild(this.node);
	    this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "");
	};

	PseudoElementContainer.prototype.getHideClass = function() {
	    return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")];
	};

	PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
	PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";

	module.exports = PseudoElementContainer;

	},{"./nodecontainer":14}],19:[function(_dereq_,module,exports){
	var log = _dereq_('./log');

	function Renderer(width, height, images, options, document) {
	    this.width = width;
	    this.height = height;
	    this.images = images;
	    this.options = options;
	    this.document = document;
	}

	Renderer.prototype.renderImage = function(container, bounds, borderData, imageContainer) {
	    var paddingLeft = container.cssInt('paddingLeft'),
	        paddingTop = container.cssInt('paddingTop'),
	        paddingRight = container.cssInt('paddingRight'),
	        paddingBottom = container.cssInt('paddingBottom'),
	        borders = borderData.borders;

	    var width = bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight);
	    var height = bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom);
	    this.drawImage(
	        imageContainer,
	        0,
	        0,
	        imageContainer.image.width || width,
	        imageContainer.image.height || height,
	        bounds.left + paddingLeft + borders[3].width,
	        bounds.top + paddingTop + borders[0].width,
	        width,
	        height
	    );
	};

	Renderer.prototype.renderBackground = function(container, bounds, borderData) {
	    if (bounds.height > 0 && bounds.width > 0) {
	        this.renderBackgroundColor(container, bounds);
	        this.renderBackgroundImage(container, bounds, borderData);
	    }
	};

	Renderer.prototype.renderBackgroundColor = function(container, bounds) {
	    var color = container.color("backgroundColor");
	    if (!color.isTransparent()) {
	        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, color);
	    }
	};

	Renderer.prototype.renderBorders = function(borders) {
	    borders.forEach(this.renderBorder, this);
	};

	Renderer.prototype.renderBorder = function(data) {
	    if (!data.color.isTransparent() && data.args !== null) {
	        this.drawShape(data.args, data.color);
	    }
	};

	Renderer.prototype.renderBackgroundImage = function(container, bounds, borderData) {
	    var backgroundImages = container.parseBackgroundImages();
	    backgroundImages.reverse().forEach(function(backgroundImage, index, arr) {
	        switch(backgroundImage.method) {
	        case "url":
	            var image = this.images.get(backgroundImage.args[0]);
	            if (image) {
	                this.renderBackgroundRepeating(container, bounds, image, arr.length - (index+1), borderData);
	            } else {
	                log("Error loading background-image", backgroundImage.args[0]);
	            }
	            break;
	        case "linear-gradient":
	        case "gradient":
	            var gradientImage = this.images.get(backgroundImage.value);
	            if (gradientImage) {
	                this.renderBackgroundGradient(gradientImage, bounds, borderData);
	            } else {
	                log("Error loading background-image", backgroundImage.args[0]);
	            }
	            break;
	        case "none":
	            break;
	        default:
	            log("Unknown background-image type", backgroundImage.args[0]);
	        }
	    }, this);
	};

	Renderer.prototype.renderBackgroundRepeating = function(container, bounds, imageContainer, index, borderData) {
	    var size = container.parseBackgroundSize(bounds, imageContainer.image, index);
	    var position = container.parseBackgroundPosition(bounds, imageContainer.image, index, size);
	    var repeat = container.parseBackgroundRepeat(index);
	    switch (repeat) {
	    case "repeat-x":
	    case "repeat no-repeat":
	        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + borderData[3], bounds.top + position.top + borderData[0], 99999, size.height, borderData);
	        break;
	    case "repeat-y":
	    case "no-repeat repeat":
	        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + borderData[0], size.width, 99999, borderData);
	        break;
	    case "no-repeat":
	        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + position.top + borderData[0], size.width, size.height, borderData);
	        break;
	    default:
	        this.renderBackgroundRepeat(imageContainer, position, size, {top: bounds.top, left: bounds.left}, borderData[3], borderData[0]);
	        break;
	    }
	};

	module.exports = Renderer;

	},{"./log":13}],20:[function(_dereq_,module,exports){
	var Renderer = _dereq_('../renderer');
	var LinearGradientContainer = _dereq_('../lineargradientcontainer');
	var log = _dereq_('../log');

	function CanvasRenderer(width, height) {
	    Renderer.apply(this, arguments);
	    this.canvas = this.options.canvas || this.document.createElement("canvas");
	    if (!this.options.canvas) {
	        this.canvas.width = width;
	        this.canvas.height = height;
	    }
	    this.ctx = this.canvas.getContext("2d");
	    this.taintCtx = this.document.createElement("canvas").getContext("2d");
	    this.ctx.textBaseline = "bottom";
	    this.variables = {};
	    log("Initialized CanvasRenderer with size", width, "x", height);
	}

	CanvasRenderer.prototype = Object.create(Renderer.prototype);

	CanvasRenderer.prototype.setFillStyle = function(fillStyle) {
	    this.ctx.fillStyle = typeof(fillStyle) === "object" && !!fillStyle.isColor ? fillStyle.toString() : fillStyle;
	    return this.ctx;
	};

	CanvasRenderer.prototype.rectangle = function(left, top, width, height, color) {
	    this.setFillStyle(color).fillRect(left, top, width, height);
	};

	CanvasRenderer.prototype.circle = function(left, top, size, color) {
	    this.setFillStyle(color);
	    this.ctx.beginPath();
	    this.ctx.arc(left + size / 2, top + size / 2, size / 2, 0, Math.PI*2, true);
	    this.ctx.closePath();
	    this.ctx.fill();
	};

	CanvasRenderer.prototype.circleStroke = function(left, top, size, color, stroke, strokeColor) {
	    this.circle(left, top, size, color);
	    this.ctx.strokeStyle = strokeColor.toString();
	    this.ctx.stroke();
	};

	CanvasRenderer.prototype.drawShape = function(shape, color) {
	    this.shape(shape);
	    this.setFillStyle(color).fill();
	};

	CanvasRenderer.prototype.taints = function(imageContainer) {
	    if (imageContainer.tainted === null) {
	        this.taintCtx.drawImage(imageContainer.image, 0, 0);
	        try {
	            this.taintCtx.getImageData(0, 0, 1, 1);
	            imageContainer.tainted = false;
	        } catch(e) {
	            this.taintCtx = document.createElement("canvas").getContext("2d");
	            imageContainer.tainted = true;
	        }
	    }

	    return imageContainer.tainted;
	};

	CanvasRenderer.prototype.drawImage = function(imageContainer, sx, sy, sw, sh, dx, dy, dw, dh) {
	    if (!this.taints(imageContainer) || this.options.allowTaint) {
	        this.ctx.drawImage(imageContainer.image, sx, sy, sw, sh, dx, dy, dw, dh);
	    }
	};

	CanvasRenderer.prototype.clip = function(shapes, callback, context) {
	    this.ctx.save();
	    shapes.filter(hasEntries).forEach(function(shape) {
	        this.shape(shape).clip();
	    }, this);
	    callback.call(context);
	    this.ctx.restore();
	};

	CanvasRenderer.prototype.shape = function(shape) {
	    this.ctx.beginPath();
	    shape.forEach(function(point, index) {
	        if (point[0] === "rect") {
	            this.ctx.rect.apply(this.ctx, point.slice(1));
	        } else {
	            this.ctx[(index === 0) ? "moveTo" : point[0] + "To" ].apply(this.ctx, point.slice(1));
	        }
	    }, this);
	    this.ctx.closePath();
	    return this.ctx;
	};

	CanvasRenderer.prototype.font = function(color, style, variant, weight, size, family) {
	    this.setFillStyle(color).font = [style, variant, weight, size, family].join(" ").split(",")[0];
	};

	CanvasRenderer.prototype.fontShadow = function(color, offsetX, offsetY, blur) {
	    this.setVariable("shadowColor", color.toString())
	        .setVariable("shadowOffsetY", offsetX)
	        .setVariable("shadowOffsetX", offsetY)
	        .setVariable("shadowBlur", blur);
	};

	CanvasRenderer.prototype.clearShadow = function() {
	    this.setVariable("shadowColor", "rgba(0,0,0,0)");
	};

	CanvasRenderer.prototype.setOpacity = function(opacity) {
	    this.ctx.globalAlpha = opacity;
	};

	CanvasRenderer.prototype.setTransform = function(transform) {
	    this.ctx.translate(transform.origin[0], transform.origin[1]);
	    this.ctx.transform.apply(this.ctx, transform.matrix);
	    this.ctx.translate(-transform.origin[0], -transform.origin[1]);
	};

	CanvasRenderer.prototype.setVariable = function(property, value) {
	    if (this.variables[property] !== value) {
	        this.variables[property] = this.ctx[property] = value;
	    }

	    return this;
	};

	CanvasRenderer.prototype.text = function(text, left, bottom) {
	    this.ctx.fillText(text, left, bottom);
	};

	CanvasRenderer.prototype.backgroundRepeatShape = function(imageContainer, backgroundPosition, size, bounds, left, top, width, height, borderData) {
	    var shape = [
	        ["line", Math.round(left), Math.round(top)],
	        ["line", Math.round(left + width), Math.round(top)],
	        ["line", Math.round(left + width), Math.round(height + top)],
	        ["line", Math.round(left), Math.round(height + top)]
	    ];
	    this.clip([shape], function() {
	        this.renderBackgroundRepeat(imageContainer, backgroundPosition, size, bounds, borderData[3], borderData[0]);
	    }, this);
	};

	CanvasRenderer.prototype.renderBackgroundRepeat = function(imageContainer, backgroundPosition, size, bounds, borderLeft, borderTop) {
	    var offsetX = Math.round(bounds.left + backgroundPosition.left + borderLeft), offsetY = Math.round(bounds.top + backgroundPosition.top + borderTop);
	    this.setFillStyle(this.ctx.createPattern(this.resizeImage(imageContainer, size), "repeat"));
	    this.ctx.translate(offsetX, offsetY);
	    this.ctx.fill();
	    this.ctx.translate(-offsetX, -offsetY);
	};

	CanvasRenderer.prototype.renderBackgroundGradient = function(gradientImage, bounds) {
	    if (gradientImage instanceof LinearGradientContainer) {
	        var gradient = this.ctx.createLinearGradient(
	            bounds.left + bounds.width * gradientImage.x0,
	            bounds.top + bounds.height * gradientImage.y0,
	            bounds.left +  bounds.width * gradientImage.x1,
	            bounds.top +  bounds.height * gradientImage.y1);
	        gradientImage.colorStops.forEach(function(colorStop) {
	            gradient.addColorStop(colorStop.stop, colorStop.color.toString());
	        });
	        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, gradient);
	    }
	};

	CanvasRenderer.prototype.resizeImage = function(imageContainer, size) {
	    var image = imageContainer.image;
	    if(image.width === size.width && image.height === size.height) {
	        return image;
	    }

	    var ctx, canvas = document.createElement('canvas');
	    canvas.width = size.width;
	    canvas.height = size.height;
	    ctx = canvas.getContext("2d");
	    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height );
	    return canvas;
	};

	function hasEntries(array) {
	    return array.length > 0;
	}

	module.exports = CanvasRenderer;

	},{"../lineargradientcontainer":12,"../log":13,"../renderer":19}],21:[function(_dereq_,module,exports){
	var NodeContainer = _dereq_('./nodecontainer');

	function StackingContext(hasOwnStacking, opacity, element, parent) {
	    NodeContainer.call(this, element, parent);
	    this.ownStacking = hasOwnStacking;
	    this.contexts = [];
	    this.children = [];
	    this.opacity = (this.parent ? this.parent.stack.opacity : 1) * opacity;
	}

	StackingContext.prototype = Object.create(NodeContainer.prototype);

	StackingContext.prototype.getParentStack = function(context) {
	    var parentStack = (this.parent) ? this.parent.stack : null;
	    return parentStack ? (parentStack.ownStacking ? parentStack : parentStack.getParentStack(context)) : context.stack;
	};

	module.exports = StackingContext;

	},{"./nodecontainer":14}],22:[function(_dereq_,module,exports){
	function Support(document) {
	    this.rangeBounds = this.testRangeBounds(document);
	    this.cors = this.testCORS();
	    this.svg = this.testSVG();
	}

	Support.prototype.testRangeBounds = function(document) {
	    var range, testElement, rangeBounds, rangeHeight, support = false;

	    if (document.createRange) {
	        range = document.createRange();
	        if (range.getBoundingClientRect) {
	            testElement = document.createElement('boundtest');
	            testElement.style.height = "123px";
	            testElement.style.display = "block";
	            document.body.appendChild(testElement);

	            range.selectNode(testElement);
	            rangeBounds = range.getBoundingClientRect();
	            rangeHeight = rangeBounds.height;

	            if (rangeHeight === 123) {
	                support = true;
	            }
	            document.body.removeChild(testElement);
	        }
	    }

	    return support;
	};

	Support.prototype.testCORS = function() {
	    return typeof((new Image()).crossOrigin) !== "undefined";
	};

	Support.prototype.testSVG = function() {
	    var img = new Image();
	    var canvas = document.createElement("canvas");
	    var ctx =  canvas.getContext("2d");
	    img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";

	    try {
	        ctx.drawImage(img, 0, 0);
	        canvas.toDataURL();
	    } catch(e) {
	        return false;
	    }
	    return true;
	};

	module.exports = Support;

	},{}],23:[function(_dereq_,module,exports){
	var XHR = _dereq_('./xhr');
	var decode64 = _dereq_('./utils').decode64;

	function SVGContainer(src) {
	    this.src = src;
	    this.image = null;
	    var self = this;

	    this.promise = this.hasFabric().then(function() {
	        return (self.isInline(src) ? Promise.resolve(self.inlineFormatting(src)) : XHR(src));
	    }).then(function(svg) {
	        return new Promise(function(resolve) {
	            window.html2canvas.svg.fabric.loadSVGFromString(svg, self.createCanvas.call(self, resolve));
	        });
	    });
	}

	SVGContainer.prototype.hasFabric = function() {
	    return !window.html2canvas.svg || !window.html2canvas.svg.fabric ? Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg")) : Promise.resolve();
	};

	SVGContainer.prototype.inlineFormatting = function(src) {
	    return (/^data:image\/svg\+xml;base64,/.test(src)) ? this.decode64(this.removeContentType(src)) : this.removeContentType(src);
	};

	SVGContainer.prototype.removeContentType = function(src) {
	    return src.replace(/^data:image\/svg\+xml(;base64)?,/,'');
	};

	SVGContainer.prototype.isInline = function(src) {
	    return (/^data:image\/svg\+xml/i.test(src));
	};

	SVGContainer.prototype.createCanvas = function(resolve) {
	    var self = this;
	    return function (objects, options) {
	        var canvas = new window.html2canvas.svg.fabric.StaticCanvas('c');
	        self.image = canvas.lowerCanvasEl;
	        canvas
	            .setWidth(options.width)
	            .setHeight(options.height)
	            .add(window.html2canvas.svg.fabric.util.groupSVGElements(objects, options))
	            .renderAll();
	        resolve(canvas.lowerCanvasEl);
	    };
	};

	SVGContainer.prototype.decode64 = function(str) {
	    return (typeof(window.atob) === "function") ? window.atob(str) : decode64(str);
	};

	module.exports = SVGContainer;

	},{"./utils":26,"./xhr":28}],24:[function(_dereq_,module,exports){
	var SVGContainer = _dereq_('./svgcontainer');

	function SVGNodeContainer(node, _native) {
	    this.src = node;
	    this.image = null;
	    var self = this;

	    this.promise = _native ? new Promise(function(resolve, reject) {
	        self.image = new Image();
	        self.image.onload = resolve;
	        self.image.onerror = reject;
	        self.image.src = "data:image/svg+xml," + (new XMLSerializer()).serializeToString(node);
	        if (self.image.complete === true) {
	            resolve(self.image);
	        }
	    }) : this.hasFabric().then(function() {
	        return new Promise(function(resolve) {
	            window.html2canvas.svg.fabric.parseSVGDocument(node, self.createCanvas.call(self, resolve));
	        });
	    });
	}

	SVGNodeContainer.prototype = Object.create(SVGContainer.prototype);

	module.exports = SVGNodeContainer;

	},{"./svgcontainer":23}],25:[function(_dereq_,module,exports){
	var NodeContainer = _dereq_('./nodecontainer');

	function TextContainer(node, parent) {
	    NodeContainer.call(this, node, parent);
	}

	TextContainer.prototype = Object.create(NodeContainer.prototype);

	TextContainer.prototype.applyTextTransform = function() {
	    this.node.data = this.transform(this.parent.css("textTransform"));
	};

	TextContainer.prototype.transform = function(transform) {
	    var text = this.node.data;
	    switch(transform){
	        case "lowercase":
	            return text.toLowerCase();
	        case "capitalize":
	            return text.replace(/(^|\s|:|-|\(|\))([a-z])/g, capitalize);
	        case "uppercase":
	            return text.toUpperCase();
	        default:
	            return text;
	    }
	};

	function capitalize(m, p1, p2) {
	    if (m.length > 0) {
	        return p1 + p2.toUpperCase();
	    }
	}

	module.exports = TextContainer;

	},{"./nodecontainer":14}],26:[function(_dereq_,module,exports){
	exports.smallImage = function smallImage() {
	    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
	};

	exports.bind = function(callback, context) {
	    return function() {
	        return callback.apply(context, arguments);
	    };
	};

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */

	exports.decode64 = function(base64) {
	    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	    var len = base64.length, i, encoded1, encoded2, encoded3, encoded4, byte1, byte2, byte3;

	    var output = "";

	    for (i = 0; i < len; i+=4) {
	        encoded1 = chars.indexOf(base64[i]);
	        encoded2 = chars.indexOf(base64[i+1]);
	        encoded3 = chars.indexOf(base64[i+2]);
	        encoded4 = chars.indexOf(base64[i+3]);

	        byte1 = (encoded1 << 2) | (encoded2 >> 4);
	        byte2 = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	        byte3 = ((encoded3 & 3) << 6) | encoded4;
	        if (encoded3 === 64) {
	            output += String.fromCharCode(byte1);
	        } else if (encoded4 === 64 || encoded4 === -1) {
	            output += String.fromCharCode(byte1, byte2);
	        } else{
	            output += String.fromCharCode(byte1, byte2, byte3);
	        }
	    }

	    return output;
	};

	exports.getBounds = function(node) {
	    if (node.getBoundingClientRect) {
	        var clientRect = node.getBoundingClientRect();
	        var width = node.offsetWidth == null ? clientRect.width : node.offsetWidth;
	        return {
	            top: clientRect.top,
	            bottom: clientRect.bottom || (clientRect.top + clientRect.height),
	            right: clientRect.left + width,
	            left: clientRect.left,
	            width:  width,
	            height: node.offsetHeight == null ? clientRect.height : node.offsetHeight
	        };
	    }
	    return {};
	};

	exports.offsetBounds = function(node) {
	    var parent = node.offsetParent ? exports.offsetBounds(node.offsetParent) : {top: 0, left: 0};

	    return {
	        top: node.offsetTop + parent.top,
	        bottom: node.offsetTop + node.offsetHeight + parent.top,
	        right: node.offsetLeft + parent.left + node.offsetWidth,
	        left: node.offsetLeft + parent.left,
	        width: node.offsetWidth,
	        height: node.offsetHeight
	    };
	};

	exports.parseBackgrounds = function(backgroundImage) {
	    var whitespace = ' \r\n\t',
	        method, definition, prefix, prefix_i, block, results = [],
	        mode = 0, numParen = 0, quote, args;
	    var appendResult = function() {
	        if(method) {
	            if (definition.substr(0, 1) === '"') {
	                definition = definition.substr(1, definition.length - 2);
	            }
	            if (definition) {
	                args.push(definition);
	            }
	            if (method.substr(0, 1) === '-' && (prefix_i = method.indexOf('-', 1 ) + 1) > 0) {
	                prefix = method.substr(0, prefix_i);
	                method = method.substr(prefix_i);
	            }
	            results.push({
	                prefix: prefix,
	                method: method.toLowerCase(),
	                value: block,
	                args: args,
	                image: null
	            });
	        }
	        args = [];
	        method = prefix = definition = block = '';
	    };
	    args = [];
	    method = prefix = definition = block = '';
	    backgroundImage.split("").forEach(function(c) {
	        if (mode === 0 && whitespace.indexOf(c) > -1) {
	            return;
	        }
	        switch(c) {
	        case '"':
	            if(!quote) {
	                quote = c;
	            } else if(quote === c) {
	                quote = null;
	            }
	            break;
	        case '(':
	            if(quote) {
	                break;
	            } else if(mode === 0) {
	                mode = 1;
	                block += c;
	                return;
	            } else {
	                numParen++;
	            }
	            break;
	        case ')':
	            if (quote) {
	                break;
	            } else if(mode === 1) {
	                if(numParen === 0) {
	                    mode = 0;
	                    block += c;
	                    appendResult();
	                    return;
	                } else {
	                    numParen--;
	                }
	            }
	            break;

	        case ',':
	            if (quote) {
	                break;
	            } else if(mode === 0) {
	                appendResult();
	                return;
	            } else if (mode === 1) {
	                if (numParen === 0 && !method.match(/^url$/i)) {
	                    args.push(definition);
	                    definition = '';
	                    block += c;
	                    return;
	                }
	            }
	            break;
	        }

	        block += c;
	        if (mode === 0) {
	            method += c;
	        } else {
	            definition += c;
	        }
	    });

	    appendResult();
	    return results;
	};

	},{}],27:[function(_dereq_,module,exports){
	var GradientContainer = _dereq_('./gradientcontainer');

	function WebkitGradientContainer(imageData) {
	    GradientContainer.apply(this, arguments);
	    this.type = imageData.args[0] === "linear" ? GradientContainer.TYPES.LINEAR : GradientContainer.TYPES.RADIAL;
	}

	WebkitGradientContainer.prototype = Object.create(GradientContainer.prototype);

	module.exports = WebkitGradientContainer;

	},{"./gradientcontainer":9}],28:[function(_dereq_,module,exports){
	function XHR(url) {
	    return new Promise(function(resolve, reject) {
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', url);

	        xhr.onload = function() {
	            if (xhr.status === 200) {
	                resolve(xhr.responseText);
	            } else {
	                reject(new Error(xhr.statusText));
	            }
	        };

	        xhr.onerror = function() {
	            reject(new Error("Network Error"));
	        };

	        xhr.send();
	    });
	}

	module.exports = XHR;

	},{}]},{},[4])(4)
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var bind = __webpack_require__(7);
	var Axios = __webpack_require__(9);
	var defaults = __webpack_require__(10);

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance(defaults);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(28);
	axios.CancelToken = __webpack_require__(29);
	axios.isCancel = __webpack_require__(25);

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(30);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(7);
	var isBuffer = __webpack_require__(8);

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}

	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(10);
	var utils = __webpack_require__(6);
	var InterceptorManager = __webpack_require__(22);
	var dispatchRequest = __webpack_require__(23);

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
	  config.method = config.method.toLowerCase();

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	module.exports = Axios;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(6);
	var normalizeHeaderName = __webpack_require__(12);

	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(13);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(13);
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	module.exports = defaults;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(6);
	var settle = __webpack_require__(14);
	var buildURL = __webpack_require__(17);
	var parseHeaders = __webpack_require__(18);
	var isURLSameOrigin = __webpack_require__(19);
	var createError = __webpack_require__(15);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(20);

	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;

	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(21);

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(15);

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(16);

	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);

	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });

	  return parsed;
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;

	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';

	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}

	module.exports = btoa;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));

	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }

	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }

	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }

	        if (secure === true) {
	          cookie.push('secure');
	        }

	        document.cookie = cookie.join('; ');
	      },

	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },

	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);
	var transformData = __webpack_require__(24);
	var isCancel = __webpack_require__(25);
	var defaults = __webpack_require__(10);
	var isAbsoluteURL = __webpack_require__(26);
	var combineURLs = __webpack_require__(27);

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(6);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	module.exports = Cancel;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(28);

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	module.exports = CancelToken;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 表格组件的SuperHeader部分
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @auhor huzaibin@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var SuperHeaders = function (_PureComponent) {
	    _inherits(SuperHeaders, _PureComponent);

	    function SuperHeaders(props) {
	        _classCallCheck(this, SuperHeaders);

	        var _this = _possibleConstructorReturn(this, (SuperHeaders.__proto__ || Object.getPrototypeOf(SuperHeaders)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(SuperHeaders, [{
	        key: 'render',
	        value: function render() {
	            var data = this.props.data;
	            return _react2.default.createElement(
	                'thead',
	                null,
	                data.map(function (trItem, trIndex) {
	                    return _react2.default.createElement(
	                        'tr',
	                        { key: 'tr' + trIndex, className: 'active' },
	                        trItem.map(function (item, index) {
	                            return _react2.default.createElement(
	                                'td',
	                                { key: 'td' + index,
	                                    colSpan: item.colspan,
	                                    rowSpan: item.rowspan === undefined ? 1 : item.rowspan,
	                                    style: {
	                                        textAlign: 'center',
	                                        verticalAlign: 'center',
	                                        backgroundColor: item.backgroundColor || '#f7f7f7'
	                                    } },
	                                item.name
	                            );
	                        })
	                    );
	                })
	            );
	        }
	    }]);

	    return SuperHeaders;
	}(_react.PureComponent);

	exports.default = SuperHeaders;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(2);

	var _axios = __webpack_require__(4);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 表格组件的Td部分
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @auhor huzaibin@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Td = function (_PureComponent) {
	    _inherits(Td, _PureComponent);

	    function Td(props) {
	        _classCallCheck(this, Td);

	        var _this = _possibleConstructorReturn(this, (Td.__proto__ || Object.getPrototypeOf(Td)).call(this, props));

	        _this.state = {
	            editable: _this.props.editable,
	            tdItem: _this.props.tdItem,
	            tdIndex: _this.props.tdIndex,
	            rowKey: _this.props.rowKey,
	            inputValue: _this.props.tdItem.value,
	            valueChanged: undefined,
	            confirmValue: _this.props.tdItem.value
	        };
	        return _this;
	    }

	    _createClass(Td, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.tdItem.value !== this.props.tdItem.value) {
	                this.setState({
	                    editable: nextProps.editable,
	                    tdItem: nextProps.tdItem,
	                    tdIndex: nextProps.tdIndex,
	                    rowKey: nextProps.rowKey,
	                    inputValue: nextProps.tdItem.value,
	                    confirmValue: nextProps.tdItem.value
	                });
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // console.log('did mount');
	            var _props = this.props,
	                tdItem = _props.tdItem,
	                tdIndex = _props.tdIndex;


	            if (tdItem.value && tdItem.flagIshtml) {
	                // console.log(tdItem)
	                this.parseDom(tdItem.value, 'td_row' + tdIndex);
	            } else if (tdItem.value && tdItem.flagIshtml === false) {
	                this.parseDom(tdItem.value, 'td_row' + tdIndex);
	            };
	        }
	    }, {
	        key: 'parseDom',
	        value: function parseDom(value, index) {
	            // console.log(index)
	            this.refs[index].innerHTML = value;
	        }
	    }, {
	        key: 'onDoubleClick',
	        value: function onDoubleClick() {
	            var modules = sessionStorage.getItem('modules');
	            var times = sessionStorage.getItem('times');
	            var isSingleModule = modules.indexOf(',');
	            var isSingleTime = times.indexOf(',');
	            if (isSingleTime > 0 || isSingleModule > 0) {
	                console.log('模组和时间必须单选');
	                this.openNotificationWithIcon('warning', '请重新选择查询，再做修改');
	            } else {
	                this.setState({ editable: true });
	            }
	        }
	    }, {
	        key: 'openNotificationWithIcon',
	        value: function openNotificationWithIcon(type, msg) {
	            _antd.notification.config({
	                top: 150
	            });
	            _antd.notification[type]({
	                message: '编辑修改时模组/时间必须单选',
	                description: msg
	            });
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(refIndex, e) {
	            this.setState({
	                inputValue: e.target.value
	            });
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel() {
	            console.log('取消修改' + this.state.inputValue);
	            this.setState({
	                // inputValue: this.props.tdItem.value,
	                editable: false
	            });
	        }

	        // 确认修改

	    }, {
	        key: 'handleConfirm',
	        value: function handleConfirm() {
	            var _this2 = this;

	            console.log('确认修改');
	            var oldValue = this.state.confirmValue;
	            // ajax post提交更改请求
	            var url = '?r=report/index/editAutoCell';
	            var formData = new FormData();
	            formData.append('moduleName', sessionStorage.getItem('modules'));
	            formData.append('date', sessionStorage.getItem('date'));
	            formData.append('time', sessionStorage.getItem('times'));
	            formData.append('row', this.props.rowKey);
	            formData.append('column', this.props.tdIndex);
	            formData.append('value', this.state.inputValue);
	            formData.append('oldValue', oldValue);
	            _axios2.default.post(url, formData, {
	                methods: 'post',
	                headers: { 'Content-Type': 'multipart/form-data' },
	                withCredentials: true
	            }).then(function (res) {
	                if (res.data.status === 0) {
	                    _this2.setState({
	                        editable: false,
	                        valueChanged: _this2.state.inputValue,
	                        confirmValue: _this2.state.inputValue
	                    });
	                    _this2.openNotificationWithIcon('success', '修改成功！');
	                } else {
	                    _this2.setState({
	                        editable: false
	                    });
	                    _this2.openNotificationWithIcon('error', res.data.msg);
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // console.log('render td');
	            var _state = this.state,
	                tdItem = _state.tdItem,
	                tdIndex = _state.tdIndex,
	                rowKey = _state.rowKey,
	                editable = _state.editable,
	                inputValue = _state.inputValue,
	                valueChanged = _state.valueChanged,
	                confirmValue = _state.confirmValue;
	            // console.log(tdIndex, rowKey);

	            var tdStyle = {
	                color: tdItem.fontColor,
	                background: tdItem.backgroundColor ? tdItem.backgroundColor : tdItem.background ? tdItem.background : 'white',
	                fontSize: tdItem.fontSize ? tdItem.fontSize : ''
	            };
	            if (this.props.display) {
	                tdStyle.display = 'none';
	            }
	            if (!editable) {
	                return _react2.default.createElement(
	                    'td',
	                    { ref: 'td_row' + tdIndex, colSpan: tdItem.colspan, rowSpan: tdItem.rowspan, style: tdStyle,
	                        onDoubleClick: this.onDoubleClick.bind(this) },
	                    confirmValue,
	                    tdItem.flagMark !== undefined && _react2.default.createElement('span', { style: {
	                            backgroundColor: tdItem.flagMark,
	                            fontSize: '18px',
	                            marginLeft: '5px',
	                            borderRadius: '50%',
	                            width: '8px',
	                            height: '8px' } })
	                );
	            }
	            if (editable) {
	                return _react2.default.createElement(
	                    'td',
	                    { ref: 'td_row' + tdIndex,
	                        colSpan: tdItem.colspan,
	                        rowSpan: tdItem.rowspan,
	                        style: tdStyle },
	                    _react2.default.createElement('input', {
	                        className: 'change-input',
	                        defaultValue: confirmValue,
	                        onChange: this.handleChange.bind(this, 'td_row' + tdIndex)
	                    }),
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'edit-control', style: { position: 'absolute' } },
	                        _react2.default.createElement(
	                            'li',
	                            { onClick: this.handleCancel.bind(this) },
	                            '\u53D6\u6D88'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            { onClick: this.handleConfirm.bind(this) },
	                            '\u4FDD\u5B58'
	                        )
	                    )
	                );
	            }
	        }
	    }]);

	    return Td;
	}(_react.PureComponent);

	exports.default = Td;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports


	// module
	exports.push([module.id, ".unique-table {\n  /*input 输入框*/\n}\n.unique-table table {\n  border-collapse: collapse !important;\n  background-color: transparent;\n  width: auto;\n  margin-bottom: 20px;\n  color: #666;\n}\n.unique-table table td,\n.unique-table table th {\n  box-sizing: border-box;\n}\n.unique-table .table.table-bordered.table-hover td {\n  min-width: 80px;\n}\n.unique-table table td span {\n  display: inline-block;\n  margin-left: 3px;\n  margin-bottom: 2px;\n}\n.unique-table .table-bordered th,\n.unique-table .table-bordered td {\n  border: 1px solid #ddd !important;\n}\n.unique-table .table tr:hover td {\n  background-color: #E7F4FD;\n}\n.unique-table .table > thead > tr > th {\n  border-bottom: 2px solid #ddd;\n}\n.unique-table .table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.unique-table .table-bordered {\n  border: 1px solid #ddd;\n}\n.unique-table .table-bordered > thead > tr > th,\n.unique-table .table-bordered > tbody > tr > th,\n.unique-table .table-bordered > tfoot > tr > th,\n.unique-table .table-bordered > thead > tr > td,\n.unique-table .table-bordered > tbody > tr > td,\n.unique-table .table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.unique-table .table-bordered > thead > tr > th,\n.unique-table .table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.unique-table table.table-hover tr:hover td {\n  background-color: #f5f5f5;\n}\n.unique-table tr:hover {\n  background-color: #E7F4FD;\n}\n.unique-table .superHeaders {\n  font-weight: 700;\n}\n.unique-table .change-input {\n  /*height: 2px;*/\n  border-radius: 4px;\n  background-image: none;\n  padding: 4px 7px;\n}\n.unique-table .edit-control {\n  position: fixed;\n  z-index: 2;\n  list-style: none;\n  text-align: center;\n  background-color: #fff;\n  letter-spacing: 8px;\n  text-indent: 8px;\n  border-radius: 8px;\n  border: 1px solid #ddd;\n}\n.unique-table .edit-control li {\n  padding: 5px 15px;\n  transition: .5s all;\n}\n.unique-table .edit-control li:hover {\n  color: #1456ac;\n  background-color: #f2f2f2;\n}\n.unique-table .report-btn {\n  background-color: #4b91ea;\n  border-radius: 3px;\n  color: #fff;\n  vertical-align: middle;\n  text-align: center;\n  padding: 6px 16px;\n  border-style: none;\n  margin-left: 20px;\n}\n", ""]);

	// exports


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })
/******/ ])});;