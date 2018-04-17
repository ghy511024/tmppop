/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
throw new Error("Cannot find module \"./src/popup_select.vue\"");
/**
 * Created by lipan04 on 2018/4/11.
 */



var instance = void 0;
var DialogConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__src_popup_select_vue___default.a);

var initInstance = function initInstance(bottom) {
    instance = new DialogConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
};

var popup_select = function popup_select(a) {

    var _defobj = {
        title: a.title,
        type: a.selec_type,
        list: a.list,
        list_type: a.list_type
    };
    //debugger;
    instance.title = _defobj["title"];
    instance.selec_type = _defobj["type"];
    instance.list = _defobj["list"];
    instance.list_type = _defobj["list_type"];

    //判断传入的数组数据是只有text类型还是text value类型，进行不同处理（展示不同的样式）
    instance.show = true;
    if (instance.list_type == "singletext") {
        instance.radio = true;
    } else if (instance.list_type == "textvalue") {
        instance.checkbox = true;
    } else {
        instance.radio = true;
    }

    instance.isbeforeActive = true;
    setTimeout(function () {
        instance.isactive = true;
    }, 60);
};

/* harmony default export */ __webpack_exports__["default"] = ({
    install: function install(Vue, options) {
        initInstance();
        Vue.prototype.$popup_select = popup_select;
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ })
/******/ ]);