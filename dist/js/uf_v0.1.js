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
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file UF 核心代码包
	 * Antd 单独打包，代码里会对 Antd 全部组件进行二次封装
	 * @author liuzechun@baidu.com
	 */

	// UF 组件库构建入口
	window['UF'] = __webpack_require__(1).default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _uf = __webpack_require__(4);

	var _uf2 = _interopRequireDefault(_uf);

	var _ajax2 = __webpack_require__(13);

	var _utils = __webpack_require__(11);

	var _factory = __webpack_require__(181);

	var _factory2 = _interopRequireDefault(_factory);

	var _loader = __webpack_require__(182);

	var _loader2 = _interopRequireDefault(_loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = {
	    // 生成组件
	    init: function init(config, selector) {
	        var result = _react2.default.createElement(_factory2.default, { config: config });
	        // 如果没有指定目标容器的id，则直接返回生成的组件
	        if (!selector) {
	            return result;
	        }
	        return _reactDom2.default.render(_react2.default.createElement(_factory2.default, { config: config }), document.getElementById(selector));
	    },

	    // 获取组件
	    get: function get(name) {
	        return _utils.Cache.get('cache-' + name);
	    },

	    // ajax请求
	    ajax: function ajax(obj) {
	        (0, _ajax2.ajax)(obj);
	    },

	    // 载入自定义组件
	    load: function load(components) {
	        _loader2.default.add(components);
	    }
	};

	var UF = func.get;

	Object.assign(UF, _uf2.default, func);

	exports.default = UF;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = window.DLL.React;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = window.DLL.ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _antd = __webpack_require__(5);

	var _antd2 = _interopRequireDefault(_antd);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = Object.assign(
	// antd 组件统一迁移，见 src/antd/index.js
	_antd2.default,
	// 其他自己实现/封装的组件
	{
	    Export: __webpack_require__(143),
	    Tree: __webpack_require__(151),
	    Table: __webpack_require__(155),
	    Form: __webpack_require__(159),
	    Modal: __webpack_require__(163),

	    Table2: __webpack_require__(167)
	}); /**
	     * @file index.js 汇总所有 src 里对用户暴露的组件
	     * @author liuzechun@baidu.com
	     */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _dataentry = __webpack_require__(6);

	var DataEntry = _interopRequireWildcard(_dataentry);

	var _datadisplay = __webpack_require__(135);

	var DataDisplay = _interopRequireWildcard(_datadisplay);

	var _genaral = __webpack_require__(137);

	var Genaral = _interopRequireWildcard(_genaral);

	var _navigation = __webpack_require__(139);

	var Navigation = _interopRequireWildcard(_navigation);

	var _feedback = __webpack_require__(141);

	var Feedback = _interopRequireWildcard(_feedback);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// 感觉 ES6 的方式用起来不灵活啊。。。
	// export default Object.assign({}, DataEntry, DataDisplay, Genaral, Navigation, Feedback);

	module.exports = Object.assign({}, DataEntry, DataDisplay, Genaral, Navigation, Feedback); /**
	                                                                                            * @file antd组件统一封装，实现几个基础抽象类做继承
	                                                                                            * @author liuzechun@baidu.com
	                                                                                            */

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Switch = exports.Slider = exports.Select = exports.Radio = exports.Rate = exports.InputNumber = exports.InputGroup = exports.InputSearch = exports.Textarea = exports.Input = exports.TimePicker = exports.RangePicker = exports.MonthPicker = exports.DatePicker = exports.CheckboxGroup = exports.Checkbox = exports.Cascader = exports.AutoComplete = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _DataEntry18 = __webpack_require__(7);

	var _DataEntry19 = _interopRequireDefault(_DataEntry18);

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	var _antd = __webpack_require__(14);

	var Antd = _interopRequireWildcard(_antd);

	__webpack_require__(132);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 数据录入 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	// 设置 moment 的 locale


	_moment2.default.locale('zh-cn');

	/************ AutoComplete 自动补全 *************************************************************************** */
	// 简单的补全功能

	var AutoComplete = exports.AutoComplete = function (_DataEntry) {
	    _inherits(AutoComplete, _DataEntry);

	    function AutoComplete(props) {
	        _classCallCheck(this, AutoComplete);

	        var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

	        _this.__init();
	        _this.state = {
	            result: []
	        };
	        return _this;
	    }

	    _createClass(AutoComplete, [{
	        key: '_initProps',
	        value: function _initProps() {
	            var _this2 = this;

	            _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), '_initProps', this).call(this);
	            this.__props = this.__mergeProps({
	                style: { width: 160 },
	                options: []
	            }, this.__props);
	            var originOnSearch = this.__props.onSearch;
	            this.__props.onSearch = function (value) {
	                for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                    params[_key - 1] = arguments[_key];
	                }

	                var result = [];
	                if (!!value) {
	                    result = _this2.__props.options.map(function (i) {
	                        return value + i;
	                    });
	                }
	                _this2.setState({ result: result });
	                originOnSearch && originOnSearch.call.apply(originOnSearch, [_this2, value].concat(params));
	            };
	        }
	    }, {
	        key: '_onEvent',
	        value: function _onEvent() {
	            var _get2;

	            // 对change前后的数据进行对比
	            var oldValue = this.__props.value;

	            for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                params[_key2] = arguments[_key2];
	            }

	            (_get2 = _get(AutoComplete.prototype.__proto__ || Object.getPrototypeOf(AutoComplete.prototype), '_onEvent', this)).call.apply(_get2, [this].concat(params));
	            var newValue = this.__props.value;
	            // 如果长度变短，说明是在删除，如果和后缀能匹配上，直接把后缀删除
	            if (oldValue && newValue && oldValue.length > newValue.length) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = this.__props.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var v = _step.value;

	                        if (oldValue.indexOf(v) !== -1) {
	                            var result = oldValue.replace(v, '');
	                            if (result.length < newValue.length) {
	                                this.__props.value = result;
	                                this.__props.onSearch(result);
	                                break;
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                Antd.AutoComplete,
	                this.__props,
	                this.state.result.map(function (item) {
	                    return _react2.default.createElement(
	                        Antd.AutoComplete.Option,
	                        { key: item },
	                        item
	                    );
	                })
	            );
	        }
	    }]);

	    return AutoComplete;
	}(_DataEntry19.default);

	/************* Cascader 级联选择 ************************************************************************** */

	var Cascader = exports.Cascader = function (_DataEntry2) {
	    _inherits(Cascader, _DataEntry2);

	    function Cascader(props) {
	        _classCallCheck(this, Cascader);

	        var _this3 = _possibleConstructorReturn(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(Cascader, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Cascader, this.__props);
	        }
	    }]);

	    return Cascader;
	}(_DataEntry19.default);

	/************* Checkbox 复选框 ************************************************************************** */

	var Checkbox = exports.Checkbox = function (_DataEntry3) {
	    _inherits(Checkbox, _DataEntry3);

	    function Checkbox(props) {
	        _classCallCheck(this, Checkbox);

	        var _this4 = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(Checkbox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Checkbox, this.__props);
	        }
	    }]);

	    return Checkbox;
	}(_DataEntry19.default);
	// 多复选框组合


	var CheckboxGroup = exports.CheckboxGroup = function (_DataEntry4) {
	    _inherits(CheckboxGroup, _DataEntry4);

	    function CheckboxGroup(props) {
	        _classCallCheck(this, CheckboxGroup);

	        var _this5 = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

	        _this5.__init();
	        return _this5;
	    }

	    _createClass(CheckboxGroup, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Checkbox.Group, this.__props);
	        }
	    }]);

	    return CheckboxGroup;
	}(_DataEntry19.default);

	/************* DatePicker 日期选择框 ************************************************************************** */

	var BasePicker = function (_DataEntry5) {
	    _inherits(BasePicker, _DataEntry5);

	    function BasePicker(props) {
	        _classCallCheck(this, BasePicker);

	        return _possibleConstructorReturn(this, (BasePicker.__proto__ || Object.getPrototypeOf(BasePicker)).call(this, props));
	    }
	    // 继承父组件的函数，并在__props上追加一些属性
	    // 此函数会在初始化以及componentWillReceiveProps时调用


	    _createClass(BasePicker, [{
	        key: '_initProps',
	        value: function _initProps() {
	            _get(BasePicker.prototype.__proto__ || Object.getPrototypeOf(BasePicker.prototype), '_initProps', this).call(this);
	            this.__props = this.__mergeProps({ format: 'YYYY-MM-DD' }, this.__props);
	            // 如果没有设置showTime，根据format自动增删showTime属性
	            if (!this.__props.showTime) {
	                this.__props.showTime = this._judgeShowTime(this.__props.format);
	            }
	        }
	        // 根据format自动增删showTime属性

	    }, {
	        key: '_judgeShowTime',
	        value: function _judgeShowTime(format) {
	            return format && format.toLowerCase().indexOf('h') !== -1;
	        }
	    }]);

	    return BasePicker;
	}(_DataEntry19.default);
	// 日期[时间]选择


	var DatePicker = exports.DatePicker = function (_BasePicker) {
	    _inherits(DatePicker, _BasePicker);

	    function DatePicker(props) {
	        _classCallCheck(this, DatePicker);

	        var _this7 = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

	        _this7.__init();
	        return _this7;
	    }

	    _createClass(DatePicker, [{
	        key: 'render',
	        value: function render() {
	            var value = this.__props.value;
	            return _react2.default.createElement(Antd.DatePicker, _extends({}, this.__props, {
	                value: value ? (0, _moment2.default)(value) : value }));
	        }
	    }]);

	    return DatePicker;
	}(BasePicker);
	// 月份选择 ------ 注意，此处用的是 DataEntry，为的是防止 format 被覆盖成 datepicker 的默认值


	var MonthPicker = exports.MonthPicker = function (_DataEntry6) {
	    _inherits(MonthPicker, _DataEntry6);

	    function MonthPicker(props) {
	        _classCallCheck(this, MonthPicker);

	        var _this8 = _possibleConstructorReturn(this, (MonthPicker.__proto__ || Object.getPrototypeOf(MonthPicker)).call(this, props));

	        _this8.__init();
	        return _this8;
	    }

	    _createClass(MonthPicker, [{
	        key: '_initProps',
	        value: function _initProps() {
	            _get(MonthPicker.prototype.__proto__ || Object.getPrototypeOf(MonthPicker.prototype), '_initProps', this).call(this);
	            this.__props = this.__mergeProps({ format: 'YYYY-MM' }, this.__props);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var value = this.__props.value;
	            return _react2.default.createElement(Antd.DatePicker.MonthPicker, _extends({}, this.__props, {
	                value: value ? (0, _moment2.default)(value, this.__props.format) : value }));
	        }
	    }]);

	    return MonthPicker;
	}(_DataEntry19.default);
	// 范围选择


	var RangePicker = exports.RangePicker = function (_BasePicker2) {
	    _inherits(RangePicker, _BasePicker2);

	    function RangePicker(props) {
	        _classCallCheck(this, RangePicker);

	        var _this9 = _possibleConstructorReturn(this, (RangePicker.__proto__ || Object.getPrototypeOf(RangePicker)).call(this, props));

	        _this9.__init();
	        return _this9;
	    }

	    _createClass(RangePicker, [{
	        key: 'render',
	        value: function render() {
	            var value = this.__props.value;
	            // 需注意，RangePicker 的value是一个数组
	            return _react2.default.createElement(Antd.DatePicker.RangePicker, _extends({}, this.__props, {
	                value: value ? [(0, _moment2.default)(value[0]), (0, _moment2.default)(value[1])] : value }));
	        }
	    }]);

	    return RangePicker;
	}(BasePicker);
	/************* TimePicker 时间选择 *************** */
	// 时间选择，注意是继承的 DataEntry


	var TimePicker = exports.TimePicker = function (_DataEntry7) {
	    _inherits(TimePicker, _DataEntry7);

	    function TimePicker(props) {
	        _classCallCheck(this, TimePicker);

	        var _this10 = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

	        _this10.__init();
	        return _this10;
	    }

	    _createClass(TimePicker, [{
	        key: '_initProps',
	        value: function _initProps() {
	            _get(TimePicker.prototype.__proto__ || Object.getPrototypeOf(TimePicker.prototype), '_initProps', this).call(this);
	            this.__props = this.__mergeProps({ format: 'HH:mm:ss' }, this.__props);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var value = this.__props.value;
	            return _react2.default.createElement(Antd.TimePicker, _extends({}, this.__props, {
	                value: value ? (0, _moment2.default)(value, this.__props.format) : value }));
	        }
	    }]);

	    return TimePicker;
	}(_DataEntry19.default);

	/************* Input 输入框 ************************************************************************** */

	var Input = exports.Input = function (_DataEntry8) {
	    _inherits(Input, _DataEntry8);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        var _this11 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	        _this11.__init();
	        return _this11;
	    }

	    _createClass(Input, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Input, this.__props);
	        }
	    }]);

	    return Input;
	}(_DataEntry19.default);
	// textarea


	var Textarea = exports.Textarea = function (_DataEntry9) {
	    _inherits(Textarea, _DataEntry9);

	    function Textarea(props) {
	        _classCallCheck(this, Textarea);

	        var _this12 = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

	        _this12.__init();
	        return _this12;
	    }

	    _createClass(Textarea, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Input.TextArea, this.__props);
	        }
	    }]);

	    return Textarea;
	}(_DataEntry19.default);
	// 带搜索按钮


	var InputSearch = exports.InputSearch = function (_DataEntry10) {
	    _inherits(InputSearch, _DataEntry10);

	    function InputSearch(props) {
	        _classCallCheck(this, InputSearch);

	        var _this13 = _possibleConstructorReturn(this, (InputSearch.__proto__ || Object.getPrototypeOf(InputSearch)).call(this, props));

	        _this13.__init();
	        return _this13;
	    }

	    _createClass(InputSearch, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Input.Search, this.__props);
	        }
	    }]);

	    return InputSearch;
	}(_DataEntry19.default);
	// 输入框连接在一起形成一组


	var InputGroup = exports.InputGroup = function (_DataEntry11) {
	    _inherits(InputGroup, _DataEntry11);

	    function InputGroup(props) {
	        _classCallCheck(this, InputGroup);

	        var _this14 = _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).call(this, props));

	        _this14.__init();
	        return _this14;
	    }

	    _createClass(InputGroup, [{
	        key: 'render',
	        value: function render() {
	            // 使用ref会报错
	            delete this.__props.ref;
	            return _react2.default.createElement(Antd.Input.Group, _extends({ compact: true }, this.__props));
	        }
	    }]);

	    return InputGroup;
	}(_DataEntry19.default);
	// 数字输入框


	var InputNumber = exports.InputNumber = function (_DataEntry12) {
	    _inherits(InputNumber, _DataEntry12);

	    function InputNumber(props) {
	        _classCallCheck(this, InputNumber);

	        var _this15 = _possibleConstructorReturn(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).call(this, props));

	        _this15.__init();
	        return _this15;
	    }

	    _createClass(InputNumber, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.InputNumber, _extends({ compact: true }, this.__props));
	        }
	    }]);

	    return InputNumber;
	}(_DataEntry19.default);

	/************* Rate 评分 ************************************************************************** */

	var Rate = exports.Rate = function (_DataEntry13) {
	    _inherits(Rate, _DataEntry13);

	    function Rate(props) {
	        _classCallCheck(this, Rate);

	        var _this16 = _possibleConstructorReturn(this, (Rate.__proto__ || Object.getPrototypeOf(Rate)).call(this, props));

	        _this16.__init();
	        return _this16;
	    }

	    _createClass(Rate, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Rate, this.__props);
	        }
	    }]);

	    return Rate;
	}(_DataEntry19.default);

	/************* Radio 单选 ************************************************************************** */

	// 这里直接使用Radio组，单个radio没想到什么应用场景


	var Radio = exports.Radio = function (_DataEntry14) {
	    _inherits(Radio, _DataEntry14);

	    function Radio(props) {
	        _classCallCheck(this, Radio);

	        var _this17 = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

	        _this17.__init();
	        return _this17;
	    }

	    _createClass(Radio, [{
	        key: 'render',
	        value: function render() {
	            var children = void 0;
	            // 增加了一个配置项，来控制是否已button的形式展示
	            if (this.__props.showAsButton) {
	                children = (this.__props.options || []).map(function (item) {
	                    return typeof item === 'string' ? _react2.default.createElement(
	                        Antd.Radio.Button,
	                        { key: item, value: item },
	                        item
	                    ) : _react2.default.createElement(
	                        Antd.Radio.Button,
	                        { key: item.value, disabled: item.disabled, style: item.style,
	                            value: item.value },
	                        item.label
	                    );
	                });
	            } else {
	                children = (this.__props.options || []).map(function (item) {
	                    return typeof item === 'string' ? _react2.default.createElement(
	                        Antd.Radio,
	                        { key: item, value: item },
	                        item
	                    ) : _react2.default.createElement(
	                        Antd.Radio,
	                        { key: item.value, disabled: item.disabled, style: item.style,
	                            value: item.value },
	                        item.label
	                    );
	                });
	            }
	            return _react2.default.createElement(
	                Antd.Radio.Group,
	                _extends({}, this.__props, { options: undefined }),
	                children
	            );
	        }
	    }]);

	    return Radio;
	}(_DataEntry19.default);

	/************* Select 下拉菜单 ************************************************************************** */

	var Select = exports.Select = function (_DataEntry15) {
	    _inherits(Select, _DataEntry15);

	    function Select(props) {
	        _classCallCheck(this, Select);

	        var _this18 = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

	        _this18.__init();
	        return _this18;
	    }

	    _createClass(Select, [{
	        key: '_initProps',
	        value: function _initProps() {
	            _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), '_initProps', this).call(this);
	            this.__props = this.__mergeProps({ style: { width: 120 } }, this.__props);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                Antd.Select,
	                this.__props,
	                (this.__props.options || []).map(function (item) {
	                    return typeof item === 'string' ? _react2.default.createElement(
	                        Antd.Select.Option,
	                        { key: item, value: item },
	                        item
	                    ) : _react2.default.createElement(
	                        Antd.Select.Option,
	                        { key: item.value, disabled: item.disabled, style: item.style,
	                            value: item.value },
	                        item.label
	                    );
	                })
	            );
	        }
	    }]);

	    return Select;
	}(_DataEntry19.default);

	/************* Slider 评分 ************************************************************************** */

	var Slider = exports.Slider = function (_DataEntry16) {
	    _inherits(Slider, _DataEntry16);

	    function Slider(props) {
	        _classCallCheck(this, Slider);

	        var _this19 = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

	        _this19.__init();
	        return _this19;
	    }

	    _createClass(Slider, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Slider, this.__props);
	        }
	    }]);

	    return Slider;
	}(_DataEntry19.default);

	/************* Switch 开关 ************************************************************************** */

	var Switch = exports.Switch = function (_DataEntry17) {
	    _inherits(Switch, _DataEntry17);

	    function Switch(props) {
	        _classCallCheck(this, Switch);

	        var _this20 = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

	        _this20.__controlled.key = 'checked';
	        _this20.__init();
	        return _this20;
	    }

	    _createClass(Switch, [{
	        key: 'render',
	        value: function render() {
	            // Switch用的是checked受控
	            return _react2.default.createElement(Antd.Switch, this.__props);
	        }
	    }]);

	    return Switch;
	}(_DataEntry19.default);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(8);

	var _Antd3 = _interopRequireDefault(_Antd2);

	var _utils = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 数据录入 相关的组件抽象类，如：Input等
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var DataEntry = function (_Antd) {
	    _inherits(DataEntry, _Antd);

	    function DataEntry(props) {
	        _classCallCheck(this, DataEntry);

	        var _this = _possibleConstructorReturn(this, (DataEntry.__proto__ || Object.getPrototypeOf(DataEntry)).call(this, props));

	        _this.__controlled = {
	            key: 'value',
	            event: 'onChange'
	        };
	        return _this;
	    }

	    // 增加 onChange 时默认保存数据的函数
	    // 父类的 _onEvent 函数不能满足需求，直接覆盖了


	    _createClass(DataEntry, [{
	        key: '_onEvent',
	        value: function _onEvent(callback) {
	            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                params[_key - 1] = arguments[_key];
	            }

	            callback && callback.apply(undefined, params);
	            var key = this.__controlled.key;
	            // console.log(params[1]);
	            if (_utils.Utils.typeof(params[0], 'object') && params[0].target) {
	                // 适合的组件：input、input-number、checkbox、radio
	                this.__props[key] = params[0].target.value;
	            } else if (_utils.Utils.typeof(params[0], ['string', 'number', 'boolean', 'array'])) {
	                // 适合的组件：select、switch、cascader、rate、slider
	                this.__props[key] = params[0];
	            } else if (params[1]) {
	                // 适合的组件：date-picker系列
	                this.__props[key] = params[1];
	            } else {
	                // 特殊情况，容错
	                this.__props[key] = params[0];
	            }

	            this.forceUpdate();
	        }

	        // 获取数据接口

	    }, {
	        key: 'getValue',
	        value: function getValue() {
	            var key = this.__controlled.key;
	            return this.__props[key];
	        }
	    }]);

	    return DataEntry;
	}(_Antd3.default);

	exports.default = DataEntry;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _component = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Antd 全部组件的基类，其中实现了接管受控属性的逻辑
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Antd = function (_BaseComponent) {
	    _inherits(Antd, _BaseComponent);

	    function Antd(props) {
	        _classCallCheck(this, Antd);

	        // 受控属性名，供子类设置。如果子类设置了此属性，则会绑定change事件，同时也受控于用户传入的此值。见 _handleControlled
	        var _this = _possibleConstructorReturn(this, (Antd.__proto__ || Object.getPrototypeOf(Antd)).call(this, props));

	        _this.__controlled = null;
	        return _this;
	    }

	    _createClass(Antd, [{
	        key: '__init',
	        value: function __init() {
	            _get(Antd.prototype.__proto__ || Object.getPrototypeOf(Antd.prototype), '__init', this).call(this);
	            // 受控配置 - 如果不为null,则合并覆盖
	            this.__controlled = this.__controlled ? this.__mergeProps({
	                key: 'value',
	                event: 'onChange',
	                paramsIndex: 0
	            }, this.__controlled) : null;
	            // 受控组件默认处理逻辑
	            this._handleControlled();
	        }

	        // 受控属性绑定change事件，同时也受控于用户传入的值

	    }, {
	        key: '_handleControlled',
	        value: function _handleControlled() {
	            if (!this.__controlled) {
	                return;
	            }
	            var key = this.__controlled.key;
	            // 受控属性对应的默认属性，(如：value => defaultValue)
	            var defaultKey = 'default' + key.replace(/^\w/g, function (v) {
	                return v.toUpperCase();
	            });
	            var event = this.__controlled.event;
	            var onEvent = this.__props[event];
	            // 把value和defaultValue merge一下，统一交由 value 控制
	            var keyValue = this.__props[key] || this.__props[defaultKey];
	            // 如果这个值为空，否则受控属性为空会出现异常
	            if (keyValue !== undefined) {
	                this.__props[key] = keyValue;
	            } else {
	                // 屏蔽warning，非受控组件转换为受控组件会报warning
	                this.__props[key] = '';
	            }
	            this.__props[event] = this._onEvent.bind(this, onEvent);
	        }

	        // 同步onChange的数据到受控属性上，默认取第一个参数
	        // ** 可直接被子类覆盖重写 **
	        // **     如果有其他需求可以直接覆盖重写，注意函数内要调用下 callback（如：DataEntry中用法）

	    }, {
	        key: '_onEvent',
	        value: function _onEvent(callback) {
	            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                params[_key - 1] = arguments[_key];
	            }

	            callback && callback.apply(undefined, params);
	            var pi = this.__controlled.paramsIndex;
	            var key = this.__controlled.key;
	            if (key) {
	                this.__props[key] = params[pi];
	                this.forceUpdate();
	            }
	        }
	    }]);

	    return Antd;
	}(_component.BaseComponent);

	exports.default = Antd;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    BaseComponent: __webpack_require__(10).default
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(11);

	var _ajax = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 基础类
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by xuziqian on 2017/8/4.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// React的生命周期中的7个常用函数，为了防止函数被终的子组件覆盖，这7个函数会经过逻辑处理
	// 中间子类在使用这几个函数的时候，需要在函数最前面调用parent.[func]()
	var PreventCoverageMap = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'shouldComponentUpdate'];

	// 提供给用户的通用回调函数
	// 所有组件都具备，分别在声明周期中的不同阶段调用
	var ForUserApi = ['willMount', 'didMount', 'didUpdate', 'willUnmount'];

	var BaseComponent = function (_Component) {
	    _inherits(BaseComponent, _Component);

	    function BaseComponent(props) {
	        _classCallCheck(this, BaseComponent);

	        var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

	        _this._keyPrefix = 'cache-';
	        return _this;
	    }

	    /* 暴露给用户的方法 ***********************************************************************/

	    // 暴露给用户刷新组件的接口


	    _createClass(BaseComponent, [{
	        key: 'set',
	        value: function set(option) {
	            var props = this.__mergeProps({}, this.__props, option);
	            // this._initProps(props);
	            // cwr一定存在，且cwr中会执行_initProps。不管子组件是否用的是__props，都能保证兼容性
	            // 因为默认会更改__props并且forceUpdate；如果组件用的自己的props，必定会自己实现cwr中的逻辑
	            this.componentWillReceiveProps(props);
	            this.forceUpdate();
	        }
	        // 如果有key则返回key的值；如果没有key，则返回全部参数

	    }, {
	        key: 'get',
	        value: function get(key) {
	            return key ? this.__props[key] : this.__props;
	        }

	        /* 供子组件调用方法 ***********************************************************************/

	        // 供子组件调用初始化 使用子组件this调用

	    }, {
	        key: '__init',
	        value: function __init() {
	            // 目的是让子类调用__init()时，把父类中设置的等待注入到真正的声明周期中的函数注入进去
	            this._injectFunction();
	            // 共享组件
	            this._transmitComponent();
	            // 挂载用户传入的需要关联到生命周期中的函数
	            this._loadUserFunction();
	            // 后面传入组件的参数用 __props 代替 props
	            this._initProps();
	        }

	        // 获取共享组件/数据

	    }, {
	        key: '__getCache',
	        value: function __getCache(key) {
	            return _utils.Cache.get(this._keyPrefix + key);
	        }

	        // 设置共享组件/数据

	    }, {
	        key: '__setCache',
	        value: function __setCache(key, component) {
	            key = this._keyPrefix + key;
	            _utils.Cache.set(key, component);
	        }

	        // 把默认配置和当前用户传入配置进行合并，可以传多个参数
	        //  如果把 defaultProps 放在第一位，merge完成后defaultProps的值会变成merge后的数据，如果defaultProps需多次使用，会出问题
	        //  针对此问题，可以第一个参数放一个空对象，类似于Object.assign的用法
	        // 叫props但不一定要用来合并props，比如合并 config

	    }, {
	        key: '__mergeProps',
	        value: function __mergeProps() {
	            return _utils.Utils.merge.apply(_utils.Utils, arguments);
	        }

	        // 从props中过滤掉某些属性，例如原始元素不支持的属性

	    }, {
	        key: '__filterProps',
	        value: function __filterProps(props, arr) {
	            return _utils.Utils.filter(props, arr);
	        }

	        // ajax的get方法

	    }, {
	        key: '__getData',
	        value: function __getData(url) {
	            var ajax = (0, _utils.Ajax)(url, 'get');

	            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                params[_key - 1] = arguments[_key];
	            }

	            ajax.apply(undefined, params);
	        }

	        // ajax的post方法

	    }, {
	        key: '__postData',
	        value: function __postData(url) {
	            var ajax = (0, _utils.Ajax)(url, 'post');

	            for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                params[_key2 - 1] = arguments[_key2];
	            }

	            ajax.apply(undefined, params);
	        }
	    }, {
	        key: '__ajax',
	        value: function __ajax(params) {
	            (0, _ajax.ajax)(params);
	        }

	        /* 私有方法 ***********************************************************************/

	        // componentWillUnmount 执行时的默认处理逻辑
	        // 最外层的子类实例化的时候会调用 _injectFunction 函数，把函数注入到子类示例的 componentWillUnmount 中

	    }, {
	        key: '_componentWillUnmount',
	        value: function _componentWillUnmount() {
	            this._unsetTransmitComponent();
	        }

	        // 组件的 componentWillReceiveProps 函数默认处理逻辑

	    }, {
	        key: '_componentWillReceiveProps',
	        value: function _componentWillReceiveProps(nextProps) {
	            this._initProps(nextProps);
	        }

	        // 后面传入组件的参数用 __props 代替 props

	    }, {
	        key: '_initProps',
	        value: function _initProps(props) {
	            // 使用Rest对象解构 去除掉多余的属性（解决报warning问题）
	            var _ref = props || this.props,
	                __cache = _ref.__cache,
	                __ref = _ref.__ref,
	                __props = _objectWithoutProperties(_ref, ['__cache', '__ref']);

	            __props['ref'] = __props['ref'] || __ref;

	            this.__props = __props;
	        }

	        // 共享组件

	    }, {
	        key: '_transmitComponent',
	        value: function _transmitComponent() {
	            var key = this._getTransmitName();
	            if (!!key) {
	                _utils.Cache.set(key, this);
	            }
	        }

	        // 解除共享

	    }, {
	        key: '_unsetTransmitComponent',
	        value: function _unsetTransmitComponent() {
	            var key = this._getTransmitName();
	            if (!!key) {
	                _utils.Cache.del(key, this);
	            }
	        }

	        // 获取key的名称

	    }, {
	        key: '_getTransmitName',
	        value: function _getTransmitName() {
	            var key = this.props.__cache;
	            if (!!this.props.route && this.props.route.__cache) {
	                key = this.props.route.transmitName;
	            }
	            if (!!key && key !== 'undefined') {
	                key = this._keyPrefix + key;
	            } else {
	                key = false;
	            }
	            return key;
	        }

	        // 把父组件定义的 需在React的生命周期中的7个函数中增加的处理逻辑 注入到对应的7个函数中

	    }, {
	        key: '_injectFunction',
	        value: function _injectFunction() {
	            var _this2 = this;

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                var _loop = function _loop() {
	                    var v = _step.value;

	                    // 如果父组件中有等待注入的函数
	                    var inject = _this2['_' + v];
	                    if (inject) {
	                        var origin = _this2[v];
	                        _this2[v] = function () {
	                            for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                                params[_key3] = arguments[_key3];
	                            }

	                            inject.call.apply(inject, [_this2].concat(params));
	                            origin && origin.call.apply(origin, [_this2].concat(params));
	                        };
	                    }
	                };

	                for (var _iterator = PreventCoverageMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    _loop();
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }

	        // 挂载用户传入的需要关联到生命周期中的函数

	    }, {
	        key: '_loadUserFunction',
	        value: function _loadUserFunction() {
	            var _this3 = this;

	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                var _loop2 = function _loop2() {
	                    var v = _step2.value;

	                    // 如果props中有等待注入的函数
	                    var inject = _this3.props['' + v];
	                    if (inject) {
	                        var funcName = 'component' + v.replace(/^\w/g, function (o) {
	                            return o.toUpperCase();
	                        });
	                        var origin = _this3[funcName];
	                        _this3[funcName] = function () {
	                            for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	                                params[_key4] = arguments[_key4];
	                            }

	                            // 先执行默认逻辑，再执行用户逻辑
	                            inject.call.apply(inject, [_this3].concat(params));
	                            origin && origin.call.apply(origin, [_this3].concat(params));
	                        };
	                    }
	                };

	                for (var _iterator2 = ForUserApi[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    _loop2();
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }]);

	    return BaseComponent;
	}(_react.Component);

	exports.default = BaseComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    Utils: __webpack_require__(12).default,
	    Cache: __webpack_require__(16).default,
	    Ajax: __webpack_require__(13).default
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ajax = __webpack_require__(13);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split(''); /**
	                                                                                                  * @file 一些常用的函数工具
	                                                                                                  * @author liuzechun
	                                                                                                  **/

	var s4 = function s4() {
	    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
	};

	var Utils = {
	    // 数字前面补充0
	    padNum: function padNum(num, n) {
	        var len = ('' + num).length;
	        return Array(n > len ? n - len + 1 : 0).join(0) + num;
	    },

	    // 生成随机唯一ID
	    uniqueId: function uniqueId() {
	        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	    },

	    // 字符串哈希
	    hash: function hash(text) {
	        var hash = 5381;
	        text = JSON.stringify(text);
	        var i = text.length - 1;
	        for (; i > -1; i--) {
	            hash += (hash << 5) + text.charCodeAt(i);
	        }
	        var value = hash & 0x7FFFFFFF;
	        var retValue = '';
	        do {
	            retValue += I64BIT_TABLE[value & 0x3F];
	        } while (value >>= 6);
	        return retValue;
	    },

	    // 在数组1中但不在数组2中
	    arrayDiff: function arrayDiff(array1, array2) {
	        var o = {};
	        var res = [];
	        for (var i in array2) {
	            o[array2[i]] = true;
	        }
	        for (var j in array1) {
	            if (!o[array1[j]]) {
	                res.push(array1[j]);
	            }
	        }
	        return res;
	    },

	    // 两个数组取交集
	    arrayIntersect: function arrayIntersect(array1, array2) {
	        var res1 = this.arrayDiff(array1, array2);
	        var res2 = this.arrayDiff(array2, array1);
	        return this.arrayDiff(array1.concat(res2), res1.concat(res2));
	    },

	    // 多个数组取交集
	    arrayIntersectMulti: function arrayIntersectMulti() {
	        // 二维数组
	        var twoDimenArray = arguments[0];
	        var interArray = [];
	        for (var i = 0, len = twoDimenArray.length; i < len - 1; i++) {
	            var _interArray = this.arrayIntersect(twoDimenArray[i], twoDimenArray[i + 1]);
	            twoDimenArray[i + 1] = _interArray;
	        }
	        return interArray;
	    },

	    // 对象转数组
	    objToArr: function objToArr(obj) {
	        var arr = [];
	        for (var i in obj) {
	            arr.push(obj[i]);
	        }
	        return arr;
	    },

	    // 数组转对象
	    arrToObj: function arrToObj(arr) {
	        var obj = {};
	        for (var i in arr) {
	            obj[i] = arr[i];
	        }
	        return obj;
	    },

	    // 判断数组或对象是否为空
	    empty: function empty(obj) {
	        for (var t in obj) {
	            return false;
	        }
	        return true;
	    },

	    // 浅拷贝，指针指向，只拷贝一层
	    copy: function copy(obj) {
	        return this.clone(obj, 1);
	    },

	    // 深拷贝对象/数组
	    // level 为深拷贝的层级，默认一直遍历到最深层
	    clone: function clone(data, level) {
	        // undefined <= 0 (false)
	        // null <= 0 (true)
	        if (level <= 0) {
	            return data;
	        }
	        var newData = void 0;
	        if (this.typeof(data, 'array')) {
	            newData = [];
	        } else if (this.typeof(data, 'object')) {
	            newData = {};
	        } else {
	            return data;
	        }
	        for (var i in data) {
	            if (data.hasOwnProperty(i)) {
	                newData[i] = this.clone(data[i], this.typeof(level, 'number') ? level - 1 : undefined);
	            }
	        }
	        return newData;
	    },

	    // 以第一个对象为目标，依次把后面的对象merge到上去，支持深层的merge，类似于一个深层的 Object.assign()
	    // level 参数为拷贝层数，不传则循环遍历所有属性
	    merge: function merge(target) {
	        var result = target;

	        for (var _len = arguments.length, objs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            objs[_key - 1] = arguments[_key];
	        }

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = objs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var obj = _step.value;

	                // 首先判断两个数据的格式，只有两个数据都为引用类型时，才需要循环合并
	                if (this.typeof(result, ['array', 'object']) && this.typeof(obj, ['array', 'object'])) {
	                    for (var i in obj) {
	                        if (obj.hasOwnProperty(i)) {
	                            result[i] = this.merge(result[i], obj[i]);
	                        }
	                    }
	                } else {
	                    result = obj === undefined ? target : obj;
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        return result;
	    },

	    // 从obj中过滤掉某些属性
	    filter: function filter(obj, arr) {
	        if (this.typeof(arr, 'string')) {
	            arr = [arr];
	        }
	        var newObj = {};
	        for (var i in obj) {
	            if (obj.hasOwnProperty(i) && arr.indexOf(i) === -1) {
	                newObj[i] = obj[i];
	            }
	        }
	        return newObj;
	    },

	    // 对比两个对象是否相等
	    equals: function equals(obj1, obj2) {
	        return JSON.stringify(obj1) === JSON.stringify(obj2);
	    },

	    // 子串是否处于字符串最末尾
	    isLast: function isLast(sub, str) {
	        return str.lastIndexOf(sub) === str.length - sub.length;
	    },

	    // each 遍历对象属性，类似于jQuery的each函数，方便react的render函数中遍历对象
	    // callback 为回调函数，支持三个参数：依次是 item, index, obj
	    each: function each(obj, callback) {
	        var result = [];
	        for (var i in obj) {
	            result.push(callback(obj[i], i, obj));
	        }
	        return result;
	    },

	    // 根据路由模式生成真实的链接
	    // pattern  路由模式，如：#/visual/room/:room/realMode/:rack_col/:sn
	    // data 真实数据，模式中的:room即在data中取room字段的值
	    getPathFromPattern: function getPathFromPattern(pattern, data) {
	        var path = '#';
	        if (pattern) {
	            var arr = pattern.slice(2, pattern.length).split('/');
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var v = _step2.value;

	                    if (v.indexOf(':') === 0) {
	                        var key = v.slice(1, v.length);
	                        path += '/' + data[key];
	                    } else {
	                        path += '/' + v;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        } else {
	            path = 'javascript:void(0);';
	        }
	        return path;
	    },

	    // 跳转链接，router的调整组件会刷新两次，不过也不建议使用此函数，可以使用a标签代替
	    goto: function goto(path) {
	        // 如果path不是已#/开头，且不是/开头，则加上#/
	        path = path.indexOf('#/') !== 0 ? path.indexOf('/') !== 0 ? '#/' + path : path : path;
	        var nowPath = window.location.hash;
	        if (path !== nowPath && path !== '') {
	            // 之所以不用hashHistory.push()是因为会自动执行两次push
	            window.location.href = path;
	        }
	    },

	    // 获取数据的类型，返回的类型名称为全小写
	    // 包括：object、array、function、null、undefined、regexp、number、string、boolean、date ...
	    getType: function getType(value) {
	        return {}.toString.call(value).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	    },

	    // 判断 value 是否为指定类型
	    // type 可以为一个字符串或者一个数组
	    typeof: function _typeof(value, type) {
	        if (this.getType(type) === 'string') {
	            return this.getType(value) === type;
	        } else if (this.getType(type) === 'array') {
	            return type.indexOf(this.getType(value)) !== -1;
	        } else {
	            return false;
	        }
	    },

	    // 把中横线命名的字符串转换成帕斯卡命名形式
	    toPascal: function toPascal(str) {
	        return str.split('-').map(function (i) {
	            return i.replace(/^\w/g, function (v) {
	                return v.toUpperCase();
	            });
	        }).join('');
	    },

	    // 判断组件是否继承自某个类（类名）
	    // 根据组件的引用（通过import获得）判断，支持深层查找
	    isExtendsOf: function isExtendsOf(item, superName) {
	        // item.prototype.constructor.__proto__.__proto__.name
	        var Item = item.prototype && item.prototype.constructor;
	        while (Item) {
	            if (Item.name === superName) {
	                return true;
	            }
	            Item = Item.__proto__;
	        };
	        return false;
	    }
	};

	exports.default = Utils;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ajax = undefined;

	exports.default = function (url, method) {
	    return function (params, success, error, onchange) {
	        request({
	            url: url,
	            method: method,
	            data: params,
	            type: 'json',
	            onchange: onchange,
	            success: success,
	            error: error
	        });
	    };
	};

	var _antd = __webpack_require__(14);

	var _reqwest = __webpack_require__(15);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file 通用的请求发送+错误处理工具
	 *       全部请求都通过这里处理
	 *       request参数为一个对象，即reqwest这个库需要的参数的对象
	 *          但是有几个参数需要注意：
	 *              success: 不是指请求成功执行的函数，而是请求的数据符合预期，可以正常使用的处理函数(即 'HTTP Status Code' === 200 && data.status === 0)
	 *              error:   除了请求出错，还有请求不符合预期都会触发error (即 'HTTP Status Code' !== 200 || data.status !== 0)
	 *                       >> tips: 如果error执行完返回true，则会继续执行默认的error处理函数
	 *              onchange: 请求开始/结束时执行。
	 *                      开始执行请求时执行 onchange 参数为 (true, 'sending'); 
	 *                      请求完成时执行 onchange 参数为 (false, 'success'/'error')
	 *
	 * @author liuzechun@baidu.com
	 * **/
	var errorMsg = {
	    top: 24,
	    message: '请求出错:',
	    description: '请求数据时出错，请稍后重试。',
	    duration: 3.5
	};

	// 请求出错的处理函数
	function errorHandler() {
	    var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _antd.notification.error(Object.assign({}, errorMsg, !error.message ? null : {
	        description: error.message
	    }));
	}

	function request(config) {
	    var _success = config.success;
	    var _error = config.error || errorHandler;
	    // onchange 为请求前后执行，开始执行请求返回参数true，请求完成返回参数false
	    var onchange = config.onchange || function () {
	        return;
	    };

	    onchange(true, 'sending');
	    (0, _reqwest2.default)(Object.assign({}, config, {
	        success: function success(res) {
	            // 兼容 message/msg、status/code
	            res.status = res.status || res.code || 0;
	            res.message = res.message || res.msg;
	            if (+res.status === 0) {
	                _success(res.data, res);
	            } else {
	                // 如果错误处理函数返回 true，则继续执行 errorHandle 把错误提示抛出
	                if (_error(res) === true) {
	                    errorHandler(res);
	                }
	            }
	            onchange(false, 'success');
	        },
	        error: function error(err) {
	            _error(err, err);
	            onchange(false, 'error');
	        }
	    }));
	};

	// 通用ajax函数，参数为一个对象
	var ajax = exports.ajax = request;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = window.DLL.Antd;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = window.DLL.reqwest;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @file 数据共享类
	 * Created by xuziqian on 2017/8/4.
	 */
	exports.default = {
	    _catch: {},
	    set: function set(key, data) {
	        this._catch[key] = data;
	        // console.log(this._catch);
	    },
	    get: function get(key, data) {
	        return this._catch[key];
	    },
	    del: function del(key) {
	        delete this._catch[key];
	    }
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.18.1
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com

	;(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, (function () { 'use strict';

	var hookCallback;

	function hooks () {
	    return hookCallback.apply(null, arguments);
	}

	// This is done to register the method called with moment()
	// without creating circular dependencies.
	function setHookCallback (callback) {
	    hookCallback = callback;
	}

	function isArray(input) {
	    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	}

	function isObject(input) {
	    // IE8 will treat undefined and null as object if it wasn't for
	    // input != null
	    return input != null && Object.prototype.toString.call(input) === '[object Object]';
	}

	function isObjectEmpty(obj) {
	    var k;
	    for (k in obj) {
	        // even if its not own property I'd still call it non-empty
	        return false;
	    }
	    return true;
	}

	function isUndefined(input) {
	    return input === void 0;
	}

	function isNumber(input) {
	    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
	}

	function isDate(input) {
	    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	}

	function map(arr, fn) {
	    var res = [], i;
	    for (i = 0; i < arr.length; ++i) {
	        res.push(fn(arr[i], i));
	    }
	    return res;
	}

	function hasOwnProp(a, b) {
	    return Object.prototype.hasOwnProperty.call(a, b);
	}

	function extend(a, b) {
	    for (var i in b) {
	        if (hasOwnProp(b, i)) {
	            a[i] = b[i];
	        }
	    }

	    if (hasOwnProp(b, 'toString')) {
	        a.toString = b.toString;
	    }

	    if (hasOwnProp(b, 'valueOf')) {
	        a.valueOf = b.valueOf;
	    }

	    return a;
	}

	function createUTC (input, format, locale, strict) {
	    return createLocalOrUTC(input, format, locale, strict, true).utc();
	}

	function defaultParsingFlags() {
	    // We need to deep clone this object.
	    return {
	        empty           : false,
	        unusedTokens    : [],
	        unusedInput     : [],
	        overflow        : -2,
	        charsLeftOver   : 0,
	        nullInput       : false,
	        invalidMonth    : null,
	        invalidFormat   : false,
	        userInvalidated : false,
	        iso             : false,
	        parsedDateParts : [],
	        meridiem        : null,
	        rfc2822         : false,
	        weekdayMismatch : false
	    };
	}

	function getParsingFlags(m) {
	    if (m._pf == null) {
	        m._pf = defaultParsingFlags();
	    }
	    return m._pf;
	}

	var some;
	if (Array.prototype.some) {
	    some = Array.prototype.some;
	} else {
	    some = function (fun) {
	        var t = Object(this);
	        var len = t.length >>> 0;

	        for (var i = 0; i < len; i++) {
	            if (i in t && fun.call(this, t[i], i, t)) {
	                return true;
	            }
	        }

	        return false;
	    };
	}

	var some$1 = some;

	function isValid(m) {
	    if (m._isValid == null) {
	        var flags = getParsingFlags(m);
	        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
	            return i != null;
	        });
	        var isNowValid = !isNaN(m._d.getTime()) &&
	            flags.overflow < 0 &&
	            !flags.empty &&
	            !flags.invalidMonth &&
	            !flags.invalidWeekday &&
	            !flags.nullInput &&
	            !flags.invalidFormat &&
	            !flags.userInvalidated &&
	            (!flags.meridiem || (flags.meridiem && parsedParts));

	        if (m._strict) {
	            isNowValid = isNowValid &&
	                flags.charsLeftOver === 0 &&
	                flags.unusedTokens.length === 0 &&
	                flags.bigHour === undefined;
	        }

	        if (Object.isFrozen == null || !Object.isFrozen(m)) {
	            m._isValid = isNowValid;
	        }
	        else {
	            return isNowValid;
	        }
	    }
	    return m._isValid;
	}

	function createInvalid (flags) {
	    var m = createUTC(NaN);
	    if (flags != null) {
	        extend(getParsingFlags(m), flags);
	    }
	    else {
	        getParsingFlags(m).userInvalidated = true;
	    }

	    return m;
	}

	// Plugins that add properties should also add the key here (null value),
	// so we can properly clone ourselves.
	var momentProperties = hooks.momentProperties = [];

	function copyConfig(to, from) {
	    var i, prop, val;

	    if (!isUndefined(from._isAMomentObject)) {
	        to._isAMomentObject = from._isAMomentObject;
	    }
	    if (!isUndefined(from._i)) {
	        to._i = from._i;
	    }
	    if (!isUndefined(from._f)) {
	        to._f = from._f;
	    }
	    if (!isUndefined(from._l)) {
	        to._l = from._l;
	    }
	    if (!isUndefined(from._strict)) {
	        to._strict = from._strict;
	    }
	    if (!isUndefined(from._tzm)) {
	        to._tzm = from._tzm;
	    }
	    if (!isUndefined(from._isUTC)) {
	        to._isUTC = from._isUTC;
	    }
	    if (!isUndefined(from._offset)) {
	        to._offset = from._offset;
	    }
	    if (!isUndefined(from._pf)) {
	        to._pf = getParsingFlags(from);
	    }
	    if (!isUndefined(from._locale)) {
	        to._locale = from._locale;
	    }

	    if (momentProperties.length > 0) {
	        for (i = 0; i < momentProperties.length; i++) {
	            prop = momentProperties[i];
	            val = from[prop];
	            if (!isUndefined(val)) {
	                to[prop] = val;
	            }
	        }
	    }

	    return to;
	}

	var updateInProgress = false;

	// Moment prototype object
	function Moment(config) {
	    copyConfig(this, config);
	    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	    if (!this.isValid()) {
	        this._d = new Date(NaN);
	    }
	    // Prevent infinite loop in case updateOffset creates new moment
	    // objects.
	    if (updateInProgress === false) {
	        updateInProgress = true;
	        hooks.updateOffset(this);
	        updateInProgress = false;
	    }
	}

	function isMoment (obj) {
	    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	}

	function absFloor (number) {
	    if (number < 0) {
	        // -0 -> 0
	        return Math.ceil(number) || 0;
	    } else {
	        return Math.floor(number);
	    }
	}

	function toInt(argumentForCoercion) {
	    var coercedNumber = +argumentForCoercion,
	        value = 0;

	    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	        value = absFloor(coercedNumber);
	    }

	    return value;
	}

	// compare two arrays, return the number of differences
	function compareArrays(array1, array2, dontConvert) {
	    var len = Math.min(array1.length, array2.length),
	        lengthDiff = Math.abs(array1.length - array2.length),
	        diffs = 0,
	        i;
	    for (i = 0; i < len; i++) {
	        if ((dontConvert && array1[i] !== array2[i]) ||
	            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	            diffs++;
	        }
	    }
	    return diffs + lengthDiff;
	}

	function warn(msg) {
	    if (hooks.suppressDeprecationWarnings === false &&
	            (typeof console !==  'undefined') && console.warn) {
	        console.warn('Deprecation warning: ' + msg);
	    }
	}

	function deprecate(msg, fn) {
	    var firstTime = true;

	    return extend(function () {
	        if (hooks.deprecationHandler != null) {
	            hooks.deprecationHandler(null, msg);
	        }
	        if (firstTime) {
	            var args = [];
	            var arg;
	            for (var i = 0; i < arguments.length; i++) {
	                arg = '';
	                if (typeof arguments[i] === 'object') {
	                    arg += '\n[' + i + '] ';
	                    for (var key in arguments[0]) {
	                        arg += key + ': ' + arguments[0][key] + ', ';
	                    }
	                    arg = arg.slice(0, -2); // Remove trailing comma and space
	                } else {
	                    arg = arguments[i];
	                }
	                args.push(arg);
	            }
	            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
	            firstTime = false;
	        }
	        return fn.apply(this, arguments);
	    }, fn);
	}

	var deprecations = {};

	function deprecateSimple(name, msg) {
	    if (hooks.deprecationHandler != null) {
	        hooks.deprecationHandler(name, msg);
	    }
	    if (!deprecations[name]) {
	        warn(msg);
	        deprecations[name] = true;
	    }
	}

	hooks.suppressDeprecationWarnings = false;
	hooks.deprecationHandler = null;

	function isFunction(input) {
	    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	}

	function set (config) {
	    var prop, i;
	    for (i in config) {
	        prop = config[i];
	        if (isFunction(prop)) {
	            this[i] = prop;
	        } else {
	            this['_' + i] = prop;
	        }
	    }
	    this._config = config;
	    // Lenient ordinal parsing accepts just a number in addition to
	    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
	    // TODO: Remove "ordinalParse" fallback in next major release.
	    this._dayOfMonthOrdinalParseLenient = new RegExp(
	        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
	            '|' + (/\d{1,2}/).source);
	}

	function mergeConfigs(parentConfig, childConfig) {
	    var res = extend({}, parentConfig), prop;
	    for (prop in childConfig) {
	        if (hasOwnProp(childConfig, prop)) {
	            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                res[prop] = {};
	                extend(res[prop], parentConfig[prop]);
	                extend(res[prop], childConfig[prop]);
	            } else if (childConfig[prop] != null) {
	                res[prop] = childConfig[prop];
	            } else {
	                delete res[prop];
	            }
	        }
	    }
	    for (prop in parentConfig) {
	        if (hasOwnProp(parentConfig, prop) &&
	                !hasOwnProp(childConfig, prop) &&
	                isObject(parentConfig[prop])) {
	            // make sure changes to properties don't modify parent config
	            res[prop] = extend({}, res[prop]);
	        }
	    }
	    return res;
	}

	function Locale(config) {
	    if (config != null) {
	        this.set(config);
	    }
	}

	var keys;

	if (Object.keys) {
	    keys = Object.keys;
	} else {
	    keys = function (obj) {
	        var i, res = [];
	        for (i in obj) {
	            if (hasOwnProp(obj, i)) {
	                res.push(i);
	            }
	        }
	        return res;
	    };
	}

	var keys$1 = keys;

	var defaultCalendar = {
	    sameDay : '[Today at] LT',
	    nextDay : '[Tomorrow at] LT',
	    nextWeek : 'dddd [at] LT',
	    lastDay : '[Yesterday at] LT',
	    lastWeek : '[Last] dddd [at] LT',
	    sameElse : 'L'
	};

	function calendar (key, mom, now) {
	    var output = this._calendar[key] || this._calendar['sameElse'];
	    return isFunction(output) ? output.call(mom, now) : output;
	}

	var defaultLongDateFormat = {
	    LTS  : 'h:mm:ss A',
	    LT   : 'h:mm A',
	    L    : 'MM/DD/YYYY',
	    LL   : 'MMMM D, YYYY',
	    LLL  : 'MMMM D, YYYY h:mm A',
	    LLLL : 'dddd, MMMM D, YYYY h:mm A'
	};

	function longDateFormat (key) {
	    var format = this._longDateFormat[key],
	        formatUpper = this._longDateFormat[key.toUpperCase()];

	    if (format || !formatUpper) {
	        return format;
	    }

	    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
	        return val.slice(1);
	    });

	    return this._longDateFormat[key];
	}

	var defaultInvalidDate = 'Invalid date';

	function invalidDate () {
	    return this._invalidDate;
	}

	var defaultOrdinal = '%d';
	var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

	function ordinal (number) {
	    return this._ordinal.replace('%d', number);
	}

	var defaultRelativeTime = {
	    future : 'in %s',
	    past   : '%s ago',
	    s  : 'a few seconds',
	    ss : '%d seconds',
	    m  : 'a minute',
	    mm : '%d minutes',
	    h  : 'an hour',
	    hh : '%d hours',
	    d  : 'a day',
	    dd : '%d days',
	    M  : 'a month',
	    MM : '%d months',
	    y  : 'a year',
	    yy : '%d years'
	};

	function relativeTime (number, withoutSuffix, string, isFuture) {
	    var output = this._relativeTime[string];
	    return (isFunction(output)) ?
	        output(number, withoutSuffix, string, isFuture) :
	        output.replace(/%d/i, number);
	}

	function pastFuture (diff, output) {
	    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	}

	var aliases = {};

	function addUnitAlias (unit, shorthand) {
	    var lowerCase = unit.toLowerCase();
	    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	}

	function normalizeUnits(units) {
	    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	}

	function normalizeObjectUnits(inputObject) {
	    var normalizedInput = {},
	        normalizedProp,
	        prop;

	    for (prop in inputObject) {
	        if (hasOwnProp(inputObject, prop)) {
	            normalizedProp = normalizeUnits(prop);
	            if (normalizedProp) {
	                normalizedInput[normalizedProp] = inputObject[prop];
	            }
	        }
	    }

	    return normalizedInput;
	}

	var priorities = {};

	function addUnitPriority(unit, priority) {
	    priorities[unit] = priority;
	}

	function getPrioritizedUnits(unitsObj) {
	    var units = [];
	    for (var u in unitsObj) {
	        units.push({unit: u, priority: priorities[u]});
	    }
	    units.sort(function (a, b) {
	        return a.priority - b.priority;
	    });
	    return units;
	}

	function makeGetSet (unit, keepTime) {
	    return function (value) {
	        if (value != null) {
	            set$1(this, unit, value);
	            hooks.updateOffset(this, keepTime);
	            return this;
	        } else {
	            return get(this, unit);
	        }
	    };
	}

	function get (mom, unit) {
	    return mom.isValid() ?
	        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	}

	function set$1 (mom, unit, value) {
	    if (mom.isValid()) {
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	    }
	}

	// MOMENTS

	function stringGet (units) {
	    units = normalizeUnits(units);
	    if (isFunction(this[units])) {
	        return this[units]();
	    }
	    return this;
	}


	function stringSet (units, value) {
	    if (typeof units === 'object') {
	        units = normalizeObjectUnits(units);
	        var prioritized = getPrioritizedUnits(units);
	        for (var i = 0; i < prioritized.length; i++) {
	            this[prioritized[i].unit](units[prioritized[i].unit]);
	        }
	    } else {
	        units = normalizeUnits(units);
	        if (isFunction(this[units])) {
	            return this[units](value);
	        }
	    }
	    return this;
	}

	function zeroFill(number, targetLength, forceSign) {
	    var absNumber = '' + Math.abs(number),
	        zerosToFill = targetLength - absNumber.length,
	        sign = number >= 0;
	    return (sign ? (forceSign ? '+' : '') : '-') +
	        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	}

	var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

	var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

	var formatFunctions = {};

	var formatTokenFunctions = {};

	// token:    'M'
	// padded:   ['MM', 2]
	// ordinal:  'Mo'
	// callback: function () { this.month() + 1 }
	function addFormatToken (token, padded, ordinal, callback) {
	    var func = callback;
	    if (typeof callback === 'string') {
	        func = function () {
	            return this[callback]();
	        };
	    }
	    if (token) {
	        formatTokenFunctions[token] = func;
	    }
	    if (padded) {
	        formatTokenFunctions[padded[0]] = function () {
	            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	        };
	    }
	    if (ordinal) {
	        formatTokenFunctions[ordinal] = function () {
	            return this.localeData().ordinal(func.apply(this, arguments), token);
	        };
	    }
	}

	function removeFormattingTokens(input) {
	    if (input.match(/\[[\s\S]/)) {
	        return input.replace(/^\[|\]$/g, '');
	    }
	    return input.replace(/\\/g, '');
	}

	function makeFormatFunction(format) {
	    var array = format.match(formattingTokens), i, length;

	    for (i = 0, length = array.length; i < length; i++) {
	        if (formatTokenFunctions[array[i]]) {
	            array[i] = formatTokenFunctions[array[i]];
	        } else {
	            array[i] = removeFormattingTokens(array[i]);
	        }
	    }

	    return function (mom) {
	        var output = '', i;
	        for (i = 0; i < length; i++) {
	            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
	        }
	        return output;
	    };
	}

	// format date using native date object
	function formatMoment(m, format) {
	    if (!m.isValid()) {
	        return m.localeData().invalidDate();
	    }

	    format = expandFormat(format, m.localeData());
	    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

	    return formatFunctions[format](m);
	}

	function expandFormat(format, locale) {
	    var i = 5;

	    function replaceLongDateFormatTokens(input) {
	        return locale.longDateFormat(input) || input;
	    }

	    localFormattingTokens.lastIndex = 0;
	    while (i >= 0 && localFormattingTokens.test(format)) {
	        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	        localFormattingTokens.lastIndex = 0;
	        i -= 1;
	    }

	    return format;
	}

	var match1         = /\d/;            //       0 - 9
	var match2         = /\d\d/;          //      00 - 99
	var match3         = /\d{3}/;         //     000 - 999
	var match4         = /\d{4}/;         //    0000 - 9999
	var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	var match1to2      = /\d\d?/;         //       0 - 99
	var match3to4      = /\d\d\d\d?/;     //     999 - 9999
	var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
	var match1to3      = /\d{1,3}/;       //       0 - 999
	var match1to4      = /\d{1,4}/;       //       0 - 9999
	var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

	var matchUnsigned  = /\d+/;           //       0 - inf
	var matchSigned    = /[+-]?\d+/;      //    -inf - inf

	var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

	var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

	// any word (or two) characters or numbers including two/three word month in arabic.
	// includes scottish gaelic two word and hyphenated months
	var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


	var regexes = {};

	function addRegexToken (token, regex, strictRegex) {
	    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
	        return (isStrict && strictRegex) ? strictRegex : regex;
	    };
	}

	function getParseRegexForToken (token, config) {
	    if (!hasOwnProp(regexes, token)) {
	        return new RegExp(unescapeFormat(token));
	    }

	    return regexes[token](config._strict, config._locale);
	}

	// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	function unescapeFormat(s) {
	    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	        return p1 || p2 || p3 || p4;
	    }));
	}

	function regexEscape(s) {
	    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	}

	var tokens = {};

	function addParseToken (token, callback) {
	    var i, func = callback;
	    if (typeof token === 'string') {
	        token = [token];
	    }
	    if (isNumber(callback)) {
	        func = function (input, array) {
	            array[callback] = toInt(input);
	        };
	    }
	    for (i = 0; i < token.length; i++) {
	        tokens[token[i]] = func;
	    }
	}

	function addWeekParseToken (token, callback) {
	    addParseToken(token, function (input, array, config, token) {
	        config._w = config._w || {};
	        callback(input, config._w, config, token);
	    });
	}

	function addTimeToArrayFromToken(token, input, config) {
	    if (input != null && hasOwnProp(tokens, token)) {
	        tokens[token](input, config._a, config, token);
	    }
	}

	var YEAR = 0;
	var MONTH = 1;
	var DATE = 2;
	var HOUR = 3;
	var MINUTE = 4;
	var SECOND = 5;
	var MILLISECOND = 6;
	var WEEK = 7;
	var WEEKDAY = 8;

	var indexOf;

	if (Array.prototype.indexOf) {
	    indexOf = Array.prototype.indexOf;
	} else {
	    indexOf = function (o) {
	        // I know
	        var i;
	        for (i = 0; i < this.length; ++i) {
	            if (this[i] === o) {
	                return i;
	            }
	        }
	        return -1;
	    };
	}

	var indexOf$1 = indexOf;

	function daysInMonth(year, month) {
	    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	}

	// FORMATTING

	addFormatToken('M', ['MM', 2], 'Mo', function () {
	    return this.month() + 1;
	});

	addFormatToken('MMM', 0, 0, function (format) {
	    return this.localeData().monthsShort(this, format);
	});

	addFormatToken('MMMM', 0, 0, function (format) {
	    return this.localeData().months(this, format);
	});

	// ALIASES

	addUnitAlias('month', 'M');

	// PRIORITY

	addUnitPriority('month', 8);

	// PARSING

	addRegexToken('M',    match1to2);
	addRegexToken('MM',   match1to2, match2);
	addRegexToken('MMM',  function (isStrict, locale) {
	    return locale.monthsShortRegex(isStrict);
	});
	addRegexToken('MMMM', function (isStrict, locale) {
	    return locale.monthsRegex(isStrict);
	});

	addParseToken(['M', 'MM'], function (input, array) {
	    array[MONTH] = toInt(input) - 1;
	});

	addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	    var month = config._locale.monthsParse(input, token, config._strict);
	    // if we didn't find a month name, mark the date as invalid.
	    if (month != null) {
	        array[MONTH] = month;
	    } else {
	        getParsingFlags(config).invalidMonth = input;
	    }
	});

	// LOCALES

	var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
	var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	function localeMonths (m, format) {
	    if (!m) {
	        return isArray(this._months) ? this._months :
	            this._months['standalone'];
	    }
	    return isArray(this._months) ? this._months[m.month()] :
	        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
	}

	var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	function localeMonthsShort (m, format) {
	    if (!m) {
	        return isArray(this._monthsShort) ? this._monthsShort :
	            this._monthsShort['standalone'];
	    }
	    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
	        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	}

	function handleStrictParse(monthName, format, strict) {
	    var i, ii, mom, llc = monthName.toLocaleLowerCase();
	    if (!this._monthsParse) {
	        // this is not used
	        this._monthsParse = [];
	        this._longMonthsParse = [];
	        this._shortMonthsParse = [];
	        for (i = 0; i < 12; ++i) {
	            mom = createUTC([2000, i]);
	            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
	            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	        }
	    }

	    if (strict) {
	        if (format === 'MMM') {
	            ii = indexOf$1.call(this._shortMonthsParse, llc);
	            return ii !== -1 ? ii : null;
	        } else {
	            ii = indexOf$1.call(this._longMonthsParse, llc);
	            return ii !== -1 ? ii : null;
	        }
	    } else {
	        if (format === 'MMM') {
	            ii = indexOf$1.call(this._shortMonthsParse, llc);
	            if (ii !== -1) {
	                return ii;
	            }
	            ii = indexOf$1.call(this._longMonthsParse, llc);
	            return ii !== -1 ? ii : null;
	        } else {
	            ii = indexOf$1.call(this._longMonthsParse, llc);
	            if (ii !== -1) {
	                return ii;
	            }
	            ii = indexOf$1.call(this._shortMonthsParse, llc);
	            return ii !== -1 ? ii : null;
	        }
	    }
	}

	function localeMonthsParse (monthName, format, strict) {
	    var i, mom, regex;

	    if (this._monthsParseExact) {
	        return handleStrictParse.call(this, monthName, format, strict);
	    }

	    if (!this._monthsParse) {
	        this._monthsParse = [];
	        this._longMonthsParse = [];
	        this._shortMonthsParse = [];
	    }

	    // TODO: add sorting
	    // Sorting makes sure if one month (or abbr) is a prefix of another
	    // see sorting in computeMonthsParse
	    for (i = 0; i < 12; i++) {
	        // make the regex if we don't have it already
	        mom = createUTC([2000, i]);
	        if (strict && !this._longMonthsParse[i]) {
	            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	        }
	        if (!strict && !this._monthsParse[i]) {
	            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	        }
	        // test the regex
	        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	            return i;
	        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	            return i;
	        } else if (!strict && this._monthsParse[i].test(monthName)) {
	            return i;
	        }
	    }
	}

	// MOMENTS

	function setMonth (mom, value) {
	    var dayOfMonth;

	    if (!mom.isValid()) {
	        // No op
	        return mom;
	    }

	    if (typeof value === 'string') {
	        if (/^\d+$/.test(value)) {
	            value = toInt(value);
	        } else {
	            value = mom.localeData().monthsParse(value);
	            // TODO: Another silent failure?
	            if (!isNumber(value)) {
	                return mom;
	            }
	        }
	    }

	    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	    return mom;
	}

	function getSetMonth (value) {
	    if (value != null) {
	        setMonth(this, value);
	        hooks.updateOffset(this, true);
	        return this;
	    } else {
	        return get(this, 'Month');
	    }
	}

	function getDaysInMonth () {
	    return daysInMonth(this.year(), this.month());
	}

	var defaultMonthsShortRegex = matchWord;
	function monthsShortRegex (isStrict) {
	    if (this._monthsParseExact) {
	        if (!hasOwnProp(this, '_monthsRegex')) {
	            computeMonthsParse.call(this);
	        }
	        if (isStrict) {
	            return this._monthsShortStrictRegex;
	        } else {
	            return this._monthsShortRegex;
	        }
	    } else {
	        if (!hasOwnProp(this, '_monthsShortRegex')) {
	            this._monthsShortRegex = defaultMonthsShortRegex;
	        }
	        return this._monthsShortStrictRegex && isStrict ?
	            this._monthsShortStrictRegex : this._monthsShortRegex;
	    }
	}

	var defaultMonthsRegex = matchWord;
	function monthsRegex (isStrict) {
	    if (this._monthsParseExact) {
	        if (!hasOwnProp(this, '_monthsRegex')) {
	            computeMonthsParse.call(this);
	        }
	        if (isStrict) {
	            return this._monthsStrictRegex;
	        } else {
	            return this._monthsRegex;
	        }
	    } else {
	        if (!hasOwnProp(this, '_monthsRegex')) {
	            this._monthsRegex = defaultMonthsRegex;
	        }
	        return this._monthsStrictRegex && isStrict ?
	            this._monthsStrictRegex : this._monthsRegex;
	    }
	}

	function computeMonthsParse () {
	    function cmpLenRev(a, b) {
	        return b.length - a.length;
	    }

	    var shortPieces = [], longPieces = [], mixedPieces = [],
	        i, mom;
	    for (i = 0; i < 12; i++) {
	        // make the regex if we don't have it already
	        mom = createUTC([2000, i]);
	        shortPieces.push(this.monthsShort(mom, ''));
	        longPieces.push(this.months(mom, ''));
	        mixedPieces.push(this.months(mom, ''));
	        mixedPieces.push(this.monthsShort(mom, ''));
	    }
	    // Sorting makes sure if one month (or abbr) is a prefix of another it
	    // will match the longer piece.
	    shortPieces.sort(cmpLenRev);
	    longPieces.sort(cmpLenRev);
	    mixedPieces.sort(cmpLenRev);
	    for (i = 0; i < 12; i++) {
	        shortPieces[i] = regexEscape(shortPieces[i]);
	        longPieces[i] = regexEscape(longPieces[i]);
	    }
	    for (i = 0; i < 24; i++) {
	        mixedPieces[i] = regexEscape(mixedPieces[i]);
	    }

	    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	    this._monthsShortRegex = this._monthsRegex;
	    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	}

	// FORMATTING

	addFormatToken('Y', 0, 0, function () {
	    var y = this.year();
	    return y <= 9999 ? '' + y : '+' + y;
	});

	addFormatToken(0, ['YY', 2], 0, function () {
	    return this.year() % 100;
	});

	addFormatToken(0, ['YYYY',   4],       0, 'year');
	addFormatToken(0, ['YYYYY',  5],       0, 'year');
	addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

	// ALIASES

	addUnitAlias('year', 'y');

	// PRIORITIES

	addUnitPriority('year', 1);

	// PARSING

	addRegexToken('Y',      matchSigned);
	addRegexToken('YY',     match1to2, match2);
	addRegexToken('YYYY',   match1to4, match4);
	addRegexToken('YYYYY',  match1to6, match6);
	addRegexToken('YYYYYY', match1to6, match6);

	addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	addParseToken('YYYY', function (input, array) {
	    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
	});
	addParseToken('YY', function (input, array) {
	    array[YEAR] = hooks.parseTwoDigitYear(input);
	});
	addParseToken('Y', function (input, array) {
	    array[YEAR] = parseInt(input, 10);
	});

	// HELPERS

	function daysInYear(year) {
	    return isLeapYear(year) ? 366 : 365;
	}

	function isLeapYear(year) {
	    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}

	// HOOKS

	hooks.parseTwoDigitYear = function (input) {
	    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	};

	// MOMENTS

	var getSetYear = makeGetSet('FullYear', true);

	function getIsLeapYear () {
	    return isLeapYear(this.year());
	}

	function createDate (y, m, d, h, M, s, ms) {
	    // can't just apply() to create a date:
	    // https://stackoverflow.com/q/181348
	    var date = new Date(y, m, d, h, M, s, ms);

	    // the date constructor remaps years 0-99 to 1900-1999
	    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
	        date.setFullYear(y);
	    }
	    return date;
	}

	function createUTCDate (y) {
	    var date = new Date(Date.UTC.apply(null, arguments));

	    // the Date.UTC function remaps years 0-99 to 1900-1999
	    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
	        date.setUTCFullYear(y);
	    }
	    return date;
	}

	// start-of-first-week - start-of-year
	function firstWeekOffset(year, dow, doy) {
	    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	        fwd = 7 + dow - doy,
	        // first-week day local weekday -- which local weekday is fwd
	        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

	    return -fwdlw + fwd - 1;
	}

	// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	    var localWeekday = (7 + weekday - dow) % 7,
	        weekOffset = firstWeekOffset(year, dow, doy),
	        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	        resYear, resDayOfYear;

	    if (dayOfYear <= 0) {
	        resYear = year - 1;
	        resDayOfYear = daysInYear(resYear) + dayOfYear;
	    } else if (dayOfYear > daysInYear(year)) {
	        resYear = year + 1;
	        resDayOfYear = dayOfYear - daysInYear(year);
	    } else {
	        resYear = year;
	        resDayOfYear = dayOfYear;
	    }

	    return {
	        year: resYear,
	        dayOfYear: resDayOfYear
	    };
	}

	function weekOfYear(mom, dow, doy) {
	    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	        resWeek, resYear;

	    if (week < 1) {
	        resYear = mom.year() - 1;
	        resWeek = week + weeksInYear(resYear, dow, doy);
	    } else if (week > weeksInYear(mom.year(), dow, doy)) {
	        resWeek = week - weeksInYear(mom.year(), dow, doy);
	        resYear = mom.year() + 1;
	    } else {
	        resYear = mom.year();
	        resWeek = week;
	    }

	    return {
	        week: resWeek,
	        year: resYear
	    };
	}

	function weeksInYear(year, dow, doy) {
	    var weekOffset = firstWeekOffset(year, dow, doy),
	        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	}

	// FORMATTING

	addFormatToken('w', ['ww', 2], 'wo', 'week');
	addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

	// ALIASES

	addUnitAlias('week', 'w');
	addUnitAlias('isoWeek', 'W');

	// PRIORITIES

	addUnitPriority('week', 5);
	addUnitPriority('isoWeek', 5);

	// PARSING

	addRegexToken('w',  match1to2);
	addRegexToken('ww', match1to2, match2);
	addRegexToken('W',  match1to2);
	addRegexToken('WW', match1to2, match2);

	addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	    week[token.substr(0, 1)] = toInt(input);
	});

	// HELPERS

	// LOCALES

	function localeWeek (mom) {
	    return weekOfYear(mom, this._week.dow, this._week.doy).week;
	}

	var defaultLocaleWeek = {
	    dow : 0, // Sunday is the first day of the week.
	    doy : 6  // The week that contains Jan 1st is the first week of the year.
	};

	function localeFirstDayOfWeek () {
	    return this._week.dow;
	}

	function localeFirstDayOfYear () {
	    return this._week.doy;
	}

	// MOMENTS

	function getSetWeek (input) {
	    var week = this.localeData().week(this);
	    return input == null ? week : this.add((input - week) * 7, 'd');
	}

	function getSetISOWeek (input) {
	    var week = weekOfYear(this, 1, 4).week;
	    return input == null ? week : this.add((input - week) * 7, 'd');
	}

	// FORMATTING

	addFormatToken('d', 0, 'do', 'day');

	addFormatToken('dd', 0, 0, function (format) {
	    return this.localeData().weekdaysMin(this, format);
	});

	addFormatToken('ddd', 0, 0, function (format) {
	    return this.localeData().weekdaysShort(this, format);
	});

	addFormatToken('dddd', 0, 0, function (format) {
	    return this.localeData().weekdays(this, format);
	});

	addFormatToken('e', 0, 0, 'weekday');
	addFormatToken('E', 0, 0, 'isoWeekday');

	// ALIASES

	addUnitAlias('day', 'd');
	addUnitAlias('weekday', 'e');
	addUnitAlias('isoWeekday', 'E');

	// PRIORITY
	addUnitPriority('day', 11);
	addUnitPriority('weekday', 11);
	addUnitPriority('isoWeekday', 11);

	// PARSING

	addRegexToken('d',    match1to2);
	addRegexToken('e',    match1to2);
	addRegexToken('E',    match1to2);
	addRegexToken('dd',   function (isStrict, locale) {
	    return locale.weekdaysMinRegex(isStrict);
	});
	addRegexToken('ddd',   function (isStrict, locale) {
	    return locale.weekdaysShortRegex(isStrict);
	});
	addRegexToken('dddd',   function (isStrict, locale) {
	    return locale.weekdaysRegex(isStrict);
	});

	addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	    var weekday = config._locale.weekdaysParse(input, token, config._strict);
	    // if we didn't get a weekday name, mark the date as invalid
	    if (weekday != null) {
	        week.d = weekday;
	    } else {
	        getParsingFlags(config).invalidWeekday = input;
	    }
	});

	addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	    week[token] = toInt(input);
	});

	// HELPERS

	function parseWeekday(input, locale) {
	    if (typeof input !== 'string') {
	        return input;
	    }

	    if (!isNaN(input)) {
	        return parseInt(input, 10);
	    }

	    input = locale.weekdaysParse(input);
	    if (typeof input === 'number') {
	        return input;
	    }

	    return null;
	}

	function parseIsoWeekday(input, locale) {
	    if (typeof input === 'string') {
	        return locale.weekdaysParse(input) % 7 || 7;
	    }
	    return isNaN(input) ? null : input;
	}

	// LOCALES

	var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	function localeWeekdays (m, format) {
	    if (!m) {
	        return isArray(this._weekdays) ? this._weekdays :
	            this._weekdays['standalone'];
	    }
	    return isArray(this._weekdays) ? this._weekdays[m.day()] :
	        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
	}

	var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	function localeWeekdaysShort (m) {
	    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
	}

	var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	function localeWeekdaysMin (m) {
	    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
	}

	function handleStrictParse$1(weekdayName, format, strict) {
	    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
	    if (!this._weekdaysParse) {
	        this._weekdaysParse = [];
	        this._shortWeekdaysParse = [];
	        this._minWeekdaysParse = [];

	        for (i = 0; i < 7; ++i) {
	            mom = createUTC([2000, 1]).day(i);
	            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
	            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
	            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	        }
	    }

	    if (strict) {
	        if (format === 'dddd') {
	            ii = indexOf$1.call(this._weekdaysParse, llc);
	            return ii !== -1 ? ii : null;
	        } else if (format === 'ddd') {
	            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
	            return ii !== -1 ? ii : null;
	        } else {
	            ii = indexOf$1.call(this._minWeekdaysParse, llc);
	            return ii !== -1 ? ii : null;
	        }
	    } else {
	        if (format === 'dddd') {
	            ii = indexOf$1.call(this._weekdaysParse, llc);
	            if (ii !== -1) {
	                return ii;
	            }
	            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
	            if (ii !== -1) {
	                return ii;
	            }
	            ii = indexOf$1.call(this._minWeekdaysParse, llc);
	            return ii !== -1 ? ii : null;
	        } else if (format === 'ddd') {
	            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
	            if (ii !== -1) {
	                return ii;
	            }
	            ii = indexOf$1.call(this._weekdaysParse, llc);
	            if (ii !== -1) {
	                return ii;
	            }
	            ii = indexOf$1.call(this._minWeekdaysParse, llc);
	            return ii !== -1 ? ii : null;
	        } else {
	            ii = indexOf$1.call(this._minWeekdaysParse, llc);
	            if (ii !== -1) {
	                return ii;
	            }
	            ii = indexOf$1.call(this._weekdaysParse, llc);
	            if (ii !== -1) {
	                return ii;
	            }
	            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
	            return ii !== -1 ? ii : null;
	        }
	    }
	}

	function localeWeekdaysParse (weekdayName, format, strict) {
	    var i, mom, regex;

	    if (this._weekdaysParseExact) {
	        return handleStrictParse$1.call(this, weekdayName, format, strict);
	    }

	    if (!this._weekdaysParse) {
	        this._weekdaysParse = [];
	        this._minWeekdaysParse = [];
	        this._shortWeekdaysParse = [];
	        this._fullWeekdaysParse = [];
	    }

	    for (i = 0; i < 7; i++) {
	        // make the regex if we don't have it already

	        mom = createUTC([2000, 1]).day(i);
	        if (strict && !this._fullWeekdaysParse[i]) {
	            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
	            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
	            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
	        }
	        if (!this._weekdaysParse[i]) {
	            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	        }
	        // test the regex
	        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
	            return i;
	        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
	            return i;
	        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
	            return i;
	        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	            return i;
	        }
	    }
	}

	// MOMENTS

	function getSetDayOfWeek (input) {
	    if (!this.isValid()) {
	        return input != null ? this : NaN;
	    }
	    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	    if (input != null) {
	        input = parseWeekday(input, this.localeData());
	        return this.add(input - day, 'd');
	    } else {
	        return day;
	    }
	}

	function getSetLocaleDayOfWeek (input) {
	    if (!this.isValid()) {
	        return input != null ? this : NaN;
	    }
	    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	    return input == null ? weekday : this.add(input - weekday, 'd');
	}

	function getSetISODayOfWeek (input) {
	    if (!this.isValid()) {
	        return input != null ? this : NaN;
	    }

	    // behaves the same as moment#day except
	    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	    // as a setter, sunday should belong to the previous week.

	    if (input != null) {
	        var weekday = parseIsoWeekday(input, this.localeData());
	        return this.day(this.day() % 7 ? weekday : weekday - 7);
	    } else {
	        return this.day() || 7;
	    }
	}

	var defaultWeekdaysRegex = matchWord;
	function weekdaysRegex (isStrict) {
	    if (this._weekdaysParseExact) {
	        if (!hasOwnProp(this, '_weekdaysRegex')) {
	            computeWeekdaysParse.call(this);
	        }
	        if (isStrict) {
	            return this._weekdaysStrictRegex;
	        } else {
	            return this._weekdaysRegex;
	        }
	    } else {
	        if (!hasOwnProp(this, '_weekdaysRegex')) {
	            this._weekdaysRegex = defaultWeekdaysRegex;
	        }
	        return this._weekdaysStrictRegex && isStrict ?
	            this._weekdaysStrictRegex : this._weekdaysRegex;
	    }
	}

	var defaultWeekdaysShortRegex = matchWord;
	function weekdaysShortRegex (isStrict) {
	    if (this._weekdaysParseExact) {
	        if (!hasOwnProp(this, '_weekdaysRegex')) {
	            computeWeekdaysParse.call(this);
	        }
	        if (isStrict) {
	            return this._weekdaysShortStrictRegex;
	        } else {
	            return this._weekdaysShortRegex;
	        }
	    } else {
	        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
	            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
	        }
	        return this._weekdaysShortStrictRegex && isStrict ?
	            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
	    }
	}

	var defaultWeekdaysMinRegex = matchWord;
	function weekdaysMinRegex (isStrict) {
	    if (this._weekdaysParseExact) {
	        if (!hasOwnProp(this, '_weekdaysRegex')) {
	            computeWeekdaysParse.call(this);
	        }
	        if (isStrict) {
	            return this._weekdaysMinStrictRegex;
	        } else {
	            return this._weekdaysMinRegex;
	        }
	    } else {
	        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
	            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
	        }
	        return this._weekdaysMinStrictRegex && isStrict ?
	            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
	    }
	}


	function computeWeekdaysParse () {
	    function cmpLenRev(a, b) {
	        return b.length - a.length;
	    }

	    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
	        i, mom, minp, shortp, longp;
	    for (i = 0; i < 7; i++) {
	        // make the regex if we don't have it already
	        mom = createUTC([2000, 1]).day(i);
	        minp = this.weekdaysMin(mom, '');
	        shortp = this.weekdaysShort(mom, '');
	        longp = this.weekdays(mom, '');
	        minPieces.push(minp);
	        shortPieces.push(shortp);
	        longPieces.push(longp);
	        mixedPieces.push(minp);
	        mixedPieces.push(shortp);
	        mixedPieces.push(longp);
	    }
	    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	    // will match the longer piece.
	    minPieces.sort(cmpLenRev);
	    shortPieces.sort(cmpLenRev);
	    longPieces.sort(cmpLenRev);
	    mixedPieces.sort(cmpLenRev);
	    for (i = 0; i < 7; i++) {
	        shortPieces[i] = regexEscape(shortPieces[i]);
	        longPieces[i] = regexEscape(longPieces[i]);
	        mixedPieces[i] = regexEscape(mixedPieces[i]);
	    }

	    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	    this._weekdaysShortRegex = this._weekdaysRegex;
	    this._weekdaysMinRegex = this._weekdaysRegex;

	    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	}

	// FORMATTING

	function hFormat() {
	    return this.hours() % 12 || 12;
	}

	function kFormat() {
	    return this.hours() || 24;
	}

	addFormatToken('H', ['HH', 2], 0, 'hour');
	addFormatToken('h', ['hh', 2], 0, hFormat);
	addFormatToken('k', ['kk', 2], 0, kFormat);

	addFormatToken('hmm', 0, 0, function () {
	    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	});

	addFormatToken('hmmss', 0, 0, function () {
	    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
	        zeroFill(this.seconds(), 2);
	});

	addFormatToken('Hmm', 0, 0, function () {
	    return '' + this.hours() + zeroFill(this.minutes(), 2);
	});

	addFormatToken('Hmmss', 0, 0, function () {
	    return '' + this.hours() + zeroFill(this.minutes(), 2) +
	        zeroFill(this.seconds(), 2);
	});

	function meridiem (token, lowercase) {
	    addFormatToken(token, 0, 0, function () {
	        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	    });
	}

	meridiem('a', true);
	meridiem('A', false);

	// ALIASES

	addUnitAlias('hour', 'h');

	// PRIORITY
	addUnitPriority('hour', 13);

	// PARSING

	function matchMeridiem (isStrict, locale) {
	    return locale._meridiemParse;
	}

	addRegexToken('a',  matchMeridiem);
	addRegexToken('A',  matchMeridiem);
	addRegexToken('H',  match1to2);
	addRegexToken('h',  match1to2);
	addRegexToken('k',  match1to2);
	addRegexToken('HH', match1to2, match2);
	addRegexToken('hh', match1to2, match2);
	addRegexToken('kk', match1to2, match2);

	addRegexToken('hmm', match3to4);
	addRegexToken('hmmss', match5to6);
	addRegexToken('Hmm', match3to4);
	addRegexToken('Hmmss', match5to6);

	addParseToken(['H', 'HH'], HOUR);
	addParseToken(['k', 'kk'], function (input, array, config) {
	    var kInput = toInt(input);
	    array[HOUR] = kInput === 24 ? 0 : kInput;
	});
	addParseToken(['a', 'A'], function (input, array, config) {
	    config._isPm = config._locale.isPM(input);
	    config._meridiem = input;
	});
	addParseToken(['h', 'hh'], function (input, array, config) {
	    array[HOUR] = toInt(input);
	    getParsingFlags(config).bigHour = true;
	});
	addParseToken('hmm', function (input, array, config) {
	    var pos = input.length - 2;
	    array[HOUR] = toInt(input.substr(0, pos));
	    array[MINUTE] = toInt(input.substr(pos));
	    getParsingFlags(config).bigHour = true;
	});
	addParseToken('hmmss', function (input, array, config) {
	    var pos1 = input.length - 4;
	    var pos2 = input.length - 2;
	    array[HOUR] = toInt(input.substr(0, pos1));
	    array[MINUTE] = toInt(input.substr(pos1, 2));
	    array[SECOND] = toInt(input.substr(pos2));
	    getParsingFlags(config).bigHour = true;
	});
	addParseToken('Hmm', function (input, array, config) {
	    var pos = input.length - 2;
	    array[HOUR] = toInt(input.substr(0, pos));
	    array[MINUTE] = toInt(input.substr(pos));
	});
	addParseToken('Hmmss', function (input, array, config) {
	    var pos1 = input.length - 4;
	    var pos2 = input.length - 2;
	    array[HOUR] = toInt(input.substr(0, pos1));
	    array[MINUTE] = toInt(input.substr(pos1, 2));
	    array[SECOND] = toInt(input.substr(pos2));
	});

	// LOCALES

	function localeIsPM (input) {
	    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	    // Using charAt should be more compatible.
	    return ((input + '').toLowerCase().charAt(0) === 'p');
	}

	var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	function localeMeridiem (hours, minutes, isLower) {
	    if (hours > 11) {
	        return isLower ? 'pm' : 'PM';
	    } else {
	        return isLower ? 'am' : 'AM';
	    }
	}


	// MOMENTS

	// Setting the hour should keep the time, because the user explicitly
	// specified which hour he wants. So trying to maintain the same hour (in
	// a new timezone) makes sense. Adding/subtracting hours does not follow
	// this rule.
	var getSetHour = makeGetSet('Hours', true);

	// months
	// week
	// weekdays
	// meridiem
	var baseConfig = {
	    calendar: defaultCalendar,
	    longDateFormat: defaultLongDateFormat,
	    invalidDate: defaultInvalidDate,
	    ordinal: defaultOrdinal,
	    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
	    relativeTime: defaultRelativeTime,

	    months: defaultLocaleMonths,
	    monthsShort: defaultLocaleMonthsShort,

	    week: defaultLocaleWeek,

	    weekdays: defaultLocaleWeekdays,
	    weekdaysMin: defaultLocaleWeekdaysMin,
	    weekdaysShort: defaultLocaleWeekdaysShort,

	    meridiemParse: defaultLocaleMeridiemParse
	};

	// internal storage for locale config files
	var locales = {};
	var localeFamilies = {};
	var globalLocale;

	function normalizeLocale(key) {
	    return key ? key.toLowerCase().replace('_', '-') : key;
	}

	// pick the locale from the array
	// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	function chooseLocale(names) {
	    var i = 0, j, next, locale, split;

	    while (i < names.length) {
	        split = normalizeLocale(names[i]).split('-');
	        j = split.length;
	        next = normalizeLocale(names[i + 1]);
	        next = next ? next.split('-') : null;
	        while (j > 0) {
	            locale = loadLocale(split.slice(0, j).join('-'));
	            if (locale) {
	                return locale;
	            }
	            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                //the next array item is better than a shallower substring of this one
	                break;
	            }
	            j--;
	        }
	        i++;
	    }
	    return null;
	}

	function loadLocale(name) {
	    var oldLocale = null;
	    // TODO: Find a better way to register and load all the locales in Node
	    if (!locales[name] && (typeof module !== 'undefined') &&
	            module && module.exports) {
	        try {
	            oldLocale = globalLocale._abbr;
	            __webpack_require__(19)("./" + name);
	            // because defineLocale currently also sets the global locale, we
	            // want to undo that for lazy loaded locales
	            getSetGlobalLocale(oldLocale);
	        } catch (e) { }
	    }
	    return locales[name];
	}

	// This function will load locale and then set the global locale.  If
	// no arguments are passed in, it will simply return the current global
	// locale key.
	function getSetGlobalLocale (key, values) {
	    var data;
	    if (key) {
	        if (isUndefined(values)) {
	            data = getLocale(key);
	        }
	        else {
	            data = defineLocale(key, values);
	        }

	        if (data) {
	            // moment.duration._locale = moment._locale = data;
	            globalLocale = data;
	        }
	    }

	    return globalLocale._abbr;
	}

	function defineLocale (name, config) {
	    if (config !== null) {
	        var parentConfig = baseConfig;
	        config.abbr = name;
	        if (locales[name] != null) {
	            deprecateSimple('defineLocaleOverride',
	                    'use moment.updateLocale(localeName, config) to change ' +
	                    'an existing locale. moment.defineLocale(localeName, ' +
	                    'config) should only be used for creating a new locale ' +
	                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
	            parentConfig = locales[name]._config;
	        } else if (config.parentLocale != null) {
	            if (locales[config.parentLocale] != null) {
	                parentConfig = locales[config.parentLocale]._config;
	            } else {
	                if (!localeFamilies[config.parentLocale]) {
	                    localeFamilies[config.parentLocale] = [];
	                }
	                localeFamilies[config.parentLocale].push({
	                    name: name,
	                    config: config
	                });
	                return null;
	            }
	        }
	        locales[name] = new Locale(mergeConfigs(parentConfig, config));

	        if (localeFamilies[name]) {
	            localeFamilies[name].forEach(function (x) {
	                defineLocale(x.name, x.config);
	            });
	        }

	        // backwards compat for now: also set the locale
	        // make sure we set the locale AFTER all child locales have been
	        // created, so we won't end up with the child locale set.
	        getSetGlobalLocale(name);


	        return locales[name];
	    } else {
	        // useful for testing
	        delete locales[name];
	        return null;
	    }
	}

	function updateLocale(name, config) {
	    if (config != null) {
	        var locale, parentConfig = baseConfig;
	        // MERGE
	        if (locales[name] != null) {
	            parentConfig = locales[name]._config;
	        }
	        config = mergeConfigs(parentConfig, config);
	        locale = new Locale(config);
	        locale.parentLocale = locales[name];
	        locales[name] = locale;

	        // backwards compat for now: also set the locale
	        getSetGlobalLocale(name);
	    } else {
	        // pass null for config to unupdate, useful for tests
	        if (locales[name] != null) {
	            if (locales[name].parentLocale != null) {
	                locales[name] = locales[name].parentLocale;
	            } else if (locales[name] != null) {
	                delete locales[name];
	            }
	        }
	    }
	    return locales[name];
	}

	// returns locale data
	function getLocale (key) {
	    var locale;

	    if (key && key._locale && key._locale._abbr) {
	        key = key._locale._abbr;
	    }

	    if (!key) {
	        return globalLocale;
	    }

	    if (!isArray(key)) {
	        //short-circuit everything else
	        locale = loadLocale(key);
	        if (locale) {
	            return locale;
	        }
	        key = [key];
	    }

	    return chooseLocale(key);
	}

	function listLocales() {
	    return keys$1(locales);
	}

	function checkOverflow (m) {
	    var overflow;
	    var a = m._a;

	    if (a && getParsingFlags(m).overflow === -2) {
	        overflow =
	            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	            -1;

	        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	            overflow = DATE;
	        }
	        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	            overflow = WEEK;
	        }
	        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	            overflow = WEEKDAY;
	        }

	        getParsingFlags(m).overflow = overflow;
	    }

	    return m;
	}

	// iso 8601 regex
	// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
	var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

	var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

	var isoDates = [
	    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	    ['YYYY-DDD', /\d{4}-\d{3}/],
	    ['YYYY-MM', /\d{4}-\d\d/, false],
	    ['YYYYYYMMDD', /[+-]\d{10}/],
	    ['YYYYMMDD', /\d{8}/],
	    // YYYYMM is NOT allowed by the standard
	    ['GGGG[W]WWE', /\d{4}W\d{3}/],
	    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	    ['YYYYDDD', /\d{7}/]
	];

	// iso time formats and regexes
	var isoTimes = [
	    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	    ['HH:mm', /\d\d:\d\d/],
	    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	    ['HHmmss', /\d\d\d\d\d\d/],
	    ['HHmm', /\d\d\d\d/],
	    ['HH', /\d\d/]
	];

	var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

	// date from iso format
	function configFromISO(config) {
	    var i, l,
	        string = config._i,
	        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	        allowTime, dateFormat, timeFormat, tzFormat;

	    if (match) {
	        getParsingFlags(config).iso = true;

	        for (i = 0, l = isoDates.length; i < l; i++) {
	            if (isoDates[i][1].exec(match[1])) {
	                dateFormat = isoDates[i][0];
	                allowTime = isoDates[i][2] !== false;
	                break;
	            }
	        }
	        if (dateFormat == null) {
	            config._isValid = false;
	            return;
	        }
	        if (match[3]) {
	            for (i = 0, l = isoTimes.length; i < l; i++) {
	                if (isoTimes[i][1].exec(match[3])) {
	                    // match[2] should be 'T' or space
	                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                    break;
	                }
	            }
	            if (timeFormat == null) {
	                config._isValid = false;
	                return;
	            }
	        }
	        if (!allowTime && timeFormat != null) {
	            config._isValid = false;
	            return;
	        }
	        if (match[4]) {
	            if (tzRegex.exec(match[4])) {
	                tzFormat = 'Z';
	            } else {
	                config._isValid = false;
	                return;
	            }
	        }
	        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	        configFromStringAndFormat(config);
	    } else {
	        config._isValid = false;
	    }
	}

	// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
	var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

	// date and time from ref 2822 format
	function configFromRFC2822(config) {
	    var string, match, dayFormat,
	        dateFormat, timeFormat, tzFormat;
	    var timezones = {
	        ' GMT': ' +0000',
	        ' EDT': ' -0400',
	        ' EST': ' -0500',
	        ' CDT': ' -0500',
	        ' CST': ' -0600',
	        ' MDT': ' -0600',
	        ' MST': ' -0700',
	        ' PDT': ' -0700',
	        ' PST': ' -0800'
	    };
	    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
	    var timezone, timezoneIndex;

	    string = config._i
	        .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
	        .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
	        .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
	    match = basicRfcRegex.exec(string);

	    if (match) {
	        dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
	        dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
	        timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

	        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
	        if (match[1]) { // day of week given
	            var momentDate = new Date(match[2]);
	            var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

	            if (match[1].substr(0,3) !== momentDay) {
	                getParsingFlags(config).weekdayMismatch = true;
	                config._isValid = false;
	                return;
	            }
	        }

	        switch (match[5].length) {
	            case 2: // military
	                if (timezoneIndex === 0) {
	                    timezone = ' +0000';
	                } else {
	                    timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
	                    timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
	                        (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
	                }
	                break;
	            case 4: // Zone
	                timezone = timezones[match[5]];
	                break;
	            default: // UT or +/-9999
	                timezone = timezones[' GMT'];
	        }
	        match[5] = timezone;
	        config._i = match.splice(1).join('');
	        tzFormat = ' ZZ';
	        config._f = dayFormat + dateFormat + timeFormat + tzFormat;
	        configFromStringAndFormat(config);
	        getParsingFlags(config).rfc2822 = true;
	    } else {
	        config._isValid = false;
	    }
	}

	// date from iso format or fallback
	function configFromString(config) {
	    var matched = aspNetJsonRegex.exec(config._i);

	    if (matched !== null) {
	        config._d = new Date(+matched[1]);
	        return;
	    }

	    configFromISO(config);
	    if (config._isValid === false) {
	        delete config._isValid;
	    } else {
	        return;
	    }

	    configFromRFC2822(config);
	    if (config._isValid === false) {
	        delete config._isValid;
	    } else {
	        return;
	    }

	    // Final attempt, use Input Fallback
	    hooks.createFromInputFallback(config);
	}

	hooks.createFromInputFallback = deprecate(
	    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
	    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
	    'discouraged and will be removed in an upcoming major release. Please refer to ' +
	    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	    function (config) {
	        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	    }
	);

	// Pick the first defined of two or three arguments.
	function defaults(a, b, c) {
	    if (a != null) {
	        return a;
	    }
	    if (b != null) {
	        return b;
	    }
	    return c;
	}

	function currentDateArray(config) {
	    // hooks is actually the exported moment object
	    var nowValue = new Date(hooks.now());
	    if (config._useUTC) {
	        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	    }
	    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	}

	// convert an array to a date.
	// the array should mirror the parameters below
	// note: all values past the year are optional and will default to the lowest possible value.
	// [year, month, day , hour, minute, second, millisecond]
	function configFromArray (config) {
	    var i, date, input = [], currentDate, yearToUse;

	    if (config._d) {
	        return;
	    }

	    currentDate = currentDateArray(config);

	    //compute day of the year from weeks and weekdays
	    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	        dayOfYearFromWeekInfo(config);
	    }

	    //if the day of the year is set, figure out what it is
	    if (config._dayOfYear != null) {
	        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

	        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
	            getParsingFlags(config)._overflowDayOfYear = true;
	        }

	        date = createUTCDate(yearToUse, 0, config._dayOfYear);
	        config._a[MONTH] = date.getUTCMonth();
	        config._a[DATE] = date.getUTCDate();
	    }

	    // Default to current date.
	    // * if no year, month, day of month are given, default to today
	    // * if day of month is given, default month and year
	    // * if month is given, default only year
	    // * if year is given, don't default anything
	    for (i = 0; i < 3 && config._a[i] == null; ++i) {
	        config._a[i] = input[i] = currentDate[i];
	    }

	    // Zero out whatever was not defaulted, including time
	    for (; i < 7; i++) {
	        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	    }

	    // Check for 24:00:00.000
	    if (config._a[HOUR] === 24 &&
	            config._a[MINUTE] === 0 &&
	            config._a[SECOND] === 0 &&
	            config._a[MILLISECOND] === 0) {
	        config._nextDay = true;
	        config._a[HOUR] = 0;
	    }

	    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	    // Apply timezone offset from input. The actual utcOffset can be changed
	    // with parseZone.
	    if (config._tzm != null) {
	        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	    }

	    if (config._nextDay) {
	        config._a[HOUR] = 24;
	    }
	}

	function dayOfYearFromWeekInfo(config) {
	    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

	    w = config._w;
	    if (w.GG != null || w.W != null || w.E != null) {
	        dow = 1;
	        doy = 4;

	        // TODO: We need to take the current isoWeekYear, but that depends on
	        // how we interpret now (local, utc, fixed offset). So create
	        // a now version of current config (take local/utc/offset flags, and
	        // create now).
	        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
	        week = defaults(w.W, 1);
	        weekday = defaults(w.E, 1);
	        if (weekday < 1 || weekday > 7) {
	            weekdayOverflow = true;
	        }
	    } else {
	        dow = config._locale._week.dow;
	        doy = config._locale._week.doy;

	        var curWeek = weekOfYear(createLocal(), dow, doy);

	        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

	        // Default to current week.
	        week = defaults(w.w, curWeek.week);

	        if (w.d != null) {
	            // weekday -- low day numbers are considered next week
	            weekday = w.d;
	            if (weekday < 0 || weekday > 6) {
	                weekdayOverflow = true;
	            }
	        } else if (w.e != null) {
	            // local weekday -- counting starts from begining of week
	            weekday = w.e + dow;
	            if (w.e < 0 || w.e > 6) {
	                weekdayOverflow = true;
	            }
	        } else {
	            // default to begining of week
	            weekday = dow;
	        }
	    }
	    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	        getParsingFlags(config)._overflowWeeks = true;
	    } else if (weekdayOverflow != null) {
	        getParsingFlags(config)._overflowWeekday = true;
	    } else {
	        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	        config._a[YEAR] = temp.year;
	        config._dayOfYear = temp.dayOfYear;
	    }
	}

	// constant that refers to the ISO standard
	hooks.ISO_8601 = function () {};

	// constant that refers to the RFC 2822 form
	hooks.RFC_2822 = function () {};

	// date from string and format string
	function configFromStringAndFormat(config) {
	    // TODO: Move this to another part of the creation flow to prevent circular deps
	    if (config._f === hooks.ISO_8601) {
	        configFromISO(config);
	        return;
	    }
	    if (config._f === hooks.RFC_2822) {
	        configFromRFC2822(config);
	        return;
	    }
	    config._a = [];
	    getParsingFlags(config).empty = true;

	    // This array is used to make a Date, either with `new Date` or `Date.UTC`
	    var string = '' + config._i,
	        i, parsedInput, tokens, token, skipped,
	        stringLength = string.length,
	        totalParsedInputLength = 0;

	    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

	    for (i = 0; i < tokens.length; i++) {
	        token = tokens[i];
	        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	        // console.log('token', token, 'parsedInput', parsedInput,
	        //         'regex', getParseRegexForToken(token, config));
	        if (parsedInput) {
	            skipped = string.substr(0, string.indexOf(parsedInput));
	            if (skipped.length > 0) {
	                getParsingFlags(config).unusedInput.push(skipped);
	            }
	            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	            totalParsedInputLength += parsedInput.length;
	        }
	        // don't parse if it's not a known token
	        if (formatTokenFunctions[token]) {
	            if (parsedInput) {
	                getParsingFlags(config).empty = false;
	            }
	            else {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	            addTimeToArrayFromToken(token, parsedInput, config);
	        }
	        else if (config._strict && !parsedInput) {
	            getParsingFlags(config).unusedTokens.push(token);
	        }
	    }

	    // add remaining unparsed input length to the string
	    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	    if (string.length > 0) {
	        getParsingFlags(config).unusedInput.push(string);
	    }

	    // clear _12h flag if hour is <= 12
	    if (config._a[HOUR] <= 12 &&
	        getParsingFlags(config).bigHour === true &&
	        config._a[HOUR] > 0) {
	        getParsingFlags(config).bigHour = undefined;
	    }

	    getParsingFlags(config).parsedDateParts = config._a.slice(0);
	    getParsingFlags(config).meridiem = config._meridiem;
	    // handle meridiem
	    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

	    configFromArray(config);
	    checkOverflow(config);
	}


	function meridiemFixWrap (locale, hour, meridiem) {
	    var isPm;

	    if (meridiem == null) {
	        // nothing to do
	        return hour;
	    }
	    if (locale.meridiemHour != null) {
	        return locale.meridiemHour(hour, meridiem);
	    } else if (locale.isPM != null) {
	        // Fallback
	        isPm = locale.isPM(meridiem);
	        if (isPm && hour < 12) {
	            hour += 12;
	        }
	        if (!isPm && hour === 12) {
	            hour = 0;
	        }
	        return hour;
	    } else {
	        // this is not supposed to happen
	        return hour;
	    }
	}

	// date from string and array of format strings
	function configFromStringAndArray(config) {
	    var tempConfig,
	        bestMoment,

	        scoreToBeat,
	        i,
	        currentScore;

	    if (config._f.length === 0) {
	        getParsingFlags(config).invalidFormat = true;
	        config._d = new Date(NaN);
	        return;
	    }

	    for (i = 0; i < config._f.length; i++) {
	        currentScore = 0;
	        tempConfig = copyConfig({}, config);
	        if (config._useUTC != null) {
	            tempConfig._useUTC = config._useUTC;
	        }
	        tempConfig._f = config._f[i];
	        configFromStringAndFormat(tempConfig);

	        if (!isValid(tempConfig)) {
	            continue;
	        }

	        // if there is any input that was not parsed add a penalty for that format
	        currentScore += getParsingFlags(tempConfig).charsLeftOver;

	        //or tokens
	        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

	        getParsingFlags(tempConfig).score = currentScore;

	        if (scoreToBeat == null || currentScore < scoreToBeat) {
	            scoreToBeat = currentScore;
	            bestMoment = tempConfig;
	        }
	    }

	    extend(config, bestMoment || tempConfig);
	}

	function configFromObject(config) {
	    if (config._d) {
	        return;
	    }

	    var i = normalizeObjectUnits(config._i);
	    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
	        return obj && parseInt(obj, 10);
	    });

	    configFromArray(config);
	}

	function createFromConfig (config) {
	    var res = new Moment(checkOverflow(prepareConfig(config)));
	    if (res._nextDay) {
	        // Adding is smart enough around DST
	        res.add(1, 'd');
	        res._nextDay = undefined;
	    }

	    return res;
	}

	function prepareConfig (config) {
	    var input = config._i,
	        format = config._f;

	    config._locale = config._locale || getLocale(config._l);

	    if (input === null || (format === undefined && input === '')) {
	        return createInvalid({nullInput: true});
	    }

	    if (typeof input === 'string') {
	        config._i = input = config._locale.preparse(input);
	    }

	    if (isMoment(input)) {
	        return new Moment(checkOverflow(input));
	    } else if (isDate(input)) {
	        config._d = input;
	    } else if (isArray(format)) {
	        configFromStringAndArray(config);
	    } else if (format) {
	        configFromStringAndFormat(config);
	    }  else {
	        configFromInput(config);
	    }

	    if (!isValid(config)) {
	        config._d = null;
	    }

	    return config;
	}

	function configFromInput(config) {
	    var input = config._i;
	    if (isUndefined(input)) {
	        config._d = new Date(hooks.now());
	    } else if (isDate(input)) {
	        config._d = new Date(input.valueOf());
	    } else if (typeof input === 'string') {
	        configFromString(config);
	    } else if (isArray(input)) {
	        config._a = map(input.slice(0), function (obj) {
	            return parseInt(obj, 10);
	        });
	        configFromArray(config);
	    } else if (isObject(input)) {
	        configFromObject(config);
	    } else if (isNumber(input)) {
	        // from milliseconds
	        config._d = new Date(input);
	    } else {
	        hooks.createFromInputFallback(config);
	    }
	}

	function createLocalOrUTC (input, format, locale, strict, isUTC) {
	    var c = {};

	    if (locale === true || locale === false) {
	        strict = locale;
	        locale = undefined;
	    }

	    if ((isObject(input) && isObjectEmpty(input)) ||
	            (isArray(input) && input.length === 0)) {
	        input = undefined;
	    }
	    // object construction must be done this way.
	    // https://github.com/moment/moment/issues/1423
	    c._isAMomentObject = true;
	    c._useUTC = c._isUTC = isUTC;
	    c._l = locale;
	    c._i = input;
	    c._f = format;
	    c._strict = strict;

	    return createFromConfig(c);
	}

	function createLocal (input, format, locale, strict) {
	    return createLocalOrUTC(input, format, locale, strict, false);
	}

	var prototypeMin = deprecate(
	    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
	    function () {
	        var other = createLocal.apply(null, arguments);
	        if (this.isValid() && other.isValid()) {
	            return other < this ? this : other;
	        } else {
	            return createInvalid();
	        }
	    }
	);

	var prototypeMax = deprecate(
	    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
	    function () {
	        var other = createLocal.apply(null, arguments);
	        if (this.isValid() && other.isValid()) {
	            return other > this ? this : other;
	        } else {
	            return createInvalid();
	        }
	    }
	);

	// Pick a moment m from moments so that m[fn](other) is true for all
	// other. This relies on the function fn to be transitive.
	//
	// moments should either be an array of moment objects or an array, whose
	// first element is an array of moment objects.
	function pickBy(fn, moments) {
	    var res, i;
	    if (moments.length === 1 && isArray(moments[0])) {
	        moments = moments[0];
	    }
	    if (!moments.length) {
	        return createLocal();
	    }
	    res = moments[0];
	    for (i = 1; i < moments.length; ++i) {
	        if (!moments[i].isValid() || moments[i][fn](res)) {
	            res = moments[i];
	        }
	    }
	    return res;
	}

	// TODO: Use [].sort instead?
	function min () {
	    var args = [].slice.call(arguments, 0);

	    return pickBy('isBefore', args);
	}

	function max () {
	    var args = [].slice.call(arguments, 0);

	    return pickBy('isAfter', args);
	}

	var now = function () {
	    return Date.now ? Date.now() : +(new Date());
	};

	var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

	function isDurationValid(m) {
	    for (var key in m) {
	        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
	            return false;
	        }
	    }

	    var unitHasDecimal = false;
	    for (var i = 0; i < ordering.length; ++i) {
	        if (m[ordering[i]]) {
	            if (unitHasDecimal) {
	                return false; // only allow non-integers for smallest unit
	            }
	            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
	                unitHasDecimal = true;
	            }
	        }
	    }

	    return true;
	}

	function isValid$1() {
	    return this._isValid;
	}

	function createInvalid$1() {
	    return createDuration(NaN);
	}

	function Duration (duration) {
	    var normalizedInput = normalizeObjectUnits(duration),
	        years = normalizedInput.year || 0,
	        quarters = normalizedInput.quarter || 0,
	        months = normalizedInput.month || 0,
	        weeks = normalizedInput.week || 0,
	        days = normalizedInput.day || 0,
	        hours = normalizedInput.hour || 0,
	        minutes = normalizedInput.minute || 0,
	        seconds = normalizedInput.second || 0,
	        milliseconds = normalizedInput.millisecond || 0;

	    this._isValid = isDurationValid(normalizedInput);

	    // representation for dateAddRemove
	    this._milliseconds = +milliseconds +
	        seconds * 1e3 + // 1000
	        minutes * 6e4 + // 1000 * 60
	        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	    // Because of dateAddRemove treats 24 hours as different from a
	    // day when working around DST, we need to store them separately
	    this._days = +days +
	        weeks * 7;
	    // It is impossible translate months into days without knowing
	    // which months you are are talking about, so we have to store
	    // it separately.
	    this._months = +months +
	        quarters * 3 +
	        years * 12;

	    this._data = {};

	    this._locale = getLocale();

	    this._bubble();
	}

	function isDuration (obj) {
	    return obj instanceof Duration;
	}

	function absRound (number) {
	    if (number < 0) {
	        return Math.round(-1 * number) * -1;
	    } else {
	        return Math.round(number);
	    }
	}

	// FORMATTING

	function offset (token, separator) {
	    addFormatToken(token, 0, 0, function () {
	        var offset = this.utcOffset();
	        var sign = '+';
	        if (offset < 0) {
	            offset = -offset;
	            sign = '-';
	        }
	        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	    });
	}

	offset('Z', ':');
	offset('ZZ', '');

	// PARSING

	addRegexToken('Z',  matchShortOffset);
	addRegexToken('ZZ', matchShortOffset);
	addParseToken(['Z', 'ZZ'], function (input, array, config) {
	    config._useUTC = true;
	    config._tzm = offsetFromString(matchShortOffset, input);
	});

	// HELPERS

	// timezone chunker
	// '+10:00' > ['10',  '00']
	// '-1530'  > ['-15', '30']
	var chunkOffset = /([\+\-]|\d\d)/gi;

	function offsetFromString(matcher, string) {
	    var matches = (string || '').match(matcher);

	    if (matches === null) {
	        return null;
	    }

	    var chunk   = matches[matches.length - 1] || [];
	    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	    var minutes = +(parts[1] * 60) + toInt(parts[2]);

	    return minutes === 0 ?
	      0 :
	      parts[0] === '+' ? minutes : -minutes;
	}

	// Return a moment from input, that is local/utc/zone equivalent to model.
	function cloneWithOffset(input, model) {
	    var res, diff;
	    if (model._isUTC) {
	        res = model.clone();
	        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
	        // Use low-level api, because this fn is low-level api.
	        res._d.setTime(res._d.valueOf() + diff);
	        hooks.updateOffset(res, false);
	        return res;
	    } else {
	        return createLocal(input).local();
	    }
	}

	function getDateOffset (m) {
	    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	    // https://github.com/moment/moment/pull/1871
	    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	}

	// HOOKS

	// This function will be called whenever a moment is mutated.
	// It is intended to keep the offset in sync with the timezone.
	hooks.updateOffset = function () {};

	// MOMENTS

	// keepLocalTime = true means only change the timezone, without
	// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	// +0200, so we adjust the time as needed, to be valid.
	//
	// Keeping the time actually adds/subtracts (one hour)
	// from the actual represented time. That is why we call updateOffset
	// a second time. In case it wants us to change the offset again
	// _changeInProgress == true case, then we have to adjust, because
	// there is no such time in the given timezone.
	function getSetOffset (input, keepLocalTime, keepMinutes) {
	    var offset = this._offset || 0,
	        localAdjust;
	    if (!this.isValid()) {
	        return input != null ? this : NaN;
	    }
	    if (input != null) {
	        if (typeof input === 'string') {
	            input = offsetFromString(matchShortOffset, input);
	            if (input === null) {
	                return this;
	            }
	        } else if (Math.abs(input) < 16 && !keepMinutes) {
	            input = input * 60;
	        }
	        if (!this._isUTC && keepLocalTime) {
	            localAdjust = getDateOffset(this);
	        }
	        this._offset = input;
	        this._isUTC = true;
	        if (localAdjust != null) {
	            this.add(localAdjust, 'm');
	        }
	        if (offset !== input) {
	            if (!keepLocalTime || this._changeInProgress) {
	                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
	            } else if (!this._changeInProgress) {
	                this._changeInProgress = true;
	                hooks.updateOffset(this, true);
	                this._changeInProgress = null;
	            }
	        }
	        return this;
	    } else {
	        return this._isUTC ? offset : getDateOffset(this);
	    }
	}

	function getSetZone (input, keepLocalTime) {
	    if (input != null) {
	        if (typeof input !== 'string') {
	            input = -input;
	        }

	        this.utcOffset(input, keepLocalTime);

	        return this;
	    } else {
	        return -this.utcOffset();
	    }
	}

	function setOffsetToUTC (keepLocalTime) {
	    return this.utcOffset(0, keepLocalTime);
	}

	function setOffsetToLocal (keepLocalTime) {
	    if (this._isUTC) {
	        this.utcOffset(0, keepLocalTime);
	        this._isUTC = false;

	        if (keepLocalTime) {
	            this.subtract(getDateOffset(this), 'm');
	        }
	    }
	    return this;
	}

	function setOffsetToParsedOffset () {
	    if (this._tzm != null) {
	        this.utcOffset(this._tzm, false, true);
	    } else if (typeof this._i === 'string') {
	        var tZone = offsetFromString(matchOffset, this._i);
	        if (tZone != null) {
	            this.utcOffset(tZone);
	        }
	        else {
	            this.utcOffset(0, true);
	        }
	    }
	    return this;
	}

	function hasAlignedHourOffset (input) {
	    if (!this.isValid()) {
	        return false;
	    }
	    input = input ? createLocal(input).utcOffset() : 0;

	    return (this.utcOffset() - input) % 60 === 0;
	}

	function isDaylightSavingTime () {
	    return (
	        this.utcOffset() > this.clone().month(0).utcOffset() ||
	        this.utcOffset() > this.clone().month(5).utcOffset()
	    );
	}

	function isDaylightSavingTimeShifted () {
	    if (!isUndefined(this._isDSTShifted)) {
	        return this._isDSTShifted;
	    }

	    var c = {};

	    copyConfig(c, this);
	    c = prepareConfig(c);

	    if (c._a) {
	        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
	        this._isDSTShifted = this.isValid() &&
	            compareArrays(c._a, other.toArray()) > 0;
	    } else {
	        this._isDSTShifted = false;
	    }

	    return this._isDSTShifted;
	}

	function isLocal () {
	    return this.isValid() ? !this._isUTC : false;
	}

	function isUtcOffset () {
	    return this.isValid() ? this._isUTC : false;
	}

	function isUtc () {
	    return this.isValid() ? this._isUTC && this._offset === 0 : false;
	}

	// ASP.NET json date format regex
	var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

	// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	// and further modified to allow for strings containing both week and day
	var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

	function createDuration (input, key) {
	    var duration = input,
	        // matching against regexp is expensive, do it on demand
	        match = null,
	        sign,
	        ret,
	        diffRes;

	    if (isDuration(input)) {
	        duration = {
	            ms : input._milliseconds,
	            d  : input._days,
	            M  : input._months
	        };
	    } else if (isNumber(input)) {
	        duration = {};
	        if (key) {
	            duration[key] = input;
	        } else {
	            duration.milliseconds = input;
	        }
	    } else if (!!(match = aspNetRegex.exec(input))) {
	        sign = (match[1] === '-') ? -1 : 1;
	        duration = {
	            y  : 0,
	            d  : toInt(match[DATE])                         * sign,
	            h  : toInt(match[HOUR])                         * sign,
	            m  : toInt(match[MINUTE])                       * sign,
	            s  : toInt(match[SECOND])                       * sign,
	            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
	        };
	    } else if (!!(match = isoRegex.exec(input))) {
	        sign = (match[1] === '-') ? -1 : 1;
	        duration = {
	            y : parseIso(match[2], sign),
	            M : parseIso(match[3], sign),
	            w : parseIso(match[4], sign),
	            d : parseIso(match[5], sign),
	            h : parseIso(match[6], sign),
	            m : parseIso(match[7], sign),
	            s : parseIso(match[8], sign)
	        };
	    } else if (duration == null) {// checks for null or undefined
	        duration = {};
	    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

	        duration = {};
	        duration.ms = diffRes.milliseconds;
	        duration.M = diffRes.months;
	    }

	    ret = new Duration(duration);

	    if (isDuration(input) && hasOwnProp(input, '_locale')) {
	        ret._locale = input._locale;
	    }

	    return ret;
	}

	createDuration.fn = Duration.prototype;
	createDuration.invalid = createInvalid$1;

	function parseIso (inp, sign) {
	    // We'd normally use ~~inp for this, but unfortunately it also
	    // converts floats to ints.
	    // inp may be undefined, so careful calling replace on it.
	    var res = inp && parseFloat(inp.replace(',', '.'));
	    // apply sign while we're at it
	    return (isNaN(res) ? 0 : res) * sign;
	}

	function positiveMomentsDifference(base, other) {
	    var res = {milliseconds: 0, months: 0};

	    res.months = other.month() - base.month() +
	        (other.year() - base.year()) * 12;
	    if (base.clone().add(res.months, 'M').isAfter(other)) {
	        --res.months;
	    }

	    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

	    return res;
	}

	function momentsDifference(base, other) {
	    var res;
	    if (!(base.isValid() && other.isValid())) {
	        return {milliseconds: 0, months: 0};
	    }

	    other = cloneWithOffset(other, base);
	    if (base.isBefore(other)) {
	        res = positiveMomentsDifference(base, other);
	    } else {
	        res = positiveMomentsDifference(other, base);
	        res.milliseconds = -res.milliseconds;
	        res.months = -res.months;
	    }

	    return res;
	}

	// TODO: remove 'name' arg after deprecation is removed
	function createAdder(direction, name) {
	    return function (val, period) {
	        var dur, tmp;
	        //invert the arguments, but complain about it
	        if (period !== null && !isNaN(+period)) {
	            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
	            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
	            tmp = val; val = period; period = tmp;
	        }

	        val = typeof val === 'string' ? +val : val;
	        dur = createDuration(val, period);
	        addSubtract(this, dur, direction);
	        return this;
	    };
	}

	function addSubtract (mom, duration, isAdding, updateOffset) {
	    var milliseconds = duration._milliseconds,
	        days = absRound(duration._days),
	        months = absRound(duration._months);

	    if (!mom.isValid()) {
	        // No op
	        return;
	    }

	    updateOffset = updateOffset == null ? true : updateOffset;

	    if (milliseconds) {
	        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	    }
	    if (days) {
	        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
	    }
	    if (months) {
	        setMonth(mom, get(mom, 'Month') + months * isAdding);
	    }
	    if (updateOffset) {
	        hooks.updateOffset(mom, days || months);
	    }
	}

	var add      = createAdder(1, 'add');
	var subtract = createAdder(-1, 'subtract');

	function getCalendarFormat(myMoment, now) {
	    var diff = myMoment.diff(now, 'days', true);
	    return diff < -6 ? 'sameElse' :
	            diff < -1 ? 'lastWeek' :
	            diff < 0 ? 'lastDay' :
	            diff < 1 ? 'sameDay' :
	            diff < 2 ? 'nextDay' :
	            diff < 7 ? 'nextWeek' : 'sameElse';
	}

	function calendar$1 (time, formats) {
	    // We want to compare the start of today, vs this.
	    // Getting start-of-today depends on whether we're local/utc/offset or not.
	    var now = time || createLocal(),
	        sod = cloneWithOffset(now, this).startOf('day'),
	        format = hooks.calendarFormat(this, sod) || 'sameElse';

	    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

	    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
	}

	function clone () {
	    return new Moment(this);
	}

	function isAfter (input, units) {
	    var localInput = isMoment(input) ? input : createLocal(input);
	    if (!(this.isValid() && localInput.isValid())) {
	        return false;
	    }
	    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	    if (units === 'millisecond') {
	        return this.valueOf() > localInput.valueOf();
	    } else {
	        return localInput.valueOf() < this.clone().startOf(units).valueOf();
	    }
	}

	function isBefore (input, units) {
	    var localInput = isMoment(input) ? input : createLocal(input);
	    if (!(this.isValid() && localInput.isValid())) {
	        return false;
	    }
	    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	    if (units === 'millisecond') {
	        return this.valueOf() < localInput.valueOf();
	    } else {
	        return this.clone().endOf(units).valueOf() < localInput.valueOf();
	    }
	}

	function isBetween (from, to, units, inclusivity) {
	    inclusivity = inclusivity || '()';
	    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
	        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
	}

	function isSame (input, units) {
	    var localInput = isMoment(input) ? input : createLocal(input),
	        inputMs;
	    if (!(this.isValid() && localInput.isValid())) {
	        return false;
	    }
	    units = normalizeUnits(units || 'millisecond');
	    if (units === 'millisecond') {
	        return this.valueOf() === localInput.valueOf();
	    } else {
	        inputMs = localInput.valueOf();
	        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
	    }
	}

	function isSameOrAfter (input, units) {
	    return this.isSame(input, units) || this.isAfter(input,units);
	}

	function isSameOrBefore (input, units) {
	    return this.isSame(input, units) || this.isBefore(input,units);
	}

	function diff (input, units, asFloat) {
	    var that,
	        zoneDelta,
	        delta, output;

	    if (!this.isValid()) {
	        return NaN;
	    }

	    that = cloneWithOffset(input, this);

	    if (!that.isValid()) {
	        return NaN;
	    }

	    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

	    units = normalizeUnits(units);

	    if (units === 'year' || units === 'month' || units === 'quarter') {
	        output = monthDiff(this, that);
	        if (units === 'quarter') {
	            output = output / 3;
	        } else if (units === 'year') {
	            output = output / 12;
	        }
	    } else {
	        delta = this - that;
	        output = units === 'second' ? delta / 1e3 : // 1000
	            units === 'minute' ? delta / 6e4 : // 1000 * 60
	            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
	            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	            delta;
	    }
	    return asFloat ? output : absFloor(output);
	}

	function monthDiff (a, b) {
	    // difference in months
	    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	        // b is in (anchor - 1 month, anchor + 1 month)
	        anchor = a.clone().add(wholeMonthDiff, 'months'),
	        anchor2, adjust;

	    if (b - anchor < 0) {
	        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	        // linear across the month
	        adjust = (b - anchor) / (anchor - anchor2);
	    } else {
	        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	        // linear across the month
	        adjust = (b - anchor) / (anchor2 - anchor);
	    }

	    //check for negative zero, return zero if negative zero
	    return -(wholeMonthDiff + adjust) || 0;
	}

	hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

	function toString () {
	    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	}

	function toISOString() {
	    if (!this.isValid()) {
	        return null;
	    }
	    var m = this.clone().utc();
	    if (m.year() < 0 || m.year() > 9999) {
	        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	    }
	    if (isFunction(Date.prototype.toISOString)) {
	        // native implementation is ~50x faster, use it when we can
	        return this.toDate().toISOString();
	    }
	    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	}

	/**
	 * Return a human readable representation of a moment that can
	 * also be evaluated to get a new moment which is the same
	 *
	 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
	 */
	function inspect () {
	    if (!this.isValid()) {
	        return 'moment.invalid(/* ' + this._i + ' */)';
	    }
	    var func = 'moment';
	    var zone = '';
	    if (!this.isLocal()) {
	        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
	        zone = 'Z';
	    }
	    var prefix = '[' + func + '("]';
	    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
	    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
	    var suffix = zone + '[")]';

	    return this.format(prefix + year + datetime + suffix);
	}

	function format (inputString) {
	    if (!inputString) {
	        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
	    }
	    var output = formatMoment(this, inputString);
	    return this.localeData().postformat(output);
	}

	function from (time, withoutSuffix) {
	    if (this.isValid() &&
	            ((isMoment(time) && time.isValid()) ||
	             createLocal(time).isValid())) {
	        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	    } else {
	        return this.localeData().invalidDate();
	    }
	}

	function fromNow (withoutSuffix) {
	    return this.from(createLocal(), withoutSuffix);
	}

	function to (time, withoutSuffix) {
	    if (this.isValid() &&
	            ((isMoment(time) && time.isValid()) ||
	             createLocal(time).isValid())) {
	        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
	    } else {
	        return this.localeData().invalidDate();
	    }
	}

	function toNow (withoutSuffix) {
	    return this.to(createLocal(), withoutSuffix);
	}

	// If passed a locale key, it will set the locale for this
	// instance.  Otherwise, it will return the locale configuration
	// variables for this instance.
	function locale (key) {
	    var newLocaleData;

	    if (key === undefined) {
	        return this._locale._abbr;
	    } else {
	        newLocaleData = getLocale(key);
	        if (newLocaleData != null) {
	            this._locale = newLocaleData;
	        }
	        return this;
	    }
	}

	var lang = deprecate(
	    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	    function (key) {
	        if (key === undefined) {
	            return this.localeData();
	        } else {
	            return this.locale(key);
	        }
	    }
	);

	function localeData () {
	    return this._locale;
	}

	function startOf (units) {
	    units = normalizeUnits(units);
	    // the following switch intentionally omits break keywords
	    // to utilize falling through the cases.
	    switch (units) {
	        case 'year':
	            this.month(0);
	            /* falls through */
	        case 'quarter':
	        case 'month':
	            this.date(1);
	            /* falls through */
	        case 'week':
	        case 'isoWeek':
	        case 'day':
	        case 'date':
	            this.hours(0);
	            /* falls through */
	        case 'hour':
	            this.minutes(0);
	            /* falls through */
	        case 'minute':
	            this.seconds(0);
	            /* falls through */
	        case 'second':
	            this.milliseconds(0);
	    }

	    // weeks are a special case
	    if (units === 'week') {
	        this.weekday(0);
	    }
	    if (units === 'isoWeek') {
	        this.isoWeekday(1);
	    }

	    // quarters are also special
	    if (units === 'quarter') {
	        this.month(Math.floor(this.month() / 3) * 3);
	    }

	    return this;
	}

	function endOf (units) {
	    units = normalizeUnits(units);
	    if (units === undefined || units === 'millisecond') {
	        return this;
	    }

	    // 'date' is an alias for 'day', so it should be considered as such.
	    if (units === 'date') {
	        units = 'day';
	    }

	    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	}

	function valueOf () {
	    return this._d.valueOf() - ((this._offset || 0) * 60000);
	}

	function unix () {
	    return Math.floor(this.valueOf() / 1000);
	}

	function toDate () {
	    return new Date(this.valueOf());
	}

	function toArray () {
	    var m = this;
	    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	}

	function toObject () {
	    var m = this;
	    return {
	        years: m.year(),
	        months: m.month(),
	        date: m.date(),
	        hours: m.hours(),
	        minutes: m.minutes(),
	        seconds: m.seconds(),
	        milliseconds: m.milliseconds()
	    };
	}

	function toJSON () {
	    // new Date(NaN).toJSON() === null
	    return this.isValid() ? this.toISOString() : null;
	}

	function isValid$2 () {
	    return isValid(this);
	}

	function parsingFlags () {
	    return extend({}, getParsingFlags(this));
	}

	function invalidAt () {
	    return getParsingFlags(this).overflow;
	}

	function creationData() {
	    return {
	        input: this._i,
	        format: this._f,
	        locale: this._locale,
	        isUTC: this._isUTC,
	        strict: this._strict
	    };
	}

	// FORMATTING

	addFormatToken(0, ['gg', 2], 0, function () {
	    return this.weekYear() % 100;
	});

	addFormatToken(0, ['GG', 2], 0, function () {
	    return this.isoWeekYear() % 100;
	});

	function addWeekYearFormatToken (token, getter) {
	    addFormatToken(0, [token, token.length], 0, getter);
	}

	addWeekYearFormatToken('gggg',     'weekYear');
	addWeekYearFormatToken('ggggg',    'weekYear');
	addWeekYearFormatToken('GGGG',  'isoWeekYear');
	addWeekYearFormatToken('GGGGG', 'isoWeekYear');

	// ALIASES

	addUnitAlias('weekYear', 'gg');
	addUnitAlias('isoWeekYear', 'GG');

	// PRIORITY

	addUnitPriority('weekYear', 1);
	addUnitPriority('isoWeekYear', 1);


	// PARSING

	addRegexToken('G',      matchSigned);
	addRegexToken('g',      matchSigned);
	addRegexToken('GG',     match1to2, match2);
	addRegexToken('gg',     match1to2, match2);
	addRegexToken('GGGG',   match1to4, match4);
	addRegexToken('gggg',   match1to4, match4);
	addRegexToken('GGGGG',  match1to6, match6);
	addRegexToken('ggggg',  match1to6, match6);

	addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	    week[token.substr(0, 2)] = toInt(input);
	});

	addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	    week[token] = hooks.parseTwoDigitYear(input);
	});

	// MOMENTS

	function getSetWeekYear (input) {
	    return getSetWeekYearHelper.call(this,
	            input,
	            this.week(),
	            this.weekday(),
	            this.localeData()._week.dow,
	            this.localeData()._week.doy);
	}

	function getSetISOWeekYear (input) {
	    return getSetWeekYearHelper.call(this,
	            input, this.isoWeek(), this.isoWeekday(), 1, 4);
	}

	function getISOWeeksInYear () {
	    return weeksInYear(this.year(), 1, 4);
	}

	function getWeeksInYear () {
	    var weekInfo = this.localeData()._week;
	    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	}

	function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	    var weeksTarget;
	    if (input == null) {
	        return weekOfYear(this, dow, doy).year;
	    } else {
	        weeksTarget = weeksInYear(input, dow, doy);
	        if (week > weeksTarget) {
	            week = weeksTarget;
	        }
	        return setWeekAll.call(this, input, week, weekday, dow, doy);
	    }
	}

	function setWeekAll(weekYear, week, weekday, dow, doy) {
	    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

	    this.year(date.getUTCFullYear());
	    this.month(date.getUTCMonth());
	    this.date(date.getUTCDate());
	    return this;
	}

	// FORMATTING

	addFormatToken('Q', 0, 'Qo', 'quarter');

	// ALIASES

	addUnitAlias('quarter', 'Q');

	// PRIORITY

	addUnitPriority('quarter', 7);

	// PARSING

	addRegexToken('Q', match1);
	addParseToken('Q', function (input, array) {
	    array[MONTH] = (toInt(input) - 1) * 3;
	});

	// MOMENTS

	function getSetQuarter (input) {
	    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	}

	// FORMATTING

	addFormatToken('D', ['DD', 2], 'Do', 'date');

	// ALIASES

	addUnitAlias('date', 'D');

	// PRIOROITY
	addUnitPriority('date', 9);

	// PARSING

	addRegexToken('D',  match1to2);
	addRegexToken('DD', match1to2, match2);
	addRegexToken('Do', function (isStrict, locale) {
	    // TODO: Remove "ordinalParse" fallback in next major release.
	    return isStrict ?
	      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
	      locale._dayOfMonthOrdinalParseLenient;
	});

	addParseToken(['D', 'DD'], DATE);
	addParseToken('Do', function (input, array) {
	    array[DATE] = toInt(input.match(match1to2)[0], 10);
	});

	// MOMENTS

	var getSetDayOfMonth = makeGetSet('Date', true);

	// FORMATTING

	addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

	// ALIASES

	addUnitAlias('dayOfYear', 'DDD');

	// PRIORITY
	addUnitPriority('dayOfYear', 4);

	// PARSING

	addRegexToken('DDD',  match1to3);
	addRegexToken('DDDD', match3);
	addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	    config._dayOfYear = toInt(input);
	});

	// HELPERS

	// MOMENTS

	function getSetDayOfYear (input) {
	    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	}

	// FORMATTING

	addFormatToken('m', ['mm', 2], 0, 'minute');

	// ALIASES

	addUnitAlias('minute', 'm');

	// PRIORITY

	addUnitPriority('minute', 14);

	// PARSING

	addRegexToken('m',  match1to2);
	addRegexToken('mm', match1to2, match2);
	addParseToken(['m', 'mm'], MINUTE);

	// MOMENTS

	var getSetMinute = makeGetSet('Minutes', false);

	// FORMATTING

	addFormatToken('s', ['ss', 2], 0, 'second');

	// ALIASES

	addUnitAlias('second', 's');

	// PRIORITY

	addUnitPriority('second', 15);

	// PARSING

	addRegexToken('s',  match1to2);
	addRegexToken('ss', match1to2, match2);
	addParseToken(['s', 'ss'], SECOND);

	// MOMENTS

	var getSetSecond = makeGetSet('Seconds', false);

	// FORMATTING

	addFormatToken('S', 0, 0, function () {
	    return ~~(this.millisecond() / 100);
	});

	addFormatToken(0, ['SS', 2], 0, function () {
	    return ~~(this.millisecond() / 10);
	});

	addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	addFormatToken(0, ['SSSS', 4], 0, function () {
	    return this.millisecond() * 10;
	});
	addFormatToken(0, ['SSSSS', 5], 0, function () {
	    return this.millisecond() * 100;
	});
	addFormatToken(0, ['SSSSSS', 6], 0, function () {
	    return this.millisecond() * 1000;
	});
	addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	    return this.millisecond() * 10000;
	});
	addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	    return this.millisecond() * 100000;
	});
	addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	    return this.millisecond() * 1000000;
	});


	// ALIASES

	addUnitAlias('millisecond', 'ms');

	// PRIORITY

	addUnitPriority('millisecond', 16);

	// PARSING

	addRegexToken('S',    match1to3, match1);
	addRegexToken('SS',   match1to3, match2);
	addRegexToken('SSS',  match1to3, match3);

	var token;
	for (token = 'SSSS'; token.length <= 9; token += 'S') {
	    addRegexToken(token, matchUnsigned);
	}

	function parseMs(input, array) {
	    array[MILLISECOND] = toInt(('0.' + input) * 1000);
	}

	for (token = 'S'; token.length <= 9; token += 'S') {
	    addParseToken(token, parseMs);
	}
	// MOMENTS

	var getSetMillisecond = makeGetSet('Milliseconds', false);

	// FORMATTING

	addFormatToken('z',  0, 0, 'zoneAbbr');
	addFormatToken('zz', 0, 0, 'zoneName');

	// MOMENTS

	function getZoneAbbr () {
	    return this._isUTC ? 'UTC' : '';
	}

	function getZoneName () {
	    return this._isUTC ? 'Coordinated Universal Time' : '';
	}

	var proto = Moment.prototype;

	proto.add               = add;
	proto.calendar          = calendar$1;
	proto.clone             = clone;
	proto.diff              = diff;
	proto.endOf             = endOf;
	proto.format            = format;
	proto.from              = from;
	proto.fromNow           = fromNow;
	proto.to                = to;
	proto.toNow             = toNow;
	proto.get               = stringGet;
	proto.invalidAt         = invalidAt;
	proto.isAfter           = isAfter;
	proto.isBefore          = isBefore;
	proto.isBetween         = isBetween;
	proto.isSame            = isSame;
	proto.isSameOrAfter     = isSameOrAfter;
	proto.isSameOrBefore    = isSameOrBefore;
	proto.isValid           = isValid$2;
	proto.lang              = lang;
	proto.locale            = locale;
	proto.localeData        = localeData;
	proto.max               = prototypeMax;
	proto.min               = prototypeMin;
	proto.parsingFlags      = parsingFlags;
	proto.set               = stringSet;
	proto.startOf           = startOf;
	proto.subtract          = subtract;
	proto.toArray           = toArray;
	proto.toObject          = toObject;
	proto.toDate            = toDate;
	proto.toISOString       = toISOString;
	proto.inspect           = inspect;
	proto.toJSON            = toJSON;
	proto.toString          = toString;
	proto.unix              = unix;
	proto.valueOf           = valueOf;
	proto.creationData      = creationData;

	// Year
	proto.year       = getSetYear;
	proto.isLeapYear = getIsLeapYear;

	// Week Year
	proto.weekYear    = getSetWeekYear;
	proto.isoWeekYear = getSetISOWeekYear;

	// Quarter
	proto.quarter = proto.quarters = getSetQuarter;

	// Month
	proto.month       = getSetMonth;
	proto.daysInMonth = getDaysInMonth;

	// Week
	proto.week           = proto.weeks        = getSetWeek;
	proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
	proto.weeksInYear    = getWeeksInYear;
	proto.isoWeeksInYear = getISOWeeksInYear;

	// Day
	proto.date       = getSetDayOfMonth;
	proto.day        = proto.days             = getSetDayOfWeek;
	proto.weekday    = getSetLocaleDayOfWeek;
	proto.isoWeekday = getSetISODayOfWeek;
	proto.dayOfYear  = getSetDayOfYear;

	// Hour
	proto.hour = proto.hours = getSetHour;

	// Minute
	proto.minute = proto.minutes = getSetMinute;

	// Second
	proto.second = proto.seconds = getSetSecond;

	// Millisecond
	proto.millisecond = proto.milliseconds = getSetMillisecond;

	// Offset
	proto.utcOffset            = getSetOffset;
	proto.utc                  = setOffsetToUTC;
	proto.local                = setOffsetToLocal;
	proto.parseZone            = setOffsetToParsedOffset;
	proto.hasAlignedHourOffset = hasAlignedHourOffset;
	proto.isDST                = isDaylightSavingTime;
	proto.isLocal              = isLocal;
	proto.isUtcOffset          = isUtcOffset;
	proto.isUtc                = isUtc;
	proto.isUTC                = isUtc;

	// Timezone
	proto.zoneAbbr = getZoneAbbr;
	proto.zoneName = getZoneName;

	// Deprecations
	proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
	proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

	function createUnix (input) {
	    return createLocal(input * 1000);
	}

	function createInZone () {
	    return createLocal.apply(null, arguments).parseZone();
	}

	function preParsePostFormat (string) {
	    return string;
	}

	var proto$1 = Locale.prototype;

	proto$1.calendar        = calendar;
	proto$1.longDateFormat  = longDateFormat;
	proto$1.invalidDate     = invalidDate;
	proto$1.ordinal         = ordinal;
	proto$1.preparse        = preParsePostFormat;
	proto$1.postformat      = preParsePostFormat;
	proto$1.relativeTime    = relativeTime;
	proto$1.pastFuture      = pastFuture;
	proto$1.set             = set;

	// Month
	proto$1.months            =        localeMonths;
	proto$1.monthsShort       =        localeMonthsShort;
	proto$1.monthsParse       =        localeMonthsParse;
	proto$1.monthsRegex       = monthsRegex;
	proto$1.monthsShortRegex  = monthsShortRegex;

	// Week
	proto$1.week = localeWeek;
	proto$1.firstDayOfYear = localeFirstDayOfYear;
	proto$1.firstDayOfWeek = localeFirstDayOfWeek;

	// Day of Week
	proto$1.weekdays       =        localeWeekdays;
	proto$1.weekdaysMin    =        localeWeekdaysMin;
	proto$1.weekdaysShort  =        localeWeekdaysShort;
	proto$1.weekdaysParse  =        localeWeekdaysParse;

	proto$1.weekdaysRegex       =        weekdaysRegex;
	proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
	proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

	// Hours
	proto$1.isPM = localeIsPM;
	proto$1.meridiem = localeMeridiem;

	function get$1 (format, index, field, setter) {
	    var locale = getLocale();
	    var utc = createUTC().set(setter, index);
	    return locale[field](utc, format);
	}

	function listMonthsImpl (format, index, field) {
	    if (isNumber(format)) {
	        index = format;
	        format = undefined;
	    }

	    format = format || '';

	    if (index != null) {
	        return get$1(format, index, field, 'month');
	    }

	    var i;
	    var out = [];
	    for (i = 0; i < 12; i++) {
	        out[i] = get$1(format, i, field, 'month');
	    }
	    return out;
	}

	// ()
	// (5)
	// (fmt, 5)
	// (fmt)
	// (true)
	// (true, 5)
	// (true, fmt, 5)
	// (true, fmt)
	function listWeekdaysImpl (localeSorted, format, index, field) {
	    if (typeof localeSorted === 'boolean') {
	        if (isNumber(format)) {
	            index = format;
	            format = undefined;
	        }

	        format = format || '';
	    } else {
	        format = localeSorted;
	        index = format;
	        localeSorted = false;

	        if (isNumber(format)) {
	            index = format;
	            format = undefined;
	        }

	        format = format || '';
	    }

	    var locale = getLocale(),
	        shift = localeSorted ? locale._week.dow : 0;

	    if (index != null) {
	        return get$1(format, (index + shift) % 7, field, 'day');
	    }

	    var i;
	    var out = [];
	    for (i = 0; i < 7; i++) {
	        out[i] = get$1(format, (i + shift) % 7, field, 'day');
	    }
	    return out;
	}

	function listMonths (format, index) {
	    return listMonthsImpl(format, index, 'months');
	}

	function listMonthsShort (format, index) {
	    return listMonthsImpl(format, index, 'monthsShort');
	}

	function listWeekdays (localeSorted, format, index) {
	    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	}

	function listWeekdaysShort (localeSorted, format, index) {
	    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	}

	function listWeekdaysMin (localeSorted, format, index) {
	    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	}

	getSetGlobalLocale('en', {
	    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
	    ordinal : function (number) {
	        var b = number % 10,
	            output = (toInt(number % 100 / 10) === 1) ? 'th' :
	            (b === 1) ? 'st' :
	            (b === 2) ? 'nd' :
	            (b === 3) ? 'rd' : 'th';
	        return number + output;
	    }
	});

	// Side effect imports
	hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
	hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

	var mathAbs = Math.abs;

	function abs () {
	    var data           = this._data;

	    this._milliseconds = mathAbs(this._milliseconds);
	    this._days         = mathAbs(this._days);
	    this._months       = mathAbs(this._months);

	    data.milliseconds  = mathAbs(data.milliseconds);
	    data.seconds       = mathAbs(data.seconds);
	    data.minutes       = mathAbs(data.minutes);
	    data.hours         = mathAbs(data.hours);
	    data.months        = mathAbs(data.months);
	    data.years         = mathAbs(data.years);

	    return this;
	}

	function addSubtract$1 (duration, input, value, direction) {
	    var other = createDuration(input, value);

	    duration._milliseconds += direction * other._milliseconds;
	    duration._days         += direction * other._days;
	    duration._months       += direction * other._months;

	    return duration._bubble();
	}

	// supports only 2.0-style add(1, 's') or add(duration)
	function add$1 (input, value) {
	    return addSubtract$1(this, input, value, 1);
	}

	// supports only 2.0-style subtract(1, 's') or subtract(duration)
	function subtract$1 (input, value) {
	    return addSubtract$1(this, input, value, -1);
	}

	function absCeil (number) {
	    if (number < 0) {
	        return Math.floor(number);
	    } else {
	        return Math.ceil(number);
	    }
	}

	function bubble () {
	    var milliseconds = this._milliseconds;
	    var days         = this._days;
	    var months       = this._months;
	    var data         = this._data;
	    var seconds, minutes, hours, years, monthsFromDays;

	    // if we have a mix of positive and negative values, bubble down first
	    // check: https://github.com/moment/moment/issues/2166
	    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
	            (milliseconds <= 0 && days <= 0 && months <= 0))) {
	        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	        days = 0;
	        months = 0;
	    }

	    // The following code bubbles up values, see the tests for
	    // examples of what that means.
	    data.milliseconds = milliseconds % 1000;

	    seconds           = absFloor(milliseconds / 1000);
	    data.seconds      = seconds % 60;

	    minutes           = absFloor(seconds / 60);
	    data.minutes      = minutes % 60;

	    hours             = absFloor(minutes / 60);
	    data.hours        = hours % 24;

	    days += absFloor(hours / 24);

	    // convert days to months
	    monthsFromDays = absFloor(daysToMonths(days));
	    months += monthsFromDays;
	    days -= absCeil(monthsToDays(monthsFromDays));

	    // 12 months -> 1 year
	    years = absFloor(months / 12);
	    months %= 12;

	    data.days   = days;
	    data.months = months;
	    data.years  = years;

	    return this;
	}

	function daysToMonths (days) {
	    // 400 years have 146097 days (taking into account leap year rules)
	    // 400 years have 12 months === 4800
	    return days * 4800 / 146097;
	}

	function monthsToDays (months) {
	    // the reverse of daysToMonths
	    return months * 146097 / 4800;
	}

	function as (units) {
	    if (!this.isValid()) {
	        return NaN;
	    }
	    var days;
	    var months;
	    var milliseconds = this._milliseconds;

	    units = normalizeUnits(units);

	    if (units === 'month' || units === 'year') {
	        days   = this._days   + milliseconds / 864e5;
	        months = this._months + daysToMonths(days);
	        return units === 'month' ? months : months / 12;
	    } else {
	        // handle milliseconds separately because of floating point math errors (issue #1867)
	        days = this._days + Math.round(monthsToDays(this._months));
	        switch (units) {
	            case 'week'   : return days / 7     + milliseconds / 6048e5;
	            case 'day'    : return days         + milliseconds / 864e5;
	            case 'hour'   : return days * 24    + milliseconds / 36e5;
	            case 'minute' : return days * 1440  + milliseconds / 6e4;
	            case 'second' : return days * 86400 + milliseconds / 1000;
	            // Math.floor prevents floating point math errors here
	            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
	            default: throw new Error('Unknown unit ' + units);
	        }
	    }
	}

	// TODO: Use this.as('ms')?
	function valueOf$1 () {
	    if (!this.isValid()) {
	        return NaN;
	    }
	    return (
	        this._milliseconds +
	        this._days * 864e5 +
	        (this._months % 12) * 2592e6 +
	        toInt(this._months / 12) * 31536e6
	    );
	}

	function makeAs (alias) {
	    return function () {
	        return this.as(alias);
	    };
	}

	var asMilliseconds = makeAs('ms');
	var asSeconds      = makeAs('s');
	var asMinutes      = makeAs('m');
	var asHours        = makeAs('h');
	var asDays         = makeAs('d');
	var asWeeks        = makeAs('w');
	var asMonths       = makeAs('M');
	var asYears        = makeAs('y');

	function get$2 (units) {
	    units = normalizeUnits(units);
	    return this.isValid() ? this[units + 's']() : NaN;
	}

	function makeGetter(name) {
	    return function () {
	        return this.isValid() ? this._data[name] : NaN;
	    };
	}

	var milliseconds = makeGetter('milliseconds');
	var seconds      = makeGetter('seconds');
	var minutes      = makeGetter('minutes');
	var hours        = makeGetter('hours');
	var days         = makeGetter('days');
	var months       = makeGetter('months');
	var years        = makeGetter('years');

	function weeks () {
	    return absFloor(this.days() / 7);
	}

	var round = Math.round;
	var thresholds = {
	    ss: 44,         // a few seconds to seconds
	    s : 45,         // seconds to minute
	    m : 45,         // minutes to hour
	    h : 22,         // hours to day
	    d : 26,         // days to month
	    M : 11          // months to year
	};

	// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	}

	function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
	    var duration = createDuration(posNegDuration).abs();
	    var seconds  = round(duration.as('s'));
	    var minutes  = round(duration.as('m'));
	    var hours    = round(duration.as('h'));
	    var days     = round(duration.as('d'));
	    var months   = round(duration.as('M'));
	    var years    = round(duration.as('y'));

	    var a = seconds <= thresholds.ss && ['s', seconds]  ||
	            seconds < thresholds.s   && ['ss', seconds] ||
	            minutes <= 1             && ['m']           ||
	            minutes < thresholds.m   && ['mm', minutes] ||
	            hours   <= 1             && ['h']           ||
	            hours   < thresholds.h   && ['hh', hours]   ||
	            days    <= 1             && ['d']           ||
	            days    < thresholds.d   && ['dd', days]    ||
	            months  <= 1             && ['M']           ||
	            months  < thresholds.M   && ['MM', months]  ||
	            years   <= 1             && ['y']           || ['yy', years];

	    a[2] = withoutSuffix;
	    a[3] = +posNegDuration > 0;
	    a[4] = locale;
	    return substituteTimeAgo.apply(null, a);
	}

	// This function allows you to set the rounding function for relative time strings
	function getSetRelativeTimeRounding (roundingFunction) {
	    if (roundingFunction === undefined) {
	        return round;
	    }
	    if (typeof(roundingFunction) === 'function') {
	        round = roundingFunction;
	        return true;
	    }
	    return false;
	}

	// This function allows you to set a threshold for relative time strings
	function getSetRelativeTimeThreshold (threshold, limit) {
	    if (thresholds[threshold] === undefined) {
	        return false;
	    }
	    if (limit === undefined) {
	        return thresholds[threshold];
	    }
	    thresholds[threshold] = limit;
	    if (threshold === 's') {
	        thresholds.ss = limit - 1;
	    }
	    return true;
	}

	function humanize (withSuffix) {
	    if (!this.isValid()) {
	        return this.localeData().invalidDate();
	    }

	    var locale = this.localeData();
	    var output = relativeTime$1(this, !withSuffix, locale);

	    if (withSuffix) {
	        output = locale.pastFuture(+this, output);
	    }

	    return locale.postformat(output);
	}

	var abs$1 = Math.abs;

	function toISOString$1() {
	    // for ISO strings we do not use the normal bubbling rules:
	    //  * milliseconds bubble up until they become hours
	    //  * days do not bubble at all
	    //  * months bubble up until they become years
	    // This is because there is no context-free conversion between hours and days
	    // (think of clock changes)
	    // and also not between days and months (28-31 days per month)
	    if (!this.isValid()) {
	        return this.localeData().invalidDate();
	    }

	    var seconds = abs$1(this._milliseconds) / 1000;
	    var days         = abs$1(this._days);
	    var months       = abs$1(this._months);
	    var minutes, hours, years;

	    // 3600 seconds -> 60 minutes -> 1 hour
	    minutes           = absFloor(seconds / 60);
	    hours             = absFloor(minutes / 60);
	    seconds %= 60;
	    minutes %= 60;

	    // 12 months -> 1 year
	    years  = absFloor(months / 12);
	    months %= 12;


	    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	    var Y = years;
	    var M = months;
	    var D = days;
	    var h = hours;
	    var m = minutes;
	    var s = seconds;
	    var total = this.asSeconds();

	    if (!total) {
	        // this is the same as C#'s (Noda) and python (isodate)...
	        // but not other JS (goog.date)
	        return 'P0D';
	    }

	    return (total < 0 ? '-' : '') +
	        'P' +
	        (Y ? Y + 'Y' : '') +
	        (M ? M + 'M' : '') +
	        (D ? D + 'D' : '') +
	        ((h || m || s) ? 'T' : '') +
	        (h ? h + 'H' : '') +
	        (m ? m + 'M' : '') +
	        (s ? s + 'S' : '');
	}

	var proto$2 = Duration.prototype;

	proto$2.isValid        = isValid$1;
	proto$2.abs            = abs;
	proto$2.add            = add$1;
	proto$2.subtract       = subtract$1;
	proto$2.as             = as;
	proto$2.asMilliseconds = asMilliseconds;
	proto$2.asSeconds      = asSeconds;
	proto$2.asMinutes      = asMinutes;
	proto$2.asHours        = asHours;
	proto$2.asDays         = asDays;
	proto$2.asWeeks        = asWeeks;
	proto$2.asMonths       = asMonths;
	proto$2.asYears        = asYears;
	proto$2.valueOf        = valueOf$1;
	proto$2._bubble        = bubble;
	proto$2.get            = get$2;
	proto$2.milliseconds   = milliseconds;
	proto$2.seconds        = seconds;
	proto$2.minutes        = minutes;
	proto$2.hours          = hours;
	proto$2.days           = days;
	proto$2.weeks          = weeks;
	proto$2.months         = months;
	proto$2.years          = years;
	proto$2.humanize       = humanize;
	proto$2.toISOString    = toISOString$1;
	proto$2.toString       = toISOString$1;
	proto$2.toJSON         = toISOString$1;
	proto$2.locale         = locale;
	proto$2.localeData     = localeData;

	// Deprecations
	proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
	proto$2.lang = lang;

	// Side effect imports

	// FORMATTING

	addFormatToken('X', 0, 0, 'unix');
	addFormatToken('x', 0, 0, 'valueOf');

	// PARSING

	addRegexToken('x', matchSigned);
	addRegexToken('X', matchTimestamp);
	addParseToken('X', function (input, array, config) {
	    config._d = new Date(parseFloat(input, 10) * 1000);
	});
	addParseToken('x', function (input, array, config) {
	    config._d = new Date(toInt(input));
	});

	// Side effect imports


	hooks.version = '2.18.1';

	setHookCallback(createLocal);

	hooks.fn                    = proto;
	hooks.min                   = min;
	hooks.max                   = max;
	hooks.now                   = now;
	hooks.utc                   = createUTC;
	hooks.unix                  = createUnix;
	hooks.months                = listMonths;
	hooks.isDate                = isDate;
	hooks.locale                = getSetGlobalLocale;
	hooks.invalid               = createInvalid;
	hooks.duration              = createDuration;
	hooks.isMoment              = isMoment;
	hooks.weekdays              = listWeekdays;
	hooks.parseZone             = createInZone;
	hooks.localeData            = getLocale;
	hooks.isDuration            = isDuration;
	hooks.monthsShort           = listMonthsShort;
	hooks.weekdaysMin           = listWeekdaysMin;
	hooks.defineLocale          = defineLocale;
	hooks.updateLocale          = updateLocale;
	hooks.locales               = listLocales;
	hooks.weekdaysShort         = listWeekdaysShort;
	hooks.normalizeUnits        = normalizeUnits;
	hooks.relativeTimeRounding = getSetRelativeTimeRounding;
	hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
	hooks.calendarFormat        = getCalendarFormat;
	hooks.prototype             = proto;

	return hooks;

	})));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./af": 20,
		"./af.js": 20,
		"./ar": 21,
		"./ar-dz": 22,
		"./ar-dz.js": 22,
		"./ar-kw": 23,
		"./ar-kw.js": 23,
		"./ar-ly": 24,
		"./ar-ly.js": 24,
		"./ar-ma": 25,
		"./ar-ma.js": 25,
		"./ar-sa": 26,
		"./ar-sa.js": 26,
		"./ar-tn": 27,
		"./ar-tn.js": 27,
		"./ar.js": 21,
		"./az": 28,
		"./az.js": 28,
		"./be": 29,
		"./be.js": 29,
		"./bg": 30,
		"./bg.js": 30,
		"./bn": 31,
		"./bn.js": 31,
		"./bo": 32,
		"./bo.js": 32,
		"./br": 33,
		"./br.js": 33,
		"./bs": 34,
		"./bs.js": 34,
		"./ca": 35,
		"./ca.js": 35,
		"./cs": 36,
		"./cs.js": 36,
		"./cv": 37,
		"./cv.js": 37,
		"./cy": 38,
		"./cy.js": 38,
		"./da": 39,
		"./da.js": 39,
		"./de": 40,
		"./de-at": 41,
		"./de-at.js": 41,
		"./de-ch": 42,
		"./de-ch.js": 42,
		"./de.js": 40,
		"./dv": 43,
		"./dv.js": 43,
		"./el": 44,
		"./el.js": 44,
		"./en-au": 45,
		"./en-au.js": 45,
		"./en-ca": 46,
		"./en-ca.js": 46,
		"./en-gb": 47,
		"./en-gb.js": 47,
		"./en-ie": 48,
		"./en-ie.js": 48,
		"./en-nz": 49,
		"./en-nz.js": 49,
		"./eo": 50,
		"./eo.js": 50,
		"./es": 51,
		"./es-do": 52,
		"./es-do.js": 52,
		"./es.js": 51,
		"./et": 53,
		"./et.js": 53,
		"./eu": 54,
		"./eu.js": 54,
		"./fa": 55,
		"./fa.js": 55,
		"./fi": 56,
		"./fi.js": 56,
		"./fo": 57,
		"./fo.js": 57,
		"./fr": 58,
		"./fr-ca": 59,
		"./fr-ca.js": 59,
		"./fr-ch": 60,
		"./fr-ch.js": 60,
		"./fr.js": 58,
		"./fy": 61,
		"./fy.js": 61,
		"./gd": 62,
		"./gd.js": 62,
		"./gl": 63,
		"./gl.js": 63,
		"./gom-latn": 64,
		"./gom-latn.js": 64,
		"./he": 65,
		"./he.js": 65,
		"./hi": 66,
		"./hi.js": 66,
		"./hr": 67,
		"./hr.js": 67,
		"./hu": 68,
		"./hu.js": 68,
		"./hy-am": 69,
		"./hy-am.js": 69,
		"./id": 70,
		"./id.js": 70,
		"./is": 71,
		"./is.js": 71,
		"./it": 72,
		"./it.js": 72,
		"./ja": 73,
		"./ja.js": 73,
		"./jv": 74,
		"./jv.js": 74,
		"./ka": 75,
		"./ka.js": 75,
		"./kk": 76,
		"./kk.js": 76,
		"./km": 77,
		"./km.js": 77,
		"./kn": 78,
		"./kn.js": 78,
		"./ko": 79,
		"./ko.js": 79,
		"./ky": 80,
		"./ky.js": 80,
		"./lb": 81,
		"./lb.js": 81,
		"./lo": 82,
		"./lo.js": 82,
		"./lt": 83,
		"./lt.js": 83,
		"./lv": 84,
		"./lv.js": 84,
		"./me": 85,
		"./me.js": 85,
		"./mi": 86,
		"./mi.js": 86,
		"./mk": 87,
		"./mk.js": 87,
		"./ml": 88,
		"./ml.js": 88,
		"./mr": 89,
		"./mr.js": 89,
		"./ms": 90,
		"./ms-my": 91,
		"./ms-my.js": 91,
		"./ms.js": 90,
		"./my": 92,
		"./my.js": 92,
		"./nb": 93,
		"./nb.js": 93,
		"./ne": 94,
		"./ne.js": 94,
		"./nl": 95,
		"./nl-be": 96,
		"./nl-be.js": 96,
		"./nl.js": 95,
		"./nn": 97,
		"./nn.js": 97,
		"./pa-in": 98,
		"./pa-in.js": 98,
		"./pl": 99,
		"./pl.js": 99,
		"./pt": 100,
		"./pt-br": 101,
		"./pt-br.js": 101,
		"./pt.js": 100,
		"./ro": 102,
		"./ro.js": 102,
		"./ru": 103,
		"./ru.js": 103,
		"./sd": 104,
		"./sd.js": 104,
		"./se": 105,
		"./se.js": 105,
		"./si": 106,
		"./si.js": 106,
		"./sk": 107,
		"./sk.js": 107,
		"./sl": 108,
		"./sl.js": 108,
		"./sq": 109,
		"./sq.js": 109,
		"./sr": 110,
		"./sr-cyrl": 111,
		"./sr-cyrl.js": 111,
		"./sr.js": 110,
		"./ss": 112,
		"./ss.js": 112,
		"./sv": 113,
		"./sv.js": 113,
		"./sw": 114,
		"./sw.js": 114,
		"./ta": 115,
		"./ta.js": 115,
		"./te": 116,
		"./te.js": 116,
		"./tet": 117,
		"./tet.js": 117,
		"./th": 118,
		"./th.js": 118,
		"./tl-ph": 119,
		"./tl-ph.js": 119,
		"./tlh": 120,
		"./tlh.js": 120,
		"./tr": 121,
		"./tr.js": 121,
		"./tzl": 122,
		"./tzl.js": 122,
		"./tzm": 123,
		"./tzm-latn": 124,
		"./tzm-latn.js": 124,
		"./tzm.js": 123,
		"./uk": 125,
		"./uk.js": 125,
		"./ur": 126,
		"./ur.js": 126,
		"./uz": 127,
		"./uz-latn": 128,
		"./uz-latn.js": 128,
		"./uz.js": 127,
		"./vi": 129,
		"./vi.js": 129,
		"./x-pseudo": 130,
		"./x-pseudo.js": 130,
		"./yo": 131,
		"./yo.js": 131,
		"./zh-cn": 132,
		"./zh-cn.js": 132,
		"./zh-hk": 133,
		"./zh-hk.js": 133,
		"./zh-tw": 134,
		"./zh-tw.js": 134
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 19;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Afrikaans [af]
	//! author : Werner Mollentze : https://github.com/wernerm

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var af = moment.defineLocale('af', {
	    months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
	    monthsShort : 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
	    weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
	    weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
	    weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
	    meridiemParse: /vm|nm/i,
	    isPM : function (input) {
	        return /^nm$/i.test(input);
	    },
	    meridiem : function (hours, minutes, isLower) {
	        if (hours < 12) {
	            return isLower ? 'vm' : 'VM';
	        } else {
	            return isLower ? 'nm' : 'NM';
	        }
	    },
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[Vandag om] LT',
	        nextDay : '[Môre om] LT',
	        nextWeek : 'dddd [om] LT',
	        lastDay : '[Gister om] LT',
	        lastWeek : '[Laas] dddd [om] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'oor %s',
	        past : '%s gelede',
	        s : '\'n paar sekondes',
	        m : '\'n minuut',
	        mm : '%d minute',
	        h : '\'n uur',
	        hh : '%d ure',
	        d : '\'n dag',
	        dd : '%d dae',
	        M : '\'n maand',
	        MM : '%d maande',
	        y : '\'n jaar',
	        yy : '%d jaar'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
	    ordinal : function (number) {
	        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
	    },
	    week : {
	        dow : 1, // Maandag is die eerste dag van die week.
	        doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
	    }
	});

	return af;

	})));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic [ar]
	//! author : Abdel Said: https://github.com/abdelsaid
	//! author : Ahmed Elkhatib
	//! author : forabi https://github.com/forabi

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '١',
	    '2': '٢',
	    '3': '٣',
	    '4': '٤',
	    '5': '٥',
	    '6': '٦',
	    '7': '٧',
	    '8': '٨',
	    '9': '٩',
	    '0': '٠'
	};
	var numberMap = {
	    '١': '1',
	    '٢': '2',
	    '٣': '3',
	    '٤': '4',
	    '٥': '5',
	    '٦': '6',
	    '٧': '7',
	    '٨': '8',
	    '٩': '9',
	    '٠': '0'
	};
	var pluralForm = function (n) {
	    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	};
	var plurals = {
	    s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	    m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	    h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	    d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	    M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	    y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	};
	var pluralize = function (u) {
	    return function (number, withoutSuffix, string, isFuture) {
	        var f = pluralForm(number),
	            str = plurals[u][pluralForm(number)];
	        if (f === 2) {
	            str = str[withoutSuffix ? 0 : 1];
	        }
	        return str.replace(/%d/i, number);
	    };
	};
	var months = [
	    'كانون الثاني يناير',
	    'شباط فبراير',
	    'آذار مارس',
	    'نيسان أبريل',
	    'أيار مايو',
	    'حزيران يونيو',
	    'تموز يوليو',
	    'آب أغسطس',
	    'أيلول سبتمبر',
	    'تشرين الأول أكتوبر',
	    'تشرين الثاني نوفمبر',
	    'كانون الأول ديسمبر'
	];

	var ar = moment.defineLocale('ar', {
	    months : months,
	    monthsShort : months,
	    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	    weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'D/\u200FM/\u200FYYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    meridiemParse: /ص|م/,
	    isPM : function (input) {
	        return 'م' === input;
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 12) {
	            return 'ص';
	        } else {
	            return 'م';
	        }
	    },
	    calendar : {
	        sameDay: '[اليوم عند الساعة] LT',
	        nextDay: '[غدًا عند الساعة] LT',
	        nextWeek: 'dddd [عند الساعة] LT',
	        lastDay: '[أمس عند الساعة] LT',
	        lastWeek: 'dddd [عند الساعة] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'بعد %s',
	        past : 'منذ %s',
	        s : pluralize('s'),
	        m : pluralize('m'),
	        mm : pluralize('m'),
	        h : pluralize('h'),
	        hh : pluralize('h'),
	        d : pluralize('d'),
	        dd : pluralize('d'),
	        M : pluralize('M'),
	        MM : pluralize('M'),
	        y : pluralize('y'),
	        yy : pluralize('y')
	    },
	    preparse: function (string) {
	        return string.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	            return numberMap[match];
	        }).replace(/،/g, ',');
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        }).replace(/,/g, '،');
	    },
	    week : {
	        dow : 6, // Saturday is the first day of the week.
	        doy : 12  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return ar;

	})));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Algeria) [ar-dz]
	//! author : Noureddine LOUAHEDJ : https://github.com/noureddineme

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var arDz = moment.defineLocale('ar-dz', {
	    months : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	    monthsShort : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	    weekdaysShort : 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	    weekdaysMin : 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[اليوم على الساعة] LT',
	        nextDay: '[غدا على الساعة] LT',
	        nextWeek: 'dddd [على الساعة] LT',
	        lastDay: '[أمس على الساعة] LT',
	        lastWeek: 'dddd [على الساعة] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'في %s',
	        past : 'منذ %s',
	        s : 'ثوان',
	        m : 'دقيقة',
	        mm : '%d دقائق',
	        h : 'ساعة',
	        hh : '%d ساعات',
	        d : 'يوم',
	        dd : '%d أيام',
	        M : 'شهر',
	        MM : '%d أشهر',
	        y : 'سنة',
	        yy : '%d سنوات'
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 4  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return arDz;

	})));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Kuwait) [ar-kw]
	//! author : Nusret Parlak: https://github.com/nusretparlak

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var arKw = moment.defineLocale('ar-kw', {
	    months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	    monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	    weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	    weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[اليوم على الساعة] LT',
	        nextDay: '[غدا على الساعة] LT',
	        nextWeek: 'dddd [على الساعة] LT',
	        lastDay: '[أمس على الساعة] LT',
	        lastWeek: 'dddd [على الساعة] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'في %s',
	        past : 'منذ %s',
	        s : 'ثوان',
	        m : 'دقيقة',
	        mm : '%d دقائق',
	        h : 'ساعة',
	        hh : '%d ساعات',
	        d : 'يوم',
	        dd : '%d أيام',
	        M : 'شهر',
	        MM : '%d أشهر',
	        y : 'سنة',
	        yy : '%d سنوات'
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 12  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return arKw;

	})));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Lybia) [ar-ly]
	//! author : Ali Hmer: https://github.com/kikoanis

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '1',
	    '2': '2',
	    '3': '3',
	    '4': '4',
	    '5': '5',
	    '6': '6',
	    '7': '7',
	    '8': '8',
	    '9': '9',
	    '0': '0'
	};
	var pluralForm = function (n) {
	    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	};
	var plurals = {
	    s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	    m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	    h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	    d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	    M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	    y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	};
	var pluralize = function (u) {
	    return function (number, withoutSuffix, string, isFuture) {
	        var f = pluralForm(number),
	            str = plurals[u][pluralForm(number)];
	        if (f === 2) {
	            str = str[withoutSuffix ? 0 : 1];
	        }
	        return str.replace(/%d/i, number);
	    };
	};
	var months = [
	    'يناير',
	    'فبراير',
	    'مارس',
	    'أبريل',
	    'مايو',
	    'يونيو',
	    'يوليو',
	    'أغسطس',
	    'سبتمبر',
	    'أكتوبر',
	    'نوفمبر',
	    'ديسمبر'
	];

	var arLy = moment.defineLocale('ar-ly', {
	    months : months,
	    monthsShort : months,
	    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	    weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'D/\u200FM/\u200FYYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    meridiemParse: /ص|م/,
	    isPM : function (input) {
	        return 'م' === input;
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 12) {
	            return 'ص';
	        } else {
	            return 'م';
	        }
	    },
	    calendar : {
	        sameDay: '[اليوم عند الساعة] LT',
	        nextDay: '[غدًا عند الساعة] LT',
	        nextWeek: 'dddd [عند الساعة] LT',
	        lastDay: '[أمس عند الساعة] LT',
	        lastWeek: 'dddd [عند الساعة] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'بعد %s',
	        past : 'منذ %s',
	        s : pluralize('s'),
	        m : pluralize('m'),
	        mm : pluralize('m'),
	        h : pluralize('h'),
	        hh : pluralize('h'),
	        d : pluralize('d'),
	        dd : pluralize('d'),
	        M : pluralize('M'),
	        MM : pluralize('M'),
	        y : pluralize('y'),
	        yy : pluralize('y')
	    },
	    preparse: function (string) {
	        return string.replace(/\u200f/g, '').replace(/،/g, ',');
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        }).replace(/,/g, '،');
	    },
	    week : {
	        dow : 6, // Saturday is the first day of the week.
	        doy : 12  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return arLy;

	})));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Morocco) [ar-ma]
	//! author : ElFadili Yassine : https://github.com/ElFadiliY
	//! author : Abdel Said : https://github.com/abdelsaid

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var arMa = moment.defineLocale('ar-ma', {
	    months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	    monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	    weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	    weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[اليوم على الساعة] LT',
	        nextDay: '[غدا على الساعة] LT',
	        nextWeek: 'dddd [على الساعة] LT',
	        lastDay: '[أمس على الساعة] LT',
	        lastWeek: 'dddd [على الساعة] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'في %s',
	        past : 'منذ %s',
	        s : 'ثوان',
	        m : 'دقيقة',
	        mm : '%d دقائق',
	        h : 'ساعة',
	        hh : '%d ساعات',
	        d : 'يوم',
	        dd : '%d أيام',
	        M : 'شهر',
	        MM : '%d أشهر',
	        y : 'سنة',
	        yy : '%d سنوات'
	    },
	    week : {
	        dow : 6, // Saturday is the first day of the week.
	        doy : 12  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return arMa;

	})));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Saudi Arabia) [ar-sa]
	//! author : Suhail Alkowaileet : https://github.com/xsoh

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '١',
	    '2': '٢',
	    '3': '٣',
	    '4': '٤',
	    '5': '٥',
	    '6': '٦',
	    '7': '٧',
	    '8': '٨',
	    '9': '٩',
	    '0': '٠'
	};
	var numberMap = {
	    '١': '1',
	    '٢': '2',
	    '٣': '3',
	    '٤': '4',
	    '٥': '5',
	    '٦': '6',
	    '٧': '7',
	    '٨': '8',
	    '٩': '9',
	    '٠': '0'
	};

	var arSa = moment.defineLocale('ar-sa', {
	    months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	    monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	    weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    meridiemParse: /ص|م/,
	    isPM : function (input) {
	        return 'م' === input;
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 12) {
	            return 'ص';
	        } else {
	            return 'م';
	        }
	    },
	    calendar : {
	        sameDay: '[اليوم على الساعة] LT',
	        nextDay: '[غدا على الساعة] LT',
	        nextWeek: 'dddd [على الساعة] LT',
	        lastDay: '[أمس على الساعة] LT',
	        lastWeek: 'dddd [على الساعة] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'في %s',
	        past : 'منذ %s',
	        s : 'ثوان',
	        m : 'دقيقة',
	        mm : '%d دقائق',
	        h : 'ساعة',
	        hh : '%d ساعات',
	        d : 'يوم',
	        dd : '%d أيام',
	        M : 'شهر',
	        MM : '%d أشهر',
	        y : 'سنة',
	        yy : '%d سنوات'
	    },
	    preparse: function (string) {
	        return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	            return numberMap[match];
	        }).replace(/،/g, ',');
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        }).replace(/,/g, '،');
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return arSa;

	})));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale  :  Arabic (Tunisia) [ar-tn]
	//! author : Nader Toukabri : https://github.com/naderio

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var arTn = moment.defineLocale('ar-tn', {
	    months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	    monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar: {
	        sameDay: '[اليوم على الساعة] LT',
	        nextDay: '[غدا على الساعة] LT',
	        nextWeek: 'dddd [على الساعة] LT',
	        lastDay: '[أمس على الساعة] LT',
	        lastWeek: 'dddd [على الساعة] LT',
	        sameElse: 'L'
	    },
	    relativeTime: {
	        future: 'في %s',
	        past: 'منذ %s',
	        s: 'ثوان',
	        m: 'دقيقة',
	        mm: '%d دقائق',
	        h: 'ساعة',
	        hh: '%d ساعات',
	        d: 'يوم',
	        dd: '%d أيام',
	        M: 'شهر',
	        MM: '%d أشهر',
	        y: 'سنة',
	        yy: '%d سنوات'
	    },
	    week: {
	        dow: 1, // Monday is the first day of the week.
	        doy: 4 // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return arTn;

	})));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Azerbaijani [az]
	//! author : topchiyev : https://github.com/topchiyev

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var suffixes = {
	    1: '-inci',
	    5: '-inci',
	    8: '-inci',
	    70: '-inci',
	    80: '-inci',
	    2: '-nci',
	    7: '-nci',
	    20: '-nci',
	    50: '-nci',
	    3: '-üncü',
	    4: '-üncü',
	    100: '-üncü',
	    6: '-ncı',
	    9: '-uncu',
	    10: '-uncu',
	    30: '-uncu',
	    60: '-ıncı',
	    90: '-ıncı'
	};

	var az = moment.defineLocale('az', {
	    months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
	    monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
	    weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
	    weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
	    weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[bugün saat] LT',
	        nextDay : '[sabah saat] LT',
	        nextWeek : '[gələn həftə] dddd [saat] LT',
	        lastDay : '[dünən] LT',
	        lastWeek : '[keçən həftə] dddd [saat] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s sonra',
	        past : '%s əvvəl',
	        s : 'birneçə saniyyə',
	        m : 'bir dəqiqə',
	        mm : '%d dəqiqə',
	        h : 'bir saat',
	        hh : '%d saat',
	        d : 'bir gün',
	        dd : '%d gün',
	        M : 'bir ay',
	        MM : '%d ay',
	        y : 'bir il',
	        yy : '%d il'
	    },
	    meridiemParse: /gecə|səhər|gündüz|axşam/,
	    isPM : function (input) {
	        return /^(gündüz|axşam)$/.test(input);
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'gecə';
	        } else if (hour < 12) {
	            return 'səhər';
	        } else if (hour < 17) {
	            return 'gündüz';
	        } else {
	            return 'axşam';
	        }
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
	    ordinal : function (number) {
	        if (number === 0) {  // special case for zero
	            return number + '-ıncı';
	        }
	        var a = number % 10,
	            b = number % 100 - a,
	            c = number >= 100 ? 100 : null;
	        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return az;

	})));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Belarusian [be]
	//! author : Dmitry Demidov : https://github.com/demidov91
	//! author: Praleska: http://praleska.pro/
	//! Author : Menelion Elensúle : https://github.com/Oire

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function plural(word, num) {
	    var forms = word.split('_');
	    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	}
	function relativeTimeWithPlural(number, withoutSuffix, key) {
	    var format = {
	        'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
	        'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
	        'dd': 'дзень_дні_дзён',
	        'MM': 'месяц_месяцы_месяцаў',
	        'yy': 'год_гады_гадоў'
	    };
	    if (key === 'm') {
	        return withoutSuffix ? 'хвіліна' : 'хвіліну';
	    }
	    else if (key === 'h') {
	        return withoutSuffix ? 'гадзіна' : 'гадзіну';
	    }
	    else {
	        return number + ' ' + plural(format[key], +number);
	    }
	}

	var be = moment.defineLocale('be', {
	    months : {
	        format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
	        standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
	    },
	    monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
	    weekdays : {
	        format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
	        standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
	        isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
	    },
	    weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	    weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY г.',
	        LLL : 'D MMMM YYYY г., HH:mm',
	        LLLL : 'dddd, D MMMM YYYY г., HH:mm'
	    },
	    calendar : {
	        sameDay: '[Сёння ў] LT',
	        nextDay: '[Заўтра ў] LT',
	        lastDay: '[Учора ў] LT',
	        nextWeek: function () {
	            return '[У] dddd [ў] LT';
	        },
	        lastWeek: function () {
	            switch (this.day()) {
	                case 0:
	                case 3:
	                case 5:
	                case 6:
	                    return '[У мінулую] dddd [ў] LT';
	                case 1:
	                case 2:
	                case 4:
	                    return '[У мінулы] dddd [ў] LT';
	            }
	        },
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'праз %s',
	        past : '%s таму',
	        s : 'некалькі секунд',
	        m : relativeTimeWithPlural,
	        mm : relativeTimeWithPlural,
	        h : relativeTimeWithPlural,
	        hh : relativeTimeWithPlural,
	        d : 'дзень',
	        dd : relativeTimeWithPlural,
	        M : 'месяц',
	        MM : relativeTimeWithPlural,
	        y : 'год',
	        yy : relativeTimeWithPlural
	    },
	    meridiemParse: /ночы|раніцы|дня|вечара/,
	    isPM : function (input) {
	        return /^(дня|вечара)$/.test(input);
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'ночы';
	        } else if (hour < 12) {
	            return 'раніцы';
	        } else if (hour < 17) {
	            return 'дня';
	        } else {
	            return 'вечара';
	        }
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
	    ordinal: function (number, period) {
	        switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	            case 'w':
	            case 'W':
	                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
	            case 'D':
	                return number + '-га';
	            default:
	                return number;
	        }
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return be;

	})));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bulgarian [bg]
	//! author : Krasen Borisov : https://github.com/kraz

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var bg = moment.defineLocale('bg', {
	    months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
	    monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
	    weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
	    weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
	    weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'D.MM.YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY H:mm',
	        LLLL : 'dddd, D MMMM YYYY H:mm'
	    },
	    calendar : {
	        sameDay : '[Днес в] LT',
	        nextDay : '[Утре в] LT',
	        nextWeek : 'dddd [в] LT',
	        lastDay : '[Вчера в] LT',
	        lastWeek : function () {
	            switch (this.day()) {
	                case 0:
	                case 3:
	                case 6:
	                    return '[В изминалата] dddd [в] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[В изминалия] dddd [в] LT';
	            }
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'след %s',
	        past : 'преди %s',
	        s : 'няколко секунди',
	        m : 'минута',
	        mm : '%d минути',
	        h : 'час',
	        hh : '%d часа',
	        d : 'ден',
	        dd : '%d дни',
	        M : 'месец',
	        MM : '%d месеца',
	        y : 'година',
	        yy : '%d години'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	    ordinal : function (number) {
	        var lastDigit = number % 10,
	            last2Digits = number % 100;
	        if (number === 0) {
	            return number + '-ев';
	        } else if (last2Digits === 0) {
	            return number + '-ен';
	        } else if (last2Digits > 10 && last2Digits < 20) {
	            return number + '-ти';
	        } else if (lastDigit === 1) {
	            return number + '-ви';
	        } else if (lastDigit === 2) {
	            return number + '-ри';
	        } else if (lastDigit === 7 || lastDigit === 8) {
	            return number + '-ми';
	        } else {
	            return number + '-ти';
	        }
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return bg;

	})));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bengali [bn]
	//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '১',
	    '2': '২',
	    '3': '৩',
	    '4': '৪',
	    '5': '৫',
	    '6': '৬',
	    '7': '৭',
	    '8': '৮',
	    '9': '৯',
	    '0': '০'
	};
	var numberMap = {
	    '১': '1',
	    '২': '2',
	    '৩': '3',
	    '৪': '4',
	    '৫': '5',
	    '৬': '6',
	    '৭': '7',
	    '৮': '8',
	    '৯': '9',
	    '০': '0'
	};

	var bn = moment.defineLocale('bn', {
	    months : 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
	    monthsShort : 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
	    weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
	    weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
	    weekdaysMin : 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
	    longDateFormat : {
	        LT : 'A h:mm সময়',
	        LTS : 'A h:mm:ss সময়',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY, A h:mm সময়',
	        LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
	    },
	    calendar : {
	        sameDay : '[আজ] LT',
	        nextDay : '[আগামীকাল] LT',
	        nextWeek : 'dddd, LT',
	        lastDay : '[গতকাল] LT',
	        lastWeek : '[গত] dddd, LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s পরে',
	        past : '%s আগে',
	        s : 'কয়েক সেকেন্ড',
	        m : 'এক মিনিট',
	        mm : '%d মিনিট',
	        h : 'এক ঘন্টা',
	        hh : '%d ঘন্টা',
	        d : 'এক দিন',
	        dd : '%d দিন',
	        M : 'এক মাস',
	        MM : '%d মাস',
	        y : 'এক বছর',
	        yy : '%d বছর'
	    },
	    preparse: function (string) {
	        return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
	            return numberMap[match];
	        });
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        });
	    },
	    meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if ((meridiem === 'রাত' && hour >= 4) ||
	                (meridiem === 'দুপুর' && hour < 5) ||
	                meridiem === 'বিকাল') {
	            return hour + 12;
	        } else {
	            return hour;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'রাত';
	        } else if (hour < 10) {
	            return 'সকাল';
	        } else if (hour < 17) {
	            return 'দুপুর';
	        } else if (hour < 20) {
	            return 'বিকাল';
	        } else {
	            return 'রাত';
	        }
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return bn;

	})));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tibetan [bo]
	//! author : Thupten N. Chakrishar : https://github.com/vajradog

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '༡',
	    '2': '༢',
	    '3': '༣',
	    '4': '༤',
	    '5': '༥',
	    '6': '༦',
	    '7': '༧',
	    '8': '༨',
	    '9': '༩',
	    '0': '༠'
	};
	var numberMap = {
	    '༡': '1',
	    '༢': '2',
	    '༣': '3',
	    '༤': '4',
	    '༥': '5',
	    '༦': '6',
	    '༧': '7',
	    '༨': '8',
	    '༩': '9',
	    '༠': '0'
	};

	var bo = moment.defineLocale('bo', {
	    months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	    monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	    weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
	    weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	    weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	    longDateFormat : {
	        LT : 'A h:mm',
	        LTS : 'A h:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY, A h:mm',
	        LLLL : 'dddd, D MMMM YYYY, A h:mm'
	    },
	    calendar : {
	        sameDay : '[དི་རིང] LT',
	        nextDay : '[སང་ཉིན] LT',
	        nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
	        lastDay : '[ཁ་སང] LT',
	        lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s ལ་',
	        past : '%s སྔན་ལ',
	        s : 'ལམ་སང',
	        m : 'སྐར་མ་གཅིག',
	        mm : '%d སྐར་མ',
	        h : 'ཆུ་ཚོད་གཅིག',
	        hh : '%d ཆུ་ཚོད',
	        d : 'ཉིན་གཅིག',
	        dd : '%d ཉིན་',
	        M : 'ཟླ་བ་གཅིག',
	        MM : '%d ཟླ་བ',
	        y : 'ལོ་གཅིག',
	        yy : '%d ལོ'
	    },
	    preparse: function (string) {
	        return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
	            return numberMap[match];
	        });
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        });
	    },
	    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
	                (meridiem === 'ཉིན་གུང' && hour < 5) ||
	                meridiem === 'དགོང་དག') {
	            return hour + 12;
	        } else {
	            return hour;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'མཚན་མོ';
	        } else if (hour < 10) {
	            return 'ཞོགས་ཀས';
	        } else if (hour < 17) {
	            return 'ཉིན་གུང';
	        } else if (hour < 20) {
	            return 'དགོང་དག';
	        } else {
	            return 'མཚན་མོ';
	        }
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return bo;

	})));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Breton [br]
	//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function relativeTimeWithMutation(number, withoutSuffix, key) {
	    var format = {
	        'mm': 'munutenn',
	        'MM': 'miz',
	        'dd': 'devezh'
	    };
	    return number + ' ' + mutation(format[key], number);
	}
	function specialMutationForYears(number) {
	    switch (lastNumber(number)) {
	        case 1:
	        case 3:
	        case 4:
	        case 5:
	        case 9:
	            return number + ' bloaz';
	        default:
	            return number + ' vloaz';
	    }
	}
	function lastNumber(number) {
	    if (number > 9) {
	        return lastNumber(number % 10);
	    }
	    return number;
	}
	function mutation(text, number) {
	    if (number === 2) {
	        return softMutation(text);
	    }
	    return text;
	}
	function softMutation(text) {
	    var mutationTable = {
	        'm': 'v',
	        'b': 'v',
	        'd': 'z'
	    };
	    if (mutationTable[text.charAt(0)] === undefined) {
	        return text;
	    }
	    return mutationTable[text.charAt(0)] + text.substring(1);
	}

	var br = moment.defineLocale('br', {
	    months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
	    monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
	    weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
	    weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
	    weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'h[e]mm A',
	        LTS : 'h[e]mm:ss A',
	        L : 'DD/MM/YYYY',
	        LL : 'D [a viz] MMMM YYYY',
	        LLL : 'D [a viz] MMMM YYYY h[e]mm A',
	        LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
	    },
	    calendar : {
	        sameDay : '[Hiziv da] LT',
	        nextDay : '[Warc\'hoazh da] LT',
	        nextWeek : 'dddd [da] LT',
	        lastDay : '[Dec\'h da] LT',
	        lastWeek : 'dddd [paset da] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'a-benn %s',
	        past : '%s \'zo',
	        s : 'un nebeud segondennoù',
	        m : 'ur vunutenn',
	        mm : relativeTimeWithMutation,
	        h : 'un eur',
	        hh : '%d eur',
	        d : 'un devezh',
	        dd : relativeTimeWithMutation,
	        M : 'ur miz',
	        MM : relativeTimeWithMutation,
	        y : 'ur bloaz',
	        yy : specialMutationForYears
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
	    ordinal : function (number) {
	        var output = (number === 1) ? 'añ' : 'vet';
	        return number + output;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return br;

	})));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bosnian [bs]
	//! author : Nedim Cholich : https://github.com/frontyard
	//! based on (hr) translation by Bojan Marković

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function translate(number, withoutSuffix, key) {
	    var result = number + ' ';
	    switch (key) {
	        case 'm':
	            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	        case 'mm':
	            if (number === 1) {
	                result += 'minuta';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'minute';
	            } else {
	                result += 'minuta';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'jedan sat' : 'jednog sata';
	        case 'hh':
	            if (number === 1) {
	                result += 'sat';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'sata';
	            } else {
	                result += 'sati';
	            }
	            return result;
	        case 'dd':
	            if (number === 1) {
	                result += 'dan';
	            } else {
	                result += 'dana';
	            }
	            return result;
	        case 'MM':
	            if (number === 1) {
	                result += 'mjesec';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'mjeseca';
	            } else {
	                result += 'mjeseci';
	            }
	            return result;
	        case 'yy':
	            if (number === 1) {
	                result += 'godina';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'godine';
	            } else {
	                result += 'godina';
	            }
	            return result;
	    }
	}

	var bs = moment.defineLocale('bs', {
	    months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
	    monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	    monthsParseExact: true,
	    weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	    weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	    weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY H:mm',
	        LLLL : 'dddd, D. MMMM YYYY H:mm'
	    },
	    calendar : {
	        sameDay  : '[danas u] LT',
	        nextDay  : '[sutra u] LT',
	        nextWeek : function () {
	            switch (this.day()) {
	                case 0:
	                    return '[u] [nedjelju] [u] LT';
	                case 3:
	                    return '[u] [srijedu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	            }
	        },
	        lastDay  : '[jučer u] LT',
	        lastWeek : function () {
	            switch (this.day()) {
	                case 0:
	                case 3:
	                    return '[prošlu] dddd [u] LT';
	                case 6:
	                    return '[prošle] [subote] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prošli] dddd [u] LT';
	            }
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'za %s',
	        past   : 'prije %s',
	        s      : 'par sekundi',
	        m      : translate,
	        mm     : translate,
	        h      : translate,
	        hh     : translate,
	        d      : 'dan',
	        dd     : translate,
	        M      : 'mjesec',
	        MM     : translate,
	        y      : 'godinu',
	        yy     : translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return bs;

	})));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Catalan [ca]
	//! author : Juan G. Hurtado : https://github.com/juanghurtado

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var ca = moment.defineLocale('ca', {
	    months : {
	        standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
	        format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
	        isFormat: /D[oD]?(\s)+MMMM/
	    },
	    monthsShort : 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
	    weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
	    weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : '[el] D MMMM [de] YYYY',
	        ll : 'D MMM YYYY',
	        LLL : '[el] D MMMM [de] YYYY [a les] H:mm',
	        lll : 'D MMM YYYY, H:mm',
	        LLLL : '[el] dddd D MMMM [de] YYYY [a les] H:mm',
	        llll : 'ddd D MMM YYYY, H:mm'
	    },
	    calendar : {
	        sameDay : function () {
	            return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	        },
	        nextDay : function () {
	            return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	        },
	        nextWeek : function () {
	            return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	        },
	        lastDay : function () {
	            return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	        },
	        lastWeek : function () {
	            return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'd\'aquí %s',
	        past : 'fa %s',
	        s : 'uns segons',
	        m : 'un minut',
	        mm : '%d minuts',
	        h : 'una hora',
	        hh : '%d hores',
	        d : 'un dia',
	        dd : '%d dies',
	        M : 'un mes',
	        MM : '%d mesos',
	        y : 'un any',
	        yy : '%d anys'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
	    ordinal : function (number, period) {
	        var output = (number === 1) ? 'r' :
	            (number === 2) ? 'n' :
	            (number === 3) ? 'r' :
	            (number === 4) ? 't' : 'è';
	        if (period === 'w' || period === 'W') {
	            output = 'a';
	        }
	        return number + output;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return ca;

	})));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Czech [cs]
	//! author : petrbela : https://github.com/petrbela

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
	var monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
	function plural(n) {
	    return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
	}
	function translate(number, withoutSuffix, key, isFuture) {
	    var result = number + ' ';
	    switch (key) {
	        case 's':  // a few seconds / in a few seconds / a few seconds ago
	            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
	        case 'm':  // a minute / in a minute / a minute ago
	            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
	        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'minuty' : 'minut');
	            } else {
	                return result + 'minutami';
	            }
	            break;
	        case 'h':  // an hour / in an hour / an hour ago
	            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	        case 'hh': // 9 hours / in 9 hours / 9 hours ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'hodiny' : 'hodin');
	            } else {
	                return result + 'hodinami';
	            }
	            break;
	        case 'd':  // a day / in a day / a day ago
	            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
	        case 'dd': // 9 days / in 9 days / 9 days ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'dny' : 'dní');
	            } else {
	                return result + 'dny';
	            }
	            break;
	        case 'M':  // a month / in a month / a month ago
	            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
	        case 'MM': // 9 months / in 9 months / 9 months ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'měsíce' : 'měsíců');
	            } else {
	                return result + 'měsíci';
	            }
	            break;
	        case 'y':  // a year / in a year / a year ago
	            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
	        case 'yy': // 9 years / in 9 years / 9 years ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'roky' : 'let');
	            } else {
	                return result + 'lety';
	            }
	            break;
	    }
	}

	var cs = moment.defineLocale('cs', {
	    months : months,
	    monthsShort : monthsShort,
	    monthsParse : (function (months, monthsShort) {
	        var i, _monthsParse = [];
	        for (i = 0; i < 12; i++) {
	            // use custom parser to solve problem with July (červenec)
	            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
	        }
	        return _monthsParse;
	    }(months, monthsShort)),
	    shortMonthsParse : (function (monthsShort) {
	        var i, _shortMonthsParse = [];
	        for (i = 0; i < 12; i++) {
	            _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
	        }
	        return _shortMonthsParse;
	    }(monthsShort)),
	    longMonthsParse : (function (months) {
	        var i, _longMonthsParse = [];
	        for (i = 0; i < 12; i++) {
	            _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
	        }
	        return _longMonthsParse;
	    }(months)),
	    weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
	    weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
	    weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
	    longDateFormat : {
	        LT: 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY H:mm',
	        LLLL : 'dddd D. MMMM YYYY H:mm',
	        l : 'D. M. YYYY'
	    },
	    calendar : {
	        sameDay: '[dnes v] LT',
	        nextDay: '[zítra v] LT',
	        nextWeek: function () {
	            switch (this.day()) {
	                case 0:
	                    return '[v neděli v] LT';
	                case 1:
	                case 2:
	                    return '[v] dddd [v] LT';
	                case 3:
	                    return '[ve středu v] LT';
	                case 4:
	                    return '[ve čtvrtek v] LT';
	                case 5:
	                    return '[v pátek v] LT';
	                case 6:
	                    return '[v sobotu v] LT';
	            }
	        },
	        lastDay: '[včera v] LT',
	        lastWeek: function () {
	            switch (this.day()) {
	                case 0:
	                    return '[minulou neděli v] LT';
	                case 1:
	                case 2:
	                    return '[minulé] dddd [v] LT';
	                case 3:
	                    return '[minulou středu v] LT';
	                case 4:
	                case 5:
	                    return '[minulý] dddd [v] LT';
	                case 6:
	                    return '[minulou sobotu v] LT';
	            }
	        },
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'za %s',
	        past : 'před %s',
	        s : translate,
	        m : translate,
	        mm : translate,
	        h : translate,
	        hh : translate,
	        d : translate,
	        dd : translate,
	        M : translate,
	        MM : translate,
	        y : translate,
	        yy : translate
	    },
	    dayOfMonthOrdinalParse : /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return cs;

	})));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chuvash [cv]
	//! author : Anatoly Mironov : https://github.com/mirontoli

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var cv = moment.defineLocale('cv', {
	    months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
	    monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
	    weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
	    weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
	    weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD-MM-YYYY',
	        LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
	        LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
	        LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
	    },
	    calendar : {
	        sameDay: '[Паян] LT [сехетре]',
	        nextDay: '[Ыран] LT [сехетре]',
	        lastDay: '[Ӗнер] LT [сехетре]',
	        nextWeek: '[Ҫитес] dddd LT [сехетре]',
	        lastWeek: '[Иртнӗ] dddd LT [сехетре]',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : function (output) {
	            var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
	            return output + affix;
	        },
	        past : '%s каялла',
	        s : 'пӗр-ик ҫеккунт',
	        m : 'пӗр минут',
	        mm : '%d минут',
	        h : 'пӗр сехет',
	        hh : '%d сехет',
	        d : 'пӗр кун',
	        dd : '%d кун',
	        M : 'пӗр уйӑх',
	        MM : '%d уйӑх',
	        y : 'пӗр ҫул',
	        yy : '%d ҫул'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
	    ordinal : '%d-мӗш',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return cv;

	})));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Welsh [cy]
	//! author : Robert Allen : https://github.com/robgallen
	//! author : https://github.com/ryangreaves

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var cy = moment.defineLocale('cy', {
	    months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
	    monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
	    weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
	    weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
	    weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
	    weekdaysParseExact : true,
	    // time formats are the same as en-gb
	    longDateFormat: {
	        LT: 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar: {
	        sameDay: '[Heddiw am] LT',
	        nextDay: '[Yfory am] LT',
	        nextWeek: 'dddd [am] LT',
	        lastDay: '[Ddoe am] LT',
	        lastWeek: 'dddd [diwethaf am] LT',
	        sameElse: 'L'
	    },
	    relativeTime: {
	        future: 'mewn %s',
	        past: '%s yn ôl',
	        s: 'ychydig eiliadau',
	        m: 'munud',
	        mm: '%d munud',
	        h: 'awr',
	        hh: '%d awr',
	        d: 'diwrnod',
	        dd: '%d diwrnod',
	        M: 'mis',
	        MM: '%d mis',
	        y: 'blwyddyn',
	        yy: '%d flynedd'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
	    // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
	    ordinal: function (number) {
	        var b = number,
	            output = '',
	            lookup = [
	                '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
	                'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
	            ];
	        if (b > 20) {
	            if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
	                output = 'fed'; // not 30ain, 70ain or 90ain
	            } else {
	                output = 'ain';
	            }
	        } else if (b > 0) {
	            output = lookup[b];
	        }
	        return number + output;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return cy;

	})));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Danish [da]
	//! author : Ulrik Nielsen : https://github.com/mrbase

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var da = moment.defineLocale('da', {
	    months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
	    monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	    weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	    weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
	    weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY HH:mm',
	        LLLL : 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
	    },
	    calendar : {
	        sameDay : '[i dag kl.] LT',
	        nextDay : '[i morgen kl.] LT',
	        nextWeek : 'på dddd [kl.] LT',
	        lastDay : '[i går kl.] LT',
	        lastWeek : '[i] dddd[s kl.] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'om %s',
	        past : '%s siden',
	        s : 'få sekunder',
	        m : 'et minut',
	        mm : '%d minutter',
	        h : 'en time',
	        hh : '%d timer',
	        d : 'en dag',
	        dd : '%d dage',
	        M : 'en måned',
	        MM : '%d måneder',
	        y : 'et år',
	        yy : '%d år'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return da;

	})));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : German [de]
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Mikolaj Dadela : https://github.com/mik01aj

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function processRelativeTime(number, withoutSuffix, key, isFuture) {
	    var format = {
	        'm': ['eine Minute', 'einer Minute'],
	        'h': ['eine Stunde', 'einer Stunde'],
	        'd': ['ein Tag', 'einem Tag'],
	        'dd': [number + ' Tage', number + ' Tagen'],
	        'M': ['ein Monat', 'einem Monat'],
	        'MM': [number + ' Monate', number + ' Monaten'],
	        'y': ['ein Jahr', 'einem Jahr'],
	        'yy': [number + ' Jahre', number + ' Jahren']
	    };
	    return withoutSuffix ? format[key][0] : format[key][1];
	}

	var de = moment.defineLocale('de', {
	    months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	    monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	    weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	    weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY HH:mm',
	        LLLL : 'dddd, D. MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[heute um] LT [Uhr]',
	        sameElse: 'L',
	        nextDay: '[morgen um] LT [Uhr]',
	        nextWeek: 'dddd [um] LT [Uhr]',
	        lastDay: '[gestern um] LT [Uhr]',
	        lastWeek: '[letzten] dddd [um] LT [Uhr]'
	    },
	    relativeTime : {
	        future : 'in %s',
	        past : 'vor %s',
	        s : 'ein paar Sekunden',
	        m : processRelativeTime,
	        mm : '%d Minuten',
	        h : processRelativeTime,
	        hh : '%d Stunden',
	        d : processRelativeTime,
	        dd : processRelativeTime,
	        M : processRelativeTime,
	        MM : processRelativeTime,
	        y : processRelativeTime,
	        yy : processRelativeTime
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return de;

	})));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : German (Austria) [de-at]
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Martin Groller : https://github.com/MadMG
	//! author : Mikolaj Dadela : https://github.com/mik01aj

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function processRelativeTime(number, withoutSuffix, key, isFuture) {
	    var format = {
	        'm': ['eine Minute', 'einer Minute'],
	        'h': ['eine Stunde', 'einer Stunde'],
	        'd': ['ein Tag', 'einem Tag'],
	        'dd': [number + ' Tage', number + ' Tagen'],
	        'M': ['ein Monat', 'einem Monat'],
	        'MM': [number + ' Monate', number + ' Monaten'],
	        'y': ['ein Jahr', 'einem Jahr'],
	        'yy': [number + ' Jahre', number + ' Jahren']
	    };
	    return withoutSuffix ? format[key][0] : format[key][1];
	}

	var deAt = moment.defineLocale('de-at', {
	    months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	    monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	    weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	    weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY HH:mm',
	        LLLL : 'dddd, D. MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[heute um] LT [Uhr]',
	        sameElse: 'L',
	        nextDay: '[morgen um] LT [Uhr]',
	        nextWeek: 'dddd [um] LT [Uhr]',
	        lastDay: '[gestern um] LT [Uhr]',
	        lastWeek: '[letzten] dddd [um] LT [Uhr]'
	    },
	    relativeTime : {
	        future : 'in %s',
	        past : 'vor %s',
	        s : 'ein paar Sekunden',
	        m : processRelativeTime,
	        mm : '%d Minuten',
	        h : processRelativeTime,
	        hh : '%d Stunden',
	        d : processRelativeTime,
	        dd : processRelativeTime,
	        M : processRelativeTime,
	        MM : processRelativeTime,
	        y : processRelativeTime,
	        yy : processRelativeTime
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return deAt;

	})));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : German (Switzerland) [de-ch]
	//! author : sschueller : https://github.com/sschueller

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	// based on: https://www.bk.admin.ch/dokumentation/sprachen/04915/05016/index.html?lang=de#

	function processRelativeTime(number, withoutSuffix, key, isFuture) {
	    var format = {
	        'm': ['eine Minute', 'einer Minute'],
	        'h': ['eine Stunde', 'einer Stunde'],
	        'd': ['ein Tag', 'einem Tag'],
	        'dd': [number + ' Tage', number + ' Tagen'],
	        'M': ['ein Monat', 'einem Monat'],
	        'MM': [number + ' Monate', number + ' Monaten'],
	        'y': ['ein Jahr', 'einem Jahr'],
	        'yy': [number + ' Jahre', number + ' Jahren']
	    };
	    return withoutSuffix ? format[key][0] : format[key][1];
	}

	var deCh = moment.defineLocale('de-ch', {
	    months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	    monthsShort : 'Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	    weekdaysShort : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	    weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT: 'HH.mm',
	        LTS: 'HH.mm.ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY HH.mm',
	        LLLL : 'dddd, D. MMMM YYYY HH.mm'
	    },
	    calendar : {
	        sameDay: '[heute um] LT [Uhr]',
	        sameElse: 'L',
	        nextDay: '[morgen um] LT [Uhr]',
	        nextWeek: 'dddd [um] LT [Uhr]',
	        lastDay: '[gestern um] LT [Uhr]',
	        lastWeek: '[letzten] dddd [um] LT [Uhr]'
	    },
	    relativeTime : {
	        future : 'in %s',
	        past : 'vor %s',
	        s : 'ein paar Sekunden',
	        m : processRelativeTime,
	        mm : '%d Minuten',
	        h : processRelativeTime,
	        hh : '%d Stunden',
	        d : processRelativeTime,
	        dd : processRelativeTime,
	        M : processRelativeTime,
	        MM : processRelativeTime,
	        y : processRelativeTime,
	        yy : processRelativeTime
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return deCh;

	})));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Maldivian [dv]
	//! author : Jawish Hameed : https://github.com/jawish

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var months = [
	    'ޖެނުއަރީ',
	    'ފެބްރުއަރީ',
	    'މާރިޗު',
	    'އޭޕްރީލު',
	    'މޭ',
	    'ޖޫން',
	    'ޖުލައި',
	    'އޯގަސްޓު',
	    'ސެޕްޓެމްބަރު',
	    'އޮކްޓޯބަރު',
	    'ނޮވެމްބަރު',
	    'ޑިސެމްބަރު'
	];
	var weekdays = [
	    'އާދިއްތަ',
	    'ހޯމަ',
	    'އަންގާރަ',
	    'ބުދަ',
	    'ބުރާސްފަތި',
	    'ހުކުރު',
	    'ހޮނިހިރު'
	];

	var dv = moment.defineLocale('dv', {
	    months : months,
	    monthsShort : months,
	    weekdays : weekdays,
	    weekdaysShort : weekdays,
	    weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
	    longDateFormat : {

	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'D/M/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    meridiemParse: /މކ|މފ/,
	    isPM : function (input) {
	        return 'މފ' === input;
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 12) {
	            return 'މކ';
	        } else {
	            return 'މފ';
	        }
	    },
	    calendar : {
	        sameDay : '[މިއަދު] LT',
	        nextDay : '[މާދަމާ] LT',
	        nextWeek : 'dddd LT',
	        lastDay : '[އިއްޔެ] LT',
	        lastWeek : '[ފާއިތުވި] dddd LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'ތެރޭގައި %s',
	        past : 'ކުރިން %s',
	        s : 'ސިކުންތުކޮޅެއް',
	        m : 'މިނިޓެއް',
	        mm : 'މިނިޓު %d',
	        h : 'ގަޑިއިރެއް',
	        hh : 'ގަޑިއިރު %d',
	        d : 'ދުވަހެއް',
	        dd : 'ދުވަސް %d',
	        M : 'މަހެއް',
	        MM : 'މަސް %d',
	        y : 'އަހަރެއް',
	        yy : 'އަހަރު %d'
	    },
	    preparse: function (string) {
	        return string.replace(/،/g, ',');
	    },
	    postformat: function (string) {
	        return string.replace(/,/g, '،');
	    },
	    week : {
	        dow : 7,  // Sunday is the first day of the week.
	        doy : 12  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return dv;

	})));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Greek [el]
	//! author : Aggelos Karalias : https://github.com/mehiel

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';

	function isFunction(input) {
	    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	}


	var el = moment.defineLocale('el', {
	    monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
	    monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
	    months : function (momentToFormat, format) {
	        if (!momentToFormat) {
	            return this._monthsNominativeEl;
	        } else if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
	            return this._monthsGenitiveEl[momentToFormat.month()];
	        } else {
	            return this._monthsNominativeEl[momentToFormat.month()];
	        }
	    },
	    monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
	    weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
	    weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
	    weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
	    meridiem : function (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'μμ' : 'ΜΜ';
	        } else {
	            return isLower ? 'πμ' : 'ΠΜ';
	        }
	    },
	    isPM : function (input) {
	        return ((input + '').toLowerCase()[0] === 'μ');
	    },
	    meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
	    longDateFormat : {
	        LT : 'h:mm A',
	        LTS : 'h:mm:ss A',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY h:mm A',
	        LLLL : 'dddd, D MMMM YYYY h:mm A'
	    },
	    calendarEl : {
	        sameDay : '[Σήμερα {}] LT',
	        nextDay : '[Αύριο {}] LT',
	        nextWeek : 'dddd [{}] LT',
	        lastDay : '[Χθες {}] LT',
	        lastWeek : function () {
	            switch (this.day()) {
	                case 6:
	                    return '[το προηγούμενο] dddd [{}] LT';
	                default:
	                    return '[την προηγούμενη] dddd [{}] LT';
	            }
	        },
	        sameElse : 'L'
	    },
	    calendar : function (key, mom) {
	        var output = this._calendarEl[key],
	            hours = mom && mom.hours();
	        if (isFunction(output)) {
	            output = output.apply(mom);
	        }
	        return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
	    },
	    relativeTime : {
	        future : 'σε %s',
	        past : '%s πριν',
	        s : 'λίγα δευτερόλεπτα',
	        m : 'ένα λεπτό',
	        mm : '%d λεπτά',
	        h : 'μία ώρα',
	        hh : '%d ώρες',
	        d : 'μία μέρα',
	        dd : '%d μέρες',
	        M : 'ένας μήνας',
	        MM : '%d μήνες',
	        y : 'ένας χρόνος',
	        yy : '%d χρόνια'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}η/,
	    ordinal: '%dη',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4st is the first week of the year.
	    }
	});

	return el;

	})));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Australia) [en-au]
	//! author : Jared Morse : https://github.com/jarcoal

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var enAu = moment.defineLocale('en-au', {
	    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	    longDateFormat : {
	        LT : 'h:mm A',
	        LTS : 'h:mm:ss A',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY h:mm A',
	        LLLL : 'dddd, D MMMM YYYY h:mm A'
	    },
	    calendar : {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'in %s',
	        past : '%s ago',
	        s : 'a few seconds',
	        m : 'a minute',
	        mm : '%d minutes',
	        h : 'an hour',
	        hh : '%d hours',
	        d : 'a day',
	        dd : '%d days',
	        M : 'a month',
	        MM : '%d months',
	        y : 'a year',
	        yy : '%d years'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	    ordinal : function (number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' :
	            (b === 1) ? 'st' :
	            (b === 2) ? 'nd' :
	            (b === 3) ? 'rd' : 'th';
	        return number + output;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return enAu;

	})));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Canada) [en-ca]
	//! author : Jonathan Abourbih : https://github.com/jonbca

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var enCa = moment.defineLocale('en-ca', {
	    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	    longDateFormat : {
	        LT : 'h:mm A',
	        LTS : 'h:mm:ss A',
	        L : 'YYYY-MM-DD',
	        LL : 'MMMM D, YYYY',
	        LLL : 'MMMM D, YYYY h:mm A',
	        LLLL : 'dddd, MMMM D, YYYY h:mm A'
	    },
	    calendar : {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'in %s',
	        past : '%s ago',
	        s : 'a few seconds',
	        m : 'a minute',
	        mm : '%d minutes',
	        h : 'an hour',
	        hh : '%d hours',
	        d : 'a day',
	        dd : '%d days',
	        M : 'a month',
	        MM : '%d months',
	        y : 'a year',
	        yy : '%d years'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	    ordinal : function (number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' :
	            (b === 1) ? 'st' :
	            (b === 2) ? 'nd' :
	            (b === 3) ? 'rd' : 'th';
	        return number + output;
	    }
	});

	return enCa;

	})));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (United Kingdom) [en-gb]
	//! author : Chris Gedrim : https://github.com/chrisgedrim

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var enGb = moment.defineLocale('en-gb', {
	    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'in %s',
	        past : '%s ago',
	        s : 'a few seconds',
	        m : 'a minute',
	        mm : '%d minutes',
	        h : 'an hour',
	        hh : '%d hours',
	        d : 'a day',
	        dd : '%d days',
	        M : 'a month',
	        MM : '%d months',
	        y : 'a year',
	        yy : '%d years'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	    ordinal : function (number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' :
	            (b === 1) ? 'st' :
	            (b === 2) ? 'nd' :
	            (b === 3) ? 'rd' : 'th';
	        return number + output;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return enGb;

	})));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Ireland) [en-ie]
	//! author : Chris Cartlidge : https://github.com/chriscartlidge

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var enIe = moment.defineLocale('en-ie', {
	    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD-MM-YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'in %s',
	        past : '%s ago',
	        s : 'a few seconds',
	        m : 'a minute',
	        mm : '%d minutes',
	        h : 'an hour',
	        hh : '%d hours',
	        d : 'a day',
	        dd : '%d days',
	        M : 'a month',
	        MM : '%d months',
	        y : 'a year',
	        yy : '%d years'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	    ordinal : function (number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' :
	            (b === 1) ? 'st' :
	            (b === 2) ? 'nd' :
	            (b === 3) ? 'rd' : 'th';
	        return number + output;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return enIe;

	})));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (New Zealand) [en-nz]
	//! author : Luke McGregor : https://github.com/lukemcgregor

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var enNz = moment.defineLocale('en-nz', {
	    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	    longDateFormat : {
	        LT : 'h:mm A',
	        LTS : 'h:mm:ss A',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY h:mm A',
	        LLLL : 'dddd, D MMMM YYYY h:mm A'
	    },
	    calendar : {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'in %s',
	        past : '%s ago',
	        s : 'a few seconds',
	        m : 'a minute',
	        mm : '%d minutes',
	        h : 'an hour',
	        hh : '%d hours',
	        d : 'a day',
	        dd : '%d days',
	        M : 'a month',
	        MM : '%d months',
	        y : 'a year',
	        yy : '%d years'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	    ordinal : function (number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' :
	            (b === 1) ? 'st' :
	            (b === 2) ? 'nd' :
	            (b === 3) ? 'rd' : 'th';
	        return number + output;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return enNz;

	})));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Esperanto [eo]
	//! author : Colin Dean : https://github.com/colindean
	//! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
	//! comment : miestasmia corrected the translation by colindean

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var eo = moment.defineLocale('eo', {
	    months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
	    monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
	    weekdays : 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
	    weekdaysShort : 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
	    weekdaysMin : 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'YYYY-MM-DD',
	        LL : 'D[-a de] MMMM, YYYY',
	        LLL : 'D[-a de] MMMM, YYYY HH:mm',
	        LLLL : 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
	    },
	    meridiemParse: /[ap]\.t\.m/i,
	    isPM: function (input) {
	        return input.charAt(0).toLowerCase() === 'p';
	    },
	    meridiem : function (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'p.t.m.' : 'P.T.M.';
	        } else {
	            return isLower ? 'a.t.m.' : 'A.T.M.';
	        }
	    },
	    calendar : {
	        sameDay : '[Hodiaŭ je] LT',
	        nextDay : '[Morgaŭ je] LT',
	        nextWeek : 'dddd [je] LT',
	        lastDay : '[Hieraŭ je] LT',
	        lastWeek : '[pasinta] dddd [je] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'post %s',
	        past : 'antaŭ %s',
	        s : 'sekundoj',
	        m : 'minuto',
	        mm : '%d minutoj',
	        h : 'horo',
	        hh : '%d horoj',
	        d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
	        dd : '%d tagoj',
	        M : 'monato',
	        MM : '%d monatoj',
	        y : 'jaro',
	        yy : '%d jaroj'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}a/,
	    ordinal : '%da',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return eo;

	})));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Spanish [es]
	//! author : Julio Napurí : https://github.com/julionc

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
	var monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

	var es = moment.defineLocale('es', {
	    months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	    monthsShort : function (m, format) {
	        if (!m) {
	            return monthsShortDot;
	        } else if (/-MMM-/.test(format)) {
	            return monthsShort[m.month()];
	        } else {
	            return monthsShortDot[m.month()];
	        }
	    },
	    monthsParseExact : true,
	    weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	    weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	    weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D [de] MMMM [de] YYYY',
	        LLL : 'D [de] MMMM [de] YYYY H:mm',
	        LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
	    },
	    calendar : {
	        sameDay : function () {
	            return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        nextDay : function () {
	            return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        nextWeek : function () {
	            return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        lastDay : function () {
	            return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        lastWeek : function () {
	            return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'en %s',
	        past : 'hace %s',
	        s : 'unos segundos',
	        m : 'un minuto',
	        mm : '%d minutos',
	        h : 'una hora',
	        hh : '%d horas',
	        d : 'un día',
	        dd : '%d días',
	        M : 'un mes',
	        MM : '%d meses',
	        y : 'un año',
	        yy : '%d años'
	    },
	    dayOfMonthOrdinalParse : /\d{1,2}º/,
	    ordinal : '%dº',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return es;

	})));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Spanish (Dominican Republic) [es-do]

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
	var monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

	var esDo = moment.defineLocale('es-do', {
	    months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	    monthsShort : function (m, format) {
	        if (!m) {
	            return monthsShortDot;
	        } else if (/-MMM-/.test(format)) {
	            return monthsShort[m.month()];
	        } else {
	            return monthsShortDot[m.month()];
	        }
	    },
	    monthsParseExact : true,
	    weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	    weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	    weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'h:mm A',
	        LTS : 'h:mm:ss A',
	        L : 'DD/MM/YYYY',
	        LL : 'D [de] MMMM [de] YYYY',
	        LLL : 'D [de] MMMM [de] YYYY h:mm A',
	        LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
	    },
	    calendar : {
	        sameDay : function () {
	            return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        nextDay : function () {
	            return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        nextWeek : function () {
	            return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        lastDay : function () {
	            return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        lastWeek : function () {
	            return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'en %s',
	        past : 'hace %s',
	        s : 'unos segundos',
	        m : 'un minuto',
	        mm : '%d minutos',
	        h : 'una hora',
	        hh : '%d horas',
	        d : 'un día',
	        dd : '%d días',
	        M : 'un mes',
	        MM : '%d meses',
	        y : 'un año',
	        yy : '%d años'
	    },
	    dayOfMonthOrdinalParse : /\d{1,2}º/,
	    ordinal : '%dº',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return esDo;

	})));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Estonian [et]
	//! author : Henry Kehlmann : https://github.com/madhenry
	//! improvements : Illimar Tambek : https://github.com/ragulka

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function processRelativeTime(number, withoutSuffix, key, isFuture) {
	    var format = {
	        's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
	        'm' : ['ühe minuti', 'üks minut'],
	        'mm': [number + ' minuti', number + ' minutit'],
	        'h' : ['ühe tunni', 'tund aega', 'üks tund'],
	        'hh': [number + ' tunni', number + ' tundi'],
	        'd' : ['ühe päeva', 'üks päev'],
	        'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
	        'MM': [number + ' kuu', number + ' kuud'],
	        'y' : ['ühe aasta', 'aasta', 'üks aasta'],
	        'yy': [number + ' aasta', number + ' aastat']
	    };
	    if (withoutSuffix) {
	        return format[key][2] ? format[key][2] : format[key][1];
	    }
	    return isFuture ? format[key][0] : format[key][1];
	}

	var et = moment.defineLocale('et', {
	    months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
	    monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
	    weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
	    weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
	    weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
	    longDateFormat : {
	        LT   : 'H:mm',
	        LTS : 'H:mm:ss',
	        L    : 'DD.MM.YYYY',
	        LL   : 'D. MMMM YYYY',
	        LLL  : 'D. MMMM YYYY H:mm',
	        LLLL : 'dddd, D. MMMM YYYY H:mm'
	    },
	    calendar : {
	        sameDay  : '[Täna,] LT',
	        nextDay  : '[Homme,] LT',
	        nextWeek : '[Järgmine] dddd LT',
	        lastDay  : '[Eile,] LT',
	        lastWeek : '[Eelmine] dddd LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s pärast',
	        past   : '%s tagasi',
	        s      : processRelativeTime,
	        m      : processRelativeTime,
	        mm     : processRelativeTime,
	        h      : processRelativeTime,
	        hh     : processRelativeTime,
	        d      : processRelativeTime,
	        dd     : '%d päeva',
	        M      : processRelativeTime,
	        MM     : processRelativeTime,
	        y      : processRelativeTime,
	        yy     : processRelativeTime
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return et;

	})));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Basque [eu]
	//! author : Eneko Illarramendi : https://github.com/eillarra

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var eu = moment.defineLocale('eu', {
	    months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
	    monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
	    weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
	    weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'YYYY-MM-DD',
	        LL : 'YYYY[ko] MMMM[ren] D[a]',
	        LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
	        LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
	        l : 'YYYY-M-D',
	        ll : 'YYYY[ko] MMM D[a]',
	        lll : 'YYYY[ko] MMM D[a] HH:mm',
	        llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
	    },
	    calendar : {
	        sameDay : '[gaur] LT[etan]',
	        nextDay : '[bihar] LT[etan]',
	        nextWeek : 'dddd LT[etan]',
	        lastDay : '[atzo] LT[etan]',
	        lastWeek : '[aurreko] dddd LT[etan]',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s barru',
	        past : 'duela %s',
	        s : 'segundo batzuk',
	        m : 'minutu bat',
	        mm : '%d minutu',
	        h : 'ordu bat',
	        hh : '%d ordu',
	        d : 'egun bat',
	        dd : '%d egun',
	        M : 'hilabete bat',
	        MM : '%d hilabete',
	        y : 'urte bat',
	        yy : '%d urte'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return eu;

	})));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Persian [fa]
	//! author : Ebrahim Byagowi : https://github.com/ebraminio

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '۱',
	    '2': '۲',
	    '3': '۳',
	    '4': '۴',
	    '5': '۵',
	    '6': '۶',
	    '7': '۷',
	    '8': '۸',
	    '9': '۹',
	    '0': '۰'
	};
	var numberMap = {
	    '۱': '1',
	    '۲': '2',
	    '۳': '3',
	    '۴': '4',
	    '۵': '5',
	    '۶': '6',
	    '۷': '7',
	    '۸': '8',
	    '۹': '9',
	    '۰': '0'
	};

	var fa = moment.defineLocale('fa', {
	    months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	    monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	    weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	    weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	    weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    meridiemParse: /قبل از ظهر|بعد از ظهر/,
	    isPM: function (input) {
	        return /بعد از ظهر/.test(input);
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 12) {
	            return 'قبل از ظهر';
	        } else {
	            return 'بعد از ظهر';
	        }
	    },
	    calendar : {
	        sameDay : '[امروز ساعت] LT',
	        nextDay : '[فردا ساعت] LT',
	        nextWeek : 'dddd [ساعت] LT',
	        lastDay : '[دیروز ساعت] LT',
	        lastWeek : 'dddd [پیش] [ساعت] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'در %s',
	        past : '%s پیش',
	        s : 'چند ثانیه',
	        m : 'یک دقیقه',
	        mm : '%d دقیقه',
	        h : 'یک ساعت',
	        hh : '%d ساعت',
	        d : 'یک روز',
	        dd : '%d روز',
	        M : 'یک ماه',
	        MM : '%d ماه',
	        y : 'یک سال',
	        yy : '%d سال'
	    },
	    preparse: function (string) {
	        return string.replace(/[۰-۹]/g, function (match) {
	            return numberMap[match];
	        }).replace(/،/g, ',');
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        }).replace(/,/g, '،');
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}م/,
	    ordinal : '%dم',
	    week : {
	        dow : 6, // Saturday is the first day of the week.
	        doy : 12 // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return fa;

	})));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Finnish [fi]
	//! author : Tarmo Aidantausta : https://github.com/bleadof

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' ');
	var numbersFuture = [
	        'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
	        numbersPast[7], numbersPast[8], numbersPast[9]
	    ];
	function translate(number, withoutSuffix, key, isFuture) {
	    var result = '';
	    switch (key) {
	        case 's':
	            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
	        case 'm':
	            return isFuture ? 'minuutin' : 'minuutti';
	        case 'mm':
	            result = isFuture ? 'minuutin' : 'minuuttia';
	            break;
	        case 'h':
	            return isFuture ? 'tunnin' : 'tunti';
	        case 'hh':
	            result = isFuture ? 'tunnin' : 'tuntia';
	            break;
	        case 'd':
	            return isFuture ? 'päivän' : 'päivä';
	        case 'dd':
	            result = isFuture ? 'päivän' : 'päivää';
	            break;
	        case 'M':
	            return isFuture ? 'kuukauden' : 'kuukausi';
	        case 'MM':
	            result = isFuture ? 'kuukauden' : 'kuukautta';
	            break;
	        case 'y':
	            return isFuture ? 'vuoden' : 'vuosi';
	        case 'yy':
	            result = isFuture ? 'vuoden' : 'vuotta';
	            break;
	    }
	    result = verbalNumber(number, isFuture) + ' ' + result;
	    return result;
	}
	function verbalNumber(number, isFuture) {
	    return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
	}

	var fi = moment.defineLocale('fi', {
	    months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
	    monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
	    weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
	    weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
	    weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
	    longDateFormat : {
	        LT : 'HH.mm',
	        LTS : 'HH.mm.ss',
	        L : 'DD.MM.YYYY',
	        LL : 'Do MMMM[ta] YYYY',
	        LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
	        LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
	        l : 'D.M.YYYY',
	        ll : 'Do MMM YYYY',
	        lll : 'Do MMM YYYY, [klo] HH.mm',
	        llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
	    },
	    calendar : {
	        sameDay : '[tänään] [klo] LT',
	        nextDay : '[huomenna] [klo] LT',
	        nextWeek : 'dddd [klo] LT',
	        lastDay : '[eilen] [klo] LT',
	        lastWeek : '[viime] dddd[na] [klo] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s päästä',
	        past : '%s sitten',
	        s : translate,
	        m : translate,
	        mm : translate,
	        h : translate,
	        hh : translate,
	        d : translate,
	        dd : translate,
	        M : translate,
	        MM : translate,
	        y : translate,
	        yy : translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return fi;

	})));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Faroese [fo]
	//! author : Ragnar Johannesen : https://github.com/ragnar123

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var fo = moment.defineLocale('fo', {
	    months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	    monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	    weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
	    weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
	    weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D. MMMM, YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[Í dag kl.] LT',
	        nextDay : '[Í morgin kl.] LT',
	        nextWeek : 'dddd [kl.] LT',
	        lastDay : '[Í gjár kl.] LT',
	        lastWeek : '[síðstu] dddd [kl] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'um %s',
	        past : '%s síðani',
	        s : 'fá sekund',
	        m : 'ein minutt',
	        mm : '%d minuttir',
	        h : 'ein tími',
	        hh : '%d tímar',
	        d : 'ein dagur',
	        dd : '%d dagar',
	        M : 'ein mánaði',
	        MM : '%d mánaðir',
	        y : 'eitt ár',
	        yy : '%d ár'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return fo;

	})));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French [fr]
	//! author : John Fischer : https://github.com/jfroffice

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var fr = moment.defineLocale('fr', {
	    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[Aujourd’hui à] LT',
	        nextDay : '[Demain à] LT',
	        nextWeek : 'dddd [à] LT',
	        lastDay : '[Hier à] LT',
	        lastWeek : 'dddd [dernier à] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'dans %s',
	        past : 'il y a %s',
	        s : 'quelques secondes',
	        m : 'une minute',
	        mm : '%d minutes',
	        h : 'une heure',
	        hh : '%d heures',
	        d : 'un jour',
	        dd : '%d jours',
	        M : 'un mois',
	        MM : '%d mois',
	        y : 'un an',
	        yy : '%d ans'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
	    ordinal : function (number, period) {
	        switch (period) {
	            // TODO: Return 'e' when day of month > 1. Move this case inside
	            // block for masculine words below.
	            // See https://github.com/moment/moment/issues/3375
	            case 'D':
	                return number + (number === 1 ? 'er' : '');

	            // Words with masculine grammatical gender: mois, trimestre, jour
	            default:
	            case 'M':
	            case 'Q':
	            case 'DDD':
	            case 'd':
	                return number + (number === 1 ? 'er' : 'e');

	            // Words with feminine grammatical gender: semaine
	            case 'w':
	            case 'W':
	                return number + (number === 1 ? 're' : 'e');
	        }
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return fr;

	})));


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French (Canada) [fr-ca]
	//! author : Jonathan Abourbih : https://github.com/jonbca

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var frCa = moment.defineLocale('fr-ca', {
	    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'YYYY-MM-DD',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[Aujourd’hui à] LT',
	        nextDay : '[Demain à] LT',
	        nextWeek : 'dddd [à] LT',
	        lastDay : '[Hier à] LT',
	        lastWeek : 'dddd [dernier à] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'dans %s',
	        past : 'il y a %s',
	        s : 'quelques secondes',
	        m : 'une minute',
	        mm : '%d minutes',
	        h : 'une heure',
	        hh : '%d heures',
	        d : 'un jour',
	        dd : '%d jours',
	        M : 'un mois',
	        MM : '%d mois',
	        y : 'un an',
	        yy : '%d ans'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
	    ordinal : function (number, period) {
	        switch (period) {
	            // Words with masculine grammatical gender: mois, trimestre, jour
	            default:
	            case 'M':
	            case 'Q':
	            case 'D':
	            case 'DDD':
	            case 'd':
	                return number + (number === 1 ? 'er' : 'e');

	            // Words with feminine grammatical gender: semaine
	            case 'w':
	            case 'W':
	                return number + (number === 1 ? 're' : 'e');
	        }
	    }
	});

	return frCa;

	})));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French (Switzerland) [fr-ch]
	//! author : Gaspard Bucher : https://github.com/gaspard

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var frCh = moment.defineLocale('fr-ch', {
	    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[Aujourd’hui à] LT',
	        nextDay : '[Demain à] LT',
	        nextWeek : 'dddd [à] LT',
	        lastDay : '[Hier à] LT',
	        lastWeek : 'dddd [dernier à] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'dans %s',
	        past : 'il y a %s',
	        s : 'quelques secondes',
	        m : 'une minute',
	        mm : '%d minutes',
	        h : 'une heure',
	        hh : '%d heures',
	        d : 'un jour',
	        dd : '%d jours',
	        M : 'un mois',
	        MM : '%d mois',
	        y : 'un an',
	        yy : '%d ans'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
	    ordinal : function (number, period) {
	        switch (period) {
	            // Words with masculine grammatical gender: mois, trimestre, jour
	            default:
	            case 'M':
	            case 'Q':
	            case 'D':
	            case 'DDD':
	            case 'd':
	                return number + (number === 1 ? 'er' : 'e');

	            // Words with feminine grammatical gender: semaine
	            case 'w':
	            case 'W':
	                return number + (number === 1 ? 're' : 'e');
	        }
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return frCh;

	})));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Frisian [fy]
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_');
	var monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

	var fy = moment.defineLocale('fy', {
	    months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
	    monthsShort : function (m, format) {
	        if (!m) {
	            return monthsShortWithDots;
	        } else if (/-MMM-/.test(format)) {
	            return monthsShortWithoutDots[m.month()];
	        } else {
	            return monthsShortWithDots[m.month()];
	        }
	    },
	    monthsParseExact : true,
	    weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
	    weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
	    weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD-MM-YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[hjoed om] LT',
	        nextDay: '[moarn om] LT',
	        nextWeek: 'dddd [om] LT',
	        lastDay: '[juster om] LT',
	        lastWeek: '[ôfrûne] dddd [om] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'oer %s',
	        past : '%s lyn',
	        s : 'in pear sekonden',
	        m : 'ien minút',
	        mm : '%d minuten',
	        h : 'ien oere',
	        hh : '%d oeren',
	        d : 'ien dei',
	        dd : '%d dagen',
	        M : 'ien moanne',
	        MM : '%d moannen',
	        y : 'ien jier',
	        yy : '%d jierren'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
	    ordinal : function (number) {
	        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return fy;

	})));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Scottish Gaelic [gd]
	//! author : Jon Ashdown : https://github.com/jonashdown

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var months = [
	    'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
	];

	var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

	var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

	var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

	var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

	var gd = moment.defineLocale('gd', {
	    months : months,
	    monthsShort : monthsShort,
	    monthsParseExact : true,
	    weekdays : weekdays,
	    weekdaysShort : weekdaysShort,
	    weekdaysMin : weekdaysMin,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[An-diugh aig] LT',
	        nextDay : '[A-màireach aig] LT',
	        nextWeek : 'dddd [aig] LT',
	        lastDay : '[An-dè aig] LT',
	        lastWeek : 'dddd [seo chaidh] [aig] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'ann an %s',
	        past : 'bho chionn %s',
	        s : 'beagan diogan',
	        m : 'mionaid',
	        mm : '%d mionaidean',
	        h : 'uair',
	        hh : '%d uairean',
	        d : 'latha',
	        dd : '%d latha',
	        M : 'mìos',
	        MM : '%d mìosan',
	        y : 'bliadhna',
	        yy : '%d bliadhna'
	    },
	    dayOfMonthOrdinalParse : /\d{1,2}(d|na|mh)/,
	    ordinal : function (number) {
	        var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
	        return number + output;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return gd;

	})));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Galician [gl]
	//! author : Juan G. Hurtado : https://github.com/juanghurtado

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var gl = moment.defineLocale('gl', {
	    months : 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
	    monthsShort : 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
	    monthsParseExact: true,
	    weekdays : 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
	    weekdaysShort : 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
	    weekdaysMin : 'do_lu_ma_mé_xo_ve_sá'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D [de] MMMM [de] YYYY',
	        LLL : 'D [de] MMMM [de] YYYY H:mm',
	        LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
	    },
	    calendar : {
	        sameDay : function () {
	            return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	        },
	        nextDay : function () {
	            return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	        },
	        nextWeek : function () {
	            return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	        },
	        lastDay : function () {
	            return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
	        },
	        lastWeek : function () {
	            return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : function (str) {
	            if (str.indexOf('un') === 0) {
	                return 'n' + str;
	            }
	            return 'en ' + str;
	        },
	        past : 'hai %s',
	        s : 'uns segundos',
	        m : 'un minuto',
	        mm : '%d minutos',
	        h : 'unha hora',
	        hh : '%d horas',
	        d : 'un día',
	        dd : '%d días',
	        M : 'un mes',
	        MM : '%d meses',
	        y : 'un ano',
	        yy : '%d anos'
	    },
	    dayOfMonthOrdinalParse : /\d{1,2}º/,
	    ordinal : '%dº',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return gl;

	})));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Konkani Latin script [gom-latn]
	//! author : The Discoverer : https://github.com/WikiDiscoverer

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function processRelativeTime(number, withoutSuffix, key, isFuture) {
	    var format = {
	        's': ['thodde secondanim', 'thodde second'],
	        'm': ['eka mintan', 'ek minute'],
	        'mm': [number + ' mintanim', number + ' mintam'],
	        'h': ['eka horan', 'ek hor'],
	        'hh': [number + ' horanim', number + ' hor'],
	        'd': ['eka disan', 'ek dis'],
	        'dd': [number + ' disanim', number + ' dis'],
	        'M': ['eka mhoinean', 'ek mhoino'],
	        'MM': [number + ' mhoineanim', number + ' mhoine'],
	        'y': ['eka vorsan', 'ek voros'],
	        'yy': [number + ' vorsanim', number + ' vorsam']
	    };
	    return withoutSuffix ? format[key][0] : format[key][1];
	}

	var gomLatn = moment.defineLocale('gom-latn', {
	    months : 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
	    monthsShort : 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
	    weekdaysShort : 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
	    weekdaysMin : 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'A h:mm [vazta]',
	        LTS : 'A h:mm:ss [vazta]',
	        L : 'DD-MM-YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY A h:mm [vazta]',
	        LLLL : 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
	        llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
	    },
	    calendar : {
	        sameDay: '[Aiz] LT',
	        nextDay: '[Faleam] LT',
	        nextWeek: '[Ieta to] dddd[,] LT',
	        lastDay: '[Kal] LT',
	        lastWeek: '[Fatlo] dddd[,] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : '%s',
	        past : '%s adim',
	        s : processRelativeTime,
	        m : processRelativeTime,
	        mm : processRelativeTime,
	        h : processRelativeTime,
	        hh : processRelativeTime,
	        d : processRelativeTime,
	        dd : processRelativeTime,
	        M : processRelativeTime,
	        MM : processRelativeTime,
	        y : processRelativeTime,
	        yy : processRelativeTime
	    },
	    dayOfMonthOrdinalParse : /\d{1,2}(er)/,
	    ordinal : function (number, period) {
	        switch (period) {
	            // the ordinal 'er' only applies to day of the month
	            case 'D':
	                return number + 'er';
	            default:
	            case 'M':
	            case 'Q':
	            case 'DDD':
	            case 'd':
	            case 'w':
	            case 'W':
	                return number;
	        }
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    },
	    meridiemParse: /rati|sokalli|donparam|sanje/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'rati') {
	            return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'sokalli') {
	            return hour;
	        } else if (meridiem === 'donparam') {
	            return hour > 12 ? hour : hour + 12;
	        } else if (meridiem === 'sanje') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'rati';
	        } else if (hour < 12) {
	            return 'sokalli';
	        } else if (hour < 16) {
	            return 'donparam';
	        } else if (hour < 20) {
	            return 'sanje';
	        } else {
	            return 'rati';
	        }
	    }
	});

	return gomLatn;

	})));


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hebrew [he]
	//! author : Tomer Cohen : https://github.com/tomer
	//! author : Moshe Simantov : https://github.com/DevelopmentIL
	//! author : Tal Ater : https://github.com/TalAter

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var he = moment.defineLocale('he', {
	    months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
	    monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
	    weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
	    weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
	    weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D [ב]MMMM YYYY',
	        LLL : 'D [ב]MMMM YYYY HH:mm',
	        LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
	        l : 'D/M/YYYY',
	        ll : 'D MMM YYYY',
	        lll : 'D MMM YYYY HH:mm',
	        llll : 'ddd, D MMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[היום ב־]LT',
	        nextDay : '[מחר ב־]LT',
	        nextWeek : 'dddd [בשעה] LT',
	        lastDay : '[אתמול ב־]LT',
	        lastWeek : '[ביום] dddd [האחרון בשעה] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'בעוד %s',
	        past : 'לפני %s',
	        s : 'מספר שניות',
	        m : 'דקה',
	        mm : '%d דקות',
	        h : 'שעה',
	        hh : function (number) {
	            if (number === 2) {
	                return 'שעתיים';
	            }
	            return number + ' שעות';
	        },
	        d : 'יום',
	        dd : function (number) {
	            if (number === 2) {
	                return 'יומיים';
	            }
	            return number + ' ימים';
	        },
	        M : 'חודש',
	        MM : function (number) {
	            if (number === 2) {
	                return 'חודשיים';
	            }
	            return number + ' חודשים';
	        },
	        y : 'שנה',
	        yy : function (number) {
	            if (number === 2) {
	                return 'שנתיים';
	            } else if (number % 10 === 0 && number !== 10) {
	                return number + ' שנה';
	            }
	            return number + ' שנים';
	        }
	    },
	    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
	    isPM : function (input) {
	        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 5) {
	            return 'לפנות בוקר';
	        } else if (hour < 10) {
	            return 'בבוקר';
	        } else if (hour < 12) {
	            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
	        } else if (hour < 18) {
	            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
	        } else {
	            return 'בערב';
	        }
	    }
	});

	return he;

	})));


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hindi [hi]
	//! author : Mayank Singhal : https://github.com/mayanksinghal

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '१',
	    '2': '२',
	    '3': '३',
	    '4': '४',
	    '5': '५',
	    '6': '६',
	    '7': '७',
	    '8': '८',
	    '9': '९',
	    '0': '०'
	};
	var numberMap = {
	    '१': '1',
	    '२': '2',
	    '३': '3',
	    '४': '4',
	    '५': '5',
	    '६': '6',
	    '७': '7',
	    '८': '8',
	    '९': '9',
	    '०': '0'
	};

	var hi = moment.defineLocale('hi', {
	    months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
	    monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
	    monthsParseExact: true,
	    weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	    weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
	    weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	    longDateFormat : {
	        LT : 'A h:mm बजे',
	        LTS : 'A h:mm:ss बजे',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY, A h:mm बजे',
	        LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
	    },
	    calendar : {
	        sameDay : '[आज] LT',
	        nextDay : '[कल] LT',
	        nextWeek : 'dddd, LT',
	        lastDay : '[कल] LT',
	        lastWeek : '[पिछले] dddd, LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s में',
	        past : '%s पहले',
	        s : 'कुछ ही क्षण',
	        m : 'एक मिनट',
	        mm : '%d मिनट',
	        h : 'एक घंटा',
	        hh : '%d घंटे',
	        d : 'एक दिन',
	        dd : '%d दिन',
	        M : 'एक महीने',
	        MM : '%d महीने',
	        y : 'एक वर्ष',
	        yy : '%d वर्ष'
	    },
	    preparse: function (string) {
	        return string.replace(/[१२३४५६७८९०]/g, function (match) {
	            return numberMap[match];
	        });
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        });
	    },
	    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
	    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
	    meridiemParse: /रात|सुबह|दोपहर|शाम/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'रात') {
	            return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'सुबह') {
	            return hour;
	        } else if (meridiem === 'दोपहर') {
	            return hour >= 10 ? hour : hour + 12;
	        } else if (meridiem === 'शाम') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'रात';
	        } else if (hour < 10) {
	            return 'सुबह';
	        } else if (hour < 17) {
	            return 'दोपहर';
	        } else if (hour < 20) {
	            return 'शाम';
	        } else {
	            return 'रात';
	        }
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return hi;

	})));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Croatian [hr]
	//! author : Bojan Marković : https://github.com/bmarkovic

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function translate(number, withoutSuffix, key) {
	    var result = number + ' ';
	    switch (key) {
	        case 'm':
	            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	        case 'mm':
	            if (number === 1) {
	                result += 'minuta';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'minute';
	            } else {
	                result += 'minuta';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'jedan sat' : 'jednog sata';
	        case 'hh':
	            if (number === 1) {
	                result += 'sat';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'sata';
	            } else {
	                result += 'sati';
	            }
	            return result;
	        case 'dd':
	            if (number === 1) {
	                result += 'dan';
	            } else {
	                result += 'dana';
	            }
	            return result;
	        case 'MM':
	            if (number === 1) {
	                result += 'mjesec';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'mjeseca';
	            } else {
	                result += 'mjeseci';
	            }
	            return result;
	        case 'yy':
	            if (number === 1) {
	                result += 'godina';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'godine';
	            } else {
	                result += 'godina';
	            }
	            return result;
	    }
	}

	var hr = moment.defineLocale('hr', {
	    months : {
	        format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
	        standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
	    },
	    monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
	    monthsParseExact: true,
	    weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	    weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	    weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY H:mm',
	        LLLL : 'dddd, D. MMMM YYYY H:mm'
	    },
	    calendar : {
	        sameDay  : '[danas u] LT',
	        nextDay  : '[sutra u] LT',
	        nextWeek : function () {
	            switch (this.day()) {
	                case 0:
	                    return '[u] [nedjelju] [u] LT';
	                case 3:
	                    return '[u] [srijedu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	            }
	        },
	        lastDay  : '[jučer u] LT',
	        lastWeek : function () {
	            switch (this.day()) {
	                case 0:
	                case 3:
	                    return '[prošlu] dddd [u] LT';
	                case 6:
	                    return '[prošle] [subote] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prošli] dddd [u] LT';
	            }
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'za %s',
	        past   : 'prije %s',
	        s      : 'par sekundi',
	        m      : translate,
	        mm     : translate,
	        h      : translate,
	        hh     : translate,
	        d      : 'dan',
	        dd     : translate,
	        M      : 'mjesec',
	        MM     : translate,
	        y      : 'godinu',
	        yy     : translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return hr;

	})));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hungarian [hu]
	//! author : Adam Brunner : https://github.com/adambrunner

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
	function translate(number, withoutSuffix, key, isFuture) {
	    var num = number,
	        suffix;
	    switch (key) {
	        case 's':
	            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
	        case 'm':
	            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
	        case 'mm':
	            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
	        case 'h':
	            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
	        case 'hh':
	            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
	        case 'd':
	            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
	        case 'dd':
	            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
	        case 'M':
	            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	        case 'MM':
	            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	        case 'y':
	            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
	        case 'yy':
	            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
	    }
	    return '';
	}
	function week(isFuture) {
	    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
	}

	var hu = moment.defineLocale('hu', {
	    months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
	    monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
	    weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
	    weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
	    weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'YYYY.MM.DD.',
	        LL : 'YYYY. MMMM D.',
	        LLL : 'YYYY. MMMM D. H:mm',
	        LLLL : 'YYYY. MMMM D., dddd H:mm'
	    },
	    meridiemParse: /de|du/i,
	    isPM: function (input) {
	        return input.charAt(1).toLowerCase() === 'u';
	    },
	    meridiem : function (hours, minutes, isLower) {
	        if (hours < 12) {
	            return isLower === true ? 'de' : 'DE';
	        } else {
	            return isLower === true ? 'du' : 'DU';
	        }
	    },
	    calendar : {
	        sameDay : '[ma] LT[-kor]',
	        nextDay : '[holnap] LT[-kor]',
	        nextWeek : function () {
	            return week.call(this, true);
	        },
	        lastDay : '[tegnap] LT[-kor]',
	        lastWeek : function () {
	            return week.call(this, false);
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s múlva',
	        past : '%s',
	        s : translate,
	        m : translate,
	        mm : translate,
	        h : translate,
	        hh : translate,
	        d : translate,
	        dd : translate,
	        M : translate,
	        MM : translate,
	        y : translate,
	        yy : translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return hu;

	})));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Armenian [hy-am]
	//! author : Armendarabyan : https://github.com/armendarabyan

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var hyAm = moment.defineLocale('hy-am', {
	    months : {
	        format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
	        standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
	    },
	    monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
	    weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
	    weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	    weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY թ.',
	        LLL : 'D MMMM YYYY թ., HH:mm',
	        LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
	    },
	    calendar : {
	        sameDay: '[այսօր] LT',
	        nextDay: '[վաղը] LT',
	        lastDay: '[երեկ] LT',
	        nextWeek: function () {
	            return 'dddd [օրը ժամը] LT';
	        },
	        lastWeek: function () {
	            return '[անցած] dddd [օրը ժամը] LT';
	        },
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : '%s հետո',
	        past : '%s առաջ',
	        s : 'մի քանի վայրկյան',
	        m : 'րոպե',
	        mm : '%d րոպե',
	        h : 'ժամ',
	        hh : '%d ժամ',
	        d : 'օր',
	        dd : '%d օր',
	        M : 'ամիս',
	        MM : '%d ամիս',
	        y : 'տարի',
	        yy : '%d տարի'
	    },
	    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
	    isPM: function (input) {
	        return /^(ցերեկվա|երեկոյան)$/.test(input);
	    },
	    meridiem : function (hour) {
	        if (hour < 4) {
	            return 'գիշերվա';
	        } else if (hour < 12) {
	            return 'առավոտվա';
	        } else if (hour < 17) {
	            return 'ցերեկվա';
	        } else {
	            return 'երեկոյան';
	        }
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
	    ordinal: function (number, period) {
	        switch (period) {
	            case 'DDD':
	            case 'w':
	            case 'W':
	            case 'DDDo':
	                if (number === 1) {
	                    return number + '-ին';
	                }
	                return number + '-րդ';
	            default:
	                return number;
	        }
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return hyAm;

	})));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Indonesian [id]
	//! author : Mohammad Satrio Utomo : https://github.com/tyok
	//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var id = moment.defineLocale('id', {
	    months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
	    monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
	    weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
	    weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
	    weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
	    longDateFormat : {
	        LT : 'HH.mm',
	        LTS : 'HH.mm.ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY [pukul] HH.mm',
	        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	    },
	    meridiemParse: /pagi|siang|sore|malam/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'pagi') {
	            return hour;
	        } else if (meridiem === 'siang') {
	            return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === 'sore' || meridiem === 'malam') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hours, minutes, isLower) {
	        if (hours < 11) {
	            return 'pagi';
	        } else if (hours < 15) {
	            return 'siang';
	        } else if (hours < 19) {
	            return 'sore';
	        } else {
	            return 'malam';
	        }
	    },
	    calendar : {
	        sameDay : '[Hari ini pukul] LT',
	        nextDay : '[Besok pukul] LT',
	        nextWeek : 'dddd [pukul] LT',
	        lastDay : '[Kemarin pukul] LT',
	        lastWeek : 'dddd [lalu pukul] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'dalam %s',
	        past : '%s yang lalu',
	        s : 'beberapa detik',
	        m : 'semenit',
	        mm : '%d menit',
	        h : 'sejam',
	        hh : '%d jam',
	        d : 'sehari',
	        dd : '%d hari',
	        M : 'sebulan',
	        MM : '%d bulan',
	        y : 'setahun',
	        yy : '%d tahun'
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return id;

	})));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Icelandic [is]
	//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function plural(n) {
	    if (n % 100 === 11) {
	        return true;
	    } else if (n % 10 === 1) {
	        return false;
	    }
	    return true;
	}
	function translate(number, withoutSuffix, key, isFuture) {
	    var result = number + ' ';
	    switch (key) {
	        case 's':
	            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
	        case 'm':
	            return withoutSuffix ? 'mínúta' : 'mínútu';
	        case 'mm':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
	            } else if (withoutSuffix) {
	                return result + 'mínúta';
	            }
	            return result + 'mínútu';
	        case 'hh':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
	            }
	            return result + 'klukkustund';
	        case 'd':
	            if (withoutSuffix) {
	                return 'dagur';
	            }
	            return isFuture ? 'dag' : 'degi';
	        case 'dd':
	            if (plural(number)) {
	                if (withoutSuffix) {
	                    return result + 'dagar';
	                }
	                return result + (isFuture ? 'daga' : 'dögum');
	            } else if (withoutSuffix) {
	                return result + 'dagur';
	            }
	            return result + (isFuture ? 'dag' : 'degi');
	        case 'M':
	            if (withoutSuffix) {
	                return 'mánuður';
	            }
	            return isFuture ? 'mánuð' : 'mánuði';
	        case 'MM':
	            if (plural(number)) {
	                if (withoutSuffix) {
	                    return result + 'mánuðir';
	                }
	                return result + (isFuture ? 'mánuði' : 'mánuðum');
	            } else if (withoutSuffix) {
	                return result + 'mánuður';
	            }
	            return result + (isFuture ? 'mánuð' : 'mánuði');
	        case 'y':
	            return withoutSuffix || isFuture ? 'ár' : 'ári';
	        case 'yy':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
	            }
	            return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
	    }
	}

	var is = moment.defineLocale('is', {
	    months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
	    monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
	    weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
	    weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
	    weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY [kl.] H:mm',
	        LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
	    },
	    calendar : {
	        sameDay : '[í dag kl.] LT',
	        nextDay : '[á morgun kl.] LT',
	        nextWeek : 'dddd [kl.] LT',
	        lastDay : '[í gær kl.] LT',
	        lastWeek : '[síðasta] dddd [kl.] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'eftir %s',
	        past : 'fyrir %s síðan',
	        s : translate,
	        m : translate,
	        mm : translate,
	        h : 'klukkustund',
	        hh : translate,
	        d : translate,
	        dd : translate,
	        M : translate,
	        MM : translate,
	        y : translate,
	        yy : translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return is;

	})));


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Italian [it]
	//! author : Lorenzo : https://github.com/aliem
	//! author: Mattia Larentis: https://github.com/nostalgiaz

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var it = moment.defineLocale('it', {
	    months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
	    monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
	    weekdays : 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
	    weekdaysShort : 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
	    weekdaysMin : 'do_lu_ma_me_gi_ve_sa'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[Oggi alle] LT',
	        nextDay: '[Domani alle] LT',
	        nextWeek: 'dddd [alle] LT',
	        lastDay: '[Ieri alle] LT',
	        lastWeek: function () {
	            switch (this.day()) {
	                case 0:
	                    return '[la scorsa] dddd [alle] LT';
	                default:
	                    return '[lo scorso] dddd [alle] LT';
	            }
	        },
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : function (s) {
	            return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
	        },
	        past : '%s fa',
	        s : 'alcuni secondi',
	        m : 'un minuto',
	        mm : '%d minuti',
	        h : 'un\'ora',
	        hh : '%d ore',
	        d : 'un giorno',
	        dd : '%d giorni',
	        M : 'un mese',
	        MM : '%d mesi',
	        y : 'un anno',
	        yy : '%d anni'
	    },
	    dayOfMonthOrdinalParse : /\d{1,2}º/,
	    ordinal: '%dº',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return it;

	})));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Japanese [ja]
	//! author : LI Long : https://github.com/baryon

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var ja = moment.defineLocale('ja', {
	    months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	    weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
	    weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
	    weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'YYYY/MM/DD',
	        LL : 'YYYY年M月D日',
	        LLL : 'YYYY年M月D日 HH:mm',
	        LLLL : 'YYYY年M月D日 HH:mm dddd',
	        l : 'YYYY/MM/DD',
	        ll : 'YYYY年M月D日',
	        lll : 'YYYY年M月D日 HH:mm',
	        llll : 'YYYY年M月D日 HH:mm dddd'
	    },
	    meridiemParse: /午前|午後/i,
	    isPM : function (input) {
	        return input === '午後';
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 12) {
	            return '午前';
	        } else {
	            return '午後';
	        }
	    },
	    calendar : {
	        sameDay : '[今日] LT',
	        nextDay : '[明日] LT',
	        nextWeek : '[来週]dddd LT',
	        lastDay : '[昨日] LT',
	        lastWeek : '[前週]dddd LT',
	        sameElse : 'L'
	    },
	    dayOfMonthOrdinalParse : /\d{1,2}日/,
	    ordinal : function (number, period) {
	        switch (period) {
	            case 'd':
	            case 'D':
	            case 'DDD':
	                return number + '日';
	            default:
	                return number;
	        }
	    },
	    relativeTime : {
	        future : '%s後',
	        past : '%s前',
	        s : '数秒',
	        m : '1分',
	        mm : '%d分',
	        h : '1時間',
	        hh : '%d時間',
	        d : '1日',
	        dd : '%d日',
	        M : '1ヶ月',
	        MM : '%dヶ月',
	        y : '1年',
	        yy : '%d年'
	    }
	});

	return ja;

	})));


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Javanese [jv]
	//! author : Rony Lantip : https://github.com/lantip
	//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var jv = moment.defineLocale('jv', {
	    months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
	    monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
	    weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
	    weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
	    weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
	    longDateFormat : {
	        LT : 'HH.mm',
	        LTS : 'HH.mm.ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY [pukul] HH.mm',
	        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	    },
	    meridiemParse: /enjing|siyang|sonten|ndalu/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'enjing') {
	            return hour;
	        } else if (meridiem === 'siyang') {
	            return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hours, minutes, isLower) {
	        if (hours < 11) {
	            return 'enjing';
	        } else if (hours < 15) {
	            return 'siyang';
	        } else if (hours < 19) {
	            return 'sonten';
	        } else {
	            return 'ndalu';
	        }
	    },
	    calendar : {
	        sameDay : '[Dinten puniko pukul] LT',
	        nextDay : '[Mbenjang pukul] LT',
	        nextWeek : 'dddd [pukul] LT',
	        lastDay : '[Kala wingi pukul] LT',
	        lastWeek : 'dddd [kepengker pukul] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'wonten ing %s',
	        past : '%s ingkang kepengker',
	        s : 'sawetawis detik',
	        m : 'setunggal menit',
	        mm : '%d menit',
	        h : 'setunggal jam',
	        hh : '%d jam',
	        d : 'sedinten',
	        dd : '%d dinten',
	        M : 'sewulan',
	        MM : '%d wulan',
	        y : 'setaun',
	        yy : '%d taun'
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return jv;

	})));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Georgian [ka]
	//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var ka = moment.defineLocale('ka', {
	    months : {
	        standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
	        format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
	    },
	    monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
	    weekdays : {
	        standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
	        format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
	        isFormat: /(წინა|შემდეგ)/
	    },
	    weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
	    weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
	    longDateFormat : {
	        LT : 'h:mm A',
	        LTS : 'h:mm:ss A',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY h:mm A',
	        LLLL : 'dddd, D MMMM YYYY h:mm A'
	    },
	    calendar : {
	        sameDay : '[დღეს] LT[-ზე]',
	        nextDay : '[ხვალ] LT[-ზე]',
	        lastDay : '[გუშინ] LT[-ზე]',
	        nextWeek : '[შემდეგ] dddd LT[-ზე]',
	        lastWeek : '[წინა] dddd LT-ზე',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : function (s) {
	            return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
	                s.replace(/ი$/, 'ში') :
	                s + 'ში';
	        },
	        past : function (s) {
	            if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
	                return s.replace(/(ი|ე)$/, 'ის უკან');
	            }
	            if ((/წელი/).test(s)) {
	                return s.replace(/წელი$/, 'წლის უკან');
	            }
	        },
	        s : 'რამდენიმე წამი',
	        m : 'წუთი',
	        mm : '%d წუთი',
	        h : 'საათი',
	        hh : '%d საათი',
	        d : 'დღე',
	        dd : '%d დღე',
	        M : 'თვე',
	        MM : '%d თვე',
	        y : 'წელი',
	        yy : '%d წელი'
	    },
	    dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
	    ordinal : function (number) {
	        if (number === 0) {
	            return number;
	        }
	        if (number === 1) {
	            return number + '-ლი';
	        }
	        if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
	            return 'მე-' + number;
	        }
	        return number + '-ე';
	    },
	    week : {
	        dow : 1,
	        doy : 7
	    }
	});

	return ka;

	})));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Kazakh [kk]
	//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var suffixes = {
	    0: '-ші',
	    1: '-ші',
	    2: '-ші',
	    3: '-ші',
	    4: '-ші',
	    5: '-ші',
	    6: '-шы',
	    7: '-ші',
	    8: '-ші',
	    9: '-шы',
	    10: '-шы',
	    20: '-шы',
	    30: '-шы',
	    40: '-шы',
	    50: '-ші',
	    60: '-шы',
	    70: '-ші',
	    80: '-ші',
	    90: '-шы',
	    100: '-ші'
	};

	var kk = moment.defineLocale('kk', {
	    months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
	    monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
	    weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
	    weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
	    weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[Бүгін сағат] LT',
	        nextDay : '[Ертең сағат] LT',
	        nextWeek : 'dddd [сағат] LT',
	        lastDay : '[Кеше сағат] LT',
	        lastWeek : '[Өткен аптаның] dddd [сағат] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s ішінде',
	        past : '%s бұрын',
	        s : 'бірнеше секунд',
	        m : 'бір минут',
	        mm : '%d минут',
	        h : 'бір сағат',
	        hh : '%d сағат',
	        d : 'бір күн',
	        dd : '%d күн',
	        M : 'бір ай',
	        MM : '%d ай',
	        y : 'бір жыл',
	        yy : '%d жыл'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
	    ordinal : function (number) {
	        var a = number % 10,
	            b = number >= 100 ? 100 : null;
	        return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return kk;

	})));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Cambodian [km]
	//! author : Kruy Vanna : https://github.com/kruyvanna

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var km = moment.defineLocale('km', {
	    months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	    monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	    weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	    weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	    weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	    longDateFormat: {
	        LT: 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar: {
	        sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
	        nextDay: '[ស្អែក ម៉ោង] LT',
	        nextWeek: 'dddd [ម៉ោង] LT',
	        lastDay: '[ម្សិលមិញ ម៉ោង] LT',
	        lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
	        sameElse: 'L'
	    },
	    relativeTime: {
	        future: '%sទៀត',
	        past: '%sមុន',
	        s: 'ប៉ុន្មានវិនាទី',
	        m: 'មួយនាទី',
	        mm: '%d នាទី',
	        h: 'មួយម៉ោង',
	        hh: '%d ម៉ោង',
	        d: 'មួយថ្ងៃ',
	        dd: '%d ថ្ងៃ',
	        M: 'មួយខែ',
	        MM: '%d ខែ',
	        y: 'មួយឆ្នាំ',
	        yy: '%d ឆ្នាំ'
	    },
	    week: {
	        dow: 1, // Monday is the first day of the week.
	        doy: 4 // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return km;

	})));


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Kannada [kn]
	//! author : Rajeev Naik : https://github.com/rajeevnaikte

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '೧',
	    '2': '೨',
	    '3': '೩',
	    '4': '೪',
	    '5': '೫',
	    '6': '೬',
	    '7': '೭',
	    '8': '೮',
	    '9': '೯',
	    '0': '೦'
	};
	var numberMap = {
	    '೧': '1',
	    '೨': '2',
	    '೩': '3',
	    '೪': '4',
	    '೫': '5',
	    '೬': '6',
	    '೭': '7',
	    '೮': '8',
	    '೯': '9',
	    '೦': '0'
	};

	var kn = moment.defineLocale('kn', {
	    months : 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
	    monthsShort : 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ'.split('_'),
	    monthsParseExact: true,
	    weekdays : 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
	    weekdaysShort : 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
	    weekdaysMin : 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
	    longDateFormat : {
	        LT : 'A h:mm',
	        LTS : 'A h:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY, A h:mm',
	        LLLL : 'dddd, D MMMM YYYY, A h:mm'
	    },
	    calendar : {
	        sameDay : '[ಇಂದು] LT',
	        nextDay : '[ನಾಳೆ] LT',
	        nextWeek : 'dddd, LT',
	        lastDay : '[ನಿನ್ನೆ] LT',
	        lastWeek : '[ಕೊನೆಯ] dddd, LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s ನಂತರ',
	        past : '%s ಹಿಂದೆ',
	        s : 'ಕೆಲವು ಕ್ಷಣಗಳು',
	        m : 'ಒಂದು ನಿಮಿಷ',
	        mm : '%d ನಿಮಿಷ',
	        h : 'ಒಂದು ಗಂಟೆ',
	        hh : '%d ಗಂಟೆ',
	        d : 'ಒಂದು ದಿನ',
	        dd : '%d ದಿನ',
	        M : 'ಒಂದು ತಿಂಗಳು',
	        MM : '%d ತಿಂಗಳು',
	        y : 'ಒಂದು ವರ್ಷ',
	        yy : '%d ವರ್ಷ'
	    },
	    preparse: function (string) {
	        return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
	            return numberMap[match];
	        });
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        });
	    },
	    meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'ರಾತ್ರಿ') {
	            return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
	            return hour;
	        } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
	            return hour >= 10 ? hour : hour + 12;
	        } else if (meridiem === 'ಸಂಜೆ') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'ರಾತ್ರಿ';
	        } else if (hour < 10) {
	            return 'ಬೆಳಿಗ್ಗೆ';
	        } else if (hour < 17) {
	            return 'ಮಧ್ಯಾಹ್ನ';
	        } else if (hour < 20) {
	            return 'ಸಂಜೆ';
	        } else {
	            return 'ರಾತ್ರಿ';
	        }
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
	    ordinal : function (number) {
	        return number + 'ನೇ';
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return kn;

	})));


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Korean [ko]
	//! author : Kyungwook, Park : https://github.com/kyungw00k
	//! author : Jeeeyul Lee <jeeeyul@gmail.com>

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var ko = moment.defineLocale('ko', {
	    months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	    monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	    weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
	    weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
	    weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
	    longDateFormat : {
	        LT : 'A h:mm',
	        LTS : 'A h:mm:ss',
	        L : 'YYYY.MM.DD',
	        LL : 'YYYY년 MMMM D일',
	        LLL : 'YYYY년 MMMM D일 A h:mm',
	        LLLL : 'YYYY년 MMMM D일 dddd A h:mm',
	        l : 'YYYY.MM.DD',
	        ll : 'YYYY년 MMMM D일',
	        lll : 'YYYY년 MMMM D일 A h:mm',
	        llll : 'YYYY년 MMMM D일 dddd A h:mm'
	    },
	    calendar : {
	        sameDay : '오늘 LT',
	        nextDay : '내일 LT',
	        nextWeek : 'dddd LT',
	        lastDay : '어제 LT',
	        lastWeek : '지난주 dddd LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s 후',
	        past : '%s 전',
	        s : '몇 초',
	        ss : '%d초',
	        m : '1분',
	        mm : '%d분',
	        h : '한 시간',
	        hh : '%d시간',
	        d : '하루',
	        dd : '%d일',
	        M : '한 달',
	        MM : '%d달',
	        y : '일 년',
	        yy : '%d년'
	    },
	    dayOfMonthOrdinalParse : /\d{1,2}일/,
	    ordinal : '%d일',
	    meridiemParse : /오전|오후/,
	    isPM : function (token) {
	        return token === '오후';
	    },
	    meridiem : function (hour, minute, isUpper) {
	        return hour < 12 ? '오전' : '오후';
	    }
	});

	return ko;

	})));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Kyrgyz [ky]
	//! author : Chyngyz Arystan uulu : https://github.com/chyngyz

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';



	var suffixes = {
	    0: '-чү',
	    1: '-чи',
	    2: '-чи',
	    3: '-чү',
	    4: '-чү',
	    5: '-чи',
	    6: '-чы',
	    7: '-чи',
	    8: '-чи',
	    9: '-чу',
	    10: '-чу',
	    20: '-чы',
	    30: '-чу',
	    40: '-чы',
	    50: '-чү',
	    60: '-чы',
	    70: '-чи',
	    80: '-чи',
	    90: '-чу',
	    100: '-чү'
	};

	var ky = moment.defineLocale('ky', {
	    months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	    monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
	    weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
	    weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
	    weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[Бүгүн саат] LT',
	        nextDay : '[Эртең саат] LT',
	        nextWeek : 'dddd [саат] LT',
	        lastDay : '[Кече саат] LT',
	        lastWeek : '[Өткен аптанын] dddd [күнү] [саат] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s ичинде',
	        past : '%s мурун',
	        s : 'бирнече секунд',
	        m : 'бир мүнөт',
	        mm : '%d мүнөт',
	        h : 'бир саат',
	        hh : '%d саат',
	        d : 'бир күн',
	        dd : '%d күн',
	        M : 'бир ай',
	        MM : '%d ай',
	        y : 'бир жыл',
	        yy : '%d жыл'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
	    ordinal : function (number) {
	        var a = number % 10,
	            b = number >= 100 ? 100 : null;
	        return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return ky;

	})));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Luxembourgish [lb]
	//! author : mweimerskirch : https://github.com/mweimerskirch
	//! author : David Raison : https://github.com/kwisatz

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function processRelativeTime(number, withoutSuffix, key, isFuture) {
	    var format = {
	        'm': ['eng Minutt', 'enger Minutt'],
	        'h': ['eng Stonn', 'enger Stonn'],
	        'd': ['een Dag', 'engem Dag'],
	        'M': ['ee Mount', 'engem Mount'],
	        'y': ['ee Joer', 'engem Joer']
	    };
	    return withoutSuffix ? format[key][0] : format[key][1];
	}
	function processFutureTime(string) {
	    var number = string.substr(0, string.indexOf(' '));
	    if (eifelerRegelAppliesToNumber(number)) {
	        return 'a ' + string;
	    }
	    return 'an ' + string;
	}
	function processPastTime(string) {
	    var number = string.substr(0, string.indexOf(' '));
	    if (eifelerRegelAppliesToNumber(number)) {
	        return 'viru ' + string;
	    }
	    return 'virun ' + string;
	}
	/**
	 * Returns true if the word before the given number loses the '-n' ending.
	 * e.g. 'an 10 Deeg' but 'a 5 Deeg'
	 *
	 * @param number {integer}
	 * @returns {boolean}
	 */
	function eifelerRegelAppliesToNumber(number) {
	    number = parseInt(number, 10);
	    if (isNaN(number)) {
	        return false;
	    }
	    if (number < 0) {
	        // Negative Number --> always true
	        return true;
	    } else if (number < 10) {
	        // Only 1 digit
	        if (4 <= number && number <= 7) {
	            return true;
	        }
	        return false;
	    } else if (number < 100) {
	        // 2 digits
	        var lastDigit = number % 10, firstDigit = number / 10;
	        if (lastDigit === 0) {
	            return eifelerRegelAppliesToNumber(firstDigit);
	        }
	        return eifelerRegelAppliesToNumber(lastDigit);
	    } else if (number < 10000) {
	        // 3 or 4 digits --> recursively check first digit
	        while (number >= 10) {
	            number = number / 10;
	        }
	        return eifelerRegelAppliesToNumber(number);
	    } else {
	        // Anything larger than 4 digits: recursively check first n-3 digits
	        number = number / 1000;
	        return eifelerRegelAppliesToNumber(number);
	    }
	}

	var lb = moment.defineLocale('lb', {
	    months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	    monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	    monthsParseExact : true,
	    weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
	    weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
	    weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat: {
	        LT: 'H:mm [Auer]',
	        LTS: 'H:mm:ss [Auer]',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm [Auer]',
	        LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
	    },
	    calendar: {
	        sameDay: '[Haut um] LT',
	        sameElse: 'L',
	        nextDay: '[Muer um] LT',
	        nextWeek: 'dddd [um] LT',
	        lastDay: '[Gëschter um] LT',
	        lastWeek: function () {
	            // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
	            switch (this.day()) {
	                case 2:
	                case 4:
	                    return '[Leschten] dddd [um] LT';
	                default:
	                    return '[Leschte] dddd [um] LT';
	            }
	        }
	    },
	    relativeTime : {
	        future : processFutureTime,
	        past : processPastTime,
	        s : 'e puer Sekonnen',
	        m : processRelativeTime,
	        mm : '%d Minutten',
	        h : processRelativeTime,
	        hh : '%d Stonnen',
	        d : processRelativeTime,
	        dd : '%d Deeg',
	        M : processRelativeTime,
	        MM : '%d Méint',
	        y : processRelativeTime,
	        yy : '%d Joer'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal: '%d.',
	    week: {
	        dow: 1, // Monday is the first day of the week.
	        doy: 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return lb;

	})));


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Lao [lo]
	//! author : Ryan Hart : https://github.com/ryanhart2

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var lo = moment.defineLocale('lo', {
	    months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	    monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	    weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	    weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	    weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
	    },
	    meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
	    isPM: function (input) {
	        return input === 'ຕອນແລງ';
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 12) {
	            return 'ຕອນເຊົ້າ';
	        } else {
	            return 'ຕອນແລງ';
	        }
	    },
	    calendar : {
	        sameDay : '[ມື້ນີ້ເວລາ] LT',
	        nextDay : '[ມື້ອື່ນເວລາ] LT',
	        nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
	        lastDay : '[ມື້ວານນີ້ເວລາ] LT',
	        lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'ອີກ %s',
	        past : '%sຜ່ານມາ',
	        s : 'ບໍ່ເທົ່າໃດວິນາທີ',
	        m : '1 ນາທີ',
	        mm : '%d ນາທີ',
	        h : '1 ຊົ່ວໂມງ',
	        hh : '%d ຊົ່ວໂມງ',
	        d : '1 ມື້',
	        dd : '%d ມື້',
	        M : '1 ເດືອນ',
	        MM : '%d ເດືອນ',
	        y : '1 ປີ',
	        yy : '%d ປີ'
	    },
	    dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
	    ordinal : function (number) {
	        return 'ທີ່' + number;
	    }
	});

	return lo;

	})));


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Lithuanian [lt]
	//! author : Mindaugas Mozūras : https://github.com/mmozuras

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var units = {
	    'm' : 'minutė_minutės_minutę',
	    'mm': 'minutės_minučių_minutes',
	    'h' : 'valanda_valandos_valandą',
	    'hh': 'valandos_valandų_valandas',
	    'd' : 'diena_dienos_dieną',
	    'dd': 'dienos_dienų_dienas',
	    'M' : 'mėnuo_mėnesio_mėnesį',
	    'MM': 'mėnesiai_mėnesių_mėnesius',
	    'y' : 'metai_metų_metus',
	    'yy': 'metai_metų_metus'
	};
	function translateSeconds(number, withoutSuffix, key, isFuture) {
	    if (withoutSuffix) {
	        return 'kelios sekundės';
	    } else {
	        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
	    }
	}
	function translateSingular(number, withoutSuffix, key, isFuture) {
	    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
	}
	function special(number) {
	    return number % 10 === 0 || (number > 10 && number < 20);
	}
	function forms(key) {
	    return units[key].split('_');
	}
	function translate(number, withoutSuffix, key, isFuture) {
	    var result = number + ' ';
	    if (number === 1) {
	        return result + translateSingular(number, withoutSuffix, key[0], isFuture);
	    } else if (withoutSuffix) {
	        return result + (special(number) ? forms(key)[1] : forms(key)[0]);
	    } else {
	        if (isFuture) {
	            return result + forms(key)[1];
	        } else {
	            return result + (special(number) ? forms(key)[1] : forms(key)[2]);
	        }
	    }
	}
	var lt = moment.defineLocale('lt', {
	    months : {
	        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
	        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
	        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
	    },
	    monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
	    weekdays : {
	        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
	        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
	        isFormat: /dddd HH:mm/
	    },
	    weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
	    weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'YYYY-MM-DD',
	        LL : 'YYYY [m.] MMMM D [d.]',
	        LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	        LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
	        l : 'YYYY-MM-DD',
	        ll : 'YYYY [m.] MMMM D [d.]',
	        lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	        llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
	    },
	    calendar : {
	        sameDay : '[Šiandien] LT',
	        nextDay : '[Rytoj] LT',
	        nextWeek : 'dddd LT',
	        lastDay : '[Vakar] LT',
	        lastWeek : '[Praėjusį] dddd LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'po %s',
	        past : 'prieš %s',
	        s : translateSeconds,
	        m : translateSingular,
	        mm : translate,
	        h : translateSingular,
	        hh : translate,
	        d : translateSingular,
	        dd : translate,
	        M : translateSingular,
	        MM : translate,
	        y : translateSingular,
	        yy : translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
	    ordinal : function (number) {
	        return number + '-oji';
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return lt;

	})));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Latvian [lv]
	//! author : Kristaps Karlsons : https://github.com/skakri
	//! author : Jānis Elmeris : https://github.com/JanisE

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var units = {
	    'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	    'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	    'h': 'stundas_stundām_stunda_stundas'.split('_'),
	    'hh': 'stundas_stundām_stunda_stundas'.split('_'),
	    'd': 'dienas_dienām_diena_dienas'.split('_'),
	    'dd': 'dienas_dienām_diena_dienas'.split('_'),
	    'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	    'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	    'y': 'gada_gadiem_gads_gadi'.split('_'),
	    'yy': 'gada_gadiem_gads_gadi'.split('_')
	};
	/**
	 * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
	 */
	function format(forms, number, withoutSuffix) {
	    if (withoutSuffix) {
	        // E.g. "21 minūte", "3 minūtes".
	        return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
	    } else {
	        // E.g. "21 minūtes" as in "pēc 21 minūtes".
	        // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
	        return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
	    }
	}
	function relativeTimeWithPlural(number, withoutSuffix, key) {
	    return number + ' ' + format(units[key], number, withoutSuffix);
	}
	function relativeTimeWithSingular(number, withoutSuffix, key) {
	    return format(units[key], number, withoutSuffix);
	}
	function relativeSeconds(number, withoutSuffix) {
	    return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
	}

	var lv = moment.defineLocale('lv', {
	    months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
	    monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
	    weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
	    weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
	    weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY.',
	        LL : 'YYYY. [gada] D. MMMM',
	        LLL : 'YYYY. [gada] D. MMMM, HH:mm',
	        LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
	    },
	    calendar : {
	        sameDay : '[Šodien pulksten] LT',
	        nextDay : '[Rīt pulksten] LT',
	        nextWeek : 'dddd [pulksten] LT',
	        lastDay : '[Vakar pulksten] LT',
	        lastWeek : '[Pagājušā] dddd [pulksten] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'pēc %s',
	        past : 'pirms %s',
	        s : relativeSeconds,
	        m : relativeTimeWithSingular,
	        mm : relativeTimeWithPlural,
	        h : relativeTimeWithSingular,
	        hh : relativeTimeWithPlural,
	        d : relativeTimeWithSingular,
	        dd : relativeTimeWithPlural,
	        M : relativeTimeWithSingular,
	        MM : relativeTimeWithPlural,
	        y : relativeTimeWithSingular,
	        yy : relativeTimeWithPlural
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return lv;

	})));


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Montenegrin [me]
	//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var translator = {
	    words: { //Different grammatical cases
	        m: ['jedan minut', 'jednog minuta'],
	        mm: ['minut', 'minuta', 'minuta'],
	        h: ['jedan sat', 'jednog sata'],
	        hh: ['sat', 'sata', 'sati'],
	        dd: ['dan', 'dana', 'dana'],
	        MM: ['mjesec', 'mjeseca', 'mjeseci'],
	        yy: ['godina', 'godine', 'godina']
	    },
	    correctGrammaticalCase: function (number, wordKey) {
	        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	    },
	    translate: function (number, withoutSuffix, key) {
	        var wordKey = translator.words[key];
	        if (key.length === 1) {
	            return withoutSuffix ? wordKey[0] : wordKey[1];
	        } else {
	            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	        }
	    }
	};

	var me = moment.defineLocale('me', {
	    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
	    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
	    monthsParseExact : true,
	    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat: {
	        LT: 'H:mm',
	        LTS : 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd, D. MMMM YYYY H:mm'
	    },
	    calendar: {
	        sameDay: '[danas u] LT',
	        nextDay: '[sjutra u] LT',

	        nextWeek: function () {
	            switch (this.day()) {
	                case 0:
	                    return '[u] [nedjelju] [u] LT';
	                case 3:
	                    return '[u] [srijedu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	            }
	        },
	        lastDay  : '[juče u] LT',
	        lastWeek : function () {
	            var lastWeekDays = [
	                '[prošle] [nedjelje] [u] LT',
	                '[prošlog] [ponedjeljka] [u] LT',
	                '[prošlog] [utorka] [u] LT',
	                '[prošle] [srijede] [u] LT',
	                '[prošlog] [četvrtka] [u] LT',
	                '[prošlog] [petka] [u] LT',
	                '[prošle] [subote] [u] LT'
	            ];
	            return lastWeekDays[this.day()];
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'za %s',
	        past   : 'prije %s',
	        s      : 'nekoliko sekundi',
	        m      : translator.translate,
	        mm     : translator.translate,
	        h      : translator.translate,
	        hh     : translator.translate,
	        d      : 'dan',
	        dd     : translator.translate,
	        M      : 'mjesec',
	        MM     : translator.translate,
	        y      : 'godinu',
	        yy     : translator.translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return me;

	})));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Maori [mi]
	//! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var mi = moment.defineLocale('mi', {
	    months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
	    monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
	    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
	    weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
	    weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
	    weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
	    longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY [i] HH:mm',
	        LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
	    },
	    calendar: {
	        sameDay: '[i teie mahana, i] LT',
	        nextDay: '[apopo i] LT',
	        nextWeek: 'dddd [i] LT',
	        lastDay: '[inanahi i] LT',
	        lastWeek: 'dddd [whakamutunga i] LT',
	        sameElse: 'L'
	    },
	    relativeTime: {
	        future: 'i roto i %s',
	        past: '%s i mua',
	        s: 'te hēkona ruarua',
	        m: 'he meneti',
	        mm: '%d meneti',
	        h: 'te haora',
	        hh: '%d haora',
	        d: 'he ra',
	        dd: '%d ra',
	        M: 'he marama',
	        MM: '%d marama',
	        y: 'he tau',
	        yy: '%d tau'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}º/,
	    ordinal: '%dº',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return mi;

	})));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Macedonian [mk]
	//! author : Borislav Mickov : https://github.com/B0k0

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var mk = moment.defineLocale('mk', {
	    months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
	    monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
	    weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
	    weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
	    weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'D.MM.YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY H:mm',
	        LLLL : 'dddd, D MMMM YYYY H:mm'
	    },
	    calendar : {
	        sameDay : '[Денес во] LT',
	        nextDay : '[Утре во] LT',
	        nextWeek : '[Во] dddd [во] LT',
	        lastDay : '[Вчера во] LT',
	        lastWeek : function () {
	            switch (this.day()) {
	                case 0:
	                case 3:
	                case 6:
	                    return '[Изминатата] dddd [во] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[Изминатиот] dddd [во] LT';
	            }
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'после %s',
	        past : 'пред %s',
	        s : 'неколку секунди',
	        m : 'минута',
	        mm : '%d минути',
	        h : 'час',
	        hh : '%d часа',
	        d : 'ден',
	        dd : '%d дена',
	        M : 'месец',
	        MM : '%d месеци',
	        y : 'година',
	        yy : '%d години'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	    ordinal : function (number) {
	        var lastDigit = number % 10,
	            last2Digits = number % 100;
	        if (number === 0) {
	            return number + '-ев';
	        } else if (last2Digits === 0) {
	            return number + '-ен';
	        } else if (last2Digits > 10 && last2Digits < 20) {
	            return number + '-ти';
	        } else if (lastDigit === 1) {
	            return number + '-ви';
	        } else if (lastDigit === 2) {
	            return number + '-ри';
	        } else if (lastDigit === 7 || lastDigit === 8) {
	            return number + '-ми';
	        } else {
	            return number + '-ти';
	        }
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return mk;

	})));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malayalam [ml]
	//! author : Floyd Pink : https://github.com/floydpink

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var ml = moment.defineLocale('ml', {
	    months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
	    monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
	    weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
	    weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
	    longDateFormat : {
	        LT : 'A h:mm -നു',
	        LTS : 'A h:mm:ss -നു',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY, A h:mm -നു',
	        LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
	    },
	    calendar : {
	        sameDay : '[ഇന്ന്] LT',
	        nextDay : '[നാളെ] LT',
	        nextWeek : 'dddd, LT',
	        lastDay : '[ഇന്നലെ] LT',
	        lastWeek : '[കഴിഞ്ഞ] dddd, LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s കഴിഞ്ഞ്',
	        past : '%s മുൻപ്',
	        s : 'അൽപ നിമിഷങ്ങൾ',
	        m : 'ഒരു മിനിറ്റ്',
	        mm : '%d മിനിറ്റ്',
	        h : 'ഒരു മണിക്കൂർ',
	        hh : '%d മണിക്കൂർ',
	        d : 'ഒരു ദിവസം',
	        dd : '%d ദിവസം',
	        M : 'ഒരു മാസം',
	        MM : '%d മാസം',
	        y : 'ഒരു വർഷം',
	        yy : '%d വർഷം'
	    },
	    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if ((meridiem === 'രാത്രി' && hour >= 4) ||
	                meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
	                meridiem === 'വൈകുന്നേരം') {
	            return hour + 12;
	        } else {
	            return hour;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'രാത്രി';
	        } else if (hour < 12) {
	            return 'രാവിലെ';
	        } else if (hour < 17) {
	            return 'ഉച്ച കഴിഞ്ഞ്';
	        } else if (hour < 20) {
	            return 'വൈകുന്നേരം';
	        } else {
	            return 'രാത്രി';
	        }
	    }
	});

	return ml;

	})));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Marathi [mr]
	//! author : Harshad Kale : https://github.com/kalehv
	//! author : Vivek Athalye : https://github.com/vnathalye

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '१',
	    '2': '२',
	    '3': '३',
	    '4': '४',
	    '5': '५',
	    '6': '६',
	    '7': '७',
	    '8': '८',
	    '9': '९',
	    '0': '०'
	};
	var numberMap = {
	    '१': '1',
	    '२': '2',
	    '३': '3',
	    '४': '4',
	    '५': '5',
	    '६': '6',
	    '७': '7',
	    '८': '8',
	    '९': '9',
	    '०': '0'
	};

	function relativeTimeMr(number, withoutSuffix, string, isFuture)
	{
	    var output = '';
	    if (withoutSuffix) {
	        switch (string) {
	            case 's': output = 'काही सेकंद'; break;
	            case 'm': output = 'एक मिनिट'; break;
	            case 'mm': output = '%d मिनिटे'; break;
	            case 'h': output = 'एक तास'; break;
	            case 'hh': output = '%d तास'; break;
	            case 'd': output = 'एक दिवस'; break;
	            case 'dd': output = '%d दिवस'; break;
	            case 'M': output = 'एक महिना'; break;
	            case 'MM': output = '%d महिने'; break;
	            case 'y': output = 'एक वर्ष'; break;
	            case 'yy': output = '%d वर्षे'; break;
	        }
	    }
	    else {
	        switch (string) {
	            case 's': output = 'काही सेकंदां'; break;
	            case 'm': output = 'एका मिनिटा'; break;
	            case 'mm': output = '%d मिनिटां'; break;
	            case 'h': output = 'एका तासा'; break;
	            case 'hh': output = '%d तासां'; break;
	            case 'd': output = 'एका दिवसा'; break;
	            case 'dd': output = '%d दिवसां'; break;
	            case 'M': output = 'एका महिन्या'; break;
	            case 'MM': output = '%d महिन्यां'; break;
	            case 'y': output = 'एका वर्षा'; break;
	            case 'yy': output = '%d वर्षां'; break;
	        }
	    }
	    return output.replace(/%d/i, number);
	}

	var mr = moment.defineLocale('mr', {
	    months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
	    monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	    weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
	    weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	    longDateFormat : {
	        LT : 'A h:mm वाजता',
	        LTS : 'A h:mm:ss वाजता',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY, A h:mm वाजता',
	        LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
	    },
	    calendar : {
	        sameDay : '[आज] LT',
	        nextDay : '[उद्या] LT',
	        nextWeek : 'dddd, LT',
	        lastDay : '[काल] LT',
	        lastWeek: '[मागील] dddd, LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future: '%sमध्ये',
	        past: '%sपूर्वी',
	        s: relativeTimeMr,
	        m: relativeTimeMr,
	        mm: relativeTimeMr,
	        h: relativeTimeMr,
	        hh: relativeTimeMr,
	        d: relativeTimeMr,
	        dd: relativeTimeMr,
	        M: relativeTimeMr,
	        MM: relativeTimeMr,
	        y: relativeTimeMr,
	        yy: relativeTimeMr
	    },
	    preparse: function (string) {
	        return string.replace(/[१२३४५६७८९०]/g, function (match) {
	            return numberMap[match];
	        });
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        });
	    },
	    meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'रात्री') {
	            return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'सकाळी') {
	            return hour;
	        } else if (meridiem === 'दुपारी') {
	            return hour >= 10 ? hour : hour + 12;
	        } else if (meridiem === 'सायंकाळी') {
	            return hour + 12;
	        }
	    },
	    meridiem: function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'रात्री';
	        } else if (hour < 10) {
	            return 'सकाळी';
	        } else if (hour < 17) {
	            return 'दुपारी';
	        } else if (hour < 20) {
	            return 'सायंकाळी';
	        } else {
	            return 'रात्री';
	        }
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return mr;

	})));


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malay [ms]
	//! author : Weldan Jamili : https://github.com/weldan

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var ms = moment.defineLocale('ms', {
	    months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	    monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	    weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	    weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	    weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	    longDateFormat : {
	        LT : 'HH.mm',
	        LTS : 'HH.mm.ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY [pukul] HH.mm',
	        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	    },
	    meridiemParse: /pagi|tengahari|petang|malam/,
	    meridiemHour: function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'pagi') {
	            return hour;
	        } else if (meridiem === 'tengahari') {
	            return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === 'petang' || meridiem === 'malam') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hours, minutes, isLower) {
	        if (hours < 11) {
	            return 'pagi';
	        } else if (hours < 15) {
	            return 'tengahari';
	        } else if (hours < 19) {
	            return 'petang';
	        } else {
	            return 'malam';
	        }
	    },
	    calendar : {
	        sameDay : '[Hari ini pukul] LT',
	        nextDay : '[Esok pukul] LT',
	        nextWeek : 'dddd [pukul] LT',
	        lastDay : '[Kelmarin pukul] LT',
	        lastWeek : 'dddd [lepas pukul] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'dalam %s',
	        past : '%s yang lepas',
	        s : 'beberapa saat',
	        m : 'seminit',
	        mm : '%d minit',
	        h : 'sejam',
	        hh : '%d jam',
	        d : 'sehari',
	        dd : '%d hari',
	        M : 'sebulan',
	        MM : '%d bulan',
	        y : 'setahun',
	        yy : '%d tahun'
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return ms;

	})));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malay [ms-my]
	//! note : DEPRECATED, the correct one is [ms]
	//! author : Weldan Jamili : https://github.com/weldan

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var msMy = moment.defineLocale('ms-my', {
	    months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	    monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	    weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	    weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	    weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	    longDateFormat : {
	        LT : 'HH.mm',
	        LTS : 'HH.mm.ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY [pukul] HH.mm',
	        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	    },
	    meridiemParse: /pagi|tengahari|petang|malam/,
	    meridiemHour: function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'pagi') {
	            return hour;
	        } else if (meridiem === 'tengahari') {
	            return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === 'petang' || meridiem === 'malam') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hours, minutes, isLower) {
	        if (hours < 11) {
	            return 'pagi';
	        } else if (hours < 15) {
	            return 'tengahari';
	        } else if (hours < 19) {
	            return 'petang';
	        } else {
	            return 'malam';
	        }
	    },
	    calendar : {
	        sameDay : '[Hari ini pukul] LT',
	        nextDay : '[Esok pukul] LT',
	        nextWeek : 'dddd [pukul] LT',
	        lastDay : '[Kelmarin pukul] LT',
	        lastWeek : 'dddd [lepas pukul] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'dalam %s',
	        past : '%s yang lepas',
	        s : 'beberapa saat',
	        m : 'seminit',
	        mm : '%d minit',
	        h : 'sejam',
	        hh : '%d jam',
	        d : 'sehari',
	        dd : '%d hari',
	        M : 'sebulan',
	        MM : '%d bulan',
	        y : 'setahun',
	        yy : '%d tahun'
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return msMy;

	})));


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Burmese [my]
	//! author : Squar team, mysquar.com
	//! author : David Rossellat : https://github.com/gholadr
	//! author : Tin Aung Lin : https://github.com/thanyawzinmin

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '၁',
	    '2': '၂',
	    '3': '၃',
	    '4': '၄',
	    '5': '၅',
	    '6': '၆',
	    '7': '၇',
	    '8': '၈',
	    '9': '၉',
	    '0': '၀'
	};
	var numberMap = {
	    '၁': '1',
	    '၂': '2',
	    '၃': '3',
	    '၄': '4',
	    '၅': '5',
	    '၆': '6',
	    '၇': '7',
	    '၈': '8',
	    '၉': '9',
	    '၀': '0'
	};

	var my = moment.defineLocale('my', {
	    months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
	    monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
	    weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
	    weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	    weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

	    longDateFormat: {
	        LT: 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L: 'DD/MM/YYYY',
	        LL: 'D MMMM YYYY',
	        LLL: 'D MMMM YYYY HH:mm',
	        LLLL: 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar: {
	        sameDay: '[ယနေ.] LT [မှာ]',
	        nextDay: '[မနက်ဖြန်] LT [မှာ]',
	        nextWeek: 'dddd LT [မှာ]',
	        lastDay: '[မနေ.က] LT [မှာ]',
	        lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
	        sameElse: 'L'
	    },
	    relativeTime: {
	        future: 'လာမည့် %s မှာ',
	        past: 'လွန်ခဲ့သော %s က',
	        s: 'စက္ကန်.အနည်းငယ်',
	        m: 'တစ်မိနစ်',
	        mm: '%d မိနစ်',
	        h: 'တစ်နာရီ',
	        hh: '%d နာရီ',
	        d: 'တစ်ရက်',
	        dd: '%d ရက်',
	        M: 'တစ်လ',
	        MM: '%d လ',
	        y: 'တစ်နှစ်',
	        yy: '%d နှစ်'
	    },
	    preparse: function (string) {
	        return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
	            return numberMap[match];
	        });
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        });
	    },
	    week: {
	        dow: 1, // Monday is the first day of the week.
	        doy: 4 // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return my;

	})));


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Norwegian Bokmål [nb]
	//! authors : Espen Hovlandsdal : https://github.com/rexxars
	//!           Sigurd Gartmann : https://github.com/sigurdga

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var nb = moment.defineLocale('nb', {
	    months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	    monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	    weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
	    weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY [kl.] HH:mm',
	        LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
	    },
	    calendar : {
	        sameDay: '[i dag kl.] LT',
	        nextDay: '[i morgen kl.] LT',
	        nextWeek: 'dddd [kl.] LT',
	        lastDay: '[i går kl.] LT',
	        lastWeek: '[forrige] dddd [kl.] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'om %s',
	        past : '%s siden',
	        s : 'noen sekunder',
	        m : 'ett minutt',
	        mm : '%d minutter',
	        h : 'en time',
	        hh : '%d timer',
	        d : 'en dag',
	        dd : '%d dager',
	        M : 'en måned',
	        MM : '%d måneder',
	        y : 'ett år',
	        yy : '%d år'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return nb;

	})));


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Nepalese [ne]
	//! author : suvash : https://github.com/suvash

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '१',
	    '2': '२',
	    '3': '३',
	    '4': '४',
	    '5': '५',
	    '6': '६',
	    '7': '७',
	    '8': '८',
	    '9': '९',
	    '0': '०'
	};
	var numberMap = {
	    '१': '1',
	    '२': '2',
	    '३': '3',
	    '४': '4',
	    '५': '5',
	    '६': '6',
	    '७': '7',
	    '८': '8',
	    '९': '9',
	    '०': '0'
	};

	var ne = moment.defineLocale('ne', {
	    months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
	    monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
	    weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
	    weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'Aको h:mm बजे',
	        LTS : 'Aको h:mm:ss बजे',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY, Aको h:mm बजे',
	        LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
	    },
	    preparse: function (string) {
	        return string.replace(/[१२३४५६७८९०]/g, function (match) {
	            return numberMap[match];
	        });
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        });
	    },
	    meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'राति') {
	            return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'बिहान') {
	            return hour;
	        } else if (meridiem === 'दिउँसो') {
	            return hour >= 10 ? hour : hour + 12;
	        } else if (meridiem === 'साँझ') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 3) {
	            return 'राति';
	        } else if (hour < 12) {
	            return 'बिहान';
	        } else if (hour < 16) {
	            return 'दिउँसो';
	        } else if (hour < 20) {
	            return 'साँझ';
	        } else {
	            return 'राति';
	        }
	    },
	    calendar : {
	        sameDay : '[आज] LT',
	        nextDay : '[भोलि] LT',
	        nextWeek : '[आउँदो] dddd[,] LT',
	        lastDay : '[हिजो] LT',
	        lastWeek : '[गएको] dddd[,] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%sमा',
	        past : '%s अगाडि',
	        s : 'केही क्षण',
	        m : 'एक मिनेट',
	        mm : '%d मिनेट',
	        h : 'एक घण्टा',
	        hh : '%d घण्टा',
	        d : 'एक दिन',
	        dd : '%d दिन',
	        M : 'एक महिना',
	        MM : '%d महिना',
	        y : 'एक बर्ष',
	        yy : '%d बर्ष'
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return ne;

	})));


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Dutch [nl]
	//! author : Joris Röling : https://github.com/jorisroling
	//! author : Jacob Middag : https://github.com/middagj

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
	var monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

	var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
	var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

	var nl = moment.defineLocale('nl', {
	    months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
	    monthsShort : function (m, format) {
	        if (!m) {
	            return monthsShortWithDots;
	        } else if (/-MMM-/.test(format)) {
	            return monthsShortWithoutDots[m.month()];
	        } else {
	            return monthsShortWithDots[m.month()];
	        }
	    },

	    monthsRegex: monthsRegex,
	    monthsShortRegex: monthsRegex,
	    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
	    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

	    monthsParse : monthsParse,
	    longMonthsParse : monthsParse,
	    shortMonthsParse : monthsParse,

	    weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
	    weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
	    weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD-MM-YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[vandaag om] LT',
	        nextDay: '[morgen om] LT',
	        nextWeek: 'dddd [om] LT',
	        lastDay: '[gisteren om] LT',
	        lastWeek: '[afgelopen] dddd [om] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'over %s',
	        past : '%s geleden',
	        s : 'een paar seconden',
	        m : 'één minuut',
	        mm : '%d minuten',
	        h : 'één uur',
	        hh : '%d uur',
	        d : 'één dag',
	        dd : '%d dagen',
	        M : 'één maand',
	        MM : '%d maanden',
	        y : 'één jaar',
	        yy : '%d jaar'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
	    ordinal : function (number) {
	        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return nl;

	})));


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Dutch (Belgium) [nl-be]
	//! author : Joris Röling : https://github.com/jorisroling
	//! author : Jacob Middag : https://github.com/middagj

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
	var monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

	var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
	var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

	var nlBe = moment.defineLocale('nl-be', {
	    months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
	    monthsShort : function (m, format) {
	        if (!m) {
	            return monthsShortWithDots;
	        } else if (/-MMM-/.test(format)) {
	            return monthsShortWithoutDots[m.month()];
	        } else {
	            return monthsShortWithDots[m.month()];
	        }
	    },

	    monthsRegex: monthsRegex,
	    monthsShortRegex: monthsRegex,
	    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
	    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

	    monthsParse : monthsParse,
	    longMonthsParse : monthsParse,
	    shortMonthsParse : monthsParse,

	    weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
	    weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
	    weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[vandaag om] LT',
	        nextDay: '[morgen om] LT',
	        nextWeek: 'dddd [om] LT',
	        lastDay: '[gisteren om] LT',
	        lastWeek: '[afgelopen] dddd [om] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'over %s',
	        past : '%s geleden',
	        s : 'een paar seconden',
	        m : 'één minuut',
	        mm : '%d minuten',
	        h : 'één uur',
	        hh : '%d uur',
	        d : 'één dag',
	        dd : '%d dagen',
	        M : 'één maand',
	        MM : '%d maanden',
	        y : 'één jaar',
	        yy : '%d jaar'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
	    ordinal : function (number) {
	        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return nlBe;

	})));


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Nynorsk [nn]
	//! author : https://github.com/mechuwind

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var nn = moment.defineLocale('nn', {
	    months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	    monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	    weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
	    weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
	    weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY [kl.] H:mm',
	        LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
	    },
	    calendar : {
	        sameDay: '[I dag klokka] LT',
	        nextDay: '[I morgon klokka] LT',
	        nextWeek: 'dddd [klokka] LT',
	        lastDay: '[I går klokka] LT',
	        lastWeek: '[Føregåande] dddd [klokka] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'om %s',
	        past : '%s sidan',
	        s : 'nokre sekund',
	        m : 'eit minutt',
	        mm : '%d minutt',
	        h : 'ein time',
	        hh : '%d timar',
	        d : 'ein dag',
	        dd : '%d dagar',
	        M : 'ein månad',
	        MM : '%d månader',
	        y : 'eit år',
	        yy : '%d år'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return nn;

	})));


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Punjabi (India) [pa-in]
	//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '੧',
	    '2': '੨',
	    '3': '੩',
	    '4': '੪',
	    '5': '੫',
	    '6': '੬',
	    '7': '੭',
	    '8': '੮',
	    '9': '੯',
	    '0': '੦'
	};
	var numberMap = {
	    '੧': '1',
	    '੨': '2',
	    '੩': '3',
	    '੪': '4',
	    '੫': '5',
	    '੬': '6',
	    '੭': '7',
	    '੮': '8',
	    '੯': '9',
	    '੦': '0'
	};

	var paIn = moment.defineLocale('pa-in', {
	    // There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
	    months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
	    monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
	    weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
	    weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	    weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	    longDateFormat : {
	        LT : 'A h:mm ਵਜੇ',
	        LTS : 'A h:mm:ss ਵਜੇ',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
	        LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
	    },
	    calendar : {
	        sameDay : '[ਅਜ] LT',
	        nextDay : '[ਕਲ] LT',
	        nextWeek : 'dddd, LT',
	        lastDay : '[ਕਲ] LT',
	        lastWeek : '[ਪਿਛਲੇ] dddd, LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s ਵਿੱਚ',
	        past : '%s ਪਿਛਲੇ',
	        s : 'ਕੁਝ ਸਕਿੰਟ',
	        m : 'ਇਕ ਮਿੰਟ',
	        mm : '%d ਮਿੰਟ',
	        h : 'ਇੱਕ ਘੰਟਾ',
	        hh : '%d ਘੰਟੇ',
	        d : 'ਇੱਕ ਦਿਨ',
	        dd : '%d ਦਿਨ',
	        M : 'ਇੱਕ ਮਹੀਨਾ',
	        MM : '%d ਮਹੀਨੇ',
	        y : 'ਇੱਕ ਸਾਲ',
	        yy : '%d ਸਾਲ'
	    },
	    preparse: function (string) {
	        return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
	            return numberMap[match];
	        });
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        });
	    },
	    // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
	    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
	    meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'ਰਾਤ') {
	            return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'ਸਵੇਰ') {
	            return hour;
	        } else if (meridiem === 'ਦੁਪਹਿਰ') {
	            return hour >= 10 ? hour : hour + 12;
	        } else if (meridiem === 'ਸ਼ਾਮ') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'ਰਾਤ';
	        } else if (hour < 10) {
	            return 'ਸਵੇਰ';
	        } else if (hour < 17) {
	            return 'ਦੁਪਹਿਰ';
	        } else if (hour < 20) {
	            return 'ਸ਼ਾਮ';
	        } else {
	            return 'ਰਾਤ';
	        }
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return paIn;

	})));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Polish [pl]
	//! author : Rafal Hirsz : https://github.com/evoL

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
	var monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
	function plural(n) {
	    return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
	}
	function translate(number, withoutSuffix, key) {
	    var result = number + ' ';
	    switch (key) {
	        case 'm':
	            return withoutSuffix ? 'minuta' : 'minutę';
	        case 'mm':
	            return result + (plural(number) ? 'minuty' : 'minut');
	        case 'h':
	            return withoutSuffix  ? 'godzina'  : 'godzinę';
	        case 'hh':
	            return result + (plural(number) ? 'godziny' : 'godzin');
	        case 'MM':
	            return result + (plural(number) ? 'miesiące' : 'miesięcy');
	        case 'yy':
	            return result + (plural(number) ? 'lata' : 'lat');
	    }
	}

	var pl = moment.defineLocale('pl', {
	    months : function (momentToFormat, format) {
	        if (!momentToFormat) {
	            return monthsNominative;
	        } else if (format === '') {
	            // Hack: if format empty we know this is used to generate
	            // RegExp by moment. Give then back both valid forms of months
	            // in RegExp ready format.
	            return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
	        } else if (/D MMMM/.test(format)) {
	            return monthsSubjective[momentToFormat.month()];
	        } else {
	            return monthsNominative[momentToFormat.month()];
	        }
	    },
	    monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
	    weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
	    weekdaysShort : 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
	    weekdaysMin : 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[Dziś o] LT',
	        nextDay: '[Jutro o] LT',
	        nextWeek: '[W] dddd [o] LT',
	        lastDay: '[Wczoraj o] LT',
	        lastWeek: function () {
	            switch (this.day()) {
	                case 0:
	                    return '[W zeszłą niedzielę o] LT';
	                case 3:
	                    return '[W zeszłą środę o] LT';
	                case 6:
	                    return '[W zeszłą sobotę o] LT';
	                default:
	                    return '[W zeszły] dddd [o] LT';
	            }
	        },
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'za %s',
	        past : '%s temu',
	        s : 'kilka sekund',
	        m : translate,
	        mm : translate,
	        h : translate,
	        hh : translate,
	        d : '1 dzień',
	        dd : '%d dni',
	        M : 'miesiąc',
	        MM : translate,
	        y : 'rok',
	        yy : translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return pl;

	})));


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Portuguese [pt]
	//! author : Jefferson : https://github.com/jalex79

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var pt = moment.defineLocale('pt', {
	    months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	    monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	    weekdays : 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
	    weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	    weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D [de] MMMM [de] YYYY',
	        LLL : 'D [de] MMMM [de] YYYY HH:mm',
	        LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[Hoje às] LT',
	        nextDay: '[Amanhã às] LT',
	        nextWeek: 'dddd [às] LT',
	        lastDay: '[Ontem às] LT',
	        lastWeek: function () {
	            return (this.day() === 0 || this.day() === 6) ?
	                '[Último] dddd [às] LT' : // Saturday + Sunday
	                '[Última] dddd [às] LT'; // Monday - Friday
	        },
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'em %s',
	        past : 'há %s',
	        s : 'segundos',
	        m : 'um minuto',
	        mm : '%d minutos',
	        h : 'uma hora',
	        hh : '%d horas',
	        d : 'um dia',
	        dd : '%d dias',
	        M : 'um mês',
	        MM : '%d meses',
	        y : 'um ano',
	        yy : '%d anos'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}º/,
	    ordinal : '%dº',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return pt;

	})));


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Portuguese (Brazil) [pt-br]
	//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var ptBr = moment.defineLocale('pt-br', {
	    months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	    monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	    weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
	    weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	    weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D [de] MMMM [de] YYYY',
	        LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
	        LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
	    },
	    calendar : {
	        sameDay: '[Hoje às] LT',
	        nextDay: '[Amanhã às] LT',
	        nextWeek: 'dddd [às] LT',
	        lastDay: '[Ontem às] LT',
	        lastWeek: function () {
	            return (this.day() === 0 || this.day() === 6) ?
	                '[Último] dddd [às] LT' : // Saturday + Sunday
	                '[Última] dddd [às] LT'; // Monday - Friday
	        },
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'em %s',
	        past : '%s atrás',
	        s : 'poucos segundos',
	        m : 'um minuto',
	        mm : '%d minutos',
	        h : 'uma hora',
	        hh : '%d horas',
	        d : 'um dia',
	        dd : '%d dias',
	        M : 'um mês',
	        MM : '%d meses',
	        y : 'um ano',
	        yy : '%d anos'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}º/,
	    ordinal : '%dº'
	});

	return ptBr;

	})));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Romanian [ro]
	//! author : Vlad Gurdiga : https://github.com/gurdiga
	//! author : Valentin Agachi : https://github.com/avaly

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function relativeTimeWithPlural(number, withoutSuffix, key) {
	    var format = {
	            'mm': 'minute',
	            'hh': 'ore',
	            'dd': 'zile',
	            'MM': 'luni',
	            'yy': 'ani'
	        },
	        separator = ' ';
	    if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
	        separator = ' de ';
	    }
	    return number + separator + format[key];
	}

	var ro = moment.defineLocale('ro', {
	    months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
	    monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
	    monthsParseExact: true,
	    weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
	    weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
	    weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY H:mm',
	        LLLL : 'dddd, D MMMM YYYY H:mm'
	    },
	    calendar : {
	        sameDay: '[azi la] LT',
	        nextDay: '[mâine la] LT',
	        nextWeek: 'dddd [la] LT',
	        lastDay: '[ieri la] LT',
	        lastWeek: '[fosta] dddd [la] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'peste %s',
	        past : '%s în urmă',
	        s : 'câteva secunde',
	        m : 'un minut',
	        mm : relativeTimeWithPlural,
	        h : 'o oră',
	        hh : relativeTimeWithPlural,
	        d : 'o zi',
	        dd : relativeTimeWithPlural,
	        M : 'o lună',
	        MM : relativeTimeWithPlural,
	        y : 'un an',
	        yy : relativeTimeWithPlural
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return ro;

	})));


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Russian [ru]
	//! author : Viktorminator : https://github.com/Viktorminator
	//! Author : Menelion Elensúle : https://github.com/Oire
	//! author : Коренберг Марк : https://github.com/socketpair

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function plural(word, num) {
	    var forms = word.split('_');
	    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	}
	function relativeTimeWithPlural(number, withoutSuffix, key) {
	    var format = {
	        'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
	        'hh': 'час_часа_часов',
	        'dd': 'день_дня_дней',
	        'MM': 'месяц_месяца_месяцев',
	        'yy': 'год_года_лет'
	    };
	    if (key === 'm') {
	        return withoutSuffix ? 'минута' : 'минуту';
	    }
	    else {
	        return number + ' ' + plural(format[key], +number);
	    }
	}
	var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

	// http://new.gramota.ru/spravka/rules/139-prop : § 103
	// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
	// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
	var ru = moment.defineLocale('ru', {
	    months : {
	        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
	        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
	    },
	    monthsShort : {
	        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
	        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
	        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
	    },
	    weekdays : {
	        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
	        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
	        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
	    },
	    weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	    weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	    monthsParse : monthsParse,
	    longMonthsParse : monthsParse,
	    shortMonthsParse : monthsParse,

	    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
	    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

	    // копия предыдущего
	    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

	    // полные названия с падежами
	    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

	    // Выражение, которое соотвествует только сокращённым формам
	    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY г.',
	        LLL : 'D MMMM YYYY г., HH:mm',
	        LLLL : 'dddd, D MMMM YYYY г., HH:mm'
	    },
	    calendar : {
	        sameDay: '[Сегодня в] LT',
	        nextDay: '[Завтра в] LT',
	        lastDay: '[Вчера в] LT',
	        nextWeek: function (now) {
	            if (now.week() !== this.week()) {
	                switch (this.day()) {
	                    case 0:
	                        return '[В следующее] dddd [в] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                        return '[В следующий] dddd [в] LT';
	                    case 3:
	                    case 5:
	                    case 6:
	                        return '[В следующую] dddd [в] LT';
	                }
	            } else {
	                if (this.day() === 2) {
	                    return '[Во] dddd [в] LT';
	                } else {
	                    return '[В] dddd [в] LT';
	                }
	            }
	        },
	        lastWeek: function (now) {
	            if (now.week() !== this.week()) {
	                switch (this.day()) {
	                    case 0:
	                        return '[В прошлое] dddd [в] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                        return '[В прошлый] dddd [в] LT';
	                    case 3:
	                    case 5:
	                    case 6:
	                        return '[В прошлую] dddd [в] LT';
	                }
	            } else {
	                if (this.day() === 2) {
	                    return '[Во] dddd [в] LT';
	                } else {
	                    return '[В] dddd [в] LT';
	                }
	            }
	        },
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'через %s',
	        past : '%s назад',
	        s : 'несколько секунд',
	        m : relativeTimeWithPlural,
	        mm : relativeTimeWithPlural,
	        h : 'час',
	        hh : relativeTimeWithPlural,
	        d : 'день',
	        dd : relativeTimeWithPlural,
	        M : 'месяц',
	        MM : relativeTimeWithPlural,
	        y : 'год',
	        yy : relativeTimeWithPlural
	    },
	    meridiemParse: /ночи|утра|дня|вечера/i,
	    isPM : function (input) {
	        return /^(дня|вечера)$/.test(input);
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'ночи';
	        } else if (hour < 12) {
	            return 'утра';
	        } else if (hour < 17) {
	            return 'дня';
	        } else {
	            return 'вечера';
	        }
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
	    ordinal: function (number, period) {
	        switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	                return number + '-й';
	            case 'D':
	                return number + '-го';
	            case 'w':
	            case 'W':
	                return number + '-я';
	            default:
	                return number;
	        }
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return ru;

	})));


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Sindhi [sd]
	//! author : Narain Sagar : https://github.com/narainsagar

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var months = [
	    'جنوري',
	    'فيبروري',
	    'مارچ',
	    'اپريل',
	    'مئي',
	    'جون',
	    'جولاءِ',
	    'آگسٽ',
	    'سيپٽمبر',
	    'آڪٽوبر',
	    'نومبر',
	    'ڊسمبر'
	];
	var days = [
	    'آچر',
	    'سومر',
	    'اڱارو',
	    'اربع',
	    'خميس',
	    'جمع',
	    'ڇنڇر'
	];

	var sd = moment.defineLocale('sd', {
	    months : months,
	    monthsShort : months,
	    weekdays : days,
	    weekdaysShort : days,
	    weekdaysMin : days,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd، D MMMM YYYY HH:mm'
	    },
	    meridiemParse: /صبح|شام/,
	    isPM : function (input) {
	        return 'شام' === input;
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 12) {
	            return 'صبح';
	        }
	        return 'شام';
	    },
	    calendar : {
	        sameDay : '[اڄ] LT',
	        nextDay : '[سڀاڻي] LT',
	        nextWeek : 'dddd [اڳين هفتي تي] LT',
	        lastDay : '[ڪالهه] LT',
	        lastWeek : '[گزريل هفتي] dddd [تي] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s پوء',
	        past : '%s اڳ',
	        s : 'چند سيڪنڊ',
	        m : 'هڪ منٽ',
	        mm : '%d منٽ',
	        h : 'هڪ ڪلاڪ',
	        hh : '%d ڪلاڪ',
	        d : 'هڪ ڏينهن',
	        dd : '%d ڏينهن',
	        M : 'هڪ مهينو',
	        MM : '%d مهينا',
	        y : 'هڪ سال',
	        yy : '%d سال'
	    },
	    preparse: function (string) {
	        return string.replace(/،/g, ',');
	    },
	    postformat: function (string) {
	        return string.replace(/,/g, '،');
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return sd;

	})));


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Northern Sami [se]
	//! authors : Bård Rolstad Henriksen : https://github.com/karamell

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';



	var se = moment.defineLocale('se', {
	    months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
	    monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
	    weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
	    weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
	    weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'MMMM D. [b.] YYYY',
	        LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
	        LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
	    },
	    calendar : {
	        sameDay: '[otne ti] LT',
	        nextDay: '[ihttin ti] LT',
	        nextWeek: 'dddd [ti] LT',
	        lastDay: '[ikte ti] LT',
	        lastWeek: '[ovddit] dddd [ti] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : '%s geažes',
	        past : 'maŋit %s',
	        s : 'moadde sekunddat',
	        m : 'okta minuhta',
	        mm : '%d minuhtat',
	        h : 'okta diimmu',
	        hh : '%d diimmut',
	        d : 'okta beaivi',
	        dd : '%d beaivvit',
	        M : 'okta mánnu',
	        MM : '%d mánut',
	        y : 'okta jahki',
	        yy : '%d jagit'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return se;

	})));


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Sinhalese [si]
	//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	/*jshint -W100*/
	var si = moment.defineLocale('si', {
	    months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
	    monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
	    weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
	    weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
	    weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'a h:mm',
	        LTS : 'a h:mm:ss',
	        L : 'YYYY/MM/DD',
	        LL : 'YYYY MMMM D',
	        LLL : 'YYYY MMMM D, a h:mm',
	        LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
	    },
	    calendar : {
	        sameDay : '[අද] LT[ට]',
	        nextDay : '[හෙට] LT[ට]',
	        nextWeek : 'dddd LT[ට]',
	        lastDay : '[ඊයේ] LT[ට]',
	        lastWeek : '[පසුගිය] dddd LT[ට]',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%sකින්',
	        past : '%sකට පෙර',
	        s : 'තත්පර කිහිපය',
	        m : 'මිනිත්තුව',
	        mm : 'මිනිත්තු %d',
	        h : 'පැය',
	        hh : 'පැය %d',
	        d : 'දිනය',
	        dd : 'දින %d',
	        M : 'මාසය',
	        MM : 'මාස %d',
	        y : 'වසර',
	        yy : 'වසර %d'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
	    ordinal : function (number) {
	        return number + ' වැනි';
	    },
	    meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
	    isPM : function (input) {
	        return input === 'ප.ව.' || input === 'පස් වරු';
	    },
	    meridiem : function (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'ප.ව.' : 'පස් වරු';
	        } else {
	            return isLower ? 'පෙ.ව.' : 'පෙර වරු';
	        }
	    }
	});

	return si;

	})));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Slovak [sk]
	//! author : Martin Minka : https://github.com/k2s
	//! based on work of petrbela : https://github.com/petrbela

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
	var monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
	function plural(n) {
	    return (n > 1) && (n < 5);
	}
	function translate(number, withoutSuffix, key, isFuture) {
	    var result = number + ' ';
	    switch (key) {
	        case 's':  // a few seconds / in a few seconds / a few seconds ago
	            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
	        case 'm':  // a minute / in a minute / a minute ago
	            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
	        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'minúty' : 'minút');
	            } else {
	                return result + 'minútami';
	            }
	            break;
	        case 'h':  // an hour / in an hour / an hour ago
	            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	        case 'hh': // 9 hours / in 9 hours / 9 hours ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'hodiny' : 'hodín');
	            } else {
	                return result + 'hodinami';
	            }
	            break;
	        case 'd':  // a day / in a day / a day ago
	            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
	        case 'dd': // 9 days / in 9 days / 9 days ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'dni' : 'dní');
	            } else {
	                return result + 'dňami';
	            }
	            break;
	        case 'M':  // a month / in a month / a month ago
	            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
	        case 'MM': // 9 months / in 9 months / 9 months ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'mesiace' : 'mesiacov');
	            } else {
	                return result + 'mesiacmi';
	            }
	            break;
	        case 'y':  // a year / in a year / a year ago
	            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
	        case 'yy': // 9 years / in 9 years / 9 years ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'roky' : 'rokov');
	            } else {
	                return result + 'rokmi';
	            }
	            break;
	    }
	}

	var sk = moment.defineLocale('sk', {
	    months : months,
	    monthsShort : monthsShort,
	    weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
	    weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
	    weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
	    longDateFormat : {
	        LT: 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY H:mm',
	        LLLL : 'dddd D. MMMM YYYY H:mm'
	    },
	    calendar : {
	        sameDay: '[dnes o] LT',
	        nextDay: '[zajtra o] LT',
	        nextWeek: function () {
	            switch (this.day()) {
	                case 0:
	                    return '[v nedeľu o] LT';
	                case 1:
	                case 2:
	                    return '[v] dddd [o] LT';
	                case 3:
	                    return '[v stredu o] LT';
	                case 4:
	                    return '[vo štvrtok o] LT';
	                case 5:
	                    return '[v piatok o] LT';
	                case 6:
	                    return '[v sobotu o] LT';
	            }
	        },
	        lastDay: '[včera o] LT',
	        lastWeek: function () {
	            switch (this.day()) {
	                case 0:
	                    return '[minulú nedeľu o] LT';
	                case 1:
	                case 2:
	                    return '[minulý] dddd [o] LT';
	                case 3:
	                    return '[minulú stredu o] LT';
	                case 4:
	                case 5:
	                    return '[minulý] dddd [o] LT';
	                case 6:
	                    return '[minulú sobotu o] LT';
	            }
	        },
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'za %s',
	        past : 'pred %s',
	        s : translate,
	        m : translate,
	        mm : translate,
	        h : translate,
	        hh : translate,
	        d : translate,
	        dd : translate,
	        M : translate,
	        MM : translate,
	        y : translate,
	        yy : translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return sk;

	})));


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Slovenian [sl]
	//! author : Robert Sedovšek : https://github.com/sedovsek

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function processRelativeTime(number, withoutSuffix, key, isFuture) {
	    var result = number + ' ';
	    switch (key) {
	        case 's':
	            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
	        case 'm':
	            return withoutSuffix ? 'ena minuta' : 'eno minuto';
	        case 'mm':
	            if (number === 1) {
	                result += withoutSuffix ? 'minuta' : 'minuto';
	            } else if (number === 2) {
	                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
	            } else if (number < 5) {
	                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
	            } else {
	                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'ena ura' : 'eno uro';
	        case 'hh':
	            if (number === 1) {
	                result += withoutSuffix ? 'ura' : 'uro';
	            } else if (number === 2) {
	                result += withoutSuffix || isFuture ? 'uri' : 'urama';
	            } else if (number < 5) {
	                result += withoutSuffix || isFuture ? 'ure' : 'urami';
	            } else {
	                result += withoutSuffix || isFuture ? 'ur' : 'urami';
	            }
	            return result;
	        case 'd':
	            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
	        case 'dd':
	            if (number === 1) {
	                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
	            } else if (number === 2) {
	                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
	            } else {
	                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
	            }
	            return result;
	        case 'M':
	            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
	        case 'MM':
	            if (number === 1) {
	                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
	            } else if (number === 2) {
	                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
	            } else if (number < 5) {
	                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
	            } else {
	                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
	            }
	            return result;
	        case 'y':
	            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
	        case 'yy':
	            if (number === 1) {
	                result += withoutSuffix || isFuture ? 'leto' : 'letom';
	            } else if (number === 2) {
	                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
	            } else if (number < 5) {
	                result += withoutSuffix || isFuture ? 'leta' : 'leti';
	            } else {
	                result += withoutSuffix || isFuture ? 'let' : 'leti';
	            }
	            return result;
	    }
	}

	var sl = moment.defineLocale('sl', {
	    months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
	    monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
	    monthsParseExact: true,
	    weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
	    weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
	    weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM YYYY',
	        LLL : 'D. MMMM YYYY H:mm',
	        LLLL : 'dddd, D. MMMM YYYY H:mm'
	    },
	    calendar : {
	        sameDay  : '[danes ob] LT',
	        nextDay  : '[jutri ob] LT',

	        nextWeek : function () {
	            switch (this.day()) {
	                case 0:
	                    return '[v] [nedeljo] [ob] LT';
	                case 3:
	                    return '[v] [sredo] [ob] LT';
	                case 6:
	                    return '[v] [soboto] [ob] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[v] dddd [ob] LT';
	            }
	        },
	        lastDay  : '[včeraj ob] LT',
	        lastWeek : function () {
	            switch (this.day()) {
	                case 0:
	                    return '[prejšnjo] [nedeljo] [ob] LT';
	                case 3:
	                    return '[prejšnjo] [sredo] [ob] LT';
	                case 6:
	                    return '[prejšnjo] [soboto] [ob] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prejšnji] dddd [ob] LT';
	            }
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'čez %s',
	        past   : 'pred %s',
	        s      : processRelativeTime,
	        m      : processRelativeTime,
	        mm     : processRelativeTime,
	        h      : processRelativeTime,
	        hh     : processRelativeTime,
	        d      : processRelativeTime,
	        dd     : processRelativeTime,
	        M      : processRelativeTime,
	        MM     : processRelativeTime,
	        y      : processRelativeTime,
	        yy     : processRelativeTime
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return sl;

	})));


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Albanian [sq]
	//! author : Flakërim Ismani : https://github.com/flakerimi
	//! author : Menelion Elensúle : https://github.com/Oire
	//! author : Oerd Cukalla : https://github.com/oerd

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var sq = moment.defineLocale('sq', {
	    months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
	    monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
	    weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
	    weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
	    weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
	    weekdaysParseExact : true,
	    meridiemParse: /PD|MD/,
	    isPM: function (input) {
	        return input.charAt(0) === 'M';
	    },
	    meridiem : function (hours, minutes, isLower) {
	        return hours < 12 ? 'PD' : 'MD';
	    },
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[Sot në] LT',
	        nextDay : '[Nesër në] LT',
	        nextWeek : 'dddd [në] LT',
	        lastDay : '[Dje në] LT',
	        lastWeek : 'dddd [e kaluar në] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'në %s',
	        past : '%s më parë',
	        s : 'disa sekonda',
	        m : 'një minutë',
	        mm : '%d minuta',
	        h : 'një orë',
	        hh : '%d orë',
	        d : 'një ditë',
	        dd : '%d ditë',
	        M : 'një muaj',
	        MM : '%d muaj',
	        y : 'një vit',
	        yy : '%d vite'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return sq;

	})));


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian [sr]
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var translator = {
	    words: { //Different grammatical cases
	        m: ['jedan minut', 'jedne minute'],
	        mm: ['minut', 'minute', 'minuta'],
	        h: ['jedan sat', 'jednog sata'],
	        hh: ['sat', 'sata', 'sati'],
	        dd: ['dan', 'dana', 'dana'],
	        MM: ['mesec', 'meseca', 'meseci'],
	        yy: ['godina', 'godine', 'godina']
	    },
	    correctGrammaticalCase: function (number, wordKey) {
	        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	    },
	    translate: function (number, withoutSuffix, key) {
	        var wordKey = translator.words[key];
	        if (key.length === 1) {
	            return withoutSuffix ? wordKey[0] : wordKey[1];
	        } else {
	            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	        }
	    }
	};

	var sr = moment.defineLocale('sr', {
	    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
	    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
	    monthsParseExact: true,
	    weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
	    weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
	    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat: {
	        LT: 'H:mm',
	        LTS : 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd, D. MMMM YYYY H:mm'
	    },
	    calendar: {
	        sameDay: '[danas u] LT',
	        nextDay: '[sutra u] LT',
	        nextWeek: function () {
	            switch (this.day()) {
	                case 0:
	                    return '[u] [nedelju] [u] LT';
	                case 3:
	                    return '[u] [sredu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	            }
	        },
	        lastDay  : '[juče u] LT',
	        lastWeek : function () {
	            var lastWeekDays = [
	                '[prošle] [nedelje] [u] LT',
	                '[prošlog] [ponedeljka] [u] LT',
	                '[prošlog] [utorka] [u] LT',
	                '[prošle] [srede] [u] LT',
	                '[prošlog] [četvrtka] [u] LT',
	                '[prošlog] [petka] [u] LT',
	                '[prošle] [subote] [u] LT'
	            ];
	            return lastWeekDays[this.day()];
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'za %s',
	        past   : 'pre %s',
	        s      : 'nekoliko sekundi',
	        m      : translator.translate,
	        mm     : translator.translate,
	        h      : translator.translate,
	        hh     : translator.translate,
	        d      : 'dan',
	        dd     : translator.translate,
	        M      : 'mesec',
	        MM     : translator.translate,
	        y      : 'godinu',
	        yy     : translator.translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return sr;

	})));


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian Cyrillic [sr-cyrl]
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var translator = {
	    words: { //Different grammatical cases
	        m: ['један минут', 'једне минуте'],
	        mm: ['минут', 'минуте', 'минута'],
	        h: ['један сат', 'једног сата'],
	        hh: ['сат', 'сата', 'сати'],
	        dd: ['дан', 'дана', 'дана'],
	        MM: ['месец', 'месеца', 'месеци'],
	        yy: ['година', 'године', 'година']
	    },
	    correctGrammaticalCase: function (number, wordKey) {
	        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	    },
	    translate: function (number, withoutSuffix, key) {
	        var wordKey = translator.words[key];
	        if (key.length === 1) {
	            return withoutSuffix ? wordKey[0] : wordKey[1];
	        } else {
	            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	        }
	    }
	};

	var srCyrl = moment.defineLocale('sr-cyrl', {
	    months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
	    monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
	    monthsParseExact: true,
	    weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
	    weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
	    weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat: {
	        LT: 'H:mm',
	        LTS : 'H:mm:ss',
	        L: 'DD.MM.YYYY',
	        LL: 'D. MMMM YYYY',
	        LLL: 'D. MMMM YYYY H:mm',
	        LLLL: 'dddd, D. MMMM YYYY H:mm'
	    },
	    calendar: {
	        sameDay: '[данас у] LT',
	        nextDay: '[сутра у] LT',
	        nextWeek: function () {
	            switch (this.day()) {
	                case 0:
	                    return '[у] [недељу] [у] LT';
	                case 3:
	                    return '[у] [среду] [у] LT';
	                case 6:
	                    return '[у] [суботу] [у] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[у] dddd [у] LT';
	            }
	        },
	        lastDay  : '[јуче у] LT',
	        lastWeek : function () {
	            var lastWeekDays = [
	                '[прошле] [недеље] [у] LT',
	                '[прошлог] [понедељка] [у] LT',
	                '[прошлог] [уторка] [у] LT',
	                '[прошле] [среде] [у] LT',
	                '[прошлог] [четвртка] [у] LT',
	                '[прошлог] [петка] [у] LT',
	                '[прошле] [суботе] [у] LT'
	            ];
	            return lastWeekDays[this.day()];
	        },
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'за %s',
	        past   : 'пре %s',
	        s      : 'неколико секунди',
	        m      : translator.translate,
	        mm     : translator.translate,
	        h      : translator.translate,
	        hh     : translator.translate,
	        d      : 'дан',
	        dd     : translator.translate,
	        M      : 'месец',
	        MM     : translator.translate,
	        y      : 'годину',
	        yy     : translator.translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return srCyrl;

	})));


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : siSwati [ss]
	//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';



	var ss = moment.defineLocale('ss', {
	    months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
	    monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
	    weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
	    weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
	    weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'h:mm A',
	        LTS : 'h:mm:ss A',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY h:mm A',
	        LLLL : 'dddd, D MMMM YYYY h:mm A'
	    },
	    calendar : {
	        sameDay : '[Namuhla nga] LT',
	        nextDay : '[Kusasa nga] LT',
	        nextWeek : 'dddd [nga] LT',
	        lastDay : '[Itolo nga] LT',
	        lastWeek : 'dddd [leliphelile] [nga] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'nga %s',
	        past : 'wenteka nga %s',
	        s : 'emizuzwana lomcane',
	        m : 'umzuzu',
	        mm : '%d emizuzu',
	        h : 'lihora',
	        hh : '%d emahora',
	        d : 'lilanga',
	        dd : '%d emalanga',
	        M : 'inyanga',
	        MM : '%d tinyanga',
	        y : 'umnyaka',
	        yy : '%d iminyaka'
	    },
	    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
	    meridiem : function (hours, minutes, isLower) {
	        if (hours < 11) {
	            return 'ekuseni';
	        } else if (hours < 15) {
	            return 'emini';
	        } else if (hours < 19) {
	            return 'entsambama';
	        } else {
	            return 'ebusuku';
	        }
	    },
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'ekuseni') {
	            return hour;
	        } else if (meridiem === 'emini') {
	            return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
	            if (hour === 0) {
	                return 0;
	            }
	            return hour + 12;
	        }
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}/,
	    ordinal : '%d',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return ss;

	})));


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Swedish [sv]
	//! author : Jens Alm : https://github.com/ulmus

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var sv = moment.defineLocale('sv', {
	    months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
	    monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	    weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
	    weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
	    weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'YYYY-MM-DD',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY [kl.] HH:mm',
	        LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',
	        lll : 'D MMM YYYY HH:mm',
	        llll : 'ddd D MMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[Idag] LT',
	        nextDay: '[Imorgon] LT',
	        lastDay: '[Igår] LT',
	        nextWeek: '[På] dddd LT',
	        lastWeek: '[I] dddd[s] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'om %s',
	        past : 'för %s sedan',
	        s : 'några sekunder',
	        m : 'en minut',
	        mm : '%d minuter',
	        h : 'en timme',
	        hh : '%d timmar',
	        d : 'en dag',
	        dd : '%d dagar',
	        M : 'en månad',
	        MM : '%d månader',
	        y : 'ett år',
	        yy : '%d år'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
	    ordinal : function (number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'e' :
	            (b === 1) ? 'a' :
	            (b === 2) ? 'a' :
	            (b === 3) ? 'e' : 'e';
	        return number + output;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return sv;

	})));


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Swahili [sw]
	//! author : Fahad Kassim : https://github.com/fadsel

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var sw = moment.defineLocale('sw', {
	    months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
	    monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
	    weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
	    weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
	    weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[leo saa] LT',
	        nextDay : '[kesho saa] LT',
	        nextWeek : '[wiki ijayo] dddd [saat] LT',
	        lastDay : '[jana] LT',
	        lastWeek : '[wiki iliyopita] dddd [saat] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s baadaye',
	        past : 'tokea %s',
	        s : 'hivi punde',
	        m : 'dakika moja',
	        mm : 'dakika %d',
	        h : 'saa limoja',
	        hh : 'masaa %d',
	        d : 'siku moja',
	        dd : 'masiku %d',
	        M : 'mwezi mmoja',
	        MM : 'miezi %d',
	        y : 'mwaka mmoja',
	        yy : 'miaka %d'
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return sw;

	})));


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tamil [ta]
	//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var symbolMap = {
	    '1': '௧',
	    '2': '௨',
	    '3': '௩',
	    '4': '௪',
	    '5': '௫',
	    '6': '௬',
	    '7': '௭',
	    '8': '௮',
	    '9': '௯',
	    '0': '௦'
	};
	var numberMap = {
	    '௧': '1',
	    '௨': '2',
	    '௩': '3',
	    '௪': '4',
	    '௫': '5',
	    '௬': '6',
	    '௭': '7',
	    '௮': '8',
	    '௯': '9',
	    '௦': '0'
	};

	var ta = moment.defineLocale('ta', {
	    months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	    monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	    weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
	    weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
	    weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY, HH:mm',
	        LLLL : 'dddd, D MMMM YYYY, HH:mm'
	    },
	    calendar : {
	        sameDay : '[இன்று] LT',
	        nextDay : '[நாளை] LT',
	        nextWeek : 'dddd, LT',
	        lastDay : '[நேற்று] LT',
	        lastWeek : '[கடந்த வாரம்] dddd, LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s இல்',
	        past : '%s முன்',
	        s : 'ஒரு சில விநாடிகள்',
	        m : 'ஒரு நிமிடம்',
	        mm : '%d நிமிடங்கள்',
	        h : 'ஒரு மணி நேரம்',
	        hh : '%d மணி நேரம்',
	        d : 'ஒரு நாள்',
	        dd : '%d நாட்கள்',
	        M : 'ஒரு மாதம்',
	        MM : '%d மாதங்கள்',
	        y : 'ஒரு வருடம்',
	        yy : '%d ஆண்டுகள்'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}வது/,
	    ordinal : function (number) {
	        return number + 'வது';
	    },
	    preparse: function (string) {
	        return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
	            return numberMap[match];
	        });
	    },
	    postformat: function (string) {
	        return string.replace(/\d/g, function (match) {
	            return symbolMap[match];
	        });
	    },
	    // refer http://ta.wikipedia.org/s/1er1
	    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 2) {
	            return ' யாமம்';
	        } else if (hour < 6) {
	            return ' வைகறை';  // வைகறை
	        } else if (hour < 10) {
	            return ' காலை'; // காலை
	        } else if (hour < 14) {
	            return ' நண்பகல்'; // நண்பகல்
	        } else if (hour < 18) {
	            return ' எற்பாடு'; // எற்பாடு
	        } else if (hour < 22) {
	            return ' மாலை'; // மாலை
	        } else {
	            return ' யாமம்';
	        }
	    },
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'யாமம்') {
	            return hour < 2 ? hour : hour + 12;
	        } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
	            return hour;
	        } else if (meridiem === 'நண்பகல்') {
	            return hour >= 10 ? hour : hour + 12;
	        } else {
	            return hour + 12;
	        }
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return ta;

	})));


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Telugu [te]
	//! author : Krishna Chaitanya Thota : https://github.com/kcthota

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var te = moment.defineLocale('te', {
	    months : 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
	    monthsShort : 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
	    weekdaysShort : 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
	    weekdaysMin : 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
	    longDateFormat : {
	        LT : 'A h:mm',
	        LTS : 'A h:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY, A h:mm',
	        LLLL : 'dddd, D MMMM YYYY, A h:mm'
	    },
	    calendar : {
	        sameDay : '[నేడు] LT',
	        nextDay : '[రేపు] LT',
	        nextWeek : 'dddd, LT',
	        lastDay : '[నిన్న] LT',
	        lastWeek : '[గత] dddd, LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s లో',
	        past : '%s క్రితం',
	        s : 'కొన్ని క్షణాలు',
	        m : 'ఒక నిమిషం',
	        mm : '%d నిమిషాలు',
	        h : 'ఒక గంట',
	        hh : '%d గంటలు',
	        d : 'ఒక రోజు',
	        dd : '%d రోజులు',
	        M : 'ఒక నెల',
	        MM : '%d నెలలు',
	        y : 'ఒక సంవత్సరం',
	        yy : '%d సంవత్సరాలు'
	    },
	    dayOfMonthOrdinalParse : /\d{1,2}వ/,
	    ordinal : '%dవ',
	    meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === 'రాత్రి') {
	            return hour < 4 ? hour : hour + 12;
	        } else if (meridiem === 'ఉదయం') {
	            return hour;
	        } else if (meridiem === 'మధ్యాహ్నం') {
	            return hour >= 10 ? hour : hour + 12;
	        } else if (meridiem === 'సాయంత్రం') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'రాత్రి';
	        } else if (hour < 10) {
	            return 'ఉదయం';
	        } else if (hour < 17) {
	            return 'మధ్యాహ్నం';
	        } else if (hour < 20) {
	            return 'సాయంత్రం';
	        } else {
	            return 'రాత్రి';
	        }
	    },
	    week : {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return te;

	})));


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tetun Dili (East Timor) [tet]
	//! author : Joshua Brooks : https://github.com/joshbrooks
	//! author : Onorio De J. Afonso : https://github.com/marobo

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var tet = moment.defineLocale('tet', {
	    months : 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
	    monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez'.split('_'),
	    weekdays : 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu'.split('_'),
	    weekdaysShort : 'Dom_Seg_Ters_Kua_Kint_Sext_Sab'.split('_'),
	    weekdaysMin : 'Do_Seg_Te_Ku_Ki_Sex_Sa'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[Ohin iha] LT',
	        nextDay: '[Aban iha] LT',
	        nextWeek: 'dddd [iha] LT',
	        lastDay: '[Horiseik iha] LT',
	        lastWeek: 'dddd [semana kotuk] [iha] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'iha %s',
	        past : '%s liuba',
	        s : 'minutu balun',
	        m : 'minutu ida',
	        mm : 'minutus %d',
	        h : 'horas ida',
	        hh : 'horas %d',
	        d : 'loron ida',
	        dd : 'loron %d',
	        M : 'fulan ida',
	        MM : 'fulan %d',
	        y : 'tinan ida',
	        yy : 'tinan %d'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	    ordinal : function (number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' :
	            (b === 1) ? 'st' :
	            (b === 2) ? 'nd' :
	            (b === 3) ? 'rd' : 'th';
	        return number + output;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return tet;

	})));


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Thai [th]
	//! author : Kridsada Thanabulpong : https://github.com/sirn

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var th = moment.defineLocale('th', {
	    months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
	    monthsShort : 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
	    monthsParseExact: true,
	    weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
	    weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
	    weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'H:mm',
	        LTS : 'H:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY เวลา H:mm',
	        LLLL : 'วันddddที่ D MMMM YYYY เวลา H:mm'
	    },
	    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
	    isPM: function (input) {
	        return input === 'หลังเที่ยง';
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 12) {
	            return 'ก่อนเที่ยง';
	        } else {
	            return 'หลังเที่ยง';
	        }
	    },
	    calendar : {
	        sameDay : '[วันนี้ เวลา] LT',
	        nextDay : '[พรุ่งนี้ เวลา] LT',
	        nextWeek : 'dddd[หน้า เวลา] LT',
	        lastDay : '[เมื่อวานนี้ เวลา] LT',
	        lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'อีก %s',
	        past : '%sที่แล้ว',
	        s : 'ไม่กี่วินาที',
	        m : '1 นาที',
	        mm : '%d นาที',
	        h : '1 ชั่วโมง',
	        hh : '%d ชั่วโมง',
	        d : '1 วัน',
	        dd : '%d วัน',
	        M : '1 เดือน',
	        MM : '%d เดือน',
	        y : '1 ปี',
	        yy : '%d ปี'
	    }
	});

	return th;

	})));


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tagalog (Philippines) [tl-ph]
	//! author : Dan Hagman : https://github.com/hagmandan

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var tlPh = moment.defineLocale('tl-ph', {
	    months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
	    monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
	    weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
	    weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
	    weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'MM/D/YYYY',
	        LL : 'MMMM D, YYYY',
	        LLL : 'MMMM D, YYYY HH:mm',
	        LLLL : 'dddd, MMMM DD, YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: 'LT [ngayong araw]',
	        nextDay: '[Bukas ng] LT',
	        nextWeek: 'LT [sa susunod na] dddd',
	        lastDay: 'LT [kahapon]',
	        lastWeek: 'LT [noong nakaraang] dddd',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'sa loob ng %s',
	        past : '%s ang nakalipas',
	        s : 'ilang segundo',
	        m : 'isang minuto',
	        mm : '%d minuto',
	        h : 'isang oras',
	        hh : '%d oras',
	        d : 'isang araw',
	        dd : '%d araw',
	        M : 'isang buwan',
	        MM : '%d buwan',
	        y : 'isang taon',
	        yy : '%d taon'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}/,
	    ordinal : function (number) {
	        return number;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return tlPh;

	})));


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Klingon [tlh]
	//! author : Dominika Kruk : https://github.com/amaranthrose

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

	function translateFuture(output) {
	    var time = output;
	    time = (output.indexOf('jaj') !== -1) ?
	    time.slice(0, -3) + 'leS' :
	    (output.indexOf('jar') !== -1) ?
	    time.slice(0, -3) + 'waQ' :
	    (output.indexOf('DIS') !== -1) ?
	    time.slice(0, -3) + 'nem' :
	    time + ' pIq';
	    return time;
	}

	function translatePast(output) {
	    var time = output;
	    time = (output.indexOf('jaj') !== -1) ?
	    time.slice(0, -3) + 'Hu’' :
	    (output.indexOf('jar') !== -1) ?
	    time.slice(0, -3) + 'wen' :
	    (output.indexOf('DIS') !== -1) ?
	    time.slice(0, -3) + 'ben' :
	    time + ' ret';
	    return time;
	}

	function translate(number, withoutSuffix, string, isFuture) {
	    var numberNoun = numberAsNoun(number);
	    switch (string) {
	        case 'mm':
	            return numberNoun + ' tup';
	        case 'hh':
	            return numberNoun + ' rep';
	        case 'dd':
	            return numberNoun + ' jaj';
	        case 'MM':
	            return numberNoun + ' jar';
	        case 'yy':
	            return numberNoun + ' DIS';
	    }
	}

	function numberAsNoun(number) {
	    var hundred = Math.floor((number % 1000) / 100),
	    ten = Math.floor((number % 100) / 10),
	    one = number % 10,
	    word = '';
	    if (hundred > 0) {
	        word += numbersNouns[hundred] + 'vatlh';
	    }
	    if (ten > 0) {
	        word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
	    }
	    if (one > 0) {
	        word += ((word !== '') ? ' ' : '') + numbersNouns[one];
	    }
	    return (word === '') ? 'pagh' : word;
	}

	var tlh = moment.defineLocale('tlh', {
	    months : 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
	    monthsShort : 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	    weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	    weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[DaHjaj] LT',
	        nextDay: '[wa’leS] LT',
	        nextWeek: 'LLL',
	        lastDay: '[wa’Hu’] LT',
	        lastWeek: 'LLL',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : translateFuture,
	        past : translatePast,
	        s : 'puS lup',
	        m : 'wa’ tup',
	        mm : translate,
	        h : 'wa’ rep',
	        hh : translate,
	        d : 'wa’ jaj',
	        dd : translate,
	        M : 'wa’ jar',
	        MM : translate,
	        y : 'wa’ DIS',
	        yy : translate
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return tlh;

	})));


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Turkish [tr]
	//! authors : Erhan Gundogan : https://github.com/erhangundogan,
	//!           Burak Yiğit Kaya: https://github.com/BYK

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var suffixes = {
	    1: '\'inci',
	    5: '\'inci',
	    8: '\'inci',
	    70: '\'inci',
	    80: '\'inci',
	    2: '\'nci',
	    7: '\'nci',
	    20: '\'nci',
	    50: '\'nci',
	    3: '\'üncü',
	    4: '\'üncü',
	    100: '\'üncü',
	    6: '\'ncı',
	    9: '\'uncu',
	    10: '\'uncu',
	    30: '\'uncu',
	    60: '\'ıncı',
	    90: '\'ıncı'
	};

	var tr = moment.defineLocale('tr', {
	    months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
	    monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
	    weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
	    weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
	    weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[bugün saat] LT',
	        nextDay : '[yarın saat] LT',
	        nextWeek : '[haftaya] dddd [saat] LT',
	        lastDay : '[dün] LT',
	        lastWeek : '[geçen hafta] dddd [saat] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s sonra',
	        past : '%s önce',
	        s : 'birkaç saniye',
	        m : 'bir dakika',
	        mm : '%d dakika',
	        h : 'bir saat',
	        hh : '%d saat',
	        d : 'bir gün',
	        dd : '%d gün',
	        M : 'bir ay',
	        MM : '%d ay',
	        y : 'bir yıl',
	        yy : '%d yıl'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
	    ordinal : function (number) {
	        if (number === 0) {  // special case for zero
	            return number + '\'ıncı';
	        }
	        var a = number % 10,
	            b = number % 100 - a,
	            c = number >= 100 ? 100 : null;
	        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return tr;

	})));


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Talossan [tzl]
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v
	//! author : Iustì Canun

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	// After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
	// This is currently too difficult (maybe even impossible) to add.
	var tzl = moment.defineLocale('tzl', {
	    months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
	    monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
	    weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
	    weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
	    weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
	    longDateFormat : {
	        LT : 'HH.mm',
	        LTS : 'HH.mm.ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D. MMMM [dallas] YYYY',
	        LLL : 'D. MMMM [dallas] YYYY HH.mm',
	        LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
	    },
	    meridiemParse: /d\'o|d\'a/i,
	    isPM : function (input) {
	        return 'd\'o' === input.toLowerCase();
	    },
	    meridiem : function (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'd\'o' : 'D\'O';
	        } else {
	            return isLower ? 'd\'a' : 'D\'A';
	        }
	    },
	    calendar : {
	        sameDay : '[oxhi à] LT',
	        nextDay : '[demà à] LT',
	        nextWeek : 'dddd [à] LT',
	        lastDay : '[ieiri à] LT',
	        lastWeek : '[sür el] dddd [lasteu à] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'osprei %s',
	        past : 'ja%s',
	        s : processRelativeTime,
	        m : processRelativeTime,
	        mm : processRelativeTime,
	        h : processRelativeTime,
	        hh : processRelativeTime,
	        d : processRelativeTime,
	        dd : processRelativeTime,
	        M : processRelativeTime,
	        MM : processRelativeTime,
	        y : processRelativeTime,
	        yy : processRelativeTime
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}\./,
	    ordinal : '%d.',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	function processRelativeTime(number, withoutSuffix, key, isFuture) {
	    var format = {
	        's': ['viensas secunds', '\'iensas secunds'],
	        'm': ['\'n míut', '\'iens míut'],
	        'mm': [number + ' míuts', '' + number + ' míuts'],
	        'h': ['\'n þora', '\'iensa þora'],
	        'hh': [number + ' þoras', '' + number + ' þoras'],
	        'd': ['\'n ziua', '\'iensa ziua'],
	        'dd': [number + ' ziuas', '' + number + ' ziuas'],
	        'M': ['\'n mes', '\'iens mes'],
	        'MM': [number + ' mesen', '' + number + ' mesen'],
	        'y': ['\'n ar', '\'iens ar'],
	        'yy': [number + ' ars', '' + number + ' ars']
	    };
	    return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
	}

	return tzl;

	})));


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Central Atlas Tamazight [tzm]
	//! author : Abdel Said : https://github.com/abdelsaid

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var tzm = moment.defineLocale('tzm', {
	    months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	    monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	    weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	    weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	    weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS: 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
	        nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
	        nextWeek: 'dddd [ⴴ] LT',
	        lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
	        lastWeek: 'dddd [ⴴ] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
	        past : 'ⵢⴰⵏ %s',
	        s : 'ⵉⵎⵉⴽ',
	        m : 'ⵎⵉⵏⵓⴺ',
	        mm : '%d ⵎⵉⵏⵓⴺ',
	        h : 'ⵙⴰⵄⴰ',
	        hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
	        d : 'ⴰⵙⵙ',
	        dd : '%d oⵙⵙⴰⵏ',
	        M : 'ⴰⵢoⵓⵔ',
	        MM : '%d ⵉⵢⵢⵉⵔⵏ',
	        y : 'ⴰⵙⴳⴰⵙ',
	        yy : '%d ⵉⵙⴳⴰⵙⵏ'
	    },
	    week : {
	        dow : 6, // Saturday is the first day of the week.
	        doy : 12  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return tzm;

	})));


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Central Atlas Tamazight Latin [tzm-latn]
	//! author : Abdel Said : https://github.com/abdelsaid

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var tzmLatn = moment.defineLocale('tzm-latn', {
	    months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	    monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	    weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	    weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	    weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[asdkh g] LT',
	        nextDay: '[aska g] LT',
	        nextWeek: 'dddd [g] LT',
	        lastDay: '[assant g] LT',
	        lastWeek: 'dddd [g] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'dadkh s yan %s',
	        past : 'yan %s',
	        s : 'imik',
	        m : 'minuḍ',
	        mm : '%d minuḍ',
	        h : 'saɛa',
	        hh : '%d tassaɛin',
	        d : 'ass',
	        dd : '%d ossan',
	        M : 'ayowr',
	        MM : '%d iyyirn',
	        y : 'asgas',
	        yy : '%d isgasn'
	    },
	    week : {
	        dow : 6, // Saturday is the first day of the week.
	        doy : 12  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return tzmLatn;

	})));


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Ukrainian [uk]
	//! author : zemlanin : https://github.com/zemlanin
	//! Author : Menelion Elensúle : https://github.com/Oire

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	function plural(word, num) {
	    var forms = word.split('_');
	    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	}
	function relativeTimeWithPlural(number, withoutSuffix, key) {
	    var format = {
	        'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
	        'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
	        'dd': 'день_дні_днів',
	        'MM': 'місяць_місяці_місяців',
	        'yy': 'рік_роки_років'
	    };
	    if (key === 'm') {
	        return withoutSuffix ? 'хвилина' : 'хвилину';
	    }
	    else if (key === 'h') {
	        return withoutSuffix ? 'година' : 'годину';
	    }
	    else {
	        return number + ' ' + plural(format[key], +number);
	    }
	}
	function weekdaysCaseReplace(m, format) {
	    var weekdays = {
	        'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
	        'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
	        'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
	    };

	    if (!m) {
	        return weekdays['nominative'];
	    }

	    var nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
	        'accusative' :
	        ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
	            'genitive' :
	            'nominative');
	    return weekdays[nounCase][m.day()];
	}
	function processHoursFunction(str) {
	    return function () {
	        return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
	    };
	}

	var uk = moment.defineLocale('uk', {
	    months : {
	        'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
	        'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
	    },
	    monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
	    weekdays : weekdaysCaseReplace,
	    weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	    weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD.MM.YYYY',
	        LL : 'D MMMM YYYY р.',
	        LLL : 'D MMMM YYYY р., HH:mm',
	        LLLL : 'dddd, D MMMM YYYY р., HH:mm'
	    },
	    calendar : {
	        sameDay: processHoursFunction('[Сьогодні '),
	        nextDay: processHoursFunction('[Завтра '),
	        lastDay: processHoursFunction('[Вчора '),
	        nextWeek: processHoursFunction('[У] dddd ['),
	        lastWeek: function () {
	            switch (this.day()) {
	                case 0:
	                case 3:
	                case 5:
	                case 6:
	                    return processHoursFunction('[Минулої] dddd [').call(this);
	                case 1:
	                case 2:
	                case 4:
	                    return processHoursFunction('[Минулого] dddd [').call(this);
	            }
	        },
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : 'за %s',
	        past : '%s тому',
	        s : 'декілька секунд',
	        m : relativeTimeWithPlural,
	        mm : relativeTimeWithPlural,
	        h : 'годину',
	        hh : relativeTimeWithPlural,
	        d : 'день',
	        dd : relativeTimeWithPlural,
	        M : 'місяць',
	        MM : relativeTimeWithPlural,
	        y : 'рік',
	        yy : relativeTimeWithPlural
	    },
	    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
	    meridiemParse: /ночі|ранку|дня|вечора/,
	    isPM: function (input) {
	        return /^(дня|вечора)$/.test(input);
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 4) {
	            return 'ночі';
	        } else if (hour < 12) {
	            return 'ранку';
	        } else if (hour < 17) {
	            return 'дня';
	        } else {
	            return 'вечора';
	        }
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
	    ordinal: function (number, period) {
	        switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	            case 'w':
	            case 'W':
	                return number + '-й';
	            case 'D':
	                return number + '-го';
	            default:
	                return number;
	        }
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return uk;

	})));


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Urdu [ur]
	//! author : Sawood Alam : https://github.com/ibnesayeed
	//! author : Zack : https://github.com/ZackVision

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var months = [
	    'جنوری',
	    'فروری',
	    'مارچ',
	    'اپریل',
	    'مئی',
	    'جون',
	    'جولائی',
	    'اگست',
	    'ستمبر',
	    'اکتوبر',
	    'نومبر',
	    'دسمبر'
	];
	var days = [
	    'اتوار',
	    'پیر',
	    'منگل',
	    'بدھ',
	    'جمعرات',
	    'جمعہ',
	    'ہفتہ'
	];

	var ur = moment.defineLocale('ur', {
	    months : months,
	    monthsShort : months,
	    weekdays : days,
	    weekdaysShort : days,
	    weekdaysMin : days,
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd، D MMMM YYYY HH:mm'
	    },
	    meridiemParse: /صبح|شام/,
	    isPM : function (input) {
	        return 'شام' === input;
	    },
	    meridiem : function (hour, minute, isLower) {
	        if (hour < 12) {
	            return 'صبح';
	        }
	        return 'شام';
	    },
	    calendar : {
	        sameDay : '[آج بوقت] LT',
	        nextDay : '[کل بوقت] LT',
	        nextWeek : 'dddd [بوقت] LT',
	        lastDay : '[گذشتہ روز بوقت] LT',
	        lastWeek : '[گذشتہ] dddd [بوقت] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : '%s بعد',
	        past : '%s قبل',
	        s : 'چند سیکنڈ',
	        m : 'ایک منٹ',
	        mm : '%d منٹ',
	        h : 'ایک گھنٹہ',
	        hh : '%d گھنٹے',
	        d : 'ایک دن',
	        dd : '%d دن',
	        M : 'ایک ماہ',
	        MM : '%d ماہ',
	        y : 'ایک سال',
	        yy : '%d سال'
	    },
	    preparse: function (string) {
	        return string.replace(/،/g, ',');
	    },
	    postformat: function (string) {
	        return string.replace(/,/g, '،');
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return ur;

	})));


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Uzbek [uz]
	//! author : Sardor Muminov : https://github.com/muminoff

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var uz = moment.defineLocale('uz', {
	    months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
	    monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
	    weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
	    weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
	    weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'D MMMM YYYY, dddd HH:mm'
	    },
	    calendar : {
	        sameDay : '[Бугун соат] LT [да]',
	        nextDay : '[Эртага] LT [да]',
	        nextWeek : 'dddd [куни соат] LT [да]',
	        lastDay : '[Кеча соат] LT [да]',
	        lastWeek : '[Утган] dddd [куни соат] LT [да]',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'Якин %s ичида',
	        past : 'Бир неча %s олдин',
	        s : 'фурсат',
	        m : 'бир дакика',
	        mm : '%d дакика',
	        h : 'бир соат',
	        hh : '%d соат',
	        d : 'бир кун',
	        dd : '%d кун',
	        M : 'бир ой',
	        MM : '%d ой',
	        y : 'бир йил',
	        yy : '%d йил'
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return uz;

	})));


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Uzbek Latin [uz-latn]
	//! author : Rasulbek Mirzayev : github.com/Rasulbeeek

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var uzLatn = moment.defineLocale('uz-latn', {
	    months : 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
	    monthsShort : 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
	    weekdays : 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
	    weekdaysShort : 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
	    weekdaysMin : 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'D MMMM YYYY, dddd HH:mm'
	    },
	    calendar : {
	        sameDay : '[Bugun soat] LT [da]',
	        nextDay : '[Ertaga] LT [da]',
	        nextWeek : 'dddd [kuni soat] LT [da]',
	        lastDay : '[Kecha soat] LT [da]',
	        lastWeek : '[O\'tgan] dddd [kuni soat] LT [da]',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'Yaqin %s ichida',
	        past : 'Bir necha %s oldin',
	        s : 'soniya',
	        m : 'bir daqiqa',
	        mm : '%d daqiqa',
	        h : 'bir soat',
	        hh : '%d soat',
	        d : 'bir kun',
	        dd : '%d kun',
	        M : 'bir oy',
	        MM : '%d oy',
	        y : 'bir yil',
	        yy : '%d yil'
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 7  // The week that contains Jan 1st is the first week of the year.
	    }
	});

	return uzLatn;

	})));


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Vietnamese [vi]
	//! author : Bang Nguyen : https://github.com/bangnk

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var vi = moment.defineLocale('vi', {
	    months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
	    monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
	    weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	    weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	    weekdaysParseExact : true,
	    meridiemParse: /sa|ch/i,
	    isPM : function (input) {
	        return /^ch$/i.test(input);
	    },
	    meridiem : function (hours, minutes, isLower) {
	        if (hours < 12) {
	            return isLower ? 'sa' : 'SA';
	        } else {
	            return isLower ? 'ch' : 'CH';
	        }
	    },
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM [năm] YYYY',
	        LLL : 'D MMMM [năm] YYYY HH:mm',
	        LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
	        l : 'DD/M/YYYY',
	        ll : 'D MMM YYYY',
	        lll : 'D MMM YYYY HH:mm',
	        llll : 'ddd, D MMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay: '[Hôm nay lúc] LT',
	        nextDay: '[Ngày mai lúc] LT',
	        nextWeek: 'dddd [tuần tới lúc] LT',
	        lastDay: '[Hôm qua lúc] LT',
	        lastWeek: 'dddd [tuần rồi lúc] LT',
	        sameElse: 'L'
	    },
	    relativeTime : {
	        future : '%s tới',
	        past : '%s trước',
	        s : 'vài giây',
	        m : 'một phút',
	        mm : '%d phút',
	        h : 'một giờ',
	        hh : '%d giờ',
	        d : 'một ngày',
	        dd : '%d ngày',
	        M : 'một tháng',
	        MM : '%d tháng',
	        y : 'một năm',
	        yy : '%d năm'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}/,
	    ordinal : function (number) {
	        return number;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return vi;

	})));


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Pseudo [x-pseudo]
	//! author : Andrew Hood : https://github.com/andrewhood125

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var xPseudo = moment.defineLocale('x-pseudo', {
	    months : 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
	    monthsShort : 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
	    monthsParseExact : true,
	    weekdays : 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
	    weekdaysShort : 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
	    weekdaysMin : 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
	    weekdaysParseExact : true,
	    longDateFormat : {
	        LT : 'HH:mm',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY HH:mm',
	        LLLL : 'dddd, D MMMM YYYY HH:mm'
	    },
	    calendar : {
	        sameDay : '[T~ódá~ý át] LT',
	        nextDay : '[T~ómó~rró~w át] LT',
	        nextWeek : 'dddd [át] LT',
	        lastDay : '[Ý~ést~érdá~ý át] LT',
	        lastWeek : '[L~ást] dddd [át] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'í~ñ %s',
	        past : '%s á~gó',
	        s : 'á ~féw ~sécó~ñds',
	        m : 'á ~míñ~úté',
	        mm : '%d m~íñú~tés',
	        h : 'á~ñ hó~úr',
	        hh : '%d h~óúrs',
	        d : 'á ~dáý',
	        dd : '%d d~áýs',
	        M : 'á ~móñ~th',
	        MM : '%d m~óñt~hs',
	        y : 'á ~ýéár',
	        yy : '%d ý~éárs'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
	    ordinal : function (number) {
	        var b = number % 10,
	            output = (~~(number % 100 / 10) === 1) ? 'th' :
	            (b === 1) ? 'st' :
	            (b === 2) ? 'nd' :
	            (b === 3) ? 'rd' : 'th';
	        return number + output;
	    },
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return xPseudo;

	})));


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Yoruba Nigeria [yo]
	//! author : Atolagbe Abisoye : https://github.com/andela-batolagbe

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var yo = moment.defineLocale('yo', {
	    months : 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
	    monthsShort : 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
	    weekdays : 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
	    weekdaysShort : 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
	    weekdaysMin : 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
	    longDateFormat : {
	        LT : 'h:mm A',
	        LTS : 'h:mm:ss A',
	        L : 'DD/MM/YYYY',
	        LL : 'D MMMM YYYY',
	        LLL : 'D MMMM YYYY h:mm A',
	        LLLL : 'dddd, D MMMM YYYY h:mm A'
	    },
	    calendar : {
	        sameDay : '[Ònì ni] LT',
	        nextDay : '[Ọ̀la ni] LT',
	        nextWeek : 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
	        lastDay : '[Àna ni] LT',
	        lastWeek : 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
	        sameElse : 'L'
	    },
	    relativeTime : {
	        future : 'ní %s',
	        past : '%s kọjá',
	        s : 'ìsẹjú aayá die',
	        m : 'ìsẹjú kan',
	        mm : 'ìsẹjú %d',
	        h : 'wákati kan',
	        hh : 'wákati %d',
	        d : 'ọjọ́ kan',
	        dd : 'ọjọ́ %d',
	        M : 'osù kan',
	        MM : 'osù %d',
	        y : 'ọdún kan',
	        yy : 'ọdún %d'
	    },
	    dayOfMonthOrdinalParse : /ọjọ́\s\d{1,2}/,
	    ordinal : 'ọjọ́ %d',
	    week : {
	        dow : 1, // Monday is the first day of the week.
	        doy : 4 // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return yo;

	})));


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (China) [zh-cn]
	//! author : suupic : https://github.com/suupic
	//! author : Zeno Zeng : https://github.com/zenozeng

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var zhCn = moment.defineLocale('zh-cn', {
	    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	    weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'YYYY年MMMD日',
	        LL : 'YYYY年MMMD日',
	        LLL : 'YYYY年MMMD日Ah点mm分',
	        LLLL : 'YYYY年MMMD日ddddAh点mm分',
	        l : 'YYYY年MMMD日',
	        ll : 'YYYY年MMMD日',
	        lll : 'YYYY年MMMD日 HH:mm',
	        llll : 'YYYY年MMMD日dddd HH:mm'
	    },
	    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	    meridiemHour: function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === '凌晨' || meridiem === '早上' ||
	                meridiem === '上午') {
	            return hour;
	        } else if (meridiem === '下午' || meridiem === '晚上') {
	            return hour + 12;
	        } else {
	            // '中午'
	            return hour >= 11 ? hour : hour + 12;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        var hm = hour * 100 + minute;
	        if (hm < 600) {
	            return '凌晨';
	        } else if (hm < 900) {
	            return '早上';
	        } else if (hm < 1130) {
	            return '上午';
	        } else if (hm < 1230) {
	            return '中午';
	        } else if (hm < 1800) {
	            return '下午';
	        } else {
	            return '晚上';
	        }
	    },
	    calendar : {
	        sameDay : '[今天]LT',
	        nextDay : '[明天]LT',
	        nextWeek : '[下]ddddLT',
	        lastDay : '[昨天]LT',
	        lastWeek : '[上]ddddLT',
	        sameElse : 'L'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
	    ordinal : function (number, period) {
	        switch (period) {
	            case 'd':
	            case 'D':
	            case 'DDD':
	                return number + '日';
	            case 'M':
	                return number + '月';
	            case 'w':
	            case 'W':
	                return number + '周';
	            default:
	                return number;
	        }
	    },
	    relativeTime : {
	        future : '%s内',
	        past : '%s前',
	        s : '几秒',
	        m : '1 分钟',
	        mm : '%d 分钟',
	        h : '1 小时',
	        hh : '%d 小时',
	        d : '1 天',
	        dd : '%d 天',
	        M : '1 个月',
	        MM : '%d 个月',
	        y : '1 年',
	        yy : '%d 年'
	    },
	    week : {
	        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});

	return zhCn;

	})));


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (Hong Kong) [zh-hk]
	//! author : Ben : https://github.com/ben-lin
	//! author : Chris Lam : https://github.com/hehachris
	//! author : Konstantin : https://github.com/skfd

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var zhHk = moment.defineLocale('zh-hk', {
	    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	    weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'YYYY年MMMD日',
	        LL : 'YYYY年MMMD日',
	        LLL : 'YYYY年MMMD日 HH:mm',
	        LLLL : 'YYYY年MMMD日dddd HH:mm',
	        l : 'YYYY年MMMD日',
	        ll : 'YYYY年MMMD日',
	        lll : 'YYYY年MMMD日 HH:mm',
	        llll : 'YYYY年MMMD日dddd HH:mm'
	    },
	    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	            return hour;
	        } else if (meridiem === '中午') {
	            return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === '下午' || meridiem === '晚上') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        var hm = hour * 100 + minute;
	        if (hm < 600) {
	            return '凌晨';
	        } else if (hm < 900) {
	            return '早上';
	        } else if (hm < 1130) {
	            return '上午';
	        } else if (hm < 1230) {
	            return '中午';
	        } else if (hm < 1800) {
	            return '下午';
	        } else {
	            return '晚上';
	        }
	    },
	    calendar : {
	        sameDay : '[今天]LT',
	        nextDay : '[明天]LT',
	        nextWeek : '[下]ddddLT',
	        lastDay : '[昨天]LT',
	        lastWeek : '[上]ddddLT',
	        sameElse : 'L'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
	    ordinal : function (number, period) {
	        switch (period) {
	            case 'd' :
	            case 'D' :
	            case 'DDD' :
	                return number + '日';
	            case 'M' :
	                return number + '月';
	            case 'w' :
	            case 'W' :
	                return number + '週';
	            default :
	                return number;
	        }
	    },
	    relativeTime : {
	        future : '%s內',
	        past : '%s前',
	        s : '幾秒',
	        m : '1 分鐘',
	        mm : '%d 分鐘',
	        h : '1 小時',
	        hh : '%d 小時',
	        d : '1 天',
	        dd : '%d 天',
	        M : '1 個月',
	        MM : '%d 個月',
	        y : '1 年',
	        yy : '%d 年'
	    }
	});

	return zhHk;

	})));


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (Taiwan) [zh-tw]
	//! author : Ben : https://github.com/ben-lin
	//! author : Chris Lam : https://github.com/hehachris

	;(function (global, factory) {
	    true ? factory(__webpack_require__(17)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';


	var zhTw = moment.defineLocale('zh-tw', {
	    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	    weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'YYYY年MMMD日',
	        LL : 'YYYY年MMMD日',
	        LLL : 'YYYY年MMMD日 HH:mm',
	        LLLL : 'YYYY年MMMD日dddd HH:mm',
	        l : 'YYYY年MMMD日',
	        ll : 'YYYY年MMMD日',
	        lll : 'YYYY年MMMD日 HH:mm',
	        llll : 'YYYY年MMMD日dddd HH:mm'
	    },
	    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	    meridiemHour : function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	            return hour;
	        } else if (meridiem === '中午') {
	            return hour >= 11 ? hour : hour + 12;
	        } else if (meridiem === '下午' || meridiem === '晚上') {
	            return hour + 12;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        var hm = hour * 100 + minute;
	        if (hm < 600) {
	            return '凌晨';
	        } else if (hm < 900) {
	            return '早上';
	        } else if (hm < 1130) {
	            return '上午';
	        } else if (hm < 1230) {
	            return '中午';
	        } else if (hm < 1800) {
	            return '下午';
	        } else {
	            return '晚上';
	        }
	    },
	    calendar : {
	        sameDay : '[今天]LT',
	        nextDay : '[明天]LT',
	        nextWeek : '[下]ddddLT',
	        lastDay : '[昨天]LT',
	        lastWeek : '[上]ddddLT',
	        sameElse : 'L'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
	    ordinal : function (number, period) {
	        switch (period) {
	            case 'd' :
	            case 'D' :
	            case 'DDD' :
	                return number + '日';
	            case 'M' :
	                return number + '月';
	            case 'w' :
	            case 'W' :
	                return number + '週';
	            default :
	                return number;
	        }
	    },
	    relativeTime : {
	        future : '%s內',
	        past : '%s前',
	        s : '幾秒',
	        m : '1 分鐘',
	        mm : '%d 分鐘',
	        h : '1 小時',
	        hh : '%d 小時',
	        d : '1 天',
	        dd : '%d 天',
	        M : '1 個月',
	        MM : '%d 個月',
	        y : '1 年',
	        yy : '%d 年'
	    }
	});

	return zhTw;

	})));


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TimelineItem = exports.Timeline = exports.CheckableTag = exports.Tag = exports.TabPane = exports.Tabs = exports.Popconfirm = exports.Popover = exports.Tooltip = exports.Panel = exports.Collapse = exports.Carousel = exports.Card = exports.Badge = exports.Avatar = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _utils = __webpack_require__(11);

	var _DataDisplay16 = __webpack_require__(136);

	var _DataDisplay17 = _interopRequireDefault(_DataDisplay16);

	var _antd = __webpack_require__(14);

	var Antd = _interopRequireWildcard(_antd);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 数据展示 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/************* Avatar 头像 ************************************************************************** */

	var Avatar = exports.Avatar = function (_DataDisplay) {
	    _inherits(Avatar, _DataDisplay);

	    function Avatar(props) {
	        _classCallCheck(this, Avatar);

	        var _this = _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Avatar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Avatar, this.__props);
	        }
	    }]);

	    return Avatar;
	}(_DataDisplay17.default);

	/************* Badge 徽标数 ************************************************************************** */

	var Badge = exports.Badge = function (_DataDisplay2) {
	    _inherits(Badge, _DataDisplay2);

	    function Badge(props) {
	        _classCallCheck(this, Badge);

	        var _this2 = _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).call(this, props));

	        _this2.__init();
	        return _this2;
	    }

	    _createClass(Badge, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Badge, this.__props);
	        }
	    }]);

	    return Badge;
	}(_DataDisplay17.default);

	/************* Card 卡片 ************************************************************************** */

	var Card = exports.Card = function (_DataDisplay3) {
	    _inherits(Card, _DataDisplay3);

	    function Card(props) {
	        _classCallCheck(this, Card);

	        var _this3 = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(Card, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Card, this.__props);
	        }
	    }]);

	    return Card;
	}(_DataDisplay17.default);

	/************* Carousel 轮播 ************************************************************************** */

	var Carousel = exports.Carousel = function (_DataDisplay4) {
	    _inherits(Carousel, _DataDisplay4);

	    function Carousel(props) {
	        _classCallCheck(this, Carousel);

	        var _this4 = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(Carousel, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Carousel, this.__props);
	        }
	    }]);

	    return Carousel;
	}(_DataDisplay17.default);

	/************* Collapse 折叠面板 ************************************************************************** */

	var Collapse = exports.Collapse = function (_DataDisplay5) {
	    _inherits(Collapse, _DataDisplay5);

	    function Collapse(props) {
	        _classCallCheck(this, Collapse);

	        // 受控属性
	        // event: onChange / paramsIndex: 0
	        var _this5 = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

	        _this5.__controlled = {
	            key: 'activeKey'
	        };
	        _this5.__init();
	        return _this5;
	    }

	    _createClass(Collapse, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Collapse, this.__props);
	        }
	    }]);

	    return Collapse;
	}(_DataDisplay17.default);
	// 单个面板


	var Panel = exports.Panel = function (_DataDisplay6) {
	    _inherits(Panel, _DataDisplay6);

	    function Panel(props) {
	        _classCallCheck(this, Panel);

	        var _this6 = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

	        _this6.__init();
	        return _this6;
	    }

	    _createClass(Panel, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Collapse.Panel, this.__props);
	        }
	    }]);

	    return Panel;
	}(_DataDisplay17.default);

	/************* Tooltip 文字提示 ************************************************************************** */
	// 默认提示


	var Tooltip = exports.Tooltip = function (_DataDisplay7) {
	    _inherits(Tooltip, _DataDisplay7);

	    function Tooltip(props) {
	        _classCallCheck(this, Tooltip);

	        var _this7 = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

	        _this7.__init();
	        return _this7;
	    }

	    _createClass(Tooltip, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Tooltip, this.__props);
	        }
	    }]);

	    return Tooltip;
	}(_DataDisplay17.default);
	// 气泡卡片 - tooltip 的升级


	var Popover = exports.Popover = function (_DataDisplay8) {
	    _inherits(Popover, _DataDisplay8);

	    function Popover(props) {
	        _classCallCheck(this, Popover);

	        var _this8 = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

	        _this8.__init();
	        return _this8;
	    }

	    _createClass(Popover, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Popover, _extends({}, this.__props, { content: this.__props.body }));
	        }
	    }]);

	    return Popover;
	}(_DataDisplay17.default);
	// 气泡确认框


	var Popconfirm = exports.Popconfirm = function (_DataDisplay9) {
	    _inherits(Popconfirm, _DataDisplay9);

	    function Popconfirm(props) {
	        _classCallCheck(this, Popconfirm);

	        var _this9 = _possibleConstructorReturn(this, (Popconfirm.__proto__ || Object.getPrototypeOf(Popconfirm)).call(this, props));

	        _this9.__init();
	        return _this9;
	    }

	    _createClass(Popconfirm, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Popconfirm, this.__props);
	        }
	    }]);

	    return Popconfirm;
	}(_DataDisplay17.default);

	/************* Tabs 标签页 ************************************************************************** */

	var Tabs = exports.Tabs = function (_DataDisplay10) {
	    _inherits(Tabs, _DataDisplay10);

	    function Tabs(props) {
	        _classCallCheck(this, Tabs);

	        // 受控属性
	        // event: onChange / paramsIndex: 0
	        var _this10 = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

	        _this10.__controlled = {
	            key: 'activeKey'
	        };
	        _this10.__init();
	        return _this10;
	    }

	    _createClass(Tabs, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Tabs, this.__props);
	        }
	    }]);

	    return Tabs;
	}(_DataDisplay17.default);
	// tab的每一项


	var TabPane = exports.TabPane = function (_DataDisplay11) {
	    _inherits(TabPane, _DataDisplay11);

	    function TabPane(props) {
	        _classCallCheck(this, TabPane);

	        var _this11 = _possibleConstructorReturn(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).call(this, props));

	        _this11.__init();
	        return _this11;
	    }

	    _createClass(TabPane, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Tabs.TabPane, this.__props);
	        }
	    }]);

	    return TabPane;
	}(_DataDisplay17.default);

	/************* Tag 标签 ************************************************************************** */

	var Tag = exports.Tag = function (_DataDisplay12) {
	    _inherits(Tag, _DataDisplay12);

	    function Tag(props) {
	        _classCallCheck(this, Tag);

	        var _this12 = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

	        _this12.__init();
	        return _this12;
	    }

	    _createClass(Tag, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Tag, this.__props);
	        }
	    }]);

	    return Tag;
	}(_DataDisplay17.default);

	var CheckableTag = exports.CheckableTag = function (_DataDisplay13) {
	    _inherits(CheckableTag, _DataDisplay13);

	    function CheckableTag(props) {
	        _classCallCheck(this, CheckableTag);

	        var _this13 = _possibleConstructorReturn(this, (CheckableTag.__proto__ || Object.getPrototypeOf(CheckableTag)).call(this, props));

	        _this13.__init();
	        return _this13;
	    }

	    _createClass(CheckableTag, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Tag.CheckableTag, this.__props);
	        }
	    }]);

	    return CheckableTag;
	}(_DataDisplay17.default);

	/************* Timeline 时间轴 ************************************************************************** */

	var Timeline = exports.Timeline = function (_DataDisplay14) {
	    _inherits(Timeline, _DataDisplay14);

	    function Timeline(props) {
	        _classCallCheck(this, Timeline);

	        var _this14 = _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call(this, props));

	        _this14.__init();
	        return _this14;
	    }

	    _createClass(Timeline, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Timeline, this.__props);
	        }
	    }]);

	    return Timeline;
	}(_DataDisplay17.default);

	var TimelineItem = exports.TimelineItem = function (_DataDisplay15) {
	    _inherits(TimelineItem, _DataDisplay15);

	    function TimelineItem(props) {
	        _classCallCheck(this, TimelineItem);

	        var _this15 = _possibleConstructorReturn(this, (TimelineItem.__proto__ || Object.getPrototypeOf(TimelineItem)).call(this, props));

	        _this15.__init();
	        return _this15;
	    }

	    _createClass(TimelineItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Timeline.Item, this.__props);
	        }
	    }]);

	    return TimelineItem;
	}(_DataDisplay17.default);

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(8);

	var _Antd3 = _interopRequireDefault(_Antd2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 数据展示 组件抽象类，如：Card、Tooltip 等
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var DataDisplay = function (_Antd) {
	    _inherits(DataDisplay, _Antd);

	    function DataDisplay(props) {
	        _classCallCheck(this, DataDisplay);

	        return _possibleConstructorReturn(this, (DataDisplay.__proto__ || Object.getPrototypeOf(DataDisplay)).call(this, props));
	    }

	    return DataDisplay;
	}(_Antd3.default);

	exports.default = DataDisplay;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Content = exports.Sider = exports.Footer = exports.Header = exports.Layout = exports.Col = exports.Row = exports.Icon = exports.Backtop = exports.ButtonGroup = exports.Button = exports.AnchorLink = exports.Anchor = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Genaral14 = __webpack_require__(138);

	var _Genaral15 = _interopRequireDefault(_Genaral14);

	var _antd = __webpack_require__(14);

	var Antd = _interopRequireWildcard(_antd);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Genaral 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/************* Anchor 锚点 ************************************************************************** */

	var Anchor = exports.Anchor = function (_Genaral) {
	    _inherits(Anchor, _Genaral);

	    function Anchor(props) {
	        _classCallCheck(this, Anchor);

	        var _this = _possibleConstructorReturn(this, (Anchor.__proto__ || Object.getPrototypeOf(Anchor)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Anchor, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Anchor, this.__props);
	        }
	    }]);

	    return Anchor;
	}(_Genaral15.default);

	var AnchorLink = exports.AnchorLink = function (_Genaral2) {
	    _inherits(AnchorLink, _Genaral2);

	    function AnchorLink(props) {
	        _classCallCheck(this, AnchorLink);

	        var _this2 = _possibleConstructorReturn(this, (AnchorLink.__proto__ || Object.getPrototypeOf(AnchorLink)).call(this, props));

	        _this2.__init();
	        return _this2;
	    }

	    _createClass(AnchorLink, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Anchor.Link, this.__props);
	        }
	    }]);

	    return AnchorLink;
	}(_Genaral15.default);

	/************* Button 按钮 ************************************************************************** */

	var Button = exports.Button = function (_Genaral3) {
	    _inherits(Button, _Genaral3);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        var _this3 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(Button, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Button, this.__props);
	        }
	    }]);

	    return Button;
	}(_Genaral15.default);
	// 按钮组


	var ButtonGroup = exports.ButtonGroup = function (_Genaral4) {
	    _inherits(ButtonGroup, _Genaral4);

	    function ButtonGroup(props) {
	        _classCallCheck(this, ButtonGroup);

	        var _this4 = _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(ButtonGroup, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Button.Group, this.__props);
	        }
	    }]);

	    return ButtonGroup;
	}(_Genaral15.default);

	/************* Backtop 返回顶部 ************************************************************************** */

	var Backtop = exports.Backtop = function (_Genaral5) {
	    _inherits(Backtop, _Genaral5);

	    function Backtop(props) {
	        _classCallCheck(this, Backtop);

	        var _this5 = _possibleConstructorReturn(this, (Backtop.__proto__ || Object.getPrototypeOf(Backtop)).call(this, props));

	        _this5.__init();
	        return _this5;
	    }

	    _createClass(Backtop, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.BackTop, this.__props);
	        }
	    }]);

	    return Backtop;
	}(_Genaral15.default);

	/************* Icon 图标 ************************************************************************** */

	var Icon = exports.Icon = function (_Genaral6) {
	    _inherits(Icon, _Genaral6);

	    function Icon(props) {
	        _classCallCheck(this, Icon);

	        var _this6 = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));

	        _this6.__init();
	        return _this6;
	    }

	    _createClass(Icon, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Icon, this.__props);
	        }
	    }]);

	    return Icon;
	}(_Genaral15.default);

	/************* Grid 栅格 ************************************************************************** */
	// Row


	var Row = exports.Row = function (_Genaral7) {
	    _inherits(Row, _Genaral7);

	    function Row(props) {
	        _classCallCheck(this, Row);

	        var _this7 = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, props));

	        _this7.__init();
	        return _this7;
	    }

	    _createClass(Row, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Row, this.__props);
	        }
	    }]);

	    return Row;
	}(_Genaral15.default);
	// Col


	var Col = exports.Col = function (_Genaral8) {
	    _inherits(Col, _Genaral8);

	    function Col(props) {
	        _classCallCheck(this, Col);

	        var _this8 = _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).call(this, props));

	        _this8.__init();
	        return _this8;
	    }

	    _createClass(Col, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Col, this.__props);
	        }
	    }]);

	    return Col;
	}(_Genaral15.default);

	/************* Layout 布局 ************************************************************************** */

	// Layout 组件


	var Layout = exports.Layout = function (_Genaral9) {
	    _inherits(Layout, _Genaral9);

	    function Layout(props) {
	        _classCallCheck(this, Layout);

	        var _this9 = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

	        _this9.__init();
	        return _this9;
	    }

	    _createClass(Layout, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Layout, this.__props);
	        }
	    }]);

	    return Layout;
	}(_Genaral15.default);

	// Layout 组件


	var Header = exports.Header = function (_Genaral10) {
	    _inherits(Header, _Genaral10);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        var _this10 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

	        _this10.__init();
	        return _this10;
	    }

	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Layout.Header, this.__props);
	        }
	    }]);

	    return Header;
	}(_Genaral15.default);

	// Layout 组件


	var Footer = exports.Footer = function (_Genaral11) {
	    _inherits(Footer, _Genaral11);

	    function Footer(props) {
	        _classCallCheck(this, Footer);

	        var _this11 = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

	        _this11.__init();
	        return _this11;
	    }

	    _createClass(Footer, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Layout.Footer, this.__props);
	        }
	    }]);

	    return Footer;
	}(_Genaral15.default);

	// Layout 组件


	var Sider = exports.Sider = function (_Genaral12) {
	    _inherits(Sider, _Genaral12);

	    function Sider(props) {
	        _classCallCheck(this, Sider);

	        var _this12 = _possibleConstructorReturn(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).call(this, props));

	        _this12.__init();
	        return _this12;
	    }

	    _createClass(Sider, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Layout.Sider, this.__props);
	        }
	    }]);

	    return Sider;
	}(_Genaral15.default);

	// Layout 组件


	var Content = exports.Content = function (_Genaral13) {
	    _inherits(Content, _Genaral13);

	    function Content(props) {
	        _classCallCheck(this, Content);

	        var _this13 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

	        _this13.__init();
	        return _this13;
	    }

	    _createClass(Content, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Layout.Content, this.__props);
	        }
	    }]);

	    return Content;
	}(_Genaral15.default);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(8);

	var _Antd3 = _interopRequireDefault(_Antd2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 通用的组件 抽象类，如：Button、Icon 等
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Genaral = function (_Antd) {
	    _inherits(Genaral, _Antd);

	    function Genaral(props) {
	        _classCallCheck(this, Genaral);

	        return _possibleConstructorReturn(this, (Genaral.__proto__ || Object.getPrototypeOf(Genaral)).call(this, props));
	    }

	    return Genaral;
	}(_Antd3.default);

	exports.default = Genaral;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Step = exports.Steps = exports.Pagination = exports.SubMenu = exports.MenuItemGroup = exports.MenuItem = exports.Menu = exports.DropdownButton = exports.Dropdown = exports.BreadcrumbItem = exports.Breadcrumb = exports.Affix = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Navigation13 = __webpack_require__(140);

	var _Navigation14 = _interopRequireDefault(_Navigation13);

	var _antd = __webpack_require__(14);

	var Antd = _interopRequireWildcard(_antd);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 导航 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/************ Affix 图钉 *************************************************************************** */

	var Affix = exports.Affix = function (_Navigation) {
	    _inherits(Affix, _Navigation);

	    function Affix(props) {
	        _classCallCheck(this, Affix);

	        var _this = _possibleConstructorReturn(this, (Affix.__proto__ || Object.getPrototypeOf(Affix)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Affix, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Affix, this.__props);
	        }
	    }]);

	    return Affix;
	}(_Navigation14.default);

	/************ Breadcrumb 面包屑 *************************************************************************** */

	var Breadcrumb = exports.Breadcrumb = function (_Navigation2) {
	    _inherits(Breadcrumb, _Navigation2);

	    function Breadcrumb(props) {
	        _classCallCheck(this, Breadcrumb);

	        var _this2 = _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).call(this, props));

	        _this2.__init();
	        return _this2;
	    }

	    _createClass(Breadcrumb, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Breadcrumb, this.__props);
	        }
	    }]);

	    return Breadcrumb;
	}(_Navigation14.default);
	// Breadcrumb面包屑 子组件
	// export const BreadcrumbItem = Antd.Breadcrumb.Item;


	var BreadcrumbItem = exports.BreadcrumbItem = function (_Navigation3) {
	    _inherits(BreadcrumbItem, _Navigation3);

	    function BreadcrumbItem(props) {
	        _classCallCheck(this, BreadcrumbItem);

	        var _this3 = _possibleConstructorReturn(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(BreadcrumbItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Breadcrumb.Item, this.__props);
	        }
	    }]);

	    return BreadcrumbItem;
	}(_Navigation14.default);

	/************ Dropdown 下拉菜单 *************************************************************************** */

	var Dropdown = exports.Dropdown = function (_Navigation4) {
	    _inherits(Dropdown, _Navigation4);

	    function Dropdown(props) {
	        _classCallCheck(this, Dropdown);

	        var _this4 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(Dropdown, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Dropdown, this.__props);
	        }
	    }]);

	    return Dropdown;
	}(_Navigation14.default);

	var DropdownButton = exports.DropdownButton = function (_Navigation5) {
	    _inherits(DropdownButton, _Navigation5);

	    function DropdownButton(props) {
	        _classCallCheck(this, DropdownButton);

	        var _this5 = _possibleConstructorReturn(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).call(this, props));

	        _this5.__init();
	        return _this5;
	    }

	    _createClass(DropdownButton, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Dropdown.Button, this.__props);
	        }
	    }]);

	    return DropdownButton;
	}(_Navigation14.default);

	/************ Menu 导航菜单 *************************************************************************** */

	var Menu = exports.Menu = function (_Navigation6) {
	    _inherits(Menu, _Navigation6);

	    function Menu(props) {
	        _classCallCheck(this, Menu);

	        var _this6 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

	        _this6.__controlled = {
	            key: 'selectedKeys',
	            event: 'onSelect'
	        };
	        _this6.__init();
	        return _this6;
	    }
	    // 见 BaseComponent


	    _createClass(Menu, [{
	        key: '_onEvent',
	        value: function _onEvent(callback) {
	            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                params[_key - 1] = arguments[_key];
	            }

	            callback && callback.apply(undefined, params);
	            var selectedKeys = params[0].selectedKeys;

	            this.__props['selectedKeys'] = selectedKeys;
	            this.forceUpdate();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Menu, this.__props);
	        }
	    }]);

	    return Menu;
	}(_Navigation14.default);
	// Menu.Item 组件


	var MenuItem = exports.MenuItem = function (_Navigation7) {
	    _inherits(MenuItem, _Navigation7);

	    function MenuItem(props) {
	        _classCallCheck(this, MenuItem);

	        var _this7 = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

	        _this7.__init();
	        return _this7;
	    }

	    _createClass(MenuItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Menu.Item, this.__props);
	        }
	    }]);

	    return MenuItem;
	}(_Navigation14.default);
	// Menu.ItemGroup 组件


	var MenuItemGroup = exports.MenuItemGroup = function (_Navigation8) {
	    _inherits(MenuItemGroup, _Navigation8);

	    function MenuItemGroup(props) {
	        _classCallCheck(this, MenuItemGroup);

	        var _this8 = _possibleConstructorReturn(this, (MenuItemGroup.__proto__ || Object.getPrototypeOf(MenuItemGroup)).call(this, props));

	        _this8.__init();
	        return _this8;
	    }

	    _createClass(MenuItemGroup, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Menu.ItemGroup, this.__props);
	        }
	    }]);

	    return MenuItemGroup;
	}(_Navigation14.default);
	// Menu.SubMenu 组件


	var SubMenu = exports.SubMenu = function (_Navigation9) {
	    _inherits(SubMenu, _Navigation9);

	    function SubMenu(props) {
	        _classCallCheck(this, SubMenu);

	        var _this9 = _possibleConstructorReturn(this, (SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).call(this, props));

	        _this9.__init();
	        return _this9;
	    }

	    _createClass(SubMenu, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Menu.SubMenu, this.__props);
	        }
	    }]);

	    return SubMenu;
	}(_Navigation14.default);

	/************ Pagination 分页 *************************************************************************** */

	var Pagination = exports.Pagination = function (_Navigation10) {
	    _inherits(Pagination, _Navigation10);

	    function Pagination(props) {
	        _classCallCheck(this, Pagination);

	        // current为受控属性，父类中统一实现属性的绑定和变更（BaseComponent）
	        // event: onChange / paramsIndex: 0
	        var _this10 = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

	        _this10.__controlled = {
	            key: 'current'
	        };
	        _this10.__init();
	        return _this10;
	    }

	    _createClass(Pagination, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Pagination, this.__props);
	        }
	    }]);

	    return Pagination;
	}(_Navigation14.default);

	/************ Steps 步骤条 *************************************************************************** */

	var Steps = exports.Steps = function (_Navigation11) {
	    _inherits(Steps, _Navigation11);

	    function Steps(props) {
	        _classCallCheck(this, Steps);

	        var _this11 = _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this, props));

	        _this11.__init();
	        return _this11;
	    }

	    _createClass(Steps, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Steps, this.__props);
	        }
	    }]);

	    return Steps;
	}(_Navigation14.default);
	// Step 单条步骤


	var Step = exports.Step = function (_Navigation12) {
	    _inherits(Step, _Navigation12);

	    function Step(props) {
	        _classCallCheck(this, Step);

	        var _this12 = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this, props));

	        _this12.__init();
	        return _this12;
	    }

	    _createClass(Step, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Steps.Step, this.__props);
	        }
	    }]);

	    return Step;
	}(_Navigation14.default);

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(8);

	var _Antd3 = _interopRequireDefault(_Antd2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 导航 相关的组件抽象类，如：Menu等
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Navigation = function (_Antd) {
	    _inherits(Navigation, _Antd);

	    function Navigation(props) {
	        _classCallCheck(this, Navigation);

	        return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));
	    }

	    return Navigation;
	}(_Antd3.default);

	exports.default = Navigation;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Loading = exports.Progress = exports.Alert = exports.notification = exports.message = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Feedback4 = __webpack_require__(142);

	var _Feedback5 = _interopRequireDefault(_Feedback4);

	var _utils = __webpack_require__(11);

	var _antd = __webpack_require__(14);

	var Antd = _interopRequireWildcard(_antd);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Layout 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/************* message / notification 提示 ************************************************************************** */

	var message = exports.message = Antd.message;
	var notification = exports.notification = Antd.notification;

	/************* Alert 警告提示 ************************************************************************** */

	var Alert = exports.Alert = function (_Feedback) {
	    _inherits(Alert, _Feedback);

	    function Alert(props) {
	        _classCallCheck(this, Alert);

	        var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Alert, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Alert, this.__props);
	        }
	    }]);

	    return Alert;
	}(_Feedback5.default);

	/************* Progress 警告提示 ************************************************************************** */

	var Progress = exports.Progress = function (_Feedback2) {
	    _inherits(Progress, _Feedback2);

	    function Progress(props) {
	        _classCallCheck(this, Progress);

	        var _this2 = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

	        _this2.__init();
	        return _this2;
	    }

	    _createClass(Progress, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Progress, this.__props);
	        }
	    }]);

	    return Progress;
	}(_Feedback5.default);

	/************* Loading 加载中 ************************************************************************** */

	var Loading = exports.Loading = function (_Feedback3) {
	    _inherits(Loading, _Feedback3);

	    function Loading(props) {
	        _classCallCheck(this, Loading);

	        var _this3 = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(Loading, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Spin, _extends({}, _utils.Utils.filter(this.__props, 'loading'), {
	                spinning: !!this.__props.loading }));
	        }
	    }]);

	    return Loading;
	}(_Feedback5.default);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(8);

	var _Antd3 = _interopRequireDefault(_Antd2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 反馈 类组件抽象类，如：Button、Icon 等
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Feedback = function (_Antd) {
	    _inherits(Feedback, _Antd);

	    function Feedback(props) {
	        _classCallCheck(this, Feedback);

	        return _possibleConstructorReturn(this, (Feedback.__proto__ || Object.getPrototypeOf(Feedback)).call(this, props));
	    }

	    return Feedback;
	}(_Antd3.default);

	exports.default = Feedback;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	*   @file Export导出组件的引入文件
	*/
	module.exports = __webpack_require__(144).default;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _component = __webpack_require__(9);

	var _antd = __webpack_require__(14);

	var _utils = __webpack_require__(11);

	var _ueditor = __webpack_require__(145);

	var _ueditor2 = _interopRequireDefault(_ueditor);

	__webpack_require__(147);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 导出表格数据组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @SuSisi <susisi@baidu.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017-08-25
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Export = function (_BaseComponent) {
	    _inherits(Export, _BaseComponent);

	    function Export(props) {
	        _classCallCheck(this, Export);

	        var _this = _possibleConstructorReturn(this, (Export.__proto__ || Object.getPrototypeOf(Export)).call(this, props));

	        _this.__init();
	        _this.state = {};
	        // 默认配置
	        _this.config = {
	            // 表格头部
	            headers: [],
	            // 用于保存计时器的句柄
	            timer: null,
	            // 数据导出方式 异步/同步[asyn/sync]
	            // 异步 - 通过source获取要导出的数据
	            // 同步 - 实例化组件是直接传入data
	            type: 'asyn',
	            // 记录参数中有没有message传入,如果没有传入,导出完成时进度条不隐藏
	            noMessage: true,
	            // 后端请求数据接口
	            source: '',
	            params: null,
	            // 异步数据导出时的提示信息
	            message: null,
	            total: 0,
	            // 导出文件名称和格式
	            fileName: null,
	            fileFormat: '.xls'
	        };
	        _this.initExport();
	        return _this;
	    }

	    _createClass(Export, [{
	        key: 'initExport',
	        value: function initExport(nextProps) {
	            var objProps = nextProps ? nextProps : this.props;
	            this.config = this.__mergeProps(this.config, this.__filterProps(objProps, 'data'));
	            this.data = [];
	            if (objProps.data === undefined) {
	                this.config.type = 'asyn';
	                this.state = {
	                    visible: false,
	                    pageSize: 200,
	                    exporting: false, // 正在导出或导出完成时的界面为true
	                    fatchedData: 0,
	                    usedTime: 0,
	                    lastTime: 0,
	                    finish: false,
	                    error: false,
	                    errorMsg: '',
	                    total: this.config.total
	                };
	                // 判断参数中有没有message传入
	                var message = this.config.message;
	                if (!!message && !!message['page2']) {
	                    this.config.noMessage = false;
	                }
	            } else {
	                this.config.type = 'sync';
	                // 用于存储导出的数据，为避免合并数据时出错，请求过来的数据没有合并到一个数组
	                // data里面的数据是这样的：[[{...},{...},...],[],[]]
	                this.data = [objProps.data];
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.data) {
	                this.config.type = 'sync';
	                this.data = [nextProps.data];
	            }
	            this.config = this.__mergeProps(this.config, nextProps.config);
	            // Table后端分页的情况会用到
	            if (this.config.total && this.config.total !== this.state.total) {
	                this.setState({
	                    total: this.config.total
	                });
	            }
	        }
	        // 重置数据

	    }, {
	        key: 'initState',
	        value: function initState() {
	            clearInterval(this.config.timer);
	            this.config.timer = null;
	            delete this.data;
	            this.data = [];
	            this.setState({
	                pageSize: 200,
	                exporting: false,
	                fatchedData: 0,
	                usedTime: 0,
	                lastTime: 0,
	                finish: false,
	                error: false,
	                errorMsg: '',
	                total: this.config.total
	            });
	            // 销毁之前创建的url
	            window.URL.revokeObjectURL(this.url);
	        }
	    }, {
	        key: 'setTimer',
	        value: function setTimer() {
	            var _this2 = this;

	            clearInterval(this.config.timer);
	            this.config.timer = setInterval(function () {
	                _this2.setState({ usedTime: _this2.state.usedTime + 1 });
	                // 如果时间只剩一秒且导出没完成，则停在1s不动
	                if (_this2.state.lastTime > 1) {
	                    _this2.setState({ lastTime: _this2.state.lastTime - 1 });
	                }
	            }, 1000);
	        }
	    }, {
	        key: 'showModal',
	        value: function showModal() {
	            this.setState({ visible: true });
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel() {
	            this.setState({ visible: false });
	            this.initState();
	        }
	    }, {
	        key: 'pageSizeChange',
	        value: function pageSizeChange(value) {
	            this.setState({ pageSize: value });
	        }
	        // 点击开始导出

	    }, {
	        key: 'doExport',
	        value: function doExport() {
	            this.setState({ exporting: true });
	            this.setTimer();
	            this.handleExport(1);
	        }
	        // 导出进程

	    }, {
	        key: 'handleExport',
	        value: function handleExport(page) {
	            var _this3 = this;

	            var config = this.config;
	            var params = config.params ? config.params : {};
	            var request = Object.assign({}, params, {
	                page: page,
	                pageNum: page,
	                size: this.state.pageSize,
	                pageSize: this.state.pageSize,
	                total: this.state.total
	            });
	            this.getData(request, function (res) {
	                if (_this3.state.exporting && !_this3.state.error) {
	                    // 存储数据
	                    _this3.saveData(res);
	                    var size = _this3.state.pageSize;
	                    var total = _this3.state.total;
	                    // 计算剩余时间
	                    var fatchedData = _this3.state.fatchedData;
	                    var usedTime = _this3.state.usedTime;
	                    var lastTime = _this3.state.lastTime;
	                    var newLastTime = 0;
	                    if (usedTime !== 0 && fatchedData !== 0) {
	                        newLastTime = usedTime * (total - fatchedData) / fatchedData;
	                        newLastTime = Math.max(0, Math.ceil(newLastTime));
	                    }
	                    // 防止剩余时间一直波动，如果波动区间在5秒之内就用原来的值
	                    var range = Math.abs(newLastTime - lastTime);
	                    if (range > 5 || newLastTime < 10 && range > 1) {
	                        _this3.setState({ lastTime: newLastTime });
	                    }
	                    // 判断是否已经取得全部数据
	                    if (page * size < total) {
	                        _this3.handleExport(page + 1);
	                    } else {
	                        _this3.finish();
	                    }
	                }
	            });
	        }
	        // 存储数据

	    }, {
	        key: 'saveData',
	        value: function saveData(res) {
	            this.data.push(res.data);
	            this.setState({
	                fatchedData: this.state.fatchedData + res.data.length,
	                total: res.total || res.count || this.state.total
	            });
	            if (this.state.fatchedData > this.state.total) {
	                this.error('服务器返回数据异常，请重新导出或联系管理员');
	            }
	        }
	        // 创建下载链接

	    }, {
	        key: 'createDownload',
	        value: function createDownload() {
	            var data = this.data;
	            var headers = this.config.headers;
	            // 组装数据,打包成文件
	            var link = void 0;
	            if (this.config.fileFormat === '.xls') {
	                link = this.packageDataToXLS(data, headers);
	            } else if (this.config.fileFormat === '.csv') {
	                link = this.packageDataToCSV(data, headers);
	            }
	            var download = this.refs.download;
	            download.href = link;
	            download.download = this.getFileName();
	        }
	        // 导出文件名前缀+文件格式

	    }, {
	        key: 'getFileName',
	        value: function getFileName() {
	            var fileName = this.config.fileName;
	            var fileFormat = this.config.fileFormat;
	            if (fileName) {
	                return fileName + fileFormat;
	            }
	            var date = new Date();
	            var prefix = '';
	            prefix += date.getFullYear();
	            prefix += date.getMonth() + 1;
	            prefix += date.getDate();
	            prefix += date.getHours();
	            prefix += date.getMinutes();
	            return prefix + '导出数据' + fileFormat;
	        }
	        // 从一个对象中获取需要导出的关键字

	    }, {
	        key: 'getKeyDataOfObject',
	        value: function getKeyDataOfObject(obj) {
	            var val = '';
	            // 如果传入的是一个数组，则递归的遍历这个数组，拿出数组中各个对象的关键字
	            if (_utils.Utils.getType(obj) === 'array') {
	                var tArr = [];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var t = _step.value;

	                        tArr.push(this.getKeyDataOfObject(t));
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                val = tArr.join('\n');
	            } else if (_utils.Utils.getType(obj) === 'object') {
	                // 如果字段是个对象，则优先获取Title字段，否则将该对象转化为json字符串
	                if (obj.hasOwnProperty('title')) {
	                    val = obj['title'];
	                } else {
	                    val = JSON.stringify(obj);
	                }
	            } else if (obj) {
	                val = obj.toString ? obj.toString() : obj;
	            }
	            return val;
	        }
	        // 把数据打包成xls文件，返回文件链接

	    }, {
	        key: 'packageDataToXLS',
	        value: function packageDataToXLS(data, headers) {
	            var _this4 = this;

	            var thead = '<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>';
	            // headers的格式为[{key: '', title: ''}, ...]
	            for (var i = 0; i < headers.length; i++) {
	                thead += '<th>' + headers[i].title + '</th>';
	            }
	            var tbody = '';
	            data.forEach(function (list) {
	                list.forEach(function (item) {
	                    tbody += '<tr>';
	                    for (var _i = 0; _i < headers.length; _i++) {
	                        var key = headers[_i].key;
	                        var val = item[key];
	                        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	                            val = _this4.getKeyDataOfObject(val);
	                        }
	                        val = typeof val === 'undefined' ? '' : val;
	                        tbody += '<td>' + val + '</td>';
	                    }
	                    tbody += '</tr>';
	                });
	            });
	            // 如果单元格内容长度大于11，则将number类型的数字强制转换成文本
	            var format = 'style="vnd.ms-excel.numberformat:@"';
	            var table = '<table ' + format + '>' + thead + tbody + '</table>';
	            var htmlParts = [table];
	            var dataBlob = new Blob(htmlParts, { 'type': 'text\/xls' });
	            var link = window.URL.createObjectURL(dataBlob);
	            this.url = link;
	            return link;
	        }
	        // 把数据打包成csv文件，返回文件链接

	    }, {
	        key: 'packageDataToCSV',
	        value: function packageDataToCSV(data, headers) {
	            var _this5 = this;

	            var thead = '';
	            // headers的格式为[{key: '', title: ''}, ...]
	            for (var i = 0; i < headers.length; i++) {
	                thead += i === headers.length - 1 ? headers[i].title : headers[i].title + ',';
	            }
	            thead += '\n';
	            var tbody = '';
	            data.forEach(function (list) {
	                list.forEach(function (item) {
	                    for (var _i2 = 0; _i2 < headers.length; _i2++) {
	                        var key = headers[_i2].key;
	                        var val = item[key];
	                        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	                            val = _this5.getKeyDataOfObject(val);
	                        }
	                        val = typeof val === 'undefined' ? '' : val;
	                        tbody += _i2 === headers.length - 1 ? val : val + ',';
	                    }
	                    tbody += '\n';
	                });
	            });
	            var table = thead + tbody;
	            var htmlParts = [table];
	            var dataBlob = new Blob(htmlParts, { 'type': 'text/csv,charset=UTF-8' });
	            var link = window.URL.createObjectURL(dataBlob);
	            this.url = link;
	            return link;
	        }
	    }, {
	        key: 'reExport',
	        value: function reExport() {
	            this.initState();
	        }
	    }, {
	        key: 'finish',
	        value: function finish() {
	            clearInterval(this.config.timer);
	            this.setState({ finish: true, lastTime: 0 });
	            this.createDownload();
	            // 判断数据是否丢失
	            var fatchedData = this.state.fatchedData * 1;
	            var total = this.state.total * 1;
	            if (fatchedData !== total) {
	                this.error('服务器返回数据异常，预期获取数据' + total + '条，实际获取到' + fatchedData + '条。');
	            }
	        }
	        // 导出发生错误

	    }, {
	        key: 'error',
	        value: function error(res) {
	            var msg = JSON.stringify(res);
	            clearInterval(this.config.timer);
	            this.setState({
	                error: true,
	                errorMsg: msg,
	                lastTime: 0
	            });
	        }
	        // 向后端强求

	    }, {
	        key: 'getData',
	        value: function getData(params, callback) {
	            var _this6 = this;

	            var url = this.config.source;
	            var method = this.config.method || 'get';
	            var ajax = method === 'post' ? this.__postData : this.__getData;
	            ajax(url, params, function (data, res) {
	                callback(res);
	            }, function (err) {
	                _this6.error(err);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.config.type === 'asyn') {
	                return this.asynExportRender();
	            } else {
	                return this.syncExportRender();
	            }
	        }
	        // 同步导出方式页面 - 即实例化组件时直接传入数据

	    }, {
	        key: 'syncExportRender',
	        value: function syncExportRender() {
	            var data = this.data;
	            var headers = this.config.headers;
	            var link = void 0;
	            if (this.config.fileFormat === '.xls') {
	                link = this.packageDataToXLS(data, headers);
	            } else if (this.config.fileFormat === '.csv') {
	                link = this.packageDataToCSV(data, headers);
	            }
	            var name = this.getFileName();
	            return _react2.default.createElement(
	                'div',
	                { className: 'uf-export' },
	                _react2.default.createElement(
	                    'a',
	                    { href: link, download: name },
	                    this.props.children
	                )
	            );
	        }
	        // 异步导出方式页面 - 即通过url异步加载数据

	    }, {
	        key: 'asynExportRender',
	        value: function asynExportRender() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'uf-export' },
	                _react2.default.createElement(
	                    'span',
	                    { onClick: this.showModal.bind(this) },
	                    this.props.children
	                ),
	                _react2.default.createElement(
	                    _antd.Modal,
	                    { ref: 'modal', className: 'export_modal',
	                        maskClosable: false,
	                        visible: this.state.visible,
	                        title: '\u5BFC\u51FA\u6570\u636E',
	                        onCancel: this.handleCancel.bind(this),
	                        footer: [_react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', key: 'btn1',
	                                disabled: this.state.exporting,
	                                onClick: this.doExport.bind(this) },
	                            '\u5F00\u59CB\u5BFC\u51FA'
	                        ), _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', key: 'btn2',
	                                onClick: this.reExport.bind(this) },
	                            '\u91CD\u65B0\u5BFC\u51FA'
	                        )] },
	                    _react2.default.createElement(
	                        'section',
	                        { hidden: this.state.exporting },
	                        this.renderSetting()
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { hidden: !this.state.exporting },
	                        this.renderExporting()
	                    )
	                )
	            );
	        }
	        // 导出前的设置界面

	    }, {
	        key: 'renderSetting',
	        value: function renderSetting() {
	            var pageSize = this.state.pageSize;
	            var total = this.state.total;
	            var requestNum = Math.ceil(total / pageSize);
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'export_info' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '\u60A8\u5373\u5C06\u5BFC\u51FA\u73B0\u6709\u7684',
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'fw700' },
	                            '\u5168\u90E8\u6570\u636E'
	                        ),
	                        '\uFF0C',
	                        total === 0 ? '数据总数未知。' : _react2.default.createElement(
	                            'span',
	                            null,
	                            '\u5171\u8BA1 ',
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'fw700' },
	                                ' ',
	                                total,
	                                ' '
	                            ),
	                            ' \u6761'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '\u6BCF\u6B21\u670D\u52A1\u5668\u8BF7\u6C42\u7684\u5927\u5C0F\u4E3A ',
	                        _react2.default.createElement(_antd.InputNumber, {
	                            size: 'small', min: 15, max: 1000, step: 100,
	                            defaultValue: pageSize, onChange: this.pageSizeChange.bind(this) }),
	                        ' \u6761',
	                        total === 0 ? '' : _react2.default.createElement(
	                            'span',
	                            null,
	                            '\uFF0C\u672C\u6B21\u5BFC\u51FA\u5171\u9700 ',
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'fw700' },
	                                requestNum
	                            ),
	                            ' \u6B21\u670D\u52A1\u5668\u8BF7\u6C42'
	                        )
	                    )
	                ),
	                this.renderMessage(1)
	            );
	        }
	        // 正在导出的界面

	    }, {
	        key: 'renderExporting',
	        value: function renderExporting() {
	            var total = this.state.total;
	            var usedTime = this.state.usedTime;
	            var fatchedData = this.state.fatchedData;
	            var progress = total === 0 ? 0 : (fatchedData / total * 100).toFixed(2);
	            progress = progress > 100 ? 100 : progress;
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'export_progress', hidden: !this.config.noMessage && this.state.finish },
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'ex_percent' },
	                        _react2.default.createElement(
	                            'span',
	                            { hidden: this.state.finish || this.state.error },
	                            _react2.default.createElement(_antd.Icon, { type: 'loading' }),
	                            '\u6B63\u5728\u5BFC\u51FA\uFF0C'
	                        ),
	                        '\u5DF2\u5B8C\u6210 ',
	                        progress,
	                        '%...'
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'ex_time' },
	                        '\u5DF2\u7528\u65F6 ',
	                        usedTime,
	                        ' \u79D2\uFF0C\u9884\u8BA1\u5269\u4F59 ',
	                        this.state.lastTime,
	                        ' \u79D2'
	                    ),
	                    _react2.default.createElement(_antd.Progress, { percent: Math.floor(progress),
	                        status: this.state.finish ? 'success' : this.state.error ? 'exception' : 'active',
	                        showInfo: false }),
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '\u6BCF\u6B21\u670D\u52A1\u5668\u8BF7\u6C42\u6570\u636E ',
	                        this.state.pageSize,
	                        ' \u6761\uFF0C\u5DF2\u5BFC\u51FA\u6570\u636E ',
	                        fatchedData,
	                        ' of ',
	                        total
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { hidden: this.state.error },
	                    this.renderMessage(2)
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { hidden: !this.state.error },
	                    _react2.default.createElement(_antd.Alert, { description: '出错了：' + this.state.errorMsg,
	                        type: 'error',
	                        showIcon: true })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { hidden: !this.state.finish, style: { marginTop: '10px' } },
	                    _react2.default.createElement(
	                        _antd.Button,
	                        { type: 'primary' },
	                        _react2.default.createElement(
	                            'a',
	                            { ref: 'download' },
	                            '\u4E0B\u8F7D\u6587\u4EF6'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'mt8' },
	                        _react2.default.createElement(_antd.Icon, { type: 'check-circle', style: { color: '#90ed7d' } }),
	                        ' \u6570\u636E\u5BFC\u51FA\u5B8C\u6BD5\uFF0C\u5408\u8BA1',
	                        fatchedData,
	                        '\u6761\u6570\u636E\uFF0C\u7528\u65F6',
	                        usedTime,
	                        '\u79D2'
	                    )
	                )
	            );
	        }
	        // 渲染提示信息模块

	    }, {
	        key: 'renderMessage',
	        value: function renderMessage(pageNum) {
	            var message = this.config.message;
	            if (!message) {
	                return '';
	            } else if (!message['page' + pageNum]) {
	                return '';
	            } else {
	                var msg = message['page' + pageNum];
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    msg.map(function (item) {
	                        return _react2.default.createElement(_antd.Alert, { description: item, key: item,
	                            type: 'warning',
	                            showIcon: true });
	                    })
	                );
	            }
	        }
	    }]);

	    return Export;
	}(_component.BaseComponent);

	exports.default = Export;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(146).default;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Ueditor封装
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      重写了上传图片组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Ueditor = function (_React$PureComponent) {
	    _inherits(Ueditor, _React$PureComponent);

	    function Ueditor(props) {
	        _classCallCheck(this, Ueditor);

	        // 保证每次实例化都有一个唯一的name
	        var _this = _possibleConstructorReturn(this, (Ueditor.__proto__ || Object.getPrototypeOf(Ueditor)).call(this, props));

	        _this.name = (props.name || 'create_editor') + '_' + Date.now();
	        _this.value = props.data;
	        _this.config = props.config || {};
	        return _this;
	    }

	    _createClass(Ueditor, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // Should be a controlled component.
	            if ('data' in nextProps) {
	                if (this.value !== nextProps.data) {
	                    this.value = nextProps.data;
	                    this.ueSetData(nextProps.data);
	                }
	            }
	        }
	    }, {
	        key: 'ueSetData',
	        value: function ueSetData(value) {
	            var _this2 = this;

	            // 临时解决方案。ueditor内不是用iframe实现，iframe加载需要时间，所以直接调用setContent会报错
	            // 这里重试5次，间隔300ms
	            var count = 1;
	            var setData = function setData() {
	                if (_this2.ue.body || count > 5) {
	                    _this2.ue.setContent(value);
	                } else {
	                    setTimeout(setData, 300);
	                }
	                count++;
	            };
	            setData();
	        }
	    }, {
	        key: 'triggerChange',
	        value: function triggerChange(changedValue) {
	            if (this.value !== changedValue) {
	                this.value = changedValue;
	                // Should provide an event to pass value to Form.
	                this.props.onChange && this.props.onChange(changedValue);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            // 初始化
	            var config = {
	                autoHeightEnabled: true,
	                autoFloatEnabled: true,
	                elementPathEnabled: false,
	                wordCount: false,
	                fontsize: [12, 14, 16, 18, 20, 24],
	                toolbars: [['source', '|', 'undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'paragraph', 'fontfamily', 'fontsize', '|', 'superscript', 'subscript', '|', 'forecolor', 'backcolor', '|', 'removeformat', '|', 'insertorderedlist', 'insertunorderedlist', 'inserttable', '|', 'selectall', 'cleardoc', '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'link', 'unlink', '|', 'map', '|', 'horizontal', 'print', 'preview', 'fullscreen', 'drafts', 'formula', '|', 'cusUpload']]
	            };
	            // 简版，适合给普通用户使用
	            if (this.config.simple) {
	                config['toolbars'] = [['undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'fontsize', 'forecolor', 'removeformat', '|', 'insertorderedlist', 'insertunorderedlist', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'link', 'fullscreen', 'cusUpload']];
	            }
	            Object.assign(config, this.config);
	            this.ue = UE.getEditor(this.name, config);
	            // 同步数据
	            this.ue.addListener('contentChange', function () {
	                clearTimeout(_this3.timer);
	                _this3.timer = setTimeout(function () {
	                    var newValue = _this3.ue.getContent();
	                    _this3.triggerChange(newValue);
	                }, 150);
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            // 需要销毁，否则再次渲染本组件，ueditor渲染不出来
	            this.ue.destroy();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('script', { type: 'text/plain', id: this.name, style: { width: '100%', height: '220px', lineHeight: 'initial' } })
	            );
	        }
	    }]);

	    return Ueditor;
	}(_react2.default.PureComponent);

	exports.default = Ueditor;

/***/ }),
/* 147 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	*   @file Tree组件的引入文件
	*/
	module.exports = __webpack_require__(152).default;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _component = __webpack_require__(9);

	var _utils = __webpack_require__(11);

	var _antd = __webpack_require__(14);

	__webpack_require__(153);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 树形控件源码
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author SuSisi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var TreeNode = _antd.Tree.TreeNode;
	var Search = _antd.Input.Search;

	var expandedKeys = [];
	var getParentNode = function getParentNode(value, tree) {
	    var node = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = tree[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var v = _step.value;

	            var children = void 0;
	            if (v.children) {
	                children = getParentNode(value, v.children);
	            }
	            if (children && children.length > 0 || v.name.indexOf(value) !== -1) {
	                // 根节点或者子节点包含搜索内容或者本节点包含搜索内容
	                node.push(Object.assign({}, v, { children: children }));
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return node;
	};
	var getParentsKeys = function getParentsKeys(nodes, keyArray) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var v = _step2.value;

	            if (v.children && v.children.length > 0) {
	                keyArray.push(v.key);
	                getParentsKeys(v.children, keyArray);
	            }
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	};

	var OriginTree = function (_BaseComponent) {
	    _inherits(OriginTree, _BaseComponent);

	    function OriginTree(props) {
	        _classCallCheck(this, OriginTree);

	        var _this = _possibleConstructorReturn(this, (OriginTree.__proto__ || Object.getPrototypeOf(OriginTree)).call(this, props));

	        _this.__init();
	        _this.config = {
	            style: {},
	            expand: {
	                defaultExpandAll: false,
	                defaultExpandedKeys: [],
	                expandLeavals: null,
	                expandedKeys: null,
	                autoExpandParent: true,
	                onExpand: function onExpand() {}
	            },
	            checkbox: {
	                checkable: false,
	                checkedKeys: null,
	                checkStrictly: false,
	                defaultCheckedKeys: [],
	                onCheck: function onCheck() {}
	            },
	            search: {
	                enable: false,
	                onlyShowSearchResult: true
	            },
	            select: {
	                defaultSelectedKeys: [],
	                selectedKeys: null,
	                multiple: false,
	                onSelect: function onSelect() {}
	            },
	            loadData: {
	                enable: false,
	                source: '',
	                params: []
	            },
	            widthResize: {
	                resizeAble: false,
	                minWidth: '',
	                maxWidth: ''
	            },
	            showLine: false,
	            showIcon: false
	        };
	        _this.initTree();
	        _this.timer = 0;
	        return _this;
	    }
	    // 树形控件初始化配置及数据


	    _createClass(OriginTree, [{
	        key: 'initTree',
	        value: function initTree(nextProps) {
	            var objProps = nextProps ? nextProps : this.props;
	            var propsData = _utils.Utils.clone(objProps.data);
	            // 针对数据进行处理
	            // 生成指针树，便于快速定位树节点
	            this.completePointerTree = {};
	            this.createPointerTree(propsData, this.completePointerTree);
	            // 生成层级树，包含每层可展开的父节点的key
	            this.levalPointerTree = {};
	            this.createLevalTree(propsData, this.levalPointerTree);

	            // 针对配置进行处理
	            // 对用户未配置的项使用默认配置
	            // this.config = this.__mergeProps(this.config, objProps.config);
	            this.config = this.__mergeProps(this.config, this.__filterProps(objProps, 'data'));
	            this.style = this.config.style;
	            this.expand = this.config.expand;
	            this.checkbox = this.config.checkbox;
	            this.search = this.config.search;
	            this.select = this.config.select;
	            this.loadData = this.config.loadData;
	            this.widthResize = this.config.widthResize;
	            this.showLine = this.config.showLine;
	            this.showIcon = this.config.showIcon;
	            this.antdConfig = {
	                defaultExpandAll: this.expand['expandLeavals'] ? false : this.expand['defaultExpandAll'],
	                defaultExpandedKeys: this.expand['expandLeavals'] ? [] : this.expand['defaultExpandedKeys'],
	                checkable: this.checkbox['checkable'],
	                defaultCheckedKeys: this.checkbox['defaultCheckedKeys'],
	                checkStrictly: this.checkbox['checkStrictly'],
	                defaultSelectedKeys: this.select['defaultSelectedKeys'],
	                multiple: this.select['multiple'],
	                showLine: this.showLine
	                // showIcon: this.showIcon
	            };
	            var state = {
	                treeData: propsData,
	                completeTree: propsData,
	                expandedKeys: this.expand.expandedKeys,
	                autoExpandParent: this.expand.autoExpandParent,
	                checkedKeys: this.checkbox.checkedKeys, // 受控选择复选框
	                selectedKeys: this.select.selectedKeys, // 受控选择
	                searchValue: '' // 搜索框中输入内容
	            };
	            if (!!nextProps) {
	                this.setState(state);
	                this.componentDidMount();
	            } else {
	                this.state = state;
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // 具有expand，及expandLeavals配置，且没有配置expandedKeys时才按照用户要求展开到某一层
	            if (this.expand.expandLeavals && !this.expand.expandedKeys) {
	                this.showToLeval(this.expand.expandLeavals);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // 就算props没有改变，当父组件重新渲染时，也会进这里，所以需要在这里判断是否需要重新渲染组件
	            if (!_utils.Utils.equals(this.props.config, nextProps.config) || !_utils.Utils.equals(this.props.data, nextProps.data)) {
	                this.initTree(nextProps);
	            }
	        }
	        // 创建指针树，创建之后，pointerTree的每个元素都能指向树的一个节点

	    }, {
	        key: 'createPointerTree',
	        value: function createPointerTree(nodes, pointerTree) {
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = nodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var v = _step3.value;

	                    if (!!v.key) {
	                        var key = v.key;
	                        pointerTree[key] = v;
	                        if (v.children && v.children.length > 0) {
	                            this.createPointerTree(v.children, pointerTree);
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	        }
	        // 生成一个层级树，记录每层可展开的有子节点的父节点

	    }, {
	        key: 'createLevalTree',
	        value: function createLevalTree(tree, levalPointerTree) {
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = tree[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var v = _step4.value;

	                    var type = v.type;
	                    if (!levalPointerTree[type]) {
	                        levalPointerTree[type] = [];
	                    }
	                    // 对可展开的父节点进行key值存放
	                    if (v.children && v.children.length > 0) {
	                        levalPointerTree[type].push(v.key);
	                        this.createLevalTree(v.children, levalPointerTree);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'onExpand',
	        value: function onExpand(expandedKeys, e) {
	            // if not set autoExpandParent to false, if children expanded, parent can not collapse.
	            // or, you can remove all expanded children keys.
	            this.setState({
	                expandedKeys: expandedKeys,
	                autoExpandParent: false
	            });
	            this.expand.onExpand(expandedKeys, e);
	        }
	    }, {
	        key: 'onCheck',
	        value: function onCheck(checkedKeys, e) {
	            this.setState({
	                checkedKeys: checkedKeys
	            });
	            this.checkbox.onCheck(checkedKeys, e);
	        }
	    }, {
	        key: 'onSelect',
	        value: function onSelect(selectedKeys, e) {
	            this.setState({
	                selectedKeys: selectedKeys
	            });
	            this.select.onSelect(selectedKeys, e);
	        }
	        // 展示树形到哪一层，expandLeavals为数组，表示展示到哪些层

	    }, {
	        key: 'showToLeval',
	        value: function showToLeval(expandLeavals) {
	            var keys = [];
	            if (expandLeavals === null) {
	                // 展示所有节点
	                for (var v in this.levalPointerTree) {
	                    keys = keys.concat(this.levalPointerTree[v]);
	                }
	            } else {
	                for (var e in expandLeavals) {
	                    keys = keys.concat(this.levalPointerTree[expandLeavals[e]]);
	                }
	            }
	            this.setState({
	                expandedKeys: keys
	            });
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            var _this2 = this;

	            var value = e.target.value;
	            // 延迟200ms再做处理
	            clearTimeout(this.timer);
	            this.timer = setTimeout(function () {
	                _this2.handleSearch(value);
	                _this2.timer = null;
	            }, 200);
	        }
	        // 通过搜索内容对策略树进行搜索

	    }, {
	        key: 'handleSearch',
	        value: function handleSearch(value) {
	            var newTree = this.state.completeTree;
	            if (value.length < 1) {
	                // 搜索框中无内容，数据展示情况分类讨论
	                if (this.expand['expandedKeys']) {
	                    // 展开用户说明的指定节点
	                    this.setState({
	                        expandedKeys: this.expand['expandedKeys'],
	                        autoExpandParent: this.expand['autoExpandParent']
	                    });
	                } else if (this.expand['expandLeavals']) {
	                    // 根据用户最初定义进行展示
	                    this.showToLeval(this.expand['expandLeavals']);
	                } else if (this.expand['defaultExpandAll']) {
	                    // 全部展开
	                    this.showToLeval(null);
	                }
	            } else {
	                // 有搜索内容时根据搜索结果渲染
	                newTree = getParentNode(value, this.state.completeTree);
	                // 对搜索结果的所有树节点进行展开
	                var newKeys = [];
	                getParentsKeys(newTree, newKeys);
	                // 搜索结果仍然展示整个树，只是对含有搜索内容的节点进行展开
	                if (!this.search.onlyShowSearchResult) {
	                    newTree = this.state.completeTree;
	                }
	                this.setState({
	                    expandedKeys: newKeys
	                });
	            }
	            this.setState({
	                treeData: newTree,
	                searchValue: value
	            });
	        }
	        // 异步对数据进行加载，满足一定要求再加载

	    }, {
	        key: 'onLoadData',
	        value: function onLoadData(treeNode) {
	            var _this3 = this;

	            var key = treeNode.props.data.key;
	            var nodeData = this.completePointerTree[key];
	            return new Promise(function (resolve) {
	                if (!nodeData.children && nodeData.isLeaf === false || nodeData.children.length < 1 && !nodeData.isLeaf) {
	                    // 没有children数据又非叶子节点的时候需要去异步请求
	                    var params = {};
	                    var url = '';
	                    if (_this3.loadData['params'].length > 0 && _this3.loadData['source'].length > 0) {
	                        url = _this3.loadData['source'];
	                        _this3.loadData['params'].map(function (ele) {
	                            if (nodeData[ele]) {
	                                params[ele] = nodeData[ele];
	                            }
	                            return;
	                        });
	                        _this3.__getData(url, params, function (backChildren) {
	                            _this3.insertData(nodeData.key, nodeData.type, backChildren);
	                            resolve();
	                        });
	                    }
	                } else {
	                    resolve();
	                }
	            });
	        }
	        // 向展示树和完整树中插入数据

	    }, {
	        key: 'insertData',
	        value: function insertData(curKey, type, nodeData) {
	            var completeTree = this.state.completeTree;
	            // 通过完整树指针向完整数据中插入一份数据
	            this.completePointerTree[curKey].children = nodeData;
	            // 需要更新指针树的指针情况
	            this.createPointerTree(nodeData, this.completePointerTree);
	            // 需要更新层级树的情况
	            // 当前节点为一个可展开的父节点，故层级树中加入此节点，同时用取回的数据更新层级树
	            if (!this.levalPointerTree[type]) {
	                this.levalPointerTree[type] = [];
	            }
	            this.levalPointerTree[type].push(curKey);
	            this.createLevalTree(nodeData, this.levalPointerTree);
	            this.setState({
	                completeTree: completeTree
	            });
	            // 用户在搜索时对数据进行了加载，且要求只展示与搜索相匹配的结果，则需要重新过滤树
	            // 如果用户要求搜索时仍然展示全量数据，则不需要重新过滤，直接展示用户新加载的节点即可
	            if (this.search.onlyShowSearchResult && this.state.searchValue.length > 0) {
	                this.handleSearch(this.state.searchValue);
	            }
	        }
	        // 树组建右边缘可扩展

	    }, {
	        key: 'resizeWidth',
	        value: function resizeWidth(ev) {
	            var _this4 = this;

	            var iEvent = ev || event;
	            if (iEvent.button === 2) {
	                this.stopResize();
	                return false;
	            }
	            var oBox = _reactDom2.default.findDOMNode(this.refs['tree']);
	            // 当单击的时候，存储x轴的坐标。
	            var dx = iEvent.clientX;
	            // 当单击的时候，储存Y轴的坐标。
	            var dy = iEvent.clientY;
	            // 存储默认的div的宽度。
	            var dw = oBox.offsetWidth;
	            document.onmousemove = function (ev) {
	                var iEvent = ev || event;
	                oBox.style.width = dw + (iEvent.clientX - dx) + 'px';
	                // 此时的iEvent.clientX的为拖动时一直改变的鼠标的X坐标，
	                // 所以，此时的盒子宽度就等于鼠标移动的距离加上原本盒子的宽度
	                if (_this4.widthResize['minWidth']) {
	                    if (oBox.offsetWidth <= parseInt(_this4.widthResize['minWidth'], 10)) {
	                        // 当盒子缩小到一定范围内的时候，让他保持一个固定值，不再继续改变
	                        oBox.style.width = _this4.widthResize['minWidth'];
	                    }
	                }
	                if (_this4.widthResize['maxWidth']) {
	                    if (oBox.offsetWidth >= parseInt(_this4.widthResize['maxWidth'], 10)) {
	                        // 当盒子缩小到一定范围内的时候，让他保持一个固定值，不再继续改变
	                        oBox.style.width = _this4.widthResize['maxWidth'];
	                    }
	                }
	            };
	            document.onmouseup = function () {
	                document.onmouseup = null;
	                document.onmousemove = null;
	            };
	            return false;
	        }
	    }, {
	        key: 'stopResize',
	        value: function stopResize() {
	            document.onmouseup = null;
	            document.onmousemove = null;
	        }
	        // 渲染树

	    }, {
	        key: 'renderTreeNode',
	        value: function renderTreeNode(data) {
	            var _this5 = this;

	            var _state = this.state,
	                expandedKeys = _state.expandedKeys,
	                searchValue = _state.searchValue;

	            return data.map(function (item) {
	                var title = item.name;
	                if (_this5.search && _this5.search.enable) {
	                    // indexOf搜索普通字符串效率最高
	                    var index = item.name.indexOf(searchValue);
	                    var beforeStr = item.name.substr(0, index);
	                    var afterStr = item.name.substr(index + searchValue.length);
	                    title = index > -1 ? _react2.default.createElement(
	                        'span',
	                        null,
	                        beforeStr,
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'ant-tree-searchable-filter', style: { color: 'red' } },
	                            searchValue
	                        ),
	                        afterStr
	                    ) : _react2.default.createElement(
	                        'span',
	                        null,
	                        item.name
	                    );
	                }
	                if (item.isLeaf === false || !!item.children) {
	                    return _react2.default.createElement(
	                        TreeNode,
	                        { key: item.key, title: title, data: item, isLeaf: false,
	                            disableCheckbox: !!item.disableCheckbox, disabled: !!item.disabled },
	                        !!item.children && _this5.renderTreeNode(item.children)
	                    );
	                } else {
	                    return _react2.default.createElement(TreeNode, { key: item.key, title: title, isLeaf: true, data: item,
	                        disableCheckbox: !!item.disableCheckbox, disabled: !!item.disabled });
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state2 = this.state,
	                expandedKeys = _state2.expandedKeys,
	                autoExpandParent = _state2.autoExpandParent,
	                checkedKeys = _state2.checkedKeys,
	                selectedKeys = _state2.selectedKeys,
	                searchValue = _state2.searchValue,
	                treeData = _state2.treeData;

	            var searchTip = treeData.length === 0 ? '未找到可以匹配的结果' : '';
	            return _react2.default.createElement(
	                'div',
	                { className: 'uf-tree', style: this.style, ref: 'tree' },
	                this.search.enable && _react2.default.createElement(
	                    'div',
	                    { className: 'uf-tree-search' },
	                    _react2.default.createElement(Search, {
	                        style: { width: '90%' },
	                        placeholder: 'Search',
	                        onChange: this.onChange.bind(this)
	                    }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'uf-tree-treeSearchTip',
	                            style: { display: searchTip.length > 0 ? 'block' : 'none' } },
	                        searchTip
	                    )
	                ),
	                _react2.default.createElement(
	                    _antd.Tree,
	                    _extends({}, this.antdConfig, {
	                        autoExpandParent: autoExpandParent,
	                        onExpand: this.onExpand.bind(this),
	                        onSelect: this.onSelect.bind(this),
	                        onCheck: this.onCheck.bind(this)
	                    }, !!expandedKeys ? { expandedKeys: expandedKeys } : null, !!checkedKeys ? { checkedKeys: checkedKeys } : null, !!selectedKeys ? { selectedKeys: selectedKeys } : null, !!this.loadData['enable'] ? { loadData: this.onLoadData.bind(this) } : null),
	                    this.renderTreeNode(treeData)
	                ),
	                this.widthResize['resizeAble'] && _react2.default.createElement('div', { className: 'uf-tree-ew-resize', onMouseDown: this.resizeWidth.bind(this) })
	            );
	        }
	    }]);

	    return OriginTree;
	}(_component.BaseComponent);

	exports.default = OriginTree;

/***/ }),
/* 153 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 154 */,
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// import Table from './Table.js';
	// export default Table;
	module.exports = __webpack_require__(156).default;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _component = __webpack_require__(9);

	var _utils = __webpack_require__(11);

	var _antd = __webpack_require__(14);

	__webpack_require__(157);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 表格组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */


	var NewTable = function (_BaseComponent) {
	    _inherits(NewTable, _BaseComponent);

	    // 以下是函数定义
	    function NewTable(props) {
	        _classCallCheck(this, NewTable);

	        var _this = _possibleConstructorReturn(this, (NewTable.__proto__ || Object.getPrototypeOf(NewTable)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(NewTable, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_antd.Table, this.__props);
	        }
	    }]);

	    return NewTable;
	}(_component.BaseComponent);

	exports.default = NewTable;

/***/ }),
/* 157 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(160).default;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _component = __webpack_require__(9);

	var _utils = __webpack_require__(11);

	var _moment = __webpack_require__(17);

	var _moment2 = _interopRequireDefault(_moment);

	var _antd = __webpack_require__(14);

	var _ueditor = __webpack_require__(145);

	var _ueditor2 = _interopRequireDefault(_ueditor);

	__webpack_require__(161);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 可配置表单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var uuid = 0;

	var OriginForm = function (_BaseComponent) {
	    _inherits(OriginForm, _BaseComponent);

	    function OriginForm(props) {
	        _classCallCheck(this, OriginForm);

	        var _this = _possibleConstructorReturn(this, (OriginForm.__proto__ || Object.getPrototypeOf(OriginForm)).call(this, props));

	        _this.__init();
	        _this.state = {
	            loading: false
	        };
	        // 用于存储子Form的引用（因为无法直接拿到refs）
	        _this.formRef = {};
	        _this.defaultValues = null;
	        // 用于记录当前form是否变换过（原来单个form通过复制新增等变为了多个）
	        _this.isArrayForm = false;
	        _this.config = {
	            title: '新增',
	            items: [],
	            buttons: null,
	            layout: {
	                type: 'horizontal',
	                labelCol: 6,
	                wrapperCol: 14
	            }
	        };
	        _this.init();
	        _this.itemsCache = {};
	        // this.setItemsCache(this.config.items);
	        return _this;
	    }

	    _createClass(OriginForm, [{
	        key: 'init',
	        value: function init(nextProps) {
	            var props = nextProps || this.props;
	            // 去掉 config 参数。。。
	            // this.config = this.__mergeProps(this.config, props.config);
	            this.config = this.__mergeProps(this.config, props);
	            this.formItemLayout = this.getLayout(this.config.layout);
	            // 是之成为受控组件，实现Form嵌套
	            if ('params' in props && !_utils.Utils.equals(this.defaultValues, props.params)) {
	                this.setDefaultValues(props.params);
	                !!nextProps && this.initValues();
	            }
	        }
	        // 遍历出一份items并缓存起来 key => value 形式
	        // setItemsCache(items) {
	        //     this.itemsCache = {};
	        //     const loop = (items) => {
	        //         for (let item of items) {
	        //             if (item instanceof Array) {
	        //                 loop(item);
	        //             } else {
	        //                 if (item.name) {
	        //                     this.itemsCache[item.name] = Object.assign({}, item);
	        //                 }
	        //             }
	        //         }
	        //     }
	        //     loop(items);
	        // }

	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {
	            // 之所以没放到 componentWillReceiveProps 里，是因为会导致死循环
	            // this.init();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // 把this抛出，供外部调用，因为使用refs找不到包装前的ReactForm对象
	            this.props.wrappedComponentRef && this.props.wrappedComponentRef(this);
	            this.initValues();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // Should be a controlled component.
	            if (!_utils.Utils.equals(this.props, nextProps)) {
	                this.init(nextProps);
	            }
	        }
	        // 获取初始值，并格式化

	    }, {
	        key: 'setDefaultValues',
	        value: function setDefaultValues(data) {
	            if (!this.isArrayForm && data instanceof Array) {
	                this.isArrayForm = true;
	            }
	            this.defaultValues = data;
	        }
	        /* 外部调用函数 */

	    }, {
	        key: 'getValues',
	        value: function getValues() {
	            var validate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            // 校验数据
	            if (validate && this.validateFields()) {
	                return;
	            }
	            return this.getFieldsValue();
	        }
	    }, {
	        key: 'resetValues',
	        value: function resetValues(o) {
	            this.initValues(o);
	        }
	        /* 组件内部逻辑 */
	        // 上传文件回调

	    }, {
	        key: 'normFile',
	        value: function normFile(e) {
	            if (Array.isArray(e)) {
	                return e;
	            }
	            return e && e.fileList;
	        }
	        // 获取全部数据

	    }, {
	        key: 'getFieldsValue',
	        value: function getFieldsValue() {
	            this.validateFields();
	            var values = this.props.form.getFieldsValue();
	            // 把传入的 params 和 form 表单里数据合并后一起提交，可以用此方法传递额外需要的参数

	            values = Object.assign({}, this.defaultValues, values);
	            if (this.config.beforeSubmit) {
	                values = this.config.beforeSubmit(values);
	            }
	            return values;
	        }
	        // 校验数据

	    }, {
	        key: 'validateFields',
	        value: function validateFields() {
	            var haveErr = false;
	            this.props.form.validateFields(function (err, values) {
	                err && (haveErr = true);
	            });
	            // 校验子form
	            var childForms = this.formRef;
	            if (childForms) {
	                for (var i in childForms) {
	                    if (childForms[i].validateFields()) {
	                        haveErr = true;
	                    }
	                }
	            }
	            return haveErr;
	        }
	        // 根据传入的 params 设置初始值

	    }, {
	        key: 'initValues',
	        value: function initValues(values) {
	            values = values || this.defaultValues;
	            if (values) {
	                // 设置初始值前对传入的 params 格式化
	                if (this.config.beforeSetValues) {
	                    values = this.config.beforeSetValues(values);
	                }
	                this.props.form.setFieldsValue(values);
	            } else {
	                this.props.form.resetFields();
	            }
	        }
	        // 实现联动功能

	    }, {
	        key: 'onChange',
	        value: function onChange(item, val, string) {
	            if (string) {
	                val = string;
	            } else if (val.target) {
	                if (val.target.value) {
	                    val = val.target.value;
	                } else if (val.target.checked) {
	                    val = val.target.checked;
	                }
	            }
	            // 实现联动
	            if (item.join) {
	                for (var i in item.join) {
	                    var target = this.itemsCache[i];
	                    for (var j in item.join[i]) {
	                        var result = item.join[i][j](val, target[j]);
	                        switch (j) {
	                            case 'display':
	                                target.display = result;
	                                break;
	                            case 'value':
	                                this.props.form.setFieldsValue(_defineProperty({}, i, result));
	                                break;
	                            default:
	                                target[j] = result;
	                                break;
	                        }
	                    }
	                }
	                this.forceUpdate();
	            }
	        }
	        // 获取异步数据

	    }, {
	        key: 'getData',
	        value: function getData(item) {
	            var _this2 = this;

	            var url = item.cfg.source;
	            var ajax = (0, _utils.Ajax)(url, 'get');
	            ajax(null, function (data) {
	                if (item.cfg.sourceDataHandle) {
	                    data = item.cfg.sourceDataHandle(data);
	                }
	                item.cfg.options = data;
	                delete item.cfg.source;
	                _this2.itemsCache[item.name] = item;
	                _this2.forceUpdate();
	            });
	        }
	        // 根据布局参数生成布局配置

	    }, {
	        key: 'getLayout',
	        value: function getLayout(layout) {
	            return {
	                labelCol: { span: layout.labelCol },
	                wrapperCol: { span: layout.wrapperCol }
	            };
	        }
	        // 生成单个表单项
	        // key 为表单name后缀，表单项循环时需要使用

	    }, {
	        key: 'getFormItem',
	        value: function getFormItem(oitem) {
	            var _this3 = this;

	            var okey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	            if (!oitem.name || oitem.type === 'empty') {
	                return;
	            }
	            okey = okey !== null ? '-' + okey : '';
	            var name = oitem.name;
	            var key = oitem.name + okey;
	            // 把表单项额外存起来，方便后面各种联动的控制（需要改配置里的参数）
	            if (this.itemsCache[key]) {
	                oitem = this.itemsCache[key];
	            } else {
	                this.itemsCache[key] = oitem;
	            }
	            if (oitem.display === false) {
	                return;
	            }
	            var getFieldDecorator = this.props.form.getFieldDecorator;
	            var itemLayout = void 0;
	            // 每个表单的布局可以独立控制
	            if (oitem.layout) {
	                itemLayout = this.getLayout(oitem.layout);
	            } else {
	                itemLayout = this.config.layout.type === 'horizontal' ? this.formItemLayout : null;
	            }
	            var item = Object.assign({
	                cfg: {},
	                rules: [{}]
	            }, oitem);
	            // 触发Change时实现联动功能
	            item.cfg.onChange = this.onChange.bind(this, item);
	            var itemContent = void 0;
	            var otherOptions = void 0;
	            switch (item.type) {
	                case 'group':
	                case 'form':
	                    // 实现分组，本质上是form嵌套
	                    // parent属性用来传递一些父Form的函数
	                    itemContent = _react2.default.createElement(ReactForm, { config: item.cfg
	                        // parent={this.isArrayForm ? this.transmitFunction : null}
	                        , wrappedComponentRef: function wrappedComponentRef(inst) {
	                            return _this3.formRef[key] = inst;
	                        } });
	                    itemLayout = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };
	                    otherOptions = {
	                        valuePropName: 'params'
	                    };
	                    item.default = item.default || {};
	                    item.rules[0]['type'] = item.rules[0]['type'] || 'object';
	                    break;
	                case 'input':
	                    // 输入框
	                    itemContent = _react2.default.createElement(_antd.Input, item.cfg);
	                    break;
	                case 'number':
	                    // 数字输入框
	                    itemContent = _react2.default.createElement(_antd.InputNumber, item.cfg);
	                    item.rules[0]['type'] = item.rules[0]['type'] || 'integer';
	                    // 验证前先把数据强制转换成数字
	                    item.rules[0]['transform'] = item.rules[0]['transform'] || function (v) {
	                        return v !== '' ? +v : '';
	                    };
	                    break;
	                case 'textarea':
	                    // 文本框
	                    itemContent = _react2.default.createElement(_antd.Input, _extends({ type: 'textarea' }, item.cfg));
	                    break;
	                case 'checkbox':
	                    itemContent = _react2.default.createElement(
	                        _antd.Checkbox,
	                        null,
	                        item.cfg.placeholder
	                    );
	                    otherOptions = {
	                        valuePropName: 'checked'
	                    };
	                case 'ueditor':
	                    // ueditor 输入框
	                    itemContent = _react2.default.createElement(_ueditor2.default, { config: item.cfg });
	                    otherOptions = {
	                        valuePropName: 'data'
	                    };
	                    break;
	                case 'select':
	                    // 下拉列表
	                    var selCfg = Object.assign({
	                        showSearch: true
	                    }, item.cfg);
	                    if (item.cfg.source) {
	                        this.getData(item);
	                    }
	                    itemContent = _react2.default.createElement(
	                        _antd.Select,
	                        selCfg,
	                        (item.cfg.options || []).map(function (v) {
	                            return _react2.default.createElement(
	                                _antd.Select.Option,
	                                { key: v.value, value: v.value },
	                                v.label
	                            );
	                        })
	                    );
	                    break;
	                case 'cascader':
	                    // 级联选择
	                    var casCfg = Object.assign({
	                        showSearch: true
	                    }, item.cfg);
	                    itemContent = _react2.default.createElement(_antd.Cascader, casCfg);
	                    item.rules[0]['type'] = item.rules[0]['type'] || 'array';
	                    break;
	                case 'upload':
	                    // 文件上传
	                    var isDisabled = {};
	                    // 可根据limit属性限制上传文件个数
	                    var limit = item.cfg.limit;
	                    if (limit) {
	                        var list = this.props.form.getFieldValue(key) || [];
	                        isDisabled = { disabled: list.length >= limit };
	                    }
	                    itemContent = _react2.default.createElement(
	                        _antd.Upload,
	                        _extends({}, item.cfg, isDisabled),
	                        _react2.default.createElement(
	                            _antd.Button,
	                            null,
	                            _react2.default.createElement(_antd.Icon, { type: 'upload' }),
	                            ' ',
	                            item.cfg.label || '上传文件'
	                        )
	                    );
	                    otherOptions = {
	                        valuePropName: 'fileList',
	                        getValueFromEvent: this.normFile.bind(this)
	                    };
	                    break;
	                case 'radio-group':
	                    // 单选按钮组
	                    itemContent = _react2.default.createElement(_antd.Radio.Group, item.cfg);
	                    break;
	                case 'checkbox-group':
	                    // 复选框组
	                    itemContent = _react2.default.createElement(_antd.Checkbox.Group, item.cfg);
	                    item.rules[0]['type'] = item.rules[0]['type'] || 'array';
	                    break;
	                case 'date-picker':
	                    // 日期时间选择
	                    var cfg = Object.assign({
	                        showTime: true,
	                        format: 'YYYY-MM-DD HH:mm:ss'
	                    }, item.cfg);
	                    itemContent = _react2.default.createElement(_antd.DatePicker, cfg);
	                    item.rules[0]['type'] = item.rules[0]['type'] || 'object';
	                    item.default = (0, _moment2.default)(item.default);
	                    break;
	                case 'button':
	                    // 带有各种功能的按钮
	                    return this.getButtonItem(item, okey);
	                    break;
	                default:
	                    // 自定义组件，略复杂
	                    itemContent = _react2.default.createElement(item.type, item.cfg);
	                    break;
	            }
	            var props = {
	                key: key,
	                label: !item.help ? item.label : _react2.default.createElement(
	                    'span',
	                    null,
	                    item.label,
	                    '\xA0',
	                    _react2.default.createElement(
	                        _antd.Tooltip,
	                        { title: item.help },
	                        _react2.default.createElement(_antd.Icon, { type: 'question-circle-o' })
	                    )
	                ),
	                extra: item.extra
	            };
	            if (itemContent) {
	                return _react2.default.createElement(
	                    _antd.Form.Item,
	                    _extends({}, props, itemLayout),
	                    getFieldDecorator(key, Object.assign({
	                        initialValue: item.default || '',
	                        rules: item.rules
	                    }, otherOptions, item.regionCfg))(itemContent)
	                );
	            }
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e, callback) {
	            var _this4 = this;

	            // 如果没有传入callback且没有props.onSubmit回调函数，则submit没有被捕获，不阻止提交（方便后面增加 action 扩展提交功能）
	            if (!callback && !this.props.onSubmit) {
	                return true;
	            }
	            var submit = callback || this.props.onSubmit;
	            // 否则阻止提交按钮默认事件
	            e && e.preventDefault();
	            if (this.validateFields()) {
	                return;
	            }

	            var values = this.getFieldsValue();
	            var result = submit(values, this);

	            // 如果回调函数返回了promise实例，则展示按钮上的loading效果，防止多次点击
	            if (result instanceof Promise) {
	                this.setState({ loading: true });
	                result.then(function (resolve) {
	                    return _this4.setState({ loading: false });
	                }).catch(function (reject) {
	                    return _this4.setState({ loading: false });
	                });
	            }
	        }
	        // submit按钮不进行处理，转移到 handleSubmit 函数上处理，在 handleSubmit 函数上判断是否需要阻止提交按钮默认事件

	    }, {
	        key: 'submitClick',
	        value: function submitClick(callback, e) {
	            this.handleSubmit(e, callback);
	        }
	    }, {
	        key: 'resetClick',
	        value: function resetClick(callback) {
	            this.props.form.resetFields();
	            callback && callback(this);
	        }
	        // 自定义按钮点击事件，返回表单数据

	    }, {
	        key: 'customClick',
	        value: function customClick(callback) {
	            var values = this.getFieldsValue();
	            callback && callback(values, this);
	        }
	        // 处理数据

	    }, {
	        key: 'handleValues',
	        value: function handleValues() {}
	        // 新增按钮

	    }, {
	        key: 'addClick',
	        value: function addClick(callback) {
	            var form = this.props.form;
	            var keys = form.getFieldValue('__keys');
	            var nextKeys = keys.concat(++uuid);
	            form.setFieldsValue({ '__keys': nextKeys });

	            // 处理已有数据
	            this.handleValues();

	            callback && callback(this);
	        }
	        // 复制新增

	    }, {
	        key: 'copyClick',
	        value: function copyClick(callback) {
	            callback && callback(this);
	        }
	        // 删除

	    }, {
	        key: 'deleteClick',
	        value: function deleteClick(callback, key) {
	            // if (this.props.parent && !this.isArrayForm) {
	            //     this.props.parent.deleteClick(callback, key);
	            //     return;
	            // }

	            var form = this.props.form;
	            var keys = form.getFieldValue('__keys');
	            if (keys.length === 1) {
	                return;
	            }
	            form.setFieldsValue({ '__keys': keys.filter(function (k) {
	                    return k !== +key;
	                }) });

	            // delete this.itemsCache
	            for (var i in this.itemsCache) {
	                if (_utils.Utils.isLast('-' + key, i)) {
	                    delete this.itemsCache[i];
	                }
	            }
	            // delete data

	            callback && callback(this, key);
	        }
	        // 其他

	    }, {
	        key: 'othersClick',
	        value: function othersClick(callback) {
	            callback && callback(this);
	        }
	        // 获取表单项中的 button 类型的按钮

	    }, {
	        key: 'getButtonItem',
	        value: function getButtonItem(item, key) {
	            var handleClick = void 0;
	            switch (item.action) {
	                case 'add':
	                    handleClick = this.addClick.bind(this, item.onClick);
	                    break;
	                case 'copy':
	                    handleClick = this.copyClick.bind(this, item.onClick);
	                    break;
	                case 'delete':
	                    handleClick = this.deleteClick.bind(this, item.onClick, key);
	                    break;
	                case 'submit':
	                    handleClick = this.handleSubmit.bind(this, null, item.onClick, key);
	                    break;
	                default:
	                    handleClick = this.othersClick.bind(this, item.onClick);
	                    break;
	            }
	            var props = {
	                key: item.name,
	                style: { marginLeft: '8px' },
	                onClick: handleClick
	            };
	            return _react2.default.createElement(
	                _antd.Button,
	                _extends({}, props, item.cfg),
	                item.label
	            );
	        }
	        // 处理表单组

	    }, {
	        key: 'generateFormItemsGroup',
	        value: function generateFormItemsGroup(gitem, key) {
	            if (!gitem.length) {
	                return;
	            }
	            var result = [];
	            var layout = { span: 24 / gitem.length };
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = gitem[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var item = _step.value;

	                    var formItem = void 0;
	                    if (item instanceof Array) {
	                        formItem = _react2.default.createElement(
	                            _antd.Row,
	                            null,
	                            this.generateFormItemsGroup(item, key)
	                        );
	                    } else {
	                        formItem = this.getFormItem(item, key);
	                        item.type === 'button' && (layout = null);
	                    }
	                    result.push(!!layout ? _react2.default.createElement(
	                        _antd.Col,
	                        _extends({ key: item.name || _utils.Utils.hash(item) }, layout),
	                        formItem
	                    ) : formItem);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return result;
	        }
	        // 生成表单项列表

	    }, {
	        key: 'generateFormItems',
	        value: function generateFormItems(items, key) {
	            var result = [];
	            var index = 0;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var item = _step2.value;

	                    if (item instanceof Array) {
	                        result.push(_react2.default.createElement(
	                            _antd.Row,
	                            { key: 'items-' + index },
	                            this.generateFormItemsGroup(item, key)
	                        ));
	                    } else {
	                        result.push(this.getFormItem(item, key));
	                    }
	                    // if (item instanceof Array) {
	                    //     item = {
	                    //         type: 'form',
	                    //         name: `${v}`,
	                    //         cfg: {
	                    //             items: items
	                    //         }
	                    //     };
	                    // }
	                    // result.push(this.getFormItem(item, key));
	                    index++;
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            return result;
	        }
	        // 生成表单内容

	    }, {
	        key: 'generateItems',
	        value: function generateItems() {
	            var _this5 = this;

	            var _props$form = this.props.form,
	                getFieldDecorator = _props$form.getFieldDecorator,
	                getFieldValue = _props$form.getFieldValue;
	            // 创建一个隐含的表单项来存储需要展示几个form

	            getFieldDecorator('__keys', { initialValue: [0] });
	            var keys = getFieldValue('__keys');
	            var items = this.config.items;
	            var result = void 0;
	            if (keys.length > 1) {
	                result = keys.map(function (v) {
	                    return _this5.generateFormItems(items, v);
	                });
	            } else {
	                result = this.generateFormItems(items);
	            }
	            // result = keys.map(v=>{
	            //     return this.generateFormItems(items, v)
	            // });
	            return result;
	        }
	        // 解析 Button 的配置，格式化成统一格式

	    }, {
	        key: 'analysisButtonConfig',
	        value: function analysisButtonConfig() {
	            var buttonsCfg = this.config.buttons;
	            if (!buttonsCfg) {
	                return;
	            }
	            var formatCfg = {
	                layout: {
	                    type: 'center'
	                }
	            };
	            if (buttonsCfg instanceof Array) {
	                formatCfg.items = buttonsCfg;
	            } else {
	                if (!!buttonsCfg.layout) {
	                    if (typeof buttonsCfg.layout === 'string') {
	                        formatCfg.layout.type = buttonsCfg.layout;
	                    } else {
	                        formatCfg.layout = buttonsCfg.layout;
	                    }
	                }
	                formatCfg.items = buttonsCfg.items;
	            }
	            return formatCfg;
	        }
	        // 生成按钮

	    }, {
	        key: 'generateButton',
	        value: function generateButton() {
	            var _this6 = this;

	            var buttonsCfg = this.analysisButtonConfig();
	            if (!buttonsCfg) {
	                return;
	            }
	            return _react2.default.createElement(
	                _antd.Row,
	                { type: 'flex', justify: buttonsCfg.layout.type },
	                _react2.default.createElement(
	                    _antd.Col,
	                    buttonsCfg.layout,
	                    _react2.default.createElement(
	                        _antd.Form.Item,
	                        { key: 'buttons' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-buttons' },
	                            buttonsCfg.items.map(function (item) {
	                                switch (item.action) {
	                                    case 'submit':
	                                        return _react2.default.createElement(
	                                            _antd.Button,
	                                            _extends({ key: 'submit' }, item, {
	                                                loading: _this6.state.loading,
	                                                onClick: _this6.submitClick.bind(_this6, item.onClick) }),
	                                            item.value
	                                        );
	                                        break;
	                                    case 'reset':
	                                        return _react2.default.createElement(
	                                            _antd.Button,
	                                            _extends({ key: 'reset' }, item, {
	                                                onClick: _this6.resetClick.bind(_this6, item.onClick) }),
	                                            item.value
	                                        );
	                                        break;
	                                    default:
	                                        return _react2.default.createElement(
	                                            _antd.Button,
	                                            _extends({ key: item.value }, item, {
	                                                onClick: _this6.customClick.bind(_this6, item.onClick) }),
	                                            item.value
	                                        );
	                                        break;
	                                }
	                            })
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'uf-form' },
	                this.config.header && _react2.default.createElement(
	                    'div',
	                    { className: 'header' },
	                    _react2.default.createElement(
	                        'h5',
	                        null,
	                        this.config.header
	                    ),
	                    _react2.default.createElement('hr', null)
	                ),
	                _react2.default.createElement(
	                    _antd.Form,
	                    { layout: this.config.layout.type, onSubmit: this.handleSubmit.bind(this) },
	                    this.generateItems(),
	                    this.generateButton()
	                )
	            );
	        }
	    }]);

	    return OriginForm;
	}(_component.BaseComponent);

	var ReactForm = _antd.Form.create({
	    onValuesChange: function onValuesChange(props, values) {
	        // Should provide an event to pass values to Form.
	        if (_typeof(props.params) === 'object') {
	            var key = Object.keys(values)[0];
	            if (!_utils.Utils.equals(props.params[key], values[key])) {
	                props.onChange && props.onChange(Object.assign({}, props.params, values));
	            }
	        } else {
	            props.onChange && props.onChange(values);
	        }
	    }
	}
	// mapPropsToFields(props) {
	//     return props;
	// }
	)(OriginForm);

	exports.default = ReactForm;

/***/ }),
/* 161 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 162 */,
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(164).default;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _antd = __webpack_require__(14);

	var _component = __webpack_require__(9);

	var _utils = __webpack_require__(11);

	var _tools = __webpack_require__(1);

	var _tools2 = _interopRequireDefault(_tools);

	__webpack_require__(165);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file ReactModal 适用于弹出层快速提交表单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */


	var defaultEventList = ['onCancel'];

	var NewModal = function (_BaseComponent) {
	    _inherits(NewModal, _BaseComponent);

	    function NewModal(props) {
	        _classCallCheck(this, NewModal);

	        var _this = _possibleConstructorReturn(this, (NewModal.__proto__ || Object.getPrototypeOf(NewModal)).call(this, props));

	        _this.__init();
	        _this.afterInit();
	        return _this;
	    }
	    // 给props增加一些默认的事件处理函数


	    _createClass(NewModal, [{
	        key: 'afterInit',
	        value: function afterInit() {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = defaultEventList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var v = _step.value;

	                    if (!this.__props[v]) {
	                        this.__props[v] = this[v].bind(this);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'show',
	        value: function show(e) {
	            this.set({ visible: true });
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            this.set({ visible: false });
	        }
	        // 默认点击取消时的处理逻辑

	    }, {
	        key: 'onCancel',
	        value: function onCancel() {
	            this.close();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_antd.Modal, this.__props);
	        }
	    }]);

	    return NewModal;
	}(_component.BaseComponent);

	// 统一处理config（某些属性需要二次解析）


	function message(type, config) {
	    var _arr = ['title', 'content'];

	    for (var _i = 0; _i < _arr.length; _i++) {
	        var v = _arr[_i];
	        if (config[v] && !_utils.Utils.typeof(config[v], 'string')) {
	            config[v] = _tools2.default.init(config[v]);
	        }
	    }
	    return _antd.Modal[type](config);
	}

	NewModal.info = message.bind(null, 'info');
	NewModal.success = message.bind(null, 'success');
	NewModal.error = message.bind(null, 'error');
	NewModal.warning = message.bind(null, 'warning');
	NewModal.confirm = message.bind(null, 'confirm');

	exports.default = NewModal;

/***/ }),
/* 165 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 166 */,
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(168).default;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _antd = __webpack_require__(14);

	var _component = __webpack_require__(9);

	var _utils = __webpack_require__(11);

	var _export = __webpack_require__(143);

	var _export2 = _interopRequireDefault(_export);

	var _ReactInput = __webpack_require__(169);

	var _ReactInput2 = _interopRequireDefault(_ReactInput);

	var _ReactModal = __webpack_require__(170);

	var _ReactModal2 = _interopRequireDefault(_ReactModal);

	var _TrRow = __webpack_require__(174);

	var _TrRow2 = _interopRequireDefault(_TrRow);

	var _ThRow = __webpack_require__(176);

	var _ThRow2 = _interopRequireDefault(_ThRow);

	var _Confirm = __webpack_require__(178);

	var _Confirm2 = _interopRequireDefault(_Confirm);

	__webpack_require__(179);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 简易表格组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author luyongfang@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */
	/* eslint-disable fecs-camelcase */


	var pagerInfo = function pagerInfo(total) {
	    return _react2.default.createElement(
	        'span',
	        null,
	        '共' + total + '条数据'
	    );
	};

	var Table = function (_BaseComponent) {
	    _inherits(Table, _BaseComponent);

	    // 以下是函数定义
	    function Table(props) {
	        _classCallCheck(this, Table);

	        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

	        _this.__init();
	        _this.initTable();
	        return _this;
	    }

	    // 适用于同一个Table可能展示不同的数据
	    // 比如服务器-网络 他们的Tags是不同的，但第一次调用constructor后就没有地方更新了


	    _createClass(Table, [{
	        key: 'initTable',
	        value: function initTable(nextProps) {
	            var objProps = nextProps ? nextProps : this.props;
	            var tableCfg = objProps;
	            var cacheSize = tableCfg.name ? localStorage.getItem(tableCfg.name) : null;

	            // 把所有配置放到this上，方便后续使用
	            this.tableCfg = tableCfg || {};
	            this.cfg = Object.assign({}, {
	                checkBox: false,
	                tableClass: 'table table-striped'
	            }, tableCfg.cfg, true);
	            this.pager = tableCfg.pager ? Object.assign({}, {
	                pageSize: cacheSize || 15,
	                pageType: 'client'
	            }, tableCfg.pager, true) : false;
	            this.pager.showCount && (this.pager.showTotal = pagerInfo);
	            this.display = tableCfg.display || {};
	            this.key = tableCfg.key || 'id';
	            // 显示哪些字段
	            !nextProps && (this.showTags = tableCfg.tags);

	            // 存储当前tablet选中的数据,key为id, value为行数据
	            this.selectedData = {};
	            // 把content数组转换成根据id一一映射的map
	            this.contentMap = {};
	            // 行选中状态
	            this.rowState = {};
	            // 存储当前编辑的table数据
	            this.editData = {};
	            // 仅针对props传递content数据时才使用,为了判断再接收到新的props时是否进行更新的判断,url方式不适用
	            this.tableDatas = [];
	            var arrData = [];
	            var data = [];
	            var content = [];
	            if (!tableCfg.url) {
	                content = objProps.data ? objProps.data : [];
	                this.generateRowId(content);
	                if (this.pager) {
	                    data = content.slice(0, this.pager.pageSize);
	                } else {
	                    data = content;
	                }
	                arrData = _utils.Utils.clone(content);
	            }
	            this.tableDatas = _utils.Utils.clone(arrData);
	            var retract = false;
	            var display = tableCfg.display;
	            display && display.retract && (retract = display.retract);
	            var state = {
	                // 所有请求回来的数据或者传递过来的数据
	                content: arrData,
	                // 一共多少条数据
	                count: arrData.length,
	                // 一共多少条数据 - 过滤时保存原所有数据总数
	                allCount: arrData.length,
	                // 当前页的数据
	                currPageData: _utils.Utils.clone(data),
	                // 当前页
	                currentPage: 1,
	                flag: 0,
	                // 当前是否处在filter的状态
	                filter: false,
	                // 是否选择全部行
	                checkAll: false,
	                // loading的spin提示及提示信息
	                spinning: false,
	                spinTip: '',
	                // table表头右侧设置按钮的下拉框是否展示
	                showTableMenu: false,
	                // 是否允许表格编辑
	                editTable: false,
	                // 全屏展示与否
	                fullScreen: false,
	                // 是否展示全部字段
	                showAllTags: false,
	                // 是否收起Table
	                retract: retract
	            };
	            // 请求序号，当执行新请求时，之前的未返回数据的请求则废弃，通过index值是否相等判断
	            this.requerstIndex = 0;
	            // update at 2016/11/03 by liuzechun@baidu.com
	            if (!!nextProps) {
	                this.setState(state);
	                // 重置Table后要手动触发componentDidMount函数中的逻辑来加载数据
	                this.componentDidMount();
	            } else {
	                this.state = state;
	            }
	            // 导出数据的配置
	            this.exportConfig = this.getExportConfig();
	            // return this.state;
	        }
	        // 刷新数据时调用 - 包括直接传入数据和通过url获取数据
	        // 数据变更时都需要调用此函数，以刷新导出组件的数据或查询条件

	    }, {
	        key: 'onRefreshData',
	        value: function onRefreshData() {
	            this.clearSelect();
	            // 刷新导出组件配置
	            this.exportConfig = this.getExportConfig();
	            this.forceUpdate();
	            this.defaultCheckAll();
	        }
	        // 默认全部选中

	    }, {
	        key: 'defaultCheckAll',
	        value: function defaultCheckAll() {
	            this.cfg.checkAll && this.cfg.checkBox && this.checkAll(true);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _this2 = this;

	            // 就算props没有改变，当父组件重新渲染时，也会进这里，所以需要在这里判断是否需要重新渲染组件
	            // 如果table的tableCfg是动态的则需要重新设置tableCfg和showTags
	            if (!_utils.Utils.equals(this.props, nextProps)) {
	                this.initTable(nextProps);
	            }
	            // 针对传数据进来的方式
	            var currentTableDatas = _utils.Utils.clone(nextProps.data);
	            if (currentTableDatas && !_utils.Utils.equals(currentTableDatas, this.tableDatas)) {
	                var content = this.generateRowId(nextProps.data);
	                var data = void 0;
	                if (this.pager) {
	                    data = content.slice(0, this.pager.pageSize);
	                } else {
	                    data = content;
	                }
	                this.setState({
	                    content: _utils.Utils.clone(content),
	                    currPageData: _utils.Utils.clone(data),
	                    count: content.length,
	                    allCount: content.length,
	                    checkAll: false
	                }, function () {
	                    // 重置分页
	                    _this2.setState({ currentPage: 1 });
	                    _this2.onRefreshData();
	                });
	                this.tableDatas = _utils.Utils.clone(currentTableDatas);
	            }
	            // 针对通过url向后台请求数据时，当params变化时才会刷新
	            if (this.tableCfg.url) {
	                if (!_utils.Utils.equals(this.props.params, nextProps.params)) {
	                    // 清空过滤控件
	                    this.refs.filter && this.refs.filter.setVal('');
	                    this.getData(null, null, nextProps);
	                }
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.tableCfg.url) {
	                this.getData(null, this.props.params);
	            } else {
	                this.defaultCheckAll();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.clearSelect();
	        }
	        // 获取要下载导出数据的配置

	    }, {
	        key: 'getExportConfig',
	        value: function getExportConfig() {
	            var tableCfg = this.tableCfg;
	            var objTags = this.showTags;
	            // let objHeaders = {};
	            var objHeaders = [];
	            // let arrKeys = [];
	            // let typeDef = Object.prototype.toString;
	            for (var key in objTags) {
	                if (key === '_operation' || key === 'operation') {
	                    continue;
	                }
	                objHeaders.push({
	                    key: key,
	                    title: _utils.Utils.typeof(objTags[key], 'string') ? objTags[key] : objTags[key]['title']
	                });
	            }
	            /**
	             * 1. 没有url就是直接传递了content的数据
	             * 2. 有url但是是client分页-Export需要传递data,默认是client分页
	             * 3. 有url但是是server端分页-Export需要传递url配置
	             */
	            if (!tableCfg.url || this.pager.pageType !== 'server') {
	                return {
	                    headers: objHeaders,
	                    data: this.state && this.state.content ? this.state.content : this.props.data || [],
	                    total: this.state.count
	                };
	            }
	            return {
	                headers: objHeaders,
	                source: tableCfg.url,
	                params: this.props.params ? this.props.params : {},
	                total: this.state.count
	            };
	        }
	        // 拖动表头更改列排序

	    }, {
	        key: 'changeColumnOrder',
	        value: function changeColumnOrder(srcField, dstField) {
	            var arrKeys = Object.keys(this.tableCfg.tags);
	            var srcIndex = arrKeys.indexOf(srcField);
	            var dstIndex = arrKeys.indexOf(dstField);
	            var arrNewKeys = [];
	            var len = arrKeys.length;
	            if (srcIndex < dstIndex) {
	                arrNewKeys = arrKeys.slice(0, srcIndex).concat(arrKeys.slice(srcIndex + 1, dstIndex + 1)).concat(arrKeys[srcIndex]).concat(arrKeys.slice(dstIndex + 1, len));
	            } else {
	                arrNewKeys = arrKeys.slice(0, dstIndex).concat(arrKeys[srcIndex]).concat(arrKeys.slice(dstIndex, srcIndex)).concat(arrKeys.slice(srcIndex + 1, len));
	            }
	            // 根据最新的字段顺序进行调整
	            var newTags = {};
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = arrNewKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var v = _step.value;

	                    newTags[v] = this.tableCfg.tags[v];
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            this.showTags = newTags;
	            this.tableCfg['tags'] = newTags;
	            this.forceUpdate();
	        }
	        // 设置显示字段
	        // @param {Object}  oriTags 初始的tags配置
	        // @param {Object} showTags 要展示的tags，回传的参数

	    }, {
	        key: 'setShowTags',
	        value: function setShowTags(oriTags, showTags) {
	            var typeDef = Object.prototype.toString;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = Object.keys(oriTags)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var val = _step2.value;

	                    if (showTags[val]) {
	                        oriTags[val] && typeDef.call(oriTags[val]) === '[object Object]' && (oriTags[val]['display'] = true);
	                    } else if (typeDef.call(oriTags[val]) === '[object String]') {
	                        var title = oriTags[val];
	                        oriTags[val]['title'] = title;
	                        oriTags[val]['display'] = false;
	                    } else {
	                        oriTags[val]['display'] = false;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            this.showTags = oriTags;
	            this.refs.switchmodal.setState({ visible: false });
	            this.setState({ switchTags: false });
	        }

	        // 对于后端数据中没有id的生成随机的id用于存储选择了哪些数据
	        // @param {Array} arrDatas 如果返回的行数据中没有id，自动给加上唯一的ID，用于设置选择了哪些数据

	    }, {
	        key: 'generateRowId',
	        value: function generateRowId(arrDatas) {
	            var i = 0;
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = arrDatas[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var obj = _step3.value;

	                    if (!obj[this.key] && obj[this.key] !== 0) {
	                        obj[this.key] = _utils.Utils.uniqueId();
	                    }
	                    this.contentMap[obj[this.key]] = obj;
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            return arrDatas;
	        }

	        // 页码变化

	    }, {
	        key: 'handlePageChange',
	        value: function handlePageChange(currentPage) {
	            // 切换分页时是否保留已勾选的行，默认清除
	            !this.cfg.retain && this.clearSelect();
	            this.setState({ currentPage: currentPage });
	            // 更新数据
	            this.changeData(currentPage);
	            this.props.onPageChange && this.props.onPageChange(currentPage);
	        }
	        // 切换分页时，获取分页数据

	    }, {
	        key: 'changeData',
	        value: function changeData(currentPage) {
	            // currentPage 从1开始
	            if (this.pager.pageType === 'server') {
	                this.getData(currentPage);
	            } else {
	                var startPos = (currentPage - 1) * this.pager.pageSize;
	                var endPos = currentPage * this.pager.pageSize;
	                var curData = [];
	                // this.state.content是对全量的,如果是过来出来的数据分页怎么办
	                if (this.state.filter) {
	                    curData = this.state.displayConent.slice(startPos, endPos);
	                } else {
	                    curData = this.state.content.slice(startPos, endPos);
	                }
	                this.setState({ currPageData: _utils.Utils.clone(curData) });
	                this.isCheckAll(curData);
	            }
	        }

	        // 异步获取数据
	        // 方式请求接口的方法
	        // @param {number} pageNum 请求第几页非必须
	        // @param {Object} params 对象非必须
	        // @param {Object} nextProps 非必须

	    }, {
	        key: 'getData',
	        value: function getData(pageNum, params, nextProps) {
	            // 第一次render 没有nextProps
	            var tableCfg = this.tableCfg;
	            var dataParams = {};
	            // let requestParams = params ? params : (nextProps ? nextProps.params : null);
	            var requestParams = params ? params : nextProps ? nextProps.params : this.props.params;
	            if (this.pager.pageType === 'server') {
	                dataParams = Object.assign({}, requestParams, {
	                    page: pageNum ? pageNum : 1,
	                    pageNum: pageNum ? pageNum : 1,
	                    size: this.pager.pageSize,
	                    pageSize: this.pager.pageSize,
	                    pageType: 'server'
	                });
	            } else {
	                dataParams = Object.assign({}, requestParams, {
	                    pageType: 'client'
	                });
	            }
	            var self = this;
	            if (tableCfg.url) {
	                this.setState({ spinning: true, spinTip: '正在请求数据，请稍等~', size: 'large' });
	                // 当前请求的标号
	                var index = ++this.requerstIndex;
	                this.__ajax({
	                    url: tableCfg.url,
	                    data: dataParams,
	                    type: 'json',
	                    method: tableCfg.method && tableCfg.method === 'post' ? 'POST' : 'GET',
	                    success: function success(res) {
	                        // 如果在此之后又有其他请求，则放弃当前处理
	                        if (index !== self.requerstIndex) {
	                            return;
	                        }
	                        if (res.status * 1 === 0) {
	                            self.generateRowId(res.data);
	                            var data = res.data.slice(0, self.pager.pageSize);
	                            var tempExConfig = {};
	                            // 如果有select下拉框可以编辑，且后端返回下拉框数据，则要修改配置里的下拉框的option
	                            for (var v in tableCfg.tags) {
	                                var tag = tableCfg.tags[v];
	                                if (res[v] && tag.editCfg && tag.editCfg.elemType && tag.editCfg.elemType === 'select' && tag.editCfg.edit === true) {
	                                    tag.editCfg['options'] = res[v];
	                                }
	                            }
	                            var temp = {
	                                content: _utils.Utils.clone(res.data),
	                                currPageData: _utils.Utils.clone(data),
	                                // exportConfig: exportConfig,
	                                tableCfg: tableCfg,
	                                count: res.count || res.total,
	                                allCount: res.count || res.total,
	                                checkAll: false,
	                                spinning: false,
	                                spinTip: ''
	                            };
	                            self.setState(temp, function () {
	                                self.onRefreshData();
	                            });
	                        } else if (res.status * 1 === 1) {
	                            var modalCon = {
	                                title: '提示：',
	                                type: 'warning',
	                                msg: res.msg
	                            };
	                            self.setState({ spinning: false, spinTip: '' });
	                            self.createModalCon();
	                            var divCon = document.getElementById('modalDiv');
	                            _reactDom2.default.render(_react2.default.createElement(_ReactModal2.default, { modalCon: modalCon,
	                                handleModalClick: self.clearModalCon.bind(self),
	                                handleCancel: self.clearModalCon.bind(self) }), divCon);
	                        }
	                    },
	                    error: function error(jqXHR, textStatus, errorThrown) {
	                        // 如果在此之后又有其他请求，则放弃当前处理
	                        if (index !== self.requerstIndex) {
	                            return;
	                        }
	                        var modalCon = {
	                            title: '出错：',
	                            type: 'warning',
	                            msg: '请求出错-返回状态码' + textStatus + 'error: ' + errorThrown
	                        };
	                        self.setState({ spinning: false, spinTip: '' });
	                        self.createModalCon();
	                        var divCon = document.getElementById('modalDiv');
	                        _reactDom2.default.render(_react2.default.createElement(_ReactModal2.default, { modalCon: modalCon,
	                            handleModalClick: self.clearModalCon.bind(self),
	                            handleCancel: self.clearModalCon.bind(self) }), divCon);
	                    }
	                });
	            }
	        }
	    }, {
	        key: 'getSelectedData',
	        value: function getSelectedData() {
	            var tmpArr = [];
	            for (var key in this.selectedData) {
	                tmpArr.push(this.selectedData[key]);
	            }
	            return tmpArr;
	        }
	        // 清除已勾选内容

	    }, {
	        key: 'clearSelect',
	        value: function clearSelect() {
	            this.selectedData = {};
	            this.rowState = {};
	            // 通知父组件清除已报错勾选内容
	            this.props.onCheckRow && this.props.onCheckRow({});
	        }
	    }, {
	        key: 'getSelectedIds',
	        value: function getSelectedIds() {
	            var arrIds = [];
	            for (var dex in this.selectedData) {
	                if (this.selectedData.hasOwnProperty(dex)) {
	                    arrIds.push(dex);
	                }
	            }
	            return arrIds;
	        }
	    }, {
	        key: 'sendEditData',
	        value: function sendEditData(item, params) {
	            var self = this;
	            var temp = {};
	            for (var dex in item.config) {
	                if (item.config.hasOwnProperty(dex)) {
	                    var name = item.config[dex]['name'];
	                    temp[name] = params[name];
	                }
	            }
	            temp[this.key] = params[this.key];
	            var ele = document.getElementById('modalDiv');
	            ele && ele.remove();
	            this.__ajax({
	                url: item.url,
	                data: temp,
	                type: 'json',
	                method: 'get',
	                success: function success(res) {
	                    if (res.status * 1 === 0) {
	                        // 类似成功的提示不需要展示头和尾部e
	                        self.refreshTable();
	                    } else {
	                        var modalCon = {
	                            title: '提示：',
	                            type: 'warning',
	                            msg: res.msg
	                        };
	                        self.createModalCon();
	                        _reactDom2.default.render(_react2.default.createElement(_ReactModal2.default, { modalCon: modalCon,
	                            handleModalClick: self.clearModalCon.bind(self),
	                            handleCancel: self.clearModalCon.bind(self) }), document.getElementById('modalDiv'));
	                    }
	                },
	                error: function error(res) {
	                    var modalCon = {
	                        title: '出错：',
	                        type: 'warning',
	                        msg: '发送请求时出现错误，请尝试重新发送请求'
	                    };
	                    self.createModalCon();
	                    _reactDom2.default.render(_react2.default.createElement(_ReactModal2.default, { modalCon: modalCon,
	                        handleModalClick: self.clearModalCon.bind(self),
	                        handleCancel: self.clearModalCon.bind(self) }), document.getElementById('modalDiv'));
	                }
	            });
	        }
	    }, {
	        key: 'createModalCon',
	        value: function createModalCon() {
	            var ele = document.getElementById('modalDiv');
	            if (!ele) {
	                ele = document.createElement('div');
	                ele.setAttribute('id', 'modalDiv');
	                document.body.append(ele);
	            }
	        }
	    }, {
	        key: 'clearModalCon',
	        value: function clearModalCon() {
	            var ele = document.getElementById('modalDiv');
	            ele && ele.remove();
	        }
	    }, {
	        key: 'handleEdit',
	        value: function handleEdit(data, tag, val, event) {
	            // 单个字段的编辑用Input，多个select时序提供map或者url
	            var modalCon = {
	                type: 'form'
	            };
	            var editCfg = this.tableCfg.detailCfg.editCfg;
	            var config = editCfg.filed[tag];
	            config['type'] = 'input';
	            config['name'] = tag;
	            config['defaultVal'] = val;
	            var item = {
	                url: editCfg.url,
	                config: [config]
	            };
	            this.createModalCon();
	            _reactDom2.default.render(_react2.default.createElement(_ReactModal2.default, { modalCon: modalCon, item: item, data: data,
	                handleModalClick: this.sendEditData.bind(this),
	                handleCancel: this.clearModalCon.bind(this) }), document.getElementById('modalDiv'));
	        }
	    }, {
	        key: 'checkRow',
	        value: function checkRow(id) {
	            var checked = !this.rowState[id];
	            this.rowState[id] = checked;
	            // 可以吧selectedData干掉，只存id
	            if (checked) {
	                this.selectedData[id] = this.contentMap[id];
	            } else {
	                delete this.selectedData[id];
	            }
	            // onCheckRow为勾选行变化时触发的函数，可返回勾选的全部数据
	            this.props.onCheckRow && this.props.onCheckRow(this.selectedData);
	            this.isCheckAll(this.state.currPageData);
	        }
	        // 判断是否全部选中了，全部选中需要更新选中按钮，thGenerator也需要单独拿出来

	    }, {
	        key: 'isCheckAll',
	        value: function isCheckAll(curData) {
	            var rowState = this.rowState;
	            var pageData = curData;
	            var result = true;
	            for (var i = 0, len = pageData.length; i < len; i++) {
	                if (!rowState.hasOwnProperty(pageData[i][this.key]) || rowState[pageData[i][this.key]] === false) {
	                    result = false;
	                    break;
	                }
	            }
	            this.setState({ checkAll: result });
	        }
	    }, {
	        key: 'checkAll',
	        value: function checkAll() {
	            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            // 只能是当前页的数据
	            var rowState = [];
	            var arrDatas = this.state.currPageData;
	            // 可以全选，把disabled的数据行过滤掉
	            for (var i = 0, len = arrDatas.length; i < len; i++) {
	                if (!arrDatas[i]['disabled']) {
	                    if (val) {
	                        this.selectedData[arrDatas[i][this.key]] = arrDatas[i];
	                    } else {
	                        delete this.selectedData[arrDatas[i][this.key]];
	                    }
	                    this.rowState[arrDatas[i][this.key]] = val;
	                }
	            }

	            this.props.onCheckRow && this.props.onCheckRow(this.selectedData);
	            this.setState({
	                checkAll: val
	            });
	        }

	        /**
	         *  编辑之后存一份数据未editData,当取消编辑之后editData要清空
	         *  @param {number} trDataId 没一行唯一的一个ID
	         *  @param {Object} trNewData 编辑之后的行数据
	         */

	    }, {
	        key: 'setEditTableData',
	        value: function setEditTableData(trDataId, trNewData) {
	            this.editData[trNewData[this.key]] = trNewData;
	        }

	        /**
	         * 取消编辑
	         * 暂时只包含全部取消
	         * 当前行的取消先不做，当前行需要还原原来的数据，而重新渲染table其他行的时候需要综合数据渲染太麻烦of course可以做
	         * @param {number} trDataId 当前行的id
	         */

	    }, {
	        key: 'cancelEdit',
	        value: function cancelEdit(trDataId) {
	            if (trDataId) {
	                delete this.editData[trDataId];
	            } else {
	                this.editData = {};
	                this.setState({ editTable: false });
	            }
	        }

	        /**
	         *  表头保存按钮的动作
	         *  0. 比较的是editData中的数据
	         *  1. 需要比较前后的数据是否发生了变化，如果没有则需要提示
	         *  2. 如果发生了变化则需要弹出提示框，点击确定后进行提交
	         *  获取到编辑之后的数据，回传到上层进行处理
	         *  处理保存数据
	         *  当有数据变化的时候才去confirm提交数据
	         */

	    }, {
	        key: 'confirmSaveEdit',
	        value: function confirmSaveEdit() {
	            var isDataChanged = JSON.stringify(this.editData);
	            if (isDataChanged === '{}') {
	                _antd.message.warning('编辑的数据没有发生任何变化');
	            } else {
	                this.setState({ editTable: false });
	                this.props.saveEdit && this.props.saveEdit(this.editData);
	            }
	        }
	        // tr上的单击事件
	        // event为与触发的tr上事件相关的一个对象

	    }, {
	        key: 'handleTrClick',
	        value: function handleTrClick(row, index, id, event) {
	            // 只有展示勾选框的Table才会执行checkRow函数
	            this.cfg.checkBox && this.cfg.rowCheck && this.checkRow(id);
	            this.props.onTrClick && this.props.onTrClick(row, index, event);
	        }
	        // tr上的双击事件

	    }, {
	        key: 'handleTrDoubleClick',
	        value: function handleTrDoubleClick(row, index, event) {
	            // 去掉上一次双击的行的active状态
	            this.activeTr && this.activeTr.removeActiveStatus();
	            this.activeTr = this.refs['tr' + index];
	            this.props.onTrDoubleClick && this.props.onTrDoubleClick(row, index, event);
	        }
	        // tr上的鼠标移入事件

	    }, {
	        key: 'handleTrHover',
	        value: function handleTrHover(row, index, event) {
	            this.props.onTrHover && this.props.onTrHover(row, index, event);
	        }
	        // tr上的鼠标移出事件

	    }, {
	        key: 'handleTrLeave',
	        value: function handleTrLeave(row, index, event) {
	            this.props.onTrLeave && this.props.onTrLeave(row, index, event);
	        }
	        // 整理数据，实现分组合并

	    }, {
	        key: 'sortData',
	        value: function sortData(content) {
	            var _this3 = this;

	            var tableCfg = this.tableCfg;
	            var gTags = [];
	            // 获得有效的分组字段
	            for (var i in tableCfg.tags) {
	                // 分组字段必须在前面，且中间不能有不分组字段
	                if (tableCfg.tagsGroup.indexOf(i) !== -1) {
	                    gTags.push(i);
	                } else {
	                    break;
	                }
	            }
	            var tmpContent = content;
	            gTags.map(function (tag, index) {
	                tmpContent = _this3.sortArrInArr(tmpContent, tag);
	            });
	            return this.getArrInObj(tmpContent);
	        }
	        // 遍历数组，把数据根data中tag对应的值分类装入不同的以tag值为键的对象中
	        // 这里主要实现了数据的重新排序分组

	    }, {
	        key: 'sortArrInArr',
	        value: function sortArrInArr(data, tag) {
	            var content = {};
	            if (data instanceof Array) {
	                var _iteratorNormalCompletion4 = true;
	                var _didIteratorError4 = false;
	                var _iteratorError4 = undefined;

	                try {
	                    for (var _iterator4 = data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                        var v = _step4.value;

	                        !(v[tag] in content) && (content[v[tag]] = []);
	                        content[v[tag]].push(v);
	                    }
	                } catch (err) {
	                    _didIteratorError4 = true;
	                    _iteratorError4 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                            _iterator4.return();
	                        }
	                    } finally {
	                        if (_didIteratorError4) {
	                            throw _iteratorError4;
	                        }
	                    }
	                }
	            } else {
	                for (var i in data) {
	                    content[i] = this.sortArrInArr(data[i], tag);
	                }
	            }
	            return content;
	        }
	        // 递归遍历对象，转化为数组，并记录对象层级数据
	        // 这里实现了把重新排序的数据重新组合成正常的格式，并记录需要合并的行的行数及每行需要隐藏的列

	    }, {
	        key: 'getArrInObj',
	        value: function getArrInObj(data) {
	            var isRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	            var content = [];
	            var rowSpan = [];
	            var hideDepth = [];
	            if (data instanceof Array) {
	                var _iteratorNormalCompletion5 = true;
	                var _didIteratorError5 = false;
	                var _iteratorError5 = undefined;

	                try {
	                    for (var _iterator5 = data[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                        var v = _step5.value;

	                        content.push(v);
	                        hideDepth.push(0);
	                        rowSpan.push([0]);
	                    }
	                } catch (err) {
	                    _didIteratorError5 = true;
	                    _iteratorError5 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                            _iterator5.return();
	                        }
	                    } finally {
	                        if (_didIteratorError5) {
	                            throw _iteratorError5;
	                        }
	                    }
	                }

	                rowSpan[0] = [data.length];
	            } else {
	                for (var i in data) {
	                    var _getArrInObj = this.getArrInObj(data[i], false),
	                        _getArrInObj2 = _slicedToArray(_getArrInObj, 3),
	                        result = _getArrInObj2[0],
	                        rsp = _getArrInObj2[1],
	                        dep = _getArrInObj2[2];

	                    content = content.concat(result);
	                    rowSpan = rowSpan.concat(rsp);
	                    for (var d in dep) {
	                        var val = +d === 0 ? dep[d] : dep[d] + 1;
	                        hideDepth.push(val);
	                    }
	                }
	                !isRoot && rowSpan[0].unshift(rowSpan.length);
	            }
	            return [content, rowSpan, hideDepth];
	        }
	    }, {
	        key: 'trGenerator',
	        value: function trGenerator() {
	            var _this4 = this;

	            var selectedIds = this.getSelectedIds();
	            if (_utils.Utils.empty(this.state.currPageData)) {
	                return null;
	            }
	            var tableCfg = this.tableCfg;
	            var cfg = this.cfg;
	            if (this.state.currPageData) {
	                var content = this.state.currPageData;
	                var isGroup = false;
	                var rowSpan = [];
	                var hideDepth = [];
	                // 分组功能
	                if (tableCfg && tableCfg.tagsGroup) {
	                    isGroup = true;

	                    var _sortData = this.sortData(content);

	                    var _sortData2 = _slicedToArray(_sortData, 3);

	                    content = _sortData2[0];
	                    rowSpan = _sortData2[1];
	                    hideDepth = _sortData2[2];
	                }
	                var trList = [];
	                var rows = content.map(function (row, index) {
	                    var TrRows = [];
	                    // 有disabled行时也可以全选
	                    // let checked = this.state.checkAll || !!this.rowState[row[this.key]];
	                    var checked = !!_this4.rowState[row[_this4.key]];
	                    TrRows.push(_react2.default.createElement(_TrRow2.default, { ref: 'tr' + index, obj: row, checked: checked,
	                        key: row[_this4.key], id: row[_this4.key], primaryKey: _this4.key,
	                        rowSpan: rowSpan[index], hideDepth: hideDepth[index],
	                        tableCfg: tableCfg,
	                        expandAll: _this4.state.expandAll, lineEdit: _this4.state.editTable,
	                        showTags: _this4.showTags, handleEdit: _this4.handleEdit.bind(_this4),
	                        checkRow: _this4.checkRow.bind(_this4, row[_this4.key]),
	                        setEditTableData: _this4.setEditTableData.bind(_this4),
	                        onHover: _this4.handleTrHover.bind(_this4, row, index),
	                        onLeave: _this4.handleTrLeave.bind(_this4, row, index),
	                        onClick: _this4.handleTrClick.bind(_this4, row, index, row[_this4.key]),
	                        onDoubleClick: _this4.handleTrDoubleClick.bind(_this4, row, index),
	                        expandExtraInfo: _this4.expandExtraInfo.bind(_this4) }));
	                    if (cfg && cfg.expand) {
	                        var tmpHtml = row[cfg.expand]; // data['html']
	                        var extraHTML = _this4.createMarkup(tmpHtml);
	                        var tdLen = 100;
	                        !row['ump-expand'] && (row['ump-expand'] = false);
	                        var up = _this4.state.expandAll || row['ump-expand'] ? {} : { display: 'none' };
	                        TrRows.push(_react2.default.createElement('tr', null)); // 添加额外的tr标签以使由expand产生的额外tr标签不会影响实际内容tr的奇偶数
	                        TrRows.push(_react2.default.createElement(
	                            'tr',
	                            { style: up, key: 'trexpand' + row[_this4.key], ref: 'expandtr' + row[_this4.key] },
	                            _react2.default.createElement('td', { colSpan: tdLen, dangerouslySetInnerHTML: _this4.createMarkup(tmpHtml) })
	                        ));
	                    }
	                    return TrRows;
	                });
	                return rows;
	            }
	            return null;
	        }
	    }, {
	        key: 'expandExtraInfo',
	        value: function expandExtraInfo(refK, isDown) {
	            if (isDown) {
	                this.refs[refK].style.display = '';
	            } else {
	                this.refs[refK].style.display = 'none';
	            }
	        }
	    }, {
	        key: 'expandAllExtra',
	        value: function expandAllExtra() {
	            this.setState({ expandAll: !this.state.expandAll });
	        }
	    }, {
	        key: 'createMarkup',
	        value: function createMarkup(htmlString) {
	            return {
	                __html: htmlString
	            };
	        }
	        // 从一个对象中获取需要用于过滤的关键字

	    }, {
	        key: 'getKeyDataOfObject',
	        value: function getKeyDataOfObject(obj) {
	            var val = '';
	            // 如果传入的是一个数组，则递归的遍历这个数组，拿出数组中各个对象的关键字
	            if (obj instanceof Array) {
	                var tArr = [];
	                var _iteratorNormalCompletion6 = true;
	                var _didIteratorError6 = false;
	                var _iteratorError6 = undefined;

	                try {
	                    for (var _iterator6 = obj[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                        var t = _step6.value;

	                        tArr.push(this.getKeyDataOfObject(t));
	                    }
	                } catch (err) {
	                    _didIteratorError6 = true;
	                    _iteratorError6 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                            _iterator6.return();
	                        }
	                    } finally {
	                        if (_didIteratorError6) {
	                            throw _iteratorError6;
	                        }
	                    }
	                }

	                val = tArr.join('\n');
	            } else if (obj instanceof Object) {
	                // 如果字段是个对象，则优先获取Title字段，否则获取该对象的第一个字段
	                if (obj.hasOwnProperty('title')) {
	                    val = obj['title'];
	                } else {
	                    for (var v in obj) {
	                        val = obj[v];
	                        break;
	                    }
	                }
	            } else if (obj) {
	                val = obj.toString ? obj.toString() : obj;
	            }
	            return val;
	        }
	        // 若有html，则剥掉标签

	    }, {
	        key: 'handleString',
	        value: function handleString(string) {
	            var pattern1 = /<(\w+).*?>(.*?)<\/\1>/g; // 匹配是否有闭合标签
	            if (pattern1.test(string)) {
	                return string.replace(/<([\/]?\w+).*?>/g, ''); // 剥掉所有标签
	            } else {
	                return string;
	            }
	        }
	        // 过滤输入框变化时

	    }, {
	        key: 'filterChange',
	        value: function filterChange(e) {
	            var _this5 = this;

	            var iVal = e.target.value;
	            clearTimeout(this.filterTimer);
	            this.filterTimer = setTimeout(function () {
	                _this5.dealFilterData(iVal);
	            }, 150);
	        }
	        // 过滤数据

	    }, {
	        key: 'dealFilterData',
	        value: function dealFilterData(iVal) {
	            var strVal = iVal.toLowerCase().replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ');
	            // 过滤当前页
	            var content = this.state.content;
	            if (strVal) {
	                var arrFilterData = [];
	                // 字段黑名单/白名单
	                var filterlist = this.display.filter;
	                var _iteratorNormalCompletion7 = true;
	                var _didIteratorError7 = false;
	                var _iteratorError7 = undefined;

	                try {
	                    for (var _iterator7 = content[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                        var row = _step7.value;

	                        var data = [];
	                        // 按照展示的字段过滤，自定义render字段无效，问题比较大
	                        for (var i in row) {
	                            // 如果不在白名单里或者在黑名单里，则跳过此字段
	                            if (filterlist && filterlist['whitelist'] && filterlist['whitelist'].indexOf(i) === -1) {
	                                continue;
	                            } else if (filterlist && filterlist['blacklist'] && filterlist['blacklist'].indexOf(i) !== -1) {
	                                continue;
	                            }
	                            var value = row[i];
	                            if (typeof value === 'string') {
	                                data.push(this.handleString(value));
	                            } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	                                data.push(this.getKeyDataOfObject(value));
	                            } else {
	                                data.push(value.toString ? value.toString() : value);
	                            }
	                        }

	                        var str = data.join('\n').toLowerCase();
	                        // 输入值不是字符串，而是几个词，要拆分后分别查找
	                        var result = true;
	                        var keys = strVal.split(/\s+/);
	                        var _iteratorNormalCompletion8 = true;
	                        var _didIteratorError8 = false;
	                        var _iteratorError8 = undefined;

	                        try {
	                            for (var _iterator8 = keys[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                                var key = _step8.value;

	                                // update by liuzechun@baidu.com @2016-12-11
	                                var orResult = false;
	                                // 支持指定字段过滤(如 id:123)，先选出关键词对应的字段，再对字段内容进行检索

	                                var _key$split = key.split(':'),
	                                    _key$split2 = _slicedToArray(_key$split, 2),
	                                    kWord = _key$split2[0],
	                                    kVal = _key$split2[1];
	                                // kv为当前搜索的字段值，如果没有指定字段，则kv为全部字段拼成的字符串


	                                var kv = '';
	                                if (kVal) {
	                                    // 如果关键词字段直接为数据的key
	                                    if (row[kWord]) {
	                                        kv = row[kWord];
	                                    } else {
	                                        // 否则在配置的tag里匹配每个tag的中文名
	                                        for (var _i in this.showTags) {
	                                            if (typeof this.showTags[_i] === 'string' && kWord === this.showTags[_i].toLowerCase() || _typeof(this.showTags[_i]) === 'object' && kWord === this.showTags[_i].title.toLowerCase()) {
	                                                kv = row[_i];
	                                            }
	                                        }
	                                    }
	                                    if (typeof kv !== 'string') {
	                                        kv = (typeof kv === 'undefined' ? 'undefined' : _typeof(kv)) === 'object' && kv.title || JSON.stringify(kv);
	                                    }
	                                    kv = (kv || '').toLowerCase();
	                                } else {
	                                    kv = str;
	                                    kVal = key;
	                                }
	                                // 支持使用|搜索，实现或的关系
	                                var _iteratorNormalCompletion9 = true;
	                                var _didIteratorError9 = false;
	                                var _iteratorError9 = undefined;

	                                try {
	                                    for (var _iterator9 = kVal.split(/\|+/)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                                        var k = _step9.value;

	                                        // 一旦有一个能匹配到，则结果true
	                                        (!k || kv.indexOf(k) !== -1) && (orResult = true);
	                                    }
	                                    // 如果都匹配不到，则此关键字无效，整条数据无效
	                                } catch (err) {
	                                    _didIteratorError9 = true;
	                                    _iteratorError9 = err;
	                                } finally {
	                                    try {
	                                        if (!_iteratorNormalCompletion9 && _iterator9.return) {
	                                            _iterator9.return();
	                                        }
	                                    } finally {
	                                        if (_didIteratorError9) {
	                                            throw _iteratorError9;
	                                        }
	                                    }
	                                }

	                                !orResult && (result = false);
	                            }
	                        } catch (err) {
	                            _didIteratorError8 = true;
	                            _iteratorError8 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                                    _iterator8.return();
	                                }
	                            } finally {
	                                if (_didIteratorError8) {
	                                    throw _iteratorError8;
	                                }
	                            }
	                        }

	                        if (result) {
	                            arrFilterData.push(row);
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError7 = true;
	                    _iteratorError7 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                            _iterator7.return();
	                        }
	                    } finally {
	                        if (_didIteratorError7) {
	                            throw _iteratorError7;
	                        }
	                    }
	                }

	                var curData = arrFilterData.slice(0, this.pager.pageSize);
	                var count = arrFilterData.length;
	                this.setState({
	                    currentPage: 1,
	                    currPageData: _utils.Utils.clone(curData),
	                    count: count,
	                    filter: true,
	                    displayConent: _utils.Utils.clone(arrFilterData)
	                });
	            } else if (this.pager.pageType === 'server') {
	                // 服务器端分页的content都是当前页的数据
	                this.setState({
	                    currentPage: 1,
	                    currPageData: _utils.Utils.clone(this.state.content),
	                    count: this.state.allCount,
	                    filter: false
	                });
	            } else {
	                // 前端分页, content是返回的所有数据，当前页的数据需要截取
	                var _curData = this.state.content.slice(0, this.pager.pageSize);
	                this.setState({
	                    currentPage: 1,
	                    currPageData: _utils.Utils.clone(_curData),
	                    count: this.state.allCount,
	                    filter: false
	                });
	            }
	            // 清除已勾选内容
	            this.clearSelect();
	        }
	    }, {
	        key: 'switchTags',
	        value: function switchTags(obj) {
	            // 多个checkbox的如何获取
	            // this.setState({switchTags: true});
	            this.refs.switchmodal.setState({ visible: true });
	        }
	        // 展示全部列

	    }, {
	        key: 'showAllTags',
	        value: function showAllTags() {
	            if (this.state.showAllTags === false) {
	                var tmpTags = this.showTags;
	                var memoryShowTags = {};
	                for (var i in tmpTags) {
	                    if (typeof tmpTags[i] === 'string') {
	                        memoryShowTags[i] = tmpTags[i];
	                        tmpTags[i] = {
	                            title: tmpTags[i],
	                            display: true
	                        };
	                    } else {
	                        memoryShowTags[i] = Object.assign({}, tmpTags[i], true);
	                        tmpTags[i]['display'] = true;
	                    }
	                }
	                this.memoryShowTags = memoryShowTags;
	            } else {
	                this.showTags = this.memoryShowTags;
	            }
	            this.setState({ showAllTags: !this.state.showAllTags });
	        }
	    }, {
	        key: 'refresh',
	        value: function refresh() {
	            this.refreshTable();
	        }
	    }, {
	        key: 'refreshTable',
	        value: function refreshTable() {
	            if (this.tableCfg.url) {
	                this.getData();
	            } else {
	                this.props.refresh && this.props.refresh();
	            }
	            // 清空过滤控件
	            this.clearFilter();
	            // 重置分页
	            this.setState({ currentPage: 1 });
	        }
	        // 清空过滤控件

	    }, {
	        key: 'clearFilter',
	        value: function clearFilter() {
	            this.refs.filter && this.refs.filter.setVal('');
	            this.setState({ filter: false, filterContent: [] });
	        }
	    }, {
	        key: 'setPageSize',
	        value: function setPageSize(itemParams, NULL, item) {
	            var size = itemParams.size;
	            if (!isNaN(size * 1) && size) {
	                this.pager.pageSize = size;
	                var name = this.tableCfg.name;
	                name && localStorage.setItem(name, size);
	            }
	            if (this.tableCfg.url) {
	                this.refreshTable();
	            } else {
	                var data = this.state.content.slice(0, this.pager.pageSize);
	                this.setState({
	                    currPageData: _utils.Utils.clone(data)
	                });
	            }
	            this.clearModalCon();
	        }
	    }, {
	        key: 'showSetPageSize',
	        value: function showSetPageSize() {
	            var self = this;
	            var modalCon = {
	                title: '设置分页：',
	                type: 'form'
	            };
	            var item = {
	                config: [{
	                    type: 'input',
	                    label: '分页行数',
	                    name: 'size'
	                }]
	            };
	            self.createModalCon();
	            var divCon = document.getElementById('modalDiv');
	            _reactDom2.default.render(_react2.default.createElement(_ReactModal2.default, { modalCon: modalCon, item: item,
	                handleModalClick: self.setPageSize.bind(self),
	                handleCancel: self.clearModalCon.bind(self) }), divCon);
	        }

	        /**
	         * 点击编辑按钮需要重新渲染表格且需要讲之前编辑的数据清除
	         */

	    }, {
	        key: 'editTable',
	        value: function editTable() {
	            this.editData = {};
	            this.setState({ editTable: !this.state.editTable });
	        }
	    }, {
	        key: 'switchMenuList',
	        value: function switchMenuList() {
	            /**
	             * 由于li单击时有冒泡的原理，ul上捕获之后会再出发，因为li上不需要再加入事件设置显示与否
	             */
	            this.setState({ showTableMenu: !this.state.showTableMenu });
	        }
	    }, {
	        key: 'toggleFullScreen',
	        value: function toggleFullScreen() {
	            this.setState({ fullScreen: !this.state.fullScreen });
	        }
	        /*收起table列表，只展示表头*/

	    }, {
	        key: 'toggleRetract',
	        value: function toggleRetract() {
	            this.setState({ retract: !this.state.retract });
	        }
	    }, {
	        key: 'tableHeadGenerator',
	        value: function tableHeadGenerator() {
	            var _this6 = this;

	            var title = this.tableCfg.title || '';
	            var display = this.display;
	            var result = [];
	            /* 表头标题 */
	            if (title) {
	                var icon = 'fa fa-caret-' + (this.state.retract === false ? 'down' : 'right');
	                result.push(typeof display.retract !== 'undefined' ? _react2.default.createElement(
	                    'div',
	                    { key: 'table-title', className: 'umpui-header', onClick: this.toggleRetract.bind(this) },
	                    _react2.default.createElement('i', { className: icon }),
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        title
	                    )
	                ) : _react2.default.createElement(
	                    'div',
	                    { key: 'table-title', className: 'umpui-header' },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        title
	                    )
	                ));
	            }
	            /* 以下为一些控件的生成，全部保存在divList里 */
	            var divList = [];
	            /* display.basic里面的控件视为基本操作控件 */
	            var custom = display.custom;
	            var arrBasic = display.basic;
	            // 为了美观，如果有自定义的控件，把控件放到过滤框之后，其他控件之前
	            if (custom && custom.basic) {
	                var _iteratorNormalCompletion10 = true;
	                var _didIteratorError10 = false;
	                var _iteratorError10 = undefined;

	                try {
	                    var _loop = function _loop() {
	                        var v = _step10.value;

	                        divList.push(_react2.default.createElement(
	                            'div',
	                            { key: v.name, className: 'umpui-header-extra ' + (v.name || ''),
	                                onClick: function onClick() {
	                                    return v.onClick(_this6);
	                                } },
	                            _react2.default.createElement('i', { className: v.icon }),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                v.text
	                            )
	                        ));
	                    };

	                    for (var _iterator10 = custom.basic[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	                        _loop();
	                    }
	                } catch (err) {
	                    _didIteratorError10 = true;
	                    _iteratorError10 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
	                            _iterator10.return();
	                        }
	                    } finally {
	                        if (_didIteratorError10) {
	                            throw _iteratorError10;
	                        }
	                    }
	                }
	            }
	            if (arrBasic) {
	                var basic = this.getBasicWidghts();
	                var _iteratorNormalCompletion11 = true;
	                var _didIteratorError11 = false;
	                var _iteratorError11 = undefined;

	                try {
	                    for (var _iterator11 = arrBasic[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	                        var _v = _step11.value;

	                        // 为了美观，如果有自定义的控件，把控件放到过滤框之后，其他控件之前
	                        if (_v === 'filter') {
	                            basic[_v] && divList.unshift(basic[_v]);
	                        } else {
	                            basic[_v] && divList.push(basic[_v]);
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError11 = true;
	                    _iteratorError11 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion11 && _iterator11.return) {
	                            _iterator11.return();
	                        }
	                    } finally {
	                        if (_didIteratorError11) {
	                            throw _iteratorError11;
	                        }
	                    }
	                }
	            }
	            /* display.menus视为不常用的一些控件，为了节省空间，把这些不常用的控件，放在一个下拉列表里 */
	            var gearsList = [];
	            var arrMenus = display.menus;
	            if (arrMenus) {
	                var menus = this.getMenuWidghts();
	                var _iteratorNormalCompletion12 = true;
	                var _didIteratorError12 = false;
	                var _iteratorError12 = undefined;

	                try {
	                    for (var _iterator12 = arrMenus[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
	                        var _v2 = _step12.value;

	                        menus[_v2] && gearsList.push(menus[_v2]);
	                    }
	                } catch (err) {
	                    _didIteratorError12 = true;
	                    _iteratorError12 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion12 && _iterator12.return) {
	                            _iterator12.return();
	                        }
	                    } finally {
	                        if (_didIteratorError12) {
	                            throw _iteratorError12;
	                        }
	                    }
	                }
	            }
	            if (custom && custom.menus) {
	                var _iteratorNormalCompletion13 = true;
	                var _didIteratorError13 = false;
	                var _iteratorError13 = undefined;

	                try {
	                    var _loop2 = function _loop2() {
	                        var v = _step13.value;

	                        gearsList.push(_react2.default.createElement(
	                            'li',
	                            { key: v.name, onClick: function onClick() {
	                                    return v.onClick(_this6);
	                                } },
	                            _react2.default.createElement('i', { className: v.icon }),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                v.text
	                            )
	                        ));
	                    };

	                    for (var _iterator13 = custom.menus[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
	                        _loop2();
	                    }
	                } catch (err) {
	                    _didIteratorError13 = true;
	                    _iteratorError13 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion13 && _iterator13.return) {
	                            _iterator13.return();
	                        }
	                    } finally {
	                        if (_didIteratorError13) {
	                            throw _iteratorError13;
	                        }
	                    }
	                }
	            }
	            if (gearsList.length > 0) {
	                divList.push(_react2.default.createElement(
	                    'div',
	                    { key: 'umpui-table-menu',
	                        className: 'umpui-header-extra menu ' + (this.state.showTableMenu ? 'active' : ''),
	                        onClick: this.switchMenuList.bind(this) },
	                    _react2.default.createElement('i', { className: 'fa fa-list' }),
	                    this.display.showText && _react2.default.createElement(
	                        'span',
	                        null,
	                        '\u83DC\u5355'
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        gearsList
	                    )
	                ));
	            }
	            result.push(_react2.default.createElement(
	                'div',
	                { className: 'umpui-header-extra-con' },
	                divList
	            ));
	            return result;
	        }
	    }, {
	        key: 'getBasicWidghts',
	        value: function getBasicWidghts() {
	            var obj = {};
	            var showText = this.display.showText;
	            var props = {
	                name: 'filter',
	                placeholder: '要过滤的内容',
	                onChange: this.filterChange.bind(this)
	            };
	            obj['filter'] = _react2.default.createElement(
	                'div',
	                { className: 'umpui-header-extra filter no-hover', key: 'umpui-header-extra' },
	                _react2.default.createElement('i', { className: 'fa fa-filter' }),
	                _react2.default.createElement(_ReactInput2.default, _extends({}, props, { ref: 'filter' }))
	            );
	            var arrList = [];
	            if (this.state.editTable) {
	                arrList.push(_react2.default.createElement(
	                    'ul',
	                    { className: 'umpui-edit-cs' },
	                    _react2.default.createElement(
	                        'li',
	                        { onClick: this.cancelEdit.bind(this, null), key: 'cancelEdit' },
	                        _react2.default.createElement('i', { className: 'fa fa-undo' }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'umpui-span-left' },
	                            '\u53D6\u6D88'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { key: '\'saveEdit\'' },
	                        _react2.default.createElement(
	                            _antd.Popconfirm,
	                            { title: '\u786E\u5B9A\u4FEE\u6539\u5417?',
	                                onConfirm: this.confirmSaveEdit.bind(this),
	                                onCancel: this.cancelEdit.bind(this) },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                _react2.default.createElement('i', { className: 'fa fa-floppy-o' }),
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'umpui-span-left' },
	                                    '\u4FDD\u5B58'
	                                )
	                            )
	                        )
	                    )
	                ));
	            } else {
	                arrList.push(_react2.default.createElement(
	                    'div',
	                    { className: 'umpui-edit', onClick: this.editTable.bind(this), key: 'editTable' },
	                    _react2.default.createElement('i', { className: 'fa fa-pencil-square-o' }),
	                    showText && _react2.default.createElement(
	                        'span',
	                        null,
	                        '\u7F16\u8F91'
	                    )
	                ));
	            }
	            obj['editTable'] = _react2.default.createElement(
	                'div',
	                { className: 'umpui-header-extra', key: 'umpui-table-edit' },
	                arrList
	            );
	            obj['refresh'] = _react2.default.createElement(
	                'div',
	                { className: 'umpui-header-extra', key: 'refresh',
	                    onClick: this.refreshTable.bind(this) },
	                _react2.default.createElement('i', { className: 'fa fa-refresh', title: '\u5237\u65B0' }),
	                showText && _react2.default.createElement(
	                    'span',
	                    null,
	                    '\u5237\u65B0'
	                )
	            );
	            if (!this.state.fullScreen) {
	                obj['fullScreen'] = _react2.default.createElement(
	                    'div',
	                    { className: 'umpui-header-extra', key: 'fullscreen',
	                        onClick: this.toggleFullScreen.bind(this) },
	                    _react2.default.createElement('i', { className: 'fa fa-arrows-alt' }),
	                    showText && _react2.default.createElement(
	                        'span',
	                        null,
	                        '\u5168\u5C4F'
	                    )
	                );
	            } else {
	                obj['fullScreen'] = _react2.default.createElement(
	                    'div',
	                    { className: 'umpui-header-extra', key: 'exitfullscreen',
	                        onClick: this.toggleFullScreen.bind(this) },
	                    _react2.default.createElement('i', { className: 'fa fa-compress' }),
	                    showText && _react2.default.createElement(
	                        'span',
	                        null,
	                        '\u9000\u51FA\u5168\u5C4F'
	                    )
	                );
	            }
	            obj['export'] = _react2.default.createElement(
	                'div',
	                { className: 'umpui-header-extra', key: 'export' },
	                _react2.default.createElement(
	                    _export2.default,
	                    this.exportConfig,
	                    _react2.default.createElement('i', { className: 'fa fa-download' }),
	                    showText && _react2.default.createElement(
	                        'span',
	                        null,
	                        '\u5BFC\u51FA'
	                    )
	                )
	            );
	            obj['switchTags'] = _react2.default.createElement(
	                'div',
	                { className: 'umpui-header-extra', key: 'switchTags',
	                    onClick: this.switchTags.bind(this) },
	                _react2.default.createElement('i', { className: 'fa fa-cogs', title: '\u663E\u793A\u5217' }),
	                showText && _react2.default.createElement(
	                    'span',
	                    null,
	                    '\u5C55\u793A\u5217'
	                )
	            );
	            obj['showAllTags'] = _react2.default.createElement(
	                'div',
	                { key: 'showAllTags',
	                    className: 'umpui-header-extra ' + (this.state.showAllTags ? 'active' : ''),
	                    onClick: this.showAllTags.bind(this) },
	                _react2.default.createElement('i', { className: 'fa fa-eye', title: '\u5C55\u793A\u5168\u90E8\u5217' }),
	                showText && _react2.default.createElement(
	                    'span',
	                    null,
	                    '\u5C55\u793A\u5168\u90E8\u5217'
	                )
	            );
	            obj['setPageSize'] = _react2.default.createElement(
	                'div',
	                { className: 'umpui-header-extra', key: 'switchTags',
	                    onClick: this.showSetPageSize.bind(this) },
	                _react2.default.createElement('i', { className: 'fa fa-cogs', title: '\u5206\u9875\u8BBE\u7F6E' }),
	                showText && _react2.default.createElement(
	                    'span',
	                    null,
	                    '\u5206\u9875\u8BBE\u7F6E'
	                )
	            );
	            return obj;
	        }
	    }, {
	        key: 'getMenuWidghts',
	        value: function getMenuWidghts() {
	            var obj = {};
	            obj['fullScreen'] = _react2.default.createElement(
	                'li',
	                { key: 'fullScreen1', onClick: this.toggleFullScreen.bind(this) },
	                _react2.default.createElement('i', { className: 'fa fa-arrows-alt' }),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    '\u5168\u5C4F\u663E\u793A'
	                )
	            );
	            obj['switchTags'] = _react2.default.createElement(
	                'li',
	                { key: 'switchTags1', onClick: this.switchTags.bind(this) },
	                _react2.default.createElement('i', { className: 'fa fa-cog' }),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    '\u5C55\u793A\u5B57\u6BB5'
	                )
	            );
	            obj['export'] = _react2.default.createElement(
	                'li',
	                { key: 'export1' },
	                _react2.default.createElement(
	                    _export2.default,
	                    this.exportConfig,
	                    _react2.default.createElement('i', { className: 'fa fa-download' }),
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        '\u5BFC\u51FA\u6570\u636E'
	                    )
	                )
	            );
	            obj['setPageSize'] = _react2.default.createElement(
	                'li',
	                { key: 'setPageSize1', onClick: this.showSetPageSize.bind(this) },
	                _react2.default.createElement('i', { className: 'fa fa-cogs' }),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    '\u5206\u9875\u8BBE\u7F6E'
	                )
	            );
	            obj['refresh'] = _react2.default.createElement(
	                'li',
	                { key: 'refresh1', onClick: this.refreshTable.bind(this) },
	                _react2.default.createElement('i', { className: 'fa fa-refresh' }),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    '\u5237\u65B0\u8868\u683C'
	                )
	            );
	            return obj;
	        }
	    }, {
	        key: 'sortColumn',
	        value: function sortColumn(sortType, field) {
	            var column = this.tableCfg.tags[field];
	            // 默认排序是大小
	            if (column['sort'] === true) {
	                var allData = this.state.content.sort(function (lineOne, lineTwo) {
	                    var asc = lineOne[field] < lineTwo[field] ? -1 : lineOne[field] > lineTwo[field] ? 1 : 0;
	                    return sortType ? asc : -asc;
	                });
	                var currPageData = allData.slice(0, this.pager.pageSize);
	                this.setState({
	                    content: allData,
	                    currPageData: currPageData,
	                    flag: ++this.state.flag
	                });
	            } else if (typeof column['sort'] === 'function') {
	                var _allData = this.state.content.sort(function (lineOne, lineTwo) {
	                    var sortVal = column['sort'](lineOne, lineTwo);
	                    return sortType ? sortVal : -sortVal;
	                });
	                var _currPageData = _allData.slice(0, this.pager.pageSize);
	                this.setState({
	                    content: _allData,
	                    currPageData: _currPageData,
	                    flag: ++this.state.flag
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'umpui-table panel ' + (this.tableCfg.className ? this.tableCfg.className : '') + (this.state.fullScreen ? ' umpui-fullscreen' : '') + (this.state.retract ? ' retract' : '') },
	                _react2.default.createElement(_ReactModal2.default, { ref: 'switchmodal', modalCon: { title: '展示字段：', type: 'checkbox' }, visible: false,
	                    item: this.showTags, handleModalClick: this.setShowTags.bind(this) }),
	                this.cfg.header !== false && _react2.default.createElement(
	                    'div',
	                    { className: 'panel-heading' },
	                    this.tableHeadGenerator()
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'panel-body' },
	                    _react2.default.createElement(
	                        _antd.Spin,
	                        { spinning: this.state.spinning, tip: this.state.spinTip },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'table-responsive' },
	                            _react2.default.createElement(
	                                'table',
	                                { className: this.cfg.tableClass },
	                                _react2.default.createElement(_ThRow2.default, { tableCfg: this.tableCfg, checked: this.state.checkAll,
	                                    showTags: this.showTags, checkAll: this.checkAll.bind(this),
	                                    expandAll: this.state.expandAll,
	                                    expandAllExtra: this.expandAllExtra.bind(this),
	                                    sortColumn: this.sortColumn.bind(this),
	                                    changeColumnOrder: this.changeColumnOrder.bind(this) }),
	                                _react2.default.createElement(
	                                    'tbody',
	                                    null,
	                                    this.trGenerator()
	                                )
	                            )
	                        )
	                    ),
	                    this.pager && _react2.default.createElement(_antd.Pagination, _extends({}, this.pager, { current: this.state.currentPage,
	                        total: this.state.count,
	                        onChange: this.handlePageChange.bind(this) }))
	                )
	            );
	        }
	    }]);

	    return Table;
	}(_component.BaseComponent);

	exports.default = Table;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _antd = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Input组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author luyongfang
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ReactInput = function (_React$Component) {
	    _inherits(ReactInput, _React$Component);

	    function ReactInput(props) {
	        _classCallCheck(this, ReactInput);

	        var _this = _possibleConstructorReturn(this, (ReactInput.__proto__ || Object.getPrototypeOf(ReactInput)).call(this, props));

	        _this.state = {
	            val: props.defaultValue ? props.defaultValue : ''
	        };
	        return _this;
	    }

	    _createClass(ReactInput, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (typeof nextProps.value !== 'undefined') {
	                this.setState({ val: nextProps.value });
	            }
	        }
	    }, {
	        key: 'setVal',
	        value: function setVal(val) {
	            this.setState({ val: val });
	        }
	    }, {
	        key: 'getValue',
	        value: function getValue() {
	            return this.state.val;
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(e) {
	            e.stopPropagation();
	            var iVal = e.target.value;
	            /*if (this.props.type !== 'textarea') {
	                iVal =  this.refs[this.props.name].value;
	            } else {
	                iVal =  e.target.value;
	            }*/
	            this.setState({ val: iVal });
	            this.props.handleChange && this.props.handleChange(iVal);
	        }
	        /*render() {
	            // let val = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
	            let className = 'form-control input-sm datatable_input_col_search';
	            return this.props.type !== 'textarea'
	                ? <input name={this.props.name} value={this.state.val} type={this.props.type}
	                    ref={this.props.name} maxLength={this.props.maxlength} onChange={this.handleChange.bind(this)}
	                    placeholder={this.props.placeholder} className={className}
	                   />
	                : <Input name={this.props.name} type={this.props.type} autosize={{minRows: 3}}
	                    ref={this.props.name} maxLength={this.props.maxlength}
	                    value={this.state.val} onChange={this.handleChange.bind(this)}
	                    placeholder={this.props.placeholder}/>;
	        }*/
	        // 想更换成antd的Input,影响到的地方比较多，后面再做调整

	    }, {
	        key: 'render',
	        value: function render() {
	            var val = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
	            var className = 'form-control input-sm datatable_input_col_search';
	            return _react2.default.createElement(_antd.Input, { className: className, name: this.props.name, type: this.props.type,
	                ref: this.props.name, maxLength: this.props.maxlength,
	                value: this.state.val, onChange: this.handleChange.bind(this),
	                placeholder: this.props.placeholder });
	        }
	    }]);

	    return ReactInput;
	}(_react2.default.Component);

	exports.default = ReactInput;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _antd = __webpack_require__(14);

	var _ReactInput = __webpack_require__(169);

	var _ReactInput2 = _interopRequireDefault(_ReactInput);

	__webpack_require__(171);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file ReactModal-Form表单  适用于弹出层的表单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author luyongfang@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */


	var Immutable = __webpack_require__(173);
	var Option = _antd.Select.Option;

	var ReactModal = function (_React$Component) {
	    _inherits(ReactModal, _React$Component);

	    function ReactModal(props) {
	        _classCallCheck(this, ReactModal);

	        var _this = _possibleConstructorReturn(this, (ReactModal.__proto__ || Object.getPrototypeOf(ReactModal)).call(this, props));

	        _this.state = {
	            errMsg: [],
	            visible: typeof props.visible === 'undefined' ? true : props.visible,
	            height: '100%'
	        };
	        _this.params = {};
	        return _this;
	    }

	    _createClass(ReactModal, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.props = null;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // 当传递了新的props时，将现在存储的参数清空
	            if (!Immutable.is(Immutable.fromJS(this.props.item), Immutable.fromJS(nextProps.item))) {
	                this.params = {};
	            }
	            if (nextProps.visible !== this.state.visible) {
	                this.setState({ visible: nextProps.visible });
	            }
	        }
	    }, {
	        key: 'validateValues',
	        value: function validateValues(dex, val) {
	            var item = this.props.item;
	            if (item && Array.isArray(item.config) && item.config[dex] && !item.config[dex]['isEmpty'] && val === '') {
	                return item.config[dex]['label'] + '不能为空';
	            }
	            return false;
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(ref, dex, val, dataString) {
	            if (dex === 'checkbox') {
	                this.params[ref]['display'] = val;
	                this.forceUpdate();
	            } else {
	                var sVal = !dataString ? val : dataString;
	                var strMsg = this.validateValues(dex, sVal);
	                strMsg && (this.state.errMsg[ref] = strMsg);
	                !strMsg && this.state.errMsg[ref] && delete this.state.errMsg[ref];
	                this.params[ref] = sVal;
	            }
	        }
	    }, {
	        key: 'getFormValues',
	        value: function getFormValues() {
	            if (this.props.modalCon.type === 'checkbox') {
	                var ckObj = {};
	                for (var key in this.params) {
	                    ckObj[key] = this.params[key]['display'];
	                }
	                return ckObj;
	            }
	            return this.params;
	        }
	    }, {
	        key: 'formClick',
	        value: function formClick(event) {
	            event.stopPropagation();
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(actionType) {
	            var params = this.params;
	            var oriParams = {};
	            var ckObj = null;
	            if (actionType === 'confirm') {
	                var arrMsg = [];
	                for (var k in this.state.errMsg) {
	                    if (this.state.errMsg.hasOwnProperty(k)) {
	                        arrMsg.push(this.state.errMsg[k]);
	                    }
	                }
	                if (arrMsg.length > 0) {
	                    return true;
	                }
	                if (this.props.modalCon.type === 'checkbox') {
	                    ckObj = {};
	                    for (var key in params) {
	                        ckObj[key] = params[key]['display'];
	                    }
	                }
	                // 将原来的item和现在进行融合
	                if (this.props.data) {
	                    this.params = Object.assign({}, this.props.data, ckObj ? ckObj : this.params, true);
	                }
	                this.props.handleModalClick && this.props.handleModalClick(this.params, ckObj ? ckObj : this.props.data, this.props.item);
	                this.setState({ visible: false, errMsg: [] });
	            } else {
	                this.props.handleCancel && this.props.handleCancel(this.props.item);
	                this.setState({ visible: false, errMsg: [] });
	            }
	        }
	    }, {
	        key: 'generateModal',
	        value: function generateModal() {
	            var self = this;
	            switch (this.props.modalCon.type) {
	                case 'tip':
	                case 'warning':
	                    return _react2.default.createElement(
	                        'div',
	                        { className: 'umpui-tip' },
	                        this.props.modalCon.msg
	                    );
	                    break;
	                case 'form':
	                    var liList = [];
	                    this.props.item.config.forEach(function (item, dex) {
	                        var refKey = 'modal_' + item.name;
	                        var defaultValue = item.defaultValue;
	                        // 设置默认值
	                        self.handleChange(item.name, dex, defaultValue);
	                        switch (item.type) {
	                            case 'select':
	                                var opList = [];
	                                for (var i = 0; i < item.map.length; i++) {
	                                    opList.push(_react2.default.createElement(
	                                        Option,
	                                        { key: 'option' + i, value: item.map[i]['value'] },
	                                        item.map[i]['label']
	                                    ));
	                                }
	                                liList.push(_react2.default.createElement(
	                                    'li',
	                                    { key: 'modal' + dex, type: 'select', 'data-dex': dex },
	                                    _react2.default.createElement(
	                                        'label',
	                                        null,
	                                        item.label
	                                    ),
	                                    _react2.default.createElement(
	                                        _antd.Select,
	                                        { optionFilterProp: 'children', notFoundContent: '\u65E0\u6CD5\u627E\u5230',
	                                            ref: item.name, name: item.name, defaultValue: defaultValue,
	                                            onChange: self.handleChange.bind(self, item.name, dex) },
	                                        opList
	                                    )
	                                ));
	                                break;
	                            case 'input':
	                                liList.push(_react2.default.createElement(
	                                    'li',
	                                    { key: 'modal' + dex, type: 'input', 'data-dex': dex },
	                                    _react2.default.createElement(
	                                        'label',
	                                        null,
	                                        item.label
	                                    ),
	                                    _react2.default.createElement(_ReactInput2.default, { ref: item.name, name: item.name, defaultValue: defaultValue,
	                                        value: item.defaultVal, placeholder: item.desc,
	                                        handleChange: self.handleChange.bind(self, item.name, dex) })
	                                ));
	                                break;
	                            case 'datetime':
	                                liList.push(_react2.default.createElement(
	                                    'li',
	                                    { key: 'modal' + dex, type: 'datetime', 'data-dex': dex },
	                                    _react2.default.createElement(
	                                        'label',
	                                        null,
	                                        item.label
	                                    ),
	                                    _react2.default.createElement(_antd.DatePicker, { showTime: true, format: 'yyyy-MM-dd HH:mm:ss', name: item.name,
	                                        ref: item.name, placeholder: '\u8BF7\u9009\u62E9\u65F6\u95F4',
	                                        onChange: self.handleChange.bind(self, item.name, dex) })
	                                ));
	                                break;
	                            default:
	                                break;
	                        }
	                    });
	                    return _react2.default.createElement(
	                        'div',
	                        null,
	                        this.props.modalCon.msg ? _react2.default.createElement(
	                            'div',
	                            { className: 'umpui-tip' },
	                            this.props.modalCon.msg
	                        ) : '',
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'umpui-formlist', onClick: this.formClick.bind(this) },
	                            liList
	                        )
	                    );
	                    break;
	                case 'checkbox':
	                    // item是tags,其他传递也这样传递,k => v v is string or object,if object no display must be pass false
	                    var liList2 = [];
	                    var typeDef = Object.prototype.toString;
	                    for (var key in this.props.item) {
	                        var value = this.props.item[key];
	                        !self.params[key] && (self.params[key] = {});
	                        var isObject = typeDef.call(value) === '[object Object]';
	                        // 先判断props是否传递了display, 如果传递了则取值display否则，默认为true
	                        var checked = isObject && value.display !== undefined ? value.display : true;
	                        // 如果是新传递item，则self.params为{}, 会采用props传递的，如果没有更新item, 则采用params中的display
	                        checked = self.params[key]['display'] !== undefined ? self.params[key]['display'] : checked;
	                        var fieldParams = {
	                            title: isObject ? value.title : value,
	                            display: checked
	                        };
	                        Object.assign(self.params[key], isObject ? value : {}, fieldParams);
	                        var label = isObject ? value.title : value;
	                        liList2.push(_react2.default.createElement(
	                            'li',
	                            { key: 'modal' + key },
	                            _react2.default.createElement(
	                                _antd.Checkbox,
	                                { ref: key, key: key, defaultChecked: checked,
	                                    handleChange: self.handleChange.bind(self, key, 'checkbox') },
	                                label
	                            )
	                        ));
	                    }
	                    // let dire = this.props.modalCon.direction;
	                    // let clsName = dire && dire === 'horizontal' ? 'umpui-horizontal umpui-ckList'
	                    //     : 'umpui-vertical umpui-ckList';
	                    return _react2.default.createElement(
	                        'div',
	                        null,
	                        this.props.modalCon.msg ? _react2.default.createElement(
	                            'div',
	                            { className: 'umpui-tip' },
	                            this.props.modalCon.msg
	                        ) : '',
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'umpui-ckList' },
	                            liList2
	                        )
	                    );
	                    break;
	                default:
	                    break;
	            }
	        }
	    }, {
	        key: 'generateBtn',
	        value: function generateBtn() {
	            var btnList = [];
	            var self = this;
	            var footerCfg = this.props.footer;
	            if (footerCfg) {
	                if (footerCfg.ok) {
	                    var text = footerCfg.ok.text || '确定';
	                    var cfg = Object.assign({}, {
	                        type: 'primary',
	                        onClick: this.handleClick.bind(self, 'confirm')
	                    }, footerCfg.ok);
	                    btnList.push(_react2.default.createElement(
	                        _antd.Button,
	                        _extends({ key: 'onOk' }, cfg),
	                        text
	                    ));
	                }
	                if (footerCfg.cancel) {
	                    var _text = footerCfg.cancel.text || '取消';
	                    var _cfg = Object.assign({}, {
	                        type: 'default',
	                        onClick: this.handleClick.bind(self, 'cancel')
	                    }, footerCfg.cancel);
	                    btnList.push(_react2.default.createElement(
	                        _antd.Button,
	                        _extends({ key: 'onCancel' }, _cfg),
	                        _text
	                    ));
	                }
	            } else {
	                switch (this.props.modalCon.type) {
	                    case 'warning':
	                        btnList.push(_react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', key: 'onOk',
	                                onClick: this.handleClick.bind(self, 'cancel') },
	                            '\u786E\u5B9A'
	                        ));
	                        break;
	                    default:
	                        btnList.push(_react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary', key: 'onOk',
	                                onClick: this.handleClick.bind(self, 'confirm') },
	                            '\u786E\u5B9A'
	                        ));
	                        btnList.push(_react2.default.createElement(
	                            _antd.Button,
	                            { type: 'default', key: 'onCancel',
	                                onClick: this.handleClick.bind(self, 'cancel') },
	                            '\u53D6\u6D88'
	                        ));
	                        break;
	                }
	            }
	            return btnList;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var title = this.props.modalCon && this.props.modalCon.title;
	            return _react2.default.createElement(
	                _antd.Modal,
	                { title: title || 'Modal', visible: this.state.visible,
	                    okText: '\u786E\u5B9A', cancelText: '\u53D6\u6D88',
	                    onOk: this.handleClick.bind(this, 'confirm'),
	                    onCancel: this.handleClick.bind(this, 'cancel'),
	                    footer: this.generateBtn() },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'umpui-modal' },
	                    this.generateModal()
	                )
	            );
	        }
	    }]);

	    return ReactModal;
	}(_react2.default.Component);

	exports.default = ReactModal;

/***/ }),
/* 171 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 172 */,
/* 173 */
/***/ (function(module, exports) {

	module.exports = window.DLL.Immutable;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(175);

	var _antd = __webpack_require__(14);

	var _utils = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/**
	 * @file 简易表格组件
	 * @author luyongfang@baidu.com
	 * */
	/* eslint-disable fecs-camelcase */


	var CheckboxGroup = _antd.Checkbox.Group;
	var RadioGroup = _antd.Radio.Group;
	var Option = _antd.Select.Option;

	var TrRow = function (_React$Component) {
	    _inherits(TrRow, _React$Component);

	    function TrRow(props) {
	        _classCallCheck(this, TrRow);

	        var _this = _possibleConstructorReturn(this, (TrRow.__proto__ || Object.getPrototypeOf(TrRow)).call(this, props));

	        _this.key = _this.props.primaryKey;
	        _this.state = {
	            // checked: this.props.checked,
	            lineData: _this.props.obj,
	            isDown: _this.props.expandAll || false,
	            active: false
	        };
	        return _this;
	    }

	    _createClass(TrRow, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (!_utils.Utils.equals(nextProps.obj, this.props.obj)) {
	                this.key = nextProps.primaryKey;
	                this.setState({
	                    lineData: nextProps.obj
	                });
	            }
	        }
	    }, {
	        key: 'checkIt',
	        value: function checkIt(e) {
	            e = e || window.event;
	            // e.stopPropagation();
	            // e.preventDefault();
	            this.props.checkRow && this.props.checkRow();
	            return;
	        }

	        /**
	         * 因为是多行编辑，所以编辑之后的数据应该统一在table上存储
	         * 同时需要记录编辑的是哪行
	         * 编辑之后的数据，都是保存的value而不是展示的label等
	         * stopPropagation 防止冒泡到tr上触发checkbox的选择事件
	         * @param {string} field 编辑的是哪个字段
	         * @param {string} fieldValue 编辑之后的字段值
	         * @param {Object} e event对象
	         */

	    }, {
	        key: 'setLineData',
	        value: function setLineData(field, fieldValue, e) {
	            e = e || window.event;
	            e.stopPropagation();
	            e.preventDefault();
	            var objNewData = {};
	            objNewData[field] = fieldValue;
	            var objNewLineData = Object.assign({}, this.state.lineData, objNewData);
	            this.props.setEditTableData && this.props.setEditTableData(this.props.id, objNewLineData);
	            this.setState({ lineData: objNewLineData });
	        }

	        /**
	         * radio/inpu没有直接获取事件之后的值，需要通过e获取，封装一层
	         * @param {string} field  要编辑的字段
	         * @param {Object} e Event对象
	         */

	    }, {
	        key: 'setEditData',
	        value: function setEditData(field, e) {
	            e = e || window.event;
	            e.stopPropagation();
	            e.preventDefault();
	            var value = e.target.value;
	            this.setLineData(field, value);
	        }
	        // 从一个对象中获取需要展示的关键字

	    }, {
	        key: 'getKeyDataOfObject',
	        value: function getKeyDataOfObject(obj) {
	            var val = '-';
	            // 如果传入的是一个数组，则递归的遍历这个数组，拿出数组中各个对象的关键字
	            if (obj instanceof Array) {
	                var tArr = [];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var t = _step.value;

	                        tArr.push(this.getKeyDataOfObject(t));
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                val = tArr.join(', ');
	            } else if (obj instanceof Object) {
	                // 如果字段是个对象，则优先获取Title字段，否则将该对象转化为json字符串
	                if (obj.hasOwnProperty('title')) {
	                    val = obj['title'];
	                } else {
	                    val = JSON.stringify(obj);
	                }
	            } else if (obj) {
	                val = obj.toString ? obj.toString() : obj;
	            }
	            return val;
	        }
	    }, {
	        key: 'generatorRow',
	        value: function generatorRow() {
	            var tdList = [];
	            var self = this;
	            var data = self.state.lineData;
	            // rowspan，合并行属性
	            var rowSpan = this.props.rowSpan || 0;
	            var hideDepth = this.props.hideDepth || 0;
	            // 当前行是灰色的,不可以进行编辑
	            var disabled = data['disabled'] ? data['disabled'] : false;
	            // 标签计数器
	            var index = 0;
	            for (var k in self.props.showTags) {
	                // 由于有合并行，所以根据hideDepth跳过前面几列的展示
	                if (hideDepth > index && ++index) {
	                    continue;
	                }
	                // 给td加上rowSpan以合并行
	                var rowspan = {};
	                if (index - hideDepth >= 0) {
	                    rowSpan[index] && (rowspan = { rowSpan: rowSpan[index] });
	                    index++;
	                }
	                var v = self.props.showTags[k];
	                // let tdData = data[k] || '--';
	                var tdData = data[k] !== null && typeof data[k] !== 'undefined' && data[k] !== '' ? data[k] : '-';
	                // 给 td 上添加自定义的 style 和 className
	                var className = '';
	                var style = {};
	                if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object') {
	                    if (v.className) {
	                        if (typeof v.className === 'function') {
	                            className += v.className(tdData, data);
	                        } else if (typeof v.className === 'string') {
	                            className += v.className;
	                        }
	                    }
	                    if (v.style) {
	                        if (typeof v.style === 'function') {
	                            Object.assign(style, v.style(tdData, data));
	                        } else if (_typeof(v.style) === 'object') {
	                            Object.assign(style, v.style);
	                        }
	                    }
	                }
	                style = {
	                    className: className,
	                    style: style
	                };
	                if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v.display === false) {
	                    continue;
	                } else if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v['type']) {
	                    var elliClass = v['ellipsis'] ? ' ellipsis' : '';
	                    style.className += elliClass;
	                    switch (v.type) {
	                        case 'duration':
	                            var timeDiff = (+new Date() - +new Date(Date.parse(tdData.replace(/-/g, '/')))) / 1000;
	                            var dayTime = Math.floor(timeDiff / (24 * 3600));
	                            var hourTime = Math.floor(timeDiff % (24 * 3600) / 3600);
	                            var minuteTime = Math.floor(timeDiff % (24 * 3600) % 3600 / 60);
	                            var secTime = Math.floor(timeDiff % (24 * 3600) % 3600 % 60);
	                            var timeArr = [];

	                            dayTime > 0 && timeArr.push(dayTime + '天');
	                            hourTime > 0 && timeArr.push(hourTime + '时');
	                            minuteTime > 0 && timeArr.push(minuteTime + '分');

	                            dayTime === 0 && hourTime === 0 && minuteTime === 0 && secTime > 0 && timeArr.push(secTime + '秒');
	                            tdData = timeArr.join('');
	                            (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v['render'] !== undefined && (tdData = v.render(data[k], data));
	                            tdList.push(_react2.default.createElement(
	                                'td',
	                                _extends({}, style, rowspan, { key: k, 'data-key': k }),
	                                tdData
	                            ));
	                            break;
	                        /*case 'edit':
	                            let tdDiv = <td {...rowspan} key={k} data-key={k} ref={k}
	                                    onClick={self.props.handleEdit.bind(null, data, k, data[k])}>
	                                    <span className="fa fa-pencil"></span>{data[k] ? data[k] : ''}</td>;
	                            if (elliClass) {
	                                tdDiv = <Popover content={data[k]}>{tdDiv}</Popover>;
	                            }
	                            tdList.push(tdDiv);
	                            break;*/
	                        case 'JSON':
	                            var json = JSON.stringify(tdData, null, 2);
	                            var html = self.syntaxHighlight(json);
	                            var content = self.createMarkup(html);
	                            tdList.push(_react2.default.createElement(
	                                'td',
	                                _extends({}, style, rowspan, { key: k, 'data-key': k }),
	                                _react2.default.createElement(
	                                    _antd.Popover,
	                                    { content: _react2.default.createElement('pre', { className: 'json', dangerouslySetInnerHTML: content }) },
	                                    _react2.default.createElement('pre', { className: 'json', dangerouslySetInnerHTML: content })
	                                )
	                            ));
	                            break;
	                        case 'html':
	                            tdList.push(_react2.default.createElement('td', _extends({}, style, rowspan, { key: k, 'data-key': k,
	                                dangerouslySetInnerHTML: self.createMarkup(tdData) })));
	                            break;
	                        // 默认不能不输出啊，页面会乱掉的
	                        default:
	                            tdList.push(_react2.default.createElement(
	                                'td',
	                                _extends({}, style, rowspan, { key: k, 'data-key': k }),
	                                this.getKeyDataOfObject(tdData)
	                            ));
	                            break;
	                    }
	                } else {

	                    var _elliClass = (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v['ellipsis'] ? ' ellipsis' : '';
	                    style.className += _elliClass;
	                    (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v['render'] !== undefined && (tdData = v.render(data[k], data));
	                    /**
	                     * 1. 是否可编辑edit: true/false
	                     * 2. 当前编辑字段的类型: text/radio/checkbox/select
	                     * 3. text => input
	                     *    radio => 只有1个 boolean选择是或者否
	                     *    radioGroup => group组选择
	                     *    checkbox => 可能有多个选择-配置map[]
	                     *    select => 提供map
	                     * 4. tr处在disabled的状态下是不可以进行编辑的,且展示的字段是中文不能够是值
	                     *    这里的编辑配置只适合数据比较少的情况，前端可以配置的
	                     *    对于编辑项的配置比较复杂的情况不适合，如下拉框好长好长的需要从后端获取的
	                     *    对于从后端获取的option的这种情况可以在ajax请求后更改tableCfg重新渲染获得-待做感觉不太好
	                     */
	                    var arrEdit = [];
	                    var newTdData = null;
	                    if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v['editCfg'] && v['editCfg']['edit']) {
	                        switch (v.editCfg['elemType']) {
	                            case 'text':
	                                if (disabled || !this.props.lineEdit) {
	                                    newTdData = tdData;
	                                    break;
	                                }
	                                arrEdit.push(_react2.default.createElement(_antd.Input, { defaultValue: tdData,
	                                    onChange: this.setEditData.bind(this, k) }));
	                                break;
	                            case 'radio':
	                                if (disabled || !this.props.lineEdit) {
	                                    newTdData = tdData;
	                                    break;
	                                }
	                                var arrValues = ['是', 1, false, '1'];
	                                var arrAgainstValues = ['否', 0, true, '0'];
	                                var checked = false;
	                                var bSwitchVal = -1;
	                                var iDex = arrValues.indexOf(tdData);
	                                if (iDex !== -1) {
	                                    checked = true;
	                                    bSwitchVal = arrAgainstValues[iDex];
	                                } else {
	                                    iDex = arrAgainstValues.indexOf(tdData);
	                                    bSwitchVal = arrValues[iDex];
	                                }
	                                arrEdit.push(_react2.default.createElement(_antd.Radio, { defaultChecked: checked, checked: checked,
	                                    onClick: this.setLineData.bind(this, k, bSwitchVal) }));
	                                break;
	                            case 'checkbox':
	                                /**
	                                 * defaultValue对应options中的label字段
	                                 * checkbox可以多选，就说明值可以是多个，这里多个值用逗号进行分割
	                                 */
	                                var arrOptions = v['editCfg']['options'];
	                                var arrData = tdData.split(',');
	                                var arrDefv = [];
	                                var arrDefL = [];
	                                var _iteratorNormalCompletion2 = true;
	                                var _didIteratorError2 = false;
	                                var _iteratorError2 = undefined;

	                                try {
	                                    for (var _iterator2 = arrOptions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                        var option = _step2.value;

	                                        if (arrData.indexOf(option['value'].trim()) !== -1) {
	                                            arrDefv.push(option['value']);
	                                            arrDefL.push(option['label']);
	                                        }
	                                    }
	                                } catch (err) {
	                                    _didIteratorError2 = true;
	                                    _iteratorError2 = err;
	                                } finally {
	                                    try {
	                                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                            _iterator2.return();
	                                        }
	                                    } finally {
	                                        if (_didIteratorError2) {
	                                            throw _iteratorError2;
	                                        }
	                                    }
	                                }

	                                if (disabled || !this.props.lineEdit) {
	                                    newTdData = arrDefL.join(',');
	                                    break;
	                                }
	                                arrEdit.push(_react2.default.createElement(CheckboxGroup, { options: arrOptions, defaultValue: arrDefv,
	                                    onClick: this.setLineData.bind(this, k) }));
	                                break;
	                            case 'radioGroup':
	                                /**
	                                 * radioGroup只能选择一个, 大于等于2个可选项的情况
	                                 * 后端返回的data中的值是value而不是展示的label
	                                 */
	                                var arrGOptions = v['editCfg']['options'];
	                                var tdLabel = null;
	                                var arrRadioList = [];
	                                var _iteratorNormalCompletion3 = true;
	                                var _didIteratorError3 = false;
	                                var _iteratorError3 = undefined;

	                                try {
	                                    for (var _iterator3 = arrGOptions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                                        var _option = _step3.value;

	                                        var strKey = _option['value'] + data[this.key];
	                                        tdData === _option['value'] && (tdLabel = _option['label']);
	                                        arrRadioList.push(_react2.default.createElement(
	                                            _antd.Radio,
	                                            { key: strKey, value: _option['value'] },
	                                            _option['label']
	                                        ));
	                                    }
	                                } catch (err) {
	                                    _didIteratorError3 = true;
	                                    _iteratorError3 = err;
	                                } finally {
	                                    try {
	                                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                                            _iterator3.return();
	                                        }
	                                    } finally {
	                                        if (_didIteratorError3) {
	                                            throw _iteratorError3;
	                                        }
	                                    }
	                                }

	                                if (disabled || !this.props.lineEdit) {
	                                    newTdData = tdLabel;
	                                    break;
	                                }
	                                arrEdit.push(_react2.default.createElement(
	                                    RadioGroup,
	                                    { value: tdData,
	                                        onChange: this.setEditData.bind(this, k) },
	                                    arrRadioList
	                                ));
	                                break;
	                            case 'select':
	                                /**
	                                 * select列表
	                                 */
	                                var objOptions = v['editCfg']['options'];
	                                var selList = [];
	                                if (disabled || !this.props.lineEdit) {
	                                    newTdData = objOptions[tdData];
	                                    break;
	                                }
	                                for (var i in objOptions) {
	                                    if (objOptions.hasOwnProperty(i)) {
	                                        selList.push(_react2.default.createElement(
	                                            Option,
	                                            { key: 'option' + i, value: i },
	                                            objOptions[i]
	                                        ));
	                                    }
	                                }
	                                arrEdit.push(_react2.default.createElement(
	                                    _antd.Select,
	                                    { defaultValue: tdData,
	                                        onChange: this.setLineData.bind(this, k) },
	                                    selList
	                                ));
	                                break;
	                            default:
	                                break;
	                        }
	                    }
	                    var tdDiv = _react2.default.createElement(
	                        'td',
	                        _extends({}, style, rowspan, { key: k, ref: k,
	                            'data-key': k }),
	                        arrEdit.length > 0 ? arrEdit : newTdData ? newTdData : tdData
	                    );
	                    // 气泡卡片
	                    if (_elliClass) {
	                        tdDiv = _react2.default.createElement(
	                            _antd.Popover,
	                            { key: k, content: data[k] },
	                            tdDiv
	                        );
	                    }
	                    tdList.push(tdDiv);
	                }
	            }
	            var operationSpan = [];
	            var tableCfg = self.props.tableCfg;
	            var cfg = tableCfg.cfg || {};
	            if (cfg.checkBox) {
	                operationSpan.push(_react2.default.createElement(
	                    'span',
	                    { key: 'trcheckbox' },
	                    _react2.default.createElement(_antd.Checkbox, { checked: self.props.checked, onChange: this.checkIt.bind(this), disabled: disabled })
	                ));
	            }
	            if (cfg.expand) {
	                var foldUp = 'fa fa-caret-right';
	                var foldDown = 'fa fa-caret-down';
	                var strClaName = this.state.isDown || this.props.expandAll ? foldDown : foldUp;
	                operationSpan.push(_react2.default.createElement('span', { key: 'trexpand', 'data-key': data[this.key], className: strClaName,
	                    onClick: self.expandExtraInfo.bind(self, 'expandtr' + data[this.key]) }));
	            }
	            if (hideDepth === 0 && operationSpan.length > 0) {
	                var tipEle = void 0;
	                if (cfg.tips) {
	                    var tips = this.props.obj[cfg.tips];
	                    // 如果数据没有tips字段，则不添加气泡。这样用户就可指定某些行展示气泡，而某些不展示
	                    tipEle = tips && _react2.default.createElement(
	                        _antd.Popover,
	                        { content: tips },
	                        _react2.default.createElement(
	                            'span',
	                            { key: 'trtips', 'data-key': data[this.key] },
	                            operationSpan
	                        )
	                    );
	                }
	                tdList.unshift(_react2.default.createElement(
	                    'td',
	                    { key: 'extra' + data[this.key], className: 'extra' },
	                    tipEle || operationSpan
	                ));
	            }
	            return tdList;
	        }
	    }, {
	        key: 'expandExtraInfo',
	        value: function expandExtraInfo(refK, e) {
	            e = e || window.event;
	            e.stopPropagation();
	            e.preventDefault();
	            this.props.expandExtraInfo(refK, !this.state.isDown);
	            this.setState({ isDown: !this.state.isDown });
	        }
	    }, {
	        key: 'syntaxHighlight',
	        value: function syntaxHighlight(json) {
	            if (typeof json !== 'string') {
	                json = JSON.stringify(json, undefined, 2);
	            }
	            var self = this;
	            json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
	            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
	                var cls = 'number';
	                if (/^"/.test(match)) {
	                    if (/:$/.test(match)) {
	                        cls = 'key';
	                    } else {
	                        try {
	                            var type = JSON.parse(match);
	                            if (_typeof(JSON.parse(type)) === 'object') {
	                                return self.syntaxHighlight(JSON.parse(type));
	                            } else {
	                                cls = 'string';
	                            }
	                        } catch (e) {
	                            cls = 'string';
	                        }
	                    }
	                } else if (/true|false/.test(match)) {
	                    cls = 'boolean';
	                } else if (/null/.test(match)) {
	                    cls = 'null';
	                }
	                return '<span class="' + cls + '">' + match + '</span>';
	            });
	        }
	    }, {
	        key: 'createMarkup',
	        value: function createMarkup(htmlString) {
	            return {
	                __html: htmlString
	            };
	        }
	    }, {
	        key: 'removeActiveStatus',
	        value: function removeActiveStatus() {
	            this.setState({ active: false });
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(event) {
	            var data = this.state.lineData;
	            // 当前行是灰色的,不可以进行编辑
	            var disabled = data['disabled'] ? data['disabled'] : false;
	            if (!disabled) {
	                // this.props.onClick(this.props.id, !this.props.checked, this.props.obj, event);
	                this.props.onClick && this.props.onClick(event);
	            }
	        }
	    }, {
	        key: 'doubleClick',
	        value: function doubleClick(event) {
	            var data = this.state.lineData;
	            // 当前行是灰色的,不可以进行编辑
	            var disabled = data['disabled'] ? data['disabled'] : false;
	            if (!disabled) {
	                this.props.onDoubleClick && this.props.onDoubleClick(event);
	                this.setState({ active: true });
	            }
	        }
	    }, {
	        key: 'handleHover',
	        value: function handleHover(event) {
	            this.props.onHover && this.props.onHover(event);
	        }
	    }, {
	        key: 'handleLeave',
	        value: function handleLeave(event) {
	            this.props.onLeave && this.props.onLeave(event);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var rowsCfg = this.props.tableCfg.rows || {};
	            var disabled = this.props.obj['disabled'] ? this.props.obj['disabled'] : false;
	            // let className = this.state.active ? 'actived' : '';
	            // className += this.props.checked ? ' selected' : '';
	            // let style = disabled ? {background: '#e4e5e7'} : {};
	            // 支持自定义tr的class和style（可以是function或者string）
	            var className = '';
	            var style = {};
	            if (rowsCfg.className) {
	                if (typeof rowsCfg.className === 'function') {
	                    className += rowsCfg.className(this.props.obj);
	                } else if (typeof rowsCfg.className === 'string') {
	                    className += rowsCfg.className;
	                }
	            }
	            if (rowsCfg.style) {
	                if (typeof rowsCfg.style === 'function') {
	                    Object.assign(style, rowsCfg.style(this.props.obj));
	                } else if (_typeof(rowsCfg.style) === 'object') {
	                    Object.assign(style, rowsCfg.style);
	                }
	            }
	            className += this.state.active ? ' actived' : '';
	            className += this.props.checked ? ' selected' : '';
	            Object.assign(style, disabled ? { background: '#e4e5e7' } : {});
	            return _react2.default.createElement(
	                'tr',
	                { ref: 'tr', style: style,
	                    className: className,
	                    onMouseEnter: this.handleHover.bind(this),
	                    onMouseLeave: this.handleLeave.bind(this),
	                    onClick: this.handleClick.bind(this),
	                    onDoubleClick: this.doubleClick.bind(this) },
	                this.generatorRow()
	            );
	        }
	    }]);

	    return TrRow;
	}(_react2.default.Component);

	exports.default = TrRow;

/***/ }),
/* 175 */
/***/ (function(module, exports) {

	module.exports = window.DLL.ReactRouter;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(175);

	var _antd = __webpack_require__(14);

	var _UDnD = __webpack_require__(177);

	var _UDnD2 = _interopRequireDefault(_UDnD);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/**
	 * @file 简易表格组件
	 * @author liuzechun@baidu.com
	 * */
	/* eslint-disable fecs-camelcase */


	var styles = {
	    block: {
	        maxWidth: 250
	    },
	    checkbox: {
	        marginBottom: 16
	    }
	};

	var ThRow = function (_React$Component) {
	    _inherits(ThRow, _React$Component);

	    function ThRow(props) {
	        _classCallCheck(this, ThRow);

	        var _this = _possibleConstructorReturn(this, (ThRow.__proto__ || Object.getPrototypeOf(ThRow)).call(this, props));

	        _this.state = {
	            checked: _this.props.checked,
	            // 排序的是哪个字段，排序的规则
	            sortField: _this.props.sortField ? _this.props.sortField : '',
	            sort: _this.props.sort ? _this.props.sort : ''
	        };
	        return _this;
	    }

	    _createClass(ThRow, [{
	        key: 'checkAll',
	        value: function checkAll() {
	            this.props.checkAll(!this.props.checked);
	            this.setState({ checked: !this.state.checked });
	            return;
	        }
	    }, {
	        key: 'sortClick',
	        value: function sortClick(sortField) {
	            // sortType为true 代表是ASC排序
	            var sortType = this.state.sortField === sortField ? !this.state.sort : true;
	            this.setState({ sort: sortType, sortField: sortField });
	            this.props.sortColumn && this.props.sortColumn(sortType, sortField);
	        }
	    }, {
	        key: 'handleDragDrop',
	        value: function handleDragDrop(srcData, dropData, e) {
	            e = e || window.event;
	            // 防止传播到th的click的事件上
	            e.stopPropagation();
	            this.props.changeColumnOrder(srcData['data-field'], dropData['data-field']);
	        }
	    }, {
	        key: 'generatorRow',
	        value: function generatorRow() {
	            var thList = [];
	            for (var key in this.props.showTags) {
	                var dndProps = {
	                    'data-field': key,
	                    'handleDragDrop': this.handleDragDrop.bind(this)
	                };
	                var value = this.props.showTags[key];
	                if (key === 'operation' && (value.display || value.display == null)) {
	                    thList.push(_react2.default.createElement(
	                        'th',
	                        { key: key },
	                        '\u64CD\u4F5C'
	                    ));
	                } else if (key === 'cusOperation' && (value.display || value.display == null)) {
	                    thList.push(_react2.default.createElement(
	                        'th',
	                        { key: key },
	                        value['title']
	                    ));
	                } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && (value.display || value.display == null)) {
	                    var spanSort = [];
	                    var sortAscCss = 'fa fa-sort-asc ' + (this.state.sort && key === this.state.sortField ? 'umpui-asc' : '');
	                    var sortDescCss = 'fa fa-sort-desc ' + (!this.state.sort && key === this.state.sortField ? 'umpui-desc' : '');
	                    if (value.sort) {
	                        spanSort.push(_react2.default.createElement('span', { className: sortAscCss, key: 'sortasc' }));
	                        spanSort.push(_react2.default.createElement('span', { className: sortDescCss, key: 'sortdesc' }));
	                        thList.push(_react2.default.createElement(
	                            'th',
	                            { key: key, onClick: this.sortClick.bind(this, key) },
	                            _react2.default.createElement(
	                                _UDnD2.default,
	                                dndProps,
	                                value['title'],
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'umpui-sortcon' },
	                                    spanSort
	                                )
	                            )
	                        ));
	                    } else {
	                        thList.push(_react2.default.createElement(
	                            'th',
	                            { key: key },
	                            _react2.default.createElement(
	                                _UDnD2.default,
	                                dndProps,
	                                value['title']
	                            )
	                        ));
	                    }
	                } else if (typeof value === 'string') {
	                    thList.push(_react2.default.createElement(
	                        'th',
	                        { key: key },
	                        _react2.default.createElement(
	                            _UDnD2.default,
	                            dndProps,
	                            value
	                        )
	                    ));
	                }
	            }
	            var operationArr = [];
	            if (this.props.tableCfg.cfg && this.props.tableCfg.cfg.checkBox) {
	                operationArr.push(_react2.default.createElement(
	                    'span',
	                    { key: 'thcheckbox' },
	                    _react2.default.createElement(_antd.Checkbox, { checked: this.props.checked, onChange: this.checkAll.bind(this) })
	                ));
	            }
	            if (this.props.tableCfg.cfg && this.props.tableCfg.cfg.expand) {
	                var foldUp = 'fa fa-caret-right';
	                var foldDown = 'fa fa-caret-down';
	                var strClaName = this.props.expandAll ? foldDown : foldUp;
	                operationArr.push(_react2.default.createElement('span', { key: 'thexpand', 'data-key': 'expandAll',
	                    className: strClaName, onClick: this.props.expandAllExtra }));
	            }
	            if (operationArr.length > 0) {
	                thList.unshift(_react2.default.createElement(
	                    'th',
	                    { key: 'operations', className: 'extra' },
	                    operationArr
	                ));
	            }
	            return thList;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var thList = this.generatorRow();
	            return _react2.default.createElement(
	                'thead',
	                null,
	                _react2.default.createElement(
	                    'tr',
	                    null,
	                    thList
	                )
	            );
	        }
	    }]);

	    return ThRow;
	}(_react2.default.Component);

	exports.default = ThRow;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _component = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file UDnD 拖拽组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc 实现基本的拖拽功能，可以给要拖拽的组件传递数据
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author luyongffang@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var UDnD = function (_BaseComponent) {
	    _inherits(UDnD, _BaseComponent);

	    function UDnD(props) {
	        _classCallCheck(this, UDnD);

	        return _possibleConstructorReturn(this, (UDnD.__proto__ || Object.getPrototypeOf(UDnD)).call(this, props));
	    }

	    _createClass(UDnD, [{
	        key: 'getSrcData',
	        value: function getSrcData(event) {
	            var srcData = {};
	            var arrTypes = event.dataTransfer.types;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = arrTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var v = _step.value;

	                    srcData[v] = event.dataTransfer.getData(v);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return srcData;
	        }
	    }, {
	        key: 'dragStart',
	        value: function dragStart(event) {
	            event = event || window.event;
	            event.dataTransfer.effectAllowed = 'copyMove';
	            for (var k in this.props) {
	                if (k.indexOf('-') !== -1) {
	                    event.dataTransfer.setData(k, this.props[k]);
	                }
	            }
	        }
	    }, {
	        key: 'dragOver',
	        value: function dragOver(event) {
	            event = event || window.event;
	            event.preventDefault();
	        }
	    }, {
	        key: 'dragDrop',
	        value: function dragDrop(event) {
	            event = event || window.event;
	            event.stopPropagation();
	            var objDatas = {};
	            var namedNodeMap = event.target.attributes;
	            for (var k in namedNodeMap) {
	                var nodeName = namedNodeMap[k].nodeName;
	                if (nodeName && nodeName.indexOf('-') !== -1) {
	                    objDatas[nodeName] = namedNodeMap[k].nodeValue;
	                }
	            }
	            var srcData = this.getSrcData(event);
	            this.props.handleDragDrop && this.props.handleDragDrop(srcData, objDatas);
	        }
	    }, {
	        key: 'dragEnd',
	        value: function dragEnd(event) {
	            console.log('drag end');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.__filterProps(this.props, 'handleDragDrop');
	            return _react2.default.createElement(
	                'div',
	                _extends({ draggable: 'true' }, props, { onDragStart: this.dragStart.bind(this),
	                    onDrop: this.dragDrop.bind(this), onDragEnd: this.dragEnd.bind(this),
	                    onDragOver: this.dragOver.bind(this) }),
	                this.props.children
	            );
	        }
	    }]);

	    return UDnD;
	}(_component.BaseComponent);

	exports.default = UDnD;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 发起更新故障报修
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author luyongfang@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * **/


	var Confirm = function (_React$Component) {
	    _inherits(Confirm, _React$Component);

	    function Confirm(props) {
	        _classCallCheck(this, Confirm);

	        var _this = _possibleConstructorReturn(this, (Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call(this, props));

	        _this.state = {
	            value: ''
	        };
	        return _this;
	    }

	    _createClass(Confirm, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            this.setState({ value: e.target.value });
	        }
	    }, {
	        key: 'onConfirm',
	        value: function onConfirm() {
	            this.props.onConfirm(this.state.value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var inputCfg = this.props.type === 'textarea' ? { type: 'textarea', autosize: { minRows: 2 }, style: { width: '220px' } } : { type: this.props.type };
	            return _react2.default.createElement(
	                _antd.Popconfirm,
	                { placement: 'topRight',
	                    okText: '\u786E \u8BA4', cancelText: '\u53D6 \u6D88',
	                    onConfirm: this.onConfirm.bind(this),
	                    title: _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            this.props.tips
	                        ),
	                        _react2.default.createElement(_antd.Input, _extends({ size: 'small', style: { width: '130px', marginTop: '6px' },
	                            value: this.state.value }, inputCfg, {
	                            onChange: this.onChange.bind(this) }))
	                    ) },
	                this.props.children
	            );
	        }
	    }]);

	    return Confirm;
	}(_react2.default.Component);

	exports.default = Confirm;

/***/ }),
/* 179 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 180 */,
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _component = __webpack_require__(9);

	var _Antd = __webpack_require__(8);

	var _Antd2 = _interopRequireDefault(_Antd);

	var _utils = __webpack_require__(11);

	var _loader = __webpack_require__(182);

	var _loader2 = _interopRequireDefault(_loader);

	var _adaptor = __webpack_require__(183);

	var _adaptor2 = _interopRequireDefault(_adaptor);

	var _validator = __webpack_require__(184);

	var _validator2 = _interopRequireDefault(_validator);

	var _layout = __webpack_require__(185);

	var _layout2 = _interopRequireDefault(_layout);

	var _whitelist = __webpack_require__(186);

	var _whitelist2 = _interopRequireDefault(_whitelist);

	var _html = __webpack_require__(187);

	var _html2 = _interopRequireDefault(_html);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 解析配置，生成页面
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      主要负责调度各个解析工具，并生成组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// 不属于config的参数，适配用户配置的参数时使用
	var KeyWord = ['name', 'type', 'content'];

	var Factory = function (_Component) {
	    _inherits(Factory, _Component);

	    function Factory(props) {
	        _classCallCheck(this, Factory);

	        return _possibleConstructorReturn(this, (Factory.__proto__ || Object.getPrototypeOf(Factory)).call(this, props));
	    }

	    // 解析组件配置，生成组件


	    _createClass(Factory, [{
	        key: 'generateItem',
	        value: function generateItem(item) {
	            // 如果是字符串直接返回
	            if (_utils.Utils.typeof(item, 'string')) {
	                return item;
	            }
	            // 校验是否有 type 属性，如果没有会报错
	            if (!_validator2.default.check(item, 'type', 'string')) {
	                return;
	            }
	            // 如果是 html 类型，使用 html 模板解析器来解析，然后直接返回
	            // todo
	            if (item.type === 'html') {
	                return new _html2.default(item.content);
	            }

	            // 如果是布局相关类型，则经过layout处理器处理
	            item = _layout2.default.if(item);
	            // 从loader中获取到相应的组件
	            var Item = _loader2.default.get(item.type);
	            if (!Item) {
	                return;
	            }
	            // 通过适配器把参数转换成标准格式，剔除掉一下无用属性等
	            var props = _adaptor2.default.get(item);
	            // 判断其他需要额外进一步解析的属性并进行解析
	            props = this.analysisAgain(props, item);
	            return _react2.default.createElement(Item, props);
	        }

	        // 拆分多个config，分离成组件的配置

	    }, {
	        key: 'generateElement',
	        value: function generateElement(config) {
	            config = config || this.props.config;
	            // 如果是字符串直接返回
	            if (_utils.Utils.typeof(config, 'string')) {
	                return config;
	            }
	            var result = void 0;
	            if (_utils.Utils.typeof(config, 'array')) {
	                result = [];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = config[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var item = _step.value;

	                        result.push(this.generateElement(item));
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            } else {
	                result = this.generateItem(config);
	            }
	            return result;
	        }

	        // 有些属性可以是ReactNode，也就是也可以配置成一个组件，所以需要再次把这些属性解析为组件

	    }, {
	        key: 'analysisAgain',
	        value: function analysisAgain(props, item) {
	            var name = _utils.Utils.toPascal(item.type);
	            var list = _whitelist2.default[name];
	            if (list) {
	                for (var i in props) {
	                    if (list.indexOf(i) !== -1) {
	                        props[i] = this.generateElement(props[i]);
	                    }
	                }
	            }
	            // 如果存在item.content，则说明有子组件，所有组件的 content 属性都需要二次解析
	            if (item.content) {
	                // 组件本身会从 this.props.children 上获取子组件，所以直接把子组件放props上即可，无需再写双标签
	                props.children = this.generateElement(item.content);
	            }
	            return props;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.generateElement()
	            );
	        }
	    }]);

	    return Factory;
	}(_react.Component);

	exports.default = Factory;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(11);

	var _uf = __webpack_require__(4);

	var UF = _interopRequireWildcard(_uf);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    component: Object.assign(UF),

	    // 添加组件
	    add: function add(components) {
	        Object.assign(this.component, components);
	    },


	    // 根据 type 获取组件
	    get: function get(type) {
	        // 包括 button.group、input-number
	        // type 可能代表包括组件的子组件的复杂组件类型，如：button.group -> Antd.Button.Group
	        // let name = type.split('.').map(v=>this.toPascal(v));
	        // let result = this.component;
	        // for (let v of name) {
	        //     if (!result) {
	        //         this.error(type);
	        //     }
	        //     result = result[v];
	        // }
	        // 目前用不到.这种层级关系了，全部组件平级的，包括像 Antd.Button 和 Antd.Button.Group 这种
	        var name = _utils.Utils.toPascal(type);
	        var result = this.component[name];
	        if (!result) {
	            // 检查是否为React原生元素
	            if (_react2.default.DOM.hasOwnProperty(type)) {
	                result = name;
	            } else {
	                this.error(type);
	            }
	        }
	        return result;
	    },


	    // 打印错误信息
	    error: function error(type) {
	        console.error('Uncaught TypeError: type \'' + type + '\' is invalid.');
	    }
	}; /**
	    * @file 载入组件，供 Factory 获取
	    *      根据配置的 type，转换成对应组件并返回
	    * @author liuzechun@baidu.com
	    */

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @file 适配器，把组件配置转换为统一规范格式
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


	var _utils = __webpack_require__(11);

	var _Antd = __webpack_require__(8);

	var _Antd2 = _interopRequireDefault(_Antd);

	var _loader = __webpack_require__(182);

	var _loader2 = _interopRequireDefault(_loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 不属于config的参数，适配用户配置的参数时使用
	var KeyWord = ['name', 'type', 'content'];

	_utils.Cache.set('component-names', []);

	exports.default = {
	    get: function get(item) {
	        var Item = _loader2.default.get(item.type);
	        // 如果是Antd组件，则把config格式化为Antd组件格式
	        // 否则格式化成Uf格式
	        // let props;
	        // if (Utils.isExtendsOf(Item, 'Antd')) {
	        //     props = this.antdConfig(item);
	        // } else if (Utils.isExtendsOf(Item, 'BaseComponent')) {
	        //     props = this.ufConfig(item);
	        // } else {
	        //     props = this.commonConfig(item);
	        // }
	        var props = _utils.Utils.filter(item, KeyWord);
	        // 由于 type 关键字把原antd等的 type 覆盖掉了，配置里用 mode 字段代替
	        // 实例化组件时，还要把 type 还原
	        if (_utils.Utils.isExtendsOf(Item, 'Antd')) {
	            if (props.mode) {
	                props.type = props.mode;
	            }
	        }

	        // 把 class、style 转换为 react 需要的 className、style对象
	        if (props.class) {
	            props.className += ' ' + props.class;
	            delete props.class;
	        }
	        if (props.style && _utils.Utils.typeof(props.style, 'string')) {
	            props.style = this.toCamalObj(props.style);
	        }

	        // 如果有name的话，把组件放到缓存池里
	        if (item.name) {
	            props['__cache'] = item.name;
	            props['__ref'] = item.name;
	        }
	        // 每个组件都要有key
	        if (props['key'] === undefined) {
	            props['key'] = item.name || _utils.Utils.uniqueId();
	        }

	        return props;
	    },

	    // 把 字符串style 转换为 react 需要的对象
	    toCamalObj: function toCamalObj(style) {
	        var arr = style.split(';');
	        var obj = {};
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var v = _step.value;

	                var _v$split = v.split(':'),
	                    _v$split2 = _slicedToArray(_v$split, 2),
	                    key = _v$split2[0],
	                    value = _v$split2[1];
	                // 可以再优化下


	                var newKey = key.split('-').map(function (i) {
	                    return i.replace(/^\w/g, function (v) {
	                        return v.toUpperCase();
	                    });
	                }).join('').replace(/^\w/g, function (v) {
	                    return v.toLowerCase();
	                });
	                obj[newKey] = value;
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        return obj;
	    }
	    // 获取Uf上自己实现的组件配置，配置集合在config上
	    /* ufConfig(oitem) {
	        let {config, data, params} = oitem;
	        let item = Utils.filter(oitem, KeyWord.concat(['config', 'data', 'params']));
	        if (!config) {
	            config = {};            
	        }
	        // 把item上的全部非函数的属性放到config中
	        for (let i in item) {
	            if (!(item[i] instanceof Function)) {
	                config[i] = item[i];
	                delete item[i];
	            }
	        }
	        // item中最终只剩下函数，直接放到config中
	        return Object.assign({
	                config,
	                data,
	                params
	            }, item);
	    },
	     // 获取Antd的组件配置，配置参数是分散的
	    antdConfig(oitem) {
	        let item = Utils.filter(oitem, KeyWord);
	        // 由于 type 关键字把原antd的 type 覆盖掉了，配置里用 mode 字段代替
	        // 实例化组件时，还要把 type 还原
	        if (item.mode) {
	            item.type = item.mode;
	        }
	        return item;
	    },
	     // 获取普通元素的配置，配置参数是分散的
	    commonConfig(oitem) {
	        let item = Utils.filter(oitem, KeyWord);
	        // 由于 type 关键字把原antd的 type 覆盖掉了，配置里用 mode 字段代替
	        // 实例化组件时，还要把 type 还原
	        if (item.mode) {
	            item.type = item.mode;
	        }
	        return item;
	    } */

	};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(11);

	exports.default = {
	    // 检查对象上的某个(些)属性是否符合指定类型
	    // 属性可以是单个字符串或数组
	    check: function check(item, name, type) {
	        type = type || 'undefined';
	        // 如果不是数组，转换为数组
	        if (_utils.Utils.getType(name) === 'string') {
	            name = [name];
	        }
	        if (_utils.Utils.getType(name) === 'array') {
	            var flag = true;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = name[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var v = _step.value;

	                    if (!_utils.Utils.typeof(item[name], type)) {
	                        this.error(item, name, type);
	                        flag = false;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return flag;
	        }
	        return false;
	    },

	    // 打印错误信息
	    error: function error(item, name, type) {
	        console.error('Uncaught TypeError: ' + name + ' is ' + ('' + (type ? 'not ' + type : 'undefined')) + (' in item\'s config "' + JSON.stringify(item) + '"'));
	    }
	}; /**
	    * @file 数据校验器
	    * @author liuzechun
	    */

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(11);

	var layoutItem = ['layout', 'header', 'footer', 'sider', 'content']; /**
	                                                                      * @file 布局处理工具
	                                                                      * @author liuzechun
	                                                                      */
	exports.default = {

	    // 如果type为布局相关的组件，则进行特殊处理
	    if: function _if(item) {
	        // todo
	        if (layoutItem.indexOf(item.type) !== -1) {
	            return this.get(item);
	        }
	        return item;
	    },
	    get: function get(item) {
	        switch (item.type) {
	            case 'layout':
	                item = this.getLayout(item);
	                break;
	            default:
	                break;
	        }
	        return item;
	    },


	    // 处理 type='layout' 的参数
	    getLayout: function getLayout(item) {
	        // 如果content里面包含有sider，则className中增加 ant-layout-has-sider。ps：没想清antd的官方是怎么做到适配的
	        var className = item.className || '';
	        var content = item.content;
	        if (!_utils.Utils.typeof(content, 'array')) {
	            content = [content];
	        }
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = content[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var v = _step.value;

	                if (v.type === 'sider') {
	                    className += ' ant-layout-has-sider';
	                    break;
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        item.className = className;
	        return item;
	    }
	};

/***/ }),
/* 186 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @file 属性需进一步解析的组件属性名单
	 * @author liuzechun
	 */

	exports.default = {
	    Input: ['addonBefore', 'addonAfter', 'prefix', 'suffix'],
	    Switch: ['checkedChildren', 'unCheckedChildren'],
	    Card: ['title', 'extra'],
	    Panel: ['header'],
	    Popover: ['title', 'body'],
	    Tooltip: ['title'],
	    Tabs: ['tabBarExtraContent'],
	    TabPane: ['tab'],
	    SubMenu: ['title'],
	    MenuItemGroup: ['title'],
	    Step: ['title', 'description', 'icon'],
	    Alert: ['closeText', 'message', 'description'],
	    Popconfirm: ['title'],
	    Dropdown: ['overlay'],
	    DropdownButton: ['overlay'],
	    Rate: ['character'],
	    Timeline: ['pending'],
	    TimelineItem: ['dot'],
	    Modal: ['title', 'footer']
	};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _utils = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* 模板解析规则 */
	/* i: 大小写不敏感，g: 全局匹配(查找所有)，m: 多行匹配 */
	var Rules = {
	    close: /^<\/\S+?>/g, // 结束标签
	    single: /^<[^<>]+?\/>/g, // 单标签
	    open: /^<[^<>]+?>/g, // 开始标签
	    text: /^[\s\S]+?(?=<)/g, // 非标签

	    expre: /{%[\s\S]*?%}/m, // 模板语言表达式格式
	    func: /\$E\d+\$/, // 表达式占位符
	    funcBef: '\$E', // 表达式占位符前缀
	    funcAft: '\$', // 表达式占位符后缀
	    str: /\$S\d+\$/, // 字符串占位符
	    strBef: '\$S', // 字符串占位符前缀
	    strAft: '\$', // 字符串占位符后缀

	    trim: /^\s+|\s+$/g, // 用于删除字符串前后的空格等
	    trimTag: /^<\/|^<|>$|\/>$/g, // 用于删除标签前后的尖括号
	    trimFunc: /^\$E|\$$/g, // 用于删除表达式占位符的前缀后缀，以获取表达式id
	    trimTemp: /^{%|%}$/g, // 用于删除模板的标签，获得表达式内容
	    trimStr: /^\$S|\$$/g // 用于删除字符串占位符前后缀，获取字符串内容
	};
	var Message = {
	    error: function error(msg) {
	        throw new Error('unexpected token "' + msg + ' ..."');
	    }
	};

	/* 模板解析类 */

	var Html = function () {
	    function Html(html) {
	        _classCallCheck(this, Html);

	        this.stack = []; // 解析模板时用到的栈
	        this.expressions = []; // 保存解析时临时的表达式
	        // let template = this.analysis(html);
	        // return this.generateElement(template);
	        return this.analysis(html);
	    }
	    /**
	     * 1、剪切掉自定义匹配到的内容；2、清理字符串前后空格
	     */


	    _createClass(Html, [{
	        key: 'trim',
	        value: function trim(string, regExp) {
	            if (!!regExp) {
	                string = string.replace(regExp, '');
	            }
	            return string.replace(Rules.trim, '');
	        }
	        /**
	         * 根据元素的信息对象，生成 React 元素
	         * @param  {[Object]} obj       包含标签各种信息的对象
	         * @return {[Object]}           返回解析生成的 react 元素
	         */

	    }, {
	        key: 'generateElement',
	        value: function generateElement(obj) {
	            var result = void 0;
	            if (_utils.Utils.typeof(obj, 'string')) {
	                result = obj;
	            } else if (_utils.Utils.typeof(obj, 'array')) {
	                result = [];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var v = _step.value;

	                        result.push(this.generateElement(v));
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            } else if (_utils.Utils.typeof(obj, 'object')) {
	                var tag = obj.tag;
	                var attr = {};
	                // 解析属性 - 函数及表达式需执行
	                for (var key in obj.attribute) {
	                    var content = obj.attribute[key];
	                    if (typeof content === 'function') {
	                        attr[key] = content.call(this);
	                    } else {
	                        attr[key] = content;
	                    }
	                }

	                // 把 class、style 转换为 react 需要的 className、style对象
	                attr.className = attr.class;
	                delete attr.class;
	                attr.style = attr.style && this.toCamalObj(attr.style);
	                // 如果没有key，则增加一个随机的key
	                attr.key = attr.key || _utils.Utils.uniqueId();

	                var arr = [tag, attr];
	                if (!!obj.children) {
	                    // 对children进行遍历，处理
	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = obj.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var _v = _step2.value;

	                            if (typeof _v === 'string') {
	                                arr.push(_v);
	                            } else if (typeof _v === 'function') {
	                                arr.push(_v.call(this));
	                            } else {
	                                arr.push(this.generateElement(_v));
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError2 = true;
	                        _iteratorError2 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                _iterator2.return();
	                            }
	                        } finally {
	                            if (_didIteratorError2) {
	                                throw _iteratorError2;
	                            }
	                        }
	                    }
	                }
	                result = _react2.default.createElement.apply(null, arr);
	            }
	            return result;
	        }
	        // 把元素html的 style 字符串转换为 react 需要的对象

	    }, {
	        key: 'toCamalObj',
	        value: function toCamalObj(style) {
	            var arr = style.split(';');
	            var obj = {};
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = arr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var v = _step3.value;

	                    var _v$split = v.split(':'),
	                        _v$split2 = _slicedToArray(_v$split, 2),
	                        key = _v$split2[0],
	                        value = _v$split2[1];
	                    // 可以再优化下


	                    var newKey = key.split('-').map(function (i) {
	                        return i.replace(/^\w/g, function (v) {
	                            return v.toUpperCase();
	                        });
	                    }).join('').replace(/^\w/g, function (v) {
	                        return v.toLowerCase();
	                    });
	                    obj[newKey] = value;
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            return obj;
	        }
	        /**
	         * 解析属性值为函数
	         * - 把有动态内容的属性值，用函数包裹起来，需要的时候执行函数得到属性值
	         * @param  {[string]} content   属性内容
	         * @return {[string/function]}  如果不包含动态内容，则返回一个字符串，否则把内容放在函数中
	         */

	    }, {
	        key: 'generateFunction',
	        value: function generateFunction(content) {
	            var id = content.replace(Rules.trimFunc, '');
	            var expre = this.expressions[id];
	            if (!!expre) {
	                expre = this.trim(expre, Rules.trimTemp);
	                expre = expre.replace(/\s+/g, ' ');
	            } else {
	                expre = content.replace(/\s+/g, ' ');
	            }
	            // 有些模板表达式标签内容为空
	            return function () {
	                return !expre ? null : eval('(' + expre + ')');
	            };
	        }

	        /**
	         * 解析标签字符串，生成包含元素各种信息的对象
	         * @param  {[string]} type 元素类型：single/open
	         * @param  {[string]} str  html 标签字符串
	         * @return {[Object]}      包含元素各种信息
	         *         tag          标签名
	         *         attribute    属性/方法
	         */

	    }, {
	        key: 'generateObject',
	        value: function generateObject(type, str) {
	            var obj = {
	                isOpen: type === 'open',
	                children: null
	            };
	            // 字符串去除标签/去除=左右空格/把多个空格合并为一个/把首尾空格去掉
	            str = str.replace(/^<|\/>$|>$/g, '').replace(/\s*=\s*/g, '=').replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
	            // 把属性中的字符串临时用字符串占位符替换，拆分完属性后再还原
	            var attrStr = /=".*?"|='.*?'/;
	            var string = [];
	            while (str.search(attrStr) >= 0) {
	                var expre = str.match(attrStr)[0].replace(/^="|^='|["']$/g, '');
	                string.push(expre);
	                // 把 "、' 字符串用 ‘$S*$’ 代替
	                str = str.replace(attrStr, '=' + Rules.strBef + (string.length - 1) + Rules.strAft);
	            }
	            var attr = str.split(' ');

	            obj.tag = attr.shift();
	            // 解析属性
	            var expressions = this.expressions;
	            var attribute = {};
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = attr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var v = _step4.value;

	                    if (v.indexOf('=') > 0) {
	                        var kv = v.split('=');
	                        // 模板占位符: $E*$，所以暂时保留原形式不变，在生成React元素时在做处理
	                        if (kv[1].search(Rules.func) != -1) {
	                            // attribute[kv[0]] = kv[1];
	                            attribute[kv[0]] = this.generateFunction(kv[1]);
	                            // 字符串占位符: $S*$
	                        } else if (kv[1].search(Rules.str) != -1) {
	                            var id = kv[1].replace(Rules.trimStr, '');
	                            attribute[kv[0]] = string[id];
	                            // 单一变量（为了使用方便，可以不写成模板表达式的形式），此处仍需替换成函数占位符
	                        } else {
	                            // expressions.push(kv[1]);
	                            // attribute[kv[0]] = Rules.funcBef + (expressions.length - 1) + Rules.funcAft;
	                            attribute[kv[0]] = this.generateFunction(kv[1]);
	                        }
	                    } else if (!!v) {
	                        // 依照html的使用规则，没有值的属性默认为true
	                        attribute[v] = true;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }

	            obj.attribute = attribute;

	            return obj;
	        }
	        /**
	         * 根据关闭标签查找整个标签内容，并生成 React 元素
	         * @param  {[string]} str   关闭的标签字符串
	         * @return {[Object]}       返回解析生成的 react 元素
	         */

	    }, {
	        key: 'generateObjectByClose',
	        value: function generateObjectByClose(str) {
	            // 首先解析出闭合标签的内容
	            var tag = this.trim(str, Rules.trimTag);
	            var result = null;
	            var children = [];
	            for (;;) {
	                var obj = this.stack.pop();
	                // 字符串元素
	                if (typeof obj === 'string') {
	                    children.unshift(obj);
	                    // 函数 - 模板表达式
	                } else if (typeof obj === 'function') {
	                    children.unshift(obj);
	                    // 是否是已闭合标签
	                } else if (obj && !obj.isOpen) {
	                    children.unshift(obj);
	                    // 开始标签是否和关闭标签匹配
	                } else if (obj && obj.tag === tag) {
	                    obj.children = children;
	                    obj.isOpen = false;
	                    result = obj;
	                    break;
	                } else {
	                    Message.error('an open tag(' + obj.tag + ') that not match with the close tag(' + tag + ')');
	                }
	            }
	            return result;
	        }

	        /**
	         * 把JSX模板中{}内容转化为函数名并替换
	         * @param  {[string]}  html  原生jsx模板
	         * @return {[string]}       处理后的jsx模板
	         */

	    }, {
	        key: 'beforeAnalysis',
	        value: function beforeAnalysis(html) {
	            var expressions = [];
	            while (html.search(Rules.expre) >= 0) {
	                var expre = html.match(Rules.expre)[0];
	                expressions.push(expre);
	                // 把{}表达式用‘$E*$’代替
	                html = html.replace(Rules.expre, Rules.funcBef + (expressions.length - 1) + Rules.funcAft);
	            }
	            this.expressions = expressions;
	            return this.trim(html);
	        }

	        /**
	         * 解析模板 - 生成的是一个包含整个模板树信息的对象
	         * @param  {[string]}  html    html 模板
	         * @return {[Object]}         解析后的React对象
	         */

	    }, {
	        key: 'analysis',
	        value: function analysis(html) {
	            // 保存标签规则
	            var tagReg = '';
	            // let template = this.beforeAnalysis(html);
	            var template = html;
	            // console.log(template);
	            while (!!template) {
	                // 关闭标签 - 出栈 && 封装成 React 元素
	                if (template.search(Rules.close) === 0) {
	                    tagReg = Rules.close;
	                    var str = template.match(Rules.close)[0];
	                    var obj = this.generateObjectByClose(str);
	                    this.stack.push(obj);
	                    // 单标签 - 把标签解析成 react 元素，然后入栈
	                } else if (template.search(Rules.single) === 0) {
	                    tagReg = Rules.single;
	                    var _str = template.match(Rules.single)[0];
	                    var _obj = this.generateObject('single', _str);
	                    this.stack.push(_obj);
	                    // 开始标签 - 把标签解析成一个对象然后入栈
	                } else if (template.search(Rules.open) === 0) {
	                    tagReg = Rules.open;
	                    var _str2 = template.match(Rules.open)[0];
	                    var _obj2 = this.generateObject('open', _str2);
	                    this.stack.push(_obj2);
	                    // 非标签内容
	                } else if (template.search(Rules.text) === 0) {
	                    tagReg = Rules.text;
	                    var _str3 = template.match(Rules.text)[0];
	                    // if 表达式 - 已经被替换为这种格式： $E*$
	                    // else 字符串 - 直接入栈
	                    if (_str3.search(Rules.func) !== -1) {
	                        var strArr = _str3.split(Rules.func);
	                        var funcArr = _str3.match(Rules.func);
	                        var len = strArr.length;
	                        var last = strArr[len - 1];
	                        for (var i = 0; i < len - 1; i++) {
	                            !!strArr[i] && this.stack.push(strArr[i]);
	                            !!funcArr[i] && this.stack.push(this.generateFunction(funcArr[i]));
	                        }
	                        !!last && this.stack.push(last);
	                    } else {
	                        this.stack.push(_str3);
	                    }
	                    // 出错 - 截取字符串前50个字符打印出来，方便问题定位
	                } else {
	                    Message.error(template.slice(0, 50));
	                }
	                template = this.trim(template, tagReg);
	            }
	            // stack栈里只剩一个元素，pop出来即是result
	            // return this.stack.pop();
	            // return this.stack
	            return this.generateElement(this.stack);
	        }
	    }]);

	    return Html;
	}();

	exports.default = Html;

/***/ })
/******/ ]);