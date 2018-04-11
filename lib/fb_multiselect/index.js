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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'app',
    data: function data() {
        return {
            show: false,
            title: '',
            content: '',
            confirmBtn: '',
            cancelBtn: '',
            confirmCallback: function confirmCallback() {},
            cancelCallback: function cancelCallback() {},
            longContent: false
        };
    },
    mounted: function mounted() {},

    computed: {
        output: function output() {
            if (typeof this.content == 'string') {
                return [this.content];
            } else {
                return this.content;
            }
        }
    },
    methods: {
        btnClick: function btnClick(btnType) {
            this.show = false;
            this[btnType + 'Callback']();
        }
    },
    watch: {
        content: function content() {
            var _this = this;

            this.$nextTick().then(function () {
                var contents = _this.$refs.content;
                if (contents.length == 1) {
                    var item = contents[0];
                    var pWidth = item.offsetWidth;
                    var pHeight = item.offsetHeight;
                    var rate = pHeight / pWidth;
                    if (rate > 0.079) {
                        _this.longContent = true;
                    } else {
                        _this.longContent = false;
                    }
                }
            });
        }
    }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fb_multiselect_vue__ = __webpack_require__(3);



var instance = void 0;
var DialogConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__fb_multiselect_vue__["a" /* default */]);

var initInstance = function initInstance(bottom) {
    instance = new DialogConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
};

var dialog = function dialog() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$title = _ref.title,
        title = _ref$title === undefined ? '' : _ref$title,
        _ref$content = _ref.content,
        content = _ref$content === undefined ? '' : _ref$content,
        _ref$confirmBtn = _ref.confirmBtn,
        confirmBtn = _ref$confirmBtn === undefined ? '确定' : _ref$confirmBtn,
        _ref$cancelBtn = _ref.cancelBtn,
        cancelBtn = _ref$cancelBtn === undefined ? '' : _ref$cancelBtn,
        _ref$confirmCallback = _ref.confirmCallback,
        confirmCallback = _ref$confirmCallback === undefined ? function () {} : _ref$confirmCallback,
        _ref$cancelCallback = _ref.cancelCallback,
        cancelCallback = _ref$cancelCallback === undefined ? function () {} : _ref$cancelCallback;

    instance.title = title;
    instance.content = content;
    instance.confirmCallback = confirmCallback;
    instance.cancelCallback = cancelCallback;
    instance.confirmBtn = confirmBtn;
    instance.cancelBtn = cancelBtn;
    instance.show = true;
};
/* harmony default export */ __webpack_exports__["default"] = ({
    install: function install(Vue, options) {
        alert("ghy123456");
        initInstance();
        Vue.prototype.$dialog = dialog;
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fb_multiselect_vue__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b36ea7e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_fb_multiselect_vue__ = __webpack_require__(6);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(4)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fb_multiselect_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b36ea7e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_fb_multiselect_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\fb_multiselect\\src\\fb_multiselect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b36ea7e", Component.options)
  } else {
    hotAPI.reload("data-v-3b36ea7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        { name: "show", rawName: "v-show", value: _vm.show, expression: "show" }
      ],
      staticClass: "dialogMask"
    },
    [
      _c(
        "div",
        { staticClass: "dialog" },
        [
          _vm.title
            ? _c("p", { staticClass: "dialog-title" }, [
                _vm._v(_vm._s(_vm.title))
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.output, function(item) {
            return _c(
              "p",
              {
                key: item,
                ref: "content",
                refInFor: true,
                staticClass: "dialog-content",
                class: { left: _vm.longContent }
              },
              [_vm._v(_vm._s(item))]
            )
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-container", class: { double: _vm.cancelBtn } },
            [
              _vm.cancelBtn
                ? _c(
                    "div",
                    {
                      on: {
                        click: function($event) {
                          _vm.btnClick("cancel")
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.cancelBtn))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "confirmBtn",
                  on: {
                    click: function($event) {
                      _vm.btnClick("confirm")
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.confirmBtn))]
              )
            ]
          )
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b36ea7e", esExports)
  }
}

/***/ })
/******/ ]);