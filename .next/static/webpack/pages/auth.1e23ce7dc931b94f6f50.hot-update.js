webpackHotUpdate_N_E("pages/auth",{

/***/ "./components/UI/Error.js":
/*!********************************!*\
  !*** ./components/UI/Error.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Error_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Error.module.css */ "./components/UI/Error.module.css");
/* harmony import */ var _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Error_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\UI\\Error.js";



function Error(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.verticalcenter,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notFound,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.head2,
          children: "Oops! Page Not To Be Found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.para,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Error message:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("u", {
              children: props.errorData
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.linker,
          children: "Back to Homepage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
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

_c = Error;
/* harmony default export */ __webpack_exports__["default"] = (Error);

var _c;

$RefreshReg$(_c, "Error");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9FcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwiY2xhc3NlcyIsInZlcnRpY2FsY2VudGVyIiwiY29udGFpbmVyIiwibm90Rm91bmQiLCJoZWFkMiIsInBhcmEiLCJlcnJvckRhdGEiLCJsaW5rZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsd0RBQU8sQ0FBQ0MsY0FBeEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUQsd0RBQU8sQ0FBQ0UsU0FBeEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVGLHdEQUFPLENBQUNHLFFBQXhCO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFSCx3REFBTyxDQUFDSSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBRUosd0RBQU8sQ0FBQ0ssSUFBdEI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsbUNBQ0U7QUFBQSx3QkFBSU4sS0FBSyxDQUFDTztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQVFFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBWSxtQkFBUyxFQUFFTix3REFBTyxDQUFDTyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEOztLQW5CUVQsSztBQXFCTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC4xZTIzY2U3ZGM5MzFiOTRmNmY1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9FcnJvci5tb2R1bGUuY3NzXCI7XHJcbmZ1bmN0aW9uIEVycm9yKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZlcnRpY2FsY2VudGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RGb3VuZH0+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWQyfT5Pb3BzISBQYWdlIE5vdCBUbyBCZSBGb3VuZDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucGFyYX0+XHJcbiAgICAgICAgICAgIDxiPkVycm9yIG1lc3NhZ2U6PC9iPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgIDx1Pntwcm9wcy5lcnJvckRhdGF9PC91PlxyXG4gICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtlcn0+XHJcbiAgICAgICAgICAgIEJhY2sgdG8gSG9tZXBhZ2VcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==