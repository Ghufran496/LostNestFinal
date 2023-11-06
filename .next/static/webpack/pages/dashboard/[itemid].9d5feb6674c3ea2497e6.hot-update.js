webpackHotUpdate_N_E("pages/dashboard/[itemid]",{

/***/ "./components/overlayForm/Form.js":
/*!****************************************!*\
  !*** ./components/overlayForm/Form.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.module.css */ "./components/overlayForm/Form.module.css");
/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Form_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\overlayForm\\Form.js";



function Form(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "question",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.labels,
      children: "Question"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      id: "questionContent",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.span1,
      children: props.data2.Question
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "answer",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.labels,
      children: "Answer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      id: "answer",
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: props.oncancle,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJtYWluIiwibGFiZWxzIiwic3BhbjEiLCJkYXRhMiIsIlF1ZXN0aW9uIiwib25jYW5jbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNuQixzQkFDRTtBQUFNLGFBQVMsRUFBRUMsdURBQU8sQ0FBQ0MsSUFBekI7QUFBQSw0QkFDRTtBQUFPLGFBQU8sRUFBQyxVQUFmO0FBQTBCLGVBQVMsRUFBRUQsdURBQU8sQ0FBQ0UsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQU0sUUFBRSxFQUFDLGlCQUFUO0FBQTJCLGVBQVMsRUFBRUYsdURBQU8sQ0FBQ0csS0FBOUM7QUFBQSxnQkFDR0osS0FBSyxDQUFDSyxLQUFOLENBQVlDO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBTyxhQUFPLEVBQUMsUUFBZjtBQUF3QixlQUFTLEVBQUVMLHVEQUFPLENBQUNFLE1BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFZRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUUsRUFBQyxRQUF0QjtBQUErQixjQUFRO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQWNFO0FBQUEsOEJBQ0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUVILEtBQUssQ0FBQ08sUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7S0F4QlFSLEk7QUEwQk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9baXRlbWlkXS45ZDVmZWI2Njc0YzNlYTI0OTdlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Gb3JtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInF1ZXN0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsc30+XHJcbiAgICAgICAgUXVlc3Rpb25cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxzcGFuIGlkPVwicXVlc3Rpb25Db250ZW50XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW4xfT5cclxuICAgICAgICB7cHJvcHMuZGF0YTIuUXVlc3Rpb259XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW5zd2VyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsc30+XHJcbiAgICAgICAgQW5zd2VyXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYW5zd2VyXCIgcmVxdWlyZWQgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cHJvcHMub25jYW5jbGV9PlxyXG4gICAgICAgICAgQ2xvc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==