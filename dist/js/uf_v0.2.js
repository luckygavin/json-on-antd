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
	exports.requirejs = exports.Adaptor = exports.Model = exports.WhiteList = exports.Loader = exports.Factory = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _uf = __webpack_require__(4);

	var _uf2 = _interopRequireDefault(_uf);

	var _moment = __webpack_require__(23);

	var _moment2 = _interopRequireDefault(_moment);

	__webpack_require__(80);

	var _utils = __webpack_require__(7);

	var _cache = __webpack_require__(20);

	var _adaptor = __webpack_require__(81);

	var _adaptor2 = _interopRequireDefault(_adaptor);

	var _factory = __webpack_require__(84);

	var _factory2 = _interopRequireDefault(_factory);

	var _loader = __webpack_require__(82);

	var _loader2 = _interopRequireDefault(_loader);

	var _whitelist = __webpack_require__(87);

	var _whitelist2 = _interopRequireDefault(_whitelist);

	var _model = __webpack_require__(83);

	var _model2 = _interopRequireDefault(_model);

	var _requirejs = __webpack_require__(89);

	var _requirejs2 = _interopRequireDefault(_requirejs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 设置 moment 的 locale
	_moment2.default.locale('zh-cn');

	// 这里设置一下，domain才能同域，否则即使在同一个域名下的iframe也会有跨域问题。这一行一定不能删！
	// 本地访问的时候，domain为''，不能给domain赋值''
	!!document.domain && (document.domain = document.domain);

	var func = {
	    // ajax请求。包含 ajax(), ajax.get(), ajax.post()
	    ajax: _utils.Ajax,
	    // 暴露全部工具类
	    utils: _utils.Utils,
	    // moment 暴露全部功能
	    moment: _moment2.default,
	    // model 数据绑定页面
	    model: _model2.default,
	    // 根据组件配置 生成&渲染组件实例
	    init: function init(config, selector) {
	        var result = _react2.default.createElement(_factory2.default, { config: config });
	        // 如果没有指定目标容器的id，则直接返回生成的组件实例
	        if (!selector) {
	            return result;
	        }
	        return _reactDom2.default.render(_react2.default.createElement(_factory2.default, { config: config }), document.getElementById(selector));
	    },

	    // 获取组件
	    get: function get(name, key) {
	        var cp = _cache.ComponentsCache.get(name);
	        if (key && cp) {
	            return cp.get(key);
	        }
	        return cp;
	    },

	    // 载入自定义组件
	    load: function load(components) {
	        _loader2.default.add(components);
	    },

	    // 整体配置
	    config: function config(obj) {
	        var config = _cache.Config.set(obj);;
	        // modules 属性里定义了 requirejs的配置项，具体参数详见：http://requirejs.org/docs/api.html#config
	        _requirejs2.default.config(config.modules);
	        // 设置默认域，解决跨域问题
	        !!document.domain && (document.domain = config.global['domain']);
	    }
	};

	var UF = func.get;

	Object.assign(UF, _uf2.default, func);

	exports.default = UF;
	exports.Factory = _factory2.default;
	exports.Loader = _loader2.default;
	exports.WhiteList = _whitelist2.default;
	exports.Model = _model2.default;
	exports.Adaptor = _adaptor2.default;
	exports.requirejs = _requirejs2.default;

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

	/**
	 * @file index.js 汇总所有 src 里对用户暴露的组件
	 * @author liuzechun@baidu.com
	 */

	module.exports = Object.assign(
	// require('./dom'),
	// antd 组件统一迁移，见 src/antd/index.js
	__webpack_require__(5),
	// 路由组件
	__webpack_require__(34),
	// 其他自己实现/封装的组件
	{
	    Dom: __webpack_require__(37),

	    Iframe: __webpack_require__(39),

	    Export: __webpack_require__(45),
	    Tree: __webpack_require__(51),
	    Table: __webpack_require__(55),
	    Form: __webpack_require__(59),
	    Modal: __webpack_require__(63),

	    Table2: __webpack_require__(67)
	});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _dataentry = __webpack_require__(6);

	var DataEntry = _interopRequireWildcard(_dataentry);

	var _datadisplay = __webpack_require__(24);

	var DataDisplay = _interopRequireWildcard(_datadisplay);

	var _genaral = __webpack_require__(26);

	var Genaral = _interopRequireWildcard(_genaral);

	var _navigation = __webpack_require__(28);

	var Navigation = _interopRequireWildcard(_navigation);

	var _feedback = __webpack_require__(30);

	var Feedback = _interopRequireWildcard(_feedback);

	var _layout = __webpack_require__(32);

	var Layout = _interopRequireWildcard(_layout);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// 感觉 ES6 的方式用起来不灵活啊。。。
	// export default Object.assign({}, DataEntry, DataDisplay, Genaral, Navigation, Feedback);

	/**
	 * @file antd组件统一封装，实现几个基础抽象类做继承
	 * @author liuzechun@baidu.com
	 */
	module.exports = Object.assign({}, DataEntry, DataDisplay, Genaral, Navigation, Feedback, Layout);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Upload = exports.Switch = exports.Select = exports.Radio = exports.Rate = exports.InputNumber = exports.InputGroup = exports.InputSearch = exports.Textarea = exports.Input = exports.TimePicker = exports.RangePicker = exports.MonthPicker = exports.DatePicker = exports.CheckboxGroup = exports.Checkbox = exports.Cascader = exports.AutoComplete = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _utils = __webpack_require__(7);

	var _DataEntry18 = __webpack_require__(16);

	var _DataEntry19 = _interopRequireDefault(_DataEntry18);

	var _moment = __webpack_require__(23);

	var _moment2 = _interopRequireDefault(_moment);

	var _antd = __webpack_require__(11);

	var Antd = _interopRequireWildcard(_antd);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 数据录入 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/************ AutoComplete 自动补全 *************************************************************************** */
	// 简单的补全功能
	var AutoComplete = exports.AutoComplete = function (_DataEntry) {
	    _inherits(AutoComplete, _DataEntry);

	    function AutoComplete(props) {
	        _classCallCheck(this, AutoComplete);

	        // _onSearch 中的逻辑会注入到 onSearch 事件中，见 BaseComponent
	        var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

	        _this._injectEvent = ['onSearch'];
	        _this.__init();
	        _this.state = {
	            result: []
	        };
	        return _this;
	    }
	    // 注入到 onSearch 事件中


	    _createClass(AutoComplete, [{
	        key: '_onSearch',
	        value: function _onSearch(value) {
	            var result = [];
	            if (!!value) {
	                result = this.__props.options.map(function (i) {
	                    return value + i;
	                });
	            }
	            this.setState({ result: result });
	        }
	        // 默认对应的是 onChange

	    }, {
	        key: '_onEvent',
	        value: function _onEvent() {
	            var _get2;

	            // 对change前后的数据进行对比
	            var oldValue = this.__props.value;

	            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                params[_key] = arguments[_key];
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

	        // 异步属性为 options
	        var _this2 = _possibleConstructorReturn(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).call(this, props));

	        _this2._asyncAttr = 'options';
	        _this2.__init();
	        return _this2;
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

	        var _this3 = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

	        _this3.__controlled.key = 'checked';
	        _this3.__controlled.defaultVal = false;
	        // 异步属性为 checked
	        _this3._asyncAttr = 'checked';
	        _this3.__init();
	        return _this3;
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

	        // 异步属性为 options
	        var _this4 = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

	        _this4._asyncAttr = 'options';
	        _this4.__init();
	        return _this4;
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
	            var _get3;

	            for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                params[_key2] = arguments[_key2];
	            }

	            (_get3 = _get(BasePicker.prototype.__proto__ || Object.getPrototypeOf(BasePicker.prototype), '_initProps', this)).call.apply(_get3, [this].concat(params));
	            this.__props = this.__mergeProps({ format: 'YYYY-MM-DD' }, this.__props);
	            // 如果没有设置showTime，根据format自动增删showTime属性
	            if (_utils.Utils.typeof(this.__props.showTime, 'undefined')) {
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

	        var _this6 = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

	        _this6.__init();
	        return _this6;
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

	        var _this7 = _possibleConstructorReturn(this, (MonthPicker.__proto__ || Object.getPrototypeOf(MonthPicker)).call(this, props));

	        _this7.__init();
	        return _this7;
	    }

	    _createClass(MonthPicker, [{
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

	        var _this8 = _possibleConstructorReturn(this, (RangePicker.__proto__ || Object.getPrototypeOf(RangePicker)).call(this, props));

	        _this8.__init();
	        return _this8;
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

	        var _this9 = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

	        _this9.__init();
	        return _this9;
	    }

	    _createClass(TimePicker, [{
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

	        var _this10 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	        _this10.__init();
	        return _this10;
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

	        var _this11 = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

	        _this11.__init();
	        return _this11;
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

	        var _this12 = _possibleConstructorReturn(this, (InputSearch.__proto__ || Object.getPrototypeOf(InputSearch)).call(this, props));

	        _this12.__init();
	        return _this12;
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

	        var _this13 = _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).call(this, props));

	        _this13.__init();
	        return _this13;
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

	        var _this14 = _possibleConstructorReturn(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).call(this, props));

	        _this14.__init();
	        return _this14;
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

	        var _this15 = _possibleConstructorReturn(this, (Rate.__proto__ || Object.getPrototypeOf(Rate)).call(this, props));

	        _this15.__init();
	        return _this15;
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

	        // 异步属性为 options
	        var _this16 = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

	        _this16._asyncAttr = 'options';
	        _this16.__init();
	        return _this16;
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

	        // 异步属性为 options
	        var _this17 = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

	        _this17._asyncAttr = 'options';
	        _this17.__init();
	        return _this17;
	    }

	    _createClass(Select, [{
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

	/************* Slider 滑动输入 ************************************************************************** */

	// export class Slider extends DataEntry {
	//     constructor(props) {
	//         super(props);
	//         this.__init();
	//     }
	//     render() {
	//         return <Antd.Slider {...this.__props}/>;
	//     }
	// }


	/************* Switch 开关 ************************************************************************** */

	var Switch = exports.Switch = function (_DataEntry16) {
	    _inherits(Switch, _DataEntry16);

	    function Switch(props) {
	        _classCallCheck(this, Switch);

	        var _this18 = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

	        _this18.__controlled.key = 'checked';
	        // 异步属性为 checked
	        _this18._asyncAttr = 'checked';
	        _this18.__init();
	        return _this18;
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

	/************* Upload 开关 ************************************************************************** */

	var Upload = exports.Upload = function (_DataEntry17) {
	    _inherits(Upload, _DataEntry17);

	    function Upload(props) {
	        _classCallCheck(this, Upload);

	        var _this19 = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

	        _this19.__controlled.key = 'fileList';
	        // 异步属性为 fileList
	        _this19._asyncAttr = 'fileList';
	        _this19.__init();
	        return _this19;
	    }

	    _createClass(Upload, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Upload, this.__props);
	        }
	    }]);

	    return Upload;
	}(_DataEntry19.default);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    Utils: __webpack_require__(8).default,
	    Cache: __webpack_require__(9).default,
	    Ajax: __webpack_require__(10).default
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @file 一些常用的函数工具
	 * @author liuzechun
	 **/
	// import underscore from 'underscore';

	var I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
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
	        // return (s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4());
	        return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
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
	    // level 参数为拷贝层数，不传则默认遍历5层
	    // ** 只适用于JSON等对象字面量的对象，比较复杂的对象直接覆盖，不做深层遍历
	    merge: function merge(level, target) {
	        for (var _len = arguments.length, objs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	            objs[_key - 2] = arguments[_key];
	        }

	        if (!Utils.typeof(level, 'number')) {
	            objs.unshift(target);
	            target = level;
	            level = 5;
	        }
	        if (level <= 0) {
	            return objs[0];
	        }
	        var result = target;
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = objs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var obj = _step.value;

	                // 首先判断对象是否冻结（冻结的对象为只读对象，其属性不可直接更改），直接覆盖
	                // 其次判断两个数据的格式，只有两个数据都为引用类型时，才需要循环合并
	                // 然后判断对象是否为直接继承自Object，如果不是，复杂对象不再深层遍历，直接覆盖
	                if (!Object.isFrozen(result)
	                // array 应该直接覆盖，否则数组的值只增不减
	                // && Utils.typeof(result, '['array', 'object']')
	                // && Utils.typeof(obj, '['array', 'object']')
	                && Utils.typeof(result, 'object') && Utils.typeof(obj, 'object') && this.directInstanceof(result, Object)) {
	                    for (var i in obj) {
	                        result[i] = this.merge(level - 1, result[i], obj[i]);
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
	    // 只检查了一层
	    equals: function equals(obj1, obj2) {
	        // 方式1
	        // return JSON.stringify(obj1) === JSON.stringify(obj2);
	        // 方式2
	        // return underscore.isEqual(obj1, obj2);
	        // 方式3
	        for (var i in obj1) {
	            if (!Object.is(obj1[i], obj2[i])) {
	                return false;
	            }
	        }
	        return true;
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
	    // 推荐使用 Utils.typeof 函数
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

	    // 判断组件是否继承自某个类，支持验证自己
	    // 根据组件的引用（通过import获得）判断，支持深层查找
	    isExtendsOf: function isExtendsOf(item, superClass) {
	        if (item === superClass) return true;
	        // item.prototype.__proto__.__proto__.constructor === SuperClass
	        // let Item = item.prototype && item.prototype.__proto__;
	        // while(Item) {
	        //     if (Item.constructor === superClass) {
	        //         return true;
	        //     }
	        //     Item = Item.__proto__
	        // };
	        // return false;
	        return superClass.isPrototypeOf(item);
	    },

	    // 某个对象是否直接来自某个类的实例
	    directInstanceof: function directInstanceof(obj, cls) {
	        if (!this.typeof(cls, 'array')) {
	            cls = [cls];
	        }
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;

	        try {
	            for (var _iterator3 = cls[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                var v = _step3.value;

	                if (obj && obj.constructor && obj.constructor.prototype === v.prototype) {
	                    return true;
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

	        return false;
	    }
	};

	exports.default = Utils;

/***/ }),
/* 9 */
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
	    _cache: {},
	    set: function set(key, data) {
	        this._cache[key] = data;
	    },
	    get: function get(key, data) {
	        return this._cache[key];
	    },
	    del: function del(key) {
	        delete this._cache[key];
	    }
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _antd = __webpack_require__(11);

	var _config = __webpack_require__(12);

	var _config2 = _interopRequireDefault(_config);

	var _reqwest = __webpack_require__(15);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var errorMsg = {
	    top: 24,
	    message: '请求出错:',
	    description: '请求数据时出错，请稍后重试。',
	    duration: 3.5
	};

	// 请求出错的处理函数
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
	function errorMessage() {
	    var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _antd.notification.error(Object.assign({}, errorMsg, !error.message ? null : {
	        description: error.message
	    }));
	}

	function request(config) {
	    var globalAjax = _config2.default.get('global')['ajax'];
	    var successHandler = config.success;
	    var errorHandler = config.error || errorMessage;
	    // onchange 为请求前后执行，开始执行请求返回参数true，请求完成返回参数false
	    var onchange = config.onchange || function () {
	        return;
	    };
	    // 配置合并
	    config = Object.assign({
	        method: 'get',
	        type: 'json'
	    }, globalAjax, config, {
	        data: config.data || config.params
	    });
	    // 用户可配置通用数据处理方法，比如把传入的参数序列化
	    if (globalAjax.beforeSend) {
	        config.data = globalAjax.beforeSend(config.data, config);
	    }

	    onchange(true, 'sending');
	    (0, _reqwest2.default)(Object.assign(config, {
	        success: function success(res) {
	            // 如果用户配置了success处理逻辑，则按照用户配置的逻辑做处理
	            if (globalAjax.success) {
	                globalAjax.success(res, successHandler, errorHandler);
	                onchange(false, 'success');
	                return;
	            }
	            // 兼容 message/msg、status/code
	            res.status = res.status || res.code || 0;
	            res.message = res.message || res.msg;
	            if (+res.status === 0) {
	                successHandler(res.data, res);
	            } else {
	                // 如果错误处理函数返回 true，则继续执行 errorHandle 把错误提示抛出
	                if (errorHandler(res) === true) {
	                    errorMessage(res);
	                }
	            }
	            onchange(false, 'success');
	        },
	        error: function error(err) {
	            // 如果用户配置了success处理逻辑，则按照用户配置的逻辑做处理
	            if (globalAjax.error) {
	                globalAjax.error(err, errorHandler);
	                onchange(false, 'success');
	                return;
	            }
	            if (errorHandler(err) === true) {
	                errorMessage(err);
	            }
	            onchange(false, 'error');
	        }
	    }
	    // 用户自己配置的处理逻辑
	    // Config.get('global')['ajax']
	    ));
	};

	request.get = function (url, params, success, error, onchange) {
	    request({
	        url: url,
	        method: 'get',
	        data: params,
	        onchange: onchange,
	        success: success,
	        error: error
	    });
	};

	request.post = function (url, params, success, error, onchange) {
	    request({
	        url: url,
	        method: 'post',
	        data: params,
	        onchange: onchange,
	        success: success,
	        error: error
	    });
	};

	// 抛出错误处理函数
	request.errorMessage = errorMessage;

	// 通用ajax函数，参数为一个对象
	exports.default = request;

	// export default function (url, method) {
	//     return function (params, success, error, onchange) {
	//         request({
	//             url: url,
	//             method: method,
	//             data: params,
	//             onchange: onchange,
	//             success: success,
	//             error: error
	//         });
	//     }
	// }

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = window.DLL.Antd;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _BaseCache = __webpack_require__(13);

	var _BaseCache2 = _interopRequireDefault(_BaseCache);

	var _default = __webpack_require__(14);

	var _default2 = _interopRequireDefault(_default);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file 默认配置
	 *      可以用于配置各个组件通用的默认参数
	 *      用户可以使用 `UF.config()` 来更改或者自定义任何默认参数
	 * @author liuzechun
	 * Created Date: 2017-10-11 01:40:57
	 *
	 * Last Modified: 2017-10-11 01:42:17
	 * Modified By: liuzechun
	 */

	var _key = '_uf-config';

	var _cache = {
	    // 模块引入相关配置
	    modules: {
	        // 加载模块时是否展示loading
	        showLoading: false
	    },
	    // 全局系统配置
	    global: {
	        // 设置文档域 document.domain，默认为原始值
	        domain: document.domain,
	        // ajax 的全局配置，可更改全部 ajax 规则（例如报错规则）
	        ajax: {}
	    },
	    // 用于存放一些公用数据或静态数据（供select等组件直接调用）
	    data: {},
	    // 组件默认配置
	    components: _default2.default
	};

	exports.default = new _BaseCache2.default(_key, _cache);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @file 缓存基类
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      每 new 一次，会产生一个对象实例来做一类缓存
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created Date: 2017-10-24 11:05:57
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _cache2 = __webpack_require__(9);

	var _cache3 = _interopRequireDefault(_cache2);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseCache = function () {
	    // 构造函数又两个参数，第一个参数必填，为缓存前缀，第二个参数为缓存对象的默认值
	    function BaseCache(_key, _cache) {
	        _classCallCheck(this, BaseCache);

	        this._key = _key || '_uf-default';
	        this._cache = _cache || {};
	        this.__init();
	    }

	    _createClass(BaseCache, [{
	        key: '__init',
	        value: function __init() {
	            // 统一放到 Cache 里管理
	            _cache3.default.set(this._key, this._cache);
	        }
	    }, {
	        key: 'get',
	        value: function get(name) {
	            // 如果传递了name，则只去config中name字段，否则返回全部
	            // return (!!name ? this._cache[name] : this._cache) || {};
	            return !!name ? this._cache[name] : this._cache;
	        }
	        // set函数有两种用法
	        // 如果 target 为字符串，则直接替换缓存中 target 保存的值
	        // 如果传入的第一个参数不是一个 target 字符串，而是一个对象，则把对象和现有缓存做merge，适用于 config.js 等

	    }, {
	        key: 'set',
	        value: function set(target, comp) {
	            if (_utils2.default.typeof(target, 'object')) {
	                var origin = this.get();
	                var config = _utils2.default.merge(10, origin, target);
	                // 存完后返回存储的值
	                return config;
	            } else {
	                this._cache[target] = comp;
	                return comp;
	            }
	        }
	    }, {
	        key: 'del',
	        value: function del(key) {
	            delete this._cache[key];
	        }
	    }]);

	    return BaseCache;
	}();

	exports.default = BaseCache;
	;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _router$loading$ifram;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * @file 组件默认参数定义
	 * @author liuzechun
	 * Created Date: 2017-10-12 03:23:12
	 *
	 * Last Modified: 2017-10-12 03:23:16
	 * Modified By: liuzechun
	 */

	exports.default = (_router$loading$ifram = {
	    // 路由
	    'router': {
	        history: 'hashHistory'
	    },
	    // Loading
	    'loading': {
	        delay: 150
	    },
	    // Iframe
	    'iframe': {
	        mode: 'auto',
	        delay: 0,
	        showLoading: true
	    },
	    'select': {
	        optionFilterProp: 'children'
	    },
	    // 面包屑
	    'breadcrumb': {
	        style: { margin: '12px 24px' }
	    }
	}, _defineProperty(_router$loading$ifram, 'select', {
	    style: { width: 120 }
	}), _defineProperty(_router$loading$ifram, 'auto-complete', {
	    style: { width: 160 },
	    options: []
	}), _defineProperty(_router$loading$ifram, 'month-picker', {
	    format: 'YYYY-MM'
	}), _defineProperty(_router$loading$ifram, 'time-picker', {
	    format: 'HH:mm:ss'
	}), _defineProperty(_router$loading$ifram, 'form', {
	    items: [],
	    buttons: null,
	    layout: {
	        type: 'horizontal',
	        labelCol: 6,
	        wrapperCol: 14
	    }
	}), _defineProperty(_router$loading$ifram, 'table', {
	    pagination: {
	        current: 1,
	        pageSize: 10,
	        pageType: 'client',
	        total: 0
	    }
	}), _router$loading$ifram);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = window.DLL.reqwest;

/***/ }),
/* 16 */
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

	var _Antd2 = __webpack_require__(17);

	var _Antd3 = _interopRequireDefault(_Antd2);

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 数据录入 相关的组件抽象类，如：Input等
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-09-29 01:11:19
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Last Modified: 2017-09-29 07:28:11
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Modified By: liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var DataEntry = function (_Antd) {
	    _inherits(DataEntry, _Antd);

	    function DataEntry(props) {
	        _classCallCheck(this, DataEntry);

	        // 默认异步属性为 value
	        var _this = _possibleConstructorReturn(this, (DataEntry.__proto__ || Object.getPrototypeOf(DataEntry)).call(this, props));

	        _this._asyncAttr = 'value';
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
	            var key = this.__controlled.key;
	            // console.log(params[1]);

	            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                params[_key - 1] = arguments[_key];
	            }

	            if (_utils.Utils.typeof(params[0], 'object') && params[0].target) {
	                // 适合的组件：input、input-number、checkbox、radio
	                this.__props[key] = params[0].target[key];
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

	            callback && callback.apply(undefined, params);
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
/* 17 */
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

	var _component = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Antd 全部组件的基类，其中实现了接管受控属性的逻辑
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-09-29 01:11:19
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Antd = function (_BaseComponent) {
	    _inherits(Antd, _BaseComponent);

	    function Antd(props) {
	        _classCallCheck(this, Antd);

	        // 用于设置当前壳子调用的antd组件类，需在最终壳子上设置
	        // this._class = null;
	        // 声明异步获取的数据放在哪个字段，默认为 children ，即默认把返回的内容放到子组件中
	        // 如果用户自己配置了 sourceTarget 属性，则按照用户定义的赋值
	        var _this = _possibleConstructorReturn(this, (Antd.__proto__ || Object.getPrototypeOf(Antd)).call(this, props));

	        _this._asyncAttr = 'children';
	        // __props 需要过滤的属性
	        _this._filter.push('source', 'sourceHandler', 'sourceTarget', 'sourceMethod', 'sourceParams');
	        // 壳子调用antd组件，调用的组件的实例存储在_component中
	        _this._component = null;
	        // 受控属性名，供子类设置。如果子类设置了此属性，则会绑定change事件，同时也受控于用户传入的此值。见 _handleControlled
	        _this.__controlled = null;
	        return _this;
	    }

	    // 触发组件上的原生事件，例如 focus、change 等


	    _createClass(Antd, [{
	        key: 'trigger',
	        value: function trigger(event) {
	            if (this._component && this._component[event]) {
	                for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                    params[_key - 1] = arguments[_key];
	                }

	                this._component[event](params);
	            } else {
	                console.warn('there is no event named: ' + event);
	            }
	        }
	    }, {
	        key: '__init',
	        value: function __init() {
	            var _get2,
	                _this2 = this;

	            for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                params[_key2] = arguments[_key2];
	            }

	            (_get2 = _get(Antd.prototype.__proto__ || Object.getPrototypeOf(Antd.prototype), '__init', this)).call.apply(_get2, [this].concat(params));
	            // 保存原始antd组件的引用
	            this.__props['ref'] = function (ele) {
	                return _this2._component = ele;
	            };
	            // 受控配置 - 如果不为null,则合并覆盖
	            this.__controlled = this.__controlled ? this.__mergeProps({
	                key: 'value',
	                event: 'onChange',
	                defaultVal: '',
	                paramsIndex: 0
	            }, this.__controlled) : null;
	            // 受控组件默认处理逻辑
	            this._handleControlled();
	        }

	        // 组件渲染完成后，执行逻辑

	    }, {
	        key: '_componentDidMount',
	        value: function _componentDidMount() {
	            var _get3;

	            for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                params[_key3] = arguments[_key3];
	            }

	            _get(Antd.prototype.__proto__ || Object.getPrototypeOf(Antd.prototype), '_componentDidMount', this) && (_get3 = _get(Antd.prototype.__proto__ || Object.getPrototypeOf(Antd.prototype), '_componentDidMount', this)).call.apply(_get3, [this].concat(params));
	            this._handleAsyncData();
	        }

	        // 自动异步获取数据

	    }, {
	        key: '_handleAsyncData',
	        value: function _handleAsyncData() {
	            var _this3 = this;

	            if (this.__filtered.source) {
	                this.__ajax({
	                    url: this.__filtered.source,
	                    method: this.__filtered.sourceMethod || 'get',
	                    data: this.__filtered.sourceParams,
	                    success: function success(data, res) {
	                        // 如果用户定义了数据处理函数，先对数据进行处理
	                        if (_this3.__filtered.sourceHandler) {
	                            data = _this3.__filtered.sourceHandler(data, res, _this3);
	                        }
	                        // 如果用户自己配置了 sourceTarget 属性，则按照用户定义的赋值
	                        var target = _this3.__filtered.sourceTarget || _this3._asyncAttr;
	                        target = target === 'content' ? 'children' : target;
	                        _this3.__props[target] = data;
	                        _this3.forceUpdate();
	                    }
	                });
	            }
	        }

	        // 受控属性绑定change事件，同时也受控于用户传入的值

	    }, {
	        key: '_handleControlled',
	        value: function _handleControlled() {
	            if (!this.__controlled) {
	                return;
	            }
	            var _controlled = this.__controlled,
	                key = _controlled.key,
	                defaultVal = _controlled.defaultVal,
	                event = _controlled.event;
	            // 受控属性对应的默认属性，(如：value => defaultValue)

	            var defaultKey = 'default' + key.replace(/^\w/g, function (v) {
	                return v.toUpperCase();
	            });
	            var onEvent = this.__props[event];
	            // 把value和defaultValue merge一下，统一交由 value 控制
	            var keyValue = this.__props[key] || this.__props[defaultKey];
	            // 如果这个值为空，否则受控属性为空会出现异常
	            if (keyValue !== undefined) {
	                this.__props[key] = keyValue;
	            } else {
	                // 屏蔽warning，非受控组件转换为受控组件会报warning
	                this.__props[key] = defaultVal;
	            }
	            this.__props[event] = this._onEvent.bind(this, onEvent);
	        }

	        // 同步onChange的数据到受控属性上，默认取第一个参数
	        // ** 可直接被子类覆盖重写 **
	        // **     如果有其他需求可以直接覆盖重写，注意函数内要调用下 callback（如：DataEntry中用法）

	    }, {
	        key: '_onEvent',
	        value: function _onEvent(callback) {
	            var _controlled2 = this.__controlled,
	                key = _controlled2.key,
	                paramsIndex = _controlled2.paramsIndex;

	            for (var _len4 = arguments.length, params = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	                params[_key4 - 1] = arguments[_key4];
	            }

	            if (key) {
	                this.__props[key] = params[paramsIndex];
	                this.forceUpdate();
	            }

	            callback && callback.apply(undefined, params);
	        }
	    }]);

	    return Antd;
	}(_component.BaseComponent);

	exports.default = Antd;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    BaseComponent: __webpack_require__(19).default
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(7);

	var _tools = __webpack_require__(1);

	var _tools2 = _interopRequireDefault(_tools);

	var _cache = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 基础类
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by xuziqian on 2017/8/4.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// React的生命周期中的7个常用函数，为了防止函数被终的子组件覆盖，这7个函数会经过逻辑处理
	// 中间子类在使用这几个函数的时候，需要在函数最前面调用parent.[func]()
	var PreventCoverageMap = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'shouldComponentUpdate'];

	// 提供给用户的和生命周期相关的函数，命名更加语义化
	var ForUserApi = {
	    beforeRender: 'componentWillMount',
	    afterRender: 'componentDidMount',
	    beforeUpdate: 'componentWillUpdate',
	    afterUpdate: 'componentDidUpdate',
	    beforeDestroy: 'componentWillUnmount'
	};

	// export default class BaseComponent extends Component {

	var BaseComponent = function (_PureComponent) {
	    _inherits(BaseComponent, _PureComponent);

	    function BaseComponent(props) {
	        _classCallCheck(this, BaseComponent);

	        var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

	        _this.type = _this.props.__type;
	        // this.key = this.props.__key;
	        // 组件缓存的key。有值的话组件才会缓存，如果值为null，则不会做缓存
	        _this.cacheName = _this._getTransmitName();
	        // _root 是最初 Factory 的 props，传给每个组件方便使用（例如路由信息，props.routes）
	        _this._root = _this.props._root;
	        _this._factory = _this.props._factory;
	        // 开发时自定义的需注入到事件中的函数，例如 AutoComplete 组件中的 'onSearch' 函数
	        _this._injectEvent = [];
	        // 转化为 __props 时需过滤的属性
	        _this._filter = ['__cache', '__type', '__key', '_root', '_factory'].concat(Object.keys(ForUserApi));
	        // 从缓存中读出组件的默认参数。参数来源可以是在 config.js 里配置；也可以是用户通过调用 UF.config() 配置
	        // （如 loading 组件的 delay 参数在 config.js 中定义为 150）
	        // 开发组件的时候，也可以在this.__props上增加一些默认的参数（注意不要直接用对象覆盖）
	        _this.__props = _cache.Config.get('components')[_this.props.__type] || {};
	        // 用于存放被过滤掉的props上的属性，使用户重新set也可以生效（如果直接在props上取的话，set不会触发props更新，被过滤掉的属性就无法再更新了）
	        _this.__filtered = {};
	        return _this;
	    }

	    /* 暴露给用户的方法 ***********************************************************************/

	    // 暴露给用户刷新组件的接口


	    _createClass(BaseComponent, [{
	        key: 'set',
	        value: function set(options) {
	            // 使用 factory.handleProps 函数处理用户配置的参数，并生成组件需要使用的 props
	            options = this._factory.handleProps(Object.assign({ type: this.type }, options));

	            // 要保证调用cwr时传入的nextProps的完整性
	            var props = this.__mergeProps({}, this.__props, options);
	            // cwr一定存在，且cwr中会执行_initProps。不管子组件是否用的是__props，都能保证兼容性
	            // 因为默认会更改__props并且forceUpdate；如果组件用的自己的props，必定会自己实现cwr中的逻辑
	            this.componentWillReceiveProps(props, this.__props);
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
	            // 以下几个函数执行顺序固定，请慎重调整！！
	            // 把父类中设置的需注入到生命周期中的逻辑注入到对应生命周期函数中
	            this._injectFunction();
	            // 共享组件
	            this._transmitComponent();
	            // 后面传入组件的参数用 __props 代替 props
	            this._initProps();
	            // 处理数据绑定页面
	            this._handleModel();
	            // 把__props上的全部回调函数的最后增加一个参数设置为组件本身，方便使用
	            this._updateCallback();
	            // 挂载用户传入的需要关联到生命周期中的函数（这个把生命周期的函数做个一个转换，更加语义化）
	            this._loadUserFunction();
	            // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中（防止被覆盖）
	            this._injectEventFunction();
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
	        value: function __getData() {
	            _utils.Ajax.get.apply(_utils.Ajax, arguments);
	        }

	        // ajax的post方法

	    }, {
	        key: '__postData',
	        value: function __postData() {
	            _utils.Ajax.post.apply(_utils.Ajax, arguments);
	        }

	        // ajax通用方法

	    }, {
	        key: '__ajax',
	        value: function __ajax(params) {
	            (0, _utils.Ajax)(params);
	        }

	        // 解析某个属性的配置。方便开发组件是定义一些可以为配置的属性

	    }, {
	        key: '__analysis',
	        value: function __analysis(item) {
	            return this._factory.generateElement(item);
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
	        // 有两种情况会调用cwr：
	        //  一种是父组件刷新，传入新的props，如果props确实发生了变化，则需要重新调用_initProps
	        //  还有一种是set函数调用的，params中没有额外参数，nextProps肯定和this.props不同

	    }, {
	        key: '_componentWillReceiveProps',
	        value: function _componentWillReceiveProps(nextProps) {
	            // cwr函数执行很频繁，这里对一些props不变的情况进行一些过滤
	            if (!_utils.Utils.equals(this.props, nextProps)) {
	                // 是否把_initProps的调用放到render中更好一点？（会有个问题：使用set函数重新设置props时，会有额外的重复调用）
	                this._initProps(nextProps);
	            }
	        }

	        // 过滤 props，生成 __props 和 __filterProps

	    }, {
	        key: '_filterHandler',
	        value: function _filterHandler(props) {
	            var newProps = {};
	            for (var i in props) {
	                if (props.hasOwnProperty(i)) {
	                    if (this._filter.indexOf(i) === -1) {
	                        newProps[i] = props[i];
	                    } else {
	                        this.__filtered[i] = props[i];
	                    }
	                }
	            }
	            return newProps;
	        }

	        // 后面传入组件的参数用 __props 代替 props

	    }, {
	        key: '_initProps',
	        value: function _initProps(props) {

	            // 去除掉多余的属性（解决报warning问题）
	            var __props = this._filterHandler(props || this.props);
	            this.__prevProps = this.__props;
	            // 在这里把新值和旧值进行merge，使得支持开发组件时通过直接在构造函数中给this.__props赋值来定义一些默认参数，可简化一些开发工作
	            // （见构造函数中 this.__props 用法【可参考 Iframe、Modal 】）
	            this.__props = this.__mergeProps({}, this.__props, __props);

	            // __init函数中调用的时候不会传props，也不需要刷新组件
	            if (props) {
	                this.forceUpdate();
	            }
	        }

	        // 获取key的名称

	    }, {
	        key: '_getTransmitName',
	        value: function _getTransmitName() {
	            // 根据 __cache 属性判断
	            var key = this.props.__cache;
	            if (!!this.props.route && this.props.route.__cache) {
	                key = this.props.route.__cache;
	            }
	            // 如果没有key，则根据是否关联model数据判断
	            if (!key) {
	                if (_tools.Model.if(this.props)) {
	                    key = this.props.__key;
	                }
	            }
	            return key;
	        }

	        // 共享组件

	    }, {
	        key: '_transmitComponent',
	        value: function _transmitComponent() {
	            if (!!this.cacheName) {
	                _cache.ComponentsCache.set(this.cacheName, this);
	            }
	        }

	        // 解除共享

	    }, {
	        key: '_unsetTransmitComponent',
	        value: function _unsetTransmitComponent() {
	            if (!!this.cacheName) {
	                _cache.ComponentsCache.del(this.cacheName);
	            }
	        }

	        // 处理数据绑定页面。设置关联关系 && 替换模板

	    }, {
	        key: '_handleModel',
	        value: function _handleModel() {
	            this.__props = _tools.Model.setCache(this.cacheName, this.__props);
	        }

	        // 更新配置中的回调函数，给回调函数的最后增加一个参数为组件本身，方便使用

	    }, {
	        key: '_updateCallback',
	        value: function _updateCallback(props) {
	            var _this2 = this;

	            !props && (props = this.__props);

	            var _loop = function _loop(i) {
	                var item = props[i];
	                // 不是冻结对象，且不是类
	                if (item && !Object.isFrozen(item) && !_utils.Utils.isExtendsOf(item, _react2.default.Component)) {
	                    if (_utils.Utils.typeof(item, 'function')) {
	                        props[i] = function () {
	                            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                                params[_key] = arguments[_key];
	                            }

	                            return item.call.apply(item, [_this2].concat(params, [_this2]));
	                        };
	                    } else if (_utils.Utils.typeof(item, 'object') && _utils.Utils.directInstanceof(item, Object) || _utils.Utils.typeof(item, 'array')) {
	                        _this2._updateCallback(item);
	                    }
	                }
	            };

	            for (var i in props) {
	                _loop(i);
	            }
	        }

	        // 把父组件定义的 需在React的生命周期中的7个函数中增加的处理逻辑 注入到对应的7个函数中

	    }, {
	        key: '_injectFunction',
	        value: function _injectFunction() {
	            var _this3 = this;

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                var _loop2 = function _loop2() {
	                    var v = _step.value;

	                    // 如果父组件中有等待注入的函数
	                    var inject = _this3['_' + v];
	                    if (inject) {
	                        var origin = _this3[v];
	                        _this3[v] = !!origin ? function () {
	                            for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                                params[_key2] = arguments[_key2];
	                            }

	                            inject.call.apply(inject, [_this3].concat(params));
	                            origin.call.apply(origin, [_this3].concat(params));
	                        } : inject.bind(_this3);
	                    }
	                };

	                for (var _iterator = PreventCoverageMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    _loop2();
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

	        // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中，可见 AutoComplete 组件中的 'onSearch' 函数

	    }, {
	        key: '_injectEventFunction',
	        value: function _injectEventFunction() {
	            var _this4 = this;

	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                var _loop3 = function _loop3() {
	                    var v = _step2.value;

	                    var inject = _this4['_' + v];
	                    if (inject) {
	                        var origin = _this4.__props[v];
	                        _this4.__props[v] = !!origin ? function () {
	                            for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                                params[_key3] = arguments[_key3];
	                            }

	                            inject.call.apply(inject, [_this4].concat(params));
	                            origin.call.apply(origin, [_this4].concat(params));
	                        } : inject.bind(_this4);
	                    }
	                };

	                for (var _iterator2 = this._injectEvent[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    _loop3();
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

	        // 挂载用户传入的需要关联到生命周期中的函数

	    }, {
	        key: '_loadUserFunction',
	        value: function _loadUserFunction() {
	            var _this5 = this;

	            var _loop4 = function _loop4(f) {
	                // 如果props中有等待注入的函数
	                var inject = _this5.__filtered[f];
	                if (inject) {
	                    var _v = ForUserApi[f];
	                    var origin = _this5[_v];
	                    _this5[_v] = function () {
	                        for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	                            params[_key4] = arguments[_key4];
	                        }

	                        // 先执行默认逻辑，再执行用户逻辑                    
	                        origin && origin.call.apply(origin, [_this5].concat(params));
	                        var result = inject.call(_this5, _this5.__props, _this5);
	                        // 组件渲染/刷新前可以让用户有机会改参数
	                        if (result && ['beforeRender', 'beforeUpdate'].indexOf(f) !== -1) {
	                            // 防止用户设置过滤属性
	                            _this5.__props = _this5._filterHandler(result);
	                        }
	                    };
	                }
	            };

	            for (var f in ForUserApi) {
	                _loop4(f);
	            }
	        }
	    }]);

	    return BaseComponent;
	}(_react.PureComponent);

	exports.default = BaseComponent;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    Config: __webpack_require__(12).default,
	    ComponentsCache: __webpack_require__(21).default,
	    ModelCache: __webpack_require__(22).default
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _BaseCache = __webpack_require__(13);

	var _BaseCache2 = _interopRequireDefault(_BaseCache);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _key = '_uf-components'; /**
	                              * @file 组件实例缓存
	                              * @author liuzechun
	                              * Created Date: 2017-10-24 01:40:57
	                              */

	exports.default = new _BaseCache2.default(_key);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(7);

	var _BaseCache2 = __webpack_require__(13);

	var _BaseCache3 = _interopRequireDefault(_BaseCache2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 组件实例缓存
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-10-24 01:40:57
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var _key = '_uf-models';
	var _cache = {
	    // origin: {},
	    data: {
	        a: 1
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

	var Models = function (_BaseCache) {
	    _inherits(Models, _BaseCache);

	    function Models() {
	        _classCallCheck(this, Models);

	        return _possibleConstructorReturn(this, (Models.__proto__ || Object.getPrototypeOf(Models)).call(this, _key, _cache));
	    }
	    // 获取摸个model点关联的数据


	    _createClass(Models, [{
	        key: 'getData',
	        value: function getData(model) {
	            var result = this._cache.data;
	            if (!!model) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = model.split('.')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var v = _step.value;

	                        if (_utils.Utils.typeof(result, 'object')) {
	                            result = result[v];
	                        } else {
	                            // console.error(`Uncaught TypeError: model '${model}' is invalid.`);
	                            // 获取不到的数据全部返回空字符串
	                            result = '';
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
	            }
	            return result || '';
	        }
	        // 获取摸个model点关联的组件

	    }, {
	        key: 'getModel',
	        value: function getModel(model) {
	            return !!name ? this._cache.model[name] : this._cache.model;
	        }
	        // 获取某个model点影响的所有组件及属性

	    }, {
	        key: 'getConnections',
	        value: function getConnections(model) {
	            var models = this.getModel();
	            var connectionsMode = model + '.';
	            var result = _utils.Utils.copy(models[model]);
	            for (var i in models) {
	                if (i.indexOf(connectionsMode) !== -1) {
	                    var item = models[i];
	                    for (var j in item) {
	                        if (result[j]) {
	                            var itemComp = item[j];
	                            var resultComp = result[j];
	                            for (var k in itemComp) {
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

	    }, {
	        key: 'setData',
	        value: function setData(model, data) {
	            var origin = this.getData();
	            var arr = model.split('.');
	            var target = origin;
	            var parent = void 0,
	                v = void 0;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    v = _step2.value;

	                    if (!_utils.Utils.typeof(target[v], 'object')) {
	                        target[v] = {};
	                    }
	                    parent = target;
	                    target = parent[v];
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

	            parent[v] = data;
	        }
	    }, {
	        key: 'setModel',
	        value: function setModel(model, data) {}
	    }, {
	        key: '_setAttr',
	        value: function _setAttr() {
	            this._cache.components[comp];
	        }
	    }]);

	    return Models;
	}(_BaseCache3.default);

	exports.default = new Models();

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = window.DLL.moment;

/***/ }),
/* 24 */
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

	var _utils = __webpack_require__(7);

	var _DataDisplay16 = __webpack_require__(25);

	var _DataDisplay17 = _interopRequireDefault(_DataDisplay16);

	var _antd = __webpack_require__(11);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(17);

	var _Antd3 = _interopRequireDefault(_Antd2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 数据展示 组件抽象类，如：Card、Tooltip 等
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-09-29 07:27:33
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Last Modified: 2017-09-29 07:27:40
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Modified By: liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var DataDisplay = function (_Antd) {
	  _inherits(DataDisplay, _Antd);

	  function DataDisplay() {
	    _classCallCheck(this, DataDisplay);

	    return _possibleConstructorReturn(this, (DataDisplay.__proto__ || Object.getPrototypeOf(DataDisplay)).apply(this, arguments));
	  }

	  return DataDisplay;
	}(_Antd3.default);

	exports.default = DataDisplay;

/***/ }),
/* 26 */
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

	var _Genaral14 = __webpack_require__(27);

	var _Genaral15 = _interopRequireDefault(_Genaral14);

	var _antd = __webpack_require__(11);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(17);

	var _Antd3 = _interopRequireDefault(_Antd2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 通用的组件 抽象类，如：Button、Icon 等
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-09-29 07:27:24
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Last Modified: 2017-09-29 07:28:35
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Modified By: liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Genaral = function (_Antd) {
	  _inherits(Genaral, _Antd);

	  function Genaral() {
	    _classCallCheck(this, Genaral);

	    return _possibleConstructorReturn(this, (Genaral.__proto__ || Object.getPrototypeOf(Genaral)).apply(this, arguments));
	  }

	  return Genaral;
	}(_Antd3.default);

	exports.default = Genaral;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Step = exports.Steps = exports.Pagination = exports.SubMenu = exports.MenuItemGroup = exports.MenuItem = exports.Menu = exports.DropdownButton = exports.Dropdown = exports.Breadcrumb = exports.Affix = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Navigation12 = __webpack_require__(29);

	var _Navigation13 = _interopRequireDefault(_Navigation12);

	var _antd = __webpack_require__(11);

	var Antd = _interopRequireWildcard(_antd);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 导航 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-09-26 01:18:00
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Last Modified: 2017-09-29 07:31:44
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Modified By: liuzechun
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
	}(_Navigation13.default);

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
	        key: '_initProps',
	        value: function _initProps() {
	            var _get2;

	            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                params[_key] = arguments[_key];
	            }

	            (_get2 = _get(Breadcrumb.prototype.__proto__ || Object.getPrototypeOf(Breadcrumb.prototype), '_initProps', this)).call.apply(_get2, [this].concat(params));
	            // 如果用户配置了options，则按照用户配置的options列表类展示面包屑
	            var options = this.__props.options;
	            if (options) {
	                var result = [];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var v = _step.value;

	                        result.push(_react2.default.createElement(Antd.Breadcrumb.Item, { children: v }));
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

	                this.__props.children = result;
	            } else {
	                this.__props.routes = this._root.routes;
	                this.__props.params = this._root.params;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Breadcrumb, this.__props);
	        }
	    }]);

	    return Breadcrumb;
	}(_Navigation13.default);

	/************ Dropdown 下拉菜单 *************************************************************************** */

	var Dropdown = exports.Dropdown = function (_Navigation3) {
	    _inherits(Dropdown, _Navigation3);

	    function Dropdown(props) {
	        _classCallCheck(this, Dropdown);

	        var _this3 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(Dropdown, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Dropdown, this.__props);
	        }
	    }]);

	    return Dropdown;
	}(_Navigation13.default);

	var DropdownButton = exports.DropdownButton = function (_Navigation4) {
	    _inherits(DropdownButton, _Navigation4);

	    function DropdownButton(props) {
	        _classCallCheck(this, DropdownButton);

	        var _this4 = _possibleConstructorReturn(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(DropdownButton, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Dropdown.Button, this.__props);
	        }
	    }]);

	    return DropdownButton;
	}(_Navigation13.default);

	/************ Menu 导航菜单 *************************************************************************** */

	var Menu = exports.Menu = function (_Navigation5) {
	    _inherits(Menu, _Navigation5);

	    function Menu(props) {
	        _classCallCheck(this, Menu);

	        var _this5 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

	        _this5.__controlled = {
	            key: 'selectedKeys',
	            event: 'onSelect',
	            defaultVal: []
	        };
	        _this5.__init();
	        return _this5;
	    }
	    // 见 BaseComponent


	    _createClass(Menu, [{
	        key: '_onEvent',
	        value: function _onEvent(callback) {
	            for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                params[_key2 - 1] = arguments[_key2];
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
	}(_Navigation13.default);
	// Menu.Item 组件


	var MenuItem = exports.MenuItem = function (_Navigation6) {
	    _inherits(MenuItem, _Navigation6);

	    function MenuItem(props) {
	        _classCallCheck(this, MenuItem);

	        var _this6 = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

	        _this6.__init();
	        return _this6;
	    }

	    _createClass(MenuItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Menu.Item, this.__props);
	        }
	    }]);

	    return MenuItem;
	}(_Navigation13.default);
	// Menu.ItemGroup 组件


	var MenuItemGroup = exports.MenuItemGroup = function (_Navigation7) {
	    _inherits(MenuItemGroup, _Navigation7);

	    function MenuItemGroup(props) {
	        _classCallCheck(this, MenuItemGroup);

	        var _this7 = _possibleConstructorReturn(this, (MenuItemGroup.__proto__ || Object.getPrototypeOf(MenuItemGroup)).call(this, props));

	        _this7.__init();
	        return _this7;
	    }

	    _createClass(MenuItemGroup, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Menu.ItemGroup, this.__props);
	        }
	    }]);

	    return MenuItemGroup;
	}(_Navigation13.default);
	// Menu.SubMenu 组件


	var SubMenu = exports.SubMenu = function (_Navigation8) {
	    _inherits(SubMenu, _Navigation8);

	    function SubMenu(props) {
	        _classCallCheck(this, SubMenu);

	        var _this8 = _possibleConstructorReturn(this, (SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).call(this, props));

	        _this8.__init();
	        return _this8;
	    }

	    _createClass(SubMenu, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Menu.SubMenu, this.__props);
	        }
	    }]);

	    return SubMenu;
	}(_Navigation13.default);

	/************ Pagination 分页 *************************************************************************** */

	var Pagination = exports.Pagination = function (_Navigation9) {
	    _inherits(Pagination, _Navigation9);

	    function Pagination(props) {
	        _classCallCheck(this, Pagination);

	        // current为受控属性，父类中统一实现属性的绑定和变更（BaseComponent）
	        // event: onChange / paramsIndex: 0
	        var _this9 = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

	        _this9.__controlled = {
	            key: 'current'
	        };
	        _this9.__init();
	        return _this9;
	    }

	    _createClass(Pagination, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Pagination, this.__props);
	        }
	    }]);

	    return Pagination;
	}(_Navigation13.default);

	/************ Steps 步骤条 *************************************************************************** */

	var Steps = exports.Steps = function (_Navigation10) {
	    _inherits(Steps, _Navigation10);

	    function Steps(props) {
	        _classCallCheck(this, Steps);

	        var _this10 = _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this, props));

	        _this10.__init();
	        return _this10;
	    }

	    _createClass(Steps, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Steps, this.__props);
	        }
	    }]);

	    return Steps;
	}(_Navigation13.default);
	// Step 单条步骤


	var Step = exports.Step = function (_Navigation11) {
	    _inherits(Step, _Navigation11);

	    function Step(props) {
	        _classCallCheck(this, Step);

	        var _this11 = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this, props));

	        _this11.__init();
	        return _this11;
	    }

	    _createClass(Step, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Steps.Step, this.__props);
	        }
	    }]);

	    return Step;
	}(_Navigation13.default);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(17);

	var _Antd3 = _interopRequireDefault(_Antd2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 导航 相关的组件抽象类，如：Menu等
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-09-29 07:27:17
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Last Modified: 2017-09-29 07:28:48
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Modified By: liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Navigation = function (_Antd) {
	  _inherits(Navigation, _Antd);

	  function Navigation() {
	    _classCallCheck(this, Navigation);

	    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
	  }

	  return Navigation;
	}(_Antd3.default);

	exports.default = Navigation;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.notification = exports.message = exports.Loading = exports.Progress = exports.Alert = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Feedback4 = __webpack_require__(31);

	var _Feedback5 = _interopRequireDefault(_Feedback4);

	var _utils = __webpack_require__(7);

	var _tools = __webpack_require__(1);

	var _tools2 = _interopRequireDefault(_tools);

	var _antd = __webpack_require__(11);

	var Antd = _interopRequireWildcard(_antd);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Layout 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


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

	/************* message 提示 ************************************************************************** */

	// 统一处理config（某些属性需要二次解析）


	function messageHandler(type, content) {
	    var _Antd$message;

	    var _arr = ['content'];

	    for (var _i = 0; _i < _arr.length; _i++) {
	        var v = _arr[_i];
	        if (content[v] && !_utils.Utils.typeof(content[v], 'string')) {
	            content[v] = _tools2.default.init(content[v]);
	        }
	    }

	    for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        params[_key - 2] = arguments[_key];
	    }

	    return (_Antd$message = Antd.message)[type].apply(_Antd$message, [content].concat(params));
	}

	var message = exports.message = Object.assign({}, Antd.message, {
	    success: messageHandler.bind(null, 'success'),
	    error: messageHandler.bind(null, 'error'),
	    info: messageHandler.bind(null, 'info'),
	    warning: messageHandler.bind(null, 'warning'),
	    warn: messageHandler.bind(null, 'warn'),
	    loading: messageHandler.bind(null, 'loading')
	});

	/************* message 提示 ************************************************************************** */

	function notificationHandler(type, config) {
	    var _arr2 = ['message', 'description', 'btn', 'icon'];

	    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
	        var v = _arr2[_i2];
	        if (config[v] && !_utils.Utils.typeof(config[v], 'string')) {
	            config[v] = _tools2.default.init(config[v]);
	        }
	    }
	    return Antd.notification[type](config);
	}

	var notification = exports.notification = Object.assign({}, Antd.notification, {
	    success: notificationHandler.bind(null, 'success'),
	    error: notificationHandler.bind(null, 'error'),
	    info: notificationHandler.bind(null, 'info'),
	    warning: notificationHandler.bind(null, 'warning'),
	    warn: notificationHandler.bind(null, 'warn')
	});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(17);

	var _Antd3 = _interopRequireDefault(_Antd2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 反馈 类组件抽象类，如：Button、Icon 等
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-09-29 07:27:29
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Last Modified: 2017-09-29 07:28:24
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Modified By: liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Feedback = function (_Antd) {
	  _inherits(Feedback, _Antd);

	  function Feedback() {
	    _classCallCheck(this, Feedback);

	    return _possibleConstructorReturn(this, (Feedback.__proto__ || Object.getPrototypeOf(Feedback)).apply(this, arguments));
	  }

	  return Feedback;
	}(_Antd3.default);

	exports.default = Feedback;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Content = exports.Sider = exports.Footer = exports.Header = exports.Layout = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Layout = __webpack_require__(33);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _antd = __webpack_require__(11);

	var Antd = _interopRequireWildcard(_antd);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-09-29 07:26:02
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Last Modified: 2017-09-29 07:26:02
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Modified By: liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	/************* Layout 布局 ************************************************************************** */

	// Layout 组件
	var Layout = exports.Layout = function (_BaseLayout) {
	    _inherits(Layout, _BaseLayout);

	    function Layout(props) {
	        _classCallCheck(this, Layout);

	        var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Layout, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Layout, this.__props);
	        }
	    }]);

	    return Layout;
	}(_Layout2.default);

	// Layout 组件


	var Header = exports.Header = function (_BaseLayout2) {
	    _inherits(Header, _BaseLayout2);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        var _this2 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

	        _this2.__init();
	        return _this2;
	    }

	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Layout.Header, this.__props);
	        }
	    }]);

	    return Header;
	}(_Layout2.default);

	// Layout 组件


	var Footer = exports.Footer = function (_BaseLayout3) {
	    _inherits(Footer, _BaseLayout3);

	    function Footer(props) {
	        _classCallCheck(this, Footer);

	        var _this3 = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(Footer, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Layout.Footer, this.__props);
	        }
	    }]);

	    return Footer;
	}(_Layout2.default);

	// Layout 组件


	var Sider = exports.Sider = function (_BaseLayout4) {
	    _inherits(Sider, _BaseLayout4);

	    function Sider(props) {
	        _classCallCheck(this, Sider);

	        var _this4 = _possibleConstructorReturn(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(Sider, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Layout.Sider, this.__props);
	        }
	    }]);

	    return Sider;
	}(_Layout2.default);

	// Layout 组件


	var Content = exports.Content = function (_BaseLayout5) {
	    _inherits(Content, _BaseLayout5);

	    function Content(props) {
	        _classCallCheck(this, Content);

	        var _this5 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

	        _this5.__init();
	        return _this5;
	    }

	    _createClass(Content, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Layout.Content, this.__props);
	        }
	    }]);

	    return Content;
	}(_Layout2.default);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(17);

	var _Antd3 = _interopRequireDefault(_Antd2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 布局类组件 抽象类
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-09-29 07:26:34
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Last Modified: 2017-09-29 07:26:34
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Modified By: liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Layout = function (_Antd) {
	  _inherits(Layout, _Antd);

	  function Layout() {
	    _classCallCheck(this, Layout);

	    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
	  }

	  return Layout;
	}(_Antd3.default);

	exports.default = Layout;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Router = __webpack_require__(35);

	var Router = _interopRequireWildcard(_Router);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	module.exports = Router;

	// module.exports = require('./Router.js').default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IndexLink = exports.Link = exports.IndexRedirect = exports.Redirect = exports.IndexRoute = exports.Route = exports.Router = exports.BaseRouter = exports.RouteHolder = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(36);

	var OriRouter = _interopRequireWildcard(_reactRouter);

	var _component = __webpack_require__(18);

	var _utils = __webpack_require__(7);

	var _tools = __webpack_require__(1);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 路由 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// 抽象类 每个配置均使用这个抽象类作为外壳，把组件实例转换为类
	var RouteHolder = exports.RouteHolder = function (_React$Component) {
	    _inherits(RouteHolder, _React$Component);

	    function RouteHolder() {
	        _classCallCheck(this, RouteHolder);

	        return _possibleConstructorReturn(this, (RouteHolder.__proto__ || Object.getPrototypeOf(RouteHolder)).apply(this, arguments));
	    }

	    _createClass(RouteHolder, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            // console.log(nextProps);
	            // if (nextProps, nextProps.location, nextProps.location.action) {
	            //     let lastAction = this.action;
	            //     this.action = nextProps.location.action;
	            //     console.log(this.action === lastAction || nextProps.location.action === "POP");
	            //     return this.action === lastAction || nextProps.location.action === "POP";
	            // }
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_tools.Factory, _extends({}, this.props, { config: this.props.route.__component }));
	        }
	    }]);

	    return RouteHolder;
	}(_react2.default.Component);

	// 抽象类 用于做组件种类区分


	var BaseRouter = exports.BaseRouter = function (_BaseComponent) {
	    _inherits(BaseRouter, _BaseComponent);

	    function BaseRouter() {
	        _classCallCheck(this, BaseRouter);

	        return _possibleConstructorReturn(this, (BaseRouter.__proto__ || Object.getPrototypeOf(BaseRouter)).apply(this, arguments));
	    }

	    return BaseRouter;
	}(_component.BaseComponent);

	// Router
	var Router = exports.Router = function (_BaseRouter) {
	    _inherits(Router, _BaseRouter);

	    function Router(props) {
	        _classCallCheck(this, Router);

	        var _this3 = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }
	    // 继承父组件的函数，并在__props上设置history属性
	    // 此函数会在初始化以及componentWillReceiveProps时调用


	    _createClass(Router, [{
	        key: '_initProps',
	        value: function _initProps() {
	            var _get2;

	            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                params[_key] = arguments[_key];
	            }

	            (_get2 = _get(Router.prototype.__proto__ || Object.getPrototypeOf(Router.prototype), '_initProps', this)).call.apply(_get2, [this].concat(params));
	            // 从 OriRouter 上获取真正的 hashHistory（用户设置的是字符串）
	            this.__props.history = OriRouter[this.__props.history];
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(OriRouter.Router, this.__props);
	        }
	    }]);

	    return Router;
	}(BaseRouter);

	/**************  推荐是用router.routes配置的方式，下面的组件作为配置不能满足时的备用方案（后面再对配置做升级）  ***********************/
	// TODO: 对路由配置方式做升级，支持 Redirect 等

	// Route


	var Route = exports.Route = function (_BaseRouter2) {
	    _inherits(Route, _BaseRouter2);

	    function Route(props) {
	        _classCallCheck(this, Route);

	        var _this4 = _possibleConstructorReturn(this, (Route.__proto__ || Object.getPrototypeOf(Route)).call(this, props));

	        _this4.__init();
	        console.log('Route: ', _this4.__props);
	        return _this4;
	    }

	    _createClass(Route, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(OriRouter.Route, this.__props);
	        }
	    }]);

	    return Route;
	}(BaseRouter);

	// IndexRoute


	var IndexRoute = exports.IndexRoute = function (_BaseRouter3) {
	    _inherits(IndexRoute, _BaseRouter3);

	    function IndexRoute(props) {
	        _classCallCheck(this, IndexRoute);

	        var _this5 = _possibleConstructorReturn(this, (IndexRoute.__proto__ || Object.getPrototypeOf(IndexRoute)).call(this, props));

	        _this5.__init();
	        return _this5;
	    }

	    _createClass(IndexRoute, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(OriRouter.IndexRoute, this.__props);
	        }
	    }]);

	    return IndexRoute;
	}(BaseRouter);

	// Redirect


	var Redirect = exports.Redirect = function (_BaseRouter4) {
	    _inherits(Redirect, _BaseRouter4);

	    function Redirect(props) {
	        _classCallCheck(this, Redirect);

	        var _this6 = _possibleConstructorReturn(this, (Redirect.__proto__ || Object.getPrototypeOf(Redirect)).call(this, props));

	        _this6.__init();
	        return _this6;
	    }

	    _createClass(Redirect, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(OriRouter.Redirect, this.__props);
	        }
	    }]);

	    return Redirect;
	}(BaseRouter);

	// IndexRedirect


	var IndexRedirect = exports.IndexRedirect = function (_BaseRouter5) {
	    _inherits(IndexRedirect, _BaseRouter5);

	    function IndexRedirect(props) {
	        _classCallCheck(this, IndexRedirect);

	        var _this7 = _possibleConstructorReturn(this, (IndexRedirect.__proto__ || Object.getPrototypeOf(IndexRedirect)).call(this, props));

	        _this7.__init();
	        return _this7;
	    }

	    _createClass(IndexRedirect, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(OriRouter.IndexRedirect, this.__props);
	        }
	    }]);

	    return IndexRedirect;
	}(BaseRouter);

	// Link


	var Link = exports.Link = function (_BaseRouter6) {
	    _inherits(Link, _BaseRouter6);

	    function Link(props) {
	        _classCallCheck(this, Link);

	        var _this8 = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

	        _this8.__init();
	        return _this8;
	    }

	    _createClass(Link, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(OriRouter.Link, this.__props);
	        }
	    }]);

	    return Link;
	}(BaseRouter);

	// IndexLink


	var IndexLink = exports.IndexLink = function (_BaseRouter7) {
	    _inherits(IndexLink, _BaseRouter7);

	    function IndexLink(props) {
	        _classCallCheck(this, IndexLink);

	        var _this9 = _possibleConstructorReturn(this, (IndexLink.__proto__ || Object.getPrototypeOf(IndexLink)).call(this, props));

	        _this9.__init();
	        return _this9;
	    }

	    _createClass(IndexLink, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(OriRouter.IndexLink, this.__props);
	        }
	    }]);

	    return IndexLink;
	}(BaseRouter);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = window.DLL.ReactRouter;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(38).default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(18);

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 需要操作的原生dom继承 BaseComponent
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-10-17 04:11:07
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Dom = function (_BaseComponent) {
	    _inherits(Dom, _BaseComponent);

	    function Dom(props) {
	        _classCallCheck(this, Dom);

	        var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Dom, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(this.props.__type, this.__props);
	        }
	    }]);

	    return Dom;
	}(_component.BaseComponent);

	exports.default = Dom;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(40).default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(11);

	var _component = __webpack_require__(18);

	var _utils = __webpack_require__(7);

	__webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file iframe 功能增强
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-10-12 03:13:45
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Last Modified: 2017-10-12 03:17:08
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Modified By: liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Iframe = function (_BaseComponent) {
	    _inherits(Iframe, _BaseComponent);

	    function Iframe(props) {
	        _classCallCheck(this, Iframe);

	        var _this = _possibleConstructorReturn(this, (Iframe.__proto__ || Object.getPrototypeOf(Iframe)).call(this, props));

	        _this.state = {
	            loading: true
	        };
	        _this.__init();
	        return _this;
	    }

	    _createClass(Iframe, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // 重新获取页面时重新展示loading
	            if (nextProps.src !== this.__prevProps.src) {
	                this.setState({ loading: true });
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (!this.ifr.height) {
	                // 获取父级容器的高度，使ifame和容器等高
	                this.ifr.height = this.getParentHeight();
	            }
	        }
	    }, {
	        key: 'getParentHeight',
	        value: function getParentHeight() {
	            var parent = this.root.parentElement;
	            return parent.offsetHeight + 'px';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'uf-iframe', ref: function ref(ele) {
	                        return _this2.root = ele;
	                    },
	                    'data-src': new URL(this.__props.src, window.location.href).href },
	                _react2.default.createElement(
	                    _antd.Spin,
	                    { spinning: this.state.loading && this.__props.showLoading },
	                    _react2.default.createElement('iframe', _extends({}, _utils.Utils.filter(this.__props, ['showLoading', 'delay']), {
	                        ref: function ref(ele) {
	                            return _this2.ifr = ele;
	                        },
	                        onLoad: function onLoad(even) {
	                            try {
	                                _this2.setState({ loading: false });
	                                var ifr = even.target;
	                                var iDoc = ifr.contentWindow.document;
	                                var iWindow = ifr.contentWindow;
	                                // Iframe高度根据内容高度变化的三种模式: auto / max / fixed
	                                var mode = _this2.__props.mode;
	                                if (mode !== 'fixed') {
	                                    var setIfrHeight = function setIfrHeight() {
	                                        var iDocHight = void 0;
	                                        // 这里分别从 documentElement 和 body 上取值，即可达到 max/auto 的效果
	                                        if (mode === 'max') {
	                                            iDocHight = iDoc.documentElement.scrollHeight;
	                                            // mode === 'auto'
	                                        } else {
	                                            // 注意：如果iframe的页面body/html设置了height: 100%，则auto失效，展示效果和max相同
	                                            iDocHight = iDoc.body.scrollHeight;
	                                        }
	                                        ifr.height = iDocHight + 'px';
	                                    };
	                                    setIfrHeight();
	                                    // iframe文档做监听，如果发生变化则重新设置高度
	                                    // 注意观察是否会有性能问题（监听了整个页面的元素和属性变化）
	                                    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	                                    var timer = void 0;
	                                    var observer = new MutationObserver(function (m) {
	                                        // 延迟重新设定iframe高度，可防止高度闪烁
	                                        timer && clearTimeout(timer);
	                                        timer = setTimeout(function () {
	                                            setIfrHeight();
	                                            timer = null;
	                                        }, _this2.__props.delay);
	                                    });
	                                    observer.observe(iDoc, {
	                                        childList: true,
	                                        attributes: true,
	                                        subtree: true
	                                    });
	                                }
	                                // 监听页面跳转
	                                iWindow.addEventListener('popstate', function (e) {
	                                    _this2.root.setAttribute('data-src', e.currentTarget.location);
	                                });

	                                _this2.__props.onLoad && _this2.__props.onLoad(even);
	                            } catch (e) {
	                                console.warn(e);
	                            }
	                        } }))
	                )
	            );
	        }
	    }]);

	    return Iframe;
	}(_component.BaseComponent);

	exports.default = Iframe;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	*   @file Export导出组件的引入文件
	*/
	module.exports = __webpack_require__(46).default;

/***/ }),
/* 46 */
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

	var _component = __webpack_require__(18);

	var _antd = __webpack_require__(11);

	var _utils = __webpack_require__(7);

	var _ueditor = __webpack_require__(47);

	var _ueditor2 = _interopRequireDefault(_ueditor);

	__webpack_require__(49);

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
	            if (_utils.Utils.typeof(obj, 'array')) {
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
	            } else if (_utils.Utils.typeof(obj, 'object')) {
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(48).default;

/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	*   @file Tree组件的引入文件
	*/
	module.exports = __webpack_require__(52).default;

/***/ }),
/* 52 */
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

	var _component = __webpack_require__(18);

	var _utils = __webpack_require__(7);

	var _antd = __webpack_require__(11);

	__webpack_require__(53);

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
	                for (var i in this.levalPointerTree) {
	                    keys = keys.concat(this.levalPointerTree[i]);
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
/* 53 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// import Table from './Table.js';
	// export default Table;
	module.exports = __webpack_require__(56).default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _component = __webpack_require__(18);

	var _utils = __webpack_require__(7);

	var _antd = __webpack_require__(11);

	var _antd2 = __webpack_require__(5);

	var _export = __webpack_require__(45);

	var _export2 = _interopRequireDefault(_export);

	var _tools = __webpack_require__(1);

	var _tools2 = _interopRequireDefault(_tools);

	__webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 表格组件:antd Table的基础上增加了原来uf Table中的一些功能
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author susisi@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */


	var CheckboxGroup = _antd.Checkbox.Group;
	// 从obg2中获取obj1所需要的一些属性
	var getNeedObject = function getNeedObject(obj1, obj2) {
	    for (var i in obj1) {
	        if (!!obj2[i]) {
	            obj1[i] = obj2[i];
	        }
	    }
	};

	var NewTable = function (_BaseComponent) {
	    _inherits(NewTable, _BaseComponent);

	    // 以下是函数定义
	    function NewTable(props) {
	        _classCallCheck(this, NewTable);

	        var _this = _possibleConstructorReturn(this, (NewTable.__proto__ || Object.getPrototypeOf(NewTable)).call(this, props));

	        _this.__init();
	        _this.state = {
	            antdConfig: null,
	            // 数据默认为空
	            data: [],
	            completeData: [],
	            // 单列过滤
	            filterInputValue: '',
	            filterDropdownVisible: false,
	            // 全局数据过滤
	            globalfilterValue: '',
	            // table表头右侧设置按钮的下拉框是否展示
	            showTableMenu: false,
	            // 全屏展示与否
	            fullScreen: false,
	            // 是否展示全部字段
	            showAllTags: false,
	            // 存储选择的行信息
	            selectedRowKeys: [],
	            // 加载状态
	            loading: false
	        };
	        // 用于存储多列的筛选条件
	        _this.filterConditions = {};
	        _this.globalFilterInput = '';
	        // 过滤字段黑名单/白名单
	        _this.globalFilterList = null;
	        // 请求序号，当执行新请求时，之前的未返回数据的请求则废弃，通过index值是否相等判断
	        _this.requerstIndex = 0;
	        _this.initTable();
	        return _this;
	    }
	    // TODO: initTable的调用时机需调整一下
	    // componentDidMount() {
	    //     this.initTable();
	    // }


	    _createClass(NewTable, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // 即使props没有改变，当父组件重新渲染时，也会进这里，所以需要在这里判断是否需要重新渲染组件
	            if (!_utils.Utils.equals(this.config, nextProps)) {
	                this.initTable(nextProps);
	            }
	        }
	    }, {
	        key: 'initTable',
	        value: function initTable(nextProps) {
	            var objProps = nextProps ? nextProps : this.__props;
	            var state = {};
	            this.config = objProps;
	            this.pagination = objProps.pagination;
	            // 列配置
	            this.columns = objProps.columns;
	            var propsData = objProps.data;
	            // 行配置
	            if (!!objProps.rowSelection) {
	                // this.rowSelection = (objProps.rowSelection);
	                this.rowSelection = objProps.rowSelection;
	                if (this.rowSelection.selectedRowKeys) {
	                    state.selectedRowKeys = this.rowSelection.selectedRowKeys;
	                }
	            } else {
	                this.rowSelection = null;
	            }
	            var defaultCif = {
	                size: 'default',
	                rowKey: 'key',
	                rowClassName: function rowClassName() {},
	                expandedRowRender: null,
	                defaultExpandedRowKeys: [],
	                expandedRowKeys: [],
	                defaultExpandAllRows: false,
	                locale: { filterTitle: '筛选', filterConfirm: '确定', filterReset: '重置', emptyText: '暂无数据' },
	                indentSize: 15,
	                bordered: false,
	                showHeader: true,
	                footer: null,
	                scroll: {},
	                onChange: function onChange() {},
	                onExpand: function onExpand() {},
	                onExpandedRowsChange: function onExpandedRowsChange() {},
	                onRowClick: function onRowClick() {},
	                onRowDoubleClick: function onRowDoubleClick() {},
	                onRowMouseEnter: function onRowMouseEnter() {},
	                onRowMouseLeave: function onRowMouseLeave() {}
	            };
	            getNeedObject(defaultCif, this.config);
	            /* 关于表头 */
	            if (!!objProps.titleConfig) {
	                this.titleConfig = objProps.titleConfig;
	                this.titleConfig.showText = this.titleConfig.showText !== undefined ? this.titleConfig.showText : true;
	            } else {
	                this.titleConfig = null;
	            }
	            /* 关于异步操作 */
	            if (objProps.source) {
	                this.getData(null, objProps.params);
	            } else {
	                state.data = propsData;
	                state.completeData = propsData;
	                state.loading = false;
	                if (this.pagination) {
	                    this.pagination.total = propsData.length;
	                }
	                // 导出数据的配置
	                this.exportConfig = this.getExportConfig(propsData);
	            }
	            this.antdConfig = defaultCif;
	            state.antdConfig = this.antdConfig;
	            if (!nextProps) {
	                this.state = state;
	            } else {
	                this.setState(state);
	            }
	        }
	        // 异步获取数据

	    }, {
	        key: 'getData',
	        value: function getData(pageNum, params, nextProps) {
	            var _this2 = this;

	            var url = this.config.source;
	            if (!url) {
	                // 用户为传接口，则直接返回
	                return;
	            }
	            var method = this.config.method || 'get';
	            var ajax = method === 'post' ? this.__postData : this.__getData;
	            var dataParams = {};
	            var requestParams = params ? params : nextProps ? nextProps.params : this.config.params;
	            if (this.pagination.pageType === 'server') {
	                dataParams = Object.assign({}, requestParams, {
	                    page: pageNum ? pageNum : 1,
	                    size: this.pagination.pageSize,
	                    pageType: 'server'
	                });
	            } else {
	                dataParams = Object.assign({}, requestParams, {
	                    pageType: 'client'
	                });
	            }
	            this.setState({ loading: true });
	            // 当前请求的标号
	            var index = ++this.requerstIndex;
	            ajax(url, params, function (data, res) {
	                if (index !== _this2.requerstIndex) {
	                    return;
	                }
	                var displayData = data;
	                if (_this2.pagination.pageType === 'server') {
	                    displayData = data.slice(0, _this2.pagination.pageSize);
	                }
	                _this2.pagination.total = res.total || res.count || data.length;
	                _this2.setState({
	                    data: displayData,
	                    completeData: displayData,
	                    loading: false
	                });
	                _this2.onRefreshData(data);
	            });
	        }
	        // 数据刷新

	    }, {
	        key: 'onRefreshData',
	        value: function onRefreshData(data) {
	            // 刷新导出组件配置
	            this.exportConfig = this.getExportConfig(data);
	            this.forceUpdate();
	        }
	        // 表头生成-包括文字标题及自定义控件

	    }, {
	        key: 'titleGenerate',
	        value: function titleGenerate() {
	            if (!this.titleConfig) {
	                return null;
	            }
	            var title = this.titleConfig.title || '';
	            var showText = this.titleConfig.showText;
	            var result = [];
	            // 表头标题
	            if (title) {
	                result.push(_react2.default.createElement(
	                    'div',
	                    { key: 'table-title', className: 'umpui-header' },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        title
	                    )
	                ));
	            }
	            // 以下为一些控件的生成，全部保存在divList里
	            // 直接展示在表头的控件
	            var divList = this.getBasicWidghts();
	            // 展示在menu下拉列表中的控件
	            var gearsList = this.getMenuWidghts();
	            if (gearsList) {
	                divList.push(gearsList);
	            }
	            result.push(_react2.default.createElement(
	                'div',
	                { key: 'table-extra', className: 'umpui-header-extra-con' },
	                divList
	            ));
	            return function () {
	                return result;
	            };
	        }
	        // 基本控件

	    }, {
	        key: 'getBasicWidghts',
	        value: function getBasicWidghts() {
	            var _this3 = this;

	            var arrBasic = this.titleConfig.basicControls;
	            var result = [];
	            if (!arrBasic) {
	                return result;
	            }
	            var showText = this.titleConfig.showText;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = arrBasic[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var v = _step.value;

	                    // 全部转化为对象
	                    if (_utils.Utils.typeof(v, 'string')) {
	                        v = { name: v };
	                    }
	                    switch (v.name) {
	                        case 'filter':
	                            if (!this.globalFilterList && (v.whitelist || v.blacklist)) {
	                                this.globalFilterList = {
	                                    whitelist: v.whitelist,
	                                    blacklist: v.blacklist
	                                };
	                            }
	                            result.push(_react2.default.createElement(
	                                'div',
	                                { className: 'umpui-header-extra filter no-hover', key: 'umpui-header-extra' },
	                                _react2.default.createElement(_antd2.Input, { name: 'filter', prefix: _react2.default.createElement(_antd.Icon, { type: v.icon || 'filter' }),
	                                    ref: function ref(ele) {
	                                        return _this3['uf-table-filter'] = ele;
	                                    },
	                                    placeholder: v.text || '模糊搜索内容',
	                                    onChange: this.globalFilterChange.bind(this) })
	                            ));
	                            break;
	                        case 'refresh':
	                            result.push(_react2.default.createElement(
	                                'div',
	                                { className: 'umpui-header-extra', key: 'refresh',
	                                    onClick: this.refreshTable.bind(this) },
	                                _react2.default.createElement(_antd.Icon, { type: v.icon || 'retweet' }),
	                                showText && _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    v.text || '刷新'
	                                )
	                            ));
	                            break;
	                        case 'fullScreen':
	                            result.push(_react2.default.createElement(
	                                'div',
	                                { className: 'umpui-header-extra', key: 'fullscreen',
	                                    onClick: this.toggleFullScreen.bind(this) },
	                                !this.state.fullScreen ? _react2.default.createElement(_antd.Icon, { type: v.text || 'arrows-alt' }) : _react2.default.createElement(_antd.Icon, { type: v.text || 'shrink' }),
	                                showText && (!this.state.fullScreen ? _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    v.text || '全屏'
	                                ) : _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    '退出' + (v.text || '全屏')
	                                ))
	                            ));
	                            break;
	                        case 'export':
	                            result.push(_react2.default.createElement(
	                                'div',
	                                { className: 'umpui-header-extra', key: 'export' },
	                                _react2.default.createElement(
	                                    _export2.default,
	                                    this.exportConfig,
	                                    _react2.default.createElement(_antd.Icon, { type: v.icon || 'download' }),
	                                    showText && _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        v.text || '导出'
	                                    )
	                                )
	                            ));
	                            break;
	                        case 'switchTags':
	                            result.push(_react2.default.createElement(
	                                'div',
	                                { className: 'umpui-header-extra', key: 'switchTags',
	                                    onClick: this.showSwitchTags.bind(this) },
	                                _react2.default.createElement(_antd.Icon, { type: v.icon || 'setting' }),
	                                showText && _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    v.text || '展示字段'
	                                )
	                            ));
	                            break;
	                        case 'showAllTags':
	                            result.push(_react2.default.createElement(
	                                'div',
	                                { key: 'showAllTags',
	                                    className: 'umpui-header-extra ' + (this.state.showAllTags ? 'active' : ''),
	                                    onClick: this.toShowAllTags.bind(this) },
	                                _react2.default.createElement(_antd.Icon, { type: v.icon || 'eye-o' }),
	                                showText && _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    v.text || '展示全部'
	                                )
	                            ));
	                            break;
	                        case 'setPageSize':
	                            result.push(_react2.default.createElement(
	                                _antd.Popconfirm,
	                                { placement: 'top', key: 'basic-setPageSize',
	                                    title: _react2.default.createElement(_antd2.Input, {
	                                        placeholder: '\u8F93\u5165\u6BCF\u9875\u6570\u636E\u6761\u6570',
	                                        ref: function ref(ele) {
	                                            return _this3['uf-table-pagesize-setting-basic'] = ele;
	                                        },
	                                        value: this.pagination.pageSize,
	                                        onChange: this.changePageSize.bind(this) }),
	                                    onConfirm: this.getPageSizeSetting.bind(this, 'basic'),
	                                    onCancel: this.hideMenuDropdown.bind(this),
	                                    okText: 'Yes', cancelText: 'No' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'umpui-header-extra',
	                                        onClick: this.showSetPageSize.bind(this, 'basic') },
	                                    _react2.default.createElement(_antd.Icon, { type: v.icon || 'switcher' }),
	                                    showText && _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        v.text || '分页设置'
	                                    )
	                                )
	                            ));
	                            break;
	                        default:
	                            result.push(_react2.default.createElement(
	                                'div',
	                                { key: v.name, className: 'umpui-header-extra ' + (v.name || ''),
	                                    onClick: v.onClick.bind(null, this) },
	                                _react2.default.createElement(_antd.Icon, { type: v.icon || 'file-unknown' }),
	                                showText && _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    v.text || ''
	                                )
	                            ));
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
	        }
	        // 下拉列表中的控件

	    }, {
	        key: 'getMenuWidghts',
	        value: function getMenuWidghts() {
	            var _this4 = this;

	            var arrMenus = this.titleConfig.menuControls;
	            var result = null;
	            var gearsList = [];
	            if (!arrMenus) {
	                return result;
	            }
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = arrMenus[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var v = _step2.value;

	                    // 全部转化为对象
	                    if (_utils.Utils.typeof(v, 'string')) {
	                        v = { name: v };
	                    }
	                    switch (v.name) {
	                        case 'refresh':
	                            gearsList.push(_react2.default.createElement(
	                                'li',
	                                { key: 'refresh1', onClick: this.refreshTable.bind(this) },
	                                _react2.default.createElement(_antd.Icon, { type: v.icon || 'retweet', className: 'menu-item-icon' }),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    v.text || '刷新表格'
	                                )
	                            ));
	                            break;
	                        case 'fullScreen':
	                            gearsList.push(_react2.default.createElement(
	                                'li',
	                                { key: 'fullScreen1', onClick: this.toggleFullScreen.bind(this) },
	                                !this.state.fullScreen ? _react2.default.createElement(_antd.Icon, { type: v.text || 'arrows-alt', className: 'menu-item-icon' }) : _react2.default.createElement(_antd.Icon, { type: v.text || 'shrink', className: 'menu-item-icon' }),
	                                !this.state.fullScreen ? _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    (v.text || '全屏') + '显示'
	                                ) : _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    '退出' + (v.text || '全屏')
	                                )
	                            ));
	                            break;
	                        case 'switchTags':
	                            gearsList.push(_react2.default.createElement(
	                                'li',
	                                { key: 'switchTags1', onClick: this.showSwitchTags.bind(this) },
	                                _react2.default.createElement(_antd.Icon, { type: v.icon || 'setting', className: 'menu-item-icon' }),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    v.text || '展示字段'
	                                )
	                            ));
	                            break;
	                        case 'export':
	                            gearsList.push(_react2.default.createElement(
	                                'li',
	                                { key: 'export1' },
	                                _react2.default.createElement(
	                                    _export2.default,
	                                    this.exportConfig,
	                                    _react2.default.createElement(_antd.Icon, { type: v.icon || 'download', className: 'menu-item-icon' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        v.text || '导出数据'
	                                    )
	                                )
	                            ));
	                            break;
	                        case 'setPageSize':
	                            gearsList.push(_react2.default.createElement(
	                                _antd.Popconfirm,
	                                { placement: 'left', key: 'basic-setPageSize1',
	                                    title: _react2.default.createElement(_antd2.Input, {
	                                        placeholder: '\u8F93\u5165\u6BCF\u9875\u6570\u636E\u6761\u6570',
	                                        ref: function ref(ele) {
	                                            return _this4['uf-table-pagesize-setting-menu'] = ele;
	                                        },
	                                        value: this.pagination.pageSize,
	                                        onChange: this.changePageSize.bind(this) }),
	                                    onConfirm: this.getPageSizeSetting.bind(this, 'menu'),
	                                    onCancel: this.hideMenuDropdown.bind(this),
	                                    okText: 'Yes', cancelText: 'No' },
	                                _react2.default.createElement(
	                                    'li',
	                                    { onClick: this.showSetPageSize.bind(this, 'menu'), className: 'ant-popover-open' },
	                                    _react2.default.createElement(_antd.Icon, { type: v.icon || 'switcher', className: 'menu-item-icon' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        v.text || '分页设置'
	                                    )
	                                )
	                            ));
	                            break;
	                        default:
	                            gearsList.push(_react2.default.createElement(
	                                'li',
	                                { key: v.name, onClick: v.onClick.bind(null, this) },
	                                _react2.default.createElement(_antd.Icon, { type: v.icon || 'file-unknown', className: 'menu-item-icon' }),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    v.text || ''
	                                )
	                            ));
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

	            if (gearsList.length > 0) {
	                result = _react2.default.createElement(
	                    _antd.Dropdown,
	                    { trigger: ['click'], key: 'umpui-table-menu',
	                        overlay: _react2.default.createElement(
	                            'ul',
	                            { className: 'uf-dropdown-menu-ul' },
	                            gearsList
	                        ),
	                        onVisibleChange: this.switchMenuList.bind(this),
	                        placement: 'bottomRight',
	                        visible: this.state.showTableMenu },
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'umpui-header-extra menu ' + (this.state.showTableMenu ? 'active' : '') },
	                        this.state.showTableMenu ? _react2.default.createElement(_antd.Icon, { type: 'menu-unfold' }) : _react2.default.createElement(_antd.Icon, { type: 'menu-fold' }),
	                        this.titleConfig.showText && _react2.default.createElement(
	                            'span',
	                            null,
	                            '\u83DC\u5355'
	                        )
	                    )
	                );
	            }
	            return result;
	        }
	        // 获取要下载导出数据的配置

	    }, {
	        key: 'getExportConfig',
	        value: function getExportConfig(data) {
	            var tableCfg = this.config;
	            var tableColumns = this.columns;
	            // let objHeaders = {};
	            var objHeaders = [];
	            // let arrKeys = [];
	            // let typeDef = Object.prototype.toString;
	            for (var i in tableColumns) {
	                objHeaders.push({
	                    key: tableColumns[i].dataIndex || tableColumns[i].key,
	                    title: tableColumns[i].title
	                });
	            }
	            /**
	             * 1. 没有url就是直接传递了content的数据
	             * 2. 有url但是是client分页-Export需要传递data,默认是client分页
	             * 3. 有url但是是server端分页-Export需要传递url配置
	             */
	            if (!tableCfg.source || this.pagination !== false && this.pagination.pageType !== 'server') {
	                return {
	                    headers: objHeaders,
	                    data: data,
	                    total: data.length
	                };
	            }
	            return {
	                headers: objHeaders,
	                source: tableCfg.source,
	                params: tableCfg.params ? tableCfg.params : {},
	                total: this.pagination.total
	            };
	        }
	        // 刷新表格

	    }, {
	        key: 'refreshTable',
	        value: function refreshTable() {
	            if (this.config.source) {
	                this.getData();
	            }
	            // 清空某些控制状态
	            this.clearState();
	            this.setState({ data: this.state.completeData });
	            // 刷新导出组件配置
	            this.exportConfig = this.getExportConfig(this.state.completeData);
	            this.forceUpdate();
	        }
	        // 清空某些控制状态

	    }, {
	        key: 'clearState',
	        value: function clearState() {
	            this.setState({
	                filterInputValue: '',
	                filterDropdownVisible: false,
	                showTableMenu: false,
	                selectedRowKeys: []
	            });
	            this.globalFilterInput = '';
	            this.filterConditions = {};
	            this.forceUpdate();
	        }
	        // 全屏或退出全屏

	    }, {
	        key: 'toggleFullScreen',
	        value: function toggleFullScreen() {
	            this.setState({
	                fullScreen: !this.state.fullScreen,
	                showTableMenu: false
	            });
	        }
	        // 显示’展示字段‘设置弹框

	    }, {
	        key: 'showSwitchTags',
	        value: function showSwitchTags() {
	            this.setState({ showSetTagsModal: true });
	        }
	        // 展示全部字段

	    }, {
	        key: 'toShowAllTags',
	        value: function toShowAllTags() {
	            this.setState({ showAllTags: !this.state.showAllTags });
	        }
	        // 自定义展示某些列

	    }, {
	        key: 'setTableColumns',
	        value: function setTableColumns() {
	            // 根据this.columnsCheckedValues中存储的用户的选择进行展示
	            var showColumns = this.columnsCheckedValues;
	            var allColumns = this.columns;

	            var _loop = function _loop(i) {
	                if (showColumns.some(function (ele) {
	                    return allColumns[i].dataIndex === ele;
	                })) {
	                    allColumns[i].display = true;
	                } else {
	                    allColumns[i].display = false;
	                }
	            };

	            for (var i in allColumns) {
	                _loop(i);
	            }
	            this.setState({ showSetTagsModal: false });
	            this.forceUpdate();
	        }
	        // 生成弹框中的checkbox组，以选择展示哪些列

	    }, {
	        key: 'generateColumnsCheckboxGroup',
	        value: function generateColumnsCheckboxGroup() {
	            var options = [];
	            var defaultValue = [];
	            var allColumns = this.columns;
	            for (var item in allColumns) {
	                var option = { label: allColumns[item].title, value: allColumns[item].dataIndex };
	                options.push(option);
	                if (allColumns[item].display === false) {
	                    continue;
	                }
	                defaultValue.push(allColumns[item].dataIndex);
	            }
	            if (options.length > 0) {
	                return _react2.default.createElement(CheckboxGroup, { options: options,
	                    defaultValue: defaultValue,
	                    onChange: this.onSetColumnsCheckboxChange.bind(this) });
	            }
	        }
	        // 输入框设置每页展示多少条

	    }, {
	        key: 'changePageSize',
	        value: function changePageSize(e) {
	            this.pagination.pageSize = e.target.value;
	            console.log(this.pagination.pageSize);
	            this.forceUpdate();
	        }
	        // 通过Pagination组建设置展示多少条

	    }, {
	        key: 'onShowSizeChange',
	        value: function onShowSizeChange(current, size) {
	            this.pagination.pageSize = parseInt(size, 10);
	            this.forceUpdate();
	            if (this.pagination.onShowSizeChange) {
	                this.pagination.onShowSizeChange(current, size);
	            }
	        }
	        // 展示每页展示条数

	    }, {
	        key: 'getPageSizeSetting',
	        value: function getPageSizeSetting(from) {
	            var pageSize = parseInt(this.pagination.pageSize, 10);
	            if (isNaN(pageSize)) {
	                pageSize = 10;
	            }
	            this.pagination.pageSize = pageSize;
	            this.setState({ showTableMenu: false });
	        }
	        // 展示分页设置输入框时，使得输入框获取焦点

	    }, {
	        key: 'showSetPageSize',
	        value: function showSetPageSize(from) {
	            var _this5 = this;

	            // 设定延迟的原因，this['uf-table-pagesize-setting-' + from]以提示框的形式渲染到页面
	            // 而此函数触发时还未渲染完毕，输入框无法获得焦点，输入框手动获取焦点会引起menu下拉列表关闭
	            setTimeout(function () {
	                var obj = _this5['uf-table-pagesize-setting-' + from];
	                obj && obj.trigger('focus');
	            }, 10);
	        }
	    }, {
	        key: 'showTableMenu',
	        value: function showTableMenu() {
	            this.setState({ showTableMenu: true });
	        }
	        // menu下拉列表隐藏

	    }, {
	        key: 'hideMenuDropdown',
	        value: function hideMenuDropdown() {
	            this.setState({ showTableMenu: false });
	        }
	    }, {
	        key: 'onSetColumnsCheckboxChange',
	        value: function onSetColumnsCheckboxChange(checkedValues) {
	            this.columnsCheckedValues = checkedValues;
	        }
	    }, {
	        key: 'cancleSetTableColumns',
	        value: function cancleSetTableColumns() {
	            this.setState({ showSetTagsModal: false });
	        }
	        // 展示头部隐藏菜单

	    }, {
	        key: 'switchMenuList',
	        value: function switchMenuList(visible) {
	            this.setState({ showTableMenu: visible });
	        }
	    }, {
	        key: 'onFilterData',
	        value: function onFilterData() {
	            // 过滤
	            var data = this.state.completeData;
	            // 对数据进行全局过滤
	            if (this.globalFilterInput.length !== 0) {
	                data = this.globalFilterData(this.globalFilterInput, data);
	            }
	            // 对数据进行单列过滤
	            if (this.filterConditions.toString() !== '{}') {
	                data = this.filterInputSearch(data);
	            }
	            this.setState({
	                data: data
	            });
	        }
	        // 过滤输入框变化时

	    }, {
	        key: 'globalFilterChange',
	        value: function globalFilterChange(e) {
	            var _this6 = this;

	            var iVal = e.target.value;
	            clearTimeout(this.filterTimer);
	            this.filterTimer = setTimeout(function () {
	                _this6.globalFilterInput = iVal;
	                _this6.onFilterData();
	            }, 150);
	        }
	        // 全局搜索数据

	    }, {
	        key: 'globalFilterData',
	        value: function globalFilterData(iVal, filteredData) {
	            var content = !!filteredData ? filteredData : this.state.completeData;
	            var strVal = iVal.toLowerCase().replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ');
	            // 过滤使用的数据，如果是有传入的数据则进行过滤，没有则需要进行
	            if (strVal) {
	                var arrFilterData = [];
	                // 字段黑名单/白名单
	                var filterlist = this.globalFilterList;
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;

	                try {
	                    for (var _iterator3 = content[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                        var row = _step3.value;

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
	                        var _iteratorNormalCompletion4 = true;
	                        var _didIteratorError4 = false;
	                        var _iteratorError4 = undefined;

	                        try {
	                            for (var _iterator4 = keys[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                                var key = _step4.value;

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
	                                var _iteratorNormalCompletion5 = true;
	                                var _didIteratorError5 = false;
	                                var _iteratorError5 = undefined;

	                                try {
	                                    for (var _iterator5 = kVal.split(/\|+/)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                                        var k = _step5.value;

	                                        // 一旦有一个能匹配到，则结果true
	                                        (!k || kv.indexOf(k) !== -1) && (orResult = true);
	                                    }
	                                    // 如果都匹配不到，则此关键字无效，整条数据无效
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

	                                !orResult && (result = false);
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

	                        if (result) {
	                            arrFilterData.push(row);
	                        }
	                    }
	                    // return Utils.clone(arrFilterData);
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

	                return arrFilterData;
	            }
	            // else if (this.pagination.pageType === 'server') {
	            //     // 服务器端分页的content都是当前页的数据
	            // }
	            // else {
	            //     // 前端分页, content是返回的所有数据，当前页的数据需要截取
	            //     let curData = this.state.content.slice(0, this.pagination.pageSize);
	            // }

	            // 清除已勾选内容
	            // this.clearSelect();
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
	                    for (var i in obj) {
	                        val = obj[i];
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
	        // 单列数据搜索

	    }, {
	        key: 'filterChange',
	        value: function filterChange(filterProperty, e) {
	            // this.filterConditions用于记录多个列的同时筛选条件
	            var searchText = e.target.value;
	            if (!!searchText && searchText.length > 0) {
	                this.filterConditions[filterProperty] = searchText;
	            } else {
	                delete this.filterConditions[filterProperty];
	            }
	            this.forceUpdate();
	        }
	    }, {
	        key: 'filterInputSearch',
	        value: function filterInputSearch(filteredData) {
	            var _this7 = this;

	            var data = [];
	            var needFilterData = !!filteredData ? filteredData : this.state.completeData;
	            // 如果传入filteredData,则在filteredData基础上筛选
	            // 如果没有传入如果传入filteredData，则在全量数据上进行筛选
	            data = needFilterData.filter(function (record) {
	                var flag = true;
	                for (var cdit in _this7.filterConditions) {
	                    if (record[cdit].toString().indexOf(_this7.filterConditions[cdit]) === -1) {
	                        flag = false;
	                        break;
	                    }
	                }
	                return flag;
	            });
	            return data;
	        }
	        // 从全量数据中提取某列的所有可能的值

	    }, {
	        key: 'getAllFilterValue',
	        value: function getAllFilterValue(dataIndex) {
	            var obj = {};
	            var result = [];
	            var data = this.state.completeData;
	            for (var i = 0; i < data.length; i++) {
	                // 用obj存储所有可能的字段
	                if (data[i][dataIndex] && !obj[data[i][dataIndex]]) {
	                    obj[data[i][dataIndex]] = 1;
	                }
	            }
	            // 将obj转换为数组
	            for (var key in obj) {
	                result.push({ text: key, value: key });
	            }
	            return result;
	        }
	    }, {
	        key: 'syntaxHighlight',
	        value: function syntaxHighlight(json) {
	            if (typeof json !== 'string') {
	                json = JSON.stringify(json, undefined, 2);
	            }
	            var self = this;
	            json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
	            var reg = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;
	            return json.replace(reg, function (match) {
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
	        key: 'renderColumns',
	        value: function renderColumns() {
	            var _this8 = this;

	            // 列功能相关
	            var antdColumnConfig = [];

	            var _loop2 = function _loop2(item) {
	                if (!_this8.state.showAllTags && _this8.columns[item].display === false) {
	                    // 在展示部分字段下过滤掉不展示的列数据
	                    return 'continue';
	                }
	                var defaultColumn = {
	                    title: '',
	                    key: '',
	                    dataIndex: '',
	                    // 默认是从用户配置中获取此字段，对于特殊的格式再做处理
	                    render: null,
	                    sorter: false,
	                    colSpan: null,
	                    width: '',
	                    className: '',
	                    fixed: false,
	                    sortOrder: false,
	                    onCellClick: null
	                };

	                getNeedObject(defaultColumn, _this8.columns[item]);
	                // 用户配置的render是一个uf组建配置，在此转为dom
	                if (!!_this8.columns[item].render) {
	                    defaultColumn.render = function (text, record, index) {
	                        return _tools2.default.init(_this8.columns[item].render(text, record, index));
	                    };
	                }
	                // 将用户配置的单列筛选选项转换成antd的配置
	                if (!!_this8.columns[item].filterConfig) {
	                    var filterConfig = _this8.columns[item].filterConfig;
	                    if (!filterConfig.filterType) {
	                        // 若没有配置filterType则直接返回
	                        return {
	                            v: void 0
	                        };
	                    }
	                    var dataIndex = _this8.columns[item].dataIndex;
	                    if (filterConfig.filterType === 'checkBox' || filterConfig.filterType === 'radio') {
	                        // 多选框或单选框筛选
	                        var filterObj = {
	                            filters: null,
	                            filterMultiple: false,
	                            onFilter: null
	                        };
	                        if (!!filterConfig.filters) {
	                            // 用户配置了filters,则将用户配置进行转换
	                            filterObj.filters = filterConfig.filters.map(function (o) {
	                                return { text: o, value: o };
	                            });
	                        } else {
	                            // 用户没有配置filters，则将该字段的所有可能值展示出来
	                            filterObj.filters = _this8.getAllFilterValue(dataIndex);
	                        }
	                        filterObj.filterMultiple = filterConfig.filterType === 'checkBox' ? true : false;
	                        filterObj.onFilter = function (value, record) {
	                            return record[_this8.columns[item].dataIndex].indexOf(value) !== -1;
	                        };
	                        defaultColumn = Object.assign({}, defaultColumn, filterObj);
	                    } else if (filterConfig.filterType === 'input') {
	                        // 通过输入筛选
	                        var _filterObj = {
	                            filterDropdown: null,
	                            filterIcon: _react2.default.createElement(_antd.Icon, { type: 'filter',
	                                style: { color: !!_this8.filterConditions[dataIndex] ? '#108ee9' : '#aaa' } })
	                        };
	                        _filterObj.filterDropdown = _react2.default.createElement(
	                            'div',
	                            { className: 'custom-filter-dropdown' },
	                            _react2.default.createElement(_antd2.Input, { placeholder: 'Search',
	                                ref: function ref(ele) {
	                                    return _this8['search-' + dataIndex] = ele;
	                                },
	                                value: !!_this8.filterConditions[dataIndex] ? _this8.filterConditions[dataIndex] : '',
	                                onChange: _this8.filterChange.bind(_this8, dataIndex),
	                                onPressEnter: _this8.onFilterData.bind(_this8)
	                            })
	                        );
	                        defaultColumn = Object.assign({}, defaultColumn, _filterObj);
	                    }
	                }
	                // 文字过长，鼠标移入时进行气泡展示
	                if (!!_this8.columns[item].ellipsis) {
	                    defaultColumn.render = function (text, record, index) {
	                        var newText = _this8.columns[item].render ? _tools2.default.init(_this8.columns[item].render(text, record, index)) : text;
	                        return _react2.default.createElement(
	                            _antd.Popover,
	                            { content: newText },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'uf-table-td-ellipsis' },
	                                newText
	                            )
	                        );
	                    };
	                }
	                // 对特殊格式进行展示处理，包括html格式，json格式，duration格式
	                if (_this8.columns[item]['textType']) {
	                    // let elliClass = v['ellipsis'] ? ' ellipsis' : '';
	                    // style.className += elliClass;
	                    defaultColumn.render = function (text, record, index) {
	                        var newText = text;
	                        switch (_this8.columns[item].textType) {
	                            case 'duration':
	                                var timeDiff = (+new Date() - +new Date(Date.parse(text.replace(/-/g, '/')))) / 1000;
	                                var dayTime = Math.floor(timeDiff / (24 * 3600));
	                                var hourTime = Math.floor(timeDiff % (24 * 3600) / 3600);
	                                var minuteTime = Math.floor(timeDiff % (24 * 3600) % 3600 / 60);
	                                var secTime = Math.floor(timeDiff % (24 * 3600) % 3600 % 60);
	                                var timeArr = [];

	                                dayTime > 0 && timeArr.push(dayTime + '天');
	                                hourTime > 0 && timeArr.push(hourTime + '时');
	                                minuteTime > 0 && timeArr.push(minuteTime + '分');

	                                dayTime === 0 && hourTime === 0 && minuteTime === 0 && secTime > 0 && timeArr.push(secTime + '秒');
	                                var tdData = timeArr.join('');
	                                // typeof v === 'object' && v['render'] !== undefined && (tdData = v.render(data[k], data));
	                                // tdList.push(<td {...style} {...rowspan} key={k} data-key={k}>{tdData}</td>);
	                                // 若用户配置了render，则将转换之后的数据给用户的render
	                                newText = _this8.columns[item].render ? _tools2.default.init(_this8.columns[item].render(tdData, record, index)) : tdData;
	                                return newText;
	                                break;
	                            case 'JSON':
	                                var json = JSON.stringify(text, null, 2);
	                                var html = _this8.syntaxHighlight(json);
	                                var content = _this8.createMarkup(html);
	                                return _react2.default.createElement(
	                                    _antd.Popover,
	                                    { content: _react2.default.createElement('pre', { className: 'json', dangerouslySetInnerHTML: content }) },
	                                    _react2.default.createElement('pre', { className: 'json', dangerouslySetInnerHTML: content })
	                                );
	                                break;
	                            case 'html':
	                                return _react2.default.createElement('span', { dangerouslySetInnerHTML: _this8.createMarkup(text) });
	                                break;
	                            // 默认将格式进行一下转换然后输出
	                            default:
	                                text = _this8.getKeyDataOfObject(text);
	                                newText = _this8.columns[item].render ? _tools2.default.init(_this8.columns[item].render(text, record, index)) : text;
	                                return newText;
	                                break;
	                        }
	                    };
	                }
	                antdColumnConfig.push(defaultColumn);
	            };

	            for (var item in this.columns) {
	                var _ret2 = _loop2(item);

	                switch (_ret2) {
	                    case 'continue':
	                        continue;

	                    default:
	                        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	                }
	            }
	            return antdColumnConfig;
	        }
	    }, {
	        key: 'onSelectChange',
	        value: function onSelectChange(selectedRowKeys, selectedRows) {
	            this.setState({ selectedRowKeys: selectedRowKeys });
	        }
	    }, {
	        key: 'selectAllData',
	        value: function selectAllData() {
	            var _this9 = this;

	            var displayData = this.state.data;
	            var selectedRowKeys = [];
	            var selectedRows = [];
	            var rowKey = this.config.rowKey || 'key';
	            // 只有选择形式为复选框时才能进行全选
	            selectedRows = displayData.filter(function (record) {
	                if (_this9.rowSelection.disabledRow && _this9.rowSelection.disabledRow(record)) {
	                    // 当满足不可选条件时，不可以进行选择
	                    return false;
	                } else {
	                    selectedRowKeys.push(record[rowKey]);
	                    return true;
	                }
	            });
	            // 通过组件的onChange函数完成全选
	            this.rowOnChange(selectedRowKeys, selectedRows);
	        }
	    }, {
	        key: 'clearSelect',
	        value: function clearSelect() {
	            this.rowOnChange([], []);
	        }
	        // 行change时触发此函数

	    }, {
	        key: 'rowOnChange',
	        value: function rowOnChange(selectedRowKeys, selectedRows) {
	            this.setState({ selectedRowKeys: selectedRowKeys });
	            if (this.rowSelection.onChange) {
	                this.rowSelection.onChange(selectedRowKeys, selectedRows);
	            }
	        }
	    }, {
	        key: 'rowOnSelect',
	        value: function rowOnSelect(record, selected, selectedRows) {
	            if (this.rowSelection.onSelect) {
	                this.rowSelection.onSelect(record, selected, selectedRows);
	            }
	        }
	        // 当页全选

	    }, {
	        key: 'rowOnSelectAll',
	        value: function rowOnSelectAll(selected, selectedRows, changeRows) {
	            if (this.rowSelection.onSelectAll) {
	                this.rowSelection.onSelectAll(selected, selectedRows, changeRows);
	            }
	        }
	    }, {
	        key: 'rowOnSelectInvert',
	        value: function rowOnSelectInvert(selectedRows) {
	            if (this.rowSelection.onSelectInvert) {
	                this.rowSelection.onSelectInvert(selectedRows);
	            }
	        }
	    }, {
	        key: 'renderRowSelection',
	        value: function renderRowSelection() {
	            var _this10 = this;

	            if (!this.rowSelection) {
	                return null;
	            }
	            var rowSelection = {
	                type: 'checkbox'
	            };
	            getNeedObject(rowSelection, this.rowSelection);
	            // 对行进行受控选择
	            rowSelection.selectedRowKeys = this.state.selectedRowKeys;
	            if (this.rowSelection.disabledRow) {
	                rowSelection.getCheckboxProps = function (record) {
	                    return { disabled: _this10.rowSelection.disabledRow(record) };
	                };
	            }
	            // 任何一行的选择与否都会触发改方法
	            rowSelection.onChange = this.rowOnChange.bind(this);
	            rowSelection.onSelect = this.rowOnSelect.bind(this);
	            // 全选当前页
	            rowSelection.onSelectAll = this.rowOnSelectAll.bind(this);
	            // 反选当页
	            rowSelection.onSelectInvert = this.rowOnSelectInvert.bind(this);
	            if (this.rowSelection.selections) {
	                // 在自定义选择项中增加全选功能
	                rowSelection.selections = [{
	                    key: 'uf-table-select-all',
	                    text: '全选',
	                    onSelect: this.selectAllData.bind(this)
	                }];
	                if (_utils.Utils.typeof(this.rowSelection.selections, 'array')) {
	                    rowSelection.selections.push(this.rowSelection.selections);
	                }
	            }

	            return rowSelection;
	        }
	    }, {
	        key: 'renderPagination',
	        value: function renderPagination() {
	            var _this11 = this;

	            if (!this.pagination) {
	                return false;
	            }
	            var pagination = {
	                pageSize: null,
	                showSizeChanger: false,
	                pageSizeOptions: null,
	                showQuickJumper: false,
	                size: '',
	                simple: false,
	                showTotal: null,
	                current: 1,
	                total: 0,
	                onShowSizeChange: this.onShowSizeChange.bind(this),
	                onChange: function onChange(page, pageSize) {
	                    _this11.pagination.current = page;
	                    if (_this11.pagination.pageType === 'server') {
	                        _this11.getData(page);
	                    }
	                    _this11.forceUpdate();
	                }
	            };
	            getNeedObject(pagination, this.pagination);
	            return pagination;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'uf-table ' + (this.state.fullScreen ? ' umpui-fullscreen' : '') },
	                _react2.default.createElement(_antd.Table, _extends({}, this.state.antdConfig, {
	                    title: this.titleGenerate(),
	                    dataSource: this.state.data,
	                    columns: this.renderColumns(),
	                    rowSelection: this.renderRowSelection()
	                    // rowSelection={null}
	                    , pagination: this.renderPagination(),
	                    loading: this.state.loading })),
	                this.state.showSetTagsModal && _react2.default.createElement(
	                    _antd.Modal,
	                    { title: '\u5C55\u793A\u5B57\u6BB5', visible: this.state.showSetTagsModal,
	                        onOk: this.setTableColumns.bind(this),
	                        onCancel: this.cancleSetTableColumns.bind(this) },
	                    this.generateColumnsCheckboxGroup()
	                )
	            );
	        }
	    }]);

	    return NewTable;
	}(_component.BaseComponent);

	exports.default = NewTable;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */,
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(60).default;

/***/ }),
/* 60 */
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

	var _component = __webpack_require__(18);

	var _utils = __webpack_require__(7);

	var _moment = __webpack_require__(23);

	var _moment2 = _interopRequireDefault(_moment);

	var _antd = __webpack_require__(11);

	var _ueditor = __webpack_require__(47);

	var _ueditor2 = _interopRequireDefault(_ueditor);

	__webpack_require__(61);

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

	        // 过滤掉Form.create传入的form属性
	        var _this = _possibleConstructorReturn(this, (OriginForm.__proto__ || Object.getPrototypeOf(OriginForm)).call(this, props));

	        _this._filter.push('form');
	        _this.__init();
	        _this.state = {
	            loading: false
	        };
	        // this.props.form; Antd.Form封装的函数
	        _this.form = props.form;
	        _this.config = null;
	        // 用于存储子Form的引用（因为无法直接拿到refs）
	        _this.formRef = {};
	        _this.defaultValues = null;
	        // 用于记录当前form是否变换过（原来单个form通过复制新增等变为了多个）
	        _this.isArrayForm = false;
	        _this.init();
	        _this.itemsCache = {};
	        // this.setItemsCache(this.config.items);
	        return _this;
	    }

	    _createClass(OriginForm, [{
	        key: 'init',
	        value: function init(nextProps) {
	            // 过滤掉Form.create传入的form属性
	            var props = this.__props;
	            if (nextProps) {
	                props = _utils.Utils.merge({}, props, nextProps);
	            }
	            props = _utils.Utils.filter(props, 'form');
	            this.config = props;
	            this.formItemLayout = this.getLayout(props.layout);
	            // 是之成为受控组件，实现Form嵌套
	            if ('params' in props && !_utils.Utils.equals(this.defaultValues, props.params)) {
	                this.setDefaultValues(props.params);
	                !!nextProps && this.initValues();
	            }
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
	            var values = this.form.getFieldsValue();
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
	            this.form.validateFields(function (err, values) {
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
	            // console.log(values);
	            if (values) {
	                // 设置初始值前对传入的 params 格式化
	                if (this.config.beforeSetValues) {
	                    values = this.config.beforeSetValues(values);
	                }
	                this.form.setFieldsValue(values);
	            } else {
	                this.form.resetFields();
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
	                                this.form.setFieldsValue(_defineProperty({}, i, result));
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
	            this.__getData(url, null, function (data) {
	                if (item.cfg.sourceHandler) {
	                    data = item.cfg.sourceHandler(data);
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
	            var getFieldDecorator = this.form.getFieldDecorator;
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
	                    itemContent = _react2.default.createElement(ReactForm, _extends({}, item.cfg, {
	                        wrappedComponentRef: function wrappedComponentRef(inst) {
	                            return _this3.formRef[key] = inst;
	                        } }));
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
	                        optionFilterProp: 'children',
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
	                        var list = this.form.getFieldValue(key) || [];
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
	            if (!callback && !this.__props.onSubmit) {
	                return true;
	            }
	            var submit = callback || this.__props.onSubmit;
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
	            this.form.resetFields();
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
	            var form = this.form;
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

	            var form = this.form;
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
	                // case 'add':
	                //     handleClick = this.addClick.bind(this, item.onClick)
	                //     break;
	                // case 'copy':
	                //     handleClick = this.copyClick.bind(this, item.onClick)
	                //     break;
	                // case 'delete':
	                //     handleClick = this.deleteClick.bind(this, item.onClick, key)
	                //     break;
	                case 'reset':
	                    handleClick = this.resetClick.bind(this, item.onClick, key);
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
	            return this.generateFormItems(this.config.items);
	            // const {getFieldDecorator, getFieldValue} = this.form;
	            // // 创建一个隐含的表单项来存储需要展示几个form
	            // getFieldDecorator('__keys', { initialValue: [0] });
	            // const keys = getFieldValue('__keys');
	            // let items = this.config.items;
	            // let result;
	            // if (keys.length > 1) {
	            //     result = keys.map(v=>{
	            //         return this.generateFormItems(items, v)
	            //     });
	            // } else {
	            //     result = this.generateFormItems(items)
	            // }
	            // return result;
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
	            var _this5 = this;

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
	                                                loading: _this5.state.loading,
	                                                onClick: _this5.submitClick.bind(_this5, item.onClick) }),
	                                            item.value
	                                        );
	                                        break;
	                                    case 'reset':
	                                        return _react2.default.createElement(
	                                            _antd.Button,
	                                            _extends({ key: 'reset' }, item, {
	                                                onClick: _this5.resetClick.bind(_this5, item.onClick) }),
	                                            item.value
	                                        );
	                                        break;
	                                    default:
	                                        return _react2.default.createElement(
	                                            _antd.Button,
	                                            _extends({ key: item.value }, item, {
	                                                onClick: _this5.customClick.bind(_this5, item.onClick) }),
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
	                { className: 'uf-form ' + (this.config.className || '') },
	                this.config.header && (
	                // header 可以是字符串，也可以是一个组件配置
	                _utils.Utils.typeof(this.config.header, 'string') ? _react2.default.createElement(
	                    'div',
	                    { className: 'form-header' },
	                    _react2.default.createElement(
	                        'h5',
	                        null,
	                        this.config.header
	                    ),
	                    _react2.default.createElement('hr', null)
	                ) : _react2.default.createElement(
	                    'div',
	                    { className: 'form-header' },
	                    this.__analysis(this.config.header)
	                )),
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

	// Update at 2017/10/26，使组件类型统一，在组件外增加一层壳子
	// Form.create生成的组件是非BaseComponent类型的，需要外面再包一层壳子。
	// 注意壳子只是用来声明组件类型的，不需要对参数进行任何处理，所以无需调用 __init() 函数

	var NewForm = function (_BaseComponent2) {
	    _inherits(NewForm, _BaseComponent2);

	    function NewForm() {
	        _classCallCheck(this, NewForm);

	        return _possibleConstructorReturn(this, (NewForm.__proto__ || Object.getPrototypeOf(NewForm)).apply(this, arguments));
	    }

	    _createClass(NewForm, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(ReactForm, this.props);
	        }
	    }]);

	    return NewForm;
	}(_component.BaseComponent);

	exports.default = NewForm;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(64).default;

/***/ }),
/* 64 */
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

	var _antd = __webpack_require__(11);

	var _component = __webpack_require__(18);

	var _utils = __webpack_require__(7);

	var _tools = __webpack_require__(1);

	var _tools2 = _interopRequireDefault(_tools);

	__webpack_require__(65);

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

	        // 给__props增加一些默认的事件处理函数
	        var _this = _possibleConstructorReturn(this, (NewModal.__proto__ || Object.getPrototypeOf(NewModal)).call(this, props));

	        _this.__props = {
	            onCancel: _this.onCancel.bind(_this)
	        };
	        _this.__init();
	        return _this;
	    }

	    _createClass(NewModal, [{
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
/* 65 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(68).default;

/***/ }),
/* 68 */
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

	var _antd = __webpack_require__(11);

	var _component = __webpack_require__(18);

	var _utils = __webpack_require__(7);

	var _export = __webpack_require__(45);

	var _export2 = _interopRequireDefault(_export);

	var _ReactInput = __webpack_require__(69);

	var _ReactInput2 = _interopRequireDefault(_ReactInput);

	var _ReactModal = __webpack_require__(70);

	var _ReactModal2 = _interopRequireDefault(_ReactModal);

	var _TrRow = __webpack_require__(74);

	var _TrRow2 = _interopRequireDefault(_TrRow);

	var _ThRow = __webpack_require__(75);

	var _ThRow2 = _interopRequireDefault(_ThRow);

	var _Confirm = __webpack_require__(77);

	var _Confirm2 = _interopRequireDefault(_Confirm);

	__webpack_require__(78);

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
	            this.key = tableCfg.dataIndex || 'id';
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
	                // 使用PureComponent，用于必要时强制刷新组件
	                // flag: 0,
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
	    }, {
	        key: 'forceRefresh',
	        value: function forceRefresh() {
	            // this.setState({flag: Date.now()});
	            this.forceUpdate();
	        }
	        // 刷新数据时调用 - 包括直接传入数据和通过url获取数据
	        // 数据变更时都需要调用此函数，以刷新导出组件的数据或查询条件

	    }, {
	        key: 'onRefreshData',
	        value: function onRefreshData() {
	            this.clearSelect();
	            // 刷新导出组件配置
	            this.exportConfig = this.getExportConfig();
	            this.defaultCheckAll();
	            this.forceRefresh();
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
	            this.forceRefresh();
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
	            this.forceRefresh();
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
	            this.forceRefresh();
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
	                this.forceRefresh();
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
	            this.forceRefresh();
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
	            this.forceRefresh();
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
	                this.pager.pageSize = +size;
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
	                { key: 'table-extra', className: 'umpui-header-extra-con' },
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
	                    currPageData: currPageData
	                });
	                this.forceRefresh();
	            } else if (typeof column['sort'] === 'function') {
	                var _allData = this.state.content.sort(function (lineOne, lineTwo) {
	                    var sortVal = column['sort'](lineOne, lineTwo);
	                    return sortType ? sortVal : -sortVal;
	                });
	                var _currPageData = _allData.slice(0, this.pager.pageSize);
	                this.setState({
	                    content: _allData,
	                    currPageData: _currPageData
	                });
	                this.forceRefresh();
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
/* 69 */
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

	var _antd = __webpack_require__(11);

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
/* 70 */
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

	var _antd = __webpack_require__(11);

	var _ReactInput = __webpack_require__(69);

	var _ReactInput2 = _interopRequireDefault(_ReactInput);

	__webpack_require__(71);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file ReactModal-Form表单  适用于弹出层的表单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author luyongfang@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */


	var Immutable = __webpack_require__(73);
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
	                this.params[ref]['display'] = val.target.checked;
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
	                                    onChange: self.handleChange.bind(self, key, 'checkbox') },
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
/* 71 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */,
/* 73 */
/***/ (function(module, exports) {

	module.exports = window.DLL.Immutable;

/***/ }),
/* 74 */
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

	var _reactRouter = __webpack_require__(36);

	var _antd = __webpack_require__(11);

	var _utils = __webpack_require__(7);

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
/* 75 */
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

	var _reactRouter = __webpack_require__(36);

	var _antd = __webpack_require__(11);

	var _UDnD = __webpack_require__(76);

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
/* 76 */
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

	var _component = __webpack_require__(18);

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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(11);

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
/* 78 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */,
/* 80 */
/***/ (function(module, exports) {

	module.exports = window.DLL.moment_zh_cn;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @file 适配器，把组件配置转换为统一规范格式
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


	var _component = __webpack_require__(18);

	var _utils = __webpack_require__(7);

	var _Antd = __webpack_require__(17);

	var _Antd2 = _interopRequireDefault(_Antd);

	var _loader = __webpack_require__(82);

	var _loader2 = _interopRequireDefault(_loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 不属于config的参数，适配用户配置的参数时使用
	var KeyWord = ['name', 'type', 'content', 'childrenHolder'];

	exports.default = {
	    get: function get(item) {
	        // 每个组件都要有key。同步设置在用户传入的config上，使key一旦设置即不再变化
	        item.key = item.key || item.name || _utils.Utils.uniqueId();

	        var Item = _loader2.default.get(item);
	        var props = _utils.Utils.filter(item, KeyWord);
	        // 把 content 转化成 children。update at 2017/10/25,如果没有content,则使用原来的children
	        props.children = item.content || props.children;
	        // 格式化 class 和 style
	        props = this.formatCS(props);
	        // 如果是基于BaseComponent的组件内部要用到的属性处理
	        if (_utils.Utils.isExtendsOf(Item, _component.BaseComponent)) {
	            props['__type'] = item.type;
	            props['__key'] = props['key'];
	            // 如果有name的话，把组件放到缓存池里
	            if (item.name) {
	                props['__cache'] = item.name;
	            }
	            // 由于 type 关键字把原antd等的 type 覆盖掉了，配置里用 mode 字段代替
	            // 实例化组件时，还要把 type 还原
	            if (_utils.Utils.isExtendsOf(Item, _Antd2.default)) {
	                if (props.mode) {
	                    props.type = props.mode;
	                }
	            }
	            // 非 BaseComponent 组件 _root 等属性无效
	        } else {
	            delete props._root;
	            delete props._factory;
	        }

	        return props;
	    },

	    // 供 BaseComponent 使用，在 set 之前
	    beforeSet: function beforeSet(component, options) {
	        this.formatCS(options);
	        // 实例化组件时，还要把 type 还原
	        if (component instanceof _Antd2.default) {
	            if (options.mode) {
	                options.type = options.mode;
	            }
	        }
	        return options;
	    },

	    // 把 class、style 转换为 react 需要的 className、style对象
	    formatCS: function formatCS(props) {
	        if (props.class) {
	            props.className += ' ' + props.class;
	            delete props.class;
	        }
	        if (props.style && _utils.Utils.typeof(props.style, 'string')) {
	            props.style = this.toCamalObj(props.style);
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
	};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(7);

	var _model = __webpack_require__(83);

	var _model2 = _interopRequireDefault(_model);

	var _dom = __webpack_require__(37);

	var _dom2 = _interopRequireDefault(_dom);

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
	    get: function get(item) {
	        var type = item.type;
	        var name = _utils.Utils.toPascal(type);
	        var result = this.component[name];
	        if (!result) {
	            // 检查是否为React原生元素
	            if (_react2.default.DOM.hasOwnProperty(type)) {
	                // 如果有name，说明用户想要操作组件；如果使用了数据绑定：使用Dom组件进行封装，实现组件缓存和刷新
	                // 否则用原生的增强性能
	                if (item.name || _model2.default.if(item)) {
	                    result = _dom2.default;
	                } else {
	                    result = type;
	                }
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(7);

	var _cache = __webpack_require__(20);

	// 使用model表达式格式
	/**
	 * @file 数据/页面绑定 处理模块
	 * @author liuzechun
	 */
	var Expre = /\${(\S+?)}/g;
	// const Expre = /\${(\S+?)}/;

	exports.default = {

	    // 给用户使用
	    set: function set(model, data) {
	        // 更新data的数据
	        _cache.ModelCache.setData(model, data);
	        // 更新完数据后刷新相关联的组件
	        var connections = _cache.ModelCache.getConnections(model);
	        for (var i in connections) {
	            // 获取缓存中的组件
	            var comp = _cache.ComponentsCache.get(i);
	            if (!!comp) {
	                var item = connections[i];
	                var options = {};
	                for (var j in item) {
	                    // 从ModelCache中取出当前对应值把模板内容替换掉
	                    options[j] = this.replaceModel(item[j]);
	                }
	                // 调用组件的set函数刷新组件全部受影响的属性
	                comp.set(options);
	            }
	        }
	        console.log(_cache.ModelCache);
	    },


	    /* 程序内部调用 *************************************************************/

	    // 替换模板中的内容
	    replaceModel: function replaceModel(item) {
	        return item.replace(Expre, function (p1, model) {
	            return _cache.ModelCache.getData(model);
	        });
	    },


	    // 设置组件及属性和数据的关联关系
	    setCache: function setCache(cacheName, options) {
	        var _this = this;

	        // let currComp = ComponentsCache.get(cacheName);
	        var models = _cache.ModelCache.getModel();

	        var _loop = function _loop(i) {
	            var item = options[i];
	            if (_this.is(item)) {
	                // match会返回全部匹配到的数组
	                item.match(Expre).map(function (v) {
	                    var model = v.slice(2, -1);
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
	                options[i] = _this.replaceModel(item);
	            }
	        };

	        for (var i in options) {
	            _loop(i);
	        }
	        return options;
	    },


	    // 把数据插入到模板中，返回新的字符串
	    insert: function insert(tml, data) {
	        return tml.replace();
	    },


	    // 判断是否关联model数据
	    if: function _if(item) {
	        for (var i in item) {
	            // 只要有一条数据是使用了model，则为true
	            if (this.is(item[i])) {
	                return true;
	            }
	        }
	        return false;
	    },


	    // 判断一个值是否使用model
	    is: function is(value) {
	        return _utils.Utils.typeof(value, 'string') && value.search(Expre) >= 0;
	    }
	};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(7);

	var _cache = __webpack_require__(20);

	var _loader = __webpack_require__(82);

	var _loader2 = _interopRequireDefault(_loader);

	var _adaptor = __webpack_require__(81);

	var _adaptor2 = _interopRequireDefault(_adaptor);

	var _validator = __webpack_require__(85);

	var _validator2 = _interopRequireDefault(_validator);

	var _special = __webpack_require__(86);

	var _special2 = _interopRequireDefault(_special);

	var _whitelist = __webpack_require__(87);

	var _whitelist2 = _interopRequireDefault(_whitelist);

	var _html = __webpack_require__(88);

	var _html2 = _interopRequireDefault(_html);

	var _requirejs = __webpack_require__(89);

	var _requirejs2 = _interopRequireDefault(_requirejs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 解析配置，生成页面
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      主要负责调度各个解析工具，并生成组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Factory = function (_PureComponent) {
	    _inherits(Factory, _PureComponent);

	    function Factory(props) {
	        _classCallCheck(this, Factory);

	        var _this = _possibleConstructorReturn(this, (Factory.__proto__ || Object.getPrototypeOf(Factory)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Factory, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (!_utils.Utils.equals(this.props, nextProps)) {
	                this._cacheContent = null;
	            }
	        }

	        // 解析组件配置，生成组件

	    }, {
	        key: 'generateItem',
	        value: function generateItem(item) {
	            // 如果是字符串直接返回
	            if (_utils.Utils.typeof(item, 'string')) {
	                return item;
	            }
	            var test = item;
	            // 校验是否有 type 属性，如果没有会报错
	            if (!_validator2.default.check(item, 'type', 'string')) {
	                return;
	            }
	            // 如果是 html 类型，使用 html 模板解析器来解析，然后直接返回
	            // TODO: 把模板解析器也做成一个组件
	            if (item.type === 'html') {
	                return new _html2.default(item.content);
	            }
	            // 从loader中获取到相应的组件
	            var Item = _loader2.default.get(item);
	            if (!Item) {
	                return;
	            }

	            // 某些特殊种类的组件对参数进行特殊处理
	            // 这块逻辑之所以没写到相应组件类里，是因为某些参数需要在实例之间就要处理
	            item = _special2.default.if(item);

	            // 把 factory 和 factory 的 props 传给每个组件
	            item._factory = this;
	            item._root = this.props;

	            var props = this.handleProps(item);

	            return _react2.default.createElement(Item, props);
	        }

	        // 处理用户配置的参数，并生成组件需要使用的 props

	    }, {
	        key: 'handleProps',
	        value: function handleProps(item) {
	            // 通过适配器把参数转换成标准格式，剔除掉一些无用属性等
	            var props = _adaptor2.default.get(item);
	            // 判断其他需要额外进一步解析的属性并进行解析
	            props = this.analysisAgain(props, item.type);
	            // 处理children属性
	            props = this.handleChildren(props, item.childrenHolder);
	            return props;
	        }

	        // this.props.children为路由解析时子路由对应的组件，需要把子路由的组件在父组件的某个位置作为children展示出来
	        // 在组件配置中，childrenHolder属性指定把子页面放在父组件的哪个位置

	    }, {
	        key: 'handleChildren',
	        value: function handleChildren(props, hasChildrenHolder) {
	            // 只有指定了childrenHolder这个属性才会展示
	            if (hasChildrenHolder && this.props.children) {
	                if (!props.children) {
	                    props.children = this.props.children;
	                } else {
	                    // 已经存在children的情况下，把children合并。兼容处理
	                    !_utils.Utils.typeof(props.children, 'array') && (props.children = [props.children]);
	                    props.children.push(this.props.children);
	                }
	            }
	            return props;
	        }

	        // 拆分多个config，分离成组件的配置

	    }, {
	        key: 'generateElement',
	        value: function generateElement(config) {
	            // config = config || this.props.config;
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
	        value: function analysisAgain(props, type) {
	            var list = _whitelist2.default.get(props, type);
	            if (list) {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var v = _step2.value;

	                        props[v] = this.generateElement(props[v]);
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
	            return props;
	        }

	        // 获取模块配置。
	        // 如果模块为异步模块，则做异步处理

	    }, {
	        key: 'getConfig',
	        value: function getConfig() {
	            var _this2 = this;

	            // TODO: 这里每次切换页面会重新解析；且会出现 Loading 状态
	            // 路由没切换，组件会销毁？ update at 2017.10.24: react-router 刷新两次的bug，需把react-router升级成4.x
	            var config = this.state.config || this.props.config;
	            if (_utils.Utils.typeof(config, 'string')) {
	                (0, _requirejs2.default)([config], function (foo) {
	                    // TODO: render执行两次的情况下，会进入两次这里，而第一次生成的组件没有渲染到页面上就销毁了，这里再使用setState会报错
	                    _this2.setState({ config: foo });
	                });
	                var showLoading = _cache.Config.get('modules')['showLoading'];
	                if (_utils.Utils.typeof(showLoading, 'array')) {
	                    // config 此时为模块名称
	                    showLoading = showLoading.indexOf(config) !== -1;
	                }
	                config = {
	                    type: 'loading',
	                    loading: !!showLoading
	                };
	            }
	            return config;
	        }
	    }, {
	        key: 'getContent',
	        value: function getContent() {
	            this._cacheContent = this._cacheContent || this.generateElement(this.getConfig());
	            return this._cacheContent;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // 如果是配置是数组则需要在外层增加一个div标签，非数组的情况下可以把多余的div去掉
	            var result = this.getContent();
	            return _utils.Utils.typeof(result, 'array') ? _react2.default.createElement(
	                'div',
	                null,
	                result
	            ) : result;
	        }
	    }]);

	    return Factory;
	}(_react.PureComponent);

	exports.default = Factory;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(7);

	exports.default = {
	    // 检查对象上的某个(些)属性是否符合指定类型
	    // 属性可以是单个字符串或数组
	    check: function check(item, name, type) {
	        type = type || 'undefined';
	        // 如果不是数组，转换为数组
	        if (_utils.Utils.typeof(name, 'string')) {
	            name = [name];
	        }
	        if (_utils.Utils.typeof(item, 'object')) {
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _uf = __webpack_require__(4);

	var _utils = __webpack_require__(7);

	var _loader = __webpack_require__(82);

	var _loader2 = _interopRequireDefault(_loader);

	var _factory = __webpack_require__(84);

	var _factory2 = _interopRequireDefault(_factory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    if: function _if(item) {
	        var Item = _loader2.default.get(item);
	        // 如果是 布局相关 的组件
	        if (_utils.Utils.isExtendsOf(Item, _uf.Layout)) {
	            item = this.setLayout(item);
	        }
	        // 如果是 路由相关 的组件
	        if (_utils.Utils.isExtendsOf(Item, _uf.BaseRouter)) {
	            item = this.setRoute(item);
	        }
	        // 如果是 路由-Router 组件
	        if (_utils.Utils.isExtendsOf(Item, _uf.Router)) {
	            item = this.setRouter(item);
	        }
	        return item;
	    },


	    // 如果是 路由-Router 的组件
	    setRouter: function setRouter(item) {
	        // router 的第二种用法，routes 里面的全部 component 需要转换为 RouteHolder
	        if (item.routes) {
	            item.routes = this.loopRoutes(item.routes);
	        }
	        return item;
	    },

	    // component 转换为 RouteHolder
	    setRoute: function setRoute(item) {
	        if (item.component) {
	            // 组件实例放在新属性content里
	            item.__component = item.component;
	            // component属性为一个抽象类
	            item.component = _uf.RouteHolder;
	        }
	        return item;
	    },
	    loopRoutes: function loopRoutes(routes) {
	        var arr = routes;
	        if (!_utils.Utils.typeof(routes, 'array')) {
	            arr = [routes];
	        }
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var v = _step.value;

	                v = this.setRoute(v);
	                if (v.childRoutes) {
	                    v.childRoutes = this.loopRoutes(v.childRoutes);
	                }
	                if (v.indexRoute) {
	                    v.indexRoute = this.setRoute(v.indexRoute);
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

	        return routes;
	    },


	    // 如果是 布局相关 的组件
	    setLayout: function setLayout(item) {
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
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	            for (var _iterator2 = content[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var v = _step2.value;

	                if (v.type === 'sider') {
	                    className += ' ant-layout-has-sider';
	                    break;
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

	        item.className = className;
	        return item;
	    }
	}; /**
	    * @file 特殊处理 - 几种特殊种类的组件解析前需做特殊处理
	    *      这块逻辑之所以没写到相应组件类里，是因为某些参数需要在实例之间就要处理
	    * @author liuzechun
	    * Created Date: 2017-09-30 02:47:59
	    *
	    * Last Modified: 2017-09-30 02:47:59
	    * Modified By: liuzechun
	    */

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(7);

	var List = {
	    Breadcrumb: ['options'],
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
	    Modal: ['title', 'footer'],
	    Table: ['title']
	}; /**
	    * @file 属性需进一步解析的组件属性名单
	    * @author liuzechun
	    */

	exports.default = {

	    // 返回需要二次解析的属性
	    get: function get(props, type) {
	        var name = _utils.Utils.toPascal(type);
	        // 把 children 属性加入到全部组件中
	        var list = (List[name] || []).concat('children');
	        var result = [];
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var v = _step.value;

	                // 如果在白名单中的属性值是直接的对象或数组（未解析的配置），则返回
	                if (!!props[v] && _utils.Utils.directInstanceof(props[v], [Object, Array])) {
	                    result.push(v);
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

	        return result.length > 0 ? result : false;
	    }
	};

/***/ }),
/* 88 */
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

	var _utils = __webpack_require__(7);

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

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * @file reuqirejs 2.3.5 
	 *      为了方便统一管理，拷贝了一份requirejs的代码，并在最后把requirejs export出去
	 * vim: et:ts=4:sw=4:sts=4
	 * @license RequireJS 2.3.5 Copyright jQuery Foundation and other contributors.
	 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
	 */
	//Not using strict: uneven strict support in browsers, #392, and causes
	//problems with requirejs.exec()/transpiler plugins that may not be strict.
	/*jslint regexp: true, nomen: true, sloppy: true */
	/*global window, navigator, document, importScripts, setTimeout, opera */

	var requirejs, _require, define;
	(function (global, setTimeout) {
	    var req,
	        s,
	        head,
	        baseElement,
	        dataMain,
	        src,
	        interactiveScript,
	        currentlyAddingScript,
	        mainScript,
	        subPath,
	        version = '2.3.5',
	        commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/mg,
	        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
	        jsSuffixRegExp = /\.js$/,
	        currDirRegExp = /^\.\//,
	        op = Object.prototype,
	        ostring = op.toString,
	        hasOwn = op.hasOwnProperty,
	        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
	        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',

	    //PS3 indicates loaded and complete, but need to wait for complete
	    //specifically. Sequence is 'loading', 'loaded', execution,
	    // then 'complete'. The UA check is unfortunate, but not sure how
	    //to feature test w/o causing perf issues.
	    readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ? /^complete$/ : /^(complete|loaded)$/,
	        defContextName = '_',

	    //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
	    isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
	        contexts = {},
	        cfg = {},
	        globalDefQueue = [],
	        useInteractive = false;

	    //Could match something like ')//comment', do not lose the prefix to comment.
	    function commentReplace(match, singlePrefix) {
	        return singlePrefix || '';
	    }

	    function isFunction(it) {
	        return ostring.call(it) === '[object Function]';
	    }

	    function isArray(it) {
	        return ostring.call(it) === '[object Array]';
	    }

	    /**
	     * Helper function for iterating over an array. If the func returns
	     * a true value, it will break out of the loop.
	     */
	    function each(ary, func) {
	        if (ary) {
	            var i;
	            for (i = 0; i < ary.length; i += 1) {
	                if (ary[i] && func(ary[i], i, ary)) {
	                    break;
	                }
	            }
	        }
	    }

	    /**
	     * Helper function for iterating over an array backwards. If the func
	     * returns a true value, it will break out of the loop.
	     */
	    function eachReverse(ary, func) {
	        if (ary) {
	            var i;
	            for (i = ary.length - 1; i > -1; i -= 1) {
	                if (ary[i] && func(ary[i], i, ary)) {
	                    break;
	                }
	            }
	        }
	    }

	    function hasProp(obj, prop) {
	        return hasOwn.call(obj, prop);
	    }

	    function getOwn(obj, prop) {
	        return hasProp(obj, prop) && obj[prop];
	    }

	    /**
	     * Cycles over properties in an object and calls a function for each
	     * property value. If the function returns a truthy value, then the
	     * iteration is stopped.
	     */
	    function eachProp(obj, func) {
	        var prop;
	        for (prop in obj) {
	            if (hasProp(obj, prop)) {
	                if (func(obj[prop], prop)) {
	                    break;
	                }
	            }
	        }
	    }

	    /**
	     * Simple function to mix in properties from source into target,
	     * but only if target does not already have a property of the same name.
	     */
	    function mixin(target, source, force, deepStringMixin) {
	        if (source) {
	            eachProp(source, function (value, prop) {
	                if (force || !hasProp(target, prop)) {
	                    if (deepStringMixin && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && !isArray(value) && !isFunction(value) && !(value instanceof RegExp)) {

	                        if (!target[prop]) {
	                            target[prop] = {};
	                        }
	                        mixin(target[prop], value, force, deepStringMixin);
	                    } else {
	                        target[prop] = value;
	                    }
	                }
	            });
	        }
	        return target;
	    }

	    //Similar to Function.prototype.bind, but the 'this' object is specified
	    //first, since it is easier to read/figure out what 'this' will be.
	    function bind(obj, fn) {
	        return function () {
	            return fn.apply(obj, arguments);
	        };
	    }

	    function scripts() {
	        return document.getElementsByTagName('script');
	    }

	    function defaultOnError(err) {
	        throw err;
	    }

	    //Allow getting a global that is expressed in
	    //dot notation, like 'a.b.c'.
	    function getGlobal(value) {
	        if (!value) {
	            return value;
	        }
	        var g = global;
	        each(value.split('.'), function (part) {
	            g = g[part];
	        });
	        return g;
	    }

	    /**
	     * Constructs an error with a pointer to an URL with more information.
	     * @param {String} id the error ID that maps to an ID on a web page.
	     * @param {String} message human readable error.
	     * @param {Error} [err] the original error, if there is one.
	     *
	     * @returns {Error}
	     */
	    function makeError(id, msg, err, requireModules) {
	        var e = new Error(msg + '\nhttp://requirejs.org/docs/errors.html#' + id);
	        e.requireType = id;
	        e.requireModules = requireModules;
	        if (err) {
	            e.originalError = err;
	        }
	        return e;
	    }

	    if (typeof define !== 'undefined') {
	        //If a define is already in play via another AMD loader,
	        //do not overwrite.
	        return;
	    }

	    if (typeof requirejs !== 'undefined') {
	        if (isFunction(requirejs)) {
	            //Do not overwrite an existing requirejs instance.
	            return;
	        }
	        cfg = requirejs;
	        requirejs = undefined;
	    }

	    //Allow for a require config object
	    if (typeof _require !== 'undefined' && !isFunction(_require)) {
	        //assume it is a config object.
	        cfg = _require;
	        _require = undefined;
	    }

	    function newContext(contextName) {
	        var inCheckLoaded,
	            Module,
	            context,
	            handlers,
	            checkLoadedTimeoutId,
	            _config = {
	            //Defaults. Do not set a default for map
	            //config to speed up normalize(), which
	            //will run faster if there is no default.
	            waitSeconds: 7,
	            baseUrl: './',
	            paths: {},
	            bundles: {},
	            pkgs: {},
	            shim: {},
	            config: {}
	        },
	            registry = {},

	        //registry of just enabled modules, to speed
	        //cycle breaking code when lots of modules
	        //are registered, but not activated.
	        enabledRegistry = {},
	            undefEvents = {},
	            defQueue = [],
	            _defined = {},
	            urlFetched = {},
	            bundlesMap = {},
	            requireCounter = 1,
	            unnormalizedCounter = 1;

	        /**
	         * Trims the . and .. from an array of path segments.
	         * It will keep a leading path segment if a .. will become
	         * the first path segment, to help with module name lookups,
	         * which act like paths, but can be remapped. But the end result,
	         * all paths that use this function should look normalized.
	         * NOTE: this method MODIFIES the input array.
	         * @param {Array} ary the array of path segments.
	         */
	        function trimDots(ary) {
	            var i, part;
	            for (i = 0; i < ary.length; i++) {
	                part = ary[i];
	                if (part === '.') {
	                    ary.splice(i, 1);
	                    i -= 1;
	                } else if (part === '..') {
	                    // If at the start, or previous value is still ..,
	                    // keep them so that when converted to a path it may
	                    // still work when converted to a path, even though
	                    // as an ID it is less than ideal. In larger point
	                    // releases, may be better to just kick out an error.
	                    if (i === 0 || i === 1 && ary[2] === '..' || ary[i - 1] === '..') {
	                        continue;
	                    } else if (i > 0) {
	                        ary.splice(i - 1, 2);
	                        i -= 2;
	                    }
	                }
	            }
	        }

	        /**
	         * Given a relative module name, like ./something, normalize it to
	         * a real name that can be mapped to a path.
	         * @param {String} name the relative name
	         * @param {String} baseName a real name that the name arg is relative
	         * to.
	         * @param {Boolean} applyMap apply the map config to the value. Should
	         * only be done if this normalization is for a dependency ID.
	         * @returns {String} normalized name
	         */
	        function normalize(name, baseName, applyMap) {
	            var pkgMain,
	                mapValue,
	                nameParts,
	                i,
	                j,
	                nameSegment,
	                lastIndex,
	                foundMap,
	                foundI,
	                foundStarMap,
	                starI,
	                normalizedBaseParts,
	                baseParts = baseName && baseName.split('/'),
	                map = _config.map,
	                starMap = map && map['*'];

	            //Adjust any relative paths.
	            if (name) {
	                name = name.split('/');
	                lastIndex = name.length - 1;

	                // If wanting node ID compatibility, strip .js from end
	                // of IDs. Have to do this here, and not in nameToUrl
	                // because node allows either .js or non .js to map
	                // to same file.
	                if (_config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
	                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
	                }

	                // Starts with a '.' so need the baseName
	                if (name[0].charAt(0) === '.' && baseParts) {
	                    //Convert baseName to array, and lop off the last part,
	                    //so that . matches that 'directory' and not name of the baseName's
	                    //module. For instance, baseName of 'one/two/three', maps to
	                    //'one/two/three.js', but we want the directory, 'one/two' for
	                    //this normalization.
	                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
	                    name = normalizedBaseParts.concat(name);
	                }

	                trimDots(name);
	                name = name.join('/');
	            }

	            //Apply map config if available.
	            if (applyMap && map && (baseParts || starMap)) {
	                nameParts = name.split('/');

	                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
	                    nameSegment = nameParts.slice(0, i).join('/');

	                    if (baseParts) {
	                        //Find the longest baseName segment match in the config.
	                        //So, do joins on the biggest to smallest lengths of baseParts.
	                        for (j = baseParts.length; j > 0; j -= 1) {
	                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));

	                            //baseName segment has config, find if it has one for
	                            //this name.
	                            if (mapValue) {
	                                mapValue = getOwn(mapValue, nameSegment);
	                                if (mapValue) {
	                                    //Match, update name to the new value.
	                                    foundMap = mapValue;
	                                    foundI = i;
	                                    break outerLoop;
	                                }
	                            }
	                        }
	                    }

	                    //Check for a star map match, but just hold on to it,
	                    //if there is a shorter segment match later in a matching
	                    //config, then favor over this star map.
	                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
	                        foundStarMap = getOwn(starMap, nameSegment);
	                        starI = i;
	                    }
	                }

	                if (!foundMap && foundStarMap) {
	                    foundMap = foundStarMap;
	                    foundI = starI;
	                }

	                if (foundMap) {
	                    nameParts.splice(0, foundI, foundMap);
	                    name = nameParts.join('/');
	                }
	            }

	            // If the name points to a package's name, use
	            // the package main instead.
	            pkgMain = getOwn(_config.pkgs, name);

	            return pkgMain ? pkgMain : name;
	        }

	        function removeScript(name) {
	            if (isBrowser) {
	                each(scripts(), function (scriptNode) {
	                    if (scriptNode.getAttribute('data-requiremodule') === name && scriptNode.getAttribute('data-requirecontext') === context.contextName) {
	                        scriptNode.parentNode.removeChild(scriptNode);
	                        return true;
	                    }
	                });
	            }
	        }

	        function hasPathFallback(id) {
	            var pathConfig = getOwn(_config.paths, id);
	            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
	                //Pop off the first array value, since it failed, and
	                //retry
	                pathConfig.shift();
	                context.require.undef(id);

	                //Custom require that does not do map translation, since
	                //ID is "absolute", already mapped/resolved.
	                context.makeRequire(null, {
	                    skipMap: true
	                })([id]);

	                return true;
	            }
	        }

	        //Turns a plugin!resource to [plugin, resource]
	        //with the plugin being undefined if the name
	        //did not have a plugin prefix.
	        function splitPrefix(name) {
	            var prefix,
	                index = name ? name.indexOf('!') : -1;
	            if (index > -1) {
	                prefix = name.substring(0, index);
	                name = name.substring(index + 1, name.length);
	            }
	            return [prefix, name];
	        }

	        /**
	         * Creates a module mapping that includes plugin prefix, module
	         * name, and path. If parentModuleMap is provided it will
	         * also normalize the name via require.normalize()
	         *
	         * @param {String} name the module name
	         * @param {String} [parentModuleMap] parent module map
	         * for the module name, used to resolve relative names.
	         * @param {Boolean} isNormalized: is the ID already normalized.
	         * This is true if this call is done for a define() module ID.
	         * @param {Boolean} applyMap: apply the map config to the ID.
	         * Should only be true if this map is for a dependency.
	         *
	         * @returns {Object}
	         */
	        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
	            var url,
	                pluginModule,
	                suffix,
	                nameParts,
	                prefix = null,
	                parentName = parentModuleMap ? parentModuleMap.name : null,
	                originalName = name,
	                isDefine = true,
	                normalizedName = '';

	            //If no name, then it means it is a require call, generate an
	            //internal name.
	            if (!name) {
	                isDefine = false;
	                name = '_@r' + (requireCounter += 1);
	            }

	            nameParts = splitPrefix(name);
	            prefix = nameParts[0];
	            name = nameParts[1];

	            if (prefix) {
	                prefix = normalize(prefix, parentName, applyMap);
	                pluginModule = getOwn(_defined, prefix);
	            }

	            //Account for relative paths if there is a base name.
	            if (name) {
	                if (prefix) {
	                    if (isNormalized) {
	                        normalizedName = name;
	                    } else if (pluginModule && pluginModule.normalize) {
	                        //Plugin is loaded, use its normalize method.
	                        normalizedName = pluginModule.normalize(name, function (name) {
	                            return normalize(name, parentName, applyMap);
	                        });
	                    } else {
	                        // If nested plugin references, then do not try to
	                        // normalize, as it will not normalize correctly. This
	                        // places a restriction on resourceIds, and the longer
	                        // term solution is not to normalize until plugins are
	                        // loaded and all normalizations to allow for async
	                        // loading of a loader plugin. But for now, fixes the
	                        // common uses. Details in #1131
	                        normalizedName = name.indexOf('!') === -1 ? normalize(name, parentName, applyMap) : name;
	                    }
	                } else {
	                    //A regular module.
	                    normalizedName = normalize(name, parentName, applyMap);

	                    //Normalized name may be a plugin ID due to map config
	                    //application in normalize. The map config values must
	                    //already be normalized, so do not need to redo that part.
	                    nameParts = splitPrefix(normalizedName);
	                    prefix = nameParts[0];
	                    normalizedName = nameParts[1];
	                    isNormalized = true;

	                    url = context.nameToUrl(normalizedName);
	                }
	            }

	            //If the id is a plugin id that cannot be determined if it needs
	            //normalization, stamp it with a unique ID so two matching relative
	            //ids that may conflict can be separate.
	            suffix = prefix && !pluginModule && !isNormalized ? '_unnormalized' + (unnormalizedCounter += 1) : '';

	            return {
	                prefix: prefix,
	                name: normalizedName,
	                parentMap: parentModuleMap,
	                unnormalized: !!suffix,
	                url: url,
	                originalName: originalName,
	                isDefine: isDefine,
	                id: (prefix ? prefix + '!' + normalizedName : normalizedName) + suffix
	            };
	        }

	        function getModule(depMap) {
	            var id = depMap.id,
	                mod = getOwn(registry, id);

	            if (!mod) {
	                mod = registry[id] = new context.Module(depMap);
	            }

	            return mod;
	        }

	        function on(depMap, name, fn) {
	            var id = depMap.id,
	                mod = getOwn(registry, id);

	            if (hasProp(_defined, id) && (!mod || mod.defineEmitComplete)) {
	                if (name === 'defined') {
	                    fn(_defined[id]);
	                }
	            } else {
	                mod = getModule(depMap);
	                if (mod.error && name === 'error') {
	                    fn(mod.error);
	                } else {
	                    mod.on(name, fn);
	                }
	            }
	        }

	        function onError(err, errback) {
	            var ids = err.requireModules,
	                notified = false;

	            if (errback) {
	                errback(err);
	            } else {
	                each(ids, function (id) {
	                    var mod = getOwn(registry, id);
	                    if (mod) {
	                        //Set error on module, so it skips timeout checks.
	                        mod.error = err;
	                        if (mod.events.error) {
	                            notified = true;
	                            mod.emit('error', err);
	                        }
	                    }
	                });

	                if (!notified) {
	                    req.onError(err);
	                }
	            }
	        }

	        /**
	         * Internal method to transfer globalQueue items to this context's
	         * defQueue.
	         */
	        function takeGlobalQueue() {
	            //Push all the globalDefQueue items into the context's defQueue
	            if (globalDefQueue.length) {
	                each(globalDefQueue, function (queueItem) {
	                    var id = queueItem[0];
	                    if (typeof id === 'string') {
	                        context.defQueueMap[id] = true;
	                    }
	                    defQueue.push(queueItem);
	                });
	                globalDefQueue = [];
	            }
	        }

	        handlers = {
	            'require': function require(mod) {
	                if (mod.require) {
	                    return mod.require;
	                } else {
	                    return mod.require = context.makeRequire(mod.map);
	                }
	            },
	            'exports': function exports(mod) {
	                mod.usingExports = true;
	                if (mod.map.isDefine) {
	                    if (mod.exports) {
	                        return _defined[mod.map.id] = mod.exports;
	                    } else {
	                        return mod.exports = _defined[mod.map.id] = {};
	                    }
	                }
	            },
	            'module': function module(mod) {
	                if (mod.module) {
	                    return mod.module;
	                } else {
	                    return mod.module = {
	                        id: mod.map.id,
	                        uri: mod.map.url,
	                        config: function config() {
	                            return getOwn(_config.config, mod.map.id) || {};
	                        },
	                        exports: mod.exports || (mod.exports = {})
	                    };
	                }
	            }
	        };

	        function cleanRegistry(id) {
	            //Clean up machinery used for waiting modules.
	            delete registry[id];
	            delete enabledRegistry[id];
	        }

	        function breakCycle(mod, traced, processed) {
	            var id = mod.map.id;

	            if (mod.error) {
	                mod.emit('error', mod.error);
	            } else {
	                traced[id] = true;
	                each(mod.depMaps, function (depMap, i) {
	                    var depId = depMap.id,
	                        dep = getOwn(registry, depId);

	                    //Only force things that have not completed
	                    //being defined, so still in the registry,
	                    //and only if it has not been matched up
	                    //in the module already.
	                    if (dep && !mod.depMatched[i] && !processed[depId]) {
	                        if (getOwn(traced, depId)) {
	                            mod.defineDep(i, _defined[depId]);
	                            mod.check(); //pass false?
	                        } else {
	                            breakCycle(dep, traced, processed);
	                        }
	                    }
	                });
	                processed[id] = true;
	            }
	        }

	        function checkLoaded() {
	            var err,
	                usingPathFallback,
	                waitInterval = _config.waitSeconds * 1000,

	            //It is possible to disable the wait interval by using waitSeconds of 0.
	            expired = waitInterval && context.startTime + waitInterval < new Date().getTime(),
	                noLoads = [],
	                reqCalls = [],
	                stillLoading = false,
	                needCycleCheck = true;

	            //Do not bother if this call was a result of a cycle break.
	            if (inCheckLoaded) {
	                return;
	            }

	            inCheckLoaded = true;

	            //Figure out the state of all the modules.
	            eachProp(enabledRegistry, function (mod) {
	                var map = mod.map,
	                    modId = map.id;

	                //Skip things that are not enabled or in error state.
	                if (!mod.enabled) {
	                    return;
	                }

	                if (!map.isDefine) {
	                    reqCalls.push(mod);
	                }

	                if (!mod.error) {
	                    //If the module should be executed, and it has not
	                    //been inited and time is up, remember it.
	                    if (!mod.inited && expired) {
	                        if (hasPathFallback(modId)) {
	                            usingPathFallback = true;
	                            stillLoading = true;
	                        } else {
	                            noLoads.push(modId);
	                            removeScript(modId);
	                        }
	                    } else if (!mod.inited && mod.fetched && map.isDefine) {
	                        stillLoading = true;
	                        if (!map.prefix) {
	                            //No reason to keep looking for unfinished
	                            //loading. If the only stillLoading is a
	                            //plugin resource though, keep going,
	                            //because it may be that a plugin resource
	                            //is waiting on a non-plugin cycle.
	                            return needCycleCheck = false;
	                        }
	                    }
	                }
	            });

	            if (expired && noLoads.length) {
	                //If wait time expired, throw error of unloaded modules.
	                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
	                err.contextName = context.contextName;
	                return onError(err);
	            }

	            //Not expired, check for a cycle.
	            if (needCycleCheck) {
	                each(reqCalls, function (mod) {
	                    breakCycle(mod, {}, {});
	                });
	            }

	            //If still waiting on loads, and the waiting load is something
	            //other than a plugin resource, or there are still outstanding
	            //scripts, then just try back later.
	            if ((!expired || usingPathFallback) && stillLoading) {
	                //Something is still waiting to load. Wait for it, but only
	                //if a timeout is not already in effect.
	                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
	                    checkLoadedTimeoutId = setTimeout(function () {
	                        checkLoadedTimeoutId = 0;
	                        checkLoaded();
	                    }, 50);
	                }
	            }

	            inCheckLoaded = false;
	        }

	        Module = function Module(map) {
	            this.events = getOwn(undefEvents, map.id) || {};
	            this.map = map;
	            this.shim = getOwn(_config.shim, map.id);
	            this.depExports = [];
	            this.depMaps = [];
	            this.depMatched = [];
	            this.pluginMaps = {};
	            this.depCount = 0;

	            /* this.exports this.factory
	               this.depMaps = [],
	               this.enabled, this.fetched
	            */
	        };

	        Module.prototype = {
	            init: function init(depMaps, factory, errback, options) {
	                options = options || {};

	                //Do not do more inits if already done. Can happen if there
	                //are multiple define calls for the same module. That is not
	                //a normal, common case, but it is also not unexpected.
	                if (this.inited) {
	                    return;
	                }

	                this.factory = factory;

	                if (errback) {
	                    //Register for errors on this module.
	                    this.on('error', errback);
	                } else if (this.events.error) {
	                    //If no errback already, but there are error listeners
	                    //on this module, set up an errback to pass to the deps.
	                    errback = bind(this, function (err) {
	                        this.emit('error', err);
	                    });
	                }

	                //Do a copy of the dependency array, so that
	                //source inputs are not modified. For example
	                //"shim" deps are passed in here directly, and
	                //doing a direct modification of the depMaps array
	                //would affect that config.
	                this.depMaps = depMaps && depMaps.slice(0);

	                this.errback = errback;

	                //Indicate this module has be initialized
	                this.inited = true;

	                this.ignore = options.ignore;

	                //Could have option to init this module in enabled mode,
	                //or could have been previously marked as enabled. However,
	                //the dependencies are not known until init is called. So
	                //if enabled previously, now trigger dependencies as enabled.
	                if (options.enabled || this.enabled) {
	                    //Enable this module and dependencies.
	                    //Will call this.check()
	                    this.enable();
	                } else {
	                    this.check();
	                }
	            },

	            defineDep: function defineDep(i, depExports) {
	                //Because of cycles, defined callback for a given
	                //export can be called more than once.
	                if (!this.depMatched[i]) {
	                    this.depMatched[i] = true;
	                    this.depCount -= 1;
	                    this.depExports[i] = depExports;
	                }
	            },

	            fetch: function fetch() {
	                if (this.fetched) {
	                    return;
	                }
	                this.fetched = true;

	                context.startTime = new Date().getTime();

	                var map = this.map;

	                //If the manager is for a plugin managed resource,
	                //ask the plugin to load it now.
	                if (this.shim) {
	                    context.makeRequire(this.map, {
	                        enableBuildCallback: true
	                    })(this.shim.deps || [], bind(this, function () {
	                        return map.prefix ? this.callPlugin() : this.load();
	                    }));
	                } else {
	                    //Regular dependency.
	                    return map.prefix ? this.callPlugin() : this.load();
	                }
	            },

	            load: function load() {
	                var url = this.map.url;

	                //Regular dependency.
	                if (!urlFetched[url]) {
	                    urlFetched[url] = true;
	                    context.load(this.map.id, url);
	                }
	            },

	            /**
	             * Checks if the module is ready to define itself, and if so,
	             * define it.
	             */
	            check: function check() {
	                if (!this.enabled || this.enabling) {
	                    return;
	                }

	                var err,
	                    cjsModule,
	                    id = this.map.id,
	                    depExports = this.depExports,
	                    exports = this.exports,
	                    factory = this.factory;

	                if (!this.inited) {
	                    // Only fetch if not already in the defQueue.
	                    if (!hasProp(context.defQueueMap, id)) {
	                        this.fetch();
	                    }
	                } else if (this.error) {
	                    this.emit('error', this.error);
	                } else if (!this.defining) {
	                    //The factory could trigger another require call
	                    //that would result in checking this module to
	                    //define itself again. If already in the process
	                    //of doing that, skip this work.
	                    this.defining = true;

	                    if (this.depCount < 1 && !this.defined) {
	                        if (isFunction(factory)) {
	                            //If there is an error listener, favor passing
	                            //to that instead of throwing an error. However,
	                            //only do it for define()'d  modules. require
	                            //errbacks should not be called for failures in
	                            //their callbacks (#699). However if a global
	                            //onError is set, use that.
	                            if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) {
	                                try {
	                                    exports = context.execCb(id, factory, depExports, exports);
	                                } catch (e) {
	                                    err = e;
	                                }
	                            } else {
	                                exports = context.execCb(id, factory, depExports, exports);
	                            }

	                            // Favor return value over exports. If node/cjs in play,
	                            // then will not have a return value anyway. Favor
	                            // module.exports assignment over exports object.
	                            if (this.map.isDefine && exports === undefined) {
	                                cjsModule = this.module;
	                                if (cjsModule) {
	                                    exports = cjsModule.exports;
	                                } else if (this.usingExports) {
	                                    //exports already set the defined value.
	                                    exports = this.exports;
	                                }
	                            }

	                            if (err) {
	                                err.requireMap = this.map;
	                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
	                                err.requireType = this.map.isDefine ? 'define' : 'require';
	                                return onError(this.error = err);
	                            }
	                        } else {
	                            //Just a literal value
	                            exports = factory;
	                        }

	                        this.exports = exports;

	                        if (this.map.isDefine && !this.ignore) {
	                            _defined[id] = exports;

	                            if (req.onResourceLoad) {
	                                var resLoadMaps = [];
	                                each(this.depMaps, function (depMap) {
	                                    resLoadMaps.push(depMap.normalizedMap || depMap);
	                                });
	                                req.onResourceLoad(context, this.map, resLoadMaps);
	                            }
	                        }

	                        //Clean up
	                        cleanRegistry(id);

	                        this.defined = true;
	                    }

	                    //Finished the define stage. Allow calling check again
	                    //to allow define notifications below in the case of a
	                    //cycle.
	                    this.defining = false;

	                    if (this.defined && !this.defineEmitted) {
	                        this.defineEmitted = true;
	                        this.emit('defined', this.exports);
	                        this.defineEmitComplete = true;
	                    }
	                }
	            },

	            callPlugin: function callPlugin() {
	                var map = this.map,
	                    id = map.id,

	                //Map already normalized the prefix.
	                pluginMap = makeModuleMap(map.prefix);

	                //Mark this as a dependency for this plugin, so it
	                //can be traced for cycles.
	                this.depMaps.push(pluginMap);

	                on(pluginMap, 'defined', bind(this, function (plugin) {
	                    var load,
	                        normalizedMap,
	                        normalizedMod,
	                        bundleId = getOwn(bundlesMap, this.map.id),
	                        name = this.map.name,
	                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
	                        localRequire = context.makeRequire(map.parentMap, {
	                        enableBuildCallback: true
	                    });

	                    //If current map is not normalized, wait for that
	                    //normalized name to load instead of continuing.
	                    if (this.map.unnormalized) {
	                        //Normalize the ID if the plugin allows it.
	                        if (plugin.normalize) {
	                            name = plugin.normalize(name, function (name) {
	                                return normalize(name, parentName, true);
	                            }) || '';
	                        }

	                        //prefix and name should already be normalized, no need
	                        //for applying map config again either.
	                        normalizedMap = makeModuleMap(map.prefix + '!' + name, this.map.parentMap, true);
	                        on(normalizedMap, 'defined', bind(this, function (value) {
	                            this.map.normalizedMap = normalizedMap;
	                            this.init([], function () {
	                                return value;
	                            }, null, {
	                                enabled: true,
	                                ignore: true
	                            });
	                        }));

	                        normalizedMod = getOwn(registry, normalizedMap.id);
	                        if (normalizedMod) {
	                            //Mark this as a dependency for this plugin, so it
	                            //can be traced for cycles.
	                            this.depMaps.push(normalizedMap);

	                            if (this.events.error) {
	                                normalizedMod.on('error', bind(this, function (err) {
	                                    this.emit('error', err);
	                                }));
	                            }
	                            normalizedMod.enable();
	                        }

	                        return;
	                    }

	                    //If a paths config, then just load that file instead to
	                    //resolve the plugin, as it is built into that paths layer.
	                    if (bundleId) {
	                        this.map.url = context.nameToUrl(bundleId);
	                        this.load();
	                        return;
	                    }

	                    load = bind(this, function (value) {
	                        this.init([], function () {
	                            return value;
	                        }, null, {
	                            enabled: true
	                        });
	                    });

	                    load.error = bind(this, function (err) {
	                        this.inited = true;
	                        this.error = err;
	                        err.requireModules = [id];

	                        //Remove temp unnormalized modules for this module,
	                        //since they will never be resolved otherwise now.
	                        eachProp(registry, function (mod) {
	                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
	                                cleanRegistry(mod.map.id);
	                            }
	                        });

	                        onError(err);
	                    });

	                    //Allow plugins to load other code without having to know the
	                    //context or how to 'complete' the load.
	                    load.fromText = bind(this, function (text, textAlt) {
	                        /*jslint evil: true */
	                        var moduleName = map.name,
	                            moduleMap = makeModuleMap(moduleName),
	                            hasInteractive = useInteractive;

	                        //As of 2.1.0, support just passing the text, to reinforce
	                        //fromText only being called once per resource. Still
	                        //support old style of passing moduleName but discard
	                        //that moduleName in favor of the internal ref.
	                        if (textAlt) {
	                            text = textAlt;
	                        }

	                        //Turn off interactive script matching for IE for any define
	                        //calls in the text, then turn it back on at the end.
	                        if (hasInteractive) {
	                            useInteractive = false;
	                        }

	                        //Prime the system by creating a module instance for
	                        //it.
	                        getModule(moduleMap);

	                        //Transfer any config to this other module.
	                        if (hasProp(_config.config, id)) {
	                            _config.config[moduleName] = _config.config[id];
	                        }

	                        try {
	                            req.exec(text);
	                        } catch (e) {
	                            return onError(makeError('fromtexteval', 'fromText eval for ' + id + ' failed: ' + e, e, [id]));
	                        }

	                        if (hasInteractive) {
	                            useInteractive = true;
	                        }

	                        //Mark this as a dependency for the plugin
	                        //resource
	                        this.depMaps.push(moduleMap);

	                        //Support anonymous modules.
	                        context.completeLoad(moduleName);

	                        //Bind the value of that module to the value for this
	                        //resource ID.
	                        localRequire([moduleName], load);
	                    });

	                    //Use parentName here since the plugin's name is not reliable,
	                    //could be some weird string with no path that actually wants to
	                    //reference the parentName's path.
	                    plugin.load(map.name, localRequire, load, _config);
	                }));

	                context.enable(pluginMap, this);
	                this.pluginMaps[pluginMap.id] = pluginMap;
	            },

	            enable: function enable() {
	                enabledRegistry[this.map.id] = this;
	                this.enabled = true;

	                //Set flag mentioning that the module is enabling,
	                //so that immediate calls to the defined callbacks
	                //for dependencies do not trigger inadvertent load
	                //with the depCount still being zero.
	                this.enabling = true;

	                //Enable each dependency
	                each(this.depMaps, bind(this, function (depMap, i) {
	                    var id, mod, handler;

	                    if (typeof depMap === 'string') {
	                        //Dependency needs to be converted to a depMap
	                        //and wired up to this module.
	                        depMap = makeModuleMap(depMap, this.map.isDefine ? this.map : this.map.parentMap, false, !this.skipMap);
	                        this.depMaps[i] = depMap;

	                        handler = getOwn(handlers, depMap.id);

	                        if (handler) {
	                            this.depExports[i] = handler(this);
	                            return;
	                        }

	                        this.depCount += 1;

	                        on(depMap, 'defined', bind(this, function (depExports) {
	                            if (this.undefed) {
	                                return;
	                            }
	                            this.defineDep(i, depExports);
	                            this.check();
	                        }));

	                        if (this.errback) {
	                            on(depMap, 'error', bind(this, this.errback));
	                        } else if (this.events.error) {
	                            // No direct errback on this module, but something
	                            // else is listening for errors, so be sure to
	                            // propagate the error correctly.
	                            on(depMap, 'error', bind(this, function (err) {
	                                this.emit('error', err);
	                            }));
	                        }
	                    }

	                    id = depMap.id;
	                    mod = registry[id];

	                    //Skip special modules like 'require', 'exports', 'module'
	                    //Also, don't call enable if it is already enabled,
	                    //important in circular dependency cases.
	                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
	                        context.enable(depMap, this);
	                    }
	                }));

	                //Enable each plugin that is used in
	                //a dependency
	                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
	                    var mod = getOwn(registry, pluginMap.id);
	                    if (mod && !mod.enabled) {
	                        context.enable(pluginMap, this);
	                    }
	                }));

	                this.enabling = false;

	                this.check();
	            },

	            on: function on(name, cb) {
	                var cbs = this.events[name];
	                if (!cbs) {
	                    cbs = this.events[name] = [];
	                }
	                cbs.push(cb);
	            },

	            emit: function emit(name, evt) {
	                each(this.events[name], function (cb) {
	                    cb(evt);
	                });
	                if (name === 'error') {
	                    //Now that the error handler was triggered, remove
	                    //the listeners, since this broken Module instance
	                    //can stay around for a while in the registry.
	                    delete this.events[name];
	                }
	            }
	        };

	        function callGetModule(args) {
	            //Skip modules already defined.
	            if (!hasProp(_defined, args[0])) {
	                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
	            }
	        }

	        function removeListener(node, func, name, ieName) {
	            //Favor detachEvent because of IE9
	            //issue, see attachEvent/addEventListener comment elsewhere
	            //in this file.
	            if (node.detachEvent && !isOpera) {
	                //Probably IE. If not it will throw an error, which will be
	                //useful to know.
	                if (ieName) {
	                    node.detachEvent(ieName, func);
	                }
	            } else {
	                node.removeEventListener(name, func, false);
	            }
	        }

	        /**
	         * Given an event from a script node, get the requirejs info from it,
	         * and then removes the event listeners on the node.
	         * @param {Event} evt
	         * @returns {Object}
	         */
	        function getScriptData(evt) {
	            //Using currentTarget instead of target for Firefox 2.0's sake. Not
	            //all old browsers will be supported, but this one was easy enough
	            //to support and still makes sense.
	            var node = evt.currentTarget || evt.srcElement;

	            //Remove the listeners once here.
	            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
	            removeListener(node, context.onScriptError, 'error');

	            return {
	                node: node,
	                id: node && node.getAttribute('data-requiremodule')
	            };
	        }

	        function intakeDefines() {
	            var args;

	            //Any defined modules in the global queue, intake them now.
	            takeGlobalQueue();

	            //Make sure any remaining defQueue items get properly processed.
	            while (defQueue.length) {
	                args = defQueue.shift();
	                if (args[0] === null) {
	                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' + args[args.length - 1]));
	                } else {
	                    //args are id, deps, factory. Should be normalized by the
	                    //define() function.
	                    callGetModule(args);
	                }
	            }
	            context.defQueueMap = {};
	        }

	        context = {
	            config: _config,
	            contextName: contextName,
	            registry: registry,
	            defined: _defined,
	            urlFetched: urlFetched,
	            defQueue: defQueue,
	            defQueueMap: {},
	            Module: Module,
	            makeModuleMap: makeModuleMap,
	            nextTick: req.nextTick,
	            onError: onError,

	            /**
	             * Set a configuration for the context.
	             * @param {Object} cfg config object to integrate.
	             */
	            configure: function configure(cfg) {
	                //Make sure the baseUrl ends in a slash.
	                if (cfg.baseUrl) {
	                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
	                        cfg.baseUrl += '/';
	                    }
	                }

	                // Convert old style urlArgs string to a function.
	                if (typeof cfg.urlArgs === 'string') {
	                    var urlArgs = cfg.urlArgs;
	                    cfg.urlArgs = function (id, url) {
	                        return (url.indexOf('?') === -1 ? '?' : '&') + urlArgs;
	                    };
	                }

	                //Save off the paths since they require special processing,
	                //they are additive.
	                var shim = _config.shim,
	                    objs = {
	                    paths: true,
	                    bundles: true,
	                    config: true,
	                    map: true
	                };

	                eachProp(cfg, function (value, prop) {
	                    if (objs[prop]) {
	                        if (!_config[prop]) {
	                            _config[prop] = {};
	                        }
	                        mixin(_config[prop], value, true, true);
	                    } else {
	                        _config[prop] = value;
	                    }
	                });

	                //Reverse map the bundles
	                if (cfg.bundles) {
	                    eachProp(cfg.bundles, function (value, prop) {
	                        each(value, function (v) {
	                            if (v !== prop) {
	                                bundlesMap[v] = prop;
	                            }
	                        });
	                    });
	                }

	                //Merge shim
	                if (cfg.shim) {
	                    eachProp(cfg.shim, function (value, id) {
	                        //Normalize the structure
	                        if (isArray(value)) {
	                            value = {
	                                deps: value
	                            };
	                        }
	                        if ((value.exports || value.init) && !value.exportsFn) {
	                            value.exportsFn = context.makeShimExports(value);
	                        }
	                        shim[id] = value;
	                    });
	                    _config.shim = shim;
	                }

	                //Adjust packages if necessary.
	                if (cfg.packages) {
	                    each(cfg.packages, function (pkgObj) {
	                        var location, name;

	                        pkgObj = typeof pkgObj === 'string' ? { name: pkgObj } : pkgObj;

	                        name = pkgObj.name;
	                        location = pkgObj.location;
	                        if (location) {
	                            _config.paths[name] = pkgObj.location;
	                        }

	                        //Save pointer to main module ID for pkg name.
	                        //Remove leading dot in main, so main paths are normalized,
	                        //and remove any trailing .js, since different package
	                        //envs have different conventions: some use a module name,
	                        //some use a file name.
	                        _config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main').replace(currDirRegExp, '').replace(jsSuffixRegExp, '');
	                    });
	                }

	                //If there are any "waiting to execute" modules in the registry,
	                //update the maps for them, since their info, like URLs to load,
	                //may have changed.
	                eachProp(registry, function (mod, id) {
	                    //If module already has init called, since it is too
	                    //late to modify them, and ignore unnormalized ones
	                    //since they are transient.
	                    if (!mod.inited && !mod.map.unnormalized) {
	                        mod.map = makeModuleMap(id, null, true);
	                    }
	                });

	                //If a deps array or a config callback is specified, then call
	                //require with those args. This is useful when require is defined as a
	                //config object before require.js is loaded.
	                if (cfg.deps || cfg.callback) {
	                    context.require(cfg.deps || [], cfg.callback);
	                }
	            },

	            makeShimExports: function makeShimExports(value) {
	                function fn() {
	                    var ret;
	                    if (value.init) {
	                        ret = value.init.apply(global, arguments);
	                    }
	                    return ret || value.exports && getGlobal(value.exports);
	                }
	                return fn;
	            },

	            makeRequire: function makeRequire(relMap, options) {
	                options = options || {};

	                function localRequire(deps, callback, errback) {
	                    var id, map, requireMod;

	                    if (options.enableBuildCallback && callback && isFunction(callback)) {
	                        callback.__requireJsBuild = true;
	                    }

	                    if (typeof deps === 'string') {
	                        if (isFunction(callback)) {
	                            //Invalid call
	                            return onError(makeError('requireargs', 'Invalid require call'), errback);
	                        }

	                        //If require|exports|module are requested, get the
	                        //value for them from the special handlers. Caveat:
	                        //this only works while module is being defined.
	                        if (relMap && hasProp(handlers, deps)) {
	                            return handlers[deps](registry[relMap.id]);
	                        }

	                        //Synchronous access to one module. If require.get is
	                        //available (as in the Node adapter), prefer that.
	                        if (req.get) {
	                            return req.get(context, deps, relMap, localRequire);
	                        }

	                        //Normalize module name, if it contains . or ..
	                        map = makeModuleMap(deps, relMap, false, true);
	                        id = map.id;

	                        if (!hasProp(_defined, id)) {
	                            return onError(makeError('notloaded', 'Module name "' + id + '" has not been loaded yet for context: ' + contextName + (relMap ? '' : '. Use require([])')));
	                        }
	                        return _defined[id];
	                    }

	                    //Grab defines waiting in the global queue.
	                    intakeDefines();

	                    //Mark all the dependencies as needing to be loaded.
	                    context.nextTick(function () {
	                        //Some defines could have been added since the
	                        //require call, collect them.
	                        intakeDefines();

	                        requireMod = getModule(makeModuleMap(null, relMap));

	                        //Store if map config should be applied to this require
	                        //call for dependencies.
	                        requireMod.skipMap = options.skipMap;

	                        requireMod.init(deps, callback, errback, {
	                            enabled: true
	                        });

	                        checkLoaded();
	                    });

	                    return localRequire;
	                }

	                mixin(localRequire, {
	                    isBrowser: isBrowser,

	                    /**
	                     * Converts a module name + .extension into an URL path.
	                     * *Requires* the use of a module name. It does not support using
	                     * plain URLs like nameToUrl.
	                     */
	                    toUrl: function toUrl(moduleNamePlusExt) {
	                        var ext,
	                            index = moduleNamePlusExt.lastIndexOf('.'),
	                            segment = moduleNamePlusExt.split('/')[0],
	                            isRelative = segment === '.' || segment === '..';

	                        //Have a file extension alias, and it is not the
	                        //dots from a relative path.
	                        if (index !== -1 && (!isRelative || index > 1)) {
	                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
	                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
	                        }

	                        return context.nameToUrl(normalize(moduleNamePlusExt, relMap && relMap.id, true), ext, true);
	                    },

	                    defined: function defined(id) {
	                        return hasProp(_defined, makeModuleMap(id, relMap, false, true).id);
	                    },

	                    specified: function specified(id) {
	                        id = makeModuleMap(id, relMap, false, true).id;
	                        return hasProp(_defined, id) || hasProp(registry, id);
	                    }
	                });

	                //Only allow undef on top level require calls
	                if (!relMap) {
	                    localRequire.undef = function (id) {
	                        //Bind any waiting define() calls to this context,
	                        //fix for #408
	                        takeGlobalQueue();

	                        var map = makeModuleMap(id, relMap, true),
	                            mod = getOwn(registry, id);

	                        mod.undefed = true;
	                        removeScript(id);

	                        delete _defined[id];
	                        delete urlFetched[map.url];
	                        delete undefEvents[id];

	                        //Clean queued defines too. Go backwards
	                        //in array so that the splices do not
	                        //mess up the iteration.
	                        eachReverse(defQueue, function (args, i) {
	                            if (args[0] === id) {
	                                defQueue.splice(i, 1);
	                            }
	                        });
	                        delete context.defQueueMap[id];

	                        if (mod) {
	                            //Hold on to listeners in case the
	                            //module will be attempted to be reloaded
	                            //using a different config.
	                            if (mod.events.defined) {
	                                undefEvents[id] = mod.events;
	                            }

	                            cleanRegistry(id);
	                        }
	                    };
	                }

	                return localRequire;
	            },

	            /**
	             * Called to enable a module if it is still in the registry
	             * awaiting enablement. A second arg, parent, the parent module,
	             * is passed in for context, when this method is overridden by
	             * the optimizer. Not shown here to keep code compact.
	             */
	            enable: function enable(depMap) {
	                var mod = getOwn(registry, depMap.id);
	                if (mod) {
	                    getModule(depMap).enable();
	                }
	            },

	            /**
	             * Internal method used by environment adapters to complete a load event.
	             * A load event could be a script load or just a load pass from a synchronous
	             * load call.
	             * @param {String} moduleName the name of the module to potentially complete.
	             */
	            completeLoad: function completeLoad(moduleName) {
	                var found,
	                    args,
	                    mod,
	                    shim = getOwn(_config.shim, moduleName) || {},
	                    shExports = shim.exports;

	                takeGlobalQueue();

	                while (defQueue.length) {
	                    args = defQueue.shift();
	                    if (args[0] === null) {
	                        args[0] = moduleName;
	                        //If already found an anonymous module and bound it
	                        //to this name, then this is some other anon module
	                        //waiting for its completeLoad to fire.
	                        if (found) {
	                            break;
	                        }
	                        found = true;
	                    } else if (args[0] === moduleName) {
	                        //Found matching define call for this script!
	                        found = true;
	                    }

	                    callGetModule(args);
	                }
	                context.defQueueMap = {};

	                //Do this after the cycle of callGetModule in case the result
	                //of those calls/init calls changes the registry.
	                mod = getOwn(registry, moduleName);

	                if (!found && !hasProp(_defined, moduleName) && mod && !mod.inited) {
	                    if (_config.enforceDefine && (!shExports || !getGlobal(shExports))) {
	                        if (hasPathFallback(moduleName)) {
	                            return;
	                        } else {
	                            return onError(makeError('nodefine', 'No define call for ' + moduleName, null, [moduleName]));
	                        }
	                    } else {
	                        //A script that does not call define(), so just simulate
	                        //the call for it.
	                        callGetModule([moduleName, shim.deps || [], shim.exportsFn]);
	                    }
	                }

	                checkLoaded();
	            },

	            /**
	             * Converts a module name to a file path. Supports cases where
	             * moduleName may actually be just an URL.
	             * Note that it **does not** call normalize on the moduleName,
	             * it is assumed to have already been normalized. This is an
	             * internal API, not a public one. Use toUrl for the public API.
	             */
	            nameToUrl: function nameToUrl(moduleName, ext, skipExt) {
	                var paths,
	                    syms,
	                    i,
	                    parentModule,
	                    url,
	                    parentPath,
	                    bundleId,
	                    pkgMain = getOwn(_config.pkgs, moduleName);

	                if (pkgMain) {
	                    moduleName = pkgMain;
	                }

	                bundleId = getOwn(bundlesMap, moduleName);

	                if (bundleId) {
	                    return context.nameToUrl(bundleId, ext, skipExt);
	                }

	                //If a colon is in the URL, it indicates a protocol is used and it is just
	                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
	                //or ends with .js, then assume the user meant to use an url and not a module id.
	                //The slash is important for protocol-less URLs as well as full paths.
	                if (req.jsExtRegExp.test(moduleName)) {
	                    //Just a plain path, not module name lookup, so just return it.
	                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
	                    //an extension, this method probably needs to be reworked.
	                    url = moduleName + (ext || '');
	                } else {
	                    //A module that needs to be converted to a path.
	                    paths = _config.paths;

	                    syms = moduleName.split('/');
	                    //For each module name segment, see if there is a path
	                    //registered for it. Start with most specific name
	                    //and work up from it.
	                    for (i = syms.length; i > 0; i -= 1) {
	                        parentModule = syms.slice(0, i).join('/');

	                        parentPath = getOwn(paths, parentModule);
	                        if (parentPath) {
	                            //If an array, it means there are a few choices,
	                            //Choose the one that is desired
	                            if (isArray(parentPath)) {
	                                parentPath = parentPath[0];
	                            }
	                            syms.splice(0, i, parentPath);
	                            break;
	                        }
	                    }

	                    //Join the path parts together, then figure out if baseUrl is needed.
	                    url = syms.join('/');
	                    url += ext || (/^data\:|^blob\:|\?/.test(url) || skipExt ? '' : '.js');
	                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : _config.baseUrl) + url;
	                }

	                return _config.urlArgs && !/^blob\:/.test(url) ? url + _config.urlArgs(moduleName, url) : url;
	            },

	            //Delegates to req.load. Broken out as a separate function to
	            //allow overriding in the optimizer.
	            load: function load(id, url) {
	                req.load(context, id, url);
	            },

	            /**
	             * Executes a module callback function. Broken out as a separate function
	             * solely to allow the build system to sequence the files in the built
	             * layer in the right sequence.
	             *
	             * @private
	             */
	            execCb: function execCb(name, callback, args, exports) {
	                return callback.apply(exports, args);
	            },

	            /**
	             * callback for script loads, used to check status of loading.
	             *
	             * @param {Event} evt the event from the browser for the script
	             * that was loaded.
	             */
	            onScriptLoad: function onScriptLoad(evt) {
	                //Using currentTarget instead of target for Firefox 2.0's sake. Not
	                //all old browsers will be supported, but this one was easy enough
	                //to support and still makes sense.
	                if (evt.type === 'load' || readyRegExp.test((evt.currentTarget || evt.srcElement).readyState)) {
	                    //Reset interactive script so a script node is not held onto for
	                    //to long.
	                    interactiveScript = null;

	                    //Pull out the name of the module and the context.
	                    var data = getScriptData(evt);
	                    context.completeLoad(data.id);
	                }
	            },

	            /**
	             * Callback for script errors.
	             */
	            onScriptError: function onScriptError(evt) {
	                var data = getScriptData(evt);
	                if (!hasPathFallback(data.id)) {
	                    var parents = [];
	                    eachProp(registry, function (value, key) {
	                        if (key.indexOf('_@r') !== 0) {
	                            each(value.depMaps, function (depMap) {
	                                if (depMap.id === data.id) {
	                                    parents.push(key);
	                                    return true;
	                                }
	                            });
	                        }
	                    });
	                    return onError(makeError('scripterror', 'Script error for "' + data.id + (parents.length ? '", needed by: ' + parents.join(', ') : '"'), evt, [data.id]));
	                }
	            }
	        };

	        context.require = context.makeRequire();
	        return context;
	    }

	    /**
	     * Main entry point.
	     *
	     * If the only argument to require is a string, then the module that
	     * is represented by that string is fetched for the appropriate context.
	     *
	     * If the first argument is an array, then it will be treated as an array
	     * of dependency string names to fetch. An optional function callback can
	     * be specified to execute when all of those dependencies are available.
	     *
	     * Make a local req variable to help Caja compliance (it assumes things
	     * on a require that are not standardized), and to give a short
	     * name for minification/local scope use.
	     */
	    req = requirejs = function requirejs(deps, callback, errback, optional) {

	        //Find the right context, use default
	        var context,
	            config,
	            contextName = defContextName;

	        // Determine if have config object in the call.
	        if (!isArray(deps) && typeof deps !== 'string') {
	            // deps is a config object
	            config = deps;
	            if (isArray(callback)) {
	                // Adjust args if there are dependencies
	                deps = callback;
	                callback = errback;
	                errback = optional;
	            } else {
	                deps = [];
	            }
	        }

	        if (config && config.context) {
	            contextName = config.context;
	        }

	        context = getOwn(contexts, contextName);
	        if (!context) {
	            context = contexts[contextName] = req.s.newContext(contextName);
	        }

	        if (config) {
	            context.configure(config);
	        }

	        return context.require(deps, callback, errback);
	    };

	    /**
	     * Support require.config() to make it easier to cooperate with other
	     * AMD loaders on globally agreed names.
	     */
	    req.config = function (config) {
	        return req(config);
	    };

	    /**
	     * Execute something after the current tick
	     * of the event loop. Override for other envs
	     * that have a better solution than setTimeout.
	     * @param  {Function} fn function to execute later.
	     */
	    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
	        setTimeout(fn, 4);
	    } : function (fn) {
	        fn();
	    };

	    /**
	     * Export require as a global, but only if it does not already exist.
	     */
	    if (!_require) {
	        _require = req;
	    }

	    req.version = version;

	    //Used to filter out dependencies that are already paths.
	    req.jsExtRegExp = /^\/|:|\?|\.js$/;
	    req.isBrowser = isBrowser;
	    s = req.s = {
	        contexts: contexts,
	        newContext: newContext
	    };

	    //Create default context.
	    req({});

	    //Exports some context-sensitive methods on global require.
	    each(['toUrl', 'undef', 'defined', 'specified'], function (prop) {
	        //Reference from contexts instead of early binding to default context,
	        //so that during builds, the latest instance of the default context
	        //with its config gets used.
	        req[prop] = function () {
	            var ctx = contexts[defContextName];
	            return ctx.require[prop].apply(ctx, arguments);
	        };
	    });

	    if (isBrowser) {
	        head = s.head = document.getElementsByTagName('head')[0];
	        //If BASE tag is in play, using appendChild is a problem for IE6.
	        //When that browser dies, this can be removed. Details in this jQuery bug:
	        //http://dev.jquery.com/ticket/2709
	        baseElement = document.getElementsByTagName('base')[0];
	        if (baseElement) {
	            head = s.head = baseElement.parentNode;
	        }
	    }

	    /**
	     * Any errors that require explicitly generates will be passed to this
	     * function. Intercept/override it if you want custom error handling.
	     * @param {Error} err the error object.
	     */
	    req.onError = defaultOnError;

	    /**
	     * Creates the node for the load command. Only used in browser envs.
	     */
	    req.createNode = function (config, moduleName, url) {
	        var node = config.xhtml ? document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') : document.createElement('script');
	        node.type = config.scriptType || 'text/javascript';
	        node.charset = 'utf-8';
	        node.async = true;
	        return node;
	    };

	    /**
	     * Does the request to load a module for the browser case.
	     * Make this a separate function to allow other environments
	     * to override it.
	     *
	     * @param {Object} context the require context to find state.
	     * @param {String} moduleName the name of the module.
	     * @param {Object} url the URL to the module.
	     */
	    req.load = function (context, moduleName, url) {
	        var config = context && context.config || {},
	            node;
	        if (isBrowser) {
	            //In the browser so use a script tag
	            node = req.createNode(config, moduleName, url);

	            node.setAttribute('data-requirecontext', context.contextName);
	            node.setAttribute('data-requiremodule', moduleName);

	            //Set up load listener. Test attachEvent first because IE9 has
	            //a subtle issue in its addEventListener and script onload firings
	            //that do not match the behavior of all other browsers with
	            //addEventListener support, which fire the onload event for a
	            //script right after the script execution. See:
	            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
	            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
	            //script execution mode.
	            if (node.attachEvent &&
	            //Check if node.attachEvent is artificially added by custom script or
	            //natively supported by browser
	            //read https://github.com/requirejs/requirejs/issues/187
	            //if we can NOT find [native code] then it must NOT natively supported.
	            //in IE8, node.attachEvent does not have toString()
	            //Note the test for "[native code" with no closing brace, see:
	            //https://github.com/requirejs/requirejs/issues/273
	            !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) && !isOpera) {
	                //Probably IE. IE (at least 6-8) do not fire
	                //script onload right after executing the script, so
	                //we cannot tie the anonymous define call to a name.
	                //However, IE reports the script as being in 'interactive'
	                //readyState at the time of the define call.
	                useInteractive = true;

	                node.attachEvent('onreadystatechange', context.onScriptLoad);
	                //It would be great to add an error handler here to catch
	                //404s in IE9+. However, onreadystatechange will fire before
	                //the error handler, so that does not help. If addEventListener
	                //is used, then IE will fire error before load, but we cannot
	                //use that pathway given the connect.microsoft.com issue
	                //mentioned above about not doing the 'script execute,
	                //then fire the script load event listener before execute
	                //next script' that other browsers do.
	                //Best hope: IE10 fixes the issues,
	                //and then destroys all installs of IE 6-9.
	                //node.attachEvent('onerror', context.onScriptError);
	            } else {
	                node.addEventListener('load', context.onScriptLoad, false);
	                node.addEventListener('error', context.onScriptError, false);
	            }
	            node.src = url;

	            //Calling onNodeCreated after all properties on the node have been
	            //set, but before it is placed in the DOM.
	            if (config.onNodeCreated) {
	                config.onNodeCreated(node, config, moduleName, url);
	            }

	            //For some cache cases in IE 6-8, the script executes before the end
	            //of the appendChild execution, so to tie an anonymous define
	            //call to the module name (which is stored on the node), hold on
	            //to a reference to this node, but clear after the DOM insertion.
	            currentlyAddingScript = node;
	            if (baseElement) {
	                head.insertBefore(node, baseElement);
	            } else {
	                head.appendChild(node);
	            }
	            currentlyAddingScript = null;

	            return node;
	        } else if (isWebWorker) {
	            try {
	                //In a web worker, use importScripts. This is not a very
	                //efficient use of importScripts, importScripts will block until
	                //its script is downloaded and evaluated. However, if web workers
	                //are in play, the expectation is that a build has been done so
	                //that only one script needs to be loaded anyway. This may need
	                //to be reevaluated if other use cases become common.

	                // Post a task to the event loop to work around a bug in WebKit
	                // where the worker gets garbage-collected after calling
	                // importScripts(): https://webkit.org/b/153317
	                setTimeout(function () {}, 0);
	                importScripts(url);

	                //Account for anonymous modules
	                context.completeLoad(moduleName);
	            } catch (e) {
	                context.onError(makeError('importscripts', 'importScripts failed for ' + moduleName + ' at ' + url, e, [moduleName]));
	            }
	        }
	    };

	    function getInteractiveScript() {
	        if (interactiveScript && interactiveScript.readyState === 'interactive') {
	            return interactiveScript;
	        }

	        eachReverse(scripts(), function (script) {
	            if (script.readyState === 'interactive') {
	                return interactiveScript = script;
	            }
	        });
	        return interactiveScript;
	    }

	    //Look for a data-main script attribute, which could also adjust the baseUrl.
	    if (isBrowser && !cfg.skipDataMain) {
	        //Figure out baseUrl. Get it from the script tag with require.js in it.
	        eachReverse(scripts(), function (script) {
	            //Set the 'head' where we can append children by
	            //using the script's parent.
	            if (!head) {
	                head = script.parentNode;
	            }

	            //Look for a data-main attribute to set main script for the page
	            //to load. If it is there, the path to data main becomes the
	            //baseUrl, if it is not already set.
	            dataMain = script.getAttribute('data-main');
	            if (dataMain) {
	                //Preserve dataMain in case it is a path (i.e. contains '?')
	                mainScript = dataMain;

	                //Set final baseUrl if there is not already an explicit one,
	                //but only do so if the data-main value is not a loader plugin
	                //module ID.
	                if (!cfg.baseUrl && mainScript.indexOf('!') === -1) {
	                    //Pull off the directory of data-main for use as the
	                    //baseUrl.
	                    src = mainScript.split('/');
	                    mainScript = src.pop();
	                    subPath = src.length ? src.join('/') + '/' : './';

	                    cfg.baseUrl = subPath;
	                }

	                //Strip off any trailing .js since mainScript is now
	                //like a module name.
	                mainScript = mainScript.replace(jsSuffixRegExp, '');

	                //If mainScript is still a path, fall back to dataMain
	                if (req.jsExtRegExp.test(mainScript)) {
	                    mainScript = dataMain;
	                }

	                //Put the data-main script in the files to load.
	                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];

	                return true;
	            }
	        });
	    }

	    /**
	     * The function that handles definitions of modules. Differs from
	     * require() in that a string for the module should be the first argument,
	     * and the function to execute after dependencies are loaded should
	     * return a value to define the module corresponding to the first argument's
	     * name.
	     */
	    define = function define(name, deps, callback) {
	        var node, context;

	        //Allow for anonymous modules
	        if (typeof name !== 'string') {
	            //Adjust args appropriately
	            callback = deps;
	            deps = name;
	            name = null;
	        }

	        //This module may not have dependencies
	        if (!isArray(deps)) {
	            callback = deps;
	            deps = null;
	        }

	        //If no name, and callback is a function, then figure out if it a
	        //CommonJS thing with dependencies.
	        if (!deps && isFunction(callback)) {
	            deps = [];
	            //Remove comments from the callback string,
	            //look for require calls, and pull them into the dependencies,
	            //but only if there are function args.
	            if (callback.length) {
	                callback.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function (match, dep) {
	                    deps.push(dep);
	                });

	                //May be a CommonJS thing even without require calls, but still
	                //could use exports, and module. Avoid doing exports and module
	                //work though if it just needs require.
	                //REQUIRES the function to expect the CommonJS variables in the
	                //order listed below.
	                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
	            }
	        }

	        //If in IE 6-8 and hit an anonymous define() call, do the interactive
	        //work.
	        if (useInteractive) {
	            node = currentlyAddingScript || getInteractiveScript();
	            if (node) {
	                if (!name) {
	                    name = node.getAttribute('data-requiremodule');
	                }
	                context = contexts[node.getAttribute('data-requirecontext')];
	            }
	        }

	        //Always save off evaluating the def call until the script onload handler.
	        //This allows multiple modules to be in a file without prematurely
	        //tracing dependencies, and allows for anonymous module support,
	        //where the module name is not known until the script onload event
	        //occurs. If no context, use the global queue, and get it processed
	        //in the onscript load callback.
	        if (context) {
	            context.defQueue.push([name, deps, callback]);
	            context.defQueueMap[name] = true;
	        } else {
	            globalDefQueue.push([name, deps, callback]);
	        }
	    };

	    define.amd = {
	        jQuery: true
	    };

	    /**
	     * Executes the text. Normally just uses eval, but can be modified
	     * to use a better, environment-specific call. Only used for transpiling
	     * loader plugins, not for plain JS modules.
	     * @param {String} text the text to execute/evaluate.
	     */
	    req.exec = function (text) {
	        /*jslint evil: true */
	        return eval(text);
	    };

	    //Set up with config info.
	    req(cfg);
	})(undefined, typeof setTimeout === 'undefined' ? undefined : setTimeout);

	// 把 define 也一起暴露出去
	requirejs.define = define;

	// define 函数需放在 window 上给JSONP回调函数使用
	window['define'] = window['define'] || define;

	exports.default = requirejs;

/***/ })
/******/ ]);