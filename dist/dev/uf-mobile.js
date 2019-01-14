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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file UF 核心代码包
	 * Antd 单独打包，代码里会对 Antd 全部组件进行二次封装
	 * @author liuzechun@baidu.com
	 */

	// 样式入口
	__webpack_require__(66);

	// UF 组件库构建入口
	window['UF'] = __webpack_require__(70).default;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @file index.js 项目入口
	 * @author liuzechun
	 * Created Date: 2018-01-30 01:58:03
	 */

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _require = __webpack_require__(71),
	    version = _require.version;

	module.exports = _extends({
	  VERSION: version
	}, __webpack_require__(72));

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	module.exports = {"name":"uf","versionList":["0.2","0.2.1","0.2.2","0.2.3","0.2.4","0.2.5","0.3.0"],"version":"0.4.0","fixedVersion":"0.4.0.0","stableVersion":"0.3.0","description":"new uf","author":"liuzechun","license":"ISC","repository":{"type":"git","url":"http://icode.baidu.com/files/view/baidu/atm/uf/@tree/master"},"main":"index.js","dependencies":{"antd":"^2.13.7","antd-mobile":"^2.2.8","immutable":"^3.8.1","moment":"^2.17.1","react":"^15.6.2","react-dom":"^15.6.2","react-router":"^3.0.0"},"devDependencies":{"autoprefixer":"^6.5.4","axios":"^0.18.0","babel-core":"^6.18.2","babel-loader":"^6.2.8","babel-plugin-import":"^1.4.0","babel-preset-es2015":"^6.18.0","babel-preset-react":"^6.16.0","babel-preset-stage-0":"^6.24.1","clipboard":"^2.0.4","css-loader":"^0.26.1","extract-text-webpack-plugin":"^1.0.1","history":"^4.4.1","html2canvas":"^0.5.0-beta4","json-loader":"^0.5.4","less":"^2.7.1","less-loader":"^2.2.3","marked":"^0.3.6","postcss-loader":"^1.2.1","sass-loader":"^4.0.2","style-loader":"^0.13.1","text-loader":"0.0.1","underscore":"^1.9.1","webpack":"^1.14.0"},"scripts":{"plugins":"webpack --config plugins/webpack.plugins.js --watch","build-watch":"webpack --config dist/config/webpack.build.js --watch","antd-watch":"webpack --config dist/config/webpack.antd.js --watch","build":"webpack --config dist/config/webpack.build.js","antd":"webpack --config dist/config/webpack.antd.js","dll":"webpack --config dist/config/webpack.dll.js","react":"webpack --config dist/config/webpack.react.js","all":"npm run dll & npm run antd & npm run build && npm run all-mobile","build-mobile-watch":"webpack --config mobile/build/webpack.build.js --watch","build-mobile":"webpack --config mobile/build/webpack.build.js","antd-mobile":"webpack --config mobile/build/webpack.antd.js","dll-mobile":"webpack --config mobile/build/webpack.dll.js","all-mobile":"npm run dll-mobile & npm run antd-mobile & npm run build-mobile","start":"webpack --watch"}}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.WhiteList = exports.Loader = exports.Factory = undefined;

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(74);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _lib = __webpack_require__(75);

	var _lib2 = _interopRequireDefault(_lib);

	var _env = __webpack_require__(152);

	var _env2 = _interopRequireDefault(_env);

	var _moment = __webpack_require__(88);

	var _moment2 = _interopRequireDefault(_moment);

	__webpack_require__(153);

	var _utils = __webpack_require__(84);

	var _cache = __webpack_require__(154);

	var _cache2 = _interopRequireDefault(_cache);

	var _factory = __webpack_require__(162);

	var _factory2 = _interopRequireDefault(_factory);

	var _loader = __webpack_require__(163);

	var _loader2 = _interopRequireDefault(_loader);

	var _whitelist = __webpack_require__(124);

	var _whitelist2 = _interopRequireDefault(_whitelist);

	var _init = __webpack_require__(166);

	var _init2 = _interopRequireDefault(_init);

	var _instance = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	// import Model from 'src/tools/model.js';
	// import Precondition from 'src/tools/precondition.js';

	// 设置 moment 的 locale
	_moment2.default.locale('zh-cn');

	// 这里设置一下，domain才能同域，否则即使在同一个域名下的iframe也会有跨域问题。这一行一定不能删！
	// 本地访问的时候，domain为''，不能给domain赋值''
	!!document.domain && (document.domain = document.domain);

	// 生成UF实例
	var create = function create(_ref) {
	    var name = _ref.name;

	    // 初始化缓存空间
	    var _Cache$init = _cache2.default.init(name),
	        Config = _Cache$init.Config,
	        ModelCache = _Cache$init.ModelCache,
	        ComponentsCache = _Cache$init.ComponentsCache;
	    // 初始化其他工具实例，如ajax


	    var _Tools$init = _init2.default.init(name),
	        Ajax = _Tools$init.Ajax,
	        Requirejs = _Tools$init.Requirejs,
	        Precondition = _Tools$init.Precondition;

	    // UF实例上的工具函数


	    var func = {
	        /*******************************************************/
	        /******** 私有属性/方法 *********************************/
	        /*****************************************************/
	        insName: name,
	        // 是否阻塞
	        waiting: false,
	        // waitingCache: {},
	        // 异步逻辑执行完成后，重新执行init函数
	        _reInit: function _reInit() {
	            this.waiting = false;
	            if (ModelCache.get('_$waitingCache')) {
	                var _ModelCache$get = ModelCache.get('_$waitingCache'),
	                    config = _ModelCache$get.config,
	                    selector = _ModelCache$get.selector;

	                ModelCache.del('_$waitingCache');
	                this.render(config, selector);
	            }
	        },

	        // 获取组件
	        _get: function _get(name, key) {
	            var cp = ComponentsCache.get(name);
	            if (key && cp) {
	                return cp.get(key);
	            }
	            return cp;
	        },

	        // 根据选择器获取目标元素
	        _getTarget: function _getTarget(selector) {
	            if (_utils.Utils.typeof(selector, 'string')) {
	                var result = document.querySelector(selector);
	                if (!result) {
	                    console.error('Error: The specified element `' + selector + '` is not found.');
	                }
	                return result;
	                // 如果传入的是dom元素，直接返回
	            } else if (selector instanceof Element) {
	                return selector;
	            } else {
	                return null;
	            }
	        },

	        // 向selector中插入新的组件
	        _append: function _append(config, selector) {
	            var destoryHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	            var div = document.createElement('div');
	            var target = document.body;
	            if (selector) {
	                target = this._getTarget(selector) || target;
	            }
	            target.appendChild(div);
	            function destory() {
	                var unmountResult = _reactDom2.default.unmountComponentAtNode(div);
	                if (unmountResult && div.parentNode) {
	                    div.parentNode.removeChild(div);
	                }
	            }
	            // 给config增加destory逻辑
	            if (destoryHandler) {
	                var origin = config[destoryHandler];
	                config[destoryHandler] = !!origin ? function () {
	                    origin.apply(undefined, arguments);
	                    destory();
	                } : destory;
	            }
	            this.render(config, div);
	            return {
	                element: div,
	                destory: destory
	            };
	        },


	        /*******************************************************/
	        /******** 公共属性/方法 *********************************/
	        /*****************************************************/

	        require: Requirejs,
	        // ajax请求。包含 ajax(), ajax.get(), ajax.post()
	        ajax: Ajax,
	        // 暴露全部工具类
	        utils: _utils.Utils,
	        // moment 暴露全部功能
	        moment: _moment2.default,
	        // underscore工具函数
	        _: _utils.Utils._,
	        // Modal直接调用函数，传入insName
	        Modal: _utils.Utils.each(_lib2.default.Modal, function (item) {
	            return _utils.Utils.typeof(item, 'function') ? item.bind(null, name) : item;
	        }),
	        // message、notification 直接调用函数，传入insName
	        message: _utils.Utils.each(_lib2.default.message, function (item) {
	            return _utils.Utils.typeof(item, 'function') ? item.bind(null, name) : item;
	        }),
	        notification: _utils.Utils.each(_lib2.default.notification, function (item) {
	            return _utils.Utils.typeof(item, 'function') ? item.bind(null, name) : item;
	        }),
	        // model 数据绑定页面
	        // model: Model,
	        // 全局数据
	        get: ModelCache.get.bind(ModelCache),
	        set: ModelCache.set.bind(ModelCache),
	        del: ModelCache.delete.bind(ModelCache),
	        delete: ModelCache.delete.bind(ModelCache),
	        // 获取当前页面路由信息
	        getRouter: _lib2.default.Router.getRouter,
	        // 根据组件配置 生成&渲染组件实例
	        init: function init(config, selector) {
	            if (!this.waiting) {
	                this.render(config, selector);
	            } else {
	                // this.waitingCache = {config, selector};
	                ModelCache.set('_$waitingCache', { config: config, selector: selector });
	            }
	        },

	        // 根据组件配置 生成&渲染组件实例
	        render: function render(config, selector) {
	            var result = _react2.default.createElement(_factory2.default, { config: config, insName: this.insName });
	            // 如果没有指定目标容器的id，则直接返回生成的组件实例
	            if (!selector || !this._getTarget(selector)) {
	                return result;
	            }
	            return _reactDom2.default.render(result, this._getTarget(selector));
	        },

	        // 主动销毁render到页面上的组件
	        unrender: function unrender(selector) {
	            return _reactDom2.default.unmountComponentAtNode(this._getTarget(selector));
	        },

	        // 向selector中插入新的组件
	        append: function append(config, selector) {
	            return this._append(config, selector);
	        },

	        // 载入自定义组件
	        load: function load(components) {
	            _loader2.default.add(components);
	        },

	        // mockFiles 参数处理，加载
	        _handleMockFilesConf: function _handleMockFilesConf(conf) {
	            var _this = this;

	            var mockFiles = conf.global && conf.global.mockFiles || [];
	            // 如果有异步components，将加载逻辑加入到precondition中
	            if (!_utils.Utils.empty(mockFiles)) {
	                conf.precondition = (conf.precondition || []).concat(mockFiles.map(function (path) {
	                    return function (resovle) {
	                        Requirejs([path], function (foo) {
	                            foo && _this.config({
	                                global: {
	                                    mock: foo
	                                }
	                            });
	                            resovle();
	                        });
	                    };
	                }));
	            }
	            return conf;
	        },

	        // components 配置处理，components有两种情况
	        //  1、直接为一个对象，即一系列配置对象列表
	        //  2、还有一种为一个数组，数组中每一项即可以为1中的配置对象列表，又可以为一个url（异步加载其余地方的公用配置）
	        _handleComponentsConf: function _handleComponentsConf(conf) {
	            var _this2 = this;

	            var componentsLoader = [];
	            if (conf.components && _utils.Utils.typeof(conf.components, 'array')) {
	                // 为字符串的项为异步加载配置的url，需追加到precondition里处理
	                // 剩余的为真正的配置
	                var componentsConf = {};
	                conf.components.forEach(function (item) {
	                    if (_utils.Utils.typeof(item, 'string')) {
	                        componentsLoader.push(item);
	                    } else {
	                        Object.assign(componentsConf, item);
	                    }
	                });
	                conf.components = componentsConf;
	            }
	            // 如果有异步components，将加载逻辑加入到precondition中
	            if (!_utils.Utils.empty(componentsLoader)) {
	                conf.precondition = (conf.precondition || []).concat(componentsLoader.map(function (path) {
	                    return function (resovle) {
	                        Requirejs([path], function (foo) {
	                            foo && _this2.config({ components: foo });
	                            resovle();
	                        });
	                    };
	                }));
	            }
	            return conf;
	        },

	        // plugins 配置处理，将异步加载逻辑加入到precondition中
	        _handlePluginsConf: function _handlePluginsConf(conf) {
	            // 加载扩展组件。格式为[ {name, path} || name ]
	            if (conf.plugins) {
	                conf.precondition = (conf.precondition || []).concat(conf.plugins.map(function (mod) {
	                    var path = void 0;
	                    var modName = void 0;
	                    if (_utils.Utils.typeof(mod, 'string')) {
	                        modName = mod;
	                        path = _env2.default.pluginPath + modName + '.js';
	                    } else {
	                        path = mod.path;
	                        modName = mod.name;
	                    }
	                    return function (resovle) {
	                        Requirejs([path], function (foo) {
	                            // 如果有 mod.name，则认为是单一组件，名称使用名字命名
	                            // 如果没有 mod.name，则认为是多个组件，直接添加
	                            if (modName) {
	                                _loader2.default.add(_defineProperty({}, modName, foo && foo.default ? foo.default : foo));
	                            } else {
	                                _loader2.default.add(foo);
	                            }
	                            resovle();
	                        });
	                    };
	                }));
	            }
	            return conf;
	        },

	        // precondition 配置处理，执行加载逻辑
	        _handlePreconditionConf: function _handlePreconditionConf(conf) {
	            if (conf.precondition) {
	                if (_utils.Utils.typeof(conf.precondition, 'array') && conf.precondition.length > 0) {
	                    this.waiting = true;
	                    Precondition.handle(conf.precondition);
	                }
	            }
	        },

	        // 整体配置
	        config: function config(conf) {
	            // 处理global.mock，数组转对象
	            if (conf && conf.global && conf.global.mock) {
	                var map = {};
	                conf.global.mock.forEach(function (v) {
	                    return map[v.url] = v.handler;
	                });
	                conf.global.mock = map;
	            }
	            // 用户自定义 UF 别名
	            if (conf.alias) {
	                window[conf.alias] = window.UF;
	            }
	            // 设置默认公用数据，存入 model 中
	            if (conf.data) {
	                ModelCache.set(conf.data);
	            }

	            // 处理 mockFiles 参数
	            conf = this._handleMockFilesConf(conf);
	            // 处理 components 参数
	            conf = this._handleComponentsConf(conf);
	            // 处理 plugins 参数
	            conf = this._handlePluginsConf(conf);
	            // 存储全部配置
	            var config = Config.set(_utils.Utils.filter(conf, ['data', 'precondition']));
	            // modules 属性里定义了 requirejs的配置项，具体参数详见：http://requirejs.org/docs/api.html#config
	            Requirejs.config(config.modules);
	            // 设置默认域，解决跨域问题
	            !!document.domain && (document.domain = config.global['domain']);

	            // 处理 precondition 参数, 执行阻塞页面加载的函数
	            this._handlePreconditionConf(conf);

	            // message组件设置
	            if (config.components.message) {
	                func.message.config(config.components.message);
	            }
	            // notification组件设置
	            if (config.components.notification) {
	                func.notification.config(config.components.notification);
	            }
	        },

	        // 获取实例，可以和其他实例做交互
	        getIns: function getIns(name) {
	            return (0, _instance.getInstance)(name);
	        },
	        getAllIns: function getAllIns(name) {
	            var allIns = (0, _instance.getAll)();
	            return name ? allIns[name] : allIns;
	        },
	        delIns: function delIns(name) {
	            return (0, _instance.delInstance)(name);
	        }
	    };

	    // 绑定获取组件的函数
	    var UF = func._get;
	    Object.assign(UF, func);

	    // 存储新产生的uf实例
	    (0, _instance.setInstance)(name, UF);

	    return UF;
	};

	// 先产生一个默认实例，以兼容以前的用法
	var defaultName = '_$default';
	var defaultUF = create({ name: defaultName });
	defaultUF.config({});

	// 重写window上的UF函数，使其增加创建uf实例功能
	var UF = function UF() {
	    var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    // 如果传入的是字符串，则走原来的获取组件的逻辑
	    if (typeof conf === 'string') {
	        return defaultUF(conf);
	    }
	    // 默认使用default名称
	    conf.name = conf.name || conf.appName || defaultName;
	    // 获取当前name的uf实例
	    var ufIns = (0, _instance.getInstance)(conf.name);
	    // 如果不存在生成一个新的实例
	    if (!ufIns) {
	        ufIns = create(conf);
	    }
	    ufIns.config(conf);
	    return ufIns;
	};

	// 并把默认实例抛出以供直接调用
	Object.assign(UF, defaultUF);

	exports.default = UF;
	// 获取到window上的_catch，即用户事先用到的UF方法，在此进行执行

	var catchArr = window._catch;
	if (_utils.Utils.typeof(catchArr, 'array') && catchArr.length > 0) {
	    for (var i in catchArr) {
	        var funcName = catchArr[i].func;
	        var params = catchArr[i].params;
	        UF[funcName].apply(UF, _toConsumableArray(params));
	    }
	}

	exports.Factory = _factory2.default;
	exports.Loader = _loader2.default;
	exports.WhiteList = _whitelist2.default;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = window.DLL.React;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = window.DLL.ReactDOM;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file 汇总所有组件
	 *
	 * Author: liuzechun (liuzechun@baidu.com)
	 * Created: 2019-01-06 18:04:22
	 */

	module.exports = Object.assign(__webpack_require__(76),
	// 路由组件
	__webpack_require__(128),
	// IconPlus

	// antd-mobile 组件统一封装
	__webpack_require__(131),

	// 其他自己实现/封装的组件
	{
	    Iframe: __webpack_require__(145),
	    Ueditor: __webpack_require__(147).Ueditor,
	    UeditorParse: __webpack_require__(147).UeditorParse,
	    Echarts: __webpack_require__(150)
	});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    Dom: __webpack_require__(77).default,
	    Html: __webpack_require__(127).default
	};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(78);

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

	        // 开放给用户使用的 Api
	        var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this, props));

	        _this._openApi.push('trigger');
	        // 壳子调用antd组件，调用的组件的实例存储在_component中
	        _this._component = null;
	        _this._filter.push('preventUpdate');
	        _this.__init();
	        return _this;
	    }

	    _createClass(Dom, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (this.__props.preventUpdate) {
	                return false;
	            }
	            return true;
	        }
	        // 触发组件上的原生事件，例如 focus、change 等

	    }, {
	        key: 'trigger',
	        value: function trigger(event) {
	            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                params[_key - 1] = arguments[_key];
	            }

	            if (this._component && this._component[event]) {
	                this._component[event](params);
	            } else {
	                var _get2;

	                (_get2 = _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'trigger', this)).call.apply(_get2, [this, event].concat(params));
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            // style传一个可变对象且对象进行变化时，会报warning
	            // 见：https://stackoverflow.com/questions/33295615/why-was-mutating-style-deprecated
	            return _react2.default.createElement(this.type, _extends({}, this.__props, { ref: function ref(ele) {
	                    return _this2._component = ele;
	                },
	                style: _extends({}, this.__props.style)
	            }));
	        }
	    }]);

	    return Dom;
	}(_base.BaseComponent);

	exports.default = Dom;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    BaseComponent: __webpack_require__(79).default,
	    BaseConf: __webpack_require__(79),
	    ExtendComponent: __webpack_require__(126)
	};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FilterProps = exports.Uncomplex = exports.PreventCoverageMap = exports.ForUserApi = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(80);

	var _utils = __webpack_require__(84);

	var _authority = __webpack_require__(123);

	var _authority2 = _interopRequireDefault(_authority);

	var _whitelist = __webpack_require__(124);

	var _whitelist2 = _interopRequireDefault(_whitelist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 基础类
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by liuzechun on 2017/8/4.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  * 多个处理逻辑最终合并为一个事件函数传给组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      执行顺序依次为：((__controlled > this._xxx > api > control)->this._xxx) > this.__props.onXxx
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	// import Model from 'src/tools/model.js';


	// // 提供给用户的和生命周期相关的函数，命名更加语义化
	var ForUserApi = exports.ForUserApi = {
	    beforeCreate: 'componentWillMount',
	    afterCreate: 'componentDidMount',
	    beforeRender: 'componentWillMount,componentWillUpdate',
	    afterRender: 'componentDidMount,componentDidUpdate',
	    beforeDestroy: 'componentWillUnmount'
	};

	// React的生命周期中的7个常用函数，为了防止函数被终的子组件覆盖，这7个函数会经过逻辑处理
	// 中间子类在使用这几个函数的时候，需要在函数最前面调用parent.[func]()
	var PreventCoverageMap = exports.PreventCoverageMap = _utils.Utils.distinct(Object.values(ForUserApi).join(',').split(',').concat(['componentWillReceiveProps', 'shouldComponentUpdate']));

	// 不复杂的属性，即无需merge处理直接覆盖的属性
	var Uncomplex = exports.Uncomplex = ['params', 'data', 'options'];

	// 转化为__props时需过滤的属性 - 用户配置的特殊功能的属性
	var FilterProps = exports.FilterProps = Object.keys(ForUserApi).concat(PreventCoverageMap, [
	// 权限
	'authority',
	// 获取系列参数
	// source 系列参数有：url,method,params,handler,targe
	'source',
	// 提交/发送数据系列参数
	// api 系列参数有： url,method,params,handler,trigger
	'api',
	// 组件额外动作及组件关联相关属性
	'control',
	// 隐藏组件
	'hidden']);

	// 因为组件很少使用 props 和 state，某些时候需要组件刷新的。例如面包屑组件

	var BaseComponent = function (_Component) {
	    _inherits(BaseComponent, _Component);

	    // export default class BaseComponent extends PureComponent {
	    // 组件、中间基类不调用__init，如果想要给Base设置type，则需要构造函数传入
	    function BaseComponent(props) {
	        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	        _classCallCheck(this, BaseComponent);

	        var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

	        _this.state = {};
	        // 组件类型，用于组件及其基类基础配置的获取
	        _this.class = ['base-component'];
	        // 未使用__init的组件，手动传入组件类型
	        _this.type = _this.props.__type || options.type;
	        _this.key = _this.props.__key;
	        // 组件缓存的key。有值的话组件才会缓存，如果值为null，则不会做缓存
	        _this.cacheName = _this._getTransmitName();
	        // 标志组件是否已被销毁
	        _this.unmounted = false;
	        // _factory 是最初 Factory 的 this
	        _this._factory = _this.props._factory;
	        _this.insName = _this._factory.insName;
	        // 供用户使用，例如获取路由信息/参数等
	        _this._root = _this._factory;
	        // 开发时自定义的需注入到事件中的函数，例如 AutoComplete 组件中的 'onSearch' 函数
	        _this._injectEvent = [];
	        _this._filter = _utils.Utils.copy(FilterProps).concat(
	        // 一些隐藏的属性
	        ['__cache', '__type', '__key', '_factory', '_selfCalling'],
	        // 二次解析白名单里的属性的原值存储在 _${v} 中
	        _whitelist2.default.getall(_this.type).map(function (v) {
	            return '_' + v;
	        }),
	        // 需要先执行函数得到组件配置并需要重新解析配置的属性
	        _whitelist2.default.getallFuncs(_this.type));
	        _this._innerFilter = _this._filter.filter(function (v) {
	            return v.indexOf('_') === 0;
	        });
	        // 不复杂的属性，即无需merge处理直接覆盖的属性
	        _this._uncomplex = _utils.Utils.copy(Uncomplex);
	        // 开放给用户使用的 Api，需处理下
	        _this._openApi = ['set', 'get', 'show', 'hide', 'loading', 'reload'];
	        // 可用于链式调用的API
	        _this._chainedApi = ['set', 'show', 'hide', 'loading', 'reload'];
	        // 存储一些程序执行过程中的数据
	        _this._tempData = {};
	        // 临时存储组件更新之后执行的逻辑。类似于 setState 之后的回调函数（但是 forceUpdate 没有）
	        _this._afterUpdateQueue = [];
	        _this.__defaultProps = {};
	        _this.__props = {};
	        // 更新前的__props
	        _this.__prevProps = {};
	        // 用于存放被过滤掉的props上的属性，使用户重新set也可以生效（如果直接在props上取的话，set不会触发props更新，被过滤掉的属性就无法再更新了）
	        _this.__filtered = {};
	        return _this;
	    }

	    _createClass(BaseComponent, [{
	        key: '_getDefautlProps',
	        value: function _getDefautlProps() {
	            var _this2 = this;

	            var conf = this._factory.$config.get('components.' + this.type) || {};
	            // 取中间各基类的默认配置，并合并全部配置
	            var confArr = this.class.map(function (v) {
	                return _this2._factory.$config.get('components.' + v) || {};
	            });
	            conf = this.__mergeProps.apply(this, _toConsumableArray(confArr).concat([conf]));
	            return conf;
	        }

	        // forceUpdate 完成之后执行并清空队列

	    }, {
	        key: '_componentDidUpdate',
	        value: function _componentDidUpdate(prevProps, prevState) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this._afterUpdateQueue.splice(0)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var func = _step.value;

	                    func();
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

	        // 组件的 componentWillReceiveProps 中注入的处理逻辑
	        // 有两种情况会调用cwr：
	        //  一种是父组件刷新，currentProps = this.props，如果props确实发生了变化，则需要重新调用__setProps
	        //  还有一种是set函数调用的，currentProps = this.__props，如果__props发生变化，则需要重新调用__setProps
	        // 所以nextProps也有对应另种情况：
	        //  一种是父组件刷新，传入的是正常的外部传入的配置；
	        //  还有一种是set函数调用，会额外传入一个_selfCalling属性，此属性中包含了set的原数据。直接使用此属性的内容进行__setProps即可

	    }, {
	        key: '_componentWillReceiveProps',
	        value: function _componentWillReceiveProps(nextProps, currentProps) {
	            // cwr函数执行很频繁，这里对一些props不变的情况进行一些过滤
	            currentProps = !_utils.Utils.empty(currentProps) ? currentProps : this.props;

	            var reGetData = false;
	            // 更新 __props
	            if (this.__shouldUpdate(currentProps, nextProps, false)) {
	                // 如果参数变化，则重新获取数据。要在变更 __props 之前判断。
	                reGetData = nextProps.source && _utils.Utils.isChange(_utils.Utils.varietyFormat(nextProps.source, 'url'), this.__filtered.source)
	                // 由于isChange对于子集的情况无效，对于标记为非复杂属性，需使用equals做检测
	                || !_utils.Utils.equals(nextProps.params, this.__props.params);
	                // 重新设置 __props.只传入待更新的值
	                // 如果为自身调用，则待更新的值存储在_selfCalling中；
	                // 否则为外部刷新，用 nextProps 和 currentProps 做对比，获取变化的值
	                // TODO: 深层次的属性变换无法检测到（currentProps使用的this.props）！！
	                //  是否可以考虑clone一份缓存起来专门用于做检查呢？
	                var changeProps = nextProps._selfCalling;
	                if (!changeProps) {
	                    changeProps = _utils.Utils.getChange(nextProps, currentProps);
	                }
	                this.__setProps(changeProps);
	            }

	            // 判断是否重新加载数据
	            this._tryReloadData(reGetData, nextProps._selfCalling);
	        }
	        // 自动重新加载数据

	    }, {
	        key: '_tryReloadData',
	        value: function _tryReloadData(reGetData, selfCalling) {
	            /**
	             * 自动重新加载概括起来讲，分几种判断条件：
	             *  1、是否为自身set (selfCalling，除此之外还有cwr生命周期)
	             *  2、是否发生了source参数变化（reGetData）
	             *  3、是否设置过source参数（isSetSource，对应的为set了source参数(不管有没有变化)，注意和reGetData两者有交集但互不包含）
	             *
	             * 自动重新加载有几种不同的等级，对应参数值依次为：
	             *  1、true: 范围最宽，source参数变动、自身set source参数、父组件刷新都会触发
	             *  2、'set': source参数变动、自身set source参数都会更新
	             *  3、false: 只有params或者source变化时才会更新
	             *  4、'never': 则永远不更新，除非手动调用 reload 函数
	             *
	             * 一般组件默认为false
	             */
	            var autoReload = this.__filtered.source.autoReload;
	            var isSetSource = selfCalling && (selfCalling.source || selfCalling.params);
	            switch (autoReload) {
	                case true:
	                    if (selfCalling && !isSetSource && !reGetData) {
	                        return;
	                    }
	                    break;
	                case 'set':
	                    if (!isSetSource && !reGetData) {
	                        return;
	                    }
	                    break;
	                case 'never':
	                    return;
	                case false:
	                default:
	                    if (!reGetData) {
	                        return;
	                    }
	            }
	            // 改为异步执行，保证获取数据前，组件自定义的cwr函数的逻辑也执行完毕
	            _utils.Utils.defer(this._handleAsyncData.bind(this));
	        }

	        // componentDidMount 中注入的处理逻辑

	    }, {
	        key: '_componentDidMount',
	        value: function _componentDidMount() {
	            // 组件加载完成后再中心共享一次组件，保证渲染完成后缓存中一定存在。
	            //   貌似如果组件需重新解析渲染时，时先执行构造函数生成新组件，再销毁原来组件，再把新组件渲染（未验证...）
	            //   如果如上面的流程，则会导致新组件写入缓存中后有被老组件销毁掉，最终缓存中不再有新组件
	            this._transmitComponent(false);
	            // 如果设置了自动获取异步数据，则执行逻辑
	            if (this.__filtered.source.autoLoad === undefined || this.__filtered.source.autoLoad) {
	                this._handleAsyncData();
	            }
	        }

	        // componentWillUnmount 中注入的处理逻辑
	        // 最外层的子类实例化的时候会调用 _injectFunction 函数，把函数注入到子类示例的 componentWillUnmount 中

	    }, {
	        key: '_componentWillUnmount',
	        value: function _componentWillUnmount() {
	            this._unsetTransmitComponent();
	            this.unmounted = true;
	            delete this.parent;
	        }

	        /**
	         * __init 之前，构造函数中未能执行的逻辑（比如需要在子类构造函数中继续处理的属性，最后再进行初始化）
	         *      开发时，如果是要在 this.__props 初始化之后执行的逻辑，请覆写_beforeInit
	         */

	    }, {
	        key: '_beforeInit',
	        value: function _beforeInit() {
	            // 从缓存中读出组件的默认参数。参数来源可以是在 config.js 里配置；也可以是用户通过调用 UF.config() 配置
	            // （如 loading 组件的 delay 参数在 config.js 中定义为 150）
	            // 开发组件的时候，也可以在this.__props上增加一些默认的参数（注意不要直接用对象覆盖）
	            this.__defaultProps = this._getDefautlProps();
	            this.__props = _utils.Utils.clone(this.__defaultProps);
	        }

	        // __init 执行之后，紧跟着执行的逻辑。一般用于初始化后追加的子类内部初始化逻辑

	    }, {
	        key: '_afterInit',
	        value: function _afterInit() {}

	        // 执行 _initProps 之前的附加的逻辑

	    }, {
	        key: '_beforeInitProps',
	        value: function _beforeInitProps() {}

	        // 执行完 _initProps 后附加的逻辑，由子类自行实现

	    }, {
	        key: '_afterInitProps',
	        value: function _afterInitProps() {}

	        // 执行完 __setProps 后附加的逻辑，由子类自行实现

	    }, {
	        key: '_afterSetProps',
	        value: function _afterSetProps(newProps) {}

	        // 覆盖原生的setState方法。如果组件已销毁，则不再执行setState。用于异步操作中调用setState时的通用状态检测

	    }, {
	        key: 'setState',
	        value: function setState() {
	            var _get2;

	            if (this.unmounted) {
	                return;
	            }

	            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                params[_key] = arguments[_key];
	            }

	            (_get2 = _get(BaseComponent.prototype.__proto__ || Object.getPrototypeOf(BaseComponent.prototype), 'setState', this)).call.apply(_get2, [this].concat(params));
	        }
	        // 覆盖原生的forceUpdate方法。如果组件已销毁，则不再执行forceUpdate。用于异步操作中调用forceUpdate时的通用状态检测

	    }, {
	        key: 'forceUpdate',
	        value: function forceUpdate() {
	            var _get3;

	            if (this.unmounted) {
	                return;
	            }

	            for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                params[_key2] = arguments[_key2];
	            }

	            (_get3 = _get(BaseComponent.prototype.__proto__ || Object.getPrototypeOf(BaseComponent.prototype), 'forceUpdate', this)).call.apply(_get3, [this].concat(params));
	        }

	        /* 暴露给用户的方法 ***********************************************************************/

	        // 暴露给用户刷新组件的接口

	    }, {
	        key: 'set',
	        value: function set(options) {
	            // 使用 factory.handleProps 函数处理用户配置的参数，并生成组件需要使用的 props
	            options = this._factory.handleProps(Object.assign({ type: this.type }, options));
	            // 要保证调用cwr时传入的nextProps的完整性
	            // 增加一个_selfCalling属性，标识当前进入cwr的为内部调用还是外部调用；_selfCalling上存储了用户传入的配置对象原值
	            var props = this.__mergeProps({ _selfCalling: options }, this.__props, options);
	            // cwr一定存在，且cwr中会执行__setProps。不管子组件是否用的是__props，都能保证兼容性
	            // 因为默认会更改__props并且forceUpdate；如果组件用的自己的props，必定会自己实现cwr中的逻辑
	            this.componentWillReceiveProps(props, this.__props);
	            return this;
	        }
	        // 获取属性key的配置
	        // 可以传递多个key，从前到后依次尝试获取，直至获取到数据为止
	        // 如果未传入可以，则返回整个配置

	    }, {
	        key: 'get',
	        value: function get() {
	            var props = Object.assign({}, this.__filtered, this.__props);

	            for (var _len3 = arguments.length, keys = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                keys[_key3] = arguments[_key3];
	            }

	            if (keys.length > 0) {
	                var result = void 0;
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var key = _step2.value;

	                        result = _utils.Utils.fromObject(key, props);
	                        if (result) {
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

	                return result;
	            }
	            return props;
	        }
	        // 触发组件上的事件。包括用户自定义的各种函数/事件（比如配置的onSubmit）
	        // 可以使用 tigger('onSubmit') 来手动触发某个用户定义的函数/事件
	        //   子类里面可能会重写：例如Antd/Dom中的 focus、change 等原生dom事件的触发，会在重写时实现

	    }, {
	        key: 'trigger',
	        value: function trigger(event) {
	            if (this.__props[event]) {
	                for (var _len4 = arguments.length, params = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	                    params[_key4 - 1] = arguments[_key4];
	                }

	                this.__props[event](params);
	            } else {
	                console.error('Warning: There is no event named: ' + event + '. ' + ('Check the component `' + this.type + '` which named `' + this.cacheName + '`'));
	            }
	        }
	        // 隐藏组件
	        // 子组件中有可能重写

	    }, {
	        key: 'hide',
	        value: function hide() {
	            this.__setProps({ hidden: true });
	        }
	        // 展示组件

	    }, {
	        key: 'show',
	        value: function show() {
	            var style = Object.assign({}, this.__props.style);
	            if (this._tempData.display && this._tempData.display !== 'none') {
	                style.display = this._tempData.display;
	            } else {
	                style.display = undefined;
	            }
	            this.__setProps({ style: style, hidden: false });
	        }
	        // 展示 loading 效果

	    }, {
	        key: 'loading',
	        value: function loading() {
	            var __showLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            // this.__setProps({__showLoading: __showLoading});
	            this.setState({ __showLoading: __showLoading });
	        }
	        // 重新获取source数据

	    }, {
	        key: 'reload',
	        value: function reload() {
	            this._handleAsyncData();
	        }
	        // 强制刷新组件
	        // TODO: 不完全刷新

	    }, {
	        key: 'refresh',
	        value: function refresh() {
	            var _this3 = this;

	            // 取出全部二次解析的属性，并重新解析一次
	            var newProps = {};
	            _whitelist2.default.getall(this.type).forEach(function (v) {
	                var oItem = _this3.__filtered['_' + v];
	                oItem && (newProps[v] = oItem);
	            });
	            this.set(newProps);
	        }
	        // 产生快捷操作某个参数的api
	        // 比如可以通过 component.source.set 等直接操作 source 参数（不会触发reload）
	        // operator(targetStr) {
	        //     let self = this;
	        //     let target = Utils.fromObject(targetStr, this.__filtered) || Utils.fromObject(targetStr, this.__props);
	        //     return {
	        //         get(key) {
	        //             if (key) {
	        //                 return target[key];
	        //             }
	        //             return target;
	        //         },
	        //         set(key, value) {
	        //             let params = {};
	        //             if (Utils.typeof(key, 'object')) {
	        //                 params = key;
	        //             } else {
	        //                 params[key] = value;
	        //             }
	        //             return Object.assign(target, params);
	        //         },
	        //         delete(key) {
	        //             if (target[key] !== undefined) {
	        //                 delete target[key];
	        //             }
	        //             return target;
	        //         }
	        //     };
	        // }

	        /* 供子组件调用方法 ***********************************************************************/

	        // 供子组件调用初始化 使用子组件this调用

	    }, {
	        key: '__init',
	        value: function __init() {
	            // 初始化之前，执行一些构造函数中未能执行的初始化逻辑
	            this._beforeInit();

	            // 以下几个函数执行顺序固定，请慎重调整！！
	            // 把父类中设置的需注入到生命周期中的逻辑注入到对应生命周期函数中
	            this._injectFunction();
	            // 共享组件
	            this._transmitComponent();

	            // 执行 _initProps 之前的附加的逻辑
	            this._beforeInitProps();
	            // 将_injectEvent定义的属性转义到_filter上
	            this._injectEventFilter();
	            // 后面传入组件的参数用 __props 代替 props
	            this._initProps();
	            // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中，并置于__props上
	            // 由于_initProps中会把_injectEvent指定的函数过滤到__filtered中，所以紧接着需要进行处理并重新赋值给__props
	            this._injectEventFunction();
	            // 执行完 _initProps 后附加的逻辑
	            this._afterInitProps();

	            // 处理数据绑定页面
	            // this._handleModel();
	            // 挂载用户传入的需要关联到生命周期中的函数（这个把生命周期的函数做个一个转换，更加语义化）
	            this._loadUserFunction();

	            // 针对一些需要先执行函数得到组件配置并需要重新解析配置的属性进行处理
	            this._analysisProps();

	            // 替换 render 函数，给render加额外处理逻辑
	            this._injectRender();

	            // 开放给用户使用的 Api，需处理下
	            this._handleOpenApi();

	            // 初始化之后，执行子类内部初始化逻辑
	            this._afterInit();
	        }

	        // 获取完整的组件配置：会把config中的通用组件配置合并进来；也会解析自定义组件配置

	    }, {
	        key: '__getConf',
	        value: function __getConf(props) {
	            return this._factory.getConf(props);
	        }

	        // 用于在组件开发中更新__props，类似于setState，只不过是在刷新 __props
	        //   TODO：通过 __setProps 只能设置属性，不能更换函数。
	        //      原因，函数需要额外注入处理，各个函数各不相同，未统一，无法直接更新到__props。所以在_filterHandler中把传入的函数过滤掉了
	        // 也可以传入待刷新完成后执行自己想要执行的逻辑（比如Modal，需弹框显示后才能执行其他操作）
	        // 默认会刷新组件；也可以把第二个参数设为 false 阻止刷新

	    }, {
	        key: '__setProps',
	        value: function __setProps(nextProps, follow) {
	            // 如果组件已销毁，则不再进行任何操作
	            if (this.unmounted) {
	                return;
	            }
	            // 去除掉多余的属性（解决报warning问题）
	            // 因为初始化的时候对函数有额外处理，所以暂时不能随意更改函数属性，需全部过滤
	            // 但是初始化时，需把this.props上的全部赋值给__props，所以是否过滤函数需要增加判断
	            var __props = this._filterHandler(nextProps);
	            // this.__prevProps = this.__props;
	            // this.__props = this.__mergeProps({}, this.__props, __props);
	            // __props一直是用同一个对象，__prevProps为复制来的，这样方便程序里使用深层对象的引用
	            // TODO: 待观察是否有问题
	            this.__prevProps = _utils.Utils.clone(this.__props);
	            this.__props = this.__mergeProps(this.__props, __props);
	            // 执行附加逻辑
	            this._afterSetProps(nextProps);
	            if (follow !== false) {
	                this.forceUpdate();
	                // 延迟执行
	                // setTimeout(follow, 10);
	                // TODO: 待观察效果，update at 2018-07-03
	                // forceUpdate 完成之后执行
	                if (_utils.Utils.typeof(follow, 'function')) {
	                    this._afterUpdateQueue.push(follow);
	                }
	            }
	        }

	        // 把默认配置和当前用户传入配置进行合并，可以传多个参数
	        //  如果把 defaultProps 放在第一位，merge完成后defaultProps的值会变成merge后的数据，如果defaultProps需多次使用，会出问题
	        //  针对此问题，可以第一个参数放一个空对象，类似于Object.assign的用法

	    }, {
	        key: '__mergeProps',
	        value: function __mergeProps() {
	            for (var _len5 = arguments.length, props = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	                props[_key5] = arguments[_key5];
	            }

	            return _utils.Utils.merge.apply(_utils.Utils, [this._uncomplex].concat(props));
	        }

	        // 从props中过滤掉某些属性，例如原始元素不支持的属性

	    }, {
	        key: '__filterProps',
	        value: function __filterProps(props) {
	            var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._filter;

	            return _utils.Utils.filter(props, arr);
	        }

	        // 判断是否需要刷新
	        //   如果是单纯因为父组件属性导致子组件的 cwr 函数被调用，两次的props是相同的，没必要刷新；
	        //   如果是set导致的，则两次的props肯定会有不同，需刷新
	        // 还有：需要把_filter中定义的属性全部过滤掉，这些属性是额外定义的，对判断结果会有影响
	        // update at 2018/08/06, 如果是set的source等过滤属性，要保证这里也能通过，所以仅仅过滤`_`开头的属性

	    }, {
	        key: '__shouldUpdate',
	        value: function __shouldUpdate(props, nextProps, disposeFunc) {
	            return !_utils.Utils.equals(_utils.Utils.filter(props, this._innerFilter), _utils.Utils.filter(nextProps, this._innerFilter), disposeFunc);
	        }

	        // ajax通用方法

	    }, {
	        key: '__ajax',
	        value: function __ajax(config) {
	            var _this4 = this;

	            this._inject(config, 'success', function () {
	                // 增加逻辑：如果组件已销毁，则不再往下执行
	                if (_this4.unmounted) {
	                    return false;
	                }
	            });
	            this._inject(config, 'error', function () {
	                // 增加逻辑：如果组件已销毁，则不再往下执行
	                if (_this4.unmounted) {
	                    return false;
	                }
	            });
	            return this._factory.$ajax(config);
	        }

	        // 解析某个属性的配置。方便开发组件时定义一些可以为配置的属性

	    }, {
	        key: '__analysis',
	        value: function __analysis(item) {
	            return this._factory.generateElement(item);
	        }

	        // 判断是否为权限点 && 是否有权限

	    }, {
	        key: '__authority',
	        value: function __authority(item) {
	            return _authority2.default.check(item, this.insName);
	        }

	        // 获取缓存中的组件

	    }, {
	        key: '__getComponent',
	        value: function __getComponent(name) {
	            return this._factory.$components.get(name);
	        }

	        // 兼容自定义额外操作返回结果有可能为 Promise 的情况。
	        // 如果result是Promse，使用then/catch处理；
	        // 否则，根据返回的是否为false判断要执行成功还是失败

	    }, {
	        key: '__compatePromise',
	        value: function __compatePromise(result, success, error) {
	            if (result instanceof Promise) {
	                result.then(function () {
	                    success && success();
	                }).catch(function () {
	                    error && error();
	                });
	            } else if (result !== false) {
	                success && success();
	            } else {
	                error && error();
	            }
	        }

	        // 从source接口获取数据
	        // 传入的config包含 success 和 error，source一系列处理完成后最终数据才会传给 success

	    }, {
	        key: '__getSourceData',
	        value: function __getSourceData(config) {
	            var _this5 = this;

	            // success 和 error 等来自子组件调用，其余参数如果子组件传入，则进行覆盖
	            var _Object$assign = Object.assign({}, this.__filtered.source, config),
	                target = _Object$assign.target,
	                showLoading = _Object$assign.showLoading,
	                onchange = _Object$assign.onchange,
	                others = _objectWithoutProperties(_Object$assign, ['target', 'showLoading', 'onchange']);

	            this.__execAjax(_extends({}, others, {
	                // 验证返回结果是否为空
	                verifyData: true,
	                onchange: !showLoading ? onchange : function (status) {
	                    _this5._handleSourceLoading(status, showLoading);
	                    onchange && onchange(status);
	                }
	            }));
	        }
	        // 处理source系列接口参数的通用逻辑（例如handler处理）

	    }, {
	        key: '__execAjax',
	        value: function __execAjax(conf) {
	            var _this6 = this;

	            var usePromise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            var url = conf.url,
	                params = conf.params,
	                _paramsHandler = conf._paramsHandler,
	                paramsHandler = conf.paramsHandler,
	                _conf$paramIndex = conf.paramIndex,
	                paramIndex = _conf$paramIndex === undefined ? {} : _conf$paramIndex,
	                removeEmptyParams = conf.removeEmptyParams,
	                _handler = conf._handler,
	                handler = conf.handler,
	                _success = conf.success,
	                onSuccess = conf.onSuccess,
	                _error = conf.error,
	                onError = conf.onError,
	                others = _objectWithoutProperties(conf, ['url', 'params', '_paramsHandler', 'paramsHandler', 'paramIndex', 'removeEmptyParams', '_handler', 'handler', 'success', 'onSuccess', 'error', 'onError']);

	            if (url) {
	                // 额外增加对参数预处理逻辑，不暴露给用户使用
	                if (_paramsHandler && false === (params = _paramsHandler(params))) {
	                    return false;
	                }
	                // 可以通过 paramIndex 属性更改默认传递的page和size参数
	                if (params && _utils.Utils.typeof(paramIndex, 'object') && !_utils.Utils.empty(paramIndex)) {
	                    for (var i in params) {
	                        if (paramIndex[i]) {
	                            params[paramIndex[i]] = params[i];
	                            delete params[i];
	                        }
	                    }
	                }
	                if (paramsHandler) {
	                    // 如果paramsHandler返回结果为false，则阻止ajax请求
	                    //  可以在paramsHandler中格式化参数的同时对参数进行校验，如果校验失败，则终止请求
	                    var result = paramsHandler(params, this);
	                    // 使用时需注意，如果调用之外有额外的状态控制，例如loading没写到onchange里，则需要自己额外写判断逻辑恢复状态
	                    if (result === false) {
	                        return false;
	                    }
	                    params = result !== undefined ? result : params;
	                }
	                // 移除为空的属性
	                if (params && removeEmptyParams === true) {
	                    for (var _i in params) {
	                        if (params[_i] === null || params[_i] === undefined || params[_i] === '') {
	                            delete params[_i];
	                        }
	                    }
	                }
	                return new Promise(function (resolve, reject) {
	                    _this6.__ajax(_extends({}, others, {
	                        url: url,
	                        params: params,
	                        success: function success(data, res) {
	                            if (false === (_handler && (data = _handler(data, res)))) {
	                                return false;
	                            }
	                            // 如果用户定义了数据处理函数，先对数据进行处理
	                            handler && (data = handler(data, res, _this6));
	                            // 两个handler都可以通过return false 阻止后续逻辑
	                            // 注意，存在返回数据本身为data的情况。所以需要确认当data为handler处理结果时，再阻止
	                            if (data === false && (_handler || handler)) {
	                                return;
	                            }
	                            // 实际的调用处传入的成功处理逻辑
	                            _success && _success(data, res);
	                            // 成功后的额外操作
	                            onSuccess && onSuccess(data, res, _this6);
	                            usePromise && resolve();
	                        },
	                        error: function error(res) {
	                            // 实际的调用处传入的失败处理逻辑
	                            var result = _error && _error(res);
	                            usePromise && reject();
	                            var userResult = onError && onError(res);
	                            // 失败后额外操作
	                            return userResult !== undefined ? userResult : result;
	                        }
	                    }));
	                });
	            }
	        }

	        // source获取数据时，通用的展示source的逻辑

	    }, {
	        key: '_handleSourceLoading',
	        value: function _handleSourceLoading(status, showLoading) {
	            // 展示loading可以自定义展示效果，showLoading为loading的配置
	            var loadingConf = status;
	            if (status) {
	                loadingConf = showLoading;
	                if (!_utils.Utils.typeof(loadingConf, 'object')) {
	                    loadingConf = { spinning: !!loadingConf };
	                }
	                loadingConf.spinning = true;
	            }
	            // DataEntry里重写了loading，会用到showLoading参数
	            this.loading(loadingConf, showLoading);
	        }

	        // 获取通用的公共属性

	    }, {
	        key: '__getCommonProps',
	        value: function __getCommonProps() {
	            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	            var commonProps = ['style', 'className'];
	            var result = _utils.Utils.pass(this.__props, commonProps);
	            if (props.className) {
	                result.className = props.className + ' ' + (result.className || '');
	            }
	            if (props.style) {
	                result.style = Object.assign(props.style, result.style);
	            }
	            return result;
	        }

	        /* 私有方法 ***********************************************************************/

	        // 过滤 props，生成 __props 和 __filtered

	    }, {
	        key: '_filterHandler',
	        value: function _filterHandler(props) {
	            var newProps = {};
	            for (var i in props) {
	                if (props.hasOwnProperty(i)) {
	                    if (this._filter.indexOf(i) === -1) {
	                        newProps[i] = props[i];
	                    } else {
	                        // 使用merge，保证增量合并。使进入到__filtered中的属性，也能增量的set
	                        // this.__filtered[i] = this.__mergeProps({}, this.__filtered[i], props[i]);
	                        var value = props[i];
	                        // 格式化 api、source、control 系列参数
	                        if (['api', 'source', 'control'].indexOf(i) > -1) {
	                            value = this._varietyPropsFormat(i, value);
	                        }
	                        this.__filtered[i] = _utils.Utils.merge(this.__filtered[i] || {}, value);
	                    }
	                }
	            }
	            return newProps;
	        }

	        // api、source、control 系列参数初始化，处理成对象

	    }, {
	        key: '_varietyPropsFormat',
	        value: function _varietyPropsFormat(key, value) {
	            switch (key) {
	                case 'api':
	                    value = _utils.Utils.varietyFormat(value, 'url');
	                    break;
	                case 'source':
	                    value = _utils.Utils.varietyFormat(value, 'url');
	                    break;
	                case 'control':
	                    value = _utils.Utils.varietyFormat(value, 'target');
	                    break;
	                default:
	                    return value;
	            }
	            // 检查默认配置中是否有配置，如果有进行合并
	            if (!_utils.Utils.empty(value) && this.__defaultProps[key]) {
	                value = this.__mergeProps({}, this.__defaultProps[key], value);
	            }
	            return value;
	        }

	        // 后面传入组件的参数用 __props 代替 props

	    }, {
	        key: '_initProps',
	        value: function _initProps() {
	            // 先把 this.__props 中初始化的多余属性过滤掉
	            // 在这里执行是为了方便子类中__init之前在去更改__props
	            this.__props = this._filterHandler(this.__props);
	            // 然后把组件原props作为新值传给__setProps做合并
	            this.__setProps(this.props, false);
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
	            return key;
	        }

	        // 共享组件

	    }, {
	        key: '_transmitComponent',
	        value: function _transmitComponent(isCheck) {
	            if (!!this.cacheName) {
	                this._factory.$components.set(this.cacheName, this, isCheck);
	            }
	        }

	        // 解除共享

	    }, {
	        key: '_unsetTransmitComponent',
	        value: function _unsetTransmitComponent() {
	            if (!!this.cacheName) {
	                this._factory.$components.del(this.cacheName);
	                // 删除全部this上的变量，防止循环引用
	                // for (let i in this) {
	                //     delete this[i];
	                // }
	            }
	        }

	        // 处理数据绑定页面。设置关联关系 && 替换模板
	        // _handleModel() {
	        //     this.__props = Model.setCache(this.cacheName, this.__props);
	        // }

	        // 开放给用户使用的 Api，需处理下

	    }, {
	        key: '_handleOpenApi',
	        value: function _handleOpenApi() {
	            var _this7 = this;

	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = this._openApi[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var v = _step3.value;

	                    if (_utils.Utils.typeof(this[v], 'function')) {
	                        this[v] = this[v].bind(this);
	                    }
	                }
	                // 可用于链式调用的api，执行完成后返回当前组件
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

	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = this._chainedApi[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var _v = _step4.value;

	                    if (_utils.Utils.typeof(this[_v], 'function')) {
	                        (function () {
	                            _this7[_v] = _this7[_v].bind(_this7);
	                            var origin = _this7[_v];
	                            _this7[_v] = function () {
	                                for (var _len6 = arguments.length, p = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	                                    p[_key6] = arguments[_key6];
	                                }

	                                origin.call.apply(origin, [_this7].concat(p));
	                                return _this7;
	                            };
	                        })();
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

	        // 把父组件定义的 需在React的生命周期中的7个函数中增加的处理逻辑 注入到对应的7个函数中

	    }, {
	        key: '_injectFunction',
	        value: function _injectFunction() {
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;

	            try {
	                for (var _iterator5 = PreventCoverageMap[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var v = _step5.value;

	                    // 如果父组件中有等待注入的函数
	                    var inject = this['_' + v];
	                    if (inject) {
	                        this._inject(this, v, inject);
	                    }
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
	        }
	    }, {
	        key: '_injectEventFilter',
	        value: function _injectEventFilter() {
	            // api 及 control 的功能使用 injectEvent 的处理方式实现
	            // 必须先处理api参数，只有先注入的函数才能使用其返回值
	            // 绑定 api 系列参数处理逻辑
	            this._handleApiProps();
	            // 绑定 control 系列参数处理逻辑
	            this._handleControlProps();

	            // initProps之前，将_injectEvent中定义的需要额外处理的函数追加到_filter中
	            this._filter = this._filter.concat(this._injectEvent);
	        }

	        // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中，可见 AutoComplete 组件中的 'onSearch' 函数
	        // _injectEvent 中定义的事件，会被过滤到__filtered中，并在此处加上额外自定义的逻辑重新创建函数

	    }, {
	        key: '_injectEventFunction',
	        value: function _injectEventFunction() {
	            var _this8 = this;

	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;

	            try {
	                var _loop = function _loop() {
	                    var v = _step6.value;

	                    _this8.__props[v] = function () {
	                        var _filtered;

	                        var result = _this8['_' + v] && _this8['_' + v].apply(_this8, arguments);
	                        // 返回false会阻止事件
	                        if (result === false) {
	                            return false;
	                        }
	                        var oResult = _this8.__filtered[v] && (_filtered = _this8.__filtered)[v].apply(_filtered, arguments);
	                        // 当函数返回结果为空时，尝试获取用户定义的函数的结果
	                        result === undefined && (result = oResult);
	                        return result;
	                    };
	                };

	                for (var _iterator6 = _utils.Utils.distinct(this._injectEvent)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    _loop();
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
	        }

	        // 针对一些需要先执行函数得到组件配置并需要重新解析配置的属性进行处理

	    }, {
	        key: '_analysisProps',
	        value: function _analysisProps() {
	            var _this9 = this;

	            var _iteratorNormalCompletion7 = true;
	            var _didIteratorError7 = false;
	            var _iteratorError7 = undefined;

	            try {
	                for (var _iterator7 = _whitelist2.default.getallFuncs(this.type)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                    var _v2 = _step7.value;

	                    if (this.__filtered[_v2]) {
	                        (function () {
	                            var func = _this9.__filtered[_v2];
	                            _this9.__props[_v2] = function () {
	                                return _this9.__analysis(func.apply(undefined, arguments));
	                            };
	                        })();
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
	        }

	        // 挂载用户传入的需要关联到生命周期中的函数

	    }, {
	        key: '_loadUserFunction',
	        value: function _loadUserFunction() {
	            var _this10 = this;

	            var _loop2 = function _loop2(f) {
	                // 如果props中有等待注入的函数
	                var inject = _this10.__filtered[f];
	                if (inject) {
	                    var _iteratorNormalCompletion9 = true;
	                    var _didIteratorError9 = false;
	                    var _iteratorError9 = undefined;

	                    try {
	                        for (var _iterator9 = ForUserApi[f].split(',')[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                            var _v3 = _step9.value;

	                            _this10._inject(_this10, _v3, function () {
	                                // __filtered 需覆盖 __props，以在 _filterHandler 时还原回去
	                                var props = Object.assign({}, _this10.__props, _this10.__filtered);
	                                var result = inject(props, _this10);
	                                // 组件渲染/刷新前可以让用户有机会改参数
	                                if (result && ['beforeCreate', 'beforeRender'].indexOf(f) !== -1) {
	                                    // 防止用户设置过滤属性
	                                    _this10.__props = _this10._filterHandler(result);
	                                }
	                            }, true);
	                        }
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
	                }
	            };

	            for (var f in ForUserApi) {
	                _loop2(f);
	            }
	            // 支持高级用户（专业前端）直接使用原始的生命周期函数
	            var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;

	            try {
	                for (var _iterator8 = PreventCoverageMap[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                    var _v4 = _step8.value;

	                    // 如果父组件中有等待注入的函数
	                    var _inject2 = this.__filtered['_' + _v4];
	                    if (_inject2) {
	                        // 绑定this，使用户可以在函数中是用this指向当前的this
	                        this._inject(this, _v4, _inject2, false, this);
	                    }
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
	        }

	        // 组件 control 系列参数相关处理
	        // 使用 injectEvent 的处理方式实现

	    }, {
	        key: '_handleControlProps',
	        value: function _handleControlProps() {
	            // 还未进行initProps，api参数 props 上，init之后才在 __filtered 上
	            var control = _utils.Utils.varietyFormat(this.props.control, 'target');
	            // 只有用户进行了设置才做处理
	            if (!_utils.Utils.empty(control)) {
	                if (this.__defaultProps.control) {
	                    control = this.__mergeProps({}, this.__defaultProps.control, control);
	                }
	                if (control.trigger) {
	                    this._injectEvent.push(control.trigger);
	                    this._inject(this, '_' + control.trigger, this._controlHandler.bind(this), true);
	                }
	            }
	        }
	    }, {
	        key: '_controlHandler',
	        value: function _controlHandler() {
	            var _filtered$control = this.__filtered.control,
	                target = _filtered$control.target,
	                type = _filtered$control.type,
	                params = _filtered$control.params,
	                handler = _filtered$control.handler,
	                _filtered$control$pre = _filtered$control.preventDefault,
	                preventDefault = _filtered$control$pre === undefined ? true : _filtered$control$pre,
	                _filtered$control$sto = _filtered$control.stopPropagation,
	                stopPropagation = _filtered$control$sto === undefined ? true : _filtered$control$sto;

	            if (!target) {
	                return;
	            }
	            // 阻止默认事件及冒泡

	            for (var _len7 = arguments.length, para = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	                para[_key7] = arguments[_key7];
	            }

	            if (_utils.Utils.typeof(para[0], 'object') && para[0].preventDefault) {
	                preventDefault && para[0].preventDefault();
	                stopPropagation && para[0].stopPropagation();
	            }
	            // 1、动作类型为：绑定(开发使用)
	            if (type === 'bind') {
	                target.apply(undefined, _toConsumableArray(params).concat(para));
	                return;
	            }
	            // target可以为一个函数，函数的参数为trigger的参数列表，函数返回一个target的字符串
	            var targetArr = target;
	            if (_utils.Utils.typeof(target, 'function')) {
	                targetArr = target.apply(undefined, para);
	            }
	            // 支持target为一个数组，配置同时操作多个同类的target
	            if (!_utils.Utils.typeof(targetArr, 'array')) {
	                targetArr = [targetArr];
	            }
	            var _iteratorNormalCompletion10 = true;
	            var _didIteratorError10 = false;
	            var _iteratorError10 = undefined;

	            try {
	                for (var _iterator10 = targetArr[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	                    var _v5 = _step10.value;

	                    var targetStr = _v5;
	                    // targetAttr 可以为空数组，即目标直接指向组件

	                    var _targetStr$split = targetStr.split('.'),
	                        _targetStr$split2 = _toArray(_targetStr$split),
	                        targetName = _targetStr$split2[0],
	                        targetAttr = _targetStr$split2.slice(1);

	                    var _target = this.__getComponent(targetName);
	                    if (_target) {
	                        // 如果没设置type，则根据target的类型确定
	                        if (!type) {
	                            var attr = _utils.Utils.fromObject(targetAttr.join('.'), _target);
	                            type = _utils.Utils.typeof(attr, 'function') ? 'call' : 'assign';
	                        }
	                        switch (type) {
	                            // 2、动作类型为：调用
	                            case 'call':
	                                {
	                                    var func = _utils.Utils.fromObject(targetAttr.join('.'), _target);
	                                    // 如果没有设置params，则尝试执行handler
	                                    !params && handler && (params = handler.apply(undefined, para.concat([_target, this])));
	                                    // 转成数组以便解构
	                                    !_utils.Utils.typeof(params, 'array') && (params = [params]);
	                                    func.call.apply(func, [_target].concat(_toConsumableArray(params)));
	                                    break;
	                                }
	                            // 3、动作类型为：赋值
	                            case 'assign':
	                                {
	                                    var result = handler && handler.apply(undefined, para.concat([_target, this]));
	                                    var tData = _utils.Utils.generateObject(targetAttr.join('.'), result);
	                                    // 如果设置了params，则会把要设置的值和params合并到一起，并同时set给组件
	                                    if (params) {
	                                        tData = Object.assign({}, params, tData);
	                                    }
	                                    // 要调set函数，才能走cwr逻辑，适用于自定义组件
	                                    _target.set(tData);
	                                    break;
	                                }
	                            default:
	                                break;
	                        }
	                    }
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

	        // 自动异步获取数据

	    }, {
	        key: '_handleAsyncData',
	        value: function _handleAsyncData() {
	            var _this11 = this;

	            var _filtered$source = this.__filtered.source,
	                url = _filtered$source.url,
	                target = _filtered$source.target;

	            if (url) {
	                this.__getSourceData({
	                    success: function success(data) {
	                        // 如果用户自己配置了 target 属性，则按照用户定义的赋值
	                        target = target === 'content' ? 'children' : target;
	                        // 目标元素可以有层级,可以给更深层的属性设置,例如：pagination.count
	                        var tData = _utils.Utils.generateObject(target, data);
	                        // __setProps在table、form等自定义组件不适用
	                        _this11.set(tData);
	                    }
	                });
	            }
	        }

	        // 组件 api 系列参数相关处理
	        // 使用 injectEvent 的处理方式实现

	    }, {
	        key: '_handleApiProps',
	        value: function _handleApiProps() {
	            // 还未进行initProps，api参数 props 上，init之后才在 __filtered 上
	            var api = _utils.Utils.varietyFormat(this.props.api, 'url');
	            // 只有用户进行了设置才做处理
	            if (!_utils.Utils.empty(api)) {
	                if (this.__defaultProps.api) {
	                    api = this.__mergeProps({}, this.__defaultProps.api, api);
	                }
	                if (api.trigger) {
	                    this._injectEvent.push(api.trigger);
	                    // TODO: 有待观察，目前看代码之间的相互限制有点多
	                    this._inject(this, '_' + api.trigger, this._apiHandler.bind(this), true);
	                }
	            }
	        }

	        // 提交数据功能

	    }, {
	        key: '_apiHandler',
	        value: function _apiHandler(oParams) {
	            var _filtered$api = this.__filtered.api,
	                _filtered$api$params = _filtered$api.params,
	                params = _filtered$api$params === undefined ? oParams : _filtered$api$params,
	                onSuccess = _filtered$api.onSuccess,
	                onError = _filtered$api.onError,
	                showLoading = _filtered$api.showLoading,
	                others = _objectWithoutProperties(_filtered$api, ['params', 'onSuccess', 'onError', 'showLoading']);

	            if (!others.url) {
	                return;
	            }
	            // 如果传入或者设置的params不是简单对象，则重置params
	            if (!_utils.Utils.directInstanceof(params, [Object, Array])) {
	                params = {};
	            }
	            var hideLoading = void 0;
	            return this.__execAjax(_extends({}, others, {
	                params: params,
	                success: function success(data, res) {
	                    // 改变了onSuccess在__execAjax中的执行顺序，所以取出后不再传入给__execAjax
	                    var result = onSuccess && onSuccess(data, res);
	                    // onSuccess有返回值，则执行默认提示
	                    if (result === undefined || result === true) {
	                        _antd.message.success('执行成功' + (res.msg ? '：' + res.msg : _utils.Utils.typeof(res.data, 'number') ? '，影响 ' + res.data + ' 条数据' : '!'), 2);
	                    }
	                },
	                error: function error(res) {
	                    var result = onError && onError(res);
	                    // onError有返回值，则执行默认提示
	                    if (result === undefined || result === true) {
	                        _antd.message.error(res.msg ? res.msg : '执行失败!', 3);
	                    }
	                    return result || false;
	                },
	                onchange: function onchange(status) {
	                    if (status) {
	                        if (showLoading) {
	                            hideLoading = _antd.message.loading('提交中，请等待~', 0);
	                        }
	                    } else {
	                        hideLoading && hideLoading();
	                    }
	                }
	            }), true);
	        }

	        // 替换 render 函数，给render加额外处理逻辑

	    }, {
	        key: '_injectRender',
	        value: function _injectRender() {
	            var render = this.render;
	            this.render = this._render.bind(this, render);
	        }
	        // 插入额外render处理逻辑

	    }, {
	        key: '_render',
	        value: function _render(render) {
	            // 如果设置了__showLoading，则在组件外额外追加一个loading组件
	            if (this.state.__showLoading !== undefined) {
	                var loadingConf = this.state.__showLoading;
	                if (_utils.Utils.typeof(loadingConf, 'boolean')) {
	                    loadingConf = { spinning: loadingConf };
	                }
	                if (loadingConf.spinning === undefined) {
	                    loadingConf.spinning = true;
	                }
	                return _react2.default.createElement(
	                    _antd.Spin,
	                    loadingConf,
	                    render.call(this)
	                );
	            }
	            // 隐藏组件，如果组件隐藏，则不再进行render
	            //  TODO: 待观察，如果有问题，可以改为外出嵌套display:none的div实现
	            //      return null 会导致组件销毁，不能保存组件操作状态
	            // if (this.__filtered.hidden === true) {
	            //     return null;
	            // }
	            if (this.__filtered.hidden === true) {
	                // return null;
	                this.__props.style = this.__props.style || {};
	                this.__props.style.display = 'none';
	            } else if (this.__filtered.hidden === false && this.__props.style) {
	                delete this.__props.style.display;
	            }
	            return render.call(this);
	        }

	        // 函数替换 函数
	        // 参数依次为 父级、目标函数、新函数、是否把原来逻辑提前

	    }, {
	        key: '_inject',
	        value: function _inject(parent, target, newFunc, oldAhead) {
	            return _utils.Utils.inject(parent, target, newFunc, oldAhead, this);
	        }
	    }]);

	    return BaseComponent;
	}(_react.Component);

	exports.default = BaseComponent;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file 伪装原来Antd提供的功能，以兼容uf框架通用逻辑
	 *
	 * Author: liuzechun (liuzechun@baidu.com)
	 * Created: 2019-01-09 20:25:23
	 */

	module.exports = {
	  message: __webpack_require__(81).default,
	  Spin: __webpack_require__(83).default
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _antdMobile = __webpack_require__(82);

	exports.default = {
	    success: _antdMobile.Toast.success,
	    error: _antdMobile.Toast.fail,
	    info: _antdMobile.Toast.info,
	    warning: _antdMobile.Toast.info,
	    warn: _antdMobile.Toast.info,
	    loading: _antdMobile.Toast.loading
	}; /**
	    * @file message 组件
	    *
	    * Author: liuzechun (liuzechun@baidu.com)
	    * Created: 2019-01-09 20:28:09
	    */

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = window.DLL.AntdMobile;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _antdMobile = __webpack_require__(82);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Loading 组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: liuzechun (liuzechun@baidu.com)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created: 2019-01-09 20:28:09
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Spin = function (_React$Component) {
	    _inherits(Spin, _React$Component);

	    function Spin() {
	        _classCallCheck(this, Spin);

	        return _possibleConstructorReturn(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).apply(this, arguments));
	    }

	    _createClass(Spin, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_antdMobile.ActivityIndicator, _extends({}, Utils.filter(this.props, 'loading'), {
	                    animating: !!this.props.spinning })),
	                this.props.children
	            );
	        }
	    }]);

	    return Spin;
	}(_react2.default.Component);

	exports.default = Spin;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    Utils: __webpack_require__(85).default,
	    Ajax: __webpack_require__(89).default
	};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _underscore = __webpack_require__(86);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _moment2 = __webpack_require__(88);

	var _moment3 = _interopRequireDefault(_moment2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @file 一些常用的函数工具
	                                                                                                                                                                                                     * @author liuzechun
	                                                                                                                                                                                                     **/

	var I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
	var s4 = function s4() {
	    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
	};

	// 引入了underscore的功能，并在其上增加了自定义的一些函数
	var utils = Object.assign({}, _underscore2.default, {
	    // 如果要使用原生的功能，可通过 _ 来访问
	    _: _underscore2.default,

	    /*********************************************************************************/
	    /* 原函数改造 **********************************************************************/
	    /*********************************************************************************/

	    // 如果数据合法，返回moment数据；否则返回null
	    moment: function moment() {
	        var result = _moment3.default.apply(undefined, arguments);
	        if (result.isValid()) {
	            return result;
	        }
	        return arguments.length <= 0 ? undefined : arguments[0];
	    },

	    // 数组是否有交集
	    isIntersection: function isIntersection() {
	        return _underscore2.default.intersection.apply(_underscore2.default, arguments).length > 0;
	    },

	    // ES6 对象合并
	    assign: function assign() {
	        return Object.assign.apply(Object, arguments);
	    },

	    // JSON.stringify 的改造版，跳过复杂属性、不忽略正则等变量等，用于把一个对象转换成一个字符串
	    stringify: function stringify(data) {
	        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

	        if (level <= 0) {
	            return '_$leaf';
	        }
	        if (utils.typeof(data, ['object', 'array', 'symbol'])) {
	            if (utils.directInstanceof(data, [Object, Array])) {
	                data = utils.each(data, function (v) {
	                    return utils.stringify(v, level - 1);
	                });
	                data = JSON.stringify(data);
	            } else {
	                // Symbol(react.element)
	                data = '_$Symbol';
	            }
	        } else if (utils.typeof(data, 'function')) {
	            data = '_$function';
	        }
	        return '' + data;
	    },

	    // 数组去重
	    distinct: function distinct(arr) {
	        return [].concat(_toConsumableArray(new Set(arr)));
	    },


	    /*********************************************************************************/
	    /* 自定义工具函数 ******************************************************************/
	    /*********************************************************************************/

	    // 数字前面补充0
	    padNum: function padNum(num, n) {
	        var len = ('' + num).length;
	        return Array(n > len ? n - len + 1 : 0).join(0) + num;
	    },

	    // 生成随机唯一ID，32位
	    uniqueId: function uniqueId() {
	        return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
	    },

	    // 字符串哈希
	    //  当传入第3个属性时，说明对象不是简单对象，走自定义处理逻辑，过滤掉非p
	    hash: function hash(text, len, level) {
	        var hash = 5381;
	        if (level) {
	            text = utils.stringify(text, level);
	        } else {
	            text = JSON.stringify(text);
	        }
	        text += '';
	        var i = text.length - 1;
	        for (; i > -1; i--) {
	            hash += (hash << 5) + text.charCodeAt(i);
	        }
	        var value = hash & 0x7FFFFFFF;
	        var retValue = '';
	        do {
	            retValue += I64BIT_TABLE[value & 0x3F];
	        } while (value >>= 1);
	        // 凑长度
	        if (len) {
	            while (retValue.length < len) {
	                retValue = retValue + retValue;
	            }
	            if (retValue.length > len) {
	                retValue = retValue.slice(0, len);
	            }
	        }
	        return retValue;
	    },

	    // 数据格式转换
	    format: function format(value, type) {
	        if (value === undefined) {
	            return undefined;
	        }
	        switch (type) {
	            case 'number':
	                value = +value || 0;
	                break;
	            case 'string':
	                value = '' + value;
	                break;
	            case 'boolean':
	                value = value === 'false' || value === 'FALSE' ? false : !!value;
	                break;
	            case 'array':
	                if (utils.typeof(value, 'undefined')) {
	                    value = [];
	                }
	                if (!utils.typeof(value, 'array')) {
	                    value = [value];
	                }
	                break;
	            case 'undefined':
	                value = undefined;
	                break;
	            default:
	                ;
	        }
	        return value;
	    },

	    // 判断数组或对象是否为空
	    empty: function empty(obj) {
	        if (utils.typeof(obj, ['array', 'object'])) {
	            for (var t in obj) {
	                return false;
	            }
	            return true;
	        } else {
	            return !obj;
	        }
	    },

	    // 浅拷贝，指针指向，只拷贝一层
	    copy: function copy(obj) {
	        return utils.clone(obj, 1);
	    },

	    // 深拷贝对象/数组
	    // level 为深拷贝的层级，默认一直遍历到最深层.
	    // 默认10层，防止循环引用
	    clone: function clone(data) {
	        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

	        if (level <= 0) {
	            return data;
	        }
	        var newData = void 0;
	        if (utils.typeof(data, 'array')) {
	            newData = [];
	        } else if (utils.typeof(data, 'object') && utils.directInstanceof(data, Object) && !Object.isFrozen(data)) {
	            newData = {};
	        } else {
	            return data;
	        }
	        for (var i in data) {
	            if (data.hasOwnProperty(i)) {
	                newData[i] = utils.clone(data[i], level - 1);
	            }
	        }
	        return newData;
	    },

	    // 以第一个对象为目标，依次把后面的对象merge到上去，支持深层的merge，类似于一个深层的 Object.assign()
	    // ghost 为一特殊参数，分三种情况
	    //   level 参数为拷贝层数，不传则默认遍历10层，防止循环引用
	    //   filter 为数组，声明某些属性无需合并直接覆盖
	    // ** 只适用于JSON等对象字面量的对象，比较复杂的对象直接覆盖，不做深层遍历
	    merge: function merge(ghost, target) {
	        var filter = [];
	        var level = 10;
	        // 场景1：ghost 为level值，即merge的深度

	        for (var _len = arguments.length, objs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	            objs[_key - 2] = arguments[_key];
	        }

	        if (utils.typeof(ghost, 'number')) {
	            level = ghost;
	            // 场景2：ghost 为filter数组，声明某些属性无需合并直接覆盖
	        } else if (utils.typeof(ghost, 'array')) {
	            filter = ghost;
	            // 场景3：无上述两种类型的参数，ghost为target
	        } else {
	            objs.unshift(target);
	            target = ghost;
	        }
	        if (level <= 0) {
	            // 如果存储内容不为普通对象，例如类的实例，copy不能拷贝继承的函数
	            // return utils.copy(objs[0]);
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
	                // array 应该直接覆盖，否则数组的值只增不减
	                if (!Object.isFrozen(result) && utils.typeof(result, 'object') && utils.typeof(obj, 'object') && utils.directInstanceof(result, Object)) {
	                    for (var i in obj) {
	                        if (filter.indexOf(i) === -1) {
	                            result[i] = utils.merge(level - 1, result[i], obj[i]);
	                        } else {
	                            result[i] = utils.clone(obj[i]);
	                        }
	                    }
	                } else {
	                    // update at 2018/01/19，undefined的值也要覆盖，否则影响form中select的清空功能
	                    // result = obj === undefined ? target : obj;
	                    // update at 2018/10/24，使用clone，防止多个对象merge时，深层的对象的源数据会被改变。例如：utils.merge({}, a, b); a 对象的 a.b.c 的值会被 b.b.c 改变
	                    //  但是多出来的大量clone需要考虑是否会有性能问题
	                    // result = obj;
	                    result = utils.clone(obj);
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
	        if (utils.typeof(arr, 'string')) {
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

	    // 从obj中获取某些属性
	    pass: function pass() {
	        return utils.reverseFilter.apply(utils, arguments);
	    },
	    reverseFilter: function reverseFilter(obj, arr) {
	        if (utils.typeof(arr, 'string')) {
	            arr = [arr];
	        }
	        var newObj = {};
	        for (var i in obj) {
	            if (obj.hasOwnProperty(i) && arr.indexOf(i) >= 0) {
	                newObj[i] = obj[i];
	            }
	        }
	        return newObj;
	    },

	    // 对比两个值是否相等
	    // 注意：不要随意切换其余的对比函数，例如underscore的isEqual
	    // TODO: 太ugly了。。。
	    equals: function equals(value1, value2) {
	        var disposeFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	        if (disposeFunc) {
	            return utils.equals1(value1, value2);
	        } else {
	            return utils.equals2(value1, value2);
	        }
	    },

	    // 转成字符串再做对比，会对函数进行处理
	    // 注意：不要随意切换其余的对比函数，例如underscore的isEqual
	    equals1: function equals1(value1, value2) {
	        // 检测类型，类型一致才继续后续的对比
	        if (utils.getType(value1) !== utils.getType(value2)) {
	            return false;
	        }
	        // 普通类型校验
	        if (value1 === value2) {
	            return true;
	        }
	        // 对象或数组的话，只检查了一层
	        if (utils.typeof(value1, ['object', 'array'])) {
	            var keys = Object.keys(Object.assign({}, value1, value2));
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var i = _step2.value;

	                    // 如果是函数，把函数转换成字符串再做比较。否则如果函数声明两次，用is比较返回的是false
	                    if (utils.typeof(value1[i], 'function') && utils.typeof(value2[i], 'function')) {
	                        if (utils.toString(value1[i]) !== utils.toString(value2[i])) {
	                            return false;
	                        }
	                    } else if (!Object.is(value1[i], value2[i]) && !_underscore2.default.isEqual(value1[i], value2[i])) {
	                        return false;
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

	            return true;
	        }
	        // 包括：function、null、undefined、regexp、number、string、boolean、date ...
	        if (utils.toString(value1) === utils.toString(value2)) {
	            return true;
	        }
	        return false;
	    },

	    // 函数也进行对比
	    equals2: function equals2(value1, value2) {
	        // 检测类型，类型一致才继续后续的对比
	        if (utils.getType(value1) !== utils.getType(value2)) {
	            return false;
	        }
	        // 普通类型校验
	        if (value1 === value2) {
	            return true;
	        }
	        // 对象或数组的话，只检查了一层
	        if (utils.typeof(value1, ['object', 'array'])) {
	            var keys = Object.keys(Object.assign({}, value1, value2));
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var i = _step3.value;

	                    // 如果是函数，把函数转换成字符串再做比较。否则如果函数声明两次，用is比较返回的是false
	                    // update at 2018-12-26，当传入新定义的函数时，支持函数更新（原逻辑当传入函数结构一置，但是重新生成并绑定的参数不同时，无法检测出来）
	                    // if (utils.typeof(value1[i], 'function') && utils.typeof(value2[i], 'function')) {
	                    //     if (utils.toString(value1[i]) !== utils.toString(value2[i])) {
	                    //         return false;
	                    //     }
	                    // } else
	                    if (!Object.is(value1[i], value2[i]) && !_underscore2.default.isEqual(value1[i], value2[i])) {
	                        return false;
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

	            return true;
	        }
	        // 包括：function、null、undefined、regexp、number、string、boolean、date ...
	        // if (utils.toString(value1) === utils.toString(value2)) {
	        if (_underscore2.default.isEqual(value1, value2)) {
	            return true;
	        }
	        return false;
	    },

	    // 检查是否有改变内容。与equals的区别是，仅检测newVal中的值相对于oldVal相应的值是否发生了变化
	    //  注意：newVal是oldVal的子集且值没有变化时，返回的是false
	    isChange: function isChange(newVal, oldVal) {
	        // 检测类型，类型一致才继续后续的对比
	        if (utils.getType(newVal) !== utils.getType(oldVal)) {
	            return true;
	        }
	        if (utils.typeof(newVal, ['object', 'array'])) {
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = Object.keys(newVal)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var i = _step4.value;

	                    if (utils.isChange(newVal[i], oldVal[i])) {
	                        return true;
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
	        if (utils.toString(newVal) !== utils.toString(oldVal)) {
	            return true;
	        }
	        return false;
	    },

	    // 获取变化的内容
	    getChange: function getChange(newVal, oldVal) {
	        var result = {};
	        var _iteratorNormalCompletion5 = true;
	        var _didIteratorError5 = false;
	        var _iteratorError5 = undefined;

	        try {
	            for (var _iterator5 = Object.keys(newVal)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                var i = _step5.value;

	                if (!utils.equals(newVal[i], oldVal[i], false)) {
	                    result[i] = newVal[i];
	                }
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

	        return result;
	    },

	    // 子串是否处于字符串最末尾
	    isLast: function isLast(sub, str) {
	        return str.lastIndexOf(sub) === str.length - sub.length;
	    },

	    // each 遍历对象属性，类似于jQuery的each函数，方便react的render函数中遍历对象
	    // callback 为回调函数，支持三个参数：依次是 item, index, obj
	    // 注意：返回结果随着传入的参数变化，如果传入的是数组，则返回数组；如果传入的是对象，则返回对象
	    each: function each(obj, callback) {
	        var result = utils.typeof(obj, 'array') ? [] : {};
	        for (var i in obj) {
	            result[i] = callback(obj[i], i, obj);
	        }
	        return result;
	    },

	    // map 遍历对象属性，类似于上面的each
	    // 不同点在于：永远返回数组，对象也会遍历成数组
	    map: function map(obj, callback) {
	        var result = [];
	        for (var i in obj) {
	            result.push(callback(obj[i], i, obj));
	        }
	        return result;
	    },

	    // 把多数组嵌套层级拉平
	    drawLevel: function drawLevel(arr) {
	        var result = [];
	        arr.forEach(function (item) {
	            if (utils.typeof(item, 'array')) {
	                item = utils.drawLevel(item);
	            }
	            result = result.concat(item);
	        });
	        return result;
	    },

	    // 遍历深层数组
	    // 多层数组嵌套，保证原来数组层级的情况下遍历数组，值到值不为数组，并对每一项执行函数func
	    traverse: function traverse(arr, func) {
	        if (utils.typeof(arr, 'array')) {
	            return arr.map(function (item) {
	                return utils.traverse(item, func);
	            });
	        }
	        return func(arr);
	    },

	    // 根据路由模式生成真实的链接
	    // pattern  路由模式，如：#/visual/room/:room/realMode/:rack_col/:sn
	    // data 真实数据，模式中的:room即在data中取room字段的值
	    getPathFromPattern: function getPathFromPattern(pattern, data) {
	        var path = '#';
	        if (pattern) {
	            var arr = pattern.slice(2, pattern.length).split('/');
	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;

	            try {
	                for (var _iterator6 = arr[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var v = _step6.value;

	                    if (v.indexOf(':') === 0) {
	                        var key = v.slice(1, v.length);
	                        path += '/' + data[key];
	                    } else {
	                        path += '/' + v;
	                    }
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
	        } else {
	            path = 'javascript:void(0);';
	        }
	        return path;
	    },

	    // 跳转链接，router的调整组件会刷新两次，不过也不建议使用此函数，可以使用a标签代替
	    goto: function goto(path) {
	        var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        // 如果path不是已#/开头，且不是/开头，则加上#/
	        path = path.indexOf('#/') !== 0 ? path.indexOf('/') !== 0 ? '#/' + path : path : path;
	        var nowPath = window.location.hash;
	        if (path !== nowPath && path !== '' || forceUpdate) {
	            // 之所以不用hashHistory.push()是因为会自动执行两次push
	            window.location.href = path;
	        }
	    },

	    // 转换为字符串，原生的toString方法不适用于undefined，null等
	    toString: function toString(value) {
	        return '' + value;
	    },

	    // 获取数据的类型，返回的类型名称为全小写
	    // 包括：object、array、function、null、undefined、regexp、number、string、boolean、date ...
	    // 推荐使用 utils.typeof 函数
	    getType: function getType(value) {
	        return {}.toString.call(value).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	    },

	    // 判断 value 是否为指定类型
	    // type 可以为一个字符串或者一个数组
	    typeof: function _typeof(value, type) {
	        if (utils.getType(type) === 'string') {
	            return utils.getType(value) === type;
	        } else if (utils.getType(type) === 'array') {
	            return type.indexOf(utils.getType(value)) !== -1;
	        } else {
	            return false;
	        }
	    },

	    // 把中横线命名的字符串转换成帕斯卡命名形式
	    toPascal: function toPascal(str) {
	        return (str || '').split('-').map(function (i) {
	            return i.replace(/^\w/g, function (v) {
	                return v.toUpperCase();
	            });
	        }).join('');
	    },

	    // 下划线转换驼峰
	    toHump: function toHump(str) {
	        return (str || '').replace(/\_(\w)/g, function (all, letter) {
	            return letter.toUpperCase();
	        });
	    },

	    // 驼峰转换下划线
	    toLine: function toLine(str) {
	        return (str || '').replace(/([A-Z])/g, '_$1').toLowerCase();
	    },

	    // 判断组件是否继承自某个类，支持验证自己
	    // 根据组件的引用（通过import获得）判断，支持深层查找
	    isExtendsOf: function isExtendsOf(item, superClass) {
	        if (item === superClass) {
	            return true;
	        }
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
	        if (!utils.typeof(cls, 'array')) {
	            cls = [cls];
	        }
	        var _iteratorNormalCompletion7 = true;
	        var _didIteratorError7 = false;
	        var _iteratorError7 = undefined;

	        try {
	            for (var _iterator7 = cls[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                var v = _step7.value;

	                if (obj && obj.constructor && obj.constructor.prototype === v.prototype) {
	                    return true;
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

	        return false;
	    },


	    // 把数组、对象转换成select等需要的options标准格式
	    toOptions: function toOptions(data) {
	        var result = [];
	        if (utils.typeof(data, 'array')) {
	            // ['value', 'value2']
	            if (utils.typeof(data[0], ['string', 'number', 'boolean'])) {
	                result = utils.distinct(data).map(function (v) {
	                    return { label: v, value: v };
	                });
	                // 如果数据无需格式化，直接返回
	            } else if (data[0] && data[0].label !== undefined && data[0].value !== undefined) {
	                result = data;
	                // 可以处理以下几种格式的数据
	                // {label: 'a', value: 1}
	                // {key: 1, value: 'a'}
	                // {id: 1, name: 'a'}
	            } else {
	                result = data.map(function (v) {
	                    return v.key !== undefined && v.value !== undefined ? v.children ? { label: v.value, value: v.key, children: utils.toOptions(v.children) } : { label: v.value, value: v.key } : v.id !== undefined && v.name !== undefined ? v.children ? { label: v.name, value: v.id, children: utils.toOptions(v.children) } : { label: v.name, value: v.id } : v;
	                });
	            }
	        } else if (utils.typeof(data, 'object')) {
	            // {key: value}
	            for (var i in data) {
	                // 如果 data 的值还是对象，则不是简单的键值对，很可能是 键-原数据对象 的结构
	                if (utils.typeof(data[i], 'object')) {
	                    return utils.toOptions(Object.values(data));
	                }
	                var item = {
	                    label: data[i],
	                    value: i
	                };
	                // true 选项移到首位
	                if (i.toString().toLowerCase() === 'true') {
	                    result.unshift(item);
	                } else {
	                    result.push(item);
	                }
	            }
	        }
	        return result;
	    },

	    // 从options结构中取值并形成一个新的数组（或者是类似于options的结构）
	    // 可以取value或label
	    // fromOptions(data, propName) {
	    //     let format = utils.toOptions(data);
	    //     return format.map(item=>item[propName]);
	    // },
	    // 获取options数据中的第一个值
	    getFirstOption: function getFirstOption(data) {
	        var format = utils.toOptions(data);
	        if (format[0]) {
	            return format[0].value;
	        }
	    },

	    // 把数据格式化成json展示
	    prettyJson: function prettyJson(data, origin) {
	        if (origin) {
	            return utils.syntaxHighlight(data);
	        }
	        return {
	            type: 'pre',
	            className: 'json',
	            dangerouslySetInnerHTML: { __html: utils.syntaxHighlight(data) }
	        };
	    },

	    // 根据一个字符串，生成一个深层的对象
	    // 例如：根据 a.b.c 生成 {a:{b:{c: 1}}}
	    generateObject: function generateObject(strc, value) {
	        var tData = value;
	        // 如果 strc 为空，则返回 value 本身
	        if (strc) {
	            var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;

	            try {
	                for (var _iterator8 = strc.split('.').reverse()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                    var v = _step8.value;

	                    tData = _defineProperty({}, v, tData);
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
	        }
	        return tData;
	    },

	    // 根据一个字符串，从一个深层的对象中取数据
	    // 例如：根据 a.b.c 从对象 {a:{b:{c: 1}}} 中取出 1
	    fromObject: function fromObject(strc, obj) {
	        var target = obj;
	        // 如果 strc 为空字符串，则返回 obj 本身
	        if (strc) {
	            var _iteratorNormalCompletion9 = true;
	            var _didIteratorError9 = false;
	            var _iteratorError9 = undefined;

	            try {
	                for (var _iterator9 = strc.split('.')[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                    var v = _step9.value;

	                    if (!target || !utils.typeof(target, 'object')) {
	                        return undefined;
	                    }
	                    target = target[v];
	                }
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
	        }
	        return target;
	    },

	    // 根据一个字符串，把数据塞入一个深层的对象中
	    toObject: function toObject(origin, strc, value) {
	        var tData = utils.generateObject(strc, value);
	        var level = strc.split('.').length;
	        utils.merge(level, origin, tData);
	    },

	    // 根据一个字符串，把数据从一个深层的对象中删除
	    delFromObject: function delFromObject(strc, obj) {
	        var lastKey = strc;
	        var target = obj;
	        // 如果 strc 为空字符串，则返回 obj 本身
	        if (strc && strc.lastIndexOf('.') > -1) {
	            lastKey = strc.slice(strc.lastIndexOf('.') + 1);
	            var prestrc = strc.slice(0, strc.lastIndexOf('.'));
	            target = utils.fromObject(prestrc, obj);
	        }
	        target && delete target[lastKey];
	        return obj;
	    },

	    // url中如果有类似于`:id`这种形式的动态参数，则替换成对应的参数值
	    urlAnalysis: function urlAnalysis(url, params) {
	        var delParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	        if (!url || url.indexOf(':') === -1 || !utils.typeof(params, 'object')) {
	            return url;
	        }
	        var matched = '';
	        for (var i in params) {
	            // 匹配一个最长的
	            if (url.indexOf(':' + i) > -1 && matched.length < i.length) {
	                matched = i;
	            }
	        }
	        if (matched) {
	            url = url.replace(':' + matched, params[matched]);
	            delParams && delete params[matched];
	            url = utils.urlAnalysis(url, params, delParams);
	        }
	        return url;
	    },

	    // 想某个对象上的某个函数注入额外逻辑
	    // 参数依次为 父级、目标函数、新函数、是否把原来逻辑提前、bind的对象
	    inject: function inject(parent, target, newFunc) {
	        var oldAhead = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	        var utilsObj = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

	        var origin = parent[target];
	        parent[target] = !!origin ? function () {
	            for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                params[_key2] = arguments[_key2];
	            }

	            // return原函数执行结果
	            var result = void 0;
	            oldAhead ? result = origin.call.apply(origin, [utilsObj].concat(params)) : null;
	            // 如果注入的逻辑返回false，可阻止原函数的继续执行（前提是原函数后执行）
	            var newResult = newFunc.call.apply(newFunc, [utilsObj].concat(params));
	            !oldAhead && newResult !== false ? result = origin.call.apply(origin, [utilsObj].concat(params)) : null;
	            // TODO: 返回哪个结果有待斟酌，目前代码之间的相互限制有点多
	            //  好像还不能随便return，比如可能会得到预期之外的结果
	            // return result || newResult;
	            return result;
	        } : utilsObj ? newFunc.bind(utilsObj) : newFunc;
	        // 被替换函数标记
	        parent[target].replaced = true;
	        return parent;
	    },

	    // 延迟执行
	    // debounce(func, delay) {
	    // }
	    getCache: function getCache(key) {
	        var result = localStorage.getItem(key);
	        if (result) {
	            return JSON.parse(result);
	        } else {
	            return result;
	        }
	    },
	    setCache: function setCache(key, value) {
	        value = JSON.stringify(value);
	        return localStorage.setItem(key, value);
	    },
	    getSession: function getSession(key) {
	        var result = sessionStorage.getItem(key);
	        if (result) {
	            return JSON.parse(result);
	        } else {
	            return result;
	        }
	    },
	    setSession: function setSession(key, value) {
	        value = JSON.stringify(value);
	        return sessionStorage.setItem(key, value);
	    },

	    // 遍历一个数组，从数组里取出某两个字段，组合成键值对数据
	    // 如更不传valueName，则相当于把keyName的值提出来当key，整条数据为value
	    detachToMap: function detachToMap(arr, keyName) {
	        var valueName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	        var obj = {};
	        utils.each(arr, function (v) {
	            v[keyName] && (obj[v[keyName]] = valueName ? v[valueName] : v);
	        });
	        return obj;
	    },

	    // 多变参数格式化工具，保证格式化后必需为对象
	    //  使用场景，参数既可以为一个对象，也可以简写为某个对象的属性，不管使用哪种方式，此函数可以统一格式成对象的形式
	    //  第一个参数为参数值，第二个参数为简写时对应的属性名称
	    // 例如：api/source/control 系列参数，api即可以写成一个url字符串，也可以是一个对象
	    varietyFormat: function varietyFormat() {
	        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        var attr = arguments[1];

	        if (!utils.typeof(value, 'object')) {
	            value = _defineProperty({}, attr, value);
	        }
	        return value;
	    },

	    // 重试功能
	    // 间隔 interval 的时间，重试 time 次，直到 func 执行成功
	    // 如果func返回false，则继续重试。否则终止重试
	    retry: function retry(func) {
	        var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
	        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

	        var count = 1;
	        var handler = function handler() {
	            var result = func();
	            if (result !== false || count > time) {
	                return result;
	            } else {
	                setTimeout(handler, interval);
	            }
	            count++;
	        };
	        handler();
	    },

	    // 批量绑定对象中函数的执行环境
	    batchBind: function batchBind(obj, target) {
	        var result = {};
	        for (var i in obj) {
	            if (obj.hasOwnProperty(i) && utils.typeof(obj[i], 'function')) {
	                result[i] = obj[i].bind(target);
	            } else {
	                result[i] = obj[i];
	            }
	        }
	        return result;
	    },

	    // 时间格式化，将秒转换成时/分/秒
	    timeFormatter: function timeFormatter() {
	        var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	        var result = '';
	        var hours = Math.floor(seconds / (60 * 60));
	        if (hours > 0) {
	            result += hours + '小时';
	            seconds = seconds % (60 * 60);
	        }
	        var minutes = Math.floor(seconds / 60);
	        if (hours > 0 || minutes > 0) {
	            result += minutes + '分';
	            seconds = seconds % 60;
	        }
	        result += seconds + '秒';
	        return result;
	    },


	    /************************************************************************/
	    // 私有方法
	    syntaxHighlight: function syntaxHighlight(json) {
	        if (typeof json !== 'string') {
	            json = JSON.stringify(json, undefined, 4);
	        }
	        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
	        var reg = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g;
	        return json.replace(reg, function (match) {
	            var cls = 'number';
	            if (/^"/.test(match)) {
	                if (/:$/.test(match)) {
	                    cls = 'key';
	                } else {
	                    try {
	                        var type = JSON.parse(match);
	                        if (_typeof2(JSON.parse(type)) === 'object') {
	                            return utils.syntaxHighlight(JSON.parse(type));
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
	});

	exports.default = utils;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {//     Underscore.js 1.9.1
	//     http://underscorejs.org
	//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` (`self`) in the browser, `global`
	  // on the server, or `this` in some virtual machines. We use `self`
	  // instead of `window` for `WebWorker` support.
	  var root = typeof self == 'object' && self.self === self && self ||
	            typeof global == 'object' && global.global === global && global ||
	            this ||
	            {};

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
	  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

	  // Create quick reference variables for speed access to core prototypes.
	  var push = ArrayProto.push,
	      slice = ArrayProto.slice,
	      toString = ObjProto.toString,
	      hasOwnProperty = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var nativeIsArray = Array.isArray,
	      nativeKeys = Object.keys,
	      nativeCreate = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for their old module API. If we're in
	  // the browser, add `_` as a global object.
	  // (`nodeType` is checked to ensure that `module`
	  // and `exports` are not HTML elements.)
	  if (typeof exports != 'undefined' && !exports.nodeType) {
	    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.9.1';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      // The 2-argument case is omitted because we’re not using it.
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  var builtinIteratee;

	  // An internal function to generate callbacks that can be applied to each
	  // element in a collection, returning the desired result — either `identity`,
	  // an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
	    return _.property(value);
	  };

	  // External wrapper for our callback generator. Users may customize
	  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
	  // This abstraction hides the internal-only argCount argument.
	  _.iteratee = builtinIteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // Some functions take a variable number of arguments, or a few expected
	  // arguments at the beginning and then a variable number of values to operate
	  // on. This helper accumulates all remaining arguments past the function’s
	  // argument length (or an explicit `startIndex`), into an array that becomes
	  // the last argument. Similar to ES6’s "rest parameter".
	  var restArguments = function(func, startIndex) {
	    startIndex = startIndex == null ? func.length - 1 : +startIndex;
	    return function() {
	      var length = Math.max(arguments.length - startIndex, 0),
	          rest = Array(length),
	          index = 0;
	      for (; index < length; index++) {
	        rest[index] = arguments[index + startIndex];
	      }
	      switch (startIndex) {
	        case 0: return func.call(this, rest);
	        case 1: return func.call(this, arguments[0], rest);
	        case 2: return func.call(this, arguments[0], arguments[1], rest);
	      }
	      var args = Array(startIndex + 1);
	      for (index = 0; index < startIndex; index++) {
	        args[index] = arguments[index];
	      }
	      args[startIndex] = rest;
	      return func.apply(this, args);
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var shallowProperty = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  var has = function(obj, path) {
	    return obj != null && hasOwnProperty.call(obj, path);
	  }

	  var deepGet = function(obj, path) {
	    var length = path.length;
	    for (var i = 0; i < length; i++) {
	      if (obj == null) return void 0;
	      obj = obj[path[i]];
	    }
	    return length ? obj : void 0;
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object.
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = shallowProperty('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  var createReduce = function(dir) {
	    // Wrap code that reassigns argument variables in a separate function than
	    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
	    var reducer = function(obj, iteratee, memo, initial) {
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      if (!initial) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    };

	    return function(obj, iteratee, memo, context) {
	      var initial = arguments.length >= 3;
	      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
	    };
	  };

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
	    var key = keyFinder(obj, predicate, context);
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = restArguments(function(obj, path, args) {
	    var contextPath, func;
	    if (_.isFunction(path)) {
	      func = path;
	    } else if (_.isArray(path)) {
	      contextPath = path.slice(0, -1);
	      path = path[path.length - 1];
	    }
	    return _.map(obj, function(context) {
	      var method = func;
	      if (!method) {
	        if (contextPath && contextPath.length) {
	          context = deepGet(context, contextPath);
	        }
	        if (context == null) return void 0;
	        method = context[path];
	      }
	      return method == null ? method : method.apply(context, args);
	    });
	  });

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value != null && value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(v, index, list) {
	        computed = iteratee(v, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = v;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value != null && value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(v, index, list) {
	        computed = iteratee(v, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = v;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection.
	  _.shuffle = function(obj) {
	    return _.sample(obj, Infinity);
	  };

	  // Sample **n** random values from a collection using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
	    var length = getLength(sample);
	    n = Math.max(Math.min(n, length), 0);
	    var last = length - 1;
	    for (var index = 0; index < n; index++) {
	      var rand = _.random(index, last);
	      var temp = sample[index];
	      sample[index] = sample[rand];
	      sample[rand] = temp;
	    }
	    return sample.slice(0, n);
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    var index = 0;
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, key, list) {
	      return {
	        value: value,
	        index: index++,
	        criteria: iteratee(value, key, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior, partition) {
	    return function(obj, iteratee, context) {
	      var result = partition ? [[], []] : {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (has(result, key)) result[key]++; else result[key] = 1;
	  });

	  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (_.isString(obj)) {
	      // Keep surrogate pair characters together
	      return obj.match(reStrSymbol);
	    }
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = group(function(result, value, pass) {
	    result[pass ? 0 : 1].push(value);
	  }, true);

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null || array.length < 1) return n == null ? void 0 : [];
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null || array.length < 1) return n == null ? void 0 : [];
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, Boolean);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, output) {
	    output = output || [];
	    var idx = output.length;
	    for (var i = 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        // Flatten current level of array or arguments object.
	        if (shallow) {
	          var j = 0, len = value.length;
	          while (j < len) output[idx++] = value[j++];
	        } else {
	          flatten(value, shallow, strict, output);
	          idx = output.length;
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = restArguments(function(array, otherArrays) {
	    return _.difference(array, otherArrays);
	  });

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // The faster algorithm will not work with an iteratee if the iteratee
	  // is not a one-to-one function, so providing an iteratee will disable
	  // the faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted && !iteratee) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = restArguments(function(arrays) {
	    return _.uniq(flatten(arrays, true, true));
	  });

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      var j;
	      for (j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = restArguments(function(array, rest) {
	    rest = flatten(rest, true, true);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  });

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices.
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = restArguments(_.unzip);

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values. Passing by pairs is the reverse of _.pairs.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions.
	  var createPredicateIndexFinder = function(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  };

	  // Returns the first index on an array-like that passes a predicate test.
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions.
	  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	          i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  };

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    if (!step) {
	      step = stop < start ? -1 : 1;
	    }

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Chunk a single array into multiple arrays, each containing `count` or fewer
	  // items.
	  _.chunk = function(array, count) {
	    if (count == null || count < 1) return [];
	    var result = [];
	    var i = 0, length = array.length;
	    while (i < length) {
	      result.push(slice.call(array, i, i += count));
	    }
	    return result;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments.
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = restArguments(function(func, context, args) {
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var bound = restArguments(function(callArgs) {
	      return executeBound(func, bound, context, this, args.concat(callArgs));
	    });
	    return bound;
	  });

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder by default, allowing any combination of arguments to be
	  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
	  _.partial = restArguments(function(func, boundArgs) {
	    var placeholder = _.partial.placeholder;
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  });

	  _.partial.placeholder = _;

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = restArguments(function(obj, keys) {
	    keys = flatten(keys, false, false);
	    var index = keys.length;
	    if (index < 1) throw new Error('bindAll must be passed function names');
	    while (index--) {
	      var key = keys[index];
	      obj[key] = _.bind(obj[key], obj);
	    }
	  });

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = restArguments(function(func, wait, args) {
	    return setTimeout(function() {
	      return func.apply(null, args);
	    }, wait);
	  });

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var timeout, context, args, result;
	    var previous = 0;
	    if (!options) options = {};

	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };

	    var throttled = function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };

	    throttled.cancel = function() {
	      clearTimeout(timeout);
	      previous = 0;
	      timeout = context = args = null;
	    };

	    return throttled;
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, result;

	    var later = function(context, args) {
	      timeout = null;
	      if (args) result = func.apply(context, args);
	    };

	    var debounced = restArguments(function(args) {
	      if (timeout) clearTimeout(timeout);
	      if (immediate) {
	        var callNow = !timeout;
	        timeout = setTimeout(later, wait);
	        if (callNow) result = func.apply(this, args);
	      } else {
	        timeout = _.delay(later, wait, this, args);
	      }

	      return result;
	    });

	    debounced.cancel = function() {
	      clearTimeout(timeout);
	      timeout = null;
	    };

	    return debounced;
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  _.restArguments = restArguments;

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  var collectNonEnumProps = function(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  };

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`.
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object.
	  // In contrast to _.map it returns an object.
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = _.keys(obj),
	        length = keys.length,
	        results = {};
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys[index];
	      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  // The opposite of _.object.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`.
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, defaults) {
	    return function(obj) {
	      var length = arguments.length;
	      if (defaults) obj = Object(obj);
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!defaults || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s).
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test.
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Internal pick helper function to determine if `obj` has key `key`.
	  var keyInObj = function(value, key, obj) {
	    return key in obj;
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = restArguments(function(obj, keys) {
	    var result = {}, iteratee = keys[0];
	    if (obj == null) return result;
	    if (_.isFunction(iteratee)) {
	      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
	      keys = _.allKeys(obj);
	    } else {
	      iteratee = keyInObj;
	      keys = flatten(keys, false, false);
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  });

	  // Return a copy of the object without the blacklisted properties.
	  _.omit = restArguments(function(obj, keys) {
	    var iteratee = keys[0], context;
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	      if (keys.length > 1) context = keys[1];
	    } else {
	      keys = _.map(flatten(keys, false, false), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  });

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq, deepEq;
	  eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // `null` or `undefined` only equal to itself (strict comparison).
	    if (a == null || b == null) return false;
	    // `NaN`s are equivalent, but non-reflexive.
	    if (a !== a) return b !== b;
	    // Exhaust primitive checks
	    var type = typeof a;
	    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
	    return deepEq(a, b, aStack, bStack);
	  };

	  // Internal recursive comparison function for `isEqual`.
	  deepEq = function(a, b, aStack, bStack) {
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN.
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	      case '[object Symbol]':
	        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
	  var nodelist = root.document && root.document.childNodes;
	  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`?
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && isNaN(obj);
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, path) {
	    if (!_.isArray(path)) {
	      return has(obj, path);
	    }
	    var length = path.length;
	    for (var i = 0; i < length; i++) {
	      var key = path[i];
	      if (obj == null || !hasOwnProperty.call(obj, key)) {
	        return false;
	      }
	      obj = obj[key];
	    }
	    return !!length;
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  // Creates a function that, when passed an object, will traverse that object’s
	  // properties down the given `path`, specified as an array of keys or indexes.
	  _.property = function(path) {
	    if (!_.isArray(path)) {
	      return shallowProperty(path);
	    }
	    return function(obj) {
	      return deepGet(obj, path);
	    };
	  };

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    if (obj == null) {
	      return function(){};
	    }
	    return function(path) {
	      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	  // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped.
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // Traverses the children of `obj` along `path`. If a child is a function, it
	  // is invoked with its parent as context. Returns the value of the final
	  // child, or `fallback` if any child is undefined.
	  _.result = function(obj, path, fallback) {
	    if (!_.isArray(path)) path = [path];
	    var length = path.length;
	    if (!length) {
	      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
	    }
	    for (var i = 0; i < length; i++) {
	      var prop = obj == null ? void 0 : obj[path[i]];
	      if (prop === void 0) {
	        prop = fallback;
	        i = length; // Ensure we don't continue iterating.
	      }
	      obj = _.isFunction(prop) ? prop.call(obj) : prop;
	    }
	    return obj;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate: /<%([\s\S]+?)%>/g,
	    interpolate: /<%=([\s\S]+?)%>/g,
	    escape: /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'": "'",
	    '\\': '\\',
	    '\r': 'r',
	    '\n': 'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offset.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    var render;
	    try {
	      render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var chainResult = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return chainResult(this, func.apply(_, args));
	      };
	    });
	    return _;
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return chainResult(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return chainResult(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return String(this._wrapped);
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(87)(module)))

/***/ }),
/* 87 */
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
/* 88 */
/***/ (function(module, exports) {

	module.exports = window.DLL.moment;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reqwest = __webpack_require__(90);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _utils = __webpack_require__(85);

	var _utils2 = _interopRequireDefault(_utils);

	var _axios = __webpack_require__(92);

	var _axios2 = _interopRequireDefault(_axios);

	var _ajaxPlugin = __webpack_require__(120);

	var _instance = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 依赖 Config, AjaxCache 两个实例，通过generete获取
	exports.default = (0, _instance.generate)(['Config', 'AjaxCache', 'ModelCache'], function (Config, AjaxCache, ModelCache) {

	    // 通用ajax函数，参数为一个对象
	    function request(conf) {
	        var config = _utils2.default.clone(conf);
	        // 兼容，合并两个参数
	        if (config.data) {
	            config.params = Object.assign({}, config.params, config.data);
	            delete config.data;
	        }
	        var globalAjax = Config.get('global.ajax');
	        var mockMap = Config.get('global.mock');

	        // 检查是否中断请求，如果有中断请求的钩子，则完全不会进入获取数据的逻辑
	        if ((0, _ajaxPlugin.checkInterrupt)(config)) {
	            return;
	        }
	        // 第一次调用接口时，检查是否有本地缓存
	        // remind,必须放在checkCache之前，保证success调用是不会受缓存的影响
	        if ((0, _ajaxPlugin.checkLocalStorage)(config, AjaxCache)) {
	            return;
	        }
	        // 检查是否有缓存，如果有，则直接中断后续逻辑
	        if ((0, _ajaxPlugin.checkCache)(config, AjaxCache)) {
	            return;
	        }
	        // 检查当前是否已有相同的请求正在进行中，如果有，则进行请求合并并中断
	        if ((0, _ajaxPlugin.checkQueue)(config)) {
	            return;
	        }

	        // onchange 为请求前后执行，开始执行请求返回参数true，请求完成返回参数false
	        var onchange = config.onchange || function () {};
	        // successHandler
	        var tmpSuccess = config.success || function () {};
	        var successHandler = function successHandler(data, res) {
	            for (var _len = arguments.length, p = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                p[_key - 2] = arguments[_key];
	            }

	            onchange(false, 'success');
	            // 全局数据处理函数，若进行了配置，则全部数据都会先经过此函数处理
	            if (globalAjax.handler) {
	                data = globalAjax.handler(data, res, config);
	            }
	            return tmpSuccess.apply(undefined, [data, res].concat(p));
	        };
	        // errorHandler
	        // 如果是null或者false等，则不执行错误处理；如果是true，则执行默认错误处理
	        var tmpError = config.error;
	        if ([null, false].indexOf(tmpError) > -1) {
	            tmpError = function tmpError() {};
	        }
	        tmpError = config.error === true ? _ajaxPlugin.errorMessage : config.error;
	        var errorHandler = function errorHandler() {
	            onchange(false, 'error');
	            return tmpError.apply(undefined, arguments);
	        };
	        // onerror 处理逻辑
	        var onerror = function onerror(err) {
	            // 如果用户配置了error处理逻辑，则全部按照用户配置的逻辑做处理
	            var result = void 0;
	            if (globalAjax.error) {
	                result = globalAjax.error(err, errorHandler, config);
	            } else {
	                result = errorHandler(err);
	            }
	            // handler有返回值，则执行默认错误提示
	            if (result !== false) {
	                if (result === true || result === undefined) {
	                    (0, _ajaxPlugin.errorMessage)(err);
	                } else {
	                    (0, _ajaxPlugin.errorMessage)(result);
	                }
	            }
	        };

	        // 配置合并
	        config = Object.assign({ method: 'get', type: 'json' }, globalAjax, config);
	        // 复制一份，防止url解析时更改原数据
	        var params = Object.assign({}, config.params, config.data);
	        var final = Object.assign({}, config, {
	            // 原始配置,mock中使用
	            originConf: config,
	            // url中可以使用来自 params 或 uf.config.data 中的动态参数
	            // params中的数据取完会从params中移除，uf.config.data 会保留原数据
	            url: _utils2.default.urlAnalysis(_utils2.default.urlAnalysis(config.url, params), ModelCache.get(), false),
	            // data 可能来自 globalAjax
	            data: params,
	            success: function success(res) {
	                // 如果用户配置了success处理逻辑，则全部按照用户配置的逻辑做处理
	                // 与 globalAjax.error 的处理逻辑稍微有点区别，error执行完之后还有默认处理逻辑，所以根据返回结果进行判断
	                // 而 globalAjax.success 的处理是直接截断，并传入调用处定义的成功与失败的回调
	                if (globalAjax.success) {
	                    var result = globalAjax.success(res, successHandler, errorHandler, config);
	                    if (result !== true) {
	                        return;
	                    }
	                }
	                // 默认成功处理逻辑
	                // 如果接口无返回值，则res为http实例
	                if (res instanceof XMLHttpRequest) {
	                    onerror({ msg: '接口未返回任何数据' });
	                    // 如果data为null
	                } else if (config.verifyData && res.data === null) {
	                    onerror({ msg: '接口返回值为空' });
	                } else {
	                    // 兼容 message/msg、status/code
	                    res.status = res.status || res.code || 0;
	                    res.message = res.message || res.msg;
	                    res.msg = res.message;
	                    if (+res.status === 0) {
	                        successHandler(res.data, res);
	                    } else {
	                        onerror(res);
	                    }
	                }
	            },
	            error: function error(err) {
	                // 如果有response,则对response进行解码处理,并一起传给error函数
	                if (err.response) {
	                    var res = void 0;
	                    try {
	                        res = JSON.parse(err.response);
	                    } catch (e) {}
	                    err = Object.assign({}, err, res, { msg: res && res.message });
	                }
	                onerror(err);
	            }
	        });

	        // 检查是否有缓存，如果有，则直接中断后续逻辑
	        // if (checkCache(final, AjaxCache)) {
	        //     return;
	        // }
	        // // 检查当前是否已有相同的请求正在进行中，如果有，则进行请求合并并中断
	        // if (checkQueue(final)) {
	        //     return;
	        // }

	        onchange(true, 'sending');

	        // 检查是否有mock数据接口
	        if ((0, _ajaxPlugin.checkMock)(final, mockMap)) {
	            return;
	        }

	        // baseUrl 参数处理
	        if (globalAjax.baseUrl && final.url && final.url.indexOf('http://') === -1 && final.url.indexOf('https://') === -1) {
	            // 两个字符串连接时，自动添加或去除多余的斜线
	            var startReg = /^\//i;
	            var endReg = /\/$/i;
	            if (startReg.test(final.url) && endReg.test(globalAjax.baseUrl)) {
	                final.url = globalAjax.baseUrl + final.url.substr(1);
	            } else if (!startReg.test(final.url) && !endReg.test(globalAjax.baseUrl)) {
	                final.url = globalAjax.baseUrl + '/' + final.url;
	            } else {
	                final.url = globalAjax.baseUrl + final.url;
	            }
	        }
	        // 发送请求前，用户可配置通用参数处理方法，比如把传入的参数序列化
	        if (globalAjax.beforeSend) {
	            globalAjax.beforeSend(final);
	        }

	        if (final.useAxios) {
	            return (0, _axios2.default)(final);
	        }
	        // console.log(final);
	        return (0, _reqwest2.default)(final);
	    }

	    request.init = function (url, method) {
	        return function (params, success, error, onchange) {
	            return request({ url: url, method: method, params: params, success: success, error: error, onchange: onchange });
	        };
	    };

	    // 增加 RESTful 函数
	    var _arr = ['get', 'post', 'put', 'delete'];

	    var _loop = function _loop() {
	        var v = _arr[_i];
	        request[v] = function (url, params, success, error, onchange) {
	            return request.init(url, v)(params, success, error, onchange);
	        };
	    };

	    for (var _i = 0; _i < _arr.length; _i++) {
	        _loop();
	    }

	    // 抛出错误处理函数
	    request.errorMessage = _ajaxPlugin.errorMessage;

	    return request;
	});
	// export default request;
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
	 *              complete:
	 *
	 * @author liuzechun@baidu.com
	 * **/

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Reqwest! A general purpose XHR connection manager
	  * license MIT (c) Dustin Diaz 2015
	  * https://github.com/ded/reqwest
	  */

	!function (name, context, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else context[name] = definition()
	}('reqwest', this, function () {

	  var context = this

	  if ('window' in context) {
	    var doc = document
	      , byTag = 'getElementsByTagName'
	      , head = doc[byTag]('head')[0]
	  } else {
	    var XHR2
	    try {
	      XHR2 = __webpack_require__(91)
	    } catch (ex) {
	      throw new Error('Peer dependency `xhr2` required! Please npm install xhr2')
	    }
	  }


	  var httpsRe = /^http/
	    , protocolRe = /(^\w+):\/\//
	    , twoHundo = /^(20\d|1223)$/ //http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	    , readyState = 'readyState'
	    , contentType = 'Content-Type'
	    , requestedWith = 'X-Requested-With'
	    , uniqid = 0
	    , callbackPrefix = 'reqwest_' + (+new Date())
	    , lastValue // data stored by the most recent JSONP callback
	    , xmlHttpRequest = 'XMLHttpRequest'
	    , xDomainRequest = 'XDomainRequest'
	    , noop = function () {}

	    , isArray = typeof Array.isArray == 'function'
	        ? Array.isArray
	        : function (a) {
	            return a instanceof Array
	          }

	    , defaultHeaders = {
	          'contentType': 'application/x-www-form-urlencoded'
	        , 'requestedWith': xmlHttpRequest
	        , 'accept': {
	              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
	            , 'xml':  'application/xml, text/xml'
	            , 'html': 'text/html'
	            , 'text': 'text/plain'
	            , 'json': 'application/json, text/javascript'
	            , 'js':   'application/javascript, text/javascript'
	          }
	      }

	    , xhr = function(o) {
	        // is it x-domain
	        if (o['crossOrigin'] === true) {
	          var xhr = context[xmlHttpRequest] ? new XMLHttpRequest() : null
	          if (xhr && 'withCredentials' in xhr) {
	            return xhr
	          } else if (context[xDomainRequest]) {
	            return new XDomainRequest()
	          } else {
	            throw new Error('Browser does not support cross-origin requests')
	          }
	        } else if (context[xmlHttpRequest]) {
	          return new XMLHttpRequest()
	        } else if (XHR2) {
	          return new XHR2()
	        } else {
	          return new ActiveXObject('Microsoft.XMLHTTP')
	        }
	      }
	    , globalSetupOptions = {
	        dataFilter: function (data) {
	          return data
	        }
	      }

	  function succeed(r) {
	    var protocol = protocolRe.exec(r.url)
	    protocol = (protocol && protocol[1]) || context.location.protocol
	    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response
	  }

	  function handleReadyState(r, success, error) {
	    return function () {
	      // use _aborted to mitigate against IE err c00c023f
	      // (can't read props on aborted request objects)
	      if (r._aborted) return error(r.request)
	      if (r._timedOut) return error(r.request, 'Request is aborted: timeout')
	      if (r.request && r.request[readyState] == 4) {
	        r.request.onreadystatechange = noop
	        if (succeed(r)) success(r.request)
	        else
	          error(r.request)
	      }
	    }
	  }

	  function setHeaders(http, o) {
	    var headers = o['headers'] || {}
	      , h

	    headers['Accept'] = headers['Accept']
	      || defaultHeaders['accept'][o['type']]
	      || defaultHeaders['accept']['*']

	    var isAFormData = typeof FormData !== 'undefined' && (o['data'] instanceof FormData);
	    // breaks cross-origin requests with legacy browsers
	    if (!o['crossOrigin'] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders['requestedWith']
	    if (!headers[contentType] && !isAFormData) headers[contentType] = o['contentType'] || defaultHeaders['contentType']
	    for (h in headers)
	      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
	  }

	  function setCredentials(http, o) {
	    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
	      http.withCredentials = !!o['withCredentials']
	    }
	  }

	  function generalCallback(data) {
	    lastValue = data
	  }

	  function urlappend (url, s) {
	    return url + (/\?/.test(url) ? '&' : '?') + s
	  }

	  function handleJsonp(o, fn, err, url) {
	    var reqId = uniqid++
	      , cbkey = o['jsonpCallback'] || 'callback' // the 'callback' key
	      , cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId)
	      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
	      , match = url.match(cbreg)
	      , script = doc.createElement('script')
	      , loaded = 0
	      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1

	    if (match) {
	      if (match[3] === '?') {
	        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
	      } else {
	        cbval = match[3] // provided callback func name
	      }
	    } else {
	      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
	    }

	    context[cbval] = generalCallback

	    script.type = 'text/javascript'
	    script.src = url
	    script.async = true
	    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
	      // need this for IE due to out-of-order onreadystatechange(), binding script
	      // execution to an event listener gives us control over when the script
	      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
	      script.htmlFor = script.id = '_reqwest_' + reqId
	    }

	    script.onload = script.onreadystatechange = function () {
	      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
	        return false
	      }
	      script.onload = script.onreadystatechange = null
	      script.onclick && script.onclick()
	      // Call the user callback with the last value stored and clean up values and scripts.
	      fn(lastValue)
	      lastValue = undefined
	      head.removeChild(script)
	      loaded = 1
	    }

	    // Add the script to the DOM head
	    head.appendChild(script)

	    // Enable JSONP timeout
	    return {
	      abort: function () {
	        script.onload = script.onreadystatechange = null
	        err({}, 'Request is aborted: timeout', {})
	        lastValue = undefined
	        head.removeChild(script)
	        loaded = 1
	      }
	    }
	  }

	  function getRequest(fn, err) {
	    var o = this.o
	      , method = (o['method'] || 'GET').toUpperCase()
	      , url = typeof o === 'string' ? o : o['url']
	      // convert non-string objects to query-string form unless o['processData'] is false
	      , data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string')
	        ? reqwest.toQueryString(o['data'])
	        : (o['data'] || null)
	      , http
	      , sendWait = false

	    // if we're working on a GET request and we have data then we should append
	    // query string to end of URL and not post data
	    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
	      url = urlappend(url, data)
	      data = null
	    }

	    if (o['type'] == 'jsonp') return handleJsonp(o, fn, err, url)

	    // get the xhr from the factory if passed
	    // if the factory returns null, fall-back to ours
	    http = (o.xhr && o.xhr(o)) || xhr(o)

	    http.open(method, url, o['async'] === false ? false : true)
	    setHeaders(http, o)
	    setCredentials(http, o)
	    if (context[xDomainRequest] && http instanceof context[xDomainRequest]) {
	        http.onload = fn
	        http.onerror = err
	        // NOTE: see
	        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
	        http.onprogress = function() {}
	        sendWait = true
	    } else {
	      http.onreadystatechange = handleReadyState(this, fn, err)
	    }
	    o['before'] && o['before'](http)
	    if (sendWait) {
	      setTimeout(function () {
	        http.send(data)
	      }, 200)
	    } else {
	      http.send(data)
	    }
	    return http
	  }

	  function Reqwest(o, fn) {
	    this.o = o
	    this.fn = fn

	    init.apply(this, arguments)
	  }

	  function setType(header) {
	    // json, javascript, text/plain, text/html, xml
	    if (header === null) return undefined; //In case of no content-type.
	    if (header.match('json')) return 'json'
	    if (header.match('javascript')) return 'js'
	    if (header.match('text')) return 'html'
	    if (header.match('xml')) return 'xml'
	  }

	  function init(o, fn) {

	    this.url = typeof o == 'string' ? o : o['url']
	    this.timeout = null

	    // whether request has been fulfilled for purpose
	    // of tracking the Promises
	    this._fulfilled = false
	    // success handlers
	    this._successHandler = function(){}
	    this._fulfillmentHandlers = []
	    // error handlers
	    this._errorHandlers = []
	    // complete (both success and fail) handlers
	    this._completeHandlers = []
	    this._erred = false
	    this._responseArgs = {}

	    var self = this

	    fn = fn || function () {}

	    if (o['timeout']) {
	      this.timeout = setTimeout(function () {
	        timedOut()
	      }, o['timeout'])
	    }

	    if (o['success']) {
	      this._successHandler = function () {
	        o['success'].apply(o, arguments)
	      }
	    }

	    if (o['error']) {
	      this._errorHandlers.push(function () {
	        o['error'].apply(o, arguments)
	      })
	    }

	    if (o['complete']) {
	      this._completeHandlers.push(function () {
	        o['complete'].apply(o, arguments)
	      })
	    }

	    function complete (resp) {
	      o['timeout'] && clearTimeout(self.timeout)
	      self.timeout = null
	      while (self._completeHandlers.length > 0) {
	        self._completeHandlers.shift()(resp)
	      }
	    }

	    function success (resp) {
	      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type')) // resp can be undefined in IE
	      resp = (type !== 'jsonp') ? self.request : resp
	      // use global data filter on response text
	      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
	        , r = filteredResponse
	      try {
	        resp.responseText = r
	      } catch (e) {
	        // can't assign this in IE<=8, just ignore
	      }
	      if (r) {
	        switch (type) {
	        case 'json':
	          try {
	            resp = context.JSON ? context.JSON.parse(r) : eval('(' + r + ')')
	          } catch (err) {
	            return error(resp, 'Could not parse JSON in response', err)
	          }
	          break
	        case 'js':
	          resp = eval(r)
	          break
	        case 'html':
	          resp = r
	          break
	        case 'xml':
	          resp = resp.responseXML
	              && resp.responseXML.parseError // IE trololo
	              && resp.responseXML.parseError.errorCode
	              && resp.responseXML.parseError.reason
	            ? null
	            : resp.responseXML
	          break
	        }
	      }

	      self._responseArgs.resp = resp
	      self._fulfilled = true
	      fn(resp)
	      self._successHandler(resp)
	      while (self._fulfillmentHandlers.length > 0) {
	        resp = self._fulfillmentHandlers.shift()(resp)
	      }

	      complete(resp)
	    }

	    function timedOut() {
	      self._timedOut = true
	      self.request.abort()
	    }

	    function error(resp, msg, t) {
	      resp = self.request
	      self._responseArgs.resp = resp
	      self._responseArgs.msg = msg
	      self._responseArgs.t = t
	      self._erred = true
	      while (self._errorHandlers.length > 0) {
	        self._errorHandlers.shift()(resp, msg, t)
	      }
	      complete(resp)
	    }

	    this.request = getRequest.call(this, success, error)
	  }

	  Reqwest.prototype = {
	    abort: function () {
	      this._aborted = true
	      this.request.abort()
	    }

	  , retry: function () {
	      init.call(this, this.o, this.fn)
	    }

	    /**
	     * Small deviation from the Promises A CommonJs specification
	     * http://wiki.commonjs.org/wiki/Promises/A
	     */

	    /**
	     * `then` will execute upon successful requests
	     */
	  , then: function (success, fail) {
	      success = success || function () {}
	      fail = fail || function () {}
	      if (this._fulfilled) {
	        this._responseArgs.resp = success(this._responseArgs.resp)
	      } else if (this._erred) {
	        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
	      } else {
	        this._fulfillmentHandlers.push(success)
	        this._errorHandlers.push(fail)
	      }
	      return this
	    }

	    /**
	     * `always` will execute whether the request succeeds or fails
	     */
	  , always: function (fn) {
	      if (this._fulfilled || this._erred) {
	        fn(this._responseArgs.resp)
	      } else {
	        this._completeHandlers.push(fn)
	      }
	      return this
	    }

	    /**
	     * `fail` will execute when the request fails
	     */
	  , fail: function (fn) {
	      if (this._erred) {
	        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
	      } else {
	        this._errorHandlers.push(fn)
	      }
	      return this
	    }
	  , 'catch': function (fn) {
	      return this.fail(fn)
	    }
	  }

	  function reqwest(o, fn) {
	    return new Reqwest(o, fn)
	  }

	  // normalize newline variants according to spec -> CRLF
	  function normalize(s) {
	    return s ? s.replace(/\r?\n/g, '\r\n') : ''
	  }

	  function serial(el, cb) {
	    var n = el.name
	      , t = el.tagName.toLowerCase()
	      , optCb = function (o) {
	          // IE gives value="" even where there is no value attribute
	          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
	          if (o && !o['disabled'])
	            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']))
	        }
	      , ch, ra, val, i

	    // don't serialize elements that are disabled or without a name
	    if (el.disabled || !n) return

	    switch (t) {
	    case 'input':
	      if (!/reset|button|image|file/i.test(el.type)) {
	        ch = /checkbox/i.test(el.type)
	        ra = /radio/i.test(el.type)
	        val = el.value
	        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
	        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
	      }
	      break
	    case 'textarea':
	      cb(n, normalize(el.value))
	      break
	    case 'select':
	      if (el.type.toLowerCase() === 'select-one') {
	        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
	      } else {
	        for (i = 0; el.length && i < el.length; i++) {
	          el.options[i].selected && optCb(el.options[i])
	        }
	      }
	      break
	    }
	  }

	  // collect up all form elements found from the passed argument elements all
	  // the way down to child elements; pass a '<form>' or form fields.
	  // called with 'this'=callback to use for serial() on each element
	  function eachFormElement() {
	    var cb = this
	      , e, i
	      , serializeSubtags = function (e, tags) {
	          var i, j, fa
	          for (i = 0; i < tags.length; i++) {
	            fa = e[byTag](tags[i])
	            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
	          }
	        }

	    for (i = 0; i < arguments.length; i++) {
	      e = arguments[i]
	      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
	      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
	    }
	  }

	  // standard query string style serialization
	  function serializeQueryString() {
	    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
	  }

	  // { 'name': 'value', ... } style serialization
	  function serializeHash() {
	    var hash = {}
	    eachFormElement.apply(function (name, value) {
	      if (name in hash) {
	        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
	        hash[name].push(value)
	      } else hash[name] = value
	    }, arguments)
	    return hash
	  }

	  // [ { name: 'name', value: 'value' }, ... ] style serialization
	  reqwest.serializeArray = function () {
	    var arr = []
	    eachFormElement.apply(function (name, value) {
	      arr.push({name: name, value: value})
	    }, arguments)
	    return arr
	  }

	  reqwest.serialize = function () {
	    if (arguments.length === 0) return ''
	    var opt, fn
	      , args = Array.prototype.slice.call(arguments, 0)

	    opt = args.pop()
	    opt && opt.nodeType && args.push(opt) && (opt = null)
	    opt && (opt = opt.type)

	    if (opt == 'map') fn = serializeHash
	    else if (opt == 'array') fn = reqwest.serializeArray
	    else fn = serializeQueryString

	    return fn.apply(null, args)
	  }

	  reqwest.toQueryString = function (o, trad) {
	    var prefix, i
	      , traditional = trad || false
	      , s = []
	      , enc = encodeURIComponent
	      , add = function (key, value) {
	          // If value is a function, invoke it and return its value
	          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
	          s[s.length] = enc(key) + '=' + enc(value)
	        }
	    // If an array was passed in, assume that it is an array of form elements.
	    if (isArray(o)) {
	      for (i = 0; o && i < o.length; i++) add(o[i]['name'], o[i]['value'])
	    } else {
	      // If traditional, encode the "old" way (the way 1.3.2 or older
	      // did it), otherwise encode params recursively.
	      for (prefix in o) {
	        if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
	      }
	    }

	    // spaces should be + according to spec
	    return s.join('&').replace(/%20/g, '+')
	  }

	  function buildParams(prefix, obj, traditional, add) {
	    var name, i, v
	      , rbracket = /\[\]$/

	    if (isArray(obj)) {
	      // Serialize array item.
	      for (i = 0; obj && i < obj.length; i++) {
	        v = obj[i]
	        if (traditional || rbracket.test(prefix)) {
	          // Treat each array item as a scalar.
	          add(prefix, v)
	        } else {
	          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
	        }
	      }
	    } else if (obj && obj.toString() === '[object Object]') {
	      // Serialize object item.
	      for (name in obj) {
	        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
	      }

	    } else {
	      // Serialize scalar item.
	      add(prefix, obj)
	    }
	  }

	  reqwest.getcallbackPrefix = function () {
	    return callbackPrefix
	  }

	  // jQuery and Zepto compatibility, differences can be remapped here so you can call
	  // .ajax.compat(options, callback)
	  reqwest.compat = function (o, fn) {
	    if (o) {
	      o['type'] && (o['method'] = o['type']) && delete o['type']
	      o['dataType'] && (o['type'] = o['dataType'])
	      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback']
	      o['jsonp'] && (o['jsonpCallback'] = o['jsonp'])
	    }
	    return new Reqwest(o, fn)
	  }

	  reqwest.ajaxSetup = function (options) {
	    options = options || {}
	    for (var k in options) {
	      globalSetupOptions[k] = options[k]
	    }
	  }

	  return reqwest
	});


/***/ }),
/* 91 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (config) {
	    var conf = _utils2.default.filter(config, ['baseUrl', 'success', 'error', 'interrupt']);
	    conf.data = conf.params;
	    return (0, _axios2.default)(conf).then(function (response) {
	        config.success(response.data);
	    }, function (err) {
	        config.error(err.response.data || { message: '请求出错！' });
	    });
	};

	var _axios = __webpack_require__(93);

	var _axios2 = _interopRequireDefault(_axios);

	var _utils = __webpack_require__(85);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(94);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(95);
	var bind = __webpack_require__(96);
	var Axios = __webpack_require__(98);
	var defaults = __webpack_require__(99);

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
	axios.Cancel = __webpack_require__(117);
	axios.CancelToken = __webpack_require__(118);
	axios.isCancel = __webpack_require__(114);

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(119);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(96);
	var isBuffer = __webpack_require__(97);

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
/* 96 */
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
/* 97 */
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(99);
	var utils = __webpack_require__(95);
	var InterceptorManager = __webpack_require__(111);
	var dispatchRequest = __webpack_require__(112);

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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(95);
	var normalizeHeaderName = __webpack_require__(101);

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
	    adapter = __webpack_require__(102);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(102);
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(100)))

/***/ }),
/* 100 */
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(95);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(95);
	var settle = __webpack_require__(103);
	var buildURL = __webpack_require__(106);
	var parseHeaders = __webpack_require__(107);
	var isURLSameOrigin = __webpack_require__(108);
	var createError = __webpack_require__(104);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(109);

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
	      var cookies = __webpack_require__(110);

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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(100)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(104);

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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(105);

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
/* 105 */
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(95);

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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(95);

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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(95);

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
/* 109 */
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(95);

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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(95);

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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(95);
	var transformData = __webpack_require__(113);
	var isCancel = __webpack_require__(114);
	var defaults = __webpack_require__(99);
	var isAbsoluteURL = __webpack_require__(115);
	var combineURLs = __webpack_require__(116);

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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(95);

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
/* 114 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 115 */
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
/* 116 */
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
/* 117 */
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(117);

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
/* 119 */
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.errorMessage = errorMessage;
	exports.checkCache = checkCache;
	exports.checkLocalStorage = checkLocalStorage;
	exports.checkQueue = checkQueue;
	exports.checkMock = checkMock;
	exports.checkInterrupt = checkInterrupt;

	var _utils = __webpack_require__(85);

	var _utils2 = _interopRequireDefault(_utils);

	var _src = __webpack_require__(72);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @file Ajax 的插件，包含 数据缓存、请求合并、生成错误信息 等功能
	                                                                                                                                                                                                     * @author liuzechun@baidu.com
	                                                                                                                                                                                                     * **/

	// Ajajx队列，用于缓存待执行的 ajax 回调函数相关内容
	var ajaxQueue = {};

	var errorMsg = {
	    top: 24,
	    message: '请求出错',
	    description: '请求数据时出错，请稍后重试。',
	    duration: 3.5
	};

	// 获取错误信息
	function getErrorMsg(error) {
	    var message = void 0;
	    try {
	        if (_utils2.default.typeof(error, 'string')) {
	            message = error;
	        } else if (_utils2.default.typeof(error, 'object') && error.message) {
	            message = error.message;
	            if (_utils2.default.typeof(message, 'array')) {
	                message = message.join('; ');
	            }
	        } else {
	            message = JSON.stringify(error);
	        }
	    } catch (e) {
	        _utils2.default.defer(console.error, 'Error: There is something wrong in function `getErrorMsg` of `ajax`: ' + e);
	    }
	    return message;
	}

	// 请求出错的提示信息函数
	function errorMessage(error) {
	    var message = getErrorMsg(error);
	    _src2.default.notification.error(Object.assign({}, errorMsg, !message ? null : {
	        description: message
	    }));
	    return false;
	}

	/**
	 * 检查是否有缓存
	 *
	 * @param {Object} config ajax的配置
	 * @param {Class} AjaxCache 工具类
	 * @return {boolean} 如果有直接调用缓存数据，返回true，否则返回false
	 */
	function checkCache(config, AjaxCache) {
	    // 如果需要做缓存，key不为空
	    var key = AjaxCache.getCacheKey(config);
	    if (key) {
	        // 如果能获取到缓存数据，则直接以此数据作为success的返回值，中断真正的ajax调用
	        var cacheData = AjaxCache.getCacheData(key);
	        if (cacheData) {
	            // 保证异步
	            _utils2.default.defer.apply(_utils2.default, [config.success].concat(_toConsumableArray(cacheData)));
	            return true;
	        }
	        // 给success函数插入缓存逻辑，数据返回后先对数据进行缓存
	        _utils2.default.inject(config, 'success', function () {
	            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                params[_key] = arguments[_key];
	            }

	            AjaxCache.setCacheData(key, params);
	        });
	    }
	    return false;
	}

	/**
	 * 第一次调用接口时，检查是否有本地缓存
	 * 如果有，则先执行一次config.success，使页面先执行一次成功逻辑，以不阻塞后续逻辑执行；
	 * 当请求真正获取到数据后，重新再调用一次
	 *
	 * @param {Objcet} config ajax的配置
	 * @param {Class} AjaxCache 工具类
	 * @return {boolean} 如果需继续往下执行，返回true，否则返回false
	 */
	function checkLocalStorage(config, AjaxCache) {
	    // 如果需要做永久缓存，key不为空
	    var key = AjaxCache.getLocalStorageKey(config);
	    if (key) {
	        // 不管能不能，中断真正的ajax调用
	        var storageData = AjaxCache.getLocalStorageData(key);
	        var storageDataStr = void 0;
	        if (storageData) {
	            storageDataStr = JSON.stringify(storageData);
	            _utils2.default.defer(config.success, storageData.data, storageData);
	        }
	        // 给success函数插入缓存逻辑，数据返回后先对数据进行缓存
	        // Utils.inject(config, 'success', (...params) => {
	        //     AjaxCache.setLocalStorageData(key, params);
	        // });
	        var oriSuccess = config.success;
	        config.success = function (data, res) {
	            // 如果数据未更新，则不再进行任何处理
	            if (storageDataStr && storageDataStr === JSON.stringify(res)) {
	                return;
	            }
	            AjaxCache.setLocalStorageData(key, res);
	            oriSuccess(data, res);
	        };
	    }
	    return false;
	}

	/**
	 * 执行队列中缓存的待执行逻辑
	 *
	 * @param {string} key 调用处传入，保证一致性
	 * @param {string} result 执行结果：success/error
	 * @param {...*} params 执行函数所需的参数列表
	 */
	function executeQueue(key, result) {
	    if (ajaxQueue[key] && ajaxQueue[key].length > 0) {
	        for (var _len2 = arguments.length, params = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	            params[_key2 - 2] = arguments[_key2];
	        }

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = ajaxQueue[key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var v = _step.value;

	                v[result] && _utils2.default.defer.apply(_utils2.default, [v[result]].concat(params));
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
	    delete ajaxQueue[key];
	}

	/**
	 * 检查当前是否已有相同的请求正在进行中
	 * 如果有，则把后续逻辑放入队列中，中断后续逻辑。待请求返回数据后统一调用
	 *
	 * @param {Object} config ajax的配置
	 * @return {boolean} 如果有，则返回true，否则返回false
	 */
	function checkQueue(config) {
	    var key = _utils2.default.hash(config, 32);
	    // 如果有则代表有相同请求在进行中，直接把当前的config缓存起来
	    if (ajaxQueue[key]) {
	        ajaxQueue[key].push(config);
	        return true;
	    } else if (config.merge !== false) {
	        ajaxQueue[key] = [];
	        // 给 success、error 函数插入逻辑：ajax完成后调用队列中全部待执行逻辑，并依次执行
	        _utils2.default.inject(config, 'success', function () {
	            for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                params[_key3] = arguments[_key3];
	            }

	            executeQueue.apply(undefined, [key, 'success'].concat(params));
	        }, true);
	        _utils2.default.inject(config, 'error', function () {
	            for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	                params[_key4] = arguments[_key4];
	            }

	            executeQueue.apply(undefined, [key, 'error'].concat(params));
	        }, true);
	    }
	    return false;
	}

	/**
	 * 检查是否有mock数据接口
	 *
	 * @param {*} config ajax的配置
	 * @param {*} mockMap
	 * @return {boolean} 如果有则返回true，否则返回false
	 */
	function checkMock(config) {
	    var mockMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var conf = config.originConf;
	    if (conf.url && mockMap[conf.url]) {
	        _utils2.default.defer(function () {
	            mockMap[conf.url](config, config.success, config.error);
	        });
	        return true;
	    }
	    return false;
	}

	/**
	 * 检查是否中断请求
	 * > 可以通过返回数据，中断请求，从而使用钩子返回的数据；
	 * > 如果钩子未返回任何内容，或返回true，则请求继续；
	 * > 如果钩子返回false，则仅中断请求，不做任何处理
	 *
	 * @param {*} config ajax的配置
	 * @return {boolean} 如果有则返回true，否则返回false
	 */
	function checkInterrupt(config) {
	    if (config.interrupt) {
	        var data = config.interrupt(config);
	        // 如果钩子未返回任何内容，或返回true，则请求继续
	        if (data === undefined || data === true) {
	            return false;
	        }
	        if (data !== false) {
	            // 保证异步
	            _utils2.default.defer(config.success, data);
	        }
	        return true;
	    }
	}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _BaseCache = __webpack_require__(122);

	var _BaseCache2 = _interopRequireDefault(_BaseCache);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cache = new _BaseCache2.default();
	// 结构为
	// {
	//     [insName]: {_$uf, _$cache: {Config, ComponentCache, ModelCache}}
	// }

	/**
	 * UF 实例存储类
	 */
	var ins = {
	    // 类似于依赖注入，depend声明依赖什么模块，func执行的时候把模块取出来传进去
	    generate: function generate(depend, func) {
	        // 如果只传一个参
	        if (!func) {
	            func = depend;
	            depend = [];
	        }
	        return {
	            init: function init(insName) {
	                var args = [];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = depend[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var v = _step.value;

	                        args.push(ins['get' + v] && ins['get' + v](insName));
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

	                return func.apply(undefined, args.concat([insName]));
	            }
	        };
	    },

	    // 获取全部实例
	    getAll: function getAll() {
	        return cache.get();
	    },


	    // 获取uf实例
	    getInstance: function getInstance(insName) {
	        return cache.get(insName + '._$uf');
	    },
	    setInstance: function setInstance(insName, obj) {
	        return cache.set(insName + '._$uf', obj);
	    },
	    delInstance: function delInstance(insName) {
	        cache.delete(insName + '._$uf');
	        cache.delete(insName + '._$cache');
	        cache.delete(insName + '._$tools');
	        return true;
	    },

	    // Cache相关获取/设置函数
	    getCache: function getCache(insName) {
	        return cache.get(insName + '._$cache');
	    },
	    setCache: function setCache(insName, obj) {
	        return cache.set(insName + '._$cache', obj);
	    },
	    getConfig: function getConfig(insName) {
	        return cache.get(insName + '._$cache.Config');
	    },
	    setConfig: function setConfig(insName, obj) {
	        return cache.set(insName + '._$cache.Config', obj);
	    },
	    getComponentsCache: function getComponentsCache(insName) {
	        return cache.get(insName + '._$cache.ComponentCache');
	    },
	    setComponentCache: function setComponentCache(insName, obj) {
	        return cache.set(insName + '._$cache.ComponentCache', obj);
	    },
	    getModelCache: function getModelCache(insName) {
	        return cache.get(insName + '._$cache.ModelCache');
	    },
	    setModelCache: function setModelCache(insName, obj) {
	        return cache.set(insName + '._$cache.ModelCache', obj);
	    },
	    getAjaxCache: function getAjaxCache(insName) {
	        return cache.get(insName + '._$cache.AjaxCache');
	    },
	    setAjaxCache: function setAjaxCache(insName, obj) {
	        return cache.set(insName + '._$cache.AjaxCache', obj);
	    },


	    // Tools相关获取/设置函数
	    getTools: function getTools(insName) {
	        return cache.get(insName + '._$tools');
	    },
	    setTools: function setTools(insName, obj) {
	        return cache.set(insName + '._$tools', obj);
	    },
	    getAjax: function getAjax(insName) {
	        return cache.get(insName + '._$tools.Ajax');
	    },
	    setAjax: function setAjax(insName, obj) {
	        return cache.set(insName + '._$tools.Ajax', obj);
	    },
	    getRequirejs: function getRequirejs(insName) {
	        return cache.get(insName + '._$tools.Requirejs');
	    },
	    setRequirejs: function setRequirejs(insName, obj) {
	        return cache.set(insName + '._$tools.Requirejs', obj);
	    },
	    getPrecondition: function getPrecondition(insName) {
	        return cache.get(insName + '._$tools.Precondition');
	    },
	    setPrecondition: function setPrecondition(insName, obj) {
	        return cache.set(insName + '._$tools.Precondition', obj);
	    }
	};

	module.exports = ins;

/***/ }),
/* 122 */
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


	var _utils = __webpack_require__(85);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseCache = function () {
	    // 构造函数又两个参数，第一个参数必填，为缓存前缀，第二个参数为缓存对象的默认值
	    function BaseCache(_cache) {
	        _classCallCheck(this, BaseCache);

	        this._cache = _cache || {};
	    }

	    _createClass(BaseCache, [{
	        key: 'get',
	        value: function get(names) {
	            // 可以传递多个name依次向下查找，例如：'a.b.c'
	            return _utils2.default.fromObject(names, this._cache);
	        }
	        // set函数有两种用法

	    }, {
	        key: 'set',
	        value: function set(target, component) {
	            // 如果传入的第一个参数不是一个 target 字符串，而是一个对象，则把对象和现有缓存做merge，适用于 config.js 等
	            if (_utils2.default.typeof(target, 'object')) {
	                return _utils2.default.merge(10, this._cache, target);
	                // 如果 target 为字符串，则直接替换缓存中 target 保存的值
	            } else {
	                _utils2.default.toObject(this._cache, target, component);
	                return component;
	            }
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(key) {
	            _utils2.default.delFromObject(key, this._cache);
	        }
	    }, {
	        key: 'del',
	        value: function del(key) {
	            this.delete(key);
	        }
	    }]);

	    return BaseCache;
	}();

	exports.default = BaseCache;
	;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(84);

	var _instance = __webpack_require__(121);

	/**
	 * @file 权限控制模块
	 * @author liuzechun
	 */

	var authority = {
	    // 检查是否有权限
	    check: function check(item) {
	        var insName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : item.insName;

	        var conf = (0, _instance.getConfig)(insName);
	        var result = true;
	        if (conf && !_utils.Utils.typeof(item.authority, 'undefined')) {
	            var authorityMap = conf.get('authority');
	            if (authorityMap) {
	                result = false;
	                // 支持传一个数组，绑定多个权限点
	                if (_utils.Utils.typeof(item.authority, 'array')) {
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;

	                    try {
	                        for (var _iterator = item.authority[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var v = _step.value;

	                            // 当有一个权限点验证通过是，跳出检查
	                            if (authority.check(v, insName)) {
	                                result = true;
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
	                } else {
	                    // authorityMap 支持两种形式: 'a.b.c': true，或 a: {b: c: true}
	                    result = !!authorityMap[item.authority] || !!_utils.Utils.fromObject(item.authority, authorityMap);
	                }
	            }
	        }
	        return result;
	    }
	};

	exports.default = authority;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(84);

	var _AnalysisList = __webpack_require__(125);

	var _AnalysisList2 = _interopRequireDefault(_AnalysisList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file 属性需进一步解析的组件属性名单
	 * @author liuzechun
	 */

	exports.default = {

	    // 返回当前配置中需要二次解析的属性
	    get: function get(props, type) {
	        var list = this.getall(type);
	        var result = [];
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var v = _step.value;

	                // 如果在白名单中的属性值是直接的对象或数组（未解析的配置）或函数（执行结果为配置），则返回
	                if (!!props[v] && _utils.Utils.directInstanceof(props[v], [Object, Array, Function])) {
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

	        return result;
	    },


	    // 返回当前组件全部可以解析的属性
	    getall: function getall(type) {
	        var name = _utils.Utils.toPascal(type);
	        // 把 children 属性加入到全部组件中
	        return ((_AnalysisList2.default[name] || {}).basic || []).concat('children');
	    },


	    // 返回当前配置中 需要对函数结果进行再次解析的函数列表
	    getFuncs: function getFuncs(props, type) {
	        var list = this.getallFuncs(type);
	        var result = [];
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	            for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var v = _step2.value;

	                // 如果在白名单中的属性值是直接的对象或数组（未解析的配置）或函数（执行结果为配置），则返回
	                if (!!props[v] && _utils.Utils.directInstanceof(props[v], [Object, Array, Function])) {
	                    result.push(v);
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

	        return result;
	    },


	    // 返回全部当前组件全部需要对函数结果进行再次解析的函数列表
	    getallFuncs: function getallFuncs(type) {
	        var name = _utils.Utils.toPascal(type);
	        // 把 children 属性加入到全部组件中
	        return (_AnalysisList2.default[name] || {}).funcs || [];
	    }
	};

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @file 解析组件时，属性为子组件配置的情况，需对子组件再次解析
	 *
	 * Author: liuzechun (liuzechun@baidu.com)
	 * Created: 2019-01-11 17:57:44
	 */

	exports.default = {
	    Button: { basic: ['icon'] },
	    Panel: { basic: ['header'] },
	    Drawer: { basic: ['sidebar'] },
	    Grid: {
	        funcs: ['renderItem']
	    },
	    Calendar: {
	        funcs: ['renderHeader', 'renderShortcut']
	    },
	    Input: { basic: ['moneyKeyboardHeader'] },
	    List: { basic: ['renderHeader', 'renderFooter'] },
	    Item: { basic: ['thumb', 'extra'] },
	    ListViewIndex: { basic: ['delayActivityIndicator'] },
	    Modal: { basic: ['title'] },
	    NavBar: { basic: ['icon', 'leftContent', 'rightContent'] },
	    NoticeBar: { basic: ['icon', 'action'] },
	    Popover: { basic: ['overlay'] },
	    PopoverItem: { basic: ['icon'] },
	    Step: { basic: ['title', 'description', 'icon'] },
	    Tabs: {
	        funcs: ['renderTab', 'renderTabBar']
	    }
	};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(74);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _BaseComponent2 = __webpack_require__(79);

	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

	var _utils = __webpack_require__(84);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 对第三方组件封装的基类，包含一些对第三方组件封装的通用功能
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ExtendComponent = function (_BaseComponent) {
	    _inherits(ExtendComponent, _BaseComponent);

	    function ExtendComponent(props) {
	        _classCallCheck(this, ExtendComponent);

	        var _this = _possibleConstructorReturn(this, (ExtendComponent.__proto__ || Object.getPrototypeOf(ExtendComponent)).call(this, props));

	        _this.name = props.name;
	        // 保证每次实例化都有一个唯一的id
	        _this.componentId = (props.name || 'new_component') + '_' + Date.now();
	        _this.component;
	        return _this;
	    }
	    // 将自定义api挂载到三方组件上


	    _createClass(ExtendComponent, [{
	        key: 'setOpenApi',
	        value: function setOpenApi(target) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this._openApi[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var v = _step.value;

	                    if (_utils.Utils.typeof(this[v], 'function')) {
	                        target[v] = this[v].bind(this);
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
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._unsetTransmitComponent();
	        }
	        // 共享组件

	    }, {
	        key: '_transmitComponent',
	        value: function _transmitComponent() {
	            if (!!this.name) {
	                this._factory.$components.set(this.name, this.component);
	            }
	        }
	        // 解除共享

	    }, {
	        key: '_unsetTransmitComponent',
	        value: function _unsetTransmitComponent() {
	            if (!!this.name) {
	                this._factory.$components.del(this.name);
	            }
	        }
	    }]);

	    return ExtendComponent;
	}(_BaseComponent3.default);

	exports.default = ExtendComponent;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Dom2 = __webpack_require__(77);

	var _Dom3 = _interopRequireDefault(_Dom2);

	var _utils = __webpack_require__(84);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 需要操作的原生dom继承 BaseComponent
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-10-17 04:11:07
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Html = function (_Dom) {
	    _inherits(Html, _Dom);

	    function Html(props) {
	        _classCallCheck(this, Html);

	        var _this = _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).call(this, props));

	        _this.type = 'section';
	        return _this;
	    }

	    _createClass(Html, [{
	        key: '_afterSetProps',
	        value: function _afterSetProps() {
	            _get(Html.prototype.__proto__ || Object.getPrototypeOf(Html.prototype), '_afterSetProps', this).call(this);
	            if (this.__props.children) {
	                this.__props.dangerouslySetInnerHTML = { __html: this.__props.children };
	                delete this.__props.children;
	            }
	        }
	        // 复用父组件的render
	        // render() {}

	    }]);

	    return Html;
	}(_Dom3.default);

	exports.default = Html;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Router = __webpack_require__(129);

	var Router = _interopRequireWildcard(_Router);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	module.exports = Router;

	// module.exports = require('./Router.js').default;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IndexLink = exports.Link = exports.Router = exports.BaseRouter = exports.RouteHolder = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(130);

	var OriRouter = _interopRequireWildcard(_reactRouter);

	var _base = __webpack_require__(78);

	var _utils = __webpack_require__(84);

	var _src = __webpack_require__(72);

	var _instance = __webpack_require__(121);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 路由 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// 保存当前页面的路由信息
	var lastRouter = {
	    params: {},
	    detials: {}
	};
	// 用于获取当前页面的路由信息
	function getRouter() {
	    return _utils.Utils.copy(lastRouter);
	}
	function setRouter(props) {
	    var params = props.params,
	        location = props.location,
	        route = props.route,
	        routes = props.routes;

	    lastRouter = {
	        params: params,
	        detials: { params: params, location: location, route: route, routes: routes }
	    };
	}

	// 抽象类 每个配置均使用这个抽象类作为外壳，把组件实例转换为类

	var RouteHolder = exports.RouteHolder = function (_React$Component) {
	    _inherits(RouteHolder, _React$Component);

	    function RouteHolder(props) {
	        _classCallCheck(this, RouteHolder);

	        var _this = _possibleConstructorReturn(this, (RouteHolder.__proto__ || Object.getPrototypeOf(RouteHolder)).call(this, props));

	        setRouter(props);
	        return _this;
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
	            // console.log(nextProps.router);
	            // console.log(this.props, this.props.router.location.action);
	            return true;
	            // 待观察效果
	            // 有五种情况 PUSH、PUSH->POP、REPLACE、REPLACE->POP、POP
	            // return ['PUSH', 'REPLACE'].indexOf(this.props.router.location.action) !== -1;
	        }
	        // componentWillReceiveProps(nextProps) {
	        //     console.log(this.props.router.location.action);
	        //     console.log(nextProps.router.location.action);
	        // }
	        // 组件更新时，保存最新的路由信息

	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {
	            setRouter(nextProps);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_src.Factory, _extends({}, this.props, {
	                // config={this.getConfig()}
	                config: this.props.route.__component,
	                insName: this.props.route.insName
	            }));
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
	}(_base.BaseComponent);

	// Router


	var Router = exports.Router = function (_BaseRouter) {
	    _inherits(Router, _BaseRouter);

	    function Router(props) {
	        _classCallCheck(this, Router);

	        var _this3 = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, props));

	        _this3.__init();
	        // 从 OriRouter 上获取真正的 hashHistory（用户设置的是字符串）
	        _this3.__props.history = OriRouter[_this3.__props.history];
	        // 把 routes 的内容转换为真正的路由组件
	        if (_this3.__props.routes) {
	            _this3.__props.children = _this3.handleRoutes(_this3.__props.routes);
	            delete _this3.__props.routes;
	        }
	        return _this3;
	    }

	    _createClass(Router, [{
	        key: 'handleRoutes',
	        value: function handleRoutes(routes) {
	            var arr = routes;
	            if (!_utils.Utils.typeof(routes, 'array')) {
	                arr = [routes];
	            }
	            var children = [];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var v = _step.value;

	                    // 校验权限，没权限的元素返回 null
	                    if (!this.__authority(v)) {
	                        continue;
	                    }
	                    v = this.setRoute(v);
	                    v.children = [];
	                    // indexRoute 字段 => IndexRoute
	                    if (v.indexRoute) {
	                        v.children.push(_react2.default.createElement(OriRouter.IndexRoute, this.setRoute(v.indexRoute)));
	                        delete v.indexRoute;
	                    }
	                    //  indexRedirect 字段 => IndexRedirect
	                    if (v.indexRedirect) {
	                        v.children.push(_react2.default.createElement(OriRouter.IndexRedirect, { to: v.indexRedirect, query: v.query }));
	                        delete v.indexRedirect;
	                    }
	                    // childRoutes 字段 => 子路由 (Route、Redirect)
	                    if (v.childRoutes) {
	                        v.children = v.children.concat(this.handleRoutes(v.childRoutes));
	                        delete v.childRoutes;
	                    }
	                    if (v.children.length === 0) {
	                        delete v.children;
	                    }
	                    // if (v.breadcrumbName) {
	                    //     v.breadcrumbName = this.__analysis(v.breadcrumbName);
	                    // }
	                    // 不含 component && 包含 from & to 字段 => Redirect
	                    // 否则为普通的 Route 组件
	                    var Item = void 0;
	                    if (!v.component && v.path && v.to) {
	                        Item = OriRouter.Redirect;
	                    } else {
	                        Item = OriRouter.Route;
	                    }
	                    children.push(_react2.default.createElement(Item, v));
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

	            return children;
	        }
	        // Route/IndexRoute 类型的组件
	        // component 转换为 RouteHolder

	    }, {
	        key: 'setRoute',
	        value: function setRoute(item) {
	            // @bugfix at 2018-07-12, 不能改变原配置。修复再次渲染router时报错问题
	            item = _utils.Utils.copy(item);
	            if (item.component) {
	                // 组件实例放在新属性content里
	                item.__component = item.component;
	                item.insName = this.insName;
	                // component属性为一个抽象类
	                item.component = RouteHolder;
	            }
	            return item;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // console.log('router init');
	            return _react2.default.createElement(OriRouter.Router, this.__props);
	        }
	    }]);

	    return Router;
	}(BaseRouter);
	// 获取当前页面的路由信息


	Router.getRouter = getRouter;

	// Link

	var Link = exports.Link = function (_BaseRouter2) {
	    _inherits(Link, _BaseRouter2);

	    function Link(props) {
	        _classCallCheck(this, Link);

	        var _this4 = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

	        _this4.__init();
	        return _this4;
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


	var IndexLink = exports.IndexLink = function (_BaseRouter3) {
	    _inherits(IndexLink, _BaseRouter3);

	    function IndexLink(props) {
	        _classCallCheck(this, IndexLink);

	        var _this5 = _possibleConstructorReturn(this, (IndexLink.__proto__ || Object.getPrototypeOf(IndexLink)).call(this, props));

	        _this5.__init();
	        return _this5;
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
/* 130 */
/***/ (function(module, exports) {

	module.exports = window.DLL.ReactRouter;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _dataentry = __webpack_require__(132);

	var DataEntry = _interopRequireWildcard(_dataentry);

	var _datadisplay = __webpack_require__(135);

	var DataDisplay = _interopRequireWildcard(_datadisplay);

	var _genaral = __webpack_require__(137);

	var Genaral = _interopRequireWildcard(_genaral);

	var _navigation = __webpack_require__(139);

	var Navigation = _interopRequireWildcard(_navigation);

	var _feedback = __webpack_require__(141);

	var Feedback = _interopRequireWildcard(_feedback);

	var _layout = __webpack_require__(143);

	var Layout = _interopRequireWildcard(_layout);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * @file antd组件统一封装，实现几个基础抽象类做继承
	 *
	 * Author: liuzechun (liuzechun@baidu.com)
	 * Created: 2019-01-10 00:01:26
	 */

	module.exports = Object.assign({}, DataEntry, DataDisplay, Genaral, Navigation, Feedback, Layout);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SearchBar = exports.Stepper = exports.Switch = exports.RadioButton = exports.RadioItem = exports.Radio = exports.ImagePicker = exports.Textarea = exports.Input = exports.SliderRange = exports.Slider = exports.DatePickerView = exports.DatePicker = exports.Calendar = exports.SelectView = exports.Select = exports.Checkbox = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(84);

	var _DataEntry18 = __webpack_require__(133);

	var _DataEntry19 = _interopRequireDefault(_DataEntry18);

	var _antdMobile = __webpack_require__(82);

	var Antd = _interopRequireWildcard(_antdMobile);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 数据录入 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var OptionsDataEntry = _DataEntry19.default.OptionsDataEntry;
	var BasePicker = _DataEntry19.default.BasePicker;

	/************* Checkbox 复选框 ************************************************************************** */

	var Checkbox = exports.Checkbox = function (_DataEntry) {
	    _inherits(Checkbox, _DataEntry);

	    function Checkbox(props) {
	        _classCallCheck(this, Checkbox);

	        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

	        _this.__controlled.defaultVal = [];
	        _this.__init();
	        return _this;
	    }

	    _createClass(Checkbox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Checkbox, this.__props);
	        }
	    }]);

	    return Checkbox;
	}(_DataEntry19.default);

	/************* Picker 选择器 ****************************************************************** */

	// Select 选择器


	var Select = exports.Select = function (_DataEntry2) {
	    _inherits(Select, _DataEntry2);

	    function Select(props) {
	        _classCallCheck(this, Select);

	        var _this2 = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

	        _this2.__init();
	        return _this2;
	    }

	    _createClass(Select, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Picker, _extends({}, _utils.Utils.filter(this.__props, ['options']), {
	                data: this.__props.options }));
	        }
	    }]);

	    return Select;
	}(_DataEntry19.default);
	// SelectView 选择器


	var SelectView = exports.SelectView = function (_DataEntry3) {
	    _inherits(SelectView, _DataEntry3);

	    function SelectView(props) {
	        _classCallCheck(this, SelectView);

	        var _this3 = _possibleConstructorReturn(this, (SelectView.__proto__ || Object.getPrototypeOf(SelectView)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(SelectView, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.PickerView, this.__props);
	        }
	    }]);

	    return SelectView;
	}(_DataEntry19.default);
	// Calendar 日历选择


	var Calendar = exports.Calendar = function (_DataEntry4) {
	    _inherits(Calendar, _DataEntry4);

	    function Calendar(props) {
	        _classCallCheck(this, Calendar);

	        // this.__controlled.defaultVal = [];
	        var _this4 = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(Calendar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Calendar, this.__props);
	        }
	    }]);

	    return Calendar;
	}(_DataEntry19.default);
	// DatePicker 日期选择器


	var DatePicker = exports.DatePicker = function (_DataEntry5) {
	    _inherits(DatePicker, _DataEntry5);

	    function DatePicker(props) {
	        _classCallCheck(this, DatePicker);

	        // this.__controlled.defaultVal = [];
	        var _this5 = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

	        _this5.__init();
	        return _this5;
	    }

	    _createClass(DatePicker, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.DatePicker, _extends({}, this.__props, { mode: this.__props.type }));
	        }
	    }]);

	    return DatePicker;
	}(_DataEntry19.default);
	// DatePickerView 日期选择器


	var DatePickerView = exports.DatePickerView = function (_DataEntry6) {
	    _inherits(DatePickerView, _DataEntry6);

	    function DatePickerView(props) {
	        _classCallCheck(this, DatePickerView);

	        // this.__controlled.defaultVal = [];
	        var _this6 = _possibleConstructorReturn(this, (DatePickerView.__proto__ || Object.getPrototypeOf(DatePickerView)).call(this, props));

	        _this6.__init();
	        return _this6;
	    }

	    _createClass(DatePickerView, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.DatePickerView, _extends({}, this.__props, { mode: this.__props.type }));
	        }
	    }]);

	    return DatePickerView;
	}(_DataEntry19.default);

	/************* Slider 滑动输入条 ****************************************************************** */

	var Slider = exports.Slider = function (_DataEntry7) {
	    _inherits(Slider, _DataEntry7);

	    function Slider(props) {
	        _classCallCheck(this, Slider);

	        var _this7 = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

	        _this7.__init();
	        return _this7;
	    }

	    _createClass(Slider, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Slider, this.__props);
	        }
	    }]);

	    return Slider;
	}(_DataEntry19.default);
	// Range 区域选择


	var SliderRange = exports.SliderRange = function (_DataEntry8) {
	    _inherits(SliderRange, _DataEntry8);

	    function SliderRange(props) {
	        _classCallCheck(this, SliderRange);

	        var _this8 = _possibleConstructorReturn(this, (SliderRange.__proto__ || Object.getPrototypeOf(SliderRange)).call(this, props));

	        _this8.__init();
	        return _this8;
	    }

	    _createClass(SliderRange, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Range, this.__props);
	        }
	    }]);

	    return SliderRange;
	}(_DataEntry19.default);

	/************* Input 输入框 ****************************************************************** */

	var Input = exports.Input = function (_DataEntry9) {
	    _inherits(Input, _DataEntry9);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        var _this9 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	        _this9.__init();
	        return _this9;
	    }

	    _createClass(Input, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.InputItem, this.__props);
	        }
	    }]);

	    return Input;
	}(_DataEntry19.default);

	/************* Textarea 多行输入 ****************************************************************** */

	var Textarea = exports.Textarea = function (_DataEntry10) {
	    _inherits(Textarea, _DataEntry10);

	    function Textarea(props) {
	        _classCallCheck(this, Textarea);

	        var _this10 = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

	        _this10.__init();
	        return _this10;
	    }

	    _createClass(Textarea, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.TextareaItem, this.__props);
	        }
	    }]);

	    return Textarea;
	}(_DataEntry19.default);

	/************* ImagePicker 图片选择 ****************************************************************** */

	var ImagePicker = exports.ImagePicker = function (_DataEntry11) {
	    _inherits(ImagePicker, _DataEntry11);

	    function ImagePicker(props) {
	        _classCallCheck(this, ImagePicker);

	        var _this11 = _possibleConstructorReturn(this, (ImagePicker.__proto__ || Object.getPrototypeOf(ImagePicker)).call(this, props));

	        _this11.__init();
	        return _this11;
	    }

	    _createClass(ImagePicker, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.ImagePicker, this.__props);
	        }
	    }]);

	    return ImagePicker;
	}(_DataEntry19.default);

	/************* Radio 单选 ****************************************************************** */

	var Radio = exports.Radio = function (_DataEntry12) {
	    _inherits(Radio, _DataEntry12);

	    function Radio(props) {
	        _classCallCheck(this, Radio);

	        var _this12 = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

	        _this12.__init();
	        return _this12;
	    }

	    _createClass(Radio, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Radio, this.__props);
	        }
	    }]);

	    return Radio;
	}(_DataEntry19.default);

	var RadioItem = exports.RadioItem = function (_DataEntry13) {
	    _inherits(RadioItem, _DataEntry13);

	    function RadioItem(props) {
	        _classCallCheck(this, RadioItem);

	        var _this13 = _possibleConstructorReturn(this, (RadioItem.__proto__ || Object.getPrototypeOf(RadioItem)).call(this, props));

	        _this13.__init();
	        return _this13;
	    }

	    _createClass(RadioItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Radio.RadioItem, this.__props);
	        }
	    }]);

	    return RadioItem;
	}(_DataEntry19.default);
	// 按钮形式的Radio


	var RadioButton = exports.RadioButton = function (_DataEntry14) {
	    _inherits(RadioButton, _DataEntry14);

	    function RadioButton(props) {
	        _classCallCheck(this, RadioButton);

	        var _this14 = _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call(this, props));

	        _this14.__init();
	        _this14.__controlled.defaultVal = props.items && props.items[0];
	        _this14.__controlled.event = 'onValueChange';
	        return _this14;
	    }
	    // 计算原组件需要的index


	    _createClass(RadioButton, [{
	        key: 'getSelectedIndex',
	        value: function getSelectedIndex() {
	            if (this.__props.items) {
	                if (this.__props.value) {
	                    return this.__props.items.indexOf(this.__props.value);
	                } else {
	                    return 0;
	                }
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.SegmentedControl, _extends({}, _utils.Utils.filter(this.__props, ['items', 'value']), {
	                values: this.__props.items,
	                selectedIndex: this.getSelectedIndex()
	            }));
	        }
	    }]);

	    return RadioButton;
	}(_DataEntry19.default);

	/************* Switch 滑动开关 ****************************************************************** */

	var Switch = exports.Switch = function (_DataEntry15) {
	    _inherits(Switch, _DataEntry15);

	    function Switch(props) {
	        _classCallCheck(this, Switch);

	        var _this15 = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

	        _this15.__init();
	        return _this15;
	    }

	    _createClass(Switch, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Switch, this.__props);
	        }
	    }]);

	    return Switch;
	}(_DataEntry19.default);

	/************* Stepper 步进器 ****************************************************************** */

	var Stepper = exports.Stepper = function (_DataEntry16) {
	    _inherits(Stepper, _DataEntry16);

	    function Stepper(props) {
	        _classCallCheck(this, Stepper);

	        var _this16 = _possibleConstructorReturn(this, (Stepper.__proto__ || Object.getPrototypeOf(Stepper)).call(this, props));

	        _this16.__init();
	        return _this16;
	    }

	    _createClass(Stepper, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Stepper, this.__props);
	        }
	    }]);

	    return Stepper;
	}(_DataEntry19.default);

	/************* SearchBar 搜索栏 ****************************************************************** */

	var SearchBar = exports.SearchBar = function (_DataEntry17) {
	    _inherits(SearchBar, _DataEntry17);

	    function SearchBar(props) {
	        _classCallCheck(this, SearchBar);

	        var _this17 = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

	        _this17.__init();
	        return _this17;
	    }

	    _createClass(SearchBar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.SearchBar, this.__props);
	        }
	    }]);

	    return SearchBar;
	}(_DataEntry19.default);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _Antd2 = __webpack_require__(134);

	var _Antd3 = _interopRequireDefault(_Antd2);

	var _utils = __webpack_require__(84);

	var _moment = __webpack_require__(88);

	var _moment2 = _interopRequireDefault(_moment);

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

	        var _this = _possibleConstructorReturn(this, (DataEntry.__proto__ || Object.getPrototypeOf(DataEntry)).call(this, props));

	        _this.class.push('data-entry');
	        _this._openApi.push('getValue');
	        _this.__controlled = {
	            key: 'value',
	            event: 'onChange',
	            defaultVal: undefined,
	            paramsIndex: 0
	        };
	        return _this;
	    }
	    // 针对输入型组件，重写loading函数


	    _createClass(DataEntry, [{
	        key: 'loading',
	        value: function loading(status, showLoading) {
	            if (showLoading === 'simple') {
	                if (status) {
	                    var className = this.__filtered.__className || '';
	                    className += ' has-feedback is-validating';
	                    this.__setProps({ className: className });
	                } else {
	                    this.__setProps({ className: this.__filtered.__className });
	                }
	            } else {
	                _get(DataEntry.prototype.__proto__ || Object.getPrototypeOf(DataEntry.prototype), 'loading', this).call(this, status);
	            }
	        }
	    }, {
	        key: '_afterInitProps',
	        value: function _afterInitProps() {
	            // 另外存一份className
	            this.__filtered.__className = this.__props.className;
	        }
	    }, {
	        key: '_afterInit',
	        value: function _afterInit() {
	            _get(DataEntry.prototype.__proto__ || Object.getPrototypeOf(DataEntry.prototype), '_afterInit', this).call(this);
	            this._updateEvent();
	        }
	    }, {
	        key: '_afterSetProps',
	        value: function _afterSetProps() {
	            _get(DataEntry.prototype.__proto__ || Object.getPrototypeOf(DataEntry.prototype), '_afterSetProps', this).call(this);
	            // 把值为boolean类型的数据进行强制转换
	            if (this.__controlled.key === 'checked') {
	                this.__props.data = !!+this.__props.data;
	            }
	        }
	        // 更新 onChange/onBlur 逻辑，额外返回一个参数，为当前组件的值

	    }, {
	        key: '_updateEventHandler',
	        value: function _updateEventHandler(param) {
	            return param;
	        }
	    }, {
	        key: '_updateEvent',
	        value: function _updateEvent() {
	            var _this2 = this;

	            if (this.__props.onChange) {
	                var _controlled = this.__controlled,
	                    key = _controlled.key,
	                    paramsIndex = _controlled.paramsIndex;

	                var oriOnChange = this.__props.onChange;
	                this.__props.onChange = function () {
	                    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                        params[_key] = arguments[_key];
	                    }

	                    var value = void 0;
	                    if (_utils.Utils.typeof(params[paramsIndex], 'object') && params[paramsIndex].target) {
	                        value = params[paramsIndex].target[key];
	                    } else {
	                        value = params[paramsIndex];
	                    }
	                    // 以上规则依然不能满足时，再重写函数进行额外处理
	                    value = _this2._updateEventHandler(value);
	                    return oriOnChange.apply(undefined, params.concat([value]));
	                };
	            }
	            if (this.__props.onBlur) {
	                var oriOnBlur = this.__props.onBlur;
	                this.__props.onBlur = function () {
	                    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                        params[_key2] = arguments[_key2];
	                    }

	                    oriOnBlur.apply(undefined, params.concat([_this2.getValue()]));
	                };
	            }
	        }

	        // 增加 onChange 时默认保存数据的函数
	        // 父类的 _onControlEvent 函数不能满足需求，直接覆盖了

	    }, {
	        key: '_onControlEvent',
	        value: function _onControlEvent() {
	            var _ref;

	            var _controlled2 = this.__controlled,
	                key = _controlled2.key,
	                paramsIndex = _controlled2.paramsIndex;

	            this.__props[key] = (_ref = arguments.length - 1, arguments.length <= _ref ? undefined : arguments[_ref]);
	            // // 适合的组件：input、checkbox、radio
	            // if (Utils.typeof(params[paramsIndex], 'object') && params[paramsIndex].target) {
	            //     this.__props[key] = params[paramsIndex].target[key];
	            // } else {
	            //     this.__props[key] = params[paramsIndex];
	            // }
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

	/************* 附带options属性的基类（包含多选逻辑） ***************************************************** */

	exports.default = DataEntry;
	DataEntry.OptionsDataEntry = function (_DataEntry) {
	    _inherits(OptionsDataEntry, _DataEntry);

	    function OptionsDataEntry(props) {
	        _classCallCheck(this, OptionsDataEntry);

	        var _this3 = _possibleConstructorReturn(this, (OptionsDataEntry.__proto__ || Object.getPrototypeOf(OptionsDataEntry)).call(this, props));

	        _this3._openApi.push('getDisplayValue', 'getSelectedOption');
	        return _this3;
	    }

	    _createClass(OptionsDataEntry, [{
	        key: '_afterSetProps',
	        value: function _afterSetProps(nextProps) {
	            _get(OptionsDataEntry.prototype.__proto__ || Object.getPrototypeOf(OptionsDataEntry.prototype), '_afterSetProps', this).call(this);
	            // 把 options 格式化为统一固定格式
	            if (nextProps.options) {
	                this.__props.options = _utils.Utils.toOptions(this.__props.options);
	            }
	            if (!this.__props.options) {
	                this.__props.options = [];
	            }
	        }
	        // 处理多选情况

	    }, {
	        key: '_handleMultipleSelect',
	        value: function _handleMultipleSelect() {
	            var current = this.__props.value || [];
	            // 当设置默认全选时，更新当前内容为全选
	            if (this.__props.defaultSelectAll) {
	                var all = this.__props.options.map(function (v) {
	                    return v.value;
	                });
	                this.__props.onChange && this.__props.onChange(all);
	                return;
	            }
	            // 默认选中第一个的处理逻辑
	            if (this.__props.defaultFirst && _utils.Utils.empty(this.__props.value)) {
	                var first = _utils.Utils.getFirstOption(this.__props.options);
	                this.__props.onChange && this.__props.onChange([first]);
	            }
	            // 如果是多选型的，且当前有值，首先判断是否还有能匹配上的，如果全部匹配则跳过，否则更新
	            var matchVal = this.__props.options.filter(function (v) {
	                return current.indexOf(v.value) > -1;
	            }).map(function (v) {
	                return v.value;
	            });
	            if (matchVal.length === current.length) {
	                return;
	            }
	            this.__props.onChange && this.__props.onChange(matchVal);
	        }
	        // 处理默认选中

	    }, {
	        key: '_handleDefaultSelect',
	        value: function _handleDefaultSelect() {
	            var allClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            var current = this.__props.value;
	            // 如果当前值再列表中，则不做任何处理
	            var alldata = this.__props.options;
	            // 追加上extOptions中的内容，仅select组件有
	            if (this.getAllOptions) {
	                alldata = this.getAllOptions(alldata);
	            }
	            if (alldata.some(function (v) {
	                return v.value + '' === current + '';
	            })) {
	                return;
	            }
	            // 否则把值设置为第一个或者清空
	            if (this.__props.defaultFirst) {
	                var first = _utils.Utils.getFirstOption(this.__props.options);
	                this.__props.onChange && this.__props.onChange(first);
	            } else if (allClear && this.__props.value !== undefined && !_utils.Utils.equals(this.__controlled.defaultVal, this.__props.value)) {
	                // 为实现刷新组件时，清空原数据
	                // 同时会带来问题，不能为空的字段会导致出现提示（已解决）
	                this.__props.onChange && this.__props.onChange(this.__controlled.defaultVal);
	            }
	        }

	        // 获取页面展示内容，针对select等类型的展示和实际提交的内容不一致的组件

	    }, {
	        key: 'getDisplayValue',
	        value: function getDisplayValue() {
	            var value = this.getValue();
	            var result = value;
	            var options = this.__props.options || [];
	            for (var i in options) {
	                if (options[i].value === value || options[i].value === value + '') {
	                    result = options[i].label;
	                    break;
	                }
	            }
	            return result;
	        }
	        // 获取选中的option，针对select等类型的具备可选值的组件

	    }, {
	        key: 'getSelectedOption',
	        value: function getSelectedOption() {
	            var value = this.getValue();
	            var result = void 0;
	            var options = this.__props.options || [];
	            for (var i in options) {
	                if (options[i].value === value || options[i].value === value + '') {
	                    result = options[i];
	                    break;
	                }
	            }
	            return result;
	        }
	    }]);

	    return OptionsDataEntry;
	}(DataEntry);

	/************* DatePicker日期选择框系列基类 ************************************************************** */

	DataEntry.BasePicker = function (_DataEntry2) {
	    _inherits(BasePicker, _DataEntry2);

	    function BasePicker(props) {
	        _classCallCheck(this, BasePicker);

	        var _this4 = _possibleConstructorReturn(this, (BasePicker.__proto__ || Object.getPrototypeOf(BasePicker)).call(this, props));

	        _this4.class.push('basic-picker');
	        _this4._filter.push('current');
	        _this4._injectEvent.push('onOk');
	        // this.__init();
	        return _this4;
	    }
	    // 获取当前时间


	    _createClass(BasePicker, [{
	        key: '_getCurrentValue',
	        value: function _getCurrentValue() {
	            return (0, _moment2.default)().format(this.__props.format);
	        }
	        // 注入到onOk事件中
	        // BUGFIX: 直接点击确认按钮时，自动把当前日期时间填上

	    }, {
	        key: '_onOk',
	        value: function _onOk(value) {
	            if (value === undefined) {
	                value = this._getCurrentValue();
	                this.__setProps({ value: value });
	                this.__props.onChange && this.__props.onChange(_utils.Utils.moment(value), value);
	            }
	            if (value instanceof _moment2.default && this.__props.format) {
	                value = value.format(this.__props.format);
	            }
	        }
	        // 继承父组件的函数，_initProps 后增加额外处理逻辑

	    }, {
	        key: '_afterInitProps',
	        value: function _afterInitProps() {
	            _get(BasePicker.prototype.__proto__ || Object.getPrototypeOf(BasePicker.prototype), '_afterInitProps', this).call(this);
	            // 如果设置了 value='current'，则把current转换为当前时间
	            if (this.__props.value === 'current') {
	                this.__props.value = this._getCurrentValue();
	            }
	        }
	    }]);

	    return BasePicker;
	}(DataEntry);

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(74);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _base = __webpack_require__(78);

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

	        var _this = _possibleConstructorReturn(this, (Antd.__proto__ || Object.getPrototypeOf(Antd)).call(this, props));
	        // 追加中间基类


	        _this.class.push('antd');
	        _this._filter.push('controlled');
	        // 开放给用户使用的 Api
	        _this._openApi.push('trigger');
	        // 壳子调用antd组件，调用的组件的实例存储在_component中
	        _this._component = null;
	        // 受控属性名，供子类设置。如果子类设置了此属性，则会绑定change事件，同时也受控于用户传入的此值。见 _handleControlled
	        _this.__controlled = null;
	        return _this;
	    }

	    /* 暴露给用户的方法 ***********************************************************************/

	    // 触发组件上的原生事件，例如 focus、change 等


	    _createClass(Antd, [{
	        key: 'trigger',
	        value: function trigger(event) {
	            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                params[_key - 1] = arguments[_key];
	            }

	            if (this._component && this._component[event]) {
	                this._component[event](params);
	            } else {
	                var _get2;

	                (_get2 = _get(Antd.prototype.__proto__ || Object.getPrototypeOf(Antd.prototype), 'trigger', this)).call.apply(_get2, [this, event].concat(params));
	            }
	        }

	        /* 供子组件调用方法 ***********************************************************************/

	    }, {
	        key: '_beforeInitProps',
	        value: function _beforeInitProps() {
	            _get(Antd.prototype.__proto__ || Object.getPrototypeOf(Antd.prototype), '_beforeInitProps', this).call(this);
	            // 受控配置 - 如果不为null,则合并覆盖
	            this.__controlled = this.__controlled ? this.__mergeProps({
	                key: 'value',
	                event: 'onChange',
	                defaultVal: undefined,
	                paramsIndex: 0
	            }, this.__controlled) : null;
	            // 使用 _injectEvent 的方式将属性的控制逻辑注入到事件中，将事件名称推入_injectEvent数组中即可
	            if (this.__controlled) {
	                var event = this.__controlled.event;
	                this._injectEvent.push(event);
	                // 创建一个名为_${event}的函数，供_injectEvent的相关逻辑调用
	                // 防止子类中已经实现了_${event}函数，此处使用注入的方式进行赋值
	                this._inject(this, '_' + event, this._onControlEventHandler);
	            }
	        }
	    }, {
	        key: '_afterInit',
	        value: function _afterInit() {
	            var _this2 = this;

	            _get(Antd.prototype.__proto__ || Object.getPrototypeOf(Antd.prototype), '_afterInit', this).call(this);
	            // 保存原始antd组件的引用
	            this.__props['ref'] = function (ele) {
	                return _this2._component = ele;
	            };
	            // 受控组件默认处理逻辑
	            this._handleControlled();
	        }

	        // 组件创建时，对受控属性值进行同步

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
	            // 把value和defaultValue merge一下，统一交由 value 控制
	            // let keyValue = this.__props[key] || this.__props[defaultKey];
	            var keyValue = this.__props[defaultKey];
	            // 注意需用undefined判断，否则为0的时候会不符合预期
	            if (this.__props[key] !== undefined) {
	                keyValue = this.__props[key];
	            }
	            // 如果这个值为空，否则受控属性为空会出现异常
	            if (keyValue !== undefined) {
	                this.__props[key] = keyValue;
	            } else {
	                // 屏蔽warning，非受控组件转换为受控组件会报warning
	                this.__props[key] = defaultVal;
	            }
	        }

	        // 供 _injectEvent 使用

	    }, {
	        key: '_onControlEventHandler',
	        value: function _onControlEventHandler() {
	            // 如果用户传入了 controlled 属性，则完全由用户自己控制，不再执行默认控制逻辑
	            if (this.__filtered.controlled) {
	                return;
	            }
	            this._onControlEvent.apply(this, arguments);
	        }
	        // 同步onChange的数据到受控属性上，默认取第一个参数
	        // ** 可直接被子类覆盖重写 **
	        // **     如果有其他需求可以直接覆盖重写，注意函数内要调用下 callback（如：DataEntry中用法）

	    }, {
	        key: '_onControlEvent',
	        value: function _onControlEvent() {
	            if (this.__controlled) {
	                var _controlled2 = this.__controlled,
	                    key = _controlled2.key,
	                    paramsIndex = _controlled2.paramsIndex;

	                if (key) {
	                    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                        params[_key2] = arguments[_key2];
	                    }

	                    this.__props[key] = params[paramsIndex];
	                    this.forceUpdate();
	                }
	            }
	        }
	    }]);

	    return Antd;
	}(_base.BaseComponent);

	exports.default = Antd;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Result = exports.Tag = exports.NoticeBar = exports.Popover = exports.ListView = exports.Item = exports.List = exports.Card = exports.Carousel = exports.Badge = exports.Collapse = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(74);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _utils = __webpack_require__(84);

	var _DataDisplay12 = __webpack_require__(136);

	var _DataDisplay13 = _interopRequireDefault(_DataDisplay12);

	var _antdMobile = __webpack_require__(82);

	var Antd = _interopRequireWildcard(_antdMobile);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 数据展示 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/************* Collapse 手风琴 ************************************************************************** */

	var Collapse = exports.Collapse = function (_DataDisplay) {
	    _inherits(Collapse, _DataDisplay);

	    function Collapse(props) {
	        _classCallCheck(this, Collapse);

	        var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Collapse, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Accordion, this.__props);
	        }
	    }]);

	    return Collapse;
	}(_DataDisplay13.default);

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
	}(_DataDisplay13.default);

	/************* Carousel 走马灯 ************************************************************************** */

	var Carousel = exports.Carousel = function (_DataDisplay3) {
	    _inherits(Carousel, _DataDisplay3);

	    function Carousel(props) {
	        _classCallCheck(this, Carousel);

	        var _this3 = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(Carousel, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Carousel, this.__props);
	        }
	    }]);

	    return Carousel;
	}(_DataDisplay13.default);

	/************* Card 卡片 ************************************************************************** */

	var Card = exports.Card = function (_DataDisplay4) {
	    _inherits(Card, _DataDisplay4);

	    function Card(props) {
	        _classCallCheck(this, Card);

	        var _this4 = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(Card, [{
	        key: 'render',
	        value: function render() {
	            var header = this.__props.header;
	            var footer = this.__props.footer;
	            return _react2.default.createElement(
	                Antd.Card,
	                _utils.Utils.filter(this.__props, ['header', 'footer', 'children']),
	                header && _react2.default.createElement(Antd.Card.Header, { title: this.__analysis(header.title),
	                    thumbStyle: header.thumbStyle,
	                    thumb: this.__analysis(header.thumb),
	                    extra: this.__analysis(header.extra)
	                }),
	                _react2.default.createElement(
	                    Antd.Card.Body,
	                    null,
	                    this.__props.children
	                ),
	                footer && _react2.default.createElement(Antd.Card.Footer, { content: this.__analysis(footer.content),
	                    extra: this.__analysis(footer.extra)
	                })
	            );
	        }
	    }]);

	    return Card;
	}(_DataDisplay13.default);

	/************* List 列表 ************************************************************************** */

	var List = exports.List = function (_DataDisplay5) {
	    _inherits(List, _DataDisplay5);

	    function List(props) {
	        _classCallCheck(this, List);

	        var _this5 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

	        _this5.__init();
	        return _this5;
	    }

	    _createClass(List, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.List, this.__props);
	        }
	    }]);

	    return List;
	}(_DataDisplay13.default);

	var Item = exports.Item = function (_DataDisplay6) {
	    _inherits(Item, _DataDisplay6);

	    function Item(props) {
	        _classCallCheck(this, Item);

	        var _this6 = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

	        _this6.__init();
	        return _this6;
	    }

	    _createClass(Item, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.List.Item, this.__props);
	        }
	    }]);

	    return Item;
	}(_DataDisplay13.default);
	// ListView 长列表


	var ListView = exports.ListView = function (_DataDisplay7) {
	    _inherits(ListView, _DataDisplay7);

	    function ListView(props) {
	        _classCallCheck(this, ListView);

	        var _this7 = _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, props));

	        _this7.__init();
	        return _this7;
	    }

	    _createClass(ListView, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.ListView, this.__props);
	        }
	    }]);

	    return ListView;
	}(_DataDisplay13.default);

	/************ Popover 气泡 *************************************************************************** */

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
	            return _react2.default.createElement(Antd.Popover, this.__props);
	        }
	    }]);

	    return Popover;
	}(_DataDisplay13.default);

	/************* NoticeBar 通告栏 ************************************************************************** */

	var NoticeBar = exports.NoticeBar = function (_DataDisplay9) {
	    _inherits(NoticeBar, _DataDisplay9);

	    function NoticeBar(props) {
	        _classCallCheck(this, NoticeBar);

	        var _this9 = _possibleConstructorReturn(this, (NoticeBar.__proto__ || Object.getPrototypeOf(NoticeBar)).call(this, props));

	        _this9.__init();
	        return _this9;
	    }

	    _createClass(NoticeBar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.NoticeBar, this.__props);
	        }
	    }]);

	    return NoticeBar;
	}(_DataDisplay13.default);

	/************* Tag 标签 ************************************************************************** */

	var Tag = exports.Tag = function (_DataDisplay10) {
	    _inherits(Tag, _DataDisplay10);

	    function Tag(props) {
	        _classCallCheck(this, Tag);

	        var _this10 = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

	        _this10.__init();
	        return _this10;
	    }

	    _createClass(Tag, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Tag, this.__props);
	        }
	    }]);

	    return Tag;
	}(_DataDisplay13.default);

	/************* Result 结果页 ************************************************************************** */

	var Result = exports.Result = function (_DataDisplay11) {
	    _inherits(Result, _DataDisplay11);

	    function Result(props) {
	        _classCallCheck(this, Result);

	        var _this11 = _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));

	        _this11.__init();
	        return _this11;
	    }

	    _createClass(Result, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Result, this.__props);
	        }
	    }]);

	    return Result;
	}(_DataDisplay13.default);

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(74);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(134);

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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SwipeAction = exports.PullRefresh = exports.Button = exports.IconPlus = exports.Icon = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(84);

	var _Genaral6 = __webpack_require__(138);

	var _Genaral7 = _interopRequireDefault(_Genaral6);

	var _antdMobile = __webpack_require__(82);

	var Antd = _interopRequireWildcard(_antdMobile);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Genaral 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/************* Icon 图标 ************************************************************************** */

	var Icon = exports.Icon = function (_Genaral) {
	    _inherits(Icon, _Genaral);

	    function Icon(props) {
	        _classCallCheck(this, Icon);

	        var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Icon, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Icon, this.__props);
	        }
	    }]);

	    return Icon;
	}(_Genaral7.default);
	// 更多按钮


	var IconPlus = exports.IconPlus = function (_Genaral2) {
	    _inherits(IconPlus, _Genaral2);

	    function IconPlus(props) {
	        _classCallCheck(this, IconPlus);

	        var _this2 = _possibleConstructorReturn(this, (IconPlus.__proto__ || Object.getPrototypeOf(IconPlus)).call(this, props));

	        _this2.__init();
	        return _this2;
	    }

	    _createClass(IconPlus, [{
	        key: 'render',
	        value: function render() {
	            var type = (this.__props.type || '').replace('icon-', '');
	            return _react2.default.createElement('i', _extends({}, this.__props, this.__getCommonProps({ className: 'iconfont icon-' + type })));
	        }
	    }]);

	    return IconPlus;
	}(_Genaral7.default);

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
	}(_Genaral7.default);

	/************* PullRefresh 拉动刷新 ************************************************************************** */

	var PullRefresh = exports.PullRefresh = function (_Genaral4) {
	    _inherits(PullRefresh, _Genaral4);

	    function PullRefresh(props) {
	        _classCallCheck(this, PullRefresh);

	        var _this4 = _possibleConstructorReturn(this, (PullRefresh.__proto__ || Object.getPrototypeOf(PullRefresh)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(PullRefresh, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.PullToRefresh, this.__props);
	        }
	    }]);

	    return PullRefresh;
	}(_Genaral7.default);

	/************* SwipeAction 滑动操作 ************************************************************************** */

	var SwipeAction = exports.SwipeAction = function (_Genaral5) {
	    _inherits(SwipeAction, _Genaral5);

	    function SwipeAction(props) {
	        _classCallCheck(this, SwipeAction);

	        var _this5 = _possibleConstructorReturn(this, (SwipeAction.__proto__ || Object.getPrototypeOf(SwipeAction)).call(this, props));

	        _this5.__init();
	        return _this5;
	    }

	    _createClass(SwipeAction, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.SwipeAction, this.__props);
	        }
	    }]);

	    return SwipeAction;
	}(_Genaral7.default);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(74);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(134);

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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TabBar = exports.Tabs = exports.Pagination = exports.NavBar = exports.Drawer = exports.Step = exports.Steps = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _Navigation8 = __webpack_require__(140);

	var _Navigation9 = _interopRequireDefault(_Navigation8);

	var _antdMobile = __webpack_require__(82);

	var Antd = _interopRequireWildcard(_antdMobile);

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

	/************ Steps 步骤条 *************************************************************************** */

	var Steps = exports.Steps = function (_Navigation) {
	    _inherits(Steps, _Navigation);

	    function Steps(props) {
	        _classCallCheck(this, Steps);

	        var _this = _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Steps, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Steps, this.__props);
	        }
	    }]);

	    return Steps;
	}(_Navigation9.default);
	// Step 单条步骤


	var Step = exports.Step = function (_Navigation2) {
	    _inherits(Step, _Navigation2);

	    function Step(props) {
	        _classCallCheck(this, Step);

	        var _this2 = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this, props));

	        _this2.__init();
	        return _this2;
	    }

	    _createClass(Step, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Steps.Step, this.__props);
	        }
	    }]);

	    return Step;
	}(_Navigation9.default);

	/************ Drawer 抽屉 *************************************************************************** */

	var Drawer = exports.Drawer = function (_Navigation3) {
	    _inherits(Drawer, _Navigation3);

	    function Drawer(props) {
	        _classCallCheck(this, Drawer);

	        var _this3 = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(Drawer, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Drawer, this.__props);
	        }
	    }]);

	    return Drawer;
	}(_Navigation9.default);

	/************ NavBar 导航栏 *************************************************************************** */

	var NavBar = exports.NavBar = function (_Navigation4) {
	    _inherits(NavBar, _Navigation4);

	    function NavBar(props) {
	        _classCallCheck(this, NavBar);

	        var _this4 = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(NavBar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.NavBar, this.__props);
	        }
	    }]);

	    return NavBar;
	}(_Navigation9.default);

	/************ Pagination 分页器 *************************************************************************** */

	var Pagination = exports.Pagination = function (_Navigation5) {
	    _inherits(Pagination, _Navigation5);

	    function Pagination(props) {
	        _classCallCheck(this, Pagination);

	        var _this5 = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

	        _this5.__init();
	        return _this5;
	    }

	    _createClass(Pagination, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Pagination, this.__props);
	        }
	    }]);

	    return Pagination;
	}(_Navigation9.default);

	/************ Tabs 标签页 *************************************************************************** */

	var Tabs = exports.Tabs = function (_Navigation6) {
	    _inherits(Tabs, _Navigation6);

	    function Tabs(props) {
	        _classCallCheck(this, Tabs);

	        var _this6 = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

	        _this6.__init();
	        return _this6;
	    }

	    _createClass(Tabs, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Tabs, this.__props);
	        }
	    }]);

	    return Tabs;
	}(_Navigation9.default);

	/************ TabBar 标签栏 *************************************************************************** */

	var TabBar = exports.TabBar = function (_Navigation7) {
	    _inherits(TabBar, _Navigation7);

	    function TabBar(props) {
	        _classCallCheck(this, TabBar);

	        var _this7 = _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).call(this, props));

	        _this7.__init();
	        return _this7;
	    }

	    _createClass(TabBar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.TabBar, this.__props);
	        }
	    }]);

	    return TabBar;
	}(_Navigation9.default);

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(74);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(134);

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
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.notification = exports.message = exports.Loading = exports.Progress = exports.ActionSheet = exports.Modal = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(74);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Feedback5 = __webpack_require__(142);

	var _Feedback6 = _interopRequireDefault(_Feedback5);

	var _utils = __webpack_require__(84);

	var _src = __webpack_require__(72);

	var _src2 = _interopRequireDefault(_src);

	var _instance = __webpack_require__(121);

	var _antdMobile = __webpack_require__(82);

	var Antd = _interopRequireWildcard(_antdMobile);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Layout 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/************* Modal 对话框 ************************************************************************** */
	var Modal = exports.Modal = function (_Feedback) {
	    _inherits(Modal, _Feedback);

	    function Modal(props) {
	        _classCallCheck(this, Modal);

	        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Modal, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Modal, this.__props);
	        }
	    }]);

	    return Modal;
	}(_Feedback6.default);

	/******** Modal自带快捷调用函数 **********/
	// 统一处理config（某些属性需要二次解析）


	function showMessage(type, insName, config) {
	    var _arr = ['title', 'content'];

	    for (var _i = 0; _i < _arr.length; _i++) {
	        var v = _arr[_i];
	        if (config[v] && !_utils.Utils.typeof(config[v], 'string')) {
	            config[v] = ((0, _instance.getInstance)(insName) || _src2.default).render(config[v]);
	        }
	    }
	    // 不同函数的参数列表不同
	    var argslist = [];
	    switch (type) {
	        case 'alert':
	            argslist = ['title', 'message', 'actions', 'platform'];
	            break;
	        case 'prompt':
	            argslist = ['title', 'message', 'callbackOrActions', 'mode', 'defaultValue', 'placeholders', 'platform'];
	            break;
	        case 'operation':
	            argslist = ['actions', 'platform'];
	            break;
	    }
	    var args = argslist.map(function (v) {
	        return config[v];
	    });
	    return Antd.Modal[type].apply(Antd.Modal, args);
	}
	Modal.alert = showMessage.bind(null, 'alert');
	Modal.prompt = showMessage.bind(null, 'prompt');
	Modal.operation = showMessage.bind(null, 'operation');

	/************* ActionSheet 动作面板 ************************************************************************** */

	var ActionSheet = exports.ActionSheet = function (_Feedback2) {
	    _inherits(ActionSheet, _Feedback2);

	    function ActionSheet(props) {
	        _classCallCheck(this, ActionSheet);

	        var _this2 = _possibleConstructorReturn(this, (ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call(this, props));

	        _this2.__init();
	        return _this2;
	    }

	    _createClass(ActionSheet, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.ActionSheet, this.__props);
	        }
	    }]);

	    return ActionSheet;
	}(_Feedback6.default);

	/************* Progress 进度条 ************************************************************************** */


	var Progress = exports.Progress = function (_Feedback3) {
	    _inherits(Progress, _Feedback3);

	    function Progress(props) {
	        _classCallCheck(this, Progress);

	        var _this3 = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(Progress, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Progress, this.__props);
	        }
	    }]);

	    return Progress;
	}(_Feedback6.default);

	/************* Loading 加载中 ************************************************************************** */


	var Loading = exports.Loading = function (_Feedback4) {
	    _inherits(Loading, _Feedback4);

	    function Loading(props) {
	        _classCallCheck(this, Loading);

	        var _this4 = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(Loading, [{
	        key: 'loading',
	        value: function loading(status) {
	            this.__setProps({ loading: status });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.ActivityIndicator, _extends({}, _utils.Utils.filter(this.__props, 'loading'), {
	                animating: !!this.__props.loading }));
	        }
	    }]);

	    return Loading;
	}(_Feedback6.default);

	/************* message 提示 ************************************************************************** */

	// 保存当前未销毁的提示信息的销毁函数


	var currentMessageHandle = {};
	var messageAutoMerge = true;
	// 统一处理config（某些属性需要二次解析）
	function messageHandler(type, insName, config, duration, onClose) {
	    var _Antd$message;

	    // key 相同的提示信息只展示一个
	    var key = _utils.Utils.hash({ type: type, config: config });
	    if (messageAutoMerge && currentMessageHandle[key]) {
	        // 先创建，再销毁
	        _utils.Utils.defer(currentMessageHandle[key]);
	    }
	    // 重写onClose函数
	    close = function close() {
	        delete currentMessageHandle[key];
	        onClose && onClose.apply(undefined, arguments);
	    };
	    if (_utils.Utils.typeof(config, ['object', 'array'])) {
	        config = ((0, _instance.getInstance)(insName) || _src2.default).render(config);
	    }
	    // 保存销毁函数，当key相同时，先销毁旧的，重新创建新的

	    for (var _len = arguments.length, params = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	        params[_key - 5] = arguments[_key];
	    }

	    var distroy = (_Antd$message = Antd.message)[type].apply(_Antd$message, [config, duration, close].concat(params));
	    currentMessageHandle[key] = distroy;
	    return distroy;
	}
	// 拦截 message.config ，加入自定义参数处理
	function messageConfHandler(insName, conf) {
	    if (conf.autoMerge !== undefined) {
	        messageAutoMerge = conf.autoMerge;
	    }
	    return Antd.message.config(_utils.Utils.filter(conf, ['autoMerge']));
	}

	var message = exports.message = Object.assign({}, Antd.message, {
	    success: messageHandler.bind(null, 'success'),
	    error: messageHandler.bind(null, 'error'),
	    info: messageHandler.bind(null, 'info'),
	    warning: messageHandler.bind(null, 'warning'),
	    warn: messageHandler.bind(null, 'warn'),
	    loading: messageHandler.bind(null, 'loading'),
	    config: messageConfHandler.bind(null)
	});

	/************* notification 提示 ************************************************************************** */
	// 复用message
	var notification = exports.notification = Object.assign({}, Antd.notification, {
	    success: messageConfHandler.bind(null, 'success'),
	    error: messageConfHandler.bind(null, 'error'),
	    info: messageConfHandler.bind(null, 'info'),
	    warning: messageConfHandler.bind(null, 'warning'),
	    warn: messageConfHandler.bind(null, 'warn'),
	    open: messageConfHandler.bind(null, 'info'),
	    config: messageConfHandler.bind(null)
	});

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(74);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(134);

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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.WhiteSpace = exports.WingBlank = exports.FlexItem = exports.Flex = exports.Grid = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _Layout = __webpack_require__(144);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _utils = __webpack_require__(84);

	var _antdMobile = __webpack_require__(82);

	var Antd = _interopRequireWildcard(_antdMobile);

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

	/************* Grid 宫格 ************************************************************************** */
	var Grid = exports.Grid = function (_BaseLayout) {
	    _inherits(Grid, _BaseLayout);

	    function Grid(props) {
	        _classCallCheck(this, Grid);

	        var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Grid, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(Antd.Grid, _extends({}, _utils.Utils.filter(this.__props, ['items']), {
	                data: (this.__props.items || []).map(function (v) {
	                    if (v && _utils.Utils.typeof(v.icon, 'object')) {
	                        v.icon = _this2.__analysis(v.icon);
	                    }
	                    return v;
	                }) }));
	        }
	    }]);

	    return Grid;
	}(_Layout2.default);

	/************* Flex 布局 ************************************************************************** */


	var Flex = exports.Flex = function (_BaseLayout2) {
	    _inherits(Flex, _BaseLayout2);

	    function Flex(props) {
	        _classCallCheck(this, Flex);

	        var _this3 = _possibleConstructorReturn(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).call(this, props));

	        _this3.__init();
	        return _this3;
	    }

	    _createClass(Flex, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Flex, this.__props);
	        }
	    }]);

	    return Flex;
	}(_Layout2.default);

	var FlexItem = exports.FlexItem = function (_BaseLayout3) {
	    _inherits(FlexItem, _BaseLayout3);

	    function FlexItem(props) {
	        _classCallCheck(this, FlexItem);

	        var _this4 = _possibleConstructorReturn(this, (FlexItem.__proto__ || Object.getPrototypeOf(FlexItem)).call(this, props));

	        _this4.__init();
	        return _this4;
	    }

	    _createClass(FlexItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Flex.Item, this.__props);
	        }
	    }]);

	    return FlexItem;
	}(_Layout2.default);

	/************* WingBlank 两翼留白 ************************************************************************** */


	var WingBlank = exports.WingBlank = function (_BaseLayout4) {
	    _inherits(WingBlank, _BaseLayout4);

	    function WingBlank(props) {
	        _classCallCheck(this, WingBlank);

	        var _this5 = _possibleConstructorReturn(this, (WingBlank.__proto__ || Object.getPrototypeOf(WingBlank)).call(this, props));

	        _this5.__init();
	        return _this5;
	    }

	    _createClass(WingBlank, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.WingBlank, this.__props);
	        }
	    }]);

	    return WingBlank;
	}(_Layout2.default);

	/************* WhiteSpace 上下留白 ************************************************************************** */


	var WhiteSpace = exports.WhiteSpace = function (_BaseLayout5) {
	    _inherits(WhiteSpace, _BaseLayout5);

	    function WhiteSpace(props) {
	        _classCallCheck(this, WhiteSpace);

	        var _this6 = _possibleConstructorReturn(this, (WhiteSpace.__proto__ || Object.getPrototypeOf(WhiteSpace)).call(this, props));

	        _this6.__init();
	        return _this6;
	    }

	    _createClass(WhiteSpace, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.WhiteSpace, this.__props);
	        }
	    }]);

	    return WhiteSpace;
	}(_Layout2.default);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(74);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(134);

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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(80);

	var _base = __webpack_require__(78);

	var _utils = __webpack_require__(84);

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
	            // if (nextProps.src !== this.__prevProps.src) {
	            if (nextProps.src !== this.props.src) {
	                var hashIndex = nextProps.src.indexOf('#');
	                var srcHashIndex = this.props.src.indexOf('#');
	                // 如果只是变更hash值，则不需要再展示loading
	                if (hashIndex > -1 && nextProps.src.slice(0, hashIndex) === this.props.src.slice(0, srcHashIndex)) {
	                    return;
	                }
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

	            var style = { height: this.__props.height, width: this.__props.width };
	            return _react2.default.createElement(
	                'div',
	                _extends({}, this.__getCommonProps({ className: 'uf-iframe', style: style }), { ref: function ref(ele) {
	                        return _this2.root = ele;
	                    },
	                    'data-src': new URL(this.__props.src, window.location.href).href }),
	                this.__props.showLoading && this.state.loading && _react2.default.createElement(_antd.Spin, { spinning: true, className: 'uf-iframe-loading' }),
	                _react2.default.createElement('iframe', _extends({}, _utils.Utils.filter(this.__props, ['showLoading', 'delay', 'className', 'style', 'height', 'width']), {
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
	            );
	        }
	    }]);

	    return Iframe;
	}(_base.BaseComponent);

	exports.default = Iframe;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    Ueditor: __webpack_require__(148).default,
	    UeditorParse: __webpack_require__(149).default
	};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(78);

	var _utils = __webpack_require__(84);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Ueditor封装
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// export default class Ueditor extends React.PureComponent {
	var Ueditor = function (_BaseComponent) {
	    _inherits(Ueditor, _BaseComponent);

	    function Ueditor(props) {
	        _classCallCheck(this, Ueditor);

	        // 在form组件中使用时，会额外传入一个 data-__meta 字段
	        var _this = _possibleConstructorReturn(this, (Ueditor.__proto__ || Object.getPrototypeOf(Ueditor)).call(this, props));

	        _this._filter.push('data-__meta');
	        _this.name = _this._getTransmitName();
	        _this.ueditor = null;
	        // 保证每次实例化都有一个唯一的id
	        _this.ueditorId = (_this.name || 'create_editor') + '_' + Date.now();
	        _this.data = props.data;
	        return _this;
	    }

	    _createClass(Ueditor, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // Should be a controlled component.
	            if ('data' in nextProps) {
	                if (this.data !== nextProps.data) {
	                    this.data = nextProps.data;
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
	            _utils.Utils.retry(function () {
	                if (!_this2.ue.body) {
	                    return false;
	                }
	                _this2.ue.setContent(value);
	            }, 300, 5);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            this._factory.$requirejs(['ueditor'], function (UE) {
	                // ueditor未做umd兼容，而且不知为何 requirejs shim 无效，只能从window上拿
	                _this3.ueditor = window.UE;
	                _this3.initUeditor();
	                _this3.ueSetData(_this3.data);
	            });
	        }
	    }, {
	        key: 'initUeditor',
	        value: function initUeditor() {
	            var _this4 = this;

	            // 初始化
	            var config = {
	                autoHeightEnabled: true,
	                autoFloatEnabled: true,
	                elementPathEnabled: false,
	                wordCount: false,
	                zIndex: 0,
	                fontsize: [12, 14, 16, 18, 20, 24],
	                toolbars: [['source', '|', 'undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'paragraph', 'fontfamily', 'fontsize', '|', 'superscript', 'subscript', '|', 'forecolor', 'backcolor', '|', 'removeformat', '|', 'insertorderedlist', 'insertunorderedlist', 'inserttable', '|', 'selectall', 'cleardoc', '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'link', 'unlink', '|', 'map', '|', 'horizontal', 'print', 'preview', 'fullscreen', 'drafts', 'formula', '|', 'cusUpload']]
	            };
	            // 简版，适合给普通用户使用
	            // 默认为简版
	            if (this.props.simple === undefined || this.props.simple) {
	                config['toolbars'] = [['undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'fontsize', 'forecolor', 'removeformat', '|', 'insertorderedlist', 'insertunorderedlist', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'link', 'fullscreen', 'cusUpload']];
	            }
	            Object.assign(config, _utils.Utils.filter(this.props, this._filter));
	            console.log(config);
	            this.ue = this.ueditor.getEditor(this.ueditorId, config);
	            // 同步数据
	            var contentChange = _utils.Utils.debounce(function () {
	                var newValue = _this4.ue.getContent();
	                _this4.triggerChange(newValue);
	            }, 150);
	            this.ue.addListener('contentChange', contentChange);
	            this._transmitComponent();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            // 需要销毁，否则再次渲染本组件，ueditor渲染不出来
	            this.ue.destroy();
	            this._unsetTransmitComponent();
	        }
	        // 共享组件

	    }, {
	        key: '_transmitComponent',
	        value: function _transmitComponent() {
	            if (!!this.name) {
	                this._factory.$components.set(this.name, this.ue);
	            }
	        }
	        // 解除共享

	    }, {
	        key: '_unsetTransmitComponent',
	        value: function _unsetTransmitComponent() {
	            if (!!this.name) {
	                this._factory.$components.del(this.name);
	            }
	        }
	    }, {
	        key: 'triggerChange',
	        value: function triggerChange(changedValue) {
	            if (this.data !== changedValue) {
	                this.data = changedValue;
	                // Should provide an event to pass value to Form.
	                this.props.onChange && this.props.onChange(changedValue);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var style = Object.assign({ width: '100%', height: '220px', lineHeight: 'initial' }, this.props.style);
	            return _react2.default.createElement('script', { type: 'text/plain', id: this.ueditorId, style: style });
	        }
	    }]);

	    return Ueditor;
	}(_base.BaseComponent);

	exports.default = Ueditor;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _dom = __webpack_require__(76);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Ueditor内容解析器，对ueditor编辑的内容进行展示
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var UeditorParse = function (_Html) {
	    _inherits(UeditorParse, _Html);

	    function UeditorParse(props) {
	        _classCallCheck(this, UeditorParse);

	        var _this = _possibleConstructorReturn(this, (UeditorParse.__proto__ || Object.getPrototypeOf(UeditorParse)).call(this, props));

	        _this.type = 'div';
	        return _this;
	    }
	    // 解析


	    _createClass(UeditorParse, [{
	        key: 'parse',
	        value: function parse() {
	            window.uParse('#' + this.ueditorId, {
	                rootPath: window.UEDITOR_HOME_URL
	            });
	        }
	    }, {
	        key: '_beforeInit',
	        value: function _beforeInit() {
	            _get(UeditorParse.prototype.__proto__ || Object.getPrototypeOf(UeditorParse.prototype), '_beforeInit', this).call(this);
	            // 保证每次实例化都有一个唯一的id
	            this.ueditorId = (this._getTransmitName() || 'editor_parse') + '_' + Date.now();
	            this.__props.id = this.ueditorId;
	        }
	        // 加载ueditor相关文件

	    }, {
	        key: '_componentDidMount',
	        value: function _componentDidMount() {
	            var _this2 = this;

	            _get(UeditorParse.prototype.__proto__ || Object.getPrototypeOf(UeditorParse.prototype), '_componentDidMount', this).call(this);
	            this._factory.$requirejs(['ueditor'], function (UE) {
	                _this2.parse();
	            });
	        }
	    }, {
	        key: '_componentDidUpdate',
	        value: function _componentDidUpdate(prevProps, prevState) {
	            _get(UeditorParse.prototype.__proto__ || Object.getPrototypeOf(UeditorParse.prototype), '_componentDidUpdate', this).call(this);
	            this.parse();
	        }
	    }]);

	    return UeditorParse;
	}(_dom.Html);

	exports.default = UeditorParse;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Echarts 入口
	 */

	module.exports = __webpack_require__(151).default;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(78);

	var _utils = __webpack_require__(84);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Echarts封装
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Echarts = function (_BaseComponent) {
	    _inherits(Echarts, _BaseComponent);

	    function Echarts(props) {
	        _classCallCheck(this, Echarts);

	        var _this = _possibleConstructorReturn(this, (Echarts.__proto__ || Object.getPrototypeOf(Echarts)).call(this, props));

	        _this._filter.push('type');
	        // 保证每次实例化都有一个唯一的id
	        _this.chartId = (props.__key || 'create_echarts') + '_' + _utils.Utils.uniqueId();
	        _this.echarts;
	        _this.chart;
	        _this.chartOptionsQueue = [];
	        _this.__init();
	        return _this;
	    }

	    _createClass(Echarts, [{
	        key: '_afterSetProps',
	        value: function _afterSetProps() {
	            _get(Echarts.prototype.__proto__ || Object.getPrototypeOf(Echarts.prototype), '_afterSetProps', this).call(this);
	            // 改变生命周期
	            if (this.__filtered.afterCreate) {
	                this.__filtered.oriAfterCreate = this.__filtered.afterCreate;
	                delete this.__filtered.afterCreate;
	            }
	        }
	    }, {
	        key: 'setOption',
	        value: function setOption(nextProps) {
	            if (this.chart) {
	                this.chart.setOption(this.__filterProps(nextProps));
	                this.__setProps(this.chart.getOption());
	            } else {
	                // 如果set时还没有创建chart，则先将内容缓存起来，等chart创建后再进行set处理
	                this.chartOptionsQueue.push(nextProps);
	                this.startTry();
	            }
	        }
	        // 尝试获取this.chart，直到获取到

	    }, {
	        key: 'startTry',
	        value: function startTry() {
	            var _this2 = this;

	            // 这里重试10次，间隔200ms
	            _utils.Utils.retry(function () {
	                if (!_this2.chart) {
	                    return false;
	                }
	                // 将队列里的值依次set一遍
	                _this2.chartOptionsQueue.forEach(function (props) {
	                    _this2.setOption(props);
	                });
	                // 清空队列
	                _this2.chartOptionsQueue = [];
	            }, 200, 10);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // if (Utils.isChange(this.__prevProps, this.__filterProps(nextProps))) {
	            //     this.chart.setOption(this.__filterProps(nextProps));
	            // }
	            this.setOption(nextProps);
	        }
	        // 修改获取数据的时机，初始化时不进行数据获取，等chart初始化完成后

	    }, {
	        key: '_handleAsyncData',
	        value: function _handleAsyncData() {
	            if (this.chart) {
	                this.waitToGetData = false;
	                _get(Echarts.prototype.__proto__ || Object.getPrototypeOf(Echarts.prototype), '_handleAsyncData', this).call(this);
	            } else {
	                this.waitToGetData = true;
	            }
	        }
	    }, {
	        key: '_trueHandleAsyncData',
	        value: function _trueHandleAsyncData() {
	            if (this.waitToGetData) {
	                this._handleAsyncData();
	            }
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            // 只有className/style变，才刷新当前组件，否则只进行setOption处理就行了
	            if (_utils.Utils.isChange({ className: nextProps.className, style: nextProps.style }, this.__prevProps)) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            // 执行的时候再获取
	            var echarts = window.echarts;
	            if (echarts) {
	                this.echarts = echarts;
	                this.initEcharts();
	            } else {
	                // 惰性加载
	                // echarts 的路径见 src/config/default/index.js 中的配置
	                this._factory.$requirejs(['echarts'], function (echarts) {
	                    _this3.echarts = echarts;
	                    _this3.initEcharts();
	                });
	            }
	        }
	    }, {
	        key: 'initEcharts',
	        value: function initEcharts() {
	            if (this.echarts) {
	                // 初始化
	                var chart = this.echarts.init(document.getElementById(this.chartId));
	                chart.setOption(this.__props);
	                this.chart = chart;
	                this._transmitComponent();

	                // 把echarts的api全部转移到当前组件上
	                this._agencyFunction(chart);
	                this._agencyFunction(Object.getPrototypeOf(chart));

	                // 真正创建完echarts时再异步获取数据
	                this._trueHandleAsyncData();
	                // 真正创建完echarts时再执行用户配置的afterCreate逻辑
	                this.__filtered.oriAfterCreate && this.__filtered.oriAfterCreate();
	            } else {
	                _utils.Utils.defer(console.error, 'There is no echarts, please check.');
	            }
	        }
	    }, {
	        key: '_agencyFunction',
	        value: function _agencyFunction(origin) {
	            var _this4 = this;

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                var _loop = function _loop() {
	                    var i = _step.value;

	                    if (_utils.Utils.typeof(origin[i], 'function')) {
	                        _this4._inject(_this4, i, function () {
	                            var _chart;

	                            return (_chart = _this4.chart)[i].apply(_chart, arguments);
	                        });
	                    }
	                };

	                for (var _iterator = Object.keys(origin)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            // 销毁组件
	            this.chart && this.chart.dispose();
	            // this._unsetTransmitComponent();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('div', { id: this.chartId, className: this.props.className, style: this.props.style });
	        }
	    }]);

	    return Echarts;
	}(_base.BaseComponent);

	exports.default = Echarts;

/***/ }),
/* 152 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * @file 程序中引用的环境相关变量
	 * @author liuzechun
	 * Created Date: 2018-07-30 12:46:16
	 */

	var hostname = window.location.hostname;
	var isProd = !['epc.baidu.com', 'yf-sys-ump-ur-fe.yf01.baidu.com'].some(function (v) {
	    return hostname.indexOf(v) > -1;
	});

	module.exports = {
	    production: isProd,
	    basePath: isProd ? 'http://uf.baidu.com' : 'http://antd.uf.baidu.com:8099',
	    pluginPath: isProd ? 'http://uf.baidu.com/v/plugins/' : 'http://antd.uf.baidu.com:8099/v/plugins/'
	};

/***/ }),
/* 153 */
/***/ (function(module, exports) {

	module.exports = window.DLL.moment_zh_cn;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(155);

	var _config2 = _interopRequireDefault(_config);

	var _components = __webpack_require__(159);

	var _components2 = _interopRequireDefault(_components);

	var _model = __webpack_require__(160);

	var _model2 = _interopRequireDefault(_model);

	var _ajax = __webpack_require__(161);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _instance = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// module.exports = {Config, ComponentsCache, ModelCache};

	module.exports = {
	    init: function init(insName) {
	        var obj = {};

	        obj.Config = _config2.default.init(insName);
	        (0, _instance.setConfig)(insName, obj.Config);

	        obj.ComponentsCache = _components2.default.init(insName);
	        (0, _instance.setComponentCache)(insName, obj.ComponentsCache);

	        obj.ModelCache = _model2.default.init(insName);
	        (0, _instance.setModelCache)(insName, obj.ModelCache);

	        obj.AjaxCache = _ajax2.default.init(insName);
	        (0, _instance.setAjaxCache)(insName, obj.AjaxCache);

	        return obj;
	    }
	};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _BaseCache2 = __webpack_require__(122);

	var _BaseCache3 = _interopRequireDefault(_BaseCache2);

	var _default = __webpack_require__(156);

	var _default2 = _interopRequireDefault(_default);

	var _utils = __webpack_require__(85);

	var _utils2 = _interopRequireDefault(_utils);

	var _instance = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 默认配置
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      可以用于配置各个组件通用的默认参数
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      用户可以使用 `UF.config()` 来更改或者自定义任何默认参数
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-10-11 01:40:57
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Last Modified: 2017-10-11 01:42:17
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Modified By: liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Config = function (_BaseCache) {
	    _inherits(Config, _BaseCache);

	    function Config() {
	        _classCallCheck(this, Config);

	        return _possibleConstructorReturn(this, (Config.__proto__ || Object.getPrototypeOf(Config)).apply(this, arguments));
	    }

	    _createClass(Config, [{
	        key: 'get',
	        value: function get(names) {
	            var result = _get(Config.prototype.__proto__ || Object.getPrototypeOf(Config.prototype), 'get', this).call(this, names);
	            // 组件全局配置components为引用类型，组件使用时对配置进行更改会影响全局，需要clone一份
	            if (names && names.split('.')[0] === 'components') {
	                result = _utils2.default.clone(result);
	            }
	            return result;
	        }
	    }]);

	    return Config;
	}(_BaseCache3.default);

	// export default (new Config(Default));

	exports.default = (0, _instance.generate)(function () {
	    return new Config(_utils2.default.clone(_default2.default));
	});

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _env = __webpack_require__(152);

	var _env2 = _interopRequireDefault(_env);

	var _baseComponents = __webpack_require__(157);

	var _baseComponents2 = _interopRequireDefault(_baseComponents);

	var _components = __webpack_require__(158);

	var _components2 = _interopRequireDefault(_components);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 指定ueditor资源路径，否则css等加载路径不对
	window.UEDITOR_HOME_URL = _env2.default.basePath + '/third_party/ueditor/'; /**
	                                                                             * @file 全局默认配置
	                                                                             * @author liuzechun
	                                                                             * Created Date: 2018-01-30 10:55:45
	                                                                             */

	exports.default = {
	    // 模块引入相关配置
	    modules: {
	        // 加载模块时是否展示loading
	        showLoading: false,
	        paths: {
	            'echarts': _env2.default.basePath + '/third_party/echarts/echarts' + (_env2.default.production ? '.min' : ''),
	            'ueditor': _env2.default.basePath + '/third_party/ueditor/ueditor.all' + (_env2.default.production ? '.min' : ''),
	            'ueditorconfig': _env2.default.basePath + '/third_party/ueditor/ueditor.config' + (_env2.default.production ? '.min' : ''),
	            'zeroclipboard': _env2.default.basePath + '/third_party/ueditor/ZeroClipboard' + (_env2.default.production ? '.min' : ''),
	            'ueditorparse': _env2.default.basePath + '/third_party/ueditor/ueditor.parse' + (_env2.default.production ? '.min' : '')
	        },
	        shim: {
	            'ueditor': ['zeroclipboard', 'ueditorconfig', 'ueditorparse'],
	            'echarts': {
	                exports: 'echarts'
	            }
	        }
	    },
	    // 全局系统配置
	    global: {
	        // 设置文档域 document.domain，默认为原始值
	        domain: document.domain,
	        // ajax 的全局配置，可更改全部 ajax 规则（例如报错规则）
	        ajax: {}
	    },
	    // 组件默认配置
	    components: Object.assign(_baseComponents2.default, _components2.default),
	    // 权限点，用户有权限的权限点列表
	    // key（权限点） => value（boolen/object）
	    authority: {}
	};

/***/ }),
/* 157 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @file 基类默认配置，即一类组件通用配置
	 *
	 * Author: liuzechun (liuzechun@baidu.com)
	 * Created: 2019-01-11 14:07:12
	 */

	exports.default = {
	    'base-component': {
	        control: {
	            trigger: 'onClick'
	        },
	        source: {
	            // 如果组件没有设置target，则
	            // target: 'content',
	            // 默认自动移除空参数
	            removeEmptyParams: true
	        },
	        api: {
	            showLoading: true,
	            trigger: 'onClick',
	            method: 'post'
	        }
	    },
	    'antd': {},
	    'data-entry': {
	        api: {
	            trigger: 'onChange'
	        },
	        source: {
	            // 获取数据时展示loading
	            showLoading: false,
	            target: 'value'
	        },
	        control: {
	            trigger: 'onChange',
	            handler: function handler() {
	                for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
	                    p[_key] = arguments[_key];
	                }

	                return p[p.length - 1].getValue();
	            }
	        }
	    },

	    /*************************************************************************************/
	    /*********************** 其他PC、移动端共用组件  ****************************************/
	    /*************************************************************************************/

	    'router': {
	        history: 'hashHistory'
	    },
	    'iframe': {
	        mode: 'auto',
	        delay: 0,
	        showLoading: true
	    },
	    'echarts': {
	        style: {
	            width: '100%',
	            height: 400
	        }
	    }

	};

/***/ }),
/* 158 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @file 普通组件默认配置
	 *
	 * Author: liuzechun (liuzechun@baidu.com)
	 * Created: 2019-01-11 14:06:24
	 */

	exports.default = {
	  'button': {}
	};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _BaseCache2 = __webpack_require__(122);

	var _BaseCache3 = _interopRequireDefault(_BaseCache2);

	var _instance = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 组件实例缓存
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-10-24 01:40:57
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Component = function (_BaseCache) {
	    _inherits(Component, _BaseCache);

	    function Component() {
	        _classCallCheck(this, Component);

	        return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
	    }

	    _createClass(Component, [{
	        key: 'set',
	        value: function set(target, component) {
	            var isCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	            // 检查name是否冲突
	            // 升级完router再看能不能用
	            // if (isCheck) {
	            //     let theSame = this.get(target);
	            //     if (theSame && theSame.key !== component.key) {
	            //         console.error(`Warning: The prop "name" should be unique. `
	            //             + `Check the component \`${component.type}\` named "${component.cacheName}" `
	            //             + `which has the same name as the other component \`${theSame.type}\``
	            //         );
	            //     }
	            // }
	            _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'set', this).call(this, target, component);
	        }
	    }]);

	    return Component;
	}(_BaseCache3.default);

	// export default (new Component());

	// export default generate(new Component());

	exports.default = (0, _instance.generate)(function () {
	    return new Component();
	});

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(84);

	var _BaseCache = __webpack_require__(122);

	var _BaseCache2 = _interopRequireDefault(_BaseCache);

	var _instance = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// export default (new Models(_cache));

	exports.default = (0, _instance.generate)(function () {
	  return new _BaseCache2.default();
	}); /**
	     * @file 组件实例缓存
	     * @author liuzechun
	     * Created Date: 2017-10-24 01:40:57
	     */

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BaseCache2 = __webpack_require__(122);

	var _BaseCache3 = _interopRequireDefault(_BaseCache2);

	var _utils = __webpack_require__(85);

	var _utils2 = _interopRequireDefault(_utils);

	var _instance = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file ajax 数据缓存
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created Date: 2017-10-24 01:40:57
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	exports.default = (0, _instance.generate)(['Config'], function (Config) {
	    var AjaxCache = function (_BaseCache) {
	        _inherits(AjaxCache, _BaseCache);

	        function AjaxCache() {
	            _classCallCheck(this, AjaxCache);

	            // 只检测请求携带的参数
	            var _this = _possibleConstructorReturn(this, (AjaxCache.__proto__ || Object.getPrototypeOf(AjaxCache)).call(this));

	            _this.paramList = ['url', 'params', 'method', 'type', 'contentType'];
	            return _this;
	        }
	        // 检查是否需要缓存返回数据，如果需要，则根据config取hash值，并返回；否则返回null


	        _createClass(AjaxCache, [{
	            key: 'getCacheKey',
	            value: function getCacheKey(config) {
	                var cacheApis = Config.get('global.cacheApis');
	                // 开启cache的方式有两种：1、config中配置cache属性为true; 2、UF.config()中配置global.cacheApis
	                if (config.cache || cacheApis && cacheApis.indexOf(config.url) > -1) {
	                    return _utils2.default.hash(_utils2.default.pass(config, this.paramList), 32);
	                }
	                return null;
	            }

	            // 向缓存池中设置缓存数据

	        }, {
	            key: 'setCacheData',
	            value: function setCacheData(key, res) {
	                // key 通过调用处传入，保证一致性
	                // let key = this.getCacheKey(config);
	                if (key) {
	                    this.set(key, _utils2.default.clone(res));
	                }
	            }

	            // 从缓存池中获取缓存数据

	        }, {
	            key: 'getCacheData',
	            value: function getCacheData(key) {
	                // key 通过调用处传入，保证一致性
	                // let key = this.getCacheKey(config);
	                if (key) {
	                    return this.get(key);
	                }
	                return null;
	            }

	            /******* 永久缓存 *******************************************/
	            /******* 永久缓存 *******************************************/
	            /******* 永久缓存 *******************************************/

	            // 获取 localstorage 存储时所需的key

	        }, {
	            key: 'getLocalStorageKey',
	            value: function getLocalStorageKey(config) {
	                if (config.localStorage !== undefined && config.localStorage !== false) {
	                    // 如果config.localStorage为一个字符串，则给key增加后缀再进行存储
	                    var salt = _utils2.default.typeof(config.localStorage, 'string') ? config.localStorage : '';
	                    return _utils2.default.hash(_utils2.default.pass(config, this.paramList), 32) + ('-' + salt);
	                }
	                return null;
	            }

	            // 向 localStorage 中设置缓存数据

	        }, {
	            key: 'setLocalStorageData',
	            value: function setLocalStorageData(key, res) {
	                if (key) {
	                    _utils2.default.setCache(key, res);
	                }
	            }

	            // 从 localStorage 中获取缓存数据

	        }, {
	            key: 'getLocalStorageData',
	            value: function getLocalStorageData(key) {
	                if (key) {
	                    return _utils2.default.getCache(key);
	                }
	                return null;
	            }
	        }]);

	        return AjaxCache;
	    }(_BaseCache3.default);

	    return new AjaxCache();
	});

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(84);

	var _loader = __webpack_require__(163);

	var _loader2 = _interopRequireDefault(_loader);

	var _adaptor = __webpack_require__(164);

	var _adaptor2 = _interopRequireDefault(_adaptor);

	var _authority = __webpack_require__(123);

	var _authority2 = _interopRequireDefault(_authority);

	var _validator = __webpack_require__(165);

	var _validator2 = _interopRequireDefault(_validator);

	var _whitelist = __webpack_require__(124);

	var _whitelist2 = _interopRequireDefault(_whitelist);

	var _instance = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 解析配置，生成页面
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      主要负责调度各个解析工具，并生成组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// 所有使用Factory的地方，都需要传入一个insName属性
	// Factory根据insName获取各个工具实例
	var Factory = function (_PureComponent) {
	    _inherits(Factory, _PureComponent);

	    function Factory(props) {
	        _classCallCheck(this, Factory);

	        // 应用名称
	        var _this = _possibleConstructorReturn(this, (Factory.__proto__ || Object.getPrototypeOf(Factory)).call(this, props));

	        _this.insName = props.insName || '_$default';
	        // ajax 实例
	        _this.$ajax = (0, _instance.getAjax)(_this.insName);
	        // cache实例
	        _this.$config = (0, _instance.getConfig)(_this.insName);
	        _this.$components = (0, _instance.getComponentsCache)(_this.insName);
	        _this.$requirejs = (0, _instance.getRequirejs)(_this.insName);

	        _this.state = {};
	        // 解析结果缓存
	        _this.__cache = {};
	        return _this;
	    }

	    _createClass(Factory, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // 如果配置变化，清空保存的解析结果，重新解析
	            if (!_utils.Utils.equals(this.props, nextProps)) {
	                this._cacheContent = null;
	            }
	        }

	        // 解析组件配置，生成组件

	    }, {
	        key: 'generateItem',
	        value: function generateItem(item) {
	            // 如果模块是一个函数，先执行函数得到返回的配置
	            if (_utils.Utils.typeof(item, 'function')) {
	                // 如果组件想要获取到路由等信息，则可以返回一个函数，函数的参数即为路由相关信息
	                var _props = this.props,
	                    params = _props.params,
	                    location = _props.location,
	                    route = _props.route,
	                    routes = _props.routes;
	                // 第一个参数为路由携带的参数，第二个参数为其余路由信息

	                item = item(params, { params: params, location: location, route: route, routes: routes });
	                if (_utils.Utils.typeof(item, 'array')) {
	                    return this.generateElement(item);
	                }
	            }
	            // 如果不是对象或不是配置对象 直接返回
	            if (!_utils.Utils.typeof(item, 'object') || Object.isFrozen(item)) {
	                return item;
	            }
	            // 检验是否有缓存
	            // let key = Utils.hash(item);
	            // if (this.__cache[key]) {
	            //     let {Item, props} = this.__cache[key];
	            //     return <Item {...props} />;
	            // }

	            // 校验对象是否有 type 属性，如果没有直接跳过解析
	            if (!_validator2.default.check(item, 'type', 'string')) {
	                return null;
	            }
	            // 临时存储的变量，供各个tools使用
	            item.insName = this.insName;
	            // 整合组件的全部配置（包括通用配置，自定义组件配置等）
	            item = this.getConf(item);

	            // 校验权限，没权限的元素返回 null
	            if (!_authority2.default.check(item)) {
	                return null;
	            }

	            // 如果是 html 类型，使用 html 模板解析器来解析，然后直接返回
	            // if (item.type === 'html') {
	            //     // 按照正常流程走
	            //     item.type = 'section';
	            //     item.className = 'uf-html ' + (item.className || '');
	            //     item.dangerouslySetInnerHTML = {__html: item.content};
	            //     delete item.content;
	            // }
	            // 从loader中获取到相应的组件
	            var Item = _loader2.default.get(item);
	            if (!Item) {
	                return;
	            }

	            // 把 factory 的 this 传给每个组件方便组件内部进行配置解析和使用外部的props等
	            item._factory = this;

	            var props = this.handleProps(item);

	            // Update at 2018-03-13 17:02:46. 使用完后，要把在原配置中增加的多余的属性删除掉
	            delete item._factory;

	            // 有bug，路由切换了，页面无法刷新
	            // this.__cache[key] = {Item, props};

	            return _react2.default.createElement(Item, props);
	        }
	        // 获取完整的组件配置

	    }, {
	        key: 'getConf',
	        value: function getConf(item) {
	            return _loader2.default.getConf(item, this.insName);
	        }
	    }, {
	        key: 'getComp',
	        value: function getComp(item) {
	            return _loader2.default.get(item);
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
	        // 在组件配置中，childrenHolder属性指定把子页面放在父组件的哪个位置

	    }, {
	        key: 'handleChildren',
	        value: function handleChildren(props, hasChildrenHolder) {
	            // 此处把通过路由传入的子组件放在当前配置树的定义了 childrenHolder 的节点下作为组件的子组件
	            // this.props.children 是通过路由传入的子组件
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
	            // 如果是字符串直接返回
	            if (_utils.Utils.typeof(config, ['string', 'number'])) {
	                return config;
	            }
	            var result = void 0;
	            if (_utils.Utils.typeof(config, 'array')) {
	                // 如果是数组，则检查数组项中每一项是否有key，如果没有则尝试添加
	                _adaptor2.default.checkArrayItems(config);
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

	        // 
	        // 有些属性可以是ReactNode，也就是也可以配置成一个组件，所以需要再次把这些属性解析为组件

	    }, {
	        key: 'analysisAgain',
	        value: function analysisAgain(props, type) {
	            var list = _whitelist2.default.get(props, type);
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

	            return props;
	        }

	        // 获取模块配置。
	        // 如果模块为异步模块，则做异步处理

	    }, {
	        key: 'getConfig',
	        value: function getConfig() {
	            var _this2 = this;

	            var config = this.props.config;
	            if (_utils.Utils.typeof(config, 'string')) {
	                var path = this.props.config;
	                // 先检查缓存配置中是否已存在，如果不存在再重新获取
	                config = this.state[path];
	                if (!config) {
	                    this.$requirejs([path], function (foo) {
	                        // 删除缓存，保证配置刷新
	                        _this2._cacheContent = null;
	                        // 缓存获取回来的配置
	                        _this2.setState(_defineProperty({}, path, foo));
	                    });
	                    var showLoading = this.$config.get('modules.showLoading');
	                    if (_utils.Utils.typeof(showLoading, 'array')) {
	                        // config 此时为模块名称
	                        showLoading = showLoading.indexOf(config) !== -1;
	                    }
	                    config = {
	                        type: 'loading',
	                        loading: !!showLoading
	                    };
	                }
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(73);

	var _react2 = _interopRequireDefault(_react);

	var _lib = __webpack_require__(75);

	var _lib2 = _interopRequireDefault(_lib);

	var _base = __webpack_require__(78);

	var _utils = __webpack_require__(84);

	var _dom = __webpack_require__(76);

	var _instance = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file 载入组件，供 Factory 获取
	 *      根据配置的 type，转换成对应组件并返回
	 * @author liuzechun@baidu.com
	 */
	exports.default = {
	    component: Object.assign(_lib2.default),

	    // 添加组件
	    add: function add(components) {
	        Object.assign(this.component, components);
	    },


	    // 根据 type 获取组件
	    get: function get(item) {
	        var type = item.type;
	        var name = _utils.Utils.toPascal(type);
	        // 如果按照name查找不到则尝试使用转换前的type进行匹配（plugins加载过来的组件）
	        var result = this.component[name] || this.component[type];
	        // 支持动态组件，即组件仅为一个函数，函数根据参数不同返回不同的组件类
	        // if (!Utils.isExtendsOf(result, BaseComponent) && Utils.typeof(result, 'function')) {
	        //     result = result(item);
	        // }
	        if (!result) {
	            // 通过使用 o-table 来强制使用原生标签
	            if (type.indexOf('o-') === 0) {
	                type = type.substr(2);
	            }
	            // 检查是否为React原生元素
	            if (_react2.default.DOM.hasOwnProperty(type)) {
	                // 如果是Uf组件，则使用Dom组件，否则用原生的增强性能
	                if (this.isUfComponent(item)) {
	                    result = _dom.Dom;
	                } else {
	                    result = type;
	                }
	            } else {
	                this.error(type);
	            }
	        }
	        return result;
	    },


	    // 获取完整的组件配置
	    // 1、普通组件本身配置了默认属性，此处进行属性合并
	    // 2、组件的type可能为一个自定义组件，这里将其转化为普通可用的组件
	    getConf: function getConf(item) {
	        var insName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : item.insName;

	        // undefined/null/''等都能兼容处理
	        item = item || {};
	        var oType = item.type;
	        var conf = (0, _instance.getConfig)(insName).get('components.' + oType);
	        if (conf) {
	            if (_utils.Utils.typeof(conf, 'function')) {
	                conf = conf(item);
	                // 函数配置完全使用函数返回的内容，如果需要其他参数，在函数中自行合并
	                item = _utils.Utils.merge({}, conf, { type: conf.type || oType });
	            } else {
	                item = _utils.Utils.merge({}, conf, item, { type: conf.type || oType });
	            }
	        }
	        // 如果type进行了变换，则再次进行配置获取
	        if (oType !== item.type) {
	            item = this.getConf(item, insName);
	        }
	        return item;
	    },


	    // 是否是UF组件
	    // 1、如果有name，说明用户想要操作组件；
	    // 2、如果使用了数据绑定：使用Dom组件进行封装，实现组件缓存和刷新
	    // 3、如果配置了具有特殊功能的属性
	    isUfComponent: function isUfComponent(item) {
	        // return item.name || Model.if(item) || Utils.isIntersection(BaseConf.FilterProps, Object.keys(item));
	        return item.name || _utils.Utils.isIntersection(_base.BaseConf.FilterProps, Object.keys(item));
	    },


	    // 打印错误信息
	    error: function error(type) {
	        console.error('Uncaught TypeError: type \'' + type + '\' is invalid.');
	    }
	};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @file 适配器，把组件配置转换为统一规范格式
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

	// import Model from './model.js';


	var _base = __webpack_require__(78);

	var _utils = __webpack_require__(84);

	var _Antd = __webpack_require__(134);

	var _Antd2 = _interopRequireDefault(_Antd);

	var _loader = __webpack_require__(163);

	var _loader2 = _interopRequireDefault(_loader);

	var _whitelist = __webpack_require__(124);

	var _whitelist2 = _interopRequireDefault(_whitelist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 不属于config的参数，适配用户配置的参数时使用
	var KeyWord = ['name', 'type', 'content', 'childrenHolder'];
	var hashKeys = {};

	exports.default = {
	    get: function get(item) {
	        // 移到 factory.analysisAgain 时处理
	        // item.key = item.key || item.name || Utils.hash(item, null, 4);
	        // update at 2018/08/10, checkArrayItems 无法覆盖模块为函数的情况，所以此处需再次进行额外处理
	        item.key = item.key || item.name;

	        var Item = _loader2.default.get(item);
	        var props = _utils.Utils.filter(item, KeyWord);
	        // 将用户传入的函数的执行环境固定成item本身，待观察
	        props = _utils.Utils.batchBind(props, item);
	        // 把 content 转化成 children。
	        // update at 2017/10/25,如果没有content,则使用原来的children
	        // update at 2018/01/11,如果只有原来有值，才执行赋值操作
	        // if (item.content || props.children) {
	        //     props.children = item.content || props.children;
	        // }
	        if (item.content !== undefined) {
	            props.children = item.content;
	        }
	        // 格式化 class 和 style
	        props = this.formatCS(props);
	        // 如果是基于BaseComponent的组件内部要用到的属性处理
	        if (_utils.Utils.isExtendsOf(Item, _base.BaseComponent)) {
	            props['__type'] = item.type;
	            props['__key'] = props['key'];
	            // 如果有name的话，把组件放到缓存池里
	            if (item.name) {
	                props['__cache'] = item.name;
	            }
	            // if (props['__key']) {
	            //     if (Model.if(item)) {
	            //         props['__cache'] = props['__key'];
	            //     }
	            // }
	            // 由于 type 关键字把原antd等的 type 覆盖掉了，配置里用 mode 字段代替
	            // 实例化组件时，还要把 type 还原
	            if (_utils.Utils.isExtendsOf(Item, _Antd2.default)) {
	                if (props.mode) {
	                    props.type = props.mode;
	                }
	            }
	            // 因为后面要对白名单里的属性进行二次解析并覆盖属性，这里把配置转存一份，并会在BaseComponent中filter掉
	            var list = _whitelist2.default.get(props, item.type);
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var v = _step.value;

	                    props['_' + v] = props[v];
	                }
	                // 非 BaseComponent 组件 _factory 等属性无效
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
	            props.name = item.name;
	            delete props._factory;
	        }
	        // 删除供各个tools使用的临时变量 insName
	        delete props.insName;
	        // props = this.formatOthers(props);

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
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	            for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var v = _step2.value;

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

	        return obj;
	    },

	    // 检查数组项中每一项是否有值，如果没有则尝试添加
	    checkArrayItems: function checkArrayItems(items) {
	        var existKeys = {};
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;

	        try {
	            for (var _iterator3 = items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                var item = _step3.value;

	                if (_utils.Utils.typeof(item, 'object') && item.key === undefined) {
	                    item.key = item.key || item.name;
	                    if (item.key === undefined) {
	                        // 每个组件都要有key。同步设置在用户传入的config上，使key一旦设置即不再变化
	                        // 但是当配置为函数动态产生时，同步设置无效，所以使用hash值保证产生的配置相同时，key也相同
	                        // 为保证生成的key在数组中不重复，循环时临时保存生成的key，并对比当新生成的key已存在则不再进行赋值
	                        var genkey = _utils.Utils.hash(item, null, 4);
	                        if (!existKeys[genkey]) {
	                            item.key = genkey;
	                            existKeys[genkey] = true;
	                        }
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
	    },


	    /****** 针对组件的参数处理 ****************************************************************/

	    formatOthers: function formatOthers(props) {
	        switch (props.type) {}
	        return props;
	    }
	};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(84);

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
	        _utils.Utils.defer(function () {
	            console.error('Uncaught TypeError: ' + name + ' is ' + ('' + (type ? 'not ' + type : 'undefined')) + (' in item\'s config "' + JSON.stringify(item) + '"'));
	        });
	    }
	}; /**
	    * @file 数据校验器
	    * @author liuzechun
	    */

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _ajax = __webpack_require__(89);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _requirejs = __webpack_require__(167);

	var _requirejs2 = _interopRequireDefault(_requirejs);

	var _precondition = __webpack_require__(168);

	var _precondition2 = _interopRequireDefault(_precondition);

	var _instance = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    init: function init(insName) {
	        var obj = {};

	        // ajax 实例
	        obj.Ajax = _ajax2.default.init(insName);
	        (0, _instance.setAjax)(insName, obj.Ajax);

	        // requirejs 实例
	        obj.Requirejs = _requirejs2.default.init(insName);
	        (0, _instance.setRequirejs)(insName, obj.Requirejs);

	        // precondition 实例
	        obj.Precondition = _precondition2.default.init(insName);
	        (0, _instance.setPrecondition)(insName, obj.Precondition);

	        return obj;
	    }
	};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var require;var require;'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
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

	var _utils = __webpack_require__(85);

	var _utils2 = _interopRequireDefault(_utils);

	var _instance = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 保证只有一份
	var globalDefine = window.globalDefine = window.globalDefine || [];

	exports.default = (0, _instance.generate)(function (insName) {

	    // 把 insName 转化成 hashName 并缓存起来
	    // var hashName = Utils.hash(insName, 4);
	    // appList[hashName] = insName;

	    var requirejs, require, define;
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
	        if (typeof require !== 'undefined' && !isFunction(require)) {
	            //assume it is a config object.
	            cfg = require;
	            require = undefined;
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
	                        // update at 2018-07-11, 支持用户自己写.js文件后缀，如：require('path/to/app.js');
	                        url += ext || (/^data\:|^blob\:|\?/.test(url) || skipExt || jsSuffixRegExp.test(url) ? '' : '.js');
	                        url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : _config.baseUrl) + url;
	                        // update at 2018-07-14, url上额外传递参数 hashName 到每次请求中
	                        // 以供 define 函数确认当前是哪个应用调用 require 的
	                        // url += (url.indexOf('?') === -1 ? '?' : '&') + 'okey=' + hashName
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
	                    // update at 2018-07-10 by liuzechun
	                    // 当符合以下条件时：
	                    //     1、不为依赖注入写法（define(['foo'], function(foo){})），此处的体现是name格式为`_@r5`
	                    //     2、不是仅包含require的回调函数
	                    // define(($uf, require)=>{}) 函数中，额外传入一个参数`$uf`供模块使用
	                    var cbStr = callback.toString().slice(0, 50);
	                    if (name.indexOf('_@r') === -1 && cbStr.indexOf('(require)') === -1 && cbStr.indexOf('(exports)') === -1 && cbStr.indexOf('require=>') === -1 && cbStr.indexOf('require =>') === -1) {
	                        var uf = (0, _instance.getInstance)(insName);
	                        args.unshift(uf);
	                    }
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

	                        // update at 2018-07-15 by liuzechun
	                        // TODO: 待观察效果，多个requirejs同时执行时，且这里是异步会不会出错
	                        //   此处实现认为 globalDefine 中只暂存一种define内容，紧接着会在这里取走并清空
	                        //      如果define执行之后立即（同步）触发事件，不会有问题；
	                        //      如果存在 globalDefine 中出现两个不同requirejs实例存入的内容，则会出错
	                        // 从 globalDefine 中取走全部加载完成后使用全局 define 函数初始化的模块
	                        // while(globalDefine.length) {
	                        //     define.apply(undefined, globalDefine.shift());
	                        // }
	                        // update at 2018-07-31, 当有其余模块
	                        // TODO: 继续待观察
	                        //   因为使用script引入带umd检查的文件时，文件内容会通过define注册到globalDefine中
	                        //      出现多余的模块会导致整个requirejs内部模块混乱
	                        //   所以改为每次触发onScriptLoad时从堆栈中获取一个，剩余的作为僵尸模块（永远存在堆栈的底部）
	                        define.apply(undefined, globalDefine.pop());

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
	            // if the config is false, then prevent load requirejs to window
	            // update at 2018-03-19 18:47 by liuzechun
	            if (!!config) {
	                window['define'] = window['_define'];
	            }
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
	        if (!require) {
	            require = req;
	        }

	        req.version = version;

	        //Used to filter out dependencies that are already paths.
	        // update by liuzechun at 2018-07-17, 传入的.js也认为是模块id处理
	        // req.jsExtRegExp = /^\/|:|\?|\.js$/;
	        req.jsExtRegExp = /^\/|:|\?/;
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
	    })(this, typeof setTimeout === 'undefined' ? undefined : setTimeout);

	    // 保证引用，防止销毁
	    requirejs.require = require;
	    requirejs.define = define;

	    return requirejs;
	});

	// export default requirejs;

	// 重写define函数
	// 由于多个require实例的define也有多个（执行环境不同，globalDefQueue有多个）
	// 所以重写一个define函数，把模块先置于一个公共缓存池里，后续各requirejs实例主动从池中去取各自的模块

	var define = function define(name, deps, callback) {
	    globalDefine.push([name, deps, callback]);
	};
	// 供umd识别
	define.amd = {
	    jQuery: true
	};

	// update at 2018-03-19 18:41:28 by liuzechun
	// define 函数临时放在 window._define 上，防止三方模块中的define函数检查。当config有内容时，才放到 window.define 上正常使用。（见line 1807）
	window['_define'] = define;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _antd = __webpack_require__(80);

	var _instance = __webpack_require__(121);

	/**
	 * @file 执行阻塞页面加载的函数（init之前执行的函数，多为调用api）
	 * @author liuzechun
	 * Created Date: 2017-12-18 07:48:32
	 */

	exports.default = (0, _instance.generate)(function (insName) {
	    return {
	        count: 0,
	        // 设置预处理超时时间 30s
	        delay: 60000,
	        timer: null,
	        reduce: function reduce() {},
	        success: function success() {
	            if (this.count > 0 && --this.count === 0) {
	                clearTimeout(this.timer);
	                // 全部执行完成后执行再执行init初始化页面
	                (0, _instance.getInstance)(insName)._reInit();
	            }
	        },
	        error: function error(err) {
	            _antd.notification.error({
	                top: 24,
	                message: '页面载入时出错，请联系平台管理员',
	                duration: 0,
	                description: JSON.stringify(err)
	            });
	        },
	        handle: function handle(arr) {
	            var _this = this;

	            this.waiting = true;
	            this.count += arr.length;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var func = _step.value;

	                    func(this.success.bind(this), this.error.bind(this));
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

	            clearTimeout(this.timer);
	            this.timer = setTimeout(function () {
	                _this.count = 0;
	                _this.error('预加载数据超时！');
	            }, this.delay);
	        }
	    };
	});

/***/ })
/******/ ]);