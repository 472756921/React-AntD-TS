/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/es/locale-provider/style/css.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/es/locale-provider/style/css.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./node_modules/antd/es/locale-provider/style/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\n//# sourceMappingURL=css.js.map\n\n\n//# sourceURL=webpack:///./node_modules/antd/es/locale-provider/style/css.js?");

/***/ }),

/***/ "./node_modules/antd/es/locale-provider/style/index.css":
/*!**************************************************************!*\
  !*** ./node_modules/antd/es/locale-provider/style/index.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n\n\n//# sourceURL=webpack:///./node_modules/antd/es/locale-provider/style/index.css?");

/***/ }),

/***/ "./node_modules/antd/lib/calendar/locale/zh_CN.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/calendar/locale/zh_CN.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _zh_CN = _interopRequireDefault(__webpack_require__(/*! ../../date-picker/locale/zh_CN */ \"./node_modules/antd/lib/date-picker/locale/zh_CN.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = _zh_CN[\"default\"];\nexports[\"default\"] = _default;\n//# sourceMappingURL=zh_CN.js.map\n\n\n//# sourceURL=webpack:///./node_modules/antd/lib/calendar/locale/zh_CN.js?");

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/locale/zh_CN.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/locale/zh_CN.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _zh_CN = _interopRequireDefault(__webpack_require__(/*! rc-calendar/lib/locale/zh_CN */ \"./node_modules/rc-calendar/lib/locale/zh_CN.js\"));\n\nvar _zh_CN2 = _interopRequireDefault(__webpack_require__(/*! ../../time-picker/locale/zh_CN */ \"./node_modules/antd/lib/time-picker/locale/zh_CN.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar locale = {\n  lang: _extends({\n    placeholder: '请选择日期',\n    rangePlaceholder: ['开始日期', '结束日期']\n  }, _zh_CN[\"default\"]),\n  timePickerLocale: _extends({}, _zh_CN2[\"default\"])\n}; // should add whitespace between char in Button\n\nlocale.lang.ok = '确 定'; // All settings at:\n// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json\n\nvar _default = locale;\nexports[\"default\"] = _default;\n//# sourceMappingURL=zh_CN.js.map\n\n\n//# sourceURL=webpack:///./node_modules/antd/lib/date-picker/locale/zh_CN.js?");

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/zh_CN.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/zh_CN.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _zh_CN = _interopRequireDefault(__webpack_require__(/*! ../locale/zh_CN */ \"./node_modules/antd/lib/locale/zh_CN.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = _zh_CN[\"default\"];\nexports[\"default\"] = _default;\n//# sourceMappingURL=zh_CN.js.map\n\n\n//# sourceURL=webpack:///./node_modules/antd/lib/locale-provider/zh_CN.js?");

/***/ }),

/***/ "./node_modules/antd/lib/locale/zh_CN.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/locale/zh_CN.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _zh_CN = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/zh_CN */ \"./node_modules/rc-pagination/lib/locale/zh_CN.js\"));\n\nvar _zh_CN2 = _interopRequireDefault(__webpack_require__(/*! ../date-picker/locale/zh_CN */ \"./node_modules/antd/lib/date-picker/locale/zh_CN.js\"));\n\nvar _zh_CN3 = _interopRequireDefault(__webpack_require__(/*! ../time-picker/locale/zh_CN */ \"./node_modules/antd/lib/time-picker/locale/zh_CN.js\"));\n\nvar _zh_CN4 = _interopRequireDefault(__webpack_require__(/*! ../calendar/locale/zh_CN */ \"./node_modules/antd/lib/calendar/locale/zh_CN.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = {\n  locale: 'zh-cn',\n  Pagination: _zh_CN[\"default\"],\n  DatePicker: _zh_CN2[\"default\"],\n  TimePicker: _zh_CN3[\"default\"],\n  Calendar: _zh_CN4[\"default\"],\n  // locales for all comoponents\n  global: {\n    placeholder: '请选择'\n  },\n  Table: {\n    filterTitle: '筛选',\n    filterConfirm: '确定',\n    filterReset: '重置',\n    selectAll: '全选当页',\n    selectInvert: '反选当页',\n    sortTitle: '排序',\n    expand: '展开行',\n    collapse: '关闭行'\n  },\n  Modal: {\n    okText: '确定',\n    cancelText: '取消',\n    justOkText: '知道了'\n  },\n  Popconfirm: {\n    cancelText: '取消',\n    okText: '确定'\n  },\n  Transfer: {\n    searchPlaceholder: '请输入搜索内容',\n    itemUnit: '项',\n    itemsUnit: '项'\n  },\n  Upload: {\n    uploading: '文件上传中',\n    removeFile: '删除文件',\n    uploadError: '上传错误',\n    previewFile: '预览文件',\n    downloadFile: '下载文件'\n  },\n  Empty: {\n    description: '暂无数据'\n  },\n  Icon: {\n    icon: '图标'\n  },\n  Text: {\n    edit: '编辑',\n    copy: '复制',\n    copied: '复制成功',\n    expand: '展开'\n  },\n  PageHeader: {\n    back: '返回'\n  }\n};\nexports[\"default\"] = _default;\n//# sourceMappingURL=zh_CN.js.map\n\n\n//# sourceURL=webpack:///./node_modules/antd/lib/locale/zh_CN.js?");

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/locale/zh_CN.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/locale/zh_CN.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar locale = {\n  placeholder: '请选择时间'\n};\nvar _default = locale;\nexports[\"default\"] = _default;\n//# sourceMappingURL=zh_CN.js.map\n\n\n//# sourceURL=webpack:///./node_modules/antd/lib/time-picker/locale/zh_CN.js?");

/***/ }),

/***/ "./node_modules/rc-calendar/lib/locale/zh_CN.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-calendar/lib/locale/zh_CN.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports['default'] = {\n  today: '今天',\n  now: '此刻',\n  backToToday: '返回今天',\n  ok: '确定',\n  timeSelect: '选择时间',\n  dateSelect: '选择日期',\n  weekSelect: '选择周',\n  clear: '清除',\n  month: '月',\n  year: '年',\n  previousMonth: '上个月 (翻页上键)',\n  nextMonth: '下个月 (翻页下键)',\n  monthSelect: '选择月份',\n  yearSelect: '选择年份',\n  decadeSelect: '选择年代',\n  yearFormat: 'YYYY年',\n  dayFormat: 'D日',\n  dateFormat: 'YYYY年M月D日',\n  dateTimeFormat: 'YYYY年M月D日 HH时mm分ss秒',\n  previousYear: '上一年 (Control键加左方向键)',\n  nextYear: '下一年 (Control键加右方向键)',\n  previousDecade: '上一年代',\n  nextDecade: '下一年代',\n  previousCentury: '上一世纪',\n  nextCentury: '下一世纪'\n};\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/rc-calendar/lib/locale/zh_CN.js?");

/***/ }),

/***/ "./node_modules/rc-pagination/lib/locale/zh_CN.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-pagination/lib/locale/zh_CN.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports['default'] = {\n  // Options.jsx\n  items_per_page: '条/页',\n  jump_to: '跳至',\n  jump_to_confirm: '确定',\n  page: '页',\n\n  // Pagination.jsx\n  prev_page: '上一页',\n  next_page: '下一页',\n  prev_5: '向前 5 页',\n  next_5: '向后 5 页',\n  prev_3: '向前 3 页',\n  next_3: '向后 3 页'\n};\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/rc-pagination/lib/locale/zh_CN.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_es_locale_provider_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/locale-provider/style/css */ \"./node_modules/antd/es/locale-provider/style/css.js\");\n/* harmony import */ var antd_es_locale_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/locale-provider */ \"./node_modules/antd/es/locale-provider/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/locale-provider/zh_CN */ \"./node_modules/antd/lib/locale-provider/zh_CN.js\");\n/* harmony import */ var antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_4__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_locale_provider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  locale: antd_lib_locale_provider_zh_CN__WEBPACK_IMPORTED_MODULE_5___default.a\n}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/layouts/index.js?");

/***/ }),

/***/ "./src/page/index.js":
/*!***************************!*\
  !*** ./src/page/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout_U; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Layout_U extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return React.createElement(\"div\", null, this.props.children);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/page/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Root; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts */ \"./src/layouts/index.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layouts__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page/index */ \"./src/page/index.js\");\n\n\n\n\nclass Root extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"Router\"], {\n      history: react_router__WEBPACK_IMPORTED_MODULE_1__[\"browserHistory\"]\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/\",\n      component: _layouts__WEBPACK_IMPORTED_MODULE_2___default.a\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__[\"IndexRoute\"], {\n      breadcrumbName: \"\\u9996\\u9875\",\n      component: _page_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./node_modules/antd-dayjs-webpack-plugin/src/init-dayjs.js ./src/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! E:\\code\\TS\\hello\\node_modules\\antd-dayjs-webpack-plugin\\src\\init-dayjs.js */\"./node_modules/antd-dayjs-webpack-plugin/src/init-dayjs.js\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./node_modules/antd-dayjs-webpack-plugin/src/init-dayjs.js_./src/index.js?");

/***/ })

/******/ });