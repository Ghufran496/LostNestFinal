webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\dashboard\\index.js",
    _this = undefined;




var dashboard = function dashboard() {
  var _s = $RefreshSig$();

  var loadFeedbackHandler = function loadFeedbackHandler() {
    _s();

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        isImage = _useState[0],
        setIsImage = _useState[1];

    fetch("/api/post/postitem").then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      console.log(data[9].ReducedImg);
      setIsImage(data[9].ReducedImg);
    });
  };

  _s(loadFeedbackHandler, "Vv4olQ6GzAXrVfFZEWbdIbAVbNU=");

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "I am a Dashboard Component"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: loadFeedbackHandler,
      children: "load data"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (dashboard);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbImRhc2hib2FyZCIsImxvYWRGZWVkYmFja0hhbmRsZXIiLCJ1c2VTdGF0ZSIsImlzSW1hZ2UiLCJzZXRJc0ltYWdlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJSZWR1Y2VkSW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUFBOztBQUFBLG9CQUNGQyxzREFBUSxDQUFDLEVBQUQsQ0FETjtBQUFBLFFBQ3pCQyxPQUR5QjtBQUFBLFFBQ2hCQyxVQURnQjs7QUFFaENDLFNBQUssQ0FBQyxvQkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUcsVUFBcEI7QUFDQVIsZ0JBQVUsQ0FBQ0ssSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRRyxVQUFULENBQVY7QUFDRCxLQU5IO0FBT0QsR0FURDs7QUFEc0IsS0FDaEJYLG1CQURnQjs7QUFZdEIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBUSxhQUFPLEVBQUVBLG1CQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFPRCxDQW5CRDs7O0FBb0NlRCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuZjgxNDQ0NmUwNzI5YmMxM2YyNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBkYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbG9hZEZlZWRiYWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0ltYWdlLCBzZXRJc0ltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YVs5XS5SZWR1Y2VkSW1nKTtcclxuICAgICAgICBzZXRJc0ltYWdlKGRhdGFbOV0uUmVkdWNlZEltZyk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PkkgYW0gYSBEYXNoYm9hcmQgQ29tcG9uZW50PC9kaXY+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17bG9hZEZlZWRiYWNrSGFuZGxlcn0+bG9hZCBkYXRhPC9idXR0b24+XHJcbiAgICAgIHsvKiA8aW1nIHdpZHRoPXsyMDB9IGhlaWdodD17MTAwfT48L2ltZz4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogY29udGV4dC5yZXEgfSk7XHJcblxyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogXCIvYXV0aFwiLFxyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHNlc3Npb24gfSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==