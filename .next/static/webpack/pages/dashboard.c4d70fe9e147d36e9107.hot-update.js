webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/UI/Loader.module.css":
/*!*****************************************!*\
  !*** ./components/UI/Loader.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Loader.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Loader.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Loader.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Loader.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Loader.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Loader.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/UI/Loading.js":
/*!**********************************!*\
  !*** ./components/UI/Loading.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.module.css */ "./components/UI/Loader.module.css");
/* harmony import */ var _Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\UI\\Loading.js";



function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loader,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "".concat(_Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.justifycontentcenter, " ").concat(_Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jimuprimaryloading)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = Loading;
/* harmony default export */ __webpack_exports__["default"] = (Loading);

var _c;

$RefreshReg$(_c, "Loading");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/feed/AllItems.js":
/*!*************************************!*\
  !*** ./components/feed/AllItems.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostGrid */ "./components/feed/PostGrid.js");
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\feed\\AllItems.js",
    _s = $RefreshSig$();



 // import Loader from "../UI/Loader";



function AllItems() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      isData = _useState[0],
      setIsData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);
    fetch("/api/post/postitem").then(function (response) {
      return response.json();
    }).then(function (data) {
      // console.log(data);
      setIsData(data);
    });
    setIsLoading(false);
  }, [setIsData]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: isData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Loader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(AllItems, "hl+Xp/DTcagG4kn6hAMqrxqirYw=");

_c = AllItems;
/* harmony default export */ __webpack_exports__["default"] = (AllItems);

var _c;

$RefreshReg$(_c, "AllItems");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Loader.module.css":
/*!*****************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/UI/Loader.module.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Loader_loader__a7gPQ {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  background: #333333;\r\n  -webkit-transition: opacity 0.75s, visibility 0.75s;\r\n  -moz-transition: opacity 0.75s, visibility 0.75s;\r\n  transition: opacity 0.75s, visibility 0.75s;\r\n}\r\n\r\n.Loader_loaderhidden__343g- {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n.Loader_loader__a7gPQ::after {\r\n  content: \"\";\r\n  width: 75px;\r\n  height: 75px;\r\n  border: 15px solid #dddddd;\r\n  border-top-color: #009578;\r\n  border-radius: 50%;\r\n  -webkit-animation: Loader_loading__2ewxn 0.75s ease infinite;\r\n     -moz-animation: Loader_loading__2ewxn 0.75s ease infinite;\r\n          animation: Loader_loading__2ewxn 0.75s ease infinite;\r\n}\r\n\r\n@-webkit-keyframes Loader_loading__2ewxn {\r\n  from {\r\n    -webkit-transform: rotate(0turn);\r\n            transform: rotate(0turn);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(1turn);\r\n            transform: rotate(1turn);\r\n  }\r\n}\r\n\r\n@-moz-keyframes Loader_loading__2ewxn {\r\n  from {\r\n    -moz-transform: rotate(0turn);\r\n         transform: rotate(0turn);\r\n  }\r\n  to {\r\n    -moz-transform: rotate(1turn);\r\n         transform: rotate(1turn);\r\n  }\r\n}\r\n\r\n@keyframes Loader_loading__2ewxn {\r\n  from {\r\n    -webkit-transform: rotate(0turn);\r\n       -moz-transform: rotate(0turn);\r\n            transform: rotate(0turn);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(1turn);\r\n       -moz-transform: rotate(1turn);\r\n            transform: rotate(1turn);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://components/UI/Loader.module.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,iBAAa;EAAb,aAAa;EACb,sBAAmB;OAAnB,mBAAmB;EACnB,qBAAuB;OAAvB,uBAAuB;EACvB,mBAAmB;EACnB,mDAA2C;EAA3C,gDAA2C;EAA3C,2CAA2C;AAC7C;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,yBAAyB;EACzB,kBAAkB;EAClB,4DAAsC;KAAtC,yDAAsC;UAAtC,oDAAsC;AACxC;;AAEA;EACE;IACE,gCAAwB;YAAxB,wBAAwB;EAC1B;EACA;IACE,gCAAwB;YAAxB,wBAAwB;EAC1B;AACF;;AAPA;EACE;IACE,6BAAwB;SAAxB,wBAAwB;EAC1B;EACA;IACE,6BAAwB;SAAxB,wBAAwB;EAC1B;AACF;;AAPA;EACE;IACE,gCAAwB;OAAxB,6BAAwB;YAAxB,wBAAwB;EAC1B;EACA;IACE,gCAAwB;OAAxB,6BAAwB;YAAxB,wBAAwB;EAC1B;AACF","sourcesContent":[".loader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #333333;\r\n  transition: opacity 0.75s, visibility 0.75s;\r\n}\r\n\r\n.loaderhidden {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n.loader::after {\r\n  content: \"\";\r\n  width: 75px;\r\n  height: 75px;\r\n  border: 15px solid #dddddd;\r\n  border-top-color: #009578;\r\n  border-radius: 50%;\r\n  animation: loading 0.75s ease infinite;\r\n}\r\n\r\n@keyframes loading {\r\n  from {\r\n    transform: rotate(0turn);\r\n  }\r\n  to {\r\n    transform: rotate(1turn);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loader": "Loader_loader__a7gPQ",
	"loaderhidden": "Loader_loaderhidden__343g-",
	"loading": "Loader_loading__2ewxn"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9Mb2FkZXIubW9kdWxlLmNzcz8xOTE5Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VJL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZmVlZC9BbGxJdGVtcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9Mb2FkZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJMb2FkaW5nIiwiY2xhc3NlcyIsImxvYWRlciIsImp1c3RpZnljb250ZW50Y2VudGVyIiwiamltdXByaW1hcnlsb2FkaW5nIiwiQWxsSXRlbXMiLCJ1c2VTdGF0ZSIsImlzRGF0YSIsInNldElzRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFVBQVUsbUJBQU8sQ0FBQyxzTkFBMkc7QUFDN0gsMEJBQTBCLG1CQUFPLENBQUMscVVBQStLOztBQUVqTjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSxxVUFBK0s7QUFDckw7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxxVUFBK0s7O0FBRXpNOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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WUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxrQ0FBa0Msc0JBQXNCLGFBQWEsY0FBYyxtQkFBbUIsb0JBQW9CLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQixrREFBa0QsS0FBSyx1QkFBdUIsaUJBQWlCLHlCQUF5QixLQUFLLHdCQUF3QixvQkFBb0Isa0JBQWtCLG1CQUFtQixpQ0FBaUMsZ0NBQWdDLHlCQUF5Qiw2Q0FBNkMsS0FBSyw0QkFBNEIsWUFBWSxpQ0FBaUMsT0FBTyxVQUFVLGlDQUFpQyxPQUFPLEtBQUssdUJBQXVCO0FBQ25yRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuYzRkNzBmZTllMTQ3ZDM2ZTkxMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vTG9hZGVyLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0xvYWRlci5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vTG9hZGVyLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Mb2FkZXIubW9kdWxlLmNzc1wiO1xyXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkZXJ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmp1c3RpZnljb250ZW50Y2VudGVyfSAke2NsYXNzZXMuamltdXByaW1hcnlsb2FkaW5nfWB9XHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUG9zdEdyaWQgZnJvbSBcIi4vUG9zdEdyaWRcIjtcclxuXHJcbi8vIGltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL1VJL0xvYWRlclwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xyXG5mdW5jdGlvbiBBbGxJdGVtcygpIHtcclxuICBjb25zdCBbaXNEYXRhLCBzZXRJc0RhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc2V0SXNEYXRhKGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfSwgW3NldElzRGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFBvc3RHcmlkIGRhdGE9e2lzRGF0YX0gLz5cclxuICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGVyIC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsSXRlbXM7XHJcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Mb2FkZXJfbG9hZGVyX19hN2dQUSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjc1cywgdmlzaWJpbGl0eSAwLjc1cztcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjc1cywgdmlzaWJpbGl0eSAwLjc1cztcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC43NXMsIHZpc2liaWxpdHkgMC43NXM7XFxyXFxufVxcclxcblxcclxcbi5Mb2FkZXJfbG9hZGVyaGlkZGVuX18zNDNnLSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uTG9hZGVyX2xvYWRlcl9fYTdnUFE6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgd2lkdGg6IDc1cHg7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxuICBib3JkZXI6IDE1cHggc29saWQgI2RkZGRkZDtcXHJcXG4gIGJvcmRlci10b3AtY29sb3I6ICMwMDk1Nzg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogTG9hZGVyX2xvYWRpbmdfXzJld3huIDAuNzVzIGVhc2UgaW5maW5pdGU7XFxyXFxuICAgICAtbW96LWFuaW1hdGlvbjogTG9hZGVyX2xvYWRpbmdfXzJld3huIDAuNzVzIGVhc2UgaW5maW5pdGU7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogTG9hZGVyX2xvYWRpbmdfXzJld3huIDAuNzVzIGVhc2UgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBMb2FkZXJfbG9hZGluZ19fMmV3eG4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMHR1cm4pO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDB0dXJuKTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ALW1vei1rZXlmcmFtZXMgTG9hZGVyX2xvYWRpbmdfXzJld3huIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDB0dXJuKTtcXHJcXG4gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwdHVybik7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xcclxcbiAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBMb2FkZXJfbG9hZGluZ19fMmV3eG4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMHR1cm4pO1xcclxcbiAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDB0dXJuKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwdHVybik7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xcclxcbiAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL1VJL0xvYWRlci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBYTtFQUFiLGFBQWE7RUFDYixzQkFBbUI7T0FBbkIsbUJBQW1CO0VBQ25CLHFCQUF1QjtPQUF2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1EQUEyQztFQUEzQyxnREFBMkM7RUFBM0MsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDREQUFzQztLQUF0Qyx5REFBc0M7VUFBdEMsb0RBQXNDO0FBQ3hDOztBQUVBO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLDZCQUF3QjtTQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDZCQUF3QjtTQUF4Qix3QkFBd0I7RUFDMUI7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsZ0NBQXdCO09BQXhCLDZCQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGdDQUF3QjtPQUF4Qiw2QkFBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjc1cywgdmlzaWJpbGl0eSAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRlcmhpZGRlbiB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGVyOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHdpZHRoOiA3NXB4O1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgYm9yZGVyOiAxNXB4IHNvbGlkICNkZGRkZGQ7XFxyXFxuICBib3JkZXItdG9wLWNvbG9yOiAjMDA5NTc4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDAuNzVzIGVhc2UgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbG9hZGluZyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMHR1cm4pO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxvYWRlclwiOiBcIkxvYWRlcl9sb2FkZXJfX2E3Z1BRXCIsXG5cdFwibG9hZGVyaGlkZGVuXCI6IFwiTG9hZGVyX2xvYWRlcmhpZGRlbl9fMzQzZy1cIixcblx0XCJsb2FkaW5nXCI6IFwiTG9hZGVyX2xvYWRpbmdfXzJld3huXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==