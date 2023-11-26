webpackHotUpdate_N_E("pages/stats",{

/***/ "./components/notificationOverlay/noti.js":
/*!************************************************!*\
  !*** ./components/notificationOverlay/noti.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _noti_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noti.module.css */ "./components/notificationOverlay/noti.module.css");
/* harmony import */ var _noti_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_noti_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\notificationOverlay\\noti.js",
    _this = undefined,
    _s = $RefreshSig$();

// noti.js




var Noti = function Noti(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setShow(true);
    var timer = setTimeout(function () {
      setShow(false);
    }, 3000);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "".concat(_noti_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notification, " ").concat(show ? _noti_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.show : ""),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _noti_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tick,
      children: "\u2714"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), props.data]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this), document.getElementById("Notification"));
};

_s(Noti, "bXBd/WbmO9A8Q7bxaOKZvuJyGc0=");

_c = Noti;
/* harmony default export */ __webpack_exports__["default"] = (Noti);

var _c;

$RefreshReg$(_c, "Noti");

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

/***/ "./components/notificationOverlay/noti.module.css":
/*!********************************************************!*\
  !*** ./components/notificationOverlay/noti.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./noti.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/notificationOverlay/noti.module.css");

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
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./noti.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/notificationOverlay/noti.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./noti.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/notificationOverlay/noti.module.css");

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

/***/ "./components/stats/ChartComp.js":
/*!***************************************!*\
  !*** ./components/stats/ChartComp.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartComp.module.css */ "./components/stats/ChartComp.module.css");
/* harmony import */ var _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _notificationOverlay_noti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notificationOverlay/noti */ "./components/notificationOverlay/noti.js");
/* harmony import */ var _components_stats_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/stats/chart */ "./components/stats/chart.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\stats\\ChartComp.js",
    _this = undefined,
    _s = $RefreshSig$();







var ChartComp = function ChartComp() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      count = _useState[0],
      setCount = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("/api/stats/getposts").then(function (response) {
      return response.json();
    }).then(function (data) {
      setCount(data);
    })["catch"](function (error) {
      console.error("Fetch error:", error);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_stats_chart__WEBPACK_IMPORTED_MODULE_4__["default"], {
      postscount: count
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ulist,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.listitem,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Total Posted Items:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), " ", count.totalPosts ? count.totalPosts : 10]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.listitem,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Lost Posted Items:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), " ", count.totalPosts ? count.lostPosts : 7]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Found Posted Items:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), " ", count.totalPosts ? count.foundPosts : 3]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
}; // export async function getServerSideProps() {
//   const client = await connectToDatabase();
//   const postedItemCollection = client.db().collection("PostedItem");
//   const totalPosts = await postedItemCollection.countDocuments();
//   console.log(totalPosts);
//   return {
//     props: { totalcount: totalPosts },
//   };
// }


_s(ChartComp, "KH5vNaxQgcotsGCHHQ7+13gaLbM=");

_c = ChartComp;
/* harmony default export */ __webpack_exports__["default"] = (ChartComp);

var _c;

$RefreshReg$(_c, "ChartComp");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/notificationOverlay/noti.module.css":
/*!********************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/notificationOverlay/noti.module.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* noti.module.css */\r\n\r\n.noti_notification__1NHfs {\r\n  position: fixed;\r\n  bottom: 5%;\r\n  right: 2%;\r\n  background-color: #311465;\r\n  color: white;\r\n  padding: 0.4vw;\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n  -webkit-transition: -webkit-transform 0.3s ease-out;\r\n  transition: -webkit-transform 0.3s ease-out;\r\n  -moz-transition: transform 0.3s ease-out, -moz-transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out, -moz-transform 0.3s ease-out;\r\n  -webkit-transform: translateX(100%);\r\n     -moz-transform: translateX(100%);\r\n          transform: translateX(100%);\r\n  max-width: 300px;\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-align: center;\r\n       align-items: center; /* Center content vertically */\r\n}\r\n\r\n.noti_tick__1zszx {\r\n  background-color: #736294; /* Green color for the tick background */\r\n  color: white;\r\n  padding: 0.3em;\r\n  padding-left: 0.5vw;\r\n  padding-right: 0.5vw;\r\n  margin-right: 0.5vw;\r\n}\r\n\r\n.noti_notification__1NHfs.noti_show__3jdY7 {\r\n  -webkit-transform: translateX(0);\r\n     -moz-transform: translateX(0);\r\n          transform: translateX(0);\r\n}\r\n", "",{"version":3,"sources":["webpack://components/notificationOverlay/noti.module.css"],"names":[],"mappings":"AAAA,oBAAoB;;AAEpB;EACE,eAAe;EACf,UAAU;EACV,SAAS;EACT,yBAAyB;EACzB,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,+CAAuC;UAAvC,uCAAuC;EACvC,mDAAmC;EAAnC,2CAAmC;EAAnC,sEAAmC;EAAnC,mCAAmC;EAAnC,kGAAmC;EACnC,mCAA2B;KAA3B,gCAA2B;UAA3B,2BAA2B;EAC3B,gBAAgB;EAChB,iBAAa;EAAb,aAAa;EACb,sBAAmB;OAAnB,mBAAmB,EAAE,8BAA8B;AACrD;;AAEA;EACE,yBAAyB,EAAE,wCAAwC;EACnE,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,gCAAwB;KAAxB,6BAAwB;UAAxB,wBAAwB;AAC1B","sourcesContent":["/* noti.module.css */\r\n\r\n.notification {\r\n  position: fixed;\r\n  bottom: 5%;\r\n  right: 2%;\r\n  background-color: #311465;\r\n  color: white;\r\n  padding: 0.4vw;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n  transition: transform 0.3s ease-out;\r\n  transform: translateX(100%);\r\n  max-width: 300px;\r\n  display: flex;\r\n  align-items: center; /* Center content vertically */\r\n}\r\n\r\n.tick {\r\n  background-color: #736294; /* Green color for the tick background */\r\n  color: white;\r\n  padding: 0.3em;\r\n  padding-left: 0.5vw;\r\n  padding-right: 0.5vw;\r\n  margin-right: 0.5vw;\r\n}\r\n\r\n.notification.show {\r\n  transform: translateX(0);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"notification": "noti_notification__1NHfs",
	"tick": "noti_tick__1zszx",
	"show": "noti_show__3jdY7"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RpZmljYXRpb25PdmVybGF5L25vdGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uT3ZlcmxheS9ub3RpLm1vZHVsZS5jc3M/YWUxMyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdGF0cy9DaGFydENvbXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uT3ZlcmxheS9ub3RpLm1vZHVsZS5jc3MiXSwibmFtZXMiOlsiTm90aSIsInByb3BzIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInVzZUVmZmVjdCIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNyZWF0ZVBvcnRhbCIsImNsYXNzZXMiLCJub3RpZmljYXRpb24iLCJ0aWNrIiwiZGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJDaGFydENvbXAiLCJjb3VudCIsInNldENvdW50IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibWFpbiIsInVsaXN0IiwibGlzdGl0ZW0iLCJ0b3RhbFBvc3RzIiwibG9zdFBvc3RzIiwiZm91bmRQb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNUQyxPQURTOztBQUd0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFdBQU8sQ0FBQyxJQUFELENBQVA7QUFFQSxRQUFNRSxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQzdCSCxhQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsS0FGdUIs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LGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVkseUJBQXlCLE9BQU8sS0FBSyx3QkFBd0IsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxzRUFBc0Usc0JBQXNCLGlCQUFpQixnQkFBZ0IsZ0NBQWdDLG1CQUFtQixxQkFBcUIseUJBQXlCLDhDQUE4QywwQ0FBMEMsa0NBQWtDLHVCQUF1QixvQkFBb0IsMEJBQTBCLHFDQUFxQyxlQUFlLGdDQUFnQyw2REFBNkQscUJBQXFCLDBCQUEwQiwyQkFBMkIsMEJBQTBCLEtBQUssNEJBQTRCLCtCQUErQixLQUFLLHVCQUF1QjtBQUMvbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhdHMuNzY5ZTViMGE1NWU1ZTY3YzIyYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5vdGkuanNcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL25vdGkubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5jb25zdCBOb3RpID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U2hvdyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93KGZhbHNlKTtcclxuICAgIH0sIDMwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLm5vdGlmaWNhdGlvbn0gJHtzaG93ID8gY2xhc3Nlcy5zaG93IDogXCJcIn1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGlja30+4pyUPC9kaXY+XHJcbiAgICAgIHtwcm9wcy5kYXRhfVxyXG4gICAgPC9kaXY+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJOb3RpZmljYXRpb25cIilcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9ub3RpLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL25vdGkubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL25vdGkubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0NoYXJ0Q29tcC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOb3RpIGZyb20gXCIuLi9ub3RpZmljYXRpb25PdmVybGF5L25vdGlcIjtcclxuaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3RhdHMvY2hhcnRcIjtcclxuY29uc3QgQ2hhcnRDb21wID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCIvYXBpL3N0YXRzL2dldHBvc3RzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldENvdW50KGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZldGNoIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICAgIDxFeGFtcGxlIHBvc3RzY291bnQ9e2NvdW50fSAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnVsaXN0fT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RpdGVtfT5cclxuICAgICAgICAgIDxiPlRvdGFsIFBvc3RlZCBJdGVtczo8L2I+IHtjb3VudC50b3RhbFBvc3RzID8gY291bnQudG90YWxQb3N0cyA6IDEwfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0aXRlbX0+XHJcbiAgICAgICAgICA8Yj5Mb3N0IFBvc3RlZCBJdGVtczo8L2I+IHtjb3VudC50b3RhbFBvc3RzID8gY291bnQubG9zdFBvc3RzIDogN31cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxiPkZvdW5kIFBvc3RlZCBJdGVtczo8L2I+IHtjb3VudC50b3RhbFBvc3RzID8gY291bnQuZm91bmRQb3N0cyA6IDN9XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcblxyXG4vLyAgIGNvbnN0IHBvc3RlZEl0ZW1Db2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIik7XHJcbi8vICAgY29uc3QgdG90YWxQb3N0cyA9IGF3YWl0IHBvc3RlZEl0ZW1Db2xsZWN0aW9uLmNvdW50RG9jdW1lbnRzKCk7XHJcbi8vICAgY29uc29sZS5sb2codG90YWxQb3N0cyk7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IHRvdGFsY291bnQ6IHRvdGFsUG9zdHMgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcDtcclxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogbm90aS5tb2R1bGUuY3NzICovXFxyXFxuXFxyXFxuLm5vdGlfbm90aWZpY2F0aW9uX18xTkhmcyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDUlO1xcclxcbiAgcmlnaHQ6IDIlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMTQ2NTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDAuNHZ3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCAtbW96LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCwgLW1vei10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgY29udGVudCB2ZXJ0aWNhbGx5ICovXFxyXFxufVxcclxcblxcclxcbi5ub3RpX3RpY2tfXzF6c3p4IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzYyOTQ7IC8qIEdyZWVuIGNvbG9yIGZvciB0aGUgdGljayBiYWNrZ3JvdW5kICovXFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAwLjNlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41dnc7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwLjV2dztcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41dnc7XFxyXFxufVxcclxcblxcclxcbi5ub3RpX25vdGlmaWNhdGlvbl9fMU5IZnMubm90aV9zaG93X18zamRZNyB7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL25vdGlmaWNhdGlvbk92ZXJsYXkvbm90aS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9CQUFvQjs7QUFFcEI7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsK0NBQXVDO1VBQXZDLHVDQUF1QztFQUN2QyxtREFBbUM7RUFBbkMsMkNBQW1DO0VBQW5DLHNFQUFtQztFQUFuQyxtQ0FBbUM7RUFBbkMsa0dBQW1DO0VBQ25DLG1DQUEyQjtLQUEzQixnQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixpQkFBYTtFQUFiLGFBQWE7RUFDYixzQkFBbUI7T0FBbkIsbUJBQW1CLEVBQUUsOEJBQThCO0FBQ3JEOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsd0NBQXdDO0VBQ25FLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQ0FBd0I7S0FBeEIsNkJBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBub3RpLm1vZHVsZS5jc3MgKi9cXHJcXG5cXHJcXG4ubm90aWZpY2F0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogNSU7XFxyXFxuICByaWdodDogMiU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzExNDY1O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMC40dnc7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIGNvbnRlbnQgdmVydGljYWxseSAqL1xcclxcbn1cXHJcXG5cXHJcXG4udGljayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2Mjk0OyAvKiBHcmVlbiBjb2xvciBmb3IgdGhlIHRpY2sgYmFja2dyb3VuZCAqL1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMC4zZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xcclxcbiAgcGFkZGluZy1yaWdodDogMC41dnc7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90aWZpY2F0aW9uLnNob3cge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJub3RpZmljYXRpb25cIjogXCJub3RpX25vdGlmaWNhdGlvbl9fMU5IZnNcIixcblx0XCJ0aWNrXCI6IFwibm90aV90aWNrX18xenN6eFwiLFxuXHRcInNob3dcIjogXCJub3RpX3Nob3dfXzNqZFk3XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==