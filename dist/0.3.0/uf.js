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

	// 动态加载全部主题
	// 应该是和webpack打包时的解析机制有关，当require里面包含变量时候，webpack会把整个目录下能查找到的全部内容打进去
	// 这里webpack会打包解析能找到的全部内容，所以需要在webpack.build.js里额外配置忽略theme文件夹的逻辑
	// 注意：需使用变量才能引入全部
	var dir = 'default';
	__webpack_require__(1)("./" + dir + '/index.less');

	// UF 组件库构建入口
	window['UF'] = __webpack_require__(10).default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./baidu-theme/index.less": 2,
		"./dark/index.less": 5,
		"./default/index.less": 6,
		"./green/index.less": 7,
		"./large/index.less": 8,
		"./we-theme/index.less": 9
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
	webpackContext.id = 1;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @file index.js 项目入口
	 * @author liuzechun
	 * Created Date: 2018-01-30 01:58:03
	 */

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _require = __webpack_require__(11),
	    version = _require.version;

	module.exports = _extends({
	  VERSION: version
	}, __webpack_require__(12));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = {"name":"uf","versionList":["0.2","0.2.1","0.2.2","0.2.3","0.2.4","0.2.5","0.3.0"],"version":"0.3.0","fixedVersion":"0.3.0.11","stableVersion":"0.3.0","description":"new uf","author":"liuzechun","license":"ISC","repository":{"type":"git","url":"http://icode.baidu.com/files/view/baidu/atm/uf/@tree/master"},"main":"index.js","dependencies":{"antd":"^2.13.7","immutable":"^3.8.1","moment":"^2.17.1","react":"^15.6.2","react-dom":"^15.6.2","react-router":"^3.0.0"},"devDependencies":{"autoprefixer":"^6.5.4","axios":"^0.18.0","babel-core":"^6.18.2","babel-loader":"^6.2.8","babel-plugin-import":"^1.4.0","babel-preset-es2015":"^6.18.0","babel-preset-react":"^6.16.0","babel-preset-stage-0":"^6.24.1","css-loader":"^0.26.1","extract-text-webpack-plugin":"^1.0.1","history":"^4.4.1","html2canvas":"^0.5.0-beta4","json-loader":"^0.5.4","less":"^2.7.1","less-loader":"^2.2.3","marked":"^0.3.6","postcss-loader":"^1.2.1","sass-loader":"^4.0.2","style-loader":"^0.13.1","text-loader":"0.0.1","underscore":"^1.8.3","webpack":"^1.14.0"},"scripts":{"plugins":"webpack --config plugins/webpack.plugins.js --watch","build-watch":"webpack --config dist/config/webpack.build.js --watch","antd-watch":"webpack --config dist/config/webpack.antd.js --watch","build":"webpack --config dist/config/webpack.build.js","antd":"webpack --config dist/config/webpack.antd.js","dll":"webpack --config dist/config/webpack.dll.js","react":"webpack --config dist/config/webpack.react.js","all":"npm run dll & npm run antd & npm run build","start":"webpack --watch"}}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.WhiteList = exports.Loader = exports.Factory = undefined;

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _env = __webpack_require__(15);

	var _env2 = _interopRequireDefault(_env);

	var _lib = __webpack_require__(16);

	var _lib2 = _interopRequireDefault(_lib);

	var _moment = __webpack_require__(26);

	var _moment2 = _interopRequireDefault(_moment);

	__webpack_require__(111);

	var _utils = __webpack_require__(22);

	var _cache = __webpack_require__(112);

	var _cache2 = _interopRequireDefault(_cache);

	var _factory = __webpack_require__(119);

	var _factory2 = _interopRequireDefault(_factory);

	var _loader = __webpack_require__(120);

	var _loader2 = _interopRequireDefault(_loader);

	var _whitelist = __webpack_require__(62);

	var _whitelist2 = _interopRequireDefault(_whitelist);

	var _init = __webpack_require__(123);

	var _init2 = _interopRequireDefault(_init);

	var _instance = __webpack_require__(59);

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
	        // model 数据绑定页面
	        // model: Model,
	        // 全局数据
	        get: ModelCache.get.bind(ModelCache),
	        set: ModelCache.set.bind(ModelCache),
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

	        // 向selector中插入新的组件
	        append: function append(config, selector) {
	            return this._append(config, selector);
	        },

	        // 载入自定义组件
	        load: function load(components) {
	            _loader2.default.add(components);
	        },

	        // components 配置处理，components有两种情况
	        //  1、直接为一个对象，即一系列配置对象列表
	        //  2、还有一种为一个数组，数组中每一项即可以为1中的配置对象列表，又可以为一个url（异步加载其余地方的公用配置）
	        _handleComponentsConf: function _handleComponentsConf(conf) {
	            var _this = this;

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
	                            foo && _this.config({ components: foo });
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
	        },

	        // 获取全部实例，可以和其他实例做交互
	        getIns: function getIns(name) {
	            var allIns = (0, _instance.getAll)();
	            return allIns;
	        }
	    };

	    // 绑定获取组件的函数
	    var UF = func._get;
	    Object.assign(UF, _lib2.default, func);

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
/* 13 */
/***/ (function(module, exports) {

	module.exports = window.DLL.React;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = window.DLL.ReactDOM;

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file index.js 汇总所有 src 里对用户暴露的组件
	 * @author liuzechun@baidu.com
	 */

	module.exports = Object.assign(__webpack_require__(17),
	// antd 组件统一迁移，见 src/antd/index.js
	__webpack_require__(65),
	// 路由组件
	__webpack_require__(76),
	// 其他自己实现/封装的组件
	{
	    Iframe: __webpack_require__(82),

	    AutoComplete: __webpack_require__(84),
	    Export: __webpack_require__(86),
	    Tree: __webpack_require__(88),
	    Table: __webpack_require__(90),
	    Form: __webpack_require__(97).Form,
	    Forms: __webpack_require__(97).Forms,
	    Modal: __webpack_require__(100).Modal,
	    Dashboard: __webpack_require__(100).Dashboard,
	    Ueditor: __webpack_require__(103),
	    Echarts: __webpack_require__(105),
	    Fieldset: __webpack_require__(107),
	    List: __webpack_require__(109)
	});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    Dom: __webpack_require__(18).default,
	    Html: __webpack_require__(64).default
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(19);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    BaseComponent: __webpack_require__(20).default,
	    BaseConf: __webpack_require__(20),
	    ExtendComponent: __webpack_require__(63)
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FilterProps = exports.Uncomplex = exports.PreventCoverageMap = exports.ForUserApi = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(21);

	var _utils = __webpack_require__(22);

	var _authority = __webpack_require__(61);

	var _authority2 = _interopRequireDefault(_authority);

	var _whitelist = __webpack_require__(62);

	var _whitelist2 = _interopRequireDefault(_whitelist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 基础类
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by xuziqian on 2017/8/4.
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
	    function BaseComponent(props, type) {
	        _classCallCheck(this, BaseComponent);

	        var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

	        _this.state = {};
	        // 组件类型，用于组件及其基类基础配置的获取
	        _this.class = ['base-component'];
	        // 未使用__init的组件，手动传入组件类型
	        _this.type = _this.props.__type || type;
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
	        // 需要先执行函数得到组件配置并需要重新解析配置的属性
	        _this._analysis = [];
	        // 开发时自定义的需注入到事件中的函数，例如 AutoComplete 组件中的 'onSearch' 函数
	        _this._injectEvent = [];
	        _this._filter = _utils.Utils.copy(FilterProps).concat(
	        // 一些隐藏的属性
	        ['__cache', '__type', '__key', '_factory', '_selfCalling'],
	        // 二次解析白名单里的属性的原值存储在 _${v} 中
	        _whitelist2.default.getall(_this.type).map(function (v) {
	            return '_' + v;
	        }));
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
	            if (this.__shouldUpdate(currentProps, nextProps)) {
	                // 如果参数变化，则重新获取数据。要在变更 __props 之前判断。
	                reGetData = nextProps.source && _utils.Utils.isChange(this.__formatApi(nextProps.source), this.__filtered.source)
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

	            // 将_injectEvent中定义的需要额外处理的函数追加到_filter中
	            // this._filter = this._filter.concat(this._injectEvent);
	        }

	        // __init 执行之后，紧跟着执行的逻辑。一般用于初始化后追加的子类内部初始化逻辑

	    }, {
	        key: '_afterInit',
	        value: function _afterInit() {}

	        // 执行完 __setProps 后附加的逻辑，由子类自行实现

	    }, {
	        key: '_afterSetProps',
	        value: function _afterSetProps() {}

	        // 执行完 _initProps 后附加的逻辑，由子类自行实现

	    }, {
	        key: '_afterInitProps',
	        value: function _afterInitProps() {}

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

	            // 后面传入组件的参数用 __props 代替 props
	            this._initProps();
	            // 执行完 _initProps 后附加的逻辑
	            this._afterInitProps();

	            // 处理数据绑定页面
	            // this._handleModel();
	            // 挂载用户传入的需要关联到生命周期中的函数（这个把生命周期的函数做个一个转换，更加语义化）
	            this._loadUserFunction();

	            // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中
	            this._injectEventFunction();

	            // 绑定 control 系列参数处理逻辑
	            this._injectControl();
	            // 绑定 api 系列参数处理逻辑
	            this._injectApi();

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
	        //  注：isInit只有_initProps时会用到

	    }, {
	        key: '__setProps',
	        value: function __setProps(nextProps, follow) {
	            var isInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	            // 如果组件已销毁，则不再进行任何操作
	            if (this.unmounted) {
	                return;
	            }
	            // 去除掉多余的属性（解决报warning问题）
	            // 因为初始化的时候对函数有额外处理，所以暂时不能随意更改函数属性，需全部过滤
	            // 但是初始化时，需把this.props上的全部赋值给__props，所以是否过滤函数需要增加判断
	            var __props = this._filterHandler(nextProps, !isInit);
	            this.__prevProps = this.__props;
	            this.__props = this.__mergeProps({}, this.__props, __props);
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
	        value: function __shouldUpdate(props, nextProps) {
	            return !_utils.Utils.equals(_utils.Utils.filter(props, this._innerFilter), _utils.Utils.filter(nextProps, this._innerFilter));
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

	        // api/source/control 系列参数格式化工具
	        // 保证格式化后必需为对象

	    }, {
	        key: '__formatApi',
	        value: function __formatApi() {
	            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'url';

	            if (!_utils.Utils.typeof(value, 'object')) {
	                value = _defineProperty({}, attr, value);
	            }
	            return value;
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
	                removeEmptyParams = conf.removeEmptyParams,
	                _handler = conf._handler,
	                handler = conf.handler,
	                _success = conf.success,
	                onSuccess = conf.onSuccess,
	                _error = conf.error,
	                onError = conf.onError,
	                others = _objectWithoutProperties(conf, ['url', 'params', '_paramsHandler', 'paramsHandler', 'removeEmptyParams', '_handler', 'handler', 'success', 'onSuccess', 'error', 'onError']);

	            if (url) {
	                // 额外增加对参数预处理逻辑，不暴露给用户使用
	                if (false === (_paramsHandler && (params = _paramsHandler(params)))) {
	                    return false;
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
	                    for (var i in params) {
	                        if (params[i] === null || params[i] === undefined || params[i] === '') {
	                            delete params[i];
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
	                            if (data === false) {
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
	            return result;
	        }

	        /* 私有方法 ***********************************************************************/

	        // 过滤 props，生成 __props 和 __filtered
	        // 第二个参数为是否过滤掉为函数的属性

	    }, {
	        key: '_filterHandler',
	        value: function _filterHandler(props) {
	            var filterFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            var newProps = {};
	            var haveFiltered = false;
	            for (var i in props) {
	                if (props.hasOwnProperty(i)) {
	                    if (this._filter.indexOf(i) === -1) {
	                        // 过滤掉为函数的属性
	                        // 如果设置不过滤函数、或者不为函数、或者__props上没有此属性
	                        // if (!filterFunc || !Utils.typeof(props[i], 'function') || !Utils.typeof(this.__props[i], 'function')) {
	                        if (!filterFunc || !_utils.Utils.typeof(props[i], 'function') || !this.__props[i]) {
	                            newProps[i] = props[i];
	                        }
	                    } else {
	                        // 使用merge，保证增量合并。使进入到__filtered中的属性，也能增量的set
	                        this.__filtered[i] = this.__mergeProps({}, this.__filtered[i], props[i]);
	                        haveFiltered = true;
	                    }
	                }
	            }
	            // 格式化 api、source、control 系列参数
	            if (haveFiltered) {
	                this._filteredPropsFormat();
	            }
	            return newProps;
	        }

	        // 后面传入组件的参数用 __props 代替 props

	    }, {
	        key: '_initProps',
	        value: function _initProps() {
	            // 先把 this.__props 中初始化的多余属性过滤掉
	            // 在这里执行是为了方便子类中__init之前在去更改__props
	            this.__props = this._filterHandler(this.__props);
	            // 待观察...
	            // 因为会对函数进行绑定、注入等操作，所以仅在 init 时把配置的函数转移到__props上，之后不会再更新函数
	            // this._setPropsFunctions();
	            // 然后把组件原props作为新值传给__setProps做合并
	            this.__setProps(this.props, false, true);
	        }

	        // 把 this.props 上配置的函数转移到 this.__props 上
	        // _setPropsFunctions() {
	        //     let props = this.props;
	        //     for (let i in props) {
	        //         if (props.hasOwnProperty(i) && Utils.typeof(props[i], 'function') && this._filter.indexOf(i) === -1) {
	        //             this.__props[i] = props[i];
	        //         }
	        //     }
	        // }

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

	        // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中，可见 AutoComplete 组件中的 'onSearch' 函数

	    }, {
	        key: '_injectEventFunction',
	        value: function _injectEventFunction() {
	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;

	            try {
	                for (var _iterator6 = this._injectEvent[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var v = _step6.value;

	                    var inject = this['_' + v];
	                    if (inject) {
	                        this._inject(this.__props, v, inject);
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
	        }
	        // _injectEvent 中定义的事件，会被过滤到__filtered中，并在此处加上额外自定义的逻辑重新创建函数
	        // 需考虑如果其他地方有直接往this.__props上注入的情况
	        //  所以_injectEventFunction需要和__initProps紧挨着，最好在其上面
	        //  而_injectApi等如果想要使用此逻辑，需要放此函数之前
	        // _injectEventFunction() {
	        //     for (let v of this._injectEvent) {
	        //         this.__props[v] = (...p) => {
	        //             let result = this[`_${v}`] && this[`_${v}`](...p);
	        //             // 返回false会阻止事件
	        //             if (result === false) {
	        //                 return;
	        //             }
	        //             return this.__filtered[v] && this.__filtered[v]();
	        //         };
	        //     }
	        // }

	        // 针对一些需要先执行函数得到组件配置并需要重新解析配置的属性进行处理

	    }, {
	        key: '_analysisProps',
	        value: function _analysisProps() {
	            var _this8 = this;

	            var _iteratorNormalCompletion7 = true;
	            var _didIteratorError7 = false;
	            var _iteratorError7 = undefined;

	            try {
	                for (var _iterator7 = this._analysis[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                    var v = _step7.value;

	                    if (this.__props[v]) {
	                        (function () {
	                            var func = _this8.__props[v];
	                            _this8.__props[v] = function () {
	                                return _this8.__analysis(func.apply(undefined, arguments));
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
	            var _this9 = this;

	            var _loop = function _loop(f) {
	                // 如果props中有等待注入的函数
	                var inject = _this9.__filtered[f];
	                if (inject) {
	                    var _iteratorNormalCompletion9 = true;
	                    var _didIteratorError9 = false;
	                    var _iteratorError9 = undefined;

	                    try {
	                        for (var _iterator9 = ForUserApi[f].split(',')[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                            var v = _step9.value;

	                            _this9._inject(_this9, v, function () {
	                                var result = inject.call(_this9, _this9.__props, _this9);
	                                // 组件渲染/刷新前可以让用户有机会改参数
	                                if (result && ['beforeCreate', 'beforeRender'].indexOf(f) !== -1) {
	                                    // 防止用户设置过滤属性
	                                    _this9.__props = _this9._filterHandler(result);
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
	                _loop(f);
	            }
	            // 支持高级用户（专业前端）直接使用原始的生命周期函数
	            var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;

	            try {
	                for (var _iterator8 = PreventCoverageMap[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                    var v = _step8.value;

	                    // 如果父组件中有等待注入的函数
	                    var _inject2 = this.__filtered['_' + v];
	                    if (_inject2) {
	                        this._inject(this, v, _inject2);
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

	        // 绑定组件额外动作处理逻辑

	    }, {
	        key: '_injectControl',
	        value: function _injectControl() {
	            var _this10 = this;

	            var _filtered$control = this.__filtered.control,
	                trigger = _filtered$control.trigger,
	                target = _filtered$control.target;

	            if (target) {
	                this._inject(this.__props, trigger, function () {
	                    for (var _len7 = arguments.length, para = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	                        para[_key7] = arguments[_key7];
	                    }

	                    var _filtered$control2 = _this10.__filtered.control,
	                        type = _filtered$control2.type,
	                        params = _filtered$control2.params,
	                        handler = _filtered$control2.handler,
	                        _filtered$control2$pr = _filtered$control2.preventDefault,
	                        preventDefault = _filtered$control2$pr === undefined ? true : _filtered$control2$pr,
	                        _filtered$control2$st = _filtered$control2.stopPropagation,
	                        stopPropagation = _filtered$control2$st === undefined ? true : _filtered$control2$st;
	                    // 阻止默认事件及冒泡

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
	                            var v = _step10.value;

	                            var targetStr = v;
	                            // targetAttr 可以为空数组，即目标直接指向组件

	                            var _targetStr$split = targetStr.split('.'),
	                                _targetStr$split2 = _toArray(_targetStr$split),
	                                targetName = _targetStr$split2[0],
	                                targetAttr = _targetStr$split2.slice(1);

	                            var _target = _this10.__getComponent(targetName);
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
	                                            !params && handler && (params = handler.apply(undefined, para.concat([_target, _this10])));
	                                            // 转成数组以便解构
	                                            !_utils.Utils.typeof(params, 'array') && (params = [params]);
	                                            func.call.apply(func, [_target].concat(_toConsumableArray(params)));
	                                            break;
	                                        }
	                                    // 3、动作类型为：赋值
	                                    case 'assign':
	                                        {
	                                            var result = handler && handler.apply(undefined, para.concat([_target, _this10]));
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
	                }, true);
	            }
	        }

	        // api、source 系列参数初始化

	    }, {
	        key: '_filteredPropsFormat',
	        value: function _filteredPropsFormat() {
	            // 把 api 处理成对象
	            var api = this.__formatApi(this.__filtered.api);
	            var source = this.__formatApi(this.__filtered.source);
	            var control = this.__formatApi(this.__filtered.control, 'target');
	            // 检查默认配置中是否有配置，如果有进行合并
	            if (this.__defaultProps.api) {
	                api = this.__mergeProps({}, this.__defaultProps.api, api);
	            }
	            if (this.__defaultProps.source) {
	                source = this.__mergeProps({}, this.__defaultProps.source, source);
	            }
	            if (this.__defaultProps.control) {
	                control = this.__mergeProps({}, this.__defaultProps.control, control);
	            }
	            // 重新设置 __filtered 属性
	            this.__filtered.api = api;
	            this.__filtered.source = source;
	            this.__filtered.control = control;
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

	        // 绑定 api 系列参数处理逻辑

	    }, {
	        key: '_injectApi',
	        value: function _injectApi() {
	            if (this.__filtered.api.trigger) {
	                this._inject(this.__props, this.__filtered.api.trigger, this._handleApiProps, true);
	            }
	        }

	        // 提交数据功能

	    }, {
	        key: '_handleApiProps',
	        value: function _handleApiProps(oParams) {
	            var _filtered$api = this.__filtered.api,
	                _filtered$api$params = _filtered$api.params,
	                params = _filtered$api$params === undefined ? oParams : _filtered$api$params,
	                onSuccess = _filtered$api.onSuccess,
	                onError = _filtered$api.onError,
	                showLoading = _filtered$api.showLoading,
	                others = _objectWithoutProperties(_filtered$api, ['params', 'onSuccess', 'onError', 'showLoading']);
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
/* 21 */
/***/ (function(module, exports) {

	module.exports = window.DLL.Antd;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    Utils: __webpack_require__(23).default,
	    Ajax: __webpack_require__(27).default
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils2 = __webpack_require__(24);

	var _utils3 = _interopRequireDefault(_utils2);

	var _underscore = __webpack_require__(25);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _moment2 = __webpack_require__(26);

	var _moment3 = _interopRequireDefault(_moment2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 引入了underscore的功能，并在其上增加了自定义的一些函数
	var utils = Object.assign({}, _underscore2.default, _utils3.default, {
	    // 如果要使用原生的功能，可通过 _ 来访问
	    _: _underscore2.default,
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
	    assign: function assign() {
	        return Object.assign.apply(Object, arguments);
	    }
	}); /**
	     * @file 一些常用的函数工具
	     * @author liuzechun
	     **/

	exports.default = utils;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * @file 一些常用的函数工具
	 * @author liuzechun
	 **/

	var I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
	var s4 = function s4() {
	    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
	};

	var utils = {
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

	    // 数据格式转换
	    format: function format(value, type) {
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

	    // 数组去重
	    distinct: function distinct(arr) {
	        return [].concat(_toConsumableArray(new Set(arr)));
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
	        } else if (utils.typeof(data, 'object')) {
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
	                            result[i] = obj[i];
	                        }
	                    }
	                } else {
	                    // update at 2018/01/19，undefined的值也要覆盖，否则影响form中select的清空功能
	                    // result = obj === undefined ? target : obj;
	                    result = obj;
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
	    equals: function equals(value1, value2) {
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
	                    } else if (!Object.is(value1[i], value2[i])) {
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

	    // 检查是否有改变内容。与equals的区别是，仅检测newVal中的值相对于oldVal相应的值是否发生了变化
	    //  注意：newVal是oldVal的子集且值没有变化时，返回的是false
	    isChange: function isChange(newVal, oldVal) {
	        // 检测类型，类型一致才继续后续的对比
	        if (utils.getType(newVal) !== utils.getType(oldVal)) {
	            return true;
	        }
	        if (utils.typeof(newVal, ['object', 'array'])) {
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = Object.keys(newVal)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var i = _step3.value;

	                    if (utils.isChange(newVal[i], oldVal[i])) {
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
	        }
	        if (utils.toString(newVal) !== utils.toString(oldVal)) {
	            return true;
	        }
	        return false;
	    },

	    // 获取变化的内容
	    getChange: function getChange(newVal, oldVal) {
	        var result = {};
	        var _iteratorNormalCompletion4 = true;
	        var _didIteratorError4 = false;
	        var _iteratorError4 = undefined;

	        try {
	            for (var _iterator4 = Object.keys(newVal)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                var i = _step4.value;

	                if (!utils.equals(newVal[i], oldVal[i])) {
	                    result[i] = newVal[i];
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
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;

	            try {
	                for (var _iterator5 = arr[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var v = _step5.value;

	                    if (v.indexOf(':') === 0) {
	                        var key = v.slice(1, v.length);
	                        path += '/' + data[key];
	                    } else {
	                        path += '/' + v;
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
	        var _iteratorNormalCompletion6 = true;
	        var _didIteratorError6 = false;
	        var _iteratorError6 = undefined;

	        try {
	            for (var _iterator6 = cls[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                var v = _step6.value;

	                if (obj && obj.constructor && obj.constructor.prototype === v.prototype) {
	                    return true;
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
	            var _iteratorNormalCompletion7 = true;
	            var _didIteratorError7 = false;
	            var _iteratorError7 = undefined;

	            try {
	                for (var _iterator7 = strc.split('.').reverse()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                    var v = _step7.value;

	                    tData = _defineProperty({}, v, tData);
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
	        return tData;
	    },

	    // 根据一个字符串，从一个深层的对象中取数据
	    // 例如：根据 a.b.c 从对象 {a:{b:{c: 1}}} 中取出 1
	    fromObject: function fromObject(strc, obj) {
	        var target = obj;
	        // 如果 strc 为空字符串，则返回 obj 本身
	        if (strc) {
	            var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;

	            try {
	                for (var _iterator8 = strc.split('.')[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                    var v = _step8.value;

	                    if (!target || !utils.typeof(target, 'object')) {
	                        return undefined;
	                    }
	                    target = target[v];
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
	        return target;
	    },

	    // 根据一个字符串，把数据塞入一个深层的对象中
	    toObject: function toObject(origin, strc, value) {
	        var tData = utils.generateObject(strc, value);
	        var level = strc.split('.').length;
	        utils.merge(level, origin, tData);
	    },

	    // url中如果有类似于`:id`这种形式的动态参数，则替换成对应的参数值
	    urlAnalysis: function urlAnalysis(url, params) {
	        var delParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	        if (!url || url.indexOf(':') === -1 || !utils.typeof(params, 'object')) {
	            return url;
	        }
	        var matched = '';
	        for (var i in params) {
	            if (url.indexOf(':' + i) > -1 && matched.length < i.length) {
	                matched = i;
	            }
	        }
	        if (matched) {
	            url = url.replace(':' + matched, params[matched]);
	            delParams && delete params[matched];
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
	            // 如果注入的逻辑返回false，可组织原函数的继续执行（前提是原函数后执行）
	            var newResult = newFunc.call.apply(newFunc, [utilsObj].concat(params));
	            !oldAhead && newResult !== false ? result = origin.call.apply(origin, [utilsObj].concat(params)) : null;
	            // let oResult;
	            // oldAhead ? (oResult = origin.call(utilsObj, ...params)) : null;
	            // // 如果返回false，可阻止注入函数的继续执行
	            // let newResult = oResult !== false ? newFunc.call(utilsObj, ...params) : oResult;
	            // // 如果注入的逻辑返回false，可阻止原函数的继续执行
	            // let result = !oldAhead && newResult !== false ? origin.call(utilsObj, ...params) : oResult;
	            return result;
	        } : newFunc.bind(utilsObj);
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
	};

	exports.default = utils;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
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

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
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

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
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
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
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
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

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
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
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
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
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
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
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
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
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
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
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
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
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
	    if (array == null) return void 0;
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
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
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
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
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
	      if (isSorted) {
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
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
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

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
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

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
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
	  }

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
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
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
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
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
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
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

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
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

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
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
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

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
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
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
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
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
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
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

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
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
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
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

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
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
	    // Regexes for identifying a key that needs to be escaped
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

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
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
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

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
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
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
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
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
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
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
	    return '' + this._wrapped;
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
	}.call(this));


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = window.DLL.moment;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reqwest = __webpack_require__(28);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _utils = __webpack_require__(23);

	var _utils2 = _interopRequireDefault(_utils);

	var _axios = __webpack_require__(30);

	var _axios2 = _interopRequireDefault(_axios);

	var _ajaxPlugin = __webpack_require__(58);

	var _instance = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 依赖 Config, AjaxCache 两个实例，通过generete获取
	exports.default = (0, _instance.generate)(['Config', 'AjaxCache', 'ModelCache'], function (Config, AjaxCache, ModelCache) {

	    // 通用ajax函数，参数为一个对象
	    function request(config) {
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
	        // TODO: 两种情况下都不会触发onchange
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
	        var successHandler = function successHandler() {
	            onchange(false, 'success');
	            return tmpSuccess.apply(undefined, arguments);
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
	                    globalAjax.success(res, successHandler, errorHandler, config);
	                    return;
	                }
	                // 默认成功处理逻辑
	                // 如果接口无返回值，则res为http实例
	                if (res instanceof XMLHttpRequest) {
	                    onerror({ msg: '接口未返回任何数据' });
	                    // 如果data为null
	                } else if (res.data === null) {
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
/* 28 */
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
	      XHR2 = __webpack_require__(29)
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
/* 29 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 30 */
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

	var _axios = __webpack_require__(31);

	var _axios2 = _interopRequireDefault(_axios);

	var _utils = __webpack_require__(23);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(33);
	var bind = __webpack_require__(34);
	var Axios = __webpack_require__(36);
	var defaults = __webpack_require__(37);

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
	axios.Cancel = __webpack_require__(55);
	axios.CancelToken = __webpack_require__(56);
	axios.isCancel = __webpack_require__(52);

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(57);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(34);
	var isBuffer = __webpack_require__(35);

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
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(37);
	var utils = __webpack_require__(33);
	var InterceptorManager = __webpack_require__(49);
	var dispatchRequest = __webpack_require__(50);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(33);
	var normalizeHeaderName = __webpack_require__(39);

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
	    adapter = __webpack_require__(40);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(40);
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(33);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(33);
	var settle = __webpack_require__(41);
	var buildURL = __webpack_require__(44);
	var parseHeaders = __webpack_require__(45);
	var isURLSameOrigin = __webpack_require__(46);
	var createError = __webpack_require__(42);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(47);

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
	      var cookies = __webpack_require__(48);

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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(42);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(43);

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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(33);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(33);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(33);

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
/* 47 */
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(33);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(33);

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(33);
	var transformData = __webpack_require__(51);
	var isCancel = __webpack_require__(52);
	var defaults = __webpack_require__(37);
	var isAbsoluteURL = __webpack_require__(53);
	var combineURLs = __webpack_require__(54);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(33);

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
/* 52 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(55);

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
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.errorMessage = errorMessage;
	exports.checkCache = checkCache;
	exports.checkQueue = checkQueue;
	exports.checkMock = checkMock;
	exports.checkInterrupt = checkInterrupt;

	var _antd = __webpack_require__(21);

	var _utils = __webpack_require__(23);

	var _utils2 = _interopRequireDefault(_utils);

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
	    _antd.notification.error(Object.assign({}, errorMsg, !message ? null : {
	        description: message
	    }));
	    return false;
	}

	/**
	 * 检查是否有缓存
	 *
	 * @param {Object} config ajax的配置
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

	    if (config.url && mockMap[config.url]) {
	        _utils2.default.defer(function () {
	            mockMap[config.url].call(null, config, config.success, config.error);
	        });
	        return true;
	    }
	    return false;
	}

	/**
	 * 检查是否中断请求
	 * > 可以通过返回数据中断请求，从而使用钩子返回的数据；
	 * > 如果钩子未返回任何内容，或返回true，则请求继续；
	 * > 如果钩子返回false，则仅中断请求，不做任何处理
	 *
	 * @param {*} config ajax的配置
	 * @return {boolean} 如果有则返回true，否则返回false
	 */
	function checkInterrupt(config) {
	    if (config.interrupt) {
	        var data = config.interrupt.call(null, config);
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _BaseCache = __webpack_require__(60);

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
/* 60 */
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


	var _utils = __webpack_require__(23);

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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(22);

	var _instance = __webpack_require__(59);

	/**
	 * @file 权限控制模块
	 * @author liuzechun
	 */

	exports.default = {
	    check: function check(item) {
	        var insName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : item.insName;

	        var authorityList = (0, _instance.getConfig)(insName).get('authority');
	        var result = true;
	        if (!_utils.Utils.typeof(item.authority, 'undefined')) {
	            result = !!authorityList[item.authority];
	        }
	        return result;
	    }
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(22);

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
	    Sider: ['trigger'],
	    Modal: ['title'],
	    Notification: ['message', 'description', 'btn', 'icon'],
	    Message: ['content'],
	    Fieldset: ['title']
	}; /**
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
	        return (List[name] || []).concat('children');
	    }
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _BaseComponent2 = __webpack_require__(20);

	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

	var _utils = __webpack_require__(22);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Dom2 = __webpack_require__(18);

	var _Dom3 = _interopRequireDefault(_Dom2);

	var _utils = __webpack_require__(22);

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _dataentry = __webpack_require__(66);

	var DataEntry = _interopRequireWildcard(_dataentry);

	var _datadisplay = __webpack_require__(69);

	var DataDisplay = _interopRequireWildcard(_datadisplay);

	var _genaral = __webpack_require__(71);

	var Genaral = _interopRequireWildcard(_genaral);

	var _navigation = __webpack_require__(73);

	var Navigation = _interopRequireWildcard(_navigation);

	var _feedback = __webpack_require__(78);

	var Feedback = _interopRequireWildcard(_feedback);

	var _layout = __webpack_require__(80);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Dragger = exports.Upload = exports.Switch = exports.Select = exports.Radio = exports.CheckboxGroup = exports.Checkbox = exports.Rate = exports.InputNumber = exports.InputGroup = exports.InputSearch = exports.Textarea = exports.Input = exports.TimePicker = exports.MonthPicker = exports.RangePicker = exports.DatePicker = exports.Cascader = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(22);

	var _DataEntry9 = __webpack_require__(67);

	var _DataEntry10 = _interopRequireDefault(_DataEntry9);

	var _antd = __webpack_require__(21);

	var Antd = _interopRequireWildcard(_antd);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 数据录入 类组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var OptionsDataEntry = _DataEntry10.default.OptionsDataEntry;
	var BasePicker = _DataEntry10.default.BasePicker;

	/************* Cascader 级联选择 ************************************************************************** */

	var Cascader = exports.Cascader = function (_OptionsDataEntry) {
	    _inherits(Cascader, _OptionsDataEntry);

	    function Cascader(props) {
	        _classCallCheck(this, Cascader);

	        var _this = _possibleConstructorReturn(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).call(this, props));

	        _this.__controlled.defaultVal = [];
	        _this.__init();
	        return _this;
	    }

	    _createClass(Cascader, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Cascader, this.__props);
	        }
	    }]);

	    return Cascader;
	}(OptionsDataEntry);

	/************* DatePicker 日期[时间]选择 ****************************************************************** */

	var DatePicker = exports.DatePicker = function (_BasePicker) {
	    _inherits(DatePicker, _BasePicker);

	    function DatePicker(props) {
	        _classCallCheck(this, DatePicker);

	        var _this2 = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

	        _this2.__controlled.paramsIndex = 1;
	        _this2.__init();
	        return _this2;
	    }
	    // 继承父组件的函数，_initProps 后增加额外处理逻辑


	    _createClass(DatePicker, [{
	        key: '_afterInitProps',
	        value: function _afterInitProps() {
	            _get(DatePicker.prototype.__proto__ || Object.getPrototypeOf(DatePicker.prototype), '_afterInitProps', this).call(this);
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
	    }, {
	        key: 'render',
	        value: function render() {
	            var value = this.__props.value;
	            return _react2.default.createElement(Antd.DatePicker, _extends({}, this.__props, {
	                value: value ? _utils.Utils.moment(value) : value }));
	        }
	    }]);

	    return DatePicker;
	}(BasePicker);
	// RangePicker 日期范围选择


	var RangePicker = exports.RangePicker = function (_DatePicker) {
	    _inherits(RangePicker, _DatePicker);

	    function RangePicker(props) {
	        _classCallCheck(this, RangePicker);

	        var _this3 = _possibleConstructorReturn(this, (RangePicker.__proto__ || Object.getPrototypeOf(RangePicker)).call(this, props));

	        _this3.__controlled.paramsIndex = 1;
	        _this3.__controlled.defaultVal = [];
	        _this3.__init();
	        return _this3;
	    }

	    _createClass(RangePicker, [{
	        key: '_afterInitProps',
	        value: function _afterInitProps() {
	            _get(RangePicker.prototype.__proto__ || Object.getPrototypeOf(RangePicker.prototype), '_afterInitProps', this).call(this);
	            // 如果设置了 value='current'，则把current转换为当前时间
	            var value = this.__props.value;
	            if (value && value[0] === 'current') {
	                value[0] = this._getCurrentValue();
	            }
	            if (value && value[1] === 'current') {
	                value[1] = this._getCurrentValue();
	            }
	            this.__props.value = value;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // 需注意，RangePicker 的value是一个数组
	            var value = this.__props.value;
	            var format = this.__props.format;
	            return _react2.default.createElement(Antd.DatePicker.RangePicker, _extends({}, this.__props, {
	                value: value ? [_utils.Utils.moment(value[0], format), _utils.Utils.moment(value[1], format)] : value }));
	        }
	    }]);

	    return RangePicker;
	}(DatePicker);
	// MonthPicker 月份选择


	var MonthPicker = exports.MonthPicker = function (_BasePicker2) {
	    _inherits(MonthPicker, _BasePicker2);

	    function MonthPicker(props) {
	        _classCallCheck(this, MonthPicker);

	        var _this4 = _possibleConstructorReturn(this, (MonthPicker.__proto__ || Object.getPrototypeOf(MonthPicker)).call(this, props));

	        _this4.__controlled.paramsIndex = 1;
	        _this4.__init();
	        return _this4;
	    }

	    _createClass(MonthPicker, [{
	        key: 'render',
	        value: function render() {
	            var value = this.__props.value;
	            return _react2.default.createElement(Antd.DatePicker.MonthPicker, _extends({}, this.__props, {
	                value: value ? _utils.Utils.moment(value, this.__props.format) : value }));
	        }
	    }]);

	    return MonthPicker;
	}(BasePicker);
	// TimePicker 时间选择


	var TimePicker = exports.TimePicker = function (_BasePicker3) {
	    _inherits(TimePicker, _BasePicker3);

	    function TimePicker(props) {
	        _classCallCheck(this, TimePicker);

	        var _this5 = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

	        _this5.__controlled.paramsIndex = 1;
	        _this5.__init();
	        return _this5;
	    }

	    _createClass(TimePicker, [{
	        key: 'render',
	        value: function render() {
	            var value = this.__props.value;
	            return _react2.default.createElement(Antd.TimePicker, _extends({}, this.__props, {
	                value: value ? _utils.Utils.moment(value, this.__props.format) : value }));
	        }
	    }]);

	    return TimePicker;
	}(BasePicker);

	/************* Input 输入框 ************************************************************************** */

	var Input = exports.Input = function (_DataEntry) {
	    _inherits(Input, _DataEntry);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        var _this6 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	        _this6.__init();
	        return _this6;
	    }

	    _createClass(Input, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Input, this.__props);
	        }
	    }]);

	    return Input;
	}(_DataEntry10.default);
	// textarea


	var Textarea = exports.Textarea = function (_DataEntry2) {
	    _inherits(Textarea, _DataEntry2);

	    function Textarea(props) {
	        _classCallCheck(this, Textarea);

	        var _this7 = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

	        _this7.__init();
	        return _this7;
	    }

	    _createClass(Textarea, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Input.TextArea, this.__props);
	        }
	    }]);

	    return Textarea;
	}(_DataEntry10.default);
	// 带搜索按钮 - 其余功能与Input一致，所以继承 Input 的处理逻辑


	var InputSearch = exports.InputSearch = function (_Input) {
	    _inherits(InputSearch, _Input);

	    function InputSearch(props) {
	        _classCallCheck(this, InputSearch);

	        var _this8 = _possibleConstructorReturn(this, (InputSearch.__proto__ || Object.getPrototypeOf(InputSearch)).call(this, props));

	        _this8.class.push('input');
	        _this8.__init();
	        return _this8;
	    }

	    _createClass(InputSearch, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Input.Search, this.__props);
	        }
	    }]);

	    return InputSearch;
	}(Input);
	// 输入框连接在一起形成一组


	var InputGroup = exports.InputGroup = function (_DataEntry3) {
	    _inherits(InputGroup, _DataEntry3);

	    function InputGroup(props) {
	        _classCallCheck(this, InputGroup);

	        var _this9 = _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).call(this, props));

	        _this9.__init();
	        return _this9;
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
	}(_DataEntry10.default);
	// 数字输入框


	var InputNumber = exports.InputNumber = function (_DataEntry4) {
	    _inherits(InputNumber, _DataEntry4);

	    function InputNumber(props) {
	        _classCallCheck(this, InputNumber);

	        var _this10 = _possibleConstructorReturn(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).call(this, props));

	        _this10.__init();
	        return _this10;
	    }

	    _createClass(InputNumber, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.InputNumber, _extends({ compact: true }, this.__props));
	        }
	    }]);

	    return InputNumber;
	}(_DataEntry10.default);

	/************* Rate 评分 ************************************************************************** */

	var Rate = exports.Rate = function (_DataEntry5) {
	    _inherits(Rate, _DataEntry5);

	    function Rate(props) {
	        _classCallCheck(this, Rate);

	        var _this11 = _possibleConstructorReturn(this, (Rate.__proto__ || Object.getPrototypeOf(Rate)).call(this, props));

	        _this11.__init();
	        return _this11;
	    }

	    _createClass(Rate, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Rate, this.__props);
	        }
	    }]);

	    return Rate;
	}(_DataEntry10.default);

	/************* Checkbox 复选框 ************************************************************************** */

	var Checkbox = exports.Checkbox = function (_DataEntry6) {
	    _inherits(Checkbox, _DataEntry6);

	    function Checkbox(props) {
	        _classCallCheck(this, Checkbox);

	        var _this12 = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

	        _this12.__controlled.key = 'checked';
	        _this12.__controlled.defaultVal = false;
	        _this12.__init();
	        return _this12;
	    }

	    _createClass(Checkbox, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Checkbox, this.__props);
	        }
	    }]);

	    return Checkbox;
	}(_DataEntry10.default);
	// 多复选框组合


	var CheckboxGroup = exports.CheckboxGroup = function (_OptionsDataEntry2) {
	    _inherits(CheckboxGroup, _OptionsDataEntry2);

	    function CheckboxGroup(props) {
	        _classCallCheck(this, CheckboxGroup);

	        var _this13 = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

	        _this13._openApi.push('checkAll');
	        _this13.__controlled.defaultVal = [];
	        _this13.__init();
	        return _this13;
	    }

	    _createClass(CheckboxGroup, [{
	        key: '_afterSetProps',
	        value: function _afterSetProps(newProps) {
	            _get(CheckboxGroup.prototype.__proto__ || Object.getPrototypeOf(CheckboxGroup.prototype), '_afterSetProps', this).call(this, newProps);
	            if (newProps.options) {
	                this._handleDefaultSelect();
	            }
	        }
	    }, {
	        key: 'checkAll',
	        value: function checkAll() {
	            var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            var value = status ? this.__props.options.map(function (v) {
	                return v.value;
	            }) : [];
	            this.__setProps({ value: value });
	            this.__props.onChange && this.__props.onChange(value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Checkbox.Group, this.__props);
	        }
	    }]);

	    return CheckboxGroup;
	}(OptionsDataEntry);

	/************* Radio 单选 ************************************************************************** */

	// 这里直接使用Radio组，单个radio没想到什么应用场景


	var Radio = exports.Radio = function (_OptionsDataEntry3) {
	    _inherits(Radio, _OptionsDataEntry3);

	    function Radio(props) {
	        _classCallCheck(this, Radio);

	        var _this14 = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

	        _this14.__init();
	        return _this14;
	    }

	    _createClass(Radio, [{
	        key: '_afterSetProps',
	        value: function _afterSetProps(newProps) {
	            _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), '_afterSetProps', this).call(this, newProps);
	            if (newProps.options) {
	                this.__props.options = this.__props.options.map(function (item) {
	                    item.value += '';
	                    return item;
	                });
	                this._handleDefaultSelect();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // 增加了一个配置项，来控制是否以button的形式展示
	            var Item = Antd.Radio;
	            if (this.__props.showAsButton) {
	                Item = Antd.Radio.Button;
	            }
	            return _react2.default.createElement(
	                Antd.Radio.Group,
	                _extends({}, _utils.Utils.filter(this.__props, 'options'), { value: this.__props.value !== undefined ? '' + this.__props.value : undefined }),
	                this.__props.options.map(function (item) {
	                    return _react2.default.createElement(
	                        Item,
	                        { key: item.value, disabled: item.disabled, style: item.style,
	                            value: item.value },
	                        item.label
	                    );
	                })
	            );
	        }
	    }]);

	    return Radio;
	}(OptionsDataEntry);

	/************* Select 下拉菜单 ************************************************************************** */

	var Select = exports.Select = function (_OptionsDataEntry4) {
	    _inherits(Select, _OptionsDataEntry4);

	    function Select(props) {
	        _classCallCheck(this, Select);

	        var _this15 = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

	        _this15._openApi.push('selectAll');
	        _this15.__init();
	        return _this15;
	    }

	    _createClass(Select, [{
	        key: '_afterInitProps',
	        value: function _afterInitProps() {
	            _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), '_afterInitProps', this).call(this);
	            this.isMultiple = this.__props.type === 'multiple' || this.__props.type === 'tags';
	            if (this.isMultiple) {
	                this.__controlled.defaultVal = [];
	            }
	        }
	    }, {
	        key: 'selectAll',
	        value: function selectAll() {
	            var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            if (this.isMultiple) {
	                var value = status ? this.__props.options.map(function (v) {
	                    return v.value;
	                }) : [];
	                this.__setProps({ value: value });
	                this.__props.onChange && this.__props.onChange(value);
	            }
	        }
	        // 改为每次set值时检查，如果更新了options，则进行是否清空或者重置为默认值的处理

	    }, {
	        key: '_afterSetProps',
	        value: function _afterSetProps(newProps) {
	            _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), '_afterSetProps', this).call(this, newProps);
	            // combobox 模式下，由于可以任意输入，所以不再对当前数据进行处理
	            if (newProps.options) {
	                this.__props.options = this.__props.options.map(function (item) {
	                    item.value += '';
	                    return item;
	                });
	                if (this.__props.type !== 'combobox') {
	                    // 根据是否多选做区别处理
	                    if (this.isMultiple) {
	                        this._handleMultipleSelect();
	                    } else {
	                        this._handleDefaultSelect();
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'getAllOptions',
	        value: function getAllOptions() {
	            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.__props.options;

	            return [].concat(this.__props.extOptions || [], data || []);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var formatType = _utils.Utils.getType(this.__controlled.defaultVal);
	            var value = this.__props.value;
	            if (formatType === 'array') {
	                value = _utils.Utils.format(this.__props.value, formatType);
	            } else if (_utils.Utils.typeof(value, ['number', 'boolean'])) {
	                value += '';
	            }
	            return _react2.default.createElement(
	                Antd.Select,
	                _extends({}, _utils.Utils.filter(this.__props, 'options'), { value: value }),
	                this.getAllOptions().map(function (item) {
	                    return _react2.default.createElement(
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
	}(OptionsDataEntry);

	/************* Transfer 穿梭框 ************************************************************************** */

	// export class Transfer extends DataEntry {
	//     constructor(props) {
	//         super(props);
	//         this.__init();
	//     }
	//     render() {
	//         return <Antd.Transfer {...this.__props}/>;
	//     }
	// }


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

	var Switch = exports.Switch = function (_DataEntry7) {
	    _inherits(Switch, _DataEntry7);

	    function Switch(props) {
	        _classCallCheck(this, Switch);

	        var _this16 = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

	        _this16.__controlled.key = 'checked';
	        _this16.__controlled.defaultVal = false;
	        _this16.__init();
	        return _this16;
	    }

	    _createClass(Switch, [{
	        key: 'render',
	        value: function render() {
	            // Switch用的是checked受控
	            return _react2.default.createElement(Antd.Switch, this.__props);
	        }
	    }]);

	    return Switch;
	}(_DataEntry10.default);

	/************* Upload 开关 ************************************************************************** */

	var Upload = exports.Upload = function (_DataEntry8) {
	    _inherits(Upload, _DataEntry8);

	    function Upload(props) {
	        _classCallCheck(this, Upload);

	        var _this17 = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

	        _this17.__controlled.key = 'fileList';
	        _this17.__controlled.defaultVal = [];
	        _this17._filter.push('fieldName');
	        _this17.__init();
	        _this17.__props.name = _this17.props.fieldName || 'file';
	        return _this17;
	    }
	    // 参数额外处理


	    _createClass(Upload, [{
	        key: '_updateEventHandler',
	        value: function _updateEventHandler(param) {
	            return param ? param.fileList : [];
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Upload, this.__props);
	        }
	    }]);

	    return Upload;
	}(_DataEntry10.default);

	var Dragger = exports.Dragger = function (_Upload) {
	    _inherits(Dragger, _Upload);

	    function Dragger() {
	        _classCallCheck(this, Dragger);

	        return _possibleConstructorReturn(this, (Dragger.__proto__ || Object.getPrototypeOf(Dragger)).apply(this, arguments));
	    }

	    _createClass(Dragger, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Upload.Dragger, this.__props);
	        }
	    }]);

	    return Dragger;
	}(Upload);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _Antd2 = __webpack_require__(68);

	var _Antd3 = _interopRequireDefault(_Antd2);

	var _utils = __webpack_require__(22);

	var _moment = __webpack_require__(26);

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
	        _this._openApi.push('getValue', 'getDisplayValue');
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
	    }]);

	    return DataEntry;
	}(_Antd3.default);

	/************* 附带options属性的基类（包含多选逻辑） ***************************************************** */

	exports.default = DataEntry;
	DataEntry.OptionsDataEntry = function (_DataEntry) {
	    _inherits(OptionsDataEntry, _DataEntry);

	    function OptionsDataEntry() {
	        _classCallCheck(this, OptionsDataEntry);

	        return _possibleConstructorReturn(this, (OptionsDataEntry.__proto__ || Object.getPrototypeOf(OptionsDataEntry)).apply(this, arguments));
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
	            } else if (this.__props.value !== undefined && !_utils.Utils.equals(this.__controlled.defaultVal, this.__props.value)) {
	                // 为实现刷新组件时，清空原数据
	                // 同时会带来问题，不能为空的字段会导致出现提示（已解决）
	                this.__props.onChange && this.__props.onChange(this.__controlled.defaultVal);
	            }
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

	        _this4._analysis.push('renderExtraFooter');
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _base = __webpack_require__(19);

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
	        key: '_afterInit',
	        value: function _afterInit() {
	            var _this2 = this;

	            _get(Antd.prototype.__proto__ || Object.getPrototypeOf(Antd.prototype), '_afterInit', this).call(this);
	            // 保存原始antd组件的引用
	            this.__props['ref'] = function (ele) {
	                return _this2._component = ele;
	            };
	            // 受控配置 - 如果不为null,则合并覆盖
	            this.__controlled = this.__controlled ? this.__mergeProps({
	                key: 'value',
	                event: 'onChange',
	                defaultVal: undefined,
	                paramsIndex: 0
	            }, this.__controlled) : null;
	            // 受控组件默认处理逻辑
	            this._handleControlled();
	        }

	        // 受控属性绑定change事件，同时也受控于用户传入的值

	    }, {
	        key: '_handleControlled',
	        value: function _handleControlled() {
	            var _this3 = this;

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
	            this._inject(this.__props, event, function () {
	                // 如果用户传入了 controlled 属性，则完全由用户自己控制，不再执行默认控制逻辑
	                if (_this3.__filtered.controlled) {
	                    return;
	                }
	                _this3._onControlEvent.apply(_this3, arguments);
	            });
	        }

	        // 同步onChange的数据到受控属性上，默认取第一个参数
	        // ** 可直接被子类覆盖重写 **
	        // **     如果有其他需求可以直接覆盖重写，注意函数内要调用下 callback（如：DataEntry中用法）

	    }, {
	        key: '_onControlEvent',
	        value: function _onControlEvent() {
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
	    }]);

	    return Antd;
	}(_base.BaseComponent);

	exports.default = Antd;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TimelineItem = exports.Timeline = exports.CheckableTag = exports.Tag = exports.TabPane = exports.Tabs = exports.Popconfirm = exports.Popover = exports.Tooltip = exports.Panel = exports.Collapse = exports.Carousel = exports.Card = exports.Badge = exports.Avatar = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _utils = __webpack_require__(22);

	var _DataDisplay16 = __webpack_require__(70);

	var _DataDisplay17 = _interopRequireDefault(_DataDisplay16);

	var _antd = __webpack_require__(21);

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

	        var _this5 = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

	        _this5._openApi.push('open', 'close');
	        // 受控属性
	        // event: onChange / paramsIndex: 0
	        _this5.__controlled = {
	            key: 'activeKey'
	        };
	        _this5.__init();
	        return _this5;
	    }

	    _createClass(Collapse, [{
	        key: '_afterSetProps',
	        value: function _afterSetProps() {
	            // 如果activeKey不是数组，则默认打开手风琴模式
	            if (this.__props.activeKey && !_utils.Utils.typeof(this.__props.activeKey, 'array')) {
	                this.__props.accordion = true;
	            }
	            // 如果设置了fixed属性，则移除折叠展开的交互，仅作为展示组件
	            if (this.__props.fixed) {
	                this.__controlled = null;
	                this.__props.className = (this.__props.className || '') + ' uf-collapse-fixed';
	            }
	        }
	        // 打开某个面板

	    }, {
	        key: 'open',
	        value: function open(key) {
	            if (this.__props.accordion) {
	                this.__setProps({ activeKey: key });
	            } else {
	                var current = this.__props.activeKey || [];
	                if (!current.some(function (v) {
	                    return v === key;
	                })) {
	                    current.push(key);
	                }
	                this.__setProps({ activeKey: current });
	            }
	        }
	        // 关闭某个面板

	    }, {
	        key: 'close',
	        value: function close(key) {
	            if (this.__props.accordion) {
	                if (!this.__props.activeKey || this.__props.activeKey === key) {
	                    this.__setProps({ activeKey: '' });
	                }
	            } else {
	                var current = this.__props.activeKey || [];
	                this.__setProps({ activeKey: current.filter(function (v) {
	                        return v !== key;
	                    }) });
	            }
	        }
	    }, {
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

	        // 受控属性
	        var _this7 = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

	        _this7.__controlled = {
	            key: 'visible',
	            event: 'onVisibleChange'
	        };
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

	        // 受控属性
	        var _this8 = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

	        _this8.__controlled = {
	            key: 'visible',
	            event: 'onVisibleChange'
	        };
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

	        // 受控属性
	        var _this9 = _possibleConstructorReturn(this, (Popconfirm.__proto__ || Object.getPrototypeOf(Popconfirm)).call(this, props));

	        _this9.__controlled = {
	            key: 'visible',
	            event: 'onVisibleChange'
	        };
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
	        _this10._filter.push('forceRefresh');
	        _this10._injectEvent.push('onTabClick');
	        _this10.__init();
	        // 标签页的引用
	        _this10.tabRefs = {};
	        return _this10;
	    }

	    _createClass(Tabs, [{
	        key: '_onTabClick',
	        value: function _onTabClick(activeKey) {
	            if (this.__filtered.forceRefresh) {
	                // 如果通过items生成的子tab页，则可以使用refresh；否则刷新整个Tabs
	                if (this.tabRefs[activeKey]) {
	                    this.tabRefs[activeKey].refresh();
	                } else {
	                    // 全部Tab都会解析一遍
	                    this.set({
	                        content: this.__filtered._children
	                    });
	                }
	            }
	        }
	    }, {
	        key: '_afterSetProps',
	        value: function _afterSetProps() {
	            var _this11 = this;

	            // 如果是使用items属性配置子tab，则做额外处理
	            if (this.__props.items) {
	                this.__props.children = this.__analysis(this.__props.items.map(function (v) {
	                    v.type = 'tab-pane';
	                    v.wrappedComponentRef = function (inst) {
	                        return _this11.tabRefs[v.key] = inst;
	                    };
	                    return v;
	                }));
	                delete this.__props.items;
	            }
	        }
	    }, {
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

	        var _this12 = _possibleConstructorReturn(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).call(this, props));

	        _this12.__init();
	        return _this12;
	    }

	    _createClass(TabPane, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.wrappedComponentRef && this.props.wrappedComponentRef(this);
	        }
	    }, {
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

	        var _this13 = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

	        _this13.__init();
	        return _this13;
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

	        var _this14 = _possibleConstructorReturn(this, (CheckableTag.__proto__ || Object.getPrototypeOf(CheckableTag)).call(this, props));

	        _this14.__init();
	        return _this14;
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

	        var _this15 = _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call(this, props));

	        _this15.__init();
	        return _this15;
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

	        var _this16 = _possibleConstructorReturn(this, (TimelineItem.__proto__ || Object.getPrototypeOf(TimelineItem)).call(this, props));

	        _this16.__init();
	        return _this16;
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(68);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Content = exports.Sider = exports.Footer = exports.Header = exports.Layout = exports.Col = exports.Row = exports.Icon = exports.Backtop = exports.ButtonGroup = exports.Button = exports.AnchorLink = exports.Anchor = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _utils = __webpack_require__(22);

	var _Genaral14 = __webpack_require__(72);

	var _Genaral15 = _interopRequireDefault(_Genaral14);

	var _antd = __webpack_require__(21);

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

	        _this3._filter.push('link', 'active', 'actived', 'activedChildren', 'unActivedChildren');
	        _this3._injectEvent.push('onClick');
	        _this3.__init();
	        return _this3;
	    }

	    _createClass(Button, [{
	        key: '_afterInitProps',
	        value: function _afterInitProps() {
	            if (this.__filtered.actived === true) {
	                this.__filtered.active = !!this.__filtered.active;
	            }
	        }
	    }, {
	        key: '_onClick',
	        value: function _onClick() {
	            // 如果配置了link属性，则按钮点击后会跳转到link指定的页面
	            if (this.__filtered.link) {
	                _utils.Utils.goto(this.__filtered.link);
	            }
	            if (this.__filtered.actived === true) {
	                this.__filtered.active = !this.__filtered.active;
	                this.forceUpdate();
	            }
	        }
	        // 处理 activedChildren 及 unActivedChildren 参数，可以通过这两个参数控制按钮处于两种状态时分别展示的内容

	    }, {
	        key: 'handlerOtherProps',
	        value: function handlerOtherProps() {
	            var _this4 = this;

	            var otherProps = {};
	            if (!this.__filtered.activedChildren && !this.__filtered.unActivedChildren) {
	                return otherProps;
	            }
	            // 根据是否active决定使用哪个配置
	            if (this.__filtered.active) {
	                otherProps = this.__filtered.activedChildren || {};
	            } else {
	                otherProps = this.__filtered.unActivedChildren || {};
	            }
	            otherProps = _utils.Utils.copy(otherProps);
	            // 如果配置了content，重新解析成children
	            if (otherProps.content) {
	                otherProps.children = this.__analysis(otherProps.content);
	            }
	            // 不能直接覆盖掉原组件内部绑定的onClick事件
	            if (otherProps.onClick) {
	                var oriOnClick = otherProps.onClick;
	                otherProps.onClick = function (e) {
	                    _this4.__props.onClick(e);
	                    oriOnClick(e);
	                };
	            }
	            return otherProps;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var className = '';
	            // 额外加一个mini类型的size
	            var size = this.__props.size;
	            if (size === 'mini') {
	                className += ' uf-btn-mini';
	                size = 'small';
	            }
	            if (this.__filtered.active && !this.__filtered.activedChildren) {
	                className += ' active';
	            }
	            return _react2.default.createElement(Antd.Button, _extends({}, this.__props, this.handlerOtherProps(), this.__getCommonProps({ className: className }), {
	                size: size
	            }));
	        }
	    }]);

	    return Button;
	}(_Genaral15.default);
	// 按钮组


	var ButtonGroup = exports.ButtonGroup = function (_Genaral4) {
	    _inherits(ButtonGroup, _Genaral4);

	    function ButtonGroup(props) {
	        _classCallCheck(this, ButtonGroup);

	        var _this5 = _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call(this, props));

	        _this5.__init();
	        return _this5;
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

	        var _this6 = _possibleConstructorReturn(this, (Backtop.__proto__ || Object.getPrototypeOf(Backtop)).call(this, props));

	        _this6.__init();
	        return _this6;
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

	        var _this7 = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));

	        _this7.__init();
	        return _this7;
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

	        var _this8 = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, props));

	        _this8.__init();
	        return _this8;
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

	        var _this9 = _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).call(this, props));

	        _this9.__init();
	        return _this9;
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

	        var _this10 = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

	        _this10.__init();
	        return _this10;
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

	        var _this11 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

	        _this11.__init();
	        return _this11;
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

	        var _this12 = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

	        _this12.__init();
	        return _this12;
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

	        var _this13 = _possibleConstructorReturn(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).call(this, props));

	        _this13.__init();
	        return _this13;
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

	        var _this14 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

	        _this14.__init();
	        return _this14;
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(68);

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Step = exports.Steps = exports.Pagination = exports.Menu = exports.DropdownButton = exports.Dropdown = exports.Breadcrumb = exports.Affix = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(74);

	var _utils = __webpack_require__(22);

	var _Navigation9 = __webpack_require__(75);

	var _Navigation10 = _interopRequireDefault(_Navigation9);

	var _antd = __webpack_require__(21);

	var Antd = _interopRequireWildcard(_antd);

	var _router = __webpack_require__(76);

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
	}(_Navigation10.default);

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
	        key: '_afterInit',
	        value: function _afterInit() {
	            var _this3 = this;

	            _get(Breadcrumb.prototype.__proto__ || Object.getPrototypeOf(Breadcrumb.prototype), '_afterInit', this).call(this);
	            // itemRender 用户返回的是一个配置，这里根据配置生成组件
	            if (this.__props.itemRender) {
	                var origin = this.__props.itemRender;
	                this.__props.itemRender = function () {
	                    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                        params[_key] = arguments[_key];
	                    }

	                    var result = origin.call.apply(origin, [_this3].concat(params));
	                    return _this3.__analysis(result);
	                };
	            } else {
	                // 如果用户没有配置 itemRender，则使用默认的 itemRender
	                // 增加了 breadcrumbIcon 属性解析
	                this.__props.itemRender = function (route, params, routes, paths) {
	                    var last = routes.indexOf(route) === routes.length - 1;
	                    var icon = route.breadcrumbIcon ? _react2.default.createElement(Antd.Icon, { key: '1', type: route.breadcrumbIcon }) : null;
	                    var breadcrumbName = _this3.renderBreadcrumbName(route.breadcrumbName);
	                    var item = !!icon ? [icon, _react2.default.createElement(
	                        'span',
	                        { key: '2' },
	                        breadcrumbName
	                    )] : breadcrumbName;
	                    // 解决跟节点的面包屑paths为空导致不可点问题
	                    var to = '/' + paths.join('/');
	                    return last ? item : _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: to, className: 'ant-breadcrumb-link' },
	                        item
	                    );
	                };
	            }
	        }
	        // 面包屑展示处理

	    }, {
	        key: 'renderBreadcrumbName',
	        value: function renderBreadcrumbName(name) {
	            // 如果有类似于`:id`这种形式的和路由参数匹配的情况，则替换成对应的参数值
	            return _utils.Utils.urlAnalysis(name, _router.Router.getRouter().params, false);
	        }
	        // 每次render都需要重新获取routes

	    }, {
	        key: 'beforeRender',
	        value: function beforeRender() {
	            // 如果用户配置了items，则按照用户配置的items列表类展示面包屑
	            if (!this.__props.items) {
	                var newRoutes = [];
	                var routes = this._root.props.routes;
	                // 过滤掉无效的面包屑（既没有name，又没有icon）
	                if (routes) {
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;

	                    try {
	                        for (var _iterator = routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var v = _step.value;

	                            if (v.breadcrumbName || v.breadcrumbIcon) {
	                                newRoutes.push(v);
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
	                this.__props.routes = newRoutes;
	                this.__props.params = this._root.props.params;
	            } else {
	                this.__props.routes = this.__props.items;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.beforeRender();
	            return _react2.default.createElement(Antd.Breadcrumb, this.__props);
	        }
	    }]);

	    return Breadcrumb;
	}(_Navigation10.default);

	/************ Dropdown 下拉菜单 *************************************************************************** */

	var Dropdown = exports.Dropdown = function (_Navigation3) {
	    _inherits(Dropdown, _Navigation3);

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
	}(_Navigation10.default);

	var DropdownButton = exports.DropdownButton = function (_Navigation4) {
	    _inherits(DropdownButton, _Navigation4);

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
	}(_Navigation10.default);

	/************ Menu 导航菜单 *************************************************************************** */

	var Menu = exports.Menu = function (_Navigation5) {
	    _inherits(Menu, _Navigation5);

	    function Menu(props) {
	        _classCallCheck(this, Menu);

	        var _this6 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

	        _this6.__controlled = {
	            key: 'selectedKeys',
	            event: 'onSelect',
	            defaultVal: []
	        };
	        // 收集全部可用的key值
	        _this6.allKeys = {};
	        _this6.__init();
	        return _this6;
	    }
	    // __setProps 后，增加附加处理逻辑


	    _createClass(Menu, [{
	        key: '_afterSetProps',
	        value: function _afterSetProps() {
	            if (this.__props.items) {
	                this.__props.children = this.handleItems(this.__props.items);
	                delete this.__props.items;
	            }
	        }
	        // 见 Antd.js

	    }, {
	        key: '_onControlEvent',
	        value: function _onControlEvent() {
	            var _ref = arguments.length <= 0 ? undefined : arguments[0],
	                selectedKeys = _ref.selectedKeys;

	            this.__props['selectedKeys'] = selectedKeys;
	            this.forceUpdate();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {
	            this.followRoute();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.followRoute();
	            this.forceUpdate();
	        }
	        // 解析子组件结构

	    }, {
	        key: 'handleItems',
	        value: function handleItems(items, parentKey) {
	            var arr = items;
	            if (!_utils.Utils.typeof(items, 'array')) {
	                arr = [items];
	            }
	            var children = [];
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var item = _step2.value;

	                    var v = _utils.Utils.copy(item);
	                    // 判断是否有权限
	                    if (!this.__authority(v)) {
	                        continue;
	                    }
	                    // 首先处理所有类型的菜单项公共属性
	                    if (!v.key && v.link) {
	                        v.key = v.link;
	                    }
	                    if (v.title) {
	                        v.title = _react2.default.createElement(
	                            'span',
	                            null,
	                            this.__analysis(v.title)
	                        );
	                    }
	                    if (v.icon) {
	                        v.title = _react2.default.createElement(
	                            'span',
	                            null,
	                            _react2.default.createElement(Antd.Icon, { type: v.icon }),
	                            v.title
	                        );
	                    }
	                    if (v.link) {
	                        // 如果是http链接，则改用 a 标签
	                        if (v.link.indexOf('http') === 0) {
	                            v.title = _react2.default.createElement(
	                                'a',
	                                { href: v.link, target: v._target },
	                                v.title
	                            );
	                        } else {
	                            v.title = _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: v.link },
	                                v.title
	                            );
	                        }
	                    }
	                    // 菜单项类型，默认为单个 菜单项组件
	                    var _Antd$Menu = Antd.Menu,
	                        Item = _Antd$Menu.Item,
	                        ItemGroup = _Antd$Menu.ItemGroup,
	                        SubMenu = _Antd$Menu.SubMenu;

	                    var Comp = Item;
	                    // 解析子菜单
	                    if (v.childItems) {
	                        // 如果有子菜单，则默认为 子菜单组件
	                        Comp = SubMenu;
	                        v.children = v.children || [];
	                        if (!_utils.Utils.typeof(v.children, 'array')) {
	                            v.children = [v.children];
	                        }
	                        v.children.push(this.handleItems(v.childItems, parentKey || v.key));
	                        delete v.childItems;
	                    }
	                    // 指定为group类型，则使用 菜单分组组件
	                    if (v.mode === 'group') {
	                        Comp = ItemGroup;
	                    }
	                    // 普通菜单项组件没有title属性，取而代之的是children
	                    if (Comp === Item) {
	                        v.children = v.title;
	                        delete v.title;
	                    }

	                    children.push(_react2.default.createElement(Comp, v));

	                    // 保存key值
	                    if (v.key && !v.disabled) {
	                        // 存储的是顶层导航的 key
	                        this.allKeys[v.key] = parentKey || v.key;
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

	            return children;
	        }
	        // 高亮的菜单项跟随路由一起变换

	    }, {
	        key: 'followRoute',
	        value: function followRoute() {
	            // 侧边栏处于收起状态时不再执行高亮判断
	            if (!this.__props.followRoute || this.__props.inlineCollapsed) {
	                return;
	            }
	            var routes = this._root.props.routes;
	            var location = this._root.props.location;
	            var params = this._root.props.params;
	            if (routes && location) {
	                var key = routes[routes.length - 1].path;
	                key = _utils.Utils.urlAnalysis(key, params, false);
	                var path = location.pathname;
	                path = _utils.Utils.urlAnalysis(path, params, false);
	                var subPath = location.pathname.slice(1);
	                // 分两种情况：
	                //   1、每个菜单项都有key，且key为最简单（仅含当前层级的路由信息）的情况。如果路由的最后一项和菜单项相匹配，则高亮菜单项
	                //   2、具有link的菜单项没有设置key，则默认使用link值。link值为路由全路径，所有需要再用path和allKeys进行一次比对
	                if (this.allKeys[key]) {
	                    this.__props.selectedKeys = [key];
	                    this.changeDefaultOpenKeys(this.allKeys[key]);
	                } else if (this.allKeys[path]) {
	                    this.__props.selectedKeys = [path];
	                    this.changeDefaultOpenKeys(this.allKeys[path]);
	                } else if (this.allKeys[subPath]) {
	                    this.__props.selectedKeys = [subPath];
	                    this.changeDefaultOpenKeys(this.allKeys[subPath]);
	                }
	            }
	        }
	    }, {
	        key: 'changeDefaultOpenKeys',
	        value: function changeDefaultOpenKeys(key) {
	            var defaultKeys = this.__props.defaultOpenKeys;
	            if (defaultKeys && defaultKeys.indexOf(key) === -1) {
	                this.__props.defaultOpenKeys.push(key);
	            } else {
	                this.__props.defaultOpenKeys = [key];
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Menu, this.__props);
	        }
	    }]);

	    return Menu;
	}(_Navigation10.default);

	/************ Pagination 分页 *************************************************************************** */

	var Pagination = exports.Pagination = function (_Navigation6) {
	    _inherits(Pagination, _Navigation6);

	    function Pagination(props) {
	        _classCallCheck(this, Pagination);

	        // current为受控属性，父类中统一实现属性的绑定和变更（BaseComponent）
	        // event: onChange / paramsIndex: 0
	        var _this7 = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

	        _this7.__controlled = {
	            key: 'current'
	        };
	        _this7.__init();
	        return _this7;
	    }
	    // reset() {
	    //     this.__setProps({
	    //         current: 1
	    //     });
	    // }


	    _createClass(Pagination, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Pagination, this.__props);
	        }
	    }]);

	    return Pagination;
	}(_Navigation10.default);

	/************ Steps 步骤条 *************************************************************************** */

	var Steps = exports.Steps = function (_Navigation7) {
	    _inherits(Steps, _Navigation7);

	    function Steps(props) {
	        _classCallCheck(this, Steps);

	        var _this8 = _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this, props));

	        _this8.__init();
	        return _this8;
	    }

	    _createClass(Steps, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Steps, this.__props);
	        }
	    }]);

	    return Steps;
	}(_Navigation10.default);
	// Step 单条步骤


	var Step = exports.Step = function (_Navigation8) {
	    _inherits(Step, _Navigation8);

	    function Step(props) {
	        _classCallCheck(this, Step);

	        var _this9 = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this, props));

	        _this9.__init();
	        return _this9;
	    }

	    _createClass(Step, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Steps.Step, this.__props);
	        }
	    }]);

	    return Step;
	}(_Navigation10.default);

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = window.DLL.ReactRouter;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(68);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Router = __webpack_require__(77);

	var Router = _interopRequireWildcard(_Router);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	module.exports = Router;

	// module.exports = require('./Router.js').default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IndexLink = exports.Link = exports.Router = exports.BaseRouter = exports.RouteHolder = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(74);

	var OriRouter = _interopRequireWildcard(_reactRouter);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	var _src = __webpack_require__(12);

	var _instance = __webpack_require__(59);

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
	    // _afterInit() {
	    //     this._inject(this.__props, 'onClick', e=>{
	    //         e.preventDefault();
	    //         OriRouter.browserHistory.push('#' + this.__props.to);
	    //     });
	    // }


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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.notification = exports.message = exports.Loading = exports.Progress = exports.Alert = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Feedback4 = __webpack_require__(79);

	var _Feedback5 = _interopRequireDefault(_Feedback4);

	var _utils = __webpack_require__(22);

	var _src = __webpack_require__(12);

	var _src2 = _interopRequireDefault(_src);

	var _antd = __webpack_require__(21);

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
	        key: 'loading',
	        value: function loading(status) {
	            this.__setProps({ loading: status });
	        }
	    }, {
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


	function messageHandler(type, config) {
	    var _Antd$message;

	    var list = _src.WhiteList.get(config, 'message');
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var v = _step.value;

	            config[v] = _src2.default.render(config[v]);
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

	    if (_utils.Utils.typeof(config, ['object', 'array'])) {
	        config = _src2.default.render(config);
	    }

	    for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        params[_key - 2] = arguments[_key];
	    }

	    return (_Antd$message = Antd.message)[type].apply(_Antd$message, [config].concat(params));
	}

	var message = exports.message = Object.assign({}, Antd.message, {
	    success: messageHandler.bind(null, 'success'),
	    error: messageHandler.bind(null, 'error'),
	    info: messageHandler.bind(null, 'info'),
	    warning: messageHandler.bind(null, 'warning'),
	    warn: messageHandler.bind(null, 'warn'),
	    loading: messageHandler.bind(null, 'loading')
	});

	/************* notification 提示 ************************************************************************** */

	function notificationHandler(type, config) {
	    var list = _src.WhiteList.get(config, 'notification');
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var v = _step2.value;

	            config[v] = _src2.default.render(config[v]);
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

	    return Antd.notification[type](config);
	}

	var notification = exports.notification = Object.assign({}, Antd.notification, {
	    success: notificationHandler.bind(null, 'success'),
	    error: notificationHandler.bind(null, 'error'),
	    info: notificationHandler.bind(null, 'info'),
	    warning: notificationHandler.bind(null, 'warning'),
	    warn: notificationHandler.bind(null, 'warn'),
	    open: notificationHandler.bind(null, 'open')
	});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(68);

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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Content = exports.SiderTrigger = exports.Sider = exports.Footer = exports.Header = exports.Layout = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _Layout = __webpack_require__(81);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _utils = __webpack_require__(22);

	var _antd = __webpack_require__(21);

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
	        _this.hasSiderClass = _this._handler();
	        return _this;
	    }
	    // 如果content里面包含有sider，则className中增加 ant-layout-has-sider。ps：没想清antd的官方是怎么做到适配的


	    _createClass(Layout, [{
	        key: '_handler',
	        value: function _handler() {
	            if (this.__props.children) {
	                var children = this.__props.children;
	                if (!_utils.Utils.typeof(children, 'array')) {
	                    children = [children];
	                }
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var v = _step.value;

	                        // children中为实例化后的组件，type对应组件的构造函数
	                        if (v && v.type === Sider) {
	                            return ' ant-layout-has-sider';
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
	            return '';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Antd.Layout, _extends({}, this.__props, { className: (this.__props.className || '') + this.hasSiderClass }));
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

	        _this4.__controlled = {
	            key: 'collapsed',
	            event: 'onCollapse',
	            defaultVal: false
	        };
	        // 属性组件本身不支持，需要过滤掉。使用时在 __filtered 上获取
	        _this4._filter.push('triggerPosition');
	        _this4._openApi.push('toggleCollapsed');
	        _this4.__init();
	        _this4.handleCollapsed();
	        return _this4;
	    }
	    // __setProps 后，增加附加处理逻辑


	    _createClass(Sider, [{
	        key: '_afterSetProps',
	        value: function _afterSetProps() {
	            var topClass = ' top-trigger';
	            var className = this.__props.className || '';
	            if (this.__filtered.triggerPosition === 'top' && className.indexOf(topClass) === -1) {
	                this.__props.className = className + topClass;
	            }
	        }
	        // 切换收起/展示状态（暴露给用户使用）

	    }, {
	        key: 'toggleCollapsed',
	        value: function toggleCollapsed() {
	            var collapsed = !this.__props.collapsed;
	            this.__setProps({ collapsed: collapsed });
	            this.__props.onCollapse(collapsed);
	        }
	        // Sider 组件自动和其子组件 Menu 做关联，收起时同时收起 Menu
	        // TODO: 代码耦合严重，需要剥离关联逻辑

	    }, {
	        key: 'handleCollapsed',
	        value: function handleCollapsed() {
	            var _this5 = this;

	            if (this.__props.collapsible) {
	                var children = this.__props.children;
	                if (children) {
	                    if (!_utils.Utils.typeof(children, 'array')) {
	                        children = [children];
	                    }
	                    // 查找 Menu 组件
	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var v = _step2.value;

	                            if (v.props.__type === 'menu') {
	                                (function () {
	                                    var key = v.props.__cache || v.props.__key;
	                                    var inject = function inject(collapsed) {
	                                        var menu = _this5.__getComponent(key);
	                                        if (menu) {
	                                            var defaultOpenKeys = menu.get('_defaultOpenKeys', 'defaultOpenKeys');
	                                            // 从缓存中获取 Menu 组件，并更改组件状态
	                                            menu.set({
	                                                inlineCollapsed: collapsed,
	                                                // 保存原 defaultOpenKeys 的值
	                                                _defaultOpenKeys: defaultOpenKeys,
	                                                defaultOpenKeys: collapsed ? [] : defaultOpenKeys
	                                            });
	                                        }
	                                    };
	                                    // 注入到 onCollapse 函数中
	                                    _this5._inject(_this5.__props, 'onCollapse', inject);
	                                })();
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
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var trigger = this.__props.trigger;
	            if (trigger === undefined) {
	                trigger = _react2.default.createElement(Antd.Icon, { className: 'trigger', type: this.__props.collapsed ? 'menu-unfold' : 'menu-fold' });
	            }
	            return _react2.default.createElement(Antd.Layout.Sider, _extends({}, this.__props, { trigger: trigger }));
	        }
	    }]);

	    return Sider;
	}(_Layout2.default);

	// Sider 子组件
	// TODO: 关联关系如何增加？


	var SiderTrigger = exports.SiderTrigger = function (_BaseLayout5) {
	    _inherits(SiderTrigger, _BaseLayout5);

	    function SiderTrigger(props) {
	        _classCallCheck(this, SiderTrigger);

	        var _this6 = _possibleConstructorReturn(this, (SiderTrigger.__proto__ || Object.getPrototypeOf(SiderTrigger)).call(this, props));

	        _this6._filter.push('reverse');
	        _this6.__init();
	        _this6.target = null;
	        return _this6;
	    }

	    _createClass(SiderTrigger, [{
	        key: '_componentDidMount',
	        value: function _componentDidMount() {
	            _get(SiderTrigger.prototype.__proto__ || Object.getPrototypeOf(SiderTrigger.prototype), '_componentDidMount', this) && _get(SiderTrigger.prototype.__proto__ || Object.getPrototypeOf(SiderTrigger.prototype), '_componentDidMount', this).call(this);
	            this.target = this._factory.$components.get(this.__props.target);
	            this.forceUpdate();
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick() {
	            this.target.toggleCollapsed();
	            this.forceUpdate();
	            this.__props.onClick && this.__props.onClick();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var style = Object.assign({ cursor: 'pointer' }, this.__props.style);
	            return _react2.default.createElement(Antd.Icon, _extends({}, this.__props, {
	                type: this.target && this.target.get('collapsed') ? !this.__filtered.reverse ? 'menu-unfold' : 'menu-fold' : this.__filtered.reverse ? 'menu-unfold' : 'menu-fold',
	                onClick: this.target && this.onClick.bind(this) }));
	        }
	    }]);

	    return SiderTrigger;
	}(_Layout2.default);

	// Layout 组件


	var Content = exports.Content = function (_BaseLayout6) {
	    _inherits(Content, _BaseLayout6);

	    function Content(props) {
	        _classCallCheck(this, Content);

	        var _this7 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

	        _this7.__init();
	        return _this7;
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Antd2 = __webpack_require__(68);

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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(83).default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(21);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

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
	}(_base.BaseComponent);

	exports.default = Iframe;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file Fieldset组件入口
	 * **/

	module.exports = __webpack_require__(85).default;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _DataEntry2 = __webpack_require__(67);

	var _DataEntry3 = _interopRequireDefault(_DataEntry2);

	var _utils = __webpack_require__(22);

	var _antd = __webpack_require__(21);

	var _dataentry = __webpack_require__(66);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 自动补全组件 封装，支持单选和多选
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/**
	 * 注意：关于onSearch、onChange触发条件
	 * * 单选模式下：
	 *      输入时，先触发onSearch，再触发onChange
	 *      选中时，只触发onChange
	 * * 多选模式下：
	 *      输入时，只触发onSearch
	 *      选中时，只触发onChange
	 */

	var LimitedProps = {
	    showSearch: true,
	    notFoundContent: null,
	    // defaultActiveFirstOption: false,
	    filterOption: false
	};

	// 本地自动补全

	var LocalAutoComplete = function (_Select) {
	    _inherits(LocalAutoComplete, _Select);

	    function LocalAutoComplete(props) {
	        _classCallCheck(this, LocalAutoComplete);

	        // _onSearch 中的逻辑会注入到 onSearch 事件中，见 BaseComponent
	        var _this = _possibleConstructorReturn(this, (LocalAutoComplete.__proto__ || Object.getPrototypeOf(LocalAutoComplete)).call(this, props));

	        _this._injectEvent = ['onSearch'];
	        _this.__init();
	        return _this;
	    }

	    _createClass(LocalAutoComplete, [{
	        key: '_afterInitProps',
	        value: function _afterInitProps() {
	            _get(LocalAutoComplete.prototype.__proto__ || Object.getPrototypeOf(LocalAutoComplete.prototype), '_afterInitProps', this).call(this);
	            Object.assign(this.__props, LimitedProps);
	        }
	        // 注入到 onSearch 事件中
	        // 输入时，先触发onSearch，再触发onChange

	    }, {
	        key: '_onSearch',
	        value: function _onSearch(value) {
	            // 保存原输入值
	            this.oriValue = value;
	            var options = [];
	            if (!!value) {
	                options = this.__props.suffix.map(function (i) {
	                    return value + i;
	                });
	            }
	            this.__setProps({ options: options });
	        }
	        // 当选择时，只触发onChange
	        // 默认对应的是 onChange

	    }, {
	        key: '_onControlEvent',
	        value: function _onControlEvent() {
	            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                params[_key] = arguments[_key];
	            }

	            if (this.isMultiple) {
	                var _get2;

	                (_get2 = _get(LocalAutoComplete.prototype.__proto__ || Object.getPrototypeOf(LocalAutoComplete.prototype), '_onControlEvent', this)).call.apply(_get2, [this].concat(params));
	                this.__setProps({ options: [] });
	            } else {
	                var _get3;

	                // 对change前后的数据进行对比
	                var oldValue = this.__props.value;
	                (_get3 = _get(LocalAutoComplete.prototype.__proto__ || Object.getPrototypeOf(LocalAutoComplete.prototype), '_onControlEvent', this)).call.apply(_get3, [this].concat(params));
	                var newValue = this.__props.value;
	                // 如果长度变短，说明是在删除，如果和后缀能匹配上，直接把后缀删除
	                if (oldValue && newValue && oldValue.length > newValue.length) {
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;

	                    try {
	                        for (var _iterator = this.__props.suffix[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var v = _step.value;

	                            if (oldValue.indexOf(v) !== -1) {
	                                var result = oldValue.replace(v, '');
	                                if (result.length < newValue.length) {
	                                    this.__props.value = result;
	                                    // 重置value后，需要手动再次触发onSearch逻辑，以恢复原
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
	        }
	    }]);

	    return LocalAutoComplete;
	}(_dataentry.Select);

	// 自动补全远程数据
	// 复用Select的构造函数/render等逻辑，覆盖部分原函数。所以无需再写render


	var SourceAutoComplete = function (_Select2) {
	    _inherits(SourceAutoComplete, _Select2);

	    function SourceAutoComplete(props) {
	        _classCallCheck(this, SourceAutoComplete);

	        var _this2 = _possibleConstructorReturn(this, (SourceAutoComplete.__proto__ || Object.getPrototypeOf(SourceAutoComplete)).call(this, props));

	        _this2.class.push('select');
	        _this2._injectEvent = ['onSearch', 'onChange'];
	        // 延迟150ms执行
	        _this2._onSearch = _utils.Utils.debounce(_this2._onSearch, 150);
	        _this2.requestIndex = 0;

	        _this2.__init();
	        return _this2;
	    }

	    _createClass(SourceAutoComplete, [{
	        key: 'triggerLoading',
	        value: function triggerLoading(status) {
	            this.loading(status, 'simple');
	        }
	    }, {
	        key: '_onSourceSuccess',
	        value: function _onSourceSuccess() {
	            this.triggerLoading(false);
	        }
	    }, {
	        key: '_afterInitProps',
	        value: function _afterInitProps() {
	            _get(SourceAutoComplete.prototype.__proto__ || Object.getPrototypeOf(SourceAutoComplete.prototype), '_afterInitProps', this).call(this);
	            Object.assign(this.__props, LimitedProps);
	            Object.assign(this.__filtered.source, {
	                autoLoad: false,
	                autoReload: 'set',
	                requestMerge: false,
	                cache: true
	            });
	        }
	        // 多选时，输入完触发onSearch，选中选项后触发onChange

	    }, {
	        key: '_onSearch',
	        value: function _onSearch(value) {
	            if (value === '') {
	                ++this.requestIndex;
	                this.triggerLoading(false);
	                this.__setProps({
	                    options: []
	                });
	            } else {
	                this.triggerLoading(true);
	                this.set({
	                    options: [],
	                    source: {
	                        params: { value: value }
	                    }
	                });
	            }
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(value) {
	            this.triggerLoading(false);
	            if (_utils.Utils.typeof(value, 'array') && value.length === 0) {
	                this.__setProps({ options: [] });
	            }
	        }
	        // 追加忽略先前请求返回的结果的逻辑

	    }, {
	        key: '__getSourceData',
	        value: function __getSourceData(config) {
	            var _this3 = this;

	            var index = ++this.requestIndex;
	            config._handler = function (data) {
	                if (_this3.requestIndex !== index) {
	                    return false;
	                }
	                return data;
	            };
	            _get(SourceAutoComplete.prototype.__proto__ || Object.getPrototypeOf(SourceAutoComplete.prototype), '__getSourceData', this).call(this, config);
	        }
	    }]);

	    return SourceAutoComplete;
	}(_dataentry.Select);

	var NewAutoComplete = function (_DataEntry) {
	    _inherits(NewAutoComplete, _DataEntry);

	    function NewAutoComplete() {
	        _classCallCheck(this, NewAutoComplete);

	        return _possibleConstructorReturn(this, (NewAutoComplete.__proto__ || Object.getPrototypeOf(NewAutoComplete)).apply(this, arguments));
	    }

	    _createClass(NewAutoComplete, [{
	        key: 'render',
	        value: function render() {
	            var className = { className: 'uf-autocomplete ' + (this.props.className || '') };
	            return this.props.children ? _react2.default.createElement(_antd.AutoComplete, _extends({}, this.props, className)) : this.props.source ? _react2.default.createElement(SourceAutoComplete, _extends({}, this.props, className)) : _react2.default.createElement(LocalAutoComplete, _extends({}, this.props, className));
	        }
	    }]);

	    return NewAutoComplete;
	}(_DataEntry3.default);

	exports.default = NewAutoComplete;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	*   @file Export导出组件的引入文件
	*/
	module.exports = __webpack_require__(87).default;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _base = __webpack_require__(19);

	var _antd = __webpack_require__(21);

	var _utils = __webpack_require__(22);

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

	        var _this = _possibleConstructorReturn(this, (Export.__proto__ || Object.getPrototypeOf(Export)).call(this, props, 'export'));

	        _this._openApi.push('export');
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
	            mode: 'asyn',
	            // 记录参数中有没有message传入,如果没有传入,导出完成时进度条不隐藏
	            noMessage: true,
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
	                this.config.mode = this.config.mode || 'asyn';
	                var state = {
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
	                if (nextProps) {
	                    this.setState(state);
	                } else {
	                    this.state = state;
	                }
	            } else {
	                this.config.mode = this.config.mode || 'sync';
	                // 用于存储导出的数据，为避免合并数据时出错，请求过来的数据没有合并到一个数组
	                // data里面的数据是这样的：[[{...},{...},...],[],[]]
	                this.data = [objProps.data];
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.__shouldUpdate(this.props, nextProps)) {
	                this.initExport(nextProps);
	            }
	            // if (nextProps.data) {
	            //     this.config.mode = 'sync';
	            //     this.data = [nextProps.data];
	            // }
	            // this.config = this.__mergeProps(this.config, nextProps);
	            // // Table后端分页的情况会用到
	            // if (this.config.total && this.config.total !== this.state.total) {
	            //     this.setState({
	            //         total: this.config.total
	            //     });
	            // }
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
	        key: 'export',
	        value: function _export() {
	            if (this.config.mode === 'asyn') {
	                this.showModal();
	            } else {
	                this.aRef && this.aRef.click();
	            }
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
	            this.getData(1);
	        }
	        // 覆盖原生获取异步数据的函数

	    }, {
	        key: '_handleAsyncData',
	        value: function _handleAsyncData() {}
	        // 导出进程

	    }, {
	        key: 'getData',
	        value: function getData(page) {
	            var _this3 = this;

	            var params = this.__filtered.source.params;
	            params = Object.assign({}, params, {
	                page: page,
	                size: this.state.pageSize,
	                total: this.state.total
	            });
	            // 调用通用source获取数据逻辑
	            this.__getSourceData({
	                params: params,
	                success: function success(data, res) {
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
	                            _this3.getData(page + 1);
	                        } else {
	                            _this3.finish();
	                        }
	                    }
	                },
	                error: function error(err) {
	                    _this3.error(err);
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
	            var dataBlob = new Blob(htmlParts, { 'type': 'text/xls' });
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
	        // 同步导出方式页面 - 即实例化组件时直接传入数据

	    }, {
	        key: 'syncExportRender',
	        value: function syncExportRender() {
	            var _this6 = this;

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
	                { className: 'uf-export ' + (this.config.className || ''), style: this.config.style },
	                _react2.default.createElement(
	                    'a',
	                    { ref: function ref(ele) {
	                            return _this6.aRef = ele;
	                        }, href: link, download: name },
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
	                { className: 'uf-export ' + (this.config.className || ''), style: this.config.style },
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
	                    { hidden: !this.state.finish, className: 'finish-export' },
	                    _react2.default.createElement(
	                        'a',
	                        { ref: 'download', style: { color: '#fff' } },
	                        _react2.default.createElement(
	                            _antd.Button,
	                            { type: 'primary' },
	                            '\u4E0B\u8F7D\u6587\u4EF6'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'mt8' },
	                        _react2.default.createElement(_antd.Icon, { type: 'check-circle', className: 'success-icon' }),
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
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.config.mode === 'asyn') {
	                return this.asynExportRender();
	            } else {
	                return this.syncExportRender();
	            }
	        }
	    }]);

	    return Export;
	}(_base.BaseComponent);

	exports.default = Export;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	*   @file Tree组件的引入文件
	*/
	module.exports = __webpack_require__(89).default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	var _antd = __webpack_require__(21);

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
	var getParentNode = function getParentNode(value) {
	    var tree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

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

	// TODO: 异步获取数据不能用。data字段必须填

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
	            widthResize: {
	                resizeAble: false,
	                minWidth: '',
	                maxWidth: ''
	            },
	            showLine: false,
	            showIcon: false
	        };
	        _this.completePointerTree = {};
	        _this.levalPointerTree = {};
	        _this.initTree();
	        _this.handleSearch = _utils.Utils.debounce(_this.handleSearch, 200);
	        return _this;
	    }
	    // 树形控件初始化配置及数据


	    _createClass(OriginTree, [{
	        key: 'initTree',
	        value: function initTree(nextProps) {
	            var objProps = this.props;
	            // 过滤出变化的属性
	            if (nextProps) {
	                objProps = _utils.Utils.getChange(nextProps, objProps);
	            }
	            if (_utils.Utils.empty(objProps)) {
	                return;
	            }
	            var propsData = void 0;
	            if (objProps.data) {
	                propsData = _utils.Utils.clone(objProps.data);
	            }
	            // 针对数据进行处理
	            // 生成指针树，便于快速定位树节点
	            if (propsData) {
	                this.completePointerTree = {};
	                this.createPointerTree(propsData, this.completePointerTree);
	            }
	            // 生成层级树，包含每层可展开的父节点的key
	            if (propsData) {
	                this.levalPointerTree = {};
	                this.createLevalTree(propsData, this.levalPointerTree);
	            }

	            // 针对配置进行处理
	            // 对用户未配置的项使用默认配置
	            // this.config = this.__mergeProps(this.config, objProps.config);
	            this.config = this.__mergeProps(this.config, this.__filterProps(objProps, 'data'));
	            this.style = this.config.style;
	            this.expand = this.config.expand;
	            this.checkbox = this.config.checkbox;
	            this.search = this.config.search;
	            this.select = this.config.select;
	            this.loadData = !!this.__filtered.source.url;
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
	                expandedKeys: this.expand.expandedKeys,
	                autoExpandParent: this.expand.autoExpandParent,
	                checkedKeys: this.checkbox.checkedKeys, // 受控选择复选框
	                selectedKeys: this.select.selectedKeys, // 受控选择
	                searchValue: '' // 搜索框中输入内容
	            };
	            if (propsData) {
	                state.treeData = propsData;
	                state.completeTree = propsData;
	            }
	            if (!!nextProps) {
	                this.setState(state);
	                this.initShowLeval();
	            } else {
	                state.treeData = state.treeData || [];
	                state.completeTree = state.treeData || [];
	                this.state = state;
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.initShowLeval();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // 就算props没有改变，当父组件重新渲染时，也会进这里，所以需要在这里判断是否需要重新渲染组件
	            if (this.__shouldUpdate(this.props, nextProps)) {
	                this.initTree(nextProps);
	            }
	        }
	    }, {
	        key: 'initShowLeval',
	        value: function initShowLeval() {
	            // 具有expand，及expandLeavals配置，且没有配置expandedKeys时才按照用户要求展开到某一层
	            if (this.expand.expandLeavals && !this.expand.expandedKeys) {
	                this.showToLeval(this.expand.expandLeavals);
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
	            var item = e && e.node && e.node.props.data;
	            this.expand.onExpand(expandedKeys, e, item);
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
	            var item = e && e.node && e.node.props.data;
	            this.select.onSelect(selectedKeys, e, item);
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
	            var value = e.target.value;
	            this.handleSearch(value);
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
	                treeData: newTree || [],
	                searchValue: value
	            });
	        }
	        // 覆盖原生获取异步数据的函数
	        // _handleAsyncData() {}
	        // 异步对数据进行加载，满足一定要求再加载

	    }, {
	        key: 'onLoadData',
	        value: function onLoadData(treeNode) {
	            var _this2 = this;

	            var key = treeNode.props.data.key;
	            var nodeData = this.completePointerTree[key];
	            return new Promise(function (resolve) {
	                // 没有children数据又非叶子节点的时候需要去异步请求
	                if (!nodeData.children && nodeData.isLeaf === false || nodeData.children.length < 1 && !nodeData.isLeaf) {
	                    var params = _this2.__filtered.source.params;
	                    params = Object.assign({}, params, {
	                        key: nodeData.key,
	                        name: nodeData.name,
	                        type: nodeData.type,
	                        level: nodeData.level
	                    });
	                    // 调用通用source获取数据逻辑
	                    _this2.__getSourceData({
	                        params: params,
	                        success: function success(data) {
	                            _this2.insertData(nodeData.key, nodeData.type, data);
	                            resolve();
	                        },
	                        error: function error(res) {
	                            resolve();
	                        }
	                    });
	                } else {
	                    resolve();
	                }
	            });
	        }
	        // 向展示树和完整树中插入数据

	    }, {
	        key: 'insertData',
	        value: function insertData(curKey, type) {
	            var nodeData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	            var completeTree = this.state.completeTree;
	            // 如果返回的数据为依然为空数组或非数组，则更新当前节点为叶子节点，无法再次点击获取
	            if (_utils.Utils.typeof(nodeData, 'array') && nodeData.length) {
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
	            } else {
	                delete this.completePointerTree[curKey].children;
	                this.completePointerTree[curKey].isLeaf = true;
	            }
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
	            var _this3 = this;

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
	                if (_this3.widthResize['minWidth']) {
	                    if (oBox.offsetWidth <= parseInt(_this3.widthResize['minWidth'], 10)) {
	                        // 当盒子缩小到一定范围内的时候，让他保持一个固定值，不再继续改变
	                        oBox.style.width = _this3.widthResize['minWidth'];
	                    }
	                }
	                if (_this3.widthResize['maxWidth']) {
	                    if (oBox.offsetWidth >= parseInt(_this3.widthResize['maxWidth'], 10)) {
	                        // 当盒子缩小到一定范围内的时候，让他保持一个固定值，不再继续改变
	                        oBox.style.width = _this3.widthResize['maxWidth'];
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
	            var _this4 = this;

	            var _state = this.state,
	                expandedKeys = _state.expandedKeys,
	                searchValue = _state.searchValue;

	            return data.map(function (item) {
	                var title = item.name;
	                if (_this4.search && _this4.search.enable) {
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
	                        { key: item.key, title: title, data: item, isLeaf: false, _item: item,
	                            disableCheckbox: !!item.disableCheckbox, disabled: !!item.disabled },
	                        !!item.children && _this4.renderTreeNode(item.children)
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
	                    }, !!expandedKeys ? { expandedKeys: expandedKeys } : null, !!checkedKeys ? { checkedKeys: checkedKeys } : null, !!selectedKeys ? { selectedKeys: selectedKeys } : null, !!this.loadData ? { loadData: this.onLoadData.bind(this) } : null),
	                    this.renderTreeNode(treeData)
	                ),
	                this.widthResize['resizeAble'] && _react2.default.createElement('div', { className: 'uf-tree-ew-resize', onMouseDown: this.resizeWidth.bind(this) })
	            );
	        }
	    }]);

	    return OriginTree;
	}(_base.BaseComponent);

	exports.default = OriginTree;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file table组件默认访问文件
	 */
	module.exports = __webpack_require__(91).default;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	var _antd = __webpack_require__(21);

	var _export2 = __webpack_require__(86);

	var _export3 = _interopRequireDefault(_export2);

	var _Crud = __webpack_require__(92);

	var _Crud2 = _interopRequireDefault(_Crud);

	var _Title = __webpack_require__(93);

	var _Title2 = _interopRequireDefault(_Title);

	var _Edit = __webpack_require__(95);

	var _Edit2 = _interopRequireDefault(_Edit);

	var _Enum = __webpack_require__(96);

	var _Enum2 = _interopRequireDefault(_Enum);

	var _Filters = __webpack_require__(94);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 表格组件:antd Table的基础上增加了原来uf Table中的一些功能
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author susisi@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */

	// 扩展功能 - 增删改查等


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

	        _this._injectEvent.push('onRowDoubleClick', 'onChange');
	        // 暴露给用户使用的函数
	        _this._openApi.push('reload', 'refresh', 'export', 'showCrud', 'getSelected', 'getSelectedKeys', 'selectAll', 'clearSelect', 'getValues', 'getDisplayValues',
	        // 纯粹为了 bind this
	        'toggleFullScreen', 'refreshTable', 'toShowAllTags', '_handleExport', 'handleAction');
	        _this.__init();
	        _this._showLoading = _this.__filtered.source.showLoading === undefined || _this.__filtered.source.showLoading;
	        // 存储source中的初始化params参数
	        _this.oriSourceParams = {};
	        _this.state = {
	            antdConfig: null,
	            // 数据默认为空
	            completeData: [],
	            // 全屏展示与否
	            fullScreen: false,
	            // 是否展示全部字段
	            showAllTags: false,
	            // 加载状态
	            loading: false,
	            selectedRowKeys: [],
	            expandedRowKeys: []
	        };
	        // 保存选中的行数据
	        _this.selectedRows = [];
	        // 请求序号，当执行新请求时，之前的未返回数据的请求则废弃，通过index值是否相等判断
	        _this.requestIndex = null;
	        _this.filter = new _Filters.Filter(_this);
	        _this.enum = new _Enum2.default({
	            execAjax: _this.__execAjax.bind(_this),
	            continue: _this.componentDidMount.bind(_this),
	            formatApi: _this.__formatApi.bind(_this),
	            getConf: _this.__getConf.bind(_this)
	        });
	        _this.initTable(true);
	        return _this;
	    }

	    _createClass(NewTable, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // 即使props没有改变，当父组件重新渲染时，也会进这里，所以需要在这里判断是否需要重新渲染组件
	            if (this.__shouldUpdate(this.props, nextProps)) {
	                this.initTable();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            // 组件删除时，请求返回的数据无效
	            this.requestIndex = null;
	            this.expandThEle && this.expandThEle.removeEventListener('click', this.expandAllEventListener.bind(this));
	        }
	    }, {
	        key: 'initTable',
	        value: function initTable(isFirst) {
	            var _this2 = this;

	            var objProps = this.__props;
	            isFirst && (this.oriSourceParams = _utils.Utils.clone(this.__filtered.source.params));
	            // 兼容参数处理，兼容params的两种用法（写source外面也可以）
	            if (objProps.params) {
	                this.__filtered.source.params = Object.assign({}, this.oriSourceParams, objProps.params);
	            }
	            var state = {};
	            // TODO: rowKey 为函数时，下面很多地方不适用
	            this.rowKey = objProps.rowKey || 'id';
	            this.rowKeyFunc = null;
	            // 如果rowKey为一个函数，则把函数转存到rowKeyFunc中，rowKey置为_uniqueRowKey
	            if (_utils.Utils.typeof(this.rowKey, 'function')) {
	                this.rowKeyFunc = this.rowKey;
	                this.rowKey = '_uniqueRowKey';
	            }
	            // 注意：引用类型，this.pagination 和 this.__props.pagination 基本上是同一个东西
	            this.pagination = objProps.pagination || {};
	            // 是否为后端分页
	            this.serverPaging = this.__filtered.source.url && this.pagination.pageType === 'server';
	            // 列配置
	            this.columns = objProps.columns;
	            // 根据列初始化枚举类
	            isFirst && this.enum.init(this.columns);
	            var propsData = objProps.data;
	            propsData = this.handleRowKeyFunc(propsData);
	            // 行配置
	            this.rowSelection = null;
	            if (!!objProps.rowSelection) {
	                this.rowSelection = objProps.rowSelection;
	                if (this.rowSelection.selectedRowKeys) {
	                    state.selectedRowKeys = this.rowSelection.selectedRowKeys;
	                }
	            }
	            // 判断数据是disable。如果没定义，默认处理逻辑为数据中是否有disable/disabled === true
	            // this.disabledRow = this.rowSelection && (this.rowSelection.disabledRow !== undefined)
	            //         ? this.rowSelection.disabledRow
	            //         : v=>v.disable || v.disabled;
	            // 展开相关
	            if (!!objProps.expandedRowKeys) {
	                state.expandedRowKeys = objProps.expandedRowKeys;
	            }
	            var defaultCif = {
	                size: 'default',
	                rowKey: this.rowKey,
	                rowClassName: function rowClassName() {},
	                expandedRowRender: null,
	                defaultExpandedRowKeys: [],
	                // expandedRowKeys: [], // 配置之后会变为受控组件
	                defaultExpandAllRows: false,
	                locale: { filterTitle: '筛选', filterConfirm: '确定', filterReset: '重置', emptyText: '暂无数据' },
	                indentSize: 15,
	                bordered: false,
	                showHeader: true,
	                footer: null,
	                scroll: {},
	                onChange: null,
	                onExpand: function onExpand() {},
	                onExpandedRowsChange: function onExpandedRowsChange() {},
	                onRowClick: function onRowClick() {},
	                onRowDoubleClick: function onRowDoubleClick() {},
	                onRowMouseEnter: function onRowMouseEnter() {},
	                onRowMouseLeave: function onRowMouseLeave() {}
	            };
	            // 为了层级清晰，把扩展行相关的属性聚合到了expended属性中。此处兼容放属性里和属性外两种用法
	            if (this.__props.expanded) {
	                getNeedObject(defaultCif, this.__props.expanded);
	            }
	            getNeedObject(defaultCif, this.__props);
	            // 关于表头
	            if (!!objProps.title) {
	                var titleConfig = objProps.title;
	                // 如果是字符串 或者 非对象（组件配置，可以是数组）或者 单一组件配置
	                if (_utils.Utils.typeof(titleConfig, 'string')) {
	                    titleConfig = { text: titleConfig };
	                }
	                titleConfig.showText = titleConfig.showText !== undefined ? titleConfig.showText : true;
	                this.title = titleConfig;
	            } else {
	                this.title = null;
	            }
	            // this.header = this.handleHeader(objProps.header);
	            // 关于异步操作
	            if (propsData) {
	                state.completeData = propsData;
	                this.pagination.total = this.pagination.total || propsData.length;
	                // 如果传入新的data，则需刷新total
	                if (!this.__prevProps.data || this.__prevProps.data.length !== propsData.length) {
	                    this.pagination.total = propsData.length;
	                }
	            }
	            // 关于行样式与不可选相关联，不可选时至为灰色
	            if (this.rowSelection && this.rowSelection.disabledRow) {
	                // 暂存用户配置
	                var rowClassNameFun = defaultCif.rowClassName;
	                defaultCif.rowClassName = function (record, index) {
	                    var customRowClassName = rowClassNameFun(record, index);
	                    // 用户未定义rowClassName时customRowClassName为undefined
	                    if (!customRowClassName) {
	                        customRowClassName = '';
	                    }
	                    if (_this2.rowSelection.disabledRow(record)) {
	                        return 'disabledRow ' + customRowClassName;
	                    } else {
	                        return customRowClassName;
	                    }
	                };
	            }
	            this.antdConfig = defaultCif;
	            state.antdConfig = this.antdConfig;
	            if (isFirst) {
	                this.state = Object.assign({}, this.state, state);
	            } else {
	                this.setState(state);
	            }
	        }
	        // 双击行进行编辑功能

	    }, {
	        key: '_onRowDoubleClick',
	        value: function _onRowDoubleClick(record) {
	            if (this.__props.doubleClickEdit) {
	                this.showCrud('edit', record);
	            }
	        }
	        // 分页、排序、筛选变化时触发

	    }, {
	        key: '_onChange',
	        value: function _onChange(page, filter, sorter) {
	            // filter发生变化时，如果是后端分页进行处理
	            if (this.serverPaging && _utils.Utils.isChange(filter, this.filterParams)) {
	                var oldFilterParams = this.filterParams || {};
	                this.filterParams = filter;
	                this.filter.handleChange(filter, oldFilterParams);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // for enum, 无论如何都刷新一次组件
	            this.setState({ loading: this.enum.loading && this._showLoading });
	            // 请求数据见公共的BaseComponent的_componentDidMount逻辑
	            // code
	            // 添加展开全部功能按钮
	            this.handleExpandAllIcon();
	        }

	        /* 供用户调用接口 ***********************************************************************/
	        // 手动拉取数据

	    }, {
	        key: 'reload',
	        value: function reload() {
	            this.getData();
	        }
	        // 刷新表格

	    }, {
	        key: 'refresh',
	        value: function refresh(page) {
	            this.refreshTable(page);
	        }
	        // 展示增删改查等弹框，具体实现逻辑见 Crud.js

	    }, {
	        key: 'showCrud',
	        value: function showCrud() {
	            var _crudRef;

	            this.crudRef && (_crudRef = this.crudRef).showCrud.apply(_crudRef, arguments);
	        }
	        // 获取当前全部选中行的数据

	    }, {
	        key: 'getSelected',
	        value: function getSelected() {
	            return this.selectedRows;
	        }
	        // 获取当前全部选中行的key

	    }, {
	        key: 'getSelectedKeys',
	        value: function getSelectedKeys() {
	            return this.state.selectedRowKeys;
	        }
	        // 全选

	    }, {
	        key: 'selectAll',
	        value: function selectAll() {
	            this._selectAllData();
	        }
	        // 所有分页全部选中

	    }, {
	        key: 'selectAllPage',
	        value: function selectAllPage() {
	            this._selectAllData(true);
	        }
	    }, {
	        key: 'clearSelect',
	        value: function clearSelect() {
	            this.rowOnChange([], []);
	        }
	        // 导出数据

	    }, {
	        key: 'export',
	        value: function _export() {
	            this.exportRef && this.exportRef.export();
	        }
	    }, {
	        key: 'getValues',
	        value: function getValues() {
	            return _utils.Utils.map(_utils.Utils.clone(this.__props.data || []), function (item) {
	                for (var i in item) {
	                    delete item[i + '.fyi'];
	                }
	                return item;
	            });
	        }
	        // 获取展示内容

	    }, {
	        key: 'getDisplayValues',
	        value: function getDisplayValues() {
	            return _utils.Utils.clone(this.__props.data);
	        }

	        /* 内部函数 ****************************************************************************/

	    }, {
	        key: '_handleExport',
	        value: function _handleExport() {
	            this.export();
	        }
	        // 获取要下载导出数据的配置

	    }, {
	        key: '_getExportConfig',
	        value: function _getExportConfig() {
	            var columns = this.columns;
	            var headers = [];
	            for (var i in columns) {
	                // 只导出展示的字段
	                if (columns[i].display !== false || this.titleRef && this.titleRef.state.showAllTags) {
	                    headers.push({
	                        key: columns[i].dataIndex || columns[i].key,
	                        title: columns[i].title
	                    });
	                }
	            }
	            // 如果为后端分页，则传递 source 配置
	            if (this.serverPaging) {
	                return {
	                    mode: 'asyn',
	                    headers: headers,
	                    source: this.__filtered.source,
	                    total: this.pagination.total || 0
	                };
	            }
	            // 否则传递 data
	            var data = this.__props.data || [];
	            return {
	                mode: 'sync',
	                headers: headers,
	                data: data,
	                total: data.length
	            };
	        }
	        // 执行用户自定义的 rowKey 函数，生成唯一key

	    }, {
	        key: 'handleRowKeyFunc',
	        value: function handleRowKeyFunc(data) {
	            var _this3 = this;

	            if (this.rowKeyFunc) {
	                data.forEach(function (v) {
	                    v[_this3.rowKey] = _this3.rowKeyFunc(v);
	                });
	            }
	            return data;
	        }
	        // 添加展开全部功能按钮
	        // 因为原始组件未提供相应API，所以此处通过操作真是dom上的className实现

	    }, {
	        key: 'handleExpandAllIcon',
	        value: function handleExpandAllIcon() {
	            var _this4 = this;

	            if (this.__props.expandedRowRender || this.__props.expanded) {
	                // 需操作真是dom
	                var collection = _reactDom2.default.findDOMNode(this).getElementsByClassName('ant-table-expand-icon-th');
	                this.expandThEle = collection[0];
	                // 可能会进来多次，这里判断当没oriClassName才执行
	                if (this.expandThEle && !this.expandThEle.oriClassName) {
	                    this.expandThEle.oriClassName = this.expandThEle.oriClassName || this.expandThEle.className;
	                    // 切换图标
	                    this.expandThEle.toggleClassName = function () {
	                        if (_this4.expandThEle.className.indexOf('uf-table-expand-all') === -1) {
	                            _this4.expandThEle.className = _this4.expandThEle.oriClassName + ' uf-table-expand-all';
	                            _this4.expandThEle.isExpand = false;
	                        } else {
	                            _this4.expandThEle.className = _this4.expandThEle.oriClassName + ' uf-table-fold-all';
	                            _this4.expandThEle.isExpand = true;
	                        }
	                    };
	                    this.expandThEle.toggleClassName();
	                    this.expandThEle.addEventListener('click', this.expandAllEventListener.bind(this));
	                }
	            }
	        }
	    }, {
	        key: 'expandAllEventListener',
	        value: function expandAllEventListener() {
	            this.expandThEle && this.expandThEle.toggleClassName();
	            if (this.expandThEle.isExpand) {
	                var obj = this.getAllCanSelectRows();
	                this.onExpandedRowsChange(obj.rowKeys);
	            } else {
	                this.onExpandedRowsChange([]);
	            }
	        }
	        // 行展开收起相关的两个方法

	    }, {
	        key: 'onExpandedRowsChange',
	        value: function onExpandedRowsChange(expandedRows) {
	            this.setState({
	                expandedRowKeys: expandedRows
	            });
	            this.antdConfig.onExpandedRowsChange(expandedRows);
	        }
	        // 对编辑状态的表格进行数据提交调用的函数

	    }, {
	        key: '_cellSubmit',
	        value: function _cellSubmit(key, dataIndex, value) {
	            var _this5 = this;

	            var dataSource = [].concat(_toConsumableArray(this.__props.data));
	            var dataResult = dataSource.map(function (item) {
	                if (item[_this5.rowKey] === key) {
	                    item[dataIndex] = value;
	                }
	                return item;
	            });
	            // 使用UF的修改数据的方式
	            this.__setProps({ data: dataResult });
	        }
	        // 覆盖原生获取异步数据的函数

	    }, {
	        key: '_handleAsyncData',
	        value: function _handleAsyncData() {
	            var _this6 = this;

	            _utils.Utils.defer(function () {
	                if (!_this6.enum.loading) {
	                    _this6.getData(1);
	                    // 清空过滤状态
	                    // this.refreshTable(1);
	                }
	            });
	        }
	        // 异步获取数据

	    }, {
	        key: 'getData',
	        value: function getData(pageNum) {
	            var _this7 = this;

	            var _filtered$source = this.__filtered.source,
	                url = _filtered$source.url,
	                params = _filtered$source.params;

	            if (!url) {
	                return;
	            }
	            // 如果有pageNum，则置为对应页；否则，pageNum等于当前页
	            if (pageNum) {
	                this.pagination.current = pageNum;
	            } else {
	                pageNum = this.pagination.current || 1;
	            }
	            // 可以通过 paramIndex 属性更改默认传递的page和size参数
	            var paramIndex = this.pagination.paramIndex || {};
	            var _paramIndex$page = paramIndex.page,
	                page = _paramIndex$page === undefined ? 'page' : _paramIndex$page,
	                _paramIndex$size = paramIndex.size,
	                size = _paramIndex$size === undefined ? 'size' : _paramIndex$size;

	            if (this.pagination.pageType === 'server') {
	                var _Object$assign;

	                params = Object.assign({}, params, (_Object$assign = {}, _defineProperty(_Object$assign, page, pageNum), _defineProperty(_Object$assign, size, this.pagination.pageSize), _Object$assign));
	            }
	            // 当前请求的标号
	            // 快速多次相同的请求会被合并到第一个（ajax中实现）
	            var index = _utils.Utils.hash(params);
	            this.requestIndex = index;
	            // 调用通用source获取数据逻辑
	            this.__getSourceData({
	                params: params,
	                success: function success(data, res) {
	                    if (index !== _this7.requestIndex) {
	                        return;
	                    }
	                    var displayData = data || [];
	                    // 生成唯一key
	                    displayData = _this7.handleRowKeyFunc(displayData);
	                    if (_this7.pagination.pageType === 'server') {
	                        displayData = displayData.slice(0, _this7.pagination.pageSize);
	                    }
	                    // 实时翻译
	                    // 返回值为promise对象
	                    var promise = _this7.enum.realtimeTrans(displayData);
	                    promise.then(function () {
	                        _this7.pagination.total = +(res.total || res.count || data.length);
	                        _this7.__setProps({ data: displayData }, false);
	                        _this7.setState({ completeData: displayData });
	                        _this7.onRefreshData();
	                    });
	                },
	                onchange: function onchange(loading) {
	                    if (index !== _this7.requestIndex) {
	                        return;
	                    }
	                    _this7.setState({ loading: loading && _this7._showLoading });
	                },
	                error: function error(res) {
	                    _this7.pagination.total = 0;
	                    _this7.__setProps({ data: [] });
	                }
	            });
	        }
	        // 数据刷新

	    }, {
	        key: 'onRefreshData',
	        value: function onRefreshData() {
	            this.forceUpdate();
	        }
	        // 刷新表格

	    }, {
	        key: 'refreshTable',
	        value: function refreshTable(page) {
	            // 清空某些控制状态，例如过滤
	            this.clearState();
	            this.__setProps({ data: this.state.completeData }, false);
	            if (this.__filtered.source.url) {
	                this.getData(page);
	            } else {
	                this.onRefreshData(this.state.completeData);
	            }
	        }
	        // 清空某些控制状态
	        // TODO: 清空的时机待考量，特别针对filter的情况，当前处理不太准确

	    }, {
	        key: 'clearState',
	        value: function clearState() {
	            this.setState({
	                selectedRowKeys: []
	            });
	            this.filter && this.filter.clearState();
	            this.titleRef && this.titleRef.clearState();
	            this.forceUpdate();
	        }
	        // 全屏或退出全屏

	    }, {
	        key: 'toggleFullScreen',
	        value: function toggleFullScreen() {
	            this.setState({
	                fullScreen: !this.state.fullScreen
	            });
	        }
	        // 展示全部字段

	    }, {
	        key: 'toShowAllTags',
	        value: function toShowAllTags() {
	            this.setState({
	                showAllTags: !this.state.showAllTags
	            });
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
	    }, {
	        key: 'getAllCanSelectRows',
	        value: function getAllCanSelectRows() {
	            var _this8 = this;

	            var isAllPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            var displayData = isAllPage ? this.state.completeData : this.__props.data;
	            var rowKey = this.rowKey;
	            var selectedRowKeys = [];
	            var selectedRows = [];
	            // 只有选择形式为复选框时才能进行全选
	            selectedRows = displayData.filter(function (record) {
	                if (_this8.rowSelection && _this8.rowSelection.disabledRow && _this8.rowSelection.disabledRow(record)) {
	                    // 当满足不可选条件时，不可以进行选择
	                    return false;
	                } else {
	                    selectedRowKeys.push(record[rowKey]);
	                    return true;
	                }
	            });
	            return {
	                rows: selectedRows,
	                rowKeys: selectedRowKeys
	            };
	        }
	    }, {
	        key: '_selectAllData',
	        value: function _selectAllData(isAllPage) {
	            var _getAllCanSelectRows = this.getAllCanSelectRows(isAllPage),
	                rows = _getAllCanSelectRows.rows,
	                rowKeys = _getAllCanSelectRows.rowKeys;
	            // 通过组件的onChange函数完成全选


	            this.rowOnChange(rowKeys, rows);
	        }
	        // 行change时触发此函数

	    }, {
	        key: 'rowOnChange',
	        value: function rowOnChange(selectedRowKeys, selectedRows) {
	            this.selectedRows = selectedRows;
	            this.setState({
	                selectedRowKeys: selectedRowKeys
	            });
	            if (this.rowSelection.onChange) {
	                this.rowSelection.onChange(selectedRowKeys, selectedRows);
	            }
	        }
	    }, {
	        key: 'onPageChange',
	        value: function onPageChange(page) {
	            var _this9 = this;

	            this.pagination.current = page;
	            if (this.pagination.pageType === 'server') {
	                _utils.Utils.defer(function () {
	                    return _this9.getData(page);
	                });
	            }
	            this.forceUpdate();
	        }
	        // 从一个对象中获取需要用于过滤的关键字

	    }, {
	        key: '_getKeyDataOfObject',
	        value: function _getKeyDataOfObject(obj) {
	            var val = '';
	            // 如果传入的是一个数组，则递归的遍历这个数组，拿出数组中各个对象的关键字
	            if (obj instanceof Array) {
	                var tArr = [];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var t = _step.value;

	                        tArr.push(this._getKeyDataOfObject(t));
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
	            } else if (obj instanceof Object) {
	                // 如果字段是个对象，则优先获取Title字段，否则获取该对象的第一个字段
	                if ('title' in obj) {
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
	    }, {
	        key: '_syntaxHighlight',
	        value: function _syntaxHighlight(json) {
	            var _this10 = this;

	            if (typeof json !== 'string') {
	                json = JSON.stringify(json, undefined, 2);
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
	                            if (_typeof(JSON.parse(type)) === 'object') {
	                                return _this10._syntaxHighlight(JSON.parse(type));
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
	        // _operation 为一个特殊属性，此属性中可以使用特定的action，关联table的crud等功能

	    }, {
	        key: 'handleAction',
	        value: function handleAction(oConfig, record) {
	            var config = _utils.Utils.clone(oConfig);
	            var arr = config;
	            if (!_utils.Utils.typeof(arr, 'array')) {
	                arr = [config];
	            }
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var v = _step2.value;

	                    // action的值与crud中的配置的key一一对应
	                    if (v.action && !v.control) {
	                        // BaseComponet不接受更新函数，使用control作为临时解决方案
	                        v.control = {
	                            type: 'bind',
	                            trigger: 'onClick',
	                            target: this.showCrud,
	                            params: [v.action, record]
	                        };
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

	            return config;
	        }
	    }, {
	        key: 'renderColumns',
	        value: function renderColumns() {
	            var _this11 = this;

	            // 列功能相关
	            var antdColumnConfig = [];

	            var _loop = function _loop(i) {
	                var item = _this11.columns[i];
	                // 如果列为枚举类型，则进行枚举转换
	                if (item.enum) {
	                    item = _this11.enum.handleColumn(item);
	                }
	                if (!_this11.state.showAllTags && item.display === false) {
	                    // 在展示部分字段下过滤掉不展示的列数据
	                    return 'continue';
	                }
	                var defaultColumn = {
	                    title: '',
	                    key: '',
	                    dataIndex: '',
	                    // 默认是从用户配置中获取此字段，对于特殊的格式再做处理
	                    render: null,
	                    sorter: null,
	                    colSpan: null,
	                    width: null,
	                    className: '',
	                    fixed: false,
	                    // 当配置了sorter时，默认自动设置sortOrder为正序
	                    sortOrder: !!item.sorter ? 'ascend' : false,
	                    onCellClick: null
	                };

	                getNeedObject(defaultColumn, item);
	                if (defaultColumn.dataIndex === '_operation') {
	                    defaultColumn.className += ' uf-operation';
	                }
	                // 自定义样式参数
	                if (item.minWidth || item.style) {
	                    var style = item.style || {};
	                    var orender = item.render;
	                    item.render = function (v, row) {
	                        for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                            params[_key - 2] = arguments[_key];
	                        }

	                        if (_utils.Utils.typeof(style, 'function')) {
	                            style = style();
	                        }
	                        if (item.minWidth) {
	                            Object.assign(style, { minWidth: item.minWidth });
	                        }
	                        return {
	                            type: 'div',
	                            style: style,
	                            content: orender ? orender.apply(undefined, [v, row].concat(params)) : v
	                        };
	                    };
	                }
	                // 用户配置的render是一个uf组件配置，在此转为dom
	                if (!!item.render) {
	                    defaultColumn.render = function (text, record, index) {
	                        // 配置中的render返回的是配置，配置再解析后才是真正的元素
	                        var config = item.render(text, record, index);
	                        // _operation 为一个特殊属性，此属性中可以使用特定的action，关联table的crud等功能
	                        if (defaultColumn.dataIndex === '_operation') {
	                            config = _this11.handleAction(config, record);
	                        }
	                        // 根据是否可编辑状态来判断是否包裹编辑组件
	                        return _this11.__analysis(config);
	                    };
	                }
	                // 将用户配置的单列筛选选项转换成antd的配置
	                if (!!item.filter) {
	                    var filterConf = _this11.filter.handleFilterConf(item.filter, item.dataIndex);
	                    if (filterConf) {
	                        defaultColumn = Object.assign({}, defaultColumn, filterConf);
	                    }
	                }
	                // 文字过长，鼠标移入时进行气泡展示
	                if (!!item.ellipsis) {
	                    defaultColumn.render = function (text, record, index) {
	                        var newText = item.render ? _this11.__analysis(item.render(text, record, index)) : text;
	                        var returnText = _react2.default.createElement(
	                            _antd.Popover,
	                            { content: newText },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'uf-table-td-ellipsis' },
	                                newText
	                            )
	                        );
	                        // 根据是否可编辑状态来判断是否包裹编辑组件
	                        return returnText;
	                    };
	                }
	                // 对特殊格式进行展示处理，包括html格式，json格式，duration格式
	                if (item.textType) {
	                    var textType = item.textType.toString().toLowerCase();
	                    // let elliClass = v['ellipsis'] ? ' ellipsis' : '';
	                    // style.className += elliClass;
	                    defaultColumn.render = function (text, record, index) {
	                        var newText = text;
	                        switch (textType) {
	                            case 'duration':
	                                {
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
	                                    // 若用户配置了render，则将转换之后的数据给用户的render
	                                    newText = item.render ? _this11.__analysis(item.render(tdData, record, index)) : tdData;
	                                    break;
	                                }
	                            case 'json':
	                                {
	                                    // 会出现重复json字符串编码现象,加入类型判断
	                                    var json = typeof text === 'string' ? text : JSON.stringify(text, null, 2);
	                                    if (text && json !== '""') {
	                                        var html = _this11._syntaxHighlight(json);
	                                        newText = _react2.default.createElement(
	                                            _antd.Popover,
	                                            { content: _react2.default.createElement('pre', { className: 'json', dangerouslySetInnerHTML: { __html: html } }) },
	                                            _react2.default.createElement('pre', { className: 'json', dangerouslySetInnerHTML: { __html: html } })
	                                        );
	                                    }
	                                    break;
	                                }
	                            case 'html':
	                                newText = _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: text } });
	                                break;
	                            // 默认将格式进行一下转换然后输出
	                            default:
	                                text = _this11._getKeyDataOfObject(text);
	                                newText = item.render ? _this11.__analysis(item.render(text, record, index)) : text;
	                                break;
	                        }
	                        return newText;
	                    };
	                }
	                // 根据是否可编辑状态来判断是否包裹编辑组件
	                if (item.editable) {
	                    // 声明获取前面设置过的配置
	                    var oRender = defaultColumn.render;
	                    defaultColumn.render = function (text, record, index) {
	                        var displayStr = !oRender ? text : oRender(text, record, index);
	                        var editableConf = item.editable;
	                        // 支持配置为一个函数
	                        if (_utils.Utils.typeof(editableConf, 'function')) {
	                            editableConf = editableConf(text, record, index);
	                        }
	                        // 如果editableConf返回为false，则直接返回原render
	                        if (!editableConf) {
	                            return displayStr;
	                        }
	                        return _react2.default.createElement(_Edit2.default, { parent: _this11, _factory: _this11._factory,
	                            value: text,
	                            columnChild: displayStr,
	                            editConf: editableConf,
	                            api: editableConf.api,
	                            cellSubmit: _this11._cellSubmit.bind(_this11, record[_this11.rowKey], defaultColumn.dataIndex)
	                        });
	                    };
	                }
	                antdColumnConfig.push(defaultColumn);
	            };

	            for (var i in this.columns) {
	                var _ret = _loop(i);

	                if (_ret === 'continue') continue;
	            }
	            // 提示信息，主要用于行不可选是勾选框那里的提示
	            if (this.__props.rowTooltips) {
	                antdColumnConfig.unshift({
	                    title: '',
	                    key: '_tooltips',
	                    className: 'uf-row-tooltips',
	                    render: function render() {
	                        var _props;

	                        var content = (_props = _this11.__props).rowTooltips.apply(_props, arguments);
	                        if (content) {
	                            return _react2.default.createElement(
	                                'div',
	                                { className: 'uf-row-tooltips-content' },
	                                _react2.default.createElement(
	                                    _antd.Tooltip,
	                                    { title: content, placement: 'right' },
	                                    _react2.default.createElement(_antd.Icon, { type: _this11.__props.rowTooltipsIcon || 'question-circle' })
	                                )
	                            );
	                        }
	                        return '';
	                    }
	                });
	            }
	            return antdColumnConfig;
	        }
	    }, {
	        key: 'renderRowSelection',
	        value: function renderRowSelection() {
	            var _this12 = this;

	            if (!this.rowSelection) {
	                return null;
	            }
	            var rowSelection = {
	                type: 'checkbox',
	                hideDefaultSelections: true
	            };
	            getNeedObject(rowSelection, this.rowSelection);
	            // 对行进行受控选择
	            rowSelection.selectedRowKeys = this.state.selectedRowKeys;
	            if (this.rowSelection.disabledRow) {
	                rowSelection.getCheckboxProps = function (record) {
	                    return { disabled: _this12.rowSelection.disabledRow(record) };
	                };
	            }
	            // 任何一行的选择与否都会触发改方法
	            rowSelection.onChange = this.rowOnChange.bind(this);
	            rowSelection.onSelect = this.rowSelection.onSelect;
	            rowSelection.onSelectAll = this.rowSelection.onSelectAll;
	            rowSelection.onSelectInvert = this.rowSelection.onSelectInvert;
	            if (this.rowSelection.selections) {
	                // 在自定义选择项中增加全选功能
	                rowSelection.selections = [{
	                    key: 'uf-table-select-all',
	                    text: '全选',
	                    onSelect: this._selectAllData.bind(this, true)
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
	            if (!this.__props.pagination) {
	                return false;
	            }
	            var pagination = {
	                pageSize: null,
	                showSizeChanger: false,
	                pageSizeOptions: null,
	                showQuickJumper: false,
	                size: '',
	                simple: false,
	                showTotal: function showTotal(total) {
	                    return _react2.default.createElement(
	                        'span',
	                        null,
	                        '共' + total + '条数据'
	                    );
	                },
	                current: 1,
	                total: 0,
	                onShowSizeChange: null,
	                onChange: null
	            };
	            getNeedObject(pagination, this.pagination);
	            this._inject(pagination, 'onChange', this.onPageChange.bind(this));
	            this._inject(pagination, 'onShowSizeChange', this.onShowSizeChange.bind(this));
	            return pagination;
	        }
	    }, {
	        key: 'renderTitle',
	        value: function renderTitle() {
	            var _this13 = this;

	            return [
	            // 增删改查
	            _react2.default.createElement(
	                _Crud2.default,
	                { key: 'crud', _factory: this._factory, parent: this, 'enum': this.enum,
	                    ref: function ref(ele) {
	                        return _this13.crudRef = ele;
	                    },
	                    config: this.__props.crud || {} },
	                _react2.default.createElement(_Title2.default, { key: 'title', _factory: this._factory, parent: this, config: this.title,
	                    ref: function ref(ele) {
	                        return _this13.titleRef = ele;
	                    } })
	            ),
	            // 导出功能
	            _react2.default.createElement(_export3.default, _extends({ key: 'export', _factory: this._factory, style: { display: 'none' },
	                ref: function ref(ele) {
	                    return _this13.exportRef = ele;
	                }
	            }, this._getExportConfig()))];
	        }
	    }, {
	        key: 'getClassName',
	        value: function getClassName() {
	            var className = 'uf-table';
	            className += this.state.fullScreen ? ' uf-fullscreen' : '';
	            // 额外加一个mini类型的size和一个crowd类型的size
	            var size = this.state.antdConfig.size;
	            if (size === 'mini' || size === 'crowd') {
	                className += ' uf-table-' + size;
	            }
	            if (this.pagination && this.pagination.layout) {
	                if (this.pagination.layout === 'left') {
	                    className += ' uf-table-pagination-left';
	                } else if (this.pagination.layout === 'center') {
	                    className += ' uf-table-pagination-center';
	                }
	            }
	            if (!this.title) {
	                className += ' uf-table-no-title';
	            }
	            // 当同时有提示信息且有复选框时，修改样式节省空间
	            if (this.__props.rowTooltips && this.rowSelection) {
	                className += ' uf-table-special-tooltips';
	            }
	            return className;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this14 = this;

	            // 额外加一个mini类型的size和一个crowd类型的size
	            var size = this.state.antdConfig.size;
	            if (size === 'mini' || size === 'crowd') {
	                size = 'small';
	            }
	            var _expandedRowRender = this.state.antdConfig.expandedRowRender;
	            var expandedRowKeys = this.state.expandedRowKeys;
	            var _footer = this.state.antdConfig.footer;
	            return _react2.default.createElement(
	                'div',
	                this.__getCommonProps({ className: this.getClassName() }),
	                _react2.default.createElement(_antd.Table, _extends({}, this.state.antdConfig, { size: size,
	                    title: function title() {
	                        return _this14.renderTitle();
	                    },
	                    onExpandedRowsChange: this.onExpandedRowsChange.bind(this)
	                }, _expandedRowRender && { expandedRowRender: function expandedRowRender(row) {
	                        return _this14.__analysis(_expandedRowRender(row));
	                    } }, expandedRowKeys && { expandedRowKeys: expandedRowKeys }, _footer && (_utils.Utils.typeof(_footer, 'function') ? { footer: function footer(currentPageData) {
	                        return _this14.__analysis(_footer(currentPageData));
	                    } } : { footer: function footer(v) {
	                        return _this14.__analysis(_footer);
	                    } }), {
	                    dataSource: this.__props.data,
	                    columns: this.renderColumns(),
	                    rowSelection: this.renderRowSelection(),
	                    pagination: this.renderPagination(),
	                    loading: this.state.loading }))
	            );
	        }
	    }]);

	    return NewTable;
	}(_base.BaseComponent);

	exports.default = NewTable;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _antd = __webpack_require__(21);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Table扩展 - 增删改查等功能
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */


	var Crud = function (_BaseComponent) {
	    _inherits(Crud, _BaseComponent);

	    function Crud(props) {
	        _classCallCheck(this, Crud);

	        // 其本身无需初始化组件
	        // this.__init();
	        var _this = _possibleConstructorReturn(this, (Crud.__proto__ || Object.getPrototypeOf(Crud)).call(this, props, 'table-crud'));

	        _this.parent = props.parent;
	        _this.enum = props.enum;
	        // 存储table的全部字段名称对应关系，以在form中复用
	        _this.columnName = {};
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = _this.parent.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var v = _step.value;

	                _this.columnName[v.dataIndex] = v.title;
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

	        _this.configBefore = null;
	        _this.configAfter = null;
	        _this.oConfig = null;
	        _this.init();
	        return _this;
	    }
	    // 不必多次刷新


	    _createClass(Crud, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (this.refresh) {
	                this.refresh = false;
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var newEnum = JSON.stringify(nextProps.enum.data);
	            var newConf = JSON.stringify(nextProps.config);
	            // TODO: 这里如果函数变化是检测不到的
	            if (newEnum !== this.currentEnum || newConf !== this.currentConf) {
	                this.currentEnum = newEnum;
	                this.currentConf = newConf;
	                this.refresh = true;
	                this.init(nextProps);
	            }
	        }
	    }, {
	        key: 'init',
	        value: function init(nextProps) {
	            var _this2 = this;

	            var props = nextProps || this.props;
	            this.enum = props.enum;
	            // 批量导入/编辑的表单配置
	            var batchAddFormConf = {
	                layout: {
	                    type: 'vertical'
	                },
	                items: [{
	                    type: 'textarea', name: 'data', default: '', required: true,
	                    rows: 6, style: { width: '100%' }
	                }]
	            };
	            var config = props.config || {};
	            var result = {};
	            // 额外存储的临时配置，用于配置复用
	            var tempConf = {};

	            var _loop = function _loop(i) {
	                var item = _this2.__getConf(_utils.Utils.clone(config[i]));
	                var action = _this2._getAction(i);
	                // api属性不能复用
	                item.api = _this2.__formatApi(item.api);
	                switch (action) {
	                    // 新增弹框的配置
	                    case 'add':
	                        // add 可以复用 edit 的配置，可以减少配置书写
	                        item.title = item.title || '新增：';
	                        tempConf['edit'] && (item = Object.assign(_utils.Utils.clone(tempConf['edit']), item));
	                        item.okText = item.okText || '提交';
	                        item.api.method = item.api.method || 'post';
	                        break;
	                    // 编辑弹框的配置
	                    case 'edit':
	                        // 处理复用相关参数
	                        item.title = item.title || '编辑：';
	                        item.okText = item.okText || '提交';
	                        item.api.method = item.api.method || 'put';
	                        // paramsHandler 执行之前执行
	                        // 过滤掉翻译字段 xxx.fyi
	                        item.api._paramsHandler = function (params) {
	                            for (var _i in _this2.enum.data) {
	                                delete params[_i + '.fyi'];
	                            }
	                            return params;
	                        };
	                        item = _this2.handleReuse(item, tempConf['add']);
	                        break;
	                    // 搜索弹框的配置
	                    case 'search':
	                        // 点击搜索时，对Table进行赋值操作
	                        _this2._inject(item, 'onSubmit', function (params) {
	                            _this2.parent.set({ params: params });
	                        });
	                        // 如果没定义type，则使用默认处理逻辑
	                        if (!item.type) {
	                            // 处理复用相关参数
	                            item.title = item.title || '高级查询：';
	                            item.okText = item.okText || '查询';
	                            item = _this2.handleReuse(item, tempConf['add']);
	                            // 移除必填限制以及校验规则
	                            if (item.form) {
	                                item.form.items.forEach(function (v) {
	                                    delete v.disabled;
	                                    delete v.rules;
	                                    delete v.required;
	                                });
	                            }
	                            break;
	                        }
	                    // 删除确认框的配置
	                    case 'delete':
	                        // 默认把参数处理为：只返回 id（rowKey对应的字段）
	                        item.title = item.title || '删除：';
	                        item.api.method = item.api.method || 'delete';
	                        item.api.paramsHandler = item.api.paramsHandler || function (params) {
	                            return _defineProperty({}, _this2.parent.rowKey, params[_this2.parent.rowKey]);
	                        };
	                        item.render = item.render || function () {
	                            return '确定要删除吗？';
	                        };
	                        item.okText = item.okText || '删除';
	                        break;
	                    // 批量查询
	                    case 'batchSearch':
	                        // 点击搜索时，对Table进行赋值操作
	                        _this2._inject(item, 'onSubmit', function (params) {
	                            _this2.parent.set({ params: params });
	                        });
	                        item.okText = item.okText || '查询';
	                        break;
	                    // 批量展示table中选中的数据
	                    case 'batchShow':
	                        item.okText = item.okText || '关闭';
	                        item.footer = item.footer !== undefined ? item.footer : [{
	                            type: 'button', mode: 'primary', action: 'cancel', content: item.okText
	                        }];
	                        break;
	                    // 批量新增弹框的配置
	                    case 'batchAdd':
	                        item.okText = item.okText || '提交';
	                        // form 需用指定的，此弹框用户传入的form配置无效
	                        item.form = _utils.Utils.clone(batchAddFormConf);
	                        item.api.method = item.api.method || 'post';
	                        _this2._bindParamsHandler(i, item);
	                        break;
	                    // 批量新增弹框的配置
	                    case 'batchEdit':
	                        item.okText = item.okText || '提交';
	                        // form 需用指定的，此弹框用户传入的form配置无效
	                        item.form = _utils.Utils.clone(batchAddFormConf);
	                        item.api.method = item.api.method || 'put';
	                        _this2._bindParamsHandler(i, item);
	                        // batchEdit 可以复用 batchAdd 的配置，可以减少配置书写
	                        item = _this2.handleReuse(item, tempConf['batchAdd']);
	                        break;
	                    // 批量删除确认框的配置
	                    case 'batchDelete':
	                        // 默认把参数处理为：只返回英文逗号分隔的 id[s]（rowKey对应的字段）如：{ids: 123,456}
	                        item.api.method = item.api.method || 'delete';
	                        item.api.paramsHandler = item.api.paramsHandler || function (params) {
	                            return _defineProperty({}, _this2.parent.rowKey + 's', params.map(function (v) {
	                                return v[_this2.parent.rowKey];
	                            }).join(','));
	                        };
	                        item.render = item.render || function () {
	                            return '确定要执行『 批量删除 』操作吗？';
	                        };
	                        break;
	                    // 详情框的配置
	                    case 'details':
	                        item = _this2.handleDetails(item);
	                        if (item.list) {
	                            var list = item.list;
	                            item.render = function (row) {
	                                return Object.assign({
	                                    type: 'list',
	                                    bordered: false,
	                                    data: row
	                                }, list);
	                            };
	                            delete item.list;
	                        }
	                    // break;
	                    // 展示信息弹框配置。会在render中传入当前数据
	                    case 'show':
	                    default:
	                        item.okText = item.okText || '关闭';
	                        item.footer = item.footer !== undefined ? item.footer : [{
	                            type: 'button', mode: 'primary', action: 'cancel', content: item.okText
	                        }];
	                        break;
	                }
	                if (item.position && item.position !== 'modal') {
	                    item.type = item.type || 'dashboard';
	                }
	                item.type = item.type || 'modal';
	                item.name = _this2._getModalName(i);
	                item.key = item.name;
	                // 默认点击提交时自动刷新表格。
	                if (item.autoReload !== false) {
	                    // 不用this.parent._inject，edit复用add的配置时，这里回把两个同样的函数合并到一起，导致table刷新两次
	                    _this2._inject(item, 'onSuccess', function () {
	                        return new Promise(function (resolve, reject) {
	                            // 删除数据时，当删除最后一页数据后，分页应该往前调1页
	                            var pageNum = _this2.getLastPageNum(item, action);
	                            setTimeout(function () {
	                                _this2.parent.getData(pageNum);
	                                resolve();
	                            }, +item.autoReload || 0);
	                        });
	                    });
	                }
	                // 如果存在form，则对items进行处理
	                if (item.form && item.form.items) {
	                    item.form.items = _this2.handleFormItems(item.form.items);
	                }
	                if (item.type === 'form' && item.items) {
	                    item.key = _utils.Utils.uniqueId();
	                    item.items = _this2.handleFormItems(item.items);
	                }
	                result[i] = item;
	                // 存储的复用配置用action做区分
	                tempConf[action] = item;
	            };

	            for (var i in config) {
	                _loop(i);
	            }
	            this.oConfig = result;
	            this.configBefore = Object.values(result).filter(function (v) {
	                return v.position === 'beforeHeader';
	            });
	            this.configAfter = Object.values(result).filter(function (v) {
	                return v.position !== 'beforeHeader';
	            });
	        }
	    }, {
	        key: 'getLastPageNum',
	        value: function getLastPageNum(item, action) {
	            var pagination = this.parent.pagination;
	            var pageNum = pagination.current;
	            if (action.indexOf('elete') > -1) {
	                var lastPageNum = Math.ceil(pagination.total / pagination.pageSize);
	                var deleteNum = 0;
	                if (pagination.current >= lastPageNum) {
	                    if (action === 'delete') {
	                        deleteNum = 1;
	                    } else if (action === 'batchDelete') {
	                        deleteNum = this.parent.getSelected().length;
	                    }
	                    var newLastPageNum = Math.ceil((pagination.total - deleteNum) / pagination.pageSize);
	                    if (newLastPageNum < lastPageNum) {
	                        pageNum = newLastPageNum;
	                    }
	                }
	            }
	            return pageNum;
	        }
	        // 如果存在form，则对items进行处理

	    }, {
	        key: 'handleFormItems',
	        value: function handleFormItems(items) {
	            // 如果没写label，则复用table的title
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var v = _step2.value;

	                    var _getConf = this.__getConf(v),
	                        label = _getConf.label,
	                        name = _getConf.name;

	                    if (!label && this.columnName[name]) {
	                        v.label = this.columnName[name];
	                        v.label += v.label.indexOf(':') > -1 ? '' : ': ';
	                    }
	                }
	                // 处理新增/编辑的 form.items 配置，枚举类型转自动添加options
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

	            items = this.enum.handleForm(items);
	            return items;
	        }
	        // 处理配置复用相关参数

	    }, {
	        key: 'handleReuse',
	        value: function handleReuse(item, reuseConf) {
	            // 可以复用的配置，以减少配置书写
	            if (reuseConf) {
	                item = Object.assign(_utils.Utils.clone(reuseConf), item);
	                // 如果未配置api.url，则复用api配置
	                if (!item.api.url) {
	                    item.api = Object.assign({}, reuseConf.api, item.api);
	                }
	            }

	            // 可以通过forbidden字段指定编辑的时候哪些字段不可编辑。便于复用add的form时
	            if (item.forbidden && item.form) {
	                item.form.forbidden = item.forbidden.split(',');
	                delete item.forbidden;
	            }
	            // 在form.items中过滤掉需要删除的属性
	            if (item.remove && item.form) {
	                item.form.items = item.form.items.filter(function (v) {
	                    return item.remove.split(',').indexOf(v.name) === -1;
	                });
	                delete item.remove;
	            }
	            return item;
	        }
	        // 详情框配置处理

	    }, {
	        key: 'handleDetails',
	        value: function handleDetails(item) {
	            // 如果详情框既没有配置list，又没有配置render，则复用table的column部分属性
	            if (!item.list && !item.render) {
	                var columns = [];
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;

	                try {
	                    for (var _iterator3 = this.parent.columns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                        var v = _step3.value;

	                        var column = { title: v.title, dataIndex: v.dataIndex, render: v.render };
	                        if (v.dataIndex === '_operation') {
	                            continue;
	                        }
	                        // 如果是翻译字段，则将dataIndex改为翻译后的字段
	                        if (v.enum && !v.render) {
	                            column.dataIndex = column.dataIndex + '.fyi';
	                            column.render = function (i) {
	                                return i;
	                            };
	                        }
	                        // 去掉长字符串折叠
	                        if (v.ellipsis || !column.render) {
	                            delete column.render;
	                        }
	                        columns.push(column);
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

	                item.list = { columns: columns };
	            }
	            return item;
	        }

	        // 展示各种弹框框

	    }, {
	        key: 'showCrud',
	        value: function showCrud(key, record) {
	            var visible = arguments.length <= 3 ? undefined : arguments[3];
	            var action = this._getAction(key);
	            var modal = this.__getComponent(this._getModalName(key));
	            if (modal) {
	                // 除批量编辑需要额外操作，其他都是直接展示即可
	                switch (action) {
	                    case 'batchEdit':
	                        this._showBatchEdit(key, visible);
	                        break;
	                    case 'batchDelete':
	                        this._showBatchDelete(key, visible);
	                        break;
	                    case '_showBatchShow':
	                        this._showBatchShow(key, visible);
	                        break;
	                    default:
	                        modal.show(record, visible);
	                }
	            }
	        }

	        // 获取crud中某项配置的action属性：如果没有action属性，则返回配置的key值

	    }, {
	        key: '_getAction',
	        value: function _getAction(key) {
	            var config = this.props.config;
	            // COMPAT: action 参数为兼容以前用法，不可删除
	            return config[key] && (config[key].mode || config[key].action) || key;
	        }
	        // 生成弹框名称，唯一，table的key+crud的key

	    }, {
	        key: '_getModalName',
	        value: function _getModalName(key) {
	            // 如果用户自己配了name，使用用户的name
	            var config = this.props.config;
	            if (config[key] && config[key].name) {
	                return config[key].name;
	            }
	            return '__' + this.parent.key + '-' + key;
	        }
	        // 生成批量编辑的字符串

	    }, {
	        key: '_getStrByList',
	        value: function _getStrByList(key, list) {
	            var keys = this.oConfig[key].keys.split(',');
	            var str = '';
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = list[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var row = _step4.value;

	                    var tmp = '';
	                    var _iteratorNormalCompletion5 = true;
	                    var _didIteratorError5 = false;
	                    var _iteratorError5 = undefined;

	                    try {
	                        for (var _iterator5 = keys[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                            var v = _step5.value;

	                            var value = row[v];
	                            // tmp += ((value !== undefined || value !== null) ? value : '') + ',';
	                            // 当数据为对象或数组时，格式化成字符串
	                            if (_utils.Utils.typeof(value, ['object', 'array'])) {
	                                tmp += JSON.stringify(value);
	                            } else if (value === undefined || value === null) {
	                                tmp += '';
	                            } else {
	                                tmp += value;
	                            }
	                            tmp += ',';
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

	                    str += tmp.slice(0, -1) + '\n';
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

	            return str;
	        }
	        // 根据字符串转换成要提交的数据对象

	    }, {
	        key: '_getListByStr',
	        value: function _getListByStr(key, str) {
	            var keys = this.oConfig[key].keys.split(',');
	            var strArr = str.split('\n');
	            var result = [];
	            var error = [];
	            strArr.forEach(function (row, index) {
	                row = row.trim();
	                if (row) {
	                    // 处理包含json串的情况
	                    // 目前只支持结构比较简单的json串
	                    var jsonReg = /\[.*?\]|\{.*?\}/g;
	                    var jsonHolder = {};
	                    var count = 0;
	                    row = row.replace(jsonReg, function (str) {
	                        var tmpName = '$jsonHolder' + ++count;
	                        jsonHolder[tmpName] = str;
	                        return tmpName;
	                    });
	                    // 分离后再把占位符复原
	                    var values = row.split(',').map(function (v) {
	                        if (v.indexOf('$jsonHolder') > -1) {
	                            // 并把json转换为原数据格式
	                            return JSON.parse(jsonHolder[v]);
	                        }
	                        return v;
	                    });

	                    if (values.length !== keys.length) {
	                        var gap = values.length - keys.length;
	                        error.push('\u7B2C\u3010' + (index + 1) + '\u3011\u884C\u6570\u636E\u5B57\u6BB5\u4F4D\u6570\u4E0D\u6B63\u786E(' + ((gap > 0 ? '多出' : '缺失') + gap) + '\u4E2A\u5B57\u6BB5)\uFF0C\u8BF7\u68C0\u67E5\uFF01');
	                    }
	                    var _item = {};
	                    var _iteratorNormalCompletion6 = true;
	                    var _didIteratorError6 = false;
	                    var _iteratorError6 = undefined;

	                    try {
	                        for (var _iterator6 = keys[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                            var v = _step6.value;

	                            _item[v] = values.shift();
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

	                    result.push(_item);
	                }
	            });
	            if (error.length > 0) {
	                _antd.Modal.error({
	                    title: '注意：',
	                    content: error.join('\n')
	                });
	                return false;
	            }
	            return result;
	        }
	        // 展示批量编辑框

	    }, {
	        key: '_showBatchEdit',
	        value: function _showBatchEdit(key, visible) {
	            var datas = this.parent.getSelected();
	            if (!(datas && datas.length > 0)) {
	                _antd.message.warning('请先在表格中选择至少一条数据，再执行操作。', 3.5);
	                return;
	            }
	            if (this.oConfig[key] && this.oConfig[key].keys) {
	                datas = this.enum.encodeEnum(datas);
	                var str = this._getStrByList(key, datas);
	                var modal = this.__getComponent(this._getModalName(key));
	                modal && modal.show({ data: str }, visible);
	            } else {
	                console.error('there is no property "batchEdit" or "batchEdit.keys" in table config');
	            }
	        }
	        // 绑定校验逻辑

	    }, {
	        key: '_bindParamsHandler',
	        value: function _bindParamsHandler(key, item) {
	            var _this3 = this;

	            item.api._paramsHandler = function (params) {
	                var datas = _this3._getListByStr(key, params.data);
	                if (!datas) {
	                    return false;
	                }
	                // 数据格式为 {data: 'json'}
	                return { data: JSON.stringify(_this3.enum.decodeEnum(datas)) };
	            };
	        }
	        // 展示批量删除框

	    }, {
	        key: '_showBatchDelete',
	        value: function _showBatchDelete(key, visible) {
	            var datas = this.parent.getSelected();
	            if (!(datas && datas.length > 0)) {
	                _antd.message.warning('请先在表格中选择至少一条数据，再执行操作。', 3.5);
	                return;
	            }
	            var modal = this.__getComponent(this._getModalName(key));
	            modal && modal.show(datas, visible);
	        }
	        // 批量展示数据。即展示表格中的选中的数据

	    }, {
	        key: '_showBatchShow',
	        value: function _showBatchShow(key, visible) {
	            var datas = this.parent.getSelected();
	            if (!(datas && datas.length > 0)) {
	                _antd.message.warning('请先在表格中选择至少一条数据，再执行操作。', 3.5);
	                return;
	            }
	            var modal = this.__getComponent(this._getModalName(key));
	            modal && modal.show(datas, visible);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'uf-table-crud' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'uf-table-crud-before' },
	                    this.parent.__analysis(this.configBefore)
	                ),
	                this.props.children,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'uf-table-crud-after' },
	                    this.parent.__analysis(this.configAfter)
	                )
	            );
	        }
	    }]);

	    return Crud;
	}(_base.BaseComponent);

	exports.default = Crud;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	var _antd = __webpack_require__(21);

	var _Filters = __webpack_require__(94);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Table扩展 - 表格上方的title以及其全部可选控件实现
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */

	var CheckboxGroup = _antd.Checkbox.Group;
	var MenuItem = _antd.Menu.Item;

	var Title = function (_BaseComponent) {
	    _inherits(Title, _BaseComponent);

	    function Title(props) {
	        _classCallCheck(this, Title);

	        // 其本身无需初始化组件
	        // this.__init();
	        // 缓存展示字段名称组件的cacheName
	        var _this = _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, props, 'table-title'));

	        _this.cacheName = props.parent.insName + props.parent.key;
	        _this.useCache = true;
	        _this.state = {
	            antdConfig: null,
	            // table表头右侧设置按钮的下拉框是否展示
	            showTableMenu: false,
	            // 是否展示全部字段
	            showAllTags: false,
	            showSetTagsModal: false
	        };
	        _this.init(props);
	        return _this;
	    }

	    _createClass(Title, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.init(nextProps);
	        }
	    }, {
	        key: 'init',
	        value: function init(props) {
	            this.parent = props.parent;
	            this.title = props.config;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.useCache) {
	                // 当有缓存时，使用缓存的选中列
	                var cache = _utils.Utils.getCache(this.cacheName);
	                if (cache) {
	                    this.columnsCheckedValues = cache;
	                    this.setTableColumns();
	                }
	            }
	        }
	    }, {
	        key: 'clearState',
	        value: function clearState() {
	            this.refs.filter && this.refs.filter.clearState();
	            this.hideMenuDropdown();
	        }

	        /* 内部函数 ****************************************************************************/
	        // // 表头生成-包括文字标题及自定义控件

	    }, {
	        key: 'titleGenerate',
	        value: function titleGenerate() {
	            if (!this.title) {
	                return null;
	            }
	            var _title = this.title,
	                _title$text = _title.text,
	                text = _title$text === undefined ? '' : _title$text,
	                extra = _title.extra;

	            var result = [];
	            // 表头标题
	            if (text) {
	                result.push(_react2.default.createElement(
	                    'div',
	                    { key: 'table-title', className: 'uf-header' },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        this.parent.__analysis(text)
	                    )
	                ));
	            }
	            // 标题之后额外自定义内容
	            if (extra) {
	                var extraConf = this.parent.handleAction(extra);
	                result.push(_react2.default.createElement(
	                    'div',
	                    { key: 'table-extra', className: 'uf-extra' },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        this.parent.__analysis(extraConf)
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
	                { key: 'table-widget', className: 'uf-header-widget-con' },
	                divList
	            ));
	            return result;
	        }
	        // 基本控件

	    }, {
	        key: 'getBasicWidghts',
	        value: function getBasicWidghts() {
	            var _this2 = this;

	            // 因为使用频率较高，暂时保留原参数，后续版本中移除
	            var arrBasic = this.title.basicWidget || this.title.basicControls;
	            var result = [];
	            if (!arrBasic) {
	                return result;
	            }
	            var showText = this.title.showText;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                var _loop = function _loop() {
	                    var v = _step.value;

	                    // 全部转化为对象
	                    if (_utils.Utils.typeof(v, 'string')) {
	                        v = { name: v };
	                    }
	                    switch (v.name) {
	                        case 'filter':
	                            result.push(_react2.default.createElement(
	                                'div',
	                                { className: 'uf-header-widget filter no-hover', key: 'uf-header-widget' },
	                                v.label && _react2.default.createElement(
	                                    'label',
	                                    null,
	                                    v.label
	                                ),
	                                _react2.default.createElement(_Filters.FuzzyFilter, _extends({ ref: 'filter', parent: _this2.parent }, {
	                                    others: _utils.Utils.filter(v, ['paramIndex', 'text', 'label', 'whitelist', 'blacklist']),
	                                    placeholder: v.text || '模糊搜索',
	                                    paramIndex: v.paramIndex,
	                                    globalFilterList: {
	                                        whitelist: v.whitelist,
	                                        blacklist: v.blacklist
	                                    }
	                                }))
	                            ));
	                            break;
	                        case 'refresh':
	                            result.push(_react2.default.createElement(
	                                'div',
	                                { className: 'uf-header-widget', key: 'refresh',
	                                    title: v.text || '刷新',
	                                    onClick: function onClick() {
	                                        _this2.parent.refreshTable();
	                                    } },
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
	                                { className: 'uf-header-widget', key: 'fullscreen',
	                                    title: !_this2.parent.state.fullScreen ? v.text || '全屏' : v.text || '退出全屏',
	                                    onClick: _this2.parent.toggleFullScreen },
	                                !_this2.parent.state.fullScreen ? _react2.default.createElement(_antd.Icon, { type: v.text || 'arrows-alt' }) : _react2.default.createElement(_antd.Icon, { type: v.text || 'shrink' }),
	                                showText && (!_this2.parent.state.fullScreen ? _react2.default.createElement(
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
	                                { className: 'uf-header-widget', key: 'export',
	                                    title: v.text || '导出',
	                                    onClick: _this2.parent._handleExport },
	                                _react2.default.createElement(_antd.Icon, { type: v.icon || 'download' }),
	                                showText && _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    v.text || '导出'
	                                )
	                            ));
	                            break;
	                        case 'switchTags':
	                            if (v.cache === false) {
	                                _this2.useCache = false;
	                            }
	                            result.push(_react2.default.createElement(
	                                'div',
	                                { className: 'uf-header-widget', key: 'switchTags',
	                                    title: v.text || '展示字段',
	                                    onClick: _this2.showSwitchTags.bind(_this2) },
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
	                                    title: v.text || '展示全部',
	                                    className: 'uf-header-widget ' + (_this2.parent.state.showAllTags ? 'active' : ''),
	                                    onClick: _this2.parent.toShowAllTags },
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
	                                    title: _this2.renderPageInput('basic'),
	                                    onConfirm: _this2.getPageSizeSetting.bind(_this2, 'basic'),
	                                    okText: 'Yes', cancelText: 'No' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'uf-header-widget',
	                                        title: v.text || '分页设置',
	                                        onClick: _this2.showSetPageSize.bind(_this2, 'basic') },
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
	                            // 如果设置了type，则按照用户的意愿进行展示，否则使用默认的展示形式
	                            if (v.type) {
	                                v.key = v.key || _utils.Utils.hash(v);
	                                result.push(_this2.parent.__analysis(v));
	                            } else {
	                                var onClick = v.onClick && v.onClick.bind(null, _this2.parent);
	                                if (v.action) {
	                                    onClick = function onClick() {
	                                        _this2.parent.showCrud(v.action);
	                                    };
	                                }
	                                result.push(_react2.default.createElement(
	                                    'div',
	                                    { key: v.name || _utils.Utils.hash(v), className: 'uf-header-widget ' + (v.name || ''),
	                                        title: v.text,
	                                        onClick: onClick },
	                                    _react2.default.createElement(_antd.Icon, { key: 'icon', type: v.icon || 'file-unknown' }),
	                                    showText && _react2.default.createElement(
	                                        'span',
	                                        { key: 'text' },
	                                        v.text || ''
	                                    )
	                                ));
	                            }
	                    }
	                };

	                for (var _iterator = arrBasic[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

	            return result;
	        }
	        // 下拉列表中的控件

	    }, {
	        key: 'getMenuWidghts',
	        value: function getMenuWidghts() {
	            var _this3 = this;

	            // COMPAT: 因为使用频率较高，暂时保留原参数，后续版本中移除
	            var arrMenus = this.title.menuWidget || this.title.menuControls;
	            var result = null;
	            var gearsList = [];
	            if (!arrMenus) {
	                return result;
	            }
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                var _loop2 = function _loop2() {
	                    var v = _step2.value;

	                    // 全部转化为对象
	                    if (_utils.Utils.typeof(v, 'string')) {
	                        v = { name: v };
	                    }
	                    switch (v.name) {
	                        case 'refresh':
	                            gearsList.push(_react2.default.createElement(
	                                MenuItem,
	                                { key: 'refresh1' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: function onClick() {
	                                            _this3.parent.refreshTable();
	                                            _this3.hideMenuDropdown();
	                                        } },
	                                    _react2.default.createElement(_antd.Icon, { type: v.icon || 'retweet', className: 'menu-item-icon' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        v.text || '刷新表格'
	                                    )
	                                )
	                            ));
	                            break;
	                        case 'fullScreen':
	                            gearsList.push(_react2.default.createElement(
	                                MenuItem,
	                                { key: 'fullScreen1' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: function onClick() {
	                                            _this3.parent.toggleFullScreen();
	                                            _this3.hideMenuDropdown();
	                                        } },
	                                    !_this3.parent.state.fullScreen ? _react2.default.createElement(_antd.Icon, { type: v.text || 'arrows-alt', className: 'menu-item-icon' }) : _react2.default.createElement(_antd.Icon, { type: v.text || 'shrink', className: 'menu-item-icon' }),
	                                    !_this3.parent.state.fullScreen ? _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        (v.text || '全屏') + '显示'
	                                    ) : _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        '退出' + (v.text || '全屏')
	                                    )
	                                )
	                            ));
	                            break;
	                        case 'export':
	                            gearsList.push(_react2.default.createElement(
	                                MenuItem,
	                                { key: 'export1' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: function onClick() {
	                                            _this3.parent._handleExport();
	                                            _this3.hideMenuDropdown();
	                                        } },
	                                    _react2.default.createElement(_antd.Icon, { type: v.icon || 'download', className: 'menu-item-icon' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        v.text || '导出数据'
	                                    )
	                                )
	                            ));
	                            break;
	                        case 'switchTags':
	                            gearsList.push(_react2.default.createElement(
	                                MenuItem,
	                                { key: 'switchTags1' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: function onClick() {
	                                            _this3.showSwitchTags();
	                                            _this3.hideMenuDropdown();
	                                        } },
	                                    _react2.default.createElement(_antd.Icon, { type: v.icon || 'setting', className: 'menu-item-icon' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        v.text || '展示字段'
	                                    )
	                                )
	                            ));
	                            break;
	                        case 'showAllTags':
	                            gearsList.push(_react2.default.createElement(
	                                MenuItem,
	                                { key: 'showAllTags1' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { onClick: function onClick() {
	                                            _this3.parent.toShowAllTags();
	                                            _this3.hideMenuDropdown();
	                                        } },
	                                    _react2.default.createElement(_antd.Icon, { type: v.icon || 'eye-o', className: 'menu-item-icon' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        v.text || '展示全部'
	                                    )
	                                )
	                            ));
	                            break;
	                        case 'setPageSize':
	                            gearsList.push(_react2.default.createElement(
	                                MenuItem,
	                                { key: 'basic-setPageSize1' },
	                                _react2.default.createElement(
	                                    _antd.Popconfirm,
	                                    { placement: 'left',
	                                        title: _this3.renderPageInput('menu'),
	                                        onConfirm: _this3.getPageSizeSetting.bind(_this3, 'menu'),
	                                        onCancel: _this3.hideMenuDropdown.bind(_this3),
	                                        okText: 'Yes', cancelText: 'No' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { onClick: _this3.showSetPageSize.bind(_this3, 'menu') },
	                                        _react2.default.createElement(_antd.Icon, { type: v.icon || 'switcher', className: 'menu-item-icon' }),
	                                        _react2.default.createElement(
	                                            'span',
	                                            null,
	                                            v.text || '分页设置'
	                                        )
	                                    )
	                                )
	                            ));
	                            break;
	                        default:
	                            gearsList.push(_react2.default.createElement(
	                                MenuItem,
	                                { key: v.name, onClick: function onClick() {
	                                        var _v;

	                                        for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
	                                            p[_key] = arguments[_key];
	                                        }

	                                        (_v = v).onClick.apply(_v, [_this3.parent].concat(p));
	                                        _this3.hideMenuDropdown();
	                                    } },
	                                _react2.default.createElement(_antd.Icon, { type: v.icon || 'file-unknown', className: 'menu-item-icon' }),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    v.text || ''
	                                )
	                            ));
	                    }
	                };

	                for (var _iterator2 = arrMenus[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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

	            if (gearsList.length > 0) {
	                result = _react2.default.createElement(
	                    _antd.Dropdown,
	                    { trigger: ['click'], key: 'uf-table-menu',
	                        overlay: _react2.default.createElement(
	                            _antd.Menu,
	                            { className: 'uf-table-menu' },
	                            gearsList
	                        ),
	                        onVisibleChange: this.switchMenuList.bind(this),
	                        placement: 'bottomRight',
	                        visible: this.state.showTableMenu },
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'uf-header-widget menu ' + (this.state.showTableMenu ? 'active' : ''),
	                            title: '\u83DC\u5355' },
	                        this.state.showTableMenu ? _react2.default.createElement(_antd.Icon, { type: 'menu-unfold' }) : _react2.default.createElement(_antd.Icon, { type: 'menu-fold' }),
	                        this.title.showText && _react2.default.createElement(
	                            'span',
	                            null,
	                            '\u83DC\u5355'
	                        )
	                    )
	                );
	            }
	            return result;
	        }

	        /* 模糊搜索 **********************************************************************/

	        // 若有html，则剥掉标签

	    }, {
	        key: 'handleString',
	        value: function handleString(string) {
	            var pattern1 = /<(\w+).*?>(.*?)<\/\1>/g; // 匹配是否有闭合标签
	            if (pattern1.test(string)) {
	                return string.replace(/<([/]?\w+).*?>/g, ''); // 剥掉所有标签
	            } else {
	                return string;
	            }
	        }

	        /* 展示字段设置 **********************************************************************/

	        // 显示’展示字段‘设置弹框

	    }, {
	        key: 'showSwitchTags',
	        value: function showSwitchTags() {
	            this.setState({ showSetTagsModal: true });
	        }
	        // 自定义展示某些列

	    }, {
	        key: 'setTableColumns',
	        value: function setTableColumns() {
	            // 根据this.columnsCheckedValues中存储的用户的选择进行展示
	            var showColumns = this.columnsCheckedValues;
	            var allColumns = this.parent.columns;

	            var _loop3 = function _loop3(i) {
	                if (showColumns.some(function (v) {
	                    return allColumns[i].dataIndex === v;
	                })) {
	                    allColumns[i].display = true;
	                } else {
	                    allColumns[i].display = false;
	                }
	            };

	            for (var i in allColumns) {
	                _loop3(i);
	            }
	            // 缓存配置
	            _utils.Utils.setCache(this.cacheName, showColumns);
	            this.setState({ showSetTagsModal: false });
	            this.parent.forceUpdate();
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
	        // 生成弹框中的checkbox组，以选择展示哪些列

	    }, {
	        key: 'generateColumnsCheckboxGroup',
	        value: function generateColumnsCheckboxGroup() {
	            var options = [];
	            var defaultValue = [];
	            var allColumns = this.parent.columns;
	            for (var item in allColumns) {
	                var option = {
	                    label: allColumns[item].title,
	                    value: allColumns[item].dataIndex
	                };
	                options.push(option);
	                if (allColumns[item].display !== false) {
	                    defaultValue.push(allColumns[item].dataIndex);
	                }
	            }
	            this.columnsCheckedValues = defaultValue;
	            if (options.length > 0) {
	                return _react2.default.createElement(CheckboxGroup, { options: options,
	                    defaultValue: defaultValue,
	                    onChange: this.onSetColumnsCheckboxChange.bind(this) });
	            }
	        }

	        /* 设置分页条数 **********************************************************************/

	    }, {
	        key: 'renderPageInput',
	        value: function renderPageInput(name) {
	            // return <Input placeholder="输入每页数据条数" refs={`pageSizeInput${name}`}
	            //     value={this.parent.pagination.pageSize}
	            //     onChange={this.changePageSize.bind(this)}/>;
	            return _react2.default.createElement(_antd.Input, { ref: 'pageSizeInput' + name,
	                placeholder: '\u8F93\u5165\u6BCF\u9875\u6570\u636E\u6761\u6570',
	                defaultValue: this.parent.pagination.pageSize });
	        }
	        // 展示每页展示条数

	    }, {
	        key: 'getPageSizeSetting',
	        value: function getPageSizeSetting(name) {
	            var value = this.refs['pageSizeInput' + name].refs.input.value;
	            var pageSize = parseInt(value, 10);
	            if (isNaN(pageSize)) {
	                pageSize = 10;
	            }
	            this.parent.pagination.pageSize = pageSize;
	            this.parent.refreshTable();
	            this.setState({ showTableMenu: false });
	        }
	        // 展示分页设置输入框时，使得输入框获取焦点

	    }, {
	        key: 'showSetPageSize',
	        value: function showSetPageSize(name) {
	            var _this4 = this;

	            // 设定延迟的原因，this[`pageSizeInput${name}`]以提示框的形式渲染到页面
	            // 而此函数触发时还未渲染完毕，输入框无法获得焦点，输入框手动获取焦点会引起menu下拉列表关闭
	            setTimeout(function () {
	                var obj = _this4['pageSizeInput' + name];
	                obj && obj.focus();
	            }, 10);
	        }

	        /* menu 菜单 **********************************************************************/

	        // 展示头部隐藏菜单

	    }, {
	        key: 'switchMenuList',
	        value: function switchMenuList(visible) {
	            this.setState({ showTableMenu: visible });
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
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'uf-table-title' },
	                this.titleGenerate(),
	                _react2.default.createElement(
	                    _antd.Modal,
	                    { title: '\u5C55\u793A\u5B57\u6BB5', className: 'uf-table-modal', key: 'uf-table-modal',
	                        visible: this.state.showSetTagsModal,
	                        onOk: this.setTableColumns.bind(this),
	                        onCancel: this.cancleSetTableColumns.bind(this) },
	                    this.generateColumnsCheckboxGroup()
	                )
	            );
	        }
	    }]);

	    return Title;
	}(_base.BaseComponent);

	exports.default = Title;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FuzzyFilter = exports.Filter = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(21);

	var _utils = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Table扩展 - 搜索/过滤相关逻辑实现
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */


	/* 自定义单字段过滤-通过输入筛选 *************************************************************************************/

	var FilterInput = function (_Component) {
	    _inherits(FilterInput, _Component);

	    function FilterInput(props) {
	        _classCallCheck(this, FilterInput);

	        var _this = _possibleConstructorReturn(this, (FilterInput.__proto__ || Object.getPrototypeOf(FilterInput)).call(this, props));

	        _this.parent = props.parent;
	        _this.state = {
	            value: props.value
	        };
	        return _this;
	    }

	    _createClass(FilterInput, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.state.value !== nextProps.value) {
	                this.setState({ value: nextProps.value });
	            }
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            var value = e.target.value;
	            this.setState({ value: value });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(_antd.Input, { placeholder: 'Search',
	                value: this.state.value || '',
	                onChange: this.onChange.bind(this),
	                onPressEnter: function onPressEnter() {
	                    _this2.props.onPressEnter(_this2.state.value);
	                }
	            });
	        }
	    }]);

	    return FilterInput;
	}(_react.Component);

	/* 过滤工具类 (原生过滤附带的一些逻辑) *************************************************************************************/

	var Filter = exports.Filter = function () {
	    function Filter(parent) {
	        _classCallCheck(this, Filter);

	        this.parent = parent;
	        this.filterParams = null;
	        this.filterConditions = {};
	        this.oldFilterConditions = {};
	    }

	    _createClass(Filter, [{
	        key: 'clearState',
	        value: function clearState() {
	            this.filterConditions = {};
	        }

	        // 当过滤选项发生变化时，如果是后端分页，则增加相应参数

	    }, {
	        key: 'handleChange',
	        value: function handleChange(filterParams) {
	            var oldFilterParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            var newParams = _utils.Utils.copy(filterParams);
	            var oParams = this.parent.__filtered.source.params || {};
	            // 移除无效参数
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = Object.keys(oldFilterParams).concat(Object.keys(newParams))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var i = _step.value;

	                    if (!_utils.Utils.empty(newParams[i])) {
	                        if (_utils.Utils.typeof(newParams[i], 'array')) {
	                            newParams[i] = newParams[i].join(',');
	                        }
	                        oParams[i] = newParams[i];
	                    } else {
	                        delete oParams[i];
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

	            if (this.parent.__filtered.source.params || !_utils.Utils.empty(oParams)) {
	                // 直接修改 this.parent.__filtered 上的值，过滤变化时本身会触发onPageChange，表格会刷新，无需再重新set
	                // TODO: 感觉这样不是很优雅
	                // this.parent.set({params: newParams});
	                this.parent.__filtered.source.params = oParams;
	            }
	        }

	        // 处理单行过滤相关配置参数

	    }, {
	        key: 'handleFilterConf',
	        value: function handleFilterConf(filter, dataIndex) {
	            if (!filter.type) {
	                // 若没有配置type则直接返回
	                return;
	            }
	            if (filter.type === 'checkbox' || filter.type === 'radio') {
	                // 多选框或单选框筛选
	                var filterObj = {
	                    options: null,
	                    filterMultiple: false,
	                    onFilter: null
	                };
	                if (!!filter.options) {
	                    // 用户配置了options,则将用户配置进行转换
	                    filterObj.filters = _utils.Utils.toOptions(filter.options).map(function (o) {
	                        return { text: o.label, value: o.value };
	                    });
	                } else {
	                    // 用户没有配置options，则将该字段的所有可能值展示出来
	                    filterObj.filters = this.getAllFilterValue(dataIndex);
	                }
	                filterObj.filterMultiple = filter.type === 'checkbox' ? true : false;
	                filterObj.onFilter = function (value, record) {
	                    return record[dataIndex].indexOf(value) !== -1;
	                };
	                return filterObj;
	            } else if (filter.type === 'input') {
	                // 通过输入筛选
	                var _filterObj = {
	                    filterDropdown: null,
	                    filterIcon: _react2.default.createElement(_antd.Icon, { type: 'filter',
	                        style: { color: !!this.filterConditions[dataIndex] ? '#108ee9' : '#aaa' }
	                    })
	                };
	                _filterObj.filterDropdown = _react2.default.createElement(
	                    'div',
	                    { className: 'custom-filter-dropdown' },
	                    _react2.default.createElement(FilterInput, { value: this.filterConditions[dataIndex],
	                        onPressEnter: this.onFilterData.bind(this, dataIndex) })
	                );
	                return _filterObj;
	            }
	        }
	        // 过滤

	    }, {
	        key: 'onFilterData',
	        value: function onFilterData(dataIndex, value) {
	            // 对查询值进行存储
	            this.filterConditions[dataIndex] = value;
	            if (this.parent.serverPaging) {
	                var oldFilterParams = _utils.Utils.copy(this.oldFilterConditions);
	                var newParams = _utils.Utils.copy(this.filterConditions);
	                this.oldFilterConditions = newParams;
	                this.handleChange(newParams, oldFilterParams);
	                this.parent.getData(1);
	                return;
	            }
	            var data = this.parent.state.completeData;
	            // 对数据进行单列过滤
	            if (!_utils.Utils.empty(this.filterConditions)) {
	                data = this.handleFilterData(data);
	            }
	            this.parent.__setProps({ data: data });
	        }
	    }, {
	        key: 'handleFilterData',
	        value: function handleFilterData(filteredData) {
	            var _this3 = this;

	            var data = [];
	            var needFilterData = !!filteredData ? filteredData : this.parent.state.completeData;
	            // 如果传入filteredData,则在filteredData基础上筛选
	            // 如果没有传入如果传入filteredData，则在全量数据上进行筛选
	            data = needFilterData.filter(function (record) {
	                var flag = true;
	                for (var cdit in _this3.filterConditions) {
	                    if (record[cdit].toString().indexOf(_this3.filterConditions[cdit]) === -1) {
	                        flag = false;
	                        break;
	                    }
	                }
	                return flag;
	            });
	            return data;
	        }
	    }, {
	        key: 'getAllFilterValue',
	        value: function getAllFilterValue(dataIndex) {
	            var obj = {};
	            var result = [];
	            var data = this.parent.state.completeData;
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
	    }]);

	    return Filter;
	}();

	/* 模糊搜索功能 ****************************************************************************************************/

	var FuzzyFilter = exports.FuzzyFilter = function (_Component2) {
	    _inherits(FuzzyFilter, _Component2);

	    function FuzzyFilter(props) {
	        _classCallCheck(this, FuzzyFilter);

	        var _this4 = _possibleConstructorReturn(this, (FuzzyFilter.__proto__ || Object.getPrototypeOf(FuzzyFilter)).call(this, props));

	        _this4.parent = props.parent;
	        // 过滤字段黑名单/白名单
	        _this4.globalFilterList = props.globalFilterList;
	        _this4.state = {
	            // 存储模糊搜索输入的值
	            filterValue: ''
	        };
	        // 模糊搜索时，延迟150ms执行
	        _this4.onFilterData = _utils.Utils.debounce(_this4.onFilterData, 150);
	        return _this4;
	    }

	    _createClass(FuzzyFilter, [{
	        key: 'clearState',
	        value: function clearState() {
	            this.setState({ filterValue: '' });
	        }

	        // 过滤输入框点回车搜索时 (用于后端分页)

	    }, {
	        key: 'onFilterSearch',
	        value: function onFilterSearch(value) {
	            // 如果为后端分页，则不立刻搜索，onSearch 时才会搜索
	            if (!this.parent.serverPaging) {
	                return;
	            }
	            // 在原有参数基础上，追加一个search参数
	            var oParams = this.parent.__filtered.source.params || {};
	            // 默认参数名称为search，可修改
	            oParams[this.props.paramIndex || 'search'] = value;
	            this.parent.set({ params: oParams });
	        }
	        // 过滤输入框变化时(用于前端分页)

	    }, {
	        key: 'onFilterChange',
	        value: function onFilterChange(e) {
	            var iVal = e.target.value;
	            this.setState({ filterValue: iVal });
	            // 如果为后端分页，则不立刻搜索，onSearch 时才会搜索
	            if (this.parent.serverPaging) {
	                return;
	            }
	            this.onFilterData();
	        }
	    }, {
	        key: 'onFilterData',
	        value: function onFilterData() {
	            // 过滤
	            var data = this.parent.state.completeData;
	            // @bugfix at 2018/01/31 15:38，展示模糊搜索内容时，分页条数及当前分页使用模糊搜索自己的；取消模糊搜索时还原之前的状态
	            // Table.js 中的 this.pagination 和 this.parant.__props.pagination 是同一个东西
	            var pagination = this.parent.__props.pagination;
	            var total = pagination && pagination.total;
	            var current = pagination && pagination.current;
	            // 对数据进行全局过滤
	            if (this.state.filterValue.length !== 0) {
	                data = this.doFilterData(this.state.filterValue, data);
	                this.cacheTotal = this.cacheTotal || total;
	                this.cacheCurrent = this.cacheCurrent || current;
	                total = data.length;
	                current = 1;
	            } else {
	                total = this.cacheTotal;
	                current = this.cacheCurrent;
	                this.cacheTotal = null;
	                this.cacheCurrent = null;
	            }
	            var newProps = { data: data };
	            if (pagination) {
	                newProps.pagination = { total: total, current: current };
	            }
	            this.parent.__setProps(newProps);
	        }
	        // 全局搜索数据

	    }, {
	        key: 'doFilterData',
	        value: function doFilterData(iVal, content) {
	            var strVal = iVal.toLowerCase().replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ');
	            // 过滤使用的数据，如果是有传入的数据则进行过滤，没有则需要进行
	            if (strVal) {
	                var arrFilterData = [];
	                // 字段黑名单/白名单
	                var filterlist = this.globalFilterList;
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = content[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var oRow = _step2.value;

	                        var row = {};
	                        var data = [];
	                        // 按照展示的字段过滤，自定义render字段无效，问题比较大
	                        for (var i in oRow) {
	                            // 把数据的key也全部转换成纯小写
	                            row[i.toLowerCase()] = oRow[i];
	                            // 如果不在白名单里或者在黑名单里，则跳过此字段
	                            if (filterlist && filterlist['whitelist'] && filterlist['whitelist'].indexOf(i) === -1) {
	                                continue;
	                            } else if (filterlist && filterlist['blacklist'] && filterlist['blacklist'].indexOf(i) !== -1) {
	                                continue;
	                            }
	                            var value = oRow[i];
	                            if (_utils.Utils.typeof(value, 'string')) {
	                                data.push(this.handleString(value));
	                            } else if (_utils.Utils.typeof(value, 'object')) {
	                                data.push(this.parent._getKeyDataOfObject(value));
	                            } else if (value) {
	                                data.push(value.toString ? value.toString() : value);
	                            }
	                        }

	                        var str = data.join('\n').toLowerCase();
	                        // 输入值不是字符串，而是几个词，要拆分后分别查找
	                        var result = true;
	                        var keys = strVal.split(/\s+/);
	                        var _iteratorNormalCompletion3 = true;
	                        var _didIteratorError3 = false;
	                        var _iteratorError3 = undefined;

	                        try {
	                            for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                                var key = _step3.value;

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
	                                    if (row[kWord] !== undefined) {
	                                        kv = row[kWord] || '';
	                                        // 否则在配置的tag里匹配每个tag的中文名
	                                    } else {
	                                        var _iteratorNormalCompletion4 = true;
	                                        var _didIteratorError4 = false;
	                                        var _iteratorError4 = undefined;

	                                        try {
	                                            for (var _iterator4 = this.parent.columns[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                                                var item = _step4.value;

	                                                if (kWord === item.title.toLowerCase()) {
	                                                    kv = row[item.dataIndex.toLowerCase()];
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

	                        if (result) {
	                            arrFilterData.push(oRow);
	                        }
	                    }
	                    // return Utils.clone(arrFilterData);
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

	                return arrFilterData;
	            }
	            // 清除已勾选内容
	            // this.parent.clearSelect();
	            return content;
	        }
	        // 若有html，则剥掉标签

	    }, {
	        key: 'handleString',
	        value: function handleString(string) {
	            var pattern1 = /<(\w+).*?>(.*?)<\/\1>/g; // 匹配是否有闭合标签
	            if (pattern1.test(string)) {
	                return string.replace(/<([/]?\w+).*?>/g, ''); // 剥掉所有标签
	            } else {
	                return string;
	            }
	        }
	        // 非React组件，需手动调用

	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_antd.Input.Search, _extends({ name: 'filter',
	                placeholder: this.props.placeholder
	            }, this.props.others, {
	                value: this.state.filterValue,
	                onChange: this.onFilterChange.bind(this),
	                onSearch: this.onFilterSearch.bind(this)
	            }));
	        }
	    }]);

	    return FuzzyFilter;
	}(_react.Component);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	var _antd = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file: Table扩展 - 单元格内编辑等功能
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author: JihangGuo
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @last Modified time: 2018-04-25 22:56:04
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @email: guojihang@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	// 为每个单元格创建一个包装父类组件
	var TableEdit = function (_BaseComponent) {
	    _inherits(TableEdit, _BaseComponent);

	    function TableEdit(props) {
	        _classCallCheck(this, TableEdit);

	        // 自己制定组件类型
	        var _this = _possibleConstructorReturn(this, (TableEdit.__proto__ || Object.getPrototypeOf(TableEdit)).call(this, props, 'table-edit'));

	        _this.__init();

	        // 设置组件数据state
	        _this.state = {
	            value: _this.props.value, // 单元格的值
	            columnChild: _this.props.columnChild, // 复杂类型的单元格的值
	            editable: false, // 是否显示编辑框
	            valueSource: _this.props.value, // 修改前的单元格的值
	            editConf: _this.props.editConf // 对编辑组件的个性化配置
	        };
	        return _this;
	    }

	    _createClass(TableEdit, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // 当单元格值改变时强制更新
	            if (nextProps.value !== this.props.value) {
	                this.setState({
	                    columnChild: nextProps.columnChild,
	                    value: nextProps.value
	                });
	            }
	        }
	        // 提交触发函数

	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            // 获取单元格名称
	            var cellName = this.state.editConf['name'];
	            // 获取表格数据
	            var formData = this.form.getValues();
	            var value = formData[cellName];
	            // 判断输入值是否改变
	            if (value !== this.state.valueSource) {
	                // 对修改后的数据进行提交，提交的配置再 config/components.js 中 table-cell
	                // this.__filtered.api.params = formData;
	                _utils.Utils.merge(this.__filtered.api.params, formData);
	                var result = this.__props.onSubmit && this.__props.onSubmit();
	                // 不管是否为Promise，成功与失败逻辑如下
	                this.__compatePromise(result, function (success) {
	                    // 上传修改结果到父组件
	                    _this2.props.cellSubmit(value);
	                    _this2.setState({
	                        value: value,
	                        editable: false,
	                        valueSource: value
	                    });
	                });
	            } else {
	                this.setState({
	                    value: value,
	                    editable: false,
	                    valueSource: value
	                });
	            }
	        }
	        // 点击编辑/关闭图标触发函数

	    }, {
	        key: 'editChange',
	        value: function editChange(type) {
	            var value = this.state.value;
	            return this.setState({
	                editable: !!type,
	                value: !!type ? value : this.state.valueSource
	            });
	        }
	        // 将用户定义UF配置转换为组件

	    }, {
	        key: 'initInput',
	        value: function initInput(formConf) {
	            return this.props.parent.__analysis(formConf);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _state = this.state,
	                value = _state.value,
	                editable = _state.editable,
	                columnChild = _state.columnChild,
	                editConf = _state.editConf;
	            // 解析配置 icon api editable
	            // 图标默认配置 采用UF书写方式

	            var cellIcon = {
	                editIcon: {
	                    mode: 'edit'
	                },
	                submitIcon: {
	                    mode: 'check-circle',
	                    style: {
	                        color: '#0b8235'
	                    }
	                },
	                closeIcon: {
	                    mode: 'close-circle',
	                    style: {
	                        color: 'red'
	                    }
	                }
	            };
	            // 根据icon配置情况进行解析赋值操作 不配置为默认图标,配置null为删除
	            if (_utils.Utils.typeof(editConf['icon'], 'object')) {
	                var iconConf = editConf['icon'];
	                for (var key in iconConf) {
	                    _utils.Utils.typeof(iconConf[key], 'null') ? cellIcon[key] = null : cellIcon[key] = iconConf[key];
	                }
	            } else if (_utils.Utils.typeof(editConf['icon'], 'null')) {
	                cellIcon['submitIcon'] = null;
	                cellIcon['closeIcon'] = null;
	            }
	            // 如果去除勾选图标则添加自动聚焦属性
	            editConf['default'] = value;
	            if (_utils.Utils.typeof(cellIcon['submitIcon'], 'null')) {
	                editConf['onBlur'] = function () {
	                    return _this3.editChange(false);
	                };
	            }
	            editConf['autoFocus'] = true;
	            // 整合配置
	            var formConf = {
	                type: 'form',
	                layout: { type: 'vertical' },
	                wrappedComponentRef: function wrappedComponentRef(ele) {
	                    _this3.form = ele;
	                },
	                items: [editConf],
	                onSubmit: function onSubmit(data) {
	                    return _this3.submit();
	                }
	            };
	            return editable ? _react2.default.createElement(
	                'div',
	                { className: 'editable-cell-input-wrapper' },
	                this.initInput(formConf),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'editable-icon-group' },
	                    !!cellIcon['submitIcon'] && _react2.default.createElement(_antd.Icon, _extends({}, cellIcon['submitIcon'], {
	                        type: cellIcon['submitIcon']['mode'],
	                        className: 'editable-cell-icon-check',
	                        onClick: this.submit.bind(this)
	                    })),
	                    cellIcon['closeIcon'] && _react2.default.createElement(_antd.Icon, _extends({}, cellIcon['closeIcon'], {
	                        type: cellIcon['closeIcon']['mode'],
	                        className: 'editable-cell-icon-close',
	                        onClick: function onClick() {
	                            return _this3.editChange(false);
	                        }
	                    }))
	                )
	            ) : _react2.default.createElement(
	                'div',
	                { className: 'editable-cell-text-wrapper' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'edit-cell' },
	                    columnChild || value
	                ),
	                cellIcon['editIcon'] && _react2.default.createElement(_antd.Icon, _extends({}, cellIcon['editIcon'], {
	                    type: cellIcon['editIcon']['mode'],
	                    className: 'editable-cell-icon-edit',
	                    onClick: function onClick() {
	                        return _this3.editChange(true);
	                    }
	                }))
	            );
	        }
	    }]);

	    return TableEdit;
	}(_base.BaseComponent);

	exports.default = TableEdit;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @file Table扩展 - 枚举类型字段翻译相关逻辑实现
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author liuzechun@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * */

	var _utils = __webpack_require__(22);

	var _antd = __webpack_require__(21);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Enum = function () {
	    function Enum(tools) {
	        _classCallCheck(this, Enum);

	        this.tools = tools;
	        // 是否正在加载数据
	        this.loading = false;
	        this.requestCount = 0;
	        // 存储全部枚举数据，{[key || id]: [value]}
	        this.data = {};
	        // 如果value是字符串或数字，再存储一份反向关系，{[value]: [key]}
	        this.dataReverse = {};

	        // 实时翻译相关属性，为避免相互影响，参数尽量分开
	        this.realtimeConfs = {};
	    }
	    // 传入 columns 配置，判断是否有枚举类型字段并做相应处理


	    _createClass(Enum, [{
	        key: 'init',
	        value: function init(columns) {
	            var _this = this;

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                var _loop = function _loop() {
	                    var item = _step.value;

	                    if (item.enum) {
	                        // 已经穷举，无需获取。格式为 enum: [{key: value}]
	                        if (_utils.Utils.typeof(item.enum, 'array')) {
	                            _this.save(item.dataIndex, item.enum);
	                            // 实时翻译
	                        } else if (_utils.Utils.typeof(item.enum, 'object') && item.enum.realtime) {
	                            var others = others = {
	                                // 参数属性
	                                key: 'ids',
	                                // 是否逗号分隔
	                                comma: true
	                            };
	                            if (_utils.Utils.typeof(item.enum.realtime, 'object')) {
	                                Object.assign(others, item.enum.realtime);
	                            }

	                            var conf = _utils.Utils.clone(item.enum);
	                            if (!conf.paramsHandler) {
	                                conf.paramsHandler = function (params) {
	                                    var values = params.map(function (v) {
	                                        return v[item.dataIndex];
	                                    });
	                                    return _defineProperty({}, others.key, others.comma ? values.join(',') : values);
	                                };
	                            }
	                            _this.realtimeConfs[item.dataIndex] = conf;
	                            // 全量枚举
	                        } else {
	                            _this.save(item.dataIndex, []);
	                            // 需要异步获取数据的情况
	                            _this.start();
	                            _this.tools.execAjax(_extends({
	                                // 默认开启缓存
	                                cache: true
	                            }, _this.tools.formatApi(item.enum), {
	                                success: function success(data) {
	                                    _this.save(item.dataIndex, data);
	                                    _this.complete();
	                                },
	                                error: function error(err) {
	                                    _this.complete();
	                                }
	                            }));
	                        }
	                    }
	                };

	                for (var _iterator = columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
	        key: 'start',
	        value: function start() {
	            this.loading = true;
	            this.requestCount++;
	        }
	    }, {
	        key: 'complete',
	        value: function complete() {
	            this.requestCount--;
	            this.finish();
	        }
	        // 请求完成

	    }, {
	        key: 'finish',
	        value: function finish() {
	            if (this.requestCount <= 0) {
	                this.loading = false;
	                this.tools.continue();
	            }
	        }
	        // 把数组格式化成键值对并存储

	    }, {
	        key: 'save',
	        value: function save(dataIndex, list) {
	            // 如果原来有值，则再原列表上追加
	            var result = this.data[dataIndex] || {};
	            var reverseResult = this.dataReverse[dataIndex] || {};
	            // 如果数据格式为 [{id:'',name:'',key:'',value:''}]
	            if (_utils.Utils.typeof(list, 'array')) {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var v = _step2.value;

	                        var key = v.id || v.key;
	                        var value = v.name || v.value;
	                        result[key] = value;
	                        if (_utils.Utils.typeof(value, ['string', 'number'])) {
	                            reverseResult[value] = key;
	                        }
	                    }
	                    // 数据格式为 {key:value, key:value}
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
	            } else if (_utils.Utils.typeof(list, 'object')) {
	                for (var i in list) {
	                    result[i] = list[i];
	                    if (_utils.Utils.typeof(list[i], ['string', 'number'])) {
	                        reverseResult[list[i]] = i;
	                    }
	                }
	            }

	            this.data[dataIndex] = result;
	            this.dataReverse[dataIndex] = reverseResult;
	        }

	        /*** Table.js 中的功能 ******************************************************************* */
	        // 处理列配置，进行枚举替换

	    }, {
	        key: 'handleColumn',
	        value: function handleColumn(item) {
	            var _this2 = this;

	            if (this.data[item.dataIndex] && !item._enumed) {
	                // 标记为已处理，无需重复处理
	                item._enumed = true;
	                // 如果原本已存在render，则需要执行原render
	                var orender = item.render;
	                item.render = function (v, row) {
	                    for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                        params[_key - 2] = arguments[_key];
	                    }

	                    var display = _this2.data[item.dataIndex][v];
	                    // 无法翻译是是否允许为空，默认无法翻译是展示空
	                    if (display === undefined) {
	                        if (_utils.Utils.typeof(item.enum, 'object') && item.enum.allowEmpty === false) {
	                            display = v;
	                        } else {
	                            display = '';
	                        }
	                    }
	                    // 将翻译后的结果存入行数据中
	                    row[item.dataIndex + '.fyi'] = display;
	                    return orender ? orender.apply(undefined, [display, row].concat(params)) : display;
	                };
	            }
	            return item;
	        }
	        // 实时翻译

	    }, {
	        key: 'realtimeTrans',
	        value: function realtimeTrans(list) {
	            var _this3 = this;

	            return new Promise(function (resolve) {
	                if (_utils.Utils.empty(_this3.realtimeConfs)) {
	                    resolve();
	                }
	                var count = 0;
	                var finish = function finish() {
	                    --count === 0 && resolve();
	                };

	                var _loop2 = function _loop2(i) {
	                    count++;
	                    _this3.tools.execAjax(_extends({
	                        // 默认开启缓存
	                        cache: true
	                    }, _this3.realtimeConfs[i], {
	                        params: list,
	                        success: function success(data) {
	                            _this3.save(i, data);
	                            finish();
	                        },
	                        error: finish
	                    }));
	                };

	                for (var i in _this3.realtimeConfs) {
	                    _loop2(i);
	                }
	            });
	        }

	        /*** Crud.js 中功能 ******************************************************************* */
	        // 处理新增/编辑的 form.items 配置，自动增加options

	    }, {
	        key: 'handleForm',
	        value: function handleForm(items) {
	            var _this4 = this;

	            return (items || []).map(function (item) {
	                if (item) {
	                    // if (Utils.typeof(item, 'object')) {
	                    // 支持使用自定义组件，会取最终的根类型进行判断
	                    var _tools$getConf = _this4.tools.getConf(item),
	                        type = _tools$getConf.type,
	                        name = _tools$getConf.name;

	                    if (['select', 'radio', 'checkbox-group'].indexOf(type) > -1 && _utils.Utils.empty(item.options) && _this4.data[name]) {
	                        item.options = _utils.Utils.toOptions(_this4.data[name]);
	                    }
	                    // } else {
	                    //     item = this.handleForm(item)
	                    // }
	                }
	                return item;
	            });
	        }
	        // 把一个数据列表中的枚举字段的id转换为枚举的值，key => value

	    }, {
	        key: 'encodeEnum',
	        value: function encodeEnum(list) {
	            var _this5 = this;

	            var error = [];
	            var result = (list || []).map(function (item, index) {
	                return _utils.Utils.each(item, function (v, i) {
	                    if (_this5.data[i]) {
	                        if (_this5.data[i][v] !== undefined) {
	                            return _this5.data[i][v];
	                        } else {
	                            error.push('\u7B2C\u3010' + (index + 1) + '\u3011\u884C\u6570\u636E\u3010' + v + '\u3011\u89E3\u6790\u65F6\u51FA\u73B0\u9519\u8BEF\uFF0C\u5DF2\u5C55\u793A\u6E90\u6570\u636E\uFF0C\u8BF7\u6CE8\u610F\uFF01');
	                            return v;
	                        }
	                    }
	                    return v;
	                });
	            });
	            if (error.length > 0) {
	                // 使报错弹框晚于原来弹框的创建
	                setTimeout(function () {
	                    _antd.Modal.warning({
	                        title: '注意：',
	                        content: error.join('\n')
	                    });
	                }, 10);
	            }
	            return result;
	        }
	        // 把一个数据列表中的枚举字段的值转换为id，value => key

	    }, {
	        key: 'decodeEnum',
	        value: function decodeEnum(list) {
	            var _this6 = this;

	            var error = [];
	            var result = (list || []).map(function (item, index) {
	                return _utils.Utils.each(item, function (v, i) {
	                    if (_this6.dataReverse[i]) {
	                        if (_this6.dataReverse[i][v] !== undefined) {
	                            return _this6.dataReverse[i][v];
	                        } else {
	                            error.push('\u7B2C\u3010' + (index + 1) + '\u3011\u884C\u6570\u636E\u7684\u503C\u3010' + v + '\u3011\u65E0\u6548\uFF0C\u8BF7\u68C0\u67E5\uFF01');
	                            return '';
	                        }
	                    }
	                    return v;
	                });
	            });
	            if (error.length > 0) {
	                _antd.Modal.error({
	                    title: '注意：',
	                    content: error.join('\n')
	                });
	                return false;
	            }
	            return result;
	        }
	    }]);

	    return Enum;
	}();

	exports.default = Enum;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file Form组件入口文件
	 * **/

	// module.exports = require('./Form.js').default;
	// module.exports = require('./Forms.js').default;
	module.exports = {
	  Form: __webpack_require__(98).default,
	  Forms: __webpack_require__(99).default
	};
	// const Form = require('./Form.js');
	// const Forms = require('./Forms.js');

	// module.exports = {Form, Forms};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.OriginForm = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	var _moment = __webpack_require__(26);

	var _moment2 = _interopRequireDefault(_moment);

	var _antd = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 可配置表单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var OriginForm = exports.OriginForm = function (_BaseComponent) {
	    _inherits(OriginForm, _BaseComponent);

	    function OriginForm(props) {
	        _classCallCheck(this, OriginForm);

	        // 过滤掉Form.create传入的form属性
	        var _this = _possibleConstructorReturn(this, (OriginForm.__proto__ || Object.getPrototypeOf(OriginForm)).call(this, props));

	        _this._filter.push('form');
	        _this._innerFilter.push('form');
	        _this._openApi.push('getValues', 'resetValues', 'clearValues', 'resetItem', 'getDisplayValues');
	        // 不复杂的属性，即无需merge处理直接覆盖的属性
	        _this._uncomplex.push('formData');
	        _this.__init();
	        _this.state = {
	            loading: false
	        };
	        // this.props.form; Antd.Form封装的函数
	        _this.form = props.form;
	        // 用于存储子Form的引用（因为无法直接拿到refs）
	        _this.formRef = {};
	        // 用于存储表单元素的引用
	        _this.itemRef = {};
	        // 组件原有配置中的 default 值
	        _this.oriDefaultValues = {};
	        // 组件传入的或者reset的值
	        _this.defaultValues = {};
	        // 用于记录当前form是否变换过（原来单个form通过复制新增等变为了多个）
	        // this.isArrayForm = false;
	        _this.init();
	        _this.itemsCache = {};
	        return _this;
	    }

	    _createClass(OriginForm, [{
	        key: 'init',
	        value: function init(nextProps) {
	            var _this2 = this;

	            // 过滤掉Form.create传入的form属性
	            var props = this.__props;
	            if (nextProps) {
	                props = _utils.Utils.merge({}, props, nextProps);
	            }
	            // this.__props = props;
	            props = _utils.Utils.filter(props, 'form');
	            this.formItemLayout = this.getLayout(props.layout);
	            // 使之成为受控组件，实现Form嵌套
	            if (props.formData && !_utils.Utils.equals(this.defaultValues, props.formData)) {
	                var data = this._formDataHandler(props.formData);
	                this.setDefaultValues(data);
	                nextProps && this.initValues();
	            }
	            // 如果items改变了，则把变化更新到 this.itemsCache 中
	            // update at 2018-08-21 by liuzechun
	            // TODO: 待观察是否会有无效覆盖
	            if (nextProps && nextProps.items && !_utils.Utils.equals(this.props.items, nextProps.items)) {
	                nextProps.items.forEach(function (item) {
	                    if (item && item.name && _this2.itemsCache[item.name]) {
	                        _utils.Utils.merge(_this2.itemsCache[item.name], item);
	                    }
	                });
	            }
	            nextProps && this.forceUpdate();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.__shouldUpdate(this.props, nextProps)) {
	                this.init(nextProps);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // 把this抛出，供外部调用，因为使用refs找不到包装前的OriginForm对象
	            this.props.wrappedComponentRef && this.props.wrappedComponentRef(this);
	            // 当组件didmount前执行了resetValues时，不再次执行initValues
	            this.initValues();
	        }
	        // 保存初始值

	    }, {
	        key: 'setDefaultValues',
	        value: function setDefaultValues(data) {
	            // 防止改变原值
	            this.defaultValues = _utils.Utils.clone(data || {});
	        }
	        // 把数据格式化成需要的格式
	        // 调用 setFieldsValue 时，如果多传了字段，会报 warning，所以这里只返回可用的表单项的值
	        // Warning: Cannot use `setFieldsValue` until you use `getFieldDecorator` or `getFieldProps` to register it.

	    }, {
	        key: '_encodeValues',
	        value: function _encodeValues(values) {
	            var result = {};
	            for (var i in values) {
	                var item = this.itemsCache[i];
	                if (item && item.display !== false && item.type !== 'button') {
	                    result[i] = values[i];
	                    // 数字类型表单
	                    if (item.type === 'number') {
	                        result[i] = +result[i];
	                    }
	                    if (item.type === 'checkbox' || item.type === 'switch') {
	                        result[i] = !!+result[i];
	                    }
	                }
	            }
	            return result;
	        }
	        // 把数据格式化成正常的格式

	    }, {
	        key: '_formatValues',
	        value: function _formatValues(values) {
	            var result = {};
	            for (var i in values) {
	                var item = this.itemsCache[i];
	                // datepicker等返回的是moment对象，返回前先格式化成字符串
	                // 理论上已经不存在这种情况，暂时先保留
	                if (values[i] instanceof _moment2.default) {
	                    if (this.itemsCache[i] && this.itemsCache[i].format) {
	                        values[i] = values[i].format(this.itemsCache[i].format);
	                    }
	                    // 用 format 把数据格式化成 rules.type 要求的格式
	                } else if (item.rules && item.rules.type) {
	                    values[i] = _utils.Utils.format(values[i], item.rules.type);
	                }
	                if (item && item.type !== 'button') {
	                    result[i] = values[i];
	                }
	            }
	            return result;
	        }

	        /* 外部调用函数 **********************************************************************/

	    }, {
	        key: 'getValues',
	        value: function getValues() {
	            var validate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            // 校验数据
	            if (validate && this.validateFields()) {
	                return;
	            }
	            var values = this.form.getFieldsValue();
	            values = this._formatValues(values);
	            values = Object.assign({}, this.defaultValues, values);
	            if (this.__props.beforeSubmit) {
	                values = this.__props.beforeSubmit(values);
	            }
	            return values;
	        }
	    }, {
	        key: 'resetValues',
	        value: function resetValues(o) {
	            // 如果传入的值为空或者未设置的字段，则使用组件配置的default的值对组件进行初始化
	            var resetVal = Object.assign({}, this.oriDefaultValues, o);
	            var newData = _utils.Utils.clone(this._formDataHandler(resetVal));
	            this.setDefaultValues(newData);
	            this.initValues(newData);
	        }
	        // 清除表单。有别于重置

	    }, {
	        key: 'clearValues',
	        value: function clearValues() {
	            var values = this.getClearValues();
	            this.form.setFieldsValue(values);
	        }
	        // 更新某个表单项的配置

	    }, {
	        key: 'resetItem',
	        value: function resetItem(target, conf) {
	            // let targetConf = this.itemsCache[target];
	            // if (targetConf) {
	            //     this.itemRef[target].set(conf);
	            //     this.__mergeProps(targetConf, conf);
	            // }
	            this.joinSetValue(target, conf);
	            this.forceUpdate();
	        }
	        // 获取表单中输入/选择完成后端展示内容

	    }, {
	        key: 'getDisplayValues',
	        value: function getDisplayValues() {
	            var _this3 = this;

	            var result = _utils.Utils.each(Object.assign({}, this.itemRef, this.formRef), function (item, name) {
	                var getDisplay = item.getDisplayValue || item.getDisplayValues;
	                return getDisplay ? getDisplay() : _this3.form.getFieldValue(name);
	            });
	            return result;
	        }

	        /* 组件内部逻辑 **********************************************************************/
	        // 获取全部字段清空数据

	    }, {
	        key: 'getClearValues',
	        value: function getClearValues() {
	            var encode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            var values = {};
	            for (var i in this.itemsCache) {
	                values[i] = undefined;
	            }
	            if (encode) {
	                values = this._encodeValues(values);
	            }
	            return values;
	        }
	        // 上传文件回调

	    }, {
	        key: 'normFile',
	        value: function normFile(e) {
	            if (Array.isArray(e)) {
	                return e;
	            }
	            return e && e.fileList;
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
	        // 根据传入的 formData 设置初始值
	        // TODO: 新数据传入，要重设全部字段？

	    }, {
	        key: 'initValues',
	        value: function initValues(values) {
	            values = values || this.defaultValues;
	            // 清空未设置的值
	            values = Object.assign({}, this.getClearValues(false), values);
	            values = this._encodeValues(values);
	            if (values && !_utils.Utils.empty(values)) {
	                // 设置初始值前对传入的 formData 格式化
	                if (this.__props.beforeSetValues) {
	                    values = this.__props.beforeSetValues(values);
	                }
	                this.form.setFieldsValue(values);
	                // 如果设置了联动属性，均要触发onChange事件
	                for (var i in values) {
	                    var item = this.itemsCache[i];
	                    if (item && item.display !== false) {
	                        this.onChange(item, values[i]);
	                    }
	                }
	            }
	        }
	        // 对传入参数进行格式化

	    }, {
	        key: '_formDataHandler',
	        value: function _formDataHandler(data) {
	            if (this.__props.formDataHandler) {
	                data = this.__props.formDataHandler(data);
	            }
	            return data;
	        }
	        // 实现联动功能

	    }, {
	        key: 'onChange',
	        value: function onChange(item, val, string) {
	            if (string !== undefined) {
	                val = string;
	            } else if (_utils.Utils.typeof(val, 'object') && val.target) {
	                if (val.target.value !== undefined) {
	                    val = val.target.value;
	                } else if (val.target.checked !== undefined) {
	                    val = val.target.checked;
	                }
	            }
	            // 实现联动
	            if (item.join) {
	                for (var i in item.join) {
	                    // 本组件的ref
	                    var self = this.itemRef[item.name];
	                    this.joinSetValue(i, item.join[i], val, self);
	                }
	                // this.forceUpdate();
	            }
	        }
	        // 前两个参数必填，后两个参数选填

	    }, {
	        key: 'joinSetValue',
	        value: function joinSetValue(name, props, val, self) {
	            // 如果目标组件名称中间使用了.进行了分隔，则目标为一个复杂的组件（最终操作的目标不在同级）
	            var nameArr = name.split('.');
	            var isComplex = nameArr.length > 1;
	            var parentName = nameArr[0];
	            var attrName = nameArr[1];
	            var parentTarget = this.formRef[parentName];

	            // 处理属性
	            var newConf = {};
	            for (var j in props) {
	                // 目标组件的ref
	                var target = this.itemRef[name];
	                // 属性结果
	                var attrVal = props[j];
	                if (_utils.Utils.typeof(attrVal, 'function')) {
	                    var oValue = void 0;
	                    target && (oValue = target.get(j));
	                    // 参数依次为：当前组件值，目标组件原值，目标组件ref，当前组件ref
	                    attrVal = attrVal(val, oValue, target || parentTarget, self);
	                }
	                switch (j) {
	                    case 'checked':
	                    case 'value':
	                        {
	                            if (isComplex) {
	                                parentTarget.resetValues(_defineProperty({}, attrName, attrVal));
	                            } else {
	                                if (this.itemRef[name] || this.formRef[name]) {
	                                    this.form.setFieldsValue(_defineProperty({}, name, attrVal));
	                                }
	                                this.onChange(this.itemsCache[name], attrVal);
	                            }
	                            break;
	                        }
	                    case 'display':
	                        // 如果是从不展示到进行展示转变，则把默认值一并填上
	                        if (attrVal) {
	                            if (this.defaultValues[name] !== undefined) {
	                                newConf['default'] = this.defaultValues[name];
	                                // 当组件已存在时（存在display为false但组件未来得及销毁的情况），设置default无效，需使用form api设置
	                                if (this.itemRef[name] || this.formRef[name]) {
	                                    this.form.setFieldsValue(_defineProperty({}, name, newConf['default']));
	                                }
	                            }
	                        }
	                    // break;
	                    default:
	                        {
	                            newConf[j] = attrVal;
	                            break;
	                        }
	                }
	            }
	            if (isComplex) {
	                parentTarget.resetItem(attrName, newConf);
	            } else {
	                // 保证能引起组件刷新（例如重新获取数据）
	                // 设置display属性由false变为true时，组件不存在
	                this.itemRef[name] && this.itemRef[name].set(newConf);
	                this.__mergeProps(this.itemsCache[name], newConf);
	            }
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
	        // TODO: 函数太长了，需要整理下
	        // 生成单个表单项
	        // key 为表单name后缀，表单项循环时需要使用

	    }, {
	        key: 'getFormItem',
	        value: function getFormItem(oitem) {
	            var _this4 = this;

	            var okey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	            if (!oitem || !oitem.type || oitem.type === 'empty') {
	                return;
	            }
	            if (!oitem.name) {
	                // 这里只有第一次进入而且没name的时候才会进到这里，后面重新render回跳过这儿
	                oitem = this.__getConf(oitem);
	            }
	            if (!oitem.name) {
	                // button类型可以不写name，这里生成一个随机的
	                if (oitem.type === 'button') {
	                    oitem.name = _utils.Utils.uniqueId();
	                } else {
	                    // 支持form中使用其他非录入数据功能的组件（无name）（展示类型的组件）
	                    // ！！注：一个组件是否是一个FormItem是通过是否有name判断的，没name的全部直接渲染
	                    // 遍历content，以支持展示类组件内部嵌套表单组件
	                    if (oitem.content) {
	                        oitem.children = _utils.Utils.traverse(oitem.content, function (content) {
	                            // 非对象的不再解析直接返回
	                            if (_utils.Utils.typeof(content, 'object')) {
	                                return _this4.getFormItem(content);
	                            }
	                            return content;
	                        });
	                    }
	                    return this.__analysis(_utils.Utils.filter(oitem, 'content'));
	                }
	            }
	            okey = okey !== null ? '-' + okey : '';
	            var name = oitem.name;
	            var key = oitem.name + okey;
	            // 把表单项额外存起来，方便后面各种联动的控制（需要改配置里的参数）
	            if (this.itemsCache[key]) {
	                oitem = this.itemsCache[key];
	            } else {
	                // items中的表单项可能使用了模板，需提前处理。因为部分属性form也需要使用
	                oitem = this.__getConf(oitem);
	                this.itemsCache[key] = oitem;
	            }
	            if (oitem.display === false) {
	                delete this.itemRef[key];
	                delete this.formRef[key];
	                return;
	            }
	            var getFieldDecorator = this.form.getFieldDecorator;
	            var itemLayout = void 0;
	            // 每个表单的布局可以独立控制
	            if (oitem.layout) {
	                itemLayout = this.getLayout(oitem.layout);
	            } else {
	                itemLayout = this.__props.layout.type === 'horizontal' ? this.formItemLayout : null;
	            }
	            var item = Object.assign({ rules: {} }, oitem);
	            if (_utils.Utils.typeof(item.rules, 'array')) {
	                item.rules = item.rules[0] || {};
	            }
	            delete item.layout;
	            // 如果rules外单独设置了required属性，则以此值为准
	            if (item.required !== undefined) {
	                item.rules['required'] = item.required;
	            }
	            // form中不允许表单域使用value，所以如果有value值，把值转换到default上
	            item.default = item.value || item.default;
	            if (item.default !== undefined) {
	                this.oriDefaultValues[item.name] = item.default;
	            }
	            // 过滤掉一些字段后，剩余的就是组件本身需要的参数
	            var itemProps = _utils.Utils.filter(item, ['label', 'default', 'value', 'help', 'extra', 'rules', 'join', 'regionConfig']);
	            // 额外配置的禁止更改的字段，设置disabled
	            if ((this.__props.forbidden || []).indexOf(itemProps.name) > -1) {
	                itemProps.disabled = true;
	            }
	            // 可以统一控制输入框等的大小
	            if (this.__props.size) {
	                itemProps.size = itemProps.size || this.__props.size;
	            }
	            // 触发Change时实现联动功能
	            this._inject(itemProps, 'onChange', this.onChange.bind(this, item), true);
	            // 存储ref
	            itemProps.ref = function (inst) {
	                return _this4.itemRef[key] = inst;
	            };
	            var otherOptions = {};
	            switch (item.type) {
	                case 'group':
	                case 'forms':
	                case 'form':
	                    if (item.type === 'group') {
	                        itemProps.type = 'form';
	                        // 子form如果使用group的type则去掉label
	                        itemLayout = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };
	                    } else if (item.type === 'forms') {
	                        // forms组件的formData为一个数组
	                        item.rules['type'] = item.rules['type'] || 'array';
	                        item.default = item.default || item.formData || [{}];
	                    }
	                    // 三种组件的通用个逻辑
	                    itemProps.wrappedComponentRef = function (inst) {
	                        return _this4.formRef[key] = inst;
	                    };
	                    delete itemProps.ref;
	                    otherOptions = {
	                        valuePropName: 'formData'
	                    };
	                    item.default = item.default || item.formData || {};
	                    delete itemProps.formData;
	                    item.rules['type'] = item.rules['type'] || 'object';
	                    break;
	                case 'input':
	                    // 输入框增加回车事件监听
	                    if (itemProps.onPressEnter === undefined) {
	                        itemProps.onPressEnter = this.handleSubmit.bind(this);
	                    }
	                    // 收集值的时机改为onBlur
	                    otherOptions.trigger = 'onBlur';
	                    otherOptions.validateTrigger = 'onBlur';
	                    break;
	                case 'input-number':
	                    // 数字输入框
	                    item.rules['type'] = item.rules['type'] || 'number';
	                    // 收集值的时机改为onBlur，防止强制转换导致的不可输入情况
	                    otherOptions.trigger = 'onBlur';
	                    // 可减少一些输入过程中的报错信息
	                    otherOptions.validateTrigger = 'onBlur';
	                    break;
	                case 'select':
	                case 'radio':
	                    if (item.type === 'select') {
	                        if (item.mode && item.mode !== 'combobox') {
	                            item.rules['type'] = item.rules['type'] || 'array';
	                        }
	                        // 当有required时，再加message，否则会产生默认type为string
	                        if (item.rules['required']) {
	                            item.rules['message'] = item.rules['message'] || '\u8BF7\u9009\u62E9' + (item.label || '');
	                        }
	                        // 默认选中第一个
	                        if (!item.default && item.defaultFirst) {
	                            item.default = _utils.Utils.getFirstOption(item.options);
	                        }
	                        // 限制使用clear按钮
	                        if (item.rules['required']) {
	                            itemProps.allowClear = false;
	                        }
	                    }
	                    // 更改获onchange时form获取组件值的逻辑，把数据格式化为需要的格式
	                    otherOptions = {
	                        getValueFromEvent: function getValueFromEvent(e, value) {
	                            return item.rules.type && value !== '' && value !== undefined ? _utils.Utils.format(value) : value;
	                        }
	                    };
	                    // 两种组件的通用逻辑
	                    // 如果没有设置类型，则根据default定义类型
	                    if (!item.rules['type'] && item.default !== null) {
	                        var _type = _utils.Utils.getType(item.default);
	                        if (['number', 'string', 'boolean', 'array'].indexOf(_type) > -1) {
	                            item.rules['type'] = _type;
	                        }
	                    }
	                    break;
	                case 'checkbox':
	                case 'switch':
	                    itemProps.content = itemProps.content || itemProps.placeholder;
	                    otherOptions = {
	                        valuePropName: 'checked'
	                    };
	                    item.rules['type'] = item.rules['type'] || 'boolean';
	                    break;
	                case 'checkbox-group':
	                    // 复选框组
	                    item.rules['type'] = item.rules['type'] || 'array';
	                    break;
	                case 'ueditor':
	                    // ueditor 输入框
	                    otherOptions = {
	                        valuePropName: 'data'
	                    };
	                    break;
	                case 'cascader':
	                    // 级联选择
	                    itemProps = Object.assign({
	                        showSearch: true
	                    }, itemProps);
	                    item.rules['type'] = item.rules['type'] || 'array';
	                    item.rules['message'] = item.rules['message'] || '\u8BF7\u9009\u62E9' + (item.label || '');
	                    // 限制使用clear按钮
	                    if (item.rules['required']) {
	                        itemProps.allowClear = false;
	                    }
	                    break;
	                case 'upload':
	                    {
	                        // 文件上传
	                        var isDisabled = {};
	                        // 可根据limit属性限制上传文件个数
	                        var limit = itemProps.limit;
	                        if (limit) {
	                            var list = this.form.getFieldValue(key) || [];
	                            itemProps.disabled = list.length >= limit;
	                        }
	                        otherOptions = {
	                            valuePropName: 'fileList',
	                            getValueFromEvent: this.normFile.bind(this)
	                        };
	                        break;
	                    }
	                case 'range-picker':
	                    // range-picker 组件的value为一个数组
	                    item.rules['type'] = item.rules['type'] || 'array';
	                case 'date-picker':
	                case 'month-picker':
	                case 'time-picker':
	                    // 更改获onchange时form获取组件值的逻辑，传出的为字符串
	                    otherOptions = {
	                        // 对从组件内传出的数据进行处理，直接取时间字符串
	                        getValueFromEvent: function getValueFromEvent(date, string) {
	                            return string;
	                        }
	                    };
	                    // current转换为当前时间
	                    if (item.default === 'current') {
	                        item.default = _utils.Utils.moment({}).format(item.format || 'YYYY-MM-DD HH:mm:ss');
	                    }
	                    // 限制使用clear按钮
	                    if (item.rules['required']) {
	                        itemProps.allowClear = false;
	                    }
	                    break;
	                case 'button':
	                    // 带有各种功能的按钮
	                    itemProps.content = itemProps.content || item.label;
	                    return this.getButtonItem(itemProps, okey);
	                    break;
	                default:
	                    break;
	            }
	            // 通用的默认错误提示信息
	            if (item.rules['required']) {
	                item.rules['message'] = item.rules['message'] || (item.label || '') + '\u4E0D\u80FD\u4E3A\u7A7A';
	            }
	            // 进行类型进行强制转换
	            // 只有 trigger 为 onChange/onBlur 有效
	            var type = item.rules['type'];
	            var trigger = item.regionConfig && item.regionConfig.trigger || otherOptions.trigger;
	            if (['number', 'string', 'boolean'].indexOf(type) > -1 && ['onChange', 'onBlur', undefined].indexOf(trigger) > -1) {
	                otherOptions.getValueFromEvent = function (e, value) {
	                    return _utils.Utils.format(value, type);
	                };
	            }
	            // 保存默认值，以form渲染完成后执行initValues
	            if (item.default !== undefined) {
	                item.default = _utils.Utils.format(item.default, type);
	                // this.oriDefaultValues[item.name] = item.default;
	                if (this.defaultValues[item.name] === undefined) {
	                    this.defaultValues[item.name] = item.default;
	                }
	            }
	            var fieldProps = {
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
	            return _react2.default.createElement(
	                _antd.Form.Item,
	                _extends({}, fieldProps, itemLayout),
	                getFieldDecorator(key, Object.assign({
	                    initialValue: item.default,
	                    rules: !_utils.Utils.empty(item.rules) ? [item.rules] : undefined
	                    // 更改收集数据/验证触发事件为失去焦点时
	                    // onBlur在radio，datepicker中不好用
	                    // trigger: 'onBlur',
	                }, otherOptions, item.regionConfig))(
	                // 作为子组件解析
	                this.__analysis(itemProps))
	            );
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e, callback) {
	            var _this5 = this;

	            // 否则阻止提交按钮默认事件
	            e && e.preventDefault();
	            // 如果没有传入callback且没有props.onSubmit回调函数，则submit没有被捕获，不阻止提交（方便后面增加 action 扩展提交功能）
	            if (!callback && !this.__props.onSubmit) {
	                return true;
	            }
	            var values = this.getValues();
	            if (values) {
	                var submit = callback || this.__props.onSubmit;
	                var result = submit(values, this);
	                // 如果回调函数返回了promise实例，则展示按钮上的loading效果，防止多次点击
	                if (result instanceof Promise) {
	                    this.setState({ loading: true });
	                    result.catch(function () {}).finally(function (resolve) {
	                        return _this5.setState({ loading: false });
	                    });
	                }
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
	            this.resetValues();
	            callback && callback(this);
	        }
	    }, {
	        key: 'clearClick',
	        value: function clearClick(callback) {
	            this.clearValues();
	            callback && callback(this);
	        }
	        // 自定义按钮点击事件，返回表单数据

	    }, {
	        key: 'customClick',
	        value: function customClick(callback) {
	            var values = this.getValues(false);
	            callback && callback(values, this);
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
	            var icon = void 0;
	            switch (item.action) {
	                case 'clear':
	                    icon = 'delete';
	                    handleClick = this.clearClick.bind(this, item.onClick, key);
	                    break;
	                case 'reset':
	                    icon = 'reload';
	                    handleClick = this.resetClick.bind(this, item.onClick, key);
	                    break;
	                case 'submit':
	                    icon = 'search';
	                    handleClick = this.handleSubmit.bind(this, null, item.onClick, key);
	                    break;
	                default:
	                    handleClick = this.othersClick.bind(this, item.onClick);
	                    break;
	            }
	            var oriOnClick = item.onClick;
	            var props = Object.assign({
	                key: item.name,
	                type: item.mode,
	                icon: icon,
	                style: { marginLeft: '8px' }
	            }, item, {
	                onClick: function onClick() {
	                    handleClick && handleClick.apply(undefined, arguments);
	                    oriOnClick && oriOnClick.apply(undefined, arguments);
	                }
	            });
	            return this.__analysis(props);
	        }
	        // 处理表单组

	    }, {
	        key: 'generateFormItemsGroup',
	        value: function generateFormItemsGroup(gitem, key) {
	            var _this6 = this;

	            if (!gitem.length) {
	                return;
	            }
	            var result = [];
	            // this.__props.layout.column;
	            var layout = { span: 24 / gitem.length };
	            gitem.forEach(function (item, index) {
	                if (!item) {
	                    return;
	                }
	                var formItem = void 0;
	                if (item instanceof Array) {
	                    formItem = _react2.default.createElement(
	                        _antd.Row,
	                        null,
	                        _this6.generateFormItemsGroup(item, key)
	                    );
	                } else {
	                    formItem = _this6.getFormItem(item, key);
	                    item.type === 'button' && (layout = null);
	                }
	                result.push(!!layout ? _react2.default.createElement(
	                    _antd.Col,
	                    _extends({ key: item.name || index }, layout),
	                    formItem
	                ) : formItem);
	            });
	            return result;
	        }
	        // 生成表单项列表

	    }, {
	        key: 'generateFormItems',
	        value: function generateFormItems(items, key) {
	            var result = [];
	            var index = 0;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var item = _step.value;

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
	        // 生成表单内容

	    }, {
	        key: 'renderItems',
	        value: function renderItems() {
	            var column = this.__props.layout.column;
	            var items = this.__props.items;
	            if (column) {
	                var merge = [];
	                items.forEach(function (v, i) {
	                    var index = Math.floor(i / column);
	                    merge[index] = merge[index] || [];
	                    // 如果v为null或空等，则不在加入到这一行，和{type: 'empty'}有区别：
	                    // 前者直接移除，布局会调整；后者依然在布局的逻辑中，剩余的表单项和其他表单项布局一致
	                    v && merge[index].push(v);
	                });
	                // 最后一行，如果列不够自动补齐
	                var lastArr = merge[merge.length - 1];
	                while (lastArr.length < column) {
	                    // 如果最后一项这是了layout，则证明用户想要自己布局，无需再做处理
	                    var lastItem = lastArr[lastArr.length - 1];
	                    if (lastItem && lastItem.layout) {
	                        break;
	                    }
	                    lastArr.push({ type: 'empty' });
	                }
	                items = merge;
	            }
	            return this.generateFormItems(items);
	        }
	        // 解析 Button 的配置，格式化成统一格式

	    }, {
	        key: 'analysisButtonConfig',
	        value: function analysisButtonConfig() {
	            var buttonsCfg = this.__props.buttons;
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
	        key: 'renderButtons',
	        value: function renderButtons() {
	            var _this7 = this;

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
	                                var value = item.value || item.content && _this7.__analysis(item.content);
	                                item.mode && (item.type = item.mode);
	                                switch (item.action) {
	                                    case 'submit':
	                                        if (item.icon === undefined) {
	                                            item.icon = 'search';
	                                        }
	                                        return _react2.default.createElement(
	                                            _antd.Button,
	                                            _extends({ key: 'submit' }, item, {
	                                                loading: _this7.state.loading,
	                                                onClick: _this7.submitClick.bind(_this7, item.onClick) }),
	                                            value
	                                        );
	                                    case 'reset':
	                                        if (item.icon === undefined) {
	                                            item.icon = 'reload';
	                                        }
	                                        return _react2.default.createElement(
	                                            _antd.Button,
	                                            _extends({ key: 'reset' }, item, {
	                                                onClick: _this7.resetClick.bind(_this7, item.onClick) }),
	                                            value
	                                        );
	                                    case 'clear':
	                                        if (item.icon === undefined) {
	                                            item.icon = 'delete';
	                                        }
	                                        return _react2.default.createElement(
	                                            _antd.Button,
	                                            _extends({ key: 'clear' }, item, {
	                                                onClick: _this7.clearClick.bind(_this7, item.onClick) }),
	                                            value
	                                        );
	                                    default:
	                                        return _react2.default.createElement(
	                                            _antd.Button,
	                                            _extends({ key: item.value || _utils.Utils.hash(item, 8) }, item, {
	                                                onClick: _this7.customClick.bind(_this7, item.onClick) }),
	                                            value
	                                        );
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
	            var className = 'uf-form ';
	            if (this.__props.layout.type === 'inline') {
	                className += 'uf-form-inline ';
	            }
	            if (this.__props.size) {
	                className += 'uf-form-' + this.__props.size + ' ';
	            }
	            if (this.__props.layout.column) {
	                className += 'uf-form-multiseriate ';
	            }
	            var style = {
	                className: className + (this.__props.className || ''),
	                style: this.__props.style
	            };
	            // 当没有配置header是，省略外层的div标签
	            return !this.__props.header ? _react2.default.createElement(
	                _antd.Form,
	                _extends({}, style, { layout: this.__props.layout.type, onSubmit: this.handleSubmit.bind(this) }),
	                this.renderItems(),
	                this.renderButtons()
	            ) : _react2.default.createElement(
	                'div',
	                style,

	                // header 可以是字符串，也可以是一个组件配置
	                _utils.Utils.typeof(this.__props.header, 'string') ? _react2.default.createElement(
	                    'div',
	                    { className: 'form-header' },
	                    _react2.default.createElement(
	                        'h5',
	                        null,
	                        this.__props.header
	                    ),
	                    _react2.default.createElement('hr', null)
	                ) : _react2.default.createElement(
	                    'div',
	                    { className: 'form-header' },
	                    this.__analysis(this.__props.header)
	                ),
	                _react2.default.createElement(
	                    _antd.Form,
	                    { layout: this.__props.layout.type, onSubmit: this.handleSubmit.bind(this) },
	                    this.renderItems(),
	                    this.renderButtons()
	                )
	            );
	        }
	    }]);

	    return OriginForm;
	}(_base.BaseComponent);

	var ReactForm = _antd.Form.create({
	    onValuesChange: function onValuesChange(props, values) {
	        // Should provide an event to pass values to Form.
	        if (_typeof(props.formData) === 'object') {
	            if (_utils.Utils.isChange(values, props.formData)) {
	                props.onChange && props.onChange(Object.assign({}, props.formData, values));
	            }
	        } else {
	            props.onChange && props.onChange(values);
	        }
	    }
	})(OriginForm);

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
	}(_base.BaseComponent);

	exports.default = NewForm;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	var _antd = __webpack_require__(21);

	var _Form = __webpack_require__(98);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 可提供表单复制新增的组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author susisi@baidu.com 2018-05-12
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * **/

	// 继承Form组件，以复用其逻辑
	// export default class Forms extends BaseComponent {
	var Forms = function (_OriginForm) {
	    _inherits(Forms, _OriginForm);

	    function Forms(props) {
	        _classCallCheck(this, Forms);

	        // __init 由父组件执行
	        // this.__init();
	        var _this = _possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).call(this, props));

	        _this.setDefaultValues();
	        _this.formRef = {}; // 用于存储子Form的引用（因为无法直接拿到refs）
	        return _this;
	    }
	    // 覆盖原Form初始化逻辑


	    _createClass(Forms, [{
	        key: 'init',
	        value: function init() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // 把this抛出，供外部调用，因为使用refs找不到包装前的ReactForm对象
	            this.props.wrappedComponentRef && this.props.wrappedComponentRef(this);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.__shouldUpdate(this.props, nextProps)) {
	                // 使之成为受控组件，实现与Form嵌套
	                if (!_utils.Utils.equals(this.__prevProps.formData, nextProps.formData)) {
	                    this.setDefaultValues(nextProps.formData);
	                    this.forceUpdate();
	                }
	            }
	        }
	        // 设置 formData 并保证 formData 不会为空

	    }, {
	        key: 'setDefaultValues',
	        value: function setDefaultValues(formData) {
	            formData = formData || this.__props.formData || [];
	            if (_utils.Utils.typeof(formData, 'object')) {
	                formData = [formData];
	            }
	            // if (formData.length === 0) {
	            //     formData = [{}];
	            // }
	            this.__props.formData = formData;
	        }
	        /* 外部调用函数 **********************************************************************/

	        // 获取所有表单的值

	    }, {
	        key: 'getValues',
	        value: function getValues() {
	            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                params[_key] = arguments[_key];
	            }

	            return _utils.Utils.map(this.formRef, function (item) {
	                return item.getValues.apply(item, params);
	            });
	        }
	        // 重置所有表单的值

	    }, {
	        key: 'resetValues',
	        value: function resetValues(o) {
	            // 如果是数组，则直接重置全部内容，数组有几项就展示几个表单
	            // 否则认为传入的是重置各个表单的某些值，即循环各个表单，并把内容设置进去
	            if (_utils.Utils.typeof(o, 'array')) {
	                this.__setProps({ formData: o });
	            } else {
	                _utils.Utils.each(this.formRef, function (item) {
	                    item.resetValues(o);
	                });
	            }
	        }
	    }, {
	        key: 'clearValues',
	        value: function clearValues() {
	            for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                params[_key2] = arguments[_key2];
	            }

	            return _utils.Utils.map(this.formRef, function (item) {
	                return item.clearValues.apply(item, params);
	            });
	        }
	    }, {
	        key: 'resetItem',
	        value: function resetItem() {
	            for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                params[_key3] = arguments[_key3];
	            }

	            return _utils.Utils.map(this.formRef, function (item) {
	                return item.resetItem.apply(item, params);
	            });
	        }
	    }, {
	        key: 'getDisplayValues',
	        value: function getDisplayValues() {
	            for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	                params[_key4] = arguments[_key4];
	            }

	            return _utils.Utils.map(this.formRef, function (item) {
	                return item.getDisplayValues.apply(item, params);
	            });
	        }

	        /* 组件内部逻辑 **********************************************************************/

	        // 校验数据

	    }, {
	        key: 'validateFields',
	        value: function validateFields() {
	            var haveErr = false;
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
	        // 同步给父组件

	    }, {
	        key: 'onChange',
	        value: function onChange() {
	            var _props;

	            this.__props.onChange && (_props = this.__props).onChange.apply(_props, arguments);
	        }
	        // 复制新增

	    }, {
	        key: 'copyForm',
	        value: function copyForm(index) {
	            // 获取已经填写的form内容
	            var formData = this.getValues(false);
	            // 为formData增加一个元素并重新渲染
	            formData.splice(index + 1, 0, formData[index]);
	            this.__setProps({ formData: formData });
	            this.onChange(formData);
	        }
	        // 简单新增

	    }, {
	        key: 'addForm',
	        value: function addForm(index) {
	            // 获取已经填写的form内容
	            var formData = this.getValues(false);
	            if (!index && index !== 0) {
	                index = formData.length;
	            }
	            // 新增的form的formdata为一个空对象
	            formData.splice(index + 1, 0, {});
	            this.__setProps({ formData: formData });
	            this.onChange(formData);
	        }
	        // 删除表单

	    }, {
	        key: 'deleteForm',
	        value: function deleteForm(index) {
	            // 为formData减少一个元素并重新渲染
	            var formData = this.__props.formData;
	            formData.splice(index, 1);
	            this.__setProps({ formData: formData });
	            this.onChange(formData);
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(index, data) {
	            if (this.__props.formData[index]) {
	                this.__props.formData[index] = data;
	            }
	            this.onChange(this.__props.formData);
	        }
	        // 默认展示形式

	    }, {
	        key: 'renderForms',
	        value: function renderForms() {
	            var _this2 = this;

	            var formData = this.__props.formData;
	            // 清空原来记录的formRef，因为index会变
	            this.formRef = {};
	            // 渲染多个form
	            // 如果没有数据，则只展示一个加号
	            return formData.length === 0 ? _react2.default.createElement(_antd.Button, { type: 'dashed', className: 'add-form-icon',
	                icon: 'plus-circle-o',
	                onClick: this.addForm.bind(this, null) }) : formData.map(function (v, index) {
	                var key = _this2.key + '-' + index;
	                // form 属性被Form组件过滤到了 __filtered 中
	                var formConfig = Object.assign({}, _this2.__filtered.form, {
	                    type: 'form',
	                    key: key,
	                    wrappedComponentRef: function wrappedComponentRef(inst) {
	                        return _this2.formRef[key] = inst;
	                    },
	                    onChange: _this2.handleChange.bind(_this2, index),
	                    formData: v
	                });
	                return _react2.default.createElement(
	                    'div',
	                    { key: _this2.key + '-' + index, className: 'uf-forms-item' },
	                    _this2.__analysis(formConfig),
	                    _this2.__props.addType !== false && _react2.default.createElement(
	                        'div',
	                        { key: 'operate', className: 'forms-icons' },
	                        _react2.default.createElement(_antd.Button, { type: 'dashed', className: 'add-form-icon',
	                            icon: 'plus-circle-o',
	                            onClick: _this2.__props.addType === 'add' ? _this2.addForm.bind(_this2, index) : _this2.copyForm.bind(_this2, index)
	                        }),
	                        _react2.default.createElement(_antd.Button, { type: 'dashed', className: 'delete-form-icon',
	                            icon: 'minus-circle-o',
	                            onClick: _this2.deleteForm.bind(_this2, index) })
	                    )
	                );
	            });
	        }
	        // 使用表格的方式展示

	    }, {
	        key: 'renderTableForms',
	        value: function renderTableForms() {
	            var _this3 = this;

	            var formData = this.__props.formData;
	            // form 属性被Form组件过滤到了 __filtered 中
	            var formConfig = Object.assign({}, this.__filtered.form);
	            // 如果items中有数组嵌套，使用drawLevel打平
	            formConfig.items = _utils.Utils.drawLevel(formConfig.items);
	            // 清空原来记录的formRef，因为index会变
	            this.formRef = {};
	            return _react2.default.createElement(
	                'div',
	                { className: 'table-forms' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'thead-div' },
	                    formConfig.items.map(function (item, index) {
	                        return _react2.default.createElement(
	                            'div',
	                            { key: index, className: 'th-div' },
	                            item.label
	                        );
	                    }),
	                    this.__props.addType !== false && _react2.default.createElement(
	                        'div',
	                        { key: 'operate', className: 'th-div' },
	                        '\u64CD\u4F5C',
	                        _react2.default.createElement(_antd.Icon, { type: 'plus-square-o', className: 'operate-add',
	                            onClick: this.addForm.bind(this, null) })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'tbody-div' },
	                    formData.map(function (v, index) {
	                        var key = _this3.key + '-' + index;
	                        return _this3.__analysis(Object.assign({}, formConfig, {
	                            type: 'form',
	                            layout: { type: 'inline' },
	                            key: key,
	                            wrappedComponentRef: function wrappedComponentRef(inst) {
	                                return _this3.formRef[key] = inst;
	                            },
	                            onChange: _this3.handleChange.bind(_this3, index),
	                            formData: v,
	                            // 增加操作列
	                            items: formConfig.items.concat(_this3.__props.addType === false ? [] : {
	                                type: 'div',
	                                key: key,
	                                className: 'operate',
	                                content: [{
	                                    type: 'icon',
	                                    key: 'add',
	                                    mode: 'plus-circle',
	                                    onClick: _this3.copyForm.bind(_this3, index)
	                                }, {
	                                    type: 'icon',
	                                    key: 'delete',
	                                    mode: 'minus-circle',
	                                    onClick: _this3.deleteForm.bind(_this3, index)
	                                }]
	                            })
	                        }));
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                this.__getCommonProps({ className: 'uf-forms' }),
	                this.__props.mode === 'table' ? this.renderTableForms() : this.renderForms(),
	                this.renderButtons()
	            );
	        }
	    }]);

	    return Forms;
	}(_Form.OriginForm);

	exports.default = Forms;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// module.exports = require('./Modal.js').default;
	module.exports = {
	    Modal: __webpack_require__(101).default,
	    Dashboard: __webpack_require__(102).default
	};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(21);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	var _src = __webpack_require__(12);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file ReactModal 适用于弹出层快速提交表单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */


	var NewModal = function (_BaseComponent) {
	    _inherits(NewModal, _BaseComponent);

	    function NewModal(props) {
	        _classCallCheck(this, NewModal);

	        var _this = _possibleConstructorReturn(this, (NewModal.__proto__ || Object.getPrototypeOf(NewModal)).call(this, props));

	        _this.class.push('modal');
	        // 开放给用户使用的 Api，需处理下
	        _this._openApi.push('show', 'close');
	        _this.__init();
	        return _this;
	    }

	    _createClass(NewModal, [{
	        key: '_beforeInit',
	        value: function _beforeInit() {
	            _get(NewModal.prototype.__proto__ || Object.getPrototypeOf(NewModal.prototype), '_beforeInit', this).call(this);
	            // 增加一些默认的事件处理函数
	            this.__props = Object.assign({
	                onCancel: this._defaultCancelHandler.bind(this)
	            }, this.__props);
	        }
	    }, {
	        key: '_afterSetProps',
	        value: function _afterSetProps() {
	            var _this2 = this;

	            _get(NewModal.prototype.__proto__ || Object.getPrototypeOf(NewModal.prototype), '_afterSetProps', this).call(this);
	            // footer的按钮点击时增加一些默认处理逻辑
	            if (this.__props.footer) {
	                var buttons = this._handleButtons(this.__props.footer);
	                this.__props.footerContent = this.__analysis(buttons);
	                delete this.__props.footer;
	            }
	            // 如果有form属性，说明是form弹框，做额外处理
	            if (this.__props.form) {
	                var formConf = this.__props.form;
	                if (_utils.Utils.typeof(formConf, 'function')) {
	                    formConf = formConf();
	                    // 如果form为函数，则认为用户想要每次都刷新form整个配置，所以此处给form.key一个随机值，使form强制刷新
	                    if (formConf.key === undefined) {
	                        formConf.key = _utils.Utils.uniqueId();
	                    }
	                } else {
	                    // 如果是
	                    delete this.__props.form;
	                }
	                // form配置
	                formConf = Object.assign({
	                    type: 'form',
	                    wrappedComponentRef: function wrappedComponentRef(inst) {
	                        _this2.formRef = inst;
	                    }
	                }, formConf);
	                // 兼容 formData 置于不同位置
	                formConf.formData = formConf.formData || this.__props.params;
	                // 可以写其他内容在content中，置于form之上
	                this.__props.formContent = this.__analysis(formConf);
	            }
	        }

	        /********** 外部调用函数 *************************************************/
	        // 展示弹框

	    }, {
	        key: 'show',
	        value: function show(data, active) {
	            var _this3 = this;

	            var newProps = { visible: true };
	            // 保存传入的值
	            if (data) {
	                newProps.params = data;
	            }
	            // 重新执行 render 函数
	            if (_utils.Utils.typeof(this.__props.render, 'function')) {
	                newProps.renderContent = this.__analysis(this.__props.render(data));
	            }
	            this.__setProps(newProps, function () {
	                // 如果是form弹框，填充form内容为data或重置
	                _this3.formRef && _this3.formRef.resetValues(data);
	            });
	        }
	        // 关闭弹框

	    }, {
	        key: 'close',
	        value: function close() {
	            var _this4 = this;

	            this.__setProps({ visible: false }, function () {
	                console.log(_this4.formRef);
	                if (_this4.formRef && !_this4.formRef.unmounted) {
	                    // 如果是form弹框，重置form内容
	                    _this4.formRef.clearValues();
	                } else {
	                    delete _this4.formRef;
	                }
	            });
	        }

	        /********** 内部调用函数 *************************************************/
	        // 默认点击取消时的处理逻辑

	    }, {
	        key: '_defaultCancelHandler',
	        value: function _defaultCancelHandler() {
	            this.close();
	        }
	        // 获取参数函数，可能会在新子组件中重写

	    }, {
	        key: '_getParams',
	        value: function _getParams() {
	            // 如果是form弹框，返回form内容
	            if (this.formRef) {
	                var values = this.formRef.getValues();
	                if (values) {
	                    return values;
	                }
	                // 如果验证失败，返回null，阻止提交数据
	                return null;
	                // 否则返回params
	            } else {
	                return this.__props.params || this.__filtered.api.params || {};
	            }
	        }
	        // onSubmit 以此函数为入口

	    }, {
	        key: '_onSubmit',
	        value: function _onSubmit() {
	            var _props,
	                _this5 = this;

	            var params = this._getParams();
	            if (!params) {
	                return;
	            }
	            // 由于复用 BaseComponent 通用发送数据逻辑，从Form中获取到的数据直接放到 api.params 中，供action注册的onSubmit取用
	            // this.__filtered.api.params 可能等于 undefined，此时merge无效
	            // Utils.merge(this.__filtered.api.params, params);
	            this.__filtered.api.params = params;
	            // this.__props.onSubmit 有可能是用户自定义的，也有可能是action注册上去的

	            for (var _len = arguments.length, op = Array(_len), _key = 0; _key < _len; _key++) {
	                op[_key] = arguments[_key];
	            }

	            var result = this.__props.onSubmit && (_props = this.__props).onSubmit.apply(_props, [params].concat(op));
	            // 如果回调函数返回了promise实例，则展示按钮上的loading效果，防止多次点击
	            if (result instanceof Promise) {
	                this.__setProps({ confirmLoading: true });
	            }
	            // 不管是否为Promise，成功与失败逻辑如下
	            this.__compatePromise(result, function (success) {
	                var finish = _this5._onSuccess(result);
	                _this5.__compatePromise(finish, function (success) {
	                    _this5.__setProps({ confirmLoading: false });
	                    _this5.close();
	                });
	            }, function (error) {
	                _this5.__setProps({ confirmLoading: false });
	            });
	        }
	    }, {
	        key: '_onSuccess',
	        value: function _onSuccess() {
	            var _props2;

	            return this.__props.onSuccess && (_props2 = this.__props).onSuccess.apply(_props2, arguments);
	        }
	        // 处理 footer 按钮

	    }, {
	        key: '_handleButtons',
	        value: function _handleButtons(items) {
	            var _this6 = this;

	            if (!_utils.Utils.typeof(items, 'array')) {
	                items = [items];
	            }
	            var result = [];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var v = _step.value;

	                    var item = _utils.Utils.copy(v);
	                    delete item.action;
	                    switch (v.action) {
	                        case 'submit':
	                            // action === 'submit' 的按钮和默认的确认按钮等价（onClick === onSubmit）
	                            this.__props.onSubmit = v.onClick || this.__props.onSubmit;
	                            item.onClick = this._onSubmit.bind(this);
	                            break;
	                        case 'reset':
	                            item.onClick = function () {
	                                _this6.formRef && _this6.formRef.resetValues();
	                            };
	                            break;
	                        case 'clear':
	                            item.onClick = function () {
	                                _this6.formRef && _this6.formRef.clearValues();
	                            };
	                            break;
	                        case 'cancel':
	                            // action === 'cancel' 的按钮和默认的取消按钮等价（onClick === onCancel)
	                            if (item.onClick) {
	                                this.__props.onCancel = v.onClick;
	                            } else {
	                                item.onClick = this.__props.onCancel;
	                            }
	                            break;
	                        default:
	                            break;
	                    }
	                    result.push(item);
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
	        // 根据用户配置的 posRank 对展示内容进行排序
	        // 默认顺序是：render|content|form

	    }, {
	        key: 'getChildrenRank',
	        value: function getChildrenRank() {
	            var map = {
	                render: this.__props.renderContent,
	                content: this.__props.children,
	                form: this.__props.formContent
	            };
	            var rank = ['render', 'content', 'form'];
	            if (this.__props.posRank) {
	                var arr = this.__props.posRank.split('|');
	                // 去重并取后三个，防止用户传入非规定的字符串导致程序异常
	                rank = _utils.Utils.distinct(arr.concat(rank)).splice(-3);
	            }
	            return rank.map(function (v) {
	                return map[v];
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // footer是在组件中解析的，解析后放置在footerContent中
	            var selfProps = {
	                onOk: this._onSubmit.bind(this)
	            };
	            if (this.__props.footerContent) {
	                selfProps.footer = this.__props.footerContent;
	            }
	            // 获取排序后的结果
	            var children = this.getChildrenRank();
	            return _react2.default.createElement(
	                _antd.Modal,
	                _extends({}, _utils.Utils.filter(this.__props, 'children'), selfProps, { className: 'uf-modal' }),
	                children[0],
	                children[1],
	                children[2]
	            );
	        }
	    }]);

	    return NewModal;
	}(_base.BaseComponent);

	/**** Modal静态类调用函数 *************************************************************************/

	// 可随时随地用来创建新的弹框，且创建完成后返回destroy函数用于销毁弹框


	NewModal.create = function (config) {
	    config.type = 'modal';
	    config.visible = config.visible || true;
	    // 增加关闭弹窗删除dom节点逻辑
	    return _src2.default._append(config, null, 'onCancel');
	};

	/**** Modal自带快捷调用函数 *************************************************************************/

	// 统一处理config（某些属性需要二次解析）
	function showMessage(type, config) {
	    var _arr = ['title', 'content'];

	    for (var _i = 0; _i < _arr.length; _i++) {
	        var v = _arr[_i];
	        if (config[v] && !_utils.Utils.typeof(config[v], 'string')) {
	            config[v] = _src2.default.render(config[v]);
	        }
	    }
	    config.className = 'uf-modal ' + (config.className ? config.className : '');
	    return _antd.Modal[type](config);
	}

	NewModal.info = showMessage.bind(null, 'info');
	NewModal.success = showMessage.bind(null, 'success');
	NewModal.error = showMessage.bind(null, 'error');
	NewModal.warning = showMessage.bind(null, 'warning');
	NewModal.confirm = showMessage.bind(null, 'confirm');

	exports.default = NewModal;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(21);

	var _Modal = __webpack_require__(101);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file ReactModal 适用于弹出层快速提交表单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author liuzechun@baidu.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */


	/**** 自己造一个使用modal处理逻辑但是不是弹框而是直接放在页面上的组件 *************************************/

	var Dashboard = function (_NewModal) {
	    _inherits(Dashboard, _NewModal);

	    function Dashboard() {
	        _classCallCheck(this, Dashboard);

	        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
	    }

	    _createClass(Dashboard, [{
	        key: 'show',

	        // 当传入visible时，根据visible控制是否展示
	        // 未传入visible时，根据当前的状态切换是否展示
	        // 即show同时包含了展示和隐藏的功能
	        value: function show(data) {
	            var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	            if (!visible || this.__props.visible) {
	                this._close();
	            } else {
	                var _get2;

	                for (var _len = arguments.length, p = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                    p[_key - 2] = arguments[_key];
	                }

	                (_get2 = _get(Dashboard.prototype.__proto__ || Object.getPrototypeOf(Dashboard.prototype), 'show', this)).call.apply(_get2, [this, data, visible].concat(p));
	            }
	        }
	    }, {
	        key: '_close',
	        value: function _close() {
	            this.__props.onClose && this.__props.onClose();
	            return _get(Dashboard.prototype.__proto__ || Object.getPrototypeOf(Dashboard.prototype), 'close', this).call(this);
	        }
	        // 覆盖原来关闭弹框的函数，防止页面隐藏

	    }, {
	        key: 'close',
	        value: function close() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            // 获取排序后的结果
	            var children = this.getChildrenRank();
	            var body = _react2.default.createElement(
	                'div',
	                this.__getCommonProps(),
	                children[0],
	                children[1],
	                children[2],
	                _react2.default.createElement(
	                    'div',
	                    { style: { overflow: 'hidden' } },
	                    this.__props.footerContent
	                )
	            );
	            return !this.__props.visible ? null : !this.__props.title && !this.__props.closable ? body : _react2.default.createElement(
	                _antd.Collapse,
	                _extends({ activeKey: 'active', bordered: !!this.__props.bordered
	                }, this.__getCommonProps({ className: 'uf-dashboard' })),
	                _react2.default.createElement(
	                    _antd.Collapse.Panel,
	                    { key: 'active', header: _react2.default.createElement(
	                            'div',
	                            { style: { overflow: 'hidden' } },
	                            this.__analysis(this._handleButtons(this.__props.title)),
	                            this.__props.closable && _react2.default.createElement(
	                                _antd.Button,
	                                { size: 'small', style: { float: 'right' }, type: 'danger',
	                                    onClick: this._close.bind(this) },
	                                '\u5173\u95ED'
	                            )
	                        ) },
	                    body
	                )
	            );
	        }
	    }]);

	    return Dashboard;
	}(_Modal2.default);

	exports.default = Dashboard;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(104).default;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file Ueditor封装
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      重写了上传图片组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// export default class Ueditor extends React.PureComponent {
	var Ueditor = function (_BaseComponent) {
	    _inherits(Ueditor, _BaseComponent);

	    function Ueditor(props) {
	        _classCallCheck(this, Ueditor);

	        // 在form组件中使用时，会额外传入一个 data-__meta 字段
	        var _this = _possibleConstructorReturn(this, (Ueditor.__proto__ || Object.getPrototypeOf(Ueditor)).call(this, props));

	        _this._filter.push('data-__meta');
	        _this.name = props.name;
	        _this.ueditor = null;
	        // 保证每次实例化都有一个唯一的id
	        _this.ueditorId = (props.name || 'create_editor') + '_' + Date.now();
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
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            this._factory.$requirejs(['ueditor'], function (UE) {
	                // ueditor未做umd兼容，而且不知为何 requirejs shim 无效，只能从window上拿
	                _this3.ueditor = window.UE;
	                _this3.initUeditor();
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Echarts 入口
	 */

	module.exports = __webpack_require__(106).default;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

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
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // if (Utils.isChange(this.__prevProps, this.__filterProps(nextProps))) {
	            //     this.chart.setOption(this.__filterProps(nextProps));
	            // }
	            this.chart && this.chart.setOption(this.__filterProps(nextProps));
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
	            var _this2 = this;

	            // 执行的时候再获取
	            var echarts = window.echarts;
	            if (echarts) {
	                this.echarts = echarts;
	                this.initEcharts();
	            } else {
	                // 惰性加载
	                // echarts 的路径见 src/default/index.js 中的配置
	                this._factory.$requirejs(['echarts'], function (echarts) {
	                    _this2.echarts = echarts;
	                    _this2.initEcharts();
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

	                // 真正创建完echarts时再执行用户配置的afterCreate逻辑
	                this.__filtered.oriAfterCreate && this.__filtered.oriAfterCreate();
	            } else {
	                _utils.Utils.defer(console.error, 'There is no echarts, please check.');
	            }
	        }
	    }, {
	        key: '_agencyFunction',
	        value: function _agencyFunction(origin) {
	            var _this3 = this;

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                var _loop = function _loop() {
	                    var i = _step.value;

	                    if (_utils.Utils.typeof(origin[i], 'function')) {
	                        _this3._inject(_this3, i, function () {
	                            var _chart;

	                            return (_chart = _this3.chart)[i].apply(_chart, arguments);
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file Fieldset组件入口
	 * **/

	module.exports = __webpack_require__(108).default;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file fieldset 封装
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Fieldset = function (_BaseComponent) {
	    _inherits(Fieldset, _BaseComponent);

	    function Fieldset(props) {
	        _classCallCheck(this, Fieldset);

	        var _this = _possibleConstructorReturn(this, (Fieldset.__proto__ || Object.getPrototypeOf(Fieldset)).call(this, props));

	        _this.__init();
	        return _this;
	    }

	    _createClass(Fieldset, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'fieldset',
	                this.__getCommonProps({ className: 'uf-fieldset' }),
	                _react2.default.createElement(
	                    'legend',
	                    null,
	                    this.__props.title
	                ),
	                this.__props.children
	            );
	        }
	    }]);

	    return Fieldset;
	}(_base.BaseComponent);

	exports.default = Fieldset;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @file 组件入口
	 * **/

	module.exports = __webpack_require__(110).default;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(21);

	var _base = __webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 封装
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var List = function (_BaseComponent) {
	    _inherits(List, _BaseComponent);

	    function List(props) {
	        _classCallCheck(this, List);

	        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

	        _this.state = {};
	        _this.__init();
	        return _this;
	    }

	    _createClass(List, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.__props,
	                _props$data = _props.data,
	                data = _props$data === undefined ? {} : _props$data,
	                _props$columns = _props.columns,
	                columns = _props$columns === undefined ? [] : _props$columns,
	                _props$layout = _props.layout,
	                layout = _props$layout === undefined ? {} : _props$layout;
	            var labelCol = layout.labelCol,
	                valueCol = layout.valueCol,
	                labelStyle = layout.labelStyle,
	                valueStyle = layout.valueStyle;

	            var className = 'uf-list';
	            className += this.__props.bordered ? ' show-border' : '';
	            className += this.__props.interleave ? ' show-bg' : '';

	            return _react2.default.createElement(
	                'div',
	                this.__getCommonProps({ className: className }),
	                columns.map(function (item) {
	                    return _react2.default.createElement(
	                        _antd.Row,
	                        { key: item.dataIndex, className: 'uf-list-row' },
	                        _react2.default.createElement(
	                            _antd.Col,
	                            { key: 'label', span: labelCol, style: labelStyle, className: 'uf-list-label' },
	                            item.title
	                        ),
	                        _react2.default.createElement(
	                            _antd.Col,
	                            { key: 'value', span: valueCol, style: valueStyle, className: 'uf-list-value' },
	                            !item.render ? data[item.dataIndex] : _this2.__analysis(item.render(data[item.dataIndex], data))
	                        )
	                    );
	                })
	            );
	        }
	    }]);

	    return List;
	}(_base.BaseComponent);

	exports.default = List;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	module.exports = window.DLL.moment_zh_cn;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(113);

	var _config2 = _interopRequireDefault(_config);

	var _components = __webpack_require__(116);

	var _components2 = _interopRequireDefault(_components);

	var _model = __webpack_require__(117);

	var _model2 = _interopRequireDefault(_model);

	var _ajax = __webpack_require__(118);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _instance = __webpack_require__(59);

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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _BaseCache2 = __webpack_require__(60);

	var _BaseCache3 = _interopRequireDefault(_BaseCache2);

	var _default = __webpack_require__(114);

	var _default2 = _interopRequireDefault(_default);

	var _utils = __webpack_require__(23);

	var _utils2 = _interopRequireDefault(_utils);

	var _instance = __webpack_require__(59);

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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _components = __webpack_require__(115);

	var _components2 = _interopRequireDefault(_components);

	var _env = __webpack_require__(15);

	var _env2 = _interopRequireDefault(_env);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 指定ueditor资源路径，否则css等加载路径不对
	/**
	 * @file 全局默认配置
	 * @author liuzechun
	 * Created Date: 2018-01-30 10:55:45
	 */

	window.UEDITOR_HOME_URL = _env2.default.basePath + '/third_party/ueditor/';

	exports.default = {
	    // 模块引入相关配置
	    modules: {
	        // 加载模块时是否展示loading
	        showLoading: false,
	        paths: {
	            'echarts': _env2.default.basePath + '/third_party/echarts/echarts' + (_env2.default.production ? '.min' : ''),
	            'ueditor': _env2.default.basePath + '/third_party/ueditor/ueditor.all',
	            'ueditorconfig': _env2.default.basePath + '/third_party/ueditor/ueditor.config',
	            'zeroclipboard': _env2.default.basePath + '/third_party/ueditor/ZeroClipboard'
	        },
	        shim: {
	            'ueditor': ['zeroclipboard', 'ueditorconfig'],
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
	    components: _components2.default,
	    // 权限点，用户有权限的权限点列表
	    // key（权限点） => value（boolen/object）
	    authority: {}
	};

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _baseComponent$antd$;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * @file 组件默认参数定义
	 * @author liuzechun
	 * Created Date: 2017-10-12 03:23:12
	 *
	 * Last Modified: 2017-10-12 03:23:16
	 * Modified By: liuzechun
	 */

	exports.default = (_baseComponent$antd$ = {
	    /****************************************************************************************/
	    /******* 基类默认配置，即一类组件通用配置 ****************************************************/
	    /****************************************************************************************/
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
	    /****************************************************************************************/
	    /******* 普通组件默认配置 ******************************************************************/
	    /****************************************************************************************/
	    'auto-complete': {
	        style: { width: 160 },
	        options: []
	    },
	    'breadcrumb': {
	        style: { padding: '12px 24px', lineHeight: '18px' }
	    },
	    'cascader': {
	        source: {
	            target: 'options'
	        }
	    },
	    'checkbox': {
	        source: {
	            target: 'checked'
	        }
	    },
	    'checkbox-group': {
	        source: {
	            target: 'options'
	        }
	    },
	    'input': {
	        api: {
	            trigger: 'onPressEnter'
	        },
	        control: {
	            trigger: 'onPressEnter'
	        }
	    },
	    'textarea': {
	        style: { minHeight: '2em' }
	    },
	    'radio': {
	        source: {
	            target: 'options'
	        }
	    },
	    'router': {
	        history: 'hashHistory'
	    },
	    'loading': {
	        delay: 150
	    },
	    'iframe': {
	        mode: 'auto',
	        delay: 0,
	        showLoading: true
	    },
	    'select': {
	        optionFilterProp: 'children',
	        source: {
	            target: 'options'
	        },
	        // 默认充满全部
	        style: { width: '100%', minWidth: 50 },
	        // 搜索时忽略大小写
	        filterOption: function filterOption(v, opt) {
	            return opt.props.children !== undefined && opt.props.children.toLowerCase().indexOf(v.toLowerCase()) > -1;
	        }
	    }
	}, _defineProperty(_baseComponent$antd$, 'auto-complete', {
	    mode: 'combobox'
	}), _defineProperty(_baseComponent$antd$, 'switch', {
	    source: {
	        target: 'checked'
	    }
	}), _defineProperty(_baseComponent$antd$, 'date-picker', {
	    format: 'YYYY-MM-DD'
	}), _defineProperty(_baseComponent$antd$, 'range-picker', {
	    format: 'YYYY-MM-DD'
	}), _defineProperty(_baseComponent$antd$, 'month-picker', {
	    format: 'YYYY-MM'
	}), _defineProperty(_baseComponent$antd$, 'time-picker', {
	    format: 'HH:mm:ss'
	}), _defineProperty(_baseComponent$antd$, 'menu', {
	    // 默认高亮随路由一起变换
	    followRoute: true
	}), _defineProperty(_baseComponent$antd$, 'upload', {
	    source: {
	        target: 'fileList'
	    }
	}), _defineProperty(_baseComponent$antd$, 'form', {
	    items: [],
	    buttons: null,
	    layout: {
	        type: 'horizontal',
	        labelCol: 6,
	        wrapperCol: 14
	    },
	    source: {
	        target: 'formData'
	    },
	    api: {
	        trigger: 'onSubmit'
	    },
	    control: {
	        trigger: 'onSubmit',
	        handler: function handler(v) {
	            return v;
	        }
	    }
	}), _defineProperty(_baseComponent$antd$, 'forms', {
	    addType: 'copy'
	}), _defineProperty(_baseComponent$antd$, 'table', {
	    rowKey: 'id',
	    pagination: {
	        current: 1,
	        pageSize: 10,
	        pageType: 'client',
	        total: 0
	    },
	    source: {
	        // 自动加载数据
	        autoLoad: true,
	        autoReload: true
	    },
	    data: []
	}), _defineProperty(_baseComponent$antd$, 'table-edit', {
	    api: {
	        trigger: 'onSubmit'
	    }
	}), _defineProperty(_baseComponent$antd$, 'modal', {
	    visible: false,
	    maskClosable: false,
	    closable: true,
	    api: {
	        trigger: 'onSubmit'
	    },
	    control: {
	        trigger: 'onSubmit',
	        handler: function handler(v) {
	            return v;
	        }
	    }
	}), _defineProperty(_baseComponent$antd$, 'dashboard', {
	    closable: false
	}), _defineProperty(_baseComponent$antd$, 'tree', {
	    source: {
	        autoLoad: true,
	        autoReload: false,
	        target: 'data'
	    }
	}), _defineProperty(_baseComponent$antd$, 'list', {
	    interleave: true,
	    bordered: true,
	    layout: {
	        labelCol: 6,
	        labelStyle: {},
	        valueCol: 18,
	        valueStyle: {}
	    }
	}), _baseComponent$antd$);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _BaseCache2 = __webpack_require__(60);

	var _BaseCache3 = _interopRequireDefault(_BaseCache2);

	var _instance = __webpack_require__(59);

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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(22);

	var _BaseCache = __webpack_require__(60);

	var _BaseCache2 = _interopRequireDefault(_BaseCache);

	var _instance = __webpack_require__(59);

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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BaseCache2 = __webpack_require__(60);

	var _BaseCache3 = _interopRequireDefault(_BaseCache2);

	var _utils = __webpack_require__(23);

	var _utils2 = _interopRequireDefault(_utils);

	var _instance = __webpack_require__(59);

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
	        }]);

	        return AjaxCache;
	    }(_BaseCache3.default);

	    return new AjaxCache();
	});

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(22);

	var _loader = __webpack_require__(120);

	var _loader2 = _interopRequireDefault(_loader);

	var _adaptor = __webpack_require__(121);

	var _adaptor2 = _interopRequireDefault(_adaptor);

	var _authority = __webpack_require__(61);

	var _authority2 = _interopRequireDefault(_authority);

	var _validator = __webpack_require__(122);

	var _validator2 = _interopRequireDefault(_validator);

	var _whitelist = __webpack_require__(62);

	var _whitelist2 = _interopRequireDefault(_whitelist);

	var _instance = __webpack_require__(59);

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
	            // TODO:
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
	            if (_utils.Utils.typeof(config, 'string')) {
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	var _dom = __webpack_require__(17);

	var _lib = __webpack_require__(16);

	var UF = _interopRequireWildcard(_lib);

	var _instance = __webpack_require__(59);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file 载入组件，供 Factory 获取
	 *      根据配置的 type，转换成对应组件并返回
	 * @author liuzechun@baidu.com
	 */
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
	        // 如果按照name查找不到则尝试使用转换前的type进行匹配（plugins加载过来的组件）
	        var result = this.component[name] || this.component[type];
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
	                conf = conf(item.params);
	            }
	            item = _utils.Utils.merge({}, conf, item, { type: conf.type || oType });
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
/* 121 */
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


	var _base = __webpack_require__(19);

	var _utils = __webpack_require__(22);

	var _Antd = __webpack_require__(68);

	var _Antd2 = _interopRequireDefault(_Antd);

	var _loader = __webpack_require__(120);

	var _loader2 = _interopRequireDefault(_loader);

	var _whitelist = __webpack_require__(62);

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
	        // 把 content 转化成 children。
	        // update at 2017/10/25,如果没有content,则使用原来的children
	        // update at 2018/01/11,如果只有原来有值，才执行赋值操作
	        if (item.content || props.children) {
	            props.children = item.content || props.children;
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(22);

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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _ajax = __webpack_require__(27);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _requirejs = __webpack_require__(124);

	var _requirejs2 = _interopRequireDefault(_requirejs);

	var _precondition = __webpack_require__(125);

	var _precondition2 = _interopRequireDefault(_precondition);

	var _instance = __webpack_require__(59);

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
/* 124 */
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

	var _utils = __webpack_require__(23);

	var _utils2 = _interopRequireDefault(_utils);

	var _instance = __webpack_require__(59);

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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _antd = __webpack_require__(21);

	var _instance = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	        success: function success() {
	            --this.count;
	            if (this.count <= 0) {
	                this.count = 0;
	                clearTimeout(this.timer);
	                // 全部执行完成后执行再执行init初始化页面
	                (0, _instance.getInstance)(insName)._reInit();
	            }
	        },
	        error: function error(err) {
	            _antd.notification.error({
	                top: 24,
	                message: '执行出错，已中断页面载入',
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